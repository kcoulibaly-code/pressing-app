"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_contreanalyse_nsia_filiale_dgr_DGR-FAR4_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dgr/DGR-FAR4.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dgr/DGR-FAR4.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/ContextMenu */ "./resources/js/components/shared/ContextMenu.vue");
/* harmony import */ var _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/ContextMenuItem */ "./resources/js/components/shared/ContextMenuItem.vue");
/* harmony import */ var _services_connects_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../services/connects.service */ "./resources/js/services/connects.service.js");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../services/auth.service */ "./resources/js/services/auth.service.js");
/* harmony import */ var _services_credit_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../services/credit.service */ "./resources/js/services/credit.service.js");
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../helpers/helper */ "./resources/js/helpers/helper.js");
/* harmony import */ var _services_nsia_f8_manager_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../services/nsia/f8-manager.js */ "./resources/js/services/nsia/f8-manager.js");
/* harmony import */ var _services_nsia_f8_constants_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../services/nsia/f8-constants.js */ "./resources/js/services/nsia/f8-constants.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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





//  import IndexedDB from "../../../../helpers/indexedDB";


window.$ = window.jQuery = __webpack_require__(/*! jquery/dist/jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "fiche-signaletique",
  display: "Fiche signaletique",
  components: {
    MoreVerticalIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_9__.MoreVerticalIcon,
    ChevronUpIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_9__.ChevronUpIcon,
    ChevronDownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_9__.ChevronDownIcon,
    ContextMenu: _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_0__["default"],
    ContextMenuItem: _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_1__["default"],
    AirplayIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_9__.AirplayIcon,
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_9__.TrashIcon,
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_9__.PlusIcon,
    BookOpenIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_9__.BookOpenIcon
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
            return _services_credit_service__WEBPACK_IMPORTED_MODULE_5__["default"].secteurs_activites().then(function (res) {
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
    var _this$meta_data$dossi,
      _this2 = this;
    var applied_templ_name = (_this$meta_data$dossi = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi === void 0 ? void 0 : _this$meta_data$dossi.applied_templ_name;
    var tbArrays = this.determineCredPubTables(applied_templ_name);
    this.credpub_8 = tbArrays[2];
    this.loadRetrieved();
    this.loadTbAttrs(); // charge les attributs + sous attributs des tables
    // helper.loadCurrencyFormatter();
    this.tableClosedOrOpened();
    // this.crdLd();
    EventBus.$on("created-extra-file-template", function (data) {
      _this2.conso_fond_propre.forEach(function (element, index) {
        var _data$template;
        if ((element === null || element === void 0 ? void 0 : element.name) == (data === null || data === void 0 || (_data$template = data.template) === null || _data$template === void 0 ? void 0 : _data$template.name)) {
          var _data$template2, _data$template3, _data$template4;
          _this2.conso_fond_propre[index]['template'] = {
            'id': data === null || data === void 0 || (_data$template2 = data.template) === null || _data$template2 === void 0 ? void 0 : _data$template2.id,
            'name': data === null || data === void 0 || (_data$template3 = data.template) === null || _data$template3 === void 0 ? void 0 : _data$template3.name,
            'slug': data === null || data === void 0 || (_data$template4 = data.template) === null || _data$template4 === void 0 ? void 0 : _data$template4.slug
          };
          _this2.handleInput();
        }
      });
    });
    EventBus.$on("updated-extra-file-upload", function (data) {
      _this2.getFiles();
    });
    EventBus.$on("reload-DGRFAR4", function () {
      EventBus.$emit("send-total_apr", {
        total_apr: _this2.formDataToBeWatched["total_apr_cmt_cct"]
      });
    });
  },
  data: function data() {
    var vm = this;
    return {
      f8Manager: _services_nsia_f8_manager_js__WEBPACK_IMPORTED_MODULE_7__["default"],
      ebapisHost: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_3__["default"].host,
      connectsHost: _services_connects_service__WEBPACK_IMPORTED_MODULE_2__["default"].loadablehost(),
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
      credits: [],
      clients: [],
      files: [],
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
        cmt_max: 100,
        cmt_exposition_global: 0,
        cmt_garantie_eligible: 0,
        cmt_taux_couverture: ""
      }],
      cct: [{
        cct_max: 100,
        cct_exposition_global: 0,
        cct_garantie_eligible: 0,
        cct_taux_couverture: ""
      }],
      conso_fond_propre_mode_auto: [{
        name: "Consommation fonds propre",
        montant: 0,
        cste: 11,
        conso_fp_: 0
      }],
      conso_fps: [{
        libelle: "",
        bilan: 0,
        hor_bilan: 0,
        fcec: 0,
        hb_apres_fcec: 0,
        total_exposition: 0,
        tarc: 0,
        pond: 0,
        apr: 0
      }],
      conso_fond_propres: [{
        clt_libelle: "CLT",
        clt_bilan: 0,
        clt_hor_bilan: 0,
        clt_fcec: 0,
        clt_hb_apres_fcec: 0,
        clt_total_exposition: 0,
        clt_tarc: 0,
        clt_pond: 0,
        clt_apr: 0
      }, {
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
      conso_fond_propre: [{
        name: "Consommation fonds propre",
        montant: 0,
        files: 0,
        template: ""
      }],
      tous_les_lignes_filtres_: [].concat(_toConsumableArray(_services_nsia_f8_constants_js__WEBPACK_IMPORTED_MODULE_8__["default"].tous_les_lignes), _toConsumableArray(_services_nsia_f8_constants_js__WEBPACK_IMPORTED_MODULE_8__["default"].lignes_engagements_signatures)),
      credpub_8: null,
      tb_cct: [],
      tb_cmt: [],
      tb_clt: [],
      tb_cct_hb: [],
      tb_cmt_hb: [],
      tb_clt_hb: [],
      formDataToBeWatched: {
        cmt: "",
        cct: "",
        mode_calcul: "A",
        conso_fond_propres: "",
        conso_fond_propre: "",
        total_bilan_cmt_cct: "",
        total_hor_bilan_cmt_cct: "",
        total_fcec_cmt_cct: "",
        // total_fcec_cmt_cct:"",
        total_hb_apres_fcec_cmt_cct: "",
        total_total_exposition_cmt_cct: "",
        total_tarc_cmt_cct: "",
        total_pond_cmt_cct: "",
        total_apr_cmt_cct: "",
        //
        conso_fps: "",
        clt_hb_apres_fcec: "",
        clt_apr: "",
        cmt_hb_apres_fcec: "",
        cmt_apr: "",
        cct_hb_apres_fcec: "",
        cct_apr: "",
        comment_conso_fond_propre: "",
        conso_fond_propre_mode_auto: "",
        comment_conso_fond_propre_auto: "",
        comment_conso_fond_propre_manuel: "",
        ligne_conso_fond_propre_pour: 0,
        ligne_conso_fond_propre: 0,
        // hb_apres_fcec:"",
        // total_exposition:"",
        // apr:"",
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
      type_credit: null,
      type_de_clientele: null,
      listingNote: false
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
    loadRetrieved: function loadRetrieved() {
      var lentb = this.meta_data["dossier_credit"]["tbs_in_use"];
      var createdKey = this.tb_name;
      var createdKeyArr = createdKey.split("tb");
      createdKey = "cred_pub_tb_" + createdKeyArr[1];
      if (lentb.length > 0) {
        var _this$meta_data$dossi11;
        // if(this.meta_data["dossier_credit"][createdKey] == undefined){
        //     // conso_fond_propres
        // }
        if (this.meta_data['dossier_credit'][createdKey] === undefined) {
          var _ref, _this$meta_data$dossi2, _this$meta_data$dossi6;
          if (!((_ref = ["", undefined]) !== null && _ref !== void 0 && _ref.includes((_this$meta_data$dossi2 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi2 === void 0 || (_this$meta_data$dossi2 = _this$meta_data$dossi2.cred_pub_tb_19003) === null || _this$meta_data$dossi2 === void 0 ? void 0 : _this$meta_data$dossi2.conso_fond_propres))) {
            var _this$meta_data$dossi3, _this$meta_data$dossi4, _this$meta_data$dossi5;
            this.conso_fond_propres = (_this$meta_data$dossi3 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi3 === void 0 || (_this$meta_data$dossi3 = _this$meta_data$dossi3.cred_pub_tb_19003) === null || _this$meta_data$dossi3 === void 0 ? void 0 : _this$meta_data$dossi3.conso_fond_propres;
            this.conso_fps = (_this$meta_data$dossi4 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi4 === void 0 || (_this$meta_data$dossi4 = _this$meta_data$dossi4.cred_pub_tb_19003) === null || _this$meta_data$dossi4 === void 0 ? void 0 : _this$meta_data$dossi4.conso_fps;
            this.conso_fond_propre_mode_auto = (_this$meta_data$dossi5 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi5 === void 0 || (_this$meta_data$dossi5 = _this$meta_data$dossi5.cred_pub_tb_19003) === null || _this$meta_data$dossi5 === void 0 ? void 0 : _this$meta_data$dossi5.conso_fond_propre_mode_auto;
            // this.formDataToBeWatched.comment_conso_fond_propre = this.meta_data["dossier_credit"]?.cred_pub_tb_19003?.comment_conso_fond_propre

            this.conso_fond_propres = this.conso_fond_propres.map(function (ed) {
              return _objectSpread(_objectSpread({}, ed), {}, {
                comeFrom: 'tb_19003'
              });
            });
            this.conso_fps = this.conso_fps.map(function (ed) {
              return _objectSpread(_objectSpread({}, ed), {}, {
                comeFrom: 'tb_19003'
              });
            });
            this.handleInput();
          } else {
            // this.loadConsoFondsPropres();
            this.loadConsoFondsPropres_();
            // comment_conso_fond_propre
            // this.conso_fond_propres = this.conso_fond_propres.map(ed => ({...ed, comeFrom:'tb_19003'}))
          }
          if (((_this$meta_data$dossi6 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi6 === void 0 || (_this$meta_data$dossi6 = _this$meta_data$dossi6.cred_pub_tb_19003) === null || _this$meta_data$dossi6 === void 0 ? void 0 : _this$meta_data$dossi6.mode_calcul) == 'M') {
            var _ref2, _this$meta_data$dossi7, _ref3, _this$meta_data$dossi9;
            // this.formDataToBeWatched.mode_calcul =  "M"
            if (!((_ref2 = ["", undefined]) !== null && _ref2 !== void 0 && _ref2.includes((_this$meta_data$dossi7 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi7 === void 0 || (_this$meta_data$dossi7 = _this$meta_data$dossi7.cred_pub_tb_19003) === null || _this$meta_data$dossi7 === void 0 ? void 0 : _this$meta_data$dossi7.conso_fond_propre))) {
              var _this$meta_data$dossi8;
              this.conso_fond_propre = (_this$meta_data$dossi8 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi8 === void 0 || (_this$meta_data$dossi8 = _this$meta_data$dossi8.cred_pub_tb_19003) === null || _this$meta_data$dossi8 === void 0 ? void 0 : _this$meta_data$dossi8.conso_fond_propre;
              // this.conso_fond_propres = this.meta_data['dossier_credit']?.cred_pub_tb_19003?.conso_fond_propres

              // this.formDataToBeWatched.comment_conso_fond_propre = this.meta_data["dossier_credit"]?.cred_pub_tb_19003?.comment_conso_fond_propre
              this.conso_fond_propre = this.conso_fond_propre.map(function (ed) {
                return _objectSpread(_objectSpread({}, ed), {}, {
                  comeFrom: 'tb_19003'
                });
              });
              this.handleInput();
            }
            if (!((_ref3 = ["", undefined]) !== null && _ref3 !== void 0 && _ref3.includes((_this$meta_data$dossi9 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi9 === void 0 || (_this$meta_data$dossi9 = _this$meta_data$dossi9.cred_pub_tb_19003) === null || _this$meta_data$dossi9 === void 0 ? void 0 : _this$meta_data$dossi9.conso_fond_propres))) {
              var _this$meta_data$dossi0, _this$meta_data$dossi1, _this$meta_data$dossi10;
              this.conso_fond_propres = (_this$meta_data$dossi0 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi0 === void 0 || (_this$meta_data$dossi0 = _this$meta_data$dossi0.cred_pub_tb_19003) === null || _this$meta_data$dossi0 === void 0 ? void 0 : _this$meta_data$dossi0.conso_fond_propres;
              this.conso_fps = (_this$meta_data$dossi1 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi1 === void 0 || (_this$meta_data$dossi1 = _this$meta_data$dossi1.cred_pub_tb_19003) === null || _this$meta_data$dossi1 === void 0 ? void 0 : _this$meta_data$dossi1.conso_fps;
              this.conso_fond_propre_mode_auto = (_this$meta_data$dossi10 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi10 === void 0 || (_this$meta_data$dossi10 = _this$meta_data$dossi10.cred_pub_tb_19003) === null || _this$meta_data$dossi10 === void 0 ? void 0 : _this$meta_data$dossi10.conso_fond_propre_mode_auto;
              // this.formDataToBeWatched.comment_conso_fond_propre = this.meta_data["dossier_credit"]?.cred_pub_tb_19003?.comment_conso_fond_propre

              this.conso_fond_propres = this.conso_fond_propres.map(function (ed) {
                return _objectSpread(_objectSpread({}, ed), {}, {
                  comeFrom: 'tb_19003'
                });
              });
              this.conso_fps = this.conso_fps.map(function (ed) {
                return _objectSpread(_objectSpread({}, ed), {}, {
                  comeFrom: 'tb_19003'
                });
              });
              this.handleInput();
            }
            // this.loadConsoFondsPropres_();
          }
          if (this.formDataToBeWatched.mode_calcul == "A") {
            this.loadConsoFondsPropres_();
          }
        }
        if (this.meta_data["dossier_credit"][createdKey] != undefined) {
          this.formDataToBeWatched = this.meta_data["dossier_credit"][createdKey];
          if (this.meta_data["dossier_credit"][createdKey]["conso_fond_propres"] != "") {
            this.conso_fond_propres = this.meta_data["dossier_credit"][createdKey]["conso_fond_propres"];
          }
          if (this.meta_data["dossier_credit"][createdKey]["conso_fps"] != "") {
            this.conso_fps = this.meta_data["dossier_credit"][createdKey]["conso_fps"];
          }
          if (this.meta_data["dossier_credit"][createdKey]["conso_fond_propre"] != "") {
            this.conso_fond_propre = this.meta_data["dossier_credit"][createdKey]["conso_fond_propre"];
          }
          if (this.meta_data["dossier_credit"][createdKey]["conso_fond_propre_mode_auto"] != "") {
            this.conso_fond_propre_mode_auto = this.meta_data["dossier_credit"][createdKey]["conso_fond_propre_mode_auto"];
          }
        }
        // Close table by default
        this.defaultRetract(false, (_this$meta_data$dossi11 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi11 === void 0 ? void 0 : _this$meta_data$dossi11.applied_templ_id);
      }
    },
    loadConsoFondsPropres: function loadConsoFondsPropres() {
      var _this$meta_data$dossi12,
        _this$meta_data$dossi13,
        _this3 = this;
      console.log("hier");
      var cred = "cred_pub_tb_19003";
      if (((_this$meta_data$dossi12 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi12 === void 0 ? void 0 : _this$meta_data$dossi12[cred]) === undefined) {
        cred = this.credpub_8;
      }
      if (((_this$meta_data$dossi13 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi13 === void 0 ? void 0 : _this$meta_data$dossi13[cred]) != undefined) {
        var _this$meta_data$dossi14, _this$meta_data$dossi15;
        console.log("credpub_8credpub_8 => ", cred);
        (_this$meta_data$dossi14 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi14 === void 0 || (_this$meta_data$dossi14 = _this$meta_data$dossi14[cred]) === null || _this$meta_data$dossi14 === void 0 || _this$meta_data$dossi14.nouvelles_lignes_caisse.forEach(function (el, index) {
          var duree_credit = el === null || el === void 0 ? void 0 : el.duree;
          var mtn = el === null || el === void 0 ? void 0 : el.proposition;
          var verif = _this3.determineTypeCreditByDuree(duree_credit);
          if (verif == "CCT") {
            _this3.tb_cct.push(mtn);
          } else if (verif == "CMT") {
            _this3.tb_cmt.push(mtn);
          } else {
            _this3.tb_clt.push(mtn);
          }
        });
        (_this$meta_data$dossi15 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi15 === void 0 || (_this$meta_data$dossi15 = _this$meta_data$dossi15[cred]) === null || _this$meta_data$dossi15 === void 0 || _this$meta_data$dossi15.nouvelles_lignes_signature.forEach(function (el, index) {
          var duree_credit_caution = el === null || el === void 0 ? void 0 : el.duree;
          var mtn_caution = el === null || el === void 0 ? void 0 : el.proposition;
          var verif_caution = _this3.determineTypeCreditByDuree(duree_credit_caution);
          if (verif_caution == "CCT") {
            _this3.tb_cct_hb.push(mtn_caution);
          } else if (verif_caution == "CMT") {
            _this3.tb_cmt_hb.push(mtn_caution);
          } else {
            _this3.tb_clt_hb.push(mtn_caution);
          }
        });
        var tb_arr = ["tb_cct", "tb_cmt", "tb_clt", "tb_cct_hb", "tb_cmt_hb", "tb_clt_hb"];
        // console.log("this.conso_fond_propres[0][cct_bilan] ==> ", this.conso_fond_propres[0].cct_bilan)

        tb_arr.forEach(function (el) {
          var element = el;
          var data_ = _this3[element];
          if (data_.length > 0) {
            if (element == "tb_cct") {
              _this3.conso_fond_propres[2]["cct_bilan"] = _this3.someMtn(data_);
              _this3.handleInput();
            }
            if (element == "tb_cmt") {
              _this3.conso_fond_propres[1]["cmt_bilan"] = _this3.someMtn(data_);
              _this3.handleInput();
            }
            if (element == "tb_clt") {
              _this3.conso_fond_propres[0]["clt_bilan"] = _this3.someMtn(data_);
              _this3.handleInput();
            }
            if (element == "tb_cct_hb") {
              _this3.conso_fond_propres[2]["cct_hor_bilan"] = _this3.someMtn(data_);
              _this3.handleInput();
            }
            if (element == "tb_cmt_hb") {
              _this3.conso_fond_propres[1]["cmt_hor_bilan"] = _this3.someMtn(data_);
              _this3.handleInput();
            }
            if (element == "tb_clt_hb") {
              _this3.conso_fond_propres[0]["clt_hor_bilan"] = _this3.someMtn(data_);
              _this3.handleInput();
            }
          }
        });
        this.conso_fond_propres = this.conso_fond_propres.map(function (ed) {
          return _objectSpread(_objectSpread({}, ed), {}, {
            comeFrom: 'tb_19003'
          });
        });
      }
    },
    setModeCalculConso: function setModeCalculConso(event, vars, index, Item) {
      // this.isLoading = true

      // if( event.target.value == 'A'){
      //     if(this.conso_fond_propre[0]?.files > 0){
      //         console.log("ici")
      //         EventBus.$emit("open-extra-file-explorer");
      //         setTimeout(() => {
      //             EventBus.$emit("data-extra-file-explorer", {
      //                 name: this.conso_fond_propre[0]?.name
      //             });
      //         }, 500);

      //     }

      //     this.conso_fond_propre = [{
      //         name:"Consommation fonds propre",
      //         montant:0,
      //         files:0
      //     }]

      //     this.loadConsoFondsPropres();

      // }

      // if( event.target.value == 'M'){
      //     this.conso_fond_propres = [ {
      //         clt_libelle: "CLT",
      //         clt_bilan: 0,
      //         clt_hor_bilan: 0,
      //         clt_fcec: 0,
      //         clt_hb_apres_fcec: 0,
      //         clt_total_exposition: 0,
      //         clt_tarc: 0,
      //         clt_pond: 0,
      //         clt_apr: 0,

      //     },
      //     {
      //         cmt_libelle: "CMT",
      //         cmt_bilan: 0,
      //         cmt_hor_bilan: 0,
      //         cmt_fcec: 0,
      //         cmt_hb_apres_fcec: 0,
      //         cmt_total_exposition: 0,
      //         cmt_tarc: 0,
      //         cmt_pond: 0,
      //         cmt_apr: 0,

      //     },
      //     {
      //         cct_libelle: "CCT",
      //         cct_bilan: 0,
      //         cct_hor_bilan: 0,
      //         cct_fcec: 0,
      //         cct_hb_apres_fcec: 0,
      //         cct_total_exposition: 0,
      //         cct_tarc: 0,
      //         cct_pond: 0,
      //         cct_apr: 0,

      //     },]
      //     this.formDataToBeWatched.total_bilan_cmt_cct = ""
      //     this.formDataToBeWatched.total_hor_bilan_cmt_cct = ""
      //     this.formDataToBeWatched.total_fcec_cmt_cct = ""
      //     this.formDataToBeWatched.total_hb_apres_fcec_cmt_cct = ""
      //     this.formDataToBeWatched.total_total_exposition_cmt_cct = ""
      //     this.formDataToBeWatched.total_tarc_cmt_cct = ""
      //     this.formDataToBeWatched.total_pond_cmt_cct = ""
      //     this.formDataToBeWatched.total_apr_cmt_cct = ""

      // }

      this.formDataToBeWatched[vars] = event.target.value;
    },
    handleDoubleClickOrClick: function handleDoubleClickOrClick(event, index) {
      var _this4 = this;
      EventBus.$emit("open-extra-file-explorer");
      setTimeout(function () {
        var _this4$conso_fond_pro;
        EventBus.$emit("data-extra-file-explorer", {
          name: (_this4$conso_fond_pro = _this4.conso_fond_propre[index]) === null || _this4$conso_fond_pro === void 0 ? void 0 : _this4$conso_fond_pro.name
        });
      }, 500);
    },
    getFiles: function getFiles() {
      var _this5 = this;
      this.$axios.post(this.connectsHost + 'api/get-files', {
        file_identity: this.meta_data["dossier_credit"].cred_pub_key
      }).then(function (res) {
        var _res$data$data, _res$data$data2;
        res.data = JSON.parse(res.data);
        if (((_res$data$data = res.data.data) === null || _res$data$data === void 0 ? void 0 : _res$data$data.length) > 0 || ((_res$data$data2 = res.data.data) === null || _res$data$data2 === void 0 ? void 0 : _res$data$data2.length) != null) {
          _this5.files = res.data.data;
          console.log("this.files => ", _this5.files);
          _this5.conso_fond_propre.forEach(function (element, index) {
            var count = 0;
            _this5.files.forEach(function (file) {
              var _element$template;
              if ((file === null || file === void 0 ? void 0 : file.extra_file_template_id) != null && (element === null || element === void 0 || (_element$template = element.template) === null || _element$template === void 0 ? void 0 : _element$template.id) == (file === null || file === void 0 ? void 0 : file.extra_file_template_id)) {
                count++;
              }
            });
            _this5.conso_fond_propre[index]['files'] = count;
            _this5.handleInput();
          });
        }
      })["catch"](function (err) {
        console.error(err);
      });
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
    addMoreConso: function addMoreConso(listName) {
      this[listName].push({
        libelle: "",
        bilan: 0,
        hor_bilan: 0,
        fcec: 0,
        hb_apres_fcec: 0,
        total_exposition: 0,
        tarc: 0,
        pond: 0,
        apr: 0
      });
    },
    removeConso: function removeConso(index) {
      this.conso_fps.splice(index, 1);
      this.handleInput();
    },
    remove: function remove(index) {
      this.actionnariats.splice(index, 1);
      this.formDataToBeWatched.total_part = this.totalPartPourcentageActionnariats;
      this.handleInput();
    },
    somX3: function somX3(ob, key) {
      var som = 0;
      ob.filter(function (elm) {
        var result = String(elm[key]).replace(/\s+/g, "");
        if (result === "" || isNaN(result)) {
          som += 0;
        } else {
          som += parseInt(result);
        }
      });
      return som;
    },
    handleInput: function handleInput(evt) {
      this.formDataToBeWatched["conso_fond_propre"] = this.conso_fond_propre;
      this.formDataToBeWatched["conso_fond_propres"] = this.conso_fond_propres;

      // this.formDataToBeWatched["total_bilan_cmt_cct"] = this.totalBilaCmtCct + this.somX3(this.conso_fps,"bilan");
      this.formDataToBeWatched["total_bilan_cmt_cct"] = this.somX3(this.conso_fps, "bilan");

      // this.formDataToBeWatched["total_hor_bilan_cmt_cct"] = this.totalHorBilanCmtCct + this.somX3(this.conso_fps,"hor_bilan");
      this.formDataToBeWatched["total_hor_bilan_cmt_cct"] = this.somX3(this.conso_fps, "hor_bilan");

      // this.formDataToBeWatched["cmt_hb_apres_fcec"] = this.cmtApresFec;
      // this.formDataToBeWatched["cct_hb_apres_fcec"] = this.cctApresfec;
      // this.formDataToBeWatched["clt_hb_apres_fcec"] = this.cltApresfec;

      // this.formDataToBeWatched["conso_fond_propres"][0].clt_total_exposition = this.cltApresfec + Number(String(this.formDataToBeWatched["conso_fond_propres"][0].clt_bilan).replace(/\s+/g,""))
      // this.formDataToBeWatched["conso_fond_propres"][1].cmt_total_exposition = this.cmtApresFec + Number(String(this.formDataToBeWatched["conso_fond_propres"][1].cmt_bilan).replace(/\s+/g,""))
      // this.formDataToBeWatched["conso_fond_propres"][2].cct_total_exposition = this.cctApresfec + Number(String(this.formDataToBeWatched["conso_fond_propres"][2].cct_bilan).replace(/\s+/g,""))

      this.formDataToBeWatched["cmt_apr"] = this.cmtApr;
      this.formDataToBeWatched["cct_apr"] = this.cctApr;
      this.formDataToBeWatched["clt_apr"] = this.cltApr;
      this.conso_fps.forEach(function (item, i) {
        item.hb_apres_fcec = parseInt(String(item.hor_bilan).replace(/\s+/g, "")) * parseInt(String(item.fcec).replace(/\s+/g, "")) / 100;
        item.total_exposition = parseInt(String(item.hb_apres_fcec).replace(/\s+/g, "")) + parseInt(String(item.bilan).replace(/\s+/g, ""));
        item.apr = (parseInt(String(item.total_exposition).replace(/\s+/g, "")) - parseInt(String(item.tarc).replace(/\s+/g, ""))) * (parseInt(String(item.pond).replace(/\s+/g, "")) / 100);
      });
      this.formDataToBeWatched["total_hb_apres_fcec_cmt_cct"] = this.somX3(this.conso_fps, "hb_apres_fcec");
      // this.formDataToBeWatched["total_hb_apres_fcec_cmt_cct"] = this.cmtApresFec + this.cctApresfec + this.cltApresfec + this.somX3(this.conso_fps,"hb_apres_fcec");

      this.formDataToBeWatched["total_total_exposition_cmt_cct"] = this.somX3(this.conso_fps, "total_exposition");
      // this.formDataToBeWatched["total_total_exposition_cmt_cct"] = this.totalExpositionCmtCct + this.somX3(this.conso_fps,"total_exposition");

      // this.formDataToBeWatched["total_tarc_cmt_cct"] = this.totalTarcCmtCct + this.somX3(this.conso_fps,"tarc");
      this.formDataToBeWatched["total_tarc_cmt_cct"] = this.somX3(this.conso_fps, "tarc");

      // this.formDataToBeWatched["total_apr_cmt_cct"] = this.cmtApr + this.cctApr + this.cltApr + this.somX3(this.conso_fps,"apr");
      this.formDataToBeWatched["total_apr_cmt_cct"] = this.somX3(this.conso_fps, "apr");
      var pour_ = this.convertInt(this.formDataToBeWatched['ligne_conso_fond_propre_pour']) / 100;
      this.formDataToBeWatched["ligne_conso_fond_propre"] = parseInt(this.convertInt(this.formDataToBeWatched['total_apr_cmt_cct']) * pour_);

      // this.conso_fond_propre_mode_auto[0]["montant"] = this.formDataToBeWatched["total_apr_cmt_cct"] != 0 ? (this.formDataToBeWatched["total_apr_cmt_cct"] * 11 ) / 100 : 0

      this.conso_fond_propre_mode_auto[0]["montant"] = this.convertInt(this.formDataToBeWatched["ligne_conso_fond_propre"]);
      this.formDataToBeWatched["conso_fond_propre_mode_auto"] = this.conso_fond_propre_mode_auto;
      this.formDataToBeWatched["conso_fps"] = this.conso_fps;
      EventBus.$emit("send-total_apr", {
        total_apr: this.formDataToBeWatched["total_apr_cmt_cct"]
      });
      EventBus.$emit("event-T0", {
        formdata: this.formDataToBeWatched
      });
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
    loadConsoFondsPropres_: function loadConsoFondsPropres_() {
      var _this$meta_data$dossi16,
        _this6 = this;
      // console.log("hier")
      if (((_this$meta_data$dossi16 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi16 === void 0 ? void 0 : _this$meta_data$dossi16[this.credpub_8]) != undefined) {
        var _this$meta_data$dossi17, _this$meta_data$dossi18;
        // console.log("credpub_8credpub_8 =♠2 ", this.credpub_8)
        if (((_this$meta_data$dossi17 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi17 === void 0 || (_this$meta_data$dossi17 = _this$meta_data$dossi17[this.credpub_8]) === null || _this$meta_data$dossi17 === void 0 || (_this$meta_data$dossi17 = _this$meta_data$dossi17.nouvelles_lignes_caisse) === null || _this$meta_data$dossi17 === void 0 ? void 0 : _this$meta_data$dossi17.length) > 0 || ((_this$meta_data$dossi18 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi18 === void 0 || (_this$meta_data$dossi18 = _this$meta_data$dossi18[this.credpub_8]) === null || _this$meta_data$dossi18 === void 0 ? void 0 : _this$meta_data$dossi18.nouvelles_lignes_signature.length) > 0) {
          var _this$meta_data$dossi19, _this$meta_data$dossi20;
          this.conso_fps = [];
          (_this$meta_data$dossi19 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi19 === void 0 || (_this$meta_data$dossi19 = _this$meta_data$dossi19[this.credpub_8]) === null || _this$meta_data$dossi19 === void 0 || _this$meta_data$dossi19.nouvelles_lignes_caisse.forEach(function (el, index) {
            _this6.conso_fps.push({
              libelle: el.ligne,
              bilan: el.proposition,
              hor_bilan: 0,
              fcec: 0,
              hb_apres_fcec: 0,
              total_exposition: 0,
              tarc: 0,
              pond: 0,
              apr: 0
            });
          });
          this.handleInput();
          (_this$meta_data$dossi20 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi20 === void 0 || (_this$meta_data$dossi20 = _this$meta_data$dossi20[this.credpub_8]) === null || _this$meta_data$dossi20 === void 0 || _this$meta_data$dossi20.nouvelles_lignes_signature.forEach(function (el, index) {
            _this6.conso_fps.push({
              libelle: el.ligne,
              bilan: 0,
              hor_bilan: el.proposition,
              fcec: 0,
              hb_apres_fcec: 0,
              total_exposition: 0,
              tarc: 0,
              pond: 0,
              apr: 0
            });
          });
          this.handleInput();
        }
        this.conso_fps = this.conso_fps.map(function (ed) {
          return _objectSpread(_objectSpread({}, ed), {}, {
            cameFrom: 'tb_19003'
          });
        });
      }
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
        id: "ca4-head"
      };
      // console.log(p)
      this.$emit("load-buffer", p);
    },
    credData: function credData(res) {
      this.credits = res.data;
    },
    onSlctMatCli: function onSlctMatCli(obj) {
      var _this$formDataToBeWat,
        _this7 = this;
      this.formDataToBeWatched.matricule_client = obj.matcli;
      this.formDataToBeWatched.nom_client = obj.nomcli;
      this.autoRenamer();
      _services_credit_service__WEBPACK_IMPORTED_MODULE_5__["default"].encours((_this$formDataToBeWat = this.formDataToBeWatched) === null || _this$formDataToBeWat === void 0 ? void 0 : _this$formDataToBeWat.matricule_client).then(function (res) {
        _this7.encoursData(res);
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
      var _this8 = this;
      _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["default"].loadUserData().then(function (res) {
        _this8.send2Backend0(res);
      })["catch"](function (err) {
        _this8.loadWithError(err);
      });
    },
    instruction2: function instruction2(id) {
      var id0 = '#' + id;
      window.$(id0).modal('show');
    } //
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
    }
  },
  computed: {
    consoFondPropreWhenAutoMode: function consoFondPropreWhenAutoMode() {
      var mtn = String(this.conso_fond_propre_mode_auto[0].motant).replace(/\s+/g, "");
      var cste_ = String(this.conso_fond_propre_mode_auto[0].cste).replace(/\s+/g, "");
      var result = Number(cmt_bil) * cste_ / 100;
      return Number(result);
      // conso_fond_propre_mode_auto
    },
    totalBilaCmtCct: function totalBilaCmtCct() {
      var clt_bil = String(this.conso_fond_propres[0].clt_bilan).replace(/\s+/g, "");
      var cmt_bil = String(this.conso_fond_propres[1].cmt_bilan).replace(/\s+/g, "");
      var cct_bil = String(this.conso_fond_propres[2].cct_bilan).replace(/\s+/g, "");
      // if(cmt_bilan <= 0 || cc_bilan <= 0 ) return 0; this.formDataToBeWatched.total_bilan_cmt_cct =

      var tt = Number(cmt_bil) + Number(cct_bil) + Number(clt_bil);
      return Number(tt);
    },
    totalHorBilanCmtCct: function totalHorBilanCmtCct() {
      var clt_h_bilan = String(this.conso_fond_propres[0].clt_hor_bilan).replace(/\s+/g, "");
      var cmt_h_bilan = String(this.conso_fond_propres[1].cmt_hor_bilan).replace(/\s+/g, "");
      var cct_h_bilan = String(this.conso_fond_propres[2].cct_hor_bilan).replace(/\s+/g, "");
      // if(cmt_h_bilan <= 0 || cct_h_bilan <= 0 ) return 0; this.formDataToBeWatched.total_hor_bilan_cmt_cct

      var tt = Number(cmt_h_bilan) + Number(cct_h_bilan) + Number(clt_h_bilan);
      return Number(tt);
    },
    totalFcecCmtCct: function totalFcecCmtCct() {
      var clt_f = String(this.conso_fond_propres[0].clt_fcec).replace(/\s+/g, "");
      var cmt_f = String(this.conso_fond_propres[1].cmt_fcec).replace(/\s+/g, "");
      var cct_f = String(this.conso_fond_propres[2].cct_fcec).replace(/\s+/g, "");
      // if(cmt_f <= 0 || cct_f <= 0 ) return 0; this.formDataToBeWatched.total_fcec_cmt_cct =

      var tt = Number(cmt_f) + Number(cct_f) + Number(clt_f);
      return Number(tt);
    },
    cltApresfec: function cltApresfec() {
      var clt_h_bilan = String(this.conso_fond_propres[0].clt_hor_bilan).replace(/\s+/g, "");
      var clt_f = String(this.conso_fond_propres[0].clt_fcec).replace(/\s+/g, "");
      var tt = Number(clt_h_bilan) * (Number(clt_f) / 100);
      return Number(tt);
    },
    cmtApresFec: function cmtApresFec() {
      var cmt_h_bilan = String(this.conso_fond_propres[1].cmt_hor_bilan).replace(/\s+/g, "");
      var cmt_f = String(this.conso_fond_propres[1].cmt_fcec).replace(/\s+/g, "");
      var tt = Number(cmt_h_bilan) * (Number(cmt_f) / 100);
      return Number(tt);
      // cmt_hb_apres_fcec
    },
    cctApresfec: function cctApresfec() {
      var cmt_h_bilan = String(this.conso_fond_propres[2].cct_hor_bilan).replace(/\s+/g, "");
      var cmt_f = String(this.conso_fond_propres[2].cct_fcec).replace(/\s+/g, "");
      var tt = Number(cmt_h_bilan) * (Number(cmt_f) / 100);
      return Number(tt);
    },
    //(h)=(e-f)*(g)
    cltApr: function cltApr() {
      var tt_expo = String(this.conso_fond_propres[0].clt_total_exposition).replace(/\s+/g, "");
      var tarc = String(this.conso_fond_propres[0].clt_tarc).replace(/\s+/g, "");
      var pond = String(this.conso_fond_propres[0].clt_pond).replace(/\s+/g, "");
      var tt = (Number(tt_expo) - Number(tarc)) * (Number(pond) / 100);
      return Number(tt);
    },
    cmtApr: function cmtApr() {
      var tt_expo = String(this.conso_fond_propres[1].cmt_total_exposition).replace(/\s+/g, "");
      var tarc = String(this.conso_fond_propres[1].cmt_tarc).replace(/\s+/g, "");
      var pond = String(this.conso_fond_propres[1].cmt_pond).replace(/\s+/g, "");
      var tt = (Number(tt_expo) - Number(tarc)) * (Number(pond) / 100);
      return Number(tt);
      // cmt_hb_apres_fcec
    },
    cctApr: function cctApr() {
      var tt_expo = String(this.conso_fond_propres[2].cct_total_exposition).replace(/\s+/g, "");
      var tarc = String(this.conso_fond_propres[2].cct_tarc).replace(/\s+/g, "");
      var pond = String(this.conso_fond_propres[2].cct_pond).replace(/\s+/g, "");
      var tt = (Number(tt_expo) - Number(tarc)) * (Number(pond) / 100);
      return Number(tt);
    },
    //
    // cmt_hb_apres_fcec
    // cmt_apr
    // cct_hb_apres_fcec
    // cct_apr
    totalHbApresFcecCmtCct: function totalHbApresFcecCmtCct() {
      // (d)=(b)*(c )
      var clt_hb_a_fcec = String(this.conso_fond_propres[0].clt_hb_apres_fcec).replace(/\s+/g, "");
      var cmt_hb_a_fcec = String(this.conso_fond_propres[1].cmt_hb_apres_fcec).replace(/\s+/g, "");
      var cct_hb_a_fcec = String(this.conso_fond_propres[2].cct_hb_apres_fcec).replace(/\s+/g, "");
      var tt = Number(cmt_hb_a_fcec) + Number(cct_hb_a_fcec) + Number(clt_hb_a_fcec);
      return Number(tt);
    },
    totalExpositionCmtCct: function totalExpositionCmtCct() {
      var clt_tt_expo = String(this.conso_fond_propres[0].clt_total_exposition).replace(/\s+/g, "");
      var cmt_tt_expo = String(this.conso_fond_propres[1].cmt_total_exposition).replace(/\s+/g, "");
      var cct_tt_expo = String(this.conso_fond_propres[2].cct_total_exposition).replace(/\s+/g, "");
      // if(cmt_tt_expo <= 0 || cct_tt_expo <= 0 ) return 0;

      var tt = Number(cmt_tt_expo) + Number(cct_tt_expo) + Number(clt_tt_expo);
      return Number(tt);
    },
    totalTarcCmtCct: function totalTarcCmtCct() {
      // total_tarc_cmt_cct

      var clt_tc = String(this.conso_fond_propres[0].clt_tarc).replace(/\s+/g, "");
      var cmt_tc = String(this.conso_fond_propres[1].cmt_tarc).replace(/\s+/g, "");
      var cct_tc = String(this.conso_fond_propres[2].cct_tarc).replace(/\s+/g, "");
      var tt = Number(cmt_tc) + Number(cct_tc) + Number(clt_tc);
      return Number(tt);
    },
    totalPondCmtCct: function totalPondCmtCct() {
      // total_pond_cmt_cct
      var clt_pnd = String(this.conso_fond_propres[0].clt_pond).replace(/\s+/g, "");
      var cmt_pnd = String(this.conso_fond_propres[1].cmt_pond).replace(/\s+/g, "");
      var cct_pnd = String(this.conso_fond_propres[2].cct_pond).replace(/\s+/g, "");
      // if(cmt_pnd <= 0 || cct_pnd <= 0 || clt_pnd <=0 ) return 0;

      var tt = Number(cmt_pnd) + Number(cct_pnd) + Number(clt_pnd);
      return Number(tt);
    },
    totalAprCmtCct: function totalAprCmtCct() {
      // total_apr_cmt_cct
      // cmt_apr
      // cct_apr
      var clt_t_apr = String(this.conso_fond_propres[0].clt_apr).replace(/\s+/g, "");
      var cmt_t_apr = String(this.conso_fond_propres[1].cmt_apr).replace(/\s+/g, "");
      var cct_t_apr = String(this.conso_fond_propres[2].cct_apr).replace(/\s+/g, "");
      if (cmt_t_apr <= 0 || cct_t_apr <= 0 || clt_t_apr <= 0) return 0;
      var tt = Number(cmt_pnd) + Number(cct_pnd) + Number(clt_t_apr);
      return Number(tt);
    },
    // totalExpoCct(){
    //     const cct_bil = String(this.conso_fond_propres[2].cct_bilan).replace(
    //                 /\s+/g,
    //                 ""
    //             );
    // },
    // totalExpoCmt(){
    //     const cmt_bil = String(this.conso_fond_propres[1].cmt_bilan).replace(
    //                 /\s+/g,
    //                 ""
    //             );
    // },
    // totalExpoClt(){
    //     const clt_bil =  String(this.conso_fond_propres[0].clt_bilan).replace(
    //                 /\s+/g,
    //                 ""
    //             );
    // },
    totalPartPourcentageActionnariats: function totalPartPourcentageActionnariats() {
      var trying = this.actionnariats.map(function (el) {
        el.pourcentage_participation = String(el.pourcentage_participation).replace(/\s+/g, "");
        if (!el.pourcentage_participation) return 0;
        return Number(el.pourcentage_participation);
      }).reduce(function (sum, curr) {
        return sum + curr;
      }, 0);
      if (trying > 100) return "100.00";
      return trying.toLocaleString("fr-FR");
    },
    ActionnariatMaxNumber: function ActionnariatMaxNumber() {
      var restant = 100 - Number(this.totalPartPourcentageActionnariats);
      if (restant < 0) return 0;
      return restant;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dgr/DGR-FAR4.vue?vue&type=template&id=d1c0f034&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dgr/DGR-FAR4.vue?vue&type=template&id=d1c0f034&scoped=true ***!
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
      id: "ca4-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                             " + _vm._s(_vm.tb_display_name) + " : Consommation en Fond Propres du montant sollicité\n                         ")]), _vm._v(" "), _c("div", {
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
  }, [_vm.seen1 ? _c("div", {
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
      id: "cct"
    }
  }, [_vm._v("\n                                Consommation en Fond Propres du montant sollicité\n                                "), _c("chevron-up-icon", {
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
    staticClass: "border border-3 p-2 pt-0 text-center"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-content-around"
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
      id: "manual"
    },
    domProps: {
      checked: _vm.formDataToBeWatched.mode_calcul == "M",
      value: "M"
    },
    on: {
      click: function click($event) {
        return _vm.setModeCalculConso($event, "mode_calcul");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-label",
    attrs: {
      "for": "manual"
    }
  }, [_vm._v("Manuel")])]), _vm._v(" "), _c("div", {
    staticClass: "m-2 mr-4"
  }, [_c("input", {
    staticClass: "form-check-input",
    staticStyle: {
      width: "20px",
      height: "20px"
    },
    attrs: {
      type: "checkbox",
      id: "auto"
    },
    domProps: {
      checked: _vm.formDataToBeWatched.mode_calcul == "A",
      value: "A"
    },
    on: {
      click: function click($event) {
        return _vm.setModeCalculConso($event, "mode_calcul");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-label",
    attrs: {
      "for": "auto"
    }
  }, [_vm._v(" Automatique ")])])])]), _vm._v(" "), _c("br"), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.formDataToBeWatched.mode_calcul == "A",
      expression: "formDataToBeWatched.mode_calcul == 'A'"
    }],
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered mb-1"
  }, [_vm._m(1), _vm._v(" "), _c("tbody", [_vm._m(2), _vm._v(" "), _vm._l(_vm.conso_fps, function (cp, index) {
    return _c("tr", {
      key: index
    }, [_c("td", [_c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: cp.libelle,
        expression: "cp.libelle"
      }],
      staticClass: "form-select",
      "class": {
        equipe: cp.comeFrom == "tb_19003"
      },
      staticStyle: {
        width: "250px"
      },
      attrs: {
        title: cp.libelle
      },
      on: {
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(cp, "libelle", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, _vm.handleInput]
      }
    }, [_c("option", {
      domProps: {
        value: ""
      }
    }), _vm._v(" "), _vm._l(_vm.tous_les_lignes_filtres_, function (line, indexL) {
      return _c("option", {
        key: indexL + "4z_1",
        domProps: {
          value: line.libelle
        }
      }, [_vm._v(_vm._s(line.libelle))]);
    }), _vm._v(" "), (cp === null || cp === void 0 ? void 0 : cp.ligne_mixte) != "" ? _c("option", {
      domProps: {
        value: cp.libelle
      }
    }, [_vm._v(_vm._s(cp.libelle))]) : _vm._e()], 2)]), _vm._v(" "), _c("td", [_c("currency-input", {
      staticClass: "form-control",
      "class": {
        equipe: cp.comeFrom == "tb_19003"
      },
      staticStyle: {
        "min-width": "150px"
      },
      attrs: {
        "default-typing": false,
        type: "text"
      },
      on: {
        change: _vm.handleInput
      },
      model: {
        value: cp.bilan,
        callback: function callback($$v) {
          _vm.$set(cp, "bilan", $$v);
        },
        expression: "\n                                                   cp.bilan\n                                                "
      }
    })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
      staticClass: "form-control",
      "class": {
        equipe: cp.comeFrom == "tb_19003"
      },
      staticStyle: {
        "min-width": "150px"
      },
      attrs: {
        "default-typing": false,
        type: "text"
      },
      on: {
        change: _vm.handleInput
      },
      model: {
        value: cp.hor_bilan,
        callback: function callback($$v) {
          _vm.$set(cp, "hor_bilan", $$v);
        },
        expression: "\n                                                   cp.hor_bilan\n                                                "
      }
    })], 1), _vm._v(" "), _c("td", [_c("div", {
      staticClass: "btn-group w-100"
    }, [_c("input-group", {
      staticStyle: {
        "min-width": "150px"
      },
      scopedSlots: _vm._u([{
        key: "input",
        fn: function fn() {
          return [_c("currency-input", {
            staticClass: "form-control text-end",
            "class": {
              equipe: cp.comeFrom == "tb_19003" && _vm.convertInt(cp.hor_bilan) != 0
            },
            staticStyle: {
              "min-width": "90px",
              "border-radius": "unset",
              "padding-right": "7px",
              "border-end-start-radius": "5px",
              "border-start-start-radius": "5px"
            },
            attrs: {
              "default-typing": false,
              readonly: _vm.convertInt(cp.hor_bilan) == 0,
              "float": ""
            },
            on: {
              change: _vm.handleInput
            },
            model: {
              value: cp.fcec,
              callback: function callback($$v) {
                _vm.$set(cp, "fcec", $$v);
              },
              expression: "\n                                                                    cp.fcec"
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
    })], 1)]), _vm._v(" "), _c("td", [_c("currency-input", {
      staticStyle: {
        "min-width": "150px"
      },
      attrs: {
        readonly: "",
        "default-typing": false
      },
      on: {
        input: _vm.handleInput
      },
      model: {
        value: cp.hb_apres_fcec,
        callback: function callback($$v) {
          _vm.$set(cp, "hb_apres_fcec", $$v);
        },
        expression: "\n                                                    cp.hb_apres_fcec\n                                                "
      }
    })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
      staticClass: "form-control",
      staticStyle: {
        "min-width": "150px"
      },
      attrs: {
        "default-typing": false,
        type: "text",
        disabled: ""
      },
      on: {
        change: _vm.handleInput
      },
      model: {
        value: cp.total_exposition,
        callback: function callback($$v) {
          _vm.$set(cp, "total_exposition", $$v);
        },
        expression: "\n                                                   cp.total_exposition\n                                                "
      }
    })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
      staticClass: "form-control",
      "class": {
        equipe: cp.comeFrom == "tb_19003"
      },
      staticStyle: {
        "min-width": "150px"
      },
      attrs: {
        "default-typing": false,
        type: "text"
      },
      on: {
        change: _vm.handleInput
      },
      model: {
        value: cp.tarc,
        callback: function callback($$v) {
          _vm.$set(cp, "tarc", $$v);
        },
        expression: "\n                                                   cp.tarc\n                                                "
      }
    })], 1), _vm._v(" "), _c("td", [_c("div", {
      staticClass: "btn-group w-100"
    }, [_c("input-group", {
      staticStyle: {
        "min-width": "150px"
      },
      scopedSlots: _vm._u([{
        key: "input",
        fn: function fn() {
          return [_c("currency-input", {
            staticClass: "form-control text-end",
            "class": {
              equipe: cp.cameFrom == "tb_19003"
            },
            staticStyle: {
              "min-width": "90px",
              "border-radius": "unset",
              "padding-right": "7px",
              "border-end-start-radius": "5px",
              "border-start-start-radius": "5px"
            },
            attrs: {
              "default-typing": false,
              id: "clt_pond",
              "float": ""
            },
            on: {
              change: _vm.handleInput
            },
            model: {
              value: cp.pond,
              callback: function callback($$v) {
                _vm.$set(cp, "pond", $$v);
              },
              expression: "\n                                                                cp.pond"
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
    })], 1)]), _vm._v(" "), _c("td", [_c("currency-input", {
      staticStyle: {
        "min-width": "150px"
      },
      attrs: {
        readonly: "",
        "default-typing": false
      },
      on: {
        input: _vm.handleInput
      },
      model: {
        value: cp.apr,
        callback: function callback($$v) {
          _vm.$set(cp, "apr", $$v);
        },
        expression: "\n                                                    cp.apr\n                                                "
      }
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
          return _vm.addMoreConso("conso_fps");
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
          return _vm.removeConso(index);
        }
      }
    }, [_c("trash-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1)])]);
  }), _vm._v(" "), _c("tr", [_c("td", [_vm._v("\n                                                TOTAL\n                                            ")]), _vm._v(" "), _c("td", [_c("currency-input", {
    attrs: {
      readonly: "",
      "default-typing": false
    },
    on: {
      change: _vm.handleInput
    },
    model: {
      value: _vm.formDataToBeWatched.total_bilan_cmt_cct,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "total_bilan_cmt_cct", $$v);
      },
      expression: "\n                                                    formDataToBeWatched.total_bilan_cmt_cct\n                                                "
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
      value: _vm.formDataToBeWatched.total_hor_bilan_cmt_cct,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "total_hor_bilan_cmt_cct", $$v);
      },
      expression: "\n                                                    formDataToBeWatched.total_hor_bilan_cmt_cct\n                                                "
    }
  })], 1), _vm._v(" "), _vm._m(3), _vm._v(" "), _c("td", [_c("currency-input", {
    attrs: {
      readonly: "",
      "default-typing": false
    },
    on: {
      change: _vm.handleInput
    },
    model: {
      value: _vm.formDataToBeWatched.total_hb_apres_fcec_cmt_cct,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "total_hb_apres_fcec_cmt_cct", $$v);
      },
      expression: "\n                                                    formDataToBeWatched.total_hb_apres_fcec_cmt_cct\n                                                "
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
      value: _vm.formDataToBeWatched.total_total_exposition_cmt_cct,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "total_total_exposition_cmt_cct", $$v);
      },
      expression: "\n                                                    formDataToBeWatched.total_total_exposition_cmt_cct\n                                                "
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
      value: _vm.formDataToBeWatched.total_tarc_cmt_cct,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "total_tarc_cmt_cct", $$v);
      },
      expression: "\n                                                    formDataToBeWatched.total_tarc_cmt_cct\n                                                "
    }
  })], 1), _vm._v(" "), _vm._m(4), _vm._v(" "), _c("td", [_c("currency-input", {
    attrs: {
      readonly: "",
      "default-typing": false
    },
    on: {
      change: _vm.handleInput
    },
    model: {
      value: _vm.formDataToBeWatched.total_apr_cmt_cct,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "total_apr_cmt_cct", $$v);
      },
      expression: "\n                                                        formDataToBeWatched.total_apr_cmt_cct\n                                                    "
    }
  })], 1)]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "text-right vertical-middle fw-bold",
    attrs: {
      colspan: "7"
    }
  }, [_vm._v("Consommation fonds propres")]), _vm._v(" "), _c("td", [_c("div", {
    staticClass: "btn-group w-100"
  }, [_c("input-group", {
    staticStyle: {
      "min-width": "150px"
    },
    scopedSlots: _vm._u([{
      key: "input",
      fn: function fn() {
        return [_c("currency-input", {
          staticClass: "form-control text-end",
          staticStyle: {
            "min-width": "90px",
            "border-radius": "unset",
            "padding-right": "7px",
            "border-end-start-radius": "5px",
            "border-start-start-radius": "5px"
          },
          attrs: {
            "default-typing": false,
            "float": ""
          },
          on: {
            change: _vm.handleInput
          },
          model: {
            value: _vm.formDataToBeWatched.ligne_conso_fond_propre_pour,
            callback: function callback($$v) {
              _vm.$set(_vm.formDataToBeWatched, "ligne_conso_fond_propre_pour", $$v);
            },
            expression: "formDataToBeWatched.ligne_conso_fond_propre_pour"
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
    }], null, false, 2920121830)
  })], 1)]), _vm._v(" "), _c("td", [_c("currency-input", {
    staticStyle: {
      width: "150px"
    },
    attrs: {
      readonly: "",
      "default-typing": false
    },
    on: {
      input: _vm.handleInput
    },
    model: {
      value: _vm.formDataToBeWatched.ligne_conso_fond_propre,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "ligne_conso_fond_propre", $$v);
      },
      expression: "formDataToBeWatched.ligne_conso_fond_propre"
    }
  })], 1), _vm._v(" "), _c("td")])], 2)]), _vm._v(" "), _c("br")]), _vm._v(" "), _c("br"), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.formDataToBeWatched.mode_calcul == "M",
      expression: "formDataToBeWatched.mode_calcul == 'M'"
    }],
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered mb-1"
  }, [_c("tbody", _vm._l(_vm.conso_fond_propre, function (conso_fp, index) {
    return _c("tr", {
      key: index
    }, [_c("td", {
      staticStyle: {
        color: "green"
      }
    }, [_c("label", [_c("b", [_vm._v(_vm._s(conso_fp.name))]), _c("span", {
      staticClass: "text-danger"
    }, [_vm._v("*")])])]), _vm._v(" "), _c("td", [_c("currency-input", {
      staticClass: "form-control",
      "class": {
        equipe: (conso_fp === null || conso_fp === void 0 ? void 0 : conso_fp.comeFrom) == "tb_19003"
      },
      staticStyle: {
        "min-width": "150px"
      },
      attrs: {
        "default-typing": false,
        type: "text"
      },
      on: {
        change: _vm.handleInput
      },
      model: {
        value: conso_fp.montant,
        callback: function callback($$v) {
          _vm.$set(conso_fp, "montant", $$v);
        },
        expression: "conso_fp.montant\n                                                    "
      }
    })], 1), _vm._v(" "), _c("td", [Number(String(conso_fp.montant).replace(/\s+/g, "")) > 0 ? _c("div", {
      staticClass: "d-flex align-items-center"
    }, [_c("div", [conso_fp.files > 0 ? _c("span", {
      staticClass: "p-1 px-2 mx-2 text-nowrap",
      staticStyle: {
        "background-color": "rgb(44, 62, 80)",
        color: "white",
        "font-size": "13px",
        "border-radius": "5px",
        "margin-left": "0!important"
      }
    }, [_vm._v(_vm._s(conso_fp.files > 0 ? conso_fp.files + " fichier(s) uploadé(s)" : ""))]) : _vm._e()]), _vm._v(" "), conso_fp.name.trim() != "" ? _c("div", [_c("button", {
      staticClass: "btn shadow-md text-white",
      staticStyle: {
        cursor: "pointer",
        background: "#2c3e50",
        width: "26px",
        "font-size": "13px",
        padding: "1px"
      },
      attrs: {
        type: "button",
        name: "button",
        "data-toggle": "tooltip",
        title: "Cliquer ici pour uploader ou voir le(s) fichier(s)"
      },
      on: {
        click: function click($event) {
          return _vm.handleDoubleClickOrClick($event, index);
        }
      }
    }, [_c("i", {
      staticClass: "icofont-attachment"
    })])]) : _vm._e()]) : _vm._e()])]);
  }), 0)])])]), _vm._v(" "), _c("br"), _vm._v(" "), _c("br"), _vm._v(" "), _c("div", {
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
      value: _vm.formDataToBeWatched.comment_conso_fond_propre,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "comment_conso_fond_propre", $$v);
      },
      expression: "formDataToBeWatched.comment_conso_fond_propre"
    }
  })], 1)])]) : _c("div", {
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
      id: "cct"
    }
  }, [_vm._v("\n                                Consommation en Fond Propres du montant sollicité\n                                "), _c("chevron-down-icon", {
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
  }, [_vm._v("\n                     Fermer le tableau\n                 ")])])]) : _c("div", {
    staticClass: "card card-width-height"
  }, [_c("br"), _vm._v(" "), _c("div", {
    staticClass: "card-header hdc pb-0 pt-2"
  }, [_c("h3", {
    staticClass: "head",
    attrs: {
      id: "ca4-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                             " + _vm._s(_vm.tb_display_name) + " : Consommation en Fond Propres du montant sollicité\n                         ")]), _vm._v(" "), _c("div", {
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
  }, [_vm._v("\n                             Instruction - " + _vm._s(_vm.tb_display_name) + " : Analyse de la couverture en garenties\n                         ")]), _vm._v(" "), _c("button", {
    staticClass: "btn-close",
    attrs: {
      type: "button",
      "data-bs-dismiss": "modal",
      "aria-label": "Close"
    }
  })]), _vm._v(" "), _vm._m(6), _vm._v(" "), _vm._m(7)])])])]), _vm._v(" "), _c("note-modal", {
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
    staticClass: "d-flex justify-content-center text-center"
  }, [_c("span", {
    staticClass: "bg-white d-flex text-center",
    staticStyle: {
      "margin-top": "-12px"
    }
  }, [_vm._v("Choix du mode de calcul de la Consommation en Fond propres ?")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("td", {
    staticClass: "text-center text-uppercase",
    attrs: {
      rowspan: "2"
    }
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_c("b", [_vm._v("Nature de la facilité")])])]), _vm._v(" "), _c("th", {
    staticClass: "text-center text-uppercase"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_c("b", [_vm._v("Bilan")])])]), _vm._v(" "), _c("th", {
    staticClass: "text-center text-uppercase"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_c("b", [_vm._v("Hors Bilan")])])]), _vm._v(" "), _c("th", {
    staticClass: "text-center text-uppercase"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_c("b", [_vm._v("FCEC")])])]), _vm._v(" "), _c("th", {
    staticClass: "text-center text-uppercase"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_c("b", [_vm._v("HB après  FCECC")])])]), _vm._v(" "), _c("th", {
    staticClass: "text-center text-uppercase"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_c("b", [_vm._v("Total Exposition avant TARC")])])]), _vm._v(" "), _c("th", {
    staticClass: "text-center text-uppercase"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_c("b", [_vm._v("TARC")])])]), _vm._v(" "), _c("th", {
    staticClass: "text-center text-uppercase"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_c("b", [_vm._v("Pond")])])]), _vm._v(" "), _c("th", {
    staticClass: "text-center text-uppercase"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_c("b", [_vm._v("APR")])])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", [_c("td", [_c("label", {
    attrs: {
      "for": ""
    }
  })]), _vm._v(" "), _c("td", {
    staticClass: "text-center"
  }, [_vm._v("\n                                                bilan (a)\n                                            ")]), _vm._v(" "), _c("td", {
    staticClass: "text-center"
  }, [_vm._v("\n                                               hors bilan (b)\n                                            ")]), _vm._v(" "), _c("td", {
    staticClass: "text-center"
  }, [_vm._v("\n                                               c\n                                            ")]), _vm._v(" "), _c("td", {
    staticClass: "text-center"
  }, [_vm._v("\n                                                (d)=(b)*(c )\n                                            ")]), _vm._v(" "), _c("td", {
    staticClass: "text-center"
  }, [_vm._v("\n                                                (e) = (d) + (a)\n                                            ")]), _vm._v(" "), _c("td", {
    staticClass: "text-center"
  }, [_vm._v("\n                                                (f)\n                                            ")]), _vm._v(" "), _c("td", {
    staticClass: "text-center"
  }, [_vm._v("\n                                                (g)\n                                            ")]), _vm._v(" "), _c("td", {
    staticClass: "text-center"
  }, [_vm._v("\n                                                (h)=(e-f)*(g)\n                                            ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", [_c("div", {
    staticClass: "btn-group w-100 btn-group-inputPercent",
    attrs: {
      id: "total_fcec_cmt_cct"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", [_c("div", {
    staticClass: "btn-group w-100 btn-group-inputPercent",
    attrs: {
      id: "total_pond_cmt_cct"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", [_c("b", [_vm._v("Commentaire sur la consommation en Fond Propre du montant sollicité")])]);
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

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dgr/DGR-FAR4.vue?vue&type=style&index=0&id=d1c0f034&lang=css&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dgr/DGR-FAR4.vue?vue&type=style&index=0&id=d1c0f034&lang=css&scoped=true ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "\ninput[data-v-d1c0f034] {\n     /*border: 1px solid red;*/\n}\n*[data-v-d1c0f034] {\n     font-family: \"Google sans\";\n}\nlabel[data-v-d1c0f034] {\n     height: 10px;\n     font-size: 13px;\n}\ninput[data-v-d1c0f034],\n select[data-v-d1c0f034] {\n     height: 35px;\n     border-color: #34495e;\n     color: #57606f;\n     font-size: 13px;\n     font-weight: bold;\n}\n.card-width-height[data-v-d1c0f034] {\n     width: 100%;\n     height: 100%;\n}\n.head[data-v-d1c0f034] {\n     color: #f1f2f6;\n     font-size: 22px;\n}\n.hdc[data-v-d1c0f034] {\n     background-color: #57606f;\n}\n\n /*  List element styles */\n#menu ul[data-v-d1c0f034],\n #menu li[data-v-d1c0f034] {\n     list-style: none;\n     padding: 0;\n     margin: 0;\n     display: inline-block;\n}\n#menu li[data-v-d1c0f034] {\n     padding: 5px 0px;\n}\n\n /* Main menu links */\n#menu a[data-v-d1c0f034]:link,\n #menu a[data-v-d1c0f034]:visited,\n #menu a[data-v-d1c0f034]:active {\n     text-decoration: none;\n     color: var(--link2-color);\n     padding: 5px 7px;\n     font-weight: bold;\n     position: relative;\n     z-index: 2;\n}\n#menu a[data-v-d1c0f034]:hover,\n #menu a[data-v-d1c0f034]:focus {\n     background-color: var(--link-color);\n     color: var(--link2-color);\n     text-decoration: underline;\n}\n\n /* The submenu links container*/\n.subdrop[data-v-d1c0f034] {\n     background: var(--bg-color);\n     height: 0;\n     border-top: 0;\n     min-width: 100%;\n     left: 0;\n     margin: 0;\n     position: absolute;\n     text-align: left;\n     top: 100%;\n     visibility: hidden;\n     height: 1px;\n     overflow: hidden;\n     z-index: 10;\n}\n\n /* Dropdown Parent Link Style */\n.droplink[data-v-d1c0f034] {\n     display: inline-block;\n     min-width: -moz-fit-content;\n     min-width: fit-content;\n     position: relative;\n}\ntd input[data-v-d1c0f034],\nselect[data-v-d1c0f034] {\n    /* height: 35px; */\n    border-color: #34495e;\n    color: #57606f;\n    font-size: 13px;\n    font-weight: bold;\n}\n /* List elements within the dropdown */\n.subdrop li[data-v-d1c0f034] {\n     display: block !important;\n     padding: 0 !important;\n}\n\n /* Links within the dropdown list */\n.subdrop a[data-v-d1c0f034] {\n     display: block;\n     padding: 12px 20px;\n     white-space: nowrap;\n}\n\n /* Allows links to show on hover/focus and through keyboard navigation via focus-within */\n.droplink:hover .subdrop[data-v-d1c0f034] {\n     visibility: visible;\n     height: auto;\n     z-index: 11;\n}\n\n /* Separate these to avoid IE completely ignoring the css above */\n.droplink:focus-within .subdrop[data-v-d1c0f034] {\n     visibility: visible;\n     height: auto;\n     z-index: 11;\n}\n.relook-header[data-v-d1c0f034] {\n    color: #000;\n    background-color: #f4f3f3;\n    padding: 2px;\n    border-bottom: 1px solid #b6b8bb;\n}\n.equipe[data-v-d1c0f034]{\n    background: #00ffff21;\n    color: #000;\n}\n.badge-sm[data-v-d1c0f034] {\n     display: inline-block;\n     width: 15px;\n     height: 15px;\n     background: rgba(255, 0, 0, 0.882);\n     color: white;\n     font-size: 12px;\n     font-weight: 500;\n     border-radius: 100%;\n     position: absolute;\n     top: -20%;\n     left: 55%;\n     text-align: center;\n}\n ", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dgr/DGR-FAR4.vue?vue&type=style&index=0&id=d1c0f034&lang=css&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dgr/DGR-FAR4.vue?vue&type=style&index=0&id=d1c0f034&lang=css&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DGR_FAR4_vue_vue_type_style_index_0_id_d1c0f034_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DGR-FAR4.vue?vue&type=style&index=0&id=d1c0f034&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dgr/DGR-FAR4.vue?vue&type=style&index=0&id=d1c0f034&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DGR_FAR4_vue_vue_type_style_index_0_id_d1c0f034_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DGR_FAR4_vue_vue_type_style_index_0_id_d1c0f034_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/contreanalyse/nsia/filiale/dgr/DGR-FAR4.vue":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/nsia/filiale/dgr/DGR-FAR4.vue ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DGR_FAR4_vue_vue_type_template_id_d1c0f034_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DGR-FAR4.vue?vue&type=template&id=d1c0f034&scoped=true */ "./resources/js/components/contreanalyse/nsia/filiale/dgr/DGR-FAR4.vue?vue&type=template&id=d1c0f034&scoped=true");
/* harmony import */ var _DGR_FAR4_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DGR-FAR4.vue?vue&type=script&lang=js */ "./resources/js/components/contreanalyse/nsia/filiale/dgr/DGR-FAR4.vue?vue&type=script&lang=js");
/* harmony import */ var _DGR_FAR4_vue_vue_type_style_index_0_id_d1c0f034_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DGR-FAR4.vue?vue&type=style&index=0&id=d1c0f034&lang=css&scoped=true */ "./resources/js/components/contreanalyse/nsia/filiale/dgr/DGR-FAR4.vue?vue&type=style&index=0&id=d1c0f034&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DGR_FAR4_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _DGR_FAR4_vue_vue_type_template_id_d1c0f034_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _DGR_FAR4_vue_vue_type_template_id_d1c0f034_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "d1c0f034",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/contreanalyse/nsia/filiale/dgr/DGR-FAR4.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/contreanalyse/nsia/filiale/dgr/DGR-FAR4.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/nsia/filiale/dgr/DGR-FAR4.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DGR_FAR4_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DGR-FAR4.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dgr/DGR-FAR4.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DGR_FAR4_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/contreanalyse/nsia/filiale/dgr/DGR-FAR4.vue?vue&type=style&index=0&id=d1c0f034&lang=css&scoped=true":
/*!*************************************************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/nsia/filiale/dgr/DGR-FAR4.vue?vue&type=style&index=0&id=d1c0f034&lang=css&scoped=true ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DGR_FAR4_vue_vue_type_style_index_0_id_d1c0f034_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DGR-FAR4.vue?vue&type=style&index=0&id=d1c0f034&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dgr/DGR-FAR4.vue?vue&type=style&index=0&id=d1c0f034&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/contreanalyse/nsia/filiale/dgr/DGR-FAR4.vue?vue&type=template&id=d1c0f034&scoped=true":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/nsia/filiale/dgr/DGR-FAR4.vue?vue&type=template&id=d1c0f034&scoped=true ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DGR_FAR4_vue_vue_type_template_id_d1c0f034_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DGR_FAR4_vue_vue_type_template_id_d1c0f034_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DGR_FAR4_vue_vue_type_template_id_d1c0f034_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DGR-FAR4.vue?vue&type=template&id=d1c0f034&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dgr/DGR-FAR4.vue?vue&type=template&id=d1c0f034&scoped=true");


/***/ })

}]);