"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_shared_widgets_EmailClientCaution_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/widgets/EmailClientCaution.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/widgets/EmailClientCaution.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vueform/multiselect/dist/multiselect.vue2 */ "./node_modules/@vueform/multiselect/dist/multiselect.vue2.js");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth.service */ "./resources/js/services/auth.service.js");
/* harmony import */ var _services_credit_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/credit.service */ "./resources/js/services/credit.service.js");
/* harmony import */ var _services_recouvrement_service_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/recouvrement.service.js */ "./resources/js/services/recouvrement.service.js");
/* harmony import */ var _services_connects_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/connects.service */ "./resources/js/services/connects.service.js");
/* harmony import */ var _services_proxy_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/proxy.service */ "./resources/js/services/proxy.service.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), c(GeneratorFunctionPrototype, u, GeneratorFunction.displayName = "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
// import ebapis from "../../../services/ebapis.service";
// import Credit from '../../../services/credit.service'
// import Multiselect from "@vueform/multiselect/dist/multiselect.vue2";







// import helper from "../../../../helpers/helper";



// import ProxyService from "../"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "EmailClientCaution",
  props: {
    dossier_credit: {
      type: [Object],
      required: true,
      "default": function _default() {
        return {};
      }
    },
    is_partof: {
      String: String,
      required: true,
      "default": function _default() {
        return "";
      }
    },
    authUser: {
      type: [Object],
      required: true,
      "default": function _default() {
        return {};
      }
    }
  },
  components: {
    MailIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.MailIcon,
    MessageCircleIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.MessageCircleIcon,
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.PlusIcon,
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.TrashIcon,
    MoreVerticalIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.MoreVerticalIcon,
    ChevronUpIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.ChevronUpIcon,
    ChevronDownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.ChevronDownIcon,
    Multiselect: _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  computed: {
    // validateEmail() {
    //     return /^[^@]+@\w+(\.\w+)+\w$/.test(this.client.sendByMediaEmail);
    // },
    // validateMobileNumber() {
    //     return /^\d{10}$/.test(this.client.sendByMedia);
    // },
  },
  created: function created() {
    var _this = this;
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _services_credit_service__WEBPACK_IMPORTED_MODULE_3__["default"].loadpaysindicatif().then(function (res) {
              _this.countries = res.data;
            })["catch"](function (err) {
              console.log(err);
            });
          case 1:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  mounted: function mounted() {},
  data: function data() {
    return {
      //
      lockedData: false,
      ebapisHost: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_1__["default"].host,
      isLoading: false,
      btnVisibility: false,
      formDataToBeWatched: {
        email_client: "",
        cautionnement_solidaires: [],
        total_cautionnement_solidaires_valeur_marchande: "",
        total_cautionnement_solidaires_valeur_considere: ""
      },
      countries: [],
      email_client: "",
      selected_messages_show: false,
      selected_messages_hide: false,
      cautionnement_solidaires: [_defineProperty(_defineProperty(_defineProperty({
        nom_prenoms: "",
        email: "",
        numero_piece_identite: "",
        profession: "",
        indicatif_caution_solidaire: "",
        numero_tel_caution_solidaire: "",
        localisation_caution_solidaire: "",
        revenu_mensuel: 0,
        valeur_patrimoine: 0,
        valeur_cautionnement: 0
      }, "numero_piece_identite", ""), "files", 0), "template", "")]
    };
  },
  methods: {
    saveRecoveryEmail: function saveRecoveryEmail() {
      var _this$dossier_credit,
        _this2 = this;
      if (this.is_partof === "caution_solidaire") {
        var _iterator = _createForOfIteratorHelper(this.cautionnement_solidaires),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var element = _step.value;
            if (!element.nom_prenoms || !element.email || !element.numero_tel_caution_solidaire) {
              this.$toasted.show("Veuillez renseigner le tableau svp !. Cautionnement solidaire");
              return;
            }
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(element.email)) {
              this.$toasted.show("Adresse email invalide !. Cautionnement solidaire");
              return;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
      if (this.is_partof === "email_client") {
        if (!this.email_client) {
          if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email_client)) {
            this.$toasted.show("Adresse email invalide !");
            return;
          }
        }
      }
      var EBAPIS_URL = this.ebapisHost;
      var ENDPOINT = 'loaniq/api/';
      var VERSION = 'v1/';
      var API_URL = "".concat(EBAPIS_URL).concat(ENDPOINT).concat(VERSION);
      var url = "".concat(API_URL, "save-receivers-emails/");
      var formatData = {
        cred_pub_key: (_this$dossier_credit = this.dossier_credit) === null || _this$dossier_credit === void 0 ? void 0 : _this$dossier_credit.cred_pub_key,
        part_of: this.is_partof,
        user: this.authUser
      };
      if (this.is_partof === "caution_solidaire") {
        formatData["cautionnement_solidaires"] = this.cautionnement_solidaires;
      }
      if (this.is_partof === "email_client") {
        formatData["email_client"] = this.email_client;
      }
      this.$axios.post(url, formatData).then(function (response) {
        var data = response.data;
        if (!(data !== null && data !== void 0 && data.is_success)) {
          _this2.$toasted.show("Une erreur s'est produite. Veuillez réessayer");
          return;
        }
        _this2.btnVisibility = true;
        var dataToBeSend = null;
        if (_this2.is_partof === "caution_solidaire") {
          var _data$data;
          dataToBeSend = data === null || data === void 0 || (_data$data = data.data) === null || _data$data === void 0 ? void 0 : _data$data.cautionnement_solidaires;
          EventBus.$emit("cautions-email", dataToBeSend);
        }
        if (_this2.is_partof === "email_client") {
          var _data$data2;
          dataToBeSend = data === null || data === void 0 || (_data$data2 = data.data) === null || _data$data2 === void 0 ? void 0 : _data$data2.email_client;
          EventBus.$emit("customer-email", dataToBeSend);
        }
        _this2.loadDefautData();
        EventBus.$emit("value-updated");
        _this2.$toasted.show("Les informations ont bien été enregistrées", {
          duration: 2000
        });
      })["catch"](function (error) {
        console.warn('Oh. Something went wrong', error);
      });
    },
    loadDefautData: function loadDefautData() {
      if (this.is_partof == "caution_solidaire") {
        this.cautionnement_solidaires = [{
          nom_prenoms: "",
          email: "",
          profession: "",
          indicatif_caution_solidaire: "",
          numero_tel_caution_solidaire: "",
          localisation_caution_solidaire: "",
          revenu_mensuel: 0,
          valeur_patrimoine: 0,
          files: 0,
          template: ""
        }];
      }
      if (this.is_partof == "email_client") {
        this.email_client = "";
      }
    },
    closeModalLetter: function closeModalLetter() {
      this.$modal.hide("modal_letter");
    },
    toggleStateLetter: function toggleStateLetter(key, val) {
      this[key] = val;
    },
    remove1: function remove1(index) {
      this.cautionnement_solidaires.splice(index, 1);
      this.formDataToBeWatched.total_cautionnement_solidaires_valeur_cautionnement = this.somX3(this.cautionnement_solidaires, "valeur_cautionnement");
      this.formDataToBeWatched.total_cautionnement_solidaires_valeur_revenu_mensuel = this.somX3(this.cautionnement_solidaires, "revenu_mensuel");
      this.formDataToBeWatched.total_cautionnement_solidaires_valeur_patrimoine = this.somX3(this.cautionnement_solidaires, "valeur_patrimoine");
    },
    addMore1: function addMore1() {
      this.cautionnement_solidaires.push({
        nom_prenoms: "",
        email: "",
        profession: "",
        indicatif_caution_solidaire: "",
        numero_tel_caution_solidaire: "",
        localisation_caution_solidaire: "",
        revenu_mensuel: 0,
        valeur_patrimoine: 0,
        files: 0,
        template: ""
      });
      this.handleInput();
    },
    loadRetrieved: function loadRetrieved() {
      var _this$dossier_credit2;
      // let lentb = this.dossier_credit?.["tbs_in_use"];
      // let createdKey = this.tb_name;
      // let createdKeyArr = createdKey.split("tb");
      // createdKey = "cred_pub_tb_" + createdKeyArr[1];

      var credTbKey = this.determineCredPubTables((_this$dossier_credit2 = this.dossier_credit) === null || _this$dossier_credit2 === void 0 ? void 0 : _this$dossier_credit2["applied_templ_name"]);

      // let tbArrays = this.determineCredPubTables(applied_templ_name);

      var credtb0 = credTbKey[0];
      var credtb1 = credTbKey[1];
      var credtb4 = credTbKey[4];
      var arrToUse = ["cred_pub_tb_3002", "cred_pub_tb_0490", "cred_pub_tb_490", "cred_pub_tb_049", "cred_pub_tb_49", credtb4];
      // console.log('credTbKey',credTbKey)

      for (var _i = 0, _arrToUse = arrToUse; _i < _arrToUse.length; _i++) {
        var _this$dossier_credit3, _this$dossier_credit4, _this$dossier_credit5, _this$dossier_credit6, _this$dossier_credit7;
        var credp = _arrToUse[_i];
        // console.log("credp", credp)
        console.log(credp, (_this$dossier_credit3 = this.dossier_credit) === null || _this$dossier_credit3 === void 0 ? void 0 : _this$dossier_credit3[credp]);
        if (((_this$dossier_credit4 = this.dossier_credit) === null || _this$dossier_credit4 === void 0 ? void 0 : _this$dossier_credit4[credp]) == undefined) continue;
        this.cautionnement_solidaires = (_this$dossier_credit5 = this.dossier_credit) !== null && _this$dossier_credit5 !== void 0 && (_this$dossier_credit5 = _this$dossier_credit5[credp]) !== null && _this$dossier_credit5 !== void 0 && (_this$dossier_credit5 = _this$dossier_credit5["cautionnement_solidaires"]) !== null && _this$dossier_credit5 !== void 0 && _this$dossier_credit5.length ? (_this$dossier_credit6 = this.dossier_credit) === null || _this$dossier_credit6 === void 0 || (_this$dossier_credit6 = _this$dossier_credit6[credp]) === null || _this$dossier_credit6 === void 0 ? void 0 : _this$dossier_credit6["cautionnement_solidaires"] : this.cautionnement_solidaires;
        this.defaultRetract(false, (_this$dossier_credit7 = this.dossier_credit) === null || _this$dossier_credit7 === void 0 ? void 0 : _this$dossier_credit7.applied_templ_id);
        this.handleInput();
        //
        return;
      }

      // this.defaultRetract(
      //     false,
      //     this.dossier_credit?.applied_templ_id
      // );

      // if (lentb.length > 0) {
      //     if (this.dossier_credit?.[createdKey] != undefined) {
      //         this.formDataToBeWatched =
      //             this.dossier_credit?.[createdKey];
      //     }

      //     if (
      //         this.dossier_credit?.[createdKey]
      //             ?.cautionnement_solidaires != undefined
      //     ) {
      //         if (
      //             this.dossier_credit?.[createdKey]
      //                 ?.cautionnement_solidaires != ""
      //         ) {
      //             this.cautionnement_solidaires =
      //                 this.dossier_credit?.[createdKey][
      //                 "cautionnement_solidaires"
      //                 ];
      //         } else {
      //             if (!this.cautionnement_solidaires[0].nom_prenoms) {
      //                 this.cautionnement_solidaires[0].nom_prenoms =
      //                 this.dossier_credit?.cred_pub_tb_00?.principal_actionnaire;
      //             }
      //         }
      //     }

      // }
    },
    handleInput: function handleInput(evt) {
      this.formDataToBeWatched.total_cautionnement_solidaires_valeur_cautionnement = this.somX3(this.cautionnement_solidaires, "valeur_cautionnement");
      this.formDataToBeWatched.total_cautionnement_solidaires_valeur_revenu_mensuel = this.somX3(this.cautionnement_solidaires, "revenu_mensuel");
      this.formDataToBeWatched.total_cautionnement_solidaires_valeur_patrimoine = this.somX3(this.cautionnement_solidaires, "valeur_patrimoine");
      this.formDataToBeWatched["cautionnement_solidaires"] = this.cautionnement_solidaires;
    },
    handleDoubleClickOrClick: function handleDoubleClickOrClick(event, index) {
      var _this$cautionnement_s,
        _this3 = this;
      EventBus.$emit("open-extra-file-explorer");
      // const dateNow = new Date().toLocaleDateString();
      var numeroPiece = ((_this$cautionnement_s = this.cautionnement_solidaires[index]) === null || _this$cautionnement_s === void 0 || (_this$cautionnement_s = _this$cautionnement_s.numero_piece_identite) === null || _this$cautionnement_s === void 0 ? void 0 : _this$cautionnement_s.trim()) || "";
      var result = numeroPiece;
      // setTimeout(() => {
      //     EventBus.$emit("data-extra-file-explorer", {
      //         name: result,
      //     });
      // }, 500);
      setTimeout(function () {
        EventBus.$emit("data-extra-file-explorer", {
          name: "Pièce jointe {(*)}cautionnement_solidaires_" + index + "_" + _this3.$route.params.templateId
        });
      }, 500);
    },
    getFiles: function getFiles() {
      var _this4 = this;
      _services_proxy_service__WEBPACK_IMPORTED_MODULE_6__["default"].proxyEbapis({
        url: this.connectsHost + "api/get-files",
        method: "POST",
        data: {
          file_identity: this.meta_data["dossier_credit"].cred_pub_key
        }
      }).then(function (res) {
        var _res$data$data, _res$data$data2;
        res.data = JSON.parse(res.data);
        if (((_res$data$data = res.data.data) === null || _res$data$data === void 0 ? void 0 : _res$data$data.length) > 0 || ((_res$data$data2 = res.data.data) === null || _res$data$data2 === void 0 ? void 0 : _res$data$data2.length) != null) {
          _this4.files = res.data.data;
          _this4.cautionnement_solidaires.forEach(function (element, index) {
            var count = 0;
            _this4.files.forEach(function (file) {
              var _element$template;
              if ((file === null || file === void 0 ? void 0 : file.extra_file_template_id) != null && (element === null || element === void 0 || (_element$template = element.template) === null || _element$template === void 0 ? void 0 : _element$template.id) == (file === null || file === void 0 ? void 0 : file.extra_file_template_id)) {
                count++;
              }
            });
            _this4.cautionnement_solidaires[index]["files"] = count;
            _this4.handleInput();
          });
        }
      })["catch"](function (err) {
        console.error(err);
      });
    } // sendToBackend(res, newVal, oldVal){
    //     this.$emit("autosaving");
    //    this.$axios
    //         .post(this.ebapisHost + "creditbuilder/api/v1/autosave-fiche-suivi/", {
    //             cred_pub_key: this.cred_pub_key,
    //             // sender: res.data,
    //             // receivers: this.tags,
    //             fiche_suivi: this.formDataToBeWatched,
    //         })
    //         .then(
    //         function (response) {
    //             this.$emit("autosaving");
    //             // this.$Progress.finish();
    //             // console.log(response);
    //             let tbFetcheData = response.data;
    //             if (tbFetcheData["is_success"] === true) {
    //             this.dossier_credit = tbFetcheData['dossier_credit'];
    //             // this.formDataToBeWatched.ligne_existantes = this.dossier_credit.cred_pub_tb_34.lignes_existantes;
    //             // this.formDataToBeWatched.ligne_existantes.ligne_mfcfa_ca = this.dossier_credit.cred_pub_tb_34.ligne_existantes.ligne_mfcfa
    //             this.$emit("load-shell");
    //             }
    //         }.bind(this)
    //         )
    //         .catch(
    //         function (error) {
    //             this.$Progress.finish();
    //             console.log(error);
    //         }.bind(this)
    //         );
    //     },
  }
  // watch: {
  //     formDataToBeWatched: {
  //         handler(newVal, oldVal) {
  //             this.autosaving(newVal, oldVal);
  //             // ? Cache management
  //             // this.saveDataInCache(newVal, oldVal);
  //         },
  //         deep: true,
  //         immediate: true,
  //     },
  // },
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/widgets/EmailClientCaution.vue?vue&type=template&id=d4b8dada&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/widgets/EmailClientCaution.vue?vue&type=template&id=d4b8dada&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$dossier_credit;
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("div", {
    staticClass: "p-4 border",
    staticStyle: {
      height: "max-content"
    }
  }, [_c("div", {
    staticClass: "row p-0",
    style: ![null, "", undefined, false].includes(_vm.is_partof) ? "border: solid red;" : ""
  }, [_c("section", [_c("h5", {
    staticClass: "d-flex justify-content-between p-2 bg-white mb-0 text-deep-blue cursor-pointer",
    "class": [!_vm.selected_messages_show ? "border-bottom" : "sticky"],
    on: {
      click: function click($event) {
        var _vm$selected_messages;
        _vm.toggleStateLetter("selected_messages_show", !((_vm$selected_messages = _vm.selected_messages_show) !== null && _vm$selected_messages !== void 0 ? _vm$selected_messages : false));
      }
    }
  }, [_c("div", {
    staticClass: "d-flex align-items-center gap-3",
    "class": ![null, "", undefined, false].includes(_vm.is_partof) ? "text-danger" : ""
  }, [_c("i", {
    staticClass: "icofont-info-circle"
  }), _vm._v("\n                        Informations requises\n                    ")]), _vm._v(" "), _c("div", [_vm.selected_messages_show ? _c("i", {
    staticClass: "icofont-caret-up"
  }) : _c("i", {
    staticClass: "icofont-caret-down"
  })])]), _vm._v(" "), _c("transition", {
    attrs: {
      name: "fade-up"
    }
  }, [_vm.selected_messages_show ? _c("ul", {
    staticClass: "p-1 border-bottom bg-white"
  }, [[null, "", undefined, false].includes(_vm.is_partof) ? _c("aside", {
    staticClass: "bg-white h-100 py-5 d-flex justify-content-center align-items-center"
  }, [_c("h6", [_vm._v("Aucune information disponible")])]) : [_c("li", {
    staticClass: "bg-white d-flex flex-column p-2"
  }, [_c("header", {
    staticClass: "cursor-pointer d-flex align-items-end justify-content-between gap-2 text-one-line",
    on: {
      click: function click($event) {
        var _vm$selected_messages2;
        _vm.toggleStateLetter("selected_messages_hide", !((_vm$selected_messages2 = _vm.selected_messages_hide) !== null && _vm$selected_messages2 !== void 0 ? _vm$selected_messages2 : false));
      }
    }
  }, [[_c("div", {
    staticStyle: {
      "min-width": "auto"
    }
  }, [_vm.is_partof == "caution_solidaire" ? _c("span", [_vm._v("\n                                                Cautionnement solidaires\n                                            ")]) : _vm._e(), _vm._v(" "), _vm.is_partof == "email_client" ? _c("span", [_vm._v("\n                                                Adresse Email de\n                                                    "), _c("span", {
    staticClass: "fw-semibold"
  }, [_vm._v("\n                                                    " + _vm._s((_vm$dossier_credit = _vm.dossier_credit) === null || _vm$dossier_credit === void 0 || (_vm$dossier_credit = _vm$dossier_credit.cred_pub_tb_00) === null || _vm$dossier_credit === void 0 ? void 0 : _vm$dossier_credit.denomination_client) + "\n                                                    ")])]) : _vm._e()])], _vm._v(" "), _c("div", {
    staticClass: "d-flex align-items-center gap-3"
  }, [_c("div", [_vm.selected_messages_hide ? _c("i", {
    staticClass: "icofont-caret-up"
  }) : _c("i", {
    staticClass: "icofont-caret-down"
  })])])], 2), _vm._v(" "), _c("transition", {
    attrs: {
      name: "fade-up"
    }
  }, [!_vm.selected_messages_hide ? _c("article", {
    staticClass: "mt-1 p-2 rounded bg-light border"
  }, [_vm.is_partof == "email_client" ? [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-12 pl-4"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.email_client,
      expression: "\n                                                            email_client\n                                                        ",
      modifiers: {
        lazy: true
      }
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
      value: _vm.email_client
    },
    on: {
      change: function change($event) {
        _vm.email_client = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 text-center mb-1",
    staticStyle: {
      "margin-top": "10px"
    }
  }, [!_vm.btnVisibility ? _c("button", {
    staticClass: "btn shadow-md text-white",
    staticStyle: {
      background: "#2c3e50",
      "max-width": "max-content"
    },
    attrs: {
      type: "button",
      name: "button",
      disabled: _vm.isLoading
    },
    on: {
      click: function click($event) {
        return _vm.saveRecoveryEmail();
      }
    }
  }, [_vm._v("\n                                                        ENREGISTRER\n                                                    ")]) : _vm._e()])])] : _vm._e(), _vm._v(" "), _vm.is_partof == "caution_solidaire" ? [_c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered mb-1"
  }, [_c("thead", [_c("tr", [_c("td", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("\n                                                                        Nom et\n                                                                        prénoms\n                                                                    ")])]), _vm._v(" "), _c("td", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("\n                                                                        Email\n                                                                    ")])]), _vm._v(" "), _c("td", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("\n                                                                        Numéro téléphone\n                                                                    ")])]), _vm._v(" "), _c("td", [_c("label", {
    attrs: {
      "for": ""
    }
  })])])]), _vm._v(" "), _c("tbody", _vm._l(_vm.cautionnement_solidaires, function (cautionnement, index) {
    return _c("tr", {
      key: index
    }, [_c("td", {
      staticClass: "col-4"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: cautionnement.nom_prenoms,
        expression: "\n                                                                            cautionnement.nom_prenoms\n                                                                        "
      }],
      staticClass: "form-control",
      attrs: {
        type: "text",
        required: ""
      },
      domProps: {
        value: cautionnement.nom_prenoms
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(cautionnement, "nom_prenoms", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", {
      staticClass: "col-4"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: cautionnement.email,
        expression: "\n                                                                            cautionnement.email\n                                                                        "
      }],
      staticClass: "form-control",
      attrs: {
        type: "text",
        required: ""
      },
      domProps: {
        value: cautionnement.email
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(cautionnement, "email", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", {
      staticClass: "col-2"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: cautionnement.numero_tel_caution_solidaire,
        expression: "\n                                                                        cautionnement.numero_tel_caution_solidaire\n                                                                    ",
        modifiers: {
          lazy: true
        }
      }],
      staticClass: "form-control",
      attrs: {
        type: "text"
      },
      domProps: {
        value: cautionnement.numero_tel_caution_solidaire
      },
      on: {
        input: _vm.handleInput,
        change: function change($event) {
          return _vm.$set(cautionnement, "numero_tel_caution_solidaire", $event.target.value);
        }
      }
    })]), _vm._v(" "), index == 0 ? _c("td", {
      staticStyle: {
        "padding-left": "5px"
      }
    }, [_c("button", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: index == 0,
        expression: "\n                                                                            index ==\n                                                                            0\n                                                                        "
      }],
      staticStyle: {
        "background-color": "#2c3e50",
        color: "#ffffff",
        "border-radius": "15%",
        border: "none",
        "font-size": "16px"
      },
      attrs: {
        type: "button",
        title: "Ajouter un bien"
      },
      on: {
        click: function click($event) {
          return _vm.addMore1();
        }
      }
    }, [_c("plus-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1)]) : _c("td", [_c("button", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: index != 0,
        expression: "\n                                                                            index !=\n                                                                            0\n                                                                        "
      }],
      staticStyle: {
        "background-color": "transparent",
        border: "none"
      },
      attrs: {
        type: "button",
        title: "Supprimer"
      },
      on: {
        click: function click($event) {
          return _vm.remove1(index);
        }
      }
    }, [_c("trash-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1)])]);
  }), 0)])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 text-center mb-1"
  }, [!_vm.btnVisibility ? _c("button", {
    staticClass: "btn shadow-md text-white",
    staticStyle: {
      background: "#2c3e50",
      "max-width": "max-content"
    },
    attrs: {
      type: "button",
      name: "button",
      disabled: _vm.isLoading
    },
    on: {
      click: function click($event) {
        return _vm.saveRecoveryEmail();
      }
    }
  }, [_vm._v("\n                                                        ENREGISTRER\n                                                    ")]) : _vm._e()])] : _vm._e()], 2) : _vm._e()])], 1)]], 2) : _vm._e()])], 1)])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/widgets/EmailClientCaution.vue?vue&type=style&index=0&id=d4b8dada&scoped=true&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/widgets/EmailClientCaution.vue?vue&type=style&index=0&id=d4b8dada&scoped=true&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\r\n/* @import 'leaflet/dist/leaflet.css'; */\r\n/* * {\r\n    font-family: \"Google sans\";\r\n} */\n.input-date[data-v-d4b8dada] {\r\n    width: 250px;\n}\nlabel[data-v-d4b8dada] {\r\n    height: 10px;\r\n    font-size: 13px;\n}\ninput[type=\"text\"][data-v-d4b8dada],\r\ninput[type=\"date\"][data-v-d4b8dada] {\r\n    width: 250px;\n}\r\n\r\n/* input[type=\"text\"],\r\ninput[type=\"date\"] {\r\n    width: 100% !important;\r\n} */\n.th[data-v-d4b8dada] {\r\n    padding: 4px;\r\n    padding-bottom: 0px;\n}\nselect[data-v-d4b8dada] {\r\n    width: 250px;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/widgets/EmailClientCaution.vue?vue&type=style&index=0&id=d4b8dada&scoped=true&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/widgets/EmailClientCaution.vue?vue&type=style&index=0&id=d4b8dada&scoped=true&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailClientCaution_vue_vue_type_style_index_0_id_d4b8dada_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EmailClientCaution.vue?vue&type=style&index=0&id=d4b8dada&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/widgets/EmailClientCaution.vue?vue&type=style&index=0&id=d4b8dada&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailClientCaution_vue_vue_type_style_index_0_id_d4b8dada_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailClientCaution_vue_vue_type_style_index_0_id_d4b8dada_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/shared/widgets/EmailClientCaution.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/components/shared/widgets/EmailClientCaution.vue ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EmailClientCaution_vue_vue_type_template_id_d4b8dada_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EmailClientCaution.vue?vue&type=template&id=d4b8dada&scoped=true */ "./resources/js/components/shared/widgets/EmailClientCaution.vue?vue&type=template&id=d4b8dada&scoped=true");
/* harmony import */ var _EmailClientCaution_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EmailClientCaution.vue?vue&type=script&lang=js */ "./resources/js/components/shared/widgets/EmailClientCaution.vue?vue&type=script&lang=js");
/* harmony import */ var _EmailClientCaution_vue_vue_type_style_index_0_id_d4b8dada_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EmailClientCaution.vue?vue&type=style&index=0&id=d4b8dada&scoped=true&lang=css */ "./resources/js/components/shared/widgets/EmailClientCaution.vue?vue&type=style&index=0&id=d4b8dada&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _EmailClientCaution_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _EmailClientCaution_vue_vue_type_template_id_d4b8dada_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _EmailClientCaution_vue_vue_type_template_id_d4b8dada_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "d4b8dada",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/shared/widgets/EmailClientCaution.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/shared/widgets/EmailClientCaution.vue?vue&type=script&lang=js":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/shared/widgets/EmailClientCaution.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailClientCaution_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EmailClientCaution.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/widgets/EmailClientCaution.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailClientCaution_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/shared/widgets/EmailClientCaution.vue?vue&type=style&index=0&id=d4b8dada&scoped=true&lang=css":
/*!*******************************************************************************************************************************!*\
  !*** ./resources/js/components/shared/widgets/EmailClientCaution.vue?vue&type=style&index=0&id=d4b8dada&scoped=true&lang=css ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailClientCaution_vue_vue_type_style_index_0_id_d4b8dada_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EmailClientCaution.vue?vue&type=style&index=0&id=d4b8dada&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/widgets/EmailClientCaution.vue?vue&type=style&index=0&id=d4b8dada&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/shared/widgets/EmailClientCaution.vue?vue&type=template&id=d4b8dada&scoped=true":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/shared/widgets/EmailClientCaution.vue?vue&type=template&id=d4b8dada&scoped=true ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailClientCaution_vue_vue_type_template_id_d4b8dada_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailClientCaution_vue_vue_type_template_id_d4b8dada_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailClientCaution_vue_vue_type_template_id_d4b8dada_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EmailClientCaution.vue?vue&type=template&id=d4b8dada&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/widgets/EmailClientCaution.vue?vue&type=template&id=d4b8dada&scoped=true");


/***/ }),

/***/ "./resources/js/services/recouvrement.service.js":
/*!*******************************************************!*\
  !*** ./resources/js/services/recouvrement.service.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ })

}]);