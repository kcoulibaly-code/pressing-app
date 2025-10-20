"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_contreanalyse_nsia_filiale_dgr_DGR-FAR3_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dgr/DGR-FAR3.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dgr/DGR-FAR3.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/ContextMenu */ "./resources/js/components/shared/ContextMenu.vue");
/* harmony import */ var _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/ContextMenuItem */ "./resources/js/components/shared/ContextMenuItem.vue");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../services/auth.service */ "./resources/js/services/auth.service.js");
/* harmony import */ var _services_credit_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../services/credit.service */ "./resources/js/services/credit.service.js");
/* harmony import */ var _helpers_indexedDB__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../helpers/indexedDB */ "./resources/js/helpers/indexedDB.js");
/* harmony import */ var _helpers_indexedDB__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_helpers_indexedDB__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_nsia_f8_constants_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../services/nsia/f8-constants.js */ "./resources/js/services/nsia/f8-constants.js");
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
//  import {
//      MoreVerticalIcon,
//      ChevronUpIcon,
//      ChevronDownIcon,
//  } from "vue-feather-icons";




//  import { AirplayIcon } from 'vue-feather-icons'
//  import { BookOpenIcon } from 'vue-feather-icons'





window.$ = window.jQuery = __webpack_require__(/*! jquery/dist/jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "fiche-signaletique",
  display: "Fiche signaletique",
  components: {
    MoreVerticalIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.MoreVerticalIcon,
    ChevronUpIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.ChevronUpIcon,
    ChevronDownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.ChevronDownIcon,
    ContextMenu: _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_0__["default"],
    ContextMenuItem: _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_1__["default"],
    AirplayIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.AirplayIcon,
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.TrashIcon,
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.PlusIcon,
    BookOpenIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.BookOpenIcon
  },
  props: {
    meta_data: Object,
    tb_name: String,
    tb_display_name: String
  },
  created: function created() {
    var _this = this;
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var cachedSecteurs, data;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            cachedSecteurs = localStorage.getItem('secteurs_activites');
            if (cachedSecteurs) {
              _context.next = 6;
              break;
            }
            _context.next = 4;
            return _services_credit_service__WEBPACK_IMPORTED_MODULE_4__["default"].secteurs_activites().then(function (res) {
              _this.secteurs_activites = res.data;
              localStorage.setItem('secteurs_activites', JSON.stringify(res.data));
            })["catch"](function (err) {
              console.log(err);
            });
          case 4:
            _context.next = 8;
            break;
          case 6:
            data = JSON.parse(cachedSecteurs);
            _this.secteurs_activites = data;
          case 8:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  mounted: function mounted() {
    var _this$meta_data$dossi;
    var applied_templ_name = (_this$meta_data$dossi = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi === void 0 ? void 0 : _this$meta_data$dossi.applied_templ_name;
    var tbArrays = this.determineCredPubTables(applied_templ_name);
    this.credpub00 = tbArrays[0];
    this.credpub_8 = tbArrays[2];
    this.loadRetrieved();
    this.loadTbAttrs(); // charge les attributs + sous attributs des tables
    // helper.loadCurrencyFormatter();
    this.tableClosedOrOpened();
    // this.crdLd();
  },
  data: function data() {
    var vm = this;
    return {
      ebapisHost: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_2__["default"].host,
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
      credpub_8: null,
      credits: [],
      clients: [],
      tb_cct: [],
      tb_cmt: [],
      tb_clt: [],
      secteurs_activites: [],
      dossier_credit: null,
      encours: null,
      placeholder: "Chercher clients",
      matcli: "matcli",
      nomcli: "nomcli",
      meta_parseable: {
        cred_pub_key: this.meta_data["cred_pub_key"],
        tb_name: this.tb_name
      },
      cmt: [{
        facilite: "",
        ligne: "",
        exposition_global: 0,
        encours: 0,
        comment_garentie_elligible: "",
        garantie_eligible: 0,
        garantie_eligible_saisie: 0,
        taux_couverture: 0,
        comeFrom: ""
      }],
      cct: [{
        facilite: "",
        ligne: "",
        exposition_global: 0,
        encours: 0,
        comment_garentie_elligible: "",
        garantie_eligible: 0,
        garantie_eligible_saisie: 0,
        taux_couverture: 0,
        comeFrom: ""
      }],
      clt: [{
        facilite: "",
        ligne: "",
        exposition_global: 0,
        encours: 0,
        comment_garentie_elligible: "",
        garantie_eligible: 0,
        garantie_eligible_saisie: 0,
        taux_couverture: 0,
        comeFrom: ""
      }],
      syntese_credit: [{
        facilite: "",
        ligne: "",
        exposition_global: 0,
        encours: 0,
        comment_garentie_elligible: "",
        garantie_eligible: 0,
        garantie_eligible_saisie: 0,
        taux_couverture: 0,
        comeFrom: ""
      }],
      tous_les_lignes_filtres: [].concat(_toConsumableArray(_services_nsia_f8_constants_js__WEBPACK_IMPORTED_MODULE_6__["default"].tous_les_lignes), _toConsumableArray(_services_nsia_f8_constants_js__WEBPACK_IMPORTED_MODULE_6__["default"].lignes_engagements_signatures)),
      // lignes_engagements_signatures: [
      //     { libelle: 'Caution de soumissission' },
      //     { libelle: 'Caution de demarrage' },
      //     { libelle: 'Caution de bonne fin' },
      //     { libelle: 'Caution de retenue de garantie' },
      //     { libelle: "Caution d'admission temporaire" },
      //     { libelle: 'Caution de garantie de paiement' },
      //     { libelle: 'Caution fiscale' },
      //     { libelle: 'Caution marché' },
      //     { libelle: "Obligation Cautionnée" },
      //     { libelle: 'Caution pour impôt contesté' },
      //     { libelle: 'Aval de traites' },
      //     { libelle: 'Credoc Irrévocable' },
      //     { libelle: 'Credoc notifié' },
      //     { libelle: 'Credoc confirmé' },
      //     { libelle: 'Engagement de financement' },
      //     { libelle: "LC's" },
      //     { libelle: "SBLC" },
      //     { libelle: "Autres" },
      // ],
      conso_fond_propres: [{
        cmt_libelle: "CMT",
        cmt_bilan: 0,
        cmt_hor_bilan: 0,
        cmt_fcec: 0,
        cmt_hb_apres_fcec: 0,
        cmt_total_exposition: 0,
        cmt_tarc: 0,
        cmt_pond: 0,
        cmt_apr: 0
      }, {
        cct_libelle: "CCT",
        cct_bilan: 0,
        cct_hor_bilan: 0,
        cct_fcec: 0,
        cct_hb_apres_fcec: 0,
        cct_total_exposition: 0,
        cct_tarc: 0,
        cct_pond: 0,
        cct_apr: 0
      }],
      formDataToBeWatched: {
        cmt: "",
        cct: "",
        clt: "",
        taux_couverture: 0,
        total_exposition_global_cct: 0,
        total_garantie_eligible_cct: 0,
        total_taux_couverture_cct: 0,
        total_exposition_global_cmt: 0,
        total_garantie_eligible_cmt: 0,
        total_taux_couverture_cmt: 0,
        total_exposition_global_clt: 0,
        total_garantie_eligible_clt: 0,
        total_taux_couverture_clt: 0,
        //

        total_encours_cct: 0,
        total_encours_cmt: 0,
        total_encours_clt: 0,
        total_general_encours_clt: 0,
        total_garantie_eligible_saisie_cct: 0,
        total_garantie_eligible_saisie_cmt: 0,
        total_garantie_eligible_saisie_clt: 0,
        total_general_garantie_eligible_saisie_clt: 0,
        //
        total_general_exposition_global_clt: 0,
        total_general_garantie_eligible_clt: 0,
        total_general_taux_couverture_clt: 0,
        //
        // // cct
        // total_exposition_globale:"",
        // total_cct_garantie_elligible:"",
        // total_taux_couverture:"",
        // // cmt
        // total_exposition_globale:"",
        // total_cmt_garantie_elligible:"",
        // total_taux_couverture:"",
        // // clt
        // total_exposition_globale:"",
        // total_clt_garantie_elligible:"",
        // total_taux_couverture:"",
        comment_clt: "",
        comment_cmt: "",
        comment_cct: "",
        notes: []
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
      but_du_pret_data: null,
      type_credit: null,
      type_de_clientele: null,
      listingNote: false,
      credpub00: null
    };
  },
  methods: {
    findIndexByObj: function findIndexByObj(label) {
      var _this$tab;
      var tab = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "secteurs_activites";
      return (_this$tab = this[tab]) === null || _this$tab === void 0 ? void 0 : _this$tab.findIndex(function (el) {
        return (el === null || el === void 0 ? void 0 : el.secteurs_cofina) === label;
      });
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
    },
    somX3: function somX3(ob, key) {
      var som = 0;
      ob.filter(function (elm) {
        if (!['', null, undefined].includes(elm[key])) {
          var result = String(elm[key]).replace(/\s+/g, "");
          if (result === "" || isNaN(result)) {
            som += 0;
          } else {
            som += parseInt(result);
          }
        }
      });
      return som;
    },
    somTaux: function somTaux(ob, key) {
      var som = 0;
      ob.forEach(function (elm) {
        var result = String(elm[key]).replace(/\s+/g, "");
        if (result === "" || isNaN(result)) {
          som += 0;
        } else {
          som += parseFloat(result);
        }
      });
      return som;
    },
    someMtn: function someMtn(tb) {
      var som = 0;
      if (tb.length > 0 && tb.length == 1) {
        return tb[0];
      } else {
        tb.forEach(function (el) {
          var result = String(el).replace(/\s+/g, "");
          if (result === "" || isNaN(result)) {
            som += 0;
          } else {
            som += parseInt(result);
          }
        });
      }
      return som;
    },
    loadRetrieved: function loadRetrieved() {
      var _this2 = this;
      var lentb = this.meta_data["dossier_credit"]["tbs_in_use"];
      var createdKey = this.tb_name;
      var createdKeyArr = createdKey.split("tb");
      createdKey = "cred_pub_tb_" + createdKeyArr[1];
      if (this.meta_data['dossier_credit'][createdKey] === undefined) {
        var _this$meta_data$dossi2, _this$meta_data$dossi5;
        if (((_this$meta_data$dossi2 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi2 === void 0 ? void 0 : _this$meta_data$dossi2["cred_pub_tb_19003"]) != undefined) {
          var _this$meta_data$dossi3, _this$meta_data$dossi4;
          (_this$meta_data$dossi3 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi3 === void 0 || (_this$meta_data$dossi3 = _this$meta_data$dossi3["cred_pub_tb_19003"]) === null || _this$meta_data$dossi3 === void 0 || _this$meta_data$dossi3.nouvelles_lignes_caisse.forEach(function (el, index) {
            // console.log("el ==> ", el);
            var duree_credit = el === null || el === void 0 ? void 0 : el.duree;
            var mtn = el === null || el === void 0 ? void 0 : el.proposition;
            var d0 = {
              mtn: el === null || el === void 0 ? void 0 : el.proposition,
              line: el === null || el === void 0 ? void 0 : el.ligne,
              encours: el === null || el === void 0 ? void 0 : el.encours
            };
            var verif = _this2.determineTypeCreditByDuree(duree_credit);
            if (verif == "CCT") {
              _this2.tb_cct.push(d0);
            } else if (verif == "CMT") {
              _this2.tb_cmt.push(d0);
            } else if (verif == "CLT") {
              _this2.tb_clt.push(d0);
            }
          });

          // console.log(" nouvelles_lignes_caisse tb_cct => ",this.tb_cct)
          // console.log("nouvelles_lignes_caisse tb_cmt => ",this.tb_cmt)
          // console.log("nouvelles_lignes_caisse tb_clt => ",this.tb_clt)

          (_this$meta_data$dossi4 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi4 === void 0 || (_this$meta_data$dossi4 = _this$meta_data$dossi4["cred_pub_tb_19003"]) === null || _this$meta_data$dossi4 === void 0 || _this$meta_data$dossi4.nouvelles_lignes_signature.forEach(function (el, index) {
            var duree_credit_caution = el === null || el === void 0 ? void 0 : el.duree;
            var mtn_caution = el === null || el === void 0 ? void 0 : el.proposition;
            var d1 = {
              mtn: el === null || el === void 0 ? void 0 : el.proposition,
              line: el === null || el === void 0 ? void 0 : el.ligne,
              encours: el === null || el === void 0 ? void 0 : el.encours
            };
            var verif_caution = _this2.determineTypeCreditByDuree(duree_credit_caution);
            if (verif_caution == "CCT") {
              _this2.tb_cct.push(d1);
            } else if (verif_caution == "CMT") {
              _this2.tb_cmt.push(d1);
            } else if (verif_caution == "CLT") {
              _this2.tb_clt.push(d1);
            }
          });

          // console.log(" nouvelles_lignes_signature tb_cct => ",this.tb_cct)
          // console.log("nouvelles_lignes_signature tb_cmt => ",this.tb_cmt)
          // console.log("nouvelles_lignes_signature tb_clt => ",this.tb_clt)

          var tb_arr = ["tb_cct", "tb_cmt", "tb_clt"];
          tb_arr.forEach(function (el, index) {
            var element = el;
            var data_ = _this2[element];
            if (data_.length > 0) {
              if (element == "tb_cmt") {
                data_.forEach(function (item, i) {
                  if (_this2.cmt[i] != undefined) {
                    var _item$encours;
                    _this2.cmt[i].ligne = item === null || item === void 0 ? void 0 : item.line;
                    _this2.cmt[i].exposition_global = item === null || item === void 0 ? void 0 : item.mtn;
                    _this2.cmt[i].encours = (_item$encours = item === null || item === void 0 ? void 0 : item.encours) !== null && _item$encours !== void 0 ? _item$encours : 0;
                    _this2.cmt[i].comeFrom = "tb_8";
                  } else {
                    var _item$encours2;
                    _this2.cmt[i] = {
                      facilite: "",
                      ligne: item === null || item === void 0 ? void 0 : item.line,
                      exposition_global: item === null || item === void 0 ? void 0 : item.mtn,
                      encours: (_item$encours2 = item === null || item === void 0 ? void 0 : item.encours) !== null && _item$encours2 !== void 0 ? _item$encours2 : 0,
                      comment_garentie_elligible: "",
                      garantie_eligible: 0,
                      garantie_eligible_saisie: 0,
                      taux_couverture: 0,
                      comeFrom: "tb_8"
                    };
                  }
                });
                _this2.handleInput();
              }
              if (element == "tb_cct") {
                data_.forEach(function (item, i) {
                  if (_this2.cct[i] != undefined) {
                    var _item$encours3;
                    _this2.cct[i].ligne = item === null || item === void 0 ? void 0 : item.line;
                    _this2.cct[i].exposition_global = item === null || item === void 0 ? void 0 : item.mtn;
                    _this2.cct[i].encours = (_item$encours3 = item === null || item === void 0 ? void 0 : item.encours) !== null && _item$encours3 !== void 0 ? _item$encours3 : 0;
                    _this2.cct[i].comeFrom = "tb_8";
                  } else {
                    var _item$encours4;
                    _this2.cct[i] = {
                      facilite: "",
                      ligne: item === null || item === void 0 ? void 0 : item.line,
                      exposition_global: item === null || item === void 0 ? void 0 : item.mtn,
                      encours: (_item$encours4 = item === null || item === void 0 ? void 0 : item.encours) !== null && _item$encours4 !== void 0 ? _item$encours4 : 0,
                      comment_garentie_elligible: "",
                      garantie_eligible: 0,
                      garantie_eligible_saisie: 0,
                      taux_couverture: 0,
                      comeFrom: "tb_8"
                    };
                  }
                });
                _this2.handleInput();
              }
              if (element == "tb_clt") {
                data_.forEach(function (item, i) {
                  if (_this2.clt[i] != undefined) {
                    var _item$encours5;
                    _this2.clt[i].ligne = item === null || item === void 0 ? void 0 : item.line;
                    _this2.clt[i].exposition_global = item === null || item === void 0 ? void 0 : item.mtn;
                    _this2.clt[i].encours = (_item$encours5 = item === null || item === void 0 ? void 0 : item.encours) !== null && _item$encours5 !== void 0 ? _item$encours5 : 0;
                    _this2.clt[i].comeFrom = "tb_8";
                  } else {
                    var _item$encours6;
                    _this2.clt[i] = {
                      facilite: "",
                      ligne: item === null || item === void 0 ? void 0 : item.line,
                      exposition_global: item === null || item === void 0 ? void 0 : item.mtn,
                      encours: (_item$encours6 = item === null || item === void 0 ? void 0 : item.encours) !== null && _item$encours6 !== void 0 ? _item$encours6 : 0,
                      comment_garentie_elligible: "",
                      garantie_eligible: 0,
                      garantie_eligible_saisie: 0,
                      taux_couverture: 0,
                      comeFrom: "tb_8"
                    };
                  }
                });
                _this2.handleInput();
              }
            }
          });
          this.syntese_credit = this.getSynteseCredit();
        } else if (((_this$meta_data$dossi5 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi5 === void 0 ? void 0 : _this$meta_data$dossi5[this.credpub_8]) != undefined) {
          var _this$meta_data$dossi6, _this$meta_data$dossi7;
          (_this$meta_data$dossi6 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi6 === void 0 || (_this$meta_data$dossi6 = _this$meta_data$dossi6[this.credpub_8]) === null || _this$meta_data$dossi6 === void 0 || _this$meta_data$dossi6.nouvelles_lignes_caisse.forEach(function (el, index) {
            // console.log("el ==> ", el);
            var duree_credit = el === null || el === void 0 ? void 0 : el.duree;
            var mtn = el === null || el === void 0 ? void 0 : el.proposition;
            var d0 = {
              mtn: el === null || el === void 0 ? void 0 : el.proposition,
              line: el === null || el === void 0 ? void 0 : el.ligne,
              encours: el === null || el === void 0 ? void 0 : el.encours
            };
            var verif = _this2.determineTypeCreditByDuree(duree_credit);
            if (verif == "CCT") {
              _this2.tb_cct.push(d0);
            } else if (verif == "CMT") {
              _this2.tb_cmt.push(d0);
            } else if (verif == "CLT") {
              _this2.tb_clt.push(d0);
            }
          });

          // console.log(" nouvelles_lignes_caisse tb_cct => ",this.tb_cct)
          // console.log("nouvelles_lignes_caisse tb_cmt => ",this.tb_cmt)
          // console.log("nouvelles_lignes_caisse tb_clt => ",this.tb_clt)

          (_this$meta_data$dossi7 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi7 === void 0 || (_this$meta_data$dossi7 = _this$meta_data$dossi7[this.credpub_8]) === null || _this$meta_data$dossi7 === void 0 || _this$meta_data$dossi7.nouvelles_lignes_signature.forEach(function (el, index) {
            var duree_credit_caution = el === null || el === void 0 ? void 0 : el.duree;
            var mtn_caution = el === null || el === void 0 ? void 0 : el.proposition;
            var d1 = {
              mtn: el === null || el === void 0 ? void 0 : el.proposition,
              line: el === null || el === void 0 ? void 0 : el.ligne,
              encours: el === null || el === void 0 ? void 0 : el.encours
            };
            var verif_caution = _this2.determineTypeCreditByDuree(duree_credit_caution);
            if (verif_caution == "CCT") {
              _this2.tb_cct.push(d1);
            } else if (verif_caution == "CMT") {
              _this2.tb_cmt.push(d1);
            } else if (verif_caution == "CLT") {
              _this2.tb_clt.push(d1);
            }
          });

          // console.log(" nouvelles_lignes_signature tb_cct => ",this.tb_cct)
          // console.log("nouvelles_lignes_signature tb_cmt => ",this.tb_cmt)
          // console.log("nouvelles_lignes_signature tb_clt => ",this.tb_clt)

          var _tb_arr = ["tb_cct", "tb_cmt", "tb_clt"];
          _tb_arr.forEach(function (el, index) {
            var element = el;
            var data_ = _this2[element];
            if (data_.length > 0) {
              if (element == "tb_cmt") {
                data_.forEach(function (item, i) {
                  if (_this2.cmt[i] != undefined) {
                    var _item$encours7;
                    _this2.cmt[i].ligne = item === null || item === void 0 ? void 0 : item.line;
                    _this2.cmt[i].exposition_global = item === null || item === void 0 ? void 0 : item.mtn;
                    _this2.cmt[i].encours = (_item$encours7 = item === null || item === void 0 ? void 0 : item.encours) !== null && _item$encours7 !== void 0 ? _item$encours7 : 0;
                    _this2.cmt[i].comeFrom = "tb_8";
                  } else {
                    var _item$encours8;
                    _this2.cmt[i] = {
                      facilite: "",
                      ligne: item === null || item === void 0 ? void 0 : item.line,
                      exposition_global: item === null || item === void 0 ? void 0 : item.mtn,
                      encours: (_item$encours8 = item === null || item === void 0 ? void 0 : item.encours) !== null && _item$encours8 !== void 0 ? _item$encours8 : 0,
                      comment_garentie_elligible: "",
                      garantie_eligible: 0,
                      garantie_eligible_saisie: 0,
                      taux_couverture: 0,
                      comeFrom: "tb_8"
                    };
                  }
                });
                _this2.handleInput();
              }
              if (element == "tb_cct") {
                data_.forEach(function (item, i) {
                  if (_this2.cct[i] != undefined) {
                    var _item$encours9;
                    _this2.cct[i].ligne = item === null || item === void 0 ? void 0 : item.line;
                    _this2.cct[i].exposition_global = item === null || item === void 0 ? void 0 : item.mtn;
                    _this2.cct[i].encours = (_item$encours9 = item === null || item === void 0 ? void 0 : item.encours) !== null && _item$encours9 !== void 0 ? _item$encours9 : 0;
                    _this2.cct[i].comeFrom = "tb_8";
                  } else {
                    var _item$encours0;
                    _this2.cct[i] = {
                      facilite: "",
                      ligne: item === null || item === void 0 ? void 0 : item.line,
                      exposition_global: item === null || item === void 0 ? void 0 : item.mtn,
                      encours: (_item$encours0 = item === null || item === void 0 ? void 0 : item.encours) !== null && _item$encours0 !== void 0 ? _item$encours0 : 0,
                      comment_garentie_elligible: "",
                      garantie_eligible: 0,
                      garantie_eligible_saisie: 0,
                      taux_couverture: 0,
                      comeFrom: "tb_8"
                    };
                  }
                });
                _this2.handleInput();
              }
              if (element == "tb_clt") {
                data_.forEach(function (item, i) {
                  if (_this2.clt[i] != undefined) {
                    var _item$encours1;
                    _this2.clt[i].ligne = item === null || item === void 0 ? void 0 : item.line;
                    _this2.clt[i].exposition_global = item === null || item === void 0 ? void 0 : item.mtn;
                    _this2.clt[i].encours = (_item$encours1 = item === null || item === void 0 ? void 0 : item.encours) !== null && _item$encours1 !== void 0 ? _item$encours1 : 0;
                    _this2.clt[i].comeFrom = "tb_8";
                  } else {
                    var _item$encours10;
                    _this2.clt[i] = {
                      facilite: "",
                      ligne: item === null || item === void 0 ? void 0 : item.line,
                      exposition_global: item === null || item === void 0 ? void 0 : item.mtn,
                      encours: (_item$encours10 = item === null || item === void 0 ? void 0 : item.encours) !== null && _item$encours10 !== void 0 ? _item$encours10 : 0,
                      comment_garentie_elligible: "",
                      garantie_eligible: 0,
                      garantie_eligible_saisie: 0,
                      taux_couverture: 0,
                      comeFrom: "tb_8"
                    };
                  }
                });
                _this2.handleInput();
              }
            }
          });
          this.syntese_credit = this.getSynteseCredit();
        }
      }
      if (lentb.length > 0) {
        var _this$meta_data$dossi8;
        if (this.meta_data["dossier_credit"][createdKey] != undefined) {
          this.formDataToBeWatched = this.meta_data["dossier_credit"][createdKey];
          if (this.meta_data["dossier_credit"][createdKey]["clt"] != "") {
            this.clt = this.meta_data["dossier_credit"][createdKey]["clt"];
          }
          if (this.meta_data["dossier_credit"][createdKey]["cct"] != "") {
            this.cct = this.meta_data["dossier_credit"][createdKey]["cct"];
          }
          if (this.meta_data["dossier_credit"][createdKey]["cmt"] != "") {
            this.cmt = this.meta_data["dossier_credit"][createdKey]["cmt"];
          }
          if (this.meta_data["dossier_credit"][createdKey]["syntese_credit"] != "") {
            this.syntese_credit = this.meta_data["dossier_credit"][createdKey]["syntese_credit"];
          }

          // syntese_credit
        }
        // Close table by default
        this.defaultRetract(false, (_this$meta_data$dossi8 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi8 === void 0 ? void 0 : _this$meta_data$dossi8.applied_templ_id);
      }
    },
    setCmtTauxCcouvertureVars: function setCmtTauxCcouvertureVars() {
      if (parseFloat(this.cmt[0].taux_couverture) > 100) {
        this.cmt[0].taux_couverture = 100;
      }
    },
    setCctTauxCcouvertureVars: function setCctTauxCcouvertureVars() {
      if (parseFloat(this.cct[0].taux_couverture) > 100) {
        this.cct[0].taux_couverture = 100;
      }
    },
    setTbVal: function setTbVal(val) {
      this.cred_pub_key = val;
    },
    loadWithError: function loadWithError(err) {
      // // window.location.href = "/login";
    },
    addMore: function addMore(listName) {
      this[listName].push({
        nom_actionnaire: "",
        pourcentage_participation: "",
        max: this.ActionnariatMaxNumber
      });
    },
    remove: function remove(index) {
      this.actionnariats.splice(index, 1);
      this.formDataToBeWatched.total_part = this.totalPartPourcentageActionnariats;
      this.handleInput();
    },
    taux_couverture_cct: function taux_couverture_cct() {
      var tb_cct = _toConsumableArray(this.cct);
      tb_cct.forEach(function (item, i) {
        var _calc;
        var garantie_eligible = parseInt(String(item.garantie_eligible).replace(/\s+/g, ""));
        var exposition_globale = parseInt(String(item.exposition_global).replace(/\s+/g, ""));
        // console.log("garantie_eligible ==> ", parseInt(String(item.garantie_eligible).replace(/\s+/g, "")), "\n exposition_global ",parseInt(String(item.exposition_global).replace(/\s+/g, "")))
        // let calc1 = garantie_eligible > 0 && exposition_globale > 0 ? (garantie_eligible / exposition_globale * 100) : 0
        var calc1 = garantie_eligible > 0 && exposition_globale > 0 ? garantie_eligible / exposition_globale * 100 : 0;
        if (calc1 > 100) {
          calc1 = 100;
        }
        // if(isNaN(calc1)) return
        item.taux_couverture = (_calc = calc1) === null || _calc === void 0 ? void 0 : _calc.toFixed(2);
        //

        if (['', null, undefined].includes(item === null || item === void 0 ? void 0 : item.encours)) {
          item['encours'] = 0;
        }
        if (['', null, undefined].includes(item === null || item === void 0 ? void 0 : item.garantie_eligible_saisie)) {
          item['garantie_eligible_saisie'] = 0;
        }
      });
      this.cct = tb_cct;
      // this.formDataToBeWatched["total_exposition_global_cct"] = this.somX3(this.cct,"exposition_global");
      // this.formDataToBeWatched["total_garantie_eligible_cct"] = this.somX3(this.cct,"garantie_eligible");
      this.handleInput();
    },
    taux_couverture_cmt: function taux_couverture_cmt() {
      var tb_cmt = _toConsumableArray(this.cmt);
      tb_cmt.forEach(function (item, i) {
        var _calc2;
        var garantie_eligible_cmt = parseInt(String(item.garantie_eligible).replace(/\s+/g, ""));
        var exposition_globale_cmt = parseInt(String(item.exposition_global).replace(/\s+/g, ""));
        // console.log("garantie_eligible ==> ", parseInt(String(item.garantie_eligible).replace(/\s+/g, "")), "\n exposition_global ",parseInt(String(item.exposition_global).replace(/\s+/g, "")))
        var calc2 = garantie_eligible_cmt > 0 && exposition_globale_cmt > 0 ? garantie_eligible_cmt / exposition_globale_cmt * 100 : 0;
        if (calc2 > 100) {
          calc2 = 100;
        }
        // if(isNaN(calc1)) return
        item.taux_couverture = (_calc2 = calc2) === null || _calc2 === void 0 ? void 0 : _calc2.toFixed(2);
        //

        if (['', null, undefined].includes(item === null || item === void 0 ? void 0 : item.encours)) {
          item['encours'] = 0;
        }
        if (['', null, undefined].includes(item === null || item === void 0 ? void 0 : item.garantie_eligible_saisie)) {
          item['garantie_eligible_saisie'] = 0;
        }
      });
      this.cmt = tb_cmt;
      this.handleInput();
    },
    taux_couverture_clt: function taux_couverture_clt() {
      var tb_clt = _toConsumableArray(this.clt);
      tb_clt.forEach(function (item, i) {
        var _calc3;
        var garantie_eligible_clt = parseInt(String(item.garantie_eligible).replace(/\s+/g, ""));
        var exposition_globale_clt = parseInt(String(item.exposition_global).replace(/\s+/g, ""));
        // console.log("garantie_eligible ==> ", parseInt(String(item.garantie_eligible).replace(/\s+/g, "")), "\n exposition_global ",parseInt(String(item.exposition_global).replace(/\s+/g, "")))
        var calc3 = garantie_eligible_clt > 0 && exposition_globale_clt > 0 ? garantie_eligible_clt / exposition_globale_clt * 100 : 0;
        if (calc3 > 100) {
          calc3 = 100;
        }
        // if(isNaN(calc1)) return
        item.taux_couverture = (_calc3 = calc3) === null || _calc3 === void 0 ? void 0 : _calc3.toFixed(2);
        //

        if (['', null, undefined].includes(item === null || item === void 0 ? void 0 : item.encours)) {
          item['encours'] = 0;
        }
        if (['', null, undefined].includes(item === null || item === void 0 ? void 0 : item.garantie_eligible_saisie)) {
          item['garantie_eligible_saisie'] = 0;
        }
      });

      // this.formDataToBeWatched["total_exposition_global_clt"] = this.somX3(tb_clt,"exposition_global");
      // this.formDataToBeWatched["total_garantie_eligible_clt"] = this.somX3(tb_clt,"garantie_eligible");
      this.clt = tb_clt;
      this.handleInput();
    },
    taux_couverture_syntese: function taux_couverture_syntese() {
      var syntese_credit = _toConsumableArray(this.syntese_credit);
      syntese_credit.forEach(function (item, i) {
        var _calc4;
        var garantie_eligible_syntese = parseInt(String(item.garantie_eligible).replace(/\s+/g, ""));
        var exposition_globale_syntese = parseInt(String(item.exposition_global).replace(/\s+/g, ""));
        // console.log("garantie_eligible ==> ", parseInt(String(item.garantie_eligible).replace(/\s+/g, "")), "\n exposition_global ",parseInt(String(item.exposition_global).replace(/\s+/g, "")))
        var calc3 = garantie_eligible_syntese > 0 && exposition_globale_clt > 0 ? garantie_eligible_syntese / exposition_globale_syntese * 100 : 0;
        if (calc3 > 100) {
          calc3 = 100;
        }
        // if(isNaN(calc1)) return
        item.taux_couverture = (_calc4 = calc3) === null || _calc4 === void 0 ? void 0 : _calc4.toFixed(2);
        //
      });

      // this.formDataToBeWatched["total_exposition_global_clt"] = this.somX3(tb_clt,"exposition_global");
      // this.formDataToBeWatched["total_garantie_eligible_clt"] = this.somX3(tb_clt,"garantie_eligible");
      this.syntese_credit = syntese_credit;
      this.handleInput();
    },
    handleInput: function handleInput() {
      var _calc5, _calc6, _calc7, _calc_;
      // this.cct = this.TauxCouvertureCct
      // console.log("TauxCouvertureCct => ", this.TauxCouvertureCct)
      this.formDataToBeWatched["cct"] = this.cct;
      this.formDataToBeWatched["cmt"] = this.cmt;
      this.formDataToBeWatched["clt"] = this.clt;
      //  syntese
      this.syntese_credit = [].concat(_toConsumableArray(this.cct), _toConsumableArray(this.cmt), _toConsumableArray(this.clt));
      // console.log('syntese_credit => ', this.syntese_credit)
      this.formDataToBeWatched["syntese_credit"] = this.syntese_credit;

      // syntese

      this.formDataToBeWatched["total_encours_cct"] = this.somX3(this.cct, "encours");
      this.formDataToBeWatched["total_exposition_global_cct"] = this.somX3(this.cct, "exposition_global");
      this.formDataToBeWatched["total_garantie_eligible_cct"] = this.somX3(this.cct, "garantie_eligible");
      this.formDataToBeWatched["total_garantie_eligible_saisie_cct"] = this.somX3(this.cct, "garantie_eligible_saisie");
      this.formDataToBeWatched["total_encours_cmt"] = this.somX3(this.cmt, "encours");
      this.formDataToBeWatched["total_exposition_global_cmt"] = this.somX3(this.cmt, "exposition_global");
      this.formDataToBeWatched["total_garantie_eligible_cmt"] = this.somX3(this.cmt, "garantie_eligible");
      this.formDataToBeWatched["total_garantie_eligible_saisie_cmt"] = this.somX3(this.cmt, "garantie_eligible_saisie");
      this.formDataToBeWatched["total_encours_clt"] = this.somX3(this.clt, "encours");
      this.formDataToBeWatched["total_exposition_global_clt"] = this.somX3(this.clt, "exposition_global");
      this.formDataToBeWatched["total_garantie_eligible_clt"] = this.somX3(this.clt, "garantie_eligible");
      this.formDataToBeWatched["total_garantie_eligible_saisie_clt"] = this.somX3(this.clt, "garantie_eligible_saisie");

      // // total_taux_couverture_cct
      // this.formDataToBeWatched["total_taux_couverture_cct"] = this.somX3(this.cct,"taux_couverture");
      // // total_taux_couverture_cmt
      // this.formDataToBeWatched["total_taux_couverture_cmt"] = this.somX3(this.cmt,"taux_couverture");

      // // total_taux_couverture_clt
      // this.formDataToBeWatched["total_taux_couverture_clt"] = this.somX3(this.clt,"taux_couverture");

      var garantie_eligible_cct = parseInt(String(this.formDataToBeWatched.total_garantie_eligible_cct).replace(/\s+/g, ""));
      var exposition_globale_cct = parseInt(String(this.formDataToBeWatched.total_exposition_global_cct).replace(/\s+/g, ""));
      var calc1 = garantie_eligible_cct > 0 && exposition_globale_cct > 0 ? garantie_eligible_cct / exposition_globale_cct * 100 : 0;
      if (calc1 > 100) {
        calc1 = 100;
      }
      this.formDataToBeWatched.total_taux_couverture_cct = (_calc5 = calc1) === null || _calc5 === void 0 ? void 0 : _calc5.toFixed(2);
      var garantie_eligible_cmt = parseInt(String(this.formDataToBeWatched.total_garantie_eligible_cmt).replace(/\s+/g, ""));
      var exposition_globale_cmt = parseInt(String(this.formDataToBeWatched.total_exposition_global_cmt).replace(/\s+/g, ""));
      var calc2 = garantie_eligible_cmt > 0 && exposition_globale_cmt > 0 ? garantie_eligible_cmt / exposition_globale_cmt * 100 : 0;
      if (calc2 > 100) {
        calc2 = 100;
      }
      this.formDataToBeWatched.total_taux_couverture_cmt = (_calc6 = calc2) === null || _calc6 === void 0 ? void 0 : _calc6.toFixed(2);
      var garantie_eligible_clt = parseInt(String(this.formDataToBeWatched.total_garantie_eligible_clt).replace(/\s+/g, ""));
      var exposition_globale_clt = parseInt(String(this.formDataToBeWatched.total_exposition_global_clt).replace(/\s+/g, ""));
      var calc3 = garantie_eligible_clt > 0 && exposition_globale_clt > 0 ? garantie_eligible_clt / exposition_globale_clt * 100 : 0;
      if (calc3 > 100) {
        calc3 = 100;
      }
      this.formDataToBeWatched.total_taux_couverture_clt = (_calc7 = calc3) === null || _calc7 === void 0 ? void 0 : _calc7.toFixed(2);
      if (this.formDataToBeWatched["total_taux_couverture_cct"] > 100) {
        this.formDataToBeWatched["total_taux_couverture_cct"] = 100;
      }
      if (this.formDataToBeWatched["total_taux_couverture_cmt"] > 100) {
        this.formDataToBeWatched["total_taux_couverture_cmt"] = 100;
      }
      if (this.formDataToBeWatched["total_taux_couverture_clt"] > 100) {
        this.formDataToBeWatched["total_taux_couverture_clt"] = 100;
      }
      if (['', null, undefined].includes(this.formDataToBeWatched["total_garantie_eligible_saisie_cct"])) {
        this.formDataToBeWatched["total_garantie_eligible_saisie_cct"] = 0;
      }
      if (['', null, undefined].includes(this.formDataToBeWatched["total_garantie_eligible_saisie_cmt"])) {
        this.formDataToBeWatched["total_garantie_eligible_saisie_cmt"] = 0;
      }
      if (['', null, undefined].includes(this.formDataToBeWatched["total_garantie_eligible_saisie_clt"])) {
        this.formDataToBeWatched["total_garantie_eligible_saisie_clt"] = 0;
      }
      if (['', null, undefined].includes(this.formDataToBeWatched["total_encours_cct"])) {
        this.formDataToBeWatched["total_encours_cct"] = 0;
      }
      if (['', null, undefined].includes(this.formDataToBeWatched["total_encours_cmt"])) {
        this.formDataToBeWatched["total_encours_cmt"] = 0;
      }
      if (['', null, undefined].includes(this.formDataToBeWatched["total_encours_clt"])) {
        this.formDataToBeWatched["total_encours_clt"] = 0;
      }
      this.formDataToBeWatched.total_general_exposition_global_clt = this.formDataToBeWatched["total_exposition_global_cct"] + this.formDataToBeWatched["total_exposition_global_cmt"] + this.formDataToBeWatched["total_exposition_global_clt"];
      this.formDataToBeWatched.total_general_garantie_eligible_clt = this.formDataToBeWatched["total_garantie_eligible_cct"] + this.formDataToBeWatched["total_garantie_eligible_cmt"] + this.formDataToBeWatched["total_garantie_eligible_clt"];
      this.formDataToBeWatched.total_general_garantie_eligible_saisie_clt = this.formDataToBeWatched["total_garantie_eligible_saisie_cct"] + this.formDataToBeWatched["total_garantie_eligible_saisie_cmt"] + this.formDataToBeWatched["total_garantie_eligible_saisie_clt"];
      this.formDataToBeWatched.total_general_encours_clt = this.formDataToBeWatched["total_encours_cct"] + this.formDataToBeWatched["total_encours_cmt"] + this.formDataToBeWatched["total_encours_clt"];
      // this.formDataToBeWatched.total_general_taux_couverture_clt = this.formDataToBeWatched["total_taux_couverture_cct"] + this.formDataToBeWatched["total_taux_couverture_cmt"] + this.formDataToBeWatched["total_taux_couverture_clt"]

      // this.formDataToBeWatched.total_general_exposition_global_clt = 
      // this.formDataToBeWatched.total_general_garantie_eligible_clt = 
      // this.formDataToBeWatched.total_general_taux_couverture_clt = 

      var garantie_eligible_clt_ = parseInt(String(this.formDataToBeWatched.total_general_garantie_eligible_clt).replace(/\s+/g, ""));
      var exposition_globale_clt_ = parseInt(String(this.formDataToBeWatched.total_general_exposition_global_clt).replace(/\s+/g, ""));
      var calc_ = garantie_eligible_clt_ > 0 && exposition_globale_clt_ > 0 ? garantie_eligible_clt_ / exposition_globale_clt_ * 100 : 0;
      if (calc_ > 100) {
        calc_ = 100;
      }
      this.formDataToBeWatched.total_general_taux_couverture_clt = (_calc_ = calc_) === null || _calc_ === void 0 ? void 0 : _calc_.toFixed(2);

      // this.formDataToBeWatched["syntese_credit"] = this.getSynteseCredit();

      // somX3
      EventBus.$emit("event-T0", {
        formdata: this.formDataToBeWatched
      });
    },
    getSynteseCredit: function getSynteseCredit() {
      return [].concat(_toConsumableArray(this.cct), _toConsumableArray(this.cmt), _toConsumableArray(this.clt));
    },
    setActionnariatsVars: function setActionnariatsVars(event, index) {
      // si la valeur a été tapée au clavier
      if (event[2]) {
        if (this.actionnariats[index].pourcentage_participation == 0) this.actionnariats[index].max = this.ActionnariatMaxNumber;
        if (Number(this.actionnariats[index].pourcentage_participation) > 0) this.actionnariats[index].max = Number(this.ActionnariatMaxNumber) + Number(this.actionnariats[index][event[0]]);
      }
      this.actionnariats[index][event[0]] = event[1];
      this.handleInput();
    },
    checkTypeDeCredit: function checkTypeDeCredit() {
      // this.dossier_credit.[this.credpub00].montant_sollicite
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
            this.dossier_credit = tbFetcheData['dossier_credit'];
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
    addMoreCct: function addMoreCct() {
      this.cct.push({
        facilite: "",
        ligne: "",
        exposition_global: 0,
        encours: 0,
        comment_garentie_elligible: "",
        garantie_eligible: 0,
        garantie_eligible_saisie: 0,
        taux_couverture: 0
      });
      this.handleInput();
    },
    removeCct: function removeCct(index) {
      this.cct.splice(index, 1);
      this.handleInput();
    },
    addMoreCmt: function addMoreCmt() {
      this.cmt.push({
        facilite: "",
        ligne: "",
        exposition_global: 0,
        encours: 0,
        comment_garentie_elligible: "",
        garantie_eligible: 0,
        garantie_eligible_saisie: 0,
        taux_couverture: 0
      });
      this.handleInput();
    },
    removeCmt: function removeCmt(index) {
      this.cmt.splice(index, 1);
      this.handleInput();
    },
    addMoreClt: function addMoreClt() {
      this.clt.push({
        facilite: "",
        ligne: "",
        exposition_global: 0,
        encours: 0,
        comment_garentie_elligible: "",
        garantie_eligible: 0,
        garantie_eligible_saisie: 0,
        taux_couverture: 0
      });
      this.handleInput();
    },
    removeClt: function removeClt(index) {
      this.clt.splice(index, 1);
      this.handleInput();
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
        id: "ca3-head"
      };
      // console.log(p)
      this.$emit("load-buffer", p);
    },
    credData: function credData(res) {
      this.credits = res.data;
    },
    onSlctMatCli: function onSlctMatCli(obj) {
      var _this$formDataToBeWat,
        _this3 = this;
      this.formDataToBeWatched.matricule_client = obj.matcli;
      this.formDataToBeWatched.nom_client = obj.nomcli;
      this.autoRenamer();
      _services_credit_service__WEBPACK_IMPORTED_MODULE_4__["default"].encours((_this$formDataToBeWat = this.formDataToBeWatched) === null || _this$formDataToBeWat === void 0 ? void 0 : _this$formDataToBeWat.matricule_client).then(function (res) {
        _this3.encoursData(res);
      })["catch"](function (err) {
        console.log(err);
      });
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
    }
  },
  //  TauxCouvertureCct(){

  //     this.cct.forEach(function(item){
  //         // const exp =
  //         item.taux_couverture = Number(String(item.garantie_eligible).replace(/\s+/g,"")) / Number(String(item.exposition_global).replace(/\s+/g,"") || 0)
  //         console.log("item.taux_couverture", item.taux_couverture)
  //     });
  // },

  watch: {
    // 'formDataToBeWatched.cct'() {
    //     this.handleInput()
    //     // console.log("cct")

    // },
    // 'formDataToBeWatched.cmt'() {
    //     this.handleInput()
    //     // console.log("cct")

    // },
    // 'formDataToBeWatched.clt'() {
    //     this.handleInput()
    //     // console.log("cct")

    // },
    formDataToBeWatched: {
      handler: function handler(newVal, oldVal) {
        // if (oldVal === undefined) {
        //   return
        // }
        this.autosaving(newVal, oldVal);
      },
      deep: true,
      immediate: true
    }
  },
  computed: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dgr/DGR-FAR3.vue?vue&type=template&id=d1dd1f36&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dgr/DGR-FAR3.vue?vue&type=template&id=d1dd1f36&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  }, [_c("h3", {
    ref: "topdiv",
    staticClass: "head",
    attrs: {
      id: "ca3-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Analyse de la couverture en garanties\n                        ")]), _vm._v(" "), _c("div", {
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
      id: "cct"
    }
  }, [_vm._v("\n                            CCT\n                            "), _c("chevron-up-icon", {
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
  }, [_c("br"), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered mb-1"
  }, [_vm._m(0), _vm._v(" "), _c("tbody", [_vm._l(_vm.cct, function (element, index) {
    return _c("tr", {
      key: index
    }, [_c("td", [_c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: element.facilite,
        expression: "element.facilite"
      }],
      staticClass: "form-control",
      staticStyle: {
        "min-width": "210px"
      },
      attrs: {
        id: "facilite" + index,
        rows: "1"
      },
      domProps: {
        value: element.facilite
      },
      on: {
        change: _vm.taux_couverture_cct,
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(element, "facilite", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: element.ligne,
        expression: "element.ligne"
      }],
      staticClass: "form-select",
      "class": {
        equipe: (element === null || element === void 0 ? void 0 : element.comeFrom) == "tb_8"
      },
      staticStyle: {
        "min-width": "250px"
      },
      attrs: {
        title: element.ligne
      },
      on: {
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(element, "ligne", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, _vm.taux_couverture_cct]
      }
    }, [_c("option", {
      domProps: {
        value: ""
      }
    }), _vm._v(" "), _vm._l(_vm.tous_les_lignes_filtres, function (line, indexL) {
      return _c("option", {
        key: indexL + "4z_1",
        domProps: {
          value: line.libelle
        }
      }, [_vm._v(_vm._s(line.libelle))]);
    }), _vm._v(" "), (element === null || element === void 0 ? void 0 : element.ligne_mixte) != "" ? _c("option", {
      domProps: {
        value: element.ligne
      }
    }, [_vm._v(_vm._s(element.ligne))]) : _vm._e()], 2)]), _vm._v(" "), _c("td", [_c("currency-input", {
      staticClass: "form-control",
      "class": {
        equipe: (element === null || element === void 0 ? void 0 : element.comeFrom) == "tb_8"
      },
      staticStyle: {
        "min-width": "150px"
      },
      attrs: {
        "default-typing": false,
        type: "text",
        id: "exposition_global" + index
      },
      on: {
        change: _vm.taux_couverture_cct
      },
      model: {
        value: element.exposition_global,
        callback: function callback($$v) {
          _vm.$set(element, "exposition_global", $$v);
        },
        expression: "element.exposition_global\n                                                    "
      }
    })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
      staticClass: "form-control",
      "class": {
        equipe: (element === null || element === void 0 ? void 0 : element.comeFrom) == "tb_8"
      },
      staticStyle: {
        "min-width": "150px"
      },
      attrs: {
        "default-typing": false,
        type: "text",
        id: "encours" + index
      },
      on: {
        change: _vm.taux_couverture_cct
      },
      model: {
        value: element.encours,
        callback: function callback($$v) {
          _vm.$set(element, "encours", $$v);
        },
        expression: "element.encours\n                                                    "
      }
    })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
      staticClass: "form-control",
      "class": {
        equipe: (element === null || element === void 0 ? void 0 : element.comeFrom) == "tb_8"
      },
      staticStyle: {
        "min-width": "150px"
      },
      attrs: {
        "default-typing": false,
        type: "text",
        id: "garantie_eligible" + index
      },
      on: {
        change: _vm.taux_couverture_cct
      },
      model: {
        value: element.garantie_eligible,
        callback: function callback($$v) {
          _vm.$set(element, "garantie_eligible", $$v);
        },
        expression: "element.garantie_eligible\n                                                    "
      }
    })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
      staticClass: "form-control",
      "class": {
        equipe: (element === null || element === void 0 ? void 0 : element.comeFrom) == "tb_8"
      },
      staticStyle: {
        "min-width": "150px"
      },
      attrs: {
        "default-typing": false,
        type: "text",
        id: "garantie_eligible_saisie" + index
      },
      on: {
        change: _vm.taux_couverture_cct
      },
      model: {
        value: element.garantie_eligible_saisie,
        callback: function callback($$v) {
          _vm.$set(element, "garantie_eligible_saisie", $$v);
        },
        expression: "element.garantie_eligible_saisie\n                                                    "
      }
    })], 1), _vm._v(" "), _c("td", [_c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: element.comment_garentie_elligible,
        expression: "element.comment_garentie_elligible"
      }],
      staticClass: "form-control",
      "class": {
        equipe: (element === null || element === void 0 ? void 0 : element.comeFrom) == "tb_8"
      },
      staticStyle: {
        "min-width": "210px"
      },
      attrs: {
        id: "comment_garentie_elligible" + index,
        rows: "1"
      },
      domProps: {
        value: element.comment_garentie_elligible
      },
      on: {
        change: _vm.taux_couverture_cct,
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(element, "comment_garentie_elligible", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("input-group", {
      staticStyle: {
        "min-width": "170px"
      },
      scopedSlots: _vm._u([{
        key: "input",
        fn: function fn() {
          return [_c("currency-input", {
            staticClass: "form-control text-end",
            staticStyle: {
              "border-radius": "unset",
              "padding-right": "7px",
              "border-end-start-radius": "5px",
              "border-start-start-radius": "5px",
              "border-right": "none",
              width: "100px"
            },
            attrs: {
              "default-typing": false,
              disabled: "",
              id: "taux_couverture" + index,
              "float": ""
            },
            on: {
              change: _vm.taux_couverture_cct
            },
            model: {
              value: element.taux_couverture,
              callback: function callback($$v) {
                _vm.$set(element, "taux_couverture", $$v);
              },
              expression: "element.taux_couverture"
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
    })], 1), _vm._v(" "), index == 0 ? _c("td", [_c("button", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: index == 0,
        expression: "index == 0"
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
          return _vm.addMoreCct("cct");
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
        value: index > 0,
        expression: "index > 0"
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
          return _vm.removeCct(index);
        }
      }
    }, [_c("trash-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1)])]);
  }), _vm._v(" "), _c("tr", [_c("td", [_vm._v("\n                                            Total\n                                        ")]), _vm._v(" "), _c("td"), _vm._v(" "), _c("td", [_c("currency-input", {
    attrs: {
      readonly: "",
      "default-typing": false
    },
    on: {
      change: _vm.handleInput
    },
    model: {
      value: _vm.formDataToBeWatched.total_exposition_global_cct,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "total_exposition_global_cct", $$v);
      },
      expression: "\n                                                formDataToBeWatched.total_exposition_global_cct\n                                            "
    }
  })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
    attrs: {
      readonly: "",
      "default-typing": false
    },
    on: {
      change: _vm.handleInput
    },
    model: {
      value: _vm.formDataToBeWatched.total_encours_cct,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "total_encours_cct", $$v);
      },
      expression: "\n                                                formDataToBeWatched.total_encours_cct\n                                            "
    }
  })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
    attrs: {
      readonly: "",
      "default-typing": false
    },
    on: {
      change: _vm.handleInput
    },
    model: {
      value: _vm.formDataToBeWatched.total_garantie_eligible_cct,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "total_garantie_eligible_cct", $$v);
      },
      expression: "\n                                                formDataToBeWatched.total_garantie_eligible_cct\n                                            "
    }
  })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
    attrs: {
      readonly: "",
      "default-typing": false
    },
    on: {
      change: _vm.handleInput
    },
    model: {
      value: _vm.formDataToBeWatched.total_garantie_eligible_saisie_cct,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "total_garantie_eligible_saisie_cct", $$v);
      },
      expression: "\n                                                formDataToBeWatched.total_garantie_eligible_saisie_cct\n                                            "
    }
  })], 1), _vm._v(" "), _c("td"), _vm._v(" "), _c("td", [_c("input-group", {
    staticStyle: {
      "min-width": "170px"
    },
    scopedSlots: _vm._u([{
      key: "input",
      fn: function fn() {
        return [_c("currency-input", {
          staticClass: "form-control text-end",
          staticStyle: {
            "border-radius": "unset",
            "padding-right": "7px",
            "border-end-start-radius": "5px",
            "border-start-start-radius": "5px",
            "border-right": "none",
            width: "100px"
          },
          attrs: {
            "default-typing": false,
            disabled: "",
            id: "taux_couverture_cct",
            "float": ""
          },
          on: {
            change: _vm.taux_couverture_cct
          },
          model: {
            value: _vm.formDataToBeWatched.total_taux_couverture_cct,
            callback: function callback($$v) {
              _vm.$set(_vm.formDataToBeWatched, "total_taux_couverture_cct", $$v);
            },
            expression: "formDataToBeWatched.total_taux_couverture_cct"
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
    }], null, false, 1104074940)
  })], 1), _vm._v(" "), _c("td")])], 2)])])])]) : _c("div", {
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
      id: "cct"
    }
  }, [_vm._v("\n                            CCT\n                            "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)])]), _vm._v(" "), _c("br"), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "col-md-12 mb-4"
  }, [_vm._m(1), _vm._v(" "), _c("vue-editor", {
    attrs: {
      maximum: 1000,
      id: "type_res_dispo"
    },
    on: {
      "update-value": function updateValue($event) {
        _vm.formDataToBeWatched[$event[0]] = $event[1];
      }
    },
    model: {
      value: _vm.formDataToBeWatched.comment_cct,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "comment_cct", $$v);
      },
      expression: "formDataToBeWatched.comment_cct"
    }
  })], 1)]), _vm._v(" "), _vm.seen5 ? _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen5 = !_vm.seen5;
      }
    }
  }, [_c("h6", {
    "class": " subdiv" + this.tb_name,
    attrs: {
      id: "cmt"
    }
  }, [_vm._v("\n                            CMT\n                            "), _c("chevron-up-icon", {
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
    staticClass: "table table-bordered mb-1"
  }, [_vm._m(2), _vm._v(" "), _c("tbody", [_vm._l(_vm.cmt, function (element, index) {
    return _c("tr", {
      key: index
    }, [_c("td", [_c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: element.facilite,
        expression: "element.facilite"
      }],
      staticClass: "form-control",
      staticStyle: {
        "min-width": "210px"
      },
      attrs: {
        id: "facilite" + index,
        rows: "1"
      },
      domProps: {
        value: element.facilite
      },
      on: {
        change: _vm.taux_couverture_cmt,
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(element, "facilite", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: element.ligne,
        expression: "element.ligne"
      }],
      staticClass: "form-select",
      "class": {
        equipe: (element === null || element === void 0 ? void 0 : element.comeFrom) == "tb_8"
      },
      staticStyle: {
        "min-width": "250px"
      },
      attrs: {
        title: element.ligne
      },
      on: {
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(element, "ligne", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, _vm.taux_couverture_cmt]
      }
    }, [_c("option", {
      domProps: {
        value: ""
      }
    }), _vm._v(" "), _vm._l(_vm.tous_les_lignes_filtres, function (line, indexL) {
      return _c("option", {
        key: indexL + "4z_2",
        domProps: {
          value: line.libelle
        }
      }, [_vm._v(_vm._s(line.libelle))]);
    }), _vm._v(" "), (element === null || element === void 0 ? void 0 : element.ligne_mixte) != "" ? _c("option", {
      domProps: {
        value: element.ligne
      }
    }, [_vm._v(_vm._s(element.ligne))]) : _vm._e()], 2)]), _vm._v(" "), _c("td", [_c("currency-input", {
      staticClass: "form-control",
      "class": {
        equipe: (element === null || element === void 0 ? void 0 : element.comeFrom) == "tb_8"
      },
      staticStyle: {
        "min-width": "150px"
      },
      attrs: {
        "default-typing": false,
        type: "text",
        id: "exposition_global" + index
      },
      on: {
        change: _vm.taux_couverture_cmt
      },
      model: {
        value: element.exposition_global,
        callback: function callback($$v) {
          _vm.$set(element, "exposition_global", $$v);
        },
        expression: "element.exposition_global\n                                                    "
      }
    })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
      staticClass: "form-control",
      "class": {
        equipe: (element === null || element === void 0 ? void 0 : element.comeFrom) == "tb_8"
      },
      staticStyle: {
        "min-width": "150px"
      },
      attrs: {
        "default-typing": false,
        type: "text",
        id: "encours" + index
      },
      on: {
        change: _vm.taux_couverture_cmt
      },
      model: {
        value: element.encours,
        callback: function callback($$v) {
          _vm.$set(element, "encours", $$v);
        },
        expression: "element.encours\n                                                    "
      }
    })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
      staticClass: "form-control",
      "class": {
        equipe: (element === null || element === void 0 ? void 0 : element.comeFrom) == "tb_8"
      },
      staticStyle: {
        "min-width": "150px"
      },
      attrs: {
        "default-typing": false,
        type: "text",
        id: "garantie_eligible" + index
      },
      on: {
        change: _vm.taux_couverture_cmt
      },
      model: {
        value: element.garantie_eligible,
        callback: function callback($$v) {
          _vm.$set(element, "garantie_eligible", $$v);
        },
        expression: "element.garantie_eligible\n                                                    "
      }
    })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
      staticClass: "form-control",
      "class": {
        equipe: (element === null || element === void 0 ? void 0 : element.comeFrom) == "tb_8"
      },
      staticStyle: {
        "min-width": "150px"
      },
      attrs: {
        "default-typing": false,
        type: "text",
        id: "garantie_eligible_saisie" + index
      },
      on: {
        change: _vm.taux_couverture_cmt
      },
      model: {
        value: element.garantie_eligible_saisie,
        callback: function callback($$v) {
          _vm.$set(element, "garantie_eligible_saisie", $$v);
        },
        expression: "element.garantie_eligible_saisie\n                                                    "
      }
    })], 1), _vm._v(" "), _c("td", [_c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: element.comment_garentie_elligible,
        expression: "element.comment_garentie_elligible"
      }],
      staticClass: "form-control",
      "class": {
        equipe: (element === null || element === void 0 ? void 0 : element.comeFrom) == "tb_8"
      },
      staticStyle: {
        "min-width": "210px"
      },
      attrs: {
        id: "comment_garentie_elligible" + index,
        rows: "1"
      },
      domProps: {
        value: element.comment_garentie_elligible
      },
      on: {
        change: _vm.taux_couverture_cmt,
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(element, "comment_garentie_elligible", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("input-group", {
      staticStyle: {
        "min-width": "170px"
      },
      scopedSlots: _vm._u([{
        key: "input",
        fn: function fn() {
          return [_c("currency-input", {
            staticClass: "form-control text-end",
            staticStyle: {
              "border-radius": "unset",
              "padding-right": "7px",
              "border-end-start-radius": "5px",
              "border-start-start-radius": "5px",
              "border-right": "none",
              width: "100px"
            },
            attrs: {
              "default-typing": false,
              disabled: "",
              id: "taux_couverture" + index,
              "float": ""
            },
            on: {
              change: _vm.taux_couverture_cmt
            },
            model: {
              value: element.taux_couverture,
              callback: function callback($$v) {
                _vm.$set(element, "taux_couverture", $$v);
              },
              expression: "element.taux_couverture"
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
    })], 1), _vm._v(" "), index == 0 ? _c("td", [_c("button", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: index == 0,
        expression: "index == 0"
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
          return _vm.addMoreCmt();
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
        value: index > 0,
        expression: "index > 0"
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
          return _vm.removeCmt(index);
        }
      }
    }, [_c("trash-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1)])]);
  }), _vm._v(" "), _c("tr", [_c("td", [_vm._v("\n                                            Total\n                                        ")]), _vm._v(" "), _c("td"), _vm._v(" "), _c("td", [_c("currency-input", {
    attrs: {
      readonly: "",
      "default-typing": false
    },
    on: {
      change: _vm.handleInput
    },
    model: {
      value: _vm.formDataToBeWatched.total_exposition_global_cmt,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "total_exposition_global_cmt", $$v);
      },
      expression: "\n                                                formDataToBeWatched.total_exposition_global_cmt\n                                            "
    }
  })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
    attrs: {
      readonly: "",
      "default-typing": false
    },
    on: {
      change: _vm.handleInput
    },
    model: {
      value: _vm.formDataToBeWatched.total_encours_cmt,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "total_encours_cmt", $$v);
      },
      expression: "\n                                                formDataToBeWatched.total_encours_cmt\n                                            "
    }
  })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
    attrs: {
      readonly: "",
      "default-typing": false
    },
    on: {
      change: _vm.handleInput
    },
    model: {
      value: _vm.formDataToBeWatched.total_garantie_eligible_cmt,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "total_garantie_eligible_cmt", $$v);
      },
      expression: "\n                                                formDataToBeWatched.total_garantie_eligible_cmt\n                                            "
    }
  })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
    attrs: {
      readonly: "",
      "default-typing": false
    },
    on: {
      change: _vm.handleInput
    },
    model: {
      value: _vm.formDataToBeWatched.total_garantie_eligible_saisie_cmt,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "total_garantie_eligible_saisie_cmt", $$v);
      },
      expression: "\n                                                formDataToBeWatched.total_garantie_eligible_saisie_cmt\n                                            "
    }
  })], 1), _vm._v(" "), _c("td"), _vm._v(" "), _c("td", [_c("input-group", {
    staticStyle: {
      "min-width": "170px"
    },
    scopedSlots: _vm._u([{
      key: "input",
      fn: function fn() {
        return [_c("currency-input", {
          staticClass: "form-control text-end",
          staticStyle: {
            "border-radius": "unset",
            "padding-right": "7px",
            "border-end-start-radius": "5px",
            "border-start-start-radius": "5px",
            "border-right": "none",
            width: "100px"
          },
          attrs: {
            "default-typing": false,
            disabled: "",
            id: "taux_couverture_cmt",
            "float": ""
          },
          on: {
            change: _vm.taux_couverture_cmt
          },
          model: {
            value: _vm.formDataToBeWatched.total_taux_couverture_cmt,
            callback: function callback($$v) {
              _vm.$set(_vm.formDataToBeWatched, "total_taux_couverture_cmt", $$v);
            },
            expression: "formDataToBeWatched.total_taux_couverture_cmt"
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
    }], null, false, 2753739314)
  })], 1), _vm._v(" "), _c("td")])], 2)])])])]) : _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen5 = !_vm.seen5;
      }
    }
  }, [_c("h6", {
    attrs: {
      id: "cmt"
    }
  }, [_vm._v("\n                            CMT\n                            "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)])]), _c("br"), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "col-md-12 mb-4"
  }, [_vm._m(3), _vm._v(" "), _c("vue-editor", {
    attrs: {
      maximum: 1000,
      id: "type_res_dispo"
    },
    on: {
      "update-value": function updateValue($event) {
        _vm.formDataToBeWatched[$event[0]] = $event[1];
      }
    },
    model: {
      value: _vm.formDataToBeWatched.comment_cmt,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "comment_cmt", $$v);
      },
      expression: "formDataToBeWatched.comment_cmt"
    }
  })], 1)]), _vm._v(" "), _vm.seen7 ? _c("div", {
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
      id: "cmt"
    }
  }, [_vm._v("\n                            CLT\n                            "), _c("chevron-up-icon", {
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
    staticClass: "table table-bordered mb-1"
  }, [_vm._m(4), _vm._v(" "), _c("tbody", [_vm._l(_vm.clt, function (element, index) {
    return _c("tr", {
      key: index
    }, [_c("td", [_c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: element.facilite,
        expression: "element.facilite"
      }],
      staticClass: "form-control",
      staticStyle: {
        "min-width": "210px"
      },
      attrs: {
        id: "facilite" + index,
        rows: "1"
      },
      domProps: {
        value: element.facilite
      },
      on: {
        change: _vm.taux_couverture_clt,
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(element, "facilite", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: element.ligne,
        expression: "element.ligne"
      }],
      staticClass: "form-select",
      "class": {
        equipe: (element === null || element === void 0 ? void 0 : element.comeFrom) == "tb_8"
      },
      staticStyle: {
        "min-width": "250px"
      },
      attrs: {
        title: element.ligne
      },
      on: {
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(element, "ligne", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, _vm.taux_couverture_clt]
      }
    }, [_c("option", {
      domProps: {
        value: ""
      }
    }), _vm._v(" "), _vm._l(_vm.tous_les_lignes_filtres, function (line, indexL) {
      return _c("option", {
        key: indexL + "4z_3",
        domProps: {
          value: line.libelle
        }
      }, [_vm._v(_vm._s(line.libelle))]);
    }), _vm._v(" "), (element === null || element === void 0 ? void 0 : element.ligne_mixte) != "" ? _c("option", {
      domProps: {
        value: element.ligne
      }
    }, [_vm._v(_vm._s(element.ligne))]) : _vm._e()], 2)]), _vm._v(" "), _c("td", [_c("currency-input", {
      staticClass: "form-control",
      "class": {
        equipe: (element === null || element === void 0 ? void 0 : element.comeFrom) == "tb_8"
      },
      staticStyle: {
        "min-width": "150px"
      },
      attrs: {
        "default-typing": false,
        type: "text",
        id: "exposition_global" + index
      },
      on: {
        change: _vm.taux_couverture_clt
      },
      model: {
        value: element.exposition_global,
        callback: function callback($$v) {
          _vm.$set(element, "exposition_global", $$v);
        },
        expression: "element.exposition_global\n                                                    "
      }
    })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
      staticClass: "form-control",
      "class": {
        equipe: (element === null || element === void 0 ? void 0 : element.comeFrom) == "tb_8"
      },
      staticStyle: {
        "min-width": "150px"
      },
      attrs: {
        "default-typing": false,
        type: "text",
        id: "encours" + index
      },
      on: {
        change: _vm.taux_couverture_clt
      },
      model: {
        value: element.encours,
        callback: function callback($$v) {
          _vm.$set(element, "encours", $$v);
        },
        expression: "element.encours\n                                                    "
      }
    })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
      staticClass: "form-control",
      "class": {
        equipe: (element === null || element === void 0 ? void 0 : element.comeFrom) == "tb_8"
      },
      staticStyle: {
        "min-width": "150px"
      },
      attrs: {
        "default-typing": false,
        type: "text",
        id: "garantie_eligible" + index
      },
      on: {
        change: _vm.taux_couverture_clt
      },
      model: {
        value: element.garantie_eligible,
        callback: function callback($$v) {
          _vm.$set(element, "garantie_eligible", $$v);
        },
        expression: "element.garantie_eligible\n                                                    "
      }
    })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
      staticClass: "form-control",
      "class": {
        equipe: (element === null || element === void 0 ? void 0 : element.comeFrom) == "tb_8"
      },
      staticStyle: {
        "min-width": "150px"
      },
      attrs: {
        "default-typing": false,
        type: "text",
        id: "garantie_eligible_saisie" + index
      },
      on: {
        change: _vm.taux_couverture_clt
      },
      model: {
        value: element.garantie_eligible_saisie,
        callback: function callback($$v) {
          _vm.$set(element, "garantie_eligible_saisie", $$v);
        },
        expression: "element.garantie_eligible_saisie\n                                                    "
      }
    })], 1), _vm._v(" "), _c("td", [_c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: element.comment_garentie_elligible,
        expression: "element.comment_garentie_elligible"
      }],
      staticClass: "form-control",
      "class": {
        equipe: (element === null || element === void 0 ? void 0 : element.comeFrom) == "tb_8"
      },
      staticStyle: {
        "min-width": "210px"
      },
      attrs: {
        id: "comment_garentie_elligible" + index,
        rows: "1"
      },
      domProps: {
        value: element.comment_garentie_elligible
      },
      on: {
        change: _vm.taux_couverture_clt,
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(element, "comment_garentie_elligible", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("input-group", {
      staticStyle: {
        "min-width": "170px"
      },
      scopedSlots: _vm._u([{
        key: "input",
        fn: function fn() {
          return [_c("currency-input", {
            staticClass: "form-control text-end",
            staticStyle: {
              "border-radius": "unset",
              "padding-right": "7px",
              "border-end-start-radius": "5px",
              "border-start-start-radius": "5px",
              "border-right": "none",
              width: "100px"
            },
            attrs: {
              "default-typing": false,
              disabled: "",
              id: "taux_couverture" + index,
              "float": ""
            },
            on: {
              change: _vm.taux_couverture_clt
            },
            model: {
              value: element.taux_couverture,
              callback: function callback($$v) {
                _vm.$set(element, "taux_couverture", $$v);
              },
              expression: "element.taux_couverture"
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
    })], 1), _vm._v(" "), index == 0 ? _c("td", [_c("button", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: index == 0,
        expression: "index == 0"
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
          return _vm.addMoreClt("cct");
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
        value: index > 0,
        expression: "index > 0"
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
          return _vm.removeClt(index);
        }
      }
    }, [_c("trash-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1)])]);
  }), _vm._v(" "), _c("tr", [_c("td", [_vm._v("\n                                            Total\n                                        ")]), _vm._v(" "), _c("td"), _vm._v(" "), _c("td", [_c("currency-input", {
    attrs: {
      readonly: "",
      "default-typing": false
    },
    on: {
      change: _vm.handleInput
    },
    model: {
      value: _vm.formDataToBeWatched.total_exposition_global_clt,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "total_exposition_global_clt", $$v);
      },
      expression: "\n                                                formDataToBeWatched.total_exposition_global_clt\n                                            "
    }
  })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
    attrs: {
      readonly: "",
      "default-typing": false
    },
    on: {
      change: _vm.handleInput
    },
    model: {
      value: _vm.formDataToBeWatched.total_encours_clt,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "total_encours_clt", $$v);
      },
      expression: "\n                                                formDataToBeWatched.total_encours_clt\n                                            "
    }
  })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
    attrs: {
      readonly: "",
      "default-typing": false
    },
    on: {
      change: _vm.handleInput
    },
    model: {
      value: _vm.formDataToBeWatched.total_garantie_eligible_clt,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "total_garantie_eligible_clt", $$v);
      },
      expression: "\n                                                formDataToBeWatched.total_garantie_eligible_clt\n                                            "
    }
  })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
    attrs: {
      readonly: "",
      "default-typing": false
    },
    on: {
      change: _vm.handleInput
    },
    model: {
      value: _vm.formDataToBeWatched.total_garantie_eligible_sasie_clt,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "total_garantie_eligible_sasie_clt", $$v);
      },
      expression: "\n                                                formDataToBeWatched.total_garantie_eligible_sasie_clt\n                                            "
    }
  })], 1), _vm._v(" "), _c("td"), _vm._v(" "), _c("td", [_c("input-group", {
    staticStyle: {
      "min-width": "170px"
    },
    scopedSlots: _vm._u([{
      key: "input",
      fn: function fn() {
        return [_c("currency-input", {
          staticClass: "form-control text-end",
          staticStyle: {
            "border-radius": "unset",
            "padding-right": "7px",
            "border-end-start-radius": "5px",
            "border-start-start-radius": "5px",
            "border-right": "none",
            width: "100px"
          },
          attrs: {
            "default-typing": false,
            disabled: "",
            id: "taux_couverture_clt",
            "float": ""
          },
          on: {
            change: _vm.taux_couverture_clt
          },
          model: {
            value: _vm.formDataToBeWatched.total_taux_couverture_clt,
            callback: function callback($$v) {
              _vm.$set(_vm.formDataToBeWatched, "total_taux_couverture_clt", $$v);
            },
            expression: "formDataToBeWatched.total_taux_couverture_clt"
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
    }], null, false, 907259891)
  })], 1), _vm._v(" "), _c("td")])], 2)])])])]) : _c("div", {
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
      id: "clt"
    }
  }, [_vm._v("\n                            CLT\n                            "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)])]), _c("br"), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "col-md-12 mb-4"
  }, [_vm._m(5), _vm._v(" "), _c("vue-editor", {
    attrs: {
      maximum: 1000,
      id: "type_res_dispo"
    },
    on: {
      "update-value": function updateValue($event) {
        _vm.formDataToBeWatched[$event[0]] = $event[1];
      }
    },
    model: {
      value: _vm.formDataToBeWatched.comment_clt,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "comment_clt", $$v);
      },
      expression: "formDataToBeWatched.comment_clt"
    }
  })], 1)]), _vm._v(" "), _c("br"), _vm._v(" "), _vm.seen2 ? _c("div", {
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
      id: "cmt"
    }
  }, [_vm._v("\n                            Syntèse (CCT, CMT, CLT)\n                            "), _c("chevron-up-icon", {
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
    staticClass: "table table-bordered mb-1"
  }, [_vm._m(6), _vm._v(" "), _c("tbody", [_vm._l(_vm.syntese_credit, function (element, index) {
    return _c("tr", {
      key: index
    }, [_c("td", [_c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: element.facilite,
        expression: "element.facilite"
      }],
      staticClass: "form-control",
      "class": {
        equipe: (element === null || element === void 0 ? void 0 : element.comeFrom) == "tb_8"
      },
      staticStyle: {
        "min-width": "210px"
      },
      attrs: {
        id: "facilite" + index,
        rows: "1",
        disabled: ""
      },
      domProps: {
        value: element.facilite
      },
      on: {
        change: _vm.handleInput,
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(element, "facilite", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: element.ligne,
        expression: "element.ligne"
      }],
      staticClass: "form-select",
      "class": {
        equipe: (element === null || element === void 0 ? void 0 : element.comeFrom) == "tb_8"
      },
      staticStyle: {
        "min-width": "250px"
      },
      attrs: {
        title: element.ligne,
        disabled: ""
      },
      on: {
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(element, "ligne", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, _vm.handleInput]
      }
    }, [_c("option", {
      domProps: {
        value: ""
      }
    }), _vm._v(" "), _vm._l(_vm.tous_les_lignes_filtres, function (line, indexL) {
      return _c("option", {
        key: indexL + "4z_3",
        domProps: {
          value: line.libelle
        }
      }, [_vm._v(_vm._s(line.libelle))]);
    }), _vm._v(" "), (element === null || element === void 0 ? void 0 : element.ligne_mixte) != "" ? _c("option", {
      domProps: {
        value: element.ligne
      }
    }, [_vm._v(_vm._s(element.ligne))]) : _vm._e()], 2)]), _vm._v(" "), _c("td", [_c("currency-input", {
      staticClass: "form-control",
      "class": {
        equipe: (element === null || element === void 0 ? void 0 : element.comeFrom) == "tb_8"
      },
      staticStyle: {
        "min-width": "150px"
      },
      attrs: {
        "default-typing": false,
        type: "text",
        disabled: "",
        id: "exposition_global" + index
      },
      on: {
        change: _vm.handleInput
      },
      model: {
        value: element.exposition_global,
        callback: function callback($$v) {
          _vm.$set(element, "exposition_global", $$v);
        },
        expression: "element.exposition_global\n                                                    "
      }
    })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
      staticClass: "form-control",
      "class": {
        equipe: (element === null || element === void 0 ? void 0 : element.comeFrom) == "tb_8"
      },
      staticStyle: {
        "min-width": "150px"
      },
      attrs: {
        "default-typing": false,
        type: "text",
        disabled: "",
        id: "encours" + index
      },
      on: {
        change: _vm.handleInput
      },
      model: {
        value: element.encours,
        callback: function callback($$v) {
          _vm.$set(element, "encours", $$v);
        },
        expression: "element.encours\n                                                    "
      }
    })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
      staticClass: "form-control",
      "class": {
        equipe: (element === null || element === void 0 ? void 0 : element.comeFrom) == "tb_8"
      },
      staticStyle: {
        "min-width": "150px"
      },
      attrs: {
        "default-typing": false,
        type: "text",
        disabled: "",
        id: "garantie_eligible" + index
      },
      on: {
        change: _vm.handleInput
      },
      model: {
        value: element.garantie_eligible,
        callback: function callback($$v) {
          _vm.$set(element, "garantie_eligible", $$v);
        },
        expression: "element.garantie_eligible\n                                                    "
      }
    })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
      staticClass: "form-control",
      "class": {
        equipe: (element === null || element === void 0 ? void 0 : element.comeFrom) == "tb_8"
      },
      staticStyle: {
        "min-width": "150px"
      },
      attrs: {
        "default-typing": false,
        type: "text",
        disabled: "",
        id: "garantie_eligible_saisie" + index
      },
      on: {
        change: _vm.handleInput
      },
      model: {
        value: element.garantie_eligible_saisie,
        callback: function callback($$v) {
          _vm.$set(element, "garantie_eligible_saisie", $$v);
        },
        expression: "element.garantie_eligible_saisie\n                                                    "
      }
    })], 1), _vm._v(" "), _c("td", [_c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: element.comment_garentie_elligible,
        expression: "element.comment_garentie_elligible"
      }],
      staticClass: "form-control",
      "class": {
        equipe: (element === null || element === void 0 ? void 0 : element.comeFrom) == "tb_8"
      },
      staticStyle: {
        "min-width": "210px"
      },
      attrs: {
        id: "comment_garentie_elligible" + index,
        rows: "1",
        disabled: ""
      },
      domProps: {
        value: element.comment_garentie_elligible
      },
      on: {
        change: _vm.handleInput,
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(element, "comment_garentie_elligible", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("input-group", {
      staticStyle: {
        "min-width": "170px"
      },
      scopedSlots: _vm._u([{
        key: "input",
        fn: function fn() {
          return [_c("currency-input", {
            staticClass: "form-control text-end",
            staticStyle: {
              "border-radius": "unset",
              "padding-right": "7px",
              "border-end-start-radius": "5px",
              "border-start-start-radius": "5px",
              "border-right": "none",
              width: "100px"
            },
            attrs: {
              "default-typing": false,
              disabled: "",
              id: "taux_couverture" + index,
              "float": ""
            },
            on: {
              change: _vm.handleInput
            },
            model: {
              value: element.taux_couverture,
              callback: function callback($$v) {
                _vm.$set(element, "taux_couverture", $$v);
              },
              expression: "element.taux_couverture"
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
    })], 1)]);
  }), _vm._v(" "), _c("tr", [_c("td", [_vm._v("\n                                            Total\n                                        ")]), _vm._v(" "), _c("td"), _vm._v(" "), _c("td", [_c("currency-input", {
    attrs: {
      readonly: "",
      "default-typing": false
    },
    on: {
      change: _vm.handleInput
    },
    model: {
      value: _vm.formDataToBeWatched.total_general_exposition_global_clt,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "total_general_exposition_global_clt", $$v);
      },
      expression: "\n                                                formDataToBeWatched.total_general_exposition_global_clt\n                                            "
    }
  })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
    attrs: {
      readonly: "",
      "default-typing": false
    },
    on: {
      change: _vm.handleInput
    },
    model: {
      value: _vm.formDataToBeWatched.total_general_encours_clt,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "total_general_encours_clt", $$v);
      },
      expression: "\n                                                formDataToBeWatched.total_general_encours_clt\n                                            "
    }
  })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
    attrs: {
      readonly: "",
      "default-typing": false
    },
    on: {
      change: _vm.handleInput
    },
    model: {
      value: _vm.formDataToBeWatched.total_general_garantie_eligible_clt,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "total_general_garantie_eligible_clt", $$v);
      },
      expression: "\n                                                formDataToBeWatched.total_general_garantie_eligible_clt\n                                            "
    }
  })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
    attrs: {
      readonly: "",
      "default-typing": false
    },
    on: {
      change: _vm.handleInput
    },
    model: {
      value: _vm.formDataToBeWatched.total_general_garantie_eligible_saisie_clt,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "total_general_garantie_eligible_saisie_clt", $$v);
      },
      expression: "\n                                                formDataToBeWatched.total_general_garantie_eligible_saisie_clt\n                                            "
    }
  })], 1), _vm._v(" "), _c("td"), _vm._v(" "), _c("td", [_c("input-group", {
    staticStyle: {
      "min-width": "170px"
    },
    scopedSlots: _vm._u([{
      key: "input",
      fn: function fn() {
        return [_c("currency-input", {
          staticClass: "form-control text-end",
          staticStyle: {
            "border-radius": "unset",
            "padding-right": "7px",
            "border-end-start-radius": "5px",
            "border-start-start-radius": "5px",
            "border-right": "none",
            width: "100px"
          },
          attrs: {
            "default-typing": false,
            disabled: "",
            id: "taux_couverture_clt",
            "float": ""
          },
          on: {
            change: _vm.taux_couverture_clt
          },
          model: {
            value: _vm.formDataToBeWatched.total_general_taux_couverture_clt,
            callback: function callback($$v) {
              _vm.$set(_vm.formDataToBeWatched, "total_general_taux_couverture_clt", $$v);
            },
            expression: "formDataToBeWatched.total_general_taux_couverture_clt"
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
    }], null, false, 2976298490)
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
      id: "clt"
    }
  }, [_vm._v("\n                            Syntèse (CCT, CMT, CLT)\n                            "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)])]), _c("br"), _vm._v(" "), _c("div", {
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
  }, [_vm._v("\n                    Fermer le tableau\n                ")])])]) : _c("div", {
    staticClass: "card card-width-height"
  }, [_c("br"), _vm._v(" "), _c("div", {
    staticClass: "card-header hdc pb-0 pt-2"
  }, [_c("h3", {
    staticClass: "head",
    attrs: {
      id: "ca3-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Analyse de la couverture en garanties\n                        ")]), _vm._v(" "), _c("div", {
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
  })], 1)])])])])], 1), _vm._v(" "), _c("div", [_c("div", {
    staticClass: "modal fade modal-lg",
    attrs: {
      id: "instruction2",
      tabindex: "-1",
      "aria-labelledby": "instruction2",
      "aria-hidden": "true"
    }
  }, [_c("div", {
    staticClass: "modal-dialog",
    staticStyle: {
      width: "650px"
    }
  }, [_c("div", {
    staticClass: "modal-content"
  }, [_c("div", {
    staticClass: "modal-header"
  }, [_c("h5", {
    staticClass: "modal-title",
    attrs: {
      id: "instruction2"
    }
  }, [_vm._v("\n                            Instruction - " + _vm._s(_vm.tb_display_name) + " : Analyse de la couverture en garanties\n                        ")]), _vm._v(" "), _c("button", {
    staticClass: "btn-close",
    attrs: {
      type: "button",
      "data-bs-dismiss": "modal",
      "aria-label": "Close"
    }
  })]), _vm._v(" "), _vm._m(7), _vm._v(" "), _vm._m(8)])])])]), _vm._v(" "), _c("note-modal", {
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
  return _c("thead", [_c("tr", [_c("td", {
    staticClass: "vertical-middle"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Facilité")])]), _vm._v(" "), _c("td", {
    staticClass: "text-center vertical-middle"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Ligne initial")])]), _vm._v(" "), _c("td", {
    staticClass: "text-center vertical-middle"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Montant "), _c("br"), _vm._v(" sollicité (b)")])]), _vm._v(" "), _c("td", {
    staticClass: "text-center vertical-middle"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Encours")])]), _vm._v(" "), _c("td", {
    staticClass: "text-center vertical-middle"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Garantie éligible "), _c("br"), _vm._v(" sollicitée (c)")])]), _vm._v(" "), _c("td", {
    staticClass: "text-center vertical-middle"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Garanties éligibles "), _c("br"), _vm._v(" saisies (d)")])]), _vm._v(" "), _c("td", {
    staticClass: "text-center vertical-middle"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Commentaires sur "), _c("br"), _vm._v(" les garanties éligibles")])]), _vm._v(" "), _c("td", {
    staticClass: "text-center vertical-middle"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Taux de couverture "), _c("br"), _vm._v(" du montant sollicité (c/b)")])]), _vm._v(" "), _c("td")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", [_c("b", [_vm._v("Commentaire")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("td", {
    staticClass: "vertical-middle"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Facilité")])]), _vm._v(" "), _c("td", {
    staticClass: "text-center vertical-middle"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Ligne initial")])]), _vm._v(" "), _c("td", {
    staticClass: "text-center vertical-middle"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Montant "), _c("br"), _vm._v(" sollicité (b)")])]), _vm._v(" "), _c("td", {
    staticClass: "text-center vertical-middle"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Encours")])]), _vm._v(" "), _c("td", {
    staticClass: "text-center vertical-middle"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Garantie éligible "), _c("br"), _vm._v(" sollicitée (c)")])]), _vm._v(" "), _c("td", {
    staticClass: "text-center vertical-middle"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Garanties éligibles "), _c("br"), _vm._v(" saisies (d)")])]), _vm._v(" "), _c("td", {
    staticClass: "text-center vertical-middle"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Commentaires sur "), _c("br"), _vm._v(" les garanties éligibles")])]), _vm._v(" "), _c("td", {
    staticClass: "text-center vertical-middle"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Taux de couverture "), _c("br"), _vm._v(" du montant sollicité (c/b)")])]), _vm._v(" "), _c("td")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", [_c("b", [_vm._v("Commentaire")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("td", {
    staticClass: "vertical-middle"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Facilité")])]), _vm._v(" "), _c("td", {
    staticClass: "text-center vertical-middle"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Ligne initial")])]), _vm._v(" "), _c("td", {
    staticClass: "text-center vertical-middle"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Montant "), _c("br"), _vm._v(" sollicité (b)")])]), _vm._v(" "), _c("td", {
    staticClass: "text-center vertical-middle"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Encours")])]), _vm._v(" "), _c("td", {
    staticClass: "text-center vertical-middle"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Garantie éligible "), _c("br"), _vm._v(" sollicitée (c)")])]), _vm._v(" "), _c("td", {
    staticClass: "text-center vertical-middle"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Garanties éligibles "), _c("br"), _vm._v(" saisies (d)")])]), _vm._v(" "), _c("td", {
    staticClass: "text-center vertical-middle"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Commentaires sur "), _c("br"), _vm._v(" les garanties éligibles")])]), _vm._v(" "), _c("td", {
    staticClass: "text-center vertical-middle"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Taux de couverture "), _c("br"), _vm._v(" du montant sollicité (c/b)")])]), _vm._v(" "), _c("td")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", [_c("b", [_vm._v("Commentaire")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("td", {
    staticClass: "vertical-middle"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Facilité")])]), _vm._v(" "), _c("td", {
    staticClass: "text-center vertical-middle"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Ligne initial")])]), _vm._v(" "), _c("td", {
    staticClass: "text-center vertical-middle"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Montant "), _c("br"), _vm._v(" sollicité (b)")])]), _vm._v(" "), _c("td", {
    staticClass: "text-center vertical-middle"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Encours")])]), _vm._v(" "), _c("td", {
    staticClass: "text-center vertical-middle"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Garantie éligible "), _c("br"), _vm._v(" sollicitée (c)")])]), _vm._v(" "), _c("td", {
    staticClass: "text-center vertical-middle"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Garanties éligibles "), _c("br"), _vm._v(" saisies (d)")])]), _vm._v(" "), _c("td", {
    staticClass: "text-center vertical-middle"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Commentaires sur "), _c("br"), _vm._v(" les garanties éligibles")])]), _vm._v(" "), _c("td", {
    staticClass: "text-center vertical-middle"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Taux de couverture "), _c("br"), _vm._v(" du montant sollicité (c/b)")])]), _vm._v(" "), _c("td")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "modal-body"
  }, [_c("img", {
    attrs: {
      src: "/images/capture_afg/signaletique.png",
      width: "100%; height:100%;"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "modal-footer"
  }, [_c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button",
      "data-bs-dismiss": "modal"
    }
  }, [_vm._v("Fermer")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dgr/DGR-FAR3.vue?vue&type=style&index=0&id=d1dd1f36&lang=css&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dgr/DGR-FAR3.vue?vue&type=style&index=0&id=d1dd1f36&lang=css&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\ninput[data-v-d1dd1f36] {\r\n    /*border: 1px solid red;*/\n}\n*[data-v-d1dd1f36] {\r\n    font-family: \"Google sans\";\n}\nlabel[data-v-d1dd1f36] {\r\n    height: 10px;\r\n    font-size: 13px;\n}\ninput[data-v-d1dd1f36],\r\nselect[data-v-d1dd1f36] {\r\n    height: 35px;\r\n    border-color: #34495e;\r\n    color: #57606f;\r\n    font-size: 13px;\r\n    font-weight: bold;\n}\n.card-width-height[data-v-d1dd1f36] {\r\n    width: 100%;\r\n    height: 100%;\n}\n.head[data-v-d1dd1f36] {\r\n    color: #f1f2f6;\r\n    font-size: 22px;\n}\n.hdc[data-v-d1dd1f36] {\r\n    background-color: #57606f;\n}\r\n\r\n/*  List element styles */\n#menu ul[data-v-d1dd1f36],\r\n#menu li[data-v-d1dd1f36] {\r\n    list-style: none;\r\n    padding: 0;\r\n    margin: 0;\r\n    display: inline-block;\n}\n#menu li[data-v-d1dd1f36] {\r\n    padding: 5px 0px;\n}\r\n\r\n/* Main menu links */\n#menu a[data-v-d1dd1f36]:link,\r\n#menu a[data-v-d1dd1f36]:visited,\r\n#menu a[data-v-d1dd1f36]:active {\r\n    text-decoration: none;\r\n    color: var(--link2-color);\r\n    padding: 5px 7px;\r\n    font-weight: bold;\r\n    position: relative;\r\n    z-index: 2;\n}\r\n\r\n/* .c_tBgColor{\r\n    background: #00ffff21;\r\n    color: #000;\r\n } */\n#menu a[data-v-d1dd1f36]:hover,\r\n#menu a[data-v-d1dd1f36]:focus {\r\n    background-color: var(--link-color);\r\n    color: var(--link2-color);\r\n    text-decoration: underline;\n}\r\n\r\n/* The submenu links container*/\n.subdrop[data-v-d1dd1f36] {\r\n    background: var(--bg-color);\r\n    height: 0;\r\n    border-top: 0;\r\n    min-width: 100%;\r\n    left: 0;\r\n    margin: 0;\r\n    position: absolute;\r\n    text-align: left;\r\n    top: 100%;\r\n    visibility: hidden;\r\n    height: 1px;\r\n    overflow: hidden;\r\n    z-index: 10;\n}\r\n\r\n/* Dropdown Parent Link Style */\n.droplink[data-v-d1dd1f36] {\r\n    display: inline-block;\r\n    min-width: -moz-fit-content;\r\n    min-width: fit-content;\r\n    position: relative;\n}\ntd input[data-v-d1dd1f36],\r\nselect[data-v-d1dd1f36] {\r\n    /* height: 35px; */\r\n    border-color: #34495e;\r\n    color: #57606f;\r\n    font-size: 13px;\r\n    font-weight: bold;\n}\r\n\r\n/* List elements within the dropdown */\n.subdrop li[data-v-d1dd1f36] {\r\n    display: block !important;\r\n    padding: 0 !important;\n}\r\n\r\n/* Links within the dropdown list */\n.subdrop a[data-v-d1dd1f36] {\r\n    display: block;\r\n    padding: 12px 20px;\r\n    white-space: nowrap;\n}\r\n\r\n/* Allows links to show on hover/focus and through keyboard navigation via focus-within */\n.droplink:hover .subdrop[data-v-d1dd1f36] {\r\n    visibility: visible;\r\n    height: auto;\r\n    z-index: 11;\n}\r\n\r\n/* Separate these to avoid IE completely ignoring the css above */\n.droplink:focus-within .subdrop[data-v-d1dd1f36] {\r\n    visibility: visible;\r\n    height: auto;\r\n    z-index: 11;\n}\n.relook-header[data-v-d1dd1f36] {\r\n    color: #000;\r\n    background-color: #f4f3f3;\r\n    padding: 2px;\r\n    border-bottom: 1px solid #b6b8bb;\n}\n.badge-sm[data-v-d1dd1f36] {\r\n    display: inline-block;\r\n    width: 15px;\r\n    height: 15px;\r\n    background: rgba(255, 0, 0, 0.882);\r\n    color: white;\r\n    font-size: 12px;\r\n    font-weight: 500;\r\n    border-radius: 100%;\r\n    position: absolute;\r\n    top: -20%;\r\n    left: 55%;\r\n    text-align: center;\n}\n.textToRight[data-v-d1dd1f36]{\r\n    text-align: right;\n}\n.equipe[data-v-d1dd1f36]{\r\n    background: #00ffff21;\r\n    color: #000;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dgr/DGR-FAR3.vue?vue&type=style&index=0&id=d1dd1f36&lang=css&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dgr/DGR-FAR3.vue?vue&type=style&index=0&id=d1dd1f36&lang=css&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DGR_FAR3_vue_vue_type_style_index_0_id_d1dd1f36_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DGR-FAR3.vue?vue&type=style&index=0&id=d1dd1f36&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dgr/DGR-FAR3.vue?vue&type=style&index=0&id=d1dd1f36&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DGR_FAR3_vue_vue_type_style_index_0_id_d1dd1f36_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DGR_FAR3_vue_vue_type_style_index_0_id_d1dd1f36_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/contreanalyse/nsia/filiale/dgr/DGR-FAR3.vue":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/nsia/filiale/dgr/DGR-FAR3.vue ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DGR_FAR3_vue_vue_type_template_id_d1dd1f36_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DGR-FAR3.vue?vue&type=template&id=d1dd1f36&scoped=true */ "./resources/js/components/contreanalyse/nsia/filiale/dgr/DGR-FAR3.vue?vue&type=template&id=d1dd1f36&scoped=true");
