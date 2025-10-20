"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_workspace_nsia_WorkspaceOnGACAnlCenter_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dgr/DGR-FAR1.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dgr/DGR-FAR1.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/ContextMenu */ "./resources/js/components/shared/ContextMenu.vue");
/* harmony import */ var _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/ContextMenuItem */ "./resources/js/components/shared/ContextMenuItem.vue");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../services/auth.service */ "./resources/js/services/auth.service.js");
/* harmony import */ var _services_credit_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../services/credit.service */ "./resources/js/services/credit.service.js");
/* harmony import */ var _helpers_indexedDB__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../helpers/indexedDB */ "./resources/js/helpers/indexedDB.js");
/* harmony import */ var _helpers_indexedDB__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_helpers_indexedDB__WEBPACK_IMPORTED_MODULE_5__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
    MoreVerticalIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.MoreVerticalIcon,
    ChevronUpIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.ChevronUpIcon,
    ChevronDownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.ChevronDownIcon,
    ContextMenu: _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_0__["default"],
    ContextMenuItem: _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_1__["default"],
    AirplayIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.AirplayIcon,
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.TrashIcon,
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.PlusIcon,
    BookOpenIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.BookOpenIcon
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
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["default"].loadUserData().then(function (res) {
              _this.authcheck = true;
              _this.authcheckUsr = res.data;
              _this.authcheckStatus = res.status;
              _this.formDataToBeWatched.analyste_credit_groupe = _this.authcheckUsr.name;
            })["catch"](function (err) {
              _this.loadWithError(err);
            });
          case 9:
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
      seen5: true,
      credits: [],
      clients: [],
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
      formDataToBeWatched: {
        notation_interne: "",
        notation_externe: "",
        analyste_credit_groupe: "",
        grand_risque: "",
        partie_liee: "",
        inhabituel: "",
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
      indice_client: null,
      denomination_client: null,
      secteur_activite: null,
      notation_interne: null,
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
    setTauxCredVars: function setTauxCredVars() {
      if (parseFloat(this.formDataToBeWatched.taux_credit_propose) > 100) {
        this.formDataToBeWatched.taux_credit_propose = 100;
      }
    },
    loadRetrieved: function loadRetrieved() {
      var _this$meta_data$dossi2, _this$meta_data$dossi3, _this$meta_data$dossi4, _this$meta_data$dossi5;
      var lentb = this.meta_data["dossier_credit"]["tbs_in_use"];
      var createdKey = this.tb_name;
      var createdKeyArr = createdKey.split("tb");
      createdKey = "cred_pub_tb_" + createdKeyArr[1];
      this.indice_client = (_this$meta_data$dossi2 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi2 === void 0 || (_this$meta_data$dossi2 = _this$meta_data$dossi2[this.credpub00]) === null || _this$meta_data$dossi2 === void 0 ? void 0 : _this$meta_data$dossi2.matricule_client;
      this.denomination_client = (_this$meta_data$dossi3 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi3 === void 0 || (_this$meta_data$dossi3 = _this$meta_data$dossi3[this.credpub00]) === null || _this$meta_data$dossi3 === void 0 ? void 0 : _this$meta_data$dossi3.denomination_client;
      this.secteur_activite = (_this$meta_data$dossi4 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi4 === void 0 || (_this$meta_data$dossi4 = _this$meta_data$dossi4[this.credpub00]) === null || _this$meta_data$dossi4 === void 0 ? void 0 : _this$meta_data$dossi4.secteur_activite;
      this.notation_interne = (_this$meta_data$dossi5 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi5 === void 0 || (_this$meta_data$dossi5 = _this$meta_data$dossi5[this.credpub00]) === null || _this$meta_data$dossi5 === void 0 ? void 0 : _this$meta_data$dossi5.note_edane;
      if (this.formDataToBeWatched.grand_risque == '') {
        var _this$meta_data$dossi6, _this$meta_data$dossi0;
        if ((_this$meta_data$dossi6 = this.meta_data["dossier_credit"]) !== null && _this$meta_data$dossi6 !== void 0 && _this$meta_data$dossi6.cred_pub_tb_19001) {
          var _this$meta_data$dossi7, _this$meta_data$dossi8, _this$meta_data$dossi9;
          this.formDataToBeWatched.grand_risque = (_this$meta_data$dossi7 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi7 === void 0 || (_this$meta_data$dossi7 = _this$meta_data$dossi7.cred_pub_tb_19001) === null || _this$meta_data$dossi7 === void 0 ? void 0 : _this$meta_data$dossi7.grand_risque;
          this.formDataToBeWatched.partie_liee = (_this$meta_data$dossi8 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi8 === void 0 || (_this$meta_data$dossi8 = _this$meta_data$dossi8.cred_pub_tb_19001) === null || _this$meta_data$dossi8 === void 0 ? void 0 : _this$meta_data$dossi8.partie_liee;
          this.formDataToBeWatched.inhabituel = (_this$meta_data$dossi9 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi9 === void 0 || (_this$meta_data$dossi9 = _this$meta_data$dossi9.cred_pub_tb_19001) === null || _this$meta_data$dossi9 === void 0 ? void 0 : _this$meta_data$dossi9.inhabituel;
        }
        if ((_this$meta_data$dossi0 = this.meta_data["dossier_credit"]) !== null && _this$meta_data$dossi0 !== void 0 && _this$meta_data$dossi0.cred_pub_tb_17001) {
          var _this$meta_data$dossi1, _this$meta_data$dossi10, _this$meta_data$dossi11;
          this.formDataToBeWatched.grand_risque = (_this$meta_data$dossi1 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi1 === void 0 || (_this$meta_data$dossi1 = _this$meta_data$dossi1.cred_pub_tb_17001) === null || _this$meta_data$dossi1 === void 0 ? void 0 : _this$meta_data$dossi1.grand_risque;
          this.formDataToBeWatched.partie_liee = (_this$meta_data$dossi10 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi10 === void 0 || (_this$meta_data$dossi10 = _this$meta_data$dossi10.cred_pub_tb_17001) === null || _this$meta_data$dossi10 === void 0 ? void 0 : _this$meta_data$dossi10.partie_liee;
          this.formDataToBeWatched.inhabituel = (_this$meta_data$dossi11 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi11 === void 0 || (_this$meta_data$dossi11 = _this$meta_data$dossi11.cred_pub_tb_17001) === null || _this$meta_data$dossi11 === void 0 ? void 0 : _this$meta_data$dossi11.inhabituel;
        }
      }
      if (lentb.length > 0) {
        var _this$meta_data$dossi12;
        if (this.meta_data["dossier_credit"][createdKey] != undefined) {
          this.formDataToBeWatched = this.meta_data["dossier_credit"][createdKey];
          if (this.meta_data["dossier_credit"][createdKey]["actionnariats"] != "") {
            this.actionnariats = this.meta_data["dossier_credit"][createdKey]["actionnariats"];
          }
        }
        // Close table by default
        this.defaultRetract(false, (_this$meta_data$dossi12 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi12 === void 0 ? void 0 : _this$meta_data$dossi12.applied_templ_id);
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
    handleInput: function handleInput(evt) {
      this.formDataToBeWatched["actionnariats"] = this.actionnariats;
      this.formDataToBeWatched.total_part = this.totalPartPourcentageActionnariats;
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

            // this.indice_client =  this.dossier_credit?.[this.credpub00]?.matricule_client
            // this.denomination_client = this.dossier_credit?.[this.credpub00]?.denomination_client
            // this.secteur_activite = this.dossier_credit?.[this.credpub00]?.secteur_activite
            // this.notation_interne = this.dossier_credit?.[this.credpub00]?.note_edane
            // // this.classe_risque = this.dossier_credit.[this.credpub00]?.classe_risque
            // // this.matricule_client = this.dossier_credit.[this.credpub00]?.matricule_client
            // // this.annee_referentielle = this.dossier_credit.[this.credpub00]?.annee_referentielle
            // this.formDataToBeWatched.analyste_credit_groupe = this.authcheckUsr.name

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
        id: "ca1-head"
      };
      // console.log(p)
      this.$emit("load-buffer", p);
    },
    credData: function credData(res) {
      this.credits = res.data;
    },
    onSlctMatCli: function onSlctMatCli(obj) {
      var _this$formDataToBeWat,
        _this2 = this;
      this.formDataToBeWatched.matricule_client = obj.matcli;
      this.formDataToBeWatched.nom_client = obj.nomcli;
      this.autoRenamer();
      _services_credit_service__WEBPACK_IMPORTED_MODULE_4__["default"].encours((_this$formDataToBeWat = this.formDataToBeWatched) === null || _this$formDataToBeWat === void 0 ? void 0 : _this$formDataToBeWat.matricule_client).then(function (res) {
        _this2.encoursData(res);
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
      var _this3 = this;
      _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["default"].loadUserData().then(function (res) {
        _this3.send2Backend0(res);
      })["catch"](function (err) {
        _this3.loadWithError(err);
      });
    },
    instruction2: function instruction2(id) {
      var id0 = '#' + id;
      window.$(id0).modal('show');
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
    }
  },
  computed: {
    totalPartPourcentageActionnariats: function totalPartPourcentageActionnariats() {
      var _this$actionnariats;
      var trying = (_this$actionnariats = this.actionnariats) === null || _this$actionnariats === void 0 ? void 0 : _this$actionnariats.map(function (el) {
        el.pourcentage_participation = String(el.pourcentage_participation).replace(/\s+/g, "");
        if (!el.pourcentage_participation) return 0;
        return Number(el.pourcentage_participation);
      }).reduce(function (sum, curr) {
        return sum + curr;
      }, 0);
      if (trying > 100) return "100.00";
      return trying === null || trying === void 0 ? void 0 : trying.toLocaleString("fr-FR");
    },
    ActionnariatMaxNumber: function ActionnariatMaxNumber() {
      var restant = 100 - Number(this.totalPartPourcentageActionnariats);
      if (restant < 0) return 0;
      return restant;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK0.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK0.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/ContextMenu */ "./resources/js/components/shared/ContextMenu.vue");
/* harmony import */ var _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/ContextMenuItem */ "./resources/js/components/shared/ContextMenuItem.vue");
/* harmony import */ var _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vueform/multiselect/dist/multiselect.vue2 */ "./node_modules/@vueform/multiselect/dist/multiselect.vue2.js");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../services/auth.service */ "./resources/js/services/auth.service.js");
/* harmony import */ var _services_credit_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../services/credit.service */ "./resources/js/services/credit.service.js");
/* harmony import */ var _services_connects_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../services/connects.service */ "./resources/js/services/connects.service.js");
/* harmony import */ var _services_proxy_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../services/proxy.service */ "./resources/js/services/proxy.service.js");
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../helpers/helper */ "./resources/js/helpers/helper.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _helpers_indexedDB__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../helpers/indexedDB */ "./resources/js/helpers/indexedDB.js");
/* harmony import */ var _helpers_indexedDB__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_helpers_indexedDB__WEBPACK_IMPORTED_MODULE_9__);
/* provided dependency */ var process = __webpack_require__(/*! process/browser.js */ "./node_modules/process/browser.js");












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
  name: "Checklist_primaire",
  display: "Checklist primaire",
  components: {
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_10__.PlusIcon,
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_10__.TrashIcon,
    MoreVerticalIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_10__.MoreVerticalIcon,
    ChevronUpIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_10__.ChevronUpIcon,
    ChevronDownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_10__.ChevronDownIcon,
    ContextMenu: _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_0__["default"],
    ContextMenuItem: _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_1__["default"],
    Multiselect: _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_2__["default"],
    AirplayIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_10__.AirplayIcon
  },
  props: {
    meta_data: Object,
    tb_name: String,
    tb_display_name: String
  },
  created: function created() {},
  mounted: function mounted() {
    var _this = this;
    this.tableClosedOrOpened();
    this.loadRetrieved();
    this.loadTbAttrs();
    EventBus.$on("created-extra-file-template", function (data) {
      _this.gac_check_list_diligeances.forEach(function (element, index) {
        var _data$template;
        var template_name = "Pièce(s) jointe(s) -gac_check_list_diligeances" + index + "_" + _this.$route.params.templateId;
        if (template_name == (data === null || data === void 0 || (_data$template = data.template) === null || _data$template === void 0 ? void 0 : _data$template.name)) {
          var _data$template2, _data$template3, _data$template4;
          _this.gac_check_list_diligeances[index]["template"] = {
            id: data === null || data === void 0 || (_data$template2 = data.template) === null || _data$template2 === void 0 ? void 0 : _data$template2.id,
            name: data === null || data === void 0 || (_data$template3 = data.template) === null || _data$template3 === void 0 ? void 0 : _data$template3.name,
            slug: data === null || data === void 0 || (_data$template4 = data.template) === null || _data$template4 === void 0 ? void 0 : _data$template4.slug
          };
          _this.handleInput();
        }
      });
    });
    EventBus.$on("updated-extra-file-upload", function (data) {
      _this.getFiles();
    });
    this.getFiles();
  },
  computed: {},
  data: function data() {
    var vm = this;
    return {
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
      connectsHost: _services_connects_service__WEBPACK_IMPORTED_MODULE_6__["default"].loadablehost(),
      duree_credit0: null,
      mode_paiement0: null,
      listingNote: false,
      contextList: [
      // Ajouter note
      {
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
      meta_parseable: {
        cred_pub_key: this.meta_data["cred_pub_key"],
        tb_name: this.tb_name
      },
      gac_check_list_diligeances: [{
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_11__["default"])(),
        name: "S'assurer du respect du circuit de validation du dossier de crédit",
        value: "",
        parent: "",
        numero_compte: "",
        ss_obj: false,
        checked: false,
        disabled: false,
        files: 0,
        template: "",
        comment: "",
        from_monteur_doss: false
      }, {
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_11__["default"])(),
        name: "Vérifier l'existence dans le dossier de crédit, du cachet de la DAJC attestant du recueil des garanties ",
        value: "",
        parent: "",
        numero_compte: "",
        ss_obj: false,
        checked: false,
        disabled: false,
        files: 0,
        template: "",
        comment: "",
        from_monteur_doss: false
      }, {
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_11__["default"])(),
        name: "S’assurer de la signature de la convention de crédit par les parties",
        value: "",
        parent: "",
        numero_compte: "",
        ss_obj: true,
        checked: false,
        disabled: false,
        files: 0,
        template: "",
        comment: "",
        from_monteur_doss: false
      }, {
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_11__["default"])(),
        name: "Vérifier que la fiche CR3 est correctement renseignée et signée par l’initiateur et son responsable",
        value: "",
        parent: "",
        numero_compte: "",
        ss_obj: true,
        checked: false,
        disabled: false,
        files: 0,
        template: "",
        comment: "",
        from_monteur_doss: false
      }, {
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_11__["default"])(),
        name: "S'assurer de l'existence dans le dossier de crédit, de l'attestation de règlement des frais notariés (pour les prêts immobiliers)",
        value: "",
        parent: "",
        numero_compte: "",
        ss_obj: true,
        checked: false,
        disabled: false,
        files: 0,
        template: "",
        comment: "",
        from_monteur_doss: false
      }, {
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_11__["default"])(),
        name: "S'assurer de l'existence de tous les éléments requis pour la constitution d'un dossier de crédit, selon la procédure",
        value: "",
        parent: "",
        numero_compte: "",
        ss_obj: true,
        checked: false,
        disabled: false,
        files: 0,
        template: "",
        comment: "",
        from_monteur_doss: false
      }, {
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_11__["default"])(),
        name: "S'assurer du respect des conditions de mise en place de tirage (décaissement des fonds) telles que mentionnées dans la convention de crédt",
        value: "",
        parent: "",
        numero_compte: "",
        ss_obj: true,
        checked: false,
        disabled: false,
        files: 0,
        template: "",
        comment: "",
        from_monteur_doss: false
      }, {
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_11__["default"])(),
        name: "S'assurer de la conformité de la signature du client (Cachet + Visa du gestionnaire)",
        value: "",
        parent: "",
        numero_compte: "",
        ss_obj: true,
        checked: false,
        disabled: false,
        files: 0,
        template: "",
        comment: "",
        from_monteur_doss: false
      }],
      formDataToBeWatched: {
        notes: [],
        gac_check_list_diligeances: [],
        bref_commentaire: ""
      },
      files: [],
      countries: []
    };
  },
  methods: {
    handleDoubleClickOrClick: function handleDoubleClickOrClick(event, index, element) {
      var _this2 = this;
      EventBus.$emit("open-extra-file-explorer");
      setTimeout(function () {
        EventBus.$emit("data-extra-file-explorer", {
          name: "Pièce(s) jointe(s) {(*)}gac_check_list_diligeances" + index + "_" + _this2.$route.params.templateId,
          view: element === null || element === void 0 ? void 0 : element.from_monteur_doss
        });
      }, 500);
    },
    getFiles: function getFiles() {
      var _this3 = this;
      _services_proxy_service__WEBPACK_IMPORTED_MODULE_7__["default"].proxyEbapis({
        url: this.connectsHost + 'api/get-files',
        method: 'POST',
        data: {
          file_identity: this.meta_data["dossier_credit"].cred_pub_key
        }
      })
      //this.$axios.post(this.connectsHost + 'api/get-files', { file_identity: this.meta_data["dossier_credit"].cred_pub_key })
      .then(function (res) {
        var _res$data$data, _res$data$data2;
        // console.log("resres55",res);
        res.data = JSON.parse(res.data);
        if (((_res$data$data = res.data.data) === null || _res$data$data === void 0 ? void 0 : _res$data$data.length) > 0 || ((_res$data$data2 = res.data.data) === null || _res$data$data2 === void 0 ? void 0 : _res$data$data2.length) != null) {
          _this3.files = res.data.data;
          // console.log("filesfiles",this.files);
          _this3.gac_check_list_diligeances.forEach(function (element, index) {
            var count = 0;
            _this3.files.forEach(function (file) {
              var _element$template;
              if ((file === null || file === void 0 ? void 0 : file.extra_file_template_id) != null && (element === null || element === void 0 || (_element$template = element.template) === null || _element$template === void 0 ? void 0 : _element$template.id) == (file === null || file === void 0 ? void 0 : file.extra_file_template_id)) {
                count++;
              }
            });
            _this3.gac_check_list_diligeances[index]['files'] = count;
            _this3.handleInput();
          });
        }
      })["catch"](function (err) {
        console.error(err);
      });
    },
    tableClosedOrOpened: function tableClosedOrOpened() {
      this.seen = this.fetchClosedTables(this.tb_name + this.meta_data["cred_pub_key"]);
    },
    openNotesModal: function openNotesModal() {
      var listing = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.listingNote = listing;
      this.$modal.show(this.tb_name);
    },
    checkboxValCashCall: function checkboxValCashCall(event, index) {
      if (event.target.checked) {
        this.gac_check_list_diligeances[index]["value"] = event.target.value;
      } else {
        this.gac_check_list_diligeances[index]["value"] = "";
      }
      this.handleInput();
    },
    loadRetrieved: function loadRetrieved() {
      var _this4 = this;
      var lentb = this.meta_data["dossier_credit"]["tbs_in_use"];
      var createdKey = this.tb_name;
      var createdKeyArr = createdKey.split("tb");
      createdKey = "cred_pub_tb_" + createdKeyArr[1];

      // this.defaultRetract(
      //     false,
      //     this.meta_data["dossier_credit"]?.applied_templ_id
      // );

      if (this.meta_data["dossier_credit"][createdKey] == undefined) {
        // this.formDataToBeWatched =
        //     this.meta_data["dossier_credit"]["cred_pub_tb_300101"];

        if (!['', null, undefined].includes(this.meta_data["dossier_credit"]["cred_pub_tb_300101"])) {
          var _this$meta_data$dossi;
          if (((_this$meta_data$dossi = this.meta_data["dossier_credit"]["cred_pub_tb_300101"]) === null || _this$meta_data$dossi === void 0 ? void 0 : _this$meta_data$dossi.gac_check_list_diligeances) != "") {
            var _this$meta_data$dossi2;
            this.gac_check_list_diligeances = (_this$meta_data$dossi2 = this.meta_data["dossier_credit"]["cred_pub_tb_300101"]) === null || _this$meta_data$dossi2 === void 0 ? void 0 : _this$meta_data$dossi2["gac_check_list_diligeances"];
          }
        }
      }
      if (lentb.length > 0) {
        if (this.meta_data["dossier_credit"][createdKey] != undefined) {
          var _this$meta_data$dossi3;
          this.formDataToBeWatched = this.meta_data["dossier_credit"][createdKey];
          if (((_this$meta_data$dossi3 = this.meta_data["dossier_credit"][createdKey]) === null || _this$meta_data$dossi3 === void 0 ? void 0 : _this$meta_data$dossi3.gac_check_list_diligeances) != "") {
            var _this$meta_data$dossi4;
            this.gac_check_list_diligeances = (_this$meta_data$dossi4 = this.meta_data["dossier_credit"][createdKey]) === null || _this$meta_data$dossi4 === void 0 ? void 0 : _this$meta_data$dossi4["gac_check_list_diligeances"];
          }
          if (!['', null, undefined].includes(this.meta_data["dossier_credit"]["cred_pub_tb_300101"])) {
            var _this$meta_data$dossi5;
            if (((_this$meta_data$dossi5 = this.meta_data["dossier_credit"]["cred_pub_tb_300101"]) === null || _this$meta_data$dossi5 === void 0 ? void 0 : _this$meta_data$dossi5.gac_check_list_diligeances) != "") {
              var _this$meta_data$dossi6;
              var gac_check_list_diligeances_from_monteur_doss = (_this$meta_data$dossi6 = this.meta_data["dossier_credit"]["cred_pub_tb_300101"]) === null || _this$meta_data$dossi6 === void 0 ? void 0 : _this$meta_data$dossi6["gac_check_list_diligeances"];
              this.gac_check_list_diligeances.forEach(function (el, ind) {
                if (el !== null && el !== void 0 && el.from_monteur_doss) {
                  var found = gac_check_list_diligeances_from_monteur_doss.find(function (el0) {
                    return (el0 === null || el0 === void 0 ? void 0 : el0.id) == (el === null || el === void 0 ? void 0 : el.id);
                  });
                  if (found) {
                    _this4.gac_check_list_diligeances[ind] = found;
                  }
                }
              });
              var new_lists = [];
              gac_check_list_diligeances_from_monteur_doss.forEach(function (el, ind) {
                var found = _this4.gac_check_list_diligeances.find(function (el0) {
                  return (el0 === null || el0 === void 0 ? void 0 : el0.id) == (el === null || el === void 0 ? void 0 : el.id);
                });
                if ([null, undefined].includes(found)) {
                  _this4.gac_check_list_diligeances.splice(14, 0, el);
                }
              });
              this.handleInput();
            }
          }
        }
      }
    },
    convertNumber: function convertNumber(valeur) {
      return Number(String(valeur).replace(/\s+/g, ""));
    },
    // AJOUTER
    launchAutoSaver: function launchAutoSaver() {
      var _this5 = this;
      _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["default"].loadUserData().then(function (res) {
        _this5.send2Backend(res, 0, 0);
      })["catch"](function (err) {
        _this5.loadWithError(err);
      });
    },
    addMore: function addMore() {
      this.gac_check_list_diligeances.push({
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_11__["default"])(),
        name: "",
        value: "",
        parent: "",
        numero_compte: "",
        ss_obj: false,
        checked: true,
        disabled: false,
        files: 0,
        template: "",
        comment: "",
        from_monteur_doss: false
      });
    },
    remove: function remove(index) {
      this.gac_check_list_diligeances.splice(index, 1);
      this.handleInput();
    },
    somX3: function somX3(ob, key) {
      var som = 0;
      ob.filter(function (elm) {
        var _elm$key;
        som += parseInt((_elm$key = elm[key]) === null || _elm$key === void 0 ? void 0 : _elm$key.toString().replace(/\s/g, ""));
      });
      return som;
    },
    removeByKey: function removeByKey(index, removeList) {
      this[removeList].splice(index, 1);
    },
    loadTbAttrs: function loadTbAttrs() {
      var l = [];
      var topdivel = this.$refs.topdiv;
      // let k = document.querySelectorAll('.subdiv')
      var k = document.querySelectorAll(".subdiv" + this.tb_name);
      if (k.length > 0) {
        k.forEach(function (e) {
          l.push(e.innerText);
        });
      }
      var p = {
        name_of_title: topdivel.innerText,
        list_of_content: l,
        id: "dcp-ppo7-head"
      };
      this.$emit("load-buffer", p);
    },
    retract: function retract() {
      this.seen = !this.seen;
      if (this.meta_data && this.meta_data["cred_pub_key"]) {
        var a = {
          tb_name: this.tb_name + this.meta_data["cred_pub_key"],
          status: this.seen
        };
        EventBus.$emit("savedclosed-table", a);
      }
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
    handleInput: function handleInput() {
      this.formDataToBeWatched.gac_check_list_diligeances = this.gac_check_list_diligeances;
    },
    retract1: function retract1() {
      this.seen1 = !this.seen1;
    },
    retract2: function retract2() {
      this.seen2 = !this.seen2;
    },
    retract3: function retract3() {
      this.seen3 = !this.seen3;
    },
    retract4: function retract4() {
      this.seen4 = !this.seen4;
    },
    deleteTB: function deleteTB() {
      if (confirm("Êtes-vous sûr de vouloir supprimer ce tableau ?")) {
        this.$emit("delete-tb", {
          tb_name: this.tb_name
        });
      }
    }
  },
  watch: {
    formDataToBeWatched: {
      handler: function handler(newVal, oldVal) {
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK1.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK1.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../services/auth.service */ "./resources/js/services/auth.service.js");
/* harmony import */ var _services_credit_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../services/credit.service */ "./resources/js/services/credit.service.js");
/* harmony import */ var _services_connects_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../services/connects.service */ "./resources/js/services/connects.service.js");
/* harmony import */ var _services_proxy_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../services/proxy.service */ "./resources/js/services/proxy.service.js");
/* harmony import */ var _johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @johmun/vue-tags-input */ "./node_modules/@johmun/vue-tags-input/dist/vue-tags-input.js");
/* harmony import */ var _johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_5__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }









