"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_contreanalyse_nsia_filiale_dc_DC-CHC1-OLD_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dc/DC-CHC1-OLD.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dc/DC-CHC1-OLD.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../services/auth.service */ "./resources/js/services/auth.service.js");
/* harmony import */ var _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vueform/multiselect/dist/multiselect.vue2 */ "./node_modules/@vueform/multiselect/dist/multiselect.vue2.js");
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../helpers/helper */ "./resources/js/helpers/helper.js");
/* harmony import */ var _helpers_indexedDB__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../helpers/indexedDB */ "./resources/js/helpers/indexedDB.js");
/* harmony import */ var _helpers_indexedDB__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_helpers_indexedDB__WEBPACK_IMPORTED_MODULE_4__);
/* provided dependency */ var process = __webpack_require__(/*! process/browser.js */ "./node_modules/process/browser.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), c(GeneratorFunctionPrototype, u, GeneratorFunction.displayName = "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }






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
  name: "Checklist_critere_d_eligibilte_a_l_analyse_de_risque_groupe",
  display: "Checklist critère d'éligibilité à l'analyse de risque",
  components: {
    MoreVerticalIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_5__.MoreVerticalIcon,
    ChevronUpIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_5__.ChevronUpIcon,
    ChevronDownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_5__.ChevronDownIcon,
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_5__.PlusIcon,
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_5__.TrashIcon,
    AirplayIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_5__.AirplayIcon,
    Multiselect: _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_2__["default"]
    // BookOpenIcon,
  },
  computed: {
    totalPermanent: function totalPermanent() {
      var trying = this.source_revenus.map(function (el) {
        el.Permanente = String(el.Permanente).replace(/\s+/g, "");
        if (!el.Permanente) return 0;
        return Number(el.Permanente);
      }).reduce(function (sum, curr) {
        return sum + curr;
      }, 0);
      return trying.toLocaleString("fr-FR");
    },
    totalInterimaires: function totalInterimaires() {
      var trying = this.source_revenus.map(function (el) {
        el.interimaires = String(el.interimaires).replace(/\s+/g, "");
        if (!el.interimaires) return 0;
        return Number(el.interimaires);
      }).reduce(function (sum, curr) {
        return sum + curr;
      }, 0);
      return trying.toLocaleString("fr-FR");
    }
  },
  props: {
    meta_data: Object,
    tb_name: String,
    tb_display_name: String
  },
  created: function created() {
    var _this = this;
    // ? Setup cache listeners and stuff
    // this.setupCache();
    //

    EventBus.$on("event-T0", function (data) {
      // console.log("kkk", this.rtnExistant(data.formdata.experience_secteur))
      _this.formDataToBeWatched.vivre = _this.rtnExistant(data.formdata.experience_secteur);
    });
  },
  mounted: function mounted() {
    var _this$meta_data$dossi;
    // Initiate cache

    // // this.initCache();
    //

    var applied_templ_name = (_this$meta_data$dossi = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi === void 0 ? void 0 : _this$meta_data$dossi.applied_templ_name;
    var tbArrays = this.determineCredPubTables(applied_templ_name);
    this.credpub00 = tbArrays[0];
    this.loadRetrieved();
    this.loadTbAttrs(); // charge les attributs + sous attributs des tables
    this.tableClosedOrOpened();
    // helper.loadCurrencyFormatter();
    // AJOUTER
    // EventBus.$on('autosubmit', ()=> {
    //     this.launchAutoSaver()
    // })
  },
  data: function data() {
    var _this$meta_data$dossi2;
    var vm = this;
    return {
      ebapisHost: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__["default"].host,
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
      seen8: true,
      seen9: true,
      seenn1: true,
      repYes: [],
      vseenn1: true,
      disp: false,
      doss_name: (_this$meta_data$dossi2 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi2 === void 0 || (_this$meta_data$dossi2 = _this$meta_data$dossi2.doss_name) === null || _this$meta_data$dossi2 === void 0 ? void 0 : _this$meta_data$dossi2.replace("Dossier", ""),
      isLoading: false,
      // customToolbar: [
      //       ["bold", "italic", "underline"],
      //       [{ list: "ordered" }, { list: "bullet" }],
      //       // ["image", "code-block"]
      //     ],
      meta_parseable: {
        cred_pub_key: this.meta_data["cred_pub_key"],
        tb_name: this.tb_name
      },
      list_secteurs_edane: ["Agriculture-Elevage-Pêche", "Industrie - Boulangerie", "Industrie Agro-Alimentaire", "Industrie Boisson-Jus-Bière", "Industrie Corps Gras - Huilerie", "BTP Complet", "BTP Specialise", "Commerce Automobile et Pièces détachées", "Commerce Quincaillerie", "Commerce de Detail Divers", "Commerce de Gros Divers", "Commerce de Gros de Produits Agricoles", "Distributeur de Carburant Major", "Hotel Restaurant", "Pharmacies - Détaillants", "Pharmacies - Grossistes", "Station de Carburant", "Energie-Eau-Gaz", "Industrie - Metalurgie", "Industrie Chimique", "Industrie Cimenterie", "Industrie Divers", "Industrie Medical", "Industrie Papier-Imprimerie", "Industrie Plastique", "Industrie Tabac", "Industrie Textile", "Industrie du Bois", "Mine", "Pétrole", "Agence de voyage", "Agences et Activités Immobilières", "Architecture et Ingénierie", "Auxilliaire Assurance et Finance", "Conseils Informatique", "Conseils Juridiques Comptables", "Enseignement", "Gardiennage - Sécurité", "Main d'oeuvre - Nettoyage - Formation", "Publicité Communication", "Réparation-Installation-Maintenance", "Santé (Cliniques Medecins)", "Services Divers", "Telecom - Divers", "Telecom - Opérateurs", "Entreposage", "Transit - Manutention-Logistique", "Transport Passager et Marchandise"],
      formDataToBeWatched: {
        equipe_dirigeantes: [],
        bref_historique: "",
        notes: [],
        criteres_d_eligibilite_contrepartie_choix: "",
        criteres_d_eligibilite_contrepartie_commentaire: "",
        criteres_d_eligibilite_engagement_choix: "",
        criteres_d_eligibilite_engagement_commentaire: "",
        criteres_d_eligibilite_credit_syndique_choix: "",
        criteres_d_eligibilite_credit_syndique_commentaire: "",
        criteres_d_eligibilite_eligible_choix: "",
        criteres_d_eligibilite_eligible_commentaire: "",
        dq: "",
        type_de_financement: ""
        /* indice_client: "",
        emprunteur: "",
        date_de_creation: "",
        date_d_entree_en_relation: "",
        groupe: "",
        montant_demande: "",
        type_de_financement: "",
        objet_du_financement: "", */
      },
      indice_client: "",
      emprunteur: "",
      date_de_creation: "",
      date_d_entree_en_relation: "",
      groupe: "",
      montant_demande: "",
      // type_de_financement: "",
      objet_du_financement: "",
      // Ajouter note
      listingNote: false,
      equipe_dirigeantes: [{
        dirigeants: "",
        pouvoir_signature: "",
        fonction_sein_entreprise: "",
        experience: "",
        background: "",
        diplome: ""
      }],
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
      credpub00: null
    };
  },
  methods: {
    checkboxValCashCall: function checkboxValCashCall(event, vars, index) {
      // if (event.target.checked) {
      //         if(event.target.value!=undefined){
      //           this.formDataToBeWatched[vars] = event.target.value;
      //         }else{
      //             this.formDataToBeWatched[vars] = ""
      //         }
      //         if(index){
      //             this.repYes = this.formDataToBeWatched.repYes
      //             this.repYes[index] = this.formDataToBeWatched[vars]
      //             this.formDataToBeWatched.repYes = this.repYes
      //             if(this.formDataToBeWatched.repYes?.includes('Oui')){
      //                 this.formDataToBeWatched.criteres_d_eligibilite_eligible_choix = "Oui"
      //             }else {
      //                 if(!this.formDataToBeWatched.repYes.includes("") && !this.formDataToBeWatched.repYes.includes("Oui")){
      //                     this.formDataToBeWatched.criteres_d_eligibilite_eligible_choix = "Non"
      //                 }
      //                     // this.formDataToBeWatched.repYes.filter(elm=>{
      //                     //     if(this.formDataToBeWatched.repYes[1]==elm && this.formDataToBeWatched.repYes[1]==this.formDataToBeWatched.repYes[index]){
      //                     //     this.formDataToBeWatched.criteres_d_eligibilite_eligible_choix = "Non"
      //                     //     }else{
      //                     //     this.formDataToBeWatched.criteres_d_eligibilite_eligible_choix = ""
      //                     //     }
      //                     // })
      //             }
      //         }
      // } else {
      //         this.formDataToBeWatched[vars] = "";
      //         this.repYes = this.formDataToBeWatched.repYes
      //         this.repYes[index] = this.formDataToBeWatched[vars]
      //         this.formDataToBeWatched.repYes = this.repYes
      //         if(this.formDataToBeWatched.repYes?.includes('Oui')){
      //             this.formDataToBeWatched.criteres_d_eligibilite_eligible_choix = "Oui"
      //         }else {
      //             this.formDataToBeWatched.criteres_d_eligibilite_eligible_choix = null
      //         }
      // }

      if (event.target.checked) {
        this.formDataToBeWatched[vars] = event.target.value;
        var reponses = [];
        var properties = ['criteres_d_eligibilite_contrepartie_choix', 'criteres_d_eligibilite_engagement_choix', 'criteres_d_eligibilite_credit_syndique_choix', 'choixd', 'choixe'];
        this.formDataToBeWatched.criteres_d_eligibilite_eligible_choix = "";
        for (var _index = 0; _index < properties.length; _index++) {
          reponses.push(this.formDataToBeWatched[properties[_index]]);
        }
        if (reponses.includes("Oui")) {
          this.formDataToBeWatched.criteres_d_eligibilite_eligible_choix = "Oui";
          return;
        }
        if (!reponses.includes("") && !reponses.includes("Oui")) {
          this.formDataToBeWatched.criteres_d_eligibilite_eligible_choix = "Non";
        }
      } else {
        this.formDataToBeWatched[vars] = "";
        this.formDataToBeWatched.criteres_d_eligibilite_eligible_choix = "";
      }
    },
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
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (_DEBUG) console.log(">> updateFormDataForDeletion");
              _this2.formDataToBeWatched.is_deleted = true;
              // Actually delete from cache
              _context.next = 4;
              return _cache["delete"](documentId);
            case 4:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    /**
     * executes before the page/tab/browser is closed
     * ! actually only works when the tab is refreshed
     */
    beforePageIsClosed: function beforePageIsClosed(event) {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              event.preventDefault();
              event.returnValue = ""; // ! Won't work without this

              if (_DEBUG) console.log(">> beforePageIsClosed");
              // shows native popup
              // ! Only works on page reloads

              // Check if formDataToBeWatched is empty
              if (!_this3.formDataToBeWatched.is_deleted) {
                _context2.next = 5;
                break;
              }
              return _context2.abrupt("return");
            case 5:
              // Upload current (and arguably latest) formDataToBeWatched data

              _this3.uploadDataToServerAndUpdateLastSave(_this3.formDataToBeWatched, _this3.formDataToBeWatched);
              if (_DEBUG) console.log("<< beforePageIsClosed");
            case 7:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
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
        _cache = new (_helpers_indexedDB__WEBPACK_IMPORTED_MODULE_4___default())({
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
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var data, timeSpentInSeconds;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
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
              _context3.next = 5;
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
              return _context3.stop();
          }
        }, _callee3);
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
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              if (_DEBUG) console.log(">> uploadDataToServerAndUpdateLastSave");
              _context4.prev = 1;
              if (_DEBUG) console.log(">> this.autosaving");
              _context4.next = 5;
              return _this5.autosaving(newVal, oldVal);
            case 5:
              // Update last save time
              _lastSaveTime = Date.now();
              // ! DONOT Clear cache
              // _cache.delete(documentId);
              if (_DEBUG) console.log("<< uploadDataToServerAndUpdateLastSave");
              _context4.next = 12;
              break;
            case 9:
              _context4.prev = 9;
              _context4.t0 = _context4["catch"](1);
              // TODO add error
              if (_DEBUG) console.error("xx uploadDataToServerAndUpdateLastSave", _context4.t0);
            case 12:
            case "end":
              return _context4.stop();
          }
        }, _callee4, null, [[1, 9]]);
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
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              if (_DEBUG) console.log(">> uploadDataToServerBeforePageCloses");
              _context5.prev = 1;
              _context5.next = 4;
              return _this6.autosaving(newVal, oldVal);
            case 4:
              // Update last save time
              _lastSaveTime = Date.now();
              // Clear cache
              _cache["delete"](documentId);
              if (_DEBUG) console.log("<< uploadDataToServerBeforePageCloses");
              _context5.next = 12;
              break;
            case 9:
              _context5.prev = 9;
              _context5.t0 = _context5["catch"](1);
              // TODO add error
              if (_DEBUG) console.error("xx uploadDataToServerBeforePageCloses", _context5.t0);
            case 12:
            case "end":
              return _context5.stop();
          }
        }, _callee5, null, [[1, 9]]);
      }))();
    },
    /**
     * does exactly what the name says
     * @return {void}
     */
    uploadDataToServerEvery30Seconds: function uploadDataToServerEvery30Seconds() {
      var _this7 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              // if (_DEBUG) console.log(">> uploadDataToServerEvery30Seconds", _timeSpentInSeconds);
              _timeSpentInSeconds++;
              if (!(_timeSpentInSeconds % 30 != 0)) {
                _context6.next = 3;
                break;
              }
              return _context6.abrupt("return");
            case 3:
              if (_DEBUG) console.log(">> uploadDataToServerEvery30Seconds", _timeSpentInSeconds);
              _context6.prev = 4;
              if (_DEBUG) console.log(">> uploadDataToServerEvery30Seconds >> autosaving", _timeSpentInSeconds);
              _context6.next = 8;
              return _this7.autosaving(_this7.formDataToBeWatched, _this7.formDataToBeWatched);
            case 8:
              // Update last save time
              _lastSaveTime = Date.now();
              // Clear cache ?
              // _cache.delete(documentId);
              if (_DEBUG) console.log("<< uploadDataToServerEvery30Seconds << autosaving");
              _context6.next = 15;
              break;
            case 12:
              _context6.prev = 12;
              _context6.t0 = _context6["catch"](4);
              // TODO add error
              if (_DEBUG) console.error("xx uploadDataToServerEvery30Seconds", _context6.t0);
            case 15:
            case "end":
              return _context6.stop();
          }
        }, _callee6, null, [[4, 12]]);
      }))();
    },
    // End Cache management functions
    rtnExistant: function rtnExistant(data) {
      var existance;
      var experience = data;
      // console.log("experience", experience);
      if (experience <= 3) {
        existance = "<3 ans";
      } else {
        if (experience <= 5) {
          existance = ">3 ans";
        } else {
          if (experience <= 10) existance = ">5 ans";else existance = ">10 ans";
        }
      }
      return existance;
    },
    setCoSignataireVars: function setCoSignataireVars(event, index) {
      this.co_signataire[index][event[0]] = event[1];
      this.handleInput();
    },
    tableClosedOrOpened: function tableClosedOrOpened() {
      this.seen = this.fetchClosedTables(this.tb_name + this.meta_data["cred_pub_key"]);
    },
    openNotesModal: function openNotesModal() {
      var listing = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.listingNote = listing;
      this.$modal.show(this.tb_name);
    },
    // AJOUTER
    launchAutoSaver: function launchAutoSaver() {
      var _this8 = this;
      _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["default"].loadUserData().then(function (res) {
        _this8.send2Backend(res, 0, 0);
      })["catch"](function (err) {
        _this8.loadWithError(err);
      });
    },
    SetPermanantEmp: function SetPermanantEmp(event, index) {
      this.source_revenus[index][event[0]] = event[1];
      // this.som = parseInt(this.source_revenus[index].Permanente?.toString().replace(/\s/g, ''))
      // console.log(this.source_revenus[index].Permanente?.toString().replace(/\s/g, ''))
      // this.formDataToBeWatched['total'] = parseInt(this.som)
      this.formDataToBeWatched["total"] = this.totalMontant;
      this.handleInput();
    },
    formDataVars: function formDataVars(event) {
      this.formDataToBeWatched[event[0]] = event[1];
    },
    onChange: function onChange(e) {
      if (e.target.value == "Non") {
        this.disp = true;
      } else {
        this.disp = false;
      }
    },
    loadRetrieved: function loadRetrieved() {
      var _this$meta_data$dossi3, _this$meta_data$dossi9;
      var lentb = this.meta_data["dossier_credit"]["tbs_in_use"];
      var createdKey = this.tb_name;
      var createdKeyArr = createdKey.split("tb");
      createdKey = "cred_pub_tb_" + createdKeyArr[1];

      // Close table by default
      this.defaultRetract(false, (_this$meta_data$dossi3 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi3 === void 0 ? void 0 : _this$meta_data$dossi3.applied_templ_id);
      if (this.meta_data["dossier_credit"][createdKey] == undefined) {
        var _this$meta_data$dossi4, _this$meta_data$dossi5, _this$meta_data$dossi6, _this$meta_data$dossi7, _this$meta_data$dossi8;
        if (((_this$meta_data$dossi4 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi4 === void 0 || (_this$meta_data$dossi4 = _this$meta_data$dossi4[this.credpub00]) === null || _this$meta_data$dossi4 === void 0 ? void 0 : _this$meta_data$dossi4.credit_syndique) == 'Oui' && ((_this$meta_data$dossi5 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi5 === void 0 || (_this$meta_data$dossi5 = _this$meta_data$dossi5[this.credpub00]) === null || _this$meta_data$dossi5 === void 0 ? void 0 : _this$meta_data$dossi5.cheffe_file) == 'Oui') {
          this.formDataToBeWatched.choixe = 'Oui';
          // this.formDataToBeWatched.criteres_d_eligibilite_eligible_choix = 'Oui'
          this.handleInput();
        } else if (((_this$meta_data$dossi6 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi6 === void 0 || (_this$meta_data$dossi6 = _this$meta_data$dossi6[this.credpub00]) === null || _this$meta_data$dossi6 === void 0 ? void 0 : _this$meta_data$dossi6.credit_syndique) == 'Oui' && ((_this$meta_data$dossi7 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi7 === void 0 || (_this$meta_data$dossi7 = _this$meta_data$dossi7[this.credpub00]) === null || _this$meta_data$dossi7 === void 0 ? void 0 : _this$meta_data$dossi7.cheffe_file) == 'Non') {
          this.formDataToBeWatched.choixe = 'Non';
          // this.formDataToBeWatched.criteres_d_eligibilite_eligible_choix = 'Non'
          this.handleInput();
        } else if (((_this$meta_data$dossi8 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi8 === void 0 || (_this$meta_data$dossi8 = _this$meta_data$dossi8[this.credpub00]) === null || _this$meta_data$dossi8 === void 0 ? void 0 : _this$meta_data$dossi8.credit_syndique) == 'Non') {
          this.formDataToBeWatched.choixe = 'Non';
          // this.formDataToBeWatched.criteres_d_eligibilite_eligible_choix = 'Non'
        }
      }
      if (lentb.length > 0) {
        if (this.meta_data["dossier_credit"][createdKey] != undefined) {
          this.formDataToBeWatched = this.meta_data["dossier_credit"][createdKey];
          if (this.meta_data["dossier_credit"][createdKey]["equipe_dirigeantes"] != "") {
            this.equipe_dirigeantes = this.meta_data["dossier_credit"][createdKey]["equipe_dirigeantes"];
          }
        }

        // else{
        //     this.formDataToBeWatched.criteres_d_eligibilite_credit_syndique_choix = this.isSyndique()
        // }
      }
      if (((_this$meta_data$dossi9 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi9 === void 0 ? void 0 : _this$meta_data$dossi9[this.credpub00]) != undefined) {
        var _this$meta_data$dossi0, _this$meta_data$dossi1, _this$meta_data$dossi10, _this$meta_data$dossi11, _this$meta_data$dossi12, _this$meta_data$dossi13, _this$meta_data$dossi14, _this$meta_data$dossi15;
        this.indice_client = (_this$meta_data$dossi0 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi0 === void 0 || (_this$meta_data$dossi0 = _this$meta_data$dossi0[this.credpub00]) === null || _this$meta_data$dossi0 === void 0 ? void 0 : _this$meta_data$dossi0.matricule_client;
        this.emprunteur = (_this$meta_data$dossi1 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi1 === void 0 || (_this$meta_data$dossi1 = _this$meta_data$dossi1[this.credpub00]) === null || _this$meta_data$dossi1 === void 0 ? void 0 : _this$meta_data$dossi1.denomination_client;
        this.date_de_creation = (_this$meta_data$dossi10 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi10 === void 0 || (_this$meta_data$dossi10 = _this$meta_data$dossi10[this.credpub00]) === null || _this$meta_data$dossi10 === void 0 ? void 0 : _this$meta_data$dossi10.date_creation;
        this.date_d_entree_en_relation = (_this$meta_data$dossi11 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi11 === void 0 || (_this$meta_data$dossi11 = _this$meta_data$dossi11[this.credpub00]) === null || _this$meta_data$dossi11 === void 0 ? void 0 : _this$meta_data$dossi11.date_entre_relation;
        this.groupe = (_this$meta_data$dossi12 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi12 === void 0 || (_this$meta_data$dossi12 = _this$meta_data$dossi12[this.credpub00]) === null || _this$meta_data$dossi12 === void 0 ? void 0 : _this$meta_data$dossi12.groupe;
        this.montant_demande = (_this$meta_data$dossi13 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi13 === void 0 || (_this$meta_data$dossi13 = _this$meta_data$dossi13[this.credpub00]) === null || _this$meta_data$dossi13 === void 0 ? void 0 : _this$meta_data$dossi13.montant_sollicite;
        this.type_de_financement = (_this$meta_data$dossi14 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi14 === void 0 || (_this$meta_data$dossi14 = _this$meta_data$dossi14[this.credpub00]) === null || _this$meta_data$dossi14 === void 0 ? void 0 : _this$meta_data$dossi14.type_credit;
        this.objet_du_financement = (_this$meta_data$dossi15 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi15 === void 0 || (_this$meta_data$dossi15 = _this$meta_data$dossi15[this.credpub00]) === null || _this$meta_data$dossi15 === void 0 ? void 0 : _this$meta_data$dossi15.objet_demande;
      }

      // Close table by default
      // this.defaultRetract(
      //     false,
      //     this.meta_data["dossier_credit"]?.applied_templ_id
      // );
    },
    isSyndique: function isSyndique() {
      var _this$dossier_credit;
      if (((_this$dossier_credit = this.dossier_credit) === null || _this$dossier_credit === void 0 ? void 0 : _this$dossier_credit[credpub0]) != undefined) {
        var _this$dossier_credit2;
        if (((_this$dossier_credit2 = this.dossier_credit) === null || _this$dossier_credit2 === void 0 || (_this$dossier_credit2 = _this$dossier_credit2[credpub0]) === null || _this$dossier_credit2 === void 0 ? void 0 : _this$dossier_credit2.credit_syndique) == 'Oui') {
          var _this$dossier_credit3;
          if (((_this$dossier_credit3 = this.dossier_credit) === null || _this$dossier_credit3 === void 0 || (_this$dossier_credit3 = _this$dossier_credit3[credpub0]) === null || _this$dossier_credit3 === void 0 ? void 0 : _this$dossier_credit3.cheffe_file) == 'Oui') {
            return 'Oui';
          } else {
            return 'Non';
          }
        }
      }
      return '';
    },
    setTbVal: function setTbVal(val) {
      this.cred_pub_key = val;
    },
    loadWithError: function loadWithError(err) {
      //// window.location.href = "/login";
    },
    send2Backend: function send2Backend(res, newVal, oldVal) {
      this.authcheck = true;
      this.authcheckUsr = res.data;
      this.authcheckStatus = res.status;
      if (this.authcheckStatus === 401) {
        // // window.location.href = "/login";
      }
      if (this.authcheck === true) {
        // console.log(this.formDataToBeWatched)
        this.$emit("autosaving");
        this.$axios.post(this.ebapisHost + "creditbuilder/api/v1/autosaving/", {
          user: this.authcheckUsr,
          meta_parseable: this.meta_parseable,
          filledData: this.formDataToBeWatched
        }).then(function (response) {
          this.$emit("autosaving");
          // this.$Progress.finish();
          // console.log(response);
          var tbFetcheData = response.data;
          // this.launchScoringTable("organisation");
          // this.launchScoringTable("evaluation");
          // this.launchScoringTable("activite");
          // this.launchScoringTable("competence");
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
    onSlctMatCli: function onSlctMatCli(obj, key) {
      this.entite_connectes[key]["raison_social_entite_connecte"] = obj.nomcli;
      this.entite_connectes[key]["matricule_client_entite_connecte"] = obj.matclihan;
      this.handleInput();
    },
    retract: function retract() {
      this.seen = !this.seen;
      var a = {
        tb_name: this.tb_name + this.meta_data["cred_pub_key"],
        status: this.seen
      };
      EventBus.$emit("savedclosed-table", a);
    },
    // add defaultRetract
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
    retract1: function retract1() {
      this.seen4 = !this.seen4;
    },
    addMore: function addMore() {
      this.source_revenus.push({
        activite: "",
        emplacement: "",
        depuis_quand: "",
        loue: "",
        Permanente: 0,
        salaire_Permanente: 0,
        interimaires: 0,
        salaire_interimaires: 0,
        apprenti: 0,
        salaire_apprenti: 0
      });
    },
    addMore3: function addMore3() {
      this.entite_connectes.push({
        matricule_client_entite_connecte: "",
        raison_social_entite_connecte: "",
        secteur_activite_entite_connecte: ""
      });
    },
    remove3: function remove3(index) {
      this.entite_connectes.splice(index, 1);
    },
    addMore2: function addMore2() {
      this.equipe_dirigeantes.push({
        dirigeants: "",
        pouvoir_signature: "",
        fonction_sein_entreprise: "",
        experience: "",
        diplome: ""
      });
    },
    remove: function remove(index) {
      this.source_revenus.splice(index, 1);
      this.formDataToBeWatched.total_permanent = this.somX3(this.source_revenus, "Permanente");
      this.formDataToBeWatched.total_interimaires = this.somX3(this.source_revenus, "interimaires");
      this.formDataToBeWatched.total_apprenti = this.somX3(this.source_revenus, "apprenti");
      this.formDataToBeWatched.total_salaire_permanent = this.somX4(this.source_revenus, "salaire_Permanente", "Permanente");
      this.formDataToBeWatched.total_salaire_interimaires = this.somX4(this.source_revenus, "salaire_interimaires", "interimaires");
      this.formDataToBeWatched.total_salaire_apprenti = this.somX4(this.source_revenus, "salaire_apprenti", "apprenti");
      this.formDataToBeWatched.total_masse_salariale = this.formDataToBeWatched.total_salaire_apprenti + this.formDataToBeWatched.total_salaire_interimaires + this.formDataToBeWatched.total_salaire_permanent;
    },
    remove2: function remove2(index) {
      this.equipe_dirigeantes.splice(index, 1);
    },
    somX3: function somX3(ob, key) {
      var som = 0;
      ob.filter(function (elm) {
        var _elm$key;
        som += Number((_elm$key = elm[key]) === null || _elm$key === void 0 ? void 0 : _elm$key.toString().replace(/\s/g, ""));
      });
      return som;
    },
    somX4: function somX4(ob, keyA, keyB) {
      var _ob$0$keyA, _ob$0$keyB;
      var som = Number((_ob$0$keyA = ob[0][keyA]) === null || _ob$0$keyA === void 0 ? void 0 : _ob$0$keyA.toString().replace(/\s/g, "")) * Number((_ob$0$keyB = ob[0][keyB]) === null || _ob$0$keyB === void 0 ? void 0 : _ob$0$keyB.toString().replace(/\s/g, ""));
      ob.filter(function (elm, index) {
        if (index > 0) {
          var _elm$keyA, _elm$keyB;
          var result = Number((_elm$keyA = elm[keyA]) === null || _elm$keyA === void 0 ? void 0 : _elm$keyA.toString().replace(/\s/g, "")) * Number((_elm$keyB = elm[keyB]) === null || _elm$keyB === void 0 ? void 0 : _elm$keyB.toString().replace(/\s/g, ""));
          som += result;
        }
      });
      return som;
    },
    handleInput: function handleInput(evt, index) {
      var varTrue = [];
      var varFalse = [];
      if (this.formDataToBeWatched.criteres_d_eligibilite_contrepartie_choix == 'Oui') {
        varTrue.push(1);
      } else {
        varFalse.push(0);
      }
      if (this.formDataToBeWatched.criteres_d_eligibilite_engagement_choix == 'Oui') {
        varTrue.push(1);
      } else {
        varFalse.push(0);
      }
      if (this.formDataToBeWatched.criteres_d_eligibilite_credit_syndique_choix == 'Oui') {
        varTrue.push(1);
      } else {
        varFalse.push(0);
      }
      if (varTrue.length >= 1) {
        this.formDataToBeWatched.criteres_d_eligibilite_eligible_choix = 'Oui';
      } else {
        this.formDataToBeWatched.criteres_d_eligibilite_eligible_choix = 'Non';
      }
      // this.formDataToBeWatched.type_de_financement=this.type_de_financement
    },
    resul_criteres_d_eligibilite: function resul_criteres_d_eligibilite(evt) {
      this.formDataToBeWatched.criteres_d_eligibilite_contrepartie_choix = evt.target.value;
      this.formDataToBeWatched.criteres_d_eligibilite_engagement_choix = evt.target.value;
      this.formDataToBeWatched.criteres_d_eligibilite_credit_syndique_choix = evt.target.value;
    },
    loadTbAttrs: function loadTbAttrs() {
      var l = [];
      var topdivel = this.$refs.topdiv;
      var k = document.querySelectorAll(".subdiv" + this.tb_name);
      // console.log(k)
      k.forEach(function (e) {
        l.push(e.innerText);
        // console.log(l)
      });
      var p = {
        name_of_title: topdivel.innerText,
        list_of_content: l,
        id: "f5-head"
      };
      // console.log(p)
      this.$emit("load-buffer", p);
    },
    precomputeScore: function precomputeScore() {
      var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      this.meta_parseable["type_table"] = a;
      var scoringVar = [];
      if (a == "organisation") {
        scoringVar = ["vivre", "competences_manageriales", "formalisation", "interaction"];
      }
      //   else if (a=="evaluation") {
      //     scoringVar = ["diversification", "structure_fournisseur", "structure_clientele", "saisonnalite", "couverture_geographique", "concurrence"];
      //   }
      if (a == "evaluation") {
        scoringVar = ["technologie", "risque_juridique", "risque_politique"];
      }
      if (a == "activite") {
        scoringVar = ["diversification", "structure_fournisseur", "structure_clientele", "saisonnalite", "couverture_geographique", "concurrence"];
      }
      if (a == "competence") {
        scoringVar = ["maitrise", "dynamisme", "compet_gestion", "avis_cc", "reputation", "stabilite", "competence", "historique"];
      }
      for (var i = 0; i < scoringVar.length; i++) {
        if (this.formDataToBeWatched[scoringVar[i]] == "") {
          return false;
        }
      }
      return true;
    } // launchScoringTable(a) {
    //     if (this.precomputeScore(a) === true) {
    //        this.$axios
    //             .post(
    //                 this.ebapisHost +
    //                     "cofiscore/api/v1/launchscorer-table/",
    //                 {
    //                     user: this.authcheckUsr,
    //                     meta_parseable: this.meta_parseable,
    //                     filledData: this.formDataToBeWatched,
    //                 }
    //             )
    //             .then(
    //                 function (response) {
    //                     // console.log(response)
    //                     let tbFetcheData = response.data;
    //                     // console.log('tbFetcheData',tbFetcheData)
    //                     if (a == "organisation") {
    //                         this.decision_theorique1 =
    //                             tbFetcheData["decision_theorique"];
    //                         if (
    //                             this.formDataToBeWatched
    //                                 .decision_theorique1 == ""
    //                         ) {
    //                             this.formDataToBeWatched.decision_theorique1 =
    //                                 this.decision_theorique1;
    //                         }
    //                     }
    //                     // else if (a=='evaluation') {
    //                     //     this.decision_theorique = tbFetcheData['decision_theorique']
    //                     //     console.log( "decision_theorique",this.decision_theorique)
    //                     //     if (this.formDataToBeWatched.decision_theorique== ""){
    //                     //         this.formDataToBeWatched.decision_theorique=this.decision_theorique
    //                     //     }
    //                     // }
    //                     else if (a == "evaluation") {
    //                         this.decision_theorique2 =
    //                             tbFetcheData["decision_theorique"];
    //                         if (
    //                             this.formDataToBeWatched
    //                                 .decision_theorique2 == ""
    //                         ) {
    //                             this.formDataToBeWatched.decision_theorique2 =
    //                                 this.decision_theorique2;
    //                         }
    //                     } else if (a == "activite") {
    //                         this.decision_theorique3 =
    //                             tbFetcheData["decision_theorique"];
    //                         if (
    //                             this.formDataToBeWatched
    //                                 .decision_theorique3 == ""
    //                         ) {
    //                             this.formDataToBeWatched.decision_theorique3 =
    //                                 this.decision_theorique3;
    //                         }
    //                     } else if (a == "competence") {
    //                         this.decision_theorique0 =
    //                             tbFetcheData["decision_theorique"];
    //                         if (
    //                             this.formDataToBeWatched
    //                                 .decision_theorique0 == ""
    //                         ) {
    //                             this.formDataToBeWatched.decision_theorique0 =
    //                                 this.decision_theorique0;
    //                         }
    //                     }
    //                 }.bind(this)
    //             )
    //             .catch(
    //                 function (error) {
    //                     this.$Progress.finish();
    //                     console.log(error);
    //                 }.bind(this)
    //             );
    //     }
    // },
  },
  watch: {
    formDataToBeWatched: {
      handler: function handler(newVal, oldVal) {
        // if (oldVal === undefined) {
        //   return
        // }
        this.autosaving(newVal, oldVal);
        // ? Cache management
        // this.saveDataInCache(newVal, oldVal);
      },
      deep: true,
      immediate: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dc/DC-CHC1-OLD.vue?vue&type=template&id=25fc5f16&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dc/DC-CHC1-OLD.vue?vue&type=template&id=25fc5f16&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      id: "f5-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Checklist critère d'éligibilité à l'analyse de risque\n                        ")]), _vm._v(" "), _c("div", {
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
  }, [_c("span", [_vm._v("\n                                            " + _vm._s(_vm.formDataToBeWatched.notes.length) + "\n                                        ")])])])]) : _vm._e(), _vm._v(" "), _c("chevron-up-icon", {
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
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "dq"
    }
  }, [_vm._v("DQ")]), _vm._v(" "), _c("input", {
    staticClass: "form-control",
    attrs: {
      required: "",
      type: "text",
      id: "dq",
      disabled: ""
    },
    domProps: {
      value: _vm.doss_name
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "indice_client"
    }
  }, [_vm._v("Indice client")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.indice_client,
      expression: "indice_client"
    }],
    staticClass: "form-control",
    attrs: {
      required: "",
      type: "text",
      readonly: "",
      id: "indice_client"
    },
    domProps: {
      value: _vm.indice_client
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.indice_client = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "emprunteur"
    }
  }, [_vm._v("Emprunteur")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.emprunteur,
      expression: "emprunteur"
    }],
    staticClass: "form-control",
    attrs: {
      required: "",
      type: "text",
      readonly: "",
      id: "emprunteur"
    },
    domProps: {
      value: _vm.emprunteur
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.emprunteur = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "date_de_creation"
    }
  }, [_vm._v("Date de création")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.date_de_creation,
      expression: "date_de_creation"
    }],
    staticClass: "form-control",
    attrs: {
      required: "",
      type: "date",
      readonly: "",
      id: "date_de_creation"
    },
    domProps: {
      value: _vm.date_de_creation
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.date_de_creation = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "date_d_entree_en_relation"
    }
  }, [_vm._v("Date d'entrée en relation")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.date_d_entree_en_relation,
      expression: "date_d_entree_en_relation"
    }],
    staticClass: "form-control",
    attrs: {
      required: "",
      type: "date",
      readonly: "",
      id: "date_d_entree_en_relation"
    },
    domProps: {
      value: _vm.date_d_entree_en_relation
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.date_d_entree_en_relation = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "groupe"
    }
  }, [_vm._v("Groupe")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.groupe,
      expression: "groupe"
    }],
    staticClass: "form-control",
    attrs: {
      required: "",
      type: "text",
      readonly: "",
      id: "groupe"
    },
    domProps: {
      value: _vm.groupe
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.groupe = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(0), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.type_de_financement,
      expression: "formDataToBeWatched.type_de_financement"
    }],
    staticClass: "form-select single-select",
    attrs: {
      readonly: "",
      id: "type_de_financement"
    },
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formDataToBeWatched, "type_de_financement", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.handleInput]
    }
  }, [_c("option", {
    attrs: {
      selected: "",
      disabled: "",
      hidden: ""
    }
  }, [_vm._v("---")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Avance sur marché"
    }
  }, [_vm._v("\n                                        Avance sur marché\n                                    ")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Avance sur facture"
    }
  }, [_vm._v("\n                                        Avance sur facture\n                                    ")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Affacturage"
    }
  }, [_vm._v("\n                                        Affacturage\n                                    ")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Aval de traites"
    }
  }, [_vm._v("\n                                        Aval de traites\n                                    ")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Autres(Impayés)"
    }
  }, [_vm._v("\n                                        Autres(Impayés)\n                                    ")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Caution de soumissission"
    }
  }, [_vm._v("\n                                        Caution de soumissission\n                                    ")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Caution de demarrage"
    }
  }, [_vm._v("\n                                        Caution de demarrage\n                                    ")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Caution de bonne fin"
    }
  }, [_vm._v("\n                                        Caution de bonne fin\n                                    ")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Caution de retenue de garantie"
    }
  }, [_vm._v("\n                                        Caution de retenue de garantie\n                                    ")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Caution d'admission temporaire"
    }
  }, [_vm._v("\n                                        Caution d'admission temporaire\n                                    ")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Caution pour impôt contesté"
    }
  }, [_vm._v("\n                                        Caution pour impôt contesté\n                                    ")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Caution de garantie de paiement"
    }
  }, [_vm._v("\n                                        Caution de garantie de paiement\n                                    ")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Crédit de Campagne"
    }
  }, [_vm._v("\n                                        Crédit de Campagne\n                                    ")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Crédit d'investissement"
    }
  }, [_vm._v("\n                                        Crédit d'investissement\n                                    ")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Crédit bail"
    }
  }, [_vm._v("\n                                        Crédit bail\n                                    ")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Crédit Court Terme"
    }
  }, [_vm._v("\n                                        Crédit Court Terme\n                                    ")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Crédit Moyen Terme"
    }
  }, [_vm._v("\n                                        Crédit Moyen Terme\n                                    ")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Crédit Long Terme"
    }
  }, [_vm._v("\n                                        Crédit Long Terme\n                                    ")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Credoc Irrévocable"
    }
  }, [_vm._v("\n                                        Credoc Irrévocable\n                                    ")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Credoc notifié"
    }
  }, [_vm._v("\n                                        Credoc notifié\n                                    ")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Credoc confirmé"
    }
  }, [_vm._v("\n                                        Credoc confirmé\n                                    ")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Découvert"
    }
  }, [_vm._v("\n                                        Découvert\n                                    ")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Engagement de financement"
    }
  }, [_vm._v("\n                                        Engagement de financement\n                                    ")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Escompte commerciale"
    }
  }, [_vm._v("\n                                        Escompte commerciale\n                                    ")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Escompte financier"
    }
  }, [_vm._v("\n                                        Escompte financier\n                                    ")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Obligation Cautionnée"
    }
  }, [_vm._v("\n                                        Obligation Cautionnée\n                                    ")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "LC's"
    }
  }, [_vm._v("LC's")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "SBLC"
    }
  }, [_vm._v("SBLC")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(1), _vm._v(" "), _c("currency-input", {
    attrs: {
      value: _vm.montant_demande,
      readonly: "",
      id: "montant_demande"
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1)]), _vm._v(" "), _c("br"), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-12"
  }, [_vm._m(2), _vm._v(" "), _c("span", {
    staticStyle: {
      "background-color": "#e9ecef",
      opacity: "1",
      "min-height": "calc(1.5em + 0.75rem + 2px)",
      display: "block",
      width: "100%",
      padding: "0.375rem 0.75rem",
      "font-size": "1rem",
      "font-weight": "400",
      "line-height": "1.5",
      color: "#212529",
      "background-clip": "padding-box",
      border: "1px solid #ced4da",
      "-webkit-appearance": "none",
      "-moz-appearance": "none",
      appearance: "none",
      "border-radius": "0.375rem",
      transition: "border-color .15s ease-in-out,box-shadow .15s ease-in-out",
      "max-height": "350px",
      "overflow-y": "auto"
    },
    domProps: {
      innerHTML: _vm._s(_vm.objet_du_financement)
    }
  })])])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(3), _vm._v(" "), _c("tbody", [_c("tr", [_vm._m(4), _vm._v(" "), _c("td", {
    staticStyle: {
      width: "50px"
    }
  }, [_c("div", {
    staticClass: "m-2 mr-4",
    staticStyle: {
      "vertical-align": "middle"
    }
  }, [_c("input", {
    staticClass: "form-check-input",
    staticStyle: {
      width: "20px",
      height: "20px"
    },
    attrs: {
      type: "checkbox",
      value: "Oui",
      id: "oui" + 1
    },
    domProps: {
      checked: _vm.formDataToBeWatched.criteres_d_eligibilite_contrepartie_choix == "Oui"
    },
    on: {
      change: function change($event) {
        return _vm.checkboxValCashCall($event, "criteres_d_eligibilite_contrepartie_choix");
      }
    }
  })])]), _vm._v(" "), _c("td", [_c("div", {
    staticClass: "m-2 mr-4"
  }, [_c("input", {
    staticClass: "form-check-input",
    staticStyle: {
      width: "20px",
      height: "20px"
    },
    attrs: {
      type: "checkbox",
      value: "Non",
      id: "non" + 1
    },
    domProps: {
      checked: _vm.formDataToBeWatched.criteres_d_eligibilite_contrepartie_choix == "Non"
    },
    on: {
      change: function change($event) {
        return _vm.checkboxValCashCall($event, "criteres_d_eligibilite_contrepartie_choix");
      }
    }
  })])]), _vm._v(" "), _c("td", [_c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.criteres_d_eligibilite_contrepartie_commentaire,
      expression: "formDataToBeWatched.criteres_d_eligibilite_contrepartie_commentaire"
    }],
    staticClass: "form-control",
    attrs: {
      cols: "1",
      rows: "5"
    },
    domProps: {
      value: _vm.formDataToBeWatched.criteres_d_eligibilite_contrepartie_commentaire
    },
    on: {
      change: _vm.handleInput,
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "criteres_d_eligibilite_contrepartie_commentaire", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("tr", [_c("td", {
    staticStyle: {
      width: "450px"
    }
  }, [_vm._v("\n                                            B-\tEngagement pouvant entrainer un non-respect des limites de l’appétence au risques et/ou des ratios réglementaires ou financiers (voir covenants avec les partenaires financiers)\n                                        ")]), _vm._v(" "), _c("td", {
    staticStyle: {
      width: "50px"
    }
  }, [_c("div", {
    staticClass: "m-2 mr-4",
    staticStyle: {
      "vertical-align": "middle"
    }
  }, [_c("input", {
    staticClass: "form-check-input",
    staticStyle: {
      width: "20px",
      height: "20px"
    },
    attrs: {
      type: "checkbox",
      value: "Oui",
      id: "oui" + 2
    },
    domProps: {
      checked: _vm.formDataToBeWatched.criteres_d_eligibilite_engagement_choix == "Oui"
    },
    on: {
      change: function change($event) {
        return _vm.checkboxValCashCall($event, "criteres_d_eligibilite_engagement_choix");
      }
    }
  })])]), _vm._v(" "), _c("td", [_c("div", {
    staticClass: "m-2 mr-4"
  }, [_c("input", {
    staticClass: "form-check-input",
    staticStyle: {
      width: "20px",
      height: "20px"
    },
    attrs: {
      type: "checkbox",
      value: "Non",
      id: "non" + 2
    },
    domProps: {
      checked: _vm.formDataToBeWatched.criteres_d_eligibilite_engagement_choix == "Non"
    },
    on: {
      change: function change($event) {
        return _vm.checkboxValCashCall($event, "criteres_d_eligibilite_engagement_choix");
      }
    }
  })])]), _vm._v(" "), _c("td", [_c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.criteres_d_eligibilite_engagement_commentaire,
      expression: "formDataToBeWatched.criteres_d_eligibilite_engagement_commentaire"
    }],
    staticClass: "form-control",
    attrs: {
      cols: "1",
      rows: "2"
    },
    domProps: {
      value: _vm.formDataToBeWatched.criteres_d_eligibilite_engagement_commentaire
    },
    on: {
      change: _vm.handleInput,
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "criteres_d_eligibilite_engagement_commentaire", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("tr", [_c("td", {
    staticStyle: {
      width: "450px"
    }
  }, [_vm._v("\n                                            C-\tCrédits syndiqués pour lesquels la banque est chef de file\n                                        ")]), _vm._v(" "), _c("td", {
    staticStyle: {
      width: "50px"
    }
  }, [_c("div", {
    staticClass: "m-2 mr-4",
    staticStyle: {
      "vertical-align": "middle"
    }
  }, [_c("input", {
    staticClass: "form-check-input",
    staticStyle: {
      width: "20px",
      height: "20px"
    },
    attrs: {
      type: "checkbox",
      value: "Oui",
      id: "oui" + 3
    },
    domProps: {
      checked: _vm.formDataToBeWatched.criteres_d_eligibilite_credit_syndique_choix == "Oui"
    },
    on: {
      change: function change($event) {
        return _vm.checkboxValCashCall($event, "criteres_d_eligibilite_credit_syndique_choix");
      }
    }
  })])]), _vm._v(" "), _c("td", [_c("div", {
    staticClass: "m-2 mr-4"
  }, [_c("input", {
    staticClass: "form-check-input",
    staticStyle: {
      width: "20px",
      height: "20px"
    },
    attrs: {
      type: "checkbox",
      value: "Non",
      id: "non" + 3
    },
    domProps: {
      checked: _vm.formDataToBeWatched.criteres_d_eligibilite_credit_syndique_choix == "Non"
    },
    on: {
      change: function change($event) {
        return _vm.checkboxValCashCall($event, "criteres_d_eligibilite_credit_syndique_choix");
      }
    }
  })])]), _vm._v(" "), _c("td", [_c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.criteres_d_eligibilite_credit_syndique_commentaire,
      expression: "formDataToBeWatched.criteres_d_eligibilite_credit_syndique_commentaire"
    }],
    staticClass: "form-control",
    attrs: {
      cols: "1",
      rows: "2"
    },
    domProps: {
      value: _vm.formDataToBeWatched.criteres_d_eligibilite_credit_syndique_commentaire
    },
    on: {
      change: _vm.handleInput,
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "criteres_d_eligibilite_credit_syndique_commentaire", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _vm._m(5), _vm._v(" "), _c("tr", [_vm._m(6), _vm._v(" "), _c("td", {
    staticStyle: {
      width: "50px"
    }
  }, [_c("div", {
    staticClass: "m-2 mr-4",
    staticStyle: {
      "vertical-align": "middle"
    }
  }, [_c("input", {
    staticClass: "form-check-input",
    staticStyle: {
      width: "20px",
      height: "20px",
      opacity: "1"
    },
    attrs: {
      type: "checkbox",
      value: "Oui",
      id: "oui" + 4,
      disabled: ""
    },
    domProps: {
      checked: _vm.formDataToBeWatched.criteres_d_eligibilite_eligible_choix == "Oui"
    },
    on: {
      change: function change($event) {
        return _vm.checkboxValCashCall($event, "criteres_d_eligibilite_eligible_choix");
      }
    }
  })])]), _vm._v(" "), _c("td", [_c("div", {
    staticClass: "m-2 mr-4"
  }, [_c("input", {
    staticClass: "form-check-input",
    staticStyle: {
      width: "20px",
      height: "20px",
      opacity: "1"
    },
    attrs: {
      type: "checkbox",
      value: "Non",
      id: "non" + 4,
      disabled: ""
    },
    domProps: {
      checked: _vm.formDataToBeWatched.criteres_d_eligibilite_eligible_choix == "Non"
    },
    on: {
      change: function change($event) {
        return _vm.checkboxValCashCall($event, "criteres_d_eligibilite_eligible_choix");
      }
    }
  })])]), _vm._v(" "), _c("td", [_c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.criteres_d_eligibilite_eligible_commentaire,
      expression: "formDataToBeWatched.criteres_d_eligibilite_eligible_commentaire"
    }],
    staticClass: "form-control",
    attrs: {
      cols: "1",
      rows: "2"
    },
    domProps: {
      value: _vm.formDataToBeWatched.criteres_d_eligibilite_eligible_commentaire
    },
    on: {
      change: _vm.handleInput,
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "criteres_d_eligibilite_eligible_commentaire", $event.target.value);
      }
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
  }, [_vm._v("\n                        Fermer le tableau\n                    ")])])])]) : _c("div", {
    staticClass: "card card-width-height"
  }, [_c("br"), _vm._v(" "), _c("div", {
    staticClass: "card-header hdc pb-0 pt-2"
  }, [_c("h6", {
    staticClass: "head",
    attrs: {
      id: "f5-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Checklist critère d'éligibilité à l'analyse de risque\n                        ")]), _vm._v(" "), _c("div", {
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
    staticClass: "form-label",
    attrs: {
      "for": "type_de_financement"
    }
  }, [_vm._v("Type de financement"), _c("span", {
    staticClass: "periodicite"
  }), _vm._v(" "), _c("span", {
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
      "for": "montant_demande"
    }
  }, [_vm._v("Montant demande (FCFA)"), _c("span", {
    staticClass: "periodicite"
  }), _vm._v(" "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", [_c("b", [_vm._v("Objet du financement")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", {
    staticClass: "text-center"
  }, [_c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("ITEM / VARIABLE")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("OUI ")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("NON ")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("COMMENTAIRE ")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticStyle: {
      width: "450px"
    }
  }, [_vm._v("\n                                            A-\tContrepartie correspondant aux critères de définition d’un grand risque au sens de l’article 19 de la circulaire N°04-2017/CB/C relative à la gestion des risques dans les établissements de crédit et les compagnies financières de l’UMOA "), _c("br"), _vm._v(" "), _c("b", [_vm._v("La notion de ≪ grand risque ≫")]), _vm._v(" représente un client ou un groupe de clients liés dont la somme de ses actifs pondérés en fonction du risque de crédit atteint au moins 10 % des fonds propres de base (T1) d'un établissement.\n                                        ")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", [_c("td", {
    attrs: {
      colspan: "4"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", [_c("b", [_vm._v("Eligible à l’analyse Risque")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dc/DC-CHC1-OLD.vue?vue&type=style&index=0&id=25fc5f16&lang=css&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dc/DC-CHC1-OLD.vue?vue&type=style&index=0&id=25fc5f16&lang=css&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n*[data-v-25fc5f16] {\r\n    font-family: \"Google sans\";\n}\nlabel[data-v-25fc5f16] {\r\n    height: 10px;\r\n    font-size: 13px;\n}\ninput[data-v-25fc5f16],\r\nselect[data-v-25fc5f16] {\r\n    /* height: 35px; */\r\n    border-color: #34495e;\r\n    color: #57606f;\r\n    font-size: 13px;\r\n    font-weight: bold;\n}\r\n\r\n/* select{\r\n    width: 150px;\r\n} */\r\n\r\n/* textarea, */\r\n/* input[type=\"text\"],\r\ninput[type=\"date\"] {\r\n    width: 250px;\r\n} */\n.th[data-v-25fc5f16] {\r\n    padding: 4px;\r\n    padding-bottom: 0px;\n}\n.card-width-height[data-v-25fc5f16] {\r\n    width: 100%;\r\n    height: 100%;\n}\n.head[data-v-25fc5f16] {\r\n    color: #f1f2f6;\r\n    font-size: 22px;\n}\n.hdc[data-v-25fc5f16] {\r\n    background-color: #57606f;\n}\n.relook-header[data-v-25fc5f16] {\r\n    color: #000;\r\n    background-color: #f4f3f3;\r\n    padding: 5px;\r\n    border-bottom: 1px solid #b6b8bb;\n}\n.badge-sm[data-v-25fc5f16] {\r\n    display: inline-block;\r\n    width: 15px;\r\n    height: 15px;\r\n    background: rgba(255, 0, 0, 0.882);\r\n    color: white;\r\n    font-size: 12px;\r\n    font-weight: 500;\r\n    border-radius: 100%;\r\n    position: absolute;\r\n    top: -20%;\r\n    left: 55%;\r\n    text-align: center;\n}\n.imageM22[data-v-25fc5f16] {\r\n    background: url(\"/images/capture_cofina/exemple_source_revenus.png\")\r\n        no-repeat;\r\n    background-position: center;\r\n    background-size: contain;\r\n    width: 1000px;\r\n    height: 200px;\n}\ntd[data-v-25fc5f16],\r\np[data-v-25fc5f16] {\r\n    font-size: 13px;\n}\n.relook-header[data-v-25fc5f16] {\r\n    color: #000;\r\n    background-color: #f4f3f3;\r\n    padding: 5px;\r\n    border-bottom: 1px solid #b6b8bb;\n}\n.width-100[data-v-25fc5f16] {\r\n    width: 90%;\n}\n.personne input[data-v-25fc5f16] {\r\n    width: 135px;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dc/DC-CHC1-OLD.vue?vue&type=style&index=0&id=25fc5f16&lang=css&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dc/DC-CHC1-OLD.vue?vue&type=style&index=0&id=25fc5f16&lang=css&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DC_CHC1_OLD_vue_vue_type_style_index_0_id_25fc5f16_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DC-CHC1-OLD.vue?vue&type=style&index=0&id=25fc5f16&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dc/DC-CHC1-OLD.vue?vue&type=style&index=0&id=25fc5f16&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DC_CHC1_OLD_vue_vue_type_style_index_0_id_25fc5f16_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DC_CHC1_OLD_vue_vue_type_style_index_0_id_25fc5f16_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/contreanalyse/nsia/filiale/dc/DC-CHC1-OLD.vue":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/nsia/filiale/dc/DC-CHC1-OLD.vue ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DC_CHC1_OLD_vue_vue_type_template_id_25fc5f16_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DC-CHC1-OLD.vue?vue&type=template&id=25fc5f16&scoped=true */ "./resources/js/components/contreanalyse/nsia/filiale/dc/DC-CHC1-OLD.vue?vue&type=template&id=25fc5f16&scoped=true");
/* harmony import */ var _DC_CHC1_OLD_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DC-CHC1-OLD.vue?vue&type=script&lang=js */ "./resources/js/components/contreanalyse/nsia/filiale/dc/DC-CHC1-OLD.vue?vue&type=script&lang=js");
/* harmony import */ var _DC_CHC1_OLD_vue_vue_type_style_index_0_id_25fc5f16_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DC-CHC1-OLD.vue?vue&type=style&index=0&id=25fc5f16&lang=css&scoped=true */ "./resources/js/components/contreanalyse/nsia/filiale/dc/DC-CHC1-OLD.vue?vue&type=style&index=0&id=25fc5f16&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DC_CHC1_OLD_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _DC_CHC1_OLD_vue_vue_type_template_id_25fc5f16_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _DC_CHC1_OLD_vue_vue_type_template_id_25fc5f16_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "25fc5f16",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/contreanalyse/nsia/filiale/dc/DC-CHC1-OLD.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/contreanalyse/nsia/filiale/dc/DC-CHC1-OLD.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/nsia/filiale/dc/DC-CHC1-OLD.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DC_CHC1_OLD_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DC-CHC1-OLD.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dc/DC-CHC1-OLD.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DC_CHC1_OLD_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/contreanalyse/nsia/filiale/dc/DC-CHC1-OLD.vue?vue&type=style&index=0&id=25fc5f16&lang=css&scoped=true":
/*!***************************************************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/nsia/filiale/dc/DC-CHC1-OLD.vue?vue&type=style&index=0&id=25fc5f16&lang=css&scoped=true ***!
  \***************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DC_CHC1_OLD_vue_vue_type_style_index_0_id_25fc5f16_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DC-CHC1-OLD.vue?vue&type=style&index=0&id=25fc5f16&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dc/DC-CHC1-OLD.vue?vue&type=style&index=0&id=25fc5f16&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/contreanalyse/nsia/filiale/dc/DC-CHC1-OLD.vue?vue&type=template&id=25fc5f16&scoped=true":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/nsia/filiale/dc/DC-CHC1-OLD.vue?vue&type=template&id=25fc5f16&scoped=true ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DC_CHC1_OLD_vue_vue_type_template_id_25fc5f16_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DC_CHC1_OLD_vue_vue_type_template_id_25fc5f16_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DC_CHC1_OLD_vue_vue_type_template_id_25fc5f16_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DC-CHC1-OLD.vue?vue&type=template&id=25fc5f16&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dc/DC-CHC1-OLD.vue?vue&type=template&id=25fc5f16&scoped=true");


/***/ })

}]);