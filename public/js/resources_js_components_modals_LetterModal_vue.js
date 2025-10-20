(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_modals_LetterModal_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modals/LetterModal.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modals/LetterModal.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/auth.service */ "./resources/js/services/auth.service.js");
/* harmony import */ var _services_ebapis_service_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/ebapis.service.js */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _services_credit_service_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/credit.service.js */ "./resources/js/services/credit.service.js");
/* harmony import */ var _services_recouvrement_service_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/recouvrement.service.js */ "./resources/js/services/recouvrement.service.js");
/* harmony import */ var _services_cofina_lettersTemplateSelector_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/cofina/lettersTemplateSelector.js */ "./resources/js/services/cofina/lettersTemplateSelector.js");
/* harmony import */ var _shared_widgets_subtable_ST1_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/widgets/subtable/ST1.vue */ "./resources/js/components/shared/widgets/subtable/ST1.vue");
/* harmony import */ var _shared_recouvrement_LetterOff_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/recouvrement/LetterOff.vue */ "./resources/js/components/shared/recouvrement/LetterOff.vue");
/* harmony import */ var _modals_RelanceLetter_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modals/RelanceLetter.vue */ "./resources/js/components/modals/RelanceLetter.vue");
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _services_recouvremnt_letter_maping_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/recouvremnt_letter_maping.js */ "./resources/js/services/recouvremnt_letter_maping.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), c(GeneratorFunctionPrototype, u, GeneratorFunction.displayName = "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }










/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "LetterModal",
  components: {
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_9__.PlusIcon,
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_9__.TrashIcon,
    ST1: _shared_widgets_subtable_ST1_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    RelanceLetter: _modals_RelanceLetter_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    LetterOff: _shared_recouvrement_LetterOff_vue__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  props: {
    dossier_credit: Object,
    authcheckUsr: Object
  },
  data: function data() {
    return {
      intervalAutosavingTb: null,
      ebapisHost: _services_ebapis_service_js__WEBPACK_IMPORTED_MODULE_1__["default"].host,
      ligneSelected: {},
      meta_data: {},
      tb_name: "",
      tbArrays: [],
      lignes_selectionnees: [],
      dossierCredit: null,
      decharges_data: null,
      sampleLetter: null,
      event_phase_relance: null,
      is_caution: null,
      event_letter_relance_index: null,
      transmission_en_cours: false,
      mail_existe: true,
      email_client: null,
      in_store_email: false,
      is_partof: null,
      openAccordion: 1,
      currentOpenIndex: null,
      chargement_letter: true,
      email_caution: [{
        email: "",
        phone: "",
        nom_prenoms: ""
      }],
      formDataToBeWatched: {
        cautionnement_solidaires: [],
        email_client: ""
      },
      firt_launch: false
    };
  },
  mounted: function mounted() {
    var _this = this;
    if (this.dossier_credit) {
      this.handleDossierCredit(this.dossier_credit);
    }
    EventBus.$on("phase-relance-data", function (_phaseRelance) {
      _this.event_phase_relance = _phaseRelance;
      console.log("event_phase_relance >>>", _this.event_phase_relance);
      _this.openAccordion = 1;
      _this.sampleLetter = _this.getSampleLetterToSend(_this.event_phase_relance);
    });
    EventBus.$on("letter-relance-index", function (_letterRelanceIndex) {
      _this.event_letter_relance_index = _letterRelanceIndex;
    });
    EventBus.$on("meta-data", function (_meta_data) {
      _this.meta_data = _meta_data;
    });
    EventBus.$on("meta-is-caution", function (_is_caution) {
      _this.is_caution = _is_caution;
    });
  },
  created: function created() {},
  methods: {
    handleInput: function handleInput() {
      // console.log("fiche_suivi");
      this.formDataToBeWatched.cautionnement_solidaires = this.email_caution;
      // this.formDataToBeWatched.email_client = fiche_suivi?.id - 1
      // fiche_suivi.content.sender = this.user
    },
    send2Backend: function send2Backend(newVal, oldVal) {
      var _this$dossier_credit;
      //true
      this.in_store_email = true;

      // console.log("send2Backend *************");
      this.$emit("autosaving");
      this.$axios.post(this.ebapisHost + "creditbuilder/api/v1/autosaving-one-key-data/", {
        cred_pub_key: (_this$dossier_credit = this.dossier_credit) === null || _this$dossier_credit === void 0 ? void 0 : _this$dossier_credit.cred_pub_key,
        data: {
          recoveryiq_receivers_emails: newVal
        }
      }).then(function (response) {
        this.$emit("autosaving");
        var tbFetcheData = response.data;
        //false
        this.in_store_email = false;
      }.bind(this))["catch"](function (error) {
        this.$Progress.finish();
        console.log(error);
      }.bind(this));
    },
    toggleState: function toggleState(key, val) {
      var data = _objectSpread({}, this.state);
      data[key] = val;
      this.state = data;
    },
    loadRetrieved: function loadRetrieved() {
      var createdKey = "recoveryiq_receivers_emails";
      if (["", null, undefined].includes(this.dossier_credit[createdKey])) {
        var _this$dossier_credit2, _this$dossier_credit3, _this$dossier_credit4, _this$dossier_credit5;
        var email = (_this$dossier_credit2 = this.dossier_credit) === null || _this$dossier_credit2 === void 0 || (_this$dossier_credit2 = _this$dossier_credit2[this.determineCredPubTables((_this$dossier_credit3 = this.dossier_credit) === null || _this$dossier_credit3 === void 0 ? void 0 : _this$dossier_credit3.applied_templ_name)[0]]) === null || _this$dossier_credit2 === void 0 ? void 0 : _this$dossier_credit2.email_client;
        var cautions = (_this$dossier_credit4 = this.dossier_credit) === null || _this$dossier_credit4 === void 0 || (_this$dossier_credit4 = _this$dossier_credit4[this.determineCredPubTables((_this$dossier_credit5 = this.dossier_credit) === null || _this$dossier_credit5 === void 0 ? void 0 : _this$dossier_credit5.applied_templ_name)[4]]) === null || _this$dossier_credit4 === void 0 ? void 0 : _this$dossier_credit4.cautionnement_solidaires;
        if (!["", null, undefined].includes(email)) {
          this.formDataToBeWatched.email_client = email;
        }
        if (!["", null, undefined].includes(cautions) && cautions.length > 0) {
          var old_caution = [];
          cautions.map(function (caution) {
            return old_caution.push({
              email: "",
              phone: caution.numero_tel_caution_solidaire,
              nom_prenoms: caution.nom_prenoms
            });
          });
          this.email_caution = old_caution;
        }
        this.handleInput();
      } else {
        this.formDataToBeWatched = this.dossier_credit[createdKey];
        if (!["", null, undefined].includes(this.dossier_credit[createdKey]["cautionnement_solidaires"]) && this.dossier_credit[createdKey]["cautionnement_solidaires"].length > 0) {
          this.email_caution = this.dossier_credit[createdKey]["cautionnement_solidaires"];
        }
      }
    },
    addMoreCaution: function addMoreCaution() {
      var lastCaution = this.email_caution[this.email_caution.length - 1].email;
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lastCaution)) {
        this.$toasted.show("Veuillez saisir une adresse email valide pour la caution précédente !");
        return;
      }
      this.email_caution.push({
        email: "",
        phone: "",
        nom_prenoms: ""
      });
      this.handleInput();
    },
    removeCaution: function removeCaution(index) {
      this.email_caution.splice(index, 1);
      this.handleInput();
    },
    returnLeterTitle: function returnLeterTitle(slug) {
      // console.log("slug", slug);
      // console.log("LETTERS_MAPING", LETTERS_MAPING);
      var letre = _services_recouvremnt_letter_maping_js__WEBPACK_IMPORTED_MODULE_8__.LETTERS_MAPING.find(function (letter) {
        return letter.slug == slug;
      });
      // console.log("letre", letre);
      // return letre.title;
      return letre ? letre.title : "Titre non trouvé";
    },
    toggleAccordions: function toggleAccordions(index) {
      if (this.currentOpenIndex === index) {
        // Si l'élément cliqué est déjà ouvert, fermez-le
        this.currentOpenIndex = null;
      } else {
        // Sinon, ouvrez l'élément cliqué
        this.currentOpenIndex = index;
      }
    },
    toggleAccordion: function toggleAccordion(index) {
      this.openAccordion = this.openAccordion === index ? null : index;
    },
    getPretInfo: function getPretInfo() {
      var _this$dossier_credit6,
        _this$dossier_credit7,
        _this2 = this;
      if (((_this$dossier_credit6 = this.dossier_credit) === null || _this$dossier_credit6 === void 0 ? void 0 : _this$dossier_credit6.cred_pub_tb_3000) != undefined && ((_this$dossier_credit7 = this.dossier_credit) === null || _this$dossier_credit7 === void 0 || (_this$dossier_credit7 = _this$dossier_credit7.cred_pub_tb_3000) === null || _this$dossier_credit7 === void 0 ? void 0 : _this$dossier_credit7.numero_pret) != undefined) {
        var _this$dossier_credit8;
        // this.loadPrets = true;numero_pret
        var numero_pret = (_this$dossier_credit8 = this.dossier_credit) === null || _this$dossier_credit8 === void 0 || (_this$dossier_credit8 = _this$dossier_credit8.cred_pub_tb_3000) === null || _this$dossier_credit8 === void 0 ? void 0 : _this$dossier_credit8.numero_pret;
        // console.log("#---numero_pret---#",numero_pret);

        _services_recouvrement_service_js__WEBPACK_IMPORTED_MODULE_3__["default"].get_decharges_data_mango({
          numero_pret: numero_pret
        }).then(function (res) {
          _this2.dechargesData(res);
        })["catch"](function (err) {
          console.error(err);
        });
      }
    },
    getSampleLetterToSend: function getSampleLetterToSend(slug) {
      var data = _services_cofina_lettersTemplateSelector_js__WEBPACK_IMPORTED_MODULE_4__.LETTERS_TEMPLATE_SELECTOR;
      var letter = data.reduce(function (acc, curr) {
        var foundLetter = curr.letters.find(function (letter) {
          return letter.slug === slug;
        });
        return foundLetter ? foundLetter.sample_letter_to_send : acc;
      }, null);
      return letter;
    },
    handleDossierCredit: function handleDossierCredit(dossier) {
      this.getPretInfo();
    },
    dechargesData: function dechargesData(res) {
      var _res$data$0$ligne_de_, _res$data;
      this.decharges_data = (_res$data$0$ligne_de_ = (_res$data = res.data) === null || _res$data === void 0 ? void 0 : _res$data[0].ligne_de_credits) !== null && _res$data$0$ligne_de_ !== void 0 ? _res$data$0$ligne_de_ : [];
      // console.log("***********decharges_data******",decharges_data);

      this.chargement_letter = false;
    },
    SendNototification: function SendNototification() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var dureeimp, nombre_echeance, date_premiere_echeance, date_fin_echeance, encours_sain, encours_impaye, capital_paye, montant_echeance, _this3$dossier_credit, formData, res, _res$message, errorMessage;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              dureeimp = _this3.decharges_data[0].nb_jrs_retard;
              nombre_echeance = _this3.decharges_data[0].nombre_echeance;
              date_premiere_echeance = _this3.decharges_data[0].date_premiere_echeance;
              date_fin_echeance = _this3.decharges_data[0].date_fin_echeance;
              encours_sain = _this3.decharges_data[0].encours_sain;
              encours_impaye = _this3.decharges_data[0].encours_impaye;
              capital_paye = _this3.decharges_data[0].capital_paye;
              montant_echeance = _this3.decharges_data[0].montant_echeance;
              _this3.decharges_data[0].dureeimp = dureeimp;
              _this3.decharges_data[0].nbrech = nombre_echeance;
              _this3.decharges_data[0].datepremech = date_premiere_echeance;
              _this3.decharges_data[0].datefinech = date_fin_echeance;
              _this3.decharges_data[0].encoursain = encours_sain;
              _this3.decharges_data[0].encourimp = encours_impaye;
              _this3.decharges_data[0].capitaldep = capital_paye;
              _this3.decharges_data[0].montech = montant_echeance;
              _this3.transmission_en_cours = true;
              if (!_this3.email_controle()) {
                _context.next = 36;
                break;
              }
              formData = {
                cred_pub_key: (_this3$dossier_credit = _this3.dossier_credit) === null || _this3$dossier_credit === void 0 ? void 0 : _this3$dossier_credit.cred_pub_key,
                decharges_data: _this3.decharges_data,
                user: _this3.authcheckUsr,
                selected_letter_data: {
                  slug: _this3.event_phase_relance
                },
                report_number: _this3.event_letter_relance_index,
                report_name: _this3.event_phase_relance,
                type_notification: "manuel",
                filiale: _this3.authcheckUsr.filiale
              };
              _context.next = 21;
              return _services_recouvrement_service_js__WEBPACK_IMPORTED_MODULE_3__["default"].notifyClient(formData);
            case 21:
              res = _context.sent;
              if (res !== null && res !== void 0 && res.is_success) {
                _context.next = 29;
                break;
              }
              _this3.toggleState("date", "ERROR");
              errorMessage = (_res$message = res === null || res === void 0 ? void 0 : res.message) !== null && _res$message !== void 0 ? _res$message : "Une erreur s'est produite. Veuillez réessayer";
              _this3.toggleState("date" + "_error", errorMessage);
              _this3.$toasted.show(errorMessage);
              _this3.transmission_en_cours = false;
              return _context.abrupt("return");
            case 29:
              _this3.transmission_en_cours = false;
              _this3.$modal.hide("letter_modal");
              _this3.mail_existe = true;
              _this3.$toasted.show("Lettre de relance transmis");
              EventBus.$emit("value-updated");
              _context.next = 39;
              break;
            case 36:
              _this3.transmission_en_cours = false;
              _this3.$toasted.show("Adresse email invalide !");
              _this3.openAccordion = 2;
              // this.toggleAccordion(2);
            case 39:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    verify_if_mail_exist: function verify_if_mail_exist() {
      var _this$dossier_credit9, _this$meta_data$dossi, _this$meta_data$dossi2, _this$meta_data$dossi3, _this$meta_data$dossi4;
      var tbArrays = this.determineCredPubTables((_this$dossier_credit9 = this.dossier_credit) === null || _this$dossier_credit9 === void 0 ? void 0 : _this$dossier_credit9.applied_templ_name);
      var _email_client = (_this$meta_data$dossi = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi === void 0 || (_this$meta_data$dossi = _this$meta_data$dossi[tbArrays[0]]) === null || _this$meta_data$dossi === void 0 ? void 0 : _this$meta_data$dossi.email_client;
      var email_caution = (_this$meta_data$dossi2 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi2 === void 0 || (_this$meta_data$dossi2 = _this$meta_data$dossi2[tbArrays[4]]) === null || _this$meta_data$dossi2 === void 0 ? void 0 : _this$meta_data$dossi2.cautionnement_solidaires;
      var email_recoveryiq_client = (_this$meta_data$dossi3 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi3 === void 0 || (_this$meta_data$dossi3 = _this$meta_data$dossi3.recoveryiq_receivers_emails) === null || _this$meta_data$dossi3 === void 0 ? void 0 : _this$meta_data$dossi3.email_client;
      var email_recoveryiq_caution = (_this$meta_data$dossi4 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi4 === void 0 || (_this$meta_data$dossi4 = _this$meta_data$dossi4.recoveryiq_receivers_emails) === null || _this$meta_data$dossi4 === void 0 ? void 0 : _this$meta_data$dossi4.cautionnement_solidaires;
      //verifier si c'est une caution
      if (["LETTRE_INFORMATION_A_LA_CAUTION_AGENCE", "LETTRE_INFORMATION_A_LA_CAUTION_CDR", "LETTRE_DE_PRESENTATION_DE_BIEN_GAGE"].includes(this.event_phase_relance)) {
        var _this$email_caution;
        this.is_caution = true;
        if ((!email_caution || email_caution.length == 0 || ["", null, undefined].includes(email_caution.length)) && (!email_recoveryiq_caution || email_recoveryiq_caution.length == 0 || ["", null, undefined].includes(email_recoveryiq_caution.length)) && (!this.email_caution || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test((_this$email_caution = this.email_caution[this.email_caution.length - 1]) === null || _this$email_caution === void 0 ? void 0 : _this$email_caution.email))) {
          this.mail_existe = false;
          this.transmission_en_cours = false;
          this.$toasted.show("Veuillez saisir l'adresse email caution");
          return;
        }
      } else {
        this.is_caution = false;

        //verifier si le email existe
        if (["", null, undefined].includes(_email_client) && ["", null, undefined].includes(email_recoveryiq_client) && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email_client)) {
          this.mail_existe = false;
          this.transmission_en_cours = false;
          this.$toasted.show("Veuillez saisir l'adresse email pas caution");
          return;
        }
        this.email_client = this.email_client || email_recoveryiq_client || _email_client;
      }

      // console.log("#---mail_existe---#", this.mail_existe);
    },
    email_controle: function email_controle() {
      if (this.is_caution == true) {
        this.is_partof = "caution_solidaire";
        if (this.formDataToBeWatched.cautionnement_solidaires && this.formDataToBeWatched.cautionnement_solidaires.length > 0) {
          var _iterator = _createForOfIteratorHelper(this.formDataToBeWatched.cautionnement_solidaires),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var element = _step.value;
              if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(element.email)) {
                this.transmission_en_cours = false;
                return false;
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        } else {
          return false;
        }
      } else {
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.formDataToBeWatched.email_client)) {
          this.transmission_en_cours = false;
          return false;
        }
        this.is_partof = "email_client";
      }
      return true;
    },
    saveRecoveryEmail: function saveRecoveryEmail() {
      var _this$dossier_credit0,
        _this4 = this;
      if (this.is_caution == true) {
        this.is_partof = "caution_solidaire";
        this.email_client = "";
        var _iterator2 = _createForOfIteratorHelper(this.email_caution),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var element = _step2.value;
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(element.email)) {
              this.$toasted.show("Adresse email invalide !. Cautionnement solidaire");
              return;
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      } else {
        this.email_caution = [{
          email: "",
          phone: "",
          nom_prenoms: ""
        }];
        this.is_partof = "email_client";
      }
      if (this.is_partof === "email_client") {
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email_client)) {
          this.$toasted.show("Adresse email invalide !");
          return;
        }
      }
      var EBAPIS_URL = this.ebapisHost;
      var ENDPOINT = "loaniq/api/";
      var VERSION = "v1/";
      var API_URL = "".concat(EBAPIS_URL).concat(ENDPOINT).concat(VERSION);
      var url = "".concat(API_URL, "save-receivers-emails/");
      var formatData = {
        cred_pub_key: (_this$dossier_credit0 = this.dossier_credit) === null || _this$dossier_credit0 === void 0 ? void 0 : _this$dossier_credit0.cred_pub_key,
        part_of: this.is_partof,
        user: this.authcheckUsr
      };
      if (this.is_partof === "caution_solidaire") {
        formatData["cautionnement_solidaires"] = this.email_caution;
      }
      if (this.is_partof === "email_client") {
        formatData["email_client"] = this.email_client;
      }
      // console.log("la le update : ", formatData);

      this.$axios.post(url, formatData).then(function (response) {
        var data = response.data;
        if (!(data !== null && data !== void 0 && data.is_success)) {
          _this4.$toasted.show("Une erreur s'est produite. Veuillez réessayer");
          return;
        }
        _this4.btnVisibility = true;
        var dataToBeSend = null;
        if (_this4.is_partof === "caution_solidaire") {
          var _data$data;
          dataToBeSend = data === null || data === void 0 || (_data$data = data.data) === null || _data$data === void 0 ? void 0 : _data$data.cautionnement_solidaires;
          EventBus.$emit("cautions-email", dataToBeSend);
        }
        if (_this4.is_partof === "email_client") {
          var _data$data2;
          dataToBeSend = data === null || data === void 0 || (_data$data2 = data.data) === null || _data$data2 === void 0 ? void 0 : _data$data2.email_client;
          EventBus.$emit("customer-email", dataToBeSend);
        }

        // this.loadDefautData();
        _this4.mail_existe = true;
        _this4.$toasted.show("Les informations ont bien été enregistrées", {
          duration: 2000
        });
        EventBus.$emit("value-updated");
      })["catch"](function (error) {
        console.warn("Oh. Something went wrong", error);
      });
    },
    formatDate: function formatDate(isoDate) {
      var date = new Date(isoDate);

      // Récupération des composants de la date
      var jour = date.getUTCDate().toString().padStart(2, '0');
      var mois = (date.getUTCMonth() + 1).toString().padStart(2, '0'); // Les mois commencent à 0
      var annee = date.getUTCFullYear();

      // Récupération des composants de l'heure
      var heures = date.getUTCHours().toString().padStart(2, '0');
      var minutes = date.getUTCMinutes().toString().padStart(2, '0');
      return "".concat(jour, "/").concat(mois, "/").concat(annee, " \xE0 ").concat(heures, "h").concat(minutes);
    }
  },
  watch: {
    dossier_credit: {
      handler: function handler(newVal) {
        if (newVal) {
          this.handleDossierCredit(newVal);
          if (this.firt_launch == false) {
            this.firt_launch = true;
            this.loadRetrieved();
          }
        }
      },
      immediate: true,
      deep: true
    },
    formDataToBeWatched: {
      handler: function handler(newVal, oldVal) {
        var _this$dossier_credit1,
          _this5 = this;
        if (this.intervalAutosavingTb != null) {
          clearTimeout(this.intervalAutosavingTb);
        }
        if ((_this$dossier_credit1 = this.dossier_credit) !== null && _this$dossier_credit1 !== void 0 && _this$dossier_credit1.cred_pub_key) {
          this.intervalAutosavingTb = setTimeout(function () {
            _this5.send2Backend(newVal, oldVal);
          }, 1000);
        }
      },
      deep: true,
      immediate: true
    }
  },
  computed: {
    historique_lettre: function historique_lettre() {
      var _this$dossier_credit10;
      var historique_lettre = (_this$dossier_credit10 = this.dossier_credit) === null || _this$dossier_credit10 === void 0 ? void 0 : _this$dossier_credit10.historique_lettre;
      return historique_lettre;
    },
    historique_relance: function historique_relance() {
      var _this$dossier_credit$, _this$dossier_credit11;
      return (_this$dossier_credit$ = (_this$dossier_credit11 = this.dossier_credit) === null || _this$dossier_credit11 === void 0 ? void 0 : _this$dossier_credit11.recovery_reminders) !== null && _this$dossier_credit$ !== void 0 ? _this$dossier_credit$ : [];
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modals/RelanceLetter.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modals/RelanceLetter.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/auth.service */ "./resources/js/services/auth.service.js");
/* harmony import */ var _services_ebapis_service_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/ebapis.service.js */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _services_credit_service_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/credit.service.js */ "./resources/js/services/credit.service.js");
/* harmony import */ var _public_tampons_COFINA_tampon_cofina_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../public/tampons/COFINA/tampon_cofina.jpg */ "./public/tampons/COFINA/tampon_cofina.jpg");
/* harmony import */ var _public_tampons_COFINA_tampon_cofina_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_tampons_COFINA_tampon_cofina_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_cofina_lettersTemplateSelector_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/cofina/lettersTemplateSelector.js */ "./resources/js/services/cofina/lettersTemplateSelector.js");
/* harmony import */ var _services_recouvremnt_letter_maping_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/recouvremnt_letter_maping.js */ "./resources/js/services/recouvremnt_letter_maping.js");
/* harmony import */ var _shared_widgets_subtable_ST1_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/widgets/subtable/ST1.vue */ "./resources/js/components/shared/widgets/subtable/ST1.vue");
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");








/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "RelanceLetter",
  components: {
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.PlusIcon,
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.TrashIcon,
    ST1: _shared_widgets_subtable_ST1_vue__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  props: {
    event_phase_relance: String,
    dossier_credit: Object,
    decharges_data: Object,
    authcheckUsr: Object,
    is_caution: Boolean
  },
  data: function data() {
    return {
      ligneSelected: {},
      meta_data: {},
      tb_name: "",
      lignes_selectionnees: [],
      dossierCredit: null,
      sampleLetter: null,
      // authcheckUsr:null,
      img: (_public_tampons_COFINA_tampon_cofina_jpg__WEBPACK_IMPORTED_MODULE_3___default()),
      nombre_vehicules: "",
      denomination_caution: ""
    };
  },
  mounted: function mounted() {
    this.determineNbVehicule();
  },
  created: function created() {
    // const res = await Auth.loadUserData()
    // this.authcheckUsr = res.data;
  },
  computed: {
    agenceRoot: function agenceRoot() {
      var _this$dossier_credit;
      return ((_this$dossier_credit = this.dossier_credit) === null || _this$dossier_credit === void 0 || (_this$dossier_credit = _this$dossier_credit.caf_recorded_file) === null || _this$dossier_credit === void 0 ? void 0 : _this$dossier_credit.codeagence) || '';
    },
    date_demande_formated: function date_demande_formated() {
      var _this$determineCredPu, _this$dossier_credit2;
      return (_this$determineCredPu = this.determineCredPubTables((_this$dossier_credit2 = this.dossier_credit) === null || _this$dossier_credit2 === void 0 ? void 0 : _this$dossier_credit2.applied_templ_name)[0]) === null || _this$determineCredPu === void 0 ? void 0 : _this$determineCredPu.date_demande;
    },
    getFiliale: function getFiliale() {
      return this.getFilialeByCode(this.authcheckUsr.filiale);
    },
    getPaysInfo: function getPaysInfo() {
      var _this$dossier_credit3;
      var numeroDossier = (_this$dossier_credit3 = this.dossier_credit) === null || _this$dossier_credit3 === void 0 ? void 0 : _this$dossier_credit3.numero_dossier;
      var mapping = {
        "CFNCIV": {
          "lib": "la Compagnie Financière Africaine (COFINA CIV)",
          "code": "COFINA CIV",
          "root": "CFNCIV",
          "indicatif": "+225",
          "capitale": "Abidjan"
        },
        "CFNTG": {
          "lib": "la Compagnie Financière Africaine (COFINA TG)",
          "code": "COFINA TG",
          "root": "CFNTG",
          "indicatif": "+228",
          "capitale": "Lomé"
        },
        "CFNML": {
          "lib": "la Compagnie Financière Africaine (COFINA ML)",
          "code": "COFINA ML",
          "root": "CFNML",
          "indicatif": "+223",
          "capitale": "Bamako"
        },
        "CFNCG": {
          "lib": "la Compagnie Financière Africaine (COFINA CG)",
          "code": "COFINA CG",
          "root": "CFNCG",
          "indicatif": "+242",
          "capitale": "Brazzaville"
        },
        "CFNGB": {
          "lib": "la Compagnie Financière Africaine (COFINA GA)",
          "code": "COFINA GA",
          "root": "CFNGB",
          "indicatif": "+241",
          "capitale": "Libreville"
        },
        "FINL": {
          "lib": "FINELLE",
          "code": "FINL",
          "root": "FINL",
          "indicatif": "+225",
          "capitale": "Abidjan"
        }
      };
      for (var key in mapping) {
        if (numeroDossier.includes(key)) {
          return mapping[key];
        }
      }
      return mapping["CFNCIV"]; // Valeur par défaut (Côte d'Ivoire)
    },
    tamponDynamique: function tamponDynamique() {
      var _this$getPaysInfo;
      var paysRoot = ((_this$getPaysInfo = this.getPaysInfo) === null || _this$getPaysInfo === void 0 ? void 0 : _this$getPaysInfo.root) || 'CFNCIV';
      var agenceRoot = this.agenceRoot;
      var envKey = "MIX_VUE_APP_TAMPON_AGENCE_".concat(paysRoot);
      var envVariables = _services_recouvremnt_letter_maping_js__WEBPACK_IMPORTED_MODULE_5__.AGENCY_TAMPONS_ENV;
      var envValue = envVariables["MIX_VUE_APP_TAMPON_AGENCE_".concat(paysRoot)] || 'false';
      var isAgenceAutorisee = envValue === 'true' || envValue === true;
      console.log('Debug:', {
        paysRoot: paysRoot,
        agenceRoot: agenceRoot,
        envKey: envKey,
        envValue: envValue,
        isAgenceAutorisee: isAgenceAutorisee
      });
      var isLetterAllowedForAgencyStamp = _services_recouvremnt_letter_maping_js__WEBPACK_IMPORTED_MODULE_5__.ALLOWED_LETTERS_FOR_AGENCY_STAMP.includes(this.event_phase_relance);
      if (isAgenceAutorisee && agenceRoot && isLetterAllowedForAgencyStamp) {
        return "/tampons/COFINA/".concat(paysRoot, "/").concat(agenceRoot, "/tampon.png");
      }
      return "/tampons/COFINA/".concat(paysRoot, "/tampon.png");
    },
    chefAgence: function chefAgence() {
      var _this$dossier_credit4;
      var data_skeleton = (_this$dossier_credit4 = this.dossier_credit) === null || _this$dossier_credit4 === void 0 || (_this$dossier_credit4 = _this$dossier_credit4.cred_pub_tb_00) === null || _this$dossier_credit4 === void 0 ? void 0 : _this$dossier_credit4.new_actors_recovery;
      return data_skeleton === null || data_skeleton === void 0 ? void 0 : data_skeleton.chef_agence;
    },
    responsableRecovery: function responsableRecovery() {
      var _this$dossier_credit5;
      var data_skeleton = (_this$dossier_credit5 = this.dossier_credit) === null || _this$dossier_credit5 === void 0 || (_this$dossier_credit5 = _this$dossier_credit5.cred_pub_tb_00) === null || _this$dossier_credit5 === void 0 || (_this$dossier_credit5 = _this$dossier_credit5.new_actors_recovery) === null || _this$dossier_credit5 === void 0 ? void 0 : _this$dossier_credit5.recovery_team1;
      return data_skeleton === null || data_skeleton === void 0 ? void 0 : data_skeleton.responsable;
    }
  },
  methods: {
    formatDate: function formatDate(date) {
      var options = {
        year: "numeric",
        month: "numeric",
        day: "numeric"
      };
      return new Date(date).toLocaleDateString("fr", options);
    },
    convertir_date_echeance: function convertir_date_echeance(dateStr) {
      var date = new Date(dateStr);
      var day = String(date.getDate()).padStart(2, '0');
      var month = String(date.getMonth() + 1).padStart(2, '0'); // Les mois commencent à 0
      var year = date.getFullYear();
      return "".concat(day, "/").concat(month, "/").concat(year);
    },
    determineNbVehicule: function determineNbVehicule() {
      var _this$dossier_credit6, _this$dossier_credit7;
      var tb_4 = this.determineCredPubTables((_this$dossier_credit6 = this.dossier_credit) === null || _this$dossier_credit6 === void 0 ? void 0 : _this$dossier_credit6.applied_templ_name)[4];
      var gages = (_this$dossier_credit7 = this.dossier_credit) === null || _this$dossier_credit7 === void 0 || (_this$dossier_credit7 = _this$dossier_credit7[tb_4]) === null || _this$dossier_credit7 === void 0 ? void 0 : _this$dossier_credit7.gages;
      var vehicules = [];
      if ([null, undefined].includes(gages) && (gages === null || gages === void 0 ? void 0 : gages.length) > 0) {
        vehicules = gages.filter(function (el) {
          return el.bien_a_gage == "Véhicule";
        });
      }
      this.nombre_vehicules = vehicules.length;
      return this.nombre_vehicules;
    },
    convertNumber: function convertNumber(valeur) {
      return Number(String(valeur).replace(/\s+/g, ""));
    },
    arrondirMontantEntier: function arrondirMontantEntier(montant) {
      return Math.floor(montant);
    }
  },
  watch: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/recouvrement/LetterOff.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/recouvrement/LetterOff.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_recouvremnt_letter_maping_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/recouvremnt_letter_maping.js */ "./resources/js/services/recouvremnt_letter_maping.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "LetterOff",
  props: {
    historique: Object,
    authcheckUsr: Object,
    dossier_credit: Object,
    guarantees: {
      type: Object,
      required: false,
      "default": function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      // loadingOffView: true
    };
  },
  mounted: function mounted() {},
  computed: {
    historique_lettre: function historique_lettre() {
      var _this$dossier_credit;
      var historique_lettre = (_this$dossier_credit = this.dossier_credit) === null || _this$dossier_credit === void 0 ? void 0 : _this$dossier_credit.historique_lettre;
      return historique_lettre;
    },
    getFiliale: function getFiliale() {
      return this.getFilialeByCode(this.authcheckUsr.filiale);
    },
    getPaysInfo: function getPaysInfo() {
      var _this$historique;
      var numeroDossier = (_this$historique = this.historique) === null || _this$historique === void 0 || (_this$historique = _this$historique.letter_data) === null || _this$historique === void 0 || (_this$historique = _this$historique.sender_info) === null || _this$historique === void 0 ? void 0 : _this$historique.filiale;
      var mapping = {
        "CFN CIV": {
          "lib": "la Compagnie Financière Africaine (COFINA CIV)",
          "code": "COFINA CIV",
          "root": "CFNCIV",
          "indicatif": "+225",
          "capitale": "Abidjan"
        },
        "CFN TG": {
          "lib": "la Compagnie Financière Africaine (COFINA TG)",
          "code": "COFINA TG",
          "root": "CFNTG",
          "indicatif": "+228",
          "capitale": "Lomé"
        },
        "CFN ML": {
          "lib": "la Compagnie Financière Africaine (COFINA ML)",
          "code": "COFINA ML",
          "root": "CFNML",
          "indicatif": "+223",
          "capitale": "Bamako"
        },
        "CFN CG": {
          "lib": "la Compagnie Financière Africaine (COFINA CG)",
          "code": "COFINA CG",
          "root": "CFNCG",
          "indicatif": "+242",
          "capitale": "Brazzaville"
        },
        "CFN GB": {
          "lib": "la Compagnie Financière Africaine (COFINA GA)",
          "code": "COFINA GA",
          "root": "CFNGB",
          "indicatif": "+241",
          "capitale": "Libreville"
        },
        "FINL": {
          "lib": "FINELLE",
          "code": "FINL",
          "root": "FINL",
          "indicatif": "+225",
          "capitale": "Abidjan"
        }
      };
      for (var key in mapping) {
        if (numeroDossier.includes(key)) {
          return mapping[key];
        }
      }
      return mapping["CFN CIV"]; // Valeur par défaut (Côte d'Ivoire)
    },
    agenceRoot: function agenceRoot() {
      var _this$dossier_credit2;
      return ((_this$dossier_credit2 = this.dossier_credit) === null || _this$dossier_credit2 === void 0 || (_this$dossier_credit2 = _this$dossier_credit2.caf_recorded_file) === null || _this$dossier_credit2 === void 0 ? void 0 : _this$dossier_credit2.codeagence) || '';
    },
    tamponDynamique: function tamponDynamique() {
      var _this$getPaysInfo, _this$historique2;
      var paysRoot = ((_this$getPaysInfo = this.getPaysInfo) === null || _this$getPaysInfo === void 0 ? void 0 : _this$getPaysInfo.root) || 'CFNCIV';
      var agenceRoot = this.agenceRoot;
      var envKey = "MIX_VUE_APP_TAMPON_AGENCE_".concat(paysRoot);
      var envVariables = _services_recouvremnt_letter_maping_js__WEBPACK_IMPORTED_MODULE_0__.AGENCY_TAMPONS_ENV;
      var envValue = envVariables["MIX_VUE_APP_TAMPON_AGENCE_".concat(paysRoot)] || 'false';
      var isAgenceAutorisee = envValue === 'true' || envValue === true;
      console.log('Debug:', {
        paysRoot: paysRoot,
        agenceRoot: agenceRoot,
        envKey: envKey,
        envValue: envValue,
        isAgenceAutorisee: isAgenceAutorisee
      });
      var isLetterAllowedForAgencyStamp = _services_recouvremnt_letter_maping_js__WEBPACK_IMPORTED_MODULE_0__.ALLOWED_LETTERS_FOR_AGENCY_STAMP.includes((_this$historique2 = this.historique) === null || _this$historique2 === void 0 || (_this$historique2 = _this$historique2.letter_data) === null || _this$historique2 === void 0 ? void 0 : _this$historique2.letter_slug);
      if (isAgenceAutorisee && agenceRoot && isLetterAllowedForAgencyStamp) {
        return "/tampons/COFINA/".concat(paysRoot, "/").concat(agenceRoot, "/tampon.png");
      }
      return "/tampons/COFINA/".concat(paysRoot, "/tampon.png");
    }
  },
  methods: _defineProperty({
    returnLeterTitle: function returnLeterTitle(slug) {
      var letre = _services_recouvremnt_letter_maping_js__WEBPACK_IMPORTED_MODULE_0__.LETTERS_MAPING.find(function (letter) {
        return letter.slug == slug;
      });
      return letre.title;
    },
    arrondirMontantEntier: function arrondirMontantEntier(montant) {
      return Math.floor(montant);
    },
    convertir_date_echeance: function convertir_date_echeance(dateStr) {
      var date = new Date(dateStr);
      var day = String(date.getDate()).padStart(2, '0');
      var month = String(date.getMonth() + 1).padStart(2, '0'); // Les mois commencent à 0
      var year = date.getFullYear();
      return "".concat(day, "/").concat(month, "/").concat(year);
    }
  }, "arrondirMontantEntier", function arrondirMontantEntier(montant) {
    return Math.floor(montant);
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modals/LetterModal.vue?vue&type=template&id=1a92b92e&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modals/LetterModal.vue?vue&type=template&id=1a92b92e&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", {
    staticClass: "p-5"
  }, [_c("modal", {
    staticClass: "pb-5",
    attrs: {
      name: "letter_modal",
      height: "600",
      centered: true,
      width: "1100",
      adaptive: true,
      resizable: true,
      clickToClose: false
    }
  }, [_c("div", {
    staticClass: "p-3 mb-2",
    staticStyle: {
      height: "100%",
      overflow: "auto"
    }
  }, [_c("div", {
    staticClass: "modal-content",
    staticStyle: {
      height: "100%"
    }
  }, [_c("div", {
    staticClass: "modal-header px-3 mb-3",
    staticStyle: {
      "background-color": "#2c3e50"
    }
  }, [_c("h5", {
    staticClass: "modal-title py-2 text-white"
  }, [_vm._v("\n                        Prévisualisation des lettres de relance\n                    ")]), _vm._v(" "), _c("i", {
    staticClass: "icofont-close-line text-white",
    on: {
      click: function click($event) {
        return _vm.$modal.hide("letter_modal");
      }
    }
  })]), _vm._v(" "), _vm.chargement_letter == false ? _c("div", [_c("div", {
    staticClass: "modal-body px-2"
  }, [_c("recovery-accordion", {
    attrs: {
      title: _vm.returnLeterTitle(_vm.event_phase_relance),
      isOpen: _vm.openAccordion === 1
    },
    on: {
      toggle: function toggle($event) {
        return _vm.toggleAccordion(1);
      }
    }
  }, [_vm.decharges_data && _vm.decharges_data.length ? _c("RelanceLetter", {
    attrs: {
      event_phase_relance: _vm.event_phase_relance,
      decharges_data: _vm.decharges_data[0],
      dossier_credit: _vm.dossier_credit,
      authcheckUsr: _vm.authcheckUsr,
      is_caution: _vm.is_caution
    }
  }) : _vm._e()], 1), _vm._v(" "), _c("recovery-accordion", {
    attrs: {
      title: "Email",
      isOpen: _vm.openAccordion === 2
    },
    on: {
      toggle: function toggle($event) {
        return _vm.toggleAccordion(2);
      }
    }
  }, [_vm.is_caution == false ? _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-12 pl-4"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.email_client,
      expression: "\n                                            formDataToBeWatched.email_client\n                                        "
    }],
    staticClass: "form-control",
    staticStyle: {
      "min-width": "100%"
    },
    attrs: {
      type: "text",
      id: "email_client"
    },
    domProps: {
      value: _vm.formDataToBeWatched.email_client
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "email_client", $event.target.value);
      }, _vm.handleInput]
    }
  })])]) : _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-12 text-center mb-1",
    staticStyle: {
      "margin-top": "10px"
    }
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_c("thead", [_c("tr", {
    staticClass: "text-center text-white bg-gris"
  }, [_c("td", {
    staticClass: "th text-start"
  }, [_c("label", [_vm._v("NOM PRENOM")])]), _vm._v(" "), _c("td", {
    staticClass: "th text-start"
  }, [_c("label", [_vm._v("EMAIL")])]), _vm._v(" "), _c("td", {
    staticClass: "th text-start"
  }, [_c("label", [_vm._v("Contact")])]), _vm._v(" "), _c("td", {
    staticClass: "th text-start"
  }, [_c("label")])])]), _vm._v(" "), _c("tbody", {
    staticClass: "pb-2"
  }, [_vm._l(_vm.email_caution, function (caution, index) {
    return _c("tr", {
      key: index
    }, [_c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: caution.nom_prenoms,
        expression: "\n                                                            caution.nom_prenoms\n                                                        "
      }],
      staticClass: "form-control",
      staticStyle: {
        width: "250px"
      },
      attrs: {
        type: "text"
      },
      domProps: {
        value: caution.nom_prenoms
      },
      on: {
        change: _vm.handleInput,
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(caution, "nom_prenoms", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: caution.email,
        expression: "\n                                                            caution.email\n                                                        "
      }],
      staticClass: "form-control",
      staticStyle: {
        width: "250px"
      },
      attrs: {
        type: "text"
      },
      domProps: {
        value: caution.email
      },
      on: {
        change: _vm.handleInput,
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(caution, "email", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: caution.phone,
        expression: "\n                                                            caution.phone\n                                                        "
      }],
      staticClass: "form-control",
      staticStyle: {
        width: "250px"
      },
      attrs: {
        type: "text"
      },
      domProps: {
        value: caution.phone
      },
      on: {
        change: _vm.handleInput,
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(caution, "phone", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_vm.email_caution.length > 1 ? _c("button", {
      staticClass: "btn shadow-md text-white",
      staticStyle: {
        cursor: "pointer",
        background: "#dc0030",
        "max-width": "max-content"
      },
      attrs: {
        type: "button",
        name: "button"
      },
      on: {
        click: function click($event) {
          return _vm.removeCaution(index);
        }
      }
    }, [_c("trash-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1) : _vm._e()])]);
  }), _vm._v(" "), _c("tr", [_c("td"), _vm._v(" "), _c("td"), _vm._v(" "), _c("td"), _vm._v(" "), _c("td", [_c("button", {
    staticClass: "btn shadow-md text-white",
    staticStyle: {
      background: "#2c3e50",
      "max-width": "max-content"
    },
    attrs: {
      type: "button",
      name: "button"
    },
    on: {
      click: function click($event) {
        return _vm.addMoreCaution();
      }
    }
  }, [_c("plus-icon", {
    staticClass: "custom-class",
    attrs: {
      size: "21"
    }
  })], 1)])])], 2)])])])]), _vm._v(" "), _vm.historique_relance.length > 0 ? _c("recovery-accordion", {
    attrs: {
      title: "Historique des relances",
      isOpen: _vm.openAccordion === 3
    },
    on: {
      toggle: function toggle($event) {
        return _vm.toggleAccordion(3);
      }
    }
  }, [_vm._l(_vm.historique_lettre, function (historique_L, historiqueIndex) {
    var _historique_L$letter_, _historique_L$letter_2, _historique_L$client_;
    return _c("div", {
      key: "historique_" + historiqueIndex
    }, [!historique_L.is_caution ? _c("div", {
      staticClass: "accordion",
      attrs: {
        id: "accordionExample"
      }
    }, [_c("div", {
      key: "lettre_" + historiqueIndex,
      staticClass: "accordion-item"
    }, [_c("h5", {
      staticClass: "accordion-header",
      attrs: {
        id: "heading" + historiqueIndex
      }
    }, [_c("div", {
      staticClass: "accordion-button",
      attrs: {
        type: "button",
        "data-bs-target": "#collapse" + historiqueIndex,
        "aria-expanded": historiqueIndex === _vm.currentOpenIndex,
        "aria-controls": "collapse" + historiqueIndex
      },
      on: {
        click: function click($event) {
          return _vm.toggleAccordions(historiqueIndex);
        }
      }
    }, [_c("div", {
      staticClass: "row"
    }, [_c("div", [_c("span", [_vm._v("Titre :")]), _vm._v("\n                                                            " + _vm._s(_vm.returnLeterTitle(historique_L === null || historique_L === void 0 || (_historique_L$letter_ = historique_L.letter_data) === null || _historique_L$letter_ === void 0 ? void 0 : _historique_L$letter_.letter_slug)) + "\n                                                        ")]), _vm._v(" "), _c("br"), _vm._v(" "), _c("div", [_c("span", [_vm._v("Auteur :")]), _vm._v(" "), _c("span", [_vm._v(_vm._s(historique_L === null || historique_L === void 0 || (_historique_L$letter_2 = historique_L.letter_data) === null || _historique_L$letter_2 === void 0 || (_historique_L$letter_2 = _historique_L$letter_2.sender_info) === null || _historique_L$letter_2 === void 0 ? void 0 : _historique_L$letter_2.name))])]), _vm._v(" "), _c("br"), _vm._v(" "), _c("div", [_c("span", [_vm._v("Date :")]), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.formatDate(historique_L === null || historique_L === void 0 ? void 0 : historique_L.date)))])])])])]), _vm._v(" "), _c("div", {
      staticClass: "accordion-collapse collapse",
      "class": {
        show: historiqueIndex === _vm.currentOpenIndex
      },
      attrs: {
        id: "collapse" + historiqueIndex,
        "aria-labelledby": "heading" + historiqueIndex,
        "data-bs-parent": "#accordionExample"
      }
    }, [_c("div", {
      staticClass: "accordion-body"
    }, [_c("LetterOff", {
      attrs: {
        historique: historique_L,
        authcheckUsr: _vm.authcheckUsr,
        dossier_credit: _vm.dossier_credit
      }
    })], 1)])])]) : _c("div", {
      staticClass: "accordion",
      attrs: {
        id: "accordionExample"
      }
    }, _vm._l(historique_L === null || historique_L === void 0 || (_historique_L$client_ = historique_L.client_info) === null || _historique_L$client_ === void 0 ? void 0 : _historique_L$client_.guarantees, function (historique_guarantees, relanceIndex) {
      var _historique_L$letter_3, _historique_L$letter_4;
      return _c("div", {
        key: "relance_" + historiqueIndex + "_" + relanceIndex,
        staticClass: "accordion-item"
      }, [_c("h5", {
        staticClass: "accordion-header",
        attrs: {
          id: "heading" + historiqueIndex + "_" + relanceIndex
        }
      }, [_c("div", {
        staticClass: "accordion-button",
        attrs: {
          type: "button",
          "data-bs-target": "#collapse" + historiqueIndex + "_" + relanceIndex,
          "aria-expanded": historiqueIndex + "_" + relanceIndex === _vm.currentOpenIndex,
          "aria-controls": "collapse" + historiqueIndex + "_" + relanceIndex
        },
        on: {
          click: function click($event) {
            return _vm.toggleAccordions(historiqueIndex + "_" + relanceIndex);
          }
        }
      }, [_c("div", {
        staticClass: "row"
      }, [_c("div", [_c("span", [_vm._v("Titre :")]), _vm._v("\n                                                            " + _vm._s(_vm.returnLeterTitle(historique_L === null || historique_L === void 0 || (_historique_L$letter_3 = historique_L.letter_data) === null || _historique_L$letter_3 === void 0 ? void 0 : _historique_L$letter_3.letter_slug)) + "\n                                                        ")]), _vm._v(" "), _c("br"), _vm._v(" "), _c("div", [_c("span", [_vm._v("Auteur :")]), _vm._v(" "), _c("span", [_vm._v(_vm._s(historique_L === null || historique_L === void 0 || (_historique_L$letter_4 = historique_L.letter_data) === null || _historique_L$letter_4 === void 0 || (_historique_L$letter_4 = _historique_L$letter_4.sender_info) === null || _historique_L$letter_4 === void 0 ? void 0 : _historique_L$letter_4.name))])]), _vm._v(" "), _c("br"), _vm._v(" "), _c("div", [_c("span", [_vm._v("Date :")]), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.formatDate(historique_L === null || historique_L === void 0 ? void 0 : historique_L.date)))])])])])]), _vm._v(" "), _c("div", {
        staticClass: "accordion-collapse collapse",
        "class": {
          show: historiqueIndex + "_" + relanceIndex === _vm.currentOpenIndex
        },
        attrs: {
          id: "collapse" + historiqueIndex + "_" + relanceIndex,
          "aria-labelledby": "heading" + historiqueIndex + "_" + relanceIndex,
          "data-bs-parent": "#accordionExample"
        }
      }, [_c("div", {
        staticClass: "accordion-body"
      }, [_c("LetterOff", {
        attrs: {
          historique: historique_L,
          authcheckUsr: _vm.authcheckUsr,
          dossier_credit: _vm.dossier_credit,
          guarantees: historique_guarantees
        }
      })], 1)])]);
    }), 0)]);
  })], 2) : _vm._e()], 1), _vm._v(" "), _c("div", {
    staticClass: "mb-5"
  }), _vm._v(" "), _vm.in_store_email == false ? _c("div", {
    staticClass: "text-right p-2"
  }, [_vm.transmission_en_cours == false ? _c("button", {
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
        return _vm.SendNototification();
      }
    }
  }, [_vm._v("\n                            Retransmettre\n                        ")]) : _c("button", {
    staticClass: "btn btn-dark",
    attrs: {
      type: "button",
      disabled: ""
    }
  }, [_c("span", {
    staticClass: "spinner-border spinner-border-sm",
    attrs: {
      role: "status",
      "aria-hidden": "true"
    }
  }), _vm._v("\n                            Transmission de la relance en cours...\n                        ")])]) : _c("div", {
    staticClass: "text-right p-2"
  }, [_c("button", {
    staticClass: "btn btn-dark",
    attrs: {
      in_store_email: "",
      type: "button",
      disabled: ""
    }
  }, [_c("span", {
    staticClass: "spinner-border spinner-border-sm",
    attrs: {
      role: "status",
      "aria-hidden": "true"
    }
  }), _vm._v("\n                            Enregistrement de mail ...\n                        ")])])]) : _c("div", {
    staticClass: "modal-body px-2"
  }, [_c("div", {
    staticClass: "row h-100"
  }, [_c("div", {
    staticClass: "card w-100 d-flex justify-content-center align-items-center"
  }, [_c("div", {
    staticClass: "text-center"
  }, [_c("span", {
    staticClass: "spinner-border spinner-border-sm",
    attrs: {
      role: "status",
      "aria-hidden": "true"
    }
  }), _vm._v(" "), _c("br"), _vm._v(" "), _c("span", {
    staticClass: "card-title h3"
  }, [_vm._v("\n                                    Chargement en cours ....\n                                ")])])])])])])])])], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modals/RelanceLetter.vue?vue&type=template&id=3e8cfef0&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modals/RelanceLetter.vue?vue&type=template&id=3e8cfef0&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$getPaysInfo, _vm$formatDate, _vm$dossier_credit$_v, _vm$dossier_credit, _this$dossier_credit, _vm$dossier_credit$_v2, _vm$dossier_credit2, _this$dossier_credit2, _vm$dossier_credit3, _vm$dossier_credit$ca, _vm$dossier_credit4, _vm$dossier_credit$do, _vm$dossier_credit5, _vm$dossier_credit$nu, _vm$dossier_credit6, _vm$dossier_credit$_v3, _vm$dossier_credit7, _this$dossier_credit3, _vm$decharges_data, _vm$decharges_data2, _vm$decharges_data$du, _vm$decharges_data3, _vm$decharges_data4, _vm$convertir_date_ec, _vm$decharges_data5, _vm$convertir_date_ec2, _vm$decharges_data6, _vm$decharges_data7, _vm$decharges_data8, _vm$dossier_credit$_v4, _vm$dossier_credit8, _this$dossier_credit4, _vm$chefAgence$name, _vm$chefAgence, _vm$chefAgence$displa, _vm$chefAgence2, _vm$getPaysInfo2, _vm$formatDate2, _vm$dossier_credit$_v5, _vm$dossier_credit9, _this$dossier_credit5, _vm$dossier_credit$_v6, _vm$dossier_credit0, _this$dossier_credit6, _vm$dossier_credit1, _vm$dossier_credit$ca2, _vm$dossier_credit10, _vm$dossier_credit$do2, _vm$dossier_credit11, _vm$dossier_credit$nu2, _vm$dossier_credit12, _vm$dossier_credit$_v7, _vm$dossier_credit13, _this$dossier_credit7, _vm$decharges_data$nu, _vm$decharges_data9, _vm$decharges_data0, _vm$dossier_credit$_v8, _vm$dossier_credit14, _this$dossier_credit8, _vm$chefAgence$name2, _vm$chefAgence3, _vm$chefAgence$displa2, _vm$chefAgence4, _vm$getPaysInfo3, _vm$dossier_credit15, _this$dossier_credit9, _vm$dossier_credit16, _this$dossier_credit0, _vm$dossier_credit17, _vm$dossier_credit$ca3, _vm$dossier_credit18, _vm$dossier_credit$do3, _vm$dossier_credit19, _vm$dossier_credit20, _this$dossier_credit1, _vm$dossier_credit21, _vm$dossier_credit22, _this$dossier_credit10, _vm$decharges_data1, _vm$decharges_data10, _vm$authcheckUsr, _vm$getPaysInfo4, _vm$authcheckUsr2, _vm$getPaysInfo5, _vm$responsableRecove, _vm$responsableRecove2, _vm$getPaysInfo6, _vm$dossier_credit$_v9, _vm$dossier_credit23, _this$dossier_credit11, _vm$dossier_credit24, _this$dossier_credit12, _vm$dossier_credit25, _vm$dossier_credit$ca4, _vm$dossier_credit26, _vm$dossier_credit$do4, _vm$dossier_credit27, _vm$dossier_credit28, _this$dossier_credit13, _vm$dossier_credit29, _vm$decharges_data$da, _vm$decharges_data11, _vm$dossier_credit30, _this$dossier_credit14, _vm$decharges_data12, _vm$decharges_data$du2, _vm$decharges_data13, _vm$convertir_date_ec3, _vm$decharges_data14, _vm$dossier_credit31, _this$dossier_credit15, _vm$decharges_data15, _vm$chefAgence$name3, _vm$chefAgence5, _vm$chefAgence$displa3, _vm$chefAgence6, _vm$getPaysInfo7, _vm$dossier_credit$_v0, _vm$dossier_credit32, _this$dossier_credit16, _vm$dossier_credit33, _this$dossier_credit17, _vm$dossier_credit34, _vm$dossier_credit$ca5, _vm$dossier_credit35, _vm$dossier_credit$do5, _vm$dossier_credit36, _vm$dossier_credit37, _vm$decharges_data$da2, _vm$decharges_data16, _vm$getPaysInfo8, _vm$dossier_credit$_v1, _vm$dossier_credit38, _this$dossier_credit18, _vm$decharges_data17, _vm$decharges_data18, _vm$decharges_data19, _vm$decharges_data20, _vm$dossier_credit$_v10, _vm$dossier_credit39, _this$dossier_credit19, _vm$decharges_data21, _vm$getPaysInfo9, _vm$responsableRecove3, _vm$responsableRecove4, _vm$formatDate3, _vm$dossier_credit$_v11, _vm$dossier_credit40, _this$dossier_credit20, _vm$dossier_credit$_v12, _vm$dossier_credit41, _this$dossier_credit21, _vm$dossier_credit42, _vm$dossier_credit$ca6, _vm$dossier_credit43, _vm$dossier_credit$do6, _vm$dossier_credit44, _vm$date_demande_form, _vm$dossier_credit$_v13, _vm$dossier_credit45, _this$dossier_credit22, _vm$decharges_data22, _vm$dossier_credit$_v14, _vm$dossier_credit46, _this$dossier_credit23, _vm$decharges_data23, _vm$dossier_credit$_v15, _vm$dossier_credit47, _this$dossier_credit24, _vm$chefAgence$name4, _vm$chefAgence7, _vm$chefAgence$displa4, _vm$chefAgence8;
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_vm.event_phase_relance === "PREMIERE_LETTRE_DE_RELANCE" ? _c("div", {
    staticClass: "container"
  }, [_c("div", {
    staticClass: "header"
  }, [_c("p", [_vm._v(_vm._s((_vm$getPaysInfo = _vm.getPaysInfo) === null || _vm$getPaysInfo === void 0 ? void 0 : _vm$getPaysInfo.capitale) + ", le " + _vm._s((_vm$formatDate = _vm.formatDate(new Date())) !== null && _vm$formatDate !== void 0 ? _vm$formatDate : ""))]), _vm._v(" "), _c("p", [_vm._v("\n                Nom client :\n                " + _vm._s((_vm$dossier_credit$_v = (_vm$dossier_credit = _vm.dossier_credit) === null || _vm$dossier_credit === void 0 || (_vm$dossier_credit = _vm$dossier_credit[_vm.determineCredPubTables((_this$dossier_credit = this.dossier_credit) === null || _this$dossier_credit === void 0 ? void 0 : _this$dossier_credit.applied_templ_name)[0]]) === null || _vm$dossier_credit === void 0 ? void 0 : _vm$dossier_credit.denomination_client) !== null && _vm$dossier_credit$_v !== void 0 ? _vm$dossier_credit$_v : "") + "."), _c("br"), _vm._v("\n                (Tel) :\n                " + _vm._s((_vm$dossier_credit$_v2 = (_vm$dossier_credit2 = _vm.dossier_credit) === null || _vm$dossier_credit2 === void 0 || (_vm$dossier_credit2 = _vm$dossier_credit2[_vm.determineCredPubTables((_this$dossier_credit2 = this.dossier_credit) === null || _this$dossier_credit2 === void 0 ? void 0 : _this$dossier_credit2.applied_templ_name)[0]]) === null || _vm$dossier_credit2 === void 0 ? void 0 : _vm$dossier_credit2.contact_client) !== null && _vm$dossier_credit$_v2 !== void 0 ? _vm$dossier_credit$_v2 : "")), _c("br"), _vm._v("\n                Adresse :\n                " + _vm._s((_vm$dossier_credit3 = _vm.dossier_credit) !== null && _vm$dossier_credit3 !== void 0 && (_vm$dossier_credit3 = _vm$dossier_credit3.caf_recorded_file) !== null && _vm$dossier_credit3 !== void 0 && (_vm$dossier_credit3 = _vm$dossier_credit3.client) !== null && _vm$dossier_credit3 !== void 0 && _vm$dossier_credit3.adrescli ? (_vm$dossier_credit$ca = (_vm$dossier_credit4 = _vm.dossier_credit) === null || _vm$dossier_credit4 === void 0 || (_vm$dossier_credit4 = _vm$dossier_credit4.caf_recorded_file) === null || _vm$dossier_credit4 === void 0 || (_vm$dossier_credit4 = _vm$dossier_credit4.client) === null || _vm$dossier_credit4 === void 0 ? void 0 : _vm$dossier_credit4.adrescli) !== null && _vm$dossier_credit$ca !== void 0 ? _vm$dossier_credit$ca : "" : (_vm$dossier_credit$do = (_vm$dossier_credit5 = _vm.dossier_credit) === null || _vm$dossier_credit5 === void 0 || (_vm$dossier_credit5 = _vm$dossier_credit5.doss_central_file_recorder) === null || _vm$dossier_credit5 === void 0 || (_vm$dossier_credit5 = _vm$dossier_credit5.client) === null || _vm$dossier_credit5 === void 0 ? void 0 : _vm$dossier_credit5.adrescli) !== null && _vm$dossier_credit$do !== void 0 ? _vm$dossier_credit$do : "") + "\n            ")])]), _vm._v(" "), _c("div", {
    staticClass: "content"
  }, [_c("h2", [_vm._v("URGENCE SIGNALEE")]), _vm._v(" "), _c("p", [_vm._v("Par lettre au porteur avec accusé de réception")]), _vm._v(" "), _c("p", [_vm._v("\n                N/Réf : " + _vm._s((_vm$dossier_credit$nu = (_vm$dossier_credit6 = _vm.dossier_credit) === null || _vm$dossier_credit6 === void 0 ? void 0 : _vm$dossier_credit6.numero_dossier) !== null && _vm$dossier_credit$nu !== void 0 ? _vm$dossier_credit$nu : "")), _c("br")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c("br"), _vm._v(" "), _c("p", [_vm._v("\n                Monsieur /Madame\n                " + _vm._s((_vm$dossier_credit$_v3 = (_vm$dossier_credit7 = _vm.dossier_credit) === null || _vm$dossier_credit7 === void 0 || (_vm$dossier_credit7 = _vm$dossier_credit7[_vm.determineCredPubTables((_this$dossier_credit3 = this.dossier_credit) === null || _this$dossier_credit3 === void 0 ? void 0 : _this$dossier_credit3.applied_templ_name)[0]]) === null || _vm$dossier_credit7 === void 0 ? void 0 : _vm$dossier_credit7.denomination_client) !== null && _vm$dossier_credit$_v3 !== void 0 ? _vm$dossier_credit$_v3 : "") + "\n            ")]), _vm._v(" "), _c("p", [_vm._v("\n                Nous vous rappelons que vous avez sollicité et obtenu de " + _vm._s(_vm.getFiliale) + ", un\n                prêt à hauteur de\n                " + _vm._s(this.convertirEnLettres(_vm.arrondirMontantEntier((_vm$decharges_data = _vm.decharges_data) === null || _vm$decharges_data === void 0 ? void 0 : _vm$decharges_data.production_en_volume))) + "\n                (" + _vm._s(_vm._f("formatNumber")(_vm.arrondirMontantEntier((_vm$decharges_data2 = _vm.decharges_data) === null || _vm$decharges_data2 === void 0 ? void 0 : _vm$decharges_data2.production_en_volume))) + ")\n                F/CFA, remboursable en\n                " + _vm._s((_vm$decharges_data$du = (_vm$decharges_data3 = _vm.decharges_data) === null || _vm$decharges_data3 === void 0 ? void 0 : _vm$decharges_data3.duree_initiale) !== null && _vm$decharges_data$du !== void 0 ? _vm$decharges_data$du : "") + " mois échéances\n                mensuelles de\n                " + _vm._s(_vm._f("formatNumber")(_vm.arrondirMontantEntier((_vm$decharges_data4 = _vm.decharges_data) === null || _vm$decharges_data4 === void 0 ? void 0 : _vm$decharges_data4.montant_echeance))) + "\n                F/CFA chacune, allant du\n                " + _vm._s((_vm$convertir_date_ec = _vm.convertir_date_echeance((_vm$decharges_data5 = _vm.decharges_data) === null || _vm$decharges_data5 === void 0 ? void 0 : _vm$decharges_data5.date_premiere_echeance)) !== null && _vm$convertir_date_ec !== void 0 ? _vm$convertir_date_ec : "") + " au\n                " + _vm._s((_vm$convertir_date_ec2 = _vm.convertir_date_echeance((_vm$decharges_data6 = _vm.decharges_data) === null || _vm$decharges_data6 === void 0 ? void 0 : _vm$decharges_data6.date_fin_echeance)) !== null && _vm$convertir_date_ec2 !== void 0 ? _vm$convertir_date_ec2 : "") + "\n            ")]), _vm._v(" "), _c("p", [_vm._v("\n                Cependant, nous constatons que l’échéance mensuelle fixée\n                n’a pas été respectée de sorte que vous restez devoir ce\n                jour à notre institution la somme de\n                "), _c("b", [_vm._v("\n                    " + _vm._s(this.convertirEnLettres(_vm.arrondirMontantEntier((_vm$decharges_data7 = _vm.decharges_data) === null || _vm$decharges_data7 === void 0 ? void 0 : _vm$decharges_data7.encours_impaye))) + "\n                    (" + _vm._s(_vm._f("formatNumber")(_vm.arrondirMontantEntier((_vm$decharges_data8 = _vm.decharges_data) === null || _vm$decharges_data8 === void 0 ? void 0 : _vm$decharges_data8.encours_impaye))) + ")\n                    F/CFA (sans les pénalités)")]), _vm._v("\n                à titre d’échéance échue impayée sous réserve des intérêts\n                et pénalités de retard qui continuent à courir.\n            ")]), _vm._v(" "), _c("p", [_vm._v("\n                Par conséquent, nous vous invitons à bien vouloir\n                régulariser votre situation débitrice dans nos livres ce,\n                dans un délai maximum de trois (03) jours à compter de la\n                réception des présentes.\n            ")]), _vm._v(" "), _c("p", [_vm._v("\n                Vous remerciant par avance pour votre règlement diligent,\n                recevez\n                " + _vm._s((_vm$dossier_credit$_v4 = (_vm$dossier_credit8 = _vm.dossier_credit) === null || _vm$dossier_credit8 === void 0 || (_vm$dossier_credit8 = _vm$dossier_credit8[_vm.determineCredPubTables((_this$dossier_credit4 = this.dossier_credit) === null || _this$dossier_credit4 === void 0 ? void 0 : _this$dossier_credit4.applied_templ_name)[0]]) === null || _vm$dossier_credit8 === void 0 ? void 0 : _vm$dossier_credit8.denomination_client) !== null && _vm$dossier_credit$_v4 !== void 0 ? _vm$dossier_credit$_v4 : "") + " nos sincères salutations.\n            ")])]), _vm._v(" "), _c("div", {
    staticClass: "signature"
  }, [_c("p", [_vm._v("\n                " + _vm._s((_vm$chefAgence$name = (_vm$chefAgence = _vm.chefAgence) === null || _vm$chefAgence === void 0 ? void 0 : _vm$chefAgence.name) !== null && _vm$chefAgence$name !== void 0 ? _vm$chefAgence$name : "") + " (" + _vm._s((_vm$chefAgence$displa = (_vm$chefAgence2 = _vm.chefAgence) === null || _vm$chefAgence2 === void 0 ? void 0 : _vm$chefAgence2.display_name) !== null && _vm$chefAgence$displa !== void 0 ? _vm$chefAgence$displa : "") + ")\n            ")])]), _vm._v(" "), _c("div", {
    staticClass: "tampon"
  }, [_c("p", [_c("img", {
    attrs: {
      src: _vm.tamponDynamique,
      alt: "Tampon ".concat(_vm.getPaysInfo.code)
    }
  })])])]) : _vm._e(), _vm._v(" "), _vm.event_phase_relance === "DEUXIEME_LETTRE_DE_RELANCE" ? _c("div", {
    staticClass: "container"
  }, [_c("div", {
    staticClass: "header"
  }, [_c("p", [_vm._v(_vm._s((_vm$getPaysInfo2 = _vm.getPaysInfo) === null || _vm$getPaysInfo2 === void 0 ? void 0 : _vm$getPaysInfo2.capitale) + ", le " + _vm._s((_vm$formatDate2 = _vm.formatDate(new Date())) !== null && _vm$formatDate2 !== void 0 ? _vm$formatDate2 : ""))]), _vm._v(" "), _c("p", [_vm._v("\n                Nom client :\n                " + _vm._s((_vm$dossier_credit$_v5 = (_vm$dossier_credit9 = _vm.dossier_credit) === null || _vm$dossier_credit9 === void 0 || (_vm$dossier_credit9 = _vm$dossier_credit9[_vm.determineCredPubTables((_this$dossier_credit5 = this.dossier_credit) === null || _this$dossier_credit5 === void 0 ? void 0 : _this$dossier_credit5.applied_templ_name)[0]]) === null || _vm$dossier_credit9 === void 0 ? void 0 : _vm$dossier_credit9.denomination_client) !== null && _vm$dossier_credit$_v5 !== void 0 ? _vm$dossier_credit$_v5 : "") + "."), _c("br"), _vm._v("\n                (Tel) :\n                " + _vm._s((_vm$dossier_credit$_v6 = (_vm$dossier_credit0 = _vm.dossier_credit) === null || _vm$dossier_credit0 === void 0 || (_vm$dossier_credit0 = _vm$dossier_credit0[_vm.determineCredPubTables((_this$dossier_credit6 = this.dossier_credit) === null || _this$dossier_credit6 === void 0 ? void 0 : _this$dossier_credit6.applied_templ_name)[0]]) === null || _vm$dossier_credit0 === void 0 ? void 0 : _vm$dossier_credit0.contact_client) !== null && _vm$dossier_credit$_v6 !== void 0 ? _vm$dossier_credit$_v6 : "")), _c("br"), _vm._v("\n                Adresse :\n                " + _vm._s((_vm$dossier_credit1 = _vm.dossier_credit) !== null && _vm$dossier_credit1 !== void 0 && (_vm$dossier_credit1 = _vm$dossier_credit1.caf_recorded_file) !== null && _vm$dossier_credit1 !== void 0 && (_vm$dossier_credit1 = _vm$dossier_credit1.client) !== null && _vm$dossier_credit1 !== void 0 && _vm$dossier_credit1.adrescli ? (_vm$dossier_credit$ca2 = (_vm$dossier_credit10 = _vm.dossier_credit) === null || _vm$dossier_credit10 === void 0 || (_vm$dossier_credit10 = _vm$dossier_credit10.caf_recorded_file) === null || _vm$dossier_credit10 === void 0 || (_vm$dossier_credit10 = _vm$dossier_credit10.client) === null || _vm$dossier_credit10 === void 0 ? void 0 : _vm$dossier_credit10.adrescli) !== null && _vm$dossier_credit$ca2 !== void 0 ? _vm$dossier_credit$ca2 : "" : (_vm$dossier_credit$do2 = (_vm$dossier_credit11 = _vm.dossier_credit) === null || _vm$dossier_credit11 === void 0 || (_vm$dossier_credit11 = _vm$dossier_credit11.doss_central_file_recorder) === null || _vm$dossier_credit11 === void 0 || (_vm$dossier_credit11 = _vm$dossier_credit11.client) === null || _vm$dossier_credit11 === void 0 ? void 0 : _vm$dossier_credit11.adrescli) !== null && _vm$dossier_credit$do2 !== void 0 ? _vm$dossier_credit$do2 : "") + "\n            ")])]), _vm._v(" "), _c("div", {
    staticClass: "content"
  }, [_c("h2", [_vm._v("URGENCE SIGNALEE")]), _vm._v(" "), _c("p", [_vm._v("Par lettre au porteur avec accusé de réception")]), _vm._v(" "), _c("p", [_vm._v("\n                N/Réf : " + _vm._s((_vm$dossier_credit$nu2 = (_vm$dossier_credit12 = _vm.dossier_credit) === null || _vm$dossier_credit12 === void 0 ? void 0 : _vm$dossier_credit12.numero_dossier) !== null && _vm$dossier_credit$nu2 !== void 0 ? _vm$dossier_credit$nu2 : "")), _c("br")]), _vm._v(" "), _vm._m(1), _vm._v(" "), _c("br"), _vm._v(" "), _c("p", [_vm._v("\n                Monsieur/Madame\n                " + _vm._s((_vm$dossier_credit$_v7 = (_vm$dossier_credit13 = _vm.dossier_credit) === null || _vm$dossier_credit13 === void 0 || (_vm$dossier_credit13 = _vm$dossier_credit13[_vm.determineCredPubTables((_this$dossier_credit7 = this.dossier_credit) === null || _this$dossier_credit7 === void 0 ? void 0 : _this$dossier_credit7.applied_templ_name)[0]]) === null || _vm$dossier_credit13 === void 0 ? void 0 : _vm$dossier_credit13.denomination_client) !== null && _vm$dossier_credit$_v7 !== void 0 ? _vm$dossier_credit$_v7 : "") + "\n            ")]), _vm._v(" "), _c("p", [_vm._v("\n                Nous avons fait tenir il y a quelques jours de cela une\n                lettre de relance pour parvenir au règlement de votre\n                échéance impayée au regard de l’échéancier convenu dans le\n                cadre de ma convention de prêt avec la Compagnie Financière\n                Africaine dite " + _vm._s(_vm.getFiliale) + ".\n            ")]), _vm._v(" "), _c("p", [_vm._v("\n                Cependant, malgré cette invitation à un règlement amiable et\n                diligent, nous constatons que vous n’avez pas effectué le\n                paiement attendu pour la régularisation de votre situation\n                débitrice dans nos livres, de sorte que vous restez toujours\n                nous devoir.\n            ")]), _vm._v(" "), _c("p", [_vm._v("\n                Par conséquent, nous vous invitons à bien vouloir verser sur\n                votre compte numéro\n                "), _c("b", [_vm._v(_vm._s((_vm$decharges_data$nu = (_vm$decharges_data9 = _vm.decharges_data) === null || _vm$decharges_data9 === void 0 ? void 0 : _vm$decharges_data9.numero_compte) !== null && _vm$decharges_data$nu !== void 0 ? _vm$decharges_data$nu : ""))]), _vm._v(" la somme de\n                "), _c("b", [_vm._v(_vm._s(_vm._f("formatNumber")(_vm.arrondirMontantEntier((_vm$decharges_data0 = _vm.decharges_data) === null || _vm$decharges_data0 === void 0 ? void 0 : _vm$decharges_data0.encours_impaye))) + "\n                    FCFA (sans les pénalités)\n                ")]), _vm._v("\n                représentant le montant de votre échéance échue impayée à ce\n                jour sans préjudice des intérêts et pénalités qui continuent\n                à courir et ce dans un délai maximum de huit (08) jours à\n                compter de la réception des présentes.\n            ")]), _vm._v(" "), _c("p", [_vm._v("\n                En cas d’inexécution de votre part dans le délai ci-dessus\n                indiqué, nous nous verrons obligés de constater le défaut de\n                paiement et de poursuivre par toute voie de droit et tous\n                frais à votre charge le recouvrement de la totalité de notre\n                créance.\n            ")]), _vm._v(" "), _c("p", [_vm._v("\n                Dans l’attente d’une prompte réaction, nous vous prions de\n                recevoir Monsieur/Madame\n                " + _vm._s((_vm$dossier_credit$_v8 = (_vm$dossier_credit14 = _vm.dossier_credit) === null || _vm$dossier_credit14 === void 0 || (_vm$dossier_credit14 = _vm$dossier_credit14[_vm.determineCredPubTables((_this$dossier_credit8 = this.dossier_credit) === null || _this$dossier_credit8 === void 0 ? void 0 : _this$dossier_credit8.applied_templ_name)[0]]) === null || _vm$dossier_credit14 === void 0 ? void 0 : _vm$dossier_credit14.denomination_client) !== null && _vm$dossier_credit$_v8 !== void 0 ? _vm$dossier_credit$_v8 : "") + " nos sincères salutations.\n            ")])]), _vm._v(" "), _c("div", {
    staticClass: "signature"
  }, [_c("p", [_vm._v("\n                " + _vm._s((_vm$chefAgence$name2 = (_vm$chefAgence3 = _vm.chefAgence) === null || _vm$chefAgence3 === void 0 ? void 0 : _vm$chefAgence3.name) !== null && _vm$chefAgence$name2 !== void 0 ? _vm$chefAgence$name2 : "") + " (" + _vm._s((_vm$chefAgence$displa2 = (_vm$chefAgence4 = _vm.chefAgence) === null || _vm$chefAgence4 === void 0 ? void 0 : _vm$chefAgence4.display_name) !== null && _vm$chefAgence$displa2 !== void 0 ? _vm$chefAgence$displa2 : "") + ")\n            ")])]), _vm._v(" "), _c("div", {
    staticClass: "tampon"
  }, [_c("p", [_c("img", {
    attrs: {
      src: _vm.tamponDynamique,
      alt: "Tampon ".concat(_vm.getPaysInfo.code)
    }
  })])])]) : _vm._e(), _vm._v(" "), _vm.event_phase_relance === "TROISIEME_LETTRE_DE_RELANCE_CDR" ? _c("div", {
    staticClass: "container"
  }, [_c("div", {
    staticClass: "header"
  }, [_c("p", [_vm._v(_vm._s((_vm$getPaysInfo3 = _vm.getPaysInfo) === null || _vm$getPaysInfo3 === void 0 ? void 0 : _vm$getPaysInfo3.capitale) + ", le " + _vm._s(_vm.formatDate(new Date())))]), _vm._v(" "), _c("p", [_vm._v("\n                Nom client:\n                " + _vm._s((_vm$dossier_credit15 = _vm.dossier_credit) === null || _vm$dossier_credit15 === void 0 || (_vm$dossier_credit15 = _vm$dossier_credit15[_vm.determineCredPubTables((_this$dossier_credit9 = this.dossier_credit) === null || _this$dossier_credit9 === void 0 ? void 0 : _this$dossier_credit9.applied_templ_name)[0]]) === null || _vm$dossier_credit15 === void 0 ? void 0 : _vm$dossier_credit15.denomination_client) + "."), _c("br"), _vm._v("\n                (Tel) :\n                " + _vm._s((_vm$dossier_credit16 = _vm.dossier_credit) === null || _vm$dossier_credit16 === void 0 || (_vm$dossier_credit16 = _vm$dossier_credit16[_vm.determineCredPubTables((_this$dossier_credit0 = this.dossier_credit) === null || _this$dossier_credit0 === void 0 ? void 0 : _this$dossier_credit0.applied_templ_name)[0]]) === null || _vm$dossier_credit16 === void 0 ? void 0 : _vm$dossier_credit16.contact_client)), _c("br"), _vm._v("\n                Adresse:\n                " + _vm._s((_vm$dossier_credit17 = _vm.dossier_credit) !== null && _vm$dossier_credit17 !== void 0 && (_vm$dossier_credit17 = _vm$dossier_credit17.caf_recorded_file) !== null && _vm$dossier_credit17 !== void 0 && (_vm$dossier_credit17 = _vm$dossier_credit17.client) !== null && _vm$dossier_credit17 !== void 0 && _vm$dossier_credit17.adrescli ? (_vm$dossier_credit$ca3 = (_vm$dossier_credit18 = _vm.dossier_credit) === null || _vm$dossier_credit18 === void 0 || (_vm$dossier_credit18 = _vm$dossier_credit18.caf_recorded_file) === null || _vm$dossier_credit18 === void 0 || (_vm$dossier_credit18 = _vm$dossier_credit18.client) === null || _vm$dossier_credit18 === void 0 ? void 0 : _vm$dossier_credit18.adrescli) !== null && _vm$dossier_credit$ca3 !== void 0 ? _vm$dossier_credit$ca3 : "" : (_vm$dossier_credit$do3 = (_vm$dossier_credit19 = _vm.dossier_credit) === null || _vm$dossier_credit19 === void 0 || (_vm$dossier_credit19 = _vm$dossier_credit19.doss_central_file_recorder) === null || _vm$dossier_credit19 === void 0 || (_vm$dossier_credit19 = _vm$dossier_credit19.client) === null || _vm$dossier_credit19 === void 0 ? void 0 : _vm$dossier_credit19.adrescli) !== null && _vm$dossier_credit$do3 !== void 0 ? _vm$dossier_credit$do3 : "") + "\n            ")])]), _vm._v(" "), _c("div", {
    staticClass: "content"
  }, [_c("h2", [_vm._v("URGENCE SIGNALEE")]), _vm._v(" "), _c("p", [_vm._v("Par lettre au porteur avec accusé de réception")]), _vm._v(" "), _c("p", [_vm._v("\n                A l’attention particulière de M./Mme\n                " + _vm._s((_vm$dossier_credit20 = _vm.dossier_credit) === null || _vm$dossier_credit20 === void 0 || (_vm$dossier_credit20 = _vm$dossier_credit20[_vm.determineCredPubTables((_this$dossier_credit1 = this.dossier_credit) === null || _this$dossier_credit1 === void 0 ? void 0 : _this$dossier_credit1.applied_templ_name)[0]]) === null || _vm$dossier_credit20 === void 0 ? void 0 : _vm$dossier_credit20.denomination_client) + ".\n            ")]), _vm._v(" "), _c("p", [_vm._v("\n                N/Réf : " + _vm._s((_vm$dossier_credit21 = _vm.dossier_credit) === null || _vm$dossier_credit21 === void 0 ? void 0 : _vm$dossier_credit21.numero_dossier)), _c("br")]), _vm._v(" "), _vm._m(2), _vm._v(" "), _c("br"), _vm._v(" "), _c("p", [_vm._v("\n                Monsieur/Madame\n                " + _vm._s((_vm$dossier_credit22 = _vm.dossier_credit) === null || _vm$dossier_credit22 === void 0 || (_vm$dossier_credit22 = _vm$dossier_credit22[_vm.determineCredPubTables((_this$dossier_credit10 = this.dossier_credit) === null || _this$dossier_credit10 === void 0 ? void 0 : _this$dossier_credit10.applied_templ_name)[0]]) === null || _vm$dossier_credit22 === void 0 ? void 0 : _vm$dossier_credit22.denomination_client) + "\n            ")]), _vm._v(" "), _c("p", [_vm._v("\n                Nous revenons vers vous relativement à la situation très\n                préoccupante de votre compte dans nos livres due aux\n                échéances impayées sur le prêt qui vous a été accordé.\n            ")]), _vm._v(" "), _c("p", [_vm._v("\n                Malheureusement, cette situation reste sans solutions malgré\n                les appels et courriers de relance de votre gestionnaire en\n                Agence.\n            ")]), _vm._v(" "), _c("p", [_vm._v("\n                Pour rappel, sauf erreur ou omission, vous restez à ce jour\n                nous devoir la somme de\n                "), _c("b", [_vm._v("\n                    " + _vm._s(this.convertirEnLettres(_vm.arrondirMontantEntier((_vm$decharges_data1 = _vm.decharges_data) === null || _vm$decharges_data1 === void 0 ? void 0 : _vm$decharges_data1.encours_impaye))) + "\n                    (" + _vm._s(_vm._f("formatNumber")(_vm.arrondirMontantEntier((_vm$decharges_data10 = _vm.decharges_data) === null || _vm$decharges_data10 === void 0 ? void 0 : _vm$decharges_data10.encours_impaye))) + ")\n                    francs CFA (sans les pénalités)")]), _vm._v("\n                en principal (sans les pénalités)  et accessoires sous réserve des échéances à\n                échoir ainsi que des intérêts et pénalités de retard à\n                venir.\n            ")]), _vm._v(" "), _c("p", [_vm._v("\n                À cet effet, après un retard de paiement de plus de\n                "), _c("b", [_vm._v("huit (08) jours")]), _vm._v(", nous vous informons par la présente\n                que la gestion de votre compte a été transférée au\n                Département Recouvrement et sera prise en charge désormais\n                par Madame /Monsieur "), _c("b", [_vm._v(_vm._s((_vm$authcheckUsr = _vm.authcheckUsr) === null || _vm$authcheckUsr === void 0 ? void 0 : _vm$authcheckUsr.name))]), _vm._v(" Chargé(e) de\n                Recouvrement que vous pourrez contacter au "), _c("b", [_vm._v(" " + _vm._s((_vm$getPaysInfo4 = _vm.getPaysInfo) === null || _vm$getPaysInfo4 === void 0 ? void 0 : _vm$getPaysInfo4.indicatif) + " " + _vm._s((_vm$authcheckUsr2 = _vm.authcheckUsr) === null || _vm$authcheckUsr2 === void 0 ? void 0 : _vm$authcheckUsr2.contact_whatsap))])]), _vm._v(" "), _c("p", [_vm._v("\n                En raison de ce qui précède, nous vous sommons de procéder à\n                la régularisation de la situation débitrice de votre compte\n                dans le délai de huit (8) jours et ce dès réception de la\n                présente.\n            ")]), _vm._v(" "), _c("p", [_vm._v("\n                Passé ce délai sans réaction de votre part, nous procèderons\n                sans autre avis à la transmission de votre dossier au\n                service contentieux afin d’engager la réalisation immédiate\n                de toutes les garanties offertes à notre profit ainsi que\n                des poursuites judiciaires pour recouvrer la totalité de\n                notre créance.\n            ")]), _vm._v(" "), _c("p", [_vm._v("\n                Dans l’attente d’un amiable et prompt règlement de votre\n                part,\n            ")]), _vm._v(" "), _c("p", [_vm._v("Recevez Monsieur nos meilleures salutations.")])]), _vm._v(" "), _c("div", {
    staticClass: "signature"
  }, [((_vm$getPaysInfo5 = _vm.getPaysInfo) === null || _vm$getPaysInfo5 === void 0 ? void 0 : _vm$getPaysInfo5.root) == "CFNTG" ? _c("span", [_c("p", [_vm._v("KOFFI DOSSOU (Responsable recouvrement)")])]) : _c("span", [_c("p", [_vm._v(_vm._s((_vm$responsableRecove = _vm.responsableRecovery) === null || _vm$responsableRecove === void 0 ? void 0 : _vm$responsableRecove.name) + " (" + _vm._s((_vm$responsableRecove2 = _vm.responsableRecovery) === null || _vm$responsableRecove2 === void 0 ? void 0 : _vm$responsableRecove2.display_name) + ")")])])]), _vm._v(" "), _c("div", {
    staticClass: "tampon"
  }, [_c("p", [_c("img", {
    attrs: {
      src: _vm.tamponDynamique,
      alt: "Tampon ".concat(_vm.getPaysInfo.code)
    }
  })])])]) : _vm._e(), _vm._v(" "), _vm.event_phase_relance === "LETTRE_DE_PRESENTATION_DE_BIEN_GAGE" ? _c("div", {
    staticClass: "container"
  }, [_c("div", {
    staticClass: "header"
  }, [_c("p", [_vm._v("\n                " + _vm._s((_vm$getPaysInfo6 = _vm.getPaysInfo) === null || _vm$getPaysInfo6 === void 0 ? void 0 : _vm$getPaysInfo6.capitale) + ", le\n                " + _vm._s(_vm.formatDate(new Date())) + "\n            ")]), _vm._v(" "), _c("p", [_vm._v("\n                Nom client:\n                " + _vm._s((_vm$dossier_credit$_v9 = (_vm$dossier_credit23 = _vm.dossier_credit) === null || _vm$dossier_credit23 === void 0 || (_vm$dossier_credit23 = _vm$dossier_credit23[_vm.determineCredPubTables((_this$dossier_credit11 = this.dossier_credit) === null || _this$dossier_credit11 === void 0 ? void 0 : _this$dossier_credit11.applied_templ_name)[0]]) === null || _vm$dossier_credit23 === void 0 ? void 0 : _vm$dossier_credit23.denomination_client) !== null && _vm$dossier_credit$_v9 !== void 0 ? _vm$dossier_credit$_v9 : "") + ".\n                "), _c("br"), _vm._v("\n                (Tel) :\n                " + _vm._s((_vm$dossier_credit24 = _vm.dossier_credit) === null || _vm$dossier_credit24 === void 0 || (_vm$dossier_credit24 = _vm$dossier_credit24[_vm.determineCredPubTables((_this$dossier_credit12 = this.dossier_credit) === null || _this$dossier_credit12 === void 0 ? void 0 : _this$dossier_credit12.applied_templ_name)[0]]) === null || _vm$dossier_credit24 === void 0 ? void 0 : _vm$dossier_credit24.contact_client)), _c("br"), _vm._v("\n                Adresse:\n                " + _vm._s((_vm$dossier_credit25 = _vm.dossier_credit) !== null && _vm$dossier_credit25 !== void 0 && (_vm$dossier_credit25 = _vm$dossier_credit25.caf_recorded_file) !== null && _vm$dossier_credit25 !== void 0 && (_vm$dossier_credit25 = _vm$dossier_credit25.client) !== null && _vm$dossier_credit25 !== void 0 && _vm$dossier_credit25.adrescli ? (_vm$dossier_credit$ca4 = (_vm$dossier_credit26 = _vm.dossier_credit) === null || _vm$dossier_credit26 === void 0 || (_vm$dossier_credit26 = _vm$dossier_credit26.caf_recorded_file) === null || _vm$dossier_credit26 === void 0 || (_vm$dossier_credit26 = _vm$dossier_credit26.client) === null || _vm$dossier_credit26 === void 0 ? void 0 : _vm$dossier_credit26.adrescli) !== null && _vm$dossier_credit$ca4 !== void 0 ? _vm$dossier_credit$ca4 : "" : (_vm$dossier_credit$do4 = (_vm$dossier_credit27 = _vm.dossier_credit) === null || _vm$dossier_credit27 === void 0 || (_vm$dossier_credit27 = _vm$dossier_credit27.doss_central_file_recorder) === null || _vm$dossier_credit27 === void 0 || (_vm$dossier_credit27 = _vm$dossier_credit27.client) === null || _vm$dossier_credit27 === void 0 ? void 0 : _vm$dossier_credit27.adrescli) !== null && _vm$dossier_credit$do4 !== void 0 ? _vm$dossier_credit$do4 : "") + "\n            ")])]), _vm._v(" "), _c("div", {
    staticClass: "content"
  }, [_c("h2", [_vm._v("URGENCE SIGNALEE")]), _vm._v(" "), _c("p", [_vm._v("Par lettre au porteur avec accusé de réception")]), _vm._v(" "), _c("p", [_vm._v("\n                A l’attention particulière de Monsieur/Madame\n                " + _vm._s((_vm$dossier_credit28 = _vm.dossier_credit) === null || _vm$dossier_credit28 === void 0 || (_vm$dossier_credit28 = _vm$dossier_credit28[_vm.determineCredPubTables((_this$dossier_credit13 = this.dossier_credit) === null || _this$dossier_credit13 === void 0 ? void 0 : _this$dossier_credit13.applied_templ_name)[0]]) === null || _vm$dossier_credit28 === void 0 ? void 0 : _vm$dossier_credit28.denomination_client) + ".\n            ")]), _vm._v(" "), _c("p", [_vm._v("\n                N/Réf: " + _vm._s((_vm$dossier_credit29 = _vm.dossier_credit) === null || _vm$dossier_credit29 === void 0 ? void 0 : _vm$dossier_credit29.numero_dossier)), _c("br")]), _vm._v(" "), _vm._m(3), _vm._v(" "), _c("br"), _vm._v(" "), _c("p", [_vm._v("Monsieur /Madame")]), _vm._v(" "), _c("p", [_vm._v("\n                Pour mémoire, suivant convention de prêt en date du\n                "), _c("b", [_vm._v(_vm._s((_vm$decharges_data$da = (_vm$decharges_data11 = _vm.decharges_data) === null || _vm$decharges_data11 === void 0 ? void 0 : _vm$decharges_data11.datemisemp) !== null && _vm$decharges_data$da !== void 0 ? _vm$decharges_data$da : ""))]), _vm._v(", la société\n                " + _vm._s((_vm$dossier_credit30 = _vm.dossier_credit) === null || _vm$dossier_credit30 === void 0 || (_vm$dossier_credit30 = _vm$dossier_credit30[_vm.determineCredPubTables((_this$dossier_credit14 = this.dossier_credit) === null || _this$dossier_credit14 === void 0 ? void 0 : _this$dossier_credit14.applied_templ_name)[0]]) === null || _vm$dossier_credit30 === void 0 ? void 0 : _vm$dossier_credit30.denomination_client) + "a sollicité et obtenu de notre institution un prêt à\n                hauteur de\n                "), _c("b", [_vm._v(_vm._s(_vm._f("formatNumber")(_vm.arrondirMontantEntier((_vm$decharges_data12 = _vm.decharges_data) === null || _vm$decharges_data12 === void 0 ? void 0 : _vm$decharges_data12.production_en_volume))))]), _vm._v("\n                en principal, remboursable sur une durée maximale de\n                " + _vm._s((_vm$decharges_data$du2 = (_vm$decharges_data13 = _vm.decharges_data) === null || _vm$decharges_data13 === void 0 ? void 0 : _vm$decharges_data13.duree_initiale) !== null && _vm$decharges_data$du2 !== void 0 ? _vm$decharges_data$du2 : "") + " mois à compter du\n                "), _c("b", [_vm._v(_vm._s((_vm$convertir_date_ec3 = _vm.convertir_date_echeance((_vm$decharges_data14 = _vm.decharges_data) === null || _vm$decharges_data14 === void 0 ? void 0 : _vm$decharges_data14.date_premiere_echeance)) !== null && _vm$convertir_date_ec3 !== void 0 ? _vm$convertir_date_ec3 : ""))]), _vm._v(".\n            ")]), _vm._v(" "), _c("p", [_vm._v("\n                Cependant, la société\n                " + _vm._s((_vm$dossier_credit31 = _vm.dossier_credit) === null || _vm$dossier_credit31 === void 0 || (_vm$dossier_credit31 = _vm$dossier_credit31[_vm.determineCredPubTables((_this$dossier_credit15 = this.dossier_credit) === null || _this$dossier_credit15 === void 0 ? void 0 : _this$dossier_credit15.applied_templ_name)[0]]) === null || _vm$dossier_credit31 === void 0 ? void 0 : _vm$dossier_credit31.denomination_client) + "\n                ne respecte toujours pas ses échéances mensuelles de\n                remboursement, de sorte qu’elle cumule plusieurs échéances\n                échues et impayées qui se chiffrent à date à la somme de\n                "), _c("b", [_vm._v(_vm._s(_vm._f("formatNumber")(_vm.arrondirMontantEntier((_vm$decharges_data15 = _vm.decharges_data) === null || _vm$decharges_data15 === void 0 ? void 0 : _vm$decharges_data15.production_en_volume))) + "\n                    FCFA (sans les pénalités)\n                ")]), _vm._v("\n                en principal sous réserves des échéances, pénalités et\n                intérêts à échoir.\n            ")]), _vm._v(" "), _c("p", [_vm._v("\n                Toutes ses perspectives et promesses de paiements afin de\n                régulariser sa situation débitrice dans nos livres sont\n                restées vaines jusqu’à ce jour.\n            ")]), _vm._v(" "), _c("p", [_vm._v("\n                Cette situation cause à notre Institution un énorme\n                préjudice et ne saurait davantage perdurer.\n            ")]), _vm._v(" "), _c("p", [_vm._v("\n                C’est pourquoi nous vous invitons à mettre à la disposition\n                de notre service juridique les véhicules gagés susvisés\n                ainsi que les documents y afférents (carte grise, visite\n                technique…) dans un délai maximum de huit (08) jours à\n                compter de la réception des présentes afin de nous permettre\n                de nous conformer à nos procédures internes de vérification\n                de la régularité des inscriptions et de réalisation amiable\n                des sûretés.\n            ")]), _vm._v(" "), _c("p", [_vm._v("\n                Aussi, vous rappelant les dispositions de l’article 469 du\n                code pénal qui dispose que « Est puni d’un emprisonnement\n                d’un à cinq ans et d’une amende de 300.000 à 3.000.000 de\n                francs […] 2° le débiteur emprunteur ou tiers donneur de\n                gage qui détruit ou détourne l’objet par lui donné à titre\n                de gage ; […] », nous vous invitons à prendre contact avec\n                notre service juridique dans le délai sus-indiqué à l’effet\n                de discuter des conditions de réalisation desdites sûretés.\n            ")]), _vm._v(" "), _c("p", [_vm._v("\n                Tout en espérant que vous privilégierez la voie amiable pour\n                la résolution de cette affaire, nous vous prions de recevoir\n                Monsieur /Madame, nos meilleures salutations.\n            ")])]), _vm._v(" "), _c("div", {
    staticClass: "signature"
  }, [_c("pre", [_vm._v(_vm._s(_vm.chefAgence))]), _vm._v(" "), _c("p", [_vm._v(_vm._s((_vm$chefAgence$name3 = (_vm$chefAgence5 = _vm.chefAgence) === null || _vm$chefAgence5 === void 0 ? void 0 : _vm$chefAgence5.name) !== null && _vm$chefAgence$name3 !== void 0 ? _vm$chefAgence$name3 : "") + " (" + _vm._s((_vm$chefAgence$displa3 = (_vm$chefAgence6 = _vm.chefAgence) === null || _vm$chefAgence6 === void 0 ? void 0 : _vm$chefAgence6.display_name) !== null && _vm$chefAgence$displa3 !== void 0 ? _vm$chefAgence$displa3 : "") + ")")]), _vm._v(" "), _c("div", {
    staticClass: "tampon"
  }, [_c("p", [_c("img", {
    attrs: {
      src: _vm.tamponDynamique,
      alt: "Tampon ".concat(_vm.getPaysInfo.code)
    }
  })])])])]) : _vm._e(), _vm._v(" "), _vm.event_phase_relance === "LETTRE_INFORMATION_A_LA_CAUTION_CDR" ? _c("div", {
    staticClass: "container"
  }, [_c("div", {
    staticClass: "header"
  }, [_c("p", [_vm._v(_vm._s((_vm$getPaysInfo7 = _vm.getPaysInfo) === null || _vm$getPaysInfo7 === void 0 ? void 0 : _vm$getPaysInfo7.capitale) + ", le " + _vm._s(_vm.formatDate(new Date())))]), _vm._v(" "), _c("p", [_vm._v("\n                Nom client:\n                " + _vm._s((_vm$dossier_credit$_v0 = (_vm$dossier_credit32 = _vm.dossier_credit) === null || _vm$dossier_credit32 === void 0 || (_vm$dossier_credit32 = _vm$dossier_credit32[_vm.determineCredPubTables((_this$dossier_credit16 = this.dossier_credit) === null || _this$dossier_credit16 === void 0 ? void 0 : _this$dossier_credit16.applied_templ_name)[0]]) === null || _vm$dossier_credit32 === void 0 ? void 0 : _vm$dossier_credit32.denomination_client) !== null && _vm$dossier_credit$_v0 !== void 0 ? _vm$dossier_credit$_v0 : "") + ".\n                "), _c("br"), _vm._v("\n                (Tel) :\n                " + _vm._s((_vm$dossier_credit33 = _vm.dossier_credit) === null || _vm$dossier_credit33 === void 0 || (_vm$dossier_credit33 = _vm$dossier_credit33[_vm.determineCredPubTables((_this$dossier_credit17 = this.dossier_credit) === null || _this$dossier_credit17 === void 0 ? void 0 : _this$dossier_credit17.applied_templ_name)[0]]) === null || _vm$dossier_credit33 === void 0 ? void 0 : _vm$dossier_credit33.contact_client)), _c("br"), _vm._v("\n                Adresse:\n                " + _vm._s((_vm$dossier_credit34 = _vm.dossier_credit) !== null && _vm$dossier_credit34 !== void 0 && (_vm$dossier_credit34 = _vm$dossier_credit34.caf_recorded_file) !== null && _vm$dossier_credit34 !== void 0 && (_vm$dossier_credit34 = _vm$dossier_credit34.client) !== null && _vm$dossier_credit34 !== void 0 && _vm$dossier_credit34.adrescli ? (_vm$dossier_credit$ca5 = (_vm$dossier_credit35 = _vm.dossier_credit) === null || _vm$dossier_credit35 === void 0 || (_vm$dossier_credit35 = _vm$dossier_credit35.caf_recorded_file) === null || _vm$dossier_credit35 === void 0 || (_vm$dossier_credit35 = _vm$dossier_credit35.client) === null || _vm$dossier_credit35 === void 0 ? void 0 : _vm$dossier_credit35.adrescli) !== null && _vm$dossier_credit$ca5 !== void 0 ? _vm$dossier_credit$ca5 : "" : (_vm$dossier_credit$do5 = (_vm$dossier_credit36 = _vm.dossier_credit) === null || _vm$dossier_credit36 === void 0 || (_vm$dossier_credit36 = _vm$dossier_credit36.doss_central_file_recorder) === null || _vm$dossier_credit36 === void 0 || (_vm$dossier_credit36 = _vm$dossier_credit36.client) === null || _vm$dossier_credit36 === void 0 ? void 0 : _vm$dossier_credit36.adrescli) !== null && _vm$dossier_credit$do5 !== void 0 ? _vm$dossier_credit$do5 : "") + "\n            ")])]), _vm._v(" "), _c("div", {
    staticClass: "content"
  }, [_c("h2", [_vm._v("URGENCE SIGNALEE")]), _vm._v(" "), _c("p", [_vm._v("\n                N/Réf: " + _vm._s((_vm$dossier_credit37 = _vm.dossier_credit) === null || _vm$dossier_credit37 === void 0 ? void 0 : _vm$dossier_credit37.numero_dossier)), _c("br")]), _vm._v(" "), _vm._m(4), _vm._v(" "), _c("br"), _vm._v(" "), _c("br"), _vm._v(" "), _c("p", [_vm._v("Monsieur/Madame,")]), _vm._v(" "), _c("p", [_vm._v("\n                Pour rappel, par acte sous seing privé en date du\n                "), _c("b", [_vm._v(_vm._s((_vm$decharges_data$da2 = (_vm$decharges_data16 = _vm.decharges_data) === null || _vm$decharges_data16 === void 0 ? void 0 : _vm$decharges_data16.datemisemp) !== null && _vm$decharges_data$da2 !== void 0 ? _vm$decharges_data$da2 : ""))]), _vm._v(", " + _vm._s((_vm$getPaysInfo8 = _vm.getPaysInfo) === null || _vm$getPaysInfo8 === void 0 ? void 0 : _vm$getPaysInfo8.lib) + " a accordé à Monsieur/Madame\n                "), _c("b", [_vm._v(_vm._s((_vm$dossier_credit$_v1 = (_vm$dossier_credit38 = _vm.dossier_credit) === null || _vm$dossier_credit38 === void 0 || (_vm$dossier_credit38 = _vm$dossier_credit38[_vm.determineCredPubTables((_this$dossier_credit18 = this.dossier_credit) === null || _this$dossier_credit18 === void 0 ? void 0 : _this$dossier_credit18.applied_templ_name)[0]]) === null || _vm$dossier_credit38 === void 0 ? void 0 : _vm$dossier_credit38.denomination_client) !== null && _vm$dossier_credit$_v1 !== void 0 ? _vm$dossier_credit$_v1 : ""))]), _vm._v("\n                un prêt d’un montant global de\n                "), _c("b", [_vm._v(_vm._s(_vm._f("formatNumber")(_vm.arrondirMontantEntier((_vm$decharges_data17 = _vm.decharges_data) === null || _vm$decharges_data17 === void 0 ? void 0 : _vm$decharges_data17.production_en_volume))) + "F/CFA")]), _vm._v("\n                en principal, remboursable sur\n                "), _c("b", [_vm._v(_vm._s((_vm$decharges_data18 = _vm.decharges_data) === null || _vm$decharges_data18 === void 0 ? void 0 : _vm$decharges_data18.duree_initiale))]), _vm._v(" échéances\n                mensuelles à hauteur de\n                "), _c("b", [_vm._v(_vm._s(_vm._f("formatNumber")(_vm.arrondirMontantEntier((_vm$decharges_data19 = _vm.decharges_data) === null || _vm$decharges_data19 === void 0 ? void 0 : _vm$decharges_data19.montant_echeance))) + "\n                    F/CFA")]), _vm._v("\n                chacune.\n            ")]), _vm._v(" "), _c("p", [_vm._v("\n                A cette occasion, vous vous êtes porté(e) caution\n                personnelle solidaire et indivisible de celui-ci par acte\n                sous seing privé aux fins de garantir ses engagements dans\n                la limite du montant maximum de\n                "), _c("b", [_vm._v(_vm._s(_vm._f("formatNumber")(_vm.arrondirMontantEntier((_vm$decharges_data20 = _vm.decharges_data) === null || _vm$decharges_data20 === void 0 ? void 0 : _vm$decharges_data20.montant_echeance))) + "\n                    F/CFA")]), _vm._v(", ce qui induit que vous êtes tenu(e) de l’exécution de\n                l’obligation de payer notre créance dans les mêmes\n                conditions que le Débiteur principal en cas de défaillance\n                de celui-ci.\n            ")]), _vm._v(" "), _c("p", [_vm._v("\n                En cette qualité et conformément aux dispositions légales en\n                vigueur, nous venons par la présente vous informer de la\n                défaillance de Monsieur/Madame\n                "), _c("b", [_vm._v(_vm._s((_vm$dossier_credit$_v10 = (_vm$dossier_credit39 = _vm.dossier_credit) === null || _vm$dossier_credit39 === void 0 || (_vm$dossier_credit39 = _vm$dossier_credit39[_vm.determineCredPubTables((_this$dossier_credit19 = this.dossier_credit) === null || _this$dossier_credit19 === void 0 ? void 0 : _this$dossier_credit19.applied_templ_name)[0]]) === null || _vm$dossier_credit39 === void 0 ? void 0 : _vm$dossier_credit39.denomination_client) !== null && _vm$dossier_credit$_v10 !== void 0 ? _vm$dossier_credit$_v10 : ""))]), _vm._v(", qui n’a pas respecté ses engagements contractuels.\n            ")]), _vm._v(" "), _c("p", [_vm._v("\n                Il reste donc devoir à ce jour à la Compagnie Africaine de\n                Crédit, devenue Compagnie Financière Africaine de Côte\n                d’Ivoire, la somme de\n                "), _c("b", [_vm._v(_vm._s(_vm._f("formatNumber")(_vm.arrondirMontantEntier((_vm$decharges_data21 = _vm.decharges_data) === null || _vm$decharges_data21 === void 0 ? void 0 : _vm$decharges_data21.encours_impaye))) + "\n                    F/CFA (sans les pénalités)")]), _vm._v("\n                en principal.\n            ")]), _vm._v(" "), _c("p", [_vm._v("\n                Nous vous transmettons copie de la lettre de relance restée\n                sans suite et vous demandons par conséquent de prendre les\n                meilleures dispositions afin que la créance susvisée de\n                notre institution soit remboursée dans le délai de huit (8)\n                jours à compter de la réception des présentes.\n            ")]), _vm._v(" "), _c("p", [_vm._v("\n                Passé ce délai sans réaction de votre part, nous procèderons\n                au recouvrement judiciaire de notre créance en principal\n                sans préjudice des intérêts et pénalités de retard ainsi que\n                des frais de procédure qui en découleront.\n            ")]), _vm._v(" "), _c("p", [_vm._v("\n                Dans l’attente, nous vous prions d’agréer, Monsieur/Madame, l’expression de nos salutations respectueuses.\n            ")])]), _vm._v(" "), _c("div", {
    staticClass: "signature"
  }, [((_vm$getPaysInfo9 = _vm.getPaysInfo) === null || _vm$getPaysInfo9 === void 0 ? void 0 : _vm$getPaysInfo9.root) == "CFNTG" ? _c("span", [_c("p", [_vm._v("KOFFI DOSSOU (Responsable recouvrement)")])]) : _c("span", [_c("p", [_vm._v(_vm._s((_vm$responsableRecove3 = _vm.responsableRecovery) === null || _vm$responsableRecove3 === void 0 ? void 0 : _vm$responsableRecove3.name) + " (" + _vm._s((_vm$responsableRecove4 = _vm.responsableRecovery) === null || _vm$responsableRecove4 === void 0 ? void 0 : _vm$responsableRecove4.display_name) + ")")])]), _vm._v(" "), _c("div", {
    staticClass: "tampon"
  }, [_c("p", [_c("img", {
    attrs: {
      src: _vm.tamponDynamique,
      alt: "Tampon ".concat(_vm.getPaysInfo.code)
    }
  })])])])]) : _vm._e(), _vm._v(" "), _vm.event_phase_relance === "LETTRE_INFORMATION_A_LA_CAUTION_AGENCE" ? _c("div", {
    staticClass: "container"
  }, [_c("div", {
    staticClass: "header"
  }, [_c("p", [_vm._v("Fait le " + _vm._s((_vm$formatDate3 = _vm.formatDate(new Date())) !== null && _vm$formatDate3 !== void 0 ? _vm$formatDate3 : ""))]), _vm._v(" "), _c("p", [_vm._v("\n                Nom client:\n                " + _vm._s((_vm$dossier_credit$_v11 = (_vm$dossier_credit40 = _vm.dossier_credit) === null || _vm$dossier_credit40 === void 0 || (_vm$dossier_credit40 = _vm$dossier_credit40[_vm.determineCredPubTables((_this$dossier_credit20 = this.dossier_credit) === null || _this$dossier_credit20 === void 0 ? void 0 : _this$dossier_credit20.applied_templ_name)[0]]) === null || _vm$dossier_credit40 === void 0 ? void 0 : _vm$dossier_credit40.denomination_client) !== null && _vm$dossier_credit$_v11 !== void 0 ? _vm$dossier_credit$_v11 : "") + ".\n                "), _c("br"), _vm._v("\n                (Tel) :\n                " + _vm._s((_vm$dossier_credit$_v12 = (_vm$dossier_credit41 = _vm.dossier_credit) === null || _vm$dossier_credit41 === void 0 || (_vm$dossier_credit41 = _vm$dossier_credit41[_vm.determineCredPubTables((_this$dossier_credit21 = this.dossier_credit) === null || _this$dossier_credit21 === void 0 ? void 0 : _this$dossier_credit21.applied_templ_name)[0]]) === null || _vm$dossier_credit41 === void 0 ? void 0 : _vm$dossier_credit41.contact_client) !== null && _vm$dossier_credit$_v12 !== void 0 ? _vm$dossier_credit$_v12 : "")), _c("br"), _vm._v("\n                Adresse :\n                " + _vm._s((_vm$dossier_credit42 = _vm.dossier_credit) !== null && _vm$dossier_credit42 !== void 0 && (_vm$dossier_credit42 = _vm$dossier_credit42.caf_recorded_file) !== null && _vm$dossier_credit42 !== void 0 && (_vm$dossier_credit42 = _vm$dossier_credit42.client) !== null && _vm$dossier_credit42 !== void 0 && _vm$dossier_credit42.adrescli ? (_vm$dossier_credit$ca6 = (_vm$dossier_credit43 = _vm.dossier_credit) === null || _vm$dossier_credit43 === void 0 || (_vm$dossier_credit43 = _vm$dossier_credit43.caf_recorded_file) === null || _vm$dossier_credit43 === void 0 || (_vm$dossier_credit43 = _vm$dossier_credit43.client) === null || _vm$dossier_credit43 === void 0 ? void 0 : _vm$dossier_credit43.adrescli) !== null && _vm$dossier_credit$ca6 !== void 0 ? _vm$dossier_credit$ca6 : "" : (_vm$dossier_credit$do6 = (_vm$dossier_credit44 = _vm.dossier_credit) === null || _vm$dossier_credit44 === void 0 || (_vm$dossier_credit44 = _vm$dossier_credit44.doss_central_file_recorder) === null || _vm$dossier_credit44 === void 0 || (_vm$dossier_credit44 = _vm$dossier_credit44.client) === null || _vm$dossier_credit44 === void 0 ? void 0 : _vm$dossier_credit44.adrescli) !== null && _vm$dossier_credit$do6 !== void 0 ? _vm$dossier_credit$do6 : "") + "\n            ")])]), _vm._v(" "), _c("div", {
    staticClass: "content"
  }, [_vm._m(5), _vm._v(" "), _c("br"), _vm._v(" "), _c("p", [_vm._v("Mr /Mme")]), _vm._v(" "), _c("p", [_vm._v("\n                Par contrat en date du " + _vm._s((_vm$date_demande_form = _vm.date_demande_formated) !== null && _vm$date_demande_form !== void 0 ? _vm$date_demande_form : "") + ",\n                vous vous êtes portée caution personnelle et solidaire en\n                faveur de notre établissement en garantie des engagements de\n                "), _c("b", [_vm._v(_vm._s((_vm$dossier_credit$_v13 = (_vm$dossier_credit45 = _vm.dossier_credit) === null || _vm$dossier_credit45 === void 0 || (_vm$dossier_credit45 = _vm$dossier_credit45[_vm.determineCredPubTables((_this$dossier_credit22 = this.dossier_credit) === null || _this$dossier_credit22 === void 0 ? void 0 : _this$dossier_credit22.applied_templ_name)[0]]) === null || _vm$dossier_credit45 === void 0 ? void 0 : _vm$dossier_credit45.denomination_client) !== null && _vm$dossier_credit$_v13 !== void 0 ? _vm$dossier_credit$_v13 : ""))]), _vm._v("\n                à hauteur du montant de\n                "), _c("b", [_vm._v(_vm._s(_vm._f("formatNumber")(_vm.arrondirMontantEntier((_vm$decharges_data22 = _vm.decharges_data) === null || _vm$decharges_data22 === void 0 ? void 0 : _vm$decharges_data22.production_en_volume))) + "\n                    francs CFA")]), _vm._v(".\n            ")]), _vm._v(" "), _c("p", [_vm._v("\n                En cette qualité de caution, nous venons par la présente\n                vous informer de la défaillance du client\n                "), _c("b", [_vm._v(_vm._s((_vm$dossier_credit$_v14 = (_vm$dossier_credit46 = _vm.dossier_credit) === null || _vm$dossier_credit46 === void 0 || (_vm$dossier_credit46 = _vm$dossier_credit46[_vm.determineCredPubTables((_this$dossier_credit23 = this.dossier_credit) === null || _this$dossier_credit23 === void 0 ? void 0 : _this$dossier_credit23.applied_templ_name)[0]]) === null || _vm$dossier_credit46 === void 0 ? void 0 : _vm$dossier_credit46.denomination_client) !== null && _vm$dossier_credit$_v14 !== void 0 ? _vm$dossier_credit$_v14 : ""))]), _vm._v("\n                qui n’a pas respecté ses engagements contractuels et reste\n                donc devoir à ce jour à " + _vm._s(_vm.getFiliale) + " la somme de\n                "), _c("b", [_vm._v(_vm._s(_vm._f("formatNumber")(_vm.arrondirMontantEntier((_vm$decharges_data23 = _vm.decharges_data) === null || _vm$decharges_data23 === void 0 ? void 0 : _vm$decharges_data23.encours_impaye))) + "\n                    F/CFA (sans les pénalités)")]), _vm._v(".\n            ")]), _vm._v(" "), _c("p", [_vm._v("\n                Nous vous demandons par conséquent de prendre les meilleures\n                dispositions afin que le montant susvisé soit payé dans les\n                huit (08) jours de la réception de la présente.\n            ")]), _vm._v(" "), _c("p", [_vm._v("\n                Passé ce délai sans réaction de votre part, nous procèderons\n                au recouvrement de notre créance par tout moyen légal.\n            ")]), _vm._v(" "), _c("p", [_vm._v("\n                Dans l’attente, nous vous prions d’agréer Monsieur/Madame\n                "), _c("b", [_vm._v(_vm._s((_vm$dossier_credit$_v15 = (_vm$dossier_credit47 = _vm.dossier_credit) === null || _vm$dossier_credit47 === void 0 || (_vm$dossier_credit47 = _vm$dossier_credit47[_vm.determineCredPubTables((_this$dossier_credit24 = this.dossier_credit) === null || _this$dossier_credit24 === void 0 ? void 0 : _this$dossier_credit24.applied_templ_name)[0]]) === null || _vm$dossier_credit47 === void 0 ? void 0 : _vm$dossier_credit47.denomination_client) !== null && _vm$dossier_credit$_v15 !== void 0 ? _vm$dossier_credit$_v15 : ""))]), _vm._v("\n                nos sincères salutations.\n            ")])]), _vm._v(" "), _c("div", {
    staticClass: "signature"
  }, [_c("p", [_vm._v("\n                " + _vm._s((_vm$chefAgence$name4 = (_vm$chefAgence7 = _vm.chefAgence) === null || _vm$chefAgence7 === void 0 ? void 0 : _vm$chefAgence7.name) !== null && _vm$chefAgence$name4 !== void 0 ? _vm$chefAgence$name4 : "") + " (" + _vm._s((_vm$chefAgence$displa4 = (_vm$chefAgence8 = _vm.chefAgence) === null || _vm$chefAgence8 === void 0 ? void 0 : _vm$chefAgence8.display_name) !== null && _vm$chefAgence$displa4 !== void 0 ? _vm$chefAgence$displa4 : "") + ")\n            ")]), _vm._v(" "), _c("div", {
    staticClass: "tampon"
  }, [_c("p", [_c("img", {
    attrs: {
      src: _vm.tamponDynamique,
      alt: "Tampon ".concat(_vm.getPaysInfo.code)
    }
  })])])])]) : _vm._e()]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("p", [_c("u", [_vm._v("Objet")]), _vm._v(" : Relance échéance impayée")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("p", [_c("u", [_vm._v("Objet")]), _vm._v(" : Seconde relance échéances impayées")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("p", [_c("u", [_vm._v("Objet")]), _vm._v(" : Régularisation Urgente de vos échéances impayées ")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("p", [_c("u", [_vm._v("Objet")]), _vm._v(" : Demande de Présentation de Biens offerts en Gage")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("p", [_c("u", [_vm._v("Objet")]), _vm._v(" : Lettre d’information de la caution et demande de paiement ")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("p", [_c("u", [_vm._v("Objet")]), _vm._v(" : Lettre d’information de la caution et demande de paiement ")]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/recouvrement/LetterOff.vue?vue&type=template&id=2ad1cdba&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/recouvrement/LetterOff.vue?vue&type=template&id=2ad1cdba&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$historique, _vm$getPaysInfo, _vm$formatDate, _vm$historique2, _vm$historique$client, _vm$historique3, _vm$historique$client2, _vm$historique4, _vm$historique5, _vm$historique$info_d, _vm$historique6, _vm$historique7, _vm$historique8, _vm$historique9, _vm$historique$letter, _vm$historique0, _vm$historique1, _vm$convertir_date_ec, _vm$historique10, _vm$convertir_date_ec2, _vm$historique11, _vm$historique12, _vm$historique13, _vm$historique14, _vm$historique$info_a, _vm$historique15, _vm$historique16, _vm$getPaysInfo2, _vm$formatDate2, _vm$historique17, _vm$historique$client3, _vm$historique18, _vm$historique$client4, _vm$historique19, _vm$historique$client5, _vm$historique20, _vm$historique$info_d2, _vm$historique21, _vm$historique$client6, _vm$historique22, _vm$getPaysInfo3, _vm$historique$letter2, _vm$historique23, _vm$arrondirMontantEn, _vm$historique24, _vm$historique$client7, _vm$historique25, _vm$historique26, _vm$historique$info_a2, _vm$historique27, _vm$historique28, _vm$getPaysInfo4, _vm$historique29, _vm$historique30, _vm$historique31, _vm$historique32, _vm$historique33, _vm$historique34, _vm$historique35, _vm$historique36, _vm$authcheckUsr, _vm$getPaysInfo5, _vm$historique37, _vm$getPaysInfo6, _vm$historique38, _vm$historique39, _vm$historique40, _vm$formatDate3, _vm$historique41, _vm$historique$client8, _vm$historique42, _vm$historique$client9, _vm$historique43, _vm$historique$client0, _vm$historique44, _vm$convertir_date_ec3, _vm$historique45, _vm$historique$client1, _vm$historique46, _vm$historique47, _vm$historique$client10, _vm$historique48, _vm$getPaysInfo7, _vm$historique49, _vm$guarantees$nom_pr, _vm$guarantees, _vm$historique50, _vm$historique$info_a3, _vm$historique51, _vm$historique52, _vm$getPaysInfo8, _vm$historique53, _vm$guarantees2, _vm$guarantees3, _vm$historique54, _vm$guarantees4, _vm$historique55, _vm$convertir_date_ec4, _vm$historique56, _vm$historique57, _vm$historique58, _vm$historique$letter3, _vm$historique59, _vm$historique$letter4, _vm$historique60, _vm$historique61, _vm$historique62, _vm$guarantees$nom_pr2, _vm$guarantees5, _vm$historique63, _vm$historique$info_a4, _vm$historique64, _vm$historique65, _vm$getPaysInfo9, _vm$historique66, _vm$guarantees6, _vm$guarantees7, _vm$historique67, _vm$historique68, _vm$convertir_date_ec5, _vm$historique69, _vm$getPaysInfo0, _vm$historique$client11, _vm$historique70, _vm$historique71, _vm$historique$messag, _vm$historique72, _vm$historique$messag2, _vm$historique73, _vm$historique$messag3, _vm$historique74, _vm$historique75, _vm$historique$messag4, _vm$historique76, _vm$guarantees$nom_pr3, _vm$guarantees8, _vm$getPaysInfo1, _vm$historique77, _vm$historique78;
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [((_vm$historique = _vm.historique) === null || _vm$historique === void 0 || (_vm$historique = _vm$historique.letter_data) === null || _vm$historique === void 0 ? void 0 : _vm$historique.letter_slug) === "PREMIERE_LETTRE_DE_RELANCE" ? _c("div", {
    staticClass: "container"
  }, [_c("div", {
    staticClass: "header"
  }, [_c("p", [_vm._v(_vm._s((_vm$getPaysInfo = _vm.getPaysInfo) === null || _vm$getPaysInfo === void 0 ? void 0 : _vm$getPaysInfo.capitale) + " le, " + _vm._s((_vm$formatDate = _vm.formatDate((_vm$historique2 = _vm.historique) === null || _vm$historique2 === void 0 ? void 0 : _vm$historique2.date)) !== null && _vm$formatDate !== void 0 ? _vm$formatDate : ""))]), _vm._v(" "), _c("p", [_vm._v("\n                Nom client : " + _vm._s((_vm$historique$client = (_vm$historique3 = _vm.historique) === null || _vm$historique3 === void 0 || (_vm$historique3 = _vm$historique3.client_info) === null || _vm$historique3 === void 0 ? void 0 : _vm$historique3.name) !== null && _vm$historique$client !== void 0 ? _vm$historique$client : "") + "."), _c("br"), _vm._v("\n                (Tel) : " + _vm._s((_vm$historique$client2 = (_vm$historique4 = _vm.historique) === null || _vm$historique4 === void 0 || (_vm$historique4 = _vm$historique4.client_info) === null || _vm$historique4 === void 0 ? void 0 : _vm$historique4.phone) !== null && _vm$historique$client2 !== void 0 ? _vm$historique$client2 : "")), _c("br"), _vm._v("\n                Adresse : " + _vm._s((_vm$historique5 = _vm.historique) === null || _vm$historique5 === void 0 || (_vm$historique5 = _vm$historique5.client_info) === null || _vm$historique5 === void 0 ? void 0 : _vm$historique5.adresse) + "\n            ")])]), _vm._v(" "), _c("div", {
    staticClass: "content"
  }, [_c("h2", [_vm._v("URGENCE SIGNALEE")]), _vm._v(" "), _c("p", [_vm._v("Par lettre au porteur avec accusé de réception")]), _vm._v(" "), _c("p", [_vm._v("\n                N/Réf : " + _vm._s((_vm$historique$info_d = (_vm$historique6 = _vm.historique) === null || _vm$historique6 === void 0 ? void 0 : _vm$historique6.info_dossier) !== null && _vm$historique$info_d !== void 0 ? _vm$historique$info_d : "")), _c("br")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c("br"), _vm._v(" "), _c("p", [_vm._v("\n                Monsieur /Madame " + _vm._s((_vm$historique7 = _vm.historique) === null || _vm$historique7 === void 0 || (_vm$historique7 = _vm$historique7.client_info) === null || _vm$historique7 === void 0 ? void 0 : _vm$historique7.name) + "\n            ")]), _vm._v(" "), _c("p", [_vm._v("\n                Nous vous rappelons que vous avez sollicité et obtenu de " + _vm._s(_vm.getFiliale) + ", un\n                prêt à hauteur de\n                " + _vm._s(this.convertirEnLettres(_vm.arrondirMontantEntier((_vm$historique8 = _vm.historique) === null || _vm$historique8 === void 0 || (_vm$historique8 = _vm$historique8.letter_data) === null || _vm$historique8 === void 0 || (_vm$historique8 = _vm$historique8.decharge_data) === null || _vm$historique8 === void 0 ? void 0 : _vm$historique8.production_en_volume))) + "\n                (" + _vm._s(_vm._f("formatNumber")(_vm.arrondirMontantEntier((_vm$historique9 = _vm.historique) === null || _vm$historique9 === void 0 || (_vm$historique9 = _vm$historique9.letter_data) === null || _vm$historique9 === void 0 || (_vm$historique9 = _vm$historique9.decharge_data) === null || _vm$historique9 === void 0 ? void 0 : _vm$historique9.production_en_volume))) + ")\n                F/CFA, remboursable en\n                " + _vm._s((_vm$historique$letter = (_vm$historique0 = _vm.historique) === null || _vm$historique0 === void 0 || (_vm$historique0 = _vm$historique0.letter_data) === null || _vm$historique0 === void 0 || (_vm$historique0 = _vm$historique0.decharge_data) === null || _vm$historique0 === void 0 ? void 0 : _vm$historique0.duree_initiale) !== null && _vm$historique$letter !== void 0 ? _vm$historique$letter : "") + " mois échéances\n                mensuelles de\n                " + _vm._s(_vm._f("formatNumber")(_vm.arrondirMontantEntier((_vm$historique1 = _vm.historique) === null || _vm$historique1 === void 0 || (_vm$historique1 = _vm$historique1.letter_data) === null || _vm$historique1 === void 0 || (_vm$historique1 = _vm$historique1.decharge_data) === null || _vm$historique1 === void 0 ? void 0 : _vm$historique1.montant_echeance))) + "\n                F/CFA chacune, allant du\n                " + _vm._s((_vm$convertir_date_ec = _vm.convertir_date_echeance((_vm$historique10 = _vm.historique) === null || _vm$historique10 === void 0 || (_vm$historique10 = _vm$historique10.letter_data) === null || _vm$historique10 === void 0 || (_vm$historique10 = _vm$historique10.decharge_data) === null || _vm$historique10 === void 0 ? void 0 : _vm$historique10.date_premiere_echeance)) !== null && _vm$convertir_date_ec !== void 0 ? _vm$convertir_date_ec : "") + " au\n                " + _vm._s((_vm$convertir_date_ec2 = _vm.convertir_date_echeance((_vm$historique11 = _vm.historique) === null || _vm$historique11 === void 0 || (_vm$historique11 = _vm$historique11.letter_data) === null || _vm$historique11 === void 0 || (_vm$historique11 = _vm$historique11.decharge_data) === null || _vm$historique11 === void 0 ? void 0 : _vm$historique11.date_fin_echeance)) !== null && _vm$convertir_date_ec2 !== void 0 ? _vm$convertir_date_ec2 : "") + "\n            ")]), _vm._v(" "), _c("p", [_vm._v("\n                Cependant, nous constatons que l’échéance mensuelle fixée\n                n’a pas été respectée de sorte que vous restez devoir ce\n                jour à notre institution la somme de\n                "), _c("b", [_vm._v(_vm._s(_vm._f("formatNumber")(_vm.arrondirMontantEntier((_vm$historique12 = _vm.historique) === null || _vm$historique12 === void 0 || (_vm$historique12 = _vm$historique12.letter_data) === null || _vm$historique12 === void 0 || (_vm$historique12 = _vm$historique12.decharge_data) === null || _vm$historique12 === void 0 ? void 0 : _vm$historique12.encours_impaye))) + "\n                    F/CFA (sans les pénalités)")]), _vm._v("\n                à titre d’échéance échue impayée sous réserve des intérêts\n                et pénalités de retard qui continuent à courir.\n            ")]), _vm._v(" "), _c("p", [_vm._v("\n                Par conséquent, nous vous invitons à bien vouloir\n                régulariser votre situation débitrice dans nos livres ce,\n                dans un délai maximum de trois (03) jours à compter de la\n                réception des présentes.\n            ")]), _vm._v(" "), _c("p", [_vm._v("\n                Vous remerciant par avance pour votre règlement diligent,\n                recevez " + _vm._s((_vm$historique13 = _vm.historique) === null || _vm$historique13 === void 0 || (_vm$historique13 = _vm$historique13.client_info) === null || _vm$historique13 === void 0 ? void 0 : _vm$historique13.name) + " nos sincères salutations.\n            ")])]), _vm._v(" "), _c("div", {
    staticClass: "signature"
  }, [_c("p", [_vm._v("\n                " + _vm._s((_vm$historique14 = _vm.historique) === null || _vm$historique14 === void 0 || (_vm$historique14 = _vm$historique14.info_agence) === null || _vm$historique14 === void 0 || (_vm$historique14 = _vm$historique14.actors_recovery) === null || _vm$historique14 === void 0 || (_vm$historique14 = _vm$historique14.chef_agence) === null || _vm$historique14 === void 0 ? void 0 : _vm$historique14.name) + "\n                (" + _vm._s((_vm$historique$info_a = (_vm$historique15 = _vm.historique) === null || _vm$historique15 === void 0 || (_vm$historique15 = _vm$historique15.info_agence) === null || _vm$historique15 === void 0 || (_vm$historique15 = _vm$historique15.actors_recovery) === null || _vm$historique15 === void 0 || (_vm$historique15 = _vm$historique15.chef_agence) === null || _vm$historique15 === void 0 ? void 0 : _vm$historique15.display_name) !== null && _vm$historique$info_a !== void 0 ? _vm$historique$info_a : "") + ")\n            ")])]), _vm._v(" "), _c("div", {
    staticClass: "tampon"
  }, [_c("p", [_c("img", {
    attrs: {
      src: _vm.tamponDynamique,
      alt: "Tampon ".concat(_vm.getPaysInfo.code)
    }
  })])])]) : _vm._e(), _vm._v(" "), ((_vm$historique16 = _vm.historique) === null || _vm$historique16 === void 0 || (_vm$historique16 = _vm$historique16.letter_data) === null || _vm$historique16 === void 0 ? void 0 : _vm$historique16.letter_slug) === "DEUXIEME_LETTRE_DE_RELANCE" ? _c("div", {
    staticClass: "container"
  }, [_c("div", {
    staticClass: "header"
  }, [_c("p", [_vm._v(_vm._s((_vm$getPaysInfo2 = _vm.getPaysInfo) === null || _vm$getPaysInfo2 === void 0 ? void 0 : _vm$getPaysInfo2.capitale) + " le, " + _vm._s((_vm$formatDate2 = _vm.formatDate((_vm$historique17 = _vm.historique) === null || _vm$historique17 === void 0 ? void 0 : _vm$historique17.date)) !== null && _vm$formatDate2 !== void 0 ? _vm$formatDate2 : ""))]), _vm._v(" "), _c("p", [_vm._v("\n                Nom client : " + _vm._s((_vm$historique$client3 = (_vm$historique18 = _vm.historique) === null || _vm$historique18 === void 0 || (_vm$historique18 = _vm$historique18.client_info) === null || _vm$historique18 === void 0 ? void 0 : _vm$historique18.name) !== null && _vm$historique$client3 !== void 0 ? _vm$historique$client3 : "") + "."), _c("br"), _vm._v("\n                (Tel) : " + _vm._s((_vm$historique$client4 = (_vm$historique19 = _vm.historique) === null || _vm$historique19 === void 0 || (_vm$historique19 = _vm$historique19.client_info) === null || _vm$historique19 === void 0 ? void 0 : _vm$historique19.phone) !== null && _vm$historique$client4 !== void 0 ? _vm$historique$client4 : "")), _c("br"), _vm._v("\n                Adresse : " + _vm._s((_vm$historique$client5 = (_vm$historique20 = _vm.historique) === null || _vm$historique20 === void 0 || (_vm$historique20 = _vm$historique20.client_info) === null || _vm$historique20 === void 0 ? void 0 : _vm$historique20.adresse) !== null && _vm$historique$client5 !== void 0 ? _vm$historique$client5 : "") + "\n            ")])]), _vm._v(" "), _c("div", {
    staticClass: "content"
  }, [_c("h2", [_vm._v("URGENCE SIGNALEE")]), _vm._v(" "), _c("p", [_vm._v("Par lettre au porteur avec accusé de réception")]), _vm._v(" "), _c("p", [_vm._v("\n                N/Réf : " + _vm._s((_vm$historique$info_d2 = (_vm$historique21 = _vm.historique) === null || _vm$historique21 === void 0 ? void 0 : _vm$historique21.info_dossier) !== null && _vm$historique$info_d2 !== void 0 ? _vm$historique$info_d2 : "")), _c("br"), _vm._v("\n                V/Réf : A nous communiquer\n            ")]), _vm._v(" "), _c("p", [_vm._v("Monsieur/Madame " + _vm._s((_vm$historique$client6 = (_vm$historique22 = _vm.historique) === null || _vm$historique22 === void 0 || (_vm$historique22 = _vm$historique22.client_info) === null || _vm$historique22 === void 0 ? void 0 : _vm$historique22.name) !== null && _vm$historique$client6 !== void 0 ? _vm$historique$client6 : ""))]), _vm._v(" "), _c("p", [_vm._v("\n                Nous avons fait tenir il y a quelques jours de cela une\n                lettre de relance pour parvenir au règlement de votre\n                échéance impayée au regard de l’échéancier convenu dans le\n                cadre de ma convention de prêt avec " + _vm._s((_vm$getPaysInfo3 = _vm.getPaysInfo) === null || _vm$getPaysInfo3 === void 0 ? void 0 : _vm$getPaysInfo3.lib) + ".\n            ")]), _vm._v(" "), _c("p", [_vm._v("\n                Cependant, malgré cette invitation à un règlement amiable et\n                diligent, nous constatons que vous n’avez pas effectué le\n                paiement attendu pour la régularisation de votre situation\n                débitrice dans nos livres, de sorte que vous restez toujours\n                nous devoir.\n            ")]), _vm._v(" "), _c("p", [_vm._v("\n                Par conséquent, nous vous invitons à bien vouloir verser sur\n                votre compte numéro°\n                "), _c("b", [_vm._v(_vm._s((_vm$historique$letter2 = (_vm$historique23 = _vm.historique) === null || _vm$historique23 === void 0 || (_vm$historique23 = _vm$historique23.letter_data) === null || _vm$historique23 === void 0 || (_vm$historique23 = _vm$historique23.decharge_data) === null || _vm$historique23 === void 0 ? void 0 : _vm$historique23.numero_compte) !== null && _vm$historique$letter2 !== void 0 ? _vm$historique$letter2 : ""))]), _vm._v("\n                la somme de\n                "), _c("b", [_vm._v(_vm._s((_vm$arrondirMontantEn = _vm.arrondirMontantEntier((_vm$historique24 = _vm.historique) === null || _vm$historique24 === void 0 || (_vm$historique24 = _vm$historique24.letter_data) === null || _vm$historique24 === void 0 || (_vm$historique24 = _vm$historique24.decharge_data) === null || _vm$historique24 === void 0 ? void 0 : _vm$historique24.encours_impaye)) !== null && _vm$arrondirMontantEn !== void 0 ? _vm$arrondirMontantEn : "") + "\n                    FCFA\n                ")]), _vm._v("\n                représentant le montant de votre échéance échue impayée à ce\n                jour sans préjudice des intérêts et pénalités qui continuent\n                à courir et ce dans un délai maximum de huit (08) jours à\n                compter de la réception des présentes.\n            ")]), _vm._v(" "), _c("p", [_vm._v("\n                En cas d’inexécution de votre part dans le délai ci-dessus\n                indiqué, nous nous verrons obligés de constater le défaut de\n                paiement et de poursuivre par toute voie de droit et tous\n                frais à votre charge le recouvrement de la totalité de notre\n                créance.\n            ")]), _vm._v(" "), _c("p", [_vm._v("\n                Dans l’attente d’une prompte réaction, nous vous prions de\n                recevoir Monsieur/Madame\n                " + _vm._s((_vm$historique$client7 = (_vm$historique25 = _vm.historique) === null || _vm$historique25 === void 0 || (_vm$historique25 = _vm$historique25.client_info) === null || _vm$historique25 === void 0 ? void 0 : _vm$historique25.name) !== null && _vm$historique$client7 !== void 0 ? _vm$historique$client7 : "") + " nos sincères\n                salutations.\n            ")])]), _vm._v(" "), _c("div", {
    staticClass: "signature"
  }, [_c("p", [_vm._v("\n                " + _vm._s((_vm$historique26 = _vm.historique) === null || _vm$historique26 === void 0 || (_vm$historique26 = _vm$historique26.info_agence) === null || _vm$historique26 === void 0 || (_vm$historique26 = _vm$historique26.actors_recovery) === null || _vm$historique26 === void 0 || (_vm$historique26 = _vm$historique26.chef_agence) === null || _vm$historique26 === void 0 ? void 0 : _vm$historique26.name) + "\n                (" + _vm._s((_vm$historique$info_a2 = (_vm$historique27 = _vm.historique) === null || _vm$historique27 === void 0 || (_vm$historique27 = _vm$historique27.info_agence) === null || _vm$historique27 === void 0 || (_vm$historique27 = _vm$historique27.actors_recovery) === null || _vm$historique27 === void 0 || (_vm$historique27 = _vm$historique27.chef_agence) === null || _vm$historique27 === void 0 ? void 0 : _vm$historique27.display_name) !== null && _vm$historique$info_a2 !== void 0 ? _vm$historique$info_a2 : "") + ")\n            ")])]), _vm._v(" "), _c("div", {
    staticClass: "tampon"
  }, [_c("p", [_c("img", {
    attrs: {
      src: _vm.tamponDynamique,
      alt: "Tampon ".concat(_vm.getPaysInfo.code)
    }
  })])])]) : _vm._e(), _vm._v(" "), ((_vm$historique28 = _vm.historique) === null || _vm$historique28 === void 0 || (_vm$historique28 = _vm$historique28.letter_data) === null || _vm$historique28 === void 0 ? void 0 : _vm$historique28.letter_slug) === "TROISIEME_LETTRE_DE_RELANCE_CDR" ? _c("div", {
    staticClass: "container"
  }, [_c("div", {
    staticClass: "header"
  }, [_c("p", [_vm._v(_vm._s((_vm$getPaysInfo4 = _vm.getPaysInfo) === null || _vm$getPaysInfo4 === void 0 ? void 0 : _vm$getPaysInfo4.capitale) + " le, " + _vm._s(_vm.formatDate((_vm$historique29 = _vm.historique) === null || _vm$historique29 === void 0 ? void 0 : _vm$historique29.date)))]), _vm._v(" "), _c("p", [_vm._v("\n                Nom client: " + _vm._s((_vm$historique30 = _vm.historique) === null || _vm$historique30 === void 0 || (_vm$historique30 = _vm$historique30.client_info) === null || _vm$historique30 === void 0 ? void 0 : _vm$historique30.name) + "."), _c("br"), _vm._v("\n                (Tel) : " + _vm._s((_vm$historique31 = _vm.historique) === null || _vm$historique31 === void 0 || (_vm$historique31 = _vm$historique31.client_info) === null || _vm$historique31 === void 0 ? void 0 : _vm$historique31.phone)), _c("br"), _vm._v("\n                Adresse:" + _vm._s((_vm$historique32 = _vm.historique) === null || _vm$historique32 === void 0 || (_vm$historique32 = _vm$historique32.client_info) === null || _vm$historique32 === void 0 ? void 0 : _vm$historique32.adresse) + "\n            ")])]), _vm._v(" "), _c("div", {
    staticClass: "content"
  }, [_c("h2", [_vm._v("URGENCE SIGNALEE")]), _vm._v(" "), _c("p", [_vm._v("Par lettre au porteur avec accusé de réception")]), _vm._v(" "), _c("p", [_vm._v("\n                A l’attention particulière de M./Mme\n                " + _vm._s((_vm$historique33 = _vm.historique) === null || _vm$historique33 === void 0 || (_vm$historique33 = _vm$historique33.client_info) === null || _vm$historique33 === void 0 ? void 0 : _vm$historique33.name) + ".\n            ")]), _vm._v(" "), _c("p", [_vm._v("\n                N/Réf : " + _vm._s((_vm$historique34 = _vm.historique) === null || _vm$historique34 === void 0 ? void 0 : _vm$historique34.info_dossier)), _c("br")]), _vm._v(" "), _vm._m(1), _vm._v(" "), _c("br"), _vm._v(" "), _c("p", [_vm._v("\n                Monsieur/Madame " + _vm._s((_vm$historique35 = _vm.historique) === null || _vm$historique35 === void 0 || (_vm$historique35 = _vm$historique35.client_info) === null || _vm$historique35 === void 0 ? void 0 : _vm$historique35.name) + "\n            ")]), _vm._v(" "), _c("p", [_vm._v("\n                Nous revenons vers vous relativement à la situation très\n                préoccupante de votre compte dans nos livres due aux\n                échéances impayées sur le prêt qui vous a été accordé.\n            ")]), _vm._v(" "), _c("p", [_vm._v("\n                Malheureusement, cette situation reste sans solutions malgré\n                les appels et courriers de relance de votre gestionnaire en\n                Agence.\n            ")]), _vm._v(" "), _c("p", [_vm._v("\n                Pour rappel, sauf erreur ou omission, vous restez à ce jour\n                nous devoir la somme de\n                "), _c("b", [_vm._v(_vm._s(_vm._f("formatNumber")(_vm.arrondirMontantEntier((_vm$historique36 = _vm.historique) === null || _vm$historique36 === void 0 || (_vm$historique36 = _vm$historique36.letter_data) === null || _vm$historique36 === void 0 || (_vm$historique36 = _vm$historique36.decharge_data) === null || _vm$historique36 === void 0 ? void 0 : _vm$historique36.encours_impaye))) + "\n                    francs CFA (sans les pénalités) .")]), _vm._v("\n                en principal et accessoires sous réserve des échéances à\n                échoir ainsi que des intérêts et pénalités de retard à\n                venir.\n            ")]), _vm._v(" "), _c("p", [_vm._v("\n                À cet effet, après un retard de paiement de plus de\n                "), _c("b", [_vm._v("huit (08) jours")]), _vm._v(", nous vous informons par la présente\n                que la gestion de votre compte a été transférée au\n                Département Recouvrement et sera prise en charge désormais\n                par Madame /Monsieur "), _c("b", [_vm._v(_vm._s((_vm$authcheckUsr = _vm.authcheckUsr) === null || _vm$authcheckUsr === void 0 ? void 0 : _vm$authcheckUsr.name))]), _vm._v(" Chargé(e) de\n                Recouvrement que vous pourrez contacter au "), _c("b", [_vm._v(" " + _vm._s((_vm$getPaysInfo5 = _vm.getPaysInfo) === null || _vm$getPaysInfo5 === void 0 ? void 0 : _vm$getPaysInfo5.indicatif) + " " + _vm._s((_vm$historique37 = _vm.historique) === null || _vm$historique37 === void 0 || (_vm$historique37 = _vm$historique37.letter_data) === null || _vm$historique37 === void 0 || (_vm$historique37 = _vm$historique37.sender_info) === null || _vm$historique37 === void 0 ? void 0 : _vm$historique37.contact_whatsap))])]), _vm._v(" "), _c("p", [_vm._v("\n                En raison de ce qui précède, nous vous sommons de procéder à\n                la régularisation de la situation débitrice de votre compte\n                dans le délai de huit (8) jours et ce dès réception de la\n                présente.\n            ")]), _vm._v(" "), _c("p", [_vm._v("\n                Passé ce délai sans réaction de votre part, nous procèderons\n                sans autre avis à la transmission de votre dossier au\n                service contentieux afin d’engager la réalisation immédiate\n                de toutes les garanties offertes à notre profit ainsi que\n                des poursuites judiciaires pour recouvrer la totalité de\n                notre créance.\n            ")]), _vm._v(" "), _c("p", [_vm._v("\n                Dans l’attente d’un amiable et prompt règlement de votre\n                part,\n            ")]), _vm._v(" "), _c("p", [_vm._v("Recevez Monsieur nos meilleures salutations.")])]), _vm._v(" "), _c("div", {
    staticClass: "signature"
  }, [((_vm$getPaysInfo6 = _vm.getPaysInfo) === null || _vm$getPaysInfo6 === void 0 ? void 0 : _vm$getPaysInfo6.root) == "CFNTG" ? _c("span", [_c("p", [_vm._v("KOFFI DOSSOU (Responsable recouvrement)")])]) : _c("span", [_c("p", [_vm._v("\n                    " + _vm._s((_vm$historique38 = _vm.historique) === null || _vm$historique38 === void 0 || (_vm$historique38 = _vm$historique38.info_agence) === null || _vm$historique38 === void 0 || (_vm$historique38 = _vm$historique38.actors_recovery) === null || _vm$historique38 === void 0 || (_vm$historique38 = _vm$historique38.recovery_team1) === null || _vm$historique38 === void 0 || (_vm$historique38 = _vm$historique38.responsable) === null || _vm$historique38 === void 0 ? void 0 : _vm$historique38.name) + "\n                    (" + _vm._s((_vm$historique39 = _vm.historique) === null || _vm$historique39 === void 0 || (_vm$historique39 = _vm$historique39.info_agence) === null || _vm$historique39 === void 0 || (_vm$historique39 = _vm$historique39.actors_recovery) === null || _vm$historique39 === void 0 || (_vm$historique39 = _vm$historique39.recovery_team1) === null || _vm$historique39 === void 0 || (_vm$historique39 = _vm$historique39.responsable) === null || _vm$historique39 === void 0 ? void 0 : _vm$historique39.display_name) + ")\n                ")])])]), _vm._v(" "), _c("div", {
    staticClass: "tampon"
  }, [_c("p", [_c("img", {
    attrs: {
      src: _vm.tamponDynamique,
      alt: "Tampon ".concat(_vm.getPaysInfo.code)
    }
  })])])]) : _vm._e(), _vm._v(" "), ((_vm$historique40 = _vm.historique) === null || _vm$historique40 === void 0 || (_vm$historique40 = _vm$historique40.letter_data) === null || _vm$historique40 === void 0 ? void 0 : _vm$historique40.letter_slug) === "LETTRE_INFORMATION_A_LA_CAUTION_AGENCE" ? _c("div", {
    staticClass: "container"
  }, [_c("div", {
    staticClass: "header"
  }, [_c("p", [_vm._v("Fait le " + _vm._s((_vm$formatDate3 = _vm.formatDate((_vm$historique41 = _vm.historique) === null || _vm$historique41 === void 0 ? void 0 : _vm$historique41.date)) !== null && _vm$formatDate3 !== void 0 ? _vm$formatDate3 : ""))]), _vm._v(" "), _c("p", [_vm._v("\n                M/Mme " + _vm._s((_vm$historique$client8 = (_vm$historique42 = _vm.historique) === null || _vm$historique42 === void 0 || (_vm$historique42 = _vm$historique42.client_info) === null || _vm$historique42 === void 0 ? void 0 : _vm$historique42.name) !== null && _vm$historique$client8 !== void 0 ? _vm$historique$client8 : "") + "."), _c("br"), _vm._v("\n                (Tel) : " + _vm._s((_vm$historique$client9 = (_vm$historique43 = _vm.historique) === null || _vm$historique43 === void 0 || (_vm$historique43 = _vm$historique43.client_info) === null || _vm$historique43 === void 0 ? void 0 : _vm$historique43.phone) !== null && _vm$historique$client9 !== void 0 ? _vm$historique$client9 : "")), _c("br"), _vm._v("\n                Adresse : " + _vm._s((_vm$historique$client0 = (_vm$historique44 = _vm.historique) === null || _vm$historique44 === void 0 || (_vm$historique44 = _vm$historique44.client_info) === null || _vm$historique44 === void 0 ? void 0 : _vm$historique44.adresse) !== null && _vm$historique$client0 !== void 0 ? _vm$historique$client0 : "") + "\n            ")])]), _vm._v(" "), _c("div", {
    staticClass: "content"
  }, [_c("p", [_vm._v("Mr /Mme")]), _vm._v(" "), _c("p", [_vm._v("\n                Par contrat en date du " + _vm._s((_vm$convertir_date_ec3 = _vm.convertir_date_echeance((_vm$historique45 = _vm.historique) === null || _vm$historique45 === void 0 || (_vm$historique45 = _vm$historique45.letter_data) === null || _vm$historique45 === void 0 || (_vm$historique45 = _vm$historique45.decharge_data) === null || _vm$historique45 === void 0 ? void 0 : _vm$historique45.date_mise_en_place)) !== null && _vm$convertir_date_ec3 !== void 0 ? _vm$convertir_date_ec3 : "") + ",\n                vous vous êtes portée caution personnelle et solidaire en\n                faveur de notre établissement en garantie des engagements de\n                "), _c("b", [_vm._v(_vm._s((_vm$historique$client1 = (_vm$historique46 = _vm.historique) === null || _vm$historique46 === void 0 || (_vm$historique46 = _vm$historique46.client_info) === null || _vm$historique46 === void 0 ? void 0 : _vm$historique46.name) !== null && _vm$historique$client1 !== void 0 ? _vm$historique$client1 : ""))]), _vm._v(" à hauteur du montant\n                de\n                "), _c("b", [_vm._v("\n                    " + _vm._s(_vm._f("formatNumber")(_vm.arrondirMontantEntier((_vm$historique47 = _vm.historique) === null || _vm$historique47 === void 0 || (_vm$historique47 = _vm$historique47.letter_data) === null || _vm$historique47 === void 0 || (_vm$historique47 = _vm$historique47.decharge_data) === null || _vm$historique47 === void 0 ? void 0 : _vm$historique47.production_en_volume))) + "\n                    francs CFA")]), _vm._v(".\n            ")]), _vm._v(" "), _c("p", [_vm._v("\n                En cette qualité de caution, nous venons par la présente\n                vous informer de la défaillance du client\n                "), _c("b", [_vm._v(_vm._s((_vm$historique$client10 = (_vm$historique48 = _vm.historique) === null || _vm$historique48 === void 0 || (_vm$historique48 = _vm$historique48.client_info) === null || _vm$historique48 === void 0 ? void 0 : _vm$historique48.name) !== null && _vm$historique$client10 !== void 0 ? _vm$historique$client10 : ""))]), _vm._v(" qui n’a pas respecté\n                ses engagements contractuels et reste donc devoir à ce jour\n                à " + _vm._s((_vm$getPaysInfo7 = _vm.getPaysInfo) === null || _vm$getPaysInfo7 === void 0 ? void 0 : _vm$getPaysInfo7.lib) + " la somme de\n                "), _c("b", [_vm._v("\n                    " + _vm._s(_vm._f("formatNumber")(_vm.arrondirMontantEntier((_vm$historique49 = _vm.historique) === null || _vm$historique49 === void 0 || (_vm$historique49 = _vm$historique49.letter_data) === null || _vm$historique49 === void 0 || (_vm$historique49 = _vm$historique49.decharge_data) === null || _vm$historique49 === void 0 ? void 0 : _vm$historique49.encours_impaye))) + "\n                    F/CFA")]), _vm._v(".\n            ")]), _vm._v(" "), _c("p", [_vm._v("\n                Nous vous demandons par conséquent de prendre les meilleures\n                dispositions afin que le montant susvisé soit payé dans les\n                huit (08) jours de la réception de la présente.\n            ")]), _vm._v(" "), _c("p", [_vm._v("\n                Passé ce délai sans réaction de votre part, nous procèderons\n                au recouvrement de notre créance par tout moyen légal.\n            ")]), _vm._v(" "), _c("p", [_vm._v("\n                Dans l’attente, nous vous prions d’agréer Monsieur/Madame\n                "), _c("b", [_vm._v(_vm._s((_vm$guarantees$nom_pr = (_vm$guarantees = _vm.guarantees) === null || _vm$guarantees === void 0 ? void 0 : _vm$guarantees.nom_prenoms) !== null && _vm$guarantees$nom_pr !== void 0 ? _vm$guarantees$nom_pr : ""))]), _vm._v(" nos sincères\n                salutations.\n            ")])]), _vm._v(" "), _c("div", {
    staticClass: "signature"
  }, [_c("p", [_vm._v("\n\n                " + _vm._s((_vm$historique50 = _vm.historique) === null || _vm$historique50 === void 0 || (_vm$historique50 = _vm$historique50.info_agence) === null || _vm$historique50 === void 0 || (_vm$historique50 = _vm$historique50.actors_recovery) === null || _vm$historique50 === void 0 || (_vm$historique50 = _vm$historique50.chef_agence) === null || _vm$historique50 === void 0 ? void 0 : _vm$historique50.name) + "\n                (" + _vm._s((_vm$historique$info_a3 = (_vm$historique51 = _vm.historique) === null || _vm$historique51 === void 0 || (_vm$historique51 = _vm$historique51.info_agence) === null || _vm$historique51 === void 0 || (_vm$historique51 = _vm$historique51.actors_recovery) === null || _vm$historique51 === void 0 || (_vm$historique51 = _vm$historique51.chef_agence) === null || _vm$historique51 === void 0 ? void 0 : _vm$historique51.display_name) !== null && _vm$historique$info_a3 !== void 0 ? _vm$historique$info_a3 : "") + ")\n            ")]), _vm._v(" "), _c("div", {
    staticClass: "tampon"
  }, [_c("p", [_c("img", {
    attrs: {
      src: _vm.tamponDynamique,
      alt: "Tampon ".concat(_vm.getPaysInfo.code)
    }
  })])])])]) : _vm._e(), _vm._v(" "), ((_vm$historique52 = _vm.historique) === null || _vm$historique52 === void 0 || (_vm$historique52 = _vm$historique52.letter_data) === null || _vm$historique52 === void 0 ? void 0 : _vm$historique52.letter_slug) === "LETTRE_DE_PRESENTATION_DE_BIEN_GAGE" ? _c("div", {
    staticClass: "container"
  }, [_c("div", {
    staticClass: "header"
  }, [_c("p", [_vm._v("\n                " + _vm._s((_vm$getPaysInfo8 = _vm.getPaysInfo) === null || _vm$getPaysInfo8 === void 0 ? void 0 : _vm$getPaysInfo8.capitale) + " le, " + _vm._s(_vm.formatDate((_vm$historique53 = _vm.historique) === null || _vm$historique53 === void 0 ? void 0 : _vm$historique53.date)) + "\n            ")]), _vm._v(" "), _c("p", [_vm._v("\n                Nom client: " + _vm._s((_vm$guarantees2 = _vm.guarantees) === null || _vm$guarantees2 === void 0 ? void 0 : _vm$guarantees2.nom_prenoms) + ".\n                "), _c("br"), _vm._v("\n                (Tel) : " + _vm._s((_vm$guarantees3 = _vm.guarantees) === null || _vm$guarantees3 === void 0 ? void 0 : _vm$guarantees3.phone)), _c("br"), _vm._v("\n                Adresse: " + _vm._s((_vm$historique54 = _vm.historique) === null || _vm$historique54 === void 0 || (_vm$historique54 = _vm$historique54.client_info) === null || _vm$historique54 === void 0 ? void 0 : _vm$historique54.adresse) + "\n            ")])]), _vm._v(" "), _c("div", {
    staticClass: "content"
  }, [_c("h2", [_vm._v("URGENCE SIGNALEE")]), _vm._v(" "), _c("p", [_vm._v("Par lettre au porteur avec accusé de réception")]), _vm._v(" "), _c("p", [_vm._v("\n                A l’attention particulière de Monsieur/Madame\n                " + _vm._s((_vm$guarantees4 = _vm.guarantees) === null || _vm$guarantees4 === void 0 ? void 0 : _vm$guarantees4.nom_prenoms) + ".\n            ")]), _vm._v(" "), _c("p", [_vm._v("N/Réf: " + _vm._s((_vm$historique55 = _vm.historique) === null || _vm$historique55 === void 0 ? void 0 : _vm$historique55.info_dossier))]), _vm._v(" "), _vm._m(2), _vm._v(" "), _c("br"), _vm._v(" "), _c("p", [_vm._v("Monsieur /Madame")]), _vm._v(" "), _c("p", [_vm._v("\n                Pour mémoire, suivant convention de prêt en date du\n                "), _c("b", [_vm._v(" " + _vm._s((_vm$convertir_date_ec4 = _vm.convertir_date_echeance((_vm$historique56 = _vm.historique) === null || _vm$historique56 === void 0 || (_vm$historique56 = _vm$historique56.letter_data) === null || _vm$historique56 === void 0 || (_vm$historique56 = _vm$historique56.decharge_data) === null || _vm$historique56 === void 0 ? void 0 : _vm$historique56.date_mise_en_place)) !== null && _vm$convertir_date_ec4 !== void 0 ? _vm$convertir_date_ec4 : ""))]), _vm._v(", la société " + _vm._s((_vm$historique57 = _vm.historique) === null || _vm$historique57 === void 0 || (_vm$historique57 = _vm$historique57.client_info) === null || _vm$historique57 === void 0 ? void 0 : _vm$historique57.name) + " a sollicité et obtenu de notre institution un prêt à\n                hauteur de\n                "), _c("b", [_vm._v(" " + _vm._s(_vm._f("formatNumber")(_vm.arrondirMontantEntier((_vm$historique58 = _vm.historique) === null || _vm$historique58 === void 0 || (_vm$historique58 = _vm$historique58.letter_data) === null || _vm$historique58 === void 0 || (_vm$historique58 = _vm$historique58.decharge_data) === null || _vm$historique58 === void 0 ? void 0 : _vm$historique58.production_en_volume))))]), _vm._v(" en\n                principal, remboursable sur une durée maximale de\n                " + _vm._s((_vm$historique$letter3 = (_vm$historique59 = _vm.historique) === null || _vm$historique59 === void 0 || (_vm$historique59 = _vm$historique59.letter_data) === null || _vm$historique59 === void 0 || (_vm$historique59 = _vm$historique59.decharge_data) === null || _vm$historique59 === void 0 ? void 0 : _vm$historique59.duree_credit) !== null && _vm$historique$letter3 !== void 0 ? _vm$historique$letter3 : "") + " mois à compter du\n                "), _c("b", [_vm._v(_vm._s((_vm$historique$letter4 = (_vm$historique60 = _vm.historique) === null || _vm$historique60 === void 0 || (_vm$historique60 = _vm$historique60.letter_data) === null || _vm$historique60 === void 0 || (_vm$historique60 = _vm$historique60.decharge_data) === null || _vm$historique60 === void 0 ? void 0 : _vm$historique60.date_echeance) !== null && _vm$historique$letter4 !== void 0 ? _vm$historique$letter4 : ""))]), _vm._v(".\n            ")]), _vm._v(" "), _c("p", [_vm._v("\n                Cependant, la société\n                " + _vm._s((_vm$historique61 = _vm.historique) === null || _vm$historique61 === void 0 || (_vm$historique61 = _vm$historique61.client_info) === null || _vm$historique61 === void 0 ? void 0 : _vm$historique61.name) + "\n                ne respecte toujours pas ses échéances mensuelles de\n                remboursement, de sorte qu’elle cumule plusieurs échéances\n                échues et impayées qui se chiffrent à date à la somme de\n                "), _c("b", [_vm._v(_vm._s(_vm._f("formatNumber")(_vm.arrondirMontantEntier((_vm$historique62 = _vm.historique) === null || _vm$historique62 === void 0 || (_vm$historique62 = _vm$historique62.letter_data) === null || _vm$historique62 === void 0 || (_vm$historique62 = _vm$historique62.decharge_data) === null || _vm$historique62 === void 0 ? void 0 : _vm$historique62.encours_impaye))) + " FCFA (sans les pénalités)\n                ")]), _vm._v("\n                en principal sous réserves des échéances, pénalités et\n                intérêts à échoir.\n            ")]), _vm._v(" "), _c("p", [_vm._v("\n                Toutes ses perspectives et promesses de paiements afin de\n                régulariser sa situation débitrice dans nos livres sont\n                restées vaines jusqu’à ce jour.\n            ")]), _vm._v(" "), _c("p", [_vm._v("\n                Cette situation cause à notre Institution un énorme\n                préjudice et ne saurait davantage perdurer.\n            ")]), _vm._v(" "), _c("p", [_vm._v("\n                C’est pourquoi nous vous invitons à mettre à la disposition\n                de notre service juridique les véhicules gagés susvisés\n                ainsi que les documents y afférents (carte grise, visite\n                technique…) dans un délai maximum de huit (08) jours à\n                compter de la réception des présentes afin de nous permettre\n                de nous conformer à nos procédures internes de vérification\n                de la régularité des inscriptions et de réalisation amiable\n                des sûretés.\n            ")]), _vm._v(" "), _c("p", [_vm._v("\n                Aussi, vous rappelant les dispositions de l’article 469 du\n                code pénal qui dispose que « Est puni d’un emprisonnement\n                d’un à cinq ans et d’une amende de 300.000 à 3.000.000 de\n                francs […] 2° le débiteur emprunteur ou tiers donneur de\n                gage qui détruit ou détourne l’objet par lui donné à titre\n                de gage ; […] », nous vous invitons à prendre contact avec\n                notre service juridique dans le délai sus-indiqué à l’effet\n                de discuter des conditions de réalisation desdites sûretés.\n            ")]), _vm._v(" "), _c("p", [_vm._v("\n                Tout en espérant que vous privilégierez la voie amiable pour\n                la résolution de cette affaire, nous vous prions de recevoir\n                Monsieur /Madame\n                " + _vm._s((_vm$guarantees$nom_pr2 = (_vm$guarantees5 = _vm.guarantees) === null || _vm$guarantees5 === void 0 ? void 0 : _vm$guarantees5.nom_prenoms) !== null && _vm$guarantees$nom_pr2 !== void 0 ? _vm$guarantees$nom_pr2 : "") + "\n                nos meilleures salutations.\n            ")])]), _vm._v(" "), _c("div", {
    staticClass: "signature"
  }, [_c("p", [_vm._v("\n                " + _vm._s((_vm$historique63 = _vm.historique) === null || _vm$historique63 === void 0 || (_vm$historique63 = _vm$historique63.info_agence) === null || _vm$historique63 === void 0 || (_vm$historique63 = _vm$historique63.actors_recovery) === null || _vm$historique63 === void 0 || (_vm$historique63 = _vm$historique63.chef_agence) === null || _vm$historique63 === void 0 ? void 0 : _vm$historique63.name) + "\n                (" + _vm._s((_vm$historique$info_a4 = (_vm$historique64 = _vm.historique) === null || _vm$historique64 === void 0 || (_vm$historique64 = _vm$historique64.info_agence) === null || _vm$historique64 === void 0 || (_vm$historique64 = _vm$historique64.actors_recovery) === null || _vm$historique64 === void 0 || (_vm$historique64 = _vm$historique64.chef_agence) === null || _vm$historique64 === void 0 ? void 0 : _vm$historique64.display_name) !== null && _vm$historique$info_a4 !== void 0 ? _vm$historique$info_a4 : "") + ")\n            ")]), _vm._v(" "), _c("div", {
    staticClass: "tampon"
  }, [_c("p", [_c("img", {
    attrs: {
      src: _vm.tamponDynamique,
      alt: "Tampon ".concat(_vm.getPaysInfo.code)
    }
  })])])])]) : _vm._e(), _vm._v(" "), ((_vm$historique65 = _vm.historique) === null || _vm$historique65 === void 0 || (_vm$historique65 = _vm$historique65.letter_data) === null || _vm$historique65 === void 0 ? void 0 : _vm$historique65.letter_slug) === "LETTRE_INFORMATION_A_LA_CAUTION_CDR" ? _c("div", {
    staticClass: "container"
  }, [_c("div", {
    staticClass: "header"
  }, [_c("p", [_vm._v(_vm._s((_vm$getPaysInfo9 = _vm.getPaysInfo) === null || _vm$getPaysInfo9 === void 0 ? void 0 : _vm$getPaysInfo9.capitale) + " le, " + _vm._s(_vm.formatDate((_vm$historique66 = _vm.historique) === null || _vm$historique66 === void 0 ? void 0 : _vm$historique66.date)))]), _vm._v(" "), _c("p", [_vm._v("\n                Nom client: " + _vm._s((_vm$guarantees6 = _vm.guarantees) === null || _vm$guarantees6 === void 0 ? void 0 : _vm$guarantees6.nom_prenoms) + ".\n                "), _c("br"), _vm._v("\n                (Tel) : " + _vm._s((_vm$guarantees7 = _vm.guarantees) === null || _vm$guarantees7 === void 0 ? void 0 : _vm$guarantees7.phone)), _c("br"), _vm._v("\n                Adresse:" + _vm._s((_vm$historique67 = _vm.historique) === null || _vm$historique67 === void 0 || (_vm$historique67 = _vm$historique67.client_info) === null || _vm$historique67 === void 0 ? void 0 : _vm$historique67.adresse) + "\n            ")])]), _vm._v(" "), _c("div", {
    staticClass: "content"
  }, [_c("h2", [_vm._v("URGENCE SIGNALEE")]), _vm._v(" "), _c("p", [_vm._v("N/Réf: " + _vm._s((_vm$historique68 = _vm.historique) === null || _vm$historique68 === void 0 ? void 0 : _vm$historique68.info_dossier))]), _vm._v(" "), _c("p", [_vm._v("Monsieur/Madame,")]), _vm._v(" "), _c("p", [_vm._v("\n                Pour rappel, par acte sous seing privé en date du\n                "), _c("b", [_vm._v(_vm._s((_vm$convertir_date_ec5 = _vm.convertir_date_echeance((_vm$historique69 = _vm.historique) === null || _vm$historique69 === void 0 || (_vm$historique69 = _vm$historique69.letter_data) === null || _vm$historique69 === void 0 || (_vm$historique69 = _vm$historique69.decharge_data) === null || _vm$historique69 === void 0 ? void 0 : _vm$historique69.date_mise_en_place)) !== null && _vm$convertir_date_ec5 !== void 0 ? _vm$convertir_date_ec5 : ""))]), _vm._v(", " + _vm._s((_vm$getPaysInfo0 = _vm.getPaysInfo) === null || _vm$getPaysInfo0 === void 0 ? void 0 : _vm$getPaysInfo0.lib) + " a accordé à Monsieur/Madame\n                "), _c("b", [_vm._v(_vm._s((_vm$historique$client11 = (_vm$historique70 = _vm.historique) === null || _vm$historique70 === void 0 || (_vm$historique70 = _vm$historique70.client_info) === null || _vm$historique70 === void 0 ? void 0 : _vm$historique70.name) !== null && _vm$historique$client11 !== void 0 ? _vm$historique$client11 : ""))]), _vm._v("\n                un prêt d’un montant global de\n                "), _c("b", [_vm._v(_vm._s(_vm._f("formatNumber")(_vm.arrondirMontantEntier((_vm$historique71 = _vm.historique) === null || _vm$historique71 === void 0 || (_vm$historique71 = _vm$historique71.letter_data) === null || _vm$historique71 === void 0 || (_vm$historique71 = _vm$historique71.decharge_data) === null || _vm$historique71 === void 0 ? void 0 : _vm$historique71.production_en_volume))) + " F/CFA")]), _vm._v("\n                en principal, remboursable sur\n                "), _c("b", [_vm._v(_vm._s((_vm$historique$messag = (_vm$historique72 = _vm.historique) === null || _vm$historique72 === void 0 || (_vm$historique72 = _vm$historique72.message_data) === null || _vm$historique72 === void 0 ? void 0 : _vm$historique72.duree_credit) !== null && _vm$historique$messag !== void 0 ? _vm$historique$messag : ""))]), _vm._v(" échéances\n                mensuelles à hauteur de\n                "), _c("b", [_vm._v(_vm._s((_vm$historique$messag2 = (_vm$historique73 = _vm.historique) === null || _vm$historique73 === void 0 || (_vm$historique73 = _vm$historique73.message_data) === null || _vm$historique73 === void 0 ? void 0 : _vm$historique73.montant_echeance) !== null && _vm$historique$messag2 !== void 0 ? _vm$historique$messag2 : "") + " F/CFA")]), _vm._v(" chacune.\n            ")]), _vm._v(" "), _c("p", [_vm._v("\n                A cette occasion, vous vous êtes porté(e) caution\n                personnelle solidaire et indivisible de celui-ci par acte\n                sous seing privé aux fins de garantir ses engagements dans\n                la limite du montant maximum de\n                "), _c("b", [_vm._v(_vm._s((_vm$historique$messag3 = (_vm$historique74 = _vm.historique) === null || _vm$historique74 === void 0 || (_vm$historique74 = _vm$historique74.message_data) === null || _vm$historique74 === void 0 ? void 0 : _vm$historique74.montant_echeance) !== null && _vm$historique$messag3 !== void 0 ? _vm$historique$messag3 : "") + " F/CFA")]), _vm._v(", ce qui\n                induit que vous êtes tenu(e) de l’exécution de l’obligation\n                de payer notre créance dans les mêmes conditions que le\n                Débiteur principal en cas de défaillance de celui-ci.\n            ")]), _vm._v(" "), _c("p", [_vm._v("\n                En cette qualité et conformément aux dispositions légales en\n                vigueur, nous venons par la présente vous informer de la\n                défaillance de Monsieur/Madame\n                "), _c("b", [_vm._v(_vm._s((_vm$historique75 = _vm.historique) === null || _vm$historique75 === void 0 || (_vm$historique75 = _vm$historique75.client_info) === null || _vm$historique75 === void 0 ? void 0 : _vm$historique75.name))]), _vm._v(", qui n’a pas respecté ses engagements contractuels.\n            ")]), _vm._v(" "), _c("p", [_vm._v("\n                Il reste donc devoir à ce jour à la Compagnie Africaine de\n                Crédit, devenue Compagnie Financière Africaine de Côte\n                d’Ivoire, la somme de\n                "), _c("b", [_vm._v(_vm._s((_vm$historique$messag4 = (_vm$historique76 = _vm.historique) === null || _vm$historique76 === void 0 || (_vm$historique76 = _vm$historique76.message_data) === null || _vm$historique76 === void 0 ? void 0 : _vm$historique76.encour_impaye) !== null && _vm$historique$messag4 !== void 0 ? _vm$historique$messag4 : "") + " F/CFA (sans\n                    les pénalités)")]), _vm._v("\n                en principal.\n            ")]), _vm._v(" "), _c("p", [_vm._v("\n                Nous vous transmettons copie de la lettre de relance restée\n                sans suite et vous demandons par conséquent de prendre les\n                meilleures dispositions afin que la créance susvisée de\n                notre institution soit remboursée dans le délai de huit (8)\n                jours à compter de la réception des présentes.\n            ")]), _vm._v(" "), _c("p", [_vm._v("\n                Passé ce délai sans réaction de votre part, nous procèderons\n                au recouvrement judiciaire de notre créance en principal\n                sans préjudice des intérêts et pénalités de retard ainsi que\n                des frais de procédure qui en découleront.\n            ")]), _vm._v(" "), _c("p", [_vm._v("\n                Dans l’attente, nous vous prions d’agréer, Monsieur/Madame " + _vm._s((_vm$guarantees$nom_pr3 = (_vm$guarantees8 = _vm.guarantees) === null || _vm$guarantees8 === void 0 ? void 0 : _vm$guarantees8.nom_prenoms) !== null && _vm$guarantees$nom_pr3 !== void 0 ? _vm$guarantees$nom_pr3 : "") + ", l’expression de nos salutations respectueuses.\n            ")])]), _vm._v(" "), _c("div", {
    staticClass: "signature"
  }, [((_vm$getPaysInfo1 = _vm.getPaysInfo) === null || _vm$getPaysInfo1 === void 0 ? void 0 : _vm$getPaysInfo1.root) == "CFNTG" ? _c("span", [_c("p", [_vm._v("KOFFI DOSSOU (Responsable recouvrement)")])]) : _c("span", [_c("p", [_vm._v("\n                    " + _vm._s((_vm$historique77 = _vm.historique) === null || _vm$historique77 === void 0 || (_vm$historique77 = _vm$historique77.info_agence) === null || _vm$historique77 === void 0 || (_vm$historique77 = _vm$historique77.actors_recovery) === null || _vm$historique77 === void 0 || (_vm$historique77 = _vm$historique77.recovery_team1) === null || _vm$historique77 === void 0 || (_vm$historique77 = _vm$historique77.responsable) === null || _vm$historique77 === void 0 ? void 0 : _vm$historique77.name) + "\n                    (" + _vm._s((_vm$historique78 = _vm.historique) === null || _vm$historique78 === void 0 || (_vm$historique78 = _vm$historique78.info_agence) === null || _vm$historique78 === void 0 || (_vm$historique78 = _vm$historique78.actors_recovery) === null || _vm$historique78 === void 0 || (_vm$historique78 = _vm$historique78.recovery_team1) === null || _vm$historique78 === void 0 || (_vm$historique78 = _vm$historique78.responsable) === null || _vm$historique78 === void 0 ? void 0 : _vm$historique78.display_name) + ")\n                ")])]), _vm._v(" "), _c("div", {
    staticClass: "tampon"
  }, [_c("p", [_c("img", {
    attrs: {
      src: _vm.tamponDynamique,
      alt: "Tampon ".concat(_vm.getPaysInfo.code)
    }
  })])])])]) : _vm._e()]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("p", [_c("u", [_vm._v("Objet")]), _vm._v(" : Relance échéance impayée")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("p", [_c("u", [_vm._v("Objet")]), _vm._v(" : Régularisation Urgente de vos échéances impayées ")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("p", [_c("u", [_vm._v("Objet")]), _vm._v(" : Demande de Présentation de Biens offerts en Gage")]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modals/LetterModal.vue?vue&type=style&index=0&id=1a92b92e&scoped=true&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modals/LetterModal.vue?vue&type=style&index=0&id=1a92b92e&scoped=true&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n*[data-v-1a92b92e] {\r\n    outline: none;\r\n    box-sizing: border-box;\r\n    font-family: \"Google sans\";\n}\nlabel[data-v-1a92b92e] {\r\n    height: 10px;\r\n    font-size: 13px;\n}\ninput[data-v-1a92b92e],\r\nselect[data-v-1a92b92e],\r\ntextarea[data-v-1a92b92e] {\r\n    /* height: 35px; */\r\n    border-color: #34495e;\r\n    color: #57606f;\r\n    font-size: 13px;\r\n    font-weight: bold;\n}\n.article-container[data-v-1a92b92e] {\r\n    padding: 10px;\r\n    position: relative;\r\n    border-left: 4px solid var(--border-color);\n}\n.container[data-v-1a92b92e] {\r\n    margin: 0;\r\n    padding: 0;\r\n    width: 100%;\r\n    height: 84vh;\r\n    overflow-y: auto;\r\n    overflow-x: hidden;\n}\n.vr[data-v-1a92b92e] {\r\n    height: 100%;\r\n    width: 0;\r\n    border: 0;\r\n    border-left: 1px solid;\r\n    opacity: 0.25;\n}\n.border-left[data-v-1a92b92e] {\r\n    border: 0;\r\n    border-left: 1px solid #bcbdbe;\n}\n.stamp[data-v-1a92b92e] {\r\n    font-size: 1rem !important;\n}\n.avatar-img[data-v-1a92b92e] {\r\n    width: 3rem;\r\n    height: 3rem;\r\n    border-radius: 100%;\n}\n.container[data-v-1a92b92e] {\r\n    position: relative;\n}\n.container .timeline .article[data-v-1a92b92e] {\r\n    position: relative;\r\n    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);\r\n    border-radius: 5px;\r\n    margin: 10px 0;\n}\n.infobulle[data-v-1a92b92e] {\r\n    background: #34495e;\r\n    color: white;\r\n    padding: 5px;\r\n    border-color: transparent white transparent transparent;\r\n    content: \"\";\r\n    border-radius: 5px;\r\n    border-width: 5px;\r\n    width: 17vh;\r\n    text-align: center;\r\n    font-size: 12px;\n}\n.container .timeline .article a[data-v-1a92b92e] {\r\n    color: green;\r\n    text-decoration: none;\n}\n.container .timeline .article .article-date[data-v-1a92b92e] {\r\n    font-weight: 300;\r\n    font-size: 14px;\n}\n.container .dot[data-v-1a92b92e] {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    position: absolute;\r\n    width: 25px;\r\n    height: 25px;\r\n    border-radius: 50%;\r\n    background: #34495e;\r\n    left: -14px;\r\n    top: 0;\r\n    text-align: center;\r\n    color: white;\n}\n.hgt-50[data-v-1a92b92e] {\r\n    height: 50px;\r\n    opacity: 0;\n}\n.vertical-middle[data-v-1a92b92e] {\r\n    vertical-align: middle;\n}\n[data-v-1a92b92e]::-webkit-scrollbar-track {\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\r\n    background-color: #f5f5f5;\n}\n[data-v-1a92b92e]::-webkit-scrollbar {\r\n    width: 5px;\r\n    background-color: #f5f5f5;\n}\n[data-v-1a92b92e]::-webkit-scrollbar-thumb {\r\n    background-color: #2c3e50;\r\n    border: 2px solid #555555;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modals/RelanceLetter.vue?vue&type=style&index=0&id=3e8cfef0&scoped=true&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modals/RelanceLetter.vue?vue&type=style&index=0&id=3e8cfef0&scoped=true&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\nbody[data-v-3e8cfef0] {\r\n    font-family: Arial, sans-serif;\r\n    margin: 40px;\n}\n.container[data-v-3e8cfef0] {\r\n    width: 80%;\r\n    margin: 0 auto;\n}\n.header[data-v-3e8cfef0],\r\n.footer[data-v-3e8cfef0] {\r\n    text-align: right;\n}\n.content[data-v-3e8cfef0] {\r\n    margin-top: 40px;\n}\n.signature[data-v-3e8cfef0] {\r\n    margin-top: 30px;\r\n    text-align: right;\n}\n.header-logo[data-v-3e8cfef0] {\r\n    text-align: center;\n}\n.tampon img[data-v-3e8cfef0] {\r\n    width: 250px;\n}\n.tampon[data-v-3e8cfef0] {\r\n    text-align: right;\r\n    margin-right: 23px;\r\n    margin-top: -13px;\n}\n.filigrane[data-v-3e8cfef0] {\r\n    position: fixed;\r\n    top: 55%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    opacity: 0.1;\r\n    z-index: 1;\r\n    width: 45%;\r\n    height: auto;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/recouvrement/LetterOff.vue?vue&type=style&index=0&id=2ad1cdba&scoped=true&lang=css":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/recouvrement/LetterOff.vue?vue&type=style&index=0&id=2ad1cdba&scoped=true&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\nbody[data-v-2ad1cdba] {\r\n    font-family: Arial, sans-serif;\r\n    margin: 40px;\n}\n.container[data-v-2ad1cdba] {\r\n    width: 80%;\r\n    margin: 0 auto;\n}\n.header[data-v-2ad1cdba],\r\n.footer[data-v-2ad1cdba] {\r\n    text-align: right;\n}\n.content[data-v-2ad1cdba] {\r\n    margin-top: 40px;\n}\n.signature[data-v-2ad1cdba] {\r\n    margin-top: 30px;\r\n    text-align: right;\n}\n.header-logo[data-v-2ad1cdba] {\r\n    text-align: center;\n}\n.tampon img[data-v-2ad1cdba] {\r\n    width: 250px;\n}\n.tampon[data-v-2ad1cdba] {\r\n    text-align: right;\r\n    margin-right: 23px;\r\n    margin-top: -13px;\n}\n.filigrane[data-v-2ad1cdba] {\r\n    position: fixed;\r\n    top: 55%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    opacity: 0.1;\r\n    z-index: 1;\r\n    width: 45%;\r\n    height: auto;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modals/LetterModal.vue?vue&type=style&index=0&id=1a92b92e&scoped=true&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modals/LetterModal.vue?vue&type=style&index=0&id=1a92b92e&scoped=true&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LetterModal_vue_vue_type_style_index_0_id_1a92b92e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LetterModal.vue?vue&type=style&index=0&id=1a92b92e&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modals/LetterModal.vue?vue&type=style&index=0&id=1a92b92e&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LetterModal_vue_vue_type_style_index_0_id_1a92b92e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LetterModal_vue_vue_type_style_index_0_id_1a92b92e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modals/RelanceLetter.vue?vue&type=style&index=0&id=3e8cfef0&scoped=true&lang=css":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modals/RelanceLetter.vue?vue&type=style&index=0&id=3e8cfef0&scoped=true&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RelanceLetter_vue_vue_type_style_index_0_id_3e8cfef0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RelanceLetter.vue?vue&type=style&index=0&id=3e8cfef0&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modals/RelanceLetter.vue?vue&type=style&index=0&id=3e8cfef0&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RelanceLetter_vue_vue_type_style_index_0_id_3e8cfef0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RelanceLetter_vue_vue_type_style_index_0_id_3e8cfef0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/recouvrement/LetterOff.vue?vue&type=style&index=0&id=2ad1cdba&scoped=true&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/recouvrement/LetterOff.vue?vue&type=style&index=0&id=2ad1cdba&scoped=true&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LetterOff_vue_vue_type_style_index_0_id_2ad1cdba_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LetterOff.vue?vue&type=style&index=0&id=2ad1cdba&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/recouvrement/LetterOff.vue?vue&type=style&index=0&id=2ad1cdba&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LetterOff_vue_vue_type_style_index_0_id_2ad1cdba_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LetterOff_vue_vue_type_style_index_0_id_2ad1cdba_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./public/tampons/COFINA/tampon_cofina.jpg":
/*!*************************************************!*\
  !*** ./public/tampons/COFINA/tampon_cofina.jpg ***!
  \*************************************************/
/***/ ((module) => {

module.exports = "/images/tampon_cofina.jpg?cfe851bc5be8d82b4b10d0ab2ff23c0a";

/***/ }),

/***/ "./resources/js/components/modals/LetterModal.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/modals/LetterModal.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LetterModal_vue_vue_type_template_id_1a92b92e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LetterModal.vue?vue&type=template&id=1a92b92e&scoped=true */ "./resources/js/components/modals/LetterModal.vue?vue&type=template&id=1a92b92e&scoped=true");
/* harmony import */ var _LetterModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LetterModal.vue?vue&type=script&lang=js */ "./resources/js/components/modals/LetterModal.vue?vue&type=script&lang=js");
/* harmony import */ var _LetterModal_vue_vue_type_style_index_0_id_1a92b92e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LetterModal.vue?vue&type=style&index=0&id=1a92b92e&scoped=true&lang=css */ "./resources/js/components/modals/LetterModal.vue?vue&type=style&index=0&id=1a92b92e&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _LetterModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _LetterModal_vue_vue_type_template_id_1a92b92e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _LetterModal_vue_vue_type_template_id_1a92b92e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "1a92b92e",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/modals/LetterModal.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/modals/LetterModal.vue?vue&type=script&lang=js":
/*!********************************************************************************!*\
  !*** ./resources/js/components/modals/LetterModal.vue?vue&type=script&lang=js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LetterModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LetterModal.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modals/LetterModal.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LetterModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/modals/LetterModal.vue?vue&type=style&index=0&id=1a92b92e&scoped=true&lang=css":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/modals/LetterModal.vue?vue&type=style&index=0&id=1a92b92e&scoped=true&lang=css ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LetterModal_vue_vue_type_style_index_0_id_1a92b92e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LetterModal.vue?vue&type=style&index=0&id=1a92b92e&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modals/LetterModal.vue?vue&type=style&index=0&id=1a92b92e&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/modals/LetterModal.vue?vue&type=template&id=1a92b92e&scoped=true":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/modals/LetterModal.vue?vue&type=template&id=1a92b92e&scoped=true ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LetterModal_vue_vue_type_template_id_1a92b92e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LetterModal_vue_vue_type_template_id_1a92b92e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LetterModal_vue_vue_type_template_id_1a92b92e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LetterModal.vue?vue&type=template&id=1a92b92e&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modals/LetterModal.vue?vue&type=template&id=1a92b92e&scoped=true");


/***/ }),

/***/ "./resources/js/components/modals/RelanceLetter.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/modals/RelanceLetter.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RelanceLetter_vue_vue_type_template_id_3e8cfef0_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RelanceLetter.vue?vue&type=template&id=3e8cfef0&scoped=true */ "./resources/js/components/modals/RelanceLetter.vue?vue&type=template&id=3e8cfef0&scoped=true");
/* harmony import */ var _RelanceLetter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RelanceLetter.vue?vue&type=script&lang=js */ "./resources/js/components/modals/RelanceLetter.vue?vue&type=script&lang=js");
/* harmony import */ var _RelanceLetter_vue_vue_type_style_index_0_id_3e8cfef0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RelanceLetter.vue?vue&type=style&index=0&id=3e8cfef0&scoped=true&lang=css */ "./resources/js/components/modals/RelanceLetter.vue?vue&type=style&index=0&id=3e8cfef0&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _RelanceLetter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _RelanceLetter_vue_vue_type_template_id_3e8cfef0_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _RelanceLetter_vue_vue_type_template_id_3e8cfef0_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "3e8cfef0",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/modals/RelanceLetter.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/modals/RelanceLetter.vue?vue&type=script&lang=js":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/modals/RelanceLetter.vue?vue&type=script&lang=js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RelanceLetter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RelanceLetter.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modals/RelanceLetter.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RelanceLetter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/modals/RelanceLetter.vue?vue&type=style&index=0&id=3e8cfef0&scoped=true&lang=css":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/modals/RelanceLetter.vue?vue&type=style&index=0&id=3e8cfef0&scoped=true&lang=css ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RelanceLetter_vue_vue_type_style_index_0_id_3e8cfef0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RelanceLetter.vue?vue&type=style&index=0&id=3e8cfef0&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modals/RelanceLetter.vue?vue&type=style&index=0&id=3e8cfef0&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/modals/RelanceLetter.vue?vue&type=template&id=3e8cfef0&scoped=true":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/modals/RelanceLetter.vue?vue&type=template&id=3e8cfef0&scoped=true ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RelanceLetter_vue_vue_type_template_id_3e8cfef0_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RelanceLetter_vue_vue_type_template_id_3e8cfef0_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RelanceLetter_vue_vue_type_template_id_3e8cfef0_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RelanceLetter.vue?vue&type=template&id=3e8cfef0&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modals/RelanceLetter.vue?vue&type=template&id=3e8cfef0&scoped=true");


/***/ }),

/***/ "./resources/js/components/shared/recouvrement/LetterOff.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/shared/recouvrement/LetterOff.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LetterOff_vue_vue_type_template_id_2ad1cdba_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LetterOff.vue?vue&type=template&id=2ad1cdba&scoped=true */ "./resources/js/components/shared/recouvrement/LetterOff.vue?vue&type=template&id=2ad1cdba&scoped=true");
/* harmony import */ var _LetterOff_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LetterOff.vue?vue&type=script&lang=js */ "./resources/js/components/shared/recouvrement/LetterOff.vue?vue&type=script&lang=js");
/* harmony import */ var _LetterOff_vue_vue_type_style_index_0_id_2ad1cdba_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LetterOff.vue?vue&type=style&index=0&id=2ad1cdba&scoped=true&lang=css */ "./resources/js/components/shared/recouvrement/LetterOff.vue?vue&type=style&index=0&id=2ad1cdba&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _LetterOff_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _LetterOff_vue_vue_type_template_id_2ad1cdba_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _LetterOff_vue_vue_type_template_id_2ad1cdba_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "2ad1cdba",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/shared/recouvrement/LetterOff.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/shared/recouvrement/LetterOff.vue?vue&type=script&lang=js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/shared/recouvrement/LetterOff.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LetterOff_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LetterOff.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/recouvrement/LetterOff.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LetterOff_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/shared/recouvrement/LetterOff.vue?vue&type=style&index=0&id=2ad1cdba&scoped=true&lang=css":
/*!***************************************************************************************************************************!*\
  !*** ./resources/js/components/shared/recouvrement/LetterOff.vue?vue&type=style&index=0&id=2ad1cdba&scoped=true&lang=css ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LetterOff_vue_vue_type_style_index_0_id_2ad1cdba_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LetterOff.vue?vue&type=style&index=0&id=2ad1cdba&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/recouvrement/LetterOff.vue?vue&type=style&index=0&id=2ad1cdba&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/shared/recouvrement/LetterOff.vue?vue&type=template&id=2ad1cdba&scoped=true":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/shared/recouvrement/LetterOff.vue?vue&type=template&id=2ad1cdba&scoped=true ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LetterOff_vue_vue_type_template_id_2ad1cdba_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LetterOff_vue_vue_type_template_id_2ad1cdba_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LetterOff_vue_vue_type_template_id_2ad1cdba_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LetterOff.vue?vue&type=template&id=2ad1cdba&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/recouvrement/LetterOff.vue?vue&type=template&id=2ad1cdba&scoped=true");


/***/ }),

/***/ "./resources/js/services/cofina/lettersTemplateSelector.js":
/*!*****************************************************************!*\
  !*** ./resources/js/services/cofina/lettersTemplateSelector.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LETTERS_TEMPLATE_SELECTOR: () => (/* binding */ LETTERS_TEMPLATE_SELECTOR)
/* harmony export */ });
var LETTERS_TEMPLATE_SELECTOR = [{
  min: 0,
  max: 7,
  can_make_choice: true,
  condition: ["ONLY"],
  can_send_a_reminder_at_this_deadline: ["r472oAxtaFJSlsh5"],
  seuil: "7 jours avant l’échéance",
  is_apply: true,
  letters: [{
    title: "SMS DE RAPPEL D’ECHEANCE",
    slug: "SMS_DE_RAPPEL_ECHEANCE",
    content: "\n                    <!DOCTYPE html>\n                        <html lang=\"fr\">\n                        <head>\n                            <meta charset=\"UTF-8\">\n                            <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n                            <title>SMS de rappel d'eh\xE9ance</title>\n                            <style>\n                                body {\n                                    font-family: Arial, sans-serif;\n                                    margin: 40px;\n                                }\n                                .container {\n                                    width: 80%;\n                                    margin: 0 auto;\n                                }\n                                .content {\n                                    margin-top: 40px;\n                                }\n                            </style>\n                        </head>\n                        <body>\n                            <div class=\"container\">\n                                <div class=\"content\">\n                                    <p>\n                                        Cher client, nous vous rappelons l'arriv\xE9e de votre \xE9ch\xE9ance de cr\xE9dit aupr\xE8s de Cofina ce dd/mm/aaaa pour un montant de xxxxxxx. Nous vous prions de vous rendre en agence pour votre versement.\n                                    </p>\n                                </div>\n                            </div>\n                        </body>\n                    </html>\n                    ",
    isClicked: false,
    isHovered: false,
    selected_messages_show: false,
    selected_messages_hide: false,
    letter_data: ["{salutation}", "{receiver_name}", "{recouvrement_text}", "{message_cta}"],
    sample_letter_to_send: "\n                    <!DOCTYPE html>\n                    <html lang=\"fr\">\n                    <head>\n                        <meta charset=\"UTF-8\">\n                        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n                        <title>SMS de Rappel d'Ech\xE9ance</title>\n                        <style>\n                            body {\n                                font-family: Arial, sans-serif;\n                                margin: 40px;\n                            }\n                            .container {\n                                width: 80%;\n                                margin: 0 auto;\n                            }\n                            .content {\n                                margin-top: 40px;\n                            }\n                            .signature {\n                                margin-top: 30px;\n                                text-align: right;\n                            }\n                            .header-logo {\n                                text-align: center;\n                            }\n                            .tampon img {\n                                width: 250px;\n                            }\n                            .tampon {\n                                text-align: right;\n                                margin-right: 23px;\n                                margin-top: -13px;\n                            }\n                                .filigrane {\n                                position: fixed;\n                                top: 55%;\n                                left: 50%;\n                                transform: translate(-50%, -50%);\n                                opacity: 0.1;\n                                z-index: 1;\n                                width: 45%;\n                                height: auto;\n                            }\n                        </style>\n                    </head>\n                    <body>\n\n                        <div class=\"container\">\n                            <div class=\"content\">\n                                <p>{salutation} {receiver_name},<br/><br/></p>\n                                <p>\n                                    Cher client, nous vous rappelons l'arriv\xE9e de votre \xE9ch\xE9ance de cr\xE9dit aupr\xE8s de Cofina ce <b>{date_echeance}</b> pour un montant de <b>{montant_echeance} FCFA</b>. Nous vous prions de vous rendre en agence pour votre versement.\n                                </p>\n                            </div>\n                        </div>\n                        <div class=\"signature\">\n                            <p>{nom_complet_caf} (Charg\xE9 d'affaire)</p>\n                            <div class=\"tampon\">\n                                <p>\n                                    <img src=\"{tampon_cofina_path}\"alt=\"Tampon Cofina\">\n                                </p>\n                            </div>\n                        </div>\n                    </body>\n                    </html>\n            "
  }]
}, {
  min: -7,
  max: -1,
  condition: ["ONLY"],
  seuil: "De 1 à 7 jours de Retard après l’échéance",
  can_send_a_reminder_at_this_deadline: ["r472oAxtaFJSlsh5"],
  is_apply: true,
  letters: [{
    title: "1ère LETTRE DE RELANCE ",
    slug: "PREMIERE_LETTRE_DE_RELANCE",
    content: "<!DOCTYPE html>\n                    <html lang=\"fr\">\n                    <head>\n                        <meta charset=\"UTF-8\">\n                        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n                        <title>Mod\xE8le de 1\xE8re Lettre de Relance</title>\n                        <style>\n                            body {\n                                font-family: Arial, sans-serif;\n                                margin: 40px;\n                            }\n                            .container {\n                                width: 80%;\n                                margin: 0 auto;\n                            }\n                            .header, .footer {\n                                text-align: right;\n                            }\n                            .content {\n                                margin-top: 40px;\n                            }\n                            .signature {\n                                margin-top: 40px;\n                            }\n                        </style>\n                    </head>\n                    <body>\n                        <div class=\"container\">\n                            <div class=\"header\">\n                                <p>Abidjan le \u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026.</p>\n                                <p>Nom client\u2026\u2026\u2026\u2026\u2026\u2026\u2026.<br>\n                                Abidjan \u2013\u2026\u2026\u2026\u2026\u2026\u2026<br>\n                                (Tel) : \u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026<br>\n                                ABIDJAN-\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026.</p>\n                            </div>\n\n                            <div class=\"content\">\n                                <h2>URGENCE SIGNALEE</h2>\n                                <p>Par lettre au porteur avec accus\xE9 de r\xE9ception</p>\n                                <p>N/R\xE9f : CFNCI/\u2026\u2026../\u2026\u2026../\u2026\u2026\u2026./\u2026\u2026<br>\n                                V/R\xE9f : A nous communiquer</p>\n\n                                <h3>OBJET: Relance \xE9ch\xE9ance impay\xE9e</h3>\n                                <p>Monsieur /Madame\u2026\u2026\u2026\u2026\u2026\u2026</p>\n\n                                <p>\n                                    Nous vous rappelons que vous avez sollicit\xE9 et obtenu de la Compagnie Financi\xE8re Africaine (COFINA C\xD4TE D'IVOIRE) un pr\xEAt \xE0 hauteur de \u2026\u2026\u2026\u2026\u2026\u2026\u2026.. (\xA0..\u2026\u2026\u2026\u2026..) F/CFA remboursable en\u2026\u2026.. (\u2026..) \xE9ch\xE9ances mensuelles de \u2026\u2026\u2026\u2026 F/CFA chacune allant du \u2026/\u2026/\u2026 au \u2026/\u2026/\xA0\u2026.\n                                </p>\n                                <p>\n                                    Cependant nous constatons que l\u2019\xE9ch\xE9ance mensuelle fix\xE9e n\u2019a pas \xE9t\xE9 respect\xE9e de sorte que vous restez devoir ce jour \xE0 notre institution la somme de \u2026\u2026\u2026\u2026. (\xA0\u2026\u2026\u2026\u2026) F/CFA \xE0 titre d\u2019\xE9ch\xE9ance \xE9chue impay\xE9e sous r\xE9serve des int\xE9r\xEAts et p\xE9nalit\xE9s de retard qui continuent \xE0 courir.\n                                </p>\n                                <p>\n                                    Par cons\xE9quent nous vous invitons \xE0 bien vouloir r\xE9gulariser votre situation d\xE9bitrice dans nos livres ce dans un d\xE9lai maximum de trois (03) jours \xE0 compter de la r\xE9ception des pr\xE9sentes.\n                                </p>\n                                <p>\n                                    Vous remerciant par avance pour votre r\xE8glement diligent, recevez Monsieur /Madame\xA0\u2026\u2026nos sinc\xE8res salutations.\n                                </p>\n                            </div>\n\n                            <div class=\"signature\">\n                                <p>LE CHEF D\u2019AGENCE</p>\n                            </div>\n                        </div>\n                    </body>\n                    </html>\n                    ",
    isClicked: false,
    isHovered: false,
    selected_messages_show: false,
    selected_messages_hide: false,
    letter_data: ["{salutation}", "{receiver_name}", "{recouvrement_text}", "{message_cta}", "{montant_echeance}"],
    sample_letter_to_send: "\n                <!DOCTYPE html>\n                <html lang=\"fr\">\n                    <head>\n                        <meta charset=\"UTF-8\">\n                        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n                        <title>Mod\xE8le de 1\xE8re Lettre de Relance</title>\n                        <style>\n                            body {\n                                font-family: Arial, sans-serif;\n                                margin: 40px;\n                            }\n                            .container {\n                                width: 80%;\n                                margin: 0 auto;\n                            }\n                            .header, .footer {\n                                text-align: right;\n                            }\n                            .content {\n                                margin-top: 40px;\n                            }\n                            .signature {\n                                margin-top: 30px;\n                                text-align: right;\n                            }\n                            .header-logo {\n                                text-align: center;\n                            }\n                            .tampon img {\n                                width: 250px;\n                            }\n                            .tampon {\n                                text-align: right;\n                                margin-right: 23px;\n                                margin-top: -13px;\n                            }\n                            .filigrane {\n                                position: fixed;\n                                top: 55%;\n                                left: 50%;\n                                transform: translate(-50%, -50%);\n                                opacity: 0.1;\n                                z-index: 1;\n                                width: 45%;\n                                height: auto;\n                            }\n                        </style>\n                    </head>\n                    <body>\n\n                        <div class=\"container\">\n                            <div class=\"header\">\n                                <p>Abidjan le {fait_le}</p>\n                                <p>\n                                    Nom client {receiver_name}.<br>\n                                    (Tel) : {contact_client}<br>\n                                    Adresse {adresse_professionnel_principal}\n                                </p>\n                            </div>\n\n                            <div class=\"content\">\n                                <h2>URGENCE SIGNALEE</h2>\n                                <p>Par lettre au porteur avec accus\xE9 de r\xE9ception</p>\n                                <p>N/R\xE9f : {numero_dossier}<br>\n                                V/R\xE9f : A nous communiquer</p>\n\n                                <p>Monsieur /Madame {receiver_name}</p>\n\n                                <p>\n                                    Nous vous rappelons que vous avez sollicit\xE9 et obtenu de la Compagnie Financi\xE8re Africaine (COFINA C\xD4TE D'IVOIRE) un pr\xEAt \xE0 hauteur de <b>{montant_credit_from_decharge} F/CFA </b> remboursable en <b>({nb_echeance_mensuelle})</b> \xE9ch\xE9ances mensuelles de <b>{montant_echeance} F/CFA</b> chacune allant du <b>{first_echeance}</b> au <b>{last_echeance}</b>.\n                                </p>\n                                <p>\n                                    Cependant nous constatons que l\u2019\xE9ch\xE9ance mensuelle fix\xE9e n\u2019a pas \xE9t\xE9 respect\xE9e de sorte que vous restez devoir ce jour \xE0 notre institution la somme de <b>{montant_echeance} F/CFA</b> \xE0 titre d\u2019\xE9ch\xE9ance \xE9chue impay\xE9e sous r\xE9serve des int\xE9r\xEAts et p\xE9nalit\xE9s de retard qui continuent \xE0 courir.\n                                </p>\n                                <p>\n                                    Par cons\xE9quent nous vous invitons \xE0 bien vouloir r\xE9gulariser votre situation d\xE9bitrice dans nos livres ce dans un d\xE9lai maximum de trois (03) jours \xE0 compter de la r\xE9ception des pr\xE9sentes.\n                                </p>\n                                <p>\n                                    Vous remerciant par avance pour votre r\xE8glement diligent, recevez Monsieur /Madame {receiver_name} nos sinc\xE8res salutations.\n                                </p>\n                            </div>\n\n                            <div class=\"signature\">\n                                <p>{sender_name} ({sender_role})</p>\n                            </div>\n                            <div class=\"tampon\">\n                                <p>\n                                    <img src=\"{tampon_cofina_path}\"alt=\"Tampon Cofina\">\n                                </p>\n                            </div>\n                        </div>\n                    </body>\n                </html>\n            "
  }]
}, {
  min: -20,
  max: -8,
  can_make_choice: true,
  seuil: "De 8 à 20 jours de Retard après l’échéance",
  can_send_a_reminder_at_this_deadline: ["r472oAxtaFJSlsh5", "yYnev325ob1vDkgq"],
  condition: ["ONLY"],
  is_apply: true,
  letters: [{
    title: "2ème LETTRE DE RELANCE ",
    slug: "DEUXIEME_LETTRE_DE_RELANCE",
    content: "\n                <!DOCTYPE html>\n                <html lang=\"fr\">\n                <head>\n                    <meta charset=\"UTF-8\">\n                    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n                    <title>Mod\xE8le de Seconde Lettre de Relance</title>\n                    <style>\n                        body {\n                            font-family: Arial, sans-serif;\n                            margin: 40px;\n                        }\n                        .container {\n                            width: 80%;\n                            margin: 0 auto;\n                        }\n                        .header, .footer {\n                            text-align: right;\n                        }\n                        .content {\n                            margin-top: 40px;\n                        }\n                        .signature {\n                            margin-top: 40px;\n                        }\n                    </style>\n                </head>\n                <body>\n                    <div class=\"container\">\n                        <div class=\"header\">\n                            <p>Abidjan le \u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026.</p>\n                            <p>Nom client\u2026\u2026\u2026\u2026\u2026<br>\n                            Abidjan \u2013\u2026\u2026\u2026\u2026\u2026\u2026<br>\n                            (Tel) : \u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026<br>\n                            ABIDJAN-\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026.</p>\n                        </div>\n\n                        <div class=\"content\">\n                            <h2>URGENCE SIGNALEE</h2>\n                            <p>Par lettre au porteur avec accus\xE9 de r\xE9ception</p>\n                            <p>N/R\xE9f : CFNCI/\u2026\u2026../\u2026\u2026../\u2026\u2026\u2026./\u2026\u2026<br>\n                            V/R\xE9f : A nous communiquer</p>\n\n                            <h3>OBJET: Seconde relance \xE9ch\xE9ances impay\xE9es</h3>\n                            <p>Monsieur /Madame\u2026\u2026\u2026\u2026\u2026\u2026</p>\n\n                            <p>\n                                Nous avons fait tenir il y a quelques jours de cela une lettre de relance pour parvenir au r\xE8glement de votre \xE9ch\xE9ance impay\xE9e au regard de l\u2019\xE9ch\xE9ancier convenu dans le cadre de ma convention de pr\xEAt avec la Compagnie Financi\xE8re Africaine dite COFINA C\xD4TE D'IVOIRE.\n                            </p>\n                            <p>\n                                Cependant, malgr\xE9 cette invitation \xE0 un r\xE8glement amiable et diligent, nous constatons que vous n\u2019avez pas effectu\xE9 le paiement attendu pour la r\xE9gularisation de votre situation d\xE9bitrice dans nos livres, de sorte que vous restez toujours nous devoir.\n                            </p>\n                            <p>\n                                Par cons\xE9quent, nous vous invitons \xE0 bien vouloir verser sur votre compte num\xE9ro\xB0\u2026\u2026\u2026\u2026. la somme de\xA0\u2026\u2026\u2026\u2026. F/CFA repr\xE9sentant le montant de votre \xE9ch\xE9ance \xE9chue impay\xE9e \xE0 ce jour sans pr\xE9judice des int\xE9r\xEAts et p\xE9nalit\xE9s qui continuent \xE0 courir et ce dans un d\xE9lai maximum de huit (08) jours \xE0 compter de la r\xE9ception des pr\xE9sentes.\n                            </p>\n                            <p>\n                                En cas d\u2019inex\xE9cution de votre part dans le d\xE9lai ci-dessus indiqu\xE9, nous nous verrons oblig\xE9s de constater le d\xE9faut de paiement et de poursuivre par toute voie de droit et tous frais \xE0 votre charge le recouvrement de la totalit\xE9 de notre cr\xE9ance.\n                            </p>\n                            <p>\n                                Dans l\u2019attente d\u2019une prompte r\xE9action, nous vous prions de recevoir Monsieur/Madame\u2026\u2026\u2026.\u2026\u2026.. nos sinc\xE8res salutations.\n                            </p>\n                        </div>\n\n                        <div class=\"signature\">\n                            <p>LE CHEF D\u2019AGENCE</p>\n                        </div>\n                    </div>\n                </body>\n                </html>\n\n                    ",
    isClicked: false,
    isHovered: false,
    selected_messages_show: false,
    selected_messages_hide: false,
    letter_data: ["{salutation}", "{receiver_name}", "{recouvrement_text}", "{message_cta}", "{numero_compte_courant}", "{encour_impaye}"],
    sample_letter_to_send: "\n                <!DOCTYPE html>\n                <html lang=\"fr\">\n                    <head>\n                        <meta charset=\"UTF-8\">\n                        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n                        <title>Mod\xE8le de Seconde Lettre de Relance</title>\n                        <style>\n                            body {\n                                font-family: Arial, sans-serif;\n                                margin: 40px;\n                            }\n                            .container {\n                                width: 80%;\n                                margin: 0 auto;\n                            }\n                            .header, .footer {\n                                text-align: right;\n                            }\n                            .content {\n                                margin-top: 40px;\n                            }\n                            .signature {\n                                margin-top: 30px;\n                                text-align: right;\n                            }\n                            .header-logo {\n                                text-align: center;\n                            }\n                            .tampon img {\n                                width: 250px;\n                            }\n                            .tampon {\n                                text-align: right;\n                                margin-right: 23px;\n                                margin-top: -13px;\n                            }\n                            .filigrane {\n                                position: fixed;\n                                top: 55%;\n                                left: 50%;\n                                transform: translate(-50%, -50%);\n                                opacity: 0.1;\n                                z-index: 1;\n                                width: 45%;\n                                height: auto;\n                            }\n                        </style>\n                    </head>\n                    <body>\n\n                        <div class=\"container\">\n                            <div class=\"header\">\n                                <p>Abidjan le {fait_le}</p>\n                                <p>\n                                    Nom client {receiver_name}.<br>\n                                    (Tel) : {contact_client}<br>\n                                    Adresse {adresse_professionnel_principal}\n                                </p>\n                            </div>\n\n                            <div class=\"content\">\n                                <h2>URGENCE SIGNALEE</h2>\n                                <p>Par lettre au porteur avec accus\xE9 de r\xE9ception</p>\n                                <p>N/R\xE9f : {numero_dossier}<br>\n                                V/R\xE9f : A nous communiquer</p>\n\n                                <p>Monsieur /Madame  {receiver_name}</p>\n\n                                <p>\n                                    Nous avons fait tenir il y a quelques jours de cela une lettre de relance pour parvenir au r\xE8glement de votre \xE9ch\xE9ance impay\xE9e au regard de l\u2019\xE9ch\xE9ancier convenu dans le cadre de ma convention de pr\xEAt avec la Compagnie Financi\xE8re Africaine dite COFINA C\xD4TE D'IVOIRE.\n                                </p>\n                                <p>\n                                    Cependant, malgr\xE9 cette invitation \xE0 un r\xE8glement amiable et diligent, nous constatons que vous n\u2019avez pas effectu\xE9 le paiement attendu pour la r\xE9gularisation de votre situation d\xE9bitrice dans nos livres, de sorte que vous restez toujours nous devoir.\n                                </p>\n                                <p>\n                                    Par cons\xE9quent, nous vous invitons \xE0 bien vouloir verser sur votre compte num\xE9ro\xB0 <b>{numero_compte_courant}</b> la somme de <b>{encour_impaye} FCFA </b> repr\xE9sentant le montant de votre \xE9ch\xE9ance \xE9chue impay\xE9e \xE0 ce jour sans pr\xE9judice des int\xE9r\xEAts et p\xE9nalit\xE9s qui continuent \xE0 courir et ce dans un d\xE9lai maximum de huit (08) jours \xE0 compter de la r\xE9ception des pr\xE9sentes.\n                                </p>\n                                <p>\n                                    En cas d\u2019inex\xE9cution de votre part dans le d\xE9lai ci-dessus indiqu\xE9, nous nous verrons oblig\xE9s de constater le d\xE9faut de paiement et de poursuivre par toute voie de droit et tous frais \xE0 votre charge le recouvrement de la totalit\xE9 de notre cr\xE9ance.\n                                </p>\n                                <p>\n                                    Dans l\u2019attente d\u2019une prompte r\xE9action, nous vous prions de recevoir Monsieur/Madame {receiver_name}. nos sinc\xE8res salutations.\n                                </p>\n                            </div>\n\n                            <div class=\"signature\">\n                                <p>{sender_name} ({sender_role})</p>\n                            </div>\n                            <div class=\"tampon\">\n                                <p>\n                                    <img src=\"{tampon_cofina_path}\"alt=\"Tampon Cofina\">\n                                </p>\n                            </div>\n                        </div>\n                    </body>\n                </html>\n            "
  }]
}, {
  //         random_letter | selectLetter | loadLetterContent
  // has_random_letter | selectEcheance(
  min: -45,
  max: -21,
  can_make_choice: true,
  seuil: "De 21 à 45 jours de retard après l’échéance",
  is_apply: true,
  can_send_a_reminder_at_this_deadline: ["r472oAxtaFJSlsh5", "yYnev325ob1vDkgq"],
  condition: ["ONLY"],
  letters: [{
    title: "LETTRE D’INFORMATION A LA CAUTION_AGENCE ",
    slug: "LETTRE_INFORMATION_A_LA_CAUTION_AGENCE",
    content: "\n                <!DOCTYPE html>\n                <html lang=\"fr\">\n                <head>\n                    <meta charset=\"UTF-8\">\n                    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n                    <title>Lettre d'information de la caution</title>\n                    <style>\n                        body {\n                            font-family: Arial, sans-serif;\n                            margin: 40px;\n                        }\n                        .container {\n                            width: 80%;\n                            margin: 0 auto;\n                        }\n                        .header, .footer {\n                            text-align: right;\n                        }\n                        .content {\n                            margin-top: 40px;\n                        }\n                        .signature {\n                            margin-top: 40px;\n                        }\n                        .footer-info {\n                            margin-top: 60px;\n                            font-size: 0.9em;\n                            color: gray;\n                        }\n                    </style>\n                </head>\n                <body>\n                    <div class=\"container\">\n                        <div class=\"header\">\n                            <p>\u2026\u2026\u2026\u2026\u2026 le \u2026\u2026./\u2026\u2026./20\u2026</p>\n                            <p>M/Mme\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026..<br>\n                            Adresse\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026.</p>\n                        </div>\n\n                        <div class=\"content\">\n                            <h3>Objet: Lettre d\u2019information de la caution</h3>\n                            <p>Mr /Mme\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026.</p>\n\n                            <p>\n                                Par contrat en date du\u2026\u2026 vous vous \xEAtes port\xE9e caution personnelle et solidaire en faveur de notre \xE9tablissement en garantie des engagements de (Nom + pr\xE9nom du client) \xE0 hauteur du montant de          francs CFA.\n                            </p>\n                            <p>\n                                En cette qualit\xE9 de caution, nous venons par la pr\xE9sente vous informer de la d\xE9faillance du client \u2026\u2026\u2026.qui n\u2019a pas respect\xE9 ses engagements contractuels et reste donc devoir \xE0 ce jour \xE0 COFINA C\xD4TE D'IVOIRE la somme de \u2026\u2026\u2026\u2026\u2026\u2026\u2026..F/CFA.\n                            </p>\n                            <p>\n                                Nous vous demandons par cons\xE9quent de prendre les meilleures dispositions afin que le montant susvis\xE9 soit pay\xE9 dans les huit (08) jours de la r\xE9ception de la pr\xE9sente.\n                            </p>\n                            <p>\n                                Pass\xE9 ce d\xE9lai sans r\xE9action de votre part, nous proc\xE8derons au recouvrement de notre cr\xE9ance par tout moyen l\xE9gal.\n                            </p>\n                            <p>\n                                Dans l\u2019attente, nous vous prions d\u2019agr\xE9er Monsieur/Madame\u2026\u2026 nos sinc\xE8res salutations.\n                            </p>\n                        </div>\n\n                        <div class=\"signature\">\n                            <p>LE CHEF D\u2019AGENCE</p>\n                        </div>\n\n                    </div>\n                </body>\n                </html>\n\n                    ",
    // <p><a href="http://www.cac-ci.com">www.cac-ci.com</a></p>
    isClicked: false,
    isHovered: false,
    selected_messages_show: false,
    selected_messages_hide: false,
    letter_data: ["{salutation}", "{receiver_name}", "{recouvrement_text}", "{message_cta}", "{recouvrement_text}", "{numero_compte_courant}", "{encour_impaye}"],
    sample_letter_to_send: "\n                <!DOCTYPE html>\n                <html lang=\"fr\">\n                                <head>\n                    <meta charset=\"UTF-8\">\n                    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n                    <title>Lettre d'information de la caution</title>\n                    <style>\n                        body {\n                            font-family: Arial, sans-serif;\n                            margin: 40px;\n                        }\n                        .container {\n                            width: 80%;\n                            margin: 0 auto;\n                        }\n                        .header, .footer {\n                            text-align: right;\n                        }\n                        .content {\n                            margin-top: 40px;\n                        }\n                        .signature {\n                            margin-top: 30px;\n                            text-align: right;\n                        }\n       \t\t\t\t\t.header-logo {\n                        \ttext-align: center;\n                        }\n                        .tampon img {\n                            width: 250px;\n                        }\n                        .tampon {\n                            text-align: right;\n                            margin-right: 23px;\n                            margin-top: -13px;\n                        }\n                          .filigrane {\n                            position: fixed;\n                            top: 55%;\n                            left: 50%;\n                            transform: translate(-50%, -50%);\n                            opacity: 0.1;\n                            z-index: 1;\n                            width: 45%;\n                            height: auto;\n                        }\n                    </style>\n                </head>\n                <body>\n\n                    <div class=\"container\">\n                        <div class=\"header\">\n                            <p>Fait le {fait_le}</p>\n                            <p>M/Mme {receiver_name}.<br>\n                            (Tel) : {contact_client}<br>\n                            Adresse {adresse_professionnel_principal}</p>\n                        </div>\n\n                        <div class=\"content\">\n                            <p>Mr /Mme {receiver_name}.</p>\n\n                            <p>\n                                Par contrat en date du {date_demande_formated} vous vous \xEAtes port\xE9e caution personnelle et solidaire en faveur de notre \xE9tablissement en garantie des engagements de <b>{denomination_caution}</b> \xE0 hauteur du montant de <b>{montant_credit} francs CFA</b>.\n                            </p>\n                            <p>\n                                En cette qualit\xE9 de caution, nous venons par la pr\xE9sente vous informer de la d\xE9faillance du client <b>{denomination_caution}</b> qui n\u2019a pas respect\xE9 ses engagements contractuels et reste donc devoir \xE0 ce jour \xE0 COFINA C\xD4TE D'IVOIRE la somme de <b>{encour_impaye} F/CFA </b>.\n                            </p>\n                            <p>\n                                Nous vous demandons par cons\xE9quent de prendre les meilleures dispositions afin que le montant susvis\xE9 soit pay\xE9 dans les huit (08) jours de la r\xE9ception de la pr\xE9sente.\n                            </p>\n                            <p>\n                                Pass\xE9 ce d\xE9lai sans r\xE9action de votre part, nous proc\xE8derons au recouvrement de notre cr\xE9ance par tout moyen l\xE9gal.\n                            </p>\n                            <p>\n                                Dans l\u2019attente, nous vous prions d\u2019agr\xE9er Monsieur/Madame <b>{receiver_name}</b> nos sinc\xE8res salutations.\n                            </p>\n                        </div>\n\n                        <div class=\"signature\">\n                            <p>{sender_name} ({sender_role})</p>\n                            <div class=\"tampon\">\n                                <p>\n                                    <img src=\"{tampon_cofina_path}\"alt=\"Tampon Cofina\">\n                                </p>\n                            </div>\n                        </div>\n                    </div>\n                </body>\n                </html>\n            "
  }]
}, {
  min: -60,
  max: -46,
  condition: ["ONLY"],
  can_make_choice: true,
  seuil: "De 46 à 60 jours de retard après l’échéance",
  can_send_a_reminder_at_this_deadline: ["tmu3PEDVQsevYH2rhw4o", "aFwisnrdo42c4n9MHCG2", "icWghWx71w9VpwZ6y1mT"],
  // CHARGE DE RECOUVREMENT OU AGENT DE RECOUVREMENT
  is_apply: true,
  letters: [{
    title: "3ème LETTRE DE RELANCE_CDR",
    slug: "TROISIEME_LETTRE_DE_RELANCE_CDR",
    content: "\n                <!DOCTYPE html>\n                <html lang=\"fr\">\n                <head>\n                    <meta charset=\"UTF-8\">\n                    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n                    <title>Mod\xE8le de 3\xE8me Lettre de Relance</title>\n                    <style>\n                        body {\n                            font-family: Arial, sans-serif;\n                            margin: 40px;\n                        }\n                        .container {\n                            width: 80%;\n                            margin: 0 auto;\n                        }\n                        .header, .footer {\n                            text-align: right;\n                        }\n                        .content {\n                            margin-top: 40px;\n                        }\n                        .signature {\n                            margin-top: 40px;\n                        }\n                        .footer-info {\n                            margin-top: 60px;\n                            font-size: 0.9em;\n                            color: gray;\n                        }\n                    </style>\n                </head>\n                <body>\n                    <div class=\"container\">\n                        <div class=\"header\">\n                            <p>Abidjan le \u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026 2023</p>\n                            <p>Nom client \u2026\u2026\u2026\u2026\u2026.<br>\n                            Tel :\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026.</p>\n                        </div>\n\n                        <div class=\"content\">\n                            <h2>URGENCE SIGNALEE</h2>\n                            <p>Par lettre au porteur avec accus\xE9 de r\xE9ception</p>\n                            <p>A l\u2019attention particuli\xE8re de M./Mme \u2026\u2026\u2026.</p>\n                            <p>N/R\xE9f : CFN CI/RECOUV/\u2026\u2026./\u2026\u2026./001/\u2026\u2026-2023<br>\n                            V/R\xE9f : A nous communiquer</p>\n\n                            <h3>Objet: R\xE9gularisation Urgente de vos \xE9ch\xE9ances impay\xE9es</h3>\n                            <p>Monsieur/Madame\u2026\u2026\u2026\u2026\u2026\u2026</p>\n\n                            <p>\n                                Nous revenons vers vous relativement \xE0 la situation tr\xE8s pr\xE9occupante de votre compte dans nos livres due aux \xE9ch\xE9ances impay\xE9es sur le pr\xEAt qui vous a \xE9t\xE9 accord\xE9.\n                            </p>\n                            <p>\n                                Malheureusement, cette situation reste sans solutions malgr\xE9 les appels et courriers de relance de votre gestionnaire en Agence.\n                            </p>\n                            <p>\n                                Pour rappel, sauf erreur ou omission, vous restez \xE0 ce jour nous devoir la somme de \u2026\u2026\u2026.\u2026\u2026.. (\u2026\u2026\u2026.) F/CFA en principal et accessoires sous r\xE9serve des \xE9ch\xE9ances \xE0 \xE9choir ainsi que des int\xE9r\xEAts et p\xE9nalit\xE9s de retard \xE0 venir.\n                            </p>\n                            <p>\n                                A cet effet, apr\xE8s un retard de paiement de plus de      jours, nous vous informons par la pr\xE9sente que la gestion de votre compte a \xE9t\xE9 transf\xE9r\xE9e au D\xE9partement Recouvrement et sera prise en charge d\xE9sormais par Madame /Monsieur ................................. Charg\xE9(e) de Recouvrement que vous pourrez contacter au +255 07\u2026\u2026\u2026\u2026\u2026\n                            </p>\n                            <p>\n                                En raison de ce qui pr\xE9c\xE8de, nous vous sommons de proc\xE9der \xE0 la r\xE9gularisation de la situation d\xE9bitrice de votre compte dans le d\xE9lai de huit (8) jours et ce d\xE8s r\xE9ception de la pr\xE9sente.\n                            </p>\n                            <p>\n                                Pass\xE9 ce d\xE9lai sans r\xE9action de votre part, nous proc\xE8derons sans autre avis \xE0 la transmission de votre dossier au service contentieux afin d\u2019engager la r\xE9alisation imm\xE9diate de toutes les garanties offertes \xE0 notre profit ainsi que des poursuites judiciaires pour recouvrer la totalit\xE9 de notre cr\xE9ance.\n                            </p>\n                            <p>\n                                Dans l\u2019attente d\u2019un amiable et prompt r\xE8glement de votre part,\n                            </p>\n                            <p>\n                                Recevez Monsieur nos meilleures salutations.\n                            </p>\n                        </div>\n\n                        <div class=\"signature\">\n                            <p>Le Responsable d\u2019Equipe du Recouvrement</p>\n                        </div>\n                    </div>\n                </body>\n                </html>\n\n                    ",
    isClicked: false,
    isHovered: false,
    selected_messages_show: false,
    selected_messages_hide: false,
    sample_letter_to_send: "\n                <!DOCTYPE html>\n                <html lang=\"fr\">\n                <head>\n                    <meta charset=\"UTF-8\">\n                    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n                    <title>Mod\xE8le de 3\xE8me Lettre de Relance</title>\n                    <style>\n                        body {\n                            font-family: Arial, sans-serif;\n                            margin: 40px;\n                        }\n                        .container {\n                            width: 80%;\n                            margin: 0 auto;\n                        }\n                        .header, .footer {\n                            text-align: right;\n                        }\n                        .content {\n                            margin-top: 40px;\n                        }\n                        .signature {\n                            margin-top: 30px;\n                            text-align: right;\n                        }\n       \t\t\t\t\t.header-logo {\n                        \ttext-align: center;\n                        }\n                        .tampon img {\n                            width: 250px;\n                        }\n                        .tampon {\n                            text-align: right;\n                            margin-right: 23px;\n                            margin-top: -13px;\n                        }\n                          .filigrane {\n                            position: fixed;\n                            top: 55%;\n                            left: 50%;\n                            transform: translate(-50%, -50%);\n                            opacity: 0.1;\n                            z-index: 1;\n                            width: 45%;\n                            height: auto;\n                        }\n                    </style>\n                </head>\n                <body>\n                <!-- Filigrane -->\n\n                    <div class=\"container\">\n\n                        <div class=\"header\">\n                            <p>Abidjan le {fait_le}</p>\n                            <p>Nom client {receiver_name}.<br>\n                            (Tel) : {contact_client}<br>\n                            Adresse {adresse_professionnel_principal}\n                            </p>\n                        </div>\n\n                        <div class=\"content\">\n                            <h2>URGENCE SIGNALEE</h2>\n                            <p>Par lettre au porteur avec accus\xE9 de r\xE9ception</p>\n                            <p>A l\u2019attention particuli\xE8re de M./Mme M./Mme RESTO-CAVE AU BON VIN 1 ET 2.</p>\n                            <p>N/R\xE9f : {numero_dossier}<br>\n                            V/R\xE9f : A nous communiquer</p>\n\n                            <p>Monsieur/Madame {receiver_name}</p>\n\n                            <p>\n                                Nous revenons vers vous relativement \xE0 la situation tr\xE8s pr\xE9occupante de votre compte dans nos livres due aux \xE9ch\xE9ances impay\xE9es sur le pr\xEAt qui vous a \xE9t\xE9 accord\xE9.\n                            </p>\n                            <p>\n                                Malheureusement, cette situation reste sans solutions malgr\xE9 les appels et courriers de relance de votre gestionnaire en Agence.\n                            </p>\n                            <p>\n                                Pour rappel, sauf erreur ou omission, vous restez \xE0 ce jour nous devoir la somme de <b>{encour_impaye} francs CFA. </b> en principal et accessoires sous r\xE9serve des \xE9ch\xE9ances \xE0 \xE9choir ainsi que des int\xE9r\xEAts et p\xE9nalit\xE9s de retard \xE0 venir.\n                            </p>\n                            <p>\n                                A cet effet, apr\xE8s un retard de paiement de plus de <b>huit (08) jours</b>, nous vous informons par la pr\xE9sente que la gestion de votre compte a \xE9t\xE9 transf\xE9r\xE9e au D\xE9partement Recouvrement et sera prise en charge d\xE9sormais par Madame /Monsieur ................................. Charg\xE9(e) de Recouvrement que vous pourrez contacter au +255 07\u2026\u2026\u2026\u2026\u2026\n                            </p>\n                            <p>\n                                En raison de ce qui pr\xE9c\xE8de, nous vous sommons de proc\xE9der \xE0 la r\xE9gularisation de la situation d\xE9bitrice de votre compte dans le d\xE9lai de huit (8) jours et ce d\xE8s r\xE9ception de la pr\xE9sente.\n                            </p>\n                            <p>\n                                Pass\xE9 ce d\xE9lai sans r\xE9action de votre part, nous proc\xE8derons sans autre avis \xE0 la transmission de votre dossier au service contentieux afin d\u2019engager la r\xE9alisation imm\xE9diate de toutes les garanties offertes \xE0 notre profit ainsi que des poursuites judiciaires pour recouvrer la totalit\xE9 de notre cr\xE9ance.\n                            </p>\n                            <p>\n                                Dans l\u2019attente d\u2019un amiable et prompt r\xE8glement de votre part,\n                            </p>\n                            <p>\n                                Recevez Monsieur nos meilleures salutations.\n                            </p>\n                        </div>\n\n                        <div class=\"signature\">\n                            <p>{sender_name} ({sender_role})</p>\n                        </div>\n                        <div class=\"tampon\">\n                       \t\t<p>\n                              <img src=\"{tampon_cofina_path}\"alt=\"Tampon Cofina\">\n                            </p>\n                        </div>\n                    </div>\n                </body>\n\n                </html>\n            "
  }]
}, {
  min: -90,
  max: -60,
  condition: ["OU"],
  can_make_choice: true,
  is_apply: true,
  can_send_a_reminder_at_this_deadline: ["tmu3PEDVQsevYH2rhw4o", "aFwisnrdo42c4n9MHCG2", "icWghWx71w9VpwZ6y1mT"],
  // CHARGE DE RECOUVREMENT OU AGENT DE RECOUVREMENT
  seuil: "De 61 à 90 jours de retard après l’échéance",
  letters: [{
    title: "LETTRE DE PRESENTATION DE BIEN GAGE",
    slug: "LETTRE_DE_PRESENTATION_DE_BIEN_GAGE",
    content: "<!DOCTYPE html>\n                            <html lang=\"fr\">\n                            <head>\n                                <meta charset=\"UTF-8\">\n                                <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n                                <title>Mod\xE8le de Lettre de Pr\xE9sentation de Biens Gag\xE9s</title>\n                                <style>\n                                    body {\n                                        font-family: Arial, sans-serif;\n                                        margin: 40px;\n                                    }\n                                    .container {\n                                        width: 80%;\n                                        margin: 0 auto;\n                                    }\n                                    .header, .footer {\n                                        text-align: right;\n                                    }\n                                    .content {\n                                        margin-top: 40px;\n                                    }\n                                    .signature {\n                                        margin-top: 40px;\n                                    }\n                                    .footer-info {\n                                        margin-top: 60px;\n                                        font-size: 0.9em;\n                                        color: gray;\n                                    }\n                                </style>\n                            </head>\n                            <body>\n                                <div class=\"container\">\n                                    <div class=\"header\">\n                                        <p>Abidjan le \u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026.2023</p>\n                                        <p>Monsieur \u2026\u2026\u2026\u2026..<br>\n                                        \u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026..<br>\n                                        Abidjan Cocody \u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026..<br>\n                                        09 BP \u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026.<br>\n                                        Tel: \u2026\u2026\u2026\u2026\u2026\u2026\u2026.;\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026..<br>\n                                        Abidjan-Cocody</p>\n                                    </div>\n\n                                    <div class=\"content\">\n                                        <h2>URGENCE SIGNALEE</h2>\n                                        <p>Par lettre au porteur avec accus\xE9 de r\xE9ception</p>\n                                        <p>A l\u2019attention particuli\xE8re de Monsieur \u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026..</p>\n                                        <p>N/R\xE9f: COFINA/\u2026../\u2026\u2026./\u2026\u2026./00\u2026\u2026../2023<br>\n                                        V/R\xE9f: A nous communiquer</p>\n\n                                        <h3>Objet: Demande de Pr\xE9sentation de Biens offerts en Gage</h3>\n                                        <p>Monsieur /Madame \u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026.</p>\n\n                                        <p>\n                                            Nous venons par la pr\xE9sente solliciter la pr\xE9sentation des (   ) v\xE9hicules offerts en gage dans le cadre de la convention de pr\xEAt qui lie la soci\xE9t\xE9 \u2026\u2026\u2026\u2026.. \xE0 la Compagnie Financi\xE8re Africaine C\xF4te d\u2019Ivoire dite COFINA C\xD4TE D'IVOIRE.\n                                        </p>\n                                        <p>\n                                            Il s\u2019agit notamment des v\xE9hicules ci-dessous r\xE9f\xE9renc\xE9s :\n                                        </p>\n                                        <ul>\n                                            <li>Un v\xE9hicule de marque Mercedes Benz type Commercial immatricul\xE9 2738HK01</li>\n                                            <li>Un v\xE9hicule de marque \u2026\u2026..type \u2026\u2026\u2026\u2026\u2026 immatricul\xE9 \u2026\u2026\u2026\u2026\u2026.HR01</li>\n                                            <li>Un v\xE9hicule de marque \u2026\u2026..type \u2026\u2026\u2026\u2026\u2026 immatricul\xE9 \u2026\u2026\u2026\u2026\u2026.HR01</li>\n                                            <li>Un v\xE9hicule de marque \u2026\u2026..type \u2026\u2026\u2026\u2026\u2026 immatricul\xE9 \u2026\u2026\u2026\u2026\u2026.HR01</li>\n                                            <li>Un v\xE9hicule de marque \u2026\u2026..type \u2026\u2026\u2026\u2026\u2026 immatricul\xE9 \u2026\u2026\u2026\u2026\u2026.HR01</li>\n                                        </ul>\n                                        <p>\n                                            Pour m\xE9moire, suivant convention de pr\xEAt en date du \u2026\u2026\u2026\u2026 la soci\xE9t\xE9 \u2026\u2026\u2026 a sollicit\xE9 et obtenu de notre institution un pr\xEAt \xE0 hauteur de \u2026\u2026\u2026.. F/CFA en principal remboursable sur une dur\xE9e maximale de vingt-quatre (24) mois \xE0 compter du \u2026\u2026\u2026 .\n                                        </p>\n                                        <p>\n                                            A titre de s\xFBret\xE9 du remboursement de ce pr\xEAt, Monsieur/Madame \u2026\u2026.. a offert en gage les vingt (20) v\xE9hicules r\xE9f\xE9renc\xE9s ci-dessus au profit de COFINA C\xD4TE D'IVOIRE.\n                                        </p>\n                                        <p>\n                                            Cependant, la soci\xE9t\xE9 \u2026\u2026\u2026 ne respecte toujours pas ses \xE9ch\xE9ances mensuelles de remboursement, de sorte qu\u2019elle cumule plusieurs \xE9ch\xE9ances \xE9chues et impay\xE9es qui se chiffrent \xE0 date \xE0 la somme de \u2026\u2026\u2026\u2026\u2026 F/CFA en principal sous r\xE9serves des \xE9ch\xE9ances, p\xE9nalit\xE9s et int\xE9r\xEAts \xE0 \xE9choir.\n                                        </p>\n                                        <p>\n                                            Toutes ses perspectives et promesses de paiements afin de r\xE9gulariser sa situation d\xE9bitrice dans nos livres sont rest\xE9es vaines jusqu\u2019\xE0 ce jour.\n                                        </p>\n                                        <p>\n                                            Cette situation cause \xE0 notre Institution un \xE9norme pr\xE9judice et ne saurait davantage perdurer.\n                                        </p>\n                                        <p>\n                                            C\u2019est pourquoi nous vous invitons \xE0 mettre \xE0 la disposition de notre service juridique les v\xE9hicules gag\xE9s susvis\xE9s ainsi que les documents y aff\xE9rents (carte grise, visite technique\u2026) dans un d\xE9lai maximum de huit (08) jours \xE0 compter de la r\xE9ception des pr\xE9sentes afin de nous permettre de nous conformer \xE0 nos proc\xE9dures internes de v\xE9rification de la r\xE9gularit\xE9 des inscriptions et de r\xE9alisation amiable des s\xFBret\xE9s.\n                                        </p>\n                                        <p>\n                                            Aussi, vous rappelant les dispositions de l\u2019article 469 du code p\xE9nal qui dispose que \xAB Est puni d\u2019un emprisonnement d\u2019un \xE0 cinq ans et d\u2019une amende de 300.000 \xE0 3.000.000 de francs [\u2026] 2\xB0 le d\xE9biteur emprunteur ou tiers donneur de gage qui d\xE9truit ou d\xE9tourne l\u2019objet par lui donn\xE9 \xE0 titre de gage ; [\u2026] \xBB, nous vous invitons \xE0 prendre contact avec notre service juridique dans le d\xE9lai sus-indiqu\xE9 \xE0 l\u2019effet de discuter des conditions de r\xE9alisation desdites s\xFBret\xE9s.\n                                        </p>\n                                        <p>\n                                            Tout en esp\xE9rant que vous privil\xE9gierez la voie amiable pour la r\xE9solution de cette affaire, nous vous prions de recevoir Monsieur /Madame\u2026\u2026\u2026\u2026 nos meilleures salutations.\n                                        </p>\n                                    </div>\n\n                                    <div class=\"signature\">\n                                        <p>RESPONSABLE RECOUVREMENT</p>\n                                    </div>\n                                </div>\n                            </body>\n                            </html>\n                    ",
    isClicked: false,
    isHovered: false,
    selected_messages_show: false,
    selected_messages_hide: false,
    sample_letter_to_send: "\n                <!DOCTYPE html>\n                <html lang=\"fr\">\n                <head>\n                    <meta charset=\"UTF-8\">\n                    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n                    <title>Mod\xE8le de Lettre de Pr\xE9sentation de Biens Gag\xE9s</title>\n                    <style>\n                        body {\n                            font-family: Arial, sans-serif;\n                            margin: 40px;\n                        }\n                        .container {\n                            width: 80%;\n                            margin: 0 auto;\n                        }\n                        .header, .footer {\n                            text-align: right;\n                        }\n                        .content {\n                            margin-top: 40px;\n                        }\n                        .signature {\n                            margin-top: 30px;\n                            text-align: right;\n                        }\n                        .header-logo {\n                            text-align: center;\n                        }\n                        .tampon img {\n                            width: 250px;\n                        }\n                        .tampon {\n                            text-align: right;\n                            margin-right: 23px;\n                            margin-top: -13px;\n                        }\n                        .filigrane {\n                            position: fixed;\n                            top: 55%;\n                            left: 50%;\n                            transform: translate(-50%, -50%);\n                            opacity: 0.1;\n                            z-index: 1;\n                            width: 45%;\n                            height: auto;\n                        }\n                    </style>\n                </head>\n                <body>\n\n                    <div class=\"container\">\n                        <div class=\"header\">\n                            <p>Abidjan le {fait_le}</p>\n                            <p>\n                                Nom client {receiver_name}.<br>\n                                (Tel) : {contact_client}<br>\n                                Adresse {adresse_professionnel_principal}\n                            </p>\n                        </div>\n\n                        <div class=\"content\">\n                            <h2>URGENCE SIGNALEE</h2>\n                            <p>Par lettre au porteur avec accus\xE9 de r\xE9ception</p>\n                            <p>A l\u2019attention particuli\xE8re de Monsieur {receiver_name}.</p>\n                            <p>N/R\xE9f: {numero_dossier}<br>\n                            V/R\xE9f: A nous communiquer</p>\n\n                            <p>Monsieur /Madame {receiver_name}.</p>\n\n                            <p>\n                                Nous venons par la pr\xE9sente solliciter la pr\xE9sentation des ({nombre_vehicules}) v\xE9hicules offerts en gage dans le cadre de la convention de pr\xEAt qui lie la soci\xE9t\xE9 <b>{receiver_name}</b> . \xE0 la Compagnie Financi\xE8re Africaine C\xF4te d\u2019Ivoire dite COFINA C\xD4TE D'IVOIRE.\n                            </p>\n                            <p>\n                                Il s\u2019agit notamment des v\xE9hicules ci-dessous r\xE9f\xE9renc\xE9s :\n                            </p>\n                                {vehicle_list_html}\n                            <p>\n                                Pour m\xE9moire, suivant convention de pr\xEAt en date du <b>{date_demande_formated}</b> la soci\xE9t\xE9 a sollicit\xE9 et obtenu de notre institution, un pr\xEAt \xE0 hauteur de <b>{montant_credit_from_decharge}</b> en principal, remboursable sur une dur\xE9e maximale de ({duree_credit}) mois  \xE0 compter du <b>{first_echeance}</b> .\n                            </p>\n                            <p>\n                                A titre de s\xFBret\xE9 du remboursement de ce pr\xEAt, Monsieur/Madame {receiver_name}. a offert en gage les vingts ({nombre_vehicules}) v\xE9hicules r\xE9f\xE9renc\xE9s ci-dessus au profit de COFINA C\xD4TE D'IVOIRE.\n                            </p>\n                            <p>\n                                Cependant, la soci\xE9t\xE9 {receiver_name} ne respecte toujours pas ses \xE9ch\xE9ances mensuelles de remboursement, de sorte qu\u2019elle cumule plusieurs \xE9ch\xE9ances \xE9chues et impay\xE9es qui se chiffrent \xE0 date \xE0 la somme de <b>{encour_impaye} FCFA</b> en principal sous r\xE9serves des \xE9ch\xE9ances, p\xE9nalit\xE9s et int\xE9r\xEAts \xE0 \xE9choir.\n                            </p>\n                            <p>\n                                Toutes ses perspectives et promesses de paiements afin de r\xE9gulariser sa situation d\xE9bitrice dans nos livres sont rest\xE9es vaines jusqu\u2019\xE0 ce jour.\n                            </p>\n                            <p>\n                                Cette situation cause \xE0 notre Institution un \xE9norme pr\xE9judice et ne saurait davantage perdurer.\n                            </p>\n                            <p>\n                                C\u2019est pourquoi nous vous invitons \xE0 mettre \xE0 la disposition de notre service juridique les v\xE9hicules gag\xE9s susvis\xE9s ainsi que les documents y aff\xE9rents (carte grise, visite technique\u2026) dans un d\xE9lai maximum de huit (08) jours \xE0 compter de la r\xE9ception des pr\xE9sentes afin de nous permettre de nous conformer \xE0 nos proc\xE9dures internes de v\xE9rification de la r\xE9gularit\xE9 des inscriptions et de r\xE9alisation amiable des s\xFBret\xE9s.\n                            </p>\n                            <p>\n                                Aussi, vous rappelant les dispositions de l\u2019article 469 du code p\xE9nal qui dispose que \xAB Est puni d\u2019un emprisonnement d\u2019un \xE0 cinq ans et d\u2019une amende de 300.000 \xE0 3.000.000 de francs [\u2026] 2\xB0 le d\xE9biteur emprunteur ou tiers donneur de gage qui d\xE9truit ou d\xE9tourne l\u2019objet par lui donn\xE9 \xE0 titre de gage ; [\u2026] \xBB, nous vous invitons \xE0 prendre contact avec notre service juridique dans le d\xE9lai sus-indiqu\xE9 \xE0 l\u2019effet de discuter des conditions de r\xE9alisation desdites s\xFBret\xE9s.\n                            </p>\n                            <p>\n                                Tout en esp\xE9rant que vous privil\xE9gierez la voie amiable pour la r\xE9solution de cette affaire, nous vous prions de recevoir Monsieur /Madame {receiver_name} nos meilleures salutations.\n                            </p>\n                        </div>\n\n                        <div class=\"signature\">\n                            <p>{sender_name} ({sender_role})</p>\n                            <div class=\"tampon\">\n                                <p>\n                                    <img src=\"{tampon_cofina_path}\"alt=\"Tampon Cofina\">\n                                </p>\n                            </div>\n                        </div>\n                    </div>\n                </body>\n                </html>\n                "
  }, {
    title: " LETTRE D’INFORMATION A LA CAUTION_CDR",
    slug: "LETTRE_INFORMATION_A_LA_CAUTION_CDR",
    letter_data: ["{salutation}", "{receiver_name}", "{recouvrement_text}", "{message_cta}"],
    content: "<!DOCTYPE html>\n                            <html lang=\"fr\">\n                            <head>\n                                <meta charset=\"UTF-8\">\n                                <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n                                <title>Lettre d'information \xE0 la caution</title>\n                                <style>\n                                    body {\n                                        font-family: Arial, sans-serif;\n                                        margin: 40px;\n                                    }\n                                    .container {\n                                        width: 80%;\n                                        margin: 0 auto;\n                                    }\n                                    .header, .footer {\n                                        text-align: right;\n                                    }\n                                    .content {\n                                        margin-top: 40px;\n                                    }\n                                    .signature {\n                                        margin-top: 40px;\n                                    }\n                                    .footer-info {\n                                        margin-top: 60px;\n                                        font-size: 0.9em;\n                                        color: gray;\n                                    }\n                                </style>\n                            </head>\n                            <body>\n                                <div class=\"container\">\n                                    <div class=\"header\">\n                                        <p>Abidjan le \u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026..</p>\n                                        <p>Monsieur/Madame \u2026\u2026\u2026\u2026\u2026..<br>\n                                        \u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026..<br>\n                                        T\xE9l : \u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026.</p>\n                                    </div>\n\n                                    <div class=\"content\">\n                                        <h2>URGENCE SIGNALEE</h2>\n                                        <p>N/R\xE9f: \u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026<br>\n                                        V/R\xE9f: A nous communiquer</p>\n\n                                        <h3>Objet: Lettre d\u2019information de la caution et demande de paiement</h3>\n                                        <p>Monsieur/Madame,</p>\n\n                                        <p>\n                                            Pour rappel, par acte sous seing priv\xE9 en date du \u2026\u2026\u2026\u2026\u2026\u2026. la Compagnie Financi\xE8re Africaine C\xF4te d\u2019Ivoire dite COFINA C\xD4TE D'IVOIRE a accord\xE9 \xE0 Monsieur/Madame \u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026..\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026. un pr\xEAt d\u2019un montant global de \u2026\u2026\u2026\u2026\u2026.. F/CFA en principal remboursable sur douze (\u2026..) \xE9ch\xE9ances mensuelles \xE0 hauteur de \u2026\u2026\u2026. F/CFA chacune.\n                                        </p>\n                                        <p>\n                                            A cette occasion, vous vous \xEAtes port\xE9e caution personnelle solidaire et indivisible de celui-ci par acte sous seing priv\xE9 aux fins de garantir ses engagements dans la limite du montant maximum de \u2026\u2026\u2026. \u2026\u2026\u2026\u2026 (\u2026\u2026\u2026\u2026\u2026\u2026..) F/CFA, ce qui induit que vous \xEAtes tenus de l\u2019ex\xE9cution de l\u2019obligation de payer notre cr\xE9ance dans les m\xEAmes conditions que le D\xE9biteur principal en cas de d\xE9faillance de celui-ci.\n                                        </p>\n                                        <p>\n                                            En cette qualit\xE9 et conform\xE9ment aux dispositions l\xE9gales en vigueur en la mati\xE8re, nous venons par la pr\xE9sente vous informer de la d\xE9faillance de Monsieur/Madame\xA0\u2026\u2026\u2026\u2026..\u2026\u2026\u2026\u2026 qui n\u2019a pas respect\xE9 ses engagements contractuels.\n                                        </p>\n                                        <p>\n                                            Il reste donc devoir \xE0 ce jour \xE0 la Compagnie Africaine de Cr\xE9dit devenue Compagnie Financi\xE8re Africaine de C\xF4te d\u2019Ivoire la somme de \u2026\u2026\u2026\u2026\u2026..  (\u2026\u2026\u2026\u2026\u2026\u2026\u2026..) F/CFA en principal.\n                                        </p>\n                                        <p>\n                                            Nous vous transmettons copie de la lettre de relance rest\xE9e sans suite et vous demandons par cons\xE9quent de prendre les meilleures dispositions afin que la cr\xE9ance susvis\xE9e de notre institution soit rembours\xE9e dans le d\xE9lai de huit (8) jours \xE0 compter de la r\xE9ception des pr\xE9sentes.\n                                        </p>\n                                        <p>\n                                            Pass\xE9 ce d\xE9lai sans r\xE9action de votre part, nous proc\xE8derons au recouvrement judiciaire de notre cr\xE9ance en principal sans pr\xE9judice des int\xE9r\xEAts et p\xE9nalit\xE9s de retard ainsi que des frais de proc\xE9dure qui en d\xE9couleront.\n                                        </p>\n                                        <p>\n                                            Dans l\u2019attente, nous vous prions d\u2019agr\xE9er, Monsieur/Madame, l\u2019expression de nos salutations respectueuses.\n                                        </p>\n                                    </div>\n\n                                    <div class=\"signature\">\n                                        <p>Le Responsable du Recouvrement</p>\n                                    </div>\n                                </div>\n                            </body>\n                            </html>\n                ",
    isClicked: false,
    isHovered: false,
    selected_messages_show: false,
    selected_messages_hide: false,
    sample_letter_to_send: "\n                    <!DOCTYPE html>\n                    <html lang=\"fr\">\n                    <head>\n                        <meta charset=\"UTF-8\">\n                        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n                        <title>Lettre d'information \xE0 la caution</title>\n                        <style>\n                            body {\n                                font-family: Arial, sans-serif;\n                                margin: 40px;\n                            }\n                            .container {\n                                width: 80%;\n                                margin: 0 auto;\n                            }\n                            .header, .footer {\n                                text-align: right;\n                            }\n                            .content {\n                                margin-top: 40px;\n                            }\n                            .signature {\n                                margin-top: 30px;\n                                text-align: right;\n                            }\n                            .header-logo {\n                                text-align: center;\n                            }\n                            .tampon img {\n                                width: 250px;\n                            }\n                            .tampon {\n                                text-align: right;\n                                margin-right: 23px;\n                                margin-top: -13px;\n                            }\n                            .filigrane {\n                                position: fixed;\n                                top: 55%;\n                                left: 50%;\n                                transform: translate(-50%, -50%);\n                                opacity: 0.1;\n                                z-index: 1;\n                                width: 45%;\n                                height: auto;\n                            }\n                        </style>\n                    </head>\n                    <body>\n\n                        <div class=\"container\">\n                            <div class=\"header\">\n                                <p>Abidjan le {fait_le}.</p>\n                                <p>Monsieur/Madame {receiver_name}.<br>\n                                (Tel) : {contact_client}<br>\n                                Adresse {adresse_professionnel_principal}\n                                </p>\n                            </div>\n\n                            <div class=\"content\">\n                                <h2>URGENCE SIGNALEE</h2>\n                                <p>N/R\xE9f: {numero_dossier}<br>\n                                V/R\xE9f: A nous communiquer</p>\n\n                                <p>Monsieur/Madame,</p>\n\n                                <p>\n                                    Pour rappel, par acte sous seing priv\xE9 en date du <b>{date_demande_formated}</b>. la Compagnie Financi\xE8re Africaine C\xF4te d\u2019Ivoire dite COFINA C\xD4TE D'IVOIRE a accord\xE9 \xE0 Monsieur/Madame <b>{denomination_caution}</b> un pr\xEAt d\u2019un montant global de <b>{montant_credit} F/CFA</b> en principal, remboursable sur <b>{nombre_echeance}</b> \xE9ch\xE9ances mensuelles \xE0 hauteur de <b>{montant_echeance}</b> F/CFA chacune.\n                                </p>\n                                <p>\n                                    A cette occasion, vous vous \xEAtes port\xE9e caution personnelle solidaire et indivisible de celui-ci par acte sous seing priv\xE9 aux fins de garantir ses engagements dans la limite du montant maximum de <b>{montant_echeance} F/CFA</b> , ce qui induit que vous \xEAtes tenus de l\u2019ex\xE9cution de l\u2019obligation de payer notre cr\xE9ance dans les m\xEAmes conditions que le D\xE9biteur principal en cas de d\xE9faillance de celui-ci.\n                                </p>\n                                <p>\n                                    En cette qualit\xE9 et conform\xE9ment aux dispositions l\xE9gales en vigueur en la mati\xE8re, nous venons par la pr\xE9sente vous informer de la d\xE9faillance de Monsieur/Madame\xA0 <b>{denomination_caution}</b qui n\u2019a pas respect\xE9 ses engagements contractuels.\n                                </p>\n                                <p>\n                                    Il reste donc devoir \xE0 ce jour \xE0 la Compagnie Africaine de Cr\xE9dit devenue Compagnie Financi\xE8re Africaine de C\xF4te d\u2019Ivoire la somme de <b>{encour_impaye} F/CFA</b> en principal.\n                                </p>\n                                <p>\n                                    Nous vous transmettons copie de la lettre de relance rest\xE9e sans suite et vous demandons par cons\xE9quent de prendre les meilleures dispositions afin que la cr\xE9ance susvis\xE9e de notre institution soit rembours\xE9e dans le d\xE9lai de huit (8) jours \xE0 compter de la r\xE9ception des pr\xE9sentes.\n                                </p>\n                                <p>\n                                    Pass\xE9 ce d\xE9lai sans r\xE9action de votre part, nous proc\xE8derons au recouvrement judiciaire de notre cr\xE9ance en principal sans pr\xE9judice des int\xE9r\xEAts et p\xE9nalit\xE9s de retard ainsi que des frais de proc\xE9dure qui en d\xE9couleront.\n                                </p>\n                                <p>\n                                    Dans l\u2019attente, nous vous prions d\u2019agr\xE9er, Monsieur/Madame {receiver_name}, l\u2019expression de nos salutations respectueuses.\n                                </p>\n                            </div>\n\n                            <div class=\"signature\">\n                                <p>{sender_name} ({sender_role})</p>\n                            </div>\n                            <div class=\"tampon\">\n                                <p>\n                                    <img src=\"{tampon_cofina_path}\"alt=\"Tampon Cofina\">\n                                </p>\n                            </div>\n                        </div>\n                    </body>\n                    </html>\n             "
  }]
}, {
  min: -120,
  max: -91,
  can_make_choice: true,
  seuil: "De 91 à 120 jours de retard après l’échéance",
  condition: ["ET"],
  is_apply: false,
  letters: [{
    title: "LETTRE D’INFORMATION A LA CAUTION (Par voie de Commissaire de Justice)",
    slug: "LETTRE_INFORMATION_A_LA_CAUTION_CDR",
    content: "<!DOCTYPE html>\n                            <html lang=\"fr\">\n                            <head>\n                                <meta charset=\"UTF-8\">\n                                <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n                                <title>Lettre d'information \xE0 la caution</title>\n                                <style>\n                                    body {\n                                        font-family: Arial, sans-serif;\n                                        margin: 40px;\n                                    }\n                                    .container {\n                                        width: 80%;\n                                        margin: 0 auto;\n                                    }\n                                    .header, .footer {\n                                        text-align: right;\n                                    }\n                                    .content {\n                                        margin-top: 40px;\n                                    }\n                                    .signature {\n                                        margin-top: 40px;\n                                    }\n                                    .footer-info {\n                                        margin-top: 60px;\n                                        font-size: 0.9em;\n                                        color: gray;\n                                    }\n                                </style>\n                            </head>\n                            <body>\n                                <div class=\"container\">\n                                    <div class=\"header\">\n                                        <p>Abidjan le \u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026..</p>\n                                        <p>Monsieur/Madame \u2026\u2026\u2026\u2026\u2026..<br>\n                                        \u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026..<br>\n                                        T\xE9l : \u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026.</p>\n                                    </div>\n\n                                    <div class=\"content\">\n                                        <h2>URGENCE SIGNALEE</h2>\n                                        <p>N/R\xE9f: \u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026<br>\n                                        V/R\xE9f: A nous communiquer</p>\n\n                                        <h3>Objet: Lettre d\u2019information de la caution et demande de paiement</h3>\n                                        <p>Monsieur/Madame,</p>\n\n                                        <p>\n                                            Pour rappel, par acte sous seing priv\xE9 en date du \u2026\u2026\u2026\u2026\u2026\u2026. la Compagnie Financi\xE8re Africaine C\xF4te d\u2019Ivoire dite COFINA C\xD4TE D'IVOIRE a accord\xE9 \xE0 Monsieur/Madame \u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026..\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026. un pr\xEAt d\u2019un montant global de \u2026\u2026\u2026\u2026\u2026.. F/CFA en principal remboursable sur douze (\u2026..) \xE9ch\xE9ances mensuelles \xE0 hauteur de \u2026\u2026\u2026. F/CFA chacune.\n                                        </p>\n                                        <p>\n                                            A cette occasion, vous vous \xEAtes port\xE9e caution personnelle solidaire et indivisible de celui-ci par acte sous seing priv\xE9 aux fins de garantir ses engagements dans la limite du montant maximum de \u2026\u2026\u2026. \u2026\u2026\u2026\u2026 (\u2026\u2026\u2026\u2026\u2026\u2026..) F/CFA, ce qui induit que vous \xEAtes tenus de l\u2019ex\xE9cution de l\u2019obligation de payer notre cr\xE9ance dans les m\xEAmes conditions que le D\xE9biteur principal en cas de d\xE9faillance de celui-ci.\n                                        </p>\n                                        <p>\n                                            En cette qualit\xE9 et conform\xE9ment aux dispositions l\xE9gales en vigueur en la mati\xE8re, nous venons par la pr\xE9sente vous informer de la d\xE9faillance de Monsieur/Madame\xA0\u2026\u2026\u2026\u2026..\u2026\u2026\u2026\u2026 qui n\u2019a pas respect\xE9 ses engagements contractuels.\n                                        </p>\n                                        <p>\n                                            Il reste donc devoir \xE0 ce jour \xE0 la Compagnie Africaine de Cr\xE9dit devenue Compagnie Financi\xE8re Africaine de C\xF4te d\u2019Ivoire la somme de \u2026\u2026\u2026\u2026\u2026..  (\u2026\u2026\u2026\u2026\u2026\u2026\u2026..) F/CFA en principal.\n                                        </p>\n                                        <p>\n                                            Nous vous transmettons copie de la lettre de relance rest\xE9e sans suite et vous demandons par cons\xE9quent de prendre les meilleures dispositions afin que la cr\xE9ance susvis\xE9e de notre institution soit rembours\xE9e dans le d\xE9lai de huit (8) jours \xE0 compter de la r\xE9ception des pr\xE9sentes.\n                                        </p>\n                                        <p>\n                                            Pass\xE9 ce d\xE9lai sans r\xE9action de votre part, nous proc\xE8derons au recouvrement judiciaire de notre cr\xE9ance en principal sans pr\xE9judice des int\xE9r\xEAts et p\xE9nalit\xE9s de retard ainsi que des frais de proc\xE9dure qui en d\xE9couleront.\n                                        </p>\n                                        <p>\n                                            Dans l\u2019attente, nous vous prions d\u2019agr\xE9er, Monsieur/Madame, l\u2019expression de nos salutations respectueuses.\n                                        </p>\n                                    </div>\n\n                                    <div class=\"signature\">\n                                        <p>Le Responsable du Recouvrement</p>\n                                    </div>\n                                </div>\n                            </body>\n                            </html>\n                ",
    isClicked: false,
    isHovered: false,
    selected_messages_show: false,
    selected_messages_hide: false,
    letter_data: ["{salutation}", "{receiver_name}", "{recouvrement_text}", "{message_cta}"],
    sample_letter_to_send: "\n                <!DOCTYPE html>\n                <html>\n                    <head>\n                        <meta charset='utf-8' /><meta http-equiv='x-ua-compatible' content='ie=edge' />\n                    </head>\n                    <body>\n                        <p>{salutation} {receiver_name},<br/><br/>\n                        Pour rappel, par acte sous seing priv\xE9 en date du <b>{date_demande_formated}</b>, la Compagnie Financi\xE8re Africaine C\xF4te d\u2019Ivoire dite COFINA C\xD4TE D'IVOIRE a accord\xE9 \xE0 Monsieur/Madame <b>{receiver_name}</b> un pr\xEAt d\u2019un montant global de <b>{montant_credit_from_decharge} F/CFA</b> en principal, remboursable sur <b>{nombre_echeance}</b> \xE9ch\xE9ances mensuelles \xE0 hauteur de <b>{montant_echeance} F/CFA</b> chacune.<br/>\n                        \xC0 cette occasion, vous vous \xEAtes port\xE9(e) caution personnelle, solidaire et indivisible de celui-ci, par acte sous seing priv\xE9, aux fins de garantir ses engagements dans la limite du montant maximum de <b>{montant_echeance} F/CFA</b>, ce qui induit que vous \xEAtes tenu(e) de l\u2019ex\xE9cution de l\u2019obligation de payer notre cr\xE9ance dans les m\xEAmes conditions que le d\xE9biteur principal en cas de d\xE9faillance de celui-ci.<br/>\n                        En cette qualit\xE9 et conform\xE9ment aux dispositions l\xE9gales en vigueur en la mati\xE8re, nous venons par la pr\xE9sente vous informer de la d\xE9faillance de Monsieur/Madame {receiver_name} qui n\u2019a pas respect\xE9 ses engagements contractuels.<br/>\n                        Il reste donc devoir \xE0 ce jour \xE0 la Compagnie Africaine de Cr\xE9dit devenue Compagnie Financi\xE8re Africaine de C\xF4te d\u2019Ivoire, la somme de <b>{encour_impaye} F/CFA</b> en principal.<br/>\n                        Nous vous transmettons copie de la lettre de relance rest\xE9e sans suite et vous demandons par cons\xE9quent de prendre les meilleures dispositions afin que la cr\xE9ance susvis\xE9e de notre institution soit rembours\xE9e dans <b>le d\xE9lai de huit (8) jours</b> \xE0 compter de la r\xE9ception des pr\xE9sentes.<br/>\n                        Pass\xE9 ce d\xE9lai sans r\xE9action de votre part, nous proc\xE9derons au recouvrement judiciaire de notre cr\xE9ance en principal, sans pr\xE9judice des int\xE9r\xEAts et p\xE9nalit\xE9s de retard, ainsi que des frais de proc\xE9dure qui en d\xE9couleront.<br/>\n                        Dans l\u2019attente, nous vous prions d\u2019agr\xE9er, Monsieur/Madame, l\u2019expression de nos salutations respectueuses.\n                        <br/>\n                        Cordialement, <br/> Le Responsable du Recouvrement\n                        </p>\n                    </body>\n                </html>\n        "
  },
  // EN ATTENTE
  {
    title: "MISE EN DEMEURE",
    slug: "MISE_EN_DEMEURE",
    content: "\n                    ",
    isClicked: false,
    isHovered: false,
    selected_messages_show: false,
    selected_messages_hide: false,
    sample_letter_to_send: ""
  }]
}, {
  min: -180,
  max: -121,
  can_make_choice: true,
  seuil: "De 121 à 180 jours de retard après l’échéance",
  is_apply: false,
  condition: ["ONLY"],
  letters: [{
    title: "MESURES CONSERVATOIRES (Saisie de créances, saisie de biens meubles corporels,…)",
    // EN ATTENTE
    slug: "MESURES_CONSERVATOIRES",
    content: "\n                    ",
    isClicked: false,
    isHovered: false,
    selected_messages_show: false,
    selected_messages_hide: false,
    sample_letter_to_send: ""
  }]
}, {
  min: -240,
  max: -181,
  can_make_choice: true,
  seuil: "De 181 à 240 jours de retard après l’échéance",
  is_apply: false,
  condition: ["ONLY"],
  letters: [{
    title: "DECISION DE JUSTICE (Requête OIP ou Assignation)",
    // EN ATTENTE
    slug: "DECISION_DE_JUSTICE",
    content: "\n                    ",
    isClicked: false,
    isHovered: false,
    selected_messages_show: false,
    selected_messages_hide: false,
    sample_letter_to_send: ""
  }]
}, {
  min: -360,
  is_apply: false,
  max: -241,
  can_make_choice: true,
  seuil: "241 à 360 jours de retard après l’échéance",
  condition: ["ONLY"],
  letters: [{
    title: "MESURES D’EXECUTION (Saisie attribution de créances, saisie vente, …)",
    // EN ATTENTE
    slug: "MESURES_EXECUTION",
    content: "\n                    ",
    isClicked: false,
    isHovered: false,
    selected_messages_show: false,
    selected_messages_hide: false,
    sample_letter_to_send: ""
  }]
}, {
  min: -99999999,
  is_apply: false,
  max: -361,
  can_make_choice: true,
  seuil: "Après 360 jours d’impayé",
  condition: ["ONLY"],
  letters: [{
    title: "MESURES D’EXECUTION (Saisie attribution de créances, saisie vente, …)",
    // EN ATTENTE
    slug: "MESURES_EXECUTION",
    content: "\n                    ",
    isClicked: false,
    isHovered: false,
    selected_messages_show: false,
    selected_messages_hide: false,
    sample_letter_to_send: ""
  }]
}];

/***/ }),

/***/ "./resources/js/services/recouvrement.service.js":
/*!*******************************************************!*\
  !*** ./resources/js/services/recouvrement.service.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RECOVERY_TB_MAP: () => (/* binding */ RECOVERY_TB_MAP),
/* harmony export */   RECOVERY_TB_MAP_LABEL: () => (/* binding */ RECOVERY_TB_MAP_LABEL),
/* harmony export */   TB_WITH_PROMISES: () => (/* binding */ TB_WITH_PROMISES),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   forEachPromise: () => (/* binding */ forEachPromise),
/* harmony export */   forEachPromiseAsync: () => (/* binding */ forEachPromiseAsync),
/* harmony export */   getTbKey: () => (/* binding */ getTbKey),
/* harmony export */   promiseTemplate: () => (/* binding */ promiseTemplate),
/* harmony export */   truncateStr: () => (/* binding */ truncateStr)
/* harmony export */ });
/* harmony import */ var _custom_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./custom.axios */ "./resources/js/services/custom.axios.js");
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), c(GeneratorFunctionPrototype, u, GeneratorFunction.displayName = "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * *
* "docName": Recouvrements
*
* "Description": Handles Recouvrements api calls
 */

var EBAPIS_URL = "http://127.0.0.1:8000/";
var ENDPOINT = 'loaniq/api/';
var VERSION = 'v1/';
var API_URL = EBAPIS_URL + ENDPOINT + VERSION;
var FRONT_API_URL = "/api/";
var OBJECT_METHODS = [{
  "name": "Première relance",
  "par_min": 1,
  "par_max": 7,
  "objectifs": "Rappeler le débiteur de son obligation de paiement",
  "methode": "Envoi d’un email et appel téléphonique",
  "allowed_role": ["r472oAxtaFJSlsh5"],
  "team": "EQUIPE_0"
}, {
  "name": "Première relance",
  "par_min": 8,
  "par_max": 15,
  "objectifs": "Rappeler le débiteur de son obligation de paiement",
  "methode": "Visite avec remise de la lettre contre décharge",
  "allowed_role": ["r472oAxtaFJSlsh5"],
  "team": "EQUIPE_0"
}, {
  "name": "Deuxième Relance",
  "par_min": 16,
  "par_max": 30,
  "objectifs": "Insister sur l’importance du règlement rapide",
  "methode": "Envoi d'un email, appel téléphonique, visite avec remise de la lettre contre décharge",
  "allowed_role": ["r472oAxtaFJSlsh5", "yYnev325ob1vDkgq", '1gwhyPuYhPuAfuEz', 'QBRHlcRW5H52grDn'],
  "team": "EQUIPE_0"
}, {
  "name": "Information des cautions ",
  "par_min": 31,
  "par_max": 45,
  "objectifs": "Formaliser et clarifier les obligations et les responsabilités des cautions dans le cadre du contrat de prêt",
  "methode": "Envoi d'un email, appel téléphonique, visite avec remise de la lettre contre décharge",
  "allowed_role": ["r472oAxtaFJSlsh5", "yYnev325ob1vDkgq", '1gwhyPuYhPuAfuEz', 'QBRHlcRW5H52grDn'],
  "team": "EQUIPE_0"
},
// EQUIPE 1
{
  "name": "Troisième Relance",
  "par_min": 46,
  "par_max": 60,
  "objectifs": "Dernier rappel au débiteur de son obligation de paiement",
  "methode": "Envoi d'un email, appel téléphonique, visite avec remise de la lettre contre décharge",
  "allowed_role": ["aFwisnrdo42c4n9MHCG2"],
  "team": "EQUIPE_1"
}, {
  "name": "1ère Présentation du Bien Gagé ou Information à la caution ",
  "par_min": 61,
  "par_max": 90,
  "objectifs": "Informer et formaliser l'engagement de la caution ou du garant dans le contrat de prêt",
  "methode": "Envoi d'un email, appel téléphonique, visite avec remise de la lettre contre décharge",
  "allowed_role": ["aFwisnrdo42c4n9MHCG2", "tmu3PEDVQsevYH2rhw4o", "icWghWx71w9VpwZ6y1mT"],
  "team": "EQUIPE_1"
},
// EQUIPE2
{
  "name": "Mise en Demeure",
  "par_min": 91,
  "par_max": 105,
  "objectifs": "Dernière tentative amiable avant action judicaire",
  "methode": "Dernière tentative amiable avant action judicaire",
  "allowed_role": ["aFwisnrdo42c4n9MHCG2"],
  "team": "EQUIPE_2"
}, {
  "name": "2ième Présentation du Bien Gagé ou Information à la caution",
  "par_min": 106,
  "par_max": 120,
  "objectifs": "Formaliser les responsabilités des cautions ou des détenteurs de biens gages et d'exiger le paiement ou la régularisation avant d'engager une action judiciaire",
  "methode": ["Appel téléphonique, visite avec remise de la lettre contre décharge"],
  "allowed_role": ["aFwisnrdo42c4n9MHCG2", "tmu3PEDVQsevYH2rhw4o", "icWghWx71w9VpwZ6y1mT"],
  "team": "EQUIPE_2"
}, {
  "name": "Vérifier les garanties et récupérer la décharge des courriers transmis",
  "par_min": 121,
  "par_max": 135,
  "objectifs": "Vérifier les garanties et récupérer la décharge des courriers transmis",
  "methode": "Courrier et Visite avec remise de la lettre contre décharge",
  "allowed_role": ["aFwisnrdo42c4n9MHCG2", "tmu3PEDVQsevYH2rhw4o", "icWghWx71w9VpwZ6y1mT"],
  "team": "EQUIPE_2"
}, {
  "name": "Injonction de Payer",
  "par_min": 136,
  "par_max": 150,
  "objectifs": "Obtenir une décision du tribunal",
  "methode": "Dépôt de la requête en injonction de payer auprès du tribunal compétent (Tribunal de Commerce ou tribunal judiciaire)",
  "allowed_role": ["aFwisnrdo42c4n9MHCG2", "tmu3PEDVQsevYH2rhw4o", "icWghWx71w9VpwZ6y1mT"],
  "team": "EQUIPE_2"
}, {
  "name": "Jugement",
  "par_min": 151,
  "par_max": 180,
  "objectifs": "Obtenir une décision définitive sur le litige",
  "methode": "Obtenir une décision définitive sur le litige",
  "allowed_role": ["aFwisnrdo42c4n9MHCG2", "tmu3PEDVQsevYH2rhw4o", "icWghWx71w9VpwZ6y1mT"],
  "team": "EQUIPE_2"
},
// EQUIPE 3
{
  "name": "Exécution du Jugement",
  "par_min": 181,
  "par_max": 240,
  "objectifs": "Obtenir une décision définitive sur le litige",
  "methode": "Audience au tribunal, présentation des arguments et des preuves, délibération des juges",
  "allowed_role": ["aFwisnrdo42c4n9MHCG2", "tmu3PEDVQsevYH2rhw4o", "icWghWx71w9VpwZ6y1mT"],
  "team": "EQUIPE_3"
}, {
  "name": "Exécution du Jugement",
  "par_min": 241,
  "par_max": 300,
  "objectifs": "Obtenir une décision définitive sur le litige",
  "methode": "Audience au tribunal, présentation des arguments et des preuves, délibération des juges",
  "allowed_role": ["aFwisnrdo42c4n9MHCG2", "tmu3PEDVQsevYH2rhw4o", "icWghWx71w9VpwZ6y1mT"],
  "team": "EQUIPE_3"
}, {
  "name": "Radiation",
  "par_min": 301,
  "par_max": 9999999999999,
  "objectifs": "Audience au tribunal, présentation des arguments et des preuves, délibération des juges",
  "methode": "Evaluation de la créance, obtention de l'approbation, ajustement les comptes, mise à jour des dossiers, et notification des parties concerné",
  "allowed_role": ["aFwisnrdo42c4n9MHCG2", "tmu3PEDVQsevYH2rhw4o", "icWghWx71w9VpwZ6y1mT"],
  "team": "EQUIPE_3"
}];
var ACTIONS_LIST = [
// COMMERCIALE
{
  "docSlug": "appel_telephonique",
  "tbToBeUsed": ['tb16500'],
  //tb16505
  "categorie_client": ["Retail"],
  "linkedTo": ['MEMORANDUM_CREDIT', 'REVIEW_MEMORANDUM', 'FICHE_RECOUVREMENT', 'REVIEW_FICHE_RECOUVREMENT'],
  "isDefault": false,
  "entity": ['MICROFINANCE'],
  "docName": "Rapport d'appel téléphonique",
  "action": "Appel téléphonique",
  "description": "Rapport d'appel téléphonique ...",
  "has_doing": false,
  "allowed_role": ["r472oAxtaFJSlsh5", "yYnev325ob1vDkgq", '1gwhyPuYhPuAfuEz', 'QBRHlcRW5H52grDn', 'aFwisnrdo42c4n9MHCG2', 'tmu3PEDVQsevYH2rhw4o'],
  // caf , ca , dexr , dexc
  "par_min": 1,
  "par_max": 7,
  "entite": ['CFN CIV']
  // "more_info":{
  //     "name":"Première relance",
  //     "objectifs":["Rappeler le débiteur de son obligation de paiement"],
  //     "methode":["Envoi d’un email et appel téléphonique"],
  //     "allowed_role": ["r472oAxtaFJSlsh5"],
  //     "team":"EQUIPE0"
  // }
}, {
  "docSlug": "visite_du_client_par_le_caf",
  "tbToBeUsed": ['tb16503', 'tb16501'],
  "categorie_client": ["Retail"],
  "linkedTo": ['MEMORANDUM_CREDIT', 'REVIEW_MEMORANDUM', 'FICHE_RECOUVREMENT', 'REVIEW_FICHE_RECOUVREMENT'],
  "isDefault": false,
  "entity": ['MICROFINANCE'],
  "docName": "Rapport de visite",
  "action": "Visite du client par le CAF (Si nécessaire)",
  "description": "Description de la transmission par mail de la première lettre de première lettre de relance ...",
  "has_doing": false,
  "allowed_role": ["r472oAxtaFJSlsh5", "yYnev325ob1vDkgq", '1gwhyPuYhPuAfuEz', 'QBRHlcRW5H52grDn', 'aFwisnrdo42c4n9MHCG2', 'tmu3PEDVQsevYH2rhw4o'],
  "par_min": 1,
  "par_max": 7,
  "entite": ['CFN CIV']
}, {
  "docSlug": "comite_de_recouvrement",
  "tbToBeUsed": ['tb16504'],
  "categorie_client": ["Retail"],
  "linkedTo": ['MEMORANDUM_CREDIT', 'REVIEW_MEMORANDUM', 'FICHE_RECOUVREMENT', 'REVIEW_FICHE_RECOUVREMENT'],
  "isDefault": false,
  "entity": ['MICROFINANCE'],
  "docName": "Comité de Recouvrement",
  "action": "Comité de recouvrement",
  "description": "Description de la Comité de recouvrement ....",
  "has_doing": false,
  "allowed_role": ["r472oAxtaFJSlsh5", "yYnev325ob1vDkgq"],
  "par_min": 1,
  "par_max": 7,
  "entite": ['CFN CIV']
}, {
  "docSlug": "decharge_lettre_relance",
  "tbToBeUsed": [],
  "categorie_client": ["Retail"],
  "linkedTo": ['MEMORANDUM_CREDIT', 'REVIEW_MEMORANDUM', 'FICHE_RECOUVREMENT', 'REVIEW_FICHE_RECOUVREMENT'],
  "isDefault": false,
  "entity": ['MICROFINANCE'],
  "docName": "Décharge de la lettre de relance",
  "action": "Décharge de la lettre de relance",
  "description": "Description de la décharge de la lettre de relance...",
  "has_doing": false,
  "allowed_role": ["r472oAxtaFJSlsh5", "yYnev325ob1vDkgq", '1gwhyPuYhPuAfuEz', 'QBRHlcRW5H52grDn', "aFwisnrdo42c4n9MHCG2", 'tmu3PEDVQsevYH2rhw4o'],
  "par_min": 1,
  "par_max": 7,
  "entite": ['CFN CIV']
},
// {
//     "docSlug": "decharge_de_la_2nd_lettre_de_relance",
//     "tbToBeUsed": [],
//     "categorie_client": ["Retail"],
//     "linkedTo": ['MEMORANDUM_CREDIT','REVIEW_MEMORANDUM','FICHE_RECOUVREMENT','REVIEW_FICHE_RECOUVREMENT'],
//     "isDefault": false,
//     "entity": ['MICROFINANCE'],
//     "docName": "Décharge de la 2nd lettre de relance",
//     "action":"Décharge de la 2nd lettre de relance",
//     "description": "Description de la décharge de la 2nd lettre de relance ...",
//     "has_doing": false,
//     "allowed_role": ["r472oAxtaFJSlsh5","yYnev325ob1vDkgq"],
//     "par_min": 8,
//     "par_max": 15,
//     "entite": ['CFN CIV'],
// },

// {
//     "docSlug": "comite_de_recouvrement",
//     "tbToBeUsed": ['tb16504'],
//     "categorie_client": ["Retail"],
//     "linkedTo": ['MEMORANDUM_CREDIT','REVIEW_MEMORANDUM','FICHE_RECOUVREMENT','REVIEW_FICHE_RECOUVREMENT'],
//     "isDefault": false,
//     "entity": ['MICROFINANCE'],
//     "docName": "Comité de Recouvrement Filiale.",
//     "action":"Comité de recouvrement Filiale.",
//     "description": "Description de la Comité de recouvrement Filiale....",
//     "has_doing": false,
//     "allowed_role": ["yYnev325ob1vDkgq"],
//     "par_min": 16,
//     "par_max": 30,
//     "entite": ['CFN CIV'],
// },

{
  "docSlug": "appel_telephonique_des_cautions",
  "tbToBeUsed": ['tb16506'],
  "categorie_client": ["Retail"],
  "linkedTo": ['MEMORANDUM_CREDIT', 'REVIEW_MEMORANDUM', 'FICHE_RECOUVREMENT', 'REVIEW_FICHE_RECOUVREMENT'],
  "isDefault": false,
  "entity": ['MICROFINANCE'],
  "docName": "Appel Téléphonique des cautions ",
  "action": "Rapport d'appel téléphonique",
  "description": "Description de la Mise à jour diligences (Appel téléphonique et Visite)...",
  "has_doing": false,
  "allowed_role": ['1gwhyPuYhPuAfuEz', 'QBRHlcRW5H52grDn', "yYnev325ob1vDkgq", "aFwisnrdo42c4n9MHCG2", 'tmu3PEDVQsevYH2rhw4o'],
  "par_min": 31,
  "par_max": 45,
  "entite": ['CFN CIV']
},
// {
//     "docSlug": "mise_a_jour_des_diligences_caf_superviseur_caf_ou_ca",
//     "tbToBeUsed": ['tb16502'],
//     "categorie_client": ["Retail"],
//     "linkedTo": ['MEMORANDUM_CREDIT','REVIEW_MEMORANDUM','FICHE_RECOUVREMENT','REVIEW_FICHE_RECOUVREMENT'],
//     "isDefault": false,
//     "entity": ['MICROFINANCE'],
//     "docName": "Mise à jour des diligences CAF, Superviseur CAF ou CA",
//     "action":"Mise à jour des diligences CAF, Superviseur CAF ou CA",
//     "description": "Description de la Mise à jour diligences CAF (Appel téléphonique et Visite)...",
//     "has_doing": false,
//     "allowed_role": ["yYnev325ob1vDkgq","r472oAxtaFJSlsh5"],
//     "par_min": 31,
//     "par_max": 45,
//     "entite": ['CFN CIV'],
// },
// {
//     "docSlug": "mise_a_jour_du_mail_et_du_numero_de_telephone_des_cautions_solidaires_si_necessaire_et_renvoyer_la_lettre_dinformation_a_la_caution",
//     "tbToBeUsed": ['tb16500', 'tb16501', 'tb16502'],
//     "categorie_client": ["Retail"],
//     "linkedTo": ['MEMORANDUM_CREDIT','REVIEW_MEMORANDUM','FICHE_RECOUVREMENT','REVIEW_FICHE_RECOUVREMENT'],
//     "isDefault": false,
//     "entity": ['MICROFINANCE'],
//     "docName": "Mise à jour du mail et du numéro de téléphone des cautions solidaires si nécessaire et renvoyer la lettre d'information à la caution",
//     "action":"Mise à jour du mail et du numéro de téléphone des cautions solidaires et renvoyer la lettre d'information à la caution",
//     "description": "Description de la Mise à jour diligences CAF (Appel téléphonique et Visite)...",
//     "has_doing": false,
//     "allowed_role": ["yYnev325ob1vDkgq","r472oAxtaFJSlsh5"],
//     "par_min": 31,
//     "par_max": 45,
//     "entite": ['CFN CIV'],
// },
// {
//     "docSlug": "description_de_lactions_du_dex",
//     "tbToBeUsed": ['tb16500', 'tb16501', 'tb16502'],
//     "categorie_client": ["Retail"],
//     "linkedTo": ['MEMORANDUM_CREDIT','REVIEW_MEMORANDUM','FICHE_RECOUVREMENT','REVIEW_FICHE_RECOUVREMENT'],
//     "isDefault": false,
//     "entity": ['MICROFINANCE'],
//     "docName": "Actions du DEX",
//     "action":"Actions du DEX",
//     "description": "Description de l'Actions du DEX...",
//     "has_doing": false,
//     "allowed_role": ["yYnev325ob1vDkgq","r472oAxtaFJSlsh5"],
//     "par_min": 31,
//     "par_max": 45,
//     "entite": ['CFN CIV'],
// },
{
  "docSlug": "visite_de_le_caution",
  "tbToBeUsed": ['tb16507'],
  "categorie_client": ["Retail"],
  "linkedTo": ['MEMORANDUM_CREDIT', 'REVIEW_MEMORANDUM', 'FICHE_RECOUVREMENT', 'REVIEW_FICHE_RECOUVREMENT'],
  "isDefault": false,
  "entity": ['MICROFINANCE'],
  "docName": "Visite de la caution",
  "action": "Visite de la caution",
  "description": "Description de Visite de la caution...",
  "has_doing": false,
  "allowed_role": ['1gwhyPuYhPuAfuEz', 'QBRHlcRW5H52grDn', "yYnev325ob1vDkgq", "aFwisnrdo42c4n9MHCG2", 'tmu3PEDVQsevYH2rhw4o'],
  "par_min": 31,
  "par_max": 45,
  "entite": ['CFN CIV']
},
// {
//     "docSlug": "decharge_de_la_lettre_information_a_la_caution",
//     "tbToBeUsed": [],
//     "categorie_client": ["Retail"],
//     "linkedTo": ['MEMORANDUM_CREDIT','REVIEW_MEMORANDUM','FICHE_RECOUVREMENT','REVIEW_FICHE_RECOUVREMENT'],
//     "isDefault": false,
//     "entity": ['MICROFINANCE'],
//     "docName": "Décharge de la lettre d'information à la caution",
//     "action":"Décharge de la lettre d'information à la caution",
//     "description": "Description de la décharge de la lettre d'information à la caution ...",
//     "has_doing": false,
//     "allowed_role": ["r472oAxtaFJSlsh5","yYnev325ob1vDkgq",'1gwhyPuYhPuAfuEz','QBRHlcRW5H52grDn'],
//     "par_min": 31,
//     "par_max": 45,
//     "entite": ['CFN CIV'],
// },
// PROCESS RECOUVREMENT AMIABLE
//J46 - J60
// {
//     "docSlug": "transmission_mise_en_demeure" ,
//     "tbToBeUsed": [],
//     "categorie_client": ["Retail"],
//     "linkedTo": ['MEMORANDUM_CREDIT','REVIEW_MEMORANDUM','FICHE_RECOUVREMENT','REVIEW_FICHE_RECOUVREMENT'],
//     "isDefault": false,
//     "entity": ['MICROFINANCE'],
//     "docName": "Transmission de la Mise en demeure au client par le SI",
//     "action": "Transmission de la Mise en demeure au client par le SI",
//     "description": "Description de la Transmission de la Mise en demeure au client par le SI",
//     "has_doing": false,
//     "allowed_role": ["aFwisnrdo42c4n9MHCG2"], //agent recouvrement
//     "par_min": 46,
//     "par_max": 60,
//     "entite": ['CFN CIV'],
// },
// {
//     "docSlug": "appel_telephonique",
//     "tbToBeUsed": ['tb16500','tb16506'],//tb16505
//     "categorie_client": ["Retail"],
//     "linkedTo": ['MEMORANDUM_CREDIT','REVIEW_MEMORANDUM','FICHE_RECOUVREMENT','REVIEW_FICHE_RECOUVREMENT'],
//     "isDefault": false,
//     "entity": ['MICROFINANCE'],
//     "docName":"Rapport d'appel téléphonique",
//     "action":"Appel téléphonique",
//     "description": "Rapport d'appel téléphonique ...",
//     "has_doing": false,
//     "allowed_role": ["aFwisnrdo42c4n9MHCG2"],//agent recouvrement
//     "par_min": 46,
//     "par_max": 60,
//     "entite": ['CFN CIV'],
// },
// {
//     "docSlug": "visite_du_client_effectue_par_le_charge_recouvrement",
//     "tbToBeUsed": ['tb16504',"tb16501"],
//     "categorie_client": ["Retail"],
//     "linkedTo": ['MEMORANDUM_CREDIT','REVIEW_MEMORANDUM','FICHE_RECOUVREMENT','REVIEW_FICHE_RECOUVREMENT'],
//     "isDefault": false,
//     "entity": ['MICROFINANCE'],
//     "docName": "Visite du client effectué par le chargé recouvrement",
//     "action":"",
//     "description": "Description de la Visite du client effectué par le chargé recouvrement ...",
//     "has_doing": false,
//     "allowed_role": ["aFwisnrdo42c4n9MHCG2"],
//     "par_min": 46,
//     "par_max": 60,
//     "entite": ['CFN CIV'],
// },
// {
//     "docSlug": "recueille_la_decharge_de_la_lettre_de_mise_demeure",
//     "tbToBeUsed": ['tb16500', 'tb16501'],
//     "categorie_client": ["Retail"],
//     "linkedTo": ['MEMORANDUM_CREDIT','REVIEW_MEMORANDUM','FICHE_RECOUVREMENT','REVIEW_FICHE_RECOUVREMENT'],
//     "isDefault": false,
//     "entity": ['MICROFINANCE'],
//     "docName": " Recueillir la décharge de la lettre de Mise en demeure",
//     "action":"",
//     "description": "Description de Recueillir la décharge de la lettre de Mise en demeure ...",
//     "has_doing": false,
//     "allowed_role": ["aFwisnrdo42c4n9MHCG2"],
//     "par_min": 46,
//     "par_max": 60,
//     "entite": ['CFN CIV'],
// },
// {
//     "docSlug": "en_cas_de_non_visite_retransmission_manuelle_de_la_lettre_de_mise_demeure_au_client",
//     "tbToBeUsed": ['tb16502'],
//     "categorie_client": ["Retail"],
//     "linkedTo": ['MEMORANDUM_CREDIT','REVIEW_MEMORANDUM','FICHE_RECOUVREMENT','REVIEW_FICHE_RECOUVREMENT'],
//     "isDefault": false,
//     "entity": ['MICROFINANCE'],
//     "docName": "En cas de non visite, retransmission manuelle de la lettre de Mise en demeure au client",
//     "action":"",
//     "description": "Description de la retransmission manuelle de la lettre de Mise en demeure au client ...",
//     "has_doing": false,
//     "allowed_role": ["aFwisnrdo42c4n9MHCG2"],
//     "par_min": 46,
//     "par_max": 60,
//     "entite": ['CFN CIV'],
// },
// {
//     "docSlug": "revue_surete_et_garanties" ,
//     "tbToBeUsed": [],
//     "categorie_client": ["Retail"],
//     "linkedTo": ['MEMORANDUM_CREDIT','REVIEW_MEMORANDUM','FICHE_RECOUVREMENT','REVIEW_FICHE_RECOUVREMENT'],
//     "isDefault": false,
//     "entity": ['MICROFINANCE'],
//     "docName": "Revu des suretés et garanties.",
//     "action": "Revu des suretés et garanties.",
//     "description": "Description de la Revu des suretés et garanties.",
//     "has_doing": false,
//     "allowed_role": ["aFwisnrdo42c4n9MHCG2"], //agent recouvrement
//     "par_min": 46,
//     "par_max": 60,
//     "entite": ['CFN CIV'],
// },
// J61-75
// {
//     "docSlug": "transmission_ lettre_presentation_bien_gage" ,
//     "tbToBeUsed": [],
//     "categorie_client": ["Retail"],
//     "linkedTo": ['MEMORANDUM_CREDIT','REVIEW_MEMORANDUM','FICHE_RECOUVREMENT','REVIEW_FICHE_RECOUVREMENT'],
//     "isDefault": false,
//     "entity": ['MICROFINANCE'],
//     "docName": "Transmission de la lettre de présentation de bien gage ou de la lettre d'information à la caution suivi de mise en demeure par le Responsable recouvrement ",
//     "action": "Transmission de la lettre de présentation de bien gage ou de la lettre d'information à la caution suivi de mise en demeure par le Responsable recouvrement ",
//     "description": "Description de la Transmission de la lettre de présentation de bien gage ou de la lettre d'information à la caution suivi de mise en demeure par le Responsable recouvrement ",
//     "has_doing": false,
//     "allowed_role": ["aFwisnrdo42c4n9MHCG2",'tmu3PEDVQsevYH2rhw4o'], //agent recouvrement + responsable recouvrement
//     "par_min": 61,
//     "par_max": 75,
//     "entite": ['CFN CIV'],
// },
// {
//     "docSlug": "appel_telephonique",
//     "tbToBeUsed": ['tb16500','tb16506'],//tb16505
//     "categorie_client": ["Retail"],
//     "linkedTo": ['MEMORANDUM_CREDIT','REVIEW_MEMORANDUM','FICHE_RECOUVREMENT','REVIEW_FICHE_RECOUVREMENT'],
//     "isDefault": false,
//     "entity": ['MICROFINANCE'],
//     "docName":"Rapport d'appel téléphonique",
//     "action":"Appel téléphonique",
//     "description": "Rapport d'appel téléphonique ...",
//     "has_doing": false,
//     "allowed_role": ["aFwisnrdo42c4n9MHCG2",'tmu3PEDVQsevYH2rhw4o'],//agent recouvrement + responsable recouvrement
//     "par_min": 61,
//     "par_max": 75,
//     "entite": ['CFN CIV'],
// },
// {
//     "docSlug": "visite_du_client_effectue_par_le_responsable_recouvrement_avec_geolocalisation",
//     "tbToBeUsed": ['tb16504',"tb16501"],
//     "categorie_client": ["Retail"],
//     "linkedTo": ['MEMORANDUM_CREDIT','REVIEW_MEMORANDUM','FICHE_RECOUVREMENT','REVIEW_FICHE_RECOUVREMENT'],
//     "isDefault": false,
//     "entity": ['MICROFINANCE'],
//     "docName": "Rapport de visite",
//     "action":"Visite du client effectué par le responsable recouvrement avec géolocalisation",
//     "description": "Description de la Visite du client effectué par le responsable recouvrement avec géolocalisation ...",
//     "has_doing": false,
//     "allowed_role": ["aFwisnrdo42c4n9MHCG2",'tmu3PEDVQsevYH2rhw4o'],
//     "par_min": 61,
//     "par_max": 75,
//     "entite": ['CFN CIV'],
// },
// {
//     "docSlug": "recueille_la_decharge_de_la_presentation_de_bien_gage_suivi_de_mise_en_demeure_client",
//     "tbToBeUsed": ['tb16500', 'tb16501'],
//     "categorie_client": ["Retail"],
//     "linkedTo": ['MEMORANDUM_CREDIT','REVIEW_MEMORANDUM','FICHE_RECOUVREMENT','REVIEW_FICHE_RECOUVREMENT'],
//     "isDefault": false,
//     "entity": ['MICROFINANCE'],
//     "docName": " Recueillir la décharge de la présentation de bien gage ou de la lettre d'information à la caution suivi de la mise en demeure du client",
//     "action":"",
//     "description": "Description de Recueillir la décharge de la présentation de bien gage ou de la lettre d'information à la caution suivi de la mise en demeure du client ...",
//     "has_doing": false,
//     "allowed_role": ["aFwisnrdo42c4n9MHCG2",'tmu3PEDVQsevYH2rhw4o'],
//     "par_min": 61,
//     "par_max": 75,
//     "entite": ['CFN CIV'],
// },
// {
//     "docSlug": "mise_a_jour_diligences_charge_recouvrement",
//     "tbToBeUsed": ['tb16504',"tb16501",'tb16500','tb16506'],
//     "categorie_client": ["Retail"],
//     "linkedTo": ['MEMORANDUM_CREDIT','REVIEW_MEMORANDUM','FICHE_RECOUVREMENT','REVIEW_FICHE_RECOUVREMENT'],
//     "isDefault": false,
//     "entity": ['MICROFINANCE'],
//     "docName": "Mise à jour diligences chargé recouvrement (Appel téléphonique et Visite)",
//     "action":"Mise à jour diligences chargé recouvrement (Appel téléphonique et Visite)",
//     "description": "Description de la Mise à jour diligences chargé recouvrement (Appel téléphonique et Visite) ...",
//     "has_doing": false,
//     "allowed_role": ["aFwisnrdo42c4n9MHCG2",'tmu3PEDVQsevYH2rhw4o'],
//     "par_min": 61,
//     "par_max": 75,
//     "entite": ['CFN CIV'],
// },
// {
//     "docSlug": "visite_de_le_caution",
//     "tbToBeUsed": ['tb16507'],
//     "categorie_client": ["Retail"],
//     "linkedTo": ['MEMORANDUM_CREDIT','REVIEW_MEMORANDUM','FICHE_RECOUVREMENT','REVIEW_FICHE_RECOUVREMENT'],
//     "isDefault": false,
//     "entity": ['MICROFINANCE'],
//     "docName": "Visite de la caution",
//     "action":"Visite de la caution",
//     "description": "Description de Visite de la caution...",
//     "has_doing": false,
//     "allowed_role": ["aFwisnrdo42c4n9MHCG2",'tmu3PEDVQsevYH2rhw4o'],
//     "par_min": 61,
//     "par_max": 75,
//     "entite": ['CFN CIV'],
// },
{
  "docSlug": "rapport_evaluation_caution",
  "tbToBeUsed": [],
  "categorie_client": ["Retail"],
  "linkedTo": ['MEMORANDUM_CREDIT', 'REVIEW_MEMORANDUM', 'FICHE_RECOUVREMENT', 'REVIEW_FICHE_RECOUVREMENT'],
  "isDefault": false,
  "entity": ['MICROFINANCE'],
  "docName": "Rapport d'évaluation de la caution",
  "action": "Rapport d'évaluation de la caution",
  "description": "Description du rapport d'évaluation de la caution...",
  "has_doing": false,
  "allowed_role": ["aFwisnrdo42c4n9MHCG2", 'tmu3PEDVQsevYH2rhw4o'],
  "par_min": 61,
  "par_max": 75,
  "entite": ['CFN CIV']
},
// {
//     "docSlug": "recueille_la_decharge_de_la_presentation_de_bien_gage_suivi_de_mise_en_demeure_caution",
//     "tbToBeUsed": ['tb16500', 'tb16501'],
//     "categorie_client": ["Retail"],
//     "linkedTo": ['MEMORANDUM_CREDIT','REVIEW_MEMORANDUM','FICHE_RECOUVREMENT','REVIEW_FICHE_RECOUVREMENT'],
//     "isDefault": false,
//     "entity": ['MICROFINANCE'],
//     "docName": " Recueillir la décharge de la présentation de bien gage ou de la lettre d'information à la caution suivi de la mise en demeure du caution",
//     "action":"",
//     "description": "Description de Recueillir la décharge de la présentation de bien gage ou de la lettre d'information à la caution suivi de la mise en demeure du caution ...",
//     "has_doing": false,
//     "allowed_role": ["aFwisnrdo42c4n9MHCG2",'tmu3PEDVQsevYH2rhw4o'],
//     "par_min": 61,
//     "par_max": 75,
//     "entite": ['CFN CIV'],
// },
// J76 - J90
// {
//     "docSlug": "notification_de_la_lettre_de_decheance_du_terme_et_invitation_a_arrete_contraditoire",
//     "tbToBeUsed": [],
//     "categorie_client": ["Retail"],
//     "linkedTo": ['MEMORANDUM_CREDIT','REVIEW_MEMORANDUM','FICHE_RECOUVREMENT','REVIEW_FICHE_RECOUVREMENT'],
//     "isDefault": false,
//     "entity": ['MICROFINANCE'],
//     "docName": "Notification de la lettre de déchéance du terme et invitation à l'arreté contraditoire",
//     "action":"Notification de la lettre de déchéance du terme et invitation à l'arreté contraditoire",
//     "description": "Description de Notification de la lettre de déchéance du terme et invitation à l'arreté contraditoire...",
//     "has_doing": false,
//     "allowed_role": ['tmu3PEDVQsevYH2rhw4o'],
//     "par_min": 76,
//     "par_max": 90,
//     "entite": ['CFN CIV'],
// },
// {
//     "docSlug": "notification_de_la_lettre_de_cloture_juridique_et_de_la_mise_en_demeure",
//     "tbToBeUsed": [],
//     "categorie_client": ["Retail"],
//     "linkedTo": ['MEMORANDUM_CREDIT','REVIEW_MEMORANDUM','FICHE_RECOUVREMENT','REVIEW_FICHE_RECOUVREMENT'],
//     "isDefault": false,
//     "entity": ['MICROFINANCE'],
//     "docName": "Notification de la lettre de cloture juridique et de la mise en demeure ",
//     "action":"Notification de la lettre de cloture juridique et de la mise en demeure ",
//     "description": "Description de Notification de la lettre de cloture juridique et de la mise en demeure ...",
//     "has_doing": false,
//     "allowed_role": ['tmu3PEDVQsevYH2rhw4o'],
//     "par_min": 76,
//     "par_max": 90,
//     "entite": ['CFN CIV'],
// },
// {
//     "docSlug": "signification_de_la_lettre_appel_a_la_garantie",
//     "tbToBeUsed": [],
//     "categorie_client": ["Retail"],
//     "linkedTo": ['MEMORANDUM_CREDIT','REVIEW_MEMORANDUM','FICHE_RECOUVREMENT','REVIEW_FICHE_RECOUVREMENT'],
//     "isDefault": false,
//     "entity": ['MICROFINANCE'],
//     "docName": "Signification de la lettre d'appel à la garantie (Véhicule) ",
//     "action":"Signification de la lettre d'appel à la garantie (Véhicule) ",
//     "description": "Description de Signification de la lettre d'appel à la garantie (Véhicule) ...",
//     "has_doing": false,
//     "allowed_role": ['tmu3PEDVQsevYH2rhw4o'],
//     "par_min": 76,
//     "par_max": 90,
//     "entite": ['CFN CIV'],
// },
{
  "docSlug": "rapport_visite_des_garanties",
  "tbToBeUsed": [],
  "categorie_client": ["Retail"],
  "linkedTo": ['MEMORANDUM_CREDIT', 'REVIEW_MEMORANDUM', 'FICHE_RECOUVREMENT', 'REVIEW_FICHE_RECOUVREMENT'],
  "isDefault": false,
  "entity": ['MICROFINANCE'],
  "docName": "Rapport de visite et verification des garanties (Materiel professionnel, fond de commerce…) ",
  "action": "Rapport de visite et verification des garanties (Materiel professionnel, fond de commerce…) ",
  "description": "Description de Rapport de visite et verification des garanties (Materiel professionnel, fond de commerce…) ...",
  "has_doing": false,
  "allowed_role": ['tmu3PEDVQsevYH2rhw4o'],
  "par_min": 76,
  "par_max": 90,
  "entite": ['CFN CIV']
}, {
  "docSlug": "fiches_de_transfert",
  "tbToBeUsed": [],
  "categorie_client": ["Retail"],
  "linkedTo": ['MEMORANDUM_CREDIT', 'REVIEW_MEMORANDUM', 'FICHE_RECOUVREMENT', 'REVIEW_FICHE_RECOUVREMENT'],
  "isDefault": false,
  "entity": ['MICROFINANCE'],
  "docName": "fiches de transfert au recouvrement juridique. ",
  "action": "Fiches de transfert au recouvrement juridique. ",
  "description": "Description de la fiches de transfert au recouvrement juridique. ",
  "has_doing": false,
  "allowed_role": ['tmu3PEDVQsevYH2rhw4o'],
  //responsable recouvrement
  "par_min": 76,
  "par_max": 90,
  "entite": ['CFN CIV']
},
// recouvrement juridique
// +J90
{
  "docSlug": "rapport_procedure_juridique_sommes_recouvre",
  "tbToBeUsed": [],
  "categorie_client": ["Retail"],
  "linkedTo": ['MEMORANDUM_CREDIT', 'REVIEW_MEMORANDUM', 'FICHE_RECOUVREMENT', 'REVIEW_FICHE_RECOUVREMENT'],
  "isDefault": false,
  "entity": ['MICROFINANCE'],
  "docName": "Rapport de suivi des procedures juridiques et des sommes recouvrées",
  "action": "Rapport de suivi des procedures juridiques et des sommes recouvrées",
  "description": "Description de la Rapport de suivi des procedures juridiques et des sommes recouvrées",
  "has_doing": false,
  "allowed_role": ["wmKCHG84ZjFGsmiyxLEz", "bFTbr3QWeNBRYEfxX7e5"],
  //agent juridique + responsable juridique | DgoRbReeD8MjT2hJH17s
  "par_min": 91,
  "par_max": 135,
  "entite": ['CFN CIV']
},
// {
//     "docSlug": "Depot_de_la_requete_au_tribunal_du_commerce" ,
//     "tbToBeUsed": [],
//     "categorie_client": ["Retail"],
//     "linkedTo": ['MEMORANDUM_CREDIT','REVIEW_MEMORANDUM','FICHE_RECOUVREMENT','REVIEW_FICHE_RECOUVREMENT'],
//     "isDefault": false,
//     "entity": ['MICROFINANCE'],
//     "docName": "Dépôt de la requete au tribunal du commerce",
//     "action": "Dépôt de la requete au tribunal du commerce",
//     "description": "Description de la Dépôt de la requete au tribunal du commerce",
//     "has_doing": false,
//     "allowed_role": ["wmKCHG84ZjFGsmiyxLEz","bFTbr3QWeNBRYEfxX7e5"], //agent juridique + responsable juridique
//     "par_min": 91,
//     "par_max": 135,
//     "entite": ['CFN CIV'],
// },
// {
//     "docSlug": "obtention_des_ordonnance_injonction_de_payer_condamnant_le_débiteur_ppcl_et_la_caution" ,
//     "tbToBeUsed": [],
//     "categorie_client": ["Retail"],
//     "linkedTo": ['MEMORANDUM_CREDIT','REVIEW_MEMORANDUM','FICHE_RECOUVREMENT','REVIEW_FICHE_RECOUVREMENT'],
//     "isDefault": false,
//     "entity": ['MICROFINANCE'],
//     "docName": "Obtention des ordonnance d'injonction de payer condamnant le débiteur ppcl et la caution",
//     "action": "Obtention des ordonnance d'injonction de payer condamnant le débiteur ppcl et la caution",
//     "description": "Description de la Obtention des ordonnance d'injonction de payer condamnant le débiteur ppcl et la caution",
//     "has_doing": false,
//     "allowed_role": ["wmKCHG84ZjFGsmiyxLEz","bFTbr3QWeNBRYEfxX7e5"], //agent juridique + responsable juridique
//     "par_min": 91,
//     "par_max": 135,
//     "entite": ['CFN CIV'],
// },
// {
//     "docSlug": "signification_de_OIP_au_client_et_a_la_caution" ,
//     "tbToBeUsed": [],
//     "categorie_client": ["Retail"],
//     "linkedTo": ['MEMORANDUM_CREDIT','REVIEW_MEMORANDUM','FICHE_RECOUVREMENT','REVIEW_FICHE_RECOUVREMENT'],
//     "isDefault": false,
//     "entity": ['MICROFINANCE'],
//     "docName": "Signification de l'OIP au client et à la caution",
//     "action": "Signification de l'OIP au client et à la caution",
//     "description": "Description de la Signification de l'OIP au client et à la caution",
//     "has_doing": false,
//     "allowed_role": ["wmKCHG84ZjFGsmiyxLEz","bFTbr3QWeNBRYEfxX7e5"], //agent juridique + responsable juridique
//     "par_min": 91,
//     "par_max": 135,
//     "entite": ['CFN CIV'],
// },
// {
//     "docSlug": "demande_et_obtention_des_CNO " ,
//     "tbToBeUsed": [],
//     "categorie_client": ["Retail"],
//     "linkedTo": ['MEMORANDUM_CREDIT','REVIEW_MEMORANDUM','FICHE_RECOUVREMENT','REVIEW_FICHE_RECOUVREMENT'],
//     "isDefault": false,
//     "entity": ['MICROFINANCE'],
//     "docName": "Demande et obtention des CNO ( Certificat de Non Opposition) et FE ( Formule Excecutoire)",
//     "action": "Demande et obtention des CNO ( Certificat de Non Opposition) et FE ( Formule Excecutoire)",
//     "description": "Description de la Demande et obtention des CNO ( Certificat de Non Opposition) et FE ( Formule Excecutoire)",
//     "has_doing": false,
//     "allowed_role": ["wmKCHG84ZjFGsmiyxLEz","bFTbr3QWeNBRYEfxX7e5"], //agent juridique + responsable juridique
//     "par_min": 91,
//     "par_max": 135,
//     "entite": ['CFN CIV'],
// },
// {
//     "docSlug": "transmission_des_CNO_et_FE_a_auxilliaire_de_justice_pour_excecution" ,
//     "tbToBeUsed": [],
//     "categorie_client": ["Retail"],
//     "linkedTo": ['MEMORANDUM_CREDIT','REVIEW_MEMORANDUM','FICHE_RECOUVREMENT','REVIEW_FICHE_RECOUVREMENT'],
//     "isDefault": false,
//     "entity": ['MICROFINANCE'],
//     "docName": "Transmission des CNO et FE à l'auxilliaire de justice pour excecution",
//     "action": "Transmission des CNO et FE à l'auxilliaire de justice pour excecution",
//     "description": "Description de la Transmission des CNO et FE à l'auxilliaire de justice pour excecution",
//     "has_doing": false,
//     "allowed_role": ["wmKCHG84ZjFGsmiyxLEz","bFTbr3QWeNBRYEfxX7e5"], //agent juridique + responsable juridique
//     "par_min": 91,
//     "par_max": 135,
//     "entite": ['CFN CIV'],
// },
// {
//     "docSlug": "signification_de_Commandement_de_payer_avant_saisie" ,
//     "tbToBeUsed": [],
//     "categorie_client": ["Retail"],
//     "linkedTo": ['MEMORANDUM_CREDIT','REVIEW_MEMORANDUM','FICHE_RECOUVREMENT','REVIEW_FICHE_RECOUVREMENT'],
//     "isDefault": false,
//     "entity": ['MICROFINANCE'],
//     "docName": "Signification de Commandement de payer avant saisie",
//     "action": "Signification de Commandement de payer avant saisie",
//     "description": "Description de la Signification de Commandement de payer avant saisie",
//     "has_doing": false,
//     "allowed_role": ["wmKCHG84ZjFGsmiyxLEz","bFTbr3QWeNBRYEfxX7e5"], //agent juridique + responsable juridique
//     "par_min": 91,
//     "par_max": 135,
//     "entite": ['CFN CIV'],
// },
{
  "docSlug": "PV_saisies_attribution_creance",
  "tbToBeUsed": [],
  "categorie_client": ["Retail"],
  "linkedTo": ['MEMORANDUM_CREDIT', 'REVIEW_MEMORANDUM', 'FICHE_RECOUVREMENT', 'REVIEW_FICHE_RECOUVREMENT'],
  "isDefault": false,
  "entity": ['MICROFINANCE'],
  "docName": "PV de saisie-attribution de créances entre les mains des tiers ",
  "action": "PV de saisie-attribution de créances entre les mains des tiers ",
  "description": "Description de  PV de saisie-attribution de créances entre les mains des tiers ",
  "has_doing": false,
  "allowed_role": ["wmKCHG84ZjFGsmiyxLEz", "bFTbr3QWeNBRYEfxX7e5"],
  //agent juridique + responsable juridique | DgoRbReeD8MjT2hJH17s
  "par_min": 91,
  "par_max": 135,
  "entite": ['CFN CIV']
}, {
  "docSlug": "PV_saisies_attribution_loyer",
  "tbToBeUsed": [],
  "categorie_client": ["Retail"],
  "linkedTo": ['MEMORANDUM_CREDIT', 'REVIEW_MEMORANDUM', 'FICHE_RECOUVREMENT', 'REVIEW_FICHE_RECOUVREMENT'],
  "isDefault": false,
  "entity": ['MICROFINANCE'],
  "docName": "PV de saisie attribution des loyers ",
  "action": "PV de saisie attribution des loyers ",
  "description": "Description de  PV de saisie attribution des loyers ",
  "has_doing": false,
  "allowed_role": ["wmKCHG84ZjFGsmiyxLEz", "bFTbr3QWeNBRYEfxX7e5"],
  //agent juridique + responsable juridique | DgoRbReeD8MjT2hJH17s
  "par_min": 91,
  "par_max": 135,
  "entite": ['CFN CIV']
}, {
  "docSlug": "PV_remise_volontaire",
  "tbToBeUsed": [],
  "categorie_client": ["Retail"],
  "linkedTo": ['MEMORANDUM_CREDIT', 'REVIEW_MEMORANDUM', 'FICHE_RECOUVREMENT', 'REVIEW_FICHE_RECOUVREMENT'],
  "isDefault": false,
  "entity": ['MICROFINANCE'],
  "docName": "PV de remise volontaire  ",
  "action": "PV de remise volontaire  ",
  "description": "Description de  PV de remise volontaire  ",
  "has_doing": false,
  "allowed_role": ["wmKCHG84ZjFGsmiyxLEz", "bFTbr3QWeNBRYEfxX7e5"],
  //agent juridique + responsable juridique | DgoRbReeD8MjT2hJH17s
  "par_min": 91,
  "par_max": 135,
  "entite": ['CFN CIV']
},
// {
//     "docSlug": "denonciation_du_PV_de_saisie" ,
//     "tbToBeUsed": [],
//     "categorie_client": ["Retail"],
//     "linkedTo": ['MEMORANDUM_CREDIT','REVIEW_MEMORANDUM','FICHE_RECOUVREMENT','REVIEW_FICHE_RECOUVREMENT'],
//     "isDefault": false,
//     "entity": ['MICROFINANCE'],
//     "docName": "Denonciation du PV de saisie (8 jours après la saisie)",
//     "action": "Denonciation du PV de saisie (8 jours après la saisie)",
//     "description": "Description de la Denonciation du PV de saisie (8 jours après la saisie)",
//     "has_doing": false,
//     "allowed_role": ["wmKCHG84ZjFGsmiyxLEz","bFTbr3QWeNBRYEfxX7e5"], //agent juridique + responsable juridique
//     "par_min": 91,
//     "par_max": 135,
//     "entite": ['CFN CIV'],
// },
// J136-180
// {
//     "docSlug": "certificat_de_non_contestation_de_saisie" ,
//     "tbToBeUsed": [],
//     "categorie_client": ["Retail"],
//     "linkedTo": ['MEMORANDUM_CREDIT','REVIEW_MEMORANDUM','FICHE_RECOUVREMENT','REVIEW_FICHE_RECOUVREMENT'],
//     "isDefault": false,
//     "entity": ['MICROFINANCE'],
//     "docName": "Certificat de non-contestation de saisie",
//     "action": "Certificat de non-contestation de saisie",
//     "description": "Description de la Certificat de non-contestation de saisie",
//     "has_doing": false,
//     "allowed_role": ["wmKCHG84ZjFGsmiyxLEz"], //agent juridique
//     "par_min": 136,
//     "par_max": 180,
//     "entite": ['CFN CIV'],
// },
// {
//     "docSlug": "paiement_par_le_tiers_saisi" ,
//     "tbToBeUsed": [],
//     "categorie_client": ["Retail"],
//     "linkedTo": ['MEMORANDUM_CREDIT','REVIEW_MEMORANDUM','FICHE_RECOUVREMENT','REVIEW_FICHE_RECOUVREMENT'],
//     "isDefault": false,
//     "entity": ['MICROFINANCE'],
//     "docName": "Paiement par le tiers saisi (banques, microfinances, locataires)",
//     "action": "Paiement par le tiers saisi (banques, microfinances, locataires)",
//     "description": "Description de la Paiement par le tiers saisi (banques, microfinances, locataires)",
//     "has_doing": false,
//     "allowed_role": ["wmKCHG84ZjFGsmiyxLEz"], //agent juridique
//     "par_min": 136,
//     "par_max": 180,
//     "entite": ['CFN CIV'],
// },
// {
//     "docSlug": "recollement_pour_les_saisies_des_biens_meubles" ,
//     "tbToBeUsed": [],
//     "categorie_client": ["Retail"],
//     "linkedTo": ['MEMORANDUM_CREDIT','REVIEW_MEMORANDUM','FICHE_RECOUVREMENT','REVIEW_FICHE_RECOUVREMENT'],
//     "isDefault": false,
//     "entity": ['MICROFINANCE'],
//     "docName": "Recollement pour les saisies des biens meubles.",
//     "action": "Recollement pour les saisies des biens meubles.",
//     "description": "Description de la Recollement pour les saisies des biens meubles.",
//     "has_doing": false,
//     "allowed_role": ["wmKCHG84ZjFGsmiyxLEz"], //agent juridique
//     "par_min": 136,
//     "par_max": 180,
//     "entite": ['CFN CIV'],
// },
{
  "docSlug": "PV_recollement",
  "tbToBeUsed": [],
  "categorie_client": ["Retail"],
  "linkedTo": ['MEMORANDUM_CREDIT', 'REVIEW_MEMORANDUM', 'FICHE_RECOUVREMENT', 'REVIEW_FICHE_RECOUVREMENT'],
  "isDefault": false,
  "entity": ['MICROFINANCE'],
  "docName": "PV de recollement  ",
  "action": "PV de recollement  ",
  "description": "Description de  PV de recollement  ",
  "has_doing": false,
  "allowed_role": ["wmKCHG84ZjFGsmiyxLEz"],
  //agent juridique
  "par_min": 91,
  "par_max": 135,
  "entite": ['CFN CIV']
}, {
  "docSlug": "PV_remise_volontaire",
  "tbToBeUsed": [],
  "categorie_client": ["Retail"],
  "linkedTo": ['MEMORANDUM_CREDIT', 'REVIEW_MEMORANDUM', 'FICHE_RECOUVREMENT', 'REVIEW_FICHE_RECOUVREMENT'],
  "isDefault": false,
  "entity": ['MICROFINANCE'],
  "docName": "PV de remise volontaire",
  "action": "PV de remise volontaire",
  "description": "Description de PV de remise volontaire",
  "has_doing": false,
  "allowed_role": ["wmKCHG84ZjFGsmiyxLEz"],
  //agent juridique
  "par_min": 91,
  "par_max": 135,
  "entite": ['CFN CIV']
},
// J181 - J240
{
  "docSlug": "PV_enlevement",
  "tbToBeUsed": [],
  "categorie_client": ["Retail"],
  "linkedTo": ['MEMORANDUM_CREDIT', 'REVIEW_MEMORANDUM', 'FICHE_RECOUVREMENT', 'REVIEW_FICHE_RECOUVREMENT'],
  "isDefault": false,
  "entity": ['MICROFINANCE'],
  "docName": "PV de l'enlèvement ",
  "action": "PV de l'enlèvement ",
  "description": "Description de PV de l'enlèvement ",
  "has_doing": false,
  "allowed_role": ["wmKCHG84ZjFGsmiyxLEz"],
  //agent juridique
  "par_min": 91,
  "par_max": 135,
  "entite": ['CFN CIV']
},
// {
//     "docSlug": "remise_volontaire_par_le_client_ou_la_caution" ,
//     "tbToBeUsed": [],
//     "categorie_client": ["Retail"],
//     "linkedTo": ['MEMORANDUM_CREDIT','REVIEW_MEMORANDUM','FICHE_RECOUVREMENT','REVIEW_FICHE_RECOUVREMENT'],
//     "isDefault": false,
//     "entity": ['MICROFINANCE'],
//     "docName": "Remise volontaire par le client ou la caution",
//     "action": "Remise volontaire par le client ou la caution",
//     "description": "Description de la Remise volontaire par le client ou la caution",
//     "has_doing": false,
//     "allowed_role": ["wmKCHG84ZjFGsmiyxLEz"], //agent juridique
//     "par_min": 181,
//     "par_max": 240,
//     "entite": ['CFN CIV'],
// },
// {
//     "docSlug": "enlevement_des_biens_saisis." ,
//     "tbToBeUsed": [],
//     "categorie_client": ["Retail"],
//     "linkedTo": ['MEMORANDUM_CREDIT','REVIEW_MEMORANDUM','FICHE_RECOUVREMENT','REVIEW_FICHE_RECOUVREMENT'],
//     "isDefault": false,
//     "entity": ['MICROFINANCE'],
//     "docName": "Enlèvement des biens saisis.",
//     "action": "Enlèvement des biens saisis.",
//     "description": "Description de la Enlèvement des biens saisis.",
//     "has_doing": false,
//     "allowed_role": ["wmKCHG84ZjFGsmiyxLEz"], //agent juridique
//     "par_min": 181,
//     "par_max": 240,
//     "entite": ['CFN CIV'],
// },
// J241 - J360
{
  "docSlug": "PV_vente",
  "tbToBeUsed": [],
  "categorie_client": ["Retail"],
  "linkedTo": ['MEMORANDUM_CREDIT', 'REVIEW_MEMORANDUM', 'FICHE_RECOUVREMENT', 'REVIEW_FICHE_RECOUVREMENT'],
  "isDefault": false,
  "entity": ['MICROFINANCE'],
  "docName": "PV de vente ",
  "action": "PV de vente ",
  "description": "Description de PV de vente ",
  "has_doing": false,
  "allowed_role": ["wmKCHG84ZjFGsmiyxLEz"],
  //agent juridique
  "par_min": 91,
  "par_max": 135,
  "entite": ['CFN CIV']
},
// {
//     "docSlug": "affichages_et_publicites" ,
//     "tbToBeUsed": [],
//     "categorie_client": ["Retail"],
//     "linkedTo": ['MEMORANDUM_CREDIT','REVIEW_MEMORANDUM','FICHE_RECOUVREMENT','REVIEW_FICHE_RECOUVREMENT'],
//     "isDefault": false,
//     "entity": ['MICROFINANCE'],
//     "docName": "Affichages et publicités",
//     "action": "Affichages et publicités",
//     "description": "Description de l'Affichages et publicités",
//     "has_doing": false,
//     "allowed_role": ["wmKCHG84ZjFGsmiyxLEz"], //agent juridique
//     "par_min": 241,
//     "par_max": 300,
//     "entite": ['CFN CIV'],
// },
// {
//     "docSlug": "vente_aux_encheres" ,
//     "tbToBeUsed": [],
//     "categorie_client": ["Retail"],
//     "linkedTo": ['MEMORANDUM_CREDIT','REVIEW_MEMORANDUM','FICHE_RECOUVREMENT','REVIEW_FICHE_RECOUVREMENT'],
//     "isDefault": false,
//     "entity": ['MICROFINANCE'],
//     "docName": "Vente aux enchères",
//     "action": "Vente aux enchères",
//     "description": "Description de la Vente aux enchères",
//     "has_doing": false,
//     "allowed_role": ["wmKCHG84ZjFGsmiyxLEz"], //agent juridique
//     "par_min": 241,
//     "par_max": 300,
//     "entite": ['CFN CIV'],
// },
// +360
{
  "docSlug": "PV_comite_semestriel",
  "tbToBeUsed": [],
  "categorie_client": ["Retail"],
  "linkedTo": ['MEMORANDUM_CREDIT', 'REVIEW_MEMORANDUM', 'FICHE_RECOUVREMENT', 'REVIEW_FICHE_RECOUVREMENT'],
  "isDefault": false,
  "entity": ['MICROFINANCE'],
  "docName": "PV du comité semestriel ",
  "action": "PV du comité semestriel ",
  "description": "Description de PV du comité semestriel ",
  "has_doing": false,
  "allowed_role": ["wmKCHG84ZjFGsmiyxLEz", "DgoRbReeD8MjT2hJH17s"],
  //agent juridique
  "par_min": 91,
  "par_max": 135,
  "entite": ['CFN CIV']
}, {
  "docSlug": "tenu_comite_de_radiation",
  "tbToBeUsed": [],
  "categorie_client": ["Retail"],
  "linkedTo": ['MEMORANDUM_CREDIT', 'REVIEW_MEMORANDUM', 'FICHE_RECOUVREMENT', 'REVIEW_FICHE_RECOUVREMENT'],
  "isDefault": false,
  "entity": ['MICROFINANCE'],
  "docName": "Tenu d'un comité de radiation",
  "action": "Tenu d'un comité de radiation",
  "description": "Description de la Tenu d'un comité de radiation",
  "has_doing": false,
  "allowed_role": ["DgoRbReeD8MjT2hJH17s"],
  "par_min": 360,
  "par_max": 999,
  "entite": ['CFN CIV']
}, {
  "docSlug": "PV_de_carence",
  "tbToBeUsed": [],
  "categorie_client": ["Retail"],
  "linkedTo": ['MEMORANDUM_CREDIT', 'REVIEW_MEMORANDUM', 'FICHE_RECOUVREMENT', 'REVIEW_FICHE_RECOUVREMENT'],
  "isDefault": false,
  "entity": ['MICROFINANCE'],
  "docName": "PV de carence à l'issus du comité ",
  "action": "PV de carence à l'issus du comité ",
  "description": "Description de la PV de carence à l'issus du comité ",
  "has_doing": false,
  "allowed_role": ["DgoRbReeD8MjT2hJH17s"],
  "par_min": 360,
  "par_max": 999,
  "entite": ['CFN CIV']
}, {
  "docSlug": " obtenir_accord_de_la_hierarchie_pour_radiation_des_creances.",
  "tbToBeUsed": [],
  "categorie_client": ["Retail"],
  "linkedTo": ['MEMORANDUM_CREDIT', 'REVIEW_MEMORANDUM', 'FICHE_RECOUVREMENT', 'REVIEW_FICHE_RECOUVREMENT'],
  "isDefault": false,
  "entity": ['MICROFINANCE'],
  "docName": " Obtenir l'accord de la hiérarchie pour la radiation des créances.",
  "action": " Obtenir l'accord de la hiérarchie pour la radiation des créances.",
  "description": "Description de la  Obtenir l'accord de la hiérarchie pour la radiation des créances.",
  "has_doing": false,
  "allowed_role": ["DgoRbReeD8MjT2hJH17s"],
  "par_min": 360,
  "par_max": 999,
  "entite": ['CFN CIV']
}

// PV du comité semestriel ;
// Transmission des clients radiés au cabinet de recouvrement
];
var RECOVERY_ACCESS_ROLE = ['r472oAxtaFJSlsh5', 'yYnev325ob1vDkgq', '1gwhyPuYhPuAfuEz', 'QBRHlcRW5H52grDn', 'aFwisnrdo42c4n9MHCG2', 'tmu3PEDVQsevYH2rhw4o', 'K8C1dfx52rvA5ugR1mqt', 'bFTbr3QWeNBRYEfxX7e5', 'wmKCHG84ZjFGsmiyxLEz', 'DgoRbReeD8MjT2hJH17s'];
var RECOVERY_WHAT_TOBE_PRODUCT = ['MEMORANDUM_CREDIT', 'REVIEW_MEMORANDUM', 'FICHE_RECOUVREMENT', 'REVIEW_FICHE_RECOUVREMENT'];
var RECOVERY_COMERCIAL_ROLE = ['r472oAxtaFJSlsh5', 'yYnev325ob1vDkgq', '1gwhyPuYhPuAfuEz', 'KYnev625Pb1vDkrt1', 'tIr9QhALZPULkbino7T', 'QBRHlcRW5H52grDn'];
var MAP_ROLE_PAR_RANGE = [{
  par_min: 1,
  par_max: 45,
  roles: ['r472oAxtaFJSlsh5', 'yYnev325ob1vDkgq', '1gwhyPuYhPuAfuEz', 'KYnev625Pb1vDkrt1', 'tIr9QhALZPULkbino7T', 'QBRHlcRW5H52grDn'],
  team: 'EQUIPE_0'
}, {
  par_min: 46,
  par_max: 90,
  roles: ['aFwisnrdo42c4n9MHCG2', 'tmu3PEDVQsevYH2rhw4o'],
  team: 'EQUIPE_1'
}, {
  par_min: 91,
  par_max: 180,
  roles: ['aFwisnrdo42c4n9MHCG2', 'aFwisnrdo42c4n9MHCG2'],
  team: 'EQUIPE_2'
}, {
  par_min: 181,
  par_max: 9999,
  roles: ['aFwisnrdo42c4n9MHCG2', 'aFwisnrdo42c4n9MHCG2'],
  team: 'EQUIPE_2'
}];
var PREREQUIS_LIST = [{
  "label": "Transmission de la 1ère lettre de relance au client par le SI",
  "par_min": 1,
  "par_max": 7
}, {
  "label": "En l’absence d’accusé de réception, retransmission manuelle de la 1ère lettre de relance au client.",
  "par_min": 1,
  "par_max": 7
}, {
  "label": "Transmission de la 2nd lettre de relance au client par le SI.",
  "par_min": 16,
  "par_max": 30
}, {
  "label": "Transmission En cas de non visite, retransmission manuelle de la 2nd lettre de relance au client.",
  "par_min": 16,
  "par_max": 30
}, {
  "label": "Transmission par mail de la lettre de d'informations à la ou les caution(s) par le SI.",
  "par_min": 31,
  "par_max": 45
}, {
  "label": "Transmission de la 3ème lettre de relance au client par le SI.",
  "par_min": 46,
  "par_max": 60
}, {
  "label": "Transmission de la Lettre de Présentation de Bien Gagé ou Lettre d’Information à la Caution par le SI .",
  "par_min": 61,
  "par_max": 90
}, {
  "label": "En l’absence d’accusé de réception, retransmission manuelle de la 3ème lettre de relance au client.",
  "par_min": 46,
  "par_max": 60
}, {
  "label": "Transmission de la Mise en demeure au client par le SI",
  "par_min": 91,
  "par_max": 105
}, {
  "label": "En l’absence d’accusé de réception, retransmission manuelle de la Mise en demeure au client.",
  "par_min": 91,
  "par_max": 105
}, {
  "label": "Revu des sûretés et garanties",
  "par_min": 91,
  "par_max": 105
}, {
  "label": "Transmission du dossier de prêt à l’équipe 3 par le SI ",
  "par_min": 136,
  "par_max": 150
}];
var Recouvrements = /*#__PURE__*/function () {
  function Recouvrements() {
    _classCallCheck(this, Recouvrements);
  }
  return _createClass(Recouvrements, [{
    key: "inParRange",
    value: function inParRange(par, role_id, user_team) {
      // if (process.env.MIX_APP_ENV === 'local') {
      //     return true
      // }

      var found = MAP_ROLE_PAR_RANGE.find(function (item) {
        return par >= item.par_min && par <= item.par_max && item.roles.includes(role_id) && item.team == user_team;
      });
      return Boolean(found);
    }
  }, {
    key: "cancelEcheanceReminders",
    value: function cancelEcheanceReminders(data) {
      var url = API_URL + 'cancel-echeance-reminders/';
      return new Promise(function (resolve, reject) {
        return _custom_axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(url, data).then(function (res) {
          resolve(res === null || res === void 0 ? void 0 : res.data);
        })["catch"](function (err) {
          return reject(err);
        });
      });
    }
  }, {
    key: "cancelScheduledReminder",
    value: function cancelScheduledReminder(data) {
      var url = API_URL + 'cancel-scheduled-reminder/';
      return new Promise(function (resolve, reject) {
        return _custom_axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(url, data).then(function (res) {
          resolve(res === null || res === void 0 ? void 0 : res.data);
        })["catch"](function (err) {
          return reject(err);
        });
      });
    }
  }, {
    key: "deleteTAMOR",
    value: function deleteTAMOR(data) {
      var url = API_URL + 'delete-tamor/';
      return new Promise(function (resolve, reject) {
        return _custom_axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(url, data).then(function (res) {
          resolve(res === null || res === void 0 ? void 0 : res.data);
        })["catch"](function (err) {
          return reject(err);
        });
      });
    }

    //
  }, {
    key: "getRecouvrements",
    value: function getRecouvrements() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        user_id = _ref.user_id;
      var url = API_URL + 'recouvrements/';
      return new Promise(function (resolve, reject) {
        return _custom_axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(url, {
          user_id: user_id
        }).then(function (res) {
          resolve(res === null || res === void 0 ? void 0 : res.data);
        })["catch"](function (err) {
          return reject(err);
        });
      });
    }
  }, {
    key: "getSettings",
    value: function getSettings() {
      var url = FRONT_API_URL + 'recouvrement-settings/';
      return new Promise(function (resolve, reject) {
        return _custom_axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(url).then(function (res) {
          resolve(res === null || res === void 0 ? void 0 : res.data);
        })["catch"](function (err) {
          return reject(err);
        });
      });
    }
  }, {
    key: "getResRecouvrementData",
    value: function getResRecouvrementData() {
      var url = FRONT_API_URL + 'recouvrement-resp/';
      return new Promise(function (resolve, reject) {
        return _custom_axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(url).then(function (res) {
          resolve(res === null || res === void 0 ? void 0 : res.data);
        })["catch"](function (err) {
          return reject(err);
        });
      });
    }
  }, {
    key: "notifyClient",
    value: function notifyClient(data) {
      var url = "http://127.0.0.1:8000/" + 'loaniq/api/v2/notify-client/';
      return new Promise(function (resolve, reject) {
        return _custom_axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(url, data).then(function (res) {
          resolve(res === null || res === void 0 ? void 0 : res.data);
        })["catch"](function (err) {
          return reject(err);
        });
      });
    }
  }, {
    key: "readTamorFile",
    value: function readTamorFile() {
      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        cred_pub_key = _ref2.cred_pub_key;
      // TODO auth user to track
      var url = API_URL + 'read-tamor/';
      return new Promise(function (resolve, reject) {
        return _custom_axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(url, {
          cred_pub_key: cred_pub_key
        }).then(function (res) {
          resolve(res === null || res === void 0 ? void 0 : res.data);
        })["catch"](function (err) {
          return reject(err);
        });
      });
    }
  }, {
    key: "setupTAMOR",
    value: function setupTAMOR(data) {
      var url = API_URL + 'setup-tamor/';
      return new Promise(function (resolve, reject) {
        return _custom_axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(url, data).then(function (res) {
          resolve(res === null || res === void 0 ? void 0 : res.data);
        })["catch"](function (err) {
          return reject(err);
        });
      });
    }
  }, {
    key: "saveReceiversEmail",
    value: function saveReceiversEmail(data) {
      var url = API_URL + 'save-receivers-emails/';
      return new Promise(function (resolve, reject) {
        return _custom_axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(url, data).then(function (res) {
          resolve(res === null || res === void 0 ? void 0 : res.data);
        })["catch"](function (err) {
          return reject(err);
        });
      });
    }
  }, {
    key: "fetchActionsList",
    value: function fetchActionsList() {
      return ACTIONS_LIST;
    }
  }, {
    key: "fetchPrerequis",
    value: function fetchPrerequis() {
      return PREREQUIS_LIST;
    }
  }, {
    key: "fetchObjectMethod",
    value: function fetchObjectMethod() {
      return OBJECT_METHODS;
    }
  }, {
    key: "getRecoveryDossier",
    value: function getRecoveryDossier(data) {
      var url = API_URL + 'get-recovery-dossier/';
      return new Promise(function (resolve, reject) {
        return _custom_axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(url, data).then(function (res) {
          resolve(res === null || res === void 0 ? void 0 : res.data);
        })["catch"](function (err) {
          return reject(err);
        });
      });
    }
  }, {
    key: "getRecoveryAccessRole",
    value: function getRecoveryAccessRole() {
      return RECOVERY_ACCESS_ROLE;
    }
  }, {
    key: "getRecoveryAccessWhaTobeProduct",
    value: function getRecoveryAccessWhaTobeProduct() {
      return RECOVERY_WHAT_TOBE_PRODUCT;
    }
  }, {
    key: "getUserTodo",
    value: function getUserTodo(role_id, responsible_id, credit) {
      var _this = this;
      var list = ACTIONS_LIST.filter(function (el) {
        return el.allowed_role.includes(role_id);
      });
      console.log("list: " + list);
      var todo = {};
      list.forEach(function (el) {
        todo[el.docSlug] = _this.checkAction(el.docSlug, credit, responsible_id);
      });
      console.log("responsible_id: " + responsible_id);
      return todo;
    }
  }, {
    key: "checkAction",
    value: function checkAction(key, credit, responsible_id) {
      if (key == 'visite_du_client_par_le_caf') {
        if (credit.cred_pub_tb_16501 != undefined) {
          var _credit$cred_pub_tb_;
          return (_credit$cred_pub_tb_ = credit.cred_pub_tb_16501) !== null && _credit$cred_pub_tb_ !== void 0 && (_credit$cred_pub_tb_ = _credit$cred_pub_tb_.rapport_de_visite) !== null && _credit$cred_pub_tb_ !== void 0 && _credit$cred_pub_tb_.find(function (el) {
            return el.user_id == responsible_id;
          }) ? true : false;
        }
      }
      if (['appel_telephonique', 'rapport_dappel_telephonique'].includes(key)) {
        if ((credit === null || credit === void 0 ? void 0 : credit.cred_pub_tb_16500) != undefined) {
          var _credit$cred_pub_tb_2;
          // this.dossier_credit?.cred_pub_tb_16500?.rapport_appel_telephonique.forEach(element => {
          //     if()
          // });
          return credit !== null && credit !== void 0 && (_credit$cred_pub_tb_2 = credit.cred_pub_tb_16500) !== null && _credit$cred_pub_tb_2 !== void 0 && (_credit$cred_pub_tb_2 = _credit$cred_pub_tb_2.rapport_appel_telephonique) !== null && _credit$cred_pub_tb_2 !== void 0 && _credit$cred_pub_tb_2.find(function (el) {
            return el.user_id == responsible_id;
          }) ? true : false;
        }
      }
      if (['comite_de_recouvrement'].includes(key)) {
        if ((credit === null || credit === void 0 ? void 0 : credit.cred_pub_tb_16504) != undefined) {
          var _credit$cred_pub_tb_3;
          return credit !== null && credit !== void 0 && (_credit$cred_pub_tb_3 = credit.cred_pub_tb_16504) !== null && _credit$cred_pub_tb_3 !== void 0 && (_credit$cred_pub_tb_3 = _credit$cred_pub_tb_3.pv_comite_recouvrement) !== null && _credit$cred_pub_tb_3 !== void 0 && _credit$cred_pub_tb_3.find(function (el) {
            return el.user_id == responsible_id;
          }) ? true : false;
        }
      }
      if (key == 'appel_telephonique_des_cautions') {
        if (credit.cred_pub_tb_16506 != undefined) {
          var _credit$cred_pub_tb_4;
          return (_credit$cred_pub_tb_4 = credit.cred_pub_tb_16506) !== null && _credit$cred_pub_tb_4 !== void 0 && (_credit$cred_pub_tb_4 = _credit$cred_pub_tb_4.rapport_appel_telephonique) !== null && _credit$cred_pub_tb_4 !== void 0 && _credit$cred_pub_tb_4.find(function (el) {
            return el.user_id == responsible_id;
          }) ? true : false;
        }
      }
      if (key == 'visite_de_le_caution') {
        if (credit.cred_pub_tb_16507 != undefined) {
          var _credit$cred_pub_tb_5;
          return (_credit$cred_pub_tb_5 = credit.cred_pub_tb_16507) !== null && _credit$cred_pub_tb_5 !== void 0 && (_credit$cred_pub_tb_5 = _credit$cred_pub_tb_5.rapport_de_visite) !== null && _credit$cred_pub_tb_5 !== void 0 && _credit$cred_pub_tb_5.find(function (el) {
            return el.user_id == responsible_id;
          }) ? true : false;
        }
      }
      return false;
    }
  }, {
    key: "get_decharges_data_mango",
    value: function get_decharges_data_mango(data) {
      var url = API_URL + 'decharges-data-mango/';
      return new Promise(function (resolve, reject) {
        return _custom_axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(url, data).then(function (res) {
          resolve(res === null || res === void 0 ? void 0 : res.data);
        })["catch"](function (err) {
          return reject(err);
        });
      });
    }
  }]);
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Recouvrements());
var promiseTemplate = function promiseTemplate(_ref3) {
  var id = _ref3.id,
    userId = _ref3.userId,
    amount = _ref3.amount,
    term = _ref3.term,
    tbName = _ref3.tbName,
    _ref3$comment = _ref3.comment,
    comment = _ref3$comment === void 0 ? "" : _ref3$comment,
    _ref3$fulfiled = _ref3.fulfiled,
    fulfiled = _ref3$fulfiled === void 0 ? false : _ref3$fulfiled;
  return {
    montant: amount,
    echeance: term,
    commentaire: comment,
    promesseTenu: fulfiled,
    created_at: Date.now(),
    comingfrom: tbName,
    user_id: userId,
    id: id
  };
};
var RECOVERY_TB_MAP = {
  tb16500: "rapport_appel_telephonique",
  tb16501: "rapport_de_visite",
  tb16506: "rapport_appel_telephonique",
  tb16507: "rapport_de_visite"
};
var RECOVERY_TB_MAP_LABEL = {
  tb16500: "Rapport d'appel téléphonique",
  tb16501: "Rapport de visite",
  tb16506: "Rapport d'appel téléphonique",
  tb16507: "Rapport de visite"
};
var TB_WITH_PROMISES = ["tb16500", "tb16501", "tb16506", "tb16507"];
function getTbKey(tbName) {
  return "cred_pub_tb_".concat(tbName.substring(2));
}
function forEachPromise(doc) {
  var mapFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var tbNames = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var promises = [];
  if (!doc) return promises;
  if (!Array.isArray(tbNames)) {
    throw new Error("tbName must be an array");
  }
  if (!tbNames.length) {
    tbNames = TB_WITH_PROMISES;
  } else {
    var unknownTb = tbNames.filter(function (name) {
      return !TB_WITH_PROMISES.includes(name);
    });
    if (unknownTb.length) {
      throw new Error("Unknown promise table(s): ".concat(unknownTb.join(", ")));
    }
  }
  var _iterator = _createForOfIteratorHelper(tbNames),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _doc$tb;
      var tbName = _step.value;
      var reportName = RECOVERY_TB_MAP[tbName];
      var tb = getTbKey(tbName);
      var report = (doc === null || doc === void 0 || (_doc$tb = doc[tb]) === null || _doc$tb === void 0 ? void 0 : _doc$tb[reportName]) || [];
      for (var reportIdx = 0; reportIdx < report.length; reportIdx++) {
        var item = report[reportIdx];
        var itemPromises = (item === null || item === void 0 ? void 0 : item.promesses) || [];
        for (var promiseIdx = 0; promiseIdx < itemPromises.length; promiseIdx++) {
          var promise = itemPromises[promiseIdx];
          if (promise !== null && promise !== void 0 && promise.montant && promise !== null && promise !== void 0 && promise.echeance) {
            if (typeof mapFn === "function") {
              promises.push(mapFn(promise, promiseIdx, tbName, reportName, reportIdx, item));
            } else {
              promises.push(promise);
            }
          }
        }
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return promises;
}
function forEachPromiseAsync(_x) {
  return _forEachPromiseAsync.apply(this, arguments);
}
function _forEachPromiseAsync() {
  _forEachPromiseAsync = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(doc) {
    var mapFn,
      tbNames,
      _args = arguments;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          mapFn = _args.length > 1 && _args[1] !== undefined ? _args[1] : null;
          tbNames = _args.length > 2 && _args[2] !== undefined ? _args[2] : [];
          return _context.abrupt("return", Promise.all(forEachPromise(doc, mapFn, tbNames)));
        case 3:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _forEachPromiseAsync.apply(this, arguments);
}
function truncateStr(str) {
  var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 50;
  return str.length > max ? str.substring(0, max - 3) + "..." : str;
}

/***/ }),

/***/ "./resources/js/services/recouvremnt_letter_maping.js":
/*!************************************************************!*\
  !*** ./resources/js/services/recouvremnt_letter_maping.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AGENCY_TAMPONS_ENV: () => (/* binding */ AGENCY_TAMPONS_ENV),
/* harmony export */   ALLOWED_LETTERS_FOR_AGENCY_STAMP: () => (/* binding */ ALLOWED_LETTERS_FOR_AGENCY_STAMP),
/* harmony export */   LETTERS_MAPING: () => (/* binding */ LETTERS_MAPING)
/* harmony export */ });
/* provided dependency */ var process = __webpack_require__(/*! process/browser.js */ "./node_modules/process/browser.js");
var LETTERS_MAPING = [{
  title: "SMS DE RAPPEL D’ECHEANCE",
  slug: "SMS_DE_RAPPEL_ECHEANCE"
}, {
  title: "La 1ère lettre de relance",
  slug: "PREMIERE_LETTRE_DE_RELANCE"
}, {
  title: "La seconde lettre de relance",
  slug: "DEUXIEME_LETTRE_DE_RELANCE"
}, {
  title: "La lettre d'information à la caution agence",
  slug: "LETTRE_INFORMATION_A_LA_CAUTION_AGENCE"
}, {
  title: "3ème lettre de relance CDR",
  slug: "TROISIEME_LETTRE_DE_RELANCE_CDR"
}, {
  title: "La lettre de présentation de bien gage",
  slug: "LETTRE_DE_PRESENTATION_DE_BIEN_GAGE"
}, {
  title: "La lettre d'information à la caution CDR",
  slug: "LETTRE_INFORMATION_A_LA_CAUTION_CDR"
}

// {
//     title: "LETTRE D’INFORMATION A LA CAUTION (Par voie de Commissaire de Justice)",
//     slug: "LETTRE_INFORMATION_A_LA_CAUTION_CDR",
// },
// {
//     title: "MISE EN DEMEURE",
//     slug: "MISE_EN_DEMEURE",
// },
// {
//     title: "MESURES CONSERVATOIRES (Saisie de créances, saisie de biens meubles corporels, …)",
//     slug: "MESURES_CONSERVATOIRES",
// },
// {
//     title: "DECISION DE JUSTICE (Requête OIP ou Assignation)",
//     slug: "DECISION_DE_JUSTICE",
// },
// {
//     title: "MESURES D’EXECUTION (Saisie attribution de créances, saisie vente, …)",
//     slug: "MESURES_EXECUTION",
// },
];
var ALLOWED_LETTERS_FOR_AGENCY_STAMP = ["PREMIERE_LETTRE_DE_RELANCE", "DEUXIEME_LETTRE_DE_RELANCE", "LETTRE_INFORMATION_A_LA_CAUTION_AGENCE"];
var AGENCY_TAMPONS_ENV = {
  MIX_VUE_APP_TAMPON_AGENCE_CFNTG: process.env.MIX_VUE_APP_TAMPON_AGENCE_CFNTG,
  MIX_VUE_APP_TAMPON_AGENCE_CFNCIV: process.env.MIX_VUE_APP_TAMPON_AGENCE_CFNCIV,
  MIX_VUE_APP_TAMPON_AGENCE_CFNML: process.env.MIX_VUE_APP_TAMPON_AGENCE_CFNML,
  MIX_VUE_APP_TAMPON_AGENCE_CFNGB: process.env.MIX_VUE_APP_TAMPON_AGENCE_CFNGB
};

/***/ })

}]);