window.$ = window.jQuery = __webpack_require__(/*! jquery/dist/jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "fiche-lecture",
  display: "Fiche de lecture",
  components: {
    MoreVerticalIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.MoreVerticalIcon,
    ChevronUpIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.ChevronUpIcon,
    ChevronDownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.ChevronDownIcon,
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.PlusIcon,
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.TrashIcon,
    AirplayIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.AirplayIcon,
    BookOpenIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.BookOpenIcon,
    VueTagsInput: (_johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_5___default())
  },
  props: _defineProperty({
    meta_data: Object,
    tb_name: String,
    tb_display_name: String
  }, "tb_display_name", String),
  created: function created() {
    var _pub_workflow;
    var _this$meta_data$dossi = this.meta_data["dossier_credit"],
      stage = _this$meta_data$dossi.pub_workflow_curr_stage,
      pub_workflow = _this$meta_data$dossi.pub_workflow;
    var sup_id = (_pub_workflow = pub_workflow[stage + 1]) === null || _pub_workflow === void 0 ? void 0 : _pub_workflow.responsible_id;
    var roles = ['r472oAxtaFJSlsh5', 'DUxMP2ZQheGFreQt5z2s', 'yYnev325ob1vDkgq', '2jFxY9ujYHqtMG88KDRR', 'gOLOzQVDyl2eoBLO'];
    var users_id = [];
    if (!['', null, undefined].includes(sup_id)) {
      users_id.push(sup_id);
    }
    this.getUsersDefault(roles, users_id);
  },
  mounted: function mounted() {
    var _this = this;
    this.loadRetrieved();
    this.loadTbAttrs(); // charge les attributs + sous attributs des tables
    this.tableClosedOrOpened();
    EventBus.$on('send-fiche', function (data) {
      console.log(data);
      _this.$modal.hide('fiche_lecture');
    });
  },
  computed: {
    filteredUsers: function filteredUsers() {
      this.receivers = this.users.map(function (el) {
        return _objectSpread({
          text: "".concat(el.name, " ( ").concat(el.role[0].display_name, " )")
        }, el);
      });
      return this.receivers;
    },
    filteredUsersDefault: function filteredUsersDefault() {
      var users = this.usersDefault.map(function (el) {
        return _objectSpread({
          text: "".concat(el.name, " ( ").concat(el.role[0].display_name, " )")
        }, el);
      });
      return users;
    },
    defaultActors: function defaultActors() {
      var _pub_workflow2;
      var caf = this.filteredUsersDefault.find(function (el) {
        return ['r472oAxtaFJSlsh5', "DUxMP2ZQheGFreQt5z2s"].includes(el.role_id);
      });
      var ca = this.filteredUsersDefault.find(function (el) {
        return (el === null || el === void 0 ? void 0 : el.role_id) == 'yYnev325ob1vDkgq';
      });
      var _this$meta_data$dossi2 = this.meta_data["dossier_credit"],
        stage = _this$meta_data$dossi2.pub_workflow_curr_stage,
        pub_workflow = _this$meta_data$dossi2.pub_workflow;
      var roles_dajc = ["2eLuPN7RikH2a7LuF4iN"];
      var responsibles = this.filteredUsersDefault.filter(function (el) {
        return roles_dajc.includes(el === null || el === void 0 ? void 0 : el.role_id);
      });
      var sup_id = (_pub_workflow2 = pub_workflow[stage + 1]) === null || _pub_workflow2 === void 0 ? void 0 : _pub_workflow2.responsible_id;
      var sup = this.filteredUsersDefault.find(function (el) {
        return el.id == sup_id;
      });
      var actors = [caf, ca, sup];
      if (!['', null, undefined].includes(responsibles) && responsibles.length > 0) {
        actors = actors.concat(responsibles);
      }
      return actors.filter(function (el) {
        return el != null;
      });
    }
  },
  data: function data() {
    var vm = this;
    return {
      isLoding: {
        0: false
      },
      buttonStatus: {
        0: true
      },
      filterInput: "",
      tagValue: undefined,
      tagging: false,
      users: [],
      taggedUsers: [],
      autocompleteItems: [],
      tag: {
        0: ""
      },
      tg: "",
      seens: {
        0: true
      },
      seen1: true,
      tags: {
        0: []
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
      }, {
        title: "Supprimer",
        icon: "icofont icofont-trash",
        handler: this.startDeletingTbFromContext,
        disabled: false
      }],
      ebapisHost: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__["default"].host,
      authcheck: false,
      authcheckUsr: null,
      authcheckStatus: null,
      watchInPause: false,
      initLoad: true,
      seen: true,
      listingNote: false,
      dossier_credit: null,
      toDelete: '',
      meta_parseable: {
        cred_pub_key: this.meta_data["cred_pub_key"],
        tb_name: this.tb_name
      },
      display_response: false,
      formDataToBeWatched: {
        fiche_suivis: "",
        notes: []
      },
      fiche_suivis: [{
        fiche: [{
          question: "",
          reponse: "",
          is_answered: false
        }],
        is_answered: false,
        update_at: "",
        created_at: new Date(),
        created_by: "",
        sender: "",
        receivers: "",
        has_notified: false
      }],
      isResponse: false,
      debounce: null,
      searchUser: false,
      usersDefault: []
    };
  },
  methods: {
    determineSRC: function determineSRC() {
      this.getUsers();
      var src = this.users.filter(function (el) {
        if ((el === null || el === void 0 ? void 0 : el.role_id) == 'tyJLxuAh6F2DJR6e') {
          return el;
        }
      });
      src = src[0];
      return src;
    },
    manageButton: function manageButton(index) {
      console.log("indexxx", index);
      console.log("isLoding", this.isLoding);
      console.log("buttonStatus", this.buttonStatus);
      if (this.isLoding[index] == false && this.buttonStatus[index] == false) {
        return true;
      }
      return false;
    },
    getTag: function getTag(index) {
      this.tg = this.tag[index];
    },
    retractDynamique: function retractDynamique(index) {
      this.$set(this.seens, index, !this.seens[index]);
    },
    setColor: function setColor(elt) {
      var _elt$;
      if (((_elt$ = elt[1]) === null || _elt$ === void 0 ? void 0 : _elt$.reponse) == "") {
        return "text-dark";
      }
    },
    addMoreFiche: function addMoreFiche() {
      var receivers = this.defaultActors;
      var notified_users = _toConsumableArray(receivers);
      this.tags[this.fiche_suivis.length] = _toConsumableArray(receivers);
      this.fiche_suivis[0].sender = this.authcheckUsr;
      this.fiche_suivis.push({
        fiche: [{
          question: "",
          reponse: "",
          is_answered: false
        }],
        is_answered: false,
        update_at: "",
        created_at: new Date(),
        created_by: "",
        sender: this.authcheckUsr,
        receivers: receivers,
        notified_users: notified_users,
        has_notified: false
      });
      this.$set(this.seens, this.fiche_suivis.length - 1, true);
      this.$set(this.isLoding, this.fiche_suivis.length - 1, false);
      this.$set(this.buttonStatus, this.fiche_suivis.length - 1, true);
      console.log("isLoding", this.isLoding);
    },
    removeFiche: function removeFiche(index) {
      this.toDelete = index;
      this.$modal.show("confirm_supp_fiche_suivis", index);
    },
    deleteFiche: function deleteFiche(index) {
      this.fiche_suivis.splice(index, 1);
      this.$modal.hide("confirm_supp_fiche_suivis");
      this.toDelete = '';
    },
    closeModal: function closeModal() {
      this.$modal.hide("confirm_supp_fiche_suivis");
    },
    // submitFicheSuivi(item) {
    //     const loaders = {};
    //     loaders[item.id] = true;
    //     this.ficheLoading = Object.assign({}, this.ficheLoading, loaders);
    //     // console.log('item', item)
    //     item.content.receivers = this.tags
    //     item.content.sender = this.user
    //     Auth.loadUserData().then((res) => {
    //        this.$axios.post(this.ebapisHost + "creditbuilder/api/v1/save-fiche-suivi/", {
    //             cred_pub_key: this.cred_pub_key,
    //             sender: res.data,
    //             receivers: this.tags,
    //             fiche_suivis: item["content"],
    //             fiche_id: item.id - 1
    //         }).then((response) => {
    //             this.$toasted.show("Reponses sauvegardées avec succès");
    //             this.isLoding = false;
    //             loaders[item.id] = false;
    //             this.ficheLoading = Object.assign(
    //                 {},
    //                 this.ficheLoading,
    //                 loaders
    //             );
    //             this.$set(this.ficheLoading, item.id, false);
    //             this.buttonStatus = false;
    //             // this.NotifyUser(res.data, this.tags)
    //             // EventBus.$emit("savedclosed-table", a)
    //             // this.$forceUpdate();
    //             this.$emit("created")
    //         }).catch((error) => {
    //             console.log(error);
    //             this.isLoding = false;
    //             loaders[item.id] = false;
    //             this.ficheLoading = Object.assign(
    //                 {},
    //                 this.ficheLoading,
    //                 loaders
    //             );
    //             this.$set(this.ficheLoading, item.id, false);
    //         })
    //     })
    // },
    NotifyUser: function NotifyUser(index) {
      var _this$tags$index,
        _this2 = this;
      if (((_this$tags$index = this.tags[index]) === null || _this$tags$index === void 0 ? void 0 : _this$tags$index.length) > 0) {
        this.$set(this.isLoding, index, true);
        _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["default"].loadUserData().then(function (res) {
          _this2.$axios.post(_this2.ebapisHost + "notifications/api/v1/questions-responses-notifications/", {
            cred_pub_key: _this2.meta_parseable["cred_pub_key"],
            sender: res.data,
            receivers: _this2.tags[index],
            what_tobe_notified: "FICHE-SUIVI"
          }).then(function (response) {
            _this2.tags = [];
            EventBus.$emit("message-send");
            _this2.$toasted.show("Message envoyé avec succès");
            _this2.$set(_this2.isLoding, index, false);
            _this2.$set(_this2.buttonStatus, index, false);
            _this2.formDataToBeWatched.fiche_suivis[index]["sender"] = res.data;
            _this2.formDataToBeWatched.fiche_suivis[index]["has_notified"] = true;
            _this2.fiche_suivis[index]["has_notified"] = true;
            EventBus.$emit('launch-bulk-save');
          })["catch"](function (error) {
            console.log(error);
          });
        })["catch"](function (err) {
          _this2.loadWithError(err);
        });
      } else {
        this.$toasted.show("Veuillez saisir le collaborateur à notifier");
      }
    },
    initFicheLecture: function initFicheLecture() {
      this.fiche_suivis = [[{
        question: "",
        niveau_risque: "",
        avis: ""
      }, {
        reponse: "",
        niveau_risque: "",
        avis: ""
      }]];
    },
    tableClosedOrOpened: function tableClosedOrOpened() {
      this.seen = this.fetchClosedTables(this.tb_name + this.meta_data['cred_pub_key']);
    },
    addMore: function addMore(index) {
      var _this$fiche_suivis$in;
      (_this$fiche_suivis$in = this.fiche_suivis[index]) === null || _this$fiche_suivis$in === void 0 || _this$fiche_suivis$in.fiche.push({
        question: "",
        reponse: "",
        is_answered: false
      });
      this.handleInput();
    },
    remove: function remove(index, idx) {
      this.fiche_suivis[index].fiche.splice(idx, 1);
      this.handleInput();
    },
    tagUser: function tagUser(user) {
      this.formDataToBeWatched.commentaire = this.formDataToBeWatched.commentaire.replace(this.formDataToBeWatched.commentaire.at(-1), '') + "<span class=' text-primary' style='color:#e67e22'>" + user.name + ' - ' + user.role_name + "</span> &nbsp;";
      this.tagValue = this.formDataToBeWatched.commentaire;
      this.taggedUsers.push(user);
      this.tagging = false;
      this.formDataToBeWatched.user = user;
    },
    pressAtKey: function pressAtKey(event) {
      this.tagging = true;
    },
    getUsers: function getUsers() {
      //    this.$axios.post(this.ebapisHost + "creditbuilder/api/v1/load-all-doc-users/", {
      //         cred_pub_key: this.meta_data?.cred_pub_key
      //     }).then((data) => {
      //         this.users = data.data.users
      //     }).catch(err => {
      //         console.dir(err)
      //     });
    },
    openNotesModal: function openNotesModal() {
      var listing = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.listingNote = listing;
      this.$modal.show(this.tb_name);
    },
    loadRetrieved: function loadRetrieved() {
      var lentb = this.meta_data["dossier_credit"]["tbs_in_use"];
      var createdKey = this.tb_name;
      var createdKeyArr = createdKey.split("tb");
      createdKey = "cred_pub_tb_" + createdKeyArr[1];
      if (lentb.length > 0) {
        if (this.meta_data["dossier_credit"][createdKey] != undefined) {
          this.formDataToBeWatched = this.meta_data["dossier_credit"][createdKey];
          if (this.meta_data["dossier_credit"][createdKey]["fiche_suivis"] != "") {
            this.fiche_suivis = this.formDataToBeWatched["fiche_suivis"];
            this.tags = this.fiche_suivis.reduce(function (cum, curr, index) {
              var data = {};
              data[index] = curr.notified_users;
              cum = _objectSpread(_objectSpread({}, cum), data);
              return cum;
            }, {});
            this.initLoding();
            this.initButtonStatus();
          }
        }
        // Close table by default
        // this.defaultRetract(false, this.meta_data["dossier_credit"]?.applied_templ_id)
      }
    },
    setTbVal: function setTbVal(val) {
      this.cred_pub_key = val;
    },
    loadWithError: function loadWithError(err) {},
    send2Backend: function send2Backend(res, newVal, oldVal) {
      this.authcheck = true;
      this.authcheckUsr = res.data;
      this.authcheckStatus = res.status;
      if (this.authcheckStatus === 401) {}
      if (this.authcheck === true) {
        this.$emit("autosaving");
        this.$axios.post(this.ebapisHost + "creditbuilder/api/v1/autosaving/", {
          user: this.authcheckUsr,
          meta_parseable: this.meta_parseable,
          filledData: this.formDataToBeWatched,
          loadDossier: true
        }).then(function (response) {
          this.$emit("autosaving");
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
    initLoding: function initLoding() {
      var _this3 = this;
      //console.log("initLoding", this.fiche_suivis)
      if (this.fiche_suivis != undefined) {
        this.fiche_suivis.forEach(function (element, key) {
          _this3.$set(_this3.isLoding, key, false);
        });
      }
    },
    initButtonStatus: function initButtonStatus() {
      var _this4 = this;
      if (this.fiche_suivis != undefined) {
        this.fiche_suivis.forEach(function (element, key) {
          _this4.$set(_this4.buttonStatus, key, true);
        });
      }
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
        id: "ca6-head"
      };
      this.$emit("load-buffer", p);
    },
    // SOMME DES MONTANTS
    somX3: function somX3(ob, key) {
      var som = 0;
      ob.filter(function (elm) {
        var result = String(elm[key]).replace(/\s+/g, "");
        if (result === "") {
          som += 0;
        } else {
          som += parseInt(result);
        }
      });
      return som;
    },
    somX4: function somX4(ob, key) {
      var som = 0;
      var val1 = ob.replace(/\s+/g, "");
      var val2 = key.replace(/\s+/g, "");
      som = val1 + val2;
      return som;
    },
    handleInput: function handleInput() {
      this.formDataToBeWatched.fiche_suivis = this.fiche_suivis;
      this.formDataToBeWatched.sender = this.authcheckUsr;
    },
    handleInput1: function handleInput1(evt, index) {
      this.fiche_suivis[index].receivers = this.tags[index];
      this.fiche_suivis[index].notified_users = this.tags[index];
      this.fiche_suivis[index].sender = this.authcheckUsr;
      this.handleInput();
    },
    setButton: function setButton(evt, index) {
      var _this5 = this;
      console.log("index", index);
      console.log("this.fiche_suivis", this.fiche_suivis);
      this.fiche_suivis.forEach(function (element) {
        element.fiche.forEach(function (elt) {
          if (elt.question != "") {
            _this5.$set(_this5.buttonStatus, index, true);
          }
        });
      });
    },
    instruction3: function instruction3(id) {
      var id0 = '#' + id;
      window.$(id0).modal('show');
    },
    updateTags: function updateTags(newTags, ficheIndex) {
      this.users = [];
      newTags = newTags.filter(function (el) {
        return el === null || el === void 0 ? void 0 : el.email;
      });
      this.tags[ficheIndex] = newTags;
    },
    getUsersDefault: function getUsersDefault(roles, users_id) {
      var _this$meta_data,
        _this6 = this;
      var url = this.ebapisHost + "creditbuilder/api/v1/load-all-doc-users/";
      var data = {
        "search": "",
        "limit": 10,
        "roles": roles,
        "users_id": users_id,
        "cred_pub_key": (_this$meta_data = this.meta_data) === null || _this$meta_data === void 0 ? void 0 : _this$meta_data.cred_pub_key
      };
      this.$axios.post(url, data).then(function (response) {
        var data = response.data.data;
        if (!['', null, undefined].includes(data) && data.length > 0) {
          _this6.usersDefault = data;
        }
        _this6.searchUser = false;
      })["catch"](function (error) {
        _this6.searchUser = false;
        console.warn('Oh. Something went wrong');
      });
    },
    initItems: function initItems() {
      var _this7 = this;
      if (this.tg.trim().length < 3) return;
      clearTimeout(this.debounce);
      this.debounce = setTimeout(function () {
        var _this7$meta_data;
        _this7.searchUser = true;
        var url = _this7.ebapisHost + "creditbuilder/api/v1/load-all-doc-users/";
        var data = {
          "search": _this7.tg,
          "limit": 10,
          "cred_pub_key": (_this7$meta_data = _this7.meta_data) === null || _this7$meta_data === void 0 ? void 0 : _this7$meta_data.cred_pub_key
        };
        _this7.$axios.post(url, data).then(function (response) {
          var data = response.data.data;
          var message = response.data.message;
          if (!['', null, undefined].includes(data) && data.length > 0) {
            _this7.users = data;
          } else {
            _this7.users = [];
            // this.$toasted.show(message, {
            //     duration: 5000
            // })
          }
          _this7.$axios.post('/api/search_user', {
            "search": _this7.tg,
            "limit": 10
          }).then(function (response) {
            var _others_users, _this7$users;
            var data = response.data.data;
            var message = response.data.message;
            var others_users = [];
            if (!['', null, undefined].includes(data) && data.length > 0) {
              others_users = data;
            } else {
              others_users = [];
            }
            if (((_others_users = others_users) === null || _others_users === void 0 ? void 0 : _others_users.length) > 0) {
              others_users.forEach(function (el) {
                var find = _this7.users.find(function (u) {
                  return (u === null || u === void 0 ? void 0 : u.id) == (el === null || el === void 0 ? void 0 : el.id);
                });
                if (['', null, undefined].includes(find)) {
                  _this7.users.push(el);
                }
              });
            }
            if (((_this7$users = _this7.users) === null || _this7$users === void 0 ? void 0 : _this7$users.length) == 0) {
              _this7.$toasted.show(message, {
                duration: 5000
              });
            }
            _this7.searchUser = false;
          })["catch"](function (error) {
            _this7.searchUser = false;
            console.warn('Oh. Something went wrong');
          });

          // this.searchUser = false
        })["catch"](function (error) {
          _this7.searchUser = false;
          console.warn('Oh. Something went wrong');
        });
      }, 800);
    }
  },
  watch: {
    formDataToBeWatched: {
      handler: function handler(newVal, oldVal) {
        this.autosaving(newVal, oldVal);
      },
      deep: true,
      immediate: true
    },
    filteredUsersDefault: function filteredUsersDefault() {
      if (this.fiche_suivis[0].receivers == "") {
        this.fiche_suivis[0].receivers = this.defaultActors;
        this.fiche_suivis[0].notified_users = this.defaultActors;
        this.tags[0] = this.defaultActors;
        this.fiche_suivis[0].sender = this.authcheckUsr;
        this.formDataToBeWatched.fiche_suivis = this.fiche_suivis;
      }
    },
    tg: 'initItems'
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK2.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK2.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/ContextMenu */ "./resources/js/components/shared/ContextMenu.vue");
/* harmony import */ var _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/ContextMenuItem */ "./resources/js/components/shared/ContextMenuItem.vue");
/* harmony import */ var _services_connects_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../services/connects.service */ "./resources/js/services/connects.service.js");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../services/auth.service */ "./resources/js/services/auth.service.js");
/* harmony import */ var _services_proxy_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../services/proxy.service */ "./resources/js/services/proxy.service.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }







