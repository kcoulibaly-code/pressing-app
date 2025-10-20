"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_forms_afg_fiche_cotation_es_DCE-FCES_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/fiche_cotation_es/DCE-FCES.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/fiche_cotation_es/DCE-FCES.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/ContextMenu */ "./resources/js/components/shared/ContextMenu.vue");
/* harmony import */ var _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/ContextMenuItem */ "./resources/js/components/shared/ContextMenuItem.vue");
/* harmony import */ var _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vueform/multiselect/dist/multiselect.vue2 */ "./node_modules/@vueform/multiselect/dist/multiselect.vue2.js");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/auth.service */ "./resources/js/services/auth.service.js");
/* harmony import */ var _services_credit_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/credit.service */ "./resources/js/services/credit.service.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), c(GeneratorFunctionPrototype, u, GeneratorFunction.displayName = "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }







window.$ = window.jQuery = __webpack_require__(/*! jquery/dist/jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Fiche_de_cotation_ESG",
  display: "Fiche de cotation ESG",
  components: {
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.PlusIcon,
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.TrashIcon,
    MoreVerticalIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.MoreVerticalIcon,
    ChevronUpIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.ChevronUpIcon,
    ChevronDownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.ChevronDownIcon,
    ContextMenu: _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_0__["default"],
    ContextMenuItem: _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_1__["default"],
    Multiselect: _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_2__["default"],
    AirplayIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.AirplayIcon,
    BookOpenIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.BookOpenIcon
  },
  props: {
    meta_data: Object,
    tb_name: String,
    tb_display_name: String
  },
  created: function created() {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  } // await Credit.loadCotationData()
  //   .then(res => {
  //     this.cotationData(res);
  //   }).catch(err => {
  //     console.log(err);
  //   });
  ,
  mounted: function mounted() {
    this.tableClosedOrOpened();
    this.loadRetrieved();
    this.loadTbAttrs();
  },
  data: function data() {
    var vm = this;
    return {
      defaultSuretes: [],
      newSurete: "",
      suretes_diverses: [],
      ebapisHost: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_3__["default"].host,
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
      cautions: false,
      result: 0,
      listingNote: false,
      date: new Date().getFullYear(),
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
      formDataToBeWatched: {
        notes: [],
        environmentalResponses: [],
        environmentalTotals: [],
        environmentalComments: [],
        environmentalTotalScore: 0,
        socialResponses: [],
        socialTotals: [],
        socialComments: [],
        socialTotalScore: 0,
        governanceResponses: [],
        governanceTotals: [],
        governanceComments: [],
        governanceTotalScore: 0,
        globalEsgComment: ""
      },
      cotation_criteres: [],
      cotation_elements: [],
      cotation_intervals: [],
      cotation_elements_secteurs: [],
      cotationLoading: false,
      environmentalCriteria: [{
        theme: "Gestion des ressources Émissions de GES",
        question: "L’entreprise utilise-t-elle des énergies renouvelables ou a-t-elle des pratiques éco-efficaces ?",
        ponderation: "20%"
      }, {
        theme: "Gestion des ressources Émissions de GES",
        question: "Quelles sont les mesures prises pour réduire les émissions de CO2, et autres GES ?",
        ponderation: "30%"
      }, {
        theme: "Gestion des déchets",
        question: "Comment l’entreprise gère-t-elle ses déchets (recyclage, réutilisation, élimination) ?",
        ponderation: "20%"
      }, {
        theme: "Biodiversité",
        question: "L’entreprise a-t-elle un impact sur les écosystèmes locaux ? Comment les préserve-t-elle ?",
        ponderation: "15%"
      }, {
        theme: "Risques environnementaux",
        question: "L’entreprise est-elle exposée à des risques climatiques ou réglementaires ? Comment y fait-elle face ?",
        ponderation: "15%"
      }],
      socialCriteria: [{
        theme: "Conditions de travail",
        question: "Les conditions de travail sont-elles sûres et équitables ?",
        ponderation: "25%"
      }, {
        theme: "Diversité et inclusion",
        question: "L’entreprise promeut-elle la diversité et l’inclusion ?",
        ponderation: "20%"
      }, {
        theme: "Relations avec les communautés",
        question: "L’entreprise contribue-t-elle au développement local ?",
        ponderation: "20%"
      }, {
        theme: "Formation et développement",
        question: "Les employés ont-ils accès à des programmes de formation et de développement ?",
        ponderation: "15%"
      }, {
        theme: "Santé et bien-être",
        question: "L’entreprise soutient-elle le bien-être de ses employés ?",
        ponderation: "20%"
      }],
      governanceCriteria: [{
        theme: "Éthique et transparence",
        question: "L'entreprise a-t-elle une politique de lutte contre la corruption et une communication transparente ?",
        ponderation: "25%"
      }, {
        theme: "Structure de gouvernance",
        question: "La gouvernance est-elle indépendante et équilibrée ?",
        ponderation: "20%"
      }, {
        theme: "Gestion des risques",
        question: "L'entreprise identifie-t-elle et gère-t-elle ses risques (opérationnels, financiers, ESG) ?",
        ponderation: "25%"
      }, {
        theme: "Rémunération des dirigeants",
        question: "Les rémunérations des dirigeants sont-elles alignées sur les performances ESG ?",
        ponderation: "15%"
      }, {
        theme: "Engagement des actionnaires",
        question: "L'entreprise dialogue-t-elle avec ses actionnaires et respecte-t-elle leurs droits ?",
        ponderation: "15%"
      }],
      esgRanges: [{
        score: "[0-1.5]",
        category: "D",
        factor: "0",
        description: "Risque ESG élevé, nécessité d’améliorations significatives."
      }, {
        score: "[1.6-3]",
        category: "C",
        factor: "2",
        description: "Risque ESG modéré, potentiel d’amélioration."
      }, {
        score: "[3.1-4]",
        category: "B",
        factor: "3",
        description: "Bonnes pratiques ESG, faible risque."
      }, {
        score: "[4.1-5]",
        category: "A",
        factor: "4",
        description: "Excellence ESG, entreprise leader."
      }]
    };
  },
  computed: {
    globalEsgScore: function globalEsgScore() {
      var envScore = this.formDataToBeWatched.environmentalTotalScore || 0;
      var socScore = this.formDataToBeWatched.socialTotalScore || 0;
      var govScore = this.formDataToBeWatched.governanceTotalScore || 0;
      var globalScore = envScore * 0.4 + socScore * 0.3 + govScore * 0.3;
      return globalScore.toFixed(1);
    }
  },
  methods: {
    onChange: function onChange(evt) {
      console.log(evt);
      if (evt.target.defaultValue == "non") {
        this.cautions = false;
      } else {
        this.cautions = true;
      }
    },
    tableClosedOrOpened: function tableClosedOrOpened() {
      this.seen = this.fetchClosedTables(this.tb_name + this.meta_data['cred_pub_key']);
    },
    openNotesModal: function openNotesModal() {
      var listing = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.listingNote = listing;
      this.$modal.show(this.tb_name);
    },
    setCoSignataireVars: function setCoSignataireVars(event, index) {
      this.co_signataire[index][event[0]] = event[1];
      this.handleInput();
    },
    loadRetrieved: function loadRetrieved() {
      var lentb = this.meta_data["dossier_credit"]["tbs_in_use"];
      var createdKey = this.tb_name;
      var createdKeyArr = createdKey.split("tb");
      createdKey = "cred_pub_tb_" + createdKeyArr[1];
      if (lentb.length > 0 && this.meta_data["dossier_credit"][createdKey] != undefined) {
        this.formDataToBeWatched = this.meta_data["dossier_credit"][createdKey];
      }
      // Initialize arrays if not present
      if (!this.formDataToBeWatched.environmentalResponses) {
        this.formDataToBeWatched.environmentalResponses = Array(this.environmentalCriteria.length).fill("");
      }
      if (!this.formDataToBeWatched.environmentalTotals) {
        this.formDataToBeWatched.environmentalTotals = Array(this.environmentalCriteria.length).fill(0);
      }
      if (!this.formDataToBeWatched.environmentalComments) {
        this.formDataToBeWatched.environmentalComments = Array(this.environmentalCriteria.length).fill("");
      }
      if (!this.formDataToBeWatched.socialResponses) {
        this.formDataToBeWatched.socialResponses = Array(this.socialCriteria.length).fill("");
      }
      if (!this.formDataToBeWatched.socialTotals) {
        this.formDataToBeWatched.socialTotals = Array(this.socialCriteria.length).fill(0);
      }
      if (!this.formDataToBeWatched.socialComments) {
        this.formDataToBeWatched.socialComments = Array(this.socialCriteria.length).fill("");
      }
      if (!this.formDataToBeWatched.governanceResponses) {
        this.formDataToBeWatched.governanceResponses = Array(this.governanceCriteria.length).fill("");
      }
      if (!this.formDataToBeWatched.governanceTotals) {
        this.formDataToBeWatched.governanceTotals = Array(this.governanceCriteria.length).fill(0);
      }
      if (!this.formDataToBeWatched.governanceComments) {
        this.formDataToBeWatched.governanceComments = Array(this.governanceCriteria.length).fill("");
      }
      if (!this.formDataToBeWatched.globalEsgComment) {
        this.formDataToBeWatched.globalEsgComment = "";
      }
      // Calculate totals after loading data
      this.calculateTotals('environmental');
      this.calculateTotals('social');
      this.calculateTotals('governance');
    },
    launchAutoSaver: function launchAutoSaver() {
      var _this = this;
      _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["default"].loadUserData().then(function (res) {
        _this.send2Backend(res, 0, 0);
      })["catch"](function (err) {
        _this.loadWithError(err);
      });
    },
    somX3: function somX3(ob, key) {
      var som = 0;
      ob.filter(function (elm) {
        var _elm$key;
        som += parseInt((_elm$key = elm[key]) === null || _elm$key === void 0 ? void 0 : _elm$key.toString().replace(/\s/g, ''));
      });
      return som;
    },
    loadTbAttrs: function loadTbAttrs() {
      var l = [];
      var topdivel = this.$refs.topdiv;
      var k = document.querySelectorAll(".subdiv" + this.tb_name);
      if (k != undefined && k.length > 0) {
        k.forEach(function (e) {
          l.push(e.innerText);
        });
      }
      var p = {
        name_of_title: topdivel.innerText,
        list_of_content: l,
        id: "f26-1-head"
      };
      this.$emit("load-buffer", p);
    },
    retract: function retract() {
      this.seen = !this.seen;
      var a = {
        "tb_name": this.tb_name + this.meta_data['cred_pub_key'],
        "status": this.seen
      };
      EventBus.$emit("savedclosed-table", a);
    },
    setTbVal: function setTbVal(val) {
      this.cred_pub_key = val;
    },
    loadWithError: function loadWithError(err) {
      // window.location.href = "/login";
    },
    send2Backend: function send2Backend(res, newVal, oldVal) {
      var _this2 = this;
      this.authcheck = true;
      this.authcheckUsr = res.data;
      this.authcheckStatus = res.status;
      if (this.authcheckStatus === 401) {
        // window.location.href = "/login";
      }
      if (this.authcheck === true) {
        this.$emit('autosaving');
        this.$axios.post(this.ebapisHost + "creditbuilder/api/v1/autosaving/", {
          user: this.authcheckUsr,
          meta_parseable: this.meta_parseable,
          filledData: this.formDataToBeWatched
        }).then(function (response) {
          _this2.$emit('autosaving');
          var tbFetcheData = response.data;
          if (tbFetcheData["is_success"] === true) {
            _this2.$emit("load-shell");
          }
        })["catch"](function (error) {
          _this2.$Progress.finish();
          console.log(error);
        });
      } else {
        alert("Unauthenticated");
      }
    },
    handleInput: function handleInput(evt, index) {},
    division: function division(item, items) {
      if (items != 0) {
        return parseInt(item) / parseInt(items) * 100;
      } else {
        return 0;
      }
    },
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
    deleteTB: function deleteTB() {
      if (confirm('Êtes-vous sûr de vouloir supprimer ce tableau ?')) {
        this.$emit('delete-tb', {
          tb_name: this.tb_name
        });
      }
    },
    formatDateForInput: function formatDateForInput(data) {
      var day = data.getDate() <= 9 ? "0" + data.getDate() : data.getDate();
      var monthNumber = data.getMonth() + 1;
      var month = monthNumber <= 9 ? "0" + monthNumber : monthNumber;
      return data.getFullYear() + "-" + month + "-" + day;
    },
    cotationData: function cotationData(res) {
      var _this3 = this;
      this.cotation_criteres = res.data.data.cotation_criteres;
      this.cotation_elements = res.data.data.cotation_elements;
      this.cotation_intervals = res.data.data.cotation_intervals;
      this.cotation_elements.forEach(function (element) {
        if (element.cotation_critere_id == 1) {
          _this3.cotation_elements_secteurs.push(element);
        }
      });
      this.loadRetrieved();
    },
    handleResponseChange: function handleResponseChange(category, index, value) {
      var responses;
      if (category === 'environmental') {
        responses = this.formDataToBeWatched.environmentalResponses;
      } else if (category === 'social') {
        responses = this.formDataToBeWatched.socialResponses;
      } else if (category === 'governance') {
        responses = this.formDataToBeWatched.governanceResponses;
      }

      // If the selected value is already set, uncheck it (set to empty string)
      // Otherwise, set the selected value and ensure mutual exclusivity
      if (responses[index] === value) {
        responses[index] = "";
      } else {
        responses[index] = value;
      }

      // Force update to ensure reactivity
      if (category === 'environmental') {
        this.formDataToBeWatched.environmentalResponses = _toConsumableArray(responses);
      } else if (category === 'social') {
        this.formDataToBeWatched.socialResponses = _toConsumableArray(responses);
      } else if (category === 'governance') {
        this.formDataToBeWatched.governanceResponses = _toConsumableArray(responses);
      }

      // Recalculate totals after response change
      this.calculateTotals(category);
    },
    calculateTotals: function calculateTotals(category) {
      var criteria, responses, totals, totalScoreKey;
      if (category === 'environmental') {
        criteria = this.environmentalCriteria;
        responses = this.formDataToBeWatched.environmentalResponses;
        totals = this.formDataToBeWatched.environmentalTotals;
        totalScoreKey = 'environmentalTotalScore';
      } else if (category === 'social') {
        criteria = this.socialCriteria;
        responses = this.formDataToBeWatched.socialResponses;
        totals = this.formDataToBeWatched.socialTotals;
        totalScoreKey = 'socialTotalScore';
      } else if (category === 'governance') {
        criteria = this.governanceCriteria;
        responses = this.formDataToBeWatched.governanceResponses;
        totals = this.formDataToBeWatched.governanceTotals;
        totalScoreKey = 'governanceTotalScore';
      }
      var totalScore = 0;
      totals = responses.map(function (response, index) {
        var ponderation = parseFloat(criteria[index].ponderation) / 100;
        var score = response === 'Oui' ? 1 : response === 'Non' ? 0 : 0;
        var weightedScore = score * ponderation;
        totalScore += weightedScore;
        return weightedScore;
      });

      // Scale the total score to a 0-5 range
      totalScore = totalScore / 1 * 5;
      if (category === 'environmental') {
        this.formDataToBeWatched.environmentalTotals = totals;
        this.formDataToBeWatched.environmentalTotalScore = totalScore.toFixed(1);
      } else if (category === 'social') {
        this.formDataToBeWatched.socialTotals = totals;
        this.formDataToBeWatched.socialTotalScore = totalScore.toFixed(1);
      } else if (category === 'governance') {
        this.formDataToBeWatched.governanceTotals = totals;
        this.formDataToBeWatched.governanceTotalScore = totalScore.toFixed(1);
      }
    },
    getTotalClass: function getTotalClass(total) {
      var score = parseFloat(total) || 0;
      if (score >= 0 && score <= 1.5) return 'bg-danger text-white';
      if (score >= 1.6 && score <= 3) return 'bg-orange';
      if (score >= 3.1 && score <= 5) return 'bg-green text-white';
      return '';
    },
    getScoreClass: function getScoreClass(range) {
      var score = parseFloat(this.globalEsgScore);
      if (range.score === "[0-1.5]" && score >= 0 && score <= 1.5) return 'bg-orange text-white';
      if (range.score === "[1.6-3]" && score >= 1.6 && score <= 3) return 'bg-maroon text-white';
      if (range.score === "[3.1-4]" && score >= 3.1 && score <= 4) return 'bg-green text-white';
      if (range.score === "[4.1-5]" && score >= 4.1 && score <= 5) return 'bg-success text-white';
      return '';
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/fiche_cotation_es/DCE-FCES.vue?vue&type=template&id=62d8515b&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/fiche_cotation_es/DCE-FCES.vue?vue&type=template&id=62d8515b&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      id: "f26-1-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n              " + _vm._s(_vm.tb_display_name) + " : Fiche de cotation ESG\n            ")]), _vm._v(" "), _c("div", {
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
    staticClass: "badge-sm pb-3"
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
        return _vm.$modal.show("instruction_fiche_de_cotation");
      }
    }
  }), _vm._v(" "), _c("airplay-icon", {
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
        return _vm.$modal.show("fiche_de_cotation");
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
    staticClass: "card-body"
  }, [_vm.cotationLoading ? _c("div", {
    staticClass: "d-flex justify-content-center text-center align-items-center text-muted py-4"
  }, [_vm._m(0)]) : _c("div", {
    staticClass: "row px-3"
  }, [_c("div", {
    staticClass: "table-responsive mb-5"
  }, [_c("h5", {
    staticClass: "mb-3 sticky-theme"
  }, [_vm._v("1. Critères Environnementaux (E) - Pondération totale : 40%")]), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(1), _vm._v(" "), _c("tbody", [_vm._l(_vm.environmentalCriteria, function (criterion, index) {
    return _c("tr", {
      key: "e-" + index
    }, [_c("td", {
      staticClass: "text-nowrap sticky-theme"
    }, [_c("b", [_vm._v(_vm._s(criterion.theme))])]), _vm._v(" "), _c("td", {
      staticClass: "sticky-question"
    }, [_vm._v(_vm._s(criterion.question))]), _vm._v(" "), _c("td", {
      staticClass: "text-center text-nowrap"
    }, [_c("div", {
      staticClass: "d-flex justify-content-center align-items-center"
    }, [_c("div", {
      staticClass: "mr-3"
    }, [_c("input", {
      attrs: {
        type: "checkbox",
        id: "env-oui-" + index
      },
      domProps: {
        checked: _vm.formDataToBeWatched.environmentalResponses[index] === "Oui"
      },
      on: {
        change: function change($event) {
          return _vm.handleResponseChange("environmental", index, "Oui");
        }
      }
    }), _vm._v(" "), _c("label", {
      staticClass: "ml-1",
      attrs: {
        "for": "env-oui-" + index
      }
    }, [_vm._v("Oui")])]), _vm._v(" "), _c("div", [_c("input", {
      attrs: {
        type: "checkbox",
        id: "env-non-" + index
      },
      domProps: {
        checked: _vm.formDataToBeWatched.environmentalResponses[index] === "Non"
      },
      on: {
        change: function change($event) {
          return _vm.handleResponseChange("environmental", index, "Non");
        }
      }
    }), _vm._v(" "), _c("label", {
      staticClass: "ml-1",
      attrs: {
        "for": "env-non-" + index
      }
    }, [_vm._v("Non")])])])]), _vm._v(" "), _c("td", {
      staticClass: "text-center text-nowrap"
    }, [_vm._v(_vm._s(criterion.ponderation))]), _vm._v(" "), _c("td", {
      staticClass: "text-center text-nowrap"
    }, [_vm._v("\n                    " + _vm._s(_vm.formDataToBeWatched.environmentalTotals[index] || 0) + "\n                  ")]), _vm._v(" "), _c("td", [_c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.formDataToBeWatched.environmentalComments[index],
        expression: "formDataToBeWatched.environmentalComments[index]"
      }],
      staticClass: "form-control",
      attrs: {
        placeholder: "Saisir un commentaire...",
        rows: "3"
      },
      domProps: {
        value: _vm.formDataToBeWatched.environmentalComments[index]
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(_vm.formDataToBeWatched.environmentalComments, index, $event.target.value);
        }
      }
    })])]);
  }), _vm._v(" "), _c("tr", [_vm._m(2), _vm._v(" "), _c("td"), _vm._v(" "), _c("td", [_vm._v("TOTAL (E)")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold text-center"
  }, [_vm._v("40%")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold text-center",
    "class": _vm.getTotalClass(_vm.formDataToBeWatched.environmentalTotalScore)
  }, [_vm._v("\n                    " + _vm._s(_vm.formDataToBeWatched.environmentalTotalScore || 0) + "\n                  ")]), _vm._v(" "), _c("td")])], 2)])]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive mb-5"
  }, [_c("h5", {
    staticClass: "mb-3 sticky-theme"
  }, [_vm._v("2. Critères Sociaux (S) - Pondération totale : 30%")]), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(3), _vm._v(" "), _c("tbody", [_vm._l(_vm.socialCriteria, function (criterion, index) {
    return _c("tr", {
      key: "s-" + index
    }, [_c("td", {
      staticClass: "text-nowrap sticky-theme"
    }, [_c("b", [_vm._v(_vm._s(criterion.theme))])]), _vm._v(" "), _c("td", {
      staticClass: "sticky-question"
    }, [_vm._v(_vm._s(criterion.question))]), _vm._v(" "), _c("td", {
      staticClass: "text-center text-nowrap"
    }, [_c("div", {
      staticClass: "d-flex justify-content-center align-items-center"
    }, [_c("div", {
      staticClass: "mr-3"
    }, [_c("input", {
      attrs: {
        type: "checkbox",
        id: "social-oui-" + index
      },
      domProps: {
        checked: _vm.formDataToBeWatched.socialResponses[index] === "Oui"
      },
      on: {
        change: function change($event) {
          return _vm.handleResponseChange("social", index, "Oui");
        }
      }
    }), _vm._v(" "), _c("label", {
      staticClass: "ml-1",
      attrs: {
        "for": "social-oui-" + index
      }
    }, [_vm._v("Oui")])]), _vm._v(" "), _c("div", [_c("input", {
      attrs: {
        type: "checkbox",
        id: "social-non-" + index
      },
      domProps: {
        checked: _vm.formDataToBeWatched.socialResponses[index] === "Non"
      },
      on: {
        change: function change($event) {
          return _vm.handleResponseChange("social", index, "Non");
        }
      }
    }), _vm._v(" "), _c("label", {
      staticClass: "ml-1",
      attrs: {
        "for": "social-non-" + index
      }
    }, [_vm._v("Non")])])])]), _vm._v(" "), _c("td", {
      staticClass: "text-center text-nowrap"
    }, [_vm._v(_vm._s(criterion.ponderation))]), _vm._v(" "), _c("td", {
      staticClass: "text-center text-nowrap"
    }, [_vm._v("\n                    " + _vm._s(_vm.formDataToBeWatched.socialTotals[index] || 0) + "\n                  ")]), _vm._v(" "), _c("td", [_c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.formDataToBeWatched.socialComments[index],
        expression: "formDataToBeWatched.socialComments[index]"
      }],
      staticClass: "form-control",
      attrs: {
        placeholder: "Saisir un commentaire...",
        rows: "3"
      },
      domProps: {
        value: _vm.formDataToBeWatched.socialComments[index]
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(_vm.formDataToBeWatched.socialComments, index, $event.target.value);
        }
      }
    })])]);
  }), _vm._v(" "), _c("tr", [_vm._m(4), _vm._v(" "), _c("td"), _vm._v(" "), _c("td", [_vm._v("TOTAL (S)")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold text-center"
  }, [_vm._v("30%")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold text-center",
    "class": _vm.getTotalClass(_vm.formDataToBeWatched.socialTotalScore)
  }, [_vm._v("\n                    " + _vm._s(_vm.formDataToBeWatched.socialTotalScore || 0) + "\n                  ")]), _vm._v(" "), _c("td")])], 2)])]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive mb-5"
  }, [_c("h5", {
    staticClass: "mb-3 sticky-theme"
  }, [_vm._v("3. Critères de Gouvernance (G) - Pondération totale : 30%")]), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(5), _vm._v(" "), _c("tbody", [_vm._l(_vm.governanceCriteria, function (criterion, index) {
    return _c("tr", {
      key: "g-" + index
    }, [_c("td", {
      staticClass: "text-nowrap sticky-theme"
    }, [_c("b", [_vm._v(_vm._s(criterion.theme))])]), _vm._v(" "), _c("td", {
      staticClass: "sticky-question"
    }, [_vm._v(_vm._s(criterion.question))]), _vm._v(" "), _c("td", {
      staticClass: "text-center text-nowrap"
    }, [_c("div", {
      staticClass: "d-flex justify-content-center align-items-center"
    }, [_c("div", {
      staticClass: "mr-3"
    }, [_c("input", {
      attrs: {
        type: "checkbox",
        id: "gov-oui-" + index
      },
      domProps: {
        checked: _vm.formDataToBeWatched.governanceResponses[index] === "Oui"
      },
      on: {
        change: function change($event) {
          return _vm.handleResponseChange("governance", index, "Oui");
        }
      }
    }), _vm._v(" "), _c("label", {
      staticClass: "ml-1",
      attrs: {
        "for": "gov-oui-" + index
      }
    }, [_vm._v("Oui")])]), _vm._v(" "), _c("div", [_c("input", {
      attrs: {
        type: "checkbox",
        id: "gov-non-" + index
      },
      domProps: {
        checked: _vm.formDataToBeWatched.governanceResponses[index] === "Non"
      },
      on: {
        change: function change($event) {
          return _vm.handleResponseChange("governance", index, "Non");
        }
      }
    }), _vm._v(" "), _c("label", {
      staticClass: "ml-1",
      attrs: {
        "for": "gov-non-" + index
      }
    }, [_vm._v("Non")])])])]), _vm._v(" "), _c("td", {
      staticClass: "text-center text-nowrap"
    }, [_vm._v(_vm._s(criterion.ponderation))]), _vm._v(" "), _c("td", {
      staticClass: "text-center text-nowrap"
    }, [_vm._v("\n                    " + _vm._s(_vm.formDataToBeWatched.governanceTotals[index] || 0) + "\n                  ")]), _vm._v(" "), _c("td", [_c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.formDataToBeWatched.governanceComments[index],
        expression: "formDataToBeWatched.governanceComments[index]"
      }],
      staticClass: "form-control",
      attrs: {
        placeholder: "Saisir un commentaire...",
        rows: "3"
      },
      domProps: {
        value: _vm.formDataToBeWatched.governanceComments[index]
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(_vm.formDataToBeWatched.governanceComments, index, $event.target.value);
        }
      }
    })])]);
  }), _vm._v(" "), _c("tr", [_vm._m(6), _vm._v(" "), _c("td"), _vm._v(" "), _c("td", [_vm._v("TOTAL (G)")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold text-center"
  }, [_vm._v("30%")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold text-center",
    "class": _vm.getTotalClass(_vm.formDataToBeWatched.governanceTotalScore)
  }, [_vm._v("\n                    " + _vm._s(_vm.formDataToBeWatched.governanceTotalScore || 0) + "\n                  ")]), _vm._v(" "), _c("td")])], 2)])]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive mb-5"
  }, [_c("h5", {
    staticClass: "mb-3"
  }, [_vm._v("Avis ESG global du Gestionnaire")]), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(7), _vm._v(" "), _c("tbody", _vm._l(_vm.esgRanges, function (range, index) {
    return _c("tr", {
      key: "esg-range-" + index,
      "class": _vm.getScoreClass(range)
    }, [_c("td", {
      staticClass: "text-center text-nowrap"
    }, [_vm._v(_vm._s(range.score))]), _vm._v(" "), _c("td", {
      staticClass: "text-center text-nowrap"
    }, [_vm._v(_vm._s(range.category))]), _vm._v(" "), _c("td", {
      staticClass: "text-center text-nowrap"
    }, [_vm._v(_vm._s(range.factor))]), _vm._v(" "), _c("td", {
      staticClass: "text-nowrap"
    }, [_vm._v(_vm._s(range.description))])]);
  }), 0)])])])]), _vm._v(" "), _c("div", {
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
  }, [_vm._v("\n        Fermer le tableau\n      ")])]) : _c("div", {
    staticClass: "card card-width-height"
  }, [_c("br"), _vm._v(" "), _c("div", {
    staticClass: "card-header hdc pb-0 pt-2"
  }, [_c("h6", {
    staticClass: "head",
    attrs: {
      id: "f26-1-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                      " + _vm._s(_vm.tb_display_name) + " : Fiche de cotation ESG\n                  ")]), _vm._v(" "), _c("div", {
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
        return _vm.$modal.show("instruction_fiche_de_cotation");
      }
    }
  }), _vm._v(" "), _c("airplay-icon", {
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
        return _vm.$modal.show("fiche_de_cotation");
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
      name: "fiche_de_cotation",
      images: ["/images/capture_afg/exemples/esg1.png", "/images/capture_afg/exemples/esg2.png"]
    }
  }), _vm._v(" "), _c("ketri-modal", {
    attrs: {
      name: "instruction_fiche_de_cotation",
      images: ["/images/capture_afg/instructions/esg3.png"],
      title: "Instructions"
    }
  })], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("span", {
    staticClass: "spinner-border spinner-border"
  }), _vm._v(" "), _c("h5", [_vm._v("\n              Chargement des données en cours ... "), _c("br"), _vm._v("\n              Ceci peut prendre un peu de temps\n            ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", {
    staticClass: "text-center vertical-middle text-nowrap sticky-theme",
    staticStyle: {
      "min-width": "200px"
    }
  }, [_vm._v("Thème")]), _vm._v(" "), _c("th", {
    staticClass: "text-center vertical-middle text-nowrap sticky-question",
    staticStyle: {
      "min-width": "300px"
    }
  }, [_vm._v("Questions Clés")]), _vm._v(" "), _c("th", {
    staticClass: "text-center vertical-middle text-nowrap",
    staticStyle: {
      "min-width": "150px"
    }
  }, [_vm._v("Réponse")]), _vm._v(" "), _c("th", {
    staticClass: "text-center vertical-middle text-nowrap",
    staticStyle: {
      "min-width": "120px"
    }
  }, [_vm._v("Pondération")]), _vm._v(" "), _c("th", {
    staticClass: "text-center vertical-middle text-nowrap",
    staticStyle: {
      "min-width": "100px"
    }
  }, [_vm._v("Total")]), _vm._v(" "), _c("th", {
    staticClass: "text-center vertical-middle text-nowrap",
    staticStyle: {
      "min-width": "300px"
    }
  }, [_vm._v("Commentaires")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "fw-bold"
  }, [_c("i")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", {
    staticClass: "text-center vertical-middle text-nowrap sticky-theme",
    staticStyle: {
      "min-width": "200px"
    }
  }, [_vm._v("Thème")]), _vm._v(" "), _c("th", {
    staticClass: "text-center vertical-middle text-nowrap sticky-question",
    staticStyle: {
      "min-width": "300px"
    }
  }, [_vm._v("Questions Clés")]), _vm._v(" "), _c("th", {
    staticClass: "text-center vertical-middle text-nowrap",
    staticStyle: {
      "min-width": "150px"
    }
  }, [_vm._v("Réponse")]), _vm._v(" "), _c("th", {
    staticClass: "text-center vertical-middle text-nowrap",
    staticStyle: {
      "min-width": "120px"
    }
  }, [_vm._v("Pondération")]), _vm._v(" "), _c("th", {
    staticClass: "text-center vertical-middle text-nowrap",
    staticStyle: {
      "min-width": "100px"
    }
  }, [_vm._v("Total")]), _vm._v(" "), _c("th", {
    staticClass: "text-center vertical-middle text-nowrap",
    staticStyle: {
      "min-width": "300px"
    }
  }, [_vm._v("Commentaires")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "fw-bold"
  }, [_c("i")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", {
    staticClass: "text-center vertical-middle text-nowrap sticky-theme",
    staticStyle: {
      "min-width": "200px"
    }
  }, [_vm._v("Thème")]), _vm._v(" "), _c("th", {
    staticClass: "text-center vertical-middle text-nowrap sticky-question",
    staticStyle: {
      "min-width": "300px"
    }
  }, [_vm._v("Questions Clés")]), _vm._v(" "), _c("th", {
    staticClass: "text-center vertical-middle text-nowrap",
    staticStyle: {
      "min-width": "150px"
    }
  }, [_vm._v("Réponse")]), _vm._v(" "), _c("th", {
    staticClass: "text-center vertical-middle text-nowrap",
    staticStyle: {
      "min-width": "120px"
    }
  }, [_vm._v("Pondération")]), _vm._v(" "), _c("th", {
    staticClass: "text-center vertical-middle text-nowrap",
    staticStyle: {
      "min-width": "100px"
    }
  }, [_vm._v("Total")]), _vm._v(" "), _c("th", {
    staticClass: "text-center vertical-middle text-nowrap",
    staticStyle: {
      "min-width": "300px"
    }
  }, [_vm._v("Commentaires")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "fw-bold"
  }, [_c("i")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", {
    staticClass: "text-center vertical-middle text-nowrap"
  }, [_vm._v("Score ESG Global")]), _vm._v(" "), _c("th", {
    staticClass: "text-center vertical-middle text-nowrap"
  }, [_vm._v("Catégorie")]), _vm._v(" "), _c("th", {
    staticClass: "text-center vertical-middle text-nowrap"
  }, [_vm._v("Facteur")]), _vm._v(" "), _c("th", {
    staticClass: "text-center vertical-middle text-nowrap"
  }, [_vm._v("Description")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/fiche_cotation_es/DCE-FCES.vue?vue&type=style&index=0&id=62d8515b&lang=css&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/fiche_cotation_es/DCE-FCES.vue?vue&type=style&index=0&id=62d8515b&lang=css&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n*[data-v-62d8515b] {\n    font-family: \"Google sans\";\n}\nlabel[data-v-62d8515b] {\n    height: 10px;\n    font-size: 13px;\n    margin-left: 5px;\n}\ninput[type=text][data-v-62d8515b],\n  input[type=date][data-v-62d8515b],\n  select[data-v-62d8515b],\n  textarea[data-v-62d8515b] {\n    height: 35px;\n    border-color: #34495e;\n    color: #57606f;\n    font-size: 13px;\n    font-weight: bold;\n}\ntextarea[data-v-62d8515b] {\n    height: auto;\n}\ninput[type=checkbox][data-v-62d8515b] {\n    margin: 0;\n    vertical-align: middle;\n}\n.card-width-height[data-v-62d8515b] {\n    width: 100%;\n    height: 100%;\n}\n.head[data-v-62d8515b] {\n    color: #f1f2f6;\n    font-size: 22px;\n}\n.hdc[data-v-62d8515b] {\n    background-color: #57606f;\n}\ninput[type=text][data-v-62d8515b],\n  input[type=date][data-v-62d8515b] {\n    width: 250px;\n}\n.engagement input[type=\"text\"][data-v-62d8515b],\n  input[type=\"date\"][data-v-62d8515b] {\n    width: 100% !important;\n}\n.th[data-v-62d8515b] {\n    padding: 4px;\n    padding-bottom: 0px;\n}\n.badge-sm[data-v-62d8515b] {\n    display: inline-block;\n    width: 15px;\n    height: 15px;\n    background: rgba(255, 0, 0, 0.882);\n    color: white;\n    font-size: 12px;\n    font-weight: 500;\n    border-radius: 100%;\n    position: absolute;\n    top: -20%;\n    left: 55%;\n    text-align: center;\n}\n.relook-header[data-v-62d8515b] {\n    color: #000;\n    background-color: #f4f3f3;\n    padding: 5px;\n    border-bottom: 1px solid #b6b8bb;\n}\ninput.input-box[data-v-62d8515b] {\n    background: #00ffff21;\n    color: #000;\n}\ntextarea.input-box[data-v-62d8515b] {\n    background: #00ffff21;\n    color: #000;\n}\n.bg-card-ana[data-v-62d8515b] {\n    background-color: rgb(205, 225, 231);\n}\n.multiselect-option p[data-v-62d8515b] {\n    margin: 0 !important;\n    padding: 10px !important;\n}\n.vertical-middle[data-v-62d8515b] {\n    vertical-align: middle;\n}\n.mr-3[data-v-62d8515b] {\n    margin-right: 1rem;\n}\n.image1[data-v-62d8515b] {\n    background: url(\"/images/capture/exemples/fiche_de_cotation.png\") no-repeat;\n    background-position: center;\n    background-size: contain;\n    width: 500px;\n    height: 300px;\n}\n.bg-danger[data-v-62d8515b] {\n    background-color: #dc3545 !important;\n}\n.bg-orange[data-v-62d8515b] {\n    background-color: rgb(215, 140, 0) !important;\n}\n.bg-maroon[data-v-62d8515b] {\n    background-color: rgb(99, 52, 1) !important;\n}\n.bg-green[data-v-62d8515b] {\n    background-color: rgb(72, 96, 36) !important;\n}\n.bg-warning[data-v-62d8515b] {\n    background-color: #ffc107 !important;\n}\n.bg-success[data-v-62d8515b] {\n    background-color: #145022 !important;\n}\n\n  /* Sticky column styles */\n.table-responsive[data-v-62d8515b] {\n    position: relative;\n    overflow-x: auto;\n}\n.sticky-theme[data-v-62d8515b] {\n    position: sticky;\n    left: 0;\n    background-color: #fff; /* Ensure background is visible */\n    z-index: 1; /* Ensure it stays above other cells */\n    min-width: 200px; /* Match the min-width from the inline style */\n    border-right: 1px solid #dee2e6; /* Add a border to separate from other columns */\n}\n.sticky-question[data-v-62d8515b] {\n    position: sticky;\n    left: 200px; /* Offset by the width of the Thème column */\n    background-color: #fff;\n    z-index: 1;\n    min-width: 300px; /* Match the min-width from the inline style */\n    border-right: 1px solid #dee2e6;\n}\n\n/* Ensure the header and body cells align properly */\nthead th.sticky-theme[data-v-62d8515b],\nthead th.sticky-question[data-v-62d8515b] {\n    background-color: #f8f9fa; /* Match the default table header background */\n    z-index: 2; /* Higher z-index for headers to stay above body cells */\n}\n  ", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/fiche_cotation_es/DCE-FCES.vue?vue&type=style&index=0&id=62d8515b&lang=css&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/fiche_cotation_es/DCE-FCES.vue?vue&type=style&index=0&id=62d8515b&lang=css&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DCE_FCES_vue_vue_type_style_index_0_id_62d8515b_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DCE-FCES.vue?vue&type=style&index=0&id=62d8515b&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/fiche_cotation_es/DCE-FCES.vue?vue&type=style&index=0&id=62d8515b&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DCE_FCES_vue_vue_type_style_index_0_id_62d8515b_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DCE_FCES_vue_vue_type_style_index_0_id_62d8515b_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/forms/afg/fiche_cotation_es/DCE-FCES.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/components/forms/afg/fiche_cotation_es/DCE-FCES.vue ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DCE_FCES_vue_vue_type_template_id_62d8515b_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DCE-FCES.vue?vue&type=template&id=62d8515b&scoped=true */ "./resources/js/components/forms/afg/fiche_cotation_es/DCE-FCES.vue?vue&type=template&id=62d8515b&scoped=true");
/* harmony import */ var _DCE_FCES_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DCE-FCES.vue?vue&type=script&lang=js */ "./resources/js/components/forms/afg/fiche_cotation_es/DCE-FCES.vue?vue&type=script&lang=js");
/* harmony import */ var _DCE_FCES_vue_vue_type_style_index_0_id_62d8515b_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DCE-FCES.vue?vue&type=style&index=0&id=62d8515b&lang=css&scoped=true */ "./resources/js/components/forms/afg/fiche_cotation_es/DCE-FCES.vue?vue&type=style&index=0&id=62d8515b&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DCE_FCES_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _DCE_FCES_vue_vue_type_template_id_62d8515b_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _DCE_FCES_vue_vue_type_template_id_62d8515b_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "62d8515b",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/forms/afg/fiche_cotation_es/DCE-FCES.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/forms/afg/fiche_cotation_es/DCE-FCES.vue?vue&type=script&lang=js":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/fiche_cotation_es/DCE-FCES.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DCE_FCES_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DCE-FCES.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/fiche_cotation_es/DCE-FCES.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DCE_FCES_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/forms/afg/fiche_cotation_es/DCE-FCES.vue?vue&type=style&index=0&id=62d8515b&lang=css&scoped=true":
/*!**********************************************************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/fiche_cotation_es/DCE-FCES.vue?vue&type=style&index=0&id=62d8515b&lang=css&scoped=true ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DCE_FCES_vue_vue_type_style_index_0_id_62d8515b_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DCE-FCES.vue?vue&type=style&index=0&id=62d8515b&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/fiche_cotation_es/DCE-FCES.vue?vue&type=style&index=0&id=62d8515b&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/forms/afg/fiche_cotation_es/DCE-FCES.vue?vue&type=template&id=62d8515b&scoped=true":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/fiche_cotation_es/DCE-FCES.vue?vue&type=template&id=62d8515b&scoped=true ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DCE_FCES_vue_vue_type_template_id_62d8515b_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DCE_FCES_vue_vue_type_template_id_62d8515b_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DCE_FCES_vue_vue_type_template_id_62d8515b_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DCE-FCES.vue?vue&type=template&id=62d8515b&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/fiche_cotation_es/DCE-FCES.vue?vue&type=template&id=62d8515b&scoped=true");


/***/ })

}]);