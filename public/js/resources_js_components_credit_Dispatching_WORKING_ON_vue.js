"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_credit_Dispatching_WORKING_ON_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/credit/Dispatching_WORKING_ON.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/credit/Dispatching_WORKING_ON.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/auth.service */ "./resources/js/services/auth.service.js");
/* harmony import */ var _services_proxy_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/proxy.service */ "./resources/js/services/proxy.service.js");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _services_credit_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/credit.service */ "./resources/js/services/credit.service.js");
/* harmony import */ var _services_connects_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/connects.service */ "./resources/js/services/connects.service.js");
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vueform/multiselect/dist/multiselect.vue2 */ "./node_modules/@vueform/multiselect/dist/multiselect.vue2.js");
/* harmony import */ var _modals_AddNewClientModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modals/AddNewClientModal */ "./resources/js/components/modals/AddNewClientModal.vue");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), c(GeneratorFunctionPrototype, u, GeneratorFunction.displayName = "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }








var startTime,
  endTime = null;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Dispatching',
  props: {
    doss: Array,
    dispatchingRoles: Array,
    title: String,
    logo: String,
    paginate: Number,
    numLoadFetcherCount: Number,
    firstPubKey: String,
    loadDossier: Boolean,
    role: String,
    listDispatcher: {
      type: Boolean,
      "default": true
    },
    routeOfFile: {
      type: Boolean,
      "default": true
    }
  },
  components: {
    Multiselect: _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_5__["default"],
    MoreVerticalIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.MoreVerticalIcon,
    AddNewClientModal: _modals_AddNewClientModal__WEBPACK_IMPORTED_MODULE_6__["default"],
    UserPlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.UserPlusIcon
  },
  data: function data() {
    return {
      clientBank: "",
      loadmoreCd: false,
      credits: [],
      recallerRecord: "",
      recallerCredPubKey: "",
      code: "",
      connectsHost: _services_connects_service__WEBPACK_IMPORTED_MODULE_4__["default"].loadablehost(),
      httpHost: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_2__["default"].loadableHttpHost(),
      loadingCreateDoss: false,
      editFormAdd: false,
      ifSubmit: true,
      loadmore: false,
      loadmoreDoss: '',
      page: 0,
      typeSearch: '',
      updatekey: null,
      searchAnalyst: '',
      demandeClient: '',
      columns: [{
        label: 'N°',
        field: 'key'
      }, {
        label: 'Numero',
        field: 'numero_dossier'
      }, {
        label: 'Type',
        field: this.firstPubKey + '.type_credit'
      }, {
        label: 'Montant',
        field: this.firstPubKey + '.montant_credit'
      }, {
        label: 'Taille de l\'Entreprise',
        field: this.firstPubKey + '.taille_entreprise'
      }],
      formAssing: {
        cred_pub_key: '',
        user: '',
        new_user: '',
        need_accord: false,
        tobedone: "ASSIGNATION",
        dispatch_id: '',
        num_phone_caf: null
      },
      lastvalue: "",
      timer: undefined,
      formAddDoss: {
        montant: 0,
        type_de_pret: '',
        type_demande: '',
        type_de_cred: '',
        reference: '',
        indicatif: '',
        phone: '',
        email: '',
        client: '',
        pays: '',
        agence: '',
        codeagence: '',
        filiale: '',
        caf: '',
        num_agence: '',
        num_pays: '',
        document_client: null,
        dispatcher_info: null,
        agenceBusinessUnit: ""
      },
      analysts: [],
      fromValue: '',
      authcheck: null,
      authcheckUsr: null,
      authcheckStatus: null,
      // logo: null,
      ebapisHost: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_2__["default"].host,
      dossiers: [],
      // paginate: 5,
      isLoading: false,
      isEdit: false,
      dossAsign: [],
      toggleKey: true,
      toggleAmount: true,
      toggleSizeEnt: true,
      loadingAnalyst: true,
      clients: [],
      matricule_client: "",
      cred_pub_for_update: "",
      dossier_to_update: "",
      countries: [],
      onFocused: "l",
      infoDoss: [],
      uploading: false,
      list_entites: {
        "CFN CIV": "CÔTE D'IVOIRE",
        "CFN BF": "BURKINA FASO",
        "CFN CG": "CONGO",
        "CFN GN": "GUINEE",
        "FINL": "CÔTE D'IVOIRE",
        "CFN TG": "TOGO",
        "CFN SN": "SENEGAL",
        "CFN ML": "MALI",
        "CFN GB": "GABON"
      },
      dispatchRl: ["PPxUVOLpEjOgVhyu2", "7ytMz4GuicBXd66g", "iiGB868lAd0Doi86c", "4Dr52frDnVe0QNiZbKE8"],
      dispatchR2: ["iiGB868lAd0Doi86c"],
      dispatchR3: ["4Dr52frDnVe0QNiZbKE8"],
      dispatchR4: ["8XCcvE3e7zVwQNsnKTX2"],
      pagerInc: 1,
      pagerIncTotal: Math.ceil(this.numLoadFetcherCount / 5),
      storeInc: 1,
      searchingDoss: false,
      dossier: null,
      loadMemoModal: false,
      labelAssign: "",
      allAgence: [],
      agenceBusinessUnit: "",
      nbDoss: 10,
      userNbDoss: '',
      appEnviron: "local",
      loadRecIQinstanceBool: false,
      loadOnlyAgencies: true
    };
  },
  created: function created() {
    var _this = this;
    this.loadAllAgencies();
    _services_credit_service__WEBPACK_IMPORTED_MODULE_3__["default"].loadCredits().then(function (res) {
      _this.credits = res.data;
    })["catch"](function (err) {
      console.log(err);
    });
    _services_credit_service__WEBPACK_IMPORTED_MODULE_3__["default"].loadpaysindicatif().then(function (res) {
      _this.countries = res.data;
    })["catch"](function (err) {
      console.log(err);
    });
  },
  mounted: function mounted() {
    var _this2 = this;
    this.dossiers = this.doss;
    // this.fetchCreditsNTemplates()
    if (this.listDispatcher) {
      this.loadAnal();
    }
    EventBus.$on("skip-load-more", function (data) {
      if (data == false) {
        _this2.loadmoreCd = false;
      }
    });
    EventBus.$on('return-load-doss-recoveryiq-instance', function () {
      _this2.loadRecIQinstanceBool = false;
      _this2.loadAnal();
    });

    // DGR
    if (this.role == 'h9nif10Up1scc19qFsVT') {
      this.labelAssign = 'Gestionnaire de risque';
    } else if (this.role == 'K8C1dfx52rvA5ugR1mqt') {
      this.labelAssign = 'Recouvreur';
    } else if (this.role == 'GAGjgdXhZQqhHZYv2Jdp') {
      this.labelAssign = 'Gestionnaire Garanties';
    } else if (this.role == 'zAWRPBxNLAicJ778CtKd') {
      this.labelAssign = 'Agence';
    } else {
      this.labelAssign = this.dispatchR4.includes(this.role) ? 'Chargé' : !this.dispatchRl.includes(this.role) ? 'Analyste' : this.dispatchR2.includes(this.role) ? 'CE' : this.dispatchR3.includes(this.role) ? 'Juriste' : 'CAF';
    }
    if (this.authcheckUsr == null) {
      _services_auth_service__WEBPACK_IMPORTED_MODULE_0__["default"].loadUserData().then(function (res) {
        _this2.authcheck = true;
        _this2.authcheckUsr = res.data;
        _this2.authcheckStatus = res.status;
      })["catch"](function (err) {
        console.log(err);
      });
    }
  },
  methods: {
    setSectionToLoad: function setSectionToLoad() {
      loadOnlyAgencies = !this.loadOnlyAgencies;
    },
    openAddNewClientModal: function openAddNewClientModal() {
      this.$modal.hide('dispatc_doss');
      EventBus.$emit('add-new-client-modal-modalName', {
        modalName: 'dispatc_doss'
      });
      this.$modal.show('add_new_client_modal');
    },
    loadAllAgencies: function loadAllAgencies() {
      var _this3 = this;
      _services_credit_service__WEBPACK_IMPORTED_MODULE_3__["default"].loadAllAgencies().then(function (res) {
        _this3.allAgence = res.data;
      })["catch"](function (err) {
        console.log(err);
      });
    },
    changeIcommingAgence: function changeIcommingAgence() {
      var _this$allAgence,
        _this4 = this;
      this.formAddDoss["agence_native"] = this.formAddDoss.agence;
      var px = (_this$allAgence = this.allAgence) === null || _this$allAgence === void 0 || (_this$allAgence = _this$allAgence.find(function (el) {
        var _el$agence, _this4$formAddDoss$ag;
        return ((_el$agence = el.agence) === null || _el$agence === void 0 || (_el$agence = _el$agence.toString()) === null || _el$agence === void 0 ? void 0 : _el$agence.toLowerCase()) == ((_this4$formAddDoss$ag = _this4.formAddDoss.agenceBusinessUnit) === null || _this4$formAddDoss$ag === void 0 || (_this4$formAddDoss$ag = _this4$formAddDoss$ag.trim()) === null || _this4$formAddDoss$ag === void 0 || (_this4$formAddDoss$ag = _this4$formAddDoss$ag.toString()) === null || _this4$formAddDoss$ag === void 0 ? void 0 : _this4$formAddDoss$ag.toLowerCase());
      })) === null || _this$allAgence === void 0 ? void 0 : _this$allAgence.code;
      if (px == undefined || !px.includes("_")) {
        var _this$allAgence2;
        px = (_this$allAgence2 = this.allAgence) === null || _this$allAgence2 === void 0 || (_this$allAgence2 = _this$allAgence2.find(function (el) {
          var _el$code, _this4$formAddDoss$co;
          return ((_el$code = el.code) === null || _el$code === void 0 || (_el$code = _el$code.toString()) === null || _el$code === void 0 ? void 0 : _el$code.toLowerCase()) == ((_this4$formAddDoss$co = _this4.formAddDoss.codeagence.trim()) === null || _this4$formAddDoss$co === void 0 ? void 0 : _this4$formAddDoss$co.toLowerCase());
        })) === null || _this$allAgence2 === void 0 ? void 0 : _this$allAgence2.code;
      }

      //   let px = this.allAgence?.find(el => el.agence?.toString()?.toLowerCase() == this.formAddDoss.agenceBusinessUnit?.trim()?.toString()?.toLowerCase())?.code

      _services_credit_service__WEBPACK_IMPORTED_MODULE_3__["default"].loadenregistreur(px).then(function (res) {
        _this4.formAddDoss.dispatcher_info = res.data;
      });
    },
    archivateOldDoss: function archivateOldDoss(dossier) {
      var _this5 = this;
      this.loadMemoModal = true;
      this.$axios.post(this.ebapisHost + "creditbuilder/api/v1/archivate-old_dossier/", {
        cred_pub_key: dossier === null || dossier === void 0 ? void 0 : dossier.cred_pub_key
      }).then(function (res) {
        _this5.loadMemoModal = false;
        _this5.$modal.hide('memoModalDisp');
        window.location.reload();
      })["catch"](function (err) {
        console.log({
          err: err
        });
      });
    },
    doTobeDo: function doTobeDo(dossier) {
      this.dossier = dossier;
      // alert(0)
      this.$modal.show("memoModalDisp");
    },
    opendoss: function opendoss(cred_pub_key) {
      if (this.dispatchingRoles.includes(this.role)) {
        this.$router.push("/creation/".concat(cred_pub_key));
      }
    },
    loadmoreFile: function loadmoreFile() {
      EventBus.$emit("load-more-file", this.loadmoreCd = true);
    },
    stopSearch: function stopSearch() {
      // this.$emit('reload-me')
      this.typeSearch = "";
      this.dossiers = this.doss;
    },
    searchDossier: function searchDossier() {
      var _this6 = this;
      if (!this.typeSearch) return;
      this.searchingDoss = true;
      _services_auth_service__WEBPACK_IMPORTED_MODULE_0__["default"].loadUserData().then(function (res) {
        _this6.$axios.post(_this6.ebapisHost + "creditbuilder/api/v1/search-dossiers/", {
          search: _this6.typeSearch.toLowerCase(),
          user: res.data
        }).then(function (res) {
          var dossiers = res.data.dossiers;
          dossiers.forEach(function (doss) {
            var annexe = {};
            if (doss.caf_recorded_file) {
              annexe = {
                numero_dossier: doss.numero_dossier,
                montant_credit: doss.caf_recorded_file.montant,
                nom_client: doss.caf_recorded_file.client.nomcli,
                type_credit: doss.caf_recorded_file.type_de_pret
              };
            } else {
              annexe = {
                numero_dossier: doss.numero_dossier,
                montant_credit: doss.doss_central_file_recorder.montant,
                nom_client: doss.doss_central_file_recorder.client.nomcli,
                type_credit: doss.doss_central_file_recorder.type_de_pret
              };
            }
            doss.annexes_dossier = annexe;
          });
          _this6.dossiers = dossiers;
          _this6.searchingDoss = false;
        })["catch"](function (err) {
          _this6.searchingDoss = false;
          console.log({
            err: err
          });
        });
      })["catch"](function (err) {
        console.error(err);
      });
    },
    loadMoreCAF: function loadMoreCAF() {
      this.loadmore = true;
      this.page += 10;
      this.loadAnal();
    },
    loadMoreDoss: function loadMoreDoss() {
      var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      if (id) {
        this.userNbDoss = {
          id: id,
          paginate: this.nbDoss += 5
        };
        this.loadmoreDoss = id;
      }
      this.loadAnal();
    },
    openMoreDossier: function openMoreDossier(data) {
      this.infoDoss = data;
      this.onFocused = data;
      this.$modal.show('more_info_doss');
    },
    nameWithId: function nameWithId(_ref) {
      var name = _ref.name,
        id = _ref.id;
      console.log(name);
    },
    enableEdit: function enableEdit(ev, key) {
      if (ev.type === "mouseover") {
        this.updatekey = key;
      } else {
        this.updatekey = null;
      }
    },
    updateDossier: function updateDossier(dossier) {
      this.editFormAdd = true;
      this.dossier_to_update = dossier;
      this.cred_pub_for_update = dossier.cred_pub_key;
      this.formAddDoss = dossier.doss_central_file_recorder;
      this.$modal.show('dispatc_doss');
      this.handleInput();
    },
    openFormAddDoss: function openFormAddDoss() {
      this.editFormAdd = false;
      this.formAddDoss = {
        montant: 0,
        type_de_pret: '',
        type_demande: '',
        type_de_cred: '',
        reference: '',
        indicatif: '225',
        phone: '',
        email: '',
        client: '',
        pays: '',
        agence: '',
        codeagence: '',
        filiale: '',
        caf: '',
        document_client: null,
        dispatcher_info: null
      };
      if (this.entityType.toUpperCase() == 'BANK') {
        this.$modal.show('dispatc_doss_bank');
      } else {
        this.$modal.show('dispatc_doss');
      }
      this.handleInput();
    },
    onSlctMatCli: function onSlctMatCli(obj) {
      this.formDataToBeWatched.matricule_client = obj.matcli;
      this.formDataToBeWatched.raison_sociale = obj.nomcli;
      var a = obj.matcli;
      var b = this.formDataToBeWatched.montant_sollicite;
      EventBus.$emit("recompute-encours", {
        matricule_client: a,
        montant_sollicite: b
      });
    },
    textTruncate: function textTruncate(str, length, ending) {
      if (typeof str === 'string') {
        if (length == null) {
          length = 25;
        }
        if (ending == null) {
          ending = '...';
        }
        if (str.length > length) {
          return str.substring(0, length - ending.length) + ending;
        } else {
          return str;
        }
      }
    },
    status: function status(state) {
      // state = Number((state/this.totalAssign) * 100)
      var analyst = this.analysts.length;
      var middle = Number(this.totalAssign / analyst).toFixed(0);
      // let middle = this.totalAssign !== 0 ? Number(this.totalAssign / analyst).toFixed(0) : 0
      if (state < middle || middle == 0 && state == 0) {
        return "available";
      } else if (state == middle) {
        return "middle";
      } else if (state > middle) {
        return "unavailable";
      }
    },
    log: function () {
      var _log = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(el) {
        var _this7 = this;
        var result, respForm, _result, _respForm;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!el.removed) {
                _context.next = 18;
                break;
              }
              if (!el.removed.element) {
                _context.next = 16;
                break;
              }
              this.formAssing.cred_pub_key = el.removed.element.cred_pub_key;
              _context.next = 5;
              return this.getAnalyst();
            case 5:
              result = _context.sent;
              el.removed.element.lastUser = result.id;
              this.formAssing.user = result ? result : null;
              this.formAssing.new_user = null;
              // console.log("new_user | formAssing", this.formAssing.user.email)
              _services_credit_service__WEBPACK_IMPORTED_MODULE_3__["default"].loadCAFCofinaByEmail({
                email: this.formAssing.user.email
              }).then(function (res) {
                // console.log("res.data", res.data)
                _this7.formAssing.num_phone_caf = res.data.num_phone_caf;
              })["catch"](function (err) {
                console.log(err);
              });
              this.formAssing.tobedone = "ASSIGNATION";
              _context.next = 13;
              return this.sendForm();
            case 13:
              respForm = _context.sent;
              if (respForm.is_success) {
                this.$toasted.show("Dossier assigné !");
                this.$axios.post(this.ebapisHost + "reportex/api/v1/start-watcher/", {
                  cred_pub_key: this.formAssing.cred_pub_key,
                  entity_type: "BANK"
                }).then(function (res) {
                  //
                  // this.$toasted.show('timesheets updated successfully')
                })["catch"](function (err) {
                  console.error(err);
                });
                this.$axios.post(this.ebapisHost + "reportex/api/v1/fix-timesheet/", {
                  cred_pub_key: this.formAssing.cred_pub_key
                }).then(function () {
                  return console.log();
                })["catch"](function (err) {
                  return console.log('could not fix timesheet');
                });
              }
              EventBus.$emit('fetchData');
            case 16:
              _context.next = 34;
              break;
            case 18:
              if (!el.added) {
                _context.next = 34;
                break;
              }
              if (!el.added.element) {
                _context.next = 34;
                break;
              }
              this.formAssing.cred_pub_key = el.added.element.cred_pub_key;
              _context.next = 23;
              return this.getUser(el.added.element.lastUser);
            case 23:
              this.formAssing.user = _context.sent;
              _context.next = 26;
              return this.getAnalyst();
            case 26:
              _result = _context.sent;
              this.formAssing.new_user = _result ? _result : null;
              this.formAssing.tobedone = "UN_ASSIGNATION";
              _context.next = 31;
              return this.sendForm();
            case 31:
              _respForm = _context.sent;
              if (_respForm.is_success) {
                this.$toasted.show("Assignation annulée !");
              }
              EventBus.$emit('fetchData');
            case 34:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function log(_x) {
        return _log.apply(this, arguments);
      }
      return log;
    }(),
    moving: function moving(el) {
      var _this8 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              if (_this8.timer != undefined) {
                clearTimeout(_this8.timer);
              }
              if (el.to.id !== "dossier") {
                if (el.from.id.includes('analyst')) {
                  if (el.from.id !== el.to.id) {
                    _this8.timer = setTimeout(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
                      var resultUser, result, respForm;
                      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                        while (1) switch (_context2.prev = _context2.next) {
                          case 0:
                            _this8.formAssing.cred_pub_key = el.draggedContext.element.cred_pub_key;
                            _context2.next = 3;
                            return _this8.getUser(el.draggedContext.element.lastUser);
                          case 3:
                            resultUser = _context2.sent;
                            _this8.formAssing.user = resultUser;
                            _context2.next = 7;
                            return _this8.getAnalyst();
                          case 7:
                            result = _context2.sent;
                            _this8.formAssing.new_user = result;
                            _services_credit_service__WEBPACK_IMPORTED_MODULE_3__["default"].loadCAFCofinaByEmail({
                              email: _this8.formAssing.user.email
                            }).then(function (res) {
                              _this8.formAssing.num_phone_caf = res.data.num_phone_caf;
                            })["catch"](function (err) {
                              console.log(err);
                            });
                            _this8.formAssing.tobedone = "RE_ASSIGNATION";
                            _context2.next = 13;
                            return _this8.sendForm();
                          case 13:
                            respForm = _context2.sent;
                            if (respForm.is_success) {
                              _this8.$toasted.show("Dossier Reassigné !");
                            }
                          case 15:
                          case "end":
                            return _context2.stop();
                        }
                      }, _callee2);
                    })), 2000);
                  }
                }
              }
            case 2:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
    },
    loadFetcher: function loadFetcher(res) {
      var _this9 = this;
      return new Promise(function (resolve, reject) {
        _this9.authcheck = true;
        _this9.authcheckUsr = res.data;
        _this9.formAssing.dispatch_id = _this9.authcheckUsr.user_id;
        _this9.logo = _this9.authcheckUsr['logo'];
        _this9.authcheckStatus = res.status;
        if (_this9.authcheckStatus === 401) {
          // // window.location.href = "/login"
        }
        if (_this9.authcheck === true) {
          var _this9$formAssing, _this9$formAssing3, _finalFormAssing$user, _finalFormAssing$new_;
          if (((_this9$formAssing = _this9.formAssing) === null || _this9$formAssing === void 0 || (_this9$formAssing = _this9$formAssing.user) === null || _this9$formAssing === void 0 ? void 0 : _this9$formAssing.dossier) != undefined) {
            var _this9$formAssing2;
            var dossier_minifies = [];
            (_this9$formAssing2 = _this9.formAssing) === null || _this9$formAssing2 === void 0 || (_this9$formAssing2 = _this9$formAssing2.user) === null || _this9$formAssing2 === void 0 || _this9$formAssing2.dossier.forEach(function (el) {
              dossier_minifies.push(_this9.removeKeyInDossierCredit(el));
            });
            _this9.formAssing.user.dossier = dossier_minifies;
          }
          if (((_this9$formAssing3 = _this9.formAssing) === null || _this9$formAssing3 === void 0 || (_this9$formAssing3 = _this9$formAssing3.new_user) === null || _this9$formAssing3 === void 0 ? void 0 : _this9$formAssing3.dossier) != undefined) {
            var _this9$formAssing4;
            var _dossier_minifies = [];
            (_this9$formAssing4 = _this9.formAssing) === null || _this9$formAssing4 === void 0 || (_this9$formAssing4 = _this9$formAssing4.new_user) === null || _this9$formAssing4 === void 0 || _this9$formAssing4.dossier.forEach(function (el) {
              _dossier_minifies.push(_this9.removeKeyInDossierCredit(el));
            });
            _this9.formAssing.new_user.dossier = _dossier_minifies;
          }
          var finalFormAssing = JSON.parse(JSON.stringify(_this9.formAssing));
          finalFormAssing === null || finalFormAssing === void 0 || delete finalFormAssing.dossier;
          finalFormAssing === null || finalFormAssing === void 0 || (_finalFormAssing$user = finalFormAssing.user) === null || _finalFormAssing$user === void 0 || delete _finalFormAssing$user.dossier;
          finalFormAssing === null || finalFormAssing === void 0 || (_finalFormAssing$new_ = finalFormAssing.new_user) === null || _finalFormAssing$new_ === void 0 || delete _finalFormAssing$new_.dossier;

          // delete this.formAssing?.dossier; 
          // delete this.formAssing?.user?.dossier; 
          // delete this.formAssing?.new_user?.dossier;

          _this9.$axios.post(_this9.ebapisHost + 'creditbuilder/api/v1/assignation-reassignation/', {
            assignation: finalFormAssing,
            authUser: _this9.authcheckUsr,
            dispatch_workflow: _this9.dispatchingRoles.includes(_this9.role)
          }).then(function (response) {
            // this.$Progress.finish();
            this.isLoading = false;
            this.$toasted.clear();
            resolve(response.data);
          }.bind(_this9))["catch"](function (error) {
            this.isLoading = false;
            // this.$Progress.finish();
            reject(error);
          }.bind(_this9));
        } else {
          alert("Unauthenticated");
        }
      });
    },
    loadAnal: function loadAnal() {
      var _this0 = this;
      _services_credit_service__WEBPACK_IMPORTED_MODULE_3__["default"].loadanalysts({
        page: this.page,
        emails_in_use: this.analysts.map(function (a) {
          return a.email;
        }),
        nbDoss: this.nbDoss,
        nbDossUser: this.userNbDoss
      }).then(function (res) {
        _this0.analystsData(res);
      })["catch"](function (err) {
        console.log(err);
      });
    },
    nextPage: function nextPage() {
      EventBus.$emit('nextData');
      if (this.pagerInc < this.pagerIncTotal) {
        this.pagerInc += 1;
      }
    },
    previousPage: function previousPage() {
      EventBus.$emit('previousData');
      if (this.pagerInc > 1) {
        this.pagerInc -= 1;
      }
    },
    analystsData: function analystsData(res) {
      var _this1 = this;
      // console.log("res",res)
      // Array.prototype.push.apply(this.analysts,res.data);
      try {
        this.analysts = [];
        res.data.forEach(function (element) {
          _this1.analysts.push(element);
        });
        // console.log("analysts", this.analysts)
        this.loadingAnalyst = false;
        // endTime = new Date().getTime();
        // console.log("end time ", endTime);

        // console.log("timeSpent to load", res.data.length," analysts with", res.data.reduce((p, c) => p + c.dossier.length, 0) ,"dossiers", (endTime - startTime)/1000, "seconds");

        // console.log("new analysts :", res.data.length);
        // console.table(res.data.map(a =>a.email))
        // console.log("analysts :", this.analysts.length);
        // console.table(this.analysts.map(a =>a.email))
        // this.filterDossier()
      } catch (error) {
        console.error(error);
      }
      this.loadmore = false;
      this.loadmoreDoss = "";
    },
    filterDossier: function filterDossier(res) {
      var _this10 = this;
      var analDoss = [];
      this.analysts.forEach(function (element) {
        element.dossier.forEach(function (el) {
          analDoss.push(el);
        });
      });

      // console.log(analDoss);

      var newTab = [];
      this.dossiers.forEach(function (dossier, key) {
        if (!_this10.containsObject(dossier, analDoss)) {
          newTab.push(_this10.dossiers[key]);
        }
      });
      this.dossiers = newTab;
    },
    containsObject: function containsObject(obj, list) {
      return list.some(function (elem) {
        return elem.numero_dossier === obj.numero_dossier;
      });
    },
    getAnalyst: function getAnalyst() {
      var _this11 = this;
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          var scope = _this11;
          var resp = _.find(_this11.analysts, function (analyst) {
            var dossiers = analyst.dossier;
            var keyDoss = _.find(dossiers, function (dossier) {
              if (dossier.cred_pub_key === scope.formAssing.cred_pub_key) {
                return true;
              }
            });
            return keyDoss;
          });
          resolve(resp);
        }, 500);
      });
    },
    getUser: function getUser(user) {
      return new Promise(function (resolve, reject) {
        _services_credit_service__WEBPACK_IMPORTED_MODULE_3__["default"].info_user(user).then(function (res) {
          // console.log("infouse ====>",user)
          resolve(res.data);
        })["catch"](function (err) {
          console.log(err);
        });
      });
    },
    sendForm: function sendForm() {
      var _this12 = this;
      this.$toasted.show("Assignation en cours ...", {
        duration: 100000,
        action: {
          text: ""
        }
      });
      this.isLoading = true;
      return new Promise(function (resolve, rej) {
        _services_auth_service__WEBPACK_IMPORTED_MODULE_0__["default"].loadUserData().then(/*#__PURE__*/function () {
          var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(res) {
            var response;
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.next = 2;
                  return _this12.loadFetcher(res);
                case 2:
                  response = _context4.sent;
                  resolve(response);
                case 4:
                case "end":
                  return _context4.stop();
              }
            }, _callee4);
          }));
          return function (_x2) {
            return _ref3.apply(this, arguments);
          };
        }())["catch"](function (err) {
          console.log(err);
          _this12.isLoading = false;
        })["finally"](function () {
          return _this12.isLoading = false;
        });
      });
    },
    sortedData: function sortedData(data) {
      if (data === "key") {
        EventBus.$emit('sortTable', this.toggleKey ? data + '2' : data);
        this.toggleKey = !this.toggleKey;
      } else if (data === "amount") {
        EventBus.$emit('sortTable', this.toggleAmount ? data + '2' : data);
        this.toggleAmount = !this.toggleAmount;
      } else if (data === "sizeEnt") {
        EventBus.$emit('sortTable', this.toggleSizeEnt ? data + '2' : data);
        this.toggleSizeEnt = !this.toggleSizeEnt;
      }
    },
    startCreating: function startCreating() {
      var _this13 = this;
      if (this.entityType.toUpperCase() != "BANK") {
        var _this$formAddDoss;
        if ([null, undefined, ''].includes((_this$formAddDoss = this.formAddDoss) === null || _this$formAddDoss === void 0 ? void 0 : _this$formAddDoss.agenceBusinessUnit)) {
          this.$toasted.show('Veuillez renseigner Agence / Business Unit', {
            duration: 5000
          });
          return;
        }
      }
      this.loadingCreateDoss = true;
      _services_auth_service__WEBPACK_IMPORTED_MODULE_0__["default"].loadUserData().then(function (res) {
        _this13.startCredit(res, "empty");
      })["catch"](function (err) {
        _this13.loadWithError(err);
      });
    },
    startCredit: function startCredit(res, templateId) {
      var _this14 = this;
      // alert(templateId)
      this.authcheck = true;
      this.authcheckUsr = res.data;
      this.authcheckStatus = res.status;
      if (this.authcheckStatus === 401) {
        //            // window.location.href = "/login"
      }
      if (this.authcheck === true) {
        this.isLoading = true;
        var endpoint;
        var option;
        if (this.editFormAdd) {
          endpoint = 'creditbuilder/api/v1/dosscentral-editfile/';
          option = {
            user: this.authcheckUsr,
            template_id: templateId,
            form_add_dossier: this.formAddDoss,
            cred_pub_key: this.cred_pub_for_update
          };
        } else {
          var _this$allAgence3, _this$formAddDoss$age;
          endpoint = 'creditbuilder/api/v1/dosscentral-file/';
          var globalEnvEntity = _services_ebapis_service__WEBPACK_IMPORTED_MODULE_2__["default"].loadableEntity()[0].toUpperCase();
          var px = (_this$allAgence3 = this.allAgence) === null || _this$allAgence3 === void 0 || (_this$allAgence3 = _this$allAgence3.find(function (el) {
            var _el$agence2, _this14$formAddDoss$a;
            return ((_el$agence2 = el.agence) === null || _el$agence2 === void 0 || (_el$agence2 = _el$agence2.toString()) === null || _el$agence2 === void 0 ? void 0 : _el$agence2.toLowerCase()) == ((_this14$formAddDoss$a = _this14.formAddDoss.agenceBusinessUnit) === null || _this14$formAddDoss$a === void 0 || (_this14$formAddDoss$a = _this14$formAddDoss$a.trim()) === null || _this14$formAddDoss$a === void 0 || (_this14$formAddDoss$a = _this14$formAddDoss$a.toString()) === null || _this14$formAddDoss$a === void 0 ? void 0 : _this14$formAddDoss$a.toLowerCase());
          })) === null || _this$allAgence3 === void 0 ? void 0 : _this$allAgence3.code;
          if (px == undefined || !px.includes("_")) {
            var _this$allAgence4;
            px = (_this$allAgence4 = this.allAgence) === null || _this$allAgence4 === void 0 || (_this$allAgence4 = _this$allAgence4.find(function (el) {
              var _el$code2, _this14$formAddDoss$c;
              return ((_el$code2 = el.code) === null || _el$code2 === void 0 || (_el$code2 = _el$code2.toString()) === null || _el$code2 === void 0 ? void 0 : _el$code2.toLowerCase()) == ((_this14$formAddDoss$c = _this14.formAddDoss.codeagence.trim()) === null || _this14$formAddDoss$c === void 0 ? void 0 : _this14$formAddDoss$c.toLowerCase());
            })) === null || _this$allAgence4 === void 0 ? void 0 : _this$allAgence4.code;
          }
          if (px == "CFN_CG_AGENCE_PRESTIGE") {
            px = "CFN_CG_AGENCE_PRINCIPALE_CENTRE_VILLE";
          }

          // let px = this.allAgence?.find(el => el.agence == this.formAddDoss.agenceBusinessUnit.trim())?.code

          var form_add_dossier = _objectSpread(_objectSpread({}, this.formAddDoss), {}, {
            agence_native: this.formAddDoss.agence,
            agence: (_this$formAddDoss$age = this.formAddDoss.agenceBusinessUnit) === null || _this$formAddDoss$age === void 0 ? void 0 : _this$formAddDoss$age.trim(),
            codeagenceBusinessUnit: px,
            codeagence: px
          });
          option = {
            user: this.authcheckUsr,
            template_id: templateId,
            form_add_dossier: form_add_dossier,
            global_env_entity: globalEnvEntity
          };
          // console.log("options", option)
        }
        this.$axios.post(this.ebapisHost + endpoint, {
          doss_cred: option
        }).then(function (response) {
          // this.$Progress.finish();
          this.isLoading = false;
          EventBus.$emit('fetchData');
          this.formAddDoss = {
            montant: 0,
            type_de_pret: '',
            type_demande: '',
            type_de_cred: '',
            reference: '',
            indicatif: '',
            phone: '',
            email: '',
            client: '',
            pays: '',
            codeagence: '',
            agence: '',
            filiale: '',
            caf: '',
            document_client: null,
            dispatcher_info: null
          };
          if (this.entityType.toUpperCase() == "BANK") {
            this.$modal.hide("dispatc_doss_bank");
          } else {
            this.$modal.hide("dispatc_doss");
          }
          this.loadingCreateDoss = false;
          this.editFormAdd = false;
          console.log({
            response: response
          });
          this.$toasted.show("Dossier enregistré avec succès");

          // if(this.recallerRecord.length > 0){
          //     console.log("recallerRecord",this.recallerRecord)
          //     localStorage.setItem(response.data.cred_pub_key,JSON.stringify(this.recallerRecord))
          // }

          this.$axios.post(this.ebapisHost + "reportex/api/v1/start-watcher/", {
            cred_pub_key: response.data.cred_pub_key
          }).then(function (res) {
            //
            // this.$toasted.show('timesheets updated successfully')
          });
          this.pagerIncTotal = Math.ceil(this.numLoadFetcherCount / 5);
        }.bind(this))["catch"](function (error) {
          // this.$Progress.finish();
          this.isLoading = false;
          console.log(error);
        }.bind(this));
      } else {
        alert("Unauthenticated");
      }
    },
    clientSelct: function clientSelct(obj) {
      var _this15 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var _this15$allAgence;
        var response, cred_pub_key, _response, px;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _this15.formAddDoss.filiale = "";
              _this15.formAddDoss.agence = "";
              _this15.formAddDoss.caf = "";
              _this15.formAddDoss.codeagence = "";
              _this15.formAddDoss.pays = "";
              _this15.formAddDoss.num_agence = "";
              response = "";
              cred_pub_key = null;
              if (!(_this15.entityType.toUpperCase() == "BANK")) {
                _context5.next = 22;
                break;
              }
              response = {
                'nomcli': _this15.clientBank,
                'matcli': "0063582",
                'adrescli': "ABIDJAN",
                'phonecli': "",
                'site_lat': "5.2889874",
                'entite': "NSIA CIV",
                'codecaf': "NSIA005",
                'codeagence': "CFN_CIV_AGENCE_PRINCIPALE",
                'site_long': "-3.9650511",
                'pays': "CÔTE D'IVOIRE",
                'num_pays': "CÔTE D'IVOIRE",
                'num_agence': "001"
              };
              //   this.formAddDoss.agenceBusinessUnit = this.formAddDoss.agence
              _this15.formAddDoss.agenceBusinessUnit = "";
              _this15.formAddDoss.filiale = response.entite;
              _this15.formAddDoss.codeagence = response.codeagence;
              _this15.formAddDoss.agence = response.codeagence.replaceAll("_", " ");
              _this15.formAddDoss.agence = _this15.formAddDoss.agence.replace(_this15.formAddDoss.filiale, "");
              _this15.formAddDoss.caf = response.codecaf;
              _this15.formAddDoss.pays = response.num_pays;
              _this15.formAddDoss.num_pays = response.num_pays;
              _this15.formAddDoss.num_agence = response.num_agence;
              _this15.formAddDoss.client = response;
              _context5.next = 35;
              break;
            case 22:
              _context5.next = 24;
              return _this15.getInfoClient(obj.matcli);
            case 24:
              _response = _context5.sent;
              if (_response.codeagence == "CFN_CG_AGENCE_PRESTIGE") {
                _response['codeagence'] = "AGENCE_PRINCIPALE_CENTRE_VILLE";
              }
              _this15.formAddDoss.filiale = _response.entite;
              _this15.formAddDoss.codeagence = _response.codeagence;
              _this15.formAddDoss.agence = _response.codeagence.replaceAll("_", " ");
              //   this.formAddDoss.agenceBusinessUnit = this.formAddDoss.agence 
              _this15.formAddDoss.agenceBusinessUnit = "";
              _this15.formAddDoss.agence = _this15.formAddDoss.agence.replace(_this15.formAddDoss.filiale, "");
              _this15.formAddDoss.caf = _response.codecaf;
              _this15.formAddDoss.pays = _this15.list_entites[_response.entite];
              _this15.formAddDoss.num_pays = _response.num_pays;
              _this15.formAddDoss.num_agence = _response.num_agence;
            case 35:
              px = (_this15$allAgence = _this15.allAgence) === null || _this15$allAgence === void 0 || (_this15$allAgence = _this15$allAgence.find(function (el) {
                return el.code == _this15.formAddDoss.codeagence.trim();
              })) === null || _this15$allAgence === void 0 ? void 0 : _this15$allAgence.code;
              _services_credit_service__WEBPACK_IMPORTED_MODULE_3__["default"].loadenregistreur(px).then(function (res) {
                _this15.formAddDoss.dispatcher_info = res.data;
              });
            case 37:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }))();
    },
    handleInput: function handleInput() {
      var montant = this.formAddDoss.montant.toString().replace(/\s/g, '');
      var typePret = this.formAddDoss.type_de_pret;
      var typeDemande = this.formAddDoss.type_demande;
      var client = this.formAddDoss.client;
      var code = this.formAddDoss.indicatif;
      var contact = this.formAddDoss.phone;
      this.ifSubmit = !(montant > 2000 && typePret != '' && contact != '' && code != '' && typeDemande != '' && client);
    },
    handleInputFile: function handleInputFile(e) {
      var _this16 = this;
      this.ifSubmit = true;
      _services_auth_service__WEBPACK_IMPORTED_MODULE_0__["default"].loadUserData().then(function (res) {
        var user = res.data;
        var file = _this16.$refs['demandeClient'].files[0];
        var data = new FormData();
        // console.log("alert",data.getHeaders())

        data.append('user_id', user.user_id);
        data.append('file_name', 'documentClient');
        data.append('file_url', file);
        // data.append('user_id', user.user_id)fall
        data.append('entity_id', user.type_entite);
        data.append('entity_name', user.nom_entite);
        data.append('application_id', user.app_id);
        data.append('file_identity', _this16.doss_id);
        if (_this16.dossier_to_update) {
          var _this16$dossier_to_up;
          data.append('old_file', (_this16$dossier_to_up = _this16.dossier_to_update) === null || _this16$dossier_to_up === void 0 || (_this16$dossier_to_up = _this16$dossier_to_up.doss_central_file_recorder) === null || _this16$dossier_to_up === void 0 ? void 0 : _this16$dossier_to_up.document_client);
        }
        data.append('parameters', JSON.stringify({
          url: _this16.connectsHost + 'api/upload-file',
          method: 'POST'
        }));
        _this16.uploadFile(data);
      })["catch"](function (err) {
        console.log(err);
        // this.loaloadWithError(err)
      });
    },
    uploadFile: function uploadFile(data) {
      var _this17 = this;
      this.uploading = true;
      var headers = {
        'Content-Type': 'multipart/form-data'
      };
      _services_proxy_service__WEBPACK_IMPORTED_MODULE_1__["default"].proxyRequestByFormData(data, {
        callback: function callback() {}
      })
      //this.$axios.post( this.connectsHost + 'api/upload-file', data, headers)
      .then(function (res) {
        var _file$file_url;
        res.data = JSON.parse(res.data);
        var file = res.data.data;
        _this17.formAddDoss.document_client = (_file$file_url = file === null || file === void 0 ? void 0 : file.file_url) !== null && _file$file_url !== void 0 ? _file$file_url : "";
        _this17.$toasted.show(res.data.message);
        // this.ifSubmit = false
        _this17.handleInput();
        _this17.uploading = false;
      })["catch"](function (err) {
        console.log(err);
      });
    },
    detPageIndex: function detPageIndex(key) {
      this.storeInc += 1;
      return this.storeInc;
      // console.log("page", page)

      // let dossLength =  this.allDossiers.length
      // let finalIndex = (dossLength * this.pagerInc) - key
      // return finalIndex
    },
    removeKeyInDossierCredit: function removeKeyInDossierCredit(dossier) {
      var doss = {};
      var accept_cred_pub_tb_keys = ["cred_pub_tb_00", "cred_pub_tb_10001", "cred_pub_tb_30001", "cred_pub_tb_60001", "cred_pub_tb_70001", "cred_pub_tb_80001", "cred_pub_tb_90001", "cred_pub_tb_100001", "cred_pub_tb_110001", "cred_pub_tb_120001", "cred_pub_tb_130001", "cred_pub_tb_140001", "cred_pub_tb_150001", "cred_pub_tb_160001"];
      var keys_to_remove_explicitely = ["rentacred", "tableau_ponderation", "recommandations", "all_doss_to_recall"];
      for (var _i = 0, _Object$entries = Object.entries(dossier); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
          key = _Object$entries$_i[0],
          value = _Object$entries$_i[1];
        if (accept_cred_pub_tb_keys.includes(key)) {
          doss[key] = value;
        } else {
          if (key.indexOf('cred_pub_tb_') == -1) {
            doss[key] = value;
          }
        }
      }
      for (var i = 0; i < keys_to_remove_explicitely.length; i++) {
        var _key = keys_to_remove_explicitely[i];
        if (_key in doss) {
          delete doss[_key];
        }
      }

      // console.log("doss", doss)

      return doss;
    },
    loadDossRecoveryIQInstance: function loadDossRecoveryIQInstance() {
      if (this.loadRecIQinstanceBool) return;
      this.loadRecIQinstanceBool = true;
      EventBus.$emit('load-doss-recoveryiq-instance');
    },
    openFileDemande: function openFileDemande(file) {
      var _split_, _extension, _extension2;
      var split_ = file.split('.');
      var extension = (_split_ = split_[split_.length - 1]) !== null && _split_ !== void 0 ? _split_ : "";
      extension = (_extension = extension) === null || _extension === void 0 || (_extension = _extension.toString()) === null || _extension === void 0 ? void 0 : _extension.toLowerCase();
      if (extension == 'pdf') {
        this.$modal.show('pdfreader');
        EventBus.$emit('pdfreader-url-2', file);
      } else if (['jpg', 'jpeg', 'png'].includes((_extension2 = extension) === null || _extension2 === void 0 || (_extension2 = _extension2.toString()) === null || _extension2 === void 0 ? void 0 : _extension2.toLowerCase())) {
        this.$modal.show('imagereader');
        EventBus.$emit('imagereader-url-2', file);
      } else {
        var url = window.location.origin + '/file?f=' + file;
        window.open(url, '_blank');
      }
    }
  },
  watch: {
    doss: {
      handler: function handler(newVal) {
        this.dossiers = newVal;
      }
    }
  },
  computed: {
    totalAssign: function totalAssign() {
      var total = 0;
      this.analysts.forEach(function (element) {
        var _element$dossier;
        total += ((_element$dossier = element.dossier) === null || _element$dossier === void 0 ? void 0 : _element$dossier.length) || 0;
      });
      return total;
    },
    allDossiers: function allDossiers() {
      var _this18 = this;
      this.dossiers.forEach(function (element) {
        var numA = null;
        var numTe;
        var numTp;
        var numCaf;
        if (typeof element[_this18.firstPubKey] !== 'undefined') {
          var _element$_this18$firs, _element$_this18$firs6, _element$_this18$firs8, _element$_this18$firs0;
          if (!((_element$_this18$firs = element[_this18.firstPubKey]) !== null && _element$_this18$firs !== void 0 && _element$_this18$firs.montant_credit)) {
            if (element[_this18.firstPubKey].hasOwnProperty('montant_credit')) {
              for (var i = 0; i < ((_element$_this18$firs2 = element[_this18.firstPubKey]) === null || _element$_this18$firs2 === void 0 || (_element$_this18$firs2 = _element$_this18$firs2.montant_credit) === null || _element$_this18$firs2 === void 0 ? void 0 : _element$_this18$firs2.length); i++) {
                var _element$_this18$firs2, _element$_this18$firs3;
                if (!isNaN(parseInt((_element$_this18$firs3 = element[_this18.firstPubKey]) === null || _element$_this18$firs3 === void 0 ? void 0 : _element$_this18$firs3.montant_credit[i]))) {
                  if (numA == null) {
                    var _element$_this18$firs4;
                    numA = (_element$_this18$firs4 = element[_this18.firstPubKey]) === null || _element$_this18$firs4 === void 0 ? void 0 : _element$_this18$firs4.montant_credit[i];
                  } else {
                    var _element$_this18$firs5;
                    numA += (_element$_this18$firs5 = element[_this18.firstPubKey]) === null || _element$_this18$firs5 === void 0 ? void 0 : _element$_this18$firs5.montant_credit[i];
                  }
                }
              }
            }
          }
          if (!((_element$_this18$firs6 = element[_this18.firstPubKey]) !== null && _element$_this18$firs6 !== void 0 && _element$_this18$firs6.taille_entreprise)) {
            var _element$_this18$firs7;
            numTe = (_element$_this18$firs7 = element[_this18.firstPubKey]) === null || _element$_this18$firs7 === void 0 ? void 0 : _element$_this18$firs7.taille_entreprise;
          }
          if (!((_element$_this18$firs8 = element[_this18.firstPubKey]) !== null && _element$_this18$firs8 !== void 0 && _element$_this18$firs8.type_credit)) {
            var _element$_this18$firs9;
            numTp = (_element$_this18$firs9 = element[_this18.firstPubKey]) === null || _element$_this18$firs9 === void 0 ? void 0 : _element$_this18$firs9.type_credit;
          }
          if (!((_element$_this18$firs0 = element[_this18.firstPubKey]) !== null && _element$_this18$firs0 !== void 0 && _element$_this18$firs0.charge_affaire)) {
            var _element$_this18$firs1;
            numCaf = (_element$_this18$firs1 = element[_this18.firstPubKey]) === null || _element$_this18$firs1 === void 0 ? void 0 : _element$_this18$firs1.charge_affaire;
          }
        } else {
          numA = 0;
        }
        element.amountLine = numA;
        element.taille_entrepriseLine = numTe;
        element.type_pretLine = numTp;
        element.charge_affaire = numCaf;
      });
      return this.dossiers;
      // .filter(wine =>
      //     Object.values(wine).some(val =>
      //         String(val).toLowerCase().includes(this.typeSearch.toLowerCase())
      //     ) || wine.doss_central_file_recorder?.montant.replace(/\s/g, '').includes(this.typeSearch.toLowerCase())
      //     || wine.doss_central_file_recorder?.client?.nomcli.toLowerCase().includes(this.typeSearch.toLowerCase())
      //     || wine.doss_central_file_recorder?.type_demande.toLowerCase().includes(this.typeSearch.toLowerCase())
      //     || wine.doss_central_file_recorder?.type_de_pret.toLowerCase().includes(this.typeSearch.toLowerCase())
      // )
    },
    allAnalysts: function allAnalysts() {
      var _this19 = this;
      return this.analysts.filter(function (wine) {
        return Object.values(wine).some(function (val) {
          return String(val).toLowerCase().includes(_this19.searchAnalyst.toLowerCase());
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/credit/Dispatching_WORKING_ON.vue?vue&type=template&id=4b9e3402&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/credit/Dispatching_WORKING_ON.vue?vue&type=template&id=4b9e3402&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), c(GeneratorFunctionPrototype, u, GeneratorFunction.displayName = "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var render = function render() {
  var _vm$authcheckUsr, _vm$formAddDoss, _vm$formAddDoss3, _vm$infoDoss$cred_pub, _vm$infoDoss$cred_pub2, _vm$infoDoss, _vm$infoDoss2, _vm$infoDoss$cred_pub3, _vm$infoDoss$cred_pub4, _vm$infoDoss3, _vm$infoDoss4, _vm$infoDoss$cred_pub5, _vm$infoDoss$cred_pub6, _vm$infoDoss5, _vm$infoDoss6, _vm$infoDoss$cred_pub7, _vm$infoDoss$cred_pub8, _vm$infoDoss7, _vm$infoDoss8, _vm$infoDoss9, _vm$infoDoss0, _vm$infoDoss10, _vm$dossier, _vm$dossier2, _vm$dossier3;
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "row justify-content-center dispatch-board relative"
  }, [_c("table", {
    staticClass: "table"
  }, [_c("thead", {
    staticClass: "bg-ed-primary"
  }, [_c("th", {
    attrs: {
      rowspan: "7"
    }
  }, [_c("table", [_c("thead", [_c("th", {
    attrs: {
      colspan: "3"
    }
  }, [_c("h1", {
    staticStyle: {
      color: "rgb(238, 106, 0)"
    }
  }, [_vm._v(_vm._s(_vm.title))])])]), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", [_c("i", {
    staticClass: "icofont icofont-simple-left icofont-2x btn",
    staticStyle: {
      "border-radius": "5vh",
      padding: "0px"
    },
    on: {
      click: _vm.previousPage
    }
  })]), _vm._v(" "), _c("td", [_c("i", {
    staticClass: "icofont icofont-simple-right icofont-2x btn",
    staticStyle: {
      "border-radius": "5vh",
      padding: "0px"
    },
    on: {
      click: _vm.nextPage
    }
  })]), _vm._v(" "), _c("td", [_vm._v("\n                          Date d'aujourd'hui : " + _vm._s(_vm.loadDateString()) + "\n                        ")])])])])]), _vm._v(" "), _vm.listDispatcher ? _c("th", [_c("i", {
    staticClass: "icofont icofont-refresh btn",
    staticStyle: {
      "border-radius": "5vh"
    }
  }), _vm._v(" En attente "), _c("span", {
    staticClass: "badge bg-c-pink"
  }, [_vm._v(_vm._s(_vm.numLoadFetcherCount > 99 ? "99+" : _vm.numLoadFetcherCount))]), _vm._v(" "), _c("i", {
    staticClass: "icofont icofont-google-talk btn",
    staticStyle: {
      "border-radius": "5vh"
    }
  }), _vm._v(" Assignés "), _c("span", {
    staticClass: "badge bg-c-pink"
  }, [_vm._v(_vm._s(_vm.totalAssign))])]) : _c("th", [_c("i", {
    staticClass: "icofont icofont-plus btn",
    staticStyle: {
      "border-radius": "5vh"
    },
    on: {
      click: _vm.openFormAddDoss
    }
  }), _vm._v(" Ouvrir un dossier\n            "), _c("i", {
    staticClass: "icofont icofont-refresh btn",
    staticStyle: {
      "border-radius": "5vh"
    }
  }), _vm._v(" En attente "), _c("span", {
    staticClass: "badge bg-c-pink"
  }, [_vm._v(_vm._s(_vm.numLoadFetcherCount))])]), _vm._v(" "), _vm.listDispatcher ? _c("th", [_c("div", {
    staticClass: "input-group justify-content-end"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.searchAnalyst,
      expression: "searchAnalyst"
    }],
    staticClass: "form-control bg-gray border-0 shadow-none",
    staticStyle: {
      "max-width": "220px",
      border: "1px solid grey"
    },
    attrs: {
      autocomplete: "off",
      placeholder: "Recherche ...",
      type: "text"
    },
    domProps: {
      value: _vm.searchAnalyst
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.searchAnalyst = $event.target.value;
      }
    }
  }), _vm._v(" "), _vm._m(0)])]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "row",
    staticStyle: {
      "min-height": "500px"
    }
  }, [_c("div", {
    "class": {
      "col-lg-6 table-responsive": _vm.listDispatcher,
      "table-responsive col-md-12 ": !_vm.listDispatcher
    },
    staticStyle: {
      position: "relative",
      height: "500px"
    }
  }, [_c("div", {
    staticClass: "bg-light col-md-12 text-container"
  }, [_c("fieldset", [_c("legend", {
    staticClass: "p-2 d-flex justify-content-between position-sticky bg-white top-0",
    staticStyle: {
      "z-index": "2"
    }
  }, [_c("span", {
    staticClass: "col"
  }, [_vm._v("Dossiers Crédits")]), _vm._v(" "), _c("div", {
    staticClass: "input-group col"
  }, [_c("button", {
    staticClass: "input-group-text border-0",
    attrs: {
      title: "annuler la recherche"
    },
    on: {
      click: _vm.stopSearch
    }
  }, [_c("i", {
    staticClass: "icofont-close"
  })]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.typeSearch,
      expression: "typeSearch"
    }],
    staticClass: "form-control col_2 bg-gray shadow-none border-0",
    attrs: {
      name: +new Date(),
      placeholder: "Rechercher un dossier",
      type: "text"
    },
    domProps: {
      value: _vm.typeSearch
    },
    on: {
      keyup: function keyup($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
        return _vm.searchDossier.apply(null, arguments);
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.typeSearch = $event.target.value;
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "input-group-text border-0"
  }, [_vm.searchingDoss ? _c("span", {
    staticClass: "spinner-border spinner-border-sm text-orange"
  }) : _c("i", {
    staticClass: "icofont-search"
  })])])]), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered"
  }, [_vm.loadDossier === false ? _c("draggable", {
    staticClass: "d-flex flex-wrap justify-content-center",
    staticStyle: {
      width: "100%"
    },
    style: {
      cursor: _vm.isLoading ? "wait" : "move"
    },
    attrs: {
      id: "dossier",
      list: _vm.allDossiers,
      group: "people",
      sort: false,
      tag: "tbody",
      options: {
        disabled: _vm.isLoading
      }
    },
    on: {
      change: _vm.log
    }
  }, [_vm.allDossiers.length > 0 ? _vm._l(_vm.allDossiers, function (dossier, key) {
    var _dossier$memo_request, _dossier$caf_recorded, _dossier$doss_central, _dossier$_vm$firstPub, _dossier$_vm$firstPub2, _dossier$doss_central2, _dossier$doss_central3, _dossier$_vm$firstPub3, _dossier$_vm$firstPub4, _dossier$doss_central4, _dossier$doss_central5;
    return _c("div", {
      key: key,
      staticClass: "card bg-white shadow",
      staticStyle: {
        width: "120px",
        height: "218px"
      }
    }, [dossier !== null && dossier !== void 0 && (_dossier$memo_request = dossier.memo_request) !== null && _dossier$memo_request !== void 0 && _dossier$memo_request.memo_on ? _c("div", {
      staticClass: "stamp-overlay",
      on: {
        click: function click($event) {
          return _vm.doTobeDo(dossier);
        }
      }
    }, [_c("h3", {
      staticClass: "stamp stamp-45deg"
    }, [_vm._v("Memo ouvert sur ce dossier")])]) : _vm._e(), _vm._v(" "), _c("div", {
      staticClass: "card-body text-center",
      on: {
        click: function click($event) {
          return _vm.opendoss(dossier === null || dossier === void 0 ? void 0 : dossier.cred_pub_key);
        }
      }
    }, [_c("p", [_c("img", {
      attrs: {
        src: "/images/" + _vm.logo,
        width: "80",
        alt: ""
      }
    })]), _vm._v(" "), _c("p", {
      staticClass: "fw-bold m-0",
      staticStyle: {
        "font-size": "10px"
      }
    }, [_vm._v("\n                                                " + _vm._s(_vm._f("textTruncate")((dossier === null || dossier === void 0 || (_dossier$caf_recorded = dossier.caf_recorded_file) === null || _dossier$caf_recorded === void 0 || (_dossier$caf_recorded = _dossier$caf_recorded.client) === null || _dossier$caf_recorded === void 0 ? void 0 : _dossier$caf_recorded.nomcli) || (dossier === null || dossier === void 0 || (_dossier$doss_central = dossier.doss_central_file_recorder) === null || _dossier$doss_central === void 0 || (_dossier$doss_central = _dossier$doss_central.client) === null || _dossier$doss_central === void 0 ? void 0 : _dossier$doss_central.nomcli), 14)) + "\n                                            ")]), _vm._v(" "), typeof dossier[_vm.firstPubKey] !== "undefined" ? _c("span", {
      staticClass: "m-0",
      staticStyle: {
        "font-size": "9px"
      }
    }, [_vm._v("\n                                                 " + _vm._s(_vm._f("textTruncate")(((_dossier$_vm$firstPub = dossier[_vm.firstPubKey]) === null || _dossier$_vm$firstPub === void 0 ? void 0 : _dossier$_vm$firstPub.type_credit) === "" ? "Vide" : (_dossier$_vm$firstPub2 = dossier[_vm.firstPubKey]) === null || _dossier$_vm$firstPub2 === void 0 ? void 0 : _dossier$_vm$firstPub2.type_credit, 13)) + "\n                                             ")]) : _vm._e(), _vm._v(" "), !_vm.dispatchingRoles.includes(_vm.role) ? _c("p", {
      staticClass: "m-0",
      staticStyle: {
        "font-size": "10px"
      }
    }, [_vm._v("\n                                               " + _vm._s(_vm._f("textTruncate")((dossier === null || dossier === void 0 ? void 0 : dossier.doss_central_file_recorder) === "" ? "Vide" : dossier === null || dossier === void 0 || (_dossier$doss_central2 = dossier.doss_central_file_recorder) === null || _dossier$doss_central2 === void 0 ? void 0 : _dossier$doss_central2.type_demande, 14)) + "\n                                             ")]) : _c("p", {
      staticClass: "m-0",
      staticStyle: {
        "font-size": "10px"
      }
    }, [_vm._v("\n                                                 " + _vm._s(_vm._f("textTruncate")((dossier === null || dossier === void 0 ? void 0 : dossier.doss_central_file_recorder) === "" ? "Vide" : dossier === null || dossier === void 0 || (_dossier$doss_central3 = dossier.doss_central_file_recorder) === null || _dossier$doss_central3 === void 0 ? void 0 : _dossier$doss_central3.type_de_pret, 14)) + "\n                                             ")]), _vm._v(" "), typeof dossier[_vm.firstPubKey] !== "undefined" ? _c("p", {
      staticClass: "m-0",
      staticStyle: {
        color: "rgb(231, 76, 60)",
        "font-size": "10px"
      }
    }, [_vm._v(_vm._s(((_dossier$_vm$firstPub3 = dossier[_vm.firstPubKey]) === null || _dossier$_vm$firstPub3 === void 0 ? void 0 : _dossier$_vm$firstPub3.montant_credit) === "" ? "Vide" : (_dossier$_vm$firstPub4 = dossier[_vm.firstPubKey]) === null || _dossier$_vm$firstPub4 === void 0 ? void 0 : _dossier$_vm$firstPub4.montant_credit) + "\n                                             ")]) : _c("p", {
      staticClass: "m-0",
      staticStyle: {
        color: "rgb(231, 76, 60)",
        "font-size": "10px"
      }
    }, [_vm._v("\n                                                 " + _vm._s(_vm._f("formatNumber")((dossier === null || dossier === void 0 ? void 0 : dossier.doss_central_file_recorder) === "" ? "Vide" : dossier === null || dossier === void 0 || (_dossier$doss_central4 = dossier.doss_central_file_recorder) === null || _dossier$doss_central4 === void 0 ? void 0 : _dossier$doss_central4.montant)) + "\n                                             ")]), _vm._v(" "), !_vm.dispatchingRoles.includes(_vm.role) ? _c("p", {
      staticClass: "m-0"
    }, [dossier !== null && dossier !== void 0 && (_dossier$doss_central5 = dossier.doss_central_file_recorder) !== null && _dossier$doss_central5 !== void 0 && _dossier$doss_central5.document_client ? _c("span", {
      on: {
        click: function click($event) {
          var _dossier$doss_central6;
          return _vm.openFileDemande("http://" + (dossier === null || dossier === void 0 || (_dossier$doss_central6 = dossier.doss_central_file_recorder) === null || _dossier$doss_central6 === void 0 ? void 0 : _dossier$doss_central6.document_client));
        }
      }
    }, [_c("i", {
      staticClass: "icofont icofont-file-document btn icofont-2x",
      staticStyle: {
        "border-radius": "5vh"
      },
      attrs: {
        title: "Voir la demande"
      }
    })]) : _vm._e()]) : _vm._e()]), _vm._v(" "), _c("div", {
      staticClass: "card-footer bg-light position-relative"
    }, [_c("p", {
      staticClass: "m-0",
      staticStyle: {
        "font-size": "8px"
      }
    }, [_c("span", [_vm.routeOfFile ? _c("router-link", {
      staticClass: "text-orange",
      attrs: {
        title: dossier.numero_dossier,
        to: {
          name: "creation",
          params: {
            templateId: dossier.cred_pub_key
          }
        },
        target: "_blank"
      }
    }) : _c("a", {
      staticClass: "text-orange",
      attrs: {
        title: dossier.numero_dossier,
        target: "_blank"
      }
    }, [_vm._v("\n                                                      " + _vm._s(_vm._f("textTruncate")(dossier.numero_dossier, 17, "fromEnd")) + "\n                                                  ")]), _vm._v(" "), _c("br"), _c("span", {
      staticStyle: {
        "font-size": "0.8rem"
      },
      attrs: {
        title: dossier.doss_name
      }
    }, [_vm._v(_vm._s(_vm._f("textTruncate")(dossier.doss_name, 12, "fromEnd")) + " ")])], 1)]), _vm._v(" "), typeof dossier !== "undefined" ? _c("p", {
      staticClass: "m-0",
      staticStyle: {
        "font-size": "8px"
      }
    }, [_vm._v(_vm._s(dossier === null || dossier === void 0 ? void 0 : dossier.created_at) + "\n                                                "), !_vm.dispatchingRoles.includes(_vm.role) ? _c("span", {
      staticClass: "text-orange edit-mode",
      attrs: {
        title: "Modifier le dossier"
      }
    }, [_c("i", {
      staticClass: "icofont icofont-pen-alt-1 btn btn-sm rounded-pill",
      on: {
        click: function click($event) {
          return _vm.updateDossier(dossier);
        }
      }
    })]) : _vm._e()]) : _c("p", [_vm._v("---")])])]);
  }) : _vm._e(), _vm._v(" "), _vm.allDossiers.length === 0 ? _c("tr", {
    staticClass: "text-center"
  }, [_c("td", {
    attrs: {
      colspan: !_vm.dispatchingRoles.includes(_vm.role) ? 8 : 6
    }
  }, [_vm._v("Aucun dossier disponible")])]) : _vm._e()], 2) : _vm._e(), _vm._v(" "), _vm.allDossiers.length >= _vm.paginate ? _c("tbody", {
    staticClass: "position-sticky",
    staticStyle: {
      bottom: "0px"
    }
  }, [_c("tr", [_c("td", [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 shead text-center p-0 m-0"
  }, [_vm.allDossiers.length != 0 ? _c("button", {
    staticClass: "btn m-2 btn btn-block btn-sm",
    staticStyle: {
      background: "#7f8c8d",
      color: "white"
    },
    attrs: {
      disabled: _vm.loadmoreCd
    },
    on: {
      click: function click($event) {
        return _vm.loadmoreFile();
      }
    }
  }, [_vm.loadmoreCd ? _c("span", [_c("span", {
    staticClass: "spinner-border spinner-border-sm",
    attrs: {
      role: "status",
      "aria-hidden": "true"
    }
  }), _vm._v("\n                                              Chargement de plus de dossiers ...\n                                          ")]) : _c("span", [_c("i", {
    staticClass: "icofont icofont-refresh"
  }), _vm._v(" Charger plus de dossiers")])]) : _vm._e(), _vm._v(" "), _c("br")])])])])]) : _vm._e(), _vm._v(" "), _vm.loadDossier === true ? _c("tbody", [_vm._m(1)]) : _vm._e()], 1)])])]), _vm._v(" "), _vm.listDispatcher ? _c("div", {
    staticClass: "col-lg-6 text-container table-responsive",
    staticStyle: {
      position: "relative",
      height: "453px"
    }
  }, [_c("div", {
    staticClass: "text-container",
    staticStyle: {
      position: "absolute",
      width: "95%",
      height: "443px"
    }
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_c("thead", [["zAWRPBxNLAicJ778CtKd"].includes((_vm$authcheckUsr = _vm.authcheckUsr) === null || _vm$authcheckUsr === void 0 ? void 0 : _vm$authcheckUsr.role_uuid) ? [_c("tr", {
    staticClass: "position-sticky bg-white",
    staticStyle: {
      "z-index": "2",
      top: "-1px"
    }
  }, [_c("th", {
    staticClass: "d-ctr",
    on: {
      click: function click($event) {
        return _vm.setSectionToLoad();
      }
    }
  }, [_c("i", {
    staticClass: "icofont icofont-square",
    staticStyle: {
      color: "#e74c3c"
    }
  }), _vm._v(" Dispatcher à une agence \n                           ")]), _vm._v(" "), _c("th", {
    staticClass: "d-ctr",
    on: {
      click: function click($event) {
        return _vm.setSectionToLoad();
      }
    }
  }, [_c("i", {
    staticClass: "icofont icofont-square",
    staticStyle: {
      color: "#1abc9c"
    }
  }), _vm._v(" "), _vm.entityType.toUpperCase() !== "BANK" ? [_vm._v("\n                                Dispatcher à un CAF\n                             ")] : _vm._e(), _vm._v(" "), _vm.entityType.toUpperCase() == "BANK" ? [_vm._v("\n                                Dispatcher à un CC/CAE\n                             ")] : _vm._e()], 2)])] : [_c("tr", {
    staticClass: "position-sticky bg-white",
    staticStyle: {
      "z-index": "2",
      top: "-1px"
    }
  }, [_vm.entityType.toUpperCase() !== "BANK" ? _c("th", [_c("i", {
    staticClass: "icofont icofont-square",
    staticStyle: {
      color: "#ee6a00"
    }
  }), _vm._v("Créer par le Recorder\n                           ")]) : _vm._e(), _vm._v(" "), _vm.entityType.toUpperCase() === "BANK" ? _c("th", [_c("i", {
    staticClass: "icofont icofont-square",
    staticStyle: {
      color: "#ee6a00"
    }
  }), _vm._v("Créer par le CC(le chargé de la clientèle)\n                           ")]) : _vm._e(), _vm._v(" "), _vm.entityType.toUpperCase() !== "BANK" ? _c("th", [_c("i", {
    staticClass: "icofont icofont-square",
    staticStyle: {
      color: "#3498db"
    }
  }), _vm._v("Créer par le CAF\n                           ")]) : _vm._e(), _vm._v(" "), _vm.entityType.toUpperCase() === "BANK" ? _c("th", [_c("i", {
    staticClass: "icofont icofont-square",
    staticStyle: {
      color: "#3498db"
    }
  }), _vm._v("Créer par le CAE\n                           ")]) : _vm._e()])]], 2), _vm._v(" "), _vm.loadingAnalyst == false ? _c("tbody", [_vm._l(_vm.allAnalysts, function (analyst, key) {
    var _analyst$role$, _analyst$dossier, _analyst$dossier2, _analyst$dossier3, _analyst$dossier4, _analyst$dossier5;
    return _c("tr", {
      key: analyst.name + Math.random()
    }, [_c("td", {
      attrs: {
        colspan: "3"
      }
    }, [_c("div", {
      staticClass: "row p-0 m-0"
    }, [_c("div", {
      staticClass: "col-4 d-flex justify-content-center",
      staticStyle: {
        position: "relative"
      }
    }, [_c("div", {
      staticClass: "row"
    }, [_c("span", {
      staticClass: "text-center p-2",
      staticStyle: {
        "border-radius": "80px",
        width: "40px",
        height: "40px",
        "margin-left": "15px",
        "padding-top": "2px",
        "box-shadow": "0px 0px 5px 0px grey"
      }
    }, [_vm._v("\n                                            " + _vm._s(_vm.textTruncate(analyst.name[0])) + "\n                                        ")]), _vm._v(" "), _c("span", [_c("button", {
      staticClass: "btn m-2 btn btn-block btn-sm",
      staticStyle: {
        background: "#ee6a00",
        color: "white",
        cursor: "pointer"
      },
      on: {
        click: function click($event) {
          return _vm.loadMoreDoss(analyst === null || analyst === void 0 ? void 0 : analyst.id);
        }
      }
    }, [_vm.loadmoreDoss == (analyst === null || analyst === void 0 ? void 0 : analyst.id) ? _c("span", [_c("span", {
      staticClass: "spinner-border spinner-border-sm",
      attrs: {
        role: "status",
        "aria-hidden": "true"
      }
    })]) : _c("span", [_c("i", {
      staticClass: "icofont icofont-refresh"
    })])])])]), _vm._v(" "), _c("div", {
      staticClass: "row m-0"
    }, [_c("span", {
      staticClass: "user-name mx-2 d-inline-block h-25"
    }, [["qkNfidHsRXEoeQnpLTH4"].includes(_vm.role) ? _c("span", [_vm._v(_vm._s(analyst === null || analyst === void 0 || (_analyst$role$ = analyst.role[0]) === null || _analyst$role$ === void 0 ? void 0 : _analyst$role$.display_name))]) : _c("span", [_vm._v(_vm._s(_vm.labelAssign) + " " + _vm._s(key + 1))]), _vm._v(" "), _vm.status(analyst === null || analyst === void 0 || (_analyst$dossier = analyst.dossier) === null || _analyst$dossier === void 0 ? void 0 : _analyst$dossier.length) === "available" ? _c("span", {
      staticClass: "bg-success status"
    }) : _vm.status(analyst === null || analyst === void 0 || (_analyst$dossier2 = analyst.dossier) === null || _analyst$dossier2 === void 0 ? void 0 : _analyst$dossier2.length) === "middle" ? _c("span", {
      staticClass: "bg-primary status"
    }) : _vm.status(analyst === null || analyst === void 0 || (_analyst$dossier3 = analyst.dossier) === null || _analyst$dossier3 === void 0 ? void 0 : _analyst$dossier3.length) === "unavailable" ? _c("span", {
      staticClass: "bg-danger status"
    }) : _vm._e(), _vm._v(" "), _c("span", {
      staticClass: "time mx-2 d-inline-block h-25"
    }, [_vm._v(_vm._s(analyst.name) + " "), _c("br"), _vm._v(" " + _vm._s(_vm.totalAssign !== 0 ? Number(((analyst === null || analyst === void 0 || (_analyst$dossier4 = analyst.dossier) === null || _analyst$dossier4 === void 0 ? void 0 : _analyst$dossier4.length) || 0) / _vm.totalAssign * 100).toFixed(0) : 0) + " %\n                                        ")])])])]), _vm._v(" "), _c("div", {
      staticClass: "col-8 p-2 bg-light rounded"
    }, [(((_analyst$dossier5 = analyst.dossier) === null || _analyst$dossier5 === void 0 ? void 0 : _analyst$dossier5.length) || 0) > 0 ? _c("draggable", {
      staticClass: "row px-2",
      staticStyle: {
        "min-height": "95px"
      },
      style: {
        cursor: _vm.isLoading ? "wait" : "move"
      },
      attrs: {
        id: "analyst-" + key,
        list: analyst.dossier,
        move: _vm.moving,
        group: "people",
        options: {
          disabled: _vm.isLoading
        },
        tag: "tbody"
      }
    }, _vm._l(analyst.dossier, function (dos) {
      var _dos$cred_pub_tb_, _dos$cred_pub_tb_2, _dos$cred_pub_tb_3, _dos$cred_pub_tb_4, _dos$doss_central_fil, _dos$doss_central_fil2;
      return _c("div", {
        key: JSON.stringify(dos),
        staticClass: "col-3 px-2 border text-center rounded",
        "class": {
          "my-file": !!dos.doss_central_file_recorder || dos.categorie_client == "Retail",
          dos: !dos.doss_central_file_recorder || dos.categorie_client == "Corporate",
          "border border-3 border-danger": _vm.onFocused == dos
        },
        on: {
          dblclick: function dblclick($event) {
            return _vm.openMoreDossier(dos);
          }
        }
      }, [_c("span", {
        staticStyle: {
          "font-size": "12px"
        }
      }, [_vm._v("\n                                              " + _vm._s(_vm._f("textTruncate")(dos.numero_dossier, 6, "fromEnd")) + " "), _c("br"), _vm._v(" "), !dos.hasOwnProperty("doss_central_file_recorder") ? _c("span", {
        staticStyle: {
          "font-size": "0.7rem"
        },
        attrs: {
          title: dos.hasOwnProperty("cred_pub_tb_00") ? ((_dos$cred_pub_tb_ = dos.cred_pub_tb_00) === null || _dos$cred_pub_tb_ === void 0 ? void 0 : _dos$cred_pub_tb_.denomination_client) !== "" ? (_dos$cred_pub_tb_2 = dos.cred_pub_tb_00) === null || _dos$cred_pub_tb_2 === void 0 ? void 0 : _dos$cred_pub_tb_2.denomination_client : dos.doss_name : dos.doss_name
        }
      }, [_vm._v(_vm._s(_vm._f("textTruncate")(dos.hasOwnProperty("cred_pub_tb_00") ? ((_dos$cred_pub_tb_3 = dos.cred_pub_tb_00) === null || _dos$cred_pub_tb_3 === void 0 ? void 0 : _dos$cred_pub_tb_3.denomination_client) !== "" ? (_dos$cred_pub_tb_4 = dos.cred_pub_tb_00) === null || _dos$cred_pub_tb_4 === void 0 ? void 0 : _dos$cred_pub_tb_4.denomination_client : dos.doss_name : dos.doss_name, 15)) + " ")]) : _c("span", {
        staticStyle: {
          "font-size": "0.7rem"
        },
        attrs: {
          title: dos === null || dos === void 0 || (_dos$doss_central_fil = dos.doss_central_file_recorder) === null || _dos$doss_central_fil === void 0 ? void 0 : _dos$doss_central_fil.client.nomcli
        }
      }, [_vm._v(_vm._s(_vm._f("textTruncate")(dos === null || dos === void 0 || (_dos$doss_central_fil2 = dos.doss_central_file_recorder) === null || _dos$doss_central_fil2 === void 0 ? void 0 : _dos$doss_central_fil2.client.nomcli, 15)) + " ")])])]);
    }), 0) : _c("draggable", {
      staticClass: "row",
      staticStyle: {
        "min-height": "95px",
        cursor: "move"
      },
      attrs: {
        id: "analyst-" + key,
        list: analyst.dossier,
        move: _vm.moving,
        group: "people",
        tag: "tbody"
      }
    }, [_c("div", {
      staticClass: "row align-content-center text-center"
    }, [_c("span", {
      staticClass: "text-muted"
    }, [_vm._v("Glissez/Déposez le dossier ici ...")])])])], 1)])])]);
  }), _vm._v(" "), _c("tr", {}, [_c("td", {
    staticClass: "text-center fw-bold",
    attrs: {
      colspan: "2"
    }
  }, [_c("button", {
    staticClass: "btn m-2 btn btn-block btn-sm",
    staticStyle: {
      background: "#7f8c8d",
      color: "white",
      cursor: "pointer"
    },
    on: {
      click: _vm.loadMoreCAF
    }
  }, [_vm.loadmore ? _c("span", [_c("span", {
    staticClass: "spinner-border spinner-border-sm",
    attrs: {
      role: "status",
      "aria-hidden": "true"
    }
  }), _vm._v("\n                                    Chargement ...\n                                ")]) : _c("span", [_c("i", {
    staticClass: "icofont icofont-refresh"
  }), _vm._v(" Charger plus ")])])])])], 2) : _c("tbody", [_vm._m(2)])])])]) : _vm._e()]), _vm._v(" "), _c("modal", {
    staticClass: "pb-5",
    attrs: {
      name: "dispatc_doss_bank",
      width: 600,
      height: "auto",
      adaptive: true,
      resizable: true
    }
  }, [_c("div", {
    staticClass: "container py-3 mb-2",
    staticStyle: {
      "max-height": "80vh",
      overflow: "auto"
    }
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("form", [_c("fieldset", {
    staticClass: "p-2"
  }, [_vm.editFormAdd ? _c("legend", [_vm._v("Modifier le dossier")]) : _c("legend", [_vm._v("Ouvrir un dossier")]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "mb-3 col-6"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Type de demande")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formAddDoss.type_demande,
      expression: "formAddDoss.type_demande"
    }],
    staticClass: "form-select single-select",
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formAddDoss, "type_demande", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.handleInput]
    }
  }, [_c("option", {
    attrs: {
      disabled: "",
      selected: "",
      value: ""
    }
  }, [_vm._v("\n                                        -- Sélectionner la demande --\n                                    ")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Première demande"
    }
  }, [_vm._v("Première demande")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Renouvellement"
    }
  }, [_vm._v("Renouvellement")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Restructuration"
    }
  }, [_vm._v("Restructuration")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Modification"
    }
  }, [_vm._v("Modification")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Modification"
    }
  }, [_vm._v("Report d'échéance")])])]), _vm._v(" "), _c("div", {
    staticClass: "mb-3 col-6"
  }, [_c("label", [_vm._v("\n                                    Type de prêt / Template"), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formAddDoss.type_de_pret,
      expression: "formAddDoss.type_de_pret"
    }],
    staticClass: "form-select single-select",
    attrs: {
      id: "type_credit"
    },
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formAddDoss, "type_de_pret", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.handleInput]
    }
  }, [_c("option", {
    attrs: {
      disabled: "",
      selected: "",
      value: ""
    }
  }, [_vm._v("\n                                        --- Sélectionner le crédit --\n                                    ")]), _vm._v(" "), _vm._l(_vm.credits, function (credit) {
    return _c("option", {
      key: credit.libelle,
      domProps: {
        value: credit.libelle
      }
    }, [_vm._v(_vm._s(credit.libelle))]);
  })], 2)]), _vm._v(" "), _c("div", {
    staticClass: "mb-3 col-6"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("\n                                    Montant demandé"), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]), _vm._v(" "), _c("currency-input2", {
    attrs: {
      "default-typing": false
    },
    on: {
      input: _vm.handleInput
    },
    model: {
      value: _vm.formAddDoss.montant,
      callback: function callback($$v) {
        _vm.$set(_vm.formAddDoss, "montant", $$v);
      },
      expression: "formAddDoss.montant"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "mb-3 col-6"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Nom du client/Matricule"), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.clientBank,
      expression: "clientBank"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.clientBank
    },
    on: {
      change: _vm.clientSelct,
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.clientBank = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "mb-3 col-12"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-3"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("\n                                            Code"), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]), _vm._v(" "), _c("Multiselect", {
    attrs: {
      searchable: true,
      trackBy: "name",
      label: "name",
      "value-prop": "phonecode",
      classes: {
        optionPointed: "text-gray-800 bg-gray-100"
      },
      options: _vm.countries
    },
    scopedSlots: _vm._u([{
      key: "option",
      fn: function fn(_ref) {
        var option = _ref.option,
          isPointed = _ref.isPointed;
        return [_c("p", {
          staticClass: "multiselect-option"
        }, [_vm._v(_vm._s(option.name))])];
      }
    }, {
      key: "singlelabel",
      fn: function fn(_ref2) {
        var value = _ref2.value;
        return [_c("p", {
          staticClass: "multiselect-single-label"
        }, [_vm._v(_vm._s(value.phonecode))])];
      }
    }]),
    model: {
      value: _vm.formAddDoss.indicatif,
      callback: function callback($$v) {
        _vm.$set(_vm.formAddDoss, "indicatif", $$v);
      },
      expression: "formAddDoss.indicatif"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-9"
  }, [_c("label", [_vm._v("\n                                            Contact ("), _c("span", {
    staticStyle: {
      color: "green",
      "font-size": "0.7rem"
    }
  }, [_vm._v("WhatsApp")]), _vm._v(")"), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formAddDoss.phone,
      expression: "formAddDoss.phone"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number"
    },
    domProps: {
      value: _vm.formAddDoss.phone
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formAddDoss, "phone", $event.target.value);
      }, _vm.handleInput]
    }
  })])])]), _vm._v(" "), _c("div", {
    staticClass: "mb-3 col-5"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("\n                                    E-mail"), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formAddDoss.email,
      expression: "formAddDoss.email"
    }],
    staticClass: "form-control",
    attrs: {
      type: "email"
    },
    domProps: {
      value: _vm.formAddDoss.email
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formAddDoss, "email", $event.target.value);
      }, _vm.handleInput]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "mb-3 col-7"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Demande du client")]), _vm._v(" "), _vm.formAddDoss.document_client ? _c("div", [(_vm$formAddDoss = _vm.formAddDoss) !== null && _vm$formAddDoss !== void 0 && _vm$formAddDoss.document_client ? _c("span", {
    on: {
      click: function click($event) {
        var _vm$formAddDoss2;
        return _vm.openFileDemande("http://" + ((_vm$formAddDoss2 = _vm.formAddDoss) === null || _vm$formAddDoss2 === void 0 ? void 0 : _vm$formAddDoss2.document_client));
      }
    }
  }, [_c("i", {
    staticClass: "icofont icofont-file-document btn icofont-2x",
    staticStyle: {
      "border-radius": "5vh"
    },
    attrs: {
      title: "Voir la demande"
    }
  })]) : _vm._e(), _vm._v(" "), _c("i", {
    staticClass: "icofont icofont-pen-alt-1 btn btn-sm rounded-pill",
    attrs: {
      title: "Modifier la demande"
    },
    on: {
      click: function click($event) {
        _vm.formAddDoss.document_client = "";
      }
    }
  })]) : _c("input", {
    ref: "demandeClient",
    staticClass: "form-control",
    attrs: {
      type: "file"
    },
    on: {
      change: _vm.handleInputFile
    }
  }), _vm._v(" "), _c("small", {
    staticClass: "text-danger"
  }, [_vm._v("Accepté: taille maxi: 2Mo, ")]), _vm._v(" "), _c("small", {
    staticClass: "text-danger"
  }, [_vm._v("Type: ('doc', 'docx', 'xlsx', 'xls', 'ppt', 'pptx', 'pdf')")])]), _vm._v(" "), _c("div", {
    staticClass: "mb-3 col-3"
  }, [_c("label", {
    attrs: {
      "for": "filiale"
    }
  }, [_vm._v("Code filiale")]), _vm._v(" "), _c("input", {
    staticClass: "form-control",
    attrs: {
      disabled: "",
      required: "",
      type: "text",
      id: "filiale"
    },
    domProps: {
      value: _vm.formAddDoss.filiale
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "mb-3 col-6"
  }, [_c("label", {
    attrs: {
      "for": "agence"
    }
  }, [_vm._v("Agence")]), _vm._v(" "), _c("input", {
    staticClass: "form-control",
    attrs: {
      disabled: "",
      required: "",
      type: "text",
      title: _vm.formAddDoss.agence
    },
    domProps: {
      value: _vm.formAddDoss.agence
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "mb-3 col-3"
  }, [_c("label", {
    attrs: {
      "for": "taux_credit"
    }
  }, [_vm._v("Code CAF")]), _vm._v(" "), _c("input", {
    staticClass: "form-control",
    attrs: {
      disabled: "",
      required: "",
      type: "text",
      id: "caf"
    },
    domProps: {
      value: _vm.formAddDoss.caf
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "my-3 col-7"
  }, [_c("button", {
    staticClass: "btn btn-orange",
    attrs: {
      type: "button",
      disabled: _vm.loadingCreateDoss || _vm.ifSubmit
    },
    on: {
      click: _vm.startCreating
    }
  }, [_vm.loadingCreateDoss ? _c("span", [_c("span", {
    staticClass: "spinner-border spinner-border-sm",
    attrs: {
      role: "status",
      "aria-hidden": "true"
    }
  }), _vm._v("\n                                        Loading...\n                                    ")]) : _c("span", [_vm.editFormAdd ? _c("span", [_vm._v("Modifer")]) : _c("span", [_vm.uploading ? _c("span", [_vm._v("\n                                            Upload en cours ...\n                                          ")]) : _c("span", [_vm._v("\n                                            Ouvrir\n                                          ")])])])])])])])])])])]), _vm._v(" "), _c("modal", {
    staticClass: "pb-5",
    attrs: {
      name: "dispatc_doss",
      width: 600,
      height: "auto",
      adaptive: true,
      resizable: true
    }
  }, [_c("div", {
    staticClass: "container py-3 mb-2",
    staticStyle: {
      "max-height": "80vh",
      overflow: "auto"
    }
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("form", [_c("fieldset", {
    staticClass: "p-2"
  }, [_vm.editFormAdd ? _c("legend", [_vm._v("Modifier le dossier")]) : _c("div", {
    staticClass: "d-flex justify-content-between"
  }, [_c("div", [_c("b", [_vm._v("Ouvrir un dossier")])]), _vm._v(" "), _vm.appEnviron === "production" ? _c("div", [_c("button", {
    staticClass: "btn",
    staticStyle: {
      "background-color": "gray !important",
      color: "white"
    },
    attrs: {
      type: "button",
      title: "Créer un nouveau client",
      disabled: _vm.loadingCreateDoss && !_vm.ifSubmit
    },
    on: {
      click: _vm.openAddNewClientModal
    }
  }, [_c("user-plus-icon", {
    attrs: {
      size: "20"
    }
  })], 1)]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "mb-3 col-6"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Type de demande")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formAddDoss.type_demande,
      expression: "formAddDoss.type_demande"
    }],
    staticClass: "form-select single-select",
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formAddDoss, "type_demande", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.handleInput]
    }
  }, [_c("option", {
    attrs: {
      disabled: "",
      selected: "",
      value: ""
    }
  }, [_vm._v("\n                                        -- Sélectionner la demande --\n                                    ")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Première demande"
    }
  }, [_vm._v("Première demande")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Renouvellement"
    }
  }, [_vm._v("Renouvellement")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Restructuration"
    }
  }, [_vm._v("Restructuration")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Modification"
    }
  }, [_vm._v("Modification")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Modification"
    }
  }, [_vm._v("Report d'échéance")])])]), _vm._v(" "), _c("div", {
    staticClass: "mb-3 col-6"
  }, [_c("label", [_vm._v("\n                                    Type de prêt / Template"), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formAddDoss.type_de_pret,
      expression: "formAddDoss.type_de_pret"
    }],
    staticClass: "form-select single-select",
    attrs: {
      id: "type_credit"
    },
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formAddDoss, "type_de_pret", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.handleInput]
    }
  }, [_c("option", {
    attrs: {
      disabled: "",
      selected: "",
      value: ""
    }
  }, [_vm._v("\n                                        --- Sélectionner le crédit --\n                                    ")]), _vm._v(" "), _vm._l(_vm.credits, function (credit) {
    return _c("option", {
      key: credit.libelle,
      domProps: {
        value: credit.libelle
      }
    }, [_vm._v(_vm._s(credit.libelle))]);
  })], 2)]), _vm._v(" "), _c("div", {
    staticClass: "mb-3 col-6"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("\n                                    Montant demandé"), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]), _vm._v(" "), _c("currency-input2", {
    attrs: {
      "default-typing": false
    },
    on: {
      input: _vm.handleInput
    },
    model: {
      value: _vm.formAddDoss.montant,
      callback: function callback($$v) {
        _vm.$set(_vm.formAddDoss, "montant", $$v);
      },
      expression: "formAddDoss.montant"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "mb-3 col-6"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Nom du client/Matricule"), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]), _vm._v(" "), _c("Multiselect", {
    attrs: {
      searchable: true,
      "resolve-on-load": false,
      object: true,
      delay: 0,
      "min-chars": 1,
      trackBy: "slug",
      label: "nomcli",
      "value-prop": "matcli",
      classes: {
        optionPointed: "text-gray-800 bg-gray-100"
      },
      options: function () {
        var _options = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(query) {
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _vm.fetchClients(query);
              case 2:
                return _context.abrupt("return", _context.sent);
              case 3:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));
        function options(_x) {
          return _options.apply(this, arguments);
        }
        return options;
      }()
    },
    on: {
      change: _vm.clientSelct
    },
    scopedSlots: _vm._u([{
      key: "option",
      fn: function fn(_ref3) {
        var option = _ref3.option;
        return [_c("p", {
          staticClass: "multiselect-option"
        }, [_vm._v(_vm._s(option.nomcli) + " - " + _vm._s(option.matcli))])];
      }
    }, {
      key: "singlelabel",
      fn: function fn(_ref4) {
        var value = _ref4.value;
        return [_c("p", {
          staticClass: "multiselect-single-label"
        }, [_vm._v(_vm._s(value.nomcli.length < 27 ? value.nomcli : value.nomcli.substring(0, 24) + "..."))])];
      }
    }]),
    model: {
      value: _vm.formAddDoss.client,
      callback: function callback($$v) {
        _vm.$set(_vm.formAddDoss, "client", $$v);
      },
      expression: "formAddDoss.client"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "mb-3 col-12"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-3"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("\n                                            Code"), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]), _vm._v(" "), _c("Multiselect", {
    attrs: {
      searchable: true,
      trackBy: "name",
      label: "name",
      "value-prop": "phonecode",
      classes: {
        optionPointed: "text-gray-800 bg-gray-100"
      },
      options: _vm.countries
    },
    scopedSlots: _vm._u([{
      key: "option",
      fn: function fn(_ref5) {
        var option = _ref5.option;
        return [_c("p", {
          staticClass: "multiselect-option"
        }, [_vm._v(_vm._s(option.name))])];
      }
    }, {
      key: "singlelabel",
      fn: function fn(_ref6) {
        var value = _ref6.value;
        return [_c("p", {
          staticClass: "multiselect-single-label"
        }, [_vm._v(_vm._s(value.phonecode))])];
      }
    }]),
    model: {
      value: _vm.formAddDoss.indicatif,
      callback: function callback($$v) {
        _vm.$set(_vm.formAddDoss, "indicatif", $$v);
      },
      expression: "formAddDoss.indicatif"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-9"
  }, [_c("label", [_vm._v("\n                                            Contact ("), _c("span", {
    staticStyle: {
      color: "green",
      "font-size": "0.7rem"
    }
  }, [_vm._v("WhatsApp")]), _vm._v(")"), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formAddDoss.phone,
      expression: "formAddDoss.phone"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number"
    },
    domProps: {
      value: _vm.formAddDoss.phone
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formAddDoss, "phone", $event.target.value);
      }, _vm.handleInput]
    }
  })])])]), _vm._v(" "), _c("div", {
    staticClass: "mb-3 col-5"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("\n                                    E-mail"), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formAddDoss.email,
      expression: "formAddDoss.email"
    }],
    staticClass: "form-control",
    attrs: {
      type: "email"
    },
    domProps: {
      value: _vm.formAddDoss.email
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formAddDoss, "email", $event.target.value);
      }, _vm.handleInput]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "mb-3 col-7"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Demande du client")]), _vm._v(" "), _vm.formAddDoss.document_client ? _c("div", [(_vm$formAddDoss3 = _vm.formAddDoss) !== null && _vm$formAddDoss3 !== void 0 && _vm$formAddDoss3.document_client ? _c("span", {
    on: {
      click: function click($event) {
        var _vm$formAddDoss4;
        return _vm.openFileDemande("http://" + ((_vm$formAddDoss4 = _vm.formAddDoss) === null || _vm$formAddDoss4 === void 0 ? void 0 : _vm$formAddDoss4.document_client));
      }
    }
  }, [_c("i", {
    staticClass: "icofont icofont-file-document btn icofont-2x",
    staticStyle: {
      "border-radius": "5vh"
    },
    attrs: {
      title: "Voir la demande"
    }
  })]) : _vm._e(), _vm._v(" "), _c("i", {
    staticClass: "icofont icofont-pen-alt-1 btn btn-sm rounded-pill",
    attrs: {
      title: "Modifier la demande"
    },
    on: {
      click: function click($event) {
        _vm.formAddDoss.document_client = "";
      }
    }
  })]) : _c("input", {
    ref: "demandeClient",
    staticClass: "form-control",
    attrs: {
      type: "file"
    },
    on: {
      change: _vm.handleInputFile
    }
  }), _vm._v(" "), _c("small", {
    staticClass: "text-danger"
  }, [_vm._v("Accepté: taille maxi: 2Mo, ")]), _vm._v(" "), _c("small", {
    staticClass: "text-danger"
  }, [_vm._v("Type: ('doc', 'docx', 'xlsx', 'xls', 'ppt', 'pptx', 'pdf')")])]), _vm._v(" "), _c("div", {
    staticClass: "mb-3 col-4"
  }, [_c("label", {
    attrs: {
      "for": "filiale"
    }
  }, [_vm._v("Code filiale")]), _vm._v(" "), _c("input", {
    staticClass: "form-control",
    attrs: {
      disabled: "",
      required: "",
      type: "text",
      id: "filiale"
    },
    domProps: {
      value: _vm.formAddDoss.filiale
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "mb-3 col-8"
  }, [_c("label", {
    attrs: {
      "for": "agence"
    }
  }, [_vm._v("Agence Native")]), _vm._v(" "), _c("input", {
    staticClass: "form-control",
    attrs: {
      disabled: "",
      required: "",
      type: "text",
      title: _vm.formAddDoss.agence
    },
    domProps: {
      value: _vm.formAddDoss.agence
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "mb-3 col-4"
  }, [_c("label", {
    attrs: {
      "for": "taux_credit"
    }
  }, [_vm._v("Code CAF")]), _vm._v(" "), _c("input", {
    staticClass: "form-control",
    attrs: {
      disabled: "",
      required: "",
      type: "text",
      id: "caf"
    },
    domProps: {
      value: _vm.formAddDoss.caf
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "mb-3 col-8"
  }, [_c("label", {
    attrs: {
      "for": "agence"
    }
  }, [_vm._v("Agence / Business Unit")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formAddDoss.agenceBusinessUnit,
      expression: "formAddDoss.agenceBusinessUnit"
    }],
    staticClass: "form-control",
    attrs: {
      title: _vm.formAddDoss.agenceBusinessUnit
    },
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formAddDoss, "agenceBusinessUnit", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, function ($event) {
        return _vm.changeIcommingAgence();
      }]
    }
  }, [_c("option", {
    domProps: {
      value: ""
    }
  }), _vm._v(" "), _c("option", {
    domProps: {
      value: _vm.formAddDoss.agenceBusinessUnit
    }
  }, [_vm._v(_vm._s(_vm.formAddDoss.agenceBusinessUnit))]), _vm._v(" "), _vm._l(_vm.allAgence, function (el, index) {
    return _c("option", {
      key: index,
      domProps: {
        value: el.agence
      }
    }, [_vm._v(_vm._s(el.agence))]);
  })], 2)]), _vm._v(" "), _c("div", {
    staticClass: "my-3 col-7"
  }, [_c("button", {
    staticClass: "btn btn-orange",
    attrs: {
      type: "button",
      disabled: _vm.loadingCreateDoss || _vm.ifSubmit
    },
    on: {
      click: _vm.startCreating
    }
  }, [_vm.loadingCreateDoss ? _c("span", [_c("span", {
    staticClass: "spinner-border spinner-border-sm",
    attrs: {
      role: "status",
      "aria-hidden": "true"
    }
  }), _vm._v("\n                                        Loading...\n                                    ")]) : _c("span", [_vm.editFormAdd ? _c("span", [_vm._v("Modifer")]) : _c("span", [_vm.uploading ? _c("span", [_vm._v("\n                                            Upload en cours ...\n                                          ")]) : _c("span", [_vm._v("\n                                            Ouvrir\n                                          ")])])])])])])])])])])]), _vm._v(" "), _c("modal", {
    staticClass: "pb-5",
    attrs: {
      name: "more_info_doss",
      width: 400,
      height: "auto",
      adaptive: true,
      resizable: true
    },
    on: {
      closed: function closed($event) {
        _vm.onFocused = "";
      }
    }
  }, [_c("div", {
    staticClass: "container py-3 mb-2",
    staticStyle: {
      "max-height": "80vh",
      overflow: "auto"
    }
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("form", [_c("fieldset", {
    staticClass: "p-2"
  }, [_c("legend", [_vm._v("Information du dossier")]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("table", {
    staticClass: "table table-bordered mb-3 mb-2"
  }, [_c("thead", {
    staticClass: "bg-ed-primary"
  }, [_c("tr", {
    staticClass: "bg-grey"
  }, [_c("th", {
    staticStyle: {
      "text-align": "center"
    },
    attrs: {
      colspan: "7"
    }
  }, [_vm._v("INFORMATION")])])]), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", {
    staticClass: "col-3 bg-grey"
  }, [_vm._v("Numéro")]), _vm._v(" "), _c("td", {
    staticClass: "col-9"
  }, [_vm._v("\n                                        " + _vm._s(_vm.infoDoss.numero_dossier) + "\n                                    ")])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "col-3 bg-grey"
  }, [_vm._v("Type de demande")]), _vm._v(" "), _c("td", {
    staticClass: "col-9"
  }, [typeof _vm.infoDoss["cred_pub_tb_00"] !== "undefined" ? _c("span", [_vm._v("\n                                            " + _vm._s(((_vm$infoDoss$cred_pub = _vm.infoDoss["cred_pub_tb_00"]) === null || _vm$infoDoss$cred_pub === void 0 ? void 0 : _vm$infoDoss$cred_pub.type_demande) === "" ? "Vide" : (_vm$infoDoss$cred_pub2 = _vm.infoDoss["cred_pub_tb_00"]) === null || _vm$infoDoss$cred_pub2 === void 0 ? void 0 : _vm$infoDoss$cred_pub2.type_demande) + "\n                                        ")]) : typeof _vm.infoDoss["doss_central_file_recorder"] !== "undefined" ? _c("span", [_vm._v("\n                                            " + _vm._s(((_vm$infoDoss = _vm.infoDoss) === null || _vm$infoDoss === void 0 ? void 0 : _vm$infoDoss.doss_central_file_recorder) === "" ? "Vide" : (_vm$infoDoss2 = _vm.infoDoss) === null || _vm$infoDoss2 === void 0 || (_vm$infoDoss2 = _vm$infoDoss2.doss_central_file_recorder) === null || _vm$infoDoss2 === void 0 ? void 0 : _vm$infoDoss2.type_demande) + "\n                                        ")]) : _c("span", [_vm._v("\n                                            Vide\n                                        ")])])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "col-3 bg-grey"
  }, [_vm._v("Type de crédit")]), _vm._v(" "), _c("td", {
    staticClass: "col-9"
  }, [typeof _vm.infoDoss["cred_pub_tb_00"] !== "undefined" ? _c("span", [_vm._v("\n                                            " + _vm._s(((_vm$infoDoss$cred_pub3 = _vm.infoDoss["cred_pub_tb_00"]) === null || _vm$infoDoss$cred_pub3 === void 0 ? void 0 : _vm$infoDoss$cred_pub3.type_credit) === "" ? "Vide" : (_vm$infoDoss$cred_pub4 = _vm.infoDoss["cred_pub_tb_00"]) === null || _vm$infoDoss$cred_pub4 === void 0 ? void 0 : _vm$infoDoss$cred_pub4.type_credit) + "\n                                        ")]) : typeof _vm.infoDoss["doss_central_file_recorder"] !== "undefined" ? _c("span", [_vm._v("\n                                            " + _vm._s(((_vm$infoDoss3 = _vm.infoDoss) === null || _vm$infoDoss3 === void 0 ? void 0 : _vm$infoDoss3.doss_central_file_recorder) === "" ? "Vide" : (_vm$infoDoss4 = _vm.infoDoss) === null || _vm$infoDoss4 === void 0 || (_vm$infoDoss4 = _vm$infoDoss4.doss_central_file_recorder) === null || _vm$infoDoss4 === void 0 ? void 0 : _vm$infoDoss4.type_de_pret) + "\n                                        ")]) : _c("span", [_vm._v("\n                                            Vide\n                                        ")])])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "col-3 bg-grey"
  }, [_vm._v("Montant")]), _vm._v(" "), _c("td", {
    staticClass: "col-9"
  }, [typeof _vm.infoDoss["cred_pub_tb_00"] !== "undefined" ? _c("span", [_vm._v("\n                                            " + _vm._s(_vm._f("formatNumber")(((_vm$infoDoss$cred_pub5 = _vm.infoDoss["cred_pub_tb_00"]) === null || _vm$infoDoss$cred_pub5 === void 0 ? void 0 : _vm$infoDoss$cred_pub5.montant_sollicite) === "" ? "Vide" : (_vm$infoDoss$cred_pub6 = _vm.infoDoss["cred_pub_tb_00"]) === null || _vm$infoDoss$cred_pub6 === void 0 ? void 0 : _vm$infoDoss$cred_pub6.montant_sollicite)) + "\n                                        ")]) : typeof _vm.infoDoss["doss_central_file_recorder"] !== "undefined" ? _c("span", [_vm._v("\n                                            " + _vm._s(_vm._f("formatNumber")(((_vm$infoDoss5 = _vm.infoDoss) === null || _vm$infoDoss5 === void 0 ? void 0 : _vm$infoDoss5.doss_central_file_recorder) === "" ? "Vide" : (_vm$infoDoss6 = _vm.infoDoss) === null || _vm$infoDoss6 === void 0 || (_vm$infoDoss6 = _vm$infoDoss6.doss_central_file_recorder) === null || _vm$infoDoss6 === void 0 ? void 0 : _vm$infoDoss6.montant)) + "\n                                        ")]) : _c("span", [_vm._v("\n                                            Vide\n                                        ")])])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "col-3 bg-grey"
  }, [_vm._v("Nom")]), _vm._v(" "), _c("td", {
    staticClass: "col-9"
  }, [typeof _vm.infoDoss["cred_pub_tb_00"] !== "undefined" ? _c("span", [_vm._v("\n                                            " + _vm._s(((_vm$infoDoss$cred_pub7 = _vm.infoDoss["cred_pub_tb_00"]) === null || _vm$infoDoss$cred_pub7 === void 0 ? void 0 : _vm$infoDoss$cred_pub7.denomination_client) === "" ? "Vide" : (_vm$infoDoss$cred_pub8 = _vm.infoDoss["cred_pub_tb_00"]) === null || _vm$infoDoss$cred_pub8 === void 0 ? void 0 : _vm$infoDoss$cred_pub8.denomination_client) + "\n                                        ")]) : typeof _vm.infoDoss["doss_central_file_recorder"] !== "undefined" ? _c("span", [_vm._v("\n                                            " + _vm._s(((_vm$infoDoss7 = _vm.infoDoss) === null || _vm$infoDoss7 === void 0 ? void 0 : _vm$infoDoss7.doss_central_file_recorder) === "" ? "Vide" : (_vm$infoDoss8 = _vm.infoDoss) === null || _vm$infoDoss8 === void 0 || (_vm$infoDoss8 = _vm$infoDoss8.doss_central_file_recorder) === null || _vm$infoDoss8 === void 0 ? void 0 : _vm$infoDoss8.client.nomcli) + "\n                                        ")]) : _c("span", [_vm._v("\n                                            Vide\n                                        ")])])]), _vm._v(" "), (_vm$infoDoss9 = _vm.infoDoss) !== null && _vm$infoDoss9 !== void 0 && (_vm$infoDoss9 = _vm$infoDoss9.doss_central_file_recorder) !== null && _vm$infoDoss9 !== void 0 && _vm$infoDoss9.document_client ? _c("tr", [_c("td", {
    staticClass: "col-3 bg-grey"
  }, [_vm._v("Document")]), _vm._v(" "), _c("td", {
    staticClass: "col-9"
  }, [(_vm$infoDoss0 = _vm.infoDoss) !== null && _vm$infoDoss0 !== void 0 && (_vm$infoDoss0 = _vm$infoDoss0.doss_central_file_recorder) !== null && _vm$infoDoss0 !== void 0 && _vm$infoDoss0.document_client ? _c("span", {
    on: {
      click: function click($event) {
        var _vm$infoDoss1;
        return _vm.openFileDemande("http://" + ((_vm$infoDoss1 = _vm.infoDoss) === null || _vm$infoDoss1 === void 0 || (_vm$infoDoss1 = _vm$infoDoss1.doss_central_file_recorder) === null || _vm$infoDoss1 === void 0 ? void 0 : _vm$infoDoss1.document_client));
      }
    }
  }, [_c("i", {
    staticClass: "icofont icofont-file-document btn icofont-2x",
    staticStyle: {
      "border-radius": "5vh"
    },
    attrs: {
      title: "Voir la demande"
    }
  })]) : _vm._e()])]) : _vm._e(), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "col-3 bg-grey"
  }, [_vm._v("Créé le")]), _vm._v(" "), _c("td", {
    staticClass: "col-9"
  }, [_c("span", [_vm._v("\n                                            " + _vm._s((_vm$infoDoss10 = _vm.infoDoss) === null || _vm$infoDoss10 === void 0 ? void 0 : _vm$infoDoss10.created_at) + "\n                                        ")])])])])])])])])])])]), _vm._v(" "), _c("modal", {
    attrs: {
      name: "memoModalDisp",
      height: "200"
    }
  }, [_c("div", {
    staticClass: "overflow-auto"
  }, [_c("div", {
    staticClass: "col-12 text-center"
  }, [_c("strong", [_vm._v("Memo de changement de conditions")])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 text-center"
  }, [_c("small", [_vm._v("Un mémo de changement de conditions a été ouvert sur ce dossier")])]), _vm._v(" "), _c("hr"), _vm._v(" "), _c("div", {
    staticClass: "col px-4"
  }, [_c("small", [_vm._v("Initiateur: " + _vm._s((_vm$dossier = _vm.dossier) === null || _vm$dossier === void 0 || (_vm$dossier = _vm$dossier.memo_request) === null || _vm$dossier === void 0 || (_vm$dossier = _vm$dossier.initiateur) === null || _vm$dossier === void 0 ? void 0 : _vm$dossier.name))])]), _vm._v(" "), _c("div", {
    staticClass: "col px-4"
  }, [_c("small", [_vm._v("initié le: " + _vm._s((_vm$dossier2 = _vm.dossier) === null || _vm$dossier2 === void 0 || (_vm$dossier2 = _vm$dossier2.memo_request) === null || _vm$dossier2 === void 0 ? void 0 : _vm$dossier2.created_at) + " ")])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 text-end px-4"
  }, [_c("button", {
    staticClass: "btn btn-danger",
    attrs: {
      disabled: !((_vm$dossier3 = _vm.dossier) !== null && _vm$dossier3 !== void 0 && (_vm$dossier3 = _vm$dossier3.memo_request) !== null && _vm$dossier3 !== void 0 && _vm$dossier3.memo_on)
    },
    on: {
      click: function click($event) {
        return _vm.archivateOldDoss(_vm.dossier);
      }
    }
  }, [_c("i", {
    staticClass: "icofont-archive"
  }), _vm._v(" "), _vm.loadMemoModal == false ? _c("span", [_vm._v("Archiver le dossier")]) : _c("span", {
    staticClass: "spinner-border spinner-border-sm text-orange"
  })])])])])], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("span", {
    staticClass: "input-group-text border-0"
  }, [_c("i", {
    staticClass: "icofont-search"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", {
    staticClass: "text-center"
  }, [_c("td", {
    attrs: {
      colspan: "5"
    }
  }, [_c("div", {
    staticClass: "spinner-border text-secondary",
    attrs: {
      role: "status"
    }
  }, [_c("span", {
    staticClass: "visually-hidden"
  }, [_vm._v("Loading...")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", {
    staticClass: "text-center"
  }, [_c("td", {
    attrs: {
      colspan: "5"
    }
  }, [_c("div", {
    staticClass: "spinner-border text-secondary",
    attrs: {
      role: "status"
    }
  }, [_c("span", {
    staticClass: "visually-hidden"
  }, [_vm._v("Loading...")])])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/credit/Dispatching_WORKING_ON.vue?vue&type=style&index=1&id=4b9e3402&lang=css&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/credit/Dispatching_WORKING_ON.vue?vue&type=style&index=1&id=4b9e3402&lang=css&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.text-container[data-v-4b9e3402]::-webkit-scrollbar-track {\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\r\n    background-color: #F5F5F5;\n}\n.text-container[data-v-4b9e3402]::-webkit-scrollbar {\r\n    width: 5px;\r\n    background-color: #F5F5F5;\n}\n.text-container[data-v-4b9e3402]::-webkit-scrollbar-thumb {\r\n    background-color: #2c3e50;\r\n    border: 2px solid #555555;\n}\n.badge[data-v-4b9e3402] {\r\n    border-radius: 100px;\r\n    right: -10px;\r\n    top: 5px;\r\n    padding: 4px;\r\n    width: 19px;\n}\n.link[data-v-4b9e3402]:hover {\r\n    color: #fff;\n}\n.bg-c-pink[data-v-4b9e3402] {\r\n    background: linear-gradient(to right, #c0392b, #e74c3c);\n}\n.user-name[data-v-4b9e3402] {\r\n    top: 10px;\r\n    font-weight: bold;\n}\n.time[data-v-4b9e3402] {\r\n    color: grey;\r\n    font-size: 14px;\r\n    font-weight: normal;\n}\n.status[data-v-4b9e3402] {\r\n    width: 10px;\r\n    height: 10px;\r\n    border-radius: 45vh;\r\n    display: inline-block;\r\n    position: absolute;\r\n    top: 5px;\r\n    margin-left: 1vh;\n}\n.dispatch-board[data-v-4b9e3402] {\r\n    background: #fff !important;\r\n    border-radius: 2px;\n}\n.dispatch-board[data-v-4b9e3402] {\r\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\r\n    transition: all 0.3s cubic-bezier(.25, .8, .25, 1);\n}\n.dispatch-board[data-v-4b9e3402]:hover {\r\n    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n}\n.text-container[data-v-4b9e3402]::-webkit-scrollbar-track {\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\r\n    background-color: #F5F5F5;\n}\n.text-container[data-v-4b9e3402]::-webkit-scrollbar {\r\n    width: 5px;\r\n    background-color: #F5F5F5;\n}\n.text-container[data-v-4b9e3402]::-webkit-scrollbar-thumb {\r\n    background-color: #2c3e50;\r\n    border: 2px solid #555555;\n}\n.dos[data-v-4b9e3402] {\r\n    background-color: #3498db;\r\n    border: 2px solid #00A4BD;\r\n    color: white;\n}\n.my-file[data-v-4b9e3402] {\r\n    background-color: #ee6a00;\r\n    border: 2px solid black;\r\n    color: white;\n}\n.btn-orange[data-v-4b9e3402]{\r\n    background-color: #ee6a00;\r\n    color: white;\n}\n.text-orange[data-v-4b9e3402]{\r\n    color: #ee6a00;\n}\n.multiselect-dropdown.is-open[data-v-4b9e3402]{\r\n    min-width: 250px;\n}\n.on-focused[data-v-4b9e3402]:focus{\r\n    border: 2px dashed red;\n}\n.bg-gray[data-v-4b9e3402] {\r\n    background: var(--bs-gray-200);\n}\n.edit-mode[data-v-4b9e3402]{\r\n    visibility: hidden;\r\n    position: absolute;\r\n    right: 5px;\r\n    top: 5px;\n}\n.edit-mode i[data-v-4b9e3402]{\r\n    font-size: 10px;\n}\n.card:hover  .edit-mode[data-v-4b9e3402]{\r\n    visibility: visible;\n}\n.stamp-overlay[data-v-4b9e3402] {\r\n    cursor: pointer;\r\n    position: absolute;\r\n    z-index: 2;\r\n    background-color: rgba(41, 74, 239, 0.15);\r\n    top: 0;\r\n    left: 0;\r\n    height: 100%;\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    /* float: right; */\r\n    /*\r\n    position: relative; */\r\n    /* top: 20vh;\r\n    right: -25vh; */\n}\n.stamp-45deg[data-v-4b9e3402] {\r\n    transform: rotate(-45deg);\n}\n.stamp[data-v-4b9e3402] {\r\n    transform: rotate(-4deg);\r\n    color: #e74c3c;\r\n    font-size: 18px;\r\n    font-weight: 700;\r\n    border: 0.25rem solid #e74c3c;\r\n    display: inline-block;\r\n    padding: 0.25rem 1rem;\r\n    text-transform: uppercase;\r\n    text-align: center;\r\n    border-radius: 1rem;\r\n    font-family: 'Courier';\r\n    -webkit-mask-image: url('/images/grunge.png');\r\n    -webkit-mask-size: 944px 604px;\r\n    mix-blend-mode: multiply;\r\n    /* float: right; */\r\n    /*\r\n    position: relative; */\r\n    /* top: 20vh;\r\n    right: -25vh; */\n}\n.d-ctr[data-v-4b9e3402] {\r\n  cursor: pointer;\r\n  background-color: #bdc3c7;\r\n  color:#34495e;\n}\r\n\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/credit/Dispatching_WORKING_ON.vue?vue&type=style&index=1&id=4b9e3402&lang=css&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/credit/Dispatching_WORKING_ON.vue?vue&type=style&index=1&id=4b9e3402&lang=css&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dispatching_WORKING_ON_vue_vue_type_style_index_1_id_4b9e3402_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dispatching_WORKING_ON.vue?vue&type=style&index=1&id=4b9e3402&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/credit/Dispatching_WORKING_ON.vue?vue&type=style&index=1&id=4b9e3402&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dispatching_WORKING_ON_vue_vue_type_style_index_1_id_4b9e3402_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dispatching_WORKING_ON_vue_vue_type_style_index_1_id_4b9e3402_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/credit/Dispatching_WORKING_ON.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/credit/Dispatching_WORKING_ON.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Dispatching_WORKING_ON_vue_vue_type_template_id_4b9e3402_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dispatching_WORKING_ON.vue?vue&type=template&id=4b9e3402&scoped=true */ "./resources/js/components/credit/Dispatching_WORKING_ON.vue?vue&type=template&id=4b9e3402&scoped=true");
/* harmony import */ var _Dispatching_WORKING_ON_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dispatching_WORKING_ON.vue?vue&type=script&lang=js */ "./resources/js/components/credit/Dispatching_WORKING_ON.vue?vue&type=script&lang=js");
/* harmony import */ var _vueform_multiselect_themes_default_css_vue_type_style_index_0_lang_css_external__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vueform/multiselect/themes/default.css?vue&type=style&index=0&lang=css&external */ "./node_modules/@vueform/multiselect/themes/default.css?vue&type=style&index=0&lang=css&external");
/* harmony import */ var _Dispatching_WORKING_ON_vue_vue_type_style_index_1_id_4b9e3402_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Dispatching_WORKING_ON.vue?vue&type=style&index=1&id=4b9e3402&lang=css&scoped=true */ "./resources/js/components/credit/Dispatching_WORKING_ON.vue?vue&type=style&index=1&id=4b9e3402&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;



/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _Dispatching_WORKING_ON_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dispatching_WORKING_ON_vue_vue_type_template_id_4b9e3402_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _Dispatching_WORKING_ON_vue_vue_type_template_id_4b9e3402_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "4b9e3402",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/credit/Dispatching_WORKING_ON.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/credit/Dispatching_WORKING_ON.vue?vue&type=script&lang=js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/credit/Dispatching_WORKING_ON.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dispatching_WORKING_ON_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dispatching_WORKING_ON.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/credit/Dispatching_WORKING_ON.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dispatching_WORKING_ON_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/credit/Dispatching_WORKING_ON.vue?vue&type=style&index=1&id=4b9e3402&lang=css&scoped=true":
/*!***************************************************************************************************************************!*\
  !*** ./resources/js/components/credit/Dispatching_WORKING_ON.vue?vue&type=style&index=1&id=4b9e3402&lang=css&scoped=true ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dispatching_WORKING_ON_vue_vue_type_style_index_1_id_4b9e3402_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dispatching_WORKING_ON.vue?vue&type=style&index=1&id=4b9e3402&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/credit/Dispatching_WORKING_ON.vue?vue&type=style&index=1&id=4b9e3402&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/credit/Dispatching_WORKING_ON.vue?vue&type=template&id=4b9e3402&scoped=true":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/credit/Dispatching_WORKING_ON.vue?vue&type=template&id=4b9e3402&scoped=true ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dispatching_WORKING_ON_vue_vue_type_template_id_4b9e3402_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dispatching_WORKING_ON_vue_vue_type_template_id_4b9e3402_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dispatching_WORKING_ON_vue_vue_type_template_id_4b9e3402_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dispatching_WORKING_ON.vue?vue&type=template&id=4b9e3402&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/credit/Dispatching_WORKING_ON.vue?vue&type=template&id=4b9e3402&scoped=true");


/***/ })

}]);