window.$ = window.jQuery = __webpack_require__(/*! jquery/dist/jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "FichiersAnnexes",
  display: "FichiersAnnexes",
  components: {
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.PlusIcon,
    EyeIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.EyeIcon,
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.TrashIcon,
    MoreVerticalIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.MoreVerticalIcon,
    ChevronUpIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.ChevronUpIcon,
    ChevronDownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.ChevronDownIcon,
    ContextMenu: _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_0__["default"],
    ContextMenuItem: _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    meta_data: Object,
    tb_name: String,
    tb_display_name: String
  },
  created: function created() {},
  mounted: function mounted() {
    var _this = this;
    EventBus.$on("updated-extra-file-upload", function (data) {
      _this.fileToUpload = {
        file_name: '',
        file_url: ""
      };
      _this.getFiles();
    });
    this.tableClosedOrOpened();
    this.loadRetrieved();
    this.loadTbAttrs();
    _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["default"].loadUserData().then(function (res) {
      _this.userConnected = res.data.user_id;
      _this.authBeforeRequest(_this.getFiles);
    })["catch"](function (err) {
      _this.$toasted("Erreur vous n'êtes pas connecté.");
    });
  },
  computed: {},
  data: function data() {
    var _ref;
    var vm = this;
    return _ref = {
      authorizedExt: ["jpg", "png", "jpeg", "pdf", "PDF", "JPG", "PNG", "JPEG", "doc", "docx", "xlsx", "xls", "pptx", "ppt", "XLSX", "XLS", "PPTX", "PPT"],
      ebapisHost: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_3__["default"].host,
      httpHost: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_3__["default"].loadableHttpHost(),
      connectsHost: _services_connects_service__WEBPACK_IMPORTED_MODULE_2__["default"].loadablehost(),
      seen: true,
      userConnected: null,
      adding: "",
      rendedpdf: null,
      listingNote: false,
      fileToAddName: "",
      fileToAdd: ""
    }, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_ref, "adding", false), "currentFile", null), "isFullscreen", true), "files", ""), "deleteLoading", {}), "editLoading", {}), "uploadLoading", {}), "updating", {
      index: false
    }), "isLoading", true), "isUploading", false), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_ref, "fileToUpload", {
      file_name: '',
      file_url: "Gabarit"
    }), "selectedUpload", [{
      label: "Gabarit",
      "class": "selected-gray",
      id: 'gabarit'
    }]), "contextList", [
    // Ajouter note
    {
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
    }]), "meta_parseable", {
      cred_pub_key: this.meta_data['cred_pub_key'],
      tb_name: this.tb_name
    }), "formDataToBeWatched", {
      notes: [],
      files: []
    });
  },
  methods: {
    renderDoc: function renderDoc(url) {
      this.rendedpdf = url;
      this.$modal.show('renderpdf');
    },
    showRefs: function showRefs() {
      // console.log("refs", this.$refs)
    },
    tableClosedOrOpened: function tableClosedOrOpened() {
      this.seen = this.fetchClosedTables(this.tb_name + this.meta_data['cred_pub_key']);
    },
    openNotesModal: function openNotesModal() {
      var listing = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.listingNote = listing;
      this.$modal.show(this.tb_name);
    },
    fullscreen: function fullscreen(evt) {
      evt.target.requestFullscreen();
      this.isFullscreen = true;
      this.$toasted.show('Appuyez sur le boutton eschap pour sortir du mode plein écran');
    },
    preview: function preview(file) {
      this.currentFile = file;
      // this.$modal.show('preview1')
      var urlImage = this.httpHost + '://' + file.file_url;
      this.$modal.show('imagereader');
      EventBus.$emit('imagereader-url', urlImage);
    },
    openPDFReaderModal: function openPDFReaderModal(url) {
      this.$modal.show('pdfreader');
      EventBus.$emit('pdfreader-url', url);
    },
    downloadFile: function downloadFile(file) {
      var url = window.location.origin + '/file?f=' + file;
      window.open(url, '_blank');
    },
    authBeforeUpload: function authBeforeUpload(_ref2, index) {
      var _this2 = this;
      var id = _ref2.id,
        name = _ref2.name;
      var updating = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      if (updating) this.updating[index] = true;
      this.uploadLoading[index] = true;
      this.$set(this.uploadLoading, index, true);
      this.isUploading = true;
      _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["default"].loadUserData().then(function (res) {
        var _file$name;
        var user = res.data;
        _this2.userConnected = user.user_id;
        var limitSize = 512000 * 1024;
        var file = _this2.$refs[id].files[0];
        if (_this2.authorizedExt.includes(file === null || file === void 0 || (_file$name = file.name) === null || _file$name === void 0 ? void 0 : _file$name.split('.').at(-1))) {
          if (limitSize < file.size) {
            _this2.$toasted.show("La taille de ce fichier est plus élévé que la taille autorisée de 50 Mo.");
            _this2.isLoading = false;
            _this2.isUploading = false;
            return;
          }
          var data = new FormData();
          data.append('user_id', user.user_id);
          data.append('file_name', name);
          data.append('file_url', file);
          data.append('entity_id', user.type_entite);
          data.append('entity_name', user.nom_entite);
          data.append('application_id', user.app_id);
          data.append('dir_name', 'null');
          data.append('file_identity', _this2.meta_data.cred_pub_key);
          data.append('parameters', JSON.stringify({
            url: _this2.connectsHost + 'api/upload-file',
            method: 'POST'
          }));
          // this.uploadLoading[index] = false
          _this2.uploadFile(data, index);
          _this2.$refs[id].value = null;
        } else {
          _this2.$toasted.show("Le type de fichier choisi n'est pas autorisé. Veuillez choisir un autre fichier");
        }
        //   console.log("data:" , this.$refs[id][0].files[0])
      })["catch"](function (err) {
        _this2.uploadLoading[index] = false;
        _this2.isUploading = false;
        console.dir(err);
        // this.loadWithError(err)
      });
    },
    startUpdating: function startUpdating(index) {
      this.updating[index] = !Boolean(this.updating[index]);
      this.updating = _objectSpread({}, this.updating);
    },
    authBeforeUpdate: function authBeforeUpdate(_ref3, index) {
      var _this3 = this;
      var id = _ref3.id,
        name = _ref3.name;
      // if (updating) this.updating[index] = true
      this.uploadLoading[index] = true;
      _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["default"].loadUserData().then(function (res) {
        var user = res.data;
        var file = _this3.$refs[id][0].files[0];
        var data = new FormData();
        data.append('user_id', user.user_id);
        data.append('new_file', name);
        data.append('file_url', file);
        data.append('entity_id', user.type_entite);
        data.append('entity_name', user.nom_entite);
        data.append('application_id', user.app_id);
        data.append('file_identity', _this3.meta_data.cred_pub_key);
        data.append('parameters', JSON.stringify({
          url: _this3.connectsHost + 'api/update-file',
          method: 'POST'
        }));
        _this3.uploadLoading[index] = false;
        _this3.updateFile(data, index);
      })["catch"](function (err) {
        _this3.uploadLoading[index] = false;
        console.dir(err);
        _this3.loaloadWithError(err);
      });
    },
    addFileType: function addFileType() {
      // console.log("fileToUpload",this.fileToUpload)
      this.formDataToBeWatched.files = this.selectedUpload;
      this.selectedUpload.unshift(this.fileToAdd);
      // this.fileToUpload = this.fileToUpload.filter(el => el.label !== this.fileToAdd.label)
      this.fileToAdd = "";
      this.adding = false;
      //   this.fileToUpload = this.fileToUpload.filter(el => el.label !== this.fileToAdd.label)
      //   this.fileToAdd = ""
      //   this.adding = false
    },
    addNewFile: function addNewFile() {
      this.fileToUpload.push({
        nom: "",
        label: ""
      });
      //   if (this.adding) return
      //   this.adding = true
    },
    removeFile: function removeFile(index) {
      this.fileToUpload.splice(index, 1);
    },
    getFiles: function getFiles() {
      var _this4 = this;
      this.isLoading = true;
      _services_proxy_service__WEBPACK_IMPORTED_MODULE_5__["default"].proxyEbapis({
        url: this.connectsHost + 'api/get-files',
        method: 'POST',
        data: {
          file_identity: this.meta_data.cred_pub_key
        }
      })
      //this.$axios.post(this.connectsHost + 'api/get-files', { file_identity: this.meta_data.cred_pub_key })
      .then(function (res) {
        res.data = JSON.parse(res.data);
        _this4.files = res.data.data.filter(function (file) {
          return !file.file_type && file.extra_file_template_id == undefined && _this4.userConnected == file.user_id;
        });
        // console.log('file', this.files)
        // this.formDataToBeWatched.files = res.data.data

        var files_list = [];
        _this4.files.forEach(function (el) {
          var ext = el.file_url.split('.').at(-1).toLowerCase();
          el.file_url = el.file_url;
          el.ext = ext;
          if (el.extra_file_template_id == undefined) {
            files_list.push(el);
          }

          // console.log("slectedUplaod", this.selectedUpload)
          // this.selectedUpload.forEach((elem, index) => {
          //   if (elem.label === el.file_name) {
          //     this.selectedUpload[index].file = el
          //     this.selectedUpload = [...this.selectedUpload]
          //   }
          //   else {
          //     if (!Boolean(this.selectedUpload.map(selected => selected.label).includes(el.file_name))) {

          //       const toAdd = this.fileToUpload.find(element => el.file_name === element.label)
          //       this.fileToUpload.splice(this.fileToUpload.indexOf(toAdd), 1)
          //       toAdd.file = el
          //       this.selectedUpload.push(toAdd)

          //     }
          //   }
          // })
        });
        _this4.formDataToBeWatched.files = files_list;
        //   console.log("selectedUpload", this.selectedUpload)
        // this.$toasted.show('Fichier récupéré avec succès')
        _this4.isLoading = false;
      })["catch"](function (err) {
        console.dir(err);
        _this4.isLoading = false;
      });
    },
    uploadFile: function uploadFile(data, index) {
      var _this5 = this;
      this.uploadLoading[index] = true;
      var headers = {
        'Content-Type': 'multipart/form-data'
      };
      _services_proxy_service__WEBPACK_IMPORTED_MODULE_5__["default"].proxyRequestByFormData(data, {
        callback: function callback() {}
      })
      //this.$axios.post(this.connectsHost + 'api/upload-file', data, headers)
      .then(function (res) {
        res.data = JSON.parse(res.data);
        var file = res.data.data;
        var ext = file.file_url.split('.').at(-1).toLowerCase();
        file.ext = ext;
        _this5.currentFile = _objectSpread({}, file);
        _this5.authBeforeRequest(_this5.getFiles);
        _this5.$toasted.show(res.data.message);
        /* this.fileToUpload = [{
              file_name: '',
              file_url: "",
          }] */
        _this5.fileToUpload = {
          file_name: '',
          file_url: ""
        };
        _this5.uploadLoading[index] = false;
        _this5.isUploading = false;
      })["catch"](function (err) {
        console.dir(err);
        _this5.uploadLoading[index] = false;
        _this5.isUploading = false;
      });
    },
    updateFile: function updateFile(data, index) {
      var _this6 = this;
      this.uploadLoading[index] = true;
      var headers = {
        'Content-Type': 'multipart/form-data'
      };
      _services_proxy_service__WEBPACK_IMPORTED_MODULE_5__["default"].proxyRequestByFormData(data, {
        callback: function callback() {}
      })
      //this.$axios.post(this.connectsHost + 'api/update-file', data, headers)
      .then(function (res) {
        res.data = JSON.parse(res.data);
        var file = res.data.data;
        var ext = file.file_url.split('.').at(-1).toLowerCase();
        file.ext = ext;
        _this6.currentFile = _objectSpread({}, file);
        _this6.authBeforeRequest(_this6.getFiles);
        _this6.$toasted.show(res.data.message);
        _this6.uploadLoading[index] = false;
        _this6.updating[index] = !Boolean(_this6.updating[index]);
        _this6.updating = _objectSpread({}, _this6.updating);
        _this6.fileToUpload = [{
          file_name: '',
          file_url: ""
        }];
      })["catch"](function (err) {
        console.dir(err);
        _this6.uploadLoading[index] = false;
      });
    },
    deleteFile: function deleteFile(data, file, index) {
      var _this7 = this;
      this.deleteLoading[index] = true;
      this.currentFile = file;
      var headers = {
        'Content-Type': 'multipart/form-data'
      };
      _services_proxy_service__WEBPACK_IMPORTED_MODULE_5__["default"].proxyEbapis({
        url: this.connectsHost + 'api/delete-file',
        method: 'POST',
        data: data
      })
      //this.$axios.post(this.connectsHost + 'api/delete-file', data, headers)
      .then(function (res) {
        res.data = JSON.parse(res.data);
        _this7.$toasted.show(res.data.message);
        _this7.deleteLoading[index] = false;
        _this7.getFiles();
        //delete upload.file
        //   this.fileToUpload.push(upload)
        //   this.selectedUpload = this.selectedUpload.filter(el => el.label != file.file_name)
        _this7.$toasted.show(res.data.message);
        _this7.currentFile = null;
        /* this.fileToUpload = [{
              file_name: '',
              file_url: "",
          }] */
        _this7.fileToUpload = {
          file_name: '',
          file_url: ""
        };
      })["catch"](function (err) {
        console.dir(err);
        _this7.deleteLoading[index] = false;
      });
    },
    loadRetrieved: function loadRetrieved() {
      var _this$meta_data$dossi2;
      var lentb = this.meta_data["dossier_credit"]["tbs_in_use"];
      var createdKey = this.tb_name;
      var createdKeyArr = createdKey.split("tb");
      createdKey = "cred_pub_tb_" + createdKeyArr[1];
      if (lentb.length > 0) {
        var _this$meta_data$dossi;
        if (this.meta_data["dossier_credit"][createdKey] != undefined) {
          this.formDataToBeWatched = this.meta_data["dossier_credit"][createdKey];
          //  this.fileToUpload.unshift(this.meta_data["dossier_credit"][createdKey]["files"])
        }
        // Close table by default
        this.defaultRetract(false, (_this$meta_data$dossi = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi === void 0 ? void 0 : _this$meta_data$dossi.applied_templ_id);
      }
      // Close table by default
      this.defaultRetract(false, (_this$meta_data$dossi2 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi2 === void 0 ? void 0 : _this$meta_data$dossi2.applied_templ_id);
    },
    // AJOUTER
    launchAutoSaver: function launchAutoSaver() {
      var _this8 = this;
      _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["default"].loadUserData().then(function (res) {
        _this8.send2Backend(res, 0, 0);
      })["catch"](function (err) {
        _this8.loadWithError(err);
      });
    },
    loadTbAttrs: function loadTbAttrs() {
      var l = [];
      var topdivel = this.$refs.topdiv;
      // let k = document.querySelectorAll('.subdiv')
      var k = document.querySelectorAll(".subdiv" + this.tb_name);
      if (k.length > 0) {
        k.forEach(function (e) {
          l.push(e.innerText);
        });
      }
      var p = {
        name_of_title: topdivel.innerText,
        list_of_content: l,
        id: "ts3-head"
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
    loadWithError: function loadWithError(err) {
      // window.location.href = "/login";
    },
    send2Backend: function send2Backend(res, newVal, oldVal) {
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
          this.$emit('autosaving');
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
    handleInput: function handleInput(evt) {},
    deleteTB: function deleteTB() {
      if (confirm('Êtes-vous sûr de vouloir supprimer ce tableau ?')) {
        this.$emit('delete-tb', {
          tb_name: this.tb_name
        });
      }
    },
    getRandomInt: function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    },
    handleDoubleClickOrClick: function handleDoubleClickOrClick(event, index) {
      var _this9 = this;
      EventBus.$emit("open-extra-file-explorer");
      setTimeout(function () {
        EventBus.$emit("data-extra-file-explorer", {
          name: _this9.fileToUpload.file_name,
          is_annexe: true
        });
      }, 500);
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK3.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK3.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/ContextMenu */ "./resources/js/components/shared/ContextMenu.vue");
/* harmony import */ var _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/ContextMenuItem */ "./resources/js/components/shared/ContextMenuItem.vue");
/* harmony import */ var _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vueform/multiselect/dist/multiselect.vue2 */ "./node_modules/@vueform/multiselect/dist/multiselect.vue2.js");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../services/auth.service */ "./resources/js/services/auth.service.js");
/* harmony import */ var _services_credit_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../services/credit.service */ "./resources/js/services/credit.service.js");
/* harmony import */ var _services_connects_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../services/connects.service */ "./resources/js/services/connects.service.js");
/* harmony import */ var _services_proxy_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../services/proxy.service */ "./resources/js/services/proxy.service.js");
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../helpers/helper */ "./resources/js/helpers/helper.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _helpers_indexedDB__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../helpers/indexedDB */ "./resources/js/helpers/indexedDB.js");
/* harmony import */ var _helpers_indexedDB__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_helpers_indexedDB__WEBPACK_IMPORTED_MODULE_9__);
/* provided dependency */ var process = __webpack_require__(/*! process/browser.js */ "./node_modules/process/browser.js");












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
  name: "Checklist_primaire",
  display: "Document de mise en plase",
  components: {
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_10__.PlusIcon,
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_10__.TrashIcon,
    MoreVerticalIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_10__.MoreVerticalIcon,
    ChevronUpIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_10__.ChevronUpIcon,
    ChevronDownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_10__.ChevronDownIcon,
    ContextMenu: _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_0__["default"],
    ContextMenuItem: _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_1__["default"],
    Multiselect: _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_2__["default"],
    AirplayIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_10__.AirplayIcon
  },
  props: {
    meta_data: Object,
    tb_name: String,
    tb_display_name: String
  },
  created: function created() {},
  mounted: function mounted() {
    var _this = this;
    this.tableClosedOrOpened();
    this.loadRetrieved();
    this.loadTbAttrs();
    EventBus.$on("created-extra-file-template", function (data) {
      _this.document_mise_en_places.forEach(function (element, index) {
        var _data$template;
        var template_name = "Pièce(s) jointe(s) -document_mise_en_places" + index + "_" + _this.$route.params.templateId + '_' + element.id;
        if (template_name == (data === null || data === void 0 || (_data$template = data.template) === null || _data$template === void 0 ? void 0 : _data$template.name)) {
          var _data$template2, _data$template3, _data$template4;
          _this.document_mise_en_places[index]["template"] = {
            id: data === null || data === void 0 || (_data$template2 = data.template) === null || _data$template2 === void 0 ? void 0 : _data$template2.id,
            name: data === null || data === void 0 || (_data$template3 = data.template) === null || _data$template3 === void 0 ? void 0 : _data$template3.name,
            slug: data === null || data === void 0 || (_data$template4 = data.template) === null || _data$template4 === void 0 ? void 0 : _data$template4.slug
          };
          _this.handleInput();
        }
      });
    });
    EventBus.$on("updated-extra-file-upload", function (data) {
      _this.getFiles();
    });
    this.getFiles();
  },
  computed: {},
  data: function data() {
    var vm = this;
    return {
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
      connectsHost: _services_connects_service__WEBPACK_IMPORTED_MODULE_6__["default"].loadablehost(),
      duree_credit0: null,
      mode_paiement0: null,
      listingNote: false,
      contextList: [
      // Ajouter note
      {
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
      meta_parseable: {
        cred_pub_key: this.meta_data["cred_pub_key"],
        tb_name: this.tb_name
      },
      document_mise_en_places: [{
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_11__["default"])(),
        name: "Fiche de mise en place",
        value: "",
        parent: "",
        numero_compte: "",
        ss_obj: true,
        checked: true,
        disabled: false,
        files: 0,
        template: "",
        comment: "",
        from_monteur_doss: false
      }, {
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_11__["default"])(),
        name: "Ticket d'autorisation",
        value: "",
        parent: "",
        numero_compte: "",
        ss_obj: true,
        checked: true,
        disabled: false,
        files: 0,
        template: "",
        comment: "",
        from_monteur_doss: false
      }, {
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_11__["default"])(),
        name: "Ticket d'Operations diverses",
        value: "",
        parent: "",
        numero_compte: "",
        ss_obj: true,
        checked: true,
        disabled: false,
        files: 0,
        template: "",
        comment: "",
        from_monteur_doss: false
      }],
      formDataToBeWatched: {
        notes: [],
        document_mise_en_places: [],
        commentaire: ""
      },
      files: [],
      countries: []
    };
  },
  methods: {
    handleDoubleClickOrClick: function handleDoubleClickOrClick(event, index, element) {
      var _this2 = this;
      EventBus.$emit("open-extra-file-explorer");
      setTimeout(function () {
        EventBus.$emit("data-extra-file-explorer", {
          name: "Pièce(s) jointe(s) {(*)}document_mise_en_places" + index + "_" + _this2.$route.params.templateId + '_' + element.id,
          view: element === null || element === void 0 ? void 0 : element.from_monteur_doss
        });
      }, 500);
    },
    getFiles: function getFiles() {
      var _this3 = this;
      _services_proxy_service__WEBPACK_IMPORTED_MODULE_7__["default"].proxyEbapis({
        url: this.connectsHost + 'api/get-files',
        method: 'POST',
        data: {
          file_identity: this.meta_data["dossier_credit"].cred_pub_key
        }
      })
      //this.$axios.post(this.connectsHost + 'api/get-files', { file_identity: this.meta_data["dossier_credit"].cred_pub_key })
      .then(function (res) {
        var _res$data$data, _res$data$data2;
        // console.log("resres55",res);
        res.data = JSON.parse(res.data);
        if (((_res$data$data = res.data.data) === null || _res$data$data === void 0 ? void 0 : _res$data$data.length) > 0 || ((_res$data$data2 = res.data.data) === null || _res$data$data2 === void 0 ? void 0 : _res$data$data2.length) != null) {
          _this3.files = res.data.data;
          // console.log("filesfiles",this.files);
          _this3.document_mise_en_places.forEach(function (element, index) {
            var count = 0;
            _this3.files.forEach(function (file) {
              var _element$template;
              if ((file === null || file === void 0 ? void 0 : file.extra_file_template_id) != null && (element === null || element === void 0 || (_element$template = element.template) === null || _element$template === void 0 ? void 0 : _element$template.id) == (file === null || file === void 0 ? void 0 : file.extra_file_template_id)) {
                count++;
              }
            });
            _this3.document_mise_en_places[index]['files'] = count;
            _this3.handleInput();
          });
        }
      })["catch"](function (err) {
        console.error(err);
      });
    },
    tableClosedOrOpened: function tableClosedOrOpened() {
      this.seen = this.fetchClosedTables(this.tb_name + this.meta_data["cred_pub_key"]);
    },
    openNotesModal: function openNotesModal() {
      var listing = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.listingNote = listing;
      this.$modal.show(this.tb_name);
    },
    checkboxValCashCall: function checkboxValCashCall(event, index) {
      if (event.target.checked) {
        this.document_mise_en_places[index]["value"] = event.target.value;
      } else {
        this.document_mise_en_places[index]["value"] = "";
      }
      this.handleInput();
    },
    loadRetrieved: function loadRetrieved() {
      var _this4 = this;
      var lentb = this.meta_data["dossier_credit"]["tbs_in_use"];
      var createdKey = this.tb_name;
      var createdKeyArr = createdKey.split("tb");
      createdKey = "cred_pub_tb_" + createdKeyArr[1];

      // this.defaultRetract(
      //     false,
      //     this.meta_data["dossier_credit"]?.applied_templ_id
      // );

      if (this.meta_data["dossier_credit"][createdKey] == undefined) {
        // this.formDataToBeWatched =
        //     this.meta_data["dossier_credit"]["cred_pub_tb_300104"];

        if (!['', null, undefined].includes(this.meta_data["dossier_credit"]["cred_pub_tb_300104"])) {
          var _this$meta_data$dossi;
          if (((_this$meta_data$dossi = this.meta_data["dossier_credit"]["cred_pub_tb_300104"]) === null || _this$meta_data$dossi === void 0 ? void 0 : _this$meta_data$dossi.document_mise_en_places) != "") {
            var _this$meta_data$dossi2;
            this.document_mise_en_places = (_this$meta_data$dossi2 = this.meta_data["dossier_credit"]["cred_pub_tb_300104"]) === null || _this$meta_data$dossi2 === void 0 ? void 0 : _this$meta_data$dossi2["document_mise_en_places"];
          }
        }
      }
      if (lentb.length > 0) {
        if (this.meta_data["dossier_credit"][createdKey] != undefined) {
          var _this$meta_data$dossi3;
          this.formDataToBeWatched = this.meta_data["dossier_credit"][createdKey];
          if (((_this$meta_data$dossi3 = this.meta_data["dossier_credit"][createdKey]) === null || _this$meta_data$dossi3 === void 0 ? void 0 : _this$meta_data$dossi3.document_mise_en_places) != "") {
            var _this$meta_data$dossi4;
            this.document_mise_en_places = (_this$meta_data$dossi4 = this.meta_data["dossier_credit"][createdKey]) === null || _this$meta_data$dossi4 === void 0 ? void 0 : _this$meta_data$dossi4["document_mise_en_places"];
          }
          if (!['', null, undefined].includes(this.meta_data["dossier_credit"]["cred_pub_tb_300104"])) {
            var _this$meta_data$dossi5;
            if (((_this$meta_data$dossi5 = this.meta_data["dossier_credit"]["cred_pub_tb_300104"]) === null || _this$meta_data$dossi5 === void 0 ? void 0 : _this$meta_data$dossi5.document_mise_en_places) != "") {
              var _this$meta_data$dossi6;
              var document_mise_en_places_from_monteur_doss = (_this$meta_data$dossi6 = this.meta_data["dossier_credit"]["cred_pub_tb_300104"]) === null || _this$meta_data$dossi6 === void 0 ? void 0 : _this$meta_data$dossi6["document_mise_en_places"];
              this.document_mise_en_places.forEach(function (el, ind) {
                if (el !== null && el !== void 0 && el.from_monteur_doss) {
                  var found = document_mise_en_places_from_monteur_doss.find(function (el0) {
                    return (el0 === null || el0 === void 0 ? void 0 : el0.id) == (el === null || el === void 0 ? void 0 : el.id);
                  });
                  if (found) {
                    _this4.document_mise_en_places[ind] = found;
                  }
                }
              });
              var new_lists = [];
              document_mise_en_places_from_monteur_doss.forEach(function (el, ind) {
                var found = _this4.document_mise_en_places.find(function (el0) {
                  return (el0 === null || el0 === void 0 ? void 0 : el0.id) == (el === null || el === void 0 ? void 0 : el.id);
                });
                if ([null, undefined].includes(found)) {
                  _this4.document_mise_en_places.splice(14, 0, el);
                }
              });
              this.handleInput();
            }
          }
        }
      }
    },
    convertNumber: function convertNumber(valeur) {
      return Number(String(valeur).replace(/\s+/g, ""));
    },
    // AJOUTER
    launchAutoSaver: function launchAutoSaver() {
      var _this5 = this;
      _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["default"].loadUserData().then(function (res) {
        _this5.send2Backend(res, 0, 0);
      })["catch"](function (err) {
        _this5.loadWithError(err);
      });
    },
    addMore: function addMore() {
      this.document_mise_en_places.push({
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_11__["default"])(),
        name: "",
        files: 0,
        template: ""
      });
    },
    remove: function remove(index) {
      this.document_mise_en_places.splice(index, 1);
      this.handleInput();
    },
    somX3: function somX3(ob, key) {
      var som = 0;
      ob.filter(function (elm) {
        var _elm$key;
        som += parseInt((_elm$key = elm[key]) === null || _elm$key === void 0 ? void 0 : _elm$key.toString().replace(/\s/g, ""));
      });
      return som;
    },
    removeByKey: function removeByKey(index, removeList) {
      this[removeList].splice(index, 1);
    },
    loadTbAttrs: function loadTbAttrs() {
      var l = [];
      var topdivel = this.$refs.topdiv;
      // let k = document.querySelectorAll('.subdiv')
      var k = document.querySelectorAll(".subdiv" + this.tb_name);
      if (k.length > 0) {
        k.forEach(function (e) {
          l.push(e.innerText);
        });
      }
      var p = {
        name_of_title: topdivel.innerText,
        list_of_content: l,
        id: "dcp-ppo7-head"
      };
      this.$emit("load-buffer", p);
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
    handleInput: function handleInput() {
      this.formDataToBeWatched.document_mise_en_places = this.document_mise_en_places;
    },
    retract1: function retract1() {
      this.seen1 = !this.seen1;
    },
    retract2: function retract2() {
      this.seen2 = !this.seen2;
    },
    retract3: function retract3() {
      this.seen3 = !this.seen3;
    },
    retract4: function retract4() {
      this.seen4 = !this.seen4;
    },
    deleteTB: function deleteTB() {
      if (confirm("Êtes-vous sûr de vouloir supprimer ce tableau ?")) {
        this.$emit("delete-tb", {
          tb_name: this.tb_name
        });
      }
    }
  },
  watch: {
    formDataToBeWatched: {
      handler: function handler(newVal, oldVal) {
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK4.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK4.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/ContextMenu */ "./resources/js/components/shared/ContextMenu.vue");
/* harmony import */ var _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/ContextMenuItem */ "./resources/js/components/shared/ContextMenuItem.vue");
/* harmony import */ var _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vueform/multiselect/dist/multiselect.vue2 */ "./node_modules/@vueform/multiselect/dist/multiselect.vue2.js");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../services/auth.service */ "./resources/js/services/auth.service.js");
/* harmony import */ var _services_credit_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../services/credit.service */ "./resources/js/services/credit.service.js");
/* harmony import */ var _services_connects_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../services/connects.service */ "./resources/js/services/connects.service.js");
/* harmony import */ var _services_proxy_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../services/proxy.service */ "./resources/js/services/proxy.service.js");
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../helpers/helper */ "./resources/js/helpers/helper.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _helpers_indexedDB__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../helpers/indexedDB */ "./resources/js/helpers/indexedDB.js");
/* harmony import */ var _helpers_indexedDB__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_helpers_indexedDB__WEBPACK_IMPORTED_MODULE_9__);
/* provided dependency */ var process = __webpack_require__(/*! process/browser.js */ "./node_modules/process/browser.js");












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
  name: "Checklist_primaire",
  display: "Checklist primaire",
  components: {
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_10__.PlusIcon,
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_10__.TrashIcon,
    MoreVerticalIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_10__.MoreVerticalIcon,
    ChevronUpIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_10__.ChevronUpIcon,
    ChevronDownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_10__.ChevronDownIcon,
    ContextMenu: _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_0__["default"],
    ContextMenuItem: _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_1__["default"],
    Multiselect: _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_2__["default"],
    AirplayIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_10__.AirplayIcon
  },
  props: {
    meta_data: Object,
    tb_name: String,
    tb_display_name: String
  },
  created: function created() {},
  mounted: function mounted() {
    var _this = this;
    this.tableClosedOrOpened();
    this.loadRetrieved();
    this.loadTbAttrs();
    EventBus.$on("created-extra-file-template", function (data) {
      _this.check_list_diligeances.forEach(function (element, index) {
        var _data$template;
        var template_name = "Pièce(s) jointe(s) -check_list_diligeances" + index + "_" + _this.$route.params.templateId;
        if (template_name == (data === null || data === void 0 || (_data$template = data.template) === null || _data$template === void 0 ? void 0 : _data$template.name)) {
          var _data$template2, _data$template3, _data$template4;
          _this.check_list_diligeances[index]["template"] = {
            id: data === null || data === void 0 || (_data$template2 = data.template) === null || _data$template2 === void 0 ? void 0 : _data$template2.id,
            name: data === null || data === void 0 || (_data$template3 = data.template) === null || _data$template3 === void 0 ? void 0 : _data$template3.name,
            slug: data === null || data === void 0 || (_data$template4 = data.template) === null || _data$template4 === void 0 ? void 0 : _data$template4.slug
          };
          _this.handleInput();
        }
      });
    });
    EventBus.$on("updated-extra-file-upload", function (data) {
      _this.getFiles();
    });
    this.getFiles();
  },
  computed: {},
  data: function data() {
    var vm = this;
    return {
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
      connectsHost: _services_connects_service__WEBPACK_IMPORTED_MODULE_6__["default"].loadablehost(),
      duree_credit0: null,
      mode_paiement0: null,
      listingNote: false,
      contextList: [
      // Ajouter note
      {
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
      meta_parseable: {
        cred_pub_key: this.meta_data["cred_pub_key"],
        tb_name: this.tb_name
      },
      check_list_diligeances: [{
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_11__["default"])(),
        name: "Le prêt est-il accordé selon la matrice de subdélégation des pouvoirs",
        value: "",
        parent: "",
        numero_compte: "",
        ss_obj: false,
        checked: false,
        disabled: false,
        files: 0,
        template: "",
        comment: "",
        from_monteur_doss: false
      }, {
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_11__["default"])(),
        name: "Les comptes de nantissement à solde fixe sont-ils disponibles ?",
        value: "",
        parent: "",
        numero_compte: "",
        ss_obj: false,
        checked: false,
        disabled: false,
        files: 0,
        template: "",
        comment: "",
        from_monteur_doss: false
      }, {
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_11__["default"])(),
        name: "Compte Courant",
        value: "",
        parent: "Les comptes de nantissement à solde fixe sont-ils disponibles ?",
        numero_compte: "",
        ss_obj: true,
        checked: false,
        disabled: false,
        files: 0,
        template: "",
        comment: "",
        from_monteur_doss: false
      }, {
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_11__["default"])(),
        name: "Deposit",
        value: "",
        parent: "Les comptes de nantissement à solde fixe sont-ils disponibles ?",
        numero_compte: "",
        ss_obj: true,
        checked: false,
        disabled: false,
        files: 0,
        template: "",
        comment: "",
        from_monteur_doss: false
      }, {
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_11__["default"])(),
        name: "DAT",
        value: "",
        parent: "Les comptes de nantissement à solde fixe sont-ils disponibles ?",
        numero_compte: "",
        ss_obj: true,
        checked: false,
        disabled: false,
        files: 0,
        template: "",
        comment: "",
        from_monteur_doss: false
      }, {
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_11__["default"])(),
        name: "PEE",
        value: "",
        parent: "Les comptes de nantissement à solde fixe sont-ils disponibles ?",
        numero_compte: "",
        ss_obj: true,
        checked: false,
        disabled: false,
        files: 0,
        template: "",
        comment: "",
        from_monteur_doss: false
      }, {
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_11__["default"])(),
        name: "PEC",
        value: "",
        parent: "Les comptes de nantissement à solde fixe sont-ils disponibles ?",
        numero_compte: "",
        ss_obj: true,
        checked: false,
        disabled: false,
        files: 0,
        template: "",
        comment: "",
        from_monteur_doss: false
      }, {
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_11__["default"])(),
        name: "Les comptes de nantissement à solde progressif sont-ils disponibles ?",
        value: "",
        parent: "",
        numero_compte: "",
        ss_obj: false,
        checked: false,
        disabled: false,
        files: 0,
        template: "",
        comment: "",
        from_monteur_doss: false
      }, {
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_11__["default"])(),
        name: "Compte Courant",
        value: "",
        parent: "Les comptes de nantissement à solde progressif sont-ils disponibles ?",
        numero_compte: "",
        ss_obj: true,
        checked: false,
        disabled: false,
        files: 0,
        template: "",
        comment: "",
        from_monteur_doss: false
      }, {
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_11__["default"])(),
        name: "Deposit",
        value: "",
        parent: "Les comptes de nantissement à solde progressif sont-ils disponibles ?",
        numero_compte: "",
        ss_obj: true,
        checked: false,
        disabled: false,
        files: 0,
        template: "",
        comment: "",
        from_monteur_doss: false
      }, {
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_11__["default"])(),
        name: "DAT",
        value: "",
        parent: "Les comptes de nantissement à solde progressif sont-ils disponibles ?",
        numero_compte: "",
        ss_obj: true,
        checked: false,
        disabled: false,
        files: 0,
        template: "",
        comment: "",
        from_monteur_doss: false
      }, {
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_11__["default"])(),
        name: "PEE",
        value: "",
        parent: "Les comptes de nantissement à solde progressif sont-ils disponibles ?",
        numero_compte: "",
        ss_obj: true,
        checked: false,
        disabled: false,
        files: 0,
        template: "",
        comment: "",
        from_monteur_doss: false
      }, {
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_11__["default"])(),
        name: "PEC",
        value: "",
        parent: "Les comptes de nantissement à solde progressif sont-ils disponibles ?",
        numero_compte: "",
        ss_obj: true,
        checked: false,
        disabled: false,
        files: 0,
        template: "",
        comment: "",
        from_monteur_doss: false
      }, {
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_11__["default"])(),
        name: "Le TEG est-il disponible ?",
        value: "",
        parent: "",
        numero_compte: "",
        ss_obj: false,
        checked: false,
        disabled: false,
        files: 0,
        template: "",
        comment: "",
        from_monteur_doss: false
      }],
      formDataToBeWatched: {
        bref_commentaire: "",
        notes: [],
        check_list_diligeances: [],
        indications_particulieres_eventuelles: ""
      },
      files: [],
      countries: []
    };
  },
  methods: {
    handleDoubleClickOrClick: function handleDoubleClickOrClick(event, index, element) {
      var _this2 = this;
      EventBus.$emit("open-extra-file-explorer");
      setTimeout(function () {
        EventBus.$emit("data-extra-file-explorer", {
          name: "Pièce(s) jointe(s) {(*)}check_list_diligeances" + index + "_" + _this2.$route.params.templateId,
          view: element === null || element === void 0 ? void 0 : element.from_monteur_doss
        });
      }, 500);
    },
    getFiles: function getFiles() {
      var _this3 = this;
      _services_proxy_service__WEBPACK_IMPORTED_MODULE_7__["default"].proxyEbapis({
        url: this.connectsHost + "api/get-files",
        method: "POST",
        data: {
          file_identity: this.meta_data["dossier_credit"].cred_pub_key
        }
      })
      //this.$axios.post(this.connectsHost + 'api/get-files', { file_identity: this.meta_data["dossier_credit"].cred_pub_key })
      .then(function (res) {
        var _res$data$data, _res$data$data2;
        // console.log("resres55",res);
        res.data = JSON.parse(res.data);
        if (((_res$data$data = res.data.data) === null || _res$data$data === void 0 ? void 0 : _res$data$data.length) > 0 || ((_res$data$data2 = res.data.data) === null || _res$data$data2 === void 0 ? void 0 : _res$data$data2.length) != null) {
          _this3.files = res.data.data;
          // console.log("filesfiles",this.files);
          _this3.check_list_diligeances.forEach(function (element, index) {
            var count = 0;
            _this3.files.forEach(function (file) {
              var _element$template;
              if ((file === null || file === void 0 ? void 0 : file.extra_file_template_id) != null && (element === null || element === void 0 || (_element$template = element.template) === null || _element$template === void 0 ? void 0 : _element$template.id) == (file === null || file === void 0 ? void 0 : file.extra_file_template_id)) {
                count++;
              }
            });
            _this3.check_list_diligeances[index]["files"] = count;
            _this3.handleInput();
          });
        }
      })["catch"](function (err) {
        console.error(err);
      });
    },
    tableClosedOrOpened: function tableClosedOrOpened() {
      this.seen = this.fetchClosedTables(this.tb_name + this.meta_data["cred_pub_key"]);
    },
    openNotesModal: function openNotesModal() {
      var listing = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.listingNote = listing;
      this.$modal.show(this.tb_name);
    },
    checkboxValCashCall: function checkboxValCashCall(event, index) {
      if (event.target.checked) {
        this.check_list_diligeances[index]["value"] = event.target.value;
      } else {
        this.check_list_diligeances[index]["value"] = "";
      }
      this.handleInput();
    },
    loadRetrieved: function loadRetrieved() {
      var _this4 = this;
      var lentb = this.meta_data["dossier_credit"]["tbs_in_use"];
      var createdKey = this.tb_name;
      var createdKeyArr = createdKey.split("tb");
      createdKey = "cred_pub_tb_" + createdKeyArr[1];

      // this.defaultRetract(
      //     false,
      //     this.meta_data["dossier_credit"]?.applied_templ_id
      // );

      if (this.meta_data["dossier_credit"][createdKey] == undefined) {
        // this.formDataToBeWatched =
        //     this.meta_data["dossier_credit"]["cred_pub_tb_200401"];

        if (!["", null, undefined].includes(this.meta_data["dossier_credit"]["cred_pub_tb_200401"])) {
          var _this$meta_data$dossi;
          if (((_this$meta_data$dossi = this.meta_data["dossier_credit"]["cred_pub_tb_200401"]) === null || _this$meta_data$dossi === void 0 ? void 0 : _this$meta_data$dossi.check_list_diligeances) != "") {
            var _this$meta_data$dossi2;
            this.check_list_diligeances = (_this$meta_data$dossi2 = this.meta_data["dossier_credit"]["cred_pub_tb_200401"]) === null || _this$meta_data$dossi2 === void 0 ? void 0 : _this$meta_data$dossi2["check_list_diligeances"];
          }
        }
      }
      if (lentb.length > 0) {
        if (this.meta_data["dossier_credit"][createdKey] != undefined) {
          var _this$meta_data$dossi3;
          this.formDataToBeWatched = this.meta_data["dossier_credit"][createdKey];
          if (((_this$meta_data$dossi3 = this.meta_data["dossier_credit"][createdKey]) === null || _this$meta_data$dossi3 === void 0 ? void 0 : _this$meta_data$dossi3.check_list_diligeances) != "") {
            var _this$meta_data$dossi4;
            this.check_list_diligeances = (_this$meta_data$dossi4 = this.meta_data["dossier_credit"][createdKey]) === null || _this$meta_data$dossi4 === void 0 ? void 0 : _this$meta_data$dossi4["check_list_diligeances"];
          }
          if (!["", null, undefined].includes(this.meta_data["dossier_credit"]["cred_pub_tb_200401"])) {
            var _this$meta_data$dossi5;
            if (((_this$meta_data$dossi5 = this.meta_data["dossier_credit"]["cred_pub_tb_200401"]) === null || _this$meta_data$dossi5 === void 0 ? void 0 : _this$meta_data$dossi5.check_list_diligeances) != "") {
              var _this$meta_data$dossi6;
              var check_list_diligeances_from_monteur_doss = (_this$meta_data$dossi6 = this.meta_data["dossier_credit"]["cred_pub_tb_200401"]) === null || _this$meta_data$dossi6 === void 0 ? void 0 : _this$meta_data$dossi6["check_list_diligeances"];
              this.check_list_diligeances.forEach(function (el, ind) {
                if (el !== null && el !== void 0 && el.from_monteur_doss) {
                  var found = check_list_diligeances_from_monteur_doss.find(function (el0) {
                    return (el0 === null || el0 === void 0 ? void 0 : el0.id) == (el === null || el === void 0 ? void 0 : el.id);
                  });
                  if (found) {
                    _this4.check_list_diligeances[ind] = found;
                  }
                }
              });
              var new_lists = [];
              check_list_diligeances_from_monteur_doss.forEach(function (el, ind) {
                var found = _this4.check_list_diligeances.find(function (el0) {
                  return (el0 === null || el0 === void 0 ? void 0 : el0.id) == (el === null || el === void 0 ? void 0 : el.id);
                });
                if ([null, undefined].includes(found)) {
                  _this4.check_list_diligeances.splice(14, 0, el);
                }
              });
              this.handleInput();
            }
          }
        }
      }
    },
    convertNumber: function convertNumber(valeur) {
      return Number(String(valeur).replace(/\s+/g, ""));
    },
    // AJOUTER
    launchAutoSaver: function launchAutoSaver() {
      var _this5 = this;
      _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["default"].loadUserData().then(function (res) {
        _this5.send2Backend(res, 0, 0);
      })["catch"](function (err) {
        _this5.loadWithError(err);
      });
    },
    addMore: function addMore() {
      this.check_list_diligeances.push({
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_11__["default"])(),
        name: "",
        value: "",
        parent: "",
        checked: true,
        disabled: false,
        comment: "",
        numero_compte: "",
        template: "",
        files: 0,
        from_monteur_doss: false
      });
    },
    remove: function remove(index) {
      this.check_list_diligeances.splice(index, 1);
      this.handleInput();
    },
    somX3: function somX3(ob, key) {
      var som = 0;
      ob.filter(function (elm) {
        var _elm$key;
        som += parseInt((_elm$key = elm[key]) === null || _elm$key === void 0 ? void 0 : _elm$key.toString().replace(/\s/g, ""));
      });
      return som;
    },
    removeByKey: function removeByKey(index, removeList) {
      this[removeList].splice(index, 1);
    },
    loadTbAttrs: function loadTbAttrs() {
      var l = [];
      var topdivel = this.$refs.topdiv;
      // let k = document.querySelectorAll('.subdiv')
      var k = document.querySelectorAll(".subdiv" + this.tb_name);
      if (k.length > 0) {
        k.forEach(function (e) {
          l.push(e.innerText);
        });
      }
      var p = {
        name_of_title: topdivel.innerText,
        list_of_content: l,
        id: "gac-chk0-head"
      };
      this.$emit("load-buffer", p);
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
    handleInput: function handleInput() {
      this.formDataToBeWatched.check_list_diligeances = this.check_list_diligeances;
    },
    retract1: function retract1() {
      this.seen1 = !this.seen1;
    },
    retract2: function retract2() {
      this.seen2 = !this.seen2;
    },
    retract3: function retract3() {
      this.seen3 = !this.seen3;
    },
    retract4: function retract4() {
      this.seen4 = !this.seen4;
    },
    deleteTB: function deleteTB() {
      if (confirm("Êtes-vous sûr de vouloir supprimer ce tableau ?")) {
        this.$emit("delete-tb", {
          tb_name: this.tb_name
        });
      }
    }
  },
  watch: {
    formDataToBeWatched: {
      handler: function handler(newVal, oldVal) {
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK5.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK5.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../services/auth.service */ "./resources/js/services/auth.service.js");
/* harmony import */ var _services_credit_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../services/credit.service */ "./resources/js/services/credit.service.js");
/* harmony import */ var _services_connects_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../services/connects.service */ "./resources/js/services/connects.service.js");
/* harmony import */ var _services_proxy_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../services/proxy.service */ "./resources/js/services/proxy.service.js");
/* harmony import */ var _johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @johmun/vue-tags-input */ "./node_modules/@johmun/vue-tags-input/dist/vue-tags-input.js");
/* harmony import */ var _johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_5__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }









