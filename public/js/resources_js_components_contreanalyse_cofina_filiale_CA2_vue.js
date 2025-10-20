"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_contreanalyse_cofina_filiale_CA2_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/filiale/CA2.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/filiale/CA2.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/ContextMenu */ "./resources/js/components/shared/ContextMenu.vue");
/* harmony import */ var _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/ContextMenuItem */ "./resources/js/components/shared/ContextMenuItem.vue");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/auth.service */ "./resources/js/services/auth.service.js");
/* harmony import */ var _services_credit_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/credit.service */ "./resources/js/services/credit.service.js");
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../helpers/helper */ "./resources/js/helpers/helper.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), c(GeneratorFunctionPrototype, u, GeneratorFunction.displayName = "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }









window.$ = window.jQuery = __webpack_require__(/*! jquery/dist/jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "caracteristiques-du-pret",
  display: "Caractéristiques du prêt",
  components: {
    MoreVerticalIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.MoreVerticalIcon,
    ChevronUpIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.ChevronUpIcon,
    ChevronDownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.ChevronDownIcon,
    ContextMenu: _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_0__["default"],
    ContextMenuItem: _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_1__["default"],
    AirplayIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.AirplayIcon,
    BookOpenIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.BookOpenIcon
  },
  props: {
    meta_data: Object,
    tb_name: String,
    tb_display_name: String
  },
  created: function created() {
    var _this = this;
    this.loadLatestAmount();
    _services_credit_service__WEBPACK_IMPORTED_MODULE_4__["default"].loadCredits().then(function (res) {
      _this.credData(res);
    })["catch"](function (err) {
      console.log(err);
    });
  },
  mounted: function mounted() {
    var _this2 = this;
    // this.getTbByTemplate()
    this.loadRetrieved();
    this.loadTbAttrs();
    this.tableClosedOrOpened();
    EventBus.$on("event-T0", function (data) {
      // this.loadSlctMatCliEnc(data.formdata, "t0");
      // this.loadPrincChifCle(data.formdata);
      _this2.onClientSlct(data.formdata);
      // load encours actuel
      // this.encours.encours_montant = data.formdata.encours_actuel
    });
  },
  data: function data() {
    var vm = this;
    return {
      fraisLoading: false,
      isSeen: {},
      ebapisHost: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_2__["default"].host,
      authcheck: false,
      authcheckUsr: null,
      authcheckStatus: null,
      frais_annexe_v: null,
      watchInPause: false,
      initLoad: true,
      seen: true,
      seen1: true,
      seen2: true,
      credits: [],
      clients: [],
      encours: null,
      placeholder: "Chercher clients",
      matcli: "matcli",
      nomcli: "nomcli",
      meta_parseable: {
        cred_pub_key: this.meta_data["cred_pub_key"],
        tb_name: this.tb_name
      },
      formDataToBeWatched: {
        notes: [],
        taux_credit_propose_analyste: "",
        montant_credit_propo_analyste: "",
        duree_credit_propo_analyste: "",
        mode_paiement_analyste: "",
        montant_frais_propo_analyste: "",
        montant_frais_risque_propo_analyste: "",
        montant_frais_assurance_propo_analyste: "",
        depot_garantie_arcf: 0,
        montant_crsd: 0,
        montant_pep: 0,
        type_credit: "",
        prefixe: "",
        montant_demander: "",
        montant_credit: "",
        taux_credit: "",
        taux_credit_propose: "",
        duree_credit: "",
        duree_credit_demande: "",
        lib_frais: "",
        periodicite: "",
        frais: "",
        frais_annexes: "",
        echeance: "",
        val_total_frais: 0
      },
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
      listingNote: false,
      denomination_client: null,
      montant_credit: null,
      montant_demander: null,
      taux_credit: null,
      taux_credit_propose: null,
      duree_credit: null,
      periodicite: null,
      mode_paiement: null,
      montant_frais: null,
      montant_frais_risque: null,
      duree_credit_demande: null,
      mode_paiement_demande: null,
      montant_frais_assurance: null,
      depot_garantie: null,
      montant_crsd: null,
      montant_pep: null,
      last_montant_credit_propose: null,
      interetLoading: false
    };
  },
  methods: {
    recVal: function recVal(index) {
      var _this$formDataToBeWat, _this$formDataToBeWat2;
      var slctIdx = (_this$formDataToBeWat = this.formDataToBeWatched) === null || _this$formDataToBeWat === void 0 ? void 0 : _this$formDataToBeWat.frais[index];
      if (parseFloat(slctIdx["taux_modififie"]) > 100) {
        slctIdx["taux_modififie"] = 100;
      }
      var op = parseFloat(slctIdx["taux_modififie"]) / 100 * parseFloat(Number((_this$formDataToBeWat2 = this.formDataToBeWatched.montant_credit_propo_analyste) === null || _this$formDataToBeWat2 === void 0 ? void 0 : _this$formDataToBeWat2.toString().replace(/\s/g, "")));
      // slctIdx['montant_frais'] = this.formatPrice(op)
      slctIdx["montant_frais"] = op;
      this.formDataToBeWatched.frais[index] = slctIdx;
      // this.handleInput();
    },
    calValFraisAn: function calValFraisAn() {
      for (var index = 0; index < ((_this$formDataToBeWat3 = this.formDataToBeWatched.frais_annexes) === null || _this$formDataToBeWat3 === void 0 ? void 0 : _this$formDataToBeWat3.length); index++) {
        var _this$formDataToBeWat3, _this$formDataToBeWat4;
        var element = this.formDataToBeWatched.frais_annexes[index];
        if (parseFloat(element.taux_modififie) > 100) {
          element.taux_modififie = 100;
        }
        element.valeur = parseFloat(element.taux_accorde_arc) / 100 * parseFloat(Number((_this$formDataToBeWat4 = this.formDataToBeWatched.montant_credit_propo_analyste) === null || _this$formDataToBeWat4 === void 0 ? void 0 : _this$formDataToBeWat4.toString().replace(/\s/g, "")));
        this.formDataToBeWatched.frais_annexes[index] = element;
      }
    },
    onClientSlct: function onClientSlct() {
      var load = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var typePret = "";
      var montantPret = 0;
      var createdKey = this.tb_name;
      var createdKeyArr = createdKey.split("tb");
      createdKey = "cred_pub_tb_" + createdKeyArr[1];
      if (load != null) {
        typePret = load.type_credit;
        montantPret = this.formDataToBeWatched.montant_credit ? this.formDataToBeWatched.montant_credit : load.montant_sollicite;
      } else {
        var _this$meta_data$dossi, _this$meta_data$dossi2, _this$meta_data$dossi3, _this$meta_data$dossi4;
        typePret = (_this$meta_data$dossi = this.meta_data.dossier_credit) === null || _this$meta_data$dossi === void 0 || (_this$meta_data$dossi = _this$meta_data$dossi[this.determineCredPubTables((_this$meta_data$dossi2 = this.meta_data.dossier_credit) === null || _this$meta_data$dossi2 === void 0 ? void 0 : _this$meta_data$dossi2.applied_templ_name)[0]]) === null || _this$meta_data$dossi === void 0 ? void 0 : _this$meta_data$dossi.type_credit;
        montantPret = (_this$meta_data$dossi3 = this.meta_data.dossier_credit) === null || _this$meta_data$dossi3 === void 0 || (_this$meta_data$dossi3 = _this$meta_data$dossi3[this.determineCredPubTables((_this$meta_data$dossi4 = this.meta_data.dossier_credit) === null || _this$meta_data$dossi4 === void 0 ? void 0 : _this$meta_data$dossi4.applied_templ_name)[0]]) === null || _this$meta_data$dossi3 === void 0 ? void 0 : _this$meta_data$dossi3.montant_sollicite;
      }
      // console.log({typePret, montantPret, createdKey})
      if (typePret != "" && load != null || this.meta_data["dossier_credit"][createdKey] === undefined) {
        this.calValFraisAn();
        this.fraisData();
        // EventBus.$emit("montant-credit-updated", {
        //     montant_credit: this.formDataToBeWatched.montant_credit,
        //     garantie: this.formDataToBeWatched.garantie,
        //     crsd: this.formDataToBeWatched.montant_crsd,
        //     duree_credit: this.formDataToBeWatched.duree_credit,
        //     mode_paiement: this.formDataToBeWatched.mode_paiement,
        // })
      }
    },
    fraisData: function fraisData() {
      for (var index = 0; index < ((_this$formDataToBeWat5 = this.formDataToBeWatched.frais) === null || _this$formDataToBeWat5 === void 0 ? void 0 : _this$formDataToBeWat5.length); index++) {
        var _this$formDataToBeWat5, _this$formDataToBeWat6;
        var element = this.formDataToBeWatched.frais[index];
        if (parseFloat(element.taux_modififie) > 100) {
          element.taux_modififie = 100;
        }
        element.montant_frais = parseFloat(element.taux_accorde_arc) / 100 * parseFloat(Number((_this$formDataToBeWat6 = this.formDataToBeWatched.montant_credit_propo_analyste) === null || _this$formDataToBeWat6 === void 0 ? void 0 : _this$formDataToBeWat6.toString().replace(/\s/g, "")));
        this.formDataToBeWatched.frais[index] = element;
      }
    },
    toggleOpen: function toggleOpen(key) {
      var data = _objectSpread({}, this.isSeen);
      data[key] = !data[key];
      this.isSeen = data;
    },
    tableClosedOrOpened: function tableClosedOrOpened() {
      this.seen = this.fetchClosedTables(this.tb_name + this.meta_data['cred_pub_key']);
    },
    openNotesModal: function openNotesModal() {
      var listing = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.listingNote = listing;
      this.$modal.show(this.tb_name);
    },
    formDataVars: function formDataVars(event) {
      this.formDataToBeWatched[event[0]] = event[1];
      this.handleInput();
    },
    loadRetrieved: function loadRetrieved() {
      var _this$meta_data$dossi5;
      var lentb = this.meta_data["dossier_credit"]["tbs_in_use"];
      var createdKey = this.tb_name;
      var createdKeyArr = createdKey.split("tb");
      createdKey = "cred_pub_tb_" + createdKeyArr[1];
      var applied_templ_name = (_this$meta_data$dossi5 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi5 === void 0 ? void 0 : _this$meta_data$dossi5.applied_templ_name;
      var tbArrays = this.determineCredPubTables(applied_templ_name);

      // let credpubtb = this.getTbByTemplate()

      // console.log("cred_pub_key******** => ",this.meta_data['dossier_credit'][credpubtb])

      if (this.meta_data['dossier_credit'][createdKey] === undefined) {
        var _this$meta_data$dossi6, _this$meta_data$dossi7, _this$meta_data$dossi8;
        // this.formDataToBeWatched.montant_crsd = this.meta_data.dossier_credit?.cred_pub_tb_1.montant_crsd
        this.formDataToBeWatched.montant_crsd = (_this$meta_data$dossi6 = this.meta_data['dossier_credit'][tbArrays[1]]) === null || _this$meta_data$dossi6 === void 0 ? void 0 : _this$meta_data$dossi6.montant_crsd;
        // console.log("cred_pub_key******** => ",this.meta_data['dossier_credit'][tbArrays[1]])

        this.formDataToBeWatched.montant_pep = (_this$meta_data$dossi7 = this.meta_data['dossier_credit'][tbArrays[1]]) === null || _this$meta_data$dossi7 === void 0 ? void 0 : _this$meta_data$dossi7.montant_pep;
        this.formDataToBeWatched.depot_garantie_arcf = (_this$meta_data$dossi8 = this.meta_data['dossier_credit'][tbArrays[1]]) === null || _this$meta_data$dossi8 === void 0 ? void 0 : _this$meta_data$dossi8.garantie;
        if (this.meta_data['dossier_credit'][tbArrays[1]] != undefined) {
          var _this$meta_data$dossi9, _this$meta_data$dossi0, _this$meta_data$dossi1, _this$meta_data$dossi10, _this$meta_data$dossi11, _this$meta_data$dossi12, _this$meta_data$dossi13, _this$meta_data$dossi14, _this$meta_data$dossi15, _this$meta_data$dossi16, _this$meta_data$dossi17, _this$meta_data$dossi18, _this$meta_data$dossi19, _this$meta_data$dossi20, _this$meta_data$dossi21, _this$meta_data$dossi22, _this$meta_data$dossi23, _this$meta_data$dossi24, _this$meta_data, _this$meta_data$dossi25, _this$meta_data$dossi26, _this$meta_data$dossi27, _this$meta_data$dossi28, _this$meta_data$dossi29, _this$meta_data$dossi30, _this$meta_data$dossi31, _this$meta_data$dossi32, _this$meta_data$dossi33, _this$meta_data$dossi34, _this$meta_data$dossi35, _this$meta_data$dossi36, _this$meta_data$dossi37, _this$meta_data$dossi38, _this$meta_data$dossi42, _this$meta_data$dossi43, _this$meta_data$dossi44, _this$meta_data$dossi45, _this$meta_data$dossi46;
          this.formDataToBeWatched.montant_crsd = (_this$meta_data$dossi9 = this.meta_data['dossier_credit'][tbArrays[1]]) === null || _this$meta_data$dossi9 === void 0 ? void 0 : _this$meta_data$dossi9.montant_crsd;
          this.formDataToBeWatched.montant_pep = (_this$meta_data$dossi0 = this.meta_data['dossier_credit'][tbArrays[1]]) === null || _this$meta_data$dossi0 === void 0 ? void 0 : _this$meta_data$dossi0.montant_pep;
          var frais = (_this$meta_data$dossi1 = this.meta_data['dossier_credit'][tbArrays[1]]) === null || _this$meta_data$dossi1 === void 0 ? void 0 : _this$meta_data$dossi1.frais;
          var fraisModif = frais.map(function (el) {
            return _objectSpread(_objectSpread({}, el), {}, {
              taux_accorde_arc: el.taux_modififie
            });
          });
          this.formDataToBeWatched.frais = fraisModif;
          var fraisAnnexes = [{
            libelle: (_this$meta_data$dossi10 = this.meta_data['dossier_credit'][tbArrays[1]]) === null || _this$meta_data$dossi10 === void 0 ? void 0 : _this$meta_data$dossi10.libelle_garantie,
            taux_initial: (_this$meta_data$dossi11 = this.meta_data['dossier_credit'][tbArrays[1]]) === null || _this$meta_data$dossi11 === void 0 ? void 0 : _this$meta_data$dossi11.valeur_garantie,
            taux_modififie: (_this$meta_data$dossi12 = this.meta_data['dossier_credit'][tbArrays[1]]) === null || _this$meta_data$dossi12 === void 0 ? void 0 : _this$meta_data$dossi12.valeur_garantieaccorde,
            taux_accorde_arc: (_this$meta_data$dossi13 = this.meta_data['dossier_credit'][tbArrays[1]]) === null || _this$meta_data$dossi13 === void 0 ? void 0 : _this$meta_data$dossi13.valeur_garantieaccorde,
            valeur: (_this$meta_data$dossi14 = this.meta_data['dossier_credit'][tbArrays[1]]) === null || _this$meta_data$dossi14 === void 0 ? void 0 : _this$meta_data$dossi14.garantie
          }, {
            libelle: (_this$meta_data$dossi15 = this.meta_data['dossier_credit'][tbArrays[1]]) === null || _this$meta_data$dossi15 === void 0 ? void 0 : _this$meta_data$dossi15.libelle_crsd,
            taux_initial: (_this$meta_data$dossi16 = this.meta_data['dossier_credit'][tbArrays[1]]) === null || _this$meta_data$dossi16 === void 0 ? void 0 : _this$meta_data$dossi16.taux_crsd,
            taux_modififie: (_this$meta_data$dossi17 = this.meta_data['dossier_credit'][tbArrays[1]]) === null || _this$meta_data$dossi17 === void 0 ? void 0 : _this$meta_data$dossi17.tauxaccorde_crsd,
            taux_accorde_arc: (_this$meta_data$dossi18 = this.meta_data['dossier_credit'][tbArrays[1]]) === null || _this$meta_data$dossi18 === void 0 ? void 0 : _this$meta_data$dossi18.tauxaccorde_crsd,
            valeur: (_this$meta_data$dossi19 = this.meta_data['dossier_credit'][tbArrays[1]]) === null || _this$meta_data$dossi19 === void 0 ? void 0 : _this$meta_data$dossi19.montant_crsd
          }, {
            libelle: (_this$meta_data$dossi20 = this.meta_data['dossier_credit'][tbArrays[1]]) === null || _this$meta_data$dossi20 === void 0 ? void 0 : _this$meta_data$dossi20.libelle_pep,
            taux_initial: (_this$meta_data$dossi21 = this.meta_data['dossier_credit'][tbArrays[1]]) === null || _this$meta_data$dossi21 === void 0 ? void 0 : _this$meta_data$dossi21.taux_pep,
            taux_modififie: (_this$meta_data$dossi22 = this.meta_data['dossier_credit'][tbArrays[1]]) === null || _this$meta_data$dossi22 === void 0 ? void 0 : _this$meta_data$dossi22.taux_pep_accorde,
            taux_accorde_arc: (_this$meta_data$dossi23 = this.meta_data['dossier_credit'][tbArrays[1]]) === null || _this$meta_data$dossi23 === void 0 ? void 0 : _this$meta_data$dossi23.taux_pep_accorde,
            valeur: (_this$meta_data$dossi24 = this.meta_data['dossier_credit'][tbArrays[1]]) === null || _this$meta_data$dossi24 === void 0 ? void 0 : _this$meta_data$dossi24.vmontant_pep
          }];
          this.formDataToBeWatched.frais_annexes = fraisAnnexes;
          this.formDataToBeWatched.echeance = (_this$meta_data = this.meta_data) === null || _this$meta_data === void 0 || (_this$meta_data = _this$meta_data.dossier_credit[tbArrays[1]]) === null || _this$meta_data === void 0 ? void 0 : _this$meta_data.echeance;
          this.formDataToBeWatched.val_total_frais = fraisModif === null || fraisModif === void 0 ? void 0 : fraisModif.reduce(function (acc, el) {
            return acc + el.montant_frais;
          }, 0);
          this.formDataToBeWatched.montant_credit_propo_analyste = this.loadLatestAmount();
          this.formDataToBeWatched.taux_credit_propose_analyste = (_this$meta_data$dossi25 = this.meta_data['dossier_credit'][tbArrays[1]]) === null || _this$meta_data$dossi25 === void 0 ? void 0 : _this$meta_data$dossi25.taux_credit_propose;
          this.formDataToBeWatched.duree_credit_propo_analyste = (_this$meta_data$dossi26 = this.meta_data['dossier_credit'][tbArrays[1]]) === null || _this$meta_data$dossi26 === void 0 ? void 0 : _this$meta_data$dossi26.duree_credit;
          this.formDataToBeWatched.mode_paiement_analyste = (_this$meta_data$dossi27 = this.meta_data['dossier_credit'][tbArrays[1]]) === null || _this$meta_data$dossi27 === void 0 ? void 0 : _this$meta_data$dossi27.mode_paiement;
          this.formDataToBeWatched.montant_frais_risque_propo_analyste = (_this$meta_data$dossi28 = this.meta_data['dossier_credit'][tbArrays[1]]) === null || _this$meta_data$dossi28 === void 0 || (_this$meta_data$dossi28 = _this$meta_data$dossi28.frais[2]) === null || _this$meta_data$dossi28 === void 0 ? void 0 : _this$meta_data$dossi28.montant_frais;
          this.formDataToBeWatched.montant_frais_propo_analyste = (_this$meta_data$dossi29 = this.meta_data['dossier_credit'][tbArrays[1]]) === null || _this$meta_data$dossi29 === void 0 || (_this$meta_data$dossi29 = _this$meta_data$dossi29.frais[0]) === null || _this$meta_data$dossi29 === void 0 ? void 0 : _this$meta_data$dossi29.montant_frais;
          this.formDataToBeWatched.montant_frais_assurance_propo_analyste = (_this$meta_data$dossi30 = this.meta_data['dossier_credit'][tbArrays[1]]) === null || _this$meta_data$dossi30 === void 0 || (_this$meta_data$dossi30 = _this$meta_data$dossi30.frais[1]) === null || _this$meta_data$dossi30 === void 0 ? void 0 : _this$meta_data$dossi30.montant_frais;

          // this.formDataToBeWatched.depot_garantie_arcf=this.depot_garantie
          // this.formDataToBeWatched.depot_garantie_arcf=this.meta_data['dossier_credit']["cred_pub_tb_1"]?.montant_crsd

          this.montant_credit = (_this$meta_data$dossi31 = this.meta_data['dossier_credit'][tbArrays[1]]) === null || _this$meta_data$dossi31 === void 0 ? void 0 : _this$meta_data$dossi31.montant_credit;
          this.montant_demander = (_this$meta_data$dossi32 = this.meta_data['dossier_credit'][tbArrays[1]]) === null || _this$meta_data$dossi32 === void 0 ? void 0 : _this$meta_data$dossi32.montant_demander;
          this.taux_credit = (_this$meta_data$dossi33 = this.meta_data['dossier_credit'][tbArrays[1]]) === null || _this$meta_data$dossi33 === void 0 ? void 0 : _this$meta_data$dossi33.taux_credit;
          this.taux_credit_propose = (_this$meta_data$dossi34 = this.meta_data['dossier_credit'][tbArrays[1]]) === null || _this$meta_data$dossi34 === void 0 ? void 0 : _this$meta_data$dossi34.taux_credit_propose;
          this.duree_credit = (_this$meta_data$dossi35 = this.meta_data['dossier_credit'][tbArrays[1]]) === null || _this$meta_data$dossi35 === void 0 ? void 0 : _this$meta_data$dossi35.duree_credit;
          this.periodicite = (_this$meta_data$dossi36 = this.meta_data['dossier_credit'][tbArrays[1]]) === null || _this$meta_data$dossi36 === void 0 ? void 0 : _this$meta_data$dossi36.periodicite;
          this.mode_paiement = (_this$meta_data$dossi37 = this.meta_data['dossier_credit'][tbArrays[1]]) === null || _this$meta_data$dossi37 === void 0 ? void 0 : _this$meta_data$dossi37.mode_paiement;
          if (((_this$meta_data$dossi38 = this.meta_data['dossier_credit'][tbArrays[1]]) === null || _this$meta_data$dossi38 === void 0 ? void 0 : _this$meta_data$dossi38.frais) != undefined) {
            var _this$meta_data$dossi39, _this$meta_data$dossi40, _this$meta_data$dossi41;
            this.montant_frais = (_this$meta_data$dossi39 = this.meta_data['dossier_credit'][tbArrays[1]]) === null || _this$meta_data$dossi39 === void 0 || (_this$meta_data$dossi39 = _this$meta_data$dossi39.frais[0]) === null || _this$meta_data$dossi39 === void 0 ? void 0 : _this$meta_data$dossi39.montant_frais;
            this.montant_frais_risque = (_this$meta_data$dossi40 = this.meta_data['dossier_credit'][tbArrays[1]]) === null || _this$meta_data$dossi40 === void 0 || (_this$meta_data$dossi40 = _this$meta_data$dossi40.frais[2]) === null || _this$meta_data$dossi40 === void 0 ? void 0 : _this$meta_data$dossi40.montant_frais;
            this.montant_frais_assurance = (_this$meta_data$dossi41 = this.meta_data['dossier_credit'][tbArrays[1]]) === null || _this$meta_data$dossi41 === void 0 || (_this$meta_data$dossi41 = _this$meta_data$dossi41.frais[1]) === null || _this$meta_data$dossi41 === void 0 ? void 0 : _this$meta_data$dossi41.montant_frais;
          }
          this.depot_garantie = (_this$meta_data$dossi42 = this.meta_data['dossier_credit'][tbArrays[1]]) === null || _this$meta_data$dossi42 === void 0 ? void 0 : _this$meta_data$dossi42.garantie;
          this.montant_crsd = (_this$meta_data$dossi43 = this.meta_data['dossier_credit'][tbArrays[1]]) === null || _this$meta_data$dossi43 === void 0 ? void 0 : _this$meta_data$dossi43.montant_crsd;
          this.montant_pep = (_this$meta_data$dossi44 = this.meta_data['dossier_credit'][tbArrays[1]]) === null || _this$meta_data$dossi44 === void 0 ? void 0 : _this$meta_data$dossi44.montant_pep;
          this.duree_credit_demande = (_this$meta_data$dossi45 = this.meta_data['dossier_credit'][tbArrays[1]]) === null || _this$meta_data$dossi45 === void 0 ? void 0 : _this$meta_data$dossi45.duree_credit_demande;
          this.mode_paiement_demande = (_this$meta_data$dossi46 = this.meta_data['dossier_credit'][tbArrays[1]]) === null || _this$meta_data$dossi46 === void 0 ? void 0 : _this$meta_data$dossi46.mode_paiement_demande;
          // this.crsd=this.meta_data['dossier_credit']["cred_pub_tb_1"]?.montant_crsd

          this.last_montant_credit_propose = this.loadLatestAmount();
        }
      }
      if (lentb.length > 0) {
        var _this$meta_data$dossi80;
        if (this.meta_data["dossier_credit"][createdKey] != undefined) {
          var _this$meta_data$dossi47, _this$meta_data$dossi48, _this$meta_data$dossi49, _this$meta_data$dossi50, _this$meta_data$dossi51, _this$meta_data$dossi52, _this$meta_data$dossi53, _this$meta_data$dossi54, _this$meta_data$dossi71, _this$meta_data$dossi75, _this$meta_data$dossi76, _this$meta_data$dossi77, _this$meta_data$dossi78, _this$meta_data$dossi79;
          //   this.frais_annexe_v = this.meta_data.dossier_credit?.cred_pub_tb_1
          this.last_montant_credit_propose = this.loadLatestAmount();
          this.formDataToBeWatched.mode_paiement_analyste = (_this$meta_data$dossi47 = this.meta_data['dossier_credit'][tbArrays[1]]) === null || _this$meta_data$dossi47 === void 0 ? void 0 : _this$meta_data$dossi47.mode_paiement;
          this.formDataToBeWatched = this.meta_data["dossier_credit"][createdKey];
          // this.montant_credit_propo_analyste = this.loadLatestAmount()

          this.montant_credit = (_this$meta_data$dossi48 = this.meta_data['dossier_credit'][tbArrays[1]]) === null || _this$meta_data$dossi48 === void 0 ? void 0 : _this$meta_data$dossi48.montant_credit;
          this.montant_demander = (_this$meta_data$dossi49 = this.meta_data['dossier_credit'][tbArrays[1]]) === null || _this$meta_data$dossi49 === void 0 ? void 0 : _this$meta_data$dossi49.montant_demander;
          this.taux_credit = (_this$meta_data$dossi50 = this.meta_data['dossier_credit'][tbArrays[1]]) === null || _this$meta_data$dossi50 === void 0 ? void 0 : _this$meta_data$dossi50.taux_credit;
          this.taux_credit_propose = (_this$meta_data$dossi51 = this.meta_data['dossier_credit'][tbArrays[1]]) === null || _this$meta_data$dossi51 === void 0 ? void 0 : _this$meta_data$dossi51.taux_credit_propose;
          this.duree_credit = (_this$meta_data$dossi52 = this.meta_data['dossier_credit'][tbArrays[1]]) === null || _this$meta_data$dossi52 === void 0 ? void 0 : _this$meta_data$dossi52.duree_credit;
          this.periodicite = (_this$meta_data$dossi53 = this.meta_data['dossier_credit'][tbArrays[1]]) === null || _this$meta_data$dossi53 === void 0 ? void 0 : _this$meta_data$dossi53.periodicite;
          this.mode_paiement = (_this$meta_data$dossi54 = this.meta_data['dossier_credit'][tbArrays[1]]) === null || _this$meta_data$dossi54 === void 0 ? void 0 : _this$meta_data$dossi54.mode_paiement;

          // console.log("frais", this.meta_data['dossier_credit'][tbArrays[1]]?.frais)
          if ([null, '', undefined].includes(this.formDataToBeWatched.frais)) {
            var _this$meta_data$dossi55;
            var _frais = (_this$meta_data$dossi55 = this.meta_data['dossier_credit'][tbArrays[1]]) === null || _this$meta_data$dossi55 === void 0 ? void 0 : _this$meta_data$dossi55.frais;
            var _fraisModif = _frais.map(function (el) {
              return _objectSpread(_objectSpread({}, el), {}, {
                taux_accorde_arc: el.taux_modififie
              });
            });
            this.formDataToBeWatched.frais = _fraisModif;
            this.formDataToBeWatched.val_total_frais = _fraisModif === null || _fraisModif === void 0 ? void 0 : _fraisModif.reduce(function (acc, el) {
              return acc + el.montant_frais;
            }, 0);
          }
          if ([null, '', undefined].includes(this.formDataToBeWatched.frais_annexes)) {
            var _this$meta_data$dossi56, _this$meta_data$dossi57, _this$meta_data$dossi58, _this$meta_data$dossi59, _this$meta_data$dossi60, _this$meta_data$dossi61, _this$meta_data$dossi62, _this$meta_data$dossi63, _this$meta_data$dossi64, _this$meta_data$dossi65, _this$meta_data$dossi66, _this$meta_data$dossi67, _this$meta_data$dossi68, _this$meta_data$dossi69, _this$meta_data$dossi70, _this$meta_data2;
            var _fraisAnnexes = [{
              libelle: (_this$meta_data$dossi56 = this.meta_data['dossier_credit'][tbArrays[1]]) === null || _this$meta_data$dossi56 === void 0 ? void 0 : _this$meta_data$dossi56.libelle_garantie,
              taux_initial: (_this$meta_data$dossi57 = this.meta_data['dossier_credit'][tbArrays[1]]) === null || _this$meta_data$dossi57 === void 0 ? void 0 : _this$meta_data$dossi57.valeur_garantie,
              taux_modififie: (_this$meta_data$dossi58 = this.meta_data['dossier_credit'][tbArrays[1]]) === null || _this$meta_data$dossi58 === void 0 ? void 0 : _this$meta_data$dossi58.valeur_garantieaccorde,
              taux_accorde_arc: (_this$meta_data$dossi59 = this.meta_data['dossier_credit'][tbArrays[1]]) === null || _this$meta_data$dossi59 === void 0 ? void 0 : _this$meta_data$dossi59.valeur_garantieaccorde,
              valeur: (_this$meta_data$dossi60 = this.meta_data['dossier_credit'][tbArrays[1]]) === null || _this$meta_data$dossi60 === void 0 ? void 0 : _this$meta_data$dossi60.garantie
            }, {
              libelle: (_this$meta_data$dossi61 = this.meta_data['dossier_credit'][tbArrays[1]]) === null || _this$meta_data$dossi61 === void 0 ? void 0 : _this$meta_data$dossi61.libelle_crsd,
              taux_initial: (_this$meta_data$dossi62 = this.meta_data['dossier_credit'][tbArrays[1]]) === null || _this$meta_data$dossi62 === void 0 ? void 0 : _this$meta_data$dossi62.taux_crsd,
              taux_modififie: (_this$meta_data$dossi63 = this.meta_data['dossier_credit'][tbArrays[1]]) === null || _this$meta_data$dossi63 === void 0 ? void 0 : _this$meta_data$dossi63.tauxaccorde_crsd,
              taux_accorde_arc: (_this$meta_data$dossi64 = this.meta_data['dossier_credit'][tbArrays[1]]) === null || _this$meta_data$dossi64 === void 0 ? void 0 : _this$meta_data$dossi64.tauxaccorde_crsd,
              valeur: (_this$meta_data$dossi65 = this.meta_data['dossier_credit'][tbArrays[1]]) === null || _this$meta_data$dossi65 === void 0 ? void 0 : _this$meta_data$dossi65.montant_crsd
            }, {
              libelle: (_this$meta_data$dossi66 = this.meta_data['dossier_credit'][tbArrays[1]]) === null || _this$meta_data$dossi66 === void 0 ? void 0 : _this$meta_data$dossi66.libelle_pep,
              taux_initial: (_this$meta_data$dossi67 = this.meta_data['dossier_credit'][tbArrays[1]]) === null || _this$meta_data$dossi67 === void 0 ? void 0 : _this$meta_data$dossi67.taux_pep,
              taux_modififie: (_this$meta_data$dossi68 = this.meta_data['dossier_credit'][tbArrays[1]]) === null || _this$meta_data$dossi68 === void 0 ? void 0 : _this$meta_data$dossi68.taux_pep_accorde,
              taux_accorde_arc: (_this$meta_data$dossi69 = this.meta_data['dossier_credit'][tbArrays[1]]) === null || _this$meta_data$dossi69 === void 0 ? void 0 : _this$meta_data$dossi69.taux_pep_accorde,
              valeur: (_this$meta_data$dossi70 = this.meta_data['dossier_credit'][tbArrays[1]]) === null || _this$meta_data$dossi70 === void 0 ? void 0 : _this$meta_data$dossi70.vmontant_pep
            }];
            this.formDataToBeWatched.frais_annexes = _fraisAnnexes;
            this.formDataToBeWatched.echeance = (_this$meta_data2 = this.meta_data) === null || _this$meta_data2 === void 0 || (_this$meta_data2 = _this$meta_data2.dossier_credit[tbArrays[1]]) === null || _this$meta_data2 === void 0 ? void 0 : _this$meta_data2.echeance;
          }
          if (((_this$meta_data$dossi71 = this.meta_data['dossier_credit'][tbArrays[1]]) === null || _this$meta_data$dossi71 === void 0 ? void 0 : _this$meta_data$dossi71.frais) != undefined) {
            var _this$meta_data$dossi72, _this$meta_data$dossi73, _this$meta_data$dossi74;
            this.montant_frais = (_this$meta_data$dossi72 = this.meta_data['dossier_credit'][tbArrays[1]]) === null || _this$meta_data$dossi72 === void 0 || (_this$meta_data$dossi72 = _this$meta_data$dossi72.frais[0]) === null || _this$meta_data$dossi72 === void 0 ? void 0 : _this$meta_data$dossi72.montant_frais;
            this.montant_frais_risque = (_this$meta_data$dossi73 = this.meta_data['dossier_credit'][tbArrays[1]]) === null || _this$meta_data$dossi73 === void 0 || (_this$meta_data$dossi73 = _this$meta_data$dossi73.frais[2]) === null || _this$meta_data$dossi73 === void 0 ? void 0 : _this$meta_data$dossi73.montant_frais;
            this.montant_frais_assurance = (_this$meta_data$dossi74 = this.meta_data['dossier_credit'][tbArrays[1]]) === null || _this$meta_data$dossi74 === void 0 || (_this$meta_data$dossi74 = _this$meta_data$dossi74.frais[1]) === null || _this$meta_data$dossi74 === void 0 ? void 0 : _this$meta_data$dossi74.montant_frais;
          }
          // this.formDataToBeWatched.depot_garantie_arcf = this.meta_data['dossier_credit'][tbArrays[1]]?.garantie

          this.depot_garantie = (_this$meta_data$dossi75 = this.meta_data['dossier_credit'][tbArrays[1]]) === null || _this$meta_data$dossi75 === void 0 ? void 0 : _this$meta_data$dossi75.garantie;
          this.montant_crsd = (_this$meta_data$dossi76 = this.meta_data['dossier_credit'][tbArrays[1]]) === null || _this$meta_data$dossi76 === void 0 ? void 0 : _this$meta_data$dossi76.montant_crsd;
          this.montant_pep = (_this$meta_data$dossi77 = this.meta_data['dossier_credit'][tbArrays[1]]) === null || _this$meta_data$dossi77 === void 0 ? void 0 : _this$meta_data$dossi77.montant_pep;

          //   this.crsd=this.meta_data['dossier_credit']["cred_pub_tb_1"]?.montant_crsd

          this.duree_credit_demande = (_this$meta_data$dossi78 = this.meta_data['dossier_credit'][tbArrays[1]]) === null || _this$meta_data$dossi78 === void 0 ? void 0 : _this$meta_data$dossi78.duree_credit_demande;
          this.mode_paiement_demande = (_this$meta_data$dossi79 = this.meta_data['dossier_credit'][tbArrays[1]]) === null || _this$meta_data$dossi79 === void 0 ? void 0 : _this$meta_data$dossi79.mode_paiement_demande;
        }

        // Close table by default
        this.defaultRetract(false, (_this$meta_data$dossi80 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi80 === void 0 ? void 0 : _this$meta_data$dossi80.applied_templ_id);
      }
    },
    printRoleSigle: function printRoleSigle() {
      var caract_inter_pret = this.meta_data['dossier_credit']["caract_inter_pret"];
      var role_sigle = caract_inter_pret[caract_inter_pret.length - 1]["role_sigle"];
      var targetKey = "Montant crédit proposé par le " + role_sigle;
      return targetKey;
    },
    loadLatestAmount: function loadLatestAmount() {
      var caract_inter_pret = this.meta_data['dossier_credit']["caract_inter_pret"];
      var role_sigle = caract_inter_pret[caract_inter_pret.length - 1]["role_sigle"];
      var targetKey = "montant_pret_" + role_sigle;
      // console.log("latest_amount", caract_inter_pret[caract_inter_pret.length -1][targetKey])
      return caract_inter_pret[caract_inter_pret.length - 1][targetKey];
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
        // window.location.href = "/login";
      }
      if (this.authcheck === true) {
        this.$emit("autosaving");
        this.$axios.post(this.ebapisHost + "creditbuilder/api/v1/autosaving/", {
          user: this.authcheckUsr,
          meta_parseable: this.meta_parseable,
          filledData: this.formDataToBeWatched,
          loadDossier: true
        }).then(function (response) {
          // this.$Progress.finish();
          this.$emit("autosaving");
          // console.log(response)

          var tbFetcheData = response.data;
          if (tbFetcheData["is_success"] === true) {
            // this.depot_garantie = this.meta_data['dossier_credit']["cred_pub_tb_1"]?.garantie

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
    loadTbAttrs: function loadTbAttrs() {
      var l = [];
      var topdivel = this.$refs.topdiv;
      // let k = document.querySelectorAll('.subdiv')
      var k = document.querySelectorAll(".subdiv" + this.tb_name);
      // console.log(k)
      k.forEach(function (e) {
        l.push(e.innerText);
      });
      var p = {
        name_of_title: topdivel.innerText,
        list_of_content: l,
        id: "ca2-head"
      };
      // console.log(p)
      this.$emit("load-buffer", p);
    },
    credData: function credData(res) {
      this.credits = res.data;
    },
    onSlctMatCli: function onSlctMatCli(obj) {
      var _this$formDataToBeWat7,
        _this3 = this;
      this.formDataToBeWatched.matricule_client = obj.matcli;
      this.formDataToBeWatched.nom_client = obj.nomcli;
      this.autoRenamer();
      _services_credit_service__WEBPACK_IMPORTED_MODULE_4__["default"].encours((_this$formDataToBeWat7 = this.formDataToBeWatched) === null || _this$formDataToBeWat7 === void 0 ? void 0 : _this$formDataToBeWat7.matricule_client).then(function (res) {
        _this3.encoursData(res);
      })["catch"](function (err) {
        console.log(err);
      });
    },
    handleInput: function handleInput(evt) {
      EventBus.$emit("modifier-montant", this.formDataToBeWatched.montant_credit_propo_analyste);
    },
    send2Backend0: function send2Backend0(res) {
      this.authcheck = true;
      this.authcheckUsr = res.data;
      this.authcheckStatus = res.status;
      if (this.authcheckStatus === 401) {
        // window.location.href = "/login";
      }
      if (this.authcheck === true) {
        this.$axios.post(this.ebapisHost + "creditbuilder/api/v1/updatedoctitle/", {
          user: this.authcheckUsr,
          cred_pub_key: this.meta_parseable.cred_pub_key,
          filledData: {
            doss_name: this.formDataToBeWatched.nom_client + "_" + this.formDataToBeWatched.prefixe
          }
        }).then(function (response) {
          var tbFetcheData = response.data;
        }.bind(this))["catch"](function (error) {
          this.$Progress.finish();
          console.log(error);
        }.bind(this));
      } else {
        alert("Unauthenticated");
      }
    },
    autoRenamer: function autoRenamer() {
      var _this4 = this;
      _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["default"].loadUserData().then(function (res) {
        _this4.send2Backend0(res);
      })["catch"](function (err) {
        _this4.loadWithError(err);
      });
    },
    instruction2: function instruction2(id) {
      var id0 = '#' + id;
      window.$(id0).modal('show');
    },
    convertNumber: function convertNumber(valeur) {
      return Number(valeur === null || valeur === void 0 ? void 0 : valeur.toString().replace(/\s+/g, ""));
    }
  },
  watch: {
    formDataToBeWatched: {
      handler: function handler(newVal, oldVal) {
        // if (oldVal === undefined) {
        //   return
        // }
        this.autosaving(newVal, oldVal);
      },
      deep: true,
      immediate: true
    },
    'formDataToBeWatched.montant_credit_propo_analyste': function formDataToBeWatchedMontant_credit_propo_analyste(val) {
      if (this.convertNumber(this.formDataToBeWatched.montant_credit_propo_analyste) > this.convertNumber(this.montant_credit)) {
        this.$toasted.show('Le montant proposé ne peut être supérieur au montant du CAF.');
        this.formDataToBeWatched.montant_credit_propo_analyste = this.montant_credit;
        this.$set(this.formDataToBeWatched, 'montant_credit_propo_analyste', this.montant_credit);
      }
      var load = {
        type_credit: this.meta_data.dossier_credit[this.determineCredPubTables(this.meta_data.dossier_credit.applied_templ_name)[0]].type_credit,
        montant_sollicite: val
      };
      this.onClientSlct(load, false);
      this.handleInput();
    },
    'formDataToBeWatched.mode_paiement_analyste': function formDataToBeWatchedMode_paiement_analyste() {
      var load = {
        type_credit: this.formDataToBeWatched.type_credit,
        montant_sollicite: this.formDataToBeWatched.montant_credit
      };
      this.onClientSlct(load, false);
    },
    'formDataToBeWatched.frais': function formDataToBeWatchedFrais() {
      var load = {
        type_credit: this.meta_data.dossier_credit[this.determineCredPubTables(this.meta_data.dossier_credit.applied_templ_name)[0]].type_credit,
        montant_sollicite: this.formDataToBeWatched.montant_credit_propo_analyste
      };
      this.onClientSlct(load, false);
    },
    credits: function credits() {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var load;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              load = {
                type_credit: _this5.meta_data.dossier_credit[_this5.determineCredPubTables(_this5.meta_data.dossier_credit.applied_templ_name)[0]].type_credit,
                montant_sollicite: _this5.formDataToBeWatched.montant_credit_propo_analyste
              };
              if (!_this5.formDataToBeWatched.type_credit) {
                // let lentb = this.meta_data["dossier_credit"]["tbs_in_use"];
                EventBus.$emit("reload-T1");
              } else {
                _this5.onClientSlct(load);
              }
            case 2:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    }
  },
  computed: {
    dossier_credit: function dossier_credit() {
      return this.meta_data["dossier_credit"];
    },
    isInfine: function isInfine() {
      var _this$formDataToBeWat8;
      return ((_this$formDataToBeWat8 = this.formDataToBeWatched.mode_paiement_analyste) === null || _this$formDataToBeWat8 === void 0 ? void 0 : _this$formDataToBeWat8.toLowerCase()) == "in fine";
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/filiale/CA2.vue?vue&type=template&id=2ab38784&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/filiale/CA2.vue?vue&type=template&id=2ab38784&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var render = function render() {
  var _vm$formDataToBeWatch, _vm$authcheckUsr, _vm$authcheckUsr2, _vm$authcheckUsr3, _vm$authcheckUsr4, _vm$authcheckUsr5, _vm$authcheckUsr6, _vm$formDataToBeWatch2, _vm$formDataToBeWatch6, _vm$formDataToBeWatch7, _vm$formDataToBeWatch8;
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    on: {
      contextmenu: function contextmenu($event) {
        return _vm.$refs.menu.open($event, _vm.tb_name);
      }
    }
  }, [_c("div", {
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
      id: "ca2-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Caractéristiques du prêt\n\n                        ")]), _vm._v(" "), _c("div", {
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
    staticClass: "card-body"
  }, [_c("div", {
    attrs: {
      id: "donnees_client"
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "montant_demander"
    }
  }, [_vm._v("Montant de crédit demandé\n                        ")]), _vm._v(" "), _c("currency-input", {
    attrs: {
      value: _vm.montant_demander,
      id: "montant_demander",
      disabled: ""
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(0), _vm._v(" "), _c("currency-input", {
    attrs: {
      value: _vm.montant_credit,
      id: "montant_credit",
      disabled: ""
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(1), _vm._v(" "), _c("currency-input", {
    staticClass: "input-box",
    attrs: {
      value: _vm.formDataToBeWatched.montant_credit_propo_analyste,
      disabled: ((_vm$authcheckUsr = _vm.authcheckUsr) === null || _vm$authcheckUsr === void 0 ? void 0 : _vm$authcheckUsr.what_tobe_produced) == "PV_CONTRE_ANALYSE_FILIALE",
      id: "montant_credit_propo_analyste"
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), ((_vm$authcheckUsr2 = _vm.authcheckUsr) === null || _vm$authcheckUsr2 === void 0 ? void 0 : _vm$authcheckUsr2.what_tobe_produced) == "PV_CONTRE_ANALYSE_FILIALE" ? _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "montant_credit"
    }
  }, [_vm._v(_vm._s(_vm.printRoleSigle())), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]), _vm._v(" "), _c("currency-input", {
    staticClass: "input-box",
    attrs: {
      value: _vm.last_montant_credit_propose,
      disabled: ((_vm$authcheckUsr3 = _vm.authcheckUsr) === null || _vm$authcheckUsr3 === void 0 ? void 0 : _vm$authcheckUsr3.what_tobe_produced) == "PV_CONTRE_ANALYSE_FILIALE",
      id: "last_montant_credit_propose"
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(2), _vm._v(" "), _c("currency-input", {
    attrs: {
      value: _vm.taux_credit,
      "float": "",
      disabled: "",
      id: "taux_credit"
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(3), _vm._v(" "), _c("currency-input", {
    attrs: {
      value: _vm.taux_credit_propose,
      "float": "",
      disabled: "",
      id: "taux_credit_propose"
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(4), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control input-box",
    attrs: _defineProperty({
      value: _vm.formDataToBeWatched.taux_credit_propose_analyste,
      "float": "",
      disabled: "",
      id: "taux_credit_propose_analyste"
    }, "disabled", ((_vm$authcheckUsr4 = _vm.authcheckUsr) === null || _vm$authcheckUsr4 === void 0 ? void 0 : _vm$authcheckUsr4.what_tobe_produced) == "PV_CONTRE_ANALYSE_FILIALE"),
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(5), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.duree_credit,
      expression: "duree_credit",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      readonly: "",
      required: "",
      step: "any",
      type: "number",
      id: "duree_credit"
    },
    domProps: {
      value: _vm.duree_credit
    },
    on: {
      change: function change($event) {
        _vm.duree_credit = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(6), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.duree_credit_demande,
      expression: "duree_credit_demande",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      readonly: "",
      required: "",
      type: "number",
      id: "duree_credit_demande",
      disabled: ""
    },
    domProps: {
      value: _vm.duree_credit_demande
    },
    on: {
      change: function change($event) {
        _vm.duree_credit_demande = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(7), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.formDataToBeWatched.duree_credit_propo_analyste,
      expression: "formDataToBeWatched.duree_credit_propo_analyste",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control input-box",
    attrs: {
      required: "",
      step: "any",
      type: "number",
      disabled: ((_vm$authcheckUsr5 = _vm.authcheckUsr) === null || _vm$authcheckUsr5 === void 0 ? void 0 : _vm$authcheckUsr5.what_tobe_produced) == "PV_CONTRE_ANALYSE_FILIALE",
      id: "duree_credit_propo_analyste"
    },
    domProps: {
      value: _vm.formDataToBeWatched.duree_credit_propo_analyste
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.formDataToBeWatched, "duree_credit_propo_analyste", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(8), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.mode_paiement_demande,
      expression: "mode_paiement_demande",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      required: "",
      step: "any",
      type: "text",
      id: "mode_paiement_demande",
      disabled: ""
    },
    domProps: {
      value: _vm.mode_paiement_demande
    },
    on: {
      change: function change($event) {
        _vm.mode_paiement_demande = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(9), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.mode_paiement,
      expression: "mode_paiement",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      required: "",
      step: "any",
      type: "text",
      id: "mode_paiement",
      disabled: ""
    },
    domProps: {
      value: _vm.mode_paiement
    },
    on: {
      change: function change($event) {
        _vm.mode_paiement = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(10), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.mode_paiement_analyste,
      expression: "\n                                formDataToBeWatched.mode_paiement_analyste\n                            "
    }],
    staticClass: "form-select single-select input-box",
    attrs: {
      required: "",
      disabled: ((_vm$authcheckUsr6 = _vm.authcheckUsr) === null || _vm$authcheckUsr6 === void 0 ? void 0 : _vm$authcheckUsr6.what_tobe_produced) == "PV_CONTRE_ANALYSE_FILIALE",
      id: "mode_paiement_analyste"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formDataToBeWatched, "mode_paiement_analyste", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
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
      value: "Mensuelle"
    }
  }, [_vm._v("Mensuelle")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Bi-mensuel"
    }
  }, [_vm._v("Bi-mensuel")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Trimestriel"
    }
  }, [_vm._v("Trimestriel")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Semestriel"
    }
  }, [_vm._v("Semestriel")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "In fine"
    }
  }, [_vm._v("In fine")])])])]), _vm._v(" "), _c("br"), _vm._v(" "), _vm.isSeen["frais_de_credit"] !== true ? _c("div", [_c("div", {
    staticClass: "relook-header",
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        return _vm.toggleOpen("frais_de_credit");
      }
    }
  }, [_c("h6", {
    "class": " subdiv" + this.tb_name,
    attrs: {
      id: "frais-de-crédit"
    }
  }, [_vm._v("\n                                Frais de crédit\n                                "), _c("chevron-up-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)]), _vm._v(" "), _vm.fraisLoading ? _c("div", {
    staticClass: "d-flex justify-content-center text-center align-items-center text-muted py-4"
  }, [_vm._m(11)]) : ((_vm$formDataToBeWatch2 = _vm.formDataToBeWatched.frais) === null || _vm$formDataToBeWatch2 === void 0 ? void 0 : _vm$formDataToBeWatch2.length) > 0 ? _c("div", {
    staticClass: "card-body"
  }, [_vm._m(12), _vm._v(" "), _vm._l(_vm.formDataToBeWatched.frais, function (frais0, index) {
    return _c("div", {
      key: index,
      staticClass: "row"
    }, [_c("div", {
      staticClass: "col-md-2 pl-4 mb-2"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: frais0.libelle_taux,
        expression: "frais0.libelle_taux"
      }],
      staticClass: "form-control",
      attrs: {
        readonly: "",
        required: "",
        type: "text"
      },
      domProps: {
        value: frais0.libelle_taux
      },
      on: {
        input: [function ($event) {
          if ($event.target.composing) return;
          _vm.$set(frais0, "libelle_taux", $event.target.value);
        }, _vm.handleInput]
      }
    })]), _vm._v(" "), _c("div", {
      staticClass: "col-md-2 pl-4 mb-2"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: frais0.taux_initial,
        expression: "frais0.taux_initial"
      }],
      staticClass: "form-control number",
      attrs: {
        readonly: "",
        required: "",
        type: "number",
        max: "100",
        maxlength: "5"
      },
      domProps: {
        value: frais0.taux_initial
      },
      on: {
        input: [function ($event) {
          if ($event.target.composing) return;
          _vm.$set(frais0, "taux_initial", $event.target.value);
        }, _vm.handleInput]
      }
    })]), _vm._v(" "), _c("div", {
      staticClass: "col-md-3 pl-4 mb-2"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: frais0.taux_modififie,
        expression: "frais0.taux_modififie"
      }],
      staticClass: "form-control",
      attrs: {
        type: "number",
        max: "100",
        pattern: "/^-?\\d+\\.?\\d*$/",
        onKeyPress: "if(this.value.length==5) return false;",
        maxlength: "5",
        disabled: ""
      },
      domProps: {
        value: frais0.taux_modififie
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(frais0, "taux_modififie", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("div", {
      staticClass: "col-md-3 pl-4 mb-2"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: frais0.taux_accorde_arc,
        expression: "frais0.taux_accorde_arc"
      }],
      staticClass: "form-control input-box",
      attrs: {
        type: "number",
        max: "100",
        pattern: "/^-?\\d+\\.?\\d*$/",
        onKeyPress: "if(this.value.length==5) return false;",
        maxlength: "5"
      },
      domProps: {
        value: frais0.taux_accorde_arc
      },
      on: {
        input: [function ($event) {
          if ($event.target.composing) return;
          _vm.$set(frais0, "taux_accorde_arc", $event.target.value);
        }, function ($event) {
          return _vm.fraisData();
        }]
      }
    })]), _vm._v(" "), _c("div", {
      staticClass: "col-md-2 pl-4 mb-2"
    }, [_c("currency-input", {
      attrs: {
        value: frais0.montant_frais,
        readonly: ""
      },
      on: {
        input: _vm.formDataVars
      }
    })], 1)]);
  })], 2) : _vm._e()]) : _c("div", [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        return _vm.toggleOpen("frais_de_credit");
      }
    }
  }, [_c("h6", {
    attrs: {
      id: "frais-de-credit"
    }
  }, [_vm._v("\n                                Frais de crédit\n                                "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)])])]), _vm._v(" "), _vm.isSeen["frais_annexes"] !== true ? _c("div", [_c("div", {
    staticClass: "relook-header",
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        return _vm.toggleOpen("frais_annexes");
      }
    }
  }, [_c("h6", {
    "class": "subdiv" + this.tb_name,
    attrs: {
      id: "frais-annexes"
    }
  }, [_vm._v("\n                            Frais annexes\n                            "), _c("chevron-up-icon", {
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
  }, [_vm._m(13), _vm._v(" "), _vm._l(_vm.formDataToBeWatched.frais_annexes, function (fraisA, index) {
    return _c("div", {
      key: index + "lkojd",
      staticClass: "row"
    }, [_c("div", {
      staticClass: "col-md-2 pl-4 mb-2"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: fraisA.libelle,
        expression: "fraisA.libelle"
      }],
      staticClass: "form-control",
      attrs: {
        readonly: "",
        required: "",
        type: "text"
      },
      domProps: {
        value: fraisA.libelle
      },
      on: {
        input: [function ($event) {
          if ($event.target.composing) return;
          _vm.$set(fraisA, "libelle", $event.target.value);
        }, _vm.handleInput]
      }
    })]), _vm._v(" "), _c("div", {
      staticClass: "col-md-2 pl-4 mb-2"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: fraisA.taux_initial,
        expression: "fraisA.taux_initial"
      }],
      staticClass: "form-control number",
      attrs: {
        readonly: "",
        required: "",
        type: "number",
        max: "100",
        maxlength: "5"
      },
      domProps: {
        value: fraisA.taux_initial
      },
      on: {
        input: [function ($event) {
          if ($event.target.composing) return;
          _vm.$set(fraisA, "taux_initial", $event.target.value);
        }, _vm.handleInput]
      }
    })]), _vm._v(" "), _c("div", {
      staticClass: "col-md-3 pl-4 mb-2"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: fraisA.taux_modififie,
        expression: "fraisA.taux_modififie"
      }],
      staticClass: "form-control",
      attrs: {
        type: "number",
        max: "100",
        pattern: "/^-?\\d+\\.?\\d*$/",
        onKeyPress: "if(this.value.length==5) return false;",
        maxlength: "5",
        disabled: ""
      },
      domProps: {
        value: fraisA.taux_modififie
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(fraisA, "taux_modififie", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("div", {
      staticClass: "col-md-3 pl-4 mb-2"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: fraisA.taux_accorde_arc,
        expression: "fraisA.taux_accorde_arc"
      }],
      staticClass: "form-control input-box",
      attrs: {
        type: "number",
        max: "100",
        pattern: "/^-?\\d+\\.?\\d*$/",
        onKeyPress: "if(this.value.length==5) return false;",
        maxlength: "5"
      },
      domProps: {
        value: fraisA.taux_accorde_arc
      },
      on: {
        input: [function ($event) {
          if ($event.target.composing) return;
          _vm.$set(fraisA, "taux_accorde_arc", $event.target.value);
        }, function ($event) {
          return _vm.calValFraisAn();
        }]
      }
    })]), _vm._v(" "), _c("div", {
      staticClass: "col-md-2 pl-4 mb-2"
    }, [_c("currency-input", {
      attrs: {
        value: fraisA.valeur,
        readonly: ""
      },
      on: {
        input: _vm.formDataVars
      }
    })], 1)]);
  })], 2)]) : _c("div", [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        return _vm.toggleOpen("frais_annexes");
      }
    }
  }, [_c("h6", {
    attrs: {
      id: "frais-annexes"
    }
  }, [_vm._v("\n                                Frais annexes\n                                "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)])])]), _vm._v(" "), _c("br"), _vm._v(" "), _vm.isSeen["caracteristiques_du_pret"] !== true ? _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        return _vm.toggleOpen("caracteristiques_du_pret");
      }
    }
  }, [_c("h6", {
    "class": "subdiv" + this.tb_name,
    attrs: {
      id: "caractéristiques-du-prêt"
    }
  }, [_vm._v("\n                            Caractéristiques du prêt\n                            "), _c("chevron-up-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)]), _vm._v(" "), _c("br"), _vm._v(" "), _vm.formDataToBeWatched.echeance != null ? _c("div", [_c("h6", {
    staticClass: "d-flex justify-content-between"
  }, [_c("span", [_vm._v(" Information du prêt")]), _vm._v(" "), _vm.interetLoading ? _c("span", {
    staticClass: "spinner-border spinner-border-sm text-success me-2"
  }) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered mb-3"
  }, [_c("thead", [_c("tr", {
    staticClass: "bg-relooker"
  }, [_c("th", [_vm._v("Montant du prêt")]), _vm._v(" "), _c("th", [_vm._v("Taux du prêt (%)")]), _vm._v(" "), _c("th", [_vm._v("Durée du prêt (Mois)")]), _vm._v(" "), _c("th", [_vm._v("Intérêt du prêt")]), _vm._v(" "), _c("th", [_vm._v("Echéance "), !_vm.isInfine ? _c("span", [_vm._v("(par mois)")]) : _vm._e()]), _vm._v(" "), _c("th", [_vm._v("Garantie")]), _vm._v(" "), _c("th", [_vm._v("CRSD")]), _vm._v(" "), _c("th", [_vm._v("PEP")])])]), _vm._v(" "), _c("tbody", _vm._l(1, function (i) {
    var _vm$formDataToBeWatch3, _vm$formDataToBeWatch4, _vm$formDataToBeWatch5;
    return _c("tr", {
      key: i
    }, [_c("td", [_vm._v("\n                                            " + _vm._s(_vm._f("formatNumber")(_vm.formDataToBeWatched.montant_credit_propo_analyste)) + "\n                                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                                            " + _vm._s(_vm.formDataToBeWatched.taux_credit_propose_analyste) + "\n                                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                                            " + _vm._s(_vm.formDataToBeWatched.duree_credit_propo_analyste) + "\n                                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                                            " + _vm._s(_vm._f("formatNumber")(Math.ceil(_vm.formDataToBeWatched.echeance.interet))) + "\n                                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                                            " + _vm._s(_vm._f("formatNumber")(Math.ceil(_vm.formDataToBeWatched.echeance.echeance))) + "\n                                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                                            " + _vm._s(_vm._f("formatNumber")((_vm$formDataToBeWatch3 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch3 === void 0 || (_vm$formDataToBeWatch3 = _vm$formDataToBeWatch3.frais_annexes) === null || _vm$formDataToBeWatch3 === void 0 || (_vm$formDataToBeWatch3 = _vm$formDataToBeWatch3[0]) === null || _vm$formDataToBeWatch3 === void 0 ? void 0 : _vm$formDataToBeWatch3.valeur)) + "\n                                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                                            " + _vm._s(_vm._f("formatNumber")((_vm$formDataToBeWatch4 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch4 === void 0 || (_vm$formDataToBeWatch4 = _vm$formDataToBeWatch4.frais_annexes) === null || _vm$formDataToBeWatch4 === void 0 || (_vm$formDataToBeWatch4 = _vm$formDataToBeWatch4[1]) === null || _vm$formDataToBeWatch4 === void 0 ? void 0 : _vm$formDataToBeWatch4.valeur)) + "\n                                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                                            " + _vm._s(_vm._f("formatNumber")((_vm$formDataToBeWatch5 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch5 === void 0 || (_vm$formDataToBeWatch5 = _vm$formDataToBeWatch5.frais_annexes) === null || _vm$formDataToBeWatch5 === void 0 || (_vm$formDataToBeWatch5 = _vm$formDataToBeWatch5[2]) === null || _vm$formDataToBeWatch5 === void 0 ? void 0 : _vm$formDataToBeWatch5.valeur)) + "\n                                        ")])]);
  }), 0)])]), _vm._v(" "), _c("br")]) : _vm._e(), _vm._v(" "), ((_vm$formDataToBeWatch6 = _vm.formDataToBeWatched.frais) === null || _vm$formDataToBeWatch6 === void 0 ? void 0 : _vm$formDataToBeWatch6.length) > 0 ? _c("div", [_c("h6", {
    staticClass: "d-flex justify-content-between"
  }, [_c("span", [_vm._v(" Frais de crédit ")]), _vm._v(" "), _vm.fraisLoading ? _c("span", {
    staticClass: "spinner-border spinner-border-sm text-danger me-2"
  }) : _vm._e()]), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered mb-3"
  }, [_vm._m(14), _vm._v(" "), _c("tbody", [_vm._l((_vm$formDataToBeWatch7 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch7 === void 0 ? void 0 : _vm$formDataToBeWatch7.frais, function (frais0, index) {
    return _c("tr", {
      key: index
    }, [_c("td", [_vm._v(_vm._s(frais0.libelle_taux))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(frais0.taux_modififie))]), _vm._v(" "), _c("td", [_vm._v("\n                                        " + _vm._s(_vm._f("formatNumber")(frais0.montant_frais)) + "\n                                    ")])]);
  }), _vm._v(" "), _c("tr", [_vm._m(15), _vm._v(" "), _c("td", {
    staticStyle: {
      "background-color": "#2c3e50",
      color: "white"
    }
  }, [_vm._v("\n                                        " + _vm._s(_vm._f("formatNumber")(Math.ceil(_vm.formDataToBeWatched.val_total_frais))) + "\n                                    ")])])], 2)]), _vm._v(" "), _c("br")]) : _vm._e(), _vm._v(" "), _vm.formDataToBeWatched.echeance != null ? _c("div", [_c("h6", {
    staticClass: "d-flex justify-content-between"
  }, [_c("span", [_vm._v(" Information de rentabilité")]), _vm._v(" "), _vm.interetLoading ? _c("span", {
    staticClass: "spinner-border spinner-border-sm me-2 text-success"
  }) : _vm._e()]), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered mb-3"
  }, [_vm._m(16), _vm._v(" "), _c("tbody", _vm._l(1, function (i) {
    return _c("tr", {
      key: i
    }, [_c("td", [_vm._v("\n                                        " + _vm._s(_vm.formDataToBeWatched.echeance.coutCapital) + "\n                                        %\n                                    ")]), _vm._v(" "), _c("td", [_vm._v("\n                                        " + _vm._s(_vm._f("formatNumber")(Math.ceil(_vm.formDataToBeWatched.echeance.cashflow))) + "\n                                    ")]), _vm._v(" "), _c("td", [_vm._v("\n                                        " + _vm._s(_vm.formDataToBeWatched.echeance.rentabilitepret) + "\n                                        %\n                                    ")]), _vm._v(" "), _c("td", [_vm._v("\n                                        " + _vm._s(_vm.formDataToBeWatched.echeance.rentabiliteAnnuel) + "\n                                        %\n                                    ")])]);
  }), 0)])]) : _vm._e(), _vm._v(" "), _c("rentacred", {
    staticClass: "my-5",
    attrs: {
      dossier_credit: _vm.dossier_credit,
      niveau: "ARC"
    }
  })], 1) : _c("div", [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        return _vm.toggleOpen("caracteristiques_du_pret");
      }
    }
  }, [_c("h6", {
    attrs: {
      id: "caractéristiques-du-prêt"
    }
  }, [_vm._v("\n                                Caractéristiques du prêt\n                                "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)])])])]), _vm._v(" "), _c("div", {
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
  }, [_vm._v("\n                Fermer le tableau\n            ")])]) : _c("div", {
    staticClass: "card card-width-height"
  }, [_c("br"), _vm._v(" "), _c("div", {
    staticClass: "card-header hdc pb-0 pt-2"
  }, [_c("h6", {
    staticClass: "head",
    attrs: {
      id: "ca2-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Caractéristiques du prêt\n                        ")]), _vm._v(" "), _c("div", {
    staticClass: "col-auto"
  }, [((_vm$formDataToBeWatch8 = _vm.formDataToBeWatched.notes) === null || _vm$formDataToBeWatch8 === void 0 ? void 0 : _vm$formDataToBeWatch8.length) > 0 ? _c("div", {
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
  })], 1)])])])])], 1), _vm._v(" "), _c("div"), _vm._v(" "), _c("note-modal", {
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
      "for": "montant_credit"
    }
  }, [_vm._v("Montant crédit proposé par le CAF"), _c("span", {
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
      "for": "montant_credit"
    }
  }, [_vm._v("Montant crédit proposé par l'ARC"), _c("span", {
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
      "for": "taux_credit"
    }
  }, [_vm._v("Taux du crédit"), _c("span", {
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
      "for": "taux_credit"
    }
  }, [_vm._v("Taux du crédit proposé par le CAF"), _c("span", {
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
      "for": "taux_credit"
    }
  }, [_vm._v("Taux du crédit proposé par l'ARC "), _c("span", {
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
      "for": "taux_credit"
    }
  }, [_vm._v("Durée du crédit proposé par le CAF"), _c("span", {
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
      "for": "taux_credit"
    }
  }, [_vm._v("Durée du crédit demandée"), _c("span", {
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
      "for": "taux_credit"
    }
  }, [_vm._v("Durée du crédit proposé par l'ARC\n                            (Mois)"), _c("span", {
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
      "for": "taux_credit"
    }
  }, [_vm._v("Périodicité de remboursement demandé"), _c("span", {
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
      "for": "taux_credit"
    }
  }, [_vm._v("Périodicité de remboursement proposé par le\n                            CAF"), _c("span", {
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
      "for": "taux_credit"
    }
  }, [_vm._v("Périodicité de remboursement proposé par\n                            l'ARC"), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("span", {
    staticClass: "spinner-border spinner-border"
  }), _vm._v(" "), _c("h5", [_vm._v("\n                                    Chargement des données de frais en cours ... "), _c("br"), _vm._v("\n                                    Ceci peut prendre un peu de temps\n                                ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-2 pl-4"
  }, [_c("label", [_vm._v("Libellé")])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-2 pl-4"
  }, [_c("label", [_vm._v("Taux du crédit (%)")])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 pl-4"
  }, [_c("label", [_vm._v("\n                                        Taux accordée CAF (%)\n                                        "), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 pl-4"
  }, [_c("label", [_vm._v("\n                                        Taux accordée ARC (%)\n                                        "), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-2 pl-4"
  }, [_c("label", [_vm._v("Valeur (ARC)")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-2 pl-4"
  }, [_c("label", [_vm._v("Libellé")])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-2 pl-4"
  }, [_c("label", [_vm._v("Taux du crédit (%)")])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 pl-4"
  }, [_c("label", [_vm._v("\n                                    Taux accordée CAF (%)\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 pl-4"
  }, [_c("label", [_vm._v("\n                                    Taux accordée ARC (%)\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-2 pl-4"
  }, [_c("label", [_vm._v("Valeur (ARC)")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", {
    staticClass: "bg-relooker"
  }, [_c("th", [_vm._v("Libellé du frais")]), _vm._v(" "), _c("th", [_vm._v("Taux du frais")]), _vm._v(" "), _c("th", [_vm._v("Montant du frais")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    attrs: {
      colspan: "2"
    }
  }, [_c("b", [_vm._v("Total Frais")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", {
    staticClass: "bg-relooker"
  }, [_c("th", [_vm._v("Coût du capital")]), _vm._v(" "), _c("th", [_vm._v("Cash Flow Actualisé")]), _vm._v(" "), _c("th", [_vm._v("\n                                        Rentabilité sur la durée du prêt\n                                    ")]), _vm._v(" "), _c("th", [_vm._v("\n                                        Rentabilité annuelle du prêt\n                                    ")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/filiale/CA2.vue?vue&type=style&index=0&id=2ab38784&lang=css&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/filiale/CA2.vue?vue&type=style&index=0&id=2ab38784&lang=css&scoped=true ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "\ninput[data-v-2ab38784] {\r\n    /*border: 1px solid red;*/\n}\n*[data-v-2ab38784] {\r\n    font-family: \"Google sans\";\n}\nlabel[data-v-2ab38784] {\r\n    height: 10px;\r\n    font-size: 13px;\n}\ninput[data-v-2ab38784],\r\nselect[data-v-2ab38784] {\r\n    height: 35px;\r\n    border-color: #34495e;\r\n    color: #57606f;\r\n    font-size: 13px;\r\n    font-weight: bold;\n}\n.card-width-height[data-v-2ab38784] {\r\n    width: 100%;\r\n    height: 100%;\n}\n.head[data-v-2ab38784] {\r\n    color: #f1f2f6;\r\n    font-size: 22px;\n}\n.hdc[data-v-2ab38784] {\r\n    background-color: #57606f;\n}\r\n\r\n/*  List element styles */\n#menu ul[data-v-2ab38784],\r\n#menu li[data-v-2ab38784] {\r\n    list-style: none;\r\n    padding: 0;\r\n    margin: 0;\r\n    display: inline-block;\n}\n#menu li[data-v-2ab38784] {\r\n    padding: 5px 0px;\n}\r\n\r\n/* Main menu links */\n#menu a[data-v-2ab38784]:link,\r\n#menu a[data-v-2ab38784]:visited,\r\n#menu a[data-v-2ab38784]:active {\r\n    text-decoration: none;\r\n    color: var(--link2-color);\r\n    padding: 5px 7px;\r\n    font-weight: bold;\r\n    position: relative;\r\n    z-index: 2;\n}\n#menu a[data-v-2ab38784]:hover,\r\n#menu a[data-v-2ab38784]:focus {\r\n    background-color: var(--link-color);\r\n    color: var(--link2-color);\r\n    text-decoration: underline;\n}\r\n\r\n/* The submenu links container*/\n.subdrop[data-v-2ab38784] {\r\n    background: var(--bg-color);\r\n    height: 0;\r\n    border-top: 0;\r\n    min-width: 100%;\r\n    left: 0;\r\n    margin: 0;\r\n    position: absolute;\r\n    text-align: left;\r\n    top: 100%;\r\n    visibility: hidden;\r\n    height: 1px;\r\n    overflow: hidden;\r\n    z-index: 10;\n}\ninput.input-box[data-v-2ab38784],\r\ntextarea[data-v-2ab38784] {\r\n    background: #00ffff21;\r\n    color: #000;\n}\nselect.input-box[data-v-2ab38784],\r\ntextarea[data-v-2ab38784] {\r\n    background: #00ffff21;\r\n    color: #000;\n}\r\n\r\n\r\n/* Dropdown Parent Link Style */\n.droplink[data-v-2ab38784] {\r\n    display: inline-block;\r\n    min-width: -moz-fit-content;\r\n    min-width: fit-content;\r\n    position: relative;\n}\ninput[type=checkbox][data-v-2ab38784] {\r\n    /* Double-sized Checkboxes */\r\n    /* IE */\r\n    /* FF */\r\n    /* Safari and Chrome */\r\n    /* Opera */\r\n    transform: scale(2);\r\n    padding: 10px;\n}\r\n\r\n/* List elements within the dropdown */\n.subdrop li[data-v-2ab38784] {\r\n    display: block !important;\r\n    padding: 0 !important;\n}\r\n\r\n/* Links within the dropdown list */\n.subdrop a[data-v-2ab38784] {\r\n    display: block;\r\n    padding: 12px 20px;\r\n    white-space: nowrap;\n}\r\n\r\n/* Allows links to show on hover/focus and through keyboard navigation via focus-within */\n.droplink:hover .subdrop[data-v-2ab38784] {\r\n    visibility: visible;\r\n    height: auto;\r\n    z-index: 11;\n}\r\n\r\n/* Separate these to avoid IE completely ignoring the css above */\n.droplink:focus-within .subdrop[data-v-2ab38784] {\r\n    visibility: visible;\r\n    height: auto;\r\n    z-index: 11;\n}\n.badge-sm[data-v-2ab38784] {\r\n    display: inline-block;\r\n    width: 15px;\r\n    height: 15px;\r\n    background: rgba(255, 0, 0, 0.882);\r\n    color: white;\r\n    font-size: 12px;\r\n    font-weight: 500;\r\n    border-radius: 100%;\r\n    position: absolute;\r\n    top: -20%;\r\n    left: 55%;\r\n    text-align: center;\n}\n.relook-header[data-v-2ab38784] {\r\n    color: #fff;\r\n    background-color: #7f8c8d;\r\n    padding: 5px;\r\n    border: none;\n}\n.bg-relooker[data-v-2ab38784] {\r\n    background-color: #2c3e50;\r\n    color: white;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/filiale/CA2.vue?vue&type=style&index=0&id=2ab38784&lang=css&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/filiale/CA2.vue?vue&type=style&index=0&id=2ab38784&lang=css&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA2_vue_vue_type_style_index_0_id_2ab38784_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CA2.vue?vue&type=style&index=0&id=2ab38784&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/filiale/CA2.vue?vue&type=style&index=0&id=2ab38784&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA2_vue_vue_type_style_index_0_id_2ab38784_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA2_vue_vue_type_style_index_0_id_2ab38784_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/contreanalyse/cofina/filiale/CA2.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/components/contreanalyse/cofina/filiale/CA2.vue ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CA2_vue_vue_type_template_id_2ab38784_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CA2.vue?vue&type=template&id=2ab38784&scoped=true */ "./resources/js/components/contreanalyse/cofina/filiale/CA2.vue?vue&type=template&id=2ab38784&scoped=true");
/* harmony import */ var _CA2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CA2.vue?vue&type=script&lang=js */ "./resources/js/components/contreanalyse/cofina/filiale/CA2.vue?vue&type=script&lang=js");
/* harmony import */ var _CA2_vue_vue_type_style_index_0_id_2ab38784_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CA2.vue?vue&type=style&index=0&id=2ab38784&lang=css&scoped=true */ "./resources/js/components/contreanalyse/cofina/filiale/CA2.vue?vue&type=style&index=0&id=2ab38784&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CA2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _CA2_vue_vue_type_template_id_2ab38784_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _CA2_vue_vue_type_template_id_2ab38784_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "2ab38784",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/contreanalyse/cofina/filiale/CA2.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/contreanalyse/cofina/filiale/CA2.vue?vue&type=script&lang=js":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/cofina/filiale/CA2.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CA2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CA2.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/filiale/CA2.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CA2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/contreanalyse/cofina/filiale/CA2.vue?vue&type=style&index=0&id=2ab38784&lang=css&scoped=true":
/*!******************************************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/cofina/filiale/CA2.vue?vue&type=style&index=0&id=2ab38784&lang=css&scoped=true ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA2_vue_vue_type_style_index_0_id_2ab38784_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CA2.vue?vue&type=style&index=0&id=2ab38784&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/filiale/CA2.vue?vue&type=style&index=0&id=2ab38784&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/contreanalyse/cofina/filiale/CA2.vue?vue&type=template&id=2ab38784&scoped=true":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/cofina/filiale/CA2.vue?vue&type=template&id=2ab38784&scoped=true ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA2_vue_vue_type_template_id_2ab38784_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA2_vue_vue_type_template_id_2ab38784_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA2_vue_vue_type_template_id_2ab38784_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CA2.vue?vue&type=template&id=2ab38784&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/filiale/CA2.vue?vue&type=template&id=2ab38784&scoped=true");


/***/ })

}]);