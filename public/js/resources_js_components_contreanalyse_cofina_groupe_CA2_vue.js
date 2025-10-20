"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_contreanalyse_cofina_groupe_CA2_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/groupe/CA2.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/groupe/CA2.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/ContextMenu */ "./resources/js/components/shared/ContextMenu.vue");
/* harmony import */ var _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/ContextMenuItem */ "./resources/js/components/shared/ContextMenuItem.vue");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/auth.service */ "./resources/js/services/auth.service.js");
/* harmony import */ var _services_credit_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/credit.service */ "./resources/js/services/credit.service.js");
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../helpers/helper */ "./resources/js/helpers/helper.js");
/* harmony import */ var vue2_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue2-editor */ "./node_modules/vue2-editor/dist/index.js");
/* harmony import */ var vue2_editor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vue2_editor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _helpers_indexedDB__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../helpers/indexedDB */ "./resources/js/helpers/indexedDB.js");
/* harmony import */ var _helpers_indexedDB__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_helpers_indexedDB__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _shared_TauxEffectifGlobal_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/TauxEffectifGlobal.vue */ "./resources/js/components/shared/TauxEffectifGlobal.vue");
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_defineProperty({
  name: "simulation-credit",
  display: "Simulationcredit",
  components: {
    VueEditor: vue2_editor__WEBPACK_IMPORTED_MODULE_6__.VueEditor,
    MoreVerticalIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_9__.MoreVerticalIcon,
    ChevronUpIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_9__.ChevronUpIcon,
    ChevronDownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_9__.ChevronDownIcon,
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_9__.PlusIcon,
    BookOpenIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_9__.BookOpenIcon,
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_9__.TrashIcon,
    AirplayIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_9__.AirplayIcon,
    ContextMenu: _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_0__["default"],
    ContextMenuItem: _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_1__["default"],
    TauxEffectifGlobal: _shared_TauxEffectifGlobal_vue__WEBPACK_IMPORTED_MODULE_8__["default"]
  },
  props: {
    meta_data: Object,
    tb_name: String,
    tb_display_name: String
  },
  computed: {
    tb00: function tb00() {
      if (![null, undefined, ''].includes(this.meta_data)) {
        var _this$meta_data;
        if (![null, undefined, ''].includes((_this$meta_data = this.meta_data) === null || _this$meta_data === void 0 ? void 0 : _this$meta_data.dossier_credit)) {
          var _this$meta_data2, _this$meta_data3;
          var applied_templ_name = (_this$meta_data2 = this.meta_data) === null || _this$meta_data2 === void 0 ? void 0 : _this$meta_data2.dossier_credit.applied_templ_name;
          var credkeys = this.determineCredPubTables(applied_templ_name);
          var credPubTb0 = credkeys[0];
          return (_this$meta_data3 = this.meta_data) === null || _this$meta_data3 === void 0 ? void 0 : _this$meta_data3.dossier_credit[credPubTb0];
        }
      }
      return {};
    },
    tb1: function tb1() {
      if (![null, undefined, ''].includes(this.meta_data)) {
        var _this$meta_data4;
        if (![null, undefined, ''].includes((_this$meta_data4 = this.meta_data) === null || _this$meta_data4 === void 0 ? void 0 : _this$meta_data4.dossier_credit)) {
          var _this$meta_data5, _this$meta_data6;
          var applied_templ_name = (_this$meta_data5 = this.meta_data) === null || _this$meta_data5 === void 0 ? void 0 : _this$meta_data5.dossier_credit.applied_templ_name;
          var credkeys = this.determineCredPubTables(applied_templ_name);
          var credPubTb = credkeys[1];
          return (_this$meta_data6 = this.meta_data) === null || _this$meta_data6 === void 0 ? void 0 : _this$meta_data6.dossier_credit[credPubTb];
        }
      }
      return {};
    },
    dossier_credit: function dossier_credit() {
      return this.meta_data["dossier_credit"];
    },
    isInfine: function isInfine() {
      var _this$tb1$mode_paieme;
      return ((_this$tb1$mode_paieme = this.tb1.mode_paiement) === null || _this$tb1$mode_paieme === void 0 ? void 0 : _this$tb1$mode_paieme.toLowerCase()) == "in fine";
    }
  },
  created: function created() {
    var _this = this;
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _services_credit_service__WEBPACK_IMPORTED_MODULE_4__["default"].loadCredits().then(function (res) {
              _this.credData(res);
            })["catch"](function (err) {
              console.log(err);
            });
          case 2:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  mounted: function mounted() {
    this.tableClosedOrOpened();
    this.loadTbAttrs();
  },
  watch: {
    encours: function encours(newValue, oldValue) {
      // console.log(newValue);
      if (newValue.encours_montant !== oldValue.encours_montant) {
        console.log(newValue);
      }
    }
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
      isSeen: {},
      seen: true,
      seen1: true,
      seen2: true,
      seen3: true,
      credits: [],
      // clients: [],
      encours: {},
      // placeholder: "Chercher clients",
      // matcli: "matcli",
      // nomcli: "nomcli",
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
      formDataToBeWatched: {
        notes: []
      },
      // Ajouter note
      listingNote: false,
      totalFrais: 0,
      fraisLoading: false
    };
  },
  methods: {
    toggleOpen: function toggleOpen(key) {
      var data = _objectSpread({}, this.isSeen);
      data[key] = !data[key];
      this.isSeen = data;
    },
    tableClosedOrOpened: function tableClosedOrOpened() {
      this.seen = this.fetchClosedTables(this.tb_name + this.meta_data["cred_pub_key"]);
    },
    // Ajouter note
    openNotesModal: function openNotesModal() {
      var listing = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.listingNote = listing;
      this.$modal.show(this.tb_name);
    },
    retract: function retract() {
      this.seen = !this.seen;
      var a = {
        tb_name: this.tb_name + this.meta_data["cred_pub_key"],
        status: this.seen
      };
      EventBus.$emit("savedclosed-table", a);
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
    }
  }
}, "watch", {}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/groupe/CA2.vue?vue&type=template&id=271aa6fc&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/groupe/CA2.vue?vue&type=template&id=271aa6fc&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$formDataToBeWatch, _vm$tb1$frais, _vm$tb1$frais2, _vm$dossier_credit, _vm$dossier_credit2, _vm$dossier_credit3, _vm$formDataToBeWatch2;
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
    staticClass: "card card-width-height"
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
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Simulation de prêt\n                        ")]), _vm._v(" "), _c("div", {
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
  }, [_c("span", [_vm._v("\n                                            " + _vm._s(_vm.formDataToBeWatched.notes.length))])])])]) : _vm._e(), _vm._v(" "), _c("chevron-up-icon", {
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
  }, [_vm.encours ? _c("div", {
    staticStyle: {
      "margin-top": "0px"
    },
    attrs: {
      id: "dashboard_client"
    }
  }, [_c("div", {
    staticClass: "card-header bg-white text-center d-flex justify-content-center"
  }, [_c("strong", [_vm._v("\n                                    ENTREPRISE : " + _vm._s(_vm.encours.nom_client) + "\n                                ")]), _vm._v("\n                                  — as of date :\n                                " + _vm._s(_vm.encours.asofdate) + "\n                            ")]), _vm._v(" "), _c("div", {
    staticClass: "card-body d-flex justify-content-end border rounded"
  }, [_c("div", {
    staticClass: "card-body col-4"
  }, [_c("div", {
    staticClass: "d-flex align-items-center"
  }, [_c("div", [_vm._m(0), _vm._v(" "), _c("h6", {
    staticClass: "my-1 text-danger"
  }, [_vm._v("\n                                                " + _vm._s(_vm._f("formatNumber")(_vm.encours.encours_montant)) + "\n                                            ")]), _vm._v(" "), _c("p", {
    staticClass: "my-1"
  }, [_vm._v("\n                                                #Prêts :\n                                                " + _vm._s(_vm._f("formatNumber")(_vm.encours.nbre_encours)) + "\n                                            ")])])])]), _vm._v(" "), _c("div", {
    staticClass: "card-body col-4"
  }, [_c("div", {
    staticClass: "d-flex align-items-center"
  }, [_c("div", [_vm._m(1), _vm._v(" "), _c("h6", {
    staticClass: "my-1 text-success"
  }, [_vm._v("\n                                                " + _vm._s(_vm._f("formatNumber")(_vm.encours.par_0)) + "\n                                            ")]), _vm._v(" "), _c("p", {
    staticClass: "my-1"
  }, [_vm._v("\n                                                #Prêts :\n                                                " + _vm._s(_vm._f("formatNumber")(_vm.encours.nbre_par_0)) + "\n                                            ")])])])]), _vm._v(" "), _c("div", {
    staticClass: "card-body col-4"
  }, [_c("div", {
    staticClass: "d-flex align-items-center"
  }, [_c("div", [_vm._m(2), _vm._v(" "), _c("h6", {
    staticClass: "my-1 text-info"
  }, [_vm._v("\n                                                " + _vm._s(_vm._f("formatNumber")(_vm.encours.par_30)) + "\n                                            ")]), _vm._v(" "), _c("p", {
    staticClass: "my-1"
  }, [_vm._v("\n                                                #Prêts :\n                                                " + _vm._s(_vm._f("formatNumber")(_vm.encours.nbre_par_30)) + "\n                                            ")])])])]), _vm._v(" "), _c("div", {
    staticClass: "card-body col-4"
  }, [_c("div", {
    staticClass: "d-flex align-items-center"
  }, [_c("div", [_vm._m(3), _vm._v(" "), _c("h6", {
    staticClass: "my-1 text-warning"
  }, [_vm._v("\n                                                " + _vm._s(_vm._f("formatNumber")(_vm.encours.par_90)) + "\n                                            ")]), _vm._v(" "), _c("p", {
    staticClass: "my-1"
  }, [_vm._v("\n                                                #Prêts :\n                                                " + _vm._s(_vm._f("formatNumber")(_vm.encours.nbre_par_90)) + "\n                                            ")])])])]), _vm._v(" "), _c("div", {
    staticClass: "card-body col-4"
  }, [_c("div", {
    staticClass: "d-flex align-items-center"
  }, [_c("div", [_vm._m(4), _vm._v(" "), _c("h6", {
    staticClass: "my-1 text-danger"
  }, [_vm._v("\n                                                " + _vm._s(_vm._f("formatNumber")(_vm.encours.solde_cpte_courant)) + "\n                                            ")])])])])])]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "type_credit"
    }
  }, [_vm._v("\n                                    Type de demande\n                                ")]), _vm._v(" "), _c("input", {
    staticClass: "form-control",
    attrs: {
      disabled: "",
      type: "text"
    },
    domProps: {
      value: _vm.tb1.type_demande
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "type_credit"
    }
  }, [_vm._v("\n                                    Type de crédit\n                                ")]), _vm._v(" "), _c("input", {
    staticClass: "form-control",
    attrs: {
      disabled: "",
      type: "text"
    },
    domProps: {
      value: _vm.tb1.type_credit
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "montant_demander"
    }
  }, [_vm._v("\n                                    Montant de crédit demandé\n                                ")]), _vm._v(" "), _c("currency-input2", {
    attrs: {
      disabled: "",
      value: _vm.tb1.montant_demander,
      id: "montant_demander"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "montant_credit"
    }
  }, [_vm._v("\n                                    Montant du crédit ( proposé )\n                                ")]), _vm._v(" "), _c("currency-input2", {
    staticStyle: {
      background: "rgba(204, 35, 91, 0.2)",
      "box-shadow": "0 1px 1px grey"
    },
    attrs: {
      disabled: "",
      "default-typing": false,
      value: _vm.tb1.montant_credit
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Taux du crédit demandé(%)\n                                ")]), _vm._v(" "), _c("input", {
    staticClass: "form-control",
    attrs: {
      disabled: "",
      type: "number"
    },
    domProps: {
      value: _vm.tb1.taux_credit
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("\n                                    Taux du crédit proposé (%)\n                                ")]), _vm._v(" "), _c("input", {
    staticClass: "form-control",
    attrs: {
      disabled: "",
      type: "number"
    },
    domProps: {
      value: _vm.tb1.taux_credit_propose
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "duree_credit"
    }
  }, [_vm._v("\n                                    Durée du crédit demandé (Mois)\n                                ")]), _vm._v(" "), _c("input", {
    staticClass: "form-control",
    attrs: {
      disabled: "",
      type: "number"
    },
    domProps: {
      value: _vm.tb1.duree_credit_demande
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("\n                                    Durée du crédit proposé (Mois)\n                                ")]), _vm._v(" "), _c("input", {
    staticClass: "form-control",
    attrs: {
      disabled: "",
      type: "number"
    },
    domProps: {
      value: _vm.tb1.duree_credit
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "type_paiement"
    }
  }, [_vm._v("\n                                    Type de paiement demandé\n                                ")]), _vm._v(" "), _c("input", {
    staticClass: "form-control",
    attrs: {
      disabled: ""
    },
    domProps: {
      value: _vm.tb1.type_paiement_demande
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "type_paiement"
    }
  }, [_vm._v("Type de paiement proposé\n                                    ")]), _vm._v(" "), _c("input", {
    staticClass: "form-control",
    attrs: {
      disabled: ""
    },
    domProps: {
      value: _vm.tb1.type_paiement
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "mode_paiement"
    }
  }, [_vm._v("Périodicité de remboursement demandé\n                                ")]), _vm._v(" "), _c("input", {
    staticClass: "form-control",
    attrs: {
      disabled: "",
      name: "mode_paiement"
    },
    domProps: {
      value: _vm.tb1.mode_paiement_demande
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(5), _vm._v(" "), _c("input", {
    staticClass: "form-control",
    attrs: {
      disabled: "",
      name: "mode_paiement"
    },
    domProps: {
      value: _vm.tb1.mode_paiement
    }
  })]), _vm._v(" "), _vm.tb00.type_demande != "Première demande" ? _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "mode_paiement"
    }
  }, [_vm._v("Rachat")]), _vm._v(" "), _c("currency-input2", {
    staticStyle: {
      background: "rgba(204, 35, 91, 0.2)",
      "box-shadow": "0 1px 1px grey"
    },
    attrs: {
      "default-typing": false,
      value: _vm.tb1.rachat
    }
  })], 1) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4 d-none"
  }), _vm._v(" "), _vm.tb00.type_demande != "Première demande" ? _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "numero_pret_a_rachete"
    }
  }, [_vm._v(" N° du prêt à racheter\n                                ")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.tb1.numero_pret_a_rachete,
      expression: "tb1.numero_pret_a_rachete"
    }],
    staticClass: "form-control",
    attrs: {
      disabled: "",
      type: "text"
    },
    domProps: {
      value: _vm.tb1.numero_pret_a_rachete
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.tb1, "numero_pret_a_rachete", $event.target.value);
      }
    }
  })]) : _vm._e(), _vm._v(" "), _vm.tb1.type_paiement === "Différé" ? _c("div", {
    staticClass: "col-md-6 pl-4 is_differe"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "periode_type_paiement"
    }
  }, [_vm._v("Période de différé (Mois)")]), _vm._v(" "), _c("input", {
    staticClass: "form-select single-select",
    domProps: {
      value: _vm.tb1.periode_type_paiement
    }
  })]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "date_premiere_echeance"
    }
  }, [_vm._v("Date de la prémière écheance")]), _vm._v(" "), _c("date-input", {
    attrs: {
      viewonly: true,
      value: _vm.tb1.date_premiere_echeance
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "autre_commision"
    }
  }, [_vm._v("Autres commissions")]), _vm._v(" "), _c("input", {
    staticClass: "form-control",
    attrs: {
      disabled: ""
    },
    domProps: {
      value: _vm.tb1.autre_commision
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "limite_teg"
    }
  }, [_vm._v("Limite TEG")]), _vm._v(" "), _c("input", {
    staticClass: "form-control",
    attrs: {
      disabled: ""
    },
    domProps: {
      value: _vm.tb1.limite_teg
    }
  })]), _vm._v(" "), _vm.tb1.type_demande != "Première demande" ? [_c("div", {
    staticClass: "col-md-6 pl-4 mt-4"
  }, [_vm._m(6), _vm._v(" "), _c("div", {
    staticClass: "d-flex"
  }, [_c("div", {
    staticClass: "m-2 d-flex mr-4"
  }, [_c("input", {
    staticClass: "custom-input-check",
    attrs: {
      disabled: "",
      type: "checkbox",
      value: "Oui",
      id: "ce_client_a_t_il_des_impayes_oui"
    },
    domProps: {
      checked: _vm.tb1.ce_client_a_t_il_des_impayes == "Oui"
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "text-nowrap",
    attrs: {
      "for": "ce_client_a_t_il_des_impayes_oui"
    }
  }, [_vm._v("Oui")])]), _vm._v(" "), _c("div", {
    staticClass: "m-2 d-flex mr-4"
  }, [_c("input", {
    staticClass: "custom-input-check",
    attrs: {
      disabled: "",
      type: "checkbox",
      value: "Non",
      id: "ce_client_a_t_il_des_impayes_non"
    },
    domProps: {
      checked: _vm.tb1.ce_client_a_t_il_des_impayes == "Non"
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "text-nowrap",
    attrs: {
      "for": "ce_client_a_t_il_des_impayes_non"
    }
  }, [_vm._v("Non")])])])]), _vm._v(" "), _vm.tb1.ce_client_a_t_il_des_impayes == "Oui" || _vm.encours.par_0 != 0 || _vm.encours.par_30 != 0 || _vm.encours.par_90 != 0 ? _c("div", {
    staticClass: "col-md-12 mt-3 pl-4"
  }, [_vm._m(7), _vm._v(" "), _c("textarea", {
    staticClass: "form-control",
    attrs: {
      disabled: "",
      type: "text",
      id: "motif"
    },
    domProps: {
      value: _vm.tb1.motif
    }
  })]) : _vm._e()] : _vm._e()], 2)]), _vm._v(" "), _vm.isSeen["frais_de_credit"] !== true ? _c("div", {
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
  }, [_vm._m(8)]) : ((_vm$tb1$frais = _vm.tb1.frais) === null || _vm$tb1$frais === void 0 ? void 0 : _vm$tb1$frais.length) > 0 ? _c("div", {
    staticClass: "card-body"
  }, _vm._l(_vm.tb1.frais, function (frais0, index) {
    return _c("div", {
      key: index,
      staticClass: "row"
    }, [_c("div", {
      staticClass: "col-md-3 pl-4"
    }, [index === 0 ? _c("label", [_vm._v("Libellé")]) : _c("label"), _vm._v(" "), _c("input", {
      staticClass: "form-control",
      attrs: {
        disabled: "",
        type: "text"
      },
      domProps: {
        value: frais0.libelle_taux
      }
    })]), _vm._v(" "), _c("div", {
      staticClass: "col-md-3 pl-4"
    }, [index === 0 ? _c("label", [_vm._v("Taux du crédit (%)")]) : _c("label"), _vm._v(" "), _c("input", {
      staticClass: "form-control number",
      attrs: {
        disabled: "",
        type: "number",
        max: "100",
        maxlength: "5"
      },
      domProps: {
        value: frais0.taux_initial
      }
    })]), _vm._v(" "), _c("div", {
      staticClass: "col-md-3 pl-4"
    }, [index === 0 ? _c("label", [_vm._v("\n                                        Taux accordée (%)\n                                        "), _c("span", {
      staticStyle: {
        color: "red"
      }
    }, [_vm._v("*")])]) : _c("label"), _vm._v(" "), _c("input", {
      staticClass: "form-control",
      attrs: {
        disabled: "",
        type: "number",
        max: "100"
      },
      domProps: {
        value: frais0.taux_modififie
      }
    })]), _vm._v(" "), _c("div", {
      staticClass: "col-md-3 pl-4"
    }, [index === 0 ? _c("label", [_vm._v("Valeur")]) : _c("label"), _vm._v(" "), _c("currency-input", {
      attrs: {
        value: frais0.montant_frais,
        readonly: ""
      }
    })], 1)]);
  }), 0) : _vm._e()]) : _c("div", [_c("div", {
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
  }, [_vm._v("\n                                    Frais de crédit\n                                    "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)])])]), _vm._v(" "), _vm.isSeen["frais_annexes"] !== true ? _c("div", {
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
    "class": "subdiv" + this.tb_name,
    attrs: {
      id: "frais-annexes"
    }
  }, [_vm._v("\n                                Frais annexes\n                                "), _c("chevron-up-icon", {
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
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-3"
  }, [_c("label", [_vm._v("Libellé")]), _vm._v(" "), _c("input", {
    staticClass: "form-control",
    attrs: {
      disabled: "",
      type: "text"
    },
    domProps: {
      value: _vm.tb1.libelle_garantie
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "montant_pep"
    }
  }, [_vm._v("\n                                        Taux du crédit (%)\n                                    ")]), _vm._v(" "), _c("input", {
    staticClass: "form-control number",
    attrs: {
      disabled: "",
      type: "text"
    },
    domProps: {
      value: _vm.tb1.valeur_garantie
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "montant_pep"
    }
  }, [_vm._v("\n                                        Taux accordée (%)\n                                    ")]), _vm._v(" "), _c("input", {
    staticClass: "form-control number",
    attrs: {
      disabled: "",
      type: "number"
    },
    domProps: {
      value: _vm.formDataToBeWatched.valeur_garantieaccorde
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "montant_pep"
    }
  }, [_vm._v("Valeur\n                                    ")]), _vm._v(" "), _c("currency-input", {
    attrs: {
      value: _vm.tb1.garantie,
      disabled: ""
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-3"
  }, [_c("label"), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.tb1.libelle_crsd,
      expression: "tb1.libelle_crsd\n                                            "
    }],
    staticClass: "form-control",
    attrs: {
      disabled: "",
      type: "text",
      id: "libelle_crsd"
    },
    domProps: {
      value: _vm.tb1.libelle_crsd
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.tb1, "libelle_crsd", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "taux_crsd"
    }
  }), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.tb1.taux_crsd,
      expression: "tb1.taux_crsd\n                                            "
    }],
    staticClass: "form-control",
    attrs: {
      disabled: "",
      type: "text",
      id: "taux_crsd"
    },
    domProps: {
      value: _vm.tb1.taux_crsd
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.tb1, "taux_crsd", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "tauxaccorde_crsd"
    }
  }), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.tb1.tauxaccorde_crsd,
      expression: "tb1.tauxaccorde_crsd"
    }],
    staticClass: "form-control",
    attrs: {
      disabled: "",
      type: "number",
      max: "100",
      maxlength: "5"
    },
    domProps: {
      value: _vm.tb1.tauxaccorde_crsd
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.tb1, "tauxaccorde_crsd", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "montant_pep"
    }
  }), _vm._v(" "), _c("currency-input", {
    attrs: {
      value: _vm.tb1.montant_crsd,
      disabled: ""
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-3"
  }, [_c("label"), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.tb1.libelle_pep,
      expression: "tb1.libelle_pep\n                                            "
    }],
    staticClass: "form-control col-md-3",
    attrs: {
      type: "text",
      id: "libelle_pep",
      disabled: ""
    },
    domProps: {
      value: _vm.tb1.libelle_pep
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.tb1, "libelle_pep", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "taux_pep"
    }
  }), _vm._v(" "), _c("currency-input", {
    attrs: {
      "default-typing": false,
      disabled: ""
    },
    model: {
      value: _vm.tb1.taux_pep,
      callback: function callback($$v) {
        _vm.$set(_vm.tb1, "taux_pep", $$v);
      },
      expression: "tb1.taux_pep"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-3"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "taux_pep_accorde"
    }
  }), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.tb1.taux_pep_accorde,
      expression: "tb1.taux_pep_accorde"
    }],
    staticClass: "form-control number",
    attrs: {
      disabled: "",
      type: "number"
    },
    domProps: {
      value: _vm.tb1.taux_pep_accorde
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.tb1, "taux_pep_accorde", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "montant_pep"
    }
  }), _vm._v(" "), _c("currency-input", {
    attrs: {
      "default-typing": false,
      disabled: ""
    },
    model: {
      value: _vm.tb1.vmontant_pep,
      callback: function callback($$v) {
        _vm.$set(_vm.tb1, "vmontant_pep", $$v);
      },
      expression: "tb1.vmontant_pep"
    }
  })], 1)])])]) : _c("div", [_c("div", {
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
  }, [_vm._v("\n                                    Frais annexes\n                                    "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)])])]), _vm._v(" "), _vm.isSeen["caracteristiques_du_pret"] !== true ? _c("div", {
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
  }, [_vm._v("\n                                Caractéristiques du prêt\n                                "), _c("chevron-up-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)]), _vm._v(" "), _c("br"), _vm._v(" "), _vm.tb1.echeance != null ? _c("div", [_vm._m(9), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered mb-3"
  }, [_c("thead", [_c("tr", {
    staticClass: "bg-relooker"
  }, [_c("th", [_vm._v("Montant du prêt")]), _vm._v(" "), _c("th", [_vm._v("Taux du prêt (%)")]), _vm._v(" "), _c("th", [_vm._v("Durée du prêt (Mois)")]), _vm._v(" "), _c("th", [_vm._v("Intérêt du prêt")]), _vm._v(" "), _c("th", [_vm._v("Echéance "), !_vm.isInfine ? _c("span", [_vm._v("(par mois)")]) : _vm._e()]), _vm._v(" "), _c("th", [_vm._v("Garantie")]), _vm._v(" "), _c("th", [_vm._v("CRSD")]), _vm._v(" "), _c("th", [_vm._v("PEP")])])]), _vm._v(" "), _c("tbody", _vm._l(1, function (i) {
    return _c("tr", {
      key: i
    }, [_c("td", [_vm._v("\n                                                " + _vm._s(_vm._f("formatNumber")(_vm.tb1.montant_credit)) + "\n                                            ")]), _vm._v(" "), _c("td", [_vm._v("\n                                                " + _vm._s(_vm.tb1.taux_credit_propose) + "\n                                            ")]), _vm._v(" "), _c("td", [_vm._v("\n                                                " + _vm._s(_vm.tb1.duree_credit) + "\n                                            ")]), _vm._v(" "), _c("td", [_vm._v("\n                                                " + _vm._s(_vm._f("formatNumber")(Math.ceil(_vm.tb1.echeance.interet))) + "\n                                            ")]), _vm._v(" "), _c("td", [_vm._v("\n                                                " + _vm._s(_vm._f("formatNumber")(Math.ceil(_vm.tb1.echeance.echeance))) + "\n                                            ")]), _vm._v(" "), _c("td", [_vm._v("\n                                                " + _vm._s(_vm._f("formatNumber")(_vm.tb1.garantie)) + "\n                                            ")]), _vm._v(" "), _c("td", [_vm._v("\n                                                " + _vm._s(_vm._f("formatNumber")(_vm.tb1.montant_crsd)) + "\n                                            ")]), _vm._v(" "), _c("td", [_vm._v("\n                                                " + _vm._s(_vm._f("formatNumber")(_vm.tb1.vmontant_pep)) + "\n                                            ")])]);
  }), 0)])]), _vm._v(" "), _c("br")]) : _vm._e(), _vm._v(" "), ((_vm$tb1$frais2 = _vm.tb1.frais) === null || _vm$tb1$frais2 === void 0 ? void 0 : _vm$tb1$frais2.length) > 0 ? _c("div", [_c("h6", {
    staticClass: "d-flex justify-content-between"
  }, [_c("span", [_vm._v(" Frais de crédit ")]), _vm._v(" "), _vm.fraisLoading ? _c("span", {
    staticClass: "spinner-border spinner-border-sm text-danger me-2"
  }) : _vm._e()]), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered mb-3"
  }, [_vm._m(10), _vm._v(" "), _c("tbody", [_vm._l(_vm.tb1.frais, function (frais0, index) {
    return _c("tr", {
      key: index
    }, [_c("td", [_vm._v(_vm._s(frais0.libelle_taux))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(frais0.taux_modififie))]), _vm._v(" "), _c("td", [_vm._v("\n                                            " + _vm._s(_vm._f("formatNumber")(frais0.montant_frais)) + "\n                                        ")])]);
  }), _vm._v(" "), _c("tr", [_vm._m(11), _vm._v(" "), _c("td", {
    staticStyle: {
      "background-color": "#2c3e50",
      color: "white"
    }
  }, [_vm._v("\n                                            " + _vm._s(_vm._f("formatNumber")(Math.ceil(_vm.tb1.val_total_frais))) + "\n                                        ")])])], 2)]), _vm._v(" "), _c("br")]) : _vm._e(), _vm._v(" "), _vm.tb1.echeance != null ? _c("div", [_vm._m(12), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered mb-3"
  }, [_vm._m(13), _vm._v(" "), _c("tbody", _vm._l(1, function (i) {
    return _c("tr", {
      key: i
    }, [_c("td", [_vm._v("\n                                            " + _vm._s(_vm.tb1.echeance.coutCapital) + "\n                                            %\n                                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                                            " + _vm._s(_vm._f("formatNumber")(Math.ceil(_vm.tb1.echeance.cashflow))) + "\n                                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                                            " + _vm._s(_vm.tb1.echeance.rentabilitepret) + "\n                                            %\n                                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                                            " + _vm._s(_vm.tb1.echeance.rentabiliteAnnuel) + "\n                                            %\n                                        ")])]);
  }), 0)])]) : _vm._e(), _vm._v(" "), _c("taux-effectif-global", {
    attrs: {
      cred_pub_tb_1: (_vm$dossier_credit = _vm.dossier_credit) === null || _vm$dossier_credit === void 0 ? void 0 : _vm$dossier_credit.cred_pub_tb_1,
      cred_pub_key: (_vm$dossier_credit2 = _vm.dossier_credit) === null || _vm$dossier_credit2 === void 0 ? void 0 : _vm$dossier_credit2.cred_pub_key,
      numero_dossier: (_vm$dossier_credit3 = _vm.dossier_credit) === null || _vm$dossier_credit3 === void 0 ? void 0 : _vm$dossier_credit3.numero_dossier
    }
  }), _vm._v(" "), _c("rentacred", {
    staticClass: "my-5",
    attrs: {
      dossier_credit: _vm.dossier_credit
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
  }, [_vm._v("\n                                    Caractéristiques du prêt\n                                    "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)])])]), _vm._v(" "), _c("div", {
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
    ref: "topdiv",
    staticClass: "head",
    attrs: {
      id: "ca2-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Simulation de prêt\n                        ")]), _vm._v(" "), _c("div", {
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
  }, [_c("span", [_vm._v(_vm._s(_vm.formDataToBeWatched.notes.length))])])])]) : _vm._e(), _vm._v(" "), _c("chevron-down-icon", {
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
  })], 1)])])])])], 1), _vm._v(" "), _c("note-modal", {
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
  return _c("p", {
    staticClass: "mb-0 text-secondary font-weight-bold"
  }, [_c("strong", [_vm._v("Encours")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("p", {
    staticClass: "mb-0 text-secondary font-weight-bold"
  }, [_c("strong", [_vm._v("Par 0")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("p", {
    staticClass: "mb-0 text-secondary font-weight-bold"
  }, [_c("strong", [_vm._v("Par 30")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("p", {
    staticClass: "mb-0 text-secondary font-weight-bold"
  }, [_c("strong", [_vm._v("Par 90 ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("p", {
    staticClass: "mb-0 text-secondary font-weight-bold"
  }, [_c("strong", [_vm._v("Compte courant\n                                                ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "mode_paiement"
    }
  }, [_vm._v("\n                                    Périodicité de remboursement proposé\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_c("b", [_vm._v("Ce client a-t-il des impayés ? ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", [_vm._v("Veuillez saisir les raisons de l'impayé si existant "), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("span", {
    staticClass: "spinner-border spinner-border"
  }), _vm._v(" "), _c("h5", [_vm._v("\n                                    Chargement des données de frais en cours ... "), _c("br"), _vm._v("\n                                    Ceci peut prendre un peu de temps\n                                ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("h6", {
    staticClass: "d-flex justify-content-between"
  }, [_c("span", [_vm._v(" Information du prêt")])]);
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
  return _c("h6", {
    staticClass: "d-flex justify-content-between"
  }, [_c("span", [_vm._v(" Information de rentabilité")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", {
    staticClass: "bg-relooker"
  }, [_c("th", [_vm._v("Coût du capital")]), _vm._v(" "), _c("th", [_vm._v("Cash Flow Actualisé")]), _vm._v(" "), _c("th", [_vm._v("\n                                            Rentabilité sur la durée du prêt\n                                        ")]), _vm._v(" "), _c("th", [_vm._v("\n                                            Rentabilité annuelle du prêt\n                                        ")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/groupe/CA2.vue?vue&type=style&index=0&id=271aa6fc&lang=css&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/groupe/CA2.vue?vue&type=style&index=0&id=271aa6fc&lang=css&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\ninput[data-v-271aa6fc] {\r\n    /*border: 1px solid red;*/\n}\n*[data-v-271aa6fc] {\r\n    font-family: \"Google sans\";\n}\nth[data-v-271aa6fc] {\r\n    font-size: 12px;\n}\nlabel[data-v-271aa6fc] {\r\n    height: 10px;\r\n    font-size: 13px;\n}\ninput[data-v-271aa6fc],\r\nselect[data-v-271aa6fc] {\r\n    height: 35px;\r\n    border-color: #34495e;\r\n    color: #57606f;\r\n    font-size: 13px;\r\n    font-weight: bold;\n}\n.card-width-height[data-v-271aa6fc] {\r\n    width: 100%;\r\n    height: 100%;\n}\n.head[data-v-271aa6fc] {\r\n    color: #f1f2f6;\r\n    font-size: 22px;\n}\n.hdc[data-v-271aa6fc] {\r\n    background-color: #57606f;\n}\r\n\r\n/* Ajouter note */\n.badge-sm[data-v-271aa6fc] {\r\n    display: inline-block;\r\n    width: 15px;\r\n    height: 15px;\r\n    background: rgba(255, 0, 0, 0.882);\r\n    color: white;\r\n    font-size: 12px;\r\n    font-weight: 500;\r\n    border-radius: 100%;\r\n    position: absolute;\r\n    top: -20%;\r\n    left: 55%;\r\n    text-align: center;\n}\n.relook-header[data-v-271aa6fc] {\r\n    color: #000;\r\n    background-color: #f4f3f3;\r\n    padding: 5px;\r\n    border-bottom: 1px solid #b6b8bb;\n}\n.bg-relooker[data-v-271aa6fc] {\r\n    background-color: #2c3e50;\r\n    color: white;\n}\n.custom-input-check[data-v-271aa6fc] {\r\n    height: 18px;\r\n    width: 20px;\r\n    margin-right: 5px;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/groupe/CA2.vue?vue&type=style&index=0&id=271aa6fc&lang=css&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/groupe/CA2.vue?vue&type=style&index=0&id=271aa6fc&lang=css&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA2_vue_vue_type_style_index_0_id_271aa6fc_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CA2.vue?vue&type=style&index=0&id=271aa6fc&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/groupe/CA2.vue?vue&type=style&index=0&id=271aa6fc&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA2_vue_vue_type_style_index_0_id_271aa6fc_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA2_vue_vue_type_style_index_0_id_271aa6fc_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/contreanalyse/cofina/groupe/CA2.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/components/contreanalyse/cofina/groupe/CA2.vue ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CA2_vue_vue_type_template_id_271aa6fc_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CA2.vue?vue&type=template&id=271aa6fc&scoped=true */ "./resources/js/components/contreanalyse/cofina/groupe/CA2.vue?vue&type=template&id=271aa6fc&scoped=true");
/* harmony import */ var _CA2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CA2.vue?vue&type=script&lang=js */ "./resources/js/components/contreanalyse/cofina/groupe/CA2.vue?vue&type=script&lang=js");
/* harmony import */ var _CA2_vue_vue_type_style_index_0_id_271aa6fc_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CA2.vue?vue&type=style&index=0&id=271aa6fc&lang=css&scoped=true */ "./resources/js/components/contreanalyse/cofina/groupe/CA2.vue?vue&type=style&index=0&id=271aa6fc&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CA2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _CA2_vue_vue_type_template_id_271aa6fc_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _CA2_vue_vue_type_template_id_271aa6fc_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "271aa6fc",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/contreanalyse/cofina/groupe/CA2.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/contreanalyse/cofina/groupe/CA2.vue?vue&type=script&lang=js":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/cofina/groupe/CA2.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CA2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CA2.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/groupe/CA2.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CA2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/contreanalyse/cofina/groupe/CA2.vue?vue&type=style&index=0&id=271aa6fc&lang=css&scoped=true":
/*!*****************************************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/cofina/groupe/CA2.vue?vue&type=style&index=0&id=271aa6fc&lang=css&scoped=true ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA2_vue_vue_type_style_index_0_id_271aa6fc_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CA2.vue?vue&type=style&index=0&id=271aa6fc&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/groupe/CA2.vue?vue&type=style&index=0&id=271aa6fc&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/contreanalyse/cofina/groupe/CA2.vue?vue&type=template&id=271aa6fc&scoped=true":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/cofina/groupe/CA2.vue?vue&type=template&id=271aa6fc&scoped=true ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA2_vue_vue_type_template_id_271aa6fc_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA2_vue_vue_type_template_id_271aa6fc_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA2_vue_vue_type_template_id_271aa6fc_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CA2.vue?vue&type=template&id=271aa6fc&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/groupe/CA2.vue?vue&type=template&id=271aa6fc&scoped=true");


/***/ })

}]);