window.$ = window.jQuery = __webpack_require__(/*! jquery/dist/jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "fiche-lecture",
  display: "Fiche de lecture",
  components: {
    MoreVerticalIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.MoreVerticalIcon,
    ChevronUpIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.ChevronUpIcon,
    ChevronDownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.ChevronDownIcon,
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.PlusIcon,
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.TrashIcon,
    AirplayIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.AirplayIcon,
    BookOpenIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.BookOpenIcon,
    VueTagsInput: (_johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_5___default())
  },
  props: _defineProperty({
    meta_data: Object,
    tb_name: String,
    tb_display_name: String
  }, "tb_display_name", String),
  created: function created() {
    var _pub_workflow;
    var _this$meta_data$dossi = this.meta_data["dossier_credit"],
      stage = _this$meta_data$dossi.pub_workflow_curr_stage,
      pub_workflow = _this$meta_data$dossi.pub_workflow;
    var sup_id = (_pub_workflow = pub_workflow[stage + 1]) === null || _pub_workflow === void 0 ? void 0 : _pub_workflow.responsible_id;
    var roles = ['gTz6TD6V0yVaXAssKaUg', 'tamxni98jaQRXrK59p34', 'tamxni98jaQRXrK59p34', '2jFxY9ujYHqtMG88KDRR', 'gOLOzQVDyl2eoBLO'];
    var users_id = [];
    if (!['', null, undefined].includes(sup_id)) {
      users_id.push(sup_id);
    }
    this.getUsersDefault(roles, users_id);
  },
  mounted: function mounted() {
    var _this = this;
    this.loadRetrieved();
    this.loadTbAttrs(); // charge les attributs + sous attributs des tables
    this.tableClosedOrOpened();
    EventBus.$on('send-fiche', function (data) {
      console.log(data);
      _this.$modal.hide('fiche_lecture');
    });
  },
  computed: {
    filteredUsers: function filteredUsers() {
      this.receivers = this.users.map(function (el) {
        return _objectSpread({
          text: "".concat(el.name, " ( ").concat(el.role[0].display_name, " )")
        }, el);
      });
      return this.receivers;
    },
    filteredUsersDefault: function filteredUsersDefault() {
      var users = this.usersDefault.map(function (el) {
        return _objectSpread({
          text: "".concat(el.name, " ( ").concat(el.role[0].display_name, " )")
        }, el);
      });
      return users;
    },
    defaultActors: function defaultActors() {
      var _pub_workflow2;
      var acc_dagc = this.filteredUsersDefault.find(function (el) {
        return ['gTz6TD6V0yVaXAssKaUg'].includes(el.role_id);
      });
      var chef_serv_dagc = this.filteredUsersDefault.find(function (el) {
        return (el === null || el === void 0 ? void 0 : el.role_id) == 'tamxni98jaQRXrK59p34';
      });
      var _this$meta_data$dossi2 = this.meta_data["dossier_credit"],
        stage = _this$meta_data$dossi2.pub_workflow_curr_stage,
        pub_workflow = _this$meta_data$dossi2.pub_workflow;
      var roles_dajc = ["2eLuPN7RikH2a7LuF4iN"];
      var responsibles = this.filteredUsersDefault.filter(function (el) {
        return roles_dajc.includes(el === null || el === void 0 ? void 0 : el.role_id);
      });
      var sup_id = (_pub_workflow2 = pub_workflow[stage + 1]) === null || _pub_workflow2 === void 0 ? void 0 : _pub_workflow2.responsible_id;
      var sup = this.filteredUsersDefault.find(function (el) {
        return el.id == sup_id;
      });
      var actors = [acc_dagc, chef_serv_dagc, sup];
      if (!['', null, undefined].includes(responsibles) && responsibles.length > 0) {
        actors = actors.concat(responsibles);
      }
      return actors.filter(function (el) {
        return el != null;
      });
    }
  },
  data: function data() {
    var vm = this;
    return {
      isLoding: {
        0: false
      },
      buttonStatus: {
        0: true
      },
      filterInput: "",
      tagValue: undefined,
      tagging: false,
      users: [],
      taggedUsers: [],
      autocompleteItems: [],
      tag: {
        0: ""
      },
      tg: "",
      seens: {
        0: true
      },
      seen1: true,
      tags: {
        0: []
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
      }, {
        title: "Supprimer",
        icon: "icofont icofont-trash",
        handler: this.startDeletingTbFromContext,
        disabled: false
      }],
      ebapisHost: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__["default"].host,
      authcheck: false,
      authcheckUsr: null,
      authcheckStatus: null,
      watchInPause: false,
      initLoad: true,
      seen: true,
      listingNote: false,
      dossier_credit: null,
      toDelete: '',
      meta_parseable: {
        cred_pub_key: this.meta_data["cred_pub_key"],
        tb_name: this.tb_name
      },
      display_response: false,
      formDataToBeWatched: {
        fiche_suivis: "",
        notes: []
      },
      fiche_suivis: [{
        fiche: [{
          question: "",
          reponse: "",
          is_answered: false
        }],
        is_answered: false,
        update_at: "",
        created_at: new Date(),
        created_by: "",
        sender: "",
        receivers: "",
        has_notified: false
      }],
      isResponse: false,
      debounce: null,
      searchUser: false,
      usersDefault: []
    };
  },
  methods: {
    determineSRC: function determineSRC() {
      this.getUsers();
      var src = this.users.filter(function (el) {
        if ((el === null || el === void 0 ? void 0 : el.role_id) == 'tyJLxuAh6F2DJR6e') {
          return el;
        }
      });
      src = src[0];
      return src;
    },
    manageButton: function manageButton(index) {
      console.log("indexxx", index);
      console.log("isLoding", this.isLoding);
      console.log("buttonStatus", this.buttonStatus);
      if (this.isLoding[index] == false && this.buttonStatus[index] == false) {
        return true;
      }
      return false;
    },
    getTag: function getTag(index) {
      this.tg = this.tag[index];
    },
    retractDynamique: function retractDynamique(index) {
      this.$set(this.seens, index, !this.seens[index]);
    },
    setColor: function setColor(elt) {
      var _elt$;
      if (((_elt$ = elt[1]) === null || _elt$ === void 0 ? void 0 : _elt$.reponse) == "") {
        return "text-dark";
      }
    },
    addMoreFiche: function addMoreFiche() {
      var receivers = this.defaultActors;
      var notified_users = _toConsumableArray(receivers);
      this.tags[this.fiche_suivis.length] = _toConsumableArray(receivers);
      this.fiche_suivis[0].sender = this.authcheckUsr;
      this.fiche_suivis.push({
        fiche: [{
          question: "",
          reponse: "",
          is_answered: false
        }],
        is_answered: false,
        update_at: "",
        created_at: new Date(),
        created_by: "",
        sender: this.authcheckUsr,
        receivers: receivers,
        notified_users: notified_users,
        has_notified: false
      });
      this.$set(this.seens, this.fiche_suivis.length - 1, true);
      this.$set(this.isLoding, this.fiche_suivis.length - 1, false);
      this.$set(this.buttonStatus, this.fiche_suivis.length - 1, true);
      console.log("isLoding", this.isLoding);
    },
    removeFiche: function removeFiche(index) {
      this.toDelete = index;
      this.$modal.show("confirm_supp_fiche_suivis", index);
    },
    deleteFiche: function deleteFiche(index) {
      this.fiche_suivis.splice(index, 1);
      this.$modal.hide("confirm_supp_fiche_suivis");
      this.toDelete = '';
    },
    closeModal: function closeModal() {
      this.$modal.hide("confirm_supp_fiche_suivis");
    },
    // submitFicheSuivi(item) {
    //     const loaders = {};
    //     loaders[item.id] = true;
    //     this.ficheLoading = Object.assign({}, this.ficheLoading, loaders);
    //     // console.log('item', item)
    //     item.content.receivers = this.tags
    //     item.content.sender = this.user
    //     Auth.loadUserData().then((res) => {
    //        this.$axios.post(this.ebapisHost + "creditbuilder/api/v1/save-fiche-suivi/", {
    //             cred_pub_key: this.cred_pub_key,
    //             sender: res.data,
    //             receivers: this.tags,
    //             fiche_suivis: item["content"],
    //             fiche_id: item.id - 1
    //         }).then((response) => {
    //             this.$toasted.show("Reponses sauvegardées avec succès");
    //             this.isLoding = false;
    //             loaders[item.id] = false;
    //             this.ficheLoading = Object.assign(
    //                 {},
    //                 this.ficheLoading,
    //                 loaders
    //             );
    //             this.$set(this.ficheLoading, item.id, false);
    //             this.buttonStatus = false;
    //             // this.NotifyUser(res.data, this.tags)
    //             // EventBus.$emit("savedclosed-table", a)
    //             // this.$forceUpdate();
    //             this.$emit("created")
    //         }).catch((error) => {
    //             console.log(error);
    //             this.isLoding = false;
    //             loaders[item.id] = false;
    //             this.ficheLoading = Object.assign(
    //                 {},
    //                 this.ficheLoading,
    //                 loaders
    //             );
    //             this.$set(this.ficheLoading, item.id, false);
    //         })
    //     })
    // },
    NotifyUser: function NotifyUser(index) {
      var _this$tags$index,
        _this2 = this;
      if (((_this$tags$index = this.tags[index]) === null || _this$tags$index === void 0 ? void 0 : _this$tags$index.length) > 0) {
        this.$set(this.isLoding, index, true);
        _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["default"].loadUserData().then(function (res) {
          _this2.$axios.post(_this2.ebapisHost + "notifications/api/v1/questions-responses-notifications/", {
            cred_pub_key: _this2.meta_parseable["cred_pub_key"],
            sender: res.data,
            receivers: _this2.tags[index],
            what_tobe_notified: "FICHE-SUIVI"
          }).then(function (response) {
            _this2.tags = [];
            EventBus.$emit("message-send");
            _this2.$toasted.show("Message envoyé avec succès");
            _this2.$set(_this2.isLoding, index, false);
            _this2.$set(_this2.buttonStatus, index, false);
            _this2.formDataToBeWatched.fiche_suivis[index]["sender"] = res.data;
            _this2.formDataToBeWatched.fiche_suivis[index]["has_notified"] = true;
            _this2.fiche_suivis[index]["has_notified"] = true;
            EventBus.$emit('launch-bulk-save');
          })["catch"](function (error) {
            console.log(error);
          });
        })["catch"](function (err) {
          _this2.loadWithError(err);
        });
      } else {
        this.$toasted.show("Veuillez saisir le collaborateur à notifier");
      }
    },
    initFicheLecture: function initFicheLecture() {
      this.fiche_suivis = [[{
        question: "",
        niveau_risque: "",
        avis: ""
      }, {
        reponse: "",
        niveau_risque: "",
        avis: ""
      }]];
    },
    tableClosedOrOpened: function tableClosedOrOpened() {
      this.seen = this.fetchClosedTables(this.tb_name + this.meta_data['cred_pub_key']);
    },
    addMore: function addMore(index) {
      var _this$fiche_suivis$in;
      (_this$fiche_suivis$in = this.fiche_suivis[index]) === null || _this$fiche_suivis$in === void 0 || _this$fiche_suivis$in.fiche.push({
        question: "",
        reponse: "",
        is_answered: false
      });
      this.handleInput();
    },
    remove: function remove(index, idx) {
      this.fiche_suivis[index].fiche.splice(idx, 1);
      this.handleInput();
    },
    tagUser: function tagUser(user) {
      this.formDataToBeWatched.commentaire = this.formDataToBeWatched.commentaire.replace(this.formDataToBeWatched.commentaire.at(-1), '') + "<span class=' text-primary' style='color:#e67e22'>" + user.name + ' - ' + user.role_name + "</span> &nbsp;";
      this.tagValue = this.formDataToBeWatched.commentaire;
      this.taggedUsers.push(user);
      this.tagging = false;
      this.formDataToBeWatched.user = user;
    },
    pressAtKey: function pressAtKey(event) {
      this.tagging = true;
    },
    getUsers: function getUsers() {
      //    this.$axios.post(this.ebapisHost + "creditbuilder/api/v1/load-all-doc-users/", {
      //         cred_pub_key: this.meta_data?.cred_pub_key
      //     }).then((data) => {
      //         this.users = data.data.users
      //     }).catch(err => {
      //         console.dir(err)
      //     });
    },
    openNotesModal: function openNotesModal() {
      var listing = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.listingNote = listing;
      this.$modal.show(this.tb_name);
    },
    loadRetrieved: function loadRetrieved() {
      var lentb = this.meta_data["dossier_credit"]["tbs_in_use"];
      var createdKey = this.tb_name;
      var createdKeyArr = createdKey.split("tb");
      createdKey = "cred_pub_tb_" + createdKeyArr[1];
      if (lentb.length > 0) {
        if (this.meta_data["dossier_credit"][createdKey] != undefined) {
          this.formDataToBeWatched = this.meta_data["dossier_credit"][createdKey];
          if (this.meta_data["dossier_credit"][createdKey]["fiche_suivis"] != "") {
            this.fiche_suivis = this.formDataToBeWatched["fiche_suivis"];
            this.tags = this.fiche_suivis.reduce(function (cum, curr, index) {
              var data = {};
              data[index] = curr.notified_users;
              cum = _objectSpread(_objectSpread({}, cum), data);
              return cum;
            }, {});
            this.initLoding();
            this.initButtonStatus();
          }
        }
        // Close table by default
        // this.defaultRetract(false, this.meta_data["dossier_credit"]?.applied_templ_id)
      }
    },
    setTbVal: function setTbVal(val) {
      this.cred_pub_key = val;
    },
    loadWithError: function loadWithError(err) {},
    send2Backend: function send2Backend(res, newVal, oldVal) {
      this.authcheck = true;
      this.authcheckUsr = res.data;
      this.authcheckStatus = res.status;
      if (this.authcheckStatus === 401) {}
      if (this.authcheck === true) {
        this.$emit("autosaving");
        this.$axios.post(this.ebapisHost + "creditbuilder/api/v1/autosaving/", {
          user: this.authcheckUsr,
          meta_parseable: this.meta_parseable,
          filledData: this.formDataToBeWatched,
          loadDossier: true
        }).then(function (response) {
          this.$emit("autosaving");
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
      if (this.meta_data && this.meta_data['cred_pub_key']) {
        var a = {
          "tb_name": this.tb_name + this.meta_data['cred_pub_key'],
          "status": this.seen
        };
        EventBus.$emit("savedclosed-table", a);
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
    initLoding: function initLoding() {
      var _this3 = this;
      //console.log("initLoding", this.fiche_suivis)
      if (this.fiche_suivis != undefined) {
        this.fiche_suivis.forEach(function (element, key) {
          _this3.$set(_this3.isLoding, key, false);
        });
      }
    },
    initButtonStatus: function initButtonStatus() {
      var _this4 = this;
      if (this.fiche_suivis != undefined) {
        this.fiche_suivis.forEach(function (element, key) {
          _this4.$set(_this4.buttonStatus, key, true);
        });
      }
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
        id: "ca6-head"
      };
      this.$emit("load-buffer", p);
    },
    // SOMME DES MONTANTS
    somX3: function somX3(ob, key) {
      var som = 0;
      ob.filter(function (elm) {
        var result = String(elm[key]).replace(/\s+/g, "");
        if (result === "") {
          som += 0;
        } else {
          som += parseInt(result);
        }
      });
      return som;
    },
    somX4: function somX4(ob, key) {
      var som = 0;
      var val1 = ob.replace(/\s+/g, "");
      var val2 = key.replace(/\s+/g, "");
      som = val1 + val2;
      return som;
    },
    handleInput: function handleInput() {
      this.formDataToBeWatched.fiche_suivis = this.fiche_suivis;
      this.formDataToBeWatched.sender = this.authcheckUsr;
    },
    handleInput1: function handleInput1(evt, index) {
      this.fiche_suivis[index].receivers = this.tags[index];
      this.fiche_suivis[index].notified_users = this.tags[index];
      this.fiche_suivis[index].sender = this.authcheckUsr;
      this.handleInput();
    },
    setButton: function setButton(evt, index) {
      var _this5 = this;
      console.log("index", index);
      console.log("this.fiche_suivis", this.fiche_suivis);
      this.fiche_suivis.forEach(function (element) {
        element.fiche.forEach(function (elt) {
          if (elt.question != "") {
            _this5.$set(_this5.buttonStatus, index, true);
          }
        });
      });
    },
    instruction3: function instruction3(id) {
      var id0 = '#' + id;
      window.$(id0).modal('show');
    },
    updateTags: function updateTags(newTags, ficheIndex) {
      this.users = [];
      newTags = newTags.filter(function (el) {
        return el === null || el === void 0 ? void 0 : el.email;
      });
      this.tags[ficheIndex] = newTags;
    },
    getUsersDefault: function getUsersDefault(roles, users_id) {
      var _this$meta_data,
        _this6 = this;
      var url = this.ebapisHost + "creditbuilder/api/v1/load-all-doc-users/";
      var data = {
        "search": "",
        "limit": 10,
        "roles": roles,
        "users_id": users_id,
        "cred_pub_key": (_this$meta_data = this.meta_data) === null || _this$meta_data === void 0 ? void 0 : _this$meta_data.cred_pub_key
      };
      this.$axios.post(url, data).then(function (response) {
        var data = response.data.data;
        if (!['', null, undefined].includes(data) && data.length > 0) {
          _this6.usersDefault = data;
        }
        _this6.searchUser = false;
      })["catch"](function (error) {
        _this6.searchUser = false;
        console.warn('Oh. Something went wrong');
      });
    },
    initItems: function initItems() {
      var _this7 = this;
      if (this.tg.trim().length < 3) return;
      clearTimeout(this.debounce);
      this.debounce = setTimeout(function () {
        var _this7$meta_data;
        _this7.searchUser = true;
        var url = _this7.ebapisHost + "creditbuilder/api/v1/load-all-doc-users/";
        var data = {
          "search": _this7.tg,
          "limit": 10,
          "cred_pub_key": (_this7$meta_data = _this7.meta_data) === null || _this7$meta_data === void 0 ? void 0 : _this7$meta_data.cred_pub_key
        };
        _this7.$axios.post(url, data).then(function (response) {
          var data = response.data.data;
          var message = response.data.message;
          if (!['', null, undefined].includes(data) && data.length > 0) {
            _this7.users = data;
          } else {
            _this7.users = [];
            // this.$toasted.show(message, {
            //     duration: 5000
            // })
          }
          _this7.$axios.post('/api/search_user', {
            "search": _this7.tg,
            "limit": 10
          }).then(function (response) {
            var _others_users, _this7$users;
            var data = response.data.data;
            var message = response.data.message;
            var others_users = [];
            if (!['', null, undefined].includes(data) && data.length > 0) {
              others_users = data;
            } else {
              others_users = [];
            }
            if (((_others_users = others_users) === null || _others_users === void 0 ? void 0 : _others_users.length) > 0) {
              others_users.forEach(function (el) {
                var find = _this7.users.find(function (u) {
                  return (u === null || u === void 0 ? void 0 : u.id) == (el === null || el === void 0 ? void 0 : el.id);
                });
                if (['', null, undefined].includes(find)) {
                  _this7.users.push(el);
                }
              });
            }
            if (((_this7$users = _this7.users) === null || _this7$users === void 0 ? void 0 : _this7$users.length) == 0) {
              _this7.$toasted.show(message, {
                duration: 5000
              });
            }
            _this7.searchUser = false;
          })["catch"](function (error) {
            _this7.searchUser = false;
            console.warn('Oh. Something went wrong');
          });

          // this.searchUser = false
        })["catch"](function (error) {
          _this7.searchUser = false;
          console.warn('Oh. Something went wrong');
        });
      }, 800);
    }
  },
  watch: {
    formDataToBeWatched: {
      handler: function handler(newVal, oldVal) {
        this.autosaving(newVal, oldVal);
      },
      deep: true,
      immediate: true
    },
    filteredUsersDefault: function filteredUsersDefault() {
      if (this.fiche_suivis[0].receivers == "") {
        this.fiche_suivis[0].receivers = this.defaultActors;
        this.fiche_suivis[0].notified_users = this.defaultActors;
        this.tags[0] = this.defaultActors;
        this.fiche_suivis[0].sender = this.authcheckUsr;
        this.formDataToBeWatched.fiche_suivis = this.fiche_suivis;
      }
    },
    tg: 'initItems'
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CTR0.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CTR0.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/ContextMenu */ "./resources/js/components/shared/ContextMenu.vue");
/* harmony import */ var _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/ContextMenuItem */ "./resources/js/components/shared/ContextMenuItem.vue");
/* harmony import */ var _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vueform/multiselect/dist/multiselect.vue2 */ "./node_modules/@vueform/multiselect/dist/multiselect.vue2.js");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../services/auth.service */ "./resources/js/services/auth.service.js");
/* harmony import */ var _services_credit_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../services/credit.service */ "./resources/js/services/credit.service.js");
/* harmony import */ var _services_connects_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../services/connects.service */ "./resources/js/services/connects.service.js");
/* harmony import */ var _services_proxy_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../services/proxy.service */ "./resources/js/services/proxy.service.js");
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../helpers/helper */ "./resources/js/helpers/helper.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _helpers_indexedDB__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../helpers/indexedDB */ "./resources/js/helpers/indexedDB.js");
/* harmony import */ var _helpers_indexedDB__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_helpers_indexedDB__WEBPACK_IMPORTED_MODULE_9__);
/* provided dependency */ var process = __webpack_require__(/*! process/browser.js */ "./node_modules/process/browser.js");












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
  name: "Revue_de_la_fiche_de_mise_en_place",
  display: "Revue de la fiche de mise en place",
  components: {
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_10__.PlusIcon,
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_10__.TrashIcon,
    MoreVerticalIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_10__.MoreVerticalIcon,
    ChevronUpIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_10__.ChevronUpIcon,
    ChevronDownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_10__.ChevronDownIcon,
    ContextMenu: _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_0__["default"],
    ContextMenuItem: _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_1__["default"],
    Multiselect: _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_2__["default"],
    AirplayIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_10__.AirplayIcon
  },
  props: {
    meta_data: Object,
    tb_name: String,
    tb_display_name: String
  },
  created: function created() {},
  mounted: function mounted() {
    var _this = this;
    this.tableClosedOrOpened();
    this.loadRetrieved();
    this.loadTbAttrs();
    EventBus.$on("created-extra-file-template", function (data) {
      _this.controle_gac_check_list_diligeances.forEach(function (element, index) {
        var _data$template;
        var template_name = "Pièce(s) jointe(s) -controle_gac_check_list_diligeances" + index + "_" + _this.$route.params.templateId;
        if (template_name == (data === null || data === void 0 || (_data$template = data.template) === null || _data$template === void 0 ? void 0 : _data$template.name)) {
          var _data$template2, _data$template3, _data$template4;
          _this.controle_gac_check_list_diligeances[index]["template"] = {
            id: data === null || data === void 0 || (_data$template2 = data.template) === null || _data$template2 === void 0 ? void 0 : _data$template2.id,
            name: data === null || data === void 0 || (_data$template3 = data.template) === null || _data$template3 === void 0 ? void 0 : _data$template3.name,
            slug: data === null || data === void 0 || (_data$template4 = data.template) === null || _data$template4 === void 0 ? void 0 : _data$template4.slug
          };
          _this.handleInput();
        }
      });
    });
    EventBus.$on("updated-extra-file-upload", function (data) {
      _this.getFiles();
    });
    this.getFiles();
  },
  computed: {},
  data: function data() {
    var vm = this;
    return {
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
      connectsHost: _services_connects_service__WEBPACK_IMPORTED_MODULE_6__["default"].loadablehost(),
      duree_credit0: null,
      mode_paiement0: null,
      listingNote: false,
      contextList: [
      // Ajouter note
      {
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
      meta_parseable: {
        cred_pub_key: this.meta_data["cred_pub_key"],
        tb_name: this.tb_name
      },
      controle_gac_check_list_diligeances: [{
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_11__["default"])(),
        name: "Toutes les diligences ont-elle été effectué avant la mise en place ?",
        value: "",
        parent: "",
        ss_obj: false,
        checked: false,
        disabled: false,
        files: 0,
        template: "",
        comment: "",
        from_monteur_doss: false
      }],
      formDataToBeWatched: {
        notes: [],
        controle_gac_check_list_diligeances: [],
        bref_commentaire: ""
      },
      files: [],
      countries: []
    };
  },
  methods: {
    handleDoubleClickOrClick: function handleDoubleClickOrClick(event, index, element) {
      var _this2 = this;
      EventBus.$emit("open-extra-file-explorer");
      setTimeout(function () {
        EventBus.$emit("data-extra-file-explorer", {
          name: "Pièce(s) jointe(s) {(*)}controle_gac_check_list_diligeances" + index + "_" + _this2.$route.params.templateId,
          view: element === null || element === void 0 ? void 0 : element.from_monteur_doss
        });
      }, 500);
    },
    getFiles: function getFiles() {
      var _this3 = this;
      _services_proxy_service__WEBPACK_IMPORTED_MODULE_7__["default"].proxyEbapis({
        url: this.connectsHost + 'api/get-files',
        method: 'POST',
        data: {
          file_identity: this.meta_data["dossier_credit"].cred_pub_key
        }
      }).then(function (res) {
        var _res$data$data, _res$data$data2;
        res.data = JSON.parse(res.data);
        if (((_res$data$data = res.data.data) === null || _res$data$data === void 0 ? void 0 : _res$data$data.length) > 0 || ((_res$data$data2 = res.data.data) === null || _res$data$data2 === void 0 ? void 0 : _res$data$data2.length) != null) {
          _this3.files = res.data.data;
          _this3.controle_gac_check_list_diligeances.forEach(function (element, index) {
            var count = 0;
            _this3.files.forEach(function (file) {
              var _element$template;
              if ((file === null || file === void 0 ? void 0 : file.extra_file_template_id) != null && (element === null || element === void 0 || (_element$template = element.template) === null || _element$template === void 0 ? void 0 : _element$template.id) == (file === null || file === void 0 ? void 0 : file.extra_file_template_id)) {
                count++;
              }
            });
            _this3.controle_gac_check_list_diligeances[index]['files'] = count;
            _this3.handleInput();
          });
        }
      })["catch"](function (err) {
        console.error(err);
      });
    },
    tableClosedOrOpened: function tableClosedOrOpened() {
      this.seen = this.fetchClosedTables(this.tb_name + this.meta_data["cred_pub_key"]);
    },
    openNotesModal: function openNotesModal() {
      var listing = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.listingNote = listing;
      this.$modal.show(this.tb_name);
    },
    checkboxValCashCall: function checkboxValCashCall(event, index) {
      if (event.target.checked) {
        this.controle_gac_check_list_diligeances[index]["value"] = event.target.value;
      } else {
        this.controle_gac_check_list_diligeances[index]["value"] = "";
      }
      this.handleInput();
    },
    loadRetrieved: function loadRetrieved() {
      var lentb = this.meta_data["dossier_credit"]["tbs_in_use"];
      var createdKey = this.tb_name;
      var createdKeyArr = createdKey.split("tb");
      createdKey = "cred_pub_tb_" + createdKeyArr[1];
      if (lentb.length > 0) {
        if (this.meta_data["dossier_credit"][createdKey] != undefined) {
          var _this$meta_data$dossi;
          this.formDataToBeWatched = this.meta_data["dossier_credit"][createdKey];
          if (((_this$meta_data$dossi = this.meta_data["dossier_credit"][createdKey]) === null || _this$meta_data$dossi === void 0 ? void 0 : _this$meta_data$dossi.controle_gac_check_list_diligeances) != "") {
            var _this$meta_data$dossi2;
            this.controle_gac_check_list_diligeances = (_this$meta_data$dossi2 = this.meta_data["dossier_credit"][createdKey]) === null || _this$meta_data$dossi2 === void 0 ? void 0 : _this$meta_data$dossi2["controle_gac_check_list_diligeances"];
          }
        }
      }
    },
    convertNumber: function convertNumber(valeur) {
      return Number(String(valeur).replace(/\s+/g, ""));
    },
    // AJOUTER
    launchAutoSaver: function launchAutoSaver() {
      var _this4 = this;
      _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["default"].loadUserData().then(function (res) {
        _this4.send2Backend(res, 0, 0);
      })["catch"](function (err) {
        _this4.loadWithError(err);
      });
    },
    addMore: function addMore() {
      this.controle_gac_check_list_diligeances.push({
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_11__["default"])(),
        name: "",
        value: "",
        parent: "",
        ss_obj: false,
        checked: true,
        disabled: false,
        files: 0,
        template: "",
        comment: "",
        from_monteur_doss: false
      });
    },
    remove: function remove(index) {
      this.controle_gac_check_list_diligeances.splice(index, 1);
      this.handleInput();
    },
    somX3: function somX3(ob, key) {
      var som = 0;
      ob.filter(function (elm) {
        var _elm$key;
        som += parseInt((_elm$key = elm[key]) === null || _elm$key === void 0 ? void 0 : _elm$key.toString().replace(/\s/g, ""));
      });
      return som;
    },
    removeByKey: function removeByKey(index, removeList) {
      this[removeList].splice(index, 1);
    },
    loadTbAttrs: function loadTbAttrs() {
      var l = [];
      var topdivel = this.$refs.topdiv;
      // let k = document.querySelectorAll('.subdiv')
      var k = document.querySelectorAll(".subdiv" + this.tb_name);
      if (k.length > 0) {
        k.forEach(function (e) {
          l.push(e.innerText);
        });
      }
      var p = {
        name_of_title: topdivel.innerText,
        list_of_content: l,
        id: "dcp-ppo7-head"
      };
      this.$emit("load-buffer", p);
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
    handleInput: function handleInput() {
      this.formDataToBeWatched.controle_gac_check_list_diligeances = this.controle_gac_check_list_diligeances;
    },
    retract1: function retract1() {
      this.seen1 = !this.seen1;
    },
    retract2: function retract2() {
      this.seen2 = !this.seen2;
    },
    retract3: function retract3() {
      this.seen3 = !this.seen3;
    },
    retract4: function retract4() {
      this.seen4 = !this.seen4;
    },
    deleteTB: function deleteTB() {
      if (confirm("Êtes-vous sûr de vouloir supprimer ce tableau ?")) {
        this.$emit("delete-tb", {
          tb_name: this.tb_name
        });
      }
    }
  },
  watch: {
    formDataToBeWatched: {
      handler: function handler(newVal, oldVal) {
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/workspace/nsia/WorkspaceOnGACAnlCenter.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/workspace/nsia/WorkspaceOnGACAnlCenter.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuedraggable */ "./node_modules/vuedraggable/dist/vuedraggable.umd.js");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuedraggable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../helpers/helper */ "./resources/js/helpers/helper.js");
/* harmony import */ var _helpers_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../helpers/page */ "./resources/js/helpers/page.js");
/* harmony import */ var _tables_annexes_TB0_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../tables/annexes/TB0.vue */ "./resources/js/components/tables/annexes/TB0.vue");
/* harmony import */ var _forms_nsia_cr2_F001_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../forms/nsia/cr2/F001.vue */ "./resources/js/components/forms/nsia/cr2/F001.vue");
/* harmony import */ var _contreanalyse_nsia_filiale_dgr_DGR_FAR1__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../contreanalyse/nsia/filiale/dgr/DGR-FAR1 */ "./resources/js/components/contreanalyse/nsia/filiale/dgr/DGR-FAR1.vue");
/* harmony import */ var _contreanalyse_nsia_filiale_gac_GAC_CHK0__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../contreanalyse/nsia/filiale/gac/GAC-CHK0 */ "./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK0.vue");
/* harmony import */ var _contreanalyse_nsia_filiale_gac_GAC_CHK1__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../contreanalyse/nsia/filiale/gac/GAC-CHK1 */ "./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK1.vue");
/* harmony import */ var _contreanalyse_nsia_filiale_gac_GAC_CHK2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../contreanalyse/nsia/filiale/gac/GAC-CHK2 */ "./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK2.vue");
/* harmony import */ var _contreanalyse_nsia_filiale_gac_GAC_CHK3__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../contreanalyse/nsia/filiale/gac/GAC-CHK3 */ "./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK3.vue");
/* harmony import */ var _contreanalyse_nsia_filiale_gac_GAC_CHK4__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../contreanalyse/nsia/filiale/gac/GAC-CHK4 */ "./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK4.vue");
/* harmony import */ var _contreanalyse_nsia_filiale_gac_GAC_CHK5__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../contreanalyse/nsia/filiale/gac/GAC-CHK5 */ "./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK5.vue");
/* harmony import */ var _contreanalyse_nsia_filiale_gac_GAC_CTR0__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../contreanalyse/nsia/filiale/gac/GAC-CTR0 */ "./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CTR0.vue");



 // Veuillez deposer les tableaux ici
 // Fichiers annexes


