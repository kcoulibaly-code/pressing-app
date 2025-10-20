"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_credavailtick_CR4_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/credavailtick/CR4.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/credavailtick/CR4.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/ContextMenu */ "./resources/js/components/shared/ContextMenu.vue");
/* harmony import */ var _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/ContextMenuItem */ "./resources/js/components/shared/ContextMenuItem.vue");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./resources/js/services/auth.service.js");
/* harmony import */ var _services_credit_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/credit.service */ "./resources/js/services/credit.service.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _services_proxy_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/proxy.service */ "./resources/js/services/proxy.service.js");
/* harmony import */ var _services_connects_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/connects.service */ "./resources/js/services/connects.service.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), c(GeneratorFunctionPrototype, u, GeneratorFunction.displayName = "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
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
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }











window.$ = window.jQuery = __webpack_require__(/*! jquery/dist/jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Checklist",
  display: "Checklist",
  components: {
    MoreVerticalIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.MoreVerticalIcon,
    ChevronUpIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.ChevronUpIcon,
    ChevronDownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.ChevronDownIcon,
    ContextMenu: _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_0__["default"],
    ContextMenuItem: _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_1__["default"],
    AirplayIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.AirplayIcon,
    BookOpenIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.BookOpenIcon,
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.TrashIcon,
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.PlusIcon
  },
  props: {
    meta_data: Object,
    tb_name: String,
    tb_display_name: String
  },
  created: function created() {},
  mounted: function mounted() {
    var _this = this;
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _this.loadRetrieved();
          case 2:
            _this.loadTbAttrs();
            _this.tableClosedOrOpened();
            EventBus.$on("created-extra-file-template", function (data) {
              var slug = "checklistMiseEnPlace";
              //  const template_name = "Pièce jointe -verification_cni" + '_' + this.$route.params.templateId
              if (![null, undefined, '', 0].includes(_this[slug])) {
                for (var index = 0; index < _this[slug].length; index++) {
                  var _this$$route, _data$template;
                  var template_name = "Pi\xE8ce jointe -".concat(slug).concat(index, "_").concat((_this$$route = _this.$route) === null || _this$$route === void 0 || (_this$$route = _this$$route.params) === null || _this$$route === void 0 ? void 0 : _this$$route.templateId);
                  if (template_name == (data === null || data === void 0 || (_data$template = data.template) === null || _data$template === void 0 ? void 0 : _data$template.name)) {
                    var _data$template2, _data$template3, _data$template4;
                    _this[slug][index]["template"] = {
                      id: data === null || data === void 0 || (_data$template2 = data.template) === null || _data$template2 === void 0 ? void 0 : _data$template2.id,
                      name: data === null || data === void 0 || (_data$template3 = data.template) === null || _data$template3 === void 0 ? void 0 : _data$template3.name,
                      slug: data === null || data === void 0 || (_data$template4 = data.template) === null || _data$template4 === void 0 ? void 0 : _data$template4.slug
                    };
                  }
                }
              }
              _this.handleInput();
            });
            EventBus.$on("extra-files-uploaded", function (data) {
              var slug = "checklistMiseEnPlace";
              var checklist = _this[slug];
              if (![undefined, null, '', 0].includes(checklist)) {
                if (![undefined, null, 0].includes(checklist.length)) {
                  if ((checklist === null || checklist === void 0 ? void 0 : checklist.length) > 0) {
                    checklist.forEach(function (element, index) {
                      var _element$template2, _data$template6;
                      var files = [];
                      data.files.forEach(function (file) {
                        var _element$template, _data$template5;
                        if ((file === null || file === void 0 ? void 0 : file.extra_file_template_id) != null && (element === null || element === void 0 || (_element$template = element.template) === null || _element$template === void 0 ? void 0 : _element$template.id) == (data === null || data === void 0 || (_data$template5 = data.template) === null || _data$template5 === void 0 ? void 0 : _data$template5.id)) {
                          files.push(file);
                        }
                      });
                      if ((element === null || element === void 0 || (_element$template2 = element.template) === null || _element$template2 === void 0 ? void 0 : _element$template2.id) == (data === null || data === void 0 || (_data$template6 = data.template) === null || _data$template6 === void 0 ? void 0 : _data$template6.id)) {
                        var updatedArray = _toConsumableArray(_this[slug]);
                        updatedArray[index] = _objectSpread(_objectSpread({}, updatedArray[index]), {}, {
                          extrafiles: files,
                          nb_files: (files === null || files === void 0 ? void 0 : files.length) || 0
                        });
                        _this[slug] = updatedArray;
                      }
                    });
                  }
                }
              }
              _this.handleInput();
            });
          case 6:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  data: function data() {
    var vm = this;
    return {
      connectsHost: _services_connects_service__WEBPACK_IMPORTED_MODULE_6__["default"].loadablehost(),
      ebapisHost: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_2__["default"].host,
      authcheck: false,
      authcheckUsr: null,
      authcheckStatus: null,
      watchInPause: false,
      initLoad: true,
      seen: false,
      seen1: true,
      seen2: true,
      credits: [],
      clients: [],
      dossier_credit: null,
      encours: null,
      placeholder: "Chercher clients",
      matcli: "matcli",
      nomcli: "nomcli",
      meta_parseable: {
        cred_pub_key: this.meta_data["cred_pub_key"],
        tb_name: this.tb_name
      },
      check_lists: [{
        libelle: "RAPPORT D'EXPERTISE",
        isChecked: false,
        commentaire: ""
      }, {
        libelle: "REQUISITION FONCIERE DATANT DE MOINS DE 2 SEMAINES",
        isChecked: false,
        commentaire: ""
      }, {
        libelle: "LETTRE D'ORDRE NOTAIRE",
        isChecked: false,
        commentaire: ""
      }, {
        libelle: "CONVENTION D'HYPOTHEQUE",
        isChecked: false,
        commentaire: ""
      }, {
        libelle: "TEG",
        isChecked: false,
        commentaire: ""
      }, {
        libelle: "TABLEAU D'AMORTISSEMENT",
        isChecked: false,
        commentaire: ""
      }],
      formDataToBeWatched: {
        checklist_mise_en_place: null,
        comments: "",
        code_mise_en_place: null,
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
      }, {
        title: "Supprimer",
        icon: "icofont icofont-trash",
        handler: this.startDeletingTbFromContext,
        disabled: false
      }],
      checklistMiseEnPlace: [],
      listingNote: false,
      hasScroll: true,
      resizeObserver: null,
      contentCopied: false,
      codeIsGen: null,
      fileTemplates: null,
      allFiles: null,
      is_loading: true
    };
  },
  methods: {
    getChecklist: function getChecklist() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var _res$data, res, checks;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return _this2.$axios.post("/api/get-checklist-mp");
            case 3:
              res = _context2.sent;
              checks = (_res$data = res.data) === null || _res$data === void 0 ? void 0 : _res$data.checklistMiseEnPlace;
              _this2.checklistMiseEnPlace = checks.map(function (el) {
                var _this2$allFiles;
                var parsedTemplateId = [];
                try {
                  parsedTemplateId = JSON.parse((el === null || el === void 0 ? void 0 : el.template_id) || "[]");
                } catch (e) {
                  console.error("template_id JSON parsing failed for:", el === null || el === void 0 ? void 0 : el.template_id, e);
                }
                var files = (_this2$allFiles = _this2.allFiles) === null || _this2$allFiles === void 0 ? void 0 : _this2$allFiles.filter(function (file) {
                  var _parsedTemplateId;
                  return (_parsedTemplateId = parsedTemplateId) === null || _parsedTemplateId === void 0 ? void 0 : _parsedTemplateId.includes(file.file_template_id);
                });
                return _objectSpread(_objectSpread({}, el), {}, {
                  id: (0,uuid__WEBPACK_IMPORTED_MODULE_8__["default"])(),
                  template_id: parsedTemplateId,
                  is_default: (el === null || el === void 0 ? void 0 : el.is_default) == 1,
                  files: files,
                  response: (files === null || files === void 0 ? void 0 : files.length) > 0 ? "Oui" : ""
                });
              });
              _context2.next = 11;
              break;
            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2["catch"](0);
              console.error("Erreur lors de la récupération de la checklist :", _context2.t0);
              // Optionnel : afficher une notification ou message utilisateur
            case 11:
              _this2.handleInput();
            case 12:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[0, 8]]);
      }))();
    },
    generateCodeUnique: function generateCodeUnique(r) {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var _this3$formDataToBeWa, _this3$meta_data, checklistMp, _iterator, _step, item, _item$libelle, _item$libelle2, _item$files, _item$extrafiles, _item$libelle3, _item$libelle4, _item$libelle5, _item$libelle6, _item$libelle7, response;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _this3.codeIsGen = false;
              // verification des libelle des items de checklistMiseEnPlace
              _context3.prev = 1;
              checklistMp = (_this3$formDataToBeWa = _this3.formDataToBeWatched) === null || _this3$formDataToBeWa === void 0 ? void 0 : _this3$formDataToBeWa.checklist_mise_en_place; // console.log({checklistMp})
              _iterator = _createForOfIteratorHelper(checklistMp);
              _context3.prev = 4;
              _iterator.s();
            case 6:
              if ((_step = _iterator.n()).done) {
                _context3.next = 45;
                break;
              }
              item = _step.value;
              if (![undefined, null, '', 'undefined', 'null'].includes(item === null || item === void 0 ? void 0 : item.libelle)) {
                _context3.next = 12;
                break;
              }
              _this3.$toasted.show("Pri\xE8re de renseigner tous les libell\xE9s de la checklist", {
                duration: 5000
              });
              _this3.codeIsGen = null;
              return _context3.abrupt("return", false);
            case 12:
              if (![undefined, null, '', 'undefined', 'null'].includes(item.response)) {
                _context3.next = 16;
                break;
              }
              _this3.$toasted.show("Pri\xE8re de repondre Oui, Non N/A \xE0 ".concat((_item$libelle = item === null || item === void 0 ? void 0 : item.libelle) !== null && _item$libelle !== void 0 ? _item$libelle : ''), {
                duration: 5000
              });
              _this3.codeIsGen = null;
              return _context3.abrupt("return", false);
            case 16:
              if (!["Non", "Non applicable"].includes(item === null || item === void 0 ? void 0 : item.response)) {
                _context3.next = 21;
                break;
              }
              if (![undefined, null, '', 'undefined', 'null'].includes(item === null || item === void 0 ? void 0 : item.comment)) {
                _context3.next = 21;
                break;
              }
              _this3.$toasted.show("Veuillez laissez un comment pour le libell\xE9:  ".concat((_item$libelle2 = item === null || item === void 0 ? void 0 : item.libelle) !== null && _item$libelle2 !== void 0 ? _item$libelle2 : ''), {
                duration: 5000
              });
              _this3.codeIsGen = null;
              return _context3.abrupt("return", false);
            case 21:
              if (!["Oui"].includes(item === null || item === void 0 ? void 0 : item.response)) {
                _context3.next = 43;
                break;
              }
              if (!(([undefined, null, '', 'undefined', 'null'].includes(item === null || item === void 0 ? void 0 : item.files) || (item === null || item === void 0 || (_item$files = item.files) === null || _item$files === void 0 ? void 0 : _item$files.length) == 0) && (item === null || item === void 0 || (_item$extrafiles = item.extrafiles) === null || _item$extrafiles === void 0 ? void 0 : _item$extrafiles.length) == 0)) {
                _context3.next = 26;
                break;
              }
              _this3.$toasted.show("Veuillez attacher le fichier pour le libell\xE9:  ".concat((_item$libelle3 = item === null || item === void 0 ? void 0 : item.libelle) !== null && _item$libelle3 !== void 0 ? _item$libelle3 : ''), {
                duration: 5000
              });
              _this3.codeIsGen = null;
              return _context3.abrupt("return", false);
            case 26:
              if (![undefined, null, '', 'undefined', 'null'].includes(item === null || item === void 0 ? void 0 : item.is_derogation)) {
                _context3.next = 30;
                break;
              }
              _this3.$toasted.show("Veuillez selectionner s'il s'agit d'une d\xE9rogation ou pas pour le libell\xE9:  ".concat((_item$libelle4 = item === null || item === void 0 ? void 0 : item.libelle) !== null && _item$libelle4 !== void 0 ? _item$libelle4 : ''), {
                duration: 5000
              });
              _this3.codeIsGen = null;
              return _context3.abrupt("return", false);
            case 30:
              if (!["Oui"].includes(item.is_derogation)) {
                _context3.next = 43;
                break;
              }
              if (![undefined, null, '', 'undefined', 'null'].includes(item === null || item === void 0 ? void 0 : item.nom_validateur)) {
                _context3.next = 35;
                break;
              }
              _this3.$toasted.show("Veuillez saisir le nom du validateur de la d\xE9rogation pour le libell\xE9:  ".concat((_item$libelle5 = item === null || item === void 0 ? void 0 : item.libelle) !== null && _item$libelle5 !== void 0 ? _item$libelle5 : ''), {
                duration: 5000
              });
              _this3.codeIsGen = null;
              return _context3.abrupt("return", false);
            case 35:
              if (![undefined, null, '', 'undefined', 'null'].includes(item === null || item === void 0 ? void 0 : item.date_regularisation)) {
                _context3.next = 39;
                break;
              }
              _this3.$toasted.show("Veuillez saisir la date previsionnelle de r\xE9gularisation de d\xE9rogation pour le libell\xE9:  ".concat((_item$libelle6 = item === null || item === void 0 ? void 0 : item.libelle) !== null && _item$libelle6 !== void 0 ? _item$libelle6 : ''), {
                duration: 5000
              });
              _this3.codeIsGen = null;
              return _context3.abrupt("return", false);
            case 39:
              if (![undefined, null, '', 'undefined', 'null'].includes(item === null || item === void 0 ? void 0 : item.mail_validation)) {
                _context3.next = 43;
                break;
              }
              _this3.$toasted.show("Veuillez joindre le mail de validation de d\xE9rogation pour le libell\xE9:  ".concat((_item$libelle7 = item === null || item === void 0 ? void 0 : item.libelle) !== null && _item$libelle7 !== void 0 ? _item$libelle7 : ''), {
                duration: 5000
              });
              _this3.codeIsGen = null;
              return _context3.abrupt("return", false);
            case 43:
              _context3.next = 6;
              break;
            case 45:
              _context3.next = 50;
              break;
            case 47:
              _context3.prev = 47;
              _context3.t0 = _context3["catch"](4);
              _iterator.e(_context3.t0);
            case 50:
              _context3.prev = 50;
              _iterator.f();
              return _context3.finish(50);
            case 53:
              if (!(r == null)) {
                _context3.next = 57;
                break;
              }
              _this3.$modal.show("confirmModal");
              _this3.codeIsGen = null;
              return _context3.abrupt("return");
            case 57:
              _this3.$modal.hide("confirmModal");
              _context3.next = 60;
              return _this3.$axios.post(_this3.ebapisHost + "creditbuilder/api/v1/generate-numerical-code/", {
                cred_pub_key: (_this3$meta_data = _this3.meta_data) === null || _this3$meta_data === void 0 || (_this3$meta_data = _this3$meta_data.dossier_credit) === null || _this3$meta_data === void 0 ? void 0 : _this3$meta_data.cred_pub_key
              });
            case 60:
              response = _context3.sent;
              if (response.data.is_success) {
                _this3.$set(_this3.formDataToBeWatched, 'code_mise_en_place', response.data.code_mise_en_place);
                _this3.codeIsGen = true;
              } else {
                _this3.codeIsGen = true;
              }
              _context3.next = 68;
              break;
            case 64:
              _context3.prev = 64;
              _context3.t1 = _context3["catch"](1);
              console.log(_context3.t1);
              _this3.codeIsGen = null;
            case 68:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[1, 64], [4, 47, 50, 53]]);
      }))();
    },
    copiedContent: function copiedContent() {
      var _this4 = this;
      this.contentCopied = true;
      var div = document.getElementById("clipboardDiv");
      var contenu = div.innerText || div.textContent;
      navigator.clipboard.writeText(contenu).then(function () {
        setTimeout(function () {
          _this4.contentCopied = false;
        }, 1000);
      })["catch"](function (err) {
        console.error("Erreur lors de la copie :", err);
      });
    },
    addNewEl: function addNewEl() {
      this.checklistMiseEnPlace.push({
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_8__["default"])(),
        is_default: false,
        libelle: "",
        template_id: [],
        response: "",
        is_derogation: "",
        comment: "",
        files: "",
        extrafiles: "",
        nom_validateur: "",
        date_regularisation: "",
        mail_validation: ""
      });
      this.handleInput();
    },
    removeEl: function removeEl(id) {
      var index = this.checklistMiseEnPlace.findIndex(function (el) {
        return el.id == id;
      });
      this.checklistMiseEnPlace.splice(index, 1);
    },
    addFiles: function addFiles() {
      var _this$$route2,
        _this5 = this;
      var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var slug = 'checklistMiseEnPlace';
      var index = this[slug].findIndex(function (el) {
        return el.id == id;
      });
      EventBus.$emit("open-extra-file-explorer");
      var name = null;
      name = "Pi\xE8ce jointe {(*)}".concat(slug).concat(index, "_").concat((_this$$route2 = this.$route) === null || _this$$route2 === void 0 || (_this$$route2 = _this$$route2.params) === null || _this$$route2 === void 0 ? void 0 : _this$$route2.templateId);
      // name = `Pièce jointe {(*)}${slug}` + '_' + this.$route.params.templateId
      setTimeout(function () {
        var _this5$checklistMiseE;
        EventBus.$emit("data-extra-file-explorer", {
          name: name,
          view: _this5.codeIsGen === true ? true : false,
          files_id: (_this5$checklistMiseE = _this5.checklistMiseEnPlace[index]) === null || _this5$checklistMiseE === void 0 ? void 0 : _this5$checklistMiseE.template_id
        });
      }, 500);
    },
    setDateInput: function setDateInput(event, id) {
      var i = this.checklistMiseEnPlace.findIndex(function (el) {
        return el.id == id;
      });
      this.$set(this.checklistMiseEnPlace[i], 'date_regularisation', event[1]);
      this.handleInput();
    },
    getFiles: function getFiles() {
      var _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var _this6$meta_data;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _services_proxy_service__WEBPACK_IMPORTED_MODULE_5__["default"].proxyEbapis({
                url: _this6.connectsHost + "api/get-files",
                method: "POST",
                data: {
                  file_identity: (_this6$meta_data = _this6.meta_data) === null || _this6$meta_data === void 0 ? void 0 : _this6$meta_data.dossier_credit.cred_pub_key
                }
              }).then(function (res) {
                var _res$data$data, _res$data$data2;
                res.data = JSON.parse(res.data);
                if (((_res$data$data = res.data.data) === null || _res$data$data === void 0 ? void 0 : _res$data$data.length) > 0 || ((_res$data$data2 = res.data.data) === null || _res$data$data2 === void 0 ? void 0 : _res$data$data2.length) != null) {
                  var result = res.data.data;
                  _this6.allFiles = result;
                  var slug = "checklistMiseEnPlace";
                  if (![null, undefined, ""].includes(_this6[slug])) {
                    if (![null, undefined, "", 0].includes(_this6[slug].length)) {
                      _this6[slug] = _this6[slug].map(function (element) {
                        var xfiles = result.filter(function (file) {
                          var _element$template3;
                          return (file === null || file === void 0 ? void 0 : file.extra_file_template_id) != null && (element === null || element === void 0 || (_element$template3 = element.template) === null || _element$template3 === void 0 ? void 0 : _element$template3.id) == (file === null || file === void 0 ? void 0 : file.extra_file_template_id);
                        });
                        var files = result.filter(function (file) {
                          return element.template_id.includes(file.file_template_id);
                        });
                        var tt = (xfiles === null || xfiles === void 0 ? void 0 : xfiles.length) + (files === null || files === void 0 ? void 0 : files.length);
                        return _objectSpread(_objectSpread({}, element), {}, {
                          extrafiles: xfiles,
                          files: files,
                          response: tt > 0 ? 'Oui' : ''
                        });
                      });
                    }
                  }
                }
              })["catch"](function (err) {
                console.error(err);
              });
            case 2:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }))();
    },
    checkBoxChange: function checkBoxChange(a, id, event) {
      var i = this.checklistMiseEnPlace.findIndex(function (el) {
        return el.id == id;
      });
      if (event.target.checked) {
        this.$set(this.checklistMiseEnPlace[i], "response", a);
      } else {
        this.$set(this.checklistMiseEnPlace[i], "response", "");
      }
      if (['Non', 'Non applicable'].includes(a)) {
        this.$set(this.checklistMiseEnPlace[i], "is_derogation", '');
        this.$set(this.checklistMiseEnPlace[i], "nom_validateur", '');
        this.$set(this.checklistMiseEnPlace[i], "date_regularisation", '');
        this.$set(this.checklistMiseEnPlace[i], "mail_validation", '');
        this.$set(this.checklistMiseEnPlace[i], "extrafiles", []);
        this.$set(this.checklistMiseEnPlace[i], "files", []);
      }
      if (['Oui'].includes(a)) {
        this.$set(this.checklistMiseEnPlace[i], "comment", '');
      }
      this.handleInput();
    },
    checkBoxForDero: function checkBoxForDero(r, id, event) {
      var i = this.checklistMiseEnPlace.findIndex(function (el) {
        return el.id == id;
      });
      if (event.target.checked) {
        this.$set(this.checklistMiseEnPlace[i], "is_derogation", r);
      } else {
        this.$set(this.checklistMiseEnPlace[i], "is_derogation", "");
      }
      if (["Non"].includes(r)) {
        this.$set(this.checklistMiseEnPlace[i], "nom_validateur", "");
        this.$set(this.checklistMiseEnPlace[i], "date_regularisation", "");
        this.$set(this.checklistMiseEnPlace[i], "mail_validation", "");
      }
      this.handleInput();
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
      var _this7 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var lentb, createdKey, createdKeyArr;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              lentb = _this7.meta_data["dossier_credit"]["tbs_in_use"];
              createdKey = _this7.tb_name;
              createdKeyArr = createdKey.split("tb");
              createdKey = "cred_pub_tb_" + createdKeyArr[1];
              //    console.log(createdKey);
              if (!(lentb.length > 0)) {
                _context5.next = 18;
                break;
              }
              if (!(_this7.meta_data["dossier_credit"][createdKey] != undefined)) {
                _context5.next = 16;
                break;
              }
              _this7.formDataToBeWatched = _this7.meta_data["dossier_credit"][createdKey];
              if ([undefined, null, ''].includes(_this7.formDataToBeWatched["checklist_mise_en_place"])) {
                _context5.next = 11;
                break;
              }
              _this7.checklistMiseEnPlace = _this7.formDataToBeWatched["checklist_mise_en_place"];
              _context5.next = 13;
              break;
            case 11:
              _context5.next = 13;
              return _this7.getChecklist();
            case 13:
              if (![undefined, null, ""].includes(_this7.formDataToBeWatched["code_mise_en_place"])) {
                _this7.codeIsGen = true;
              }
              _context5.next = 18;
              break;
            case 16:
              _context5.next = 18;
              return _this7.getChecklist();
            case 18:
              _this7.is_loading = false;
            case 19:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }))();
    },
    handleInput: function handleInput() {
      this.$set(this.formDataToBeWatched, "checklist_mise_en_place", this.checklistMiseEnPlace);
    },
    addMore: function addMore(listName) {
      this[listName].push({
        libelle: "",
        isChecked: false,
        commentaire: ""
        // max: this.ActionnariatMaxNumber,
      });
      nextTick(function () {
        window.$('.table-checklist').find('tr:last td:first input').focus();
      });
    },
    remove: function remove(index) {
      this.check_lists.splice(index, 1);
      // this.formDataToBeWatched.total_part =
      //     this.totalPartPourcentageActionnariats;
      this.handleInput();
    },
    setTbVal: function setTbVal(val) {
      this.cred_pub_key = val;
    },
    loadWithError: function loadWithError(err) {
      // window.location.href = "/login";
    },
    loadIncommingData: function loadIncommingData() {
      var _this$meta_data$dossi, _this$meta_data$dossi2, _this$meta_data$dossi3, _this$meta_data$dossi4, _this$meta_data$dossi5, _this$meta_data$dossi6, _this$meta_data$dossi7, _this$meta_data$dossi8, _this$meta_data$dossi9, _this$meta_data$dossi0, _this$meta_data$dossi1, _this$meta_data$dossi10, _this$meta_data$dossi11, _this$meta_data$dossi12, _this$meta_data$dossi13, _this$meta_data$dossi14, _this$meta_data$dossi15, _this$meta_data$dossi16, _this$meta_data$dossi17, _this$meta_data$dossi18, _this$meta_data$dossi19, _this$meta_data$dossi20, _this$meta_data$dossi21, _this$meta_data$dossi22, _this$meta_data$dossi23, _this$meta_data$dossi24, _this$meta_data$dossi25;
      this.denomination_client = (_this$meta_data$dossi = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi === void 0 || (_this$meta_data$dossi = _this$meta_data$dossi.cred_pub_tb_00) === null || _this$meta_data$dossi === void 0 ? void 0 : _this$meta_data$dossi.denomination_client;
      this.type_de_clientele = (_this$meta_data$dossi2 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi2 === void 0 || (_this$meta_data$dossi2 = _this$meta_data$dossi2.cred_pub_tb_00) === null || _this$meta_data$dossi2 === void 0 ? void 0 : _this$meta_data$dossi2.type_de_clientele;
      this.type_credit = (_this$meta_data$dossi3 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi3 === void 0 || (_this$meta_data$dossi3 = _this$meta_data$dossi3.cred_pub_tb_00) === null || _this$meta_data$dossi3 === void 0 ? void 0 : _this$meta_data$dossi3.type_credit;
      this.montant_sollicite = (_this$meta_data$dossi4 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi4 === void 0 || (_this$meta_data$dossi4 = _this$meta_data$dossi4.cred_pub_tb_00) === null || _this$meta_data$dossi4 === void 0 ? void 0 : _this$meta_data$dossi4.montant_sollicite;
      this.duree_credit = (_this$meta_data$dossi5 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi5 === void 0 || (_this$meta_data$dossi5 = _this$meta_data$dossi5.cred_pub_tb_00) === null || _this$meta_data$dossi5 === void 0 ? void 0 : _this$meta_data$dossi5.duree_credit;
      this.matricule_client = (_this$meta_data$dossi6 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi6 === void 0 || (_this$meta_data$dossi6 = _this$meta_data$dossi6.cred_pub_tb_00) === null || _this$meta_data$dossi6 === void 0 ? void 0 : _this$meta_data$dossi6.matricule_client;
      this.encours_actuel = (_this$meta_data$dossi7 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi7 === void 0 || (_this$meta_data$dossi7 = _this$meta_data$dossi7.cred_pub_tb_00) === null || _this$meta_data$dossi7 === void 0 ? void 0 : _this$meta_data$dossi7.encours_actuel;
      this.enc_cumule_apres_acc = (_this$meta_data$dossi8 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi8 === void 0 || (_this$meta_data$dossi8 = _this$meta_data$dossi8.cred_pub_tb_00) === null || _this$meta_data$dossi8 === void 0 ? void 0 : _this$meta_data$dossi8.enc_cumule_apres_acc;
      this.secteur_activite = (_this$meta_data$dossi9 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi9 === void 0 || (_this$meta_data$dossi9 = _this$meta_data$dossi9.cred_pub_tb_00) === null || _this$meta_data$dossi9 === void 0 ? void 0 : _this$meta_data$dossi9.secteur_activite;
      this.adresse_professionnel_principal = (_this$meta_data$dossi0 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi0 === void 0 || (_this$meta_data$dossi0 = _this$meta_data$dossi0.cred_pub_tb_00) === null || _this$meta_data$dossi0 === void 0 ? void 0 : _this$meta_data$dossi0.adresse_professionnel_principal;
      this.geo_lat = (_this$meta_data$dossi1 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi1 === void 0 || (_this$meta_data$dossi1 = _this$meta_data$dossi1.cred_pub_tb_00) === null || _this$meta_data$dossi1 === void 0 ? void 0 : _this$meta_data$dossi1.geo_lat;
      this.geo_lon = (_this$meta_data$dossi10 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi10 === void 0 || (_this$meta_data$dossi10 = _this$meta_data$dossi10.cred_pub_tb_00) === null || _this$meta_data$dossi10 === void 0 ? void 0 : _this$meta_data$dossi10.geo_lon;
      this.date_creation_rccm = (_this$meta_data$dossi11 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi11 === void 0 || (_this$meta_data$dossi11 = _this$meta_data$dossi11.cred_pub_tb_00) === null || _this$meta_data$dossi11 === void 0 ? void 0 : _this$meta_data$dossi11.date_creation_rccm;
      this.numero_rccm = (_this$meta_data$dossi12 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi12 === void 0 || (_this$meta_data$dossi12 = _this$meta_data$dossi12.cred_pub_tb_00) === null || _this$meta_data$dossi12 === void 0 ? void 0 : _this$meta_data$dossi12.numero_rccm;
      this.date_creation_rccm = (_this$meta_data$dossi13 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi13 === void 0 || (_this$meta_data$dossi13 = _this$meta_data$dossi13.cred_pub_tb_00) === null || _this$meta_data$dossi13 === void 0 ? void 0 : _this$meta_data$dossi13.date_creation_rccm;
      this.numero_compte_courant = (_this$meta_data$dossi14 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi14 === void 0 || (_this$meta_data$dossi14 = _this$meta_data$dossi14.cred_pub_tb_00) === null || _this$meta_data$dossi14 === void 0 ? void 0 : _this$meta_data$dossi14.numero_compte_courant;
      this.date_demande = (_this$meta_data$dossi15 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi15 === void 0 || (_this$meta_data$dossi15 = _this$meta_data$dossi15.cred_pub_tb_00) === null || _this$meta_data$dossi15 === void 0 ? void 0 : _this$meta_data$dossi15.date_demande;
      this.forme_juridique = (_this$meta_data$dossi16 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi16 === void 0 || (_this$meta_data$dossi16 = _this$meta_data$dossi16.cred_pub_tb_00) === null || _this$meta_data$dossi16 === void 0 ? void 0 : _this$meta_data$dossi16.forme_juridique;
      this.principal_dirigeant = (_this$meta_data$dossi17 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi17 === void 0 || (_this$meta_data$dossi17 = _this$meta_data$dossi17.cred_pub_tb_00) === null || _this$meta_data$dossi17 === void 0 ? void 0 : _this$meta_data$dossi17.principal_dirigeant;
      this.telephone_principal_dirg = (_this$meta_data$dossi18 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi18 === void 0 || (_this$meta_data$dossi18 = _this$meta_data$dossi18.cred_pub_tb_00) === null || _this$meta_data$dossi18 === void 0 ? void 0 : _this$meta_data$dossi18.telephone_principal_dirg;
      this.experience_secteur = (_this$meta_data$dossi19 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi19 === void 0 || (_this$meta_data$dossi19 = _this$meta_data$dossi19.cred_pub_tb_00) === null || _this$meta_data$dossi19 === void 0 ? void 0 : _this$meta_data$dossi19.experience_secteur;
      this.principal_actionnaire = (_this$meta_data$dossi20 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi20 === void 0 || (_this$meta_data$dossi20 = _this$meta_data$dossi20.cred_pub_tb_00) === null || _this$meta_data$dossi20 === void 0 ? void 0 : _this$meta_data$dossi20.principal_actionnaire;
      this.cofiscore = (_this$meta_data$dossi21 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi21 === void 0 || (_this$meta_data$dossi21 = _this$meta_data$dossi21.cred_pub_tb_00) === null || _this$meta_data$dossi21 === void 0 ? void 0 : _this$meta_data$dossi21.cofiscore;
      this.pays = (_this$meta_data$dossi22 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi22 === void 0 || (_this$meta_data$dossi22 = _this$meta_data$dossi22.cred_pub_tb_00) === null || _this$meta_data$dossi22 === void 0 ? void 0 : _this$meta_data$dossi22.pays;
      this.agence = (_this$meta_data$dossi23 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi23 === void 0 || (_this$meta_data$dossi23 = _this$meta_data$dossi23.cred_pub_tb_00) === null || _this$meta_data$dossi23 === void 0 ? void 0 : _this$meta_data$dossi23.agence;
      this.filiale = (_this$meta_data$dossi24 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi24 === void 0 || (_this$meta_data$dossi24 = _this$meta_data$dossi24.cred_pub_tb_00) === null || _this$meta_data$dossi24 === void 0 ? void 0 : _this$meta_data$dossi24.filiale;
      this.caf = (_this$meta_data$dossi25 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi25 === void 0 || (_this$meta_data$dossi25 = _this$meta_data$dossi25.cred_pub_tb_00) === null || _this$meta_data$dossi25 === void 0 ? void 0 : _this$meta_data$dossi25.caf;
      this.formDataToBeWatched.analyste_credit_filiale = this.authcheckUsr.name;
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
        name_of_title: topdivel === null || topdivel === void 0 ? void 0 : topdivel.innerText,
        list_of_content: l,
        id: "cra4-head"
      };
      // console.log(p)
      this.$emit("load-buffer", p);
    },
    credData: function credData(res) {
      this.credits = res.data;
    },
    onSlctMatCli: function onSlctMatCli(obj) {
      var _this$formDataToBeWat,
        _this8 = this;
      this.formDataToBeWatched.matricule_client = obj.matcli;
      this.formDataToBeWatched.nom_client = obj.nomcli;
      this.autoRenamer();
      _services_credit_service__WEBPACK_IMPORTED_MODULE_4__["default"].encours((_this$formDataToBeWat = this.formDataToBeWatched) === null || _this$formDataToBeWat === void 0 ? void 0 : _this$formDataToBeWat.matricule_client).then(function (res) {
        _this8.encoursData(res);
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
      var _this9 = this;
      _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["default"].loadUserData().then(function (res) {
        _this9.send2Backend0(res);
      })["catch"](function (err) {
        _this9.loadWithError(err);
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
  computed: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/credavailtick/CR4.vue?vue&type=template&id=8a37a64e&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/credavailtick/CR4.vue?vue&type=template&id=8a37a64e&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$formDataToBeWatch, _vm$checklistMiseEnPl, _vm$formDataToBeWatch2, _vm$formDataToBeWatch3, _vm$formDataToBeWatch4, _vm$formDataToBeWatch5;
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
      id: "cra4-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                             " + _vm._s(_vm.tb_display_name) + " : Checklist de mise en place\n                         ")]), _vm._v(" "), _c("div", {
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
  })], 1)])])]), _vm._v(" "), !_vm.is_loading ? _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_c("thead", [_c("tr", [_c("th", [_vm._v("N°")]), _vm._v(" "), _c("th", [_vm._v("Libellé")]), _vm._v(" "), _c("th", [_vm._v("Oui")]), _vm._v(" "), _c("th", [_vm._v("Non")]), _vm._v(" "), _c("th", {
    attrs: {
      title: "Non applicable"
    }
  }, [_vm._v("N/A")]), _vm._v(" "), _c("th", {
    attrs: {
      title: "Commentaires (si non applicable ou non formalisé)"
    }
  }, [_vm._v("Commentaires")]), _vm._v(" "), _c("th", [_vm._v("Fichiers attachés")]), _vm._v(" "), _c("th", [_vm._v("Dérogation")]), _vm._v(" "), _c("th", {
    attrs: {
      title: "Si dérogation préciser le nom du validateur"
    }
  }, [_vm._v("Nom du validateur")]), _vm._v(" "), _c("th", {
    attrs: {
      title: "Date prévisionnelle de régularisation dérogation"
    }
  }, [_vm._v("Date de regularisation")]), _vm._v(" "), _c("th", {
    attrs: {
      title: "Joindre mail validation dérogation si applicable"
    }
  }, [_vm._v("Mail de validation")]), _vm._v(" "), !_vm.codeIsGen ? _c("th") : _vm._e()])]), _vm._v(" "), _c("tbody", _vm._l(_vm.checklistMiseEnPlace, function (checklist_item, num) {
    var _checklist_item$files, _checklist_item$extra, _checklist_item$files2, _checklist_item$files3, _checklist_item$extra2, _checklist_item$extra3, _checklist_item$files4, _checklist_item$files5, _checklist_item$extra4, _checklist_item$extra5;
    return _c("tr", {
      key: checklist_item.id,
      staticClass: "trStyle"
    }, [_c("td", [_vm._v(_vm._s(num + 1))]), _vm._v(" "), (checklist_item === null || checklist_item === void 0 ? void 0 : checklist_item.is_default) == true ? _c("td", [_vm._v(_vm._s(checklist_item === null || checklist_item === void 0 ? void 0 : checklist_item.libelle))]) : _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: checklist_item.libelle,
        expression: "checklist_item.libelle"
      }],
      staticClass: "form-control",
      attrs: {
        disabled: _vm.codeIsGen
      },
      domProps: {
        value: checklist_item.libelle
      },
      on: {
        click: _vm.handleInput,
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(checklist_item, "libelle", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("div", {
      staticClass: "d-flex align-items-center justify-content-center"
    }, [_c("input", {
      attrs: {
        disabled: _vm.codeIsGen,
        value: "Oui",
        type: "checkbox",
        id: "flexCheckDisabled"
      },
      domProps: {
        checked: checklist_item.response == "Oui"
      },
      on: {
        change: function change($event) {
          return _vm.checkBoxChange("Oui", checklist_item.id, $event);
        }
      }
    })])]), _vm._v(" "), _c("td", [_c("div", {
      staticClass: "d-flex align-items-center justify-content-center"
    }, [_c("input", {
      attrs: {
        disabled: _vm.codeIsGen,
        value: "Non",
        type: "checkbox",
        id: "flexCheckCheckedDisabled"
      },
      domProps: {
        checked: checklist_item.response == "Non"
      },
      on: {
        change: function change($event) {
          return _vm.checkBoxChange("Non", checklist_item.id, $event);
        }
      }
    })])]), _vm._v(" "), _c("td", [_c("div", {
      staticClass: "d-flex align-items-center justify-content-center"
    }, [_c("input", {
      attrs: {
        disabled: _vm.codeIsGen,
        value: "Non applicable",
        type: "checkbox",
        id: "flexNappCheckedDisabled"
      },
      domProps: {
        checked: checklist_item.response == "Non applicable"
      },
      on: {
        change: function change($event) {
          return _vm.checkBoxChange("Non applicable", checklist_item.id, $event);
        }
      }
    })])]), _vm._v(" "), _c("td", [_c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: checklist_item.comment,
        expression: "checklist_item.comment"
      }],
      staticClass: "form-control",
      staticStyle: {
        width: "250px"
      },
      attrs: {
        disabled: !["Non applicable", "Non"].includes(checklist_item.response) || _vm.codeIsGen,
        rows: "1"
      },
      domProps: {
        value: checklist_item.comment
      },
      on: {
        change: _vm.handleInput,
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(checklist_item, "comment", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", {
      staticClass: "text-center"
    }, [!["Non applicable", "Non", "", null].includes(checklist_item.response) ? _c("div", {
      staticClass: "d-flex align-items-center justify-content-center"
    }, [_c("div", [(checklist_item === null || checklist_item === void 0 || (_checklist_item$files = checklist_item.files) === null || _checklist_item$files === void 0 ? void 0 : _checklist_item$files.length) > 0 || (checklist_item === null || checklist_item === void 0 || (_checklist_item$extra = checklist_item.extrafiles) === null || _checklist_item$extra === void 0 ? void 0 : _checklist_item$extra.length) > 0 ? _c("span", {
      staticClass: "p-1 px-2 mx-2 text-nowrap",
      staticStyle: {
        "background-color": "rgb(44, 62, 80)",
        color: "white",
        "font-size": "13px",
        "border-radius": "5px",
        "margin-left": "0 !important",
        width: "150px"
      }
    }, [_vm._v("\n                                                  " + _vm._s(((_checklist_item$files2 = checklist_item === null || checklist_item === void 0 || (_checklist_item$files3 = checklist_item.files) === null || _checklist_item$files3 === void 0 ? void 0 : _checklist_item$files3.length) !== null && _checklist_item$files2 !== void 0 ? _checklist_item$files2 : 0) + ((_checklist_item$extra2 = checklist_item === null || checklist_item === void 0 || (_checklist_item$extra3 = checklist_item.extrafiles) === null || _checklist_item$extra3 === void 0 ? void 0 : _checklist_item$extra3.length) !== null && _checklist_item$extra2 !== void 0 ? _checklist_item$extra2 : 0) > 0 ? ((_checklist_item$files4 = checklist_item === null || checklist_item === void 0 || (_checklist_item$files5 = checklist_item.files) === null || _checklist_item$files5 === void 0 ? void 0 : _checklist_item$files5.length) !== null && _checklist_item$files4 !== void 0 ? _checklist_item$files4 : 0) + ((_checklist_item$extra4 = checklist_item === null || checklist_item === void 0 || (_checklist_item$extra5 = checklist_item.extrafiles) === null || _checklist_item$extra5 === void 0 ? void 0 : _checklist_item$extra5.length) !== null && _checklist_item$extra4 !== void 0 ? _checklist_item$extra4 : 0) + " fichier(s) uploadé(s)" : "") + "\n                                              ")]) : _vm._e()]), _vm._v(" "), _c("div", [_c("button", {
      staticClass: "btn shadow-md text-white",
      staticStyle: {
        cursor: "pointer",
        background: "#2c3e50",
        width: "26px",
        "font-size": "13px",
        padding: "1px",
        "margin-right": "7px"
      },
      attrs: {
        type: "button",
        name: "button",
        "data-toggle": "tooltip",
        title: "Cliquer ici pour uploader ou voir le(s) fichier(s)"
      },
      on: {
        click: function click($event) {
          return _vm.addFiles(checklist_item.id);
        }
      }
    }, [_c("i", {
      staticClass: "icofont-attachment"
    })])])]) : _c("div", [_c("span", {
      staticClass: "text-danger"
    }, [_vm._v("Aucun fichier attaché")])])]), _vm._v(" "), _c("td", [_c("div", {
      staticClass: "d-flex justify-content-around derogationStyle"
    }, [_c("div", {
      staticClass: "d-flex"
    }, [_c("input", {
      staticStyle: {
        "margin-right": "5px !important"
      },
      attrs: {
        disabled: _vm.codeIsGen || ["Non", "Non applicable", "", null].includes(checklist_item.response),
        value: "Oui",
        type: "checkbox",
        id: checklist_item.id + "Oui"
      },
      domProps: {
        checked: checklist_item.is_derogation == "Oui"
      },
      on: {
        change: function change($event) {
          return _vm.checkBoxForDero("Oui", checklist_item.id, $event);
        }
      }
    }), _vm._v(" "), _c("label", {
      staticClass: "form-check-label",
      attrs: {
        "for": checklist_item.id + "Oui"
      }
    }, [_vm._v(" Oui ")])]), _vm._v(" "), _c("div", {
      staticClass: "d-flex"
    }, [_c("input", {
      staticStyle: {
        "margin-right": "5px !important"
      },
      attrs: {
        disabled: _vm.codeIsGen || ["Non", "Non applicable", "", null].includes(checklist_item.response),
        value: "Non",
        type: "checkbox",
        id: checklist_item.id + "Non"
      },
      domProps: {
        checked: checklist_item.is_derogation == "Non"
      },
      on: {
        change: function change($event) {
          return _vm.checkBoxForDero("Non", checklist_item.id, $event);
        }
      }
    }), _vm._v(" "), _c("label", {
      staticClass: "form-check-label",
      attrs: {
        "for": checklist_item.id + "Non"
      }
    }, [_vm._v("\n                                                  Non\n                                              ")])])])]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: checklist_item.nom_validateur,
        expression: "checklist_item.nom_validateur"
      }],
      staticClass: "form-control",
      staticStyle: {
        width: "150px"
      },
      attrs: {
        disabled: ["Non", "", null].includes(checklist_item.is_derogation) || _vm.codeIsGen
      },
      domProps: {
        value: checklist_item.nom_validateur
      },
      on: {
        change: _vm.handleInput,
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(checklist_item, "nom_validateur", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("date-input", {
      staticClass: "input-date",
      staticStyle: {
        width: "250px"
      },
      attrs: {
        value: checklist_item.date_regularisation,
        readonly: ["Non", "", null].includes(checklist_item.is_derogation) || _vm.codeIsGen
      },
      on: {
        input: function input($event) {
          return _vm.setDateInput($event, checklist_item.id);
        }
      }
    })], 1), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: checklist_item.mail_validation,
        expression: "checklist_item.mail_validation"
      }],
      staticClass: "form-control",
      staticStyle: {
        width: "150px"
      },
      attrs: {
        disabled: ["Non", "", null].includes(checklist_item.is_derogation) || _vm.codeIsGen
      },
      domProps: {
        value: checklist_item.mail_validation
      },
      on: {
        change: _vm.handleInput,
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(checklist_item, "mail_validation", $event.target.value);
        }
      }
    })]), _vm._v(" "), !_vm.codeIsGen ? _c("td", [!(checklist_item !== null && checklist_item !== void 0 && checklist_item.is_default) ? _c("button", {
      staticClass: "btn",
      attrs: {
        type: "button"
      },
      on: {
        click: function click($event) {
          return _vm.removeEl(checklist_item === null || checklist_item === void 0 ? void 0 : checklist_item.id);
        }
      }
    }, [_c("i", {
      staticClass: "icofont-trash"
    })]) : _vm._e()]) : _vm._e()]);
  }), 0)])]), _vm._v(" "), [undefined, null, "", "undefined", "null"].includes(_vm.codeIsGen) ? _c("div", {
    staticClass: "mt-2 mb-4"
  }, [_c("div", {
    staticClass: "d-flex justify-content-end"
  }, [_c("button", {
    staticClass: "btn text-white",
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
        return _vm.addNewEl();
      }
    }
  }, [_c("i", {
    staticClass: "icofont-plus-circle"
  }), _vm._v("\n                              Autres éléments obligatoires exigés par le comité de crédit\n                          ")])])]) : _vm._e(), _vm._v(" "), ![undefined, null, ""].includes(_vm.checklistMiseEnPlace) && ((_vm$checklistMiseEnPl = _vm.checklistMiseEnPlace) === null || _vm$checklistMiseEnPl === void 0 ? void 0 : _vm$checklistMiseEnPl.length) > 0 ? _c("div", {
    staticClass: "d-flex justify-content-center mt-4"
  }, [_c("div", {
    staticClass: "relative d-flex justify-content-center align-items-center",
    staticStyle: {
      width: "50%",
      height: "135px",
      border: "1px solid #d4d4d4",
      "background-color": "#f9f9f9",
      "box-shadow": "#d4d4d4",
      "border-radius": "5px"
    }
  }, [_c("span", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.contentCopied,
      expression: "contentCopied"
    }],
    staticClass: "text-success absolute",
    staticStyle: {
      top: "1px",
      right: "25px"
    }
  }, [_vm._v("Contenu copié")]), _vm._v(" "), _vm.codeIsGen || ![undefined, null, ""].includes((_vm$formDataToBeWatch2 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch2 === void 0 ? void 0 : _vm$formDataToBeWatch2.code_mise_en_place) ? _c("i", {
    staticClass: "icofont-copy copyIcofontStyle",
    attrs: {
      title: "Copier le contenu"
    },
    on: {
      click: function click($event) {
        return _vm.copiedContent();
      }
    }
  }) : _vm._e(), _vm._v(" "), [undefined, null, true].includes(_vm.codeIsGen) ? [[undefined, null, ""].includes((_vm$formDataToBeWatch3 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch3 === void 0 ? void 0 : _vm$formDataToBeWatch3.code_mise_en_place) ? _c("button", {
    staticClass: "btn",
    staticStyle: {
      color: "red",
      border: "1px solid red",
      "font-size": "25px"
    },
    on: {
      click: function click($event) {
        return _vm.generateCodeUnique();
      }
    }
  }, [_vm._v("\n                                  Générer le code unique\n                              ")]) : _c("div", {
    staticStyle: {
      color: "green",
      "font-weight": "bold",
      "font-family": "monospace !important",
      "font-size": "30px"
    },
    attrs: {
      id: "clipboardDiv"
    }
  }, [_vm._v("\n                                  " + _vm._s((_vm$formDataToBeWatch4 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch4 === void 0 ? void 0 : _vm$formDataToBeWatch4.code_mise_en_place) + "\n                              ")])] : _c("div", [_vm._m(0)])], 2)]) : _vm._e(), _vm._v(" "), _c("div", {
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
  }, [_vm._v("\n                     Fermer le tableau\n                 ")])]) : _c("div", {
    staticClass: "d-flex justify-content-center"
  }, [_vm._m(1)])]) : _c("div", {
    staticClass: "card card-width-height"
  }, [_c("br"), _vm._v(" "), _c("div", {
    staticClass: "card-header hdc pb-0 pt-2"
  }, [_c("h3", {
    staticClass: "head",
    attrs: {
      id: "cra4-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                             " + _vm._s(_vm.tb_display_name) + " : Checklist de mise en place\n                         ")]), _vm._v(" "), _c("div", {
    staticClass: "col-auto"
  }, [((_vm$formDataToBeWatch5 = _vm.formDataToBeWatched.notes) === null || _vm$formDataToBeWatch5 === void 0 ? void 0 : _vm$formDataToBeWatch5.length) > 0 ? _c("div", {
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
  }, [_vm._v("\n                             Instruction - " + _vm._s(_vm.tb_display_name) + " : Fiche signalétique\n                         ")]), _vm._v(" "), _c("button", {
    staticClass: "btn-close",
    attrs: {
      type: "button",
      "data-bs-dismiss": "modal",
      "aria-label": "Close"
    }
  })]), _vm._v(" "), _vm._m(2), _vm._v(" "), _vm._m(3)])])])]), _vm._v(" "), _c("modal", {
    attrs: {
      name: "confirmModal",
      resize: "true",
      height: "200"
    }
  }, [_c("div", {
    staticStyle: {
      width: "100% !important",
      height: "100% !important"
    }
  }, [_c("div", {
    staticClass: "mt-4 d-flex justify-content-center align-items-center"
  }, [_c("h2", {
    staticClass: "mb-4 text-center"
  }, [_vm._v("\n                  Cette action est irréversible."), _c("br"), _vm._v("\n                  Voulez-vous continuer ?\n              ")])]), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-content-center align-items-center",
    staticStyle: {
      gap: "10px"
    }
  }, [_c("button", {
    staticClass: "btn btn-outline-success",
    on: {
      click: function click($event) {
        return _vm.generateCodeUnique("oui");
      }
    }
  }, [_vm._v("Oui")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-outline-danger",
    on: {
      click: function click() {
        return _vm.$modal.hide("confirmModal");
      }
    }
  }, [_vm._v("Non")])])])]), _vm._v(" "), _c("note-modal", {
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
    staticClass: "spinner-border text-warning",
    attrs: {
      role: "status"
    }
  }, [_c("span", {
    staticClass: "visually-hidden"
  }, [_vm._v("Loading...")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "spinner-border",
    attrs: {
      role: "status"
    }
  }, [_c("span", {
    staticClass: "visually-hidden"
  }, [_vm._v("Loading...")])]);
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

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/credavailtick/CR4.vue?vue&type=style&index=0&id=8a37a64e&lang=css&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/credavailtick/CR4.vue?vue&type=style&index=0&id=8a37a64e&lang=css&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\ninput[data-v-8a37a64e] {\r\n   /*border: 1px solid red;*/\n}\n*[data-v-8a37a64e] {\r\n   font-family: \"Google sans\";\n}\nlabel[data-v-8a37a64e] {\r\n   height: 10px;\r\n   font-size: 13px;\n}\r\n\r\n/* input,\r\nselect {\r\n   height: 35px;\r\n   border-color: #34495e;\r\n   color: #57606f;\r\n   font-size: 13px;\r\n   font-weight: bold;\r\n} */\n.card-width-height[data-v-8a37a64e] {\r\n   width: 100%;\r\n   height: 100%;\n}\n.head[data-v-8a37a64e] {\r\n   color: #f1f2f6;\r\n   font-size: 22px;\n}\n.hdc[data-v-8a37a64e] {\r\n   background-color: #57606f;\n}\r\n\r\n/*  List element styles */\n#menu ul[data-v-8a37a64e],\r\n#menu li[data-v-8a37a64e] {\r\n   list-style: none;\r\n   padding: 0;\r\n   margin: 0;\r\n   display: inline-block;\n}\n#menu li[data-v-8a37a64e] {\r\n   padding: 5px 0px;\n}\r\n\r\n/* Main menu links */\n#menu a[data-v-8a37a64e]:link,\r\n#menu a[data-v-8a37a64e]:visited,\r\n#menu a[data-v-8a37a64e]:active {\r\n   text-decoration: none;\r\n   color: var(--link2-color);\r\n   padding: 5px 7px;\r\n   font-weight: bold;\r\n   position: relative;\r\n   z-index: 2;\n}\n#menu a[data-v-8a37a64e]:hover,\r\n#menu a[data-v-8a37a64e]:focus {\r\n   background-color: var(--link-color);\r\n   color: var(--link2-color);\r\n   text-decoration: underline;\n}\r\n\r\n/* The submenu links container*/\n.subdrop[data-v-8a37a64e] {\r\n   background: var(--bg-color);\r\n   height: 0;\r\n   border-top: 0;\r\n   min-width: 100%;\r\n   left: 0;\r\n   margin: 0;\r\n   position: absolute;\r\n   text-align: left;\r\n   top: 100%;\r\n   visibility: hidden;\r\n   height: 1px;\r\n   overflow: hidden;\r\n   z-index: 10;\n}\r\n\r\n/* Dropdown Parent Link Style */\n.droplink[data-v-8a37a64e] {\r\n   display: inline-block;\r\n   min-width: -moz-fit-content;\r\n   min-width: fit-content;\r\n   position: relative;\n}\r\n\r\n\r\n/* List elements within the dropdown */\n.subdrop li[data-v-8a37a64e] {\r\n   display: block !important;\r\n   padding: 0 !important;\n}\r\n\r\n/* Links within the dropdown list */\n.subdrop a[data-v-8a37a64e] {\r\n   display: block;\r\n   padding: 12px 20px;\r\n   white-space: nowrap;\n}\r\n\r\n/* Allows links to show on hover/focus and through keyboard navigation via focus-within */\n.droplink:hover .subdrop[data-v-8a37a64e] {\r\n   visibility: visible;\r\n   height: auto;\r\n   z-index: 11;\n}\r\n\r\n/* Separate these to avoid IE completely ignoring the css above */\n.droplink:focus-within .subdrop[data-v-8a37a64e] {\r\n   visibility: visible;\r\n   height: auto;\r\n   z-index: 11;\n}\n.badge-sm[data-v-8a37a64e] {\r\n   display: inline-block;\r\n   width: 15px;\r\n   height: 15px;\r\n   background: rgba(255, 0, 0, 0.882);\r\n   color: white;\r\n   font-size: 12px;\r\n   font-weight: 500;\r\n   border-radius: 100%;\r\n   position: absolute;\r\n   top: -20%;\r\n   left: 55%;\r\n   text-align: center;\n}\ninput[type=checkbox][data-v-8a37a64e]{\r\n    transform: scale(1.5);\n}\n.derogationStyle[data-v-8a37a64e]{\r\n    width: 120px;\n}\nth[data-v-8a37a64e]{\r\n    background-color: #f4f3f3;\r\n    vertical-align: middle;\n}\ntd[data-v-8a37a64e]{\r\n    vertical-align: middle;\r\n    /* text-align: center; */\n}\n.trStyle[data-v-8a37a64e]:hover{\r\n    background-color: #f4f3f3;\n}\n.table th[data-v-8a37a64e]:first-child,\r\n.table td[data-v-8a37a64e]:first-child {\r\n    position: sticky;\r\n    left: -1px;\r\n    z-index: 99;\r\n    font-weight: bold;\r\n    background-color: #f4f3f3;\n}\n.table th[data-v-8a37a64e]:nth-child(2),\r\n.table td[data-v-8a37a64e]:nth-child(2) {\r\n    position: sticky;\r\n    left: 34px;\r\n    z-index: 99;\r\n    font-weight: bold;\r\n    background-color: #f4f3f3;\n}\r\n/* Annule sticky si pas de scroll */\n.no-sticky th[data-v-8a37a64e]:first-child,\r\n.no-sticky td[data-v-8a37a64e]:first-child,\r\n.no-sticky th[data-v-8a37a64e]:nth-child(2),\r\n.no-sticky td[data-v-8a37a64e]:nth-child(2) {\r\n  position: static;\r\n  background-color: inherit;\n}\n.copyIcofontStyle[data-v-8a37a64e]{\r\n    position: absolute;\r\n    top: 5px;\r\n    right: 5px;\r\n    cursor: pointer;\n}\n.copyIcofontStyle[data-v-8a37a64e]:active{\r\n    position: absolute;\r\n    top: 5px;\r\n    right: 5px;\r\n    cursor: pointer;\r\n    transform: scale(0.8);\r\n    transition: transform 0.2s ease;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/credavailtick/CR4.vue?vue&type=style&index=0&id=8a37a64e&lang=css&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/credavailtick/CR4.vue?vue&type=style&index=0&id=8a37a64e&lang=css&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CR4_vue_vue_type_style_index_0_id_8a37a64e_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CR4.vue?vue&type=style&index=0&id=8a37a64e&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/credavailtick/CR4.vue?vue&type=style&index=0&id=8a37a64e&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CR4_vue_vue_type_style_index_0_id_8a37a64e_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CR4_vue_vue_type_style_index_0_id_8a37a64e_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/credavailtick/CR4.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/credavailtick/CR4.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CR4_vue_vue_type_template_id_8a37a64e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CR4.vue?vue&type=template&id=8a37a64e&scoped=true */ "./resources/js/components/credavailtick/CR4.vue?vue&type=template&id=8a37a64e&scoped=true");
/* harmony import */ var _CR4_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CR4.vue?vue&type=script&lang=js */ "./resources/js/components/credavailtick/CR4.vue?vue&type=script&lang=js");
/* harmony import */ var _CR4_vue_vue_type_style_index_0_id_8a37a64e_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CR4.vue?vue&type=style&index=0&id=8a37a64e&lang=css&scoped=true */ "./resources/js/components/credavailtick/CR4.vue?vue&type=style&index=0&id=8a37a64e&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CR4_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _CR4_vue_vue_type_template_id_8a37a64e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _CR4_vue_vue_type_template_id_8a37a64e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "8a37a64e",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/credavailtick/CR4.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/credavailtick/CR4.vue?vue&type=script&lang=js":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/credavailtick/CR4.vue?vue&type=script&lang=js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CR4_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CR4.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/credavailtick/CR4.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CR4_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/credavailtick/CR4.vue?vue&type=style&index=0&id=8a37a64e&lang=css&scoped=true":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/credavailtick/CR4.vue?vue&type=style&index=0&id=8a37a64e&lang=css&scoped=true ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CR4_vue_vue_type_style_index_0_id_8a37a64e_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CR4.vue?vue&type=style&index=0&id=8a37a64e&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/credavailtick/CR4.vue?vue&type=style&index=0&id=8a37a64e&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/credavailtick/CR4.vue?vue&type=template&id=8a37a64e&scoped=true":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/credavailtick/CR4.vue?vue&type=template&id=8a37a64e&scoped=true ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CR4_vue_vue_type_template_id_8a37a64e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CR4_vue_vue_type_template_id_8a37a64e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CR4_vue_vue_type_template_id_8a37a64e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CR4.vue?vue&type=template&id=8a37a64e&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/credavailtick/CR4.vue?vue&type=template&id=8a37a64e&scoped=true");


/***/ })

}]);