/* harmony import */ var _DGR_FAR3_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DGR-FAR3.vue?vue&type=script&lang=js */ "./resources/js/components/contreanalyse/nsia/filiale/dgr/DGR-FAR3.vue?vue&type=script&lang=js");
/* harmony import */ var _DGR_FAR3_vue_vue_type_style_index_0_id_d1dd1f36_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DGR-FAR3.vue?vue&type=style&index=0&id=d1dd1f36&lang=css&scoped=true */ "./resources/js/components/contreanalyse/nsia/filiale/dgr/DGR-FAR3.vue?vue&type=style&index=0&id=d1dd1f36&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DGR_FAR3_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _DGR_FAR3_vue_vue_type_template_id_d1dd1f36_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _DGR_FAR3_vue_vue_type_template_id_d1dd1f36_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "d1dd1f36",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/contreanalyse/nsia/filiale/dgr/DGR-FAR3.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/contreanalyse/nsia/filiale/dgr/DGR-FAR3.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/nsia/filiale/dgr/DGR-FAR3.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DGR_FAR3_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DGR-FAR3.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dgr/DGR-FAR3.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DGR_FAR3_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/contreanalyse/nsia/filiale/dgr/DGR-FAR3.vue?vue&type=style&index=0&id=d1dd1f36&lang=css&scoped=true":
/*!*************************************************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/nsia/filiale/dgr/DGR-FAR3.vue?vue&type=style&index=0&id=d1dd1f36&lang=css&scoped=true ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DGR_FAR3_vue_vue_type_style_index_0_id_d1dd1f36_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DGR-FAR3.vue?vue&type=style&index=0&id=d1dd1f36&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dgr/DGR-FAR3.vue?vue&type=style&index=0&id=d1dd1f36&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/contreanalyse/nsia/filiale/dgr/DGR-FAR3.vue?vue&type=template&id=d1dd1f36&scoped=true":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/nsia/filiale/dgr/DGR-FAR3.vue?vue&type=template&id=d1dd1f36&scoped=true ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DGR_FAR3_vue_vue_type_template_id_d1dd1f36_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DGR_FAR3_vue_vue_type_template_id_d1dd1f36_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DGR_FAR3_vue_vue_type_template_id_d1dd1f36_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DGR-FAR3.vue?vue&type=template&id=d1dd1f36&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dgr/DGR-FAR3.vue?vue&type=template&id=d1dd1f36&scoped=true");


/***/ })

}]);