/** GAC TABLE IMPORT**/







/** GAC TABLE IMPORT**/

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "WorkspaceOnGACAnlCenter",
  props: {
    cred_pub_key: String,
    list2: Array,
    dossier_credit: Object
  },
  components: {
    tb0: _tables_annexes_TB0_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    tb001: _forms_nsia_cr2_F001_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    tb28001: _contreanalyse_nsia_filiale_dgr_DGR_FAR1__WEBPACK_IMPORTED_MODULE_5__["default"],
    tb300101: _contreanalyse_nsia_filiale_gac_GAC_CHK0__WEBPACK_IMPORTED_MODULE_6__["default"],
    tb300102: _contreanalyse_nsia_filiale_gac_GAC_CHK1__WEBPACK_IMPORTED_MODULE_7__["default"],
    tb300103: _contreanalyse_nsia_filiale_gac_GAC_CHK2__WEBPACK_IMPORTED_MODULE_8__["default"],
    tb300104: _contreanalyse_nsia_filiale_gac_GAC_CHK3__WEBPACK_IMPORTED_MODULE_9__["default"],
    tb300105: _contreanalyse_nsia_filiale_gac_GAC_CHK4__WEBPACK_IMPORTED_MODULE_10__["default"],
    tb300106: _contreanalyse_nsia_filiale_gac_GAC_CHK5__WEBPACK_IMPORTED_MODULE_11__["default"],
    tb300201: _contreanalyse_nsia_filiale_gac_GAC_CTR0__WEBPACK_IMPORTED_MODULE_12__["default"]
  },
  data: function data() {
    return {
      loadableComponent: undefined,
      tb_name: null,
      tb_name0: null,
      inMemoryList: [],
      auto_sorting: false,
      type_entite: null,
      authcheckUsr: null,
      listOfComponents: this.list2,
      doc_tobe_produced: null,
      isDoc: false,
      producMemo: "tp_page missing memorandum",
      producContreAnl: "contre-analyse",
      is_fullscreen: false
    };
  },
  created: function created() {
    // this.loadDependencies()
  },
  mounted: function mounted() {
    var _this = this;
    this.styleDoc();
    EventBus.$on("close-Workspace-right-left", function (data) {
      _this.is_fullscreen = data;
    });
  },
  computed: {
    currentProperties: function currentProperties() {
      return {
        cred_pub_key: this.cred_pub_key,
        dossier_credit: this.dossier_credit
      };
    },
    dragOptions: function dragOptions() {
      return {
        animation: 200,
        group: "description",
        disabled: false,
        ghostClass: "ghost"
      };
    }
  },
  methods: {
    loadDependencies: function loadDependencies() {
      var rootDir = "";
      if (this.entityType == "MICROFINANCE") {
        rootDir = "tables";
      } else {
        rootDir = "forms";
      }
      var subDir = this.realEntity.toLowerCase();
      var finalPath = "./".concat(rootDir, "/").concat(subDir, "/");
      var components = __webpack_require__("./resources/js/components lazy recursive [A-Z0-9]{1,3}\\w+\\.(vue)$");
      var idx2 = 0;
      components.keys().forEach(function (filePath, idx) {
        if (filePath.includes(finalPath)) {
          // load the component
          components(filePath).then(function (module) {
            var componentName = "tb" + idx2;
            if (idx2 == 0) {
              componentName = "tb00";
            }
            Vue.component(componentName, module["default"]);
            idx2++;
          });
        }
      });
    },
    log: function log(evt) {},
    moveCheck: function moveCheck(evt) {
      evt.draggedContext.element;
      this.tb_name = evt.draggedContext.element.component_name;
      this.loadableComponent = evt.draggedContext.element.component_name;
    },
    cloneDog: function cloneDog(_ref) {
      var id = _ref.id,
        name = _ref.name,
        component_name = _ref.component_name;
      this.tb_name = component_name;
      this.loadableComponent = component_name;
      return {
        id: id,
        name: name,
        component_name: component_name
      };
    },
    setSideLoad: function setSideLoad(o) {
      this.$emit("sidelist-updated", o);
    },
    setAutosaving: function setAutosaving() {
      this.$emit("autosaving-updated");
    },
    loadShell: function loadShell() {
      this.$emit("value-updated");
    },
    setInVal: function setInVal(dossier_credit, doc_tobe_produced) {
      console.log("setInVal");
      this.dossier_credit = dossier_credit;
      this.doc_tobe_produced = doc_tobe_produced;
    },
    removeTb: function removeTb(component_name) {
      if (confirm("Voulez-vous vraiment supprimer ce tableau ? Parce que toutes les données du tableau seront supprimées après cette action !")) {
        this.listOfComponents = this.listOfComponents.filter(function (data) {
          return data.component_name !== component_name;
        });
        this.$toasted.show("Tableau supprimé avec succès");
      }
    },
    styleDoc: function styleDoc() {
      if (this.doc_tobe_produced === "MEMORANDUM_CREDIT" || this.doc_tobe_produced === "" || this.doc_tobe_produced === "REVIEW_CONTRE_ANALYSE_FILIALE" || this.doc_tobe_produced === "REVIEW_CONTRE_ANALYSE_GROUPE" || this.doc_tobe_produced === "REVIEW_CONTRE_ANALYSE_RSE" || this.doc_tobe_produced === "REVIEW_CONTRE_ANALYSE_DGR" || this.doc_tobe_produced === "REVIEW_CONTRE_ANALYSE_DAJC" || this.doc_tobe_produced === "REVIEW_CONTRE_ANALYSE_GAC") {
        this.isDoc = true;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dgr/DGR-FAR1.vue?vue&type=template&id=d2157d3a&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dgr/DGR-FAR1.vue?vue&type=template&id=d2157d3a&scoped=true ***!
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
      id: "ca1-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                             " + _vm._s(_vm.tb_display_name) + " : Cover\n                         ")]), _vm._v(" "), _c("div", {
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
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(0), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.denomination_client,
      expression: "denomination_client"
    }],
    staticClass: "form-control",
    attrs: {
      readonly: "",
      type: "text",
      id: "denomination_client"
    },
    domProps: {
      value: _vm.denomination_client
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.denomination_client = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(1), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.indice_client,
      expression: "indice_client"
    }],
    staticClass: "form-control",
    attrs: {
      readonly: "",
      type: "text",
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
  }, [_vm._m(2), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.secteur_activite,
      expression: "secteur_activite"
    }],
    staticClass: "form-control",
    attrs: {
      readonly: "",
      type: "text",
      id: "secteur_activite"
    },
    domProps: {
      value: _vm.secteur_activite
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.secteur_activite = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(3), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.notation_interne,
      expression: "notation_interne",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      required: "",
      type: "text",
      readonly: "",
      id: "notation_interne"
    },
    domProps: {
      value: _vm.notation_interne
    },
    on: {
      change: function change($event) {
        _vm.notation_interne = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(4), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.formDataToBeWatched.notation_externe,
      expression: "formDataToBeWatched.notation_externe",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      required: "",
      type: "text",
      id: "notation_externe"
    },
    domProps: {
      value: _vm.formDataToBeWatched.notation_externe
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.formDataToBeWatched, "notation_externe", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(5), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.formDataToBeWatched.analyste_credit_groupe,
      expression: "formDataToBeWatched.analyste_credit_groupe",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      required: "",
      type: "text",
      readonly: "",
      id: "analyste_credit_groupe"
    },
    domProps: {
      value: _vm.formDataToBeWatched.analyste_credit_groupe
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.formDataToBeWatched, "analyste_credit_groupe", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(6), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.grand_risque,
      expression: "formDataToBeWatched.grand_risque"
    }],
    staticClass: "form-select single-select",
    staticStyle: {
      background: "#00ffff21",
      color: "#000"
    },
    attrs: {
      id: "grand_risque"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formDataToBeWatched, "grand_risque", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      selected: "",
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
  }, [_vm._m(7), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.partie_liee,
      expression: "formDataToBeWatched.partie_liee"
    }],
    staticClass: "form-select single-select",
    staticStyle: {
      background: "#00ffff21",
      color: "#000"
    },
    attrs: {
      id: "partie_liee"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formDataToBeWatched, "partie_liee", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      selected: "",
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
  }, [_vm._m(8), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.inhabituel,
      expression: "formDataToBeWatched.inhabituel"
    }],
    staticClass: "form-select single-select",
    staticStyle: {
      background: "#00ffff21",
      color: "#000"
    },
    attrs: {
      id: "inhabituel"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formDataToBeWatched, "inhabituel", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      selected: "",
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
  }, [_vm._v("Non")])])]), _vm._v(" "), _c("br")]), _vm._v(" "), _c("div", {
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
      id: "ca1-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                             " + _vm._s(_vm.tb_display_name) + " : Cover\n                         ")]), _vm._v(" "), _c("div", {
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
  }, [_vm._v("\n                             Instruction - " + _vm._s(_vm.tb_display_name) + " : Présentation du client\n                         ")]), _vm._v(" "), _c("button", {
    staticClass: "btn-close",
    attrs: {
      type: "button",
      "data-bs-dismiss": "modal",
      "aria-label": "Close"
    }
  })]), _vm._v(" "), _vm._m(9), _vm._v(" "), _vm._m(10)])])])]), _vm._v(" "), _c("note-modal", {
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
    staticClass: "form-label"
  }, [_vm._v("Client\n                            "), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Indice client\n                            "), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": ""
    }
  }, [_vm._v("\n                            Secteur d'activité"), _c("span", {
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
      "for": ""
    }
  }, [_vm._v("\n                        Notation interne (profil du risque)"), _c("span", {
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
      "for": ""
    }
  }, [_vm._v("\n                        Notation externe (profil du risque)"), _c("span", {
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
      "for": ""
    }
  }, [_vm._v("\n                        Analyste credit groupe"), _c("span", {
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
      "for": ""
    }
  }, [_vm._v("\n                            Grand risque"), _c("span", {
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
      "for": ""
    }
  }, [_vm._v("\n                            Partie liée"), _c("span", {
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
      "for": ""
    }
  }, [_vm._v("\n                            Toute exposition sortant du cadre habituel des activités de la banque "), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]);
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK0.vue?vue&type=template&id=5c9ac03f&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK0.vue?vue&type=template&id=5c9ac03f&scoped=true ***!
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
    staticClass: "row bg-light card-width-height"
  }, [_c("ContextMenu", {
    ref: "menu",
    attrs: {
      id: _vm.tb_name,
      cred_pub_key: _vm.meta_parseable.cred_pub_key,
      tb_name: _vm.tb_name,
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
      id: "dcp-ppo7-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Checklist primaire\n                        ")]), _vm._v(" "), _c("div", {
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
    staticClass: "col-12 position-relative"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(0), _vm._v(" "), _c("tbody", [_vm._l(_vm.gac_check_list_diligeances, function (el, index) {
    return _c("tr", {
      key: index
    }, [[_c("td", [index > 7 && !(el !== null && el !== void 0 && el.from_monteur_doss) ? _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: el.name,
        expression: "\n                                                    el.name\n                                                "
      }],
      staticClass: "form-control",
      staticStyle: {
        "min-width": "250px"
      },
      attrs: {
        type: "text",
        required: "",
        disabled: el === null || el === void 0 ? void 0 : el.from_monteur_doss
      },
      domProps: {
        value: el.name
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(el, "name", $event.target.value);
        }
      }
    }) : _c("span", {
      "class": {
        floating_text: (el === null || el === void 0 ? void 0 : el.ss_obj) == true
      }
    }, [_vm._v(_vm._s(el.name))])]), _vm._v(" "), _c("td", [_c("div", {
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
        id: "oui" + index,
        disabled: el === null || el === void 0 ? void 0 : el.from_monteur_doss
      },
      domProps: {
        checked: el.value == "Oui"
      },
      on: {
        change: function change($event) {
          return _vm.checkboxValCashCall($event, index);
        }
      }
    })])]), _vm._v(" "), _c("td", [_c("div", {
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
        value: "Non",
        id: "non" + index,
        disabled: el === null || el === void 0 ? void 0 : el.from_monteur_doss
      },
      domProps: {
        checked: el.value == "Non"
      },
      on: {
        change: function change($event) {
          return _vm.checkboxValCashCall($event, index);
        }
      }
    })])]), _vm._v(" "), _c("td", {
      staticClass: "text-center"
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
        value: "Non applicable",
        id: "non_applicable" + index,
        disabled: el === null || el === void 0 ? void 0 : el.from_monteur_doss
      },
      domProps: {
        checked: el.value == "Non applicable"
      },
      on: {
        change: function change($event) {
          return _vm.checkboxValCashCall($event, index);
        }
      }
    })])]), _vm._v(" "), _c("td", [el.value == "Oui" ? _c("div", {
      staticClass: "d-flex align-items-center text-center justify-content-center"
    }, [_c("div", [(el === null || el === void 0 ? void 0 : el.files) > 0 ? _c("span", {
      staticClass: "p-1 px-2 mx-2 text-nowrap",
      staticStyle: {
        "background-color": "rgb(44, 62, 80)",
        color: "white",
        "font-size": "13px",
        "border-radius": "5px",
        "margin-left": "0!important",
        width: "150px"
      }
    }, [_vm._v(_vm._s((el === null || el === void 0 ? void 0 : el.files) > 0 ? (el === null || el === void 0 ? void 0 : el.files) + " fichier(s) uploadé(s)" : ""))]) : _vm._e()]), _vm._v(" "), el.name.trim() != "" ? _c("div", [_c("button", {
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
          return _vm.handleDoubleClickOrClick($event, index, el);
        }
      }
    }, [_c("i", {
      staticClass: "icofont-attachment"
    })])]) : _vm._e()]) : _c("div", {
      staticClass: "text-center text-danger"
    }, [_vm._v("\n                                            Aucun fichier(s) uploadé(s)\n                                        ")])]), _vm._v(" "), _c("td", [_c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: el.comment,
        expression: "el.comment"
      }],
      staticClass: "form-control",
      staticStyle: {
        "min-width": "150px"
      },
      attrs: {
        cols: "1",
        rows: "1",
        disabled: el === null || el === void 0 ? void 0 : el.from_monteur_doss
      },
      domProps: {
        value: el.comment
      },
      on: {
        change: _vm.handleInput,
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(el, "comment", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [index > 7 && !(el !== null && el !== void 0 && el.from_monteur_doss) ? _c("button", {
      staticStyle: {
        "background-color": "transparent",
        border: "none"
      },
      attrs: {
        type: "button",
        title: "Supprimer ce document"
      },
      on: {
        click: function click($event) {
          return _vm.remove(index);
        }
      }
    }, [_c("trash-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1) : _vm._e()])]], 2);
  }), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "text-right",
    attrs: {
      colspan: "8"
    }
  }, [_c("button", {
    staticStyle: {
      "background-color": "#2c3e50",
      color: "#ffffff",
      "border-radius": "15%",
      border: "none"
    },
    attrs: {
      type: "button",
      title: "Ajouter un document"
    },
    on: {
      click: function click($event) {
        return _vm.addMore();
      }
    }
  }, [_c("plus-icon", {
    staticClass: "custom-class",
    attrs: {
      size: "21"
    }
  })], 1)])])], 2)])]), _vm._v(" "), _c("div", [_vm._m(1), _vm._v(" "), _c("vue-editor", {
    attrs: {
      id: "bref_commentaire"
    },
    on: {
      "update-value": function updateValue($event) {
        _vm.formDataToBeWatched[$event[0]] = $event[1];
      }
    },
    model: {
      value: _vm.formDataToBeWatched.bref_commentaire,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "bref_commentaire", $$v);
      },
      expression: "\n                            formDataToBeWatched.bref_commentaire\n                        "
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
  }, [_vm._v("\n                    Fermer le tableau\n                ")])])]) : _c("div", {
    staticClass: "card card-width-height"
  }, [_c("br"), _vm._v(" "), _c("div", {
    staticClass: "card-header hdc pb-0 pt-2"
  }, [_c("h6", {
    staticClass: "head",
    attrs: {
      id: "dcp-ppo7-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Checklist primaire\n                        ")]), _vm._v(" "), _c("div", {
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
    staticClass: "badge-sm pb-3"
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
      name: "documentation_somise",
      width: 500,
      resizable: "",
      height: "300"
    }
  }, [_c("div", {
    staticClass: "image1"
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
  return _c("thead", [_c("tr", {
    staticClass: "text-center"
  }, [_c("td", {
    staticClass: "th vertical-middle fw-bold"
  }, [_c("label", [_vm._v("LIBELLE")])]), _vm._v(" "), _c("td", {
    staticClass: "th vertical-middle fw-bold"
  }, [_c("label", [_vm._v("OUI ")])]), _vm._v(" "), _c("td", {
    staticClass: "th vertical-middle fw-bold"
  }, [_c("label", [_vm._v("NON ")])]), _vm._v(" "), _c("td", {
    staticClass: "th vertical-middle fw-bold"
  }, [_c("label", [_vm._v("NON APPLICABLE")])]), _vm._v(" "), _c("td", {
    staticClass: "th vertical-middle fw-bold"
  }, [_c("label", [_vm._v("FICHIERS ATTACHES")])]), _vm._v(" "), _c("td", {
    staticClass: "th vertical-middle fw-bold"
  }, [_c("label", [_vm._v("COMMENTAIRE")])]), _vm._v(" "), _c("td", {
    staticClass: "th vertical-middle fw-bold"
  }, [_c("label")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", [_c("b", [_vm._v("Commentaire")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK1.vue?vue&type=template&id=5ca8d7c0&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK1.vue?vue&type=template&id=5ca8d7c0&scoped=true ***!
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
  }, [_c("h6", {
    ref: "topdiv",
    staticClass: "head",
    attrs: {
      id: "ca6-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Fiche de suivi\n                        ")]), _vm._v(" "), _c("div", {
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
  })], 1)])])]), _vm._v(" "), _vm._l(_vm.fiche_suivis, function (ficheSuivi, index) {
    return _c("div", {
      key: index.toString() + "fiche_suivis",
      staticClass: "card-body"
    }, [_vm.seens[index] == true ? _c("div", {
      staticClass: "card-body"
    }, [_c("div", {
      staticClass: "relook-header",
      staticStyle: {
        cursor: "pointer"
      },
      on: {
        click: function click($event) {
          return _vm.retractDynamique(index);
        }
      }
    }, [_c("h6", {
      "class": "subdiv" + _vm.tb_name + " mb-0",
      attrs: {
        id: "frais-annexes"
      }
    }, [_c("div", {
      staticClass: "d-flex justify-content-between"
    }, [_c("div", [_c("button", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: index != 0,
        expression: "index != 0"
      }],
      staticStyle: {
        "background-color": "transparent",
        "margin-right": "10px",
        border: "none"
      },
      attrs: {
        type: "button",
        title: "Supprimer"
      },
      on: {
        click: function click($event) {
          return _vm.removeFiche(index);
        }
      }
    }, [_c("trash-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1), _vm._v("\n                                    Fiche de suivi " + _vm._s(index + 1) + "\n                                ")]), _vm._v(" "), _c("chevron-up-icon", {
      staticClass: "custom-class",
      staticStyle: {
        "float": "right",
        cursor: "pointer"
      },
      attrs: {
        size: "21"
      }
    })], 1)])]), _vm._v(" "), _vm._l(ficheSuivi.fiche, function (elt, index_) {
      return _c("div", {
        key: index_
      }, [_c("div", {
        staticClass: "row mt-2"
      }, [_c("div", {
        staticClass: "col-1"
      }, [_vm._v("FS " + _vm._s(index_ + 1))]), _vm._v(" "), _c("div", {
        staticClass: "col"
      }, [_c("textarea", {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: elt.question,
          expression: "elt.question"
        }],
        staticClass: "form-control",
        "class": _vm.setColor(elt),
        attrs: {
          disabled: elt.is_answered || ficheSuivi.has_notified,
          type: "text",
          cols: "30",
          rows: "1"
        },
        domProps: {
          value: elt.question
        },
        on: {
          change: function change($event) {
            _vm.handleInput1($event, index);
            _vm.setButton($event, index);
          },
          input: function input($event) {
            if ($event.target.composing) return;
            _vm.$set(elt, "question", $event.target.value);
          }
        }
      })]), _vm._v(" "), index_ == 0 && !ficheSuivi.has_notified ? _c("div", {
        staticClass: "col-auto"
      }, [_c("button", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: index_ == 0,
          expression: "index_ == 0"
        }],
        staticStyle: {
          "background-color": "#2c3e50",
          color: "#ffffff",
          "border-radius": "15%",
          border: "none"
        },
        attrs: {
          type: "button",
          title: "Ajouter une nouvelle garantie"
        },
        on: {
          click: function click($event) {
            return _vm.addMore(index);
          }
        }
      }, [_c("plus-icon", {
        staticClass: "custom-class",
        attrs: {
          size: "21"
        }
      })], 1)]) : _vm._e(), _vm._v(" "), index_ != 0 ? _c("div", {
        staticClass: "col-auto"
      }, [_c("button", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: index_ != 0 && elt.is_answered == false,
          expression: "index_ != 0 && elt.is_answered == false"
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
            return _vm.remove(index, index_);
          }
        }
      }, [_c("trash-icon", {
        staticClass: "custom-class",
        attrs: {
          size: "21"
        }
      })], 1)]) : _vm._e(), _vm._v(" "), elt.is_anwered == true ? _c("div", {
        staticClass: "col-auto"
      }) : _vm._e()]), _vm._v(" "), _c("div", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: elt.is_answered,
          expression: "elt.is_answered"
        }],
        staticClass: "row mt-2"
      }, [_c("div", {
        staticClass: "col-1"
      }, [_vm._v("R" + _vm._s(index + 1))]), _vm._v(" "), _c("div", {
        staticClass: "col"
      }, [_c("textarea", {
        directives: [{
          name: "model",
          rawName: "v-model.lazy",
          value: elt.reponse,
          expression: "elt.reponse",
          modifiers: {
            lazy: true
          }
        }],
        staticClass: "form-control text-success",
        staticStyle: {
          color: "green"
        },
        attrs: {
          readonly: "",
          type: "text",
          cols: "30",
          rows: "1"
        },
        domProps: {
          value: elt.reponse
        },
        on: {
          change: [function ($event) {
            return _vm.$set(elt, "reponse", $event.target.value);
          }, _vm.handleInput]
        }
      })]), _vm._v(" "), _c("div", {
        staticClass: "col-auto"
      })])]);
    }), _vm._v(" "), !ficheSuivi.has_notified ? _c("div", {
      staticClass: "row mt-4 ml-4"
    }, [_c("div", {
      staticClass: "col-1"
    }), _vm._v(" "), _c("div", {
      staticClass: "col-9"
    }, [_c("div", {
      staticClass: "d-flex position-relative align-items-center"
    }, [_c("vue-tags-input", {
      staticStyle: {
        width: "100%"
      },
      attrs: {
        "autocomplete-items": _vm.filteredUsers,
        tags: _vm.tags[index],
        placeholder: "Ajouter un collaborateur à notifier"
      },
      on: {
        input: function input($event) {
          return _vm.getTag(index);
        },
        "tags-changed": function tagsChanged($event) {
          return _vm.updateTags($event, index);
        }
      },
      model: {
        value: _vm.tag[index],
        callback: function callback($$v) {
          _vm.$set(_vm.tag, index, $$v);
        },
        expression: "tag[index]"
      }
    }), _vm._v(" "), _vm.searchUser ? _c("span", {
      staticClass: "spinner-border spinner-border spinner-custom-input",
      staticStyle: {
        "margin-right": "17px"
      }
    }) : _vm._e()], 1)]), _vm._v(" "), _c("div", {
      staticClass: "col-2"
    }, [_vm.buttonStatus[index] == true && !_vm.isLoding[index] ? _c("button", {
      staticClass: "btn btn-primary",
      attrs: {
        title: "Choisir un utilisateur pour lui envoyer une notification"
      },
      on: {
        click: function click($event) {
          return _vm.NotifyUser(index);
        }
      }
    }, [_vm._v("Notifier")]) : _vm.buttonStatus[index] == true && _vm.isLoding[index] == true ? _c("div", {
      staticClass: "spinner-border text-primary",
      attrs: {
        role: "status"
      }
    }, [_c("span", {
      staticClass: "sr-only"
    }, [_vm._v("Loading...")])]) : _vm.buttonStatus[index] == false && _vm.isLoding[index] == false ? _c("button", {
      staticClass: "btn btn-primary",
      attrs: {
        title: "Choisir un utilisateur pour lui envoyer une notification",
        disabled: ""
      }
    }, [_vm._v("Notifier")]) : _vm._e()])]) : _vm._e()], 2) : _c("div", [_c("div", {
      staticClass: "card-body"
    }, [_c("div", {
      staticClass: "relook-header",
      staticStyle: {
        cursor: "pointer"
      },
      on: {
        click: function click($event) {
          return _vm.retractDynamique(index);
        }
      }
    }, [_c("h6", {
      staticClass: "mb-0",
      attrs: {
        id: "frais-annexes"
      }
    }, [_c("div", {
      staticClass: "d-flex justify-content-between"
    }, [_c("div", [_c("button", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: index != 0,
        expression: "index != 0"
      }],
      staticStyle: {
        "background-color": "transparent",
        "margin-right": "10px",
        border: "none"
      },
      attrs: {
        type: "button",
        title: "Supprimer"
      },
      on: {
        click: function click($event) {
          return _vm.removeFiche(index);
        }
      }
    }, [_c("trash-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1), _vm._v("\n                                        Fiche de suivi " + _vm._s(index + 1) + "\n                                    ")]), _vm._v(" "), _c("chevron-down-icon", {
      staticClass: "custom-class",
      staticStyle: {
        "float": "right",
        cursor: "pointer"
      },
      attrs: {
        size: "21"
      }
    })], 1)])])])]), _vm._v(" "), _c("div", {
      staticClass: "card-body"
    }, [_c("div", {
      staticClass: "d-flex justify-content-end"
    }, [_c("button", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.fiche_suivis.length - 1 == index,
        expression: "fiche_suivis.length - 1 == index"
      }],
      staticClass: "btn shadow-md text-white text-end mb-3",
      staticStyle: {
        cursor: "pointer",
        background: "#2c3e50",
        "max-width": "max-content"
      },
      attrs: {
        type: "button",
        name: "button"
      },
      on: {
        click: function click($event) {
          return _vm.addMoreFiche();
        }
      }
    }, [_vm._v("\n                            Ajouter une nouvelle fiche\n                        ")])]), _vm._v(" "), _c("hr", {
      staticClass: "my-0 py-0"
    })])]);
  }), _vm._v(" "), _c("div", {
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
  }, [_vm._v("\n                Fermer le tableau\n            ")])], 2) : _c("div", {
    staticClass: "card card-width-height"
  }, [_c("br"), _vm._v(" "), _c("div", {
    staticClass: "card-header hdc pb-0 pt-2"
  }, [_c("h6", {
    ref: "topdiv",
    staticClass: "head",
    attrs: {
      id: "ca6-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Fiche de suivi\n                        ")]), _vm._v(" "), _c("div", {
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
    staticClass: "badge-sm pb-3"
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
  })], 1)])])])])], 1), _vm._v(" "), _c("modal", {
    staticClass: "pb-5",
    attrs: {
      name: "confirm_supp_fiche_suivis",
      width: "300",
      height: "auto",
      adaptive: true,
      resizable: true
    }
  }, [_c("div", {
    staticClass: "container py-3 mb-2",
    staticStyle: {
      "max-height": "100%",
      overflow: "auto"
    }
  }, [_c("div", {
    staticClass: "col-12 fw-bold mb-2"
  }, [_vm._v("Voulez-vous supprimer cette fiche ?")]), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-content-between"
  }, [_c("button", {
    staticClass: "btn bg-danger border-none",
    on: {
      click: function click($event) {
        return _vm.closeModal();
      }
    }
  }, [_vm._v("NON")]), _vm._v(" "), _c("button", {
    staticClass: "btn bg-success",
    on: {
      click: function click($event) {
        return _vm.deleteFiche(_vm.toDelete);
      }
    }
  }, [_vm._v("OUI")])])])]), _vm._v(" "), _c("note-modal", {
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
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK2.vue?vue&type=template&id=5cb6ef41&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK2.vue?vue&type=template&id=5cb6ef41&scoped=true ***!
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
    staticClass: "row bg-light card-width-height"
  }, [_c("ContextMenu", {
    ref: "menu",
    attrs: {
      id: _vm.tb_name,
      cred_pub_key: _vm.meta_parseable.cred_pub_key,
      tb_name: _vm.tb_name,
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
      id: "ts3-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n              " + _vm._s(_vm.tb_display_name) + " : Fichiers annexes\n            ")]), _vm._v(" "), _c("div", {
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
    staticClass: "table-responsive mb-4"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.isUploading,
      expression: "isUploading"
    }],
    staticClass: "text-center"
  }, [_c("span", {
    staticClass: "spinner-border"
  }), _vm._v(" "), _c("div", [_vm._v("Upload du fichier...")])]), _vm._v(" "), _c("table", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !_vm.isUploading,
      expression: "!isUploading"
    }],
    staticClass: "table table-borderless"
  }, [_vm._m(1), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", [_c("div", {
    staticClass: "d-flex"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.fileToUpload.file_name,
      expression: "fileToUpload.file_name"
    }],
    staticClass: "form-control",
    staticStyle: {
      width: "100%"
    },
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.fileToUpload.file_name
    },
    on: {
      change: _vm.showRefs,
      keyup: function keyup($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
        return _vm.addFileType.apply(null, arguments);
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.fileToUpload, "file_name", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.fileToUpload.file_name.trim() != "" ? _c("button", {
    staticClass: "btn shadow-md text-white mx-2",
    staticStyle: {
      cursor: "pointer",
      background: "#2c3e50",
      width: "36px",
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
        return _vm.handleDoubleClickOrClick($event);
      }
    }
  }, [_c("i", {
    staticClass: "icofont-attachment"
  })]) : _vm._e()])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_vm._m(2), _vm._v(" "), _c("table", {
    staticClass: "table table-borderless"
  }, [_vm._m(3), _vm._v(" "), _vm.isLoading ? _c("tbody", [_c("tr", [_vm.isLoading ? _c("td", {
    staticClass: "text-center"
  }, [_c("span", {
    staticClass: "spinner-border"
  }), _vm._v(" "), _c("div", [_vm._v("Chargement des données")])]) : _c("td", [_vm._v("\n                      Aucun fichier attaché\n                  ")])])]) : [_vm.files.length > 0 ? _c("tbody", _vm._l(_vm.files, function (file, index) {
    var _file$ext;
    return _c("tr", {
      key: index
    }, [_c("td", {
      attrs: {
        colspan: "2"
      }
    }, [_c("label", [_vm._v(" " + _vm._s(file.file_name))])]), _vm._v(" "), _c("td", {
      attrs: {
        align: "end"
      }
    }, [["png", "webp", "jpg", "jpeg"].includes(file === null || file === void 0 ? void 0 : file.ext.toLowerCase()) ? _c("button", {
      staticClass: "btn btn-sm",
      attrs: {
        title: "voir le fichier"
      },
      on: {
        click: function click($event) {
          return _vm.preview(file);
        }
      }
    }, [_c("EyeIcon")], 1) : (file === null || file === void 0 || (_file$ext = file.ext) === null || _file$ext === void 0 ? void 0 : _file$ext.toLowerCase()) == "pdf" ? _c("a", {
      staticClass: "btn btn-sm",
      on: {
        click: function click($event) {
          return _vm.openPDFReaderModal(_vm.httpHost + "://" + file.file_url);
        }
      }
    }, [_c("i", {
      staticClass: "icofont icofont-eye"
    })]) : _c("a", {
      staticClass: "btn btn-sm",
      on: {
        click: function click($event) {
          return _vm.downloadFile(file.file_url);
        }
      }
    }, [_c("i", {
      staticClass: "icofont icofont-download"
    })]), _vm._v(" "), _vm.userConnected == file.user_id ? _c("button", {
      staticClass: "btn border-0 btn-sm",
      attrs: {
        disabled: _vm.deleteLoading[index]
      },
      on: {
        click: function click($event) {
          return _vm.deleteFile({
            id: file.id,
            file_url: file.file_url
          }, file, index);
        }
      }
    }, [_c("TrashIcon")], 1) : _vm._e()])]);
  }), 0) : _c("tbody", [_vm._m(4)])]], 2)])]), _vm._v(" "), _c("div", {
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
      id: "ts3-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n              " + _vm._s(_vm.tb_display_name) + " : Fichiers annexes\n            ")]), _vm._v(" "), _c("div", {
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
    staticClass: "badge-sm pb-3"
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
  })], 1)])])])])], 1), _vm._v(" "), _c("modal", {
    attrs: {
      name: "preview1",
      resizable: "",
      width: "1000",
      height: "auto"
    }
  }, [_vm.currentFile != null ? _c("div", {
    staticClass: "row justify-content-center"
  }, [_c("div", {
    staticClass: "w-100 p-0 m-0 preview-img",
    attrs: {
      allowfullscreen: ""
    },
    on: {
      dblclick: _vm.fullscreen
    }
  }, [_c("img", {
    staticStyle: {
      "max-width": "100%",
      "max-height": "100%"
    },
    attrs: {
      src: _vm.httpHost + "://" + _vm.currentFile.file_url
    }
  })])]) : _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "alert alert-danger"
  }, [_vm._v("\n        Aucun fichier attaché\n      ")])])]), _vm._v(" "), _c("modal", {
    staticClass: "pb-2",
    attrs: {
      name: "renderpdf",
      width: "1000",
      height: "auto",
      adaptive: true,
      resizable: true
    }
  }, [_c("div", {
    staticStyle: {
      height: "550px"
    }
  }, [_c("embed", {
    attrs: {
      src: _vm.httpHost + "://" + _vm.rendedpdf,
      width: "80%",
      height: "80%",
      type: "application/pdf"
    }
  })])]), _vm._v(" "), _c("note-modal", {
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
  return _c("h5", [_vm._v("\n              Fichiers annexes à attacher\n              "), _c("hr", {
    staticClass: "mt-1"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", [_vm._v("Nom du fichier")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("h5", [_vm._v("\n              Fichiers annexes attachés\n              "), _c("hr", {
    staticClass: "mt-1"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", {
    attrs: {
      colspan: "2"
    }
  }, [_vm._v("\n                          Nom du fichier\n                      ")]), _vm._v(" "), _c("th", {
    staticClass: "align-end text-end",
    attrs: {
      align: "end"
    }
  }, [_vm._v("Actions")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", [_c("td", [_vm._v("\n                          Aucun fichier attaché\n                      ")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK3.vue?vue&type=template&id=5cc506c2&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK3.vue?vue&type=template&id=5cc506c2&scoped=true ***!
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
    staticClass: "row bg-light card-width-height"
  }, [_c("ContextMenu", {
    ref: "menu",
    attrs: {
      id: _vm.tb_name,
      cred_pub_key: _vm.meta_parseable.cred_pub_key,
      tb_name: _vm.tb_name,
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
      id: "dcp-ppo7-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Document de mise en plase\n                        ")]), _vm._v(" "), _c("div", {
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
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(0), _vm._v(" "), _c("tbody", [_vm._l(_vm.document_mise_en_places, function (el, index) {
    return _c("tr", {
      key: index
    }, [[_c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: el.name,
        expression: "\n                                                    el.name\n                                                "
      }],
      staticClass: "form-control",
      staticStyle: {
        "min-width": "250px"
      },
      attrs: {
        type: "text",
        required: "",
        disabled: el === null || el === void 0 ? void 0 : el.from_monteur_doss
      },
      domProps: {
        value: el.name
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(el, "name", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [el.name ? _c("div", {
      staticClass: "d-flex align-items-center text-center justify-content-center"
    }, [_c("div", [(el === null || el === void 0 ? void 0 : el.files) > 0 ? _c("span", {
      staticClass: "p-1 px-2 mx-2 text-nowrap",
      staticStyle: {
        "background-color": "rgb(44, 62, 80)",
        color: "white",
        "font-size": "13px",
        "border-radius": "5px",
        "margin-left": "0!important",
        width: "150px"
      }
    }, [_vm._v(_vm._s((el === null || el === void 0 ? void 0 : el.files) > 0 ? (el === null || el === void 0 ? void 0 : el.files) + " fichier(s) uploadé(s)" : ""))]) : _vm._e()]), _vm._v(" "), _c("div", [_c("button", {
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
          return _vm.handleDoubleClickOrClick($event, index, el);
        }
      }
    }, [_c("i", {
      staticClass: "icofont-attachment"
    })])])]) : _c("div", {
      staticClass: "text-center text-danger"
    }, [_vm._v("\n                                            Saisissez le nom du document avant l'uploade d'un fichier\n                                        ")])]), _vm._v(" "), _c("td", [_c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: el.comment,
        expression: "el.comment"
      }],
      staticClass: "form-control",
      staticStyle: {
        "min-width": "150px"
      },
      attrs: {
        cols: "1",
        rows: "1",
        disabled: el === null || el === void 0 ? void 0 : el.from_monteur_doss
      },
      domProps: {
        value: el.comment
      },
      on: {
        change: _vm.handleInput,
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(el, "comment", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_vm.document_mise_en_places.length > 1 && index > 2 ? _c("button", {
      staticStyle: {
        "background-color": "transparent",
        border: "none"
      },
      attrs: {
        type: "button",
        title: "Supprimer ce document"
      },
      on: {
        click: function click($event) {
          return _vm.remove(index);
        }
      }
    }, [_c("trash-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1) : _vm._e()])]], 2);
  }), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "text-right",
    attrs: {
      colspan: "8"
    }
  }, [_c("button", {
    staticStyle: {
      "background-color": "#2c3e50",
      color: "#ffffff",
      "border-radius": "15%",
      border: "none"
    },
    attrs: {
      type: "button",
      title: "Ajouter un document"
    },
    on: {
      click: function click($event) {
        return _vm.addMore();
      }
    }
  }, [_c("plus-icon", {
    staticClass: "custom-class",
    attrs: {
      size: "21"
    }
  })], 1)])])], 2)])]), _vm._v(" "), _c("div", [_vm._m(1), _vm._v(" "), _c("vue-editor", {
    attrs: {
      id: "commentaire"
    },
    on: {
      "update-value": function updateValue($event) {
        _vm.formDataToBeWatched[$event[0]] = $event[1];
      }
    },
    model: {
      value: _vm.formDataToBeWatched.commentaire,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "commentaire", $$v);
      },
      expression: "\n                            formDataToBeWatched.commentaire\n                        "
    }
  })], 1)]), _vm._v(" "), _c("div", {
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
      id: "dcp-ppo7-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Document de mise en plase\n                        ")]), _vm._v(" "), _c("div", {
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
    staticClass: "badge-sm pb-3"
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
      name: "documentation_somise",
      width: 500,
      resizable: "",
      height: "300"
    }
  }, [_c("div", {
    staticClass: "image1"
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
  return _c("thead", [_c("tr", {
    staticClass: "text-center"
  }, [_c("td", {
    staticClass: "th vertical-middle fw-bold"
  }, [_c("label", [_vm._v("Nom")])]), _vm._v(" "), _c("td", {
    staticClass: "th vertical-middle fw-bold"
  }, [_c("label", [_vm._v("FICHIERS ATTACHES")])]), _vm._v(" "), _c("td", {
    staticClass: "th vertical-middle fw-bold"
  }, [_c("label", [_vm._v("COMMENTAIRE")])]), _vm._v(" "), _c("td", {
    staticClass: "th vertical-middle fw-bold"
  }, [_c("label")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", [_c("b", [_vm._v("Commentaire")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK4.vue?vue&type=template&id=5cd31e43&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK4.vue?vue&type=template&id=5cd31e43&scoped=true ***!
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
    staticClass: "row bg-light card-width-height"
  }, [_c("ContextMenu", {
    ref: "menu",
    attrs: {
      id: _vm.tb_name,
      cred_pub_key: _vm.meta_parseable.cred_pub_key,
      tb_name: _vm.tb_name,
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
      id: "gac-chk0-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Commentaire libre\n                        ")]), _vm._v(" "), _c("div", {
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
    staticClass: "card-body"
  }, [_vm._m(0), _vm._v(" "), _c("vue-editor", {
    attrs: {
      id: "bref_commentaire"
    },
    on: {
      "update-value": function updateValue($event) {
        _vm.formDataToBeWatched[$event[0]] = $event[1];
      }
    },
    model: {
      value: _vm.formDataToBeWatched.bref_commentaire,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "bref_commentaire", $$v);
      },
      expression: "\n                                    formDataToBeWatched.bref_commentaire\n                                "
    }
  })], 1)]), _vm._v(" "), _c("div", {
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
      id: "gac-chk0-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Commentaire libre\n                        ")]), _vm._v(" "), _c("div", {
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
    staticClass: "badge-sm pb-3"
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
      name: "documentation_somise",
      width: 500,
      resizable: "",
      height: "300"
    }
  }, [_c("div", {
    staticClass: "image1"
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
  return _c("label", [_c("b", [_vm._v("Commentaire de l'Agent en Charge de Crédit")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK5.vue?vue&type=template&id=5ce135c4&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK5.vue?vue&type=template&id=5ce135c4&scoped=true ***!
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
  }, [_c("h6", {
    ref: "topdiv",
    staticClass: "head",
    attrs: {
      id: "ca6-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Fiche de suivi DAJC\n                        ")]), _vm._v(" "), _c("div", {
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
  })], 1)])])]), _vm._v(" "), _vm._l(_vm.fiche_suivis, function (ficheSuivi, index) {
    return _c("div", {
      key: index.toString() + "fiche_suivis",
      staticClass: "card-body"
    }, [_vm.seens[index] == true ? _c("div", {
      staticClass: "card-body"
    }, [_c("div", {
      staticClass: "relook-header",
      staticStyle: {
        cursor: "pointer"
      },
      on: {
        click: function click($event) {
          return _vm.retractDynamique(index);
        }
      }
    }, [_c("h6", {
      "class": "subdiv" + _vm.tb_name + " mb-0",
      attrs: {
        id: "frais-annexes"
      }
    }, [_c("div", {
      staticClass: "d-flex justify-content-between"
    }, [_c("div", [_c("button", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: index != 0,
        expression: "index != 0"
      }],
      staticStyle: {
        "background-color": "transparent",
        "margin-right": "10px",
        border: "none"
      },
      attrs: {
        type: "button",
        title: "Supprimer"
      },
      on: {
        click: function click($event) {
          return _vm.removeFiche(index);
        }
      }
    }, [_c("trash-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1), _vm._v("\n                                    Fiche de suivi " + _vm._s(index + 1) + "\n                                ")]), _vm._v(" "), _c("chevron-up-icon", {
      staticClass: "custom-class",
      staticStyle: {
        "float": "right",
        cursor: "pointer"
      },
      attrs: {
        size: "21"
      }
    })], 1)])]), _vm._v(" "), _vm._l(ficheSuivi.fiche, function (elt, index_) {
      return _c("div", {
        key: index_
      }, [_c("div", {
        staticClass: "row mt-2"
      }, [_c("div", {
        staticClass: "col-1"
      }, [_vm._v("FS " + _vm._s(index_ + 1))]), _vm._v(" "), _c("div", {
        staticClass: "col"
      }, [_c("textarea", {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: elt.question,
          expression: "elt.question"
        }],
        staticClass: "form-control",
        "class": _vm.setColor(elt),
        attrs: {
          disabled: elt.is_answered || ficheSuivi.has_notified,
          type: "text",
          cols: "30",
          rows: "1"
        },
        domProps: {
          value: elt.question
        },
        on: {
          change: function change($event) {
            _vm.handleInput1($event, index);
            _vm.setButton($event, index);
          },
          input: function input($event) {
            if ($event.target.composing) return;
            _vm.$set(elt, "question", $event.target.value);
          }
        }
      })]), _vm._v(" "), index_ == 0 && !ficheSuivi.has_notified ? _c("div", {
        staticClass: "col-auto"
      }, [_c("button", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: index_ == 0,
          expression: "index_ == 0"
        }],
        staticStyle: {
          "background-color": "#2c3e50",
          color: "#ffffff",
          "border-radius": "15%",
          border: "none"
        },
        attrs: {
          type: "button",
          title: "Ajouter une nouvelle garantie"
        },
        on: {
          click: function click($event) {
            return _vm.addMore(index);
          }
        }
      }, [_c("plus-icon", {
        staticClass: "custom-class",
        attrs: {
          size: "21"
        }
      })], 1)]) : _vm._e(), _vm._v(" "), index_ != 0 ? _c("div", {
        staticClass: "col-auto"
      }, [_c("button", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: index_ != 0 && elt.is_answered == false,
          expression: "index_ != 0 && elt.is_answered == false"
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
            return _vm.remove(index, index_);
          }
        }
      }, [_c("trash-icon", {
        staticClass: "custom-class",
        attrs: {
          size: "21"
        }
      })], 1)]) : _vm._e(), _vm._v(" "), elt.is_anwered == true ? _c("div", {
        staticClass: "col-auto"
      }) : _vm._e()]), _vm._v(" "), _c("div", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: elt.is_answered,
          expression: "elt.is_answered"
        }],
        staticClass: "row mt-2"
      }, [_c("div", {
        staticClass: "col-1"
      }, [_vm._v("R" + _vm._s(index + 1))]), _vm._v(" "), _c("div", {
        staticClass: "col"
      }, [_c("textarea", {
        directives: [{
          name: "model",
          rawName: "v-model.lazy",
          value: elt.reponse,
          expression: "elt.reponse",
          modifiers: {
            lazy: true
          }
        }],
        staticClass: "form-control text-success",
        staticStyle: {
          color: "green"
        },
        attrs: {
          readonly: "",
          type: "text",
          cols: "30",
          rows: "1"
        },
        domProps: {
          value: elt.reponse
        },
        on: {
          change: [function ($event) {
            return _vm.$set(elt, "reponse", $event.target.value);
          }, _vm.handleInput]
        }
      })]), _vm._v(" "), _c("div", {
        staticClass: "col-auto"
      })])]);
    }), _vm._v(" "), !ficheSuivi.has_notified ? _c("div", {
      staticClass: "row mt-4 ml-4"
    }, [_c("div", {
      staticClass: "col-1"
    }), _vm._v(" "), _c("div", {
      staticClass: "col-9"
    }, [_c("div", {
      staticClass: "d-flex position-relative align-items-center"
    }, [_c("vue-tags-input", {
      staticStyle: {
        width: "100%"
      },
      attrs: {
        "autocomplete-items": _vm.filteredUsers,
        tags: _vm.tags[index],
        placeholder: "Ajouter un collaborateur à notifier"
      },
      on: {
        input: function input($event) {
          return _vm.getTag(index);
        },
        "tags-changed": function tagsChanged($event) {
          return _vm.updateTags($event, index);
        }
      },
      model: {
        value: _vm.tag[index],
        callback: function callback($$v) {
          _vm.$set(_vm.tag, index, $$v);
        },
        expression: "tag[index]"
      }
    }), _vm._v(" "), _vm.searchUser ? _c("span", {
      staticClass: "spinner-border spinner-border spinner-custom-input",
      staticStyle: {
        "margin-right": "17px"
      }
    }) : _vm._e()], 1)]), _vm._v(" "), _c("div", {
      staticClass: "col-2"
    }, [_vm.buttonStatus[index] == true && !_vm.isLoding[index] ? _c("button", {
      staticClass: "btn btn-primary",
      attrs: {
        title: "Choisir un utilisateur pour lui envoyer une notification"
      },
      on: {
        click: function click($event) {
          return _vm.NotifyUser(index);
        }
      }
    }, [_vm._v("Notifier")]) : _vm.buttonStatus[index] == true && _vm.isLoding[index] == true ? _c("div", {
      staticClass: "spinner-border text-primary",
      attrs: {
        role: "status"
      }
    }, [_c("span", {
      staticClass: "sr-only"
    }, [_vm._v("Loading...")])]) : _vm.buttonStatus[index] == false && _vm.isLoding[index] == false ? _c("button", {
      staticClass: "btn btn-primary",
      attrs: {
        title: "Choisir un utilisateur pour lui envoyer une notification",
        disabled: ""
      }
    }, [_vm._v("Notifier")]) : _vm._e()])]) : _vm._e()], 2) : _c("div", [_c("div", {
      staticClass: "card-body"
    }, [_c("div", {
      staticClass: "relook-header",
      staticStyle: {
        cursor: "pointer"
      },
      on: {
        click: function click($event) {
          return _vm.retractDynamique(index);
        }
      }
    }, [_c("h6", {
      staticClass: "mb-0",
      attrs: {
        id: "frais-annexes"
      }
    }, [_c("div", {
      staticClass: "d-flex justify-content-between"
    }, [_c("div", [_c("button", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: index != 0,
        expression: "index != 0"
      }],
      staticStyle: {
        "background-color": "transparent",
        "margin-right": "10px",
        border: "none"
      },
      attrs: {
        type: "button",
        title: "Supprimer"
      },
      on: {
        click: function click($event) {
          return _vm.removeFiche(index);
        }
      }
    }, [_c("trash-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1), _vm._v("\n                                        Fiche de suivi " + _vm._s(index + 1) + "\n                                    ")]), _vm._v(" "), _c("chevron-down-icon", {
      staticClass: "custom-class",
      staticStyle: {
        "float": "right",
        cursor: "pointer"
      },
      attrs: {
        size: "21"
      }
    })], 1)])])])]), _vm._v(" "), _c("div", {
      staticClass: "card-body"
    }, [_c("div", {
      staticClass: "d-flex justify-content-end"
    }, [_c("button", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.fiche_suivis.length - 1 == index,
        expression: "fiche_suivis.length - 1 == index"
      }],
      staticClass: "btn shadow-md text-white text-end mb-3",
      staticStyle: {
        cursor: "pointer",
        background: "#2c3e50",
        "max-width": "max-content"
      },
      attrs: {
        type: "button",
        name: "button"
      },
      on: {
        click: function click($event) {
          return _vm.addMoreFiche();
        }
      }
    }, [_vm._v("\n                            Ajouter une nouvelle fiche\n                        ")])]), _vm._v(" "), _c("hr", {
      staticClass: "my-0 py-0"
    })])]);
  }), _vm._v(" "), _c("div", {
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
  }, [_vm._v("\n                Fermer le tableau\n            ")])], 2) : _c("div", {
    staticClass: "card card-width-height"
  }, [_c("br"), _vm._v(" "), _c("div", {
    staticClass: "card-header hdc pb-0 pt-2"
  }, [_c("h6", {
    ref: "topdiv",
    staticClass: "head",
    attrs: {
      id: "ca6-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Fiche de suivi DAJC\n                        ")]), _vm._v(" "), _c("div", {
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
    staticClass: "badge-sm pb-3"
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
  })], 1)])])])])], 1), _vm._v(" "), _c("modal", {
    staticClass: "pb-5",
    attrs: {
      name: "confirm_supp_fiche_suivis",
      width: "300",
      height: "auto",
      adaptive: true,
      resizable: true
    }
  }, [_c("div", {
    staticClass: "container py-3 mb-2",
    staticStyle: {
      "max-height": "100%",
      overflow: "auto"
    }
  }, [_c("div", {
    staticClass: "col-12 fw-bold mb-2"
  }, [_vm._v("Voulez-vous supprimer cette fiche ?")]), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-content-between"
  }, [_c("button", {
    staticClass: "btn bg-danger border-none",
    on: {
      click: function click($event) {
        return _vm.closeModal();
      }
    }
  }, [_vm._v("NON")]), _vm._v(" "), _c("button", {
    staticClass: "btn bg-success",
    on: {
      click: function click($event) {
        return _vm.deleteFiche(_vm.toDelete);
      }
    }
  }, [_vm._v("OUI")])])])]), _vm._v(" "), _c("note-modal", {
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
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CTR0.vue?vue&type=template&id=395118b8&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CTR0.vue?vue&type=template&id=395118b8&scoped=true ***!
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
    staticClass: "row bg-light card-width-height"
  }, [_c("ContextMenu", {
    ref: "menu",
    attrs: {
      id: _vm.tb_name,
      cred_pub_key: _vm.meta_parseable.cred_pub_key,
      tb_name: _vm.tb_name,
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
      id: "dcp-ppo7-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Revue de la fiche de mise en place\n                        ")]), _vm._v(" "), _c("div", {
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
    staticClass: "col-12 position-relative"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(0), _vm._v(" "), _c("tbody", [_vm._l(_vm.controle_gac_check_list_diligeances, function (el, index) {
    return _c("tr", {
      key: index
    }, [_c("td", [index > 0 ? _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: el.name,
        expression: "el.name"
      }],
      staticClass: "form-control",
      staticStyle: {
        "min-width": "250px"
      },
      attrs: {
        type: "text",
        required: "",
        disabled: el === null || el === void 0 ? void 0 : el.from_monteur_doss
      },
      domProps: {
        value: el.name
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(el, "name", $event.target.value);
        }
      }
    }) : _c("span", [_vm._v(_vm._s(el.name))])]), _vm._v(" "), _c("td", [_c("div", {
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
        id: "oui" + index,
        disabled: el === null || el === void 0 ? void 0 : el.from_monteur_doss
      },
      domProps: {
        checked: el.value == "Oui"
      },
      on: {
        change: function change($event) {
          return _vm.checkboxValCashCall($event, index);
        }
      }
    })])]), _vm._v(" "), _c("td", [_c("div", {
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
        value: "Non",
        id: "non" + index,
        disabled: el === null || el === void 0 ? void 0 : el.from_monteur_doss
      },
      domProps: {
        checked: el.value == "Non"
      },
      on: {
        change: function change($event) {
          return _vm.checkboxValCashCall($event, index);
        }
      }
    })])]), _vm._v(" "), _c("td", {
      staticClass: "text-center"
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
        value: "Non applicable",
        id: "non_applicable" + index,
        disabled: el === null || el === void 0 ? void 0 : el.from_monteur_doss
      },
      domProps: {
        checked: el.value == "Non applicable"
      },
      on: {
        change: function change($event) {
          return _vm.checkboxValCashCall($event, index);
        }
      }
    })])]), _vm._v(" "), _c("td", [el.value == "Oui" ? _c("div", {
      staticClass: "d-flex align-items-center text-center justify-content-center"
    }, [_c("div", [(el === null || el === void 0 ? void 0 : el.files) > 0 ? _c("span", {
      staticClass: "p-1 px-2 mx-2 text-nowrap",
      staticStyle: {
        "background-color": "rgb(44, 62, 80)",
        color: "white",
        "font-size": "13px",
        "border-radius": "5px",
        "margin-left": "0!important",
        width: "150px"
      }
    }, [_vm._v(_vm._s((el === null || el === void 0 ? void 0 : el.files) > 0 ? (el === null || el === void 0 ? void 0 : el.files) + " fichier(s) uploadé(s)" : ""))]) : _vm._e()]), _vm._v(" "), el.name.trim() != "" ? _c("div", [_c("button", {
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
          return _vm.handleDoubleClickOrClick($event, index, el);
        }
      }
    }, [_c("i", {
      staticClass: "icofont-attachment"
    })])]) : _vm._e()]) : _c("div", {
      staticClass: "text-center text-danger"
    }, [_vm._v("\n                                                Aucun fichier(s) uploadé(s)\n                                            ")])]), _vm._v(" "), _c("td", [_c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: el.comment,
        expression: "el.comment"
      }],
      staticClass: "form-control",
      staticStyle: {
        "min-width": "150px"
      },
      attrs: {
        cols: "1",
        rows: "1",
        disabled: el === null || el === void 0 ? void 0 : el.from_monteur_doss
      },
      domProps: {
        value: el.comment
      },
      on: {
        change: _vm.handleInput,
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(el, "comment", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [index > 0 ? _c("button", {
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
          return _vm.remove(index);
        }
      }
    }, [_c("trash-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1) : _vm._e()])]);
  }), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "text-right",
    attrs: {
      colspan: "8"
    }
  }, [_c("button", {
    staticStyle: {
      "background-color": "#2c3e50",
      color: "#ffffff",
      "border-radius": "15%",
      border: "none"
    },
    attrs: {
      type: "button",
      title: "Ajouter un document"
    },
    on: {
      click: function click($event) {
        return _vm.addMore();
      }
    }
  }, [_c("plus-icon", {
    staticClass: "custom-class",
    attrs: {
      size: "21"
    }
  })], 1)])])], 2)])]), _vm._v(" "), _c("div", [_vm._m(1), _vm._v(" "), _c("vue-editor", {
    attrs: {
      id: "bref_commentaire"
    },
    on: {
      "update-value": function updateValue($event) {
        _vm.formDataToBeWatched[$event[0]] = $event[1];
      }
    },
    model: {
      value: _vm.formDataToBeWatched.bref_commentaire,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "bref_commentaire", $$v);
      },
      expression: "\n                                formDataToBeWatched.bref_commentaire\n                            "
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
  }, [_vm._v("\n                    Fermer le tableau\n                ")])])]) : _c("div", {
    staticClass: "card card-width-height"
  }, [_c("br"), _vm._v(" "), _c("div", {
    staticClass: "card-header hdc pb-0 pt-2"
  }, [_c("h6", {
    staticClass: "head",
    attrs: {
      id: "dcp-ppo7-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Revue de la fiche de mise en place\n                        ")]), _vm._v(" "), _c("div", {
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
    staticClass: "badge-sm pb-3"
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
      name: "documentation_somise",
      width: 500,
      resizable: "",
      height: "300"
    }
  }, [_c("div", {
    staticClass: "image1"
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
  return _c("thead", [_c("tr", {
    staticClass: "text-center"
  }, [_c("td", {
    staticClass: "th vertical-middle fw-bold"
  }, [_c("label", [_vm._v("LIBELLE")])]), _vm._v(" "), _c("td", {
    staticClass: "th vertical-middle fw-bold"
  }, [_c("label", [_vm._v("OUI")])]), _vm._v(" "), _c("td", {
    staticClass: "th vertical-middle fw-bold"
  }, [_c("label", [_vm._v("NON")])]), _vm._v(" "), _c("td", {
    staticClass: "th vertical-middle fw-bold"
  }, [_c("label", [_vm._v("NON APPLICABLE")])]), _vm._v(" "), _c("td", {
    staticClass: "th vertical-middle fw-bold"
  }, [_c("label", [_vm._v("FICHIERS ATTACHES")])]), _vm._v(" "), _c("td", {
    staticClass: "th vertical-middle fw-bold"
  }, [_c("label", [_vm._v("COMMENTAIRE")])]), _vm._v(" "), _c("td", {
    staticClass: "th vertical-middle fw-bold"
  }, [_c("label")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", [_c("b", [_vm._v("Commentaire")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/workspace/nsia/WorkspaceOnGACAnlCenter.vue?vue&type=template&id=1ea1fe1c&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/workspace/nsia/WorkspaceOnGACAnlCenter.vue?vue&type=template&id=1ea1fe1c&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    "class": [_vm.isDoc ? _vm.producMemo : "", _vm.producContreAnl, {
      tp_page_fullscreen: _vm.is_fullscreen
    }]
  }, [_c("draggable", _vm._b({
    staticStyle: {
      "min-height": "84vh"
    },
    attrs: {
      list: _vm.listOfComponents,
      group: {
        name: "people",
        pull: "clone"
      }
    },
    on: {
      change: _vm.log
    }
  }, "draggable", _vm.dragOptions, false), _vm._l(_vm.listOfComponents, function (element) {
    return _c("div", {
      key: element.id
    }, [_c(element.component_name, _vm._b({
      tag: "component",
      on: {
        "load-shell": _vm.loadShell,
        "load-buffer": _vm.setSideLoad,
        autosaving: _vm.setAutosaving
      }
    }, "component", {
      meta_data: _vm.currentProperties,
      tb_name: element.component_name,
      tb_display_name: element.name
    }, false))], 1);
  }), 0)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dgr/DGR-FAR1.vue?vue&type=style&index=0&id=d2157d3a&lang=css&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dgr/DGR-FAR1.vue?vue&type=style&index=0&id=d2157d3a&lang=css&scoped=true ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "\ninput[data-v-d2157d3a] {\n     /*border: 1px solid red;*/\n}\n*[data-v-d2157d3a] {\n     font-family: \"Google sans\";\n}\nlabel[data-v-d2157d3a] {\n     height: 10px;\n     font-size: 13px;\n}\ninput[data-v-d2157d3a],\n select[data-v-d2157d3a] {\n     height: 35px;\n     border-color: #34495e;\n     color: #57606f;\n     font-size: 13px;\n     font-weight: bold;\n}\n.card-width-height[data-v-d2157d3a] {\n     width: 100%;\n     height: 100%;\n}\n.head[data-v-d2157d3a] {\n     color: #f1f2f6;\n     font-size: 22px;\n}\n.hdc[data-v-d2157d3a] {\n     background-color: #57606f;\n}\n\n /*  List element styles */\n#menu ul[data-v-d2157d3a],\n #menu li[data-v-d2157d3a] {\n     list-style: none;\n     padding: 0;\n     margin: 0;\n     display: inline-block;\n}\n#menu li[data-v-d2157d3a] {\n     padding: 5px 0px;\n}\n\n /* Main menu links */\n#menu a[data-v-d2157d3a]:link,\n #menu a[data-v-d2157d3a]:visited,\n #menu a[data-v-d2157d3a]:active {\n     text-decoration: none;\n     color: var(--link2-color);\n     padding: 5px 7px;\n     font-weight: bold;\n     position: relative;\n     z-index: 2;\n}\n#menu a[data-v-d2157d3a]:hover,\n #menu a[data-v-d2157d3a]:focus {\n     background-color: var(--link-color);\n     color: var(--link2-color);\n     text-decoration: underline;\n}\n\n /* The submenu links container*/\n.subdrop[data-v-d2157d3a] {\n     background: var(--bg-color);\n     height: 0;\n     border-top: 0;\n     min-width: 100%;\n     left: 0;\n     margin: 0;\n     position: absolute;\n     text-align: left;\n     top: 100%;\n     visibility: hidden;\n     height: 1px;\n     overflow: hidden;\n     z-index: 10;\n}\n\n /* Dropdown Parent Link Style */\n.droplink[data-v-d2157d3a] {\n     display: inline-block;\n     min-width: -moz-fit-content;\n     min-width: fit-content;\n     position: relative;\n}\ninput[type=checkbox][data-v-d2157d3a] {\n     /* Double-sized Checkboxes */\n     /* IE */\n     /* FF */\n     /* Safari and Chrome */\n     /* Opera */\n     transform: scale(2);\n     padding: 10px;\n}\n\n /* List elements within the dropdown */\n.subdrop li[data-v-d2157d3a] {\n     display: block !important;\n     padding: 0 !important;\n}\n\n /* Links within the dropdown list */\n.subdrop a[data-v-d2157d3a] {\n     display: block;\n     padding: 12px 20px;\n     white-space: nowrap;\n}\n\n /* Allows links to show on hover/focus and through keyboard navigation via focus-within */\n.droplink:hover .subdrop[data-v-d2157d3a] {\n     visibility: visible;\n     height: auto;\n     z-index: 11;\n}\n\n /* Separate these to avoid IE completely ignoring the css above */\n.droplink:focus-within .subdrop[data-v-d2157d3a] {\n     visibility: visible;\n     height: auto;\n     z-index: 11;\n}\n.relook-header[data-v-d2157d3a] {\n    color: #000;\n    background-color: #f4f3f3;\n    padding: 2px;\n    border-bottom: 1px solid #b6b8bb;\n}\n.badge-sm[data-v-d2157d3a] {\n     display: inline-block;\n     width: 15px;\n     height: 15px;\n     background: rgba(255, 0, 0, 0.882);\n     color: white;\n     font-size: 12px;\n     font-weight: 500;\n     border-radius: 100%;\n     position: absolute;\n     top: -20%;\n     left: 55%;\n     text-align: center;\n}\n ", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK0.vue?vue&type=style&index=0&id=5c9ac03f&lang=css&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK0.vue?vue&type=style&index=0&id=5c9ac03f&lang=css&scoped=true ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "\n*[data-v-5c9ac03f] {\n    font-family: \"Google sans\";\n}\nlabel[data-v-5c9ac03f] {\n    height: 10px;\n    font-size: 13px;\n}\ninput[type=\"text\"][data-v-5c9ac03f],\n  input[type=\"date\"][data-v-5c9ac03f],\n  select[data-v-5c9ac03f] {\n    height: 35px;\n    border-color: #34495e;\n    color: #57606f;\n    font-size: 13px;\n    font-weight: bold;\n}\n.card-width-height[data-v-5c9ac03f] {\n    width: 100%;\n    height: 100%;\n}\n.head[data-v-5c9ac03f] {\n    color: #f1f2f6;\n    font-size: 22px;\n}\n.hdc[data-v-5c9ac03f] {\n    background-color: #57606f;\n}\n.card-width-height[data-v-5c9ac03f] {\n    width: 100%;\n    height: 100%;\n}\n.head[data-v-5c9ac03f] {\n    color: #f1f2f6;\n    font-size: 22px;\n}\n.review[data-v-5c9ac03f]{\n    width: 180px !important;\n}\n.engagement input[type=\"text\"][data-v-5c9ac03f],\n  input[type=\"date\"][data-v-5c9ac03f] {\n    width: 100% !important;\n}\n.th[data-v-5c9ac03f] {\n    padding: 4px;\n    padding-bottom: 0px;\n}\nselect[data-v-5c9ac03f] {\n    width: 250px;\n}\n.badge-sm[data-v-5c9ac03f] {\n    display: inline-block;\n    width: 15px;\n    height: 15px;\n    background: rgba(255, 0, 0, 0.882);\n    color: white;\n    font-size: 12px;\n    font-weight: 500;\n    border-radius: 100%;\n    position: absolute;\n    top: -20%;\n    left: 55%;\n    text-align: center;\n}\n.relook-header[data-v-5c9ac03f] {\n    color: #000;\n    background-color: #f4f3f3;\n    padding: 5px;\n    border-bottom: 1px solid #b6b8bb;\n}\ninput[type=checkbox][data-v-5c9ac03f] {\n    /* Double-sized Checkboxes */\n    /* IE */\n    /* FF */\n    /* Safari and Chrome */\n    /* Opera */\n    transform: scale(1);\n    padding: 10px;\n    cursor: pointer;\n}\n.image1[data-v-5c9ac03f] {\n    background: url(\"/images/capture_nsia/exemples/documentation_somise.png\")\n        no-repeat;\n    background-position: center;\n    background-size: contain;\n\n    width: 500px;\n    height: 300px;\n}\n.floating_text[data-v-5c9ac03f]{\n    /* float: right; */\n    /* text-align: right; */\n}\n  ", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK1.vue?vue&type=style&index=0&id=5ca8d7c0&lang=css&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK1.vue?vue&type=style&index=0&id=5ca8d7c0&lang=css&scoped=true ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "\ninput[data-v-5ca8d7c0] {\r\n    /*border: 1px solid red;*/\n}\n*[data-v-5ca8d7c0] {\r\n    font-family: \"Google sans\";\n}\nlabel[data-v-5ca8d7c0] {\r\n    height: 10px;\r\n    font-size: 13px;\n}\ninput[data-v-5ca8d7c0],\r\nselect[data-v-5ca8d7c0] {\r\n    height: 35px;\r\n    border-color: #34495e;\r\n    color: #57606f;\r\n    font-size: 13px;\r\n    font-weight: bold;\n}\n.card-width-height[data-v-5ca8d7c0] {\r\n    width: 100%;\r\n    height: 100%;\n}\n.head[data-v-5ca8d7c0] {\r\n    color: #f1f2f6;\r\n    font-size: 22px;\n}\n.hdc[data-v-5ca8d7c0] {\r\n    background-color: #57606f;\n}\n.badge-sm[data-v-5ca8d7c0] {\r\n    display: inline-block;\r\n    width: 15px;\r\n    height: 15px;\r\n    background: rgba(255, 0, 0, 0.882);\r\n    color: white;\r\n    font-size: 12px;\r\n    font-weight: 500;\r\n    border-radius: 100%;\r\n    position: absolute;\r\n    top: -20%;\r\n    left: 55%;\r\n    text-align: center;\n}\n.relook-header[data-v-5ca8d7c0] {\r\n    color: #000;\r\n    background-color: #f4f3f3;\r\n    padding: 5px;\r\n    border-bottom: 1px solid #b6b8bb;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK2.vue?vue&type=style&index=0&id=5cb6ef41&lang=css&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK2.vue?vue&type=style&index=0&id=5cb6ef41&lang=css&scoped=true ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "\n*[data-v-5cb6ef41] {\n\n  font-family: \"Google sans\";\n}\nlabel[data-v-5cb6ef41] {\n  height: 10px;\n  font-size: 13px;\n}\ninput[type=text][data-v-5cb6ef41],\ninput[type=date][data-v-5cb6ef41],\nselect[data-v-5cb6ef41] {\n  height: 35px;\n  border-color: #34495e;\n  color: #57606f;\n  font-size: 13px;\n  font-weight: bold;\n}\n.card-width-height[data-v-5cb6ef41] {\n  width: 100%;\n  height: 100%;\n}\n.head[data-v-5cb6ef41] {\n  color: #f1f2f6;\n  font-size: 22px;\n}\n.hdc[data-v-5cb6ef41] {\n  background-color: #57606f;\n}\n.card-width-height[data-v-5cb6ef41] {\n  width: 100%;\n  height: 100%;\n}\n.head[data-v-5cb6ef41] {\n  color: #f1f2f6;\n  font-size: 22px;\n}\ninput[type=text][data-v-5cb6ef41],\ninput[type=date][data-v-5cb6ef41] {\n  width: 250px;\n}\n.th[data-v-5cb6ef41] {\n  padding: 4px;\n  padding-bottom: 0px;\n}\nselect[data-v-5cb6ef41] {\n  width: 250px;\n}\n.badge-sm[data-v-5cb6ef41] {\n  display: inline-block;\n  width: 15px;\n  height: 15px;\n  background: rgba(255, 0, 0, 0.882);\n  color: white;\n  font-size: 12px;\n  font-weight: 500;\n  border-radius: 100%;\n  position: absolute;\n  top: -20%;\n  left: 55%;\n  text-align: center;\n}\n.relook-header[data-v-5cb6ef41] {\n  color: #000;\n  background-color: #f4f3f3;\n  padding: 5px;\n  border-bottom: 1px solid #b6b8bb;\n}\n.selected-gray[data-v-5cb6ef41] {\n    background-color: rgb(228, 227, 227);\n}\n.bg-light-green[data-v-5cb6ef41] {\n    background: rgba(2, 90, 2, 0.075);\n    /* background-color: rgb(228, 227, 227); */\n        color: green;\n}\n.preview-img[data-v-5cb6ef41] {\n  width: 100%;\n    height: auto;\n    min-height: 500px;\n    background-size: contain !important;\n    background-position: center !important;\n    background-repeat: no-repeat !important;\n}\n.fade-enter[data-v-5cb6ef41],\n.fade-leave-to[data-v-5cb6ef41] {\n    opacity: 0;\n    transition: all .3s\n}\n.fade-enter-to[data-v-5cb6ef41],\n.fade-leave[data-v-5cb6ef41] {\n    opacity: 1;\n    transition: all .3s\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK3.vue?vue&type=style&index=0&id=5cc506c2&lang=css&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK3.vue?vue&type=style&index=0&id=5cc506c2&lang=css&scoped=true ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "\n*[data-v-5cc506c2] {\n    font-family: \"Google sans\";\n}\nlabel[data-v-5cc506c2] {\n    height: 10px;\n    font-size: 13px;\n}\ninput[type=\"text\"][data-v-5cc506c2],\n  input[type=\"date\"][data-v-5cc506c2],\n  select[data-v-5cc506c2] {\n    height: 35px;\n    border-color: #34495e;\n    color: #57606f;\n    font-size: 13px;\n    font-weight: bold;\n}\n.card-width-height[data-v-5cc506c2] {\n    width: 100%;\n    height: 100%;\n}\n.head[data-v-5cc506c2] {\n    color: #f1f2f6;\n    font-size: 22px;\n}\n.hdc[data-v-5cc506c2] {\n    background-color: #57606f;\n}\n.card-width-height[data-v-5cc506c2] {\n    width: 100%;\n    height: 100%;\n}\n.head[data-v-5cc506c2] {\n    color: #f1f2f6;\n    font-size: 22px;\n}\n.review[data-v-5cc506c2]{\n    width: 180px !important;\n}\n.engagement input[type=\"text\"][data-v-5cc506c2],\n  input[type=\"date\"][data-v-5cc506c2] {\n    width: 100% !important;\n}\n.th[data-v-5cc506c2] {\n    padding: 4px;\n    padding-bottom: 0px;\n}\nselect[data-v-5cc506c2] {\n    width: 250px;\n}\n.badge-sm[data-v-5cc506c2] {\n    display: inline-block;\n    width: 15px;\n    height: 15px;\n    background: rgba(255, 0, 0, 0.882);\n    color: white;\n    font-size: 12px;\n    font-weight: 500;\n    border-radius: 100%;\n    position: absolute;\n    top: -20%;\n    left: 55%;\n    text-align: center;\n}\n.relook-header[data-v-5cc506c2] {\n    color: #000;\n    background-color: #f4f3f3;\n    padding: 5px;\n    border-bottom: 1px solid #b6b8bb;\n}\ninput[type=checkbox][data-v-5cc506c2] {\n    /* Double-sized Checkboxes */\n    /* IE */\n    /* FF */\n    /* Safari and Chrome */\n    /* Opera */\n    transform: scale(1);\n    padding: 10px;\n    cursor: pointer;\n}\n.image1[data-v-5cc506c2] {\n    background: url(\"/images/capture_nsia/exemples/documentation_somise.png\")\n        no-repeat;\n    background-position: center;\n    background-size: contain;\n\n    width: 500px;\n    height: 300px;\n}\n.floating_text[data-v-5cc506c2]{\n    float: right;\n    /* text-align: right; */\n}\n  ", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK4.vue?vue&type=style&index=0&id=5cd31e43&lang=css&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK4.vue?vue&type=style&index=0&id=5cd31e43&lang=css&scoped=true ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "\n*[data-v-5cd31e43] {\r\n    font-family: \"Google sans\";\n}\nlabel[data-v-5cd31e43] {\r\n    height: 10px;\r\n    font-size: 13px;\n}\ninput[type=\"text\"][data-v-5cd31e43],\r\ninput[type=\"date\"][data-v-5cd31e43],\r\nselect[data-v-5cd31e43] {\r\n    height: 35px;\r\n    border-color: #34495e;\r\n    color: #57606f;\r\n    font-size: 13px;\r\n    font-weight: bold;\n}\n.card-width-height[data-v-5cd31e43] {\r\n    width: 100%;\r\n    height: 100%;\n}\n.head[data-v-5cd31e43] {\r\n    color: #f1f2f6;\r\n    font-size: 22px;\n}\n.hdc[data-v-5cd31e43] {\r\n    background-color: #57606f;\n}\n.card-width-height[data-v-5cd31e43] {\r\n    width: 100%;\r\n    height: 100%;\n}\n.head[data-v-5cd31e43] {\r\n    color: #f1f2f6;\r\n    font-size: 22px;\n}\n.review[data-v-5cd31e43] {\r\n    width: 180px !important;\n}\n.engagement input[type=\"text\"][data-v-5cd31e43],\r\ninput[type=\"date\"][data-v-5cd31e43] {\r\n    width: 100% !important;\n}\n.th[data-v-5cd31e43] {\r\n    padding: 4px;\r\n    padding-bottom: 0px;\n}\nselect[data-v-5cd31e43] {\r\n    width: 250px;\n}\n.badge-sm[data-v-5cd31e43] {\r\n    display: inline-block;\r\n    width: 15px;\r\n    height: 15px;\r\n    background: rgba(255, 0, 0, 0.882);\r\n    color: white;\r\n    font-size: 12px;\r\n    font-weight: 500;\r\n    border-radius: 100%;\r\n    position: absolute;\r\n    top: -20%;\r\n    left: 55%;\r\n    text-align: center;\n}\n.relook-header[data-v-5cd31e43] {\r\n    color: #000;\r\n    background-color: #f4f3f3;\r\n    padding: 5px;\r\n    border-bottom: 1px solid #b6b8bb;\n}\ninput[type=\"checkbox\"][data-v-5cd31e43] {\r\n    /* Double-sized Checkboxes */\r\n    /* IE */\r\n    /* FF */\r\n    /* Safari and Chrome */\r\n    /* Opera */\r\n    transform: scale(1);\r\n    padding: 10px;\r\n    cursor: pointer;\n}\n.image1[data-v-5cd31e43] {\r\n    background: url(\"/images/capture_nsia/exemples/documentation_somise.png\")\r\n        no-repeat;\r\n    background-position: center;\r\n    background-size: contain;\r\n\r\n    width: 500px;\r\n    height: 300px;\n}\n.floating_text[data-v-5cd31e43] {\r\n    float: right;\r\n    /* text-align: right; */\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK5.vue?vue&type=style&index=0&id=5ce135c4&lang=css&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK5.vue?vue&type=style&index=0&id=5ce135c4&lang=css&scoped=true ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "\ninput[data-v-5ce135c4] {\r\n    /*border: 1px solid red;*/\n}\n*[data-v-5ce135c4] {\r\n    font-family: \"Google sans\";\n}\nlabel[data-v-5ce135c4] {\r\n    height: 10px;\r\n    font-size: 13px;\n}\ninput[data-v-5ce135c4],\r\nselect[data-v-5ce135c4] {\r\n    height: 35px;\r\n    border-color: #34495e;\r\n    color: #57606f;\r\n    font-size: 13px;\r\n    font-weight: bold;\n}\n.card-width-height[data-v-5ce135c4] {\r\n    width: 100%;\r\n    height: 100%;\n}\n.head[data-v-5ce135c4] {\r\n    color: #f1f2f6;\r\n    font-size: 22px;\n}\n.hdc[data-v-5ce135c4] {\r\n    background-color: #57606f;\n}\n.badge-sm[data-v-5ce135c4] {\r\n    display: inline-block;\r\n    width: 15px;\r\n    height: 15px;\r\n    background: rgba(255, 0, 0, 0.882);\r\n    color: white;\r\n    font-size: 12px;\r\n    font-weight: 500;\r\n    border-radius: 100%;\r\n    position: absolute;\r\n    top: -20%;\r\n    left: 55%;\r\n    text-align: center;\n}\n.relook-header[data-v-5ce135c4] {\r\n    color: #000;\r\n    background-color: #f4f3f3;\r\n    padding: 5px;\r\n    border-bottom: 1px solid #b6b8bb;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CTR0.vue?vue&type=style&index=0&id=395118b8&lang=css&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CTR0.vue?vue&type=style&index=0&id=395118b8&lang=css&scoped=true ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "\n*[data-v-395118b8] {\n    font-family: \"Google sans\";\n}\nlabel[data-v-395118b8] {\n    height: 10px;\n    font-size: 13px;\n}\ninput[type=\"text\"][data-v-395118b8],\n  input[type=\"date\"][data-v-395118b8],\n  select[data-v-395118b8] {\n    height: 35px;\n    border-color: #34495e;\n    color: #57606f;\n    font-size: 13px;\n    font-weight: bold;\n}\n.card-width-height[data-v-395118b8] {\n    width: 100%;\n    height: 100%;\n}\n.head[data-v-395118b8] {\n    color: #f1f2f6;\n    font-size: 22px;\n}\n.hdc[data-v-395118b8] {\n    background-color: #57606f;\n}\n.card-width-height[data-v-395118b8] {\n    width: 100%;\n    height: 100%;\n}\n.head[data-v-395118b8] {\n    color: #f1f2f6;\n    font-size: 22px;\n}\n.review[data-v-395118b8]{\n    width: 180px !important;\n}\n.engagement input[type=\"text\"][data-v-395118b8],\n  input[type=\"date\"][data-v-395118b8] {\n    width: 100% !important;\n}\n.th[data-v-395118b8] {\n    padding: 4px;\n    padding-bottom: 0px;\n}\nselect[data-v-395118b8] {\n    width: 250px;\n}\n.badge-sm[data-v-395118b8] {\n    display: inline-block;\n    width: 15px;\n    height: 15px;\n    background: rgba(255, 0, 0, 0.882);\n    color: white;\n    font-size: 12px;\n    font-weight: 500;\n    border-radius: 100%;\n    position: absolute;\n    top: -20%;\n    left: 55%;\n    text-align: center;\n}\n.relook-header[data-v-395118b8] {\n    color: #000;\n    background-color: #f4f3f3;\n    padding: 5px;\n    border-bottom: 1px solid #b6b8bb;\n}\ninput[type=checkbox][data-v-395118b8] {\n    /* Double-sized Checkboxes */\n    /* IE */\n    /* FF */\n    /* Safari and Chrome */\n    /* Opera */\n    transform: scale(1);\n    padding: 10px;\n    cursor: pointer;\n}\n.image1[data-v-395118b8] {\n    background: url(\"/images/capture_nsia/exemples/documentation_somise.png\")\n        no-repeat;\n    background-position: center;\n    background-size: contain;\n\n    width: 500px;\n    height: 300px;\n}\n.floating_text[data-v-395118b8]{\n    /* float: right; */\n    /* text-align: right; */\n}\n  ", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/workspace/nsia/WorkspaceOnGACAnlCenter.vue?vue&type=style&index=0&id=1ea1fe1c&lang=css&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/workspace/nsia/WorkspaceOnGACAnlCenter.vue?vue&type=style&index=0&id=1ea1fe1c&lang=css&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.button[data-v-1ea1fe1c] {\r\n  margin-top: 35px;\n}\n.flip-list-move[data-v-1ea1fe1c] {\r\n  transition: transform 0.5s;\n}\n.no-move[data-v-1ea1fe1c] {\r\n  transition: transform 0s;\n}\n.ghost[data-v-1ea1fe1c] {\r\n  opacity: 0.5;\r\n  background: #c8ebfb;\n}\n.list-group[data-v-1ea1fe1c] {\r\n  min-height: 20px;\n}\n.list-group-item[data-v-1ea1fe1c] {\r\n  cursor: move;\n}\n.list-group-item i[data-v-1ea1fe1c] {\r\n  cursor: pointer;\n}\n.hdc[data-v-1ea1fe1c] {\r\n  height: 40px;\n}\n.memorandum[data-v-1ea1fe1c] {\r\n  padding: 25px;\n}\n.contre-analyse[data-v-1ea1fe1c] {\r\n  background-color: white;\r\n  /* box-shadow: 0 0 5px grey; */\r\n  padding: 10px;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dgr/DGR-FAR1.vue?vue&type=style&index=0&id=d2157d3a&lang=css&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dgr/DGR-FAR1.vue?vue&type=style&index=0&id=d2157d3a&lang=css&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DGR_FAR1_vue_vue_type_style_index_0_id_d2157d3a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DGR-FAR1.vue?vue&type=style&index=0&id=d2157d3a&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dgr/DGR-FAR1.vue?vue&type=style&index=0&id=d2157d3a&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DGR_FAR1_vue_vue_type_style_index_0_id_d2157d3a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DGR_FAR1_vue_vue_type_style_index_0_id_d2157d3a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK0.vue?vue&type=style&index=0&id=5c9ac03f&lang=css&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK0.vue?vue&type=style&index=0&id=5c9ac03f&lang=css&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GAC_CHK0_vue_vue_type_style_index_0_id_5c9ac03f_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GAC-CHK0.vue?vue&type=style&index=0&id=5c9ac03f&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK0.vue?vue&type=style&index=0&id=5c9ac03f&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GAC_CHK0_vue_vue_type_style_index_0_id_5c9ac03f_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GAC_CHK0_vue_vue_type_style_index_0_id_5c9ac03f_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK1.vue?vue&type=style&index=0&id=5ca8d7c0&lang=css&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK1.vue?vue&type=style&index=0&id=5ca8d7c0&lang=css&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GAC_CHK1_vue_vue_type_style_index_0_id_5ca8d7c0_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GAC-CHK1.vue?vue&type=style&index=0&id=5ca8d7c0&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK1.vue?vue&type=style&index=0&id=5ca8d7c0&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GAC_CHK1_vue_vue_type_style_index_0_id_5ca8d7c0_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GAC_CHK1_vue_vue_type_style_index_0_id_5ca8d7c0_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK2.vue?vue&type=style&index=0&id=5cb6ef41&lang=css&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK2.vue?vue&type=style&index=0&id=5cb6ef41&lang=css&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GAC_CHK2_vue_vue_type_style_index_0_id_5cb6ef41_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GAC-CHK2.vue?vue&type=style&index=0&id=5cb6ef41&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK2.vue?vue&type=style&index=0&id=5cb6ef41&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GAC_CHK2_vue_vue_type_style_index_0_id_5cb6ef41_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GAC_CHK2_vue_vue_type_style_index_0_id_5cb6ef41_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK3.vue?vue&type=style&index=0&id=5cc506c2&lang=css&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK3.vue?vue&type=style&index=0&id=5cc506c2&lang=css&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GAC_CHK3_vue_vue_type_style_index_0_id_5cc506c2_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GAC-CHK3.vue?vue&type=style&index=0&id=5cc506c2&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK3.vue?vue&type=style&index=0&id=5cc506c2&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GAC_CHK3_vue_vue_type_style_index_0_id_5cc506c2_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GAC_CHK3_vue_vue_type_style_index_0_id_5cc506c2_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK4.vue?vue&type=style&index=0&id=5cd31e43&lang=css&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK4.vue?vue&type=style&index=0&id=5cd31e43&lang=css&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GAC_CHK4_vue_vue_type_style_index_0_id_5cd31e43_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GAC-CHK4.vue?vue&type=style&index=0&id=5cd31e43&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK4.vue?vue&type=style&index=0&id=5cd31e43&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GAC_CHK4_vue_vue_type_style_index_0_id_5cd31e43_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GAC_CHK4_vue_vue_type_style_index_0_id_5cd31e43_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK5.vue?vue&type=style&index=0&id=5ce135c4&lang=css&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK5.vue?vue&type=style&index=0&id=5ce135c4&lang=css&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GAC_CHK5_vue_vue_type_style_index_0_id_5ce135c4_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GAC-CHK5.vue?vue&type=style&index=0&id=5ce135c4&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK5.vue?vue&type=style&index=0&id=5ce135c4&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GAC_CHK5_vue_vue_type_style_index_0_id_5ce135c4_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GAC_CHK5_vue_vue_type_style_index_0_id_5ce135c4_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CTR0.vue?vue&type=style&index=0&id=395118b8&lang=css&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CTR0.vue?vue&type=style&index=0&id=395118b8&lang=css&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GAC_CTR0_vue_vue_type_style_index_0_id_395118b8_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GAC-CTR0.vue?vue&type=style&index=0&id=395118b8&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CTR0.vue?vue&type=style&index=0&id=395118b8&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GAC_CTR0_vue_vue_type_style_index_0_id_395118b8_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GAC_CTR0_vue_vue_type_style_index_0_id_395118b8_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/workspace/nsia/WorkspaceOnGACAnlCenter.vue?vue&type=style&index=0&id=1ea1fe1c&lang=css&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/workspace/nsia/WorkspaceOnGACAnlCenter.vue?vue&type=style&index=0&id=1ea1fe1c&lang=css&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WorkspaceOnGACAnlCenter_vue_vue_type_style_index_0_id_1ea1fe1c_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./WorkspaceOnGACAnlCenter.vue?vue&type=style&index=0&id=1ea1fe1c&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/workspace/nsia/WorkspaceOnGACAnlCenter.vue?vue&type=style&index=0&id=1ea1fe1c&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WorkspaceOnGACAnlCenter_vue_vue_type_style_index_0_id_1ea1fe1c_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WorkspaceOnGACAnlCenter_vue_vue_type_style_index_0_id_1ea1fe1c_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/contreanalyse/nsia/filiale/dgr/DGR-FAR1.vue":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/nsia/filiale/dgr/DGR-FAR1.vue ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DGR_FAR1_vue_vue_type_template_id_d2157d3a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DGR-FAR1.vue?vue&type=template&id=d2157d3a&scoped=true */ "./resources/js/components/contreanalyse/nsia/filiale/dgr/DGR-FAR1.vue?vue&type=template&id=d2157d3a&scoped=true");
/* harmony import */ var _DGR_FAR1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DGR-FAR1.vue?vue&type=script&lang=js */ "./resources/js/components/contreanalyse/nsia/filiale/dgr/DGR-FAR1.vue?vue&type=script&lang=js");
/* harmony import */ var _DGR_FAR1_vue_vue_type_style_index_0_id_d2157d3a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DGR-FAR1.vue?vue&type=style&index=0&id=d2157d3a&lang=css&scoped=true */ "./resources/js/components/contreanalyse/nsia/filiale/dgr/DGR-FAR1.vue?vue&type=style&index=0&id=d2157d3a&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DGR_FAR1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _DGR_FAR1_vue_vue_type_template_id_d2157d3a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _DGR_FAR1_vue_vue_type_template_id_d2157d3a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "d2157d3a",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/contreanalyse/nsia/filiale/dgr/DGR-FAR1.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/contreanalyse/nsia/filiale/dgr/DGR-FAR1.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/nsia/filiale/dgr/DGR-FAR1.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DGR_FAR1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DGR-FAR1.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dgr/DGR-FAR1.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DGR_FAR1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/contreanalyse/nsia/filiale/dgr/DGR-FAR1.vue?vue&type=style&index=0&id=d2157d3a&lang=css&scoped=true":
/*!*************************************************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/nsia/filiale/dgr/DGR-FAR1.vue?vue&type=style&index=0&id=d2157d3a&lang=css&scoped=true ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DGR_FAR1_vue_vue_type_style_index_0_id_d2157d3a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DGR-FAR1.vue?vue&type=style&index=0&id=d2157d3a&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dgr/DGR-FAR1.vue?vue&type=style&index=0&id=d2157d3a&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/contreanalyse/nsia/filiale/dgr/DGR-FAR1.vue?vue&type=template&id=d2157d3a&scoped=true":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/nsia/filiale/dgr/DGR-FAR1.vue?vue&type=template&id=d2157d3a&scoped=true ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DGR_FAR1_vue_vue_type_template_id_d2157d3a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DGR_FAR1_vue_vue_type_template_id_d2157d3a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DGR_FAR1_vue_vue_type_template_id_d2157d3a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DGR-FAR1.vue?vue&type=template&id=d2157d3a&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dgr/DGR-FAR1.vue?vue&type=template&id=d2157d3a&scoped=true");


/***/ }),

/***/ "./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK0.vue":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK0.vue ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GAC_CHK0_vue_vue_type_template_id_5c9ac03f_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GAC-CHK0.vue?vue&type=template&id=5c9ac03f&scoped=true */ "./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK0.vue?vue&type=template&id=5c9ac03f&scoped=true");
/* harmony import */ var _GAC_CHK0_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GAC-CHK0.vue?vue&type=script&lang=js */ "./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK0.vue?vue&type=script&lang=js");
/* harmony import */ var _GAC_CHK0_vue_vue_type_style_index_0_id_5c9ac03f_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GAC-CHK0.vue?vue&type=style&index=0&id=5c9ac03f&lang=css&scoped=true */ "./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK0.vue?vue&type=style&index=0&id=5c9ac03f&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _GAC_CHK0_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _GAC_CHK0_vue_vue_type_template_id_5c9ac03f_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _GAC_CHK0_vue_vue_type_template_id_5c9ac03f_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "5c9ac03f",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK0.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK0.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK0.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GAC_CHK0_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GAC-CHK0.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK0.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GAC_CHK0_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK0.vue?vue&type=style&index=0&id=5c9ac03f&lang=css&scoped=true":
/*!*************************************************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK0.vue?vue&type=style&index=0&id=5c9ac03f&lang=css&scoped=true ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GAC_CHK0_vue_vue_type_style_index_0_id_5c9ac03f_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GAC-CHK0.vue?vue&type=style&index=0&id=5c9ac03f&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK0.vue?vue&type=style&index=0&id=5c9ac03f&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK0.vue?vue&type=template&id=5c9ac03f&scoped=true":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK0.vue?vue&type=template&id=5c9ac03f&scoped=true ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GAC_CHK0_vue_vue_type_template_id_5c9ac03f_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GAC_CHK0_vue_vue_type_template_id_5c9ac03f_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GAC_CHK0_vue_vue_type_template_id_5c9ac03f_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GAC-CHK0.vue?vue&type=template&id=5c9ac03f&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK0.vue?vue&type=template&id=5c9ac03f&scoped=true");


/***/ }),

/***/ "./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK1.vue":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK1.vue ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GAC_CHK1_vue_vue_type_template_id_5ca8d7c0_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GAC-CHK1.vue?vue&type=template&id=5ca8d7c0&scoped=true */ "./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK1.vue?vue&type=template&id=5ca8d7c0&scoped=true");
/* harmony import */ var _GAC_CHK1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GAC-CHK1.vue?vue&type=script&lang=js */ "./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK1.vue?vue&type=script&lang=js");
/* harmony import */ var _GAC_CHK1_vue_vue_type_style_index_0_id_5ca8d7c0_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GAC-CHK1.vue?vue&type=style&index=0&id=5ca8d7c0&lang=css&scoped=true */ "./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK1.vue?vue&type=style&index=0&id=5ca8d7c0&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _GAC_CHK1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _GAC_CHK1_vue_vue_type_template_id_5ca8d7c0_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _GAC_CHK1_vue_vue_type_template_id_5ca8d7c0_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "5ca8d7c0",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK1.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK1.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK1.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GAC_CHK1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GAC-CHK1.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK1.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GAC_CHK1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK1.vue?vue&type=style&index=0&id=5ca8d7c0&lang=css&scoped=true":
/*!*************************************************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK1.vue?vue&type=style&index=0&id=5ca8d7c0&lang=css&scoped=true ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GAC_CHK1_vue_vue_type_style_index_0_id_5ca8d7c0_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GAC-CHK1.vue?vue&type=style&index=0&id=5ca8d7c0&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK1.vue?vue&type=style&index=0&id=5ca8d7c0&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK1.vue?vue&type=template&id=5ca8d7c0&scoped=true":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK1.vue?vue&type=template&id=5ca8d7c0&scoped=true ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GAC_CHK1_vue_vue_type_template_id_5ca8d7c0_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GAC_CHK1_vue_vue_type_template_id_5ca8d7c0_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GAC_CHK1_vue_vue_type_template_id_5ca8d7c0_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GAC-CHK1.vue?vue&type=template&id=5ca8d7c0&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK1.vue?vue&type=template&id=5ca8d7c0&scoped=true");


/***/ }),

/***/ "./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK2.vue":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK2.vue ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GAC_CHK2_vue_vue_type_template_id_5cb6ef41_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GAC-CHK2.vue?vue&type=template&id=5cb6ef41&scoped=true */ "./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK2.vue?vue&type=template&id=5cb6ef41&scoped=true");
/* harmony import */ var _GAC_CHK2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GAC-CHK2.vue?vue&type=script&lang=js */ "./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK2.vue?vue&type=script&lang=js");
/* harmony import */ var _GAC_CHK2_vue_vue_type_style_index_0_id_5cb6ef41_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GAC-CHK2.vue?vue&type=style&index=0&id=5cb6ef41&lang=css&scoped=true */ "./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK2.vue?vue&type=style&index=0&id=5cb6ef41&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _GAC_CHK2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _GAC_CHK2_vue_vue_type_template_id_5cb6ef41_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _GAC_CHK2_vue_vue_type_template_id_5cb6ef41_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "5cb6ef41",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK2.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK2.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK2.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GAC_CHK2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GAC-CHK2.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK2.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GAC_CHK2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK2.vue?vue&type=style&index=0&id=5cb6ef41&lang=css&scoped=true":
/*!*************************************************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK2.vue?vue&type=style&index=0&id=5cb6ef41&lang=css&scoped=true ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GAC_CHK2_vue_vue_type_style_index_0_id_5cb6ef41_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GAC-CHK2.vue?vue&type=style&index=0&id=5cb6ef41&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK2.vue?vue&type=style&index=0&id=5cb6ef41&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK2.vue?vue&type=template&id=5cb6ef41&scoped=true":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK2.vue?vue&type=template&id=5cb6ef41&scoped=true ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GAC_CHK2_vue_vue_type_template_id_5cb6ef41_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GAC_CHK2_vue_vue_type_template_id_5cb6ef41_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GAC_CHK2_vue_vue_type_template_id_5cb6ef41_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GAC-CHK2.vue?vue&type=template&id=5cb6ef41&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK2.vue?vue&type=template&id=5cb6ef41&scoped=true");


/***/ }),

/***/ "./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK3.vue":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK3.vue ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GAC_CHK3_vue_vue_type_template_id_5cc506c2_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GAC-CHK3.vue?vue&type=template&id=5cc506c2&scoped=true */ "./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK3.vue?vue&type=template&id=5cc506c2&scoped=true");
/* harmony import */ var _GAC_CHK3_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GAC-CHK3.vue?vue&type=script&lang=js */ "./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK3.vue?vue&type=script&lang=js");
/* harmony import */ var _GAC_CHK3_vue_vue_type_style_index_0_id_5cc506c2_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GAC-CHK3.vue?vue&type=style&index=0&id=5cc506c2&lang=css&scoped=true */ "./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK3.vue?vue&type=style&index=0&id=5cc506c2&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _GAC_CHK3_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _GAC_CHK3_vue_vue_type_template_id_5cc506c2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _GAC_CHK3_vue_vue_type_template_id_5cc506c2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "5cc506c2",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK3.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK3.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK3.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GAC_CHK3_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GAC-CHK3.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK3.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GAC_CHK3_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK3.vue?vue&type=style&index=0&id=5cc506c2&lang=css&scoped=true":
/*!*************************************************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK3.vue?vue&type=style&index=0&id=5cc506c2&lang=css&scoped=true ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GAC_CHK3_vue_vue_type_style_index_0_id_5cc506c2_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GAC-CHK3.vue?vue&type=style&index=0&id=5cc506c2&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK3.vue?vue&type=style&index=0&id=5cc506c2&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK3.vue?vue&type=template&id=5cc506c2&scoped=true":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK3.vue?vue&type=template&id=5cc506c2&scoped=true ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GAC_CHK3_vue_vue_type_template_id_5cc506c2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GAC_CHK3_vue_vue_type_template_id_5cc506c2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GAC_CHK3_vue_vue_type_template_id_5cc506c2_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GAC-CHK3.vue?vue&type=template&id=5cc506c2&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK3.vue?vue&type=template&id=5cc506c2&scoped=true");


/***/ }),

/***/ "./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK4.vue":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK4.vue ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GAC_CHK4_vue_vue_type_template_id_5cd31e43_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GAC-CHK4.vue?vue&type=template&id=5cd31e43&scoped=true */ "./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK4.vue?vue&type=template&id=5cd31e43&scoped=true");
/* harmony import */ var _GAC_CHK4_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GAC-CHK4.vue?vue&type=script&lang=js */ "./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK4.vue?vue&type=script&lang=js");
/* harmony import */ var _GAC_CHK4_vue_vue_type_style_index_0_id_5cd31e43_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GAC-CHK4.vue?vue&type=style&index=0&id=5cd31e43&lang=css&scoped=true */ "./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK4.vue?vue&type=style&index=0&id=5cd31e43&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _GAC_CHK4_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _GAC_CHK4_vue_vue_type_template_id_5cd31e43_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _GAC_CHK4_vue_vue_type_template_id_5cd31e43_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "5cd31e43",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK4.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK4.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK4.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GAC_CHK4_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GAC-CHK4.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK4.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GAC_CHK4_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK4.vue?vue&type=style&index=0&id=5cd31e43&lang=css&scoped=true":
/*!*************************************************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK4.vue?vue&type=style&index=0&id=5cd31e43&lang=css&scoped=true ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GAC_CHK4_vue_vue_type_style_index_0_id_5cd31e43_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GAC-CHK4.vue?vue&type=style&index=0&id=5cd31e43&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK4.vue?vue&type=style&index=0&id=5cd31e43&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK4.vue?vue&type=template&id=5cd31e43&scoped=true":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK4.vue?vue&type=template&id=5cd31e43&scoped=true ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GAC_CHK4_vue_vue_type_template_id_5cd31e43_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GAC_CHK4_vue_vue_type_template_id_5cd31e43_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GAC_CHK4_vue_vue_type_template_id_5cd31e43_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GAC-CHK4.vue?vue&type=template&id=5cd31e43&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK4.vue?vue&type=template&id=5cd31e43&scoped=true");


/***/ }),

/***/ "./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK5.vue":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK5.vue ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GAC_CHK5_vue_vue_type_template_id_5ce135c4_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GAC-CHK5.vue?vue&type=template&id=5ce135c4&scoped=true */ "./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK5.vue?vue&type=template&id=5ce135c4&scoped=true");
/* harmony import */ var _GAC_CHK5_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GAC-CHK5.vue?vue&type=script&lang=js */ "./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK5.vue?vue&type=script&lang=js");
/* harmony import */ var _GAC_CHK5_vue_vue_type_style_index_0_id_5ce135c4_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GAC-CHK5.vue?vue&type=style&index=0&id=5ce135c4&lang=css&scoped=true */ "./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK5.vue?vue&type=style&index=0&id=5ce135c4&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _GAC_CHK5_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _GAC_CHK5_vue_vue_type_template_id_5ce135c4_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _GAC_CHK5_vue_vue_type_template_id_5ce135c4_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "5ce135c4",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK5.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK5.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK5.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GAC_CHK5_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GAC-CHK5.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK5.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GAC_CHK5_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK5.vue?vue&type=style&index=0&id=5ce135c4&lang=css&scoped=true":
/*!*************************************************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK5.vue?vue&type=style&index=0&id=5ce135c4&lang=css&scoped=true ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GAC_CHK5_vue_vue_type_style_index_0_id_5ce135c4_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GAC-CHK5.vue?vue&type=style&index=0&id=5ce135c4&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK5.vue?vue&type=style&index=0&id=5ce135c4&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK5.vue?vue&type=template&id=5ce135c4&scoped=true":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK5.vue?vue&type=template&id=5ce135c4&scoped=true ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GAC_CHK5_vue_vue_type_template_id_5ce135c4_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GAC_CHK5_vue_vue_type_template_id_5ce135c4_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GAC_CHK5_vue_vue_type_template_id_5ce135c4_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GAC-CHK5.vue?vue&type=template&id=5ce135c4&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CHK5.vue?vue&type=template&id=5ce135c4&scoped=true");


/***/ }),

/***/ "./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CTR0.vue":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CTR0.vue ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GAC_CTR0_vue_vue_type_template_id_395118b8_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GAC-CTR0.vue?vue&type=template&id=395118b8&scoped=true */ "./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CTR0.vue?vue&type=template&id=395118b8&scoped=true");
/* harmony import */ var _GAC_CTR0_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GAC-CTR0.vue?vue&type=script&lang=js */ "./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CTR0.vue?vue&type=script&lang=js");
/* harmony import */ var _GAC_CTR0_vue_vue_type_style_index_0_id_395118b8_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GAC-CTR0.vue?vue&type=style&index=0&id=395118b8&lang=css&scoped=true */ "./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CTR0.vue?vue&type=style&index=0&id=395118b8&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _GAC_CTR0_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _GAC_CTR0_vue_vue_type_template_id_395118b8_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _GAC_CTR0_vue_vue_type_template_id_395118b8_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "395118b8",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CTR0.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CTR0.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CTR0.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GAC_CTR0_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GAC-CTR0.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CTR0.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GAC_CTR0_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CTR0.vue?vue&type=style&index=0&id=395118b8&lang=css&scoped=true":
/*!*************************************************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CTR0.vue?vue&type=style&index=0&id=395118b8&lang=css&scoped=true ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GAC_CTR0_vue_vue_type_style_index_0_id_395118b8_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GAC-CTR0.vue?vue&type=style&index=0&id=395118b8&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CTR0.vue?vue&type=style&index=0&id=395118b8&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CTR0.vue?vue&type=template&id=395118b8&scoped=true":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CTR0.vue?vue&type=template&id=395118b8&scoped=true ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GAC_CTR0_vue_vue_type_template_id_395118b8_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GAC_CTR0_vue_vue_type_template_id_395118b8_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GAC_CTR0_vue_vue_type_template_id_395118b8_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GAC-CTR0.vue?vue&type=template&id=395118b8&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/gac/GAC-CTR0.vue?vue&type=template&id=395118b8&scoped=true");


/***/ }),

/***/ "./resources/js/components/workspace/nsia/WorkspaceOnGACAnlCenter.vue":
/*!****************************************************************************!*\
  !*** ./resources/js/components/workspace/nsia/WorkspaceOnGACAnlCenter.vue ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _WorkspaceOnGACAnlCenter_vue_vue_type_template_id_1ea1fe1c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WorkspaceOnGACAnlCenter.vue?vue&type=template&id=1ea1fe1c&scoped=true */ "./resources/js/components/workspace/nsia/WorkspaceOnGACAnlCenter.vue?vue&type=template&id=1ea1fe1c&scoped=true");
/* harmony import */ var _WorkspaceOnGACAnlCenter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WorkspaceOnGACAnlCenter.vue?vue&type=script&lang=js */ "./resources/js/components/workspace/nsia/WorkspaceOnGACAnlCenter.vue?vue&type=script&lang=js");
/* harmony import */ var _WorkspaceOnGACAnlCenter_vue_vue_type_style_index_0_id_1ea1fe1c_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WorkspaceOnGACAnlCenter.vue?vue&type=style&index=0&id=1ea1fe1c&lang=css&scoped=true */ "./resources/js/components/workspace/nsia/WorkspaceOnGACAnlCenter.vue?vue&type=style&index=0&id=1ea1fe1c&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _WorkspaceOnGACAnlCenter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _WorkspaceOnGACAnlCenter_vue_vue_type_template_id_1ea1fe1c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _WorkspaceOnGACAnlCenter_vue_vue_type_template_id_1ea1fe1c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "1ea1fe1c",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/workspace/nsia/WorkspaceOnGACAnlCenter.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/workspace/nsia/WorkspaceOnGACAnlCenter.vue?vue&type=script&lang=js":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/workspace/nsia/WorkspaceOnGACAnlCenter.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WorkspaceOnGACAnlCenter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./WorkspaceOnGACAnlCenter.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/workspace/nsia/WorkspaceOnGACAnlCenter.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WorkspaceOnGACAnlCenter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/workspace/nsia/WorkspaceOnGACAnlCenter.vue?vue&type=style&index=0&id=1ea1fe1c&lang=css&scoped=true":
/*!************************************************************************************************************************************!*\
  !*** ./resources/js/components/workspace/nsia/WorkspaceOnGACAnlCenter.vue?vue&type=style&index=0&id=1ea1fe1c&lang=css&scoped=true ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WorkspaceOnGACAnlCenter_vue_vue_type_style_index_0_id_1ea1fe1c_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./WorkspaceOnGACAnlCenter.vue?vue&type=style&index=0&id=1ea1fe1c&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/workspace/nsia/WorkspaceOnGACAnlCenter.vue?vue&type=style&index=0&id=1ea1fe1c&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/workspace/nsia/WorkspaceOnGACAnlCenter.vue?vue&type=template&id=1ea1fe1c&scoped=true":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/components/workspace/nsia/WorkspaceOnGACAnlCenter.vue?vue&type=template&id=1ea1fe1c&scoped=true ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WorkspaceOnGACAnlCenter_vue_vue_type_template_id_1ea1fe1c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WorkspaceOnGACAnlCenter_vue_vue_type_template_id_1ea1fe1c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WorkspaceOnGACAnlCenter_vue_vue_type_template_id_1ea1fe1c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./WorkspaceOnGACAnlCenter.vue?vue&type=template&id=1ea1fe1c&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/workspace/nsia/WorkspaceOnGACAnlCenter.vue?vue&type=template&id=1ea1fe1c&scoped=true");


/***/ })

}]);