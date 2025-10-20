"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_forms_afg_pv_csc_PV-CSC0_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/pv_csc/PV-CSC0.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/pv_csc/PV-CSC0.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/ContextMenu */ "./resources/js/components/shared/ContextMenu.vue");
/* harmony import */ var _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/ContextMenuItem */ "./resources/js/components/shared/ContextMenuItem.vue");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), c(GeneratorFunctionPrototype, u, GeneratorFunction.displayName = "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }




window.$ = window.jQuery = __webpack_require__(/*! jquery/dist/jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "PV-CSC0",
  display: "PV-CSC0",
  components: {
    MoreVerticalIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_3__.MoreVerticalIcon,
    ChevronUpIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_3__.ChevronUpIcon,
    ChevronDownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_3__.ChevronDownIcon,
    ContextMenu: _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_0__["default"],
    ContextMenuItem: _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_1__["default"],
    AirplayIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_3__.AirplayIcon,
    CheckCircleIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_3__.CheckCircleIcon,
    XIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_3__.XIcon,
    XCircleIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_3__.XCircleIcon,
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_3__.TrashIcon,
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_3__.PlusIcon,
    ShuffleIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_3__.ShuffleIcon,
    BookOpenIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_3__.BookOpenIcon,
    EyeIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_3__.EyeIcon
  },
  props: {
    meta_data: Object,
    tb_name: String,
    tb_display_name: String
  },
  created: function created() {},
  mounted: function mounted() {
    var _this = this;
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var _this$meta_data$dossi;
      var applied_templ_name, tbArrays;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            EventBus.$on("created-extra-file-template", function (data) {
              _this.admin_votes.forEach(function (element, index) {
                var _data$template;
                var template_name = "Pièce(s) jointe(s) -admin_votes" + index + "_" + _this.$route.params.templateId;
                if (template_name == (data === null || data === void 0 || (_data$template = data.template) === null || _data$template === void 0 ? void 0 : _data$template.name)) {
                  var _data$template2, _data$template3, _data$template4;
                  _this.admin_votes[index]["template"] = {
                    id: data === null || data === void 0 || (_data$template2 = data.template) === null || _data$template2 === void 0 ? void 0 : _data$template2.id,
                    name: data === null || data === void 0 || (_data$template3 = data.template) === null || _data$template3 === void 0 ? void 0 : _data$template3.name,
                    slug: data === null || data === void 0 || (_data$template4 = data.template) === null || _data$template4 === void 0 ? void 0 : _data$template4.slug
                  };
                  _this.handleInput();
                }
              });
            });
            EventBus.$on("extra-files-uploaded", function (data) {
              _this.admin_votes.forEach(function (element, index) {
                var _element$template, _data$template5;
                if ((element === null || element === void 0 || (_element$template = element.template) === null || _element$template === void 0 ? void 0 : _element$template.id) == (data === null || data === void 0 || (_data$template5 = data.template) === null || _data$template5 === void 0 ? void 0 : _data$template5.id)) {
                  var _data$files$map;
                  _this.admin_votes[index]["files"] = (_data$files$map = data === null || data === void 0 ? void 0 : data.files.map(function (el) {
                    return {
                      file_name: el === null || el === void 0 ? void 0 : el.file_name,
                      file_ext: el === null || el === void 0 ? void 0 : el.file_ext,
                      file_url: el === null || el === void 0 ? void 0 : el.file_url,
                      user_id: el === null || el === void 0 ? void 0 : el.user_id
                    };
                  })) !== null && _data$files$map !== void 0 ? _data$files$map : [];
                  _this.handleInput();
                }
              });
              _this.handleInput();
            });
            EventBus.$on('get-admin-votes', /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    if (_this.formDataToBeWatched['methode'] == "Manuel") {
                      _this.getManuelDecision();
                    } else {
                      EventBus.$emit('send-admin-votes', {
                        "admin_votes": _this.admin_votes,
                        "automateVote": _this.automateVote
                      });
                    }
                  case 1:
                  case "end":
                    return _context.stop();
                }
              }, _callee);
            })));
            applied_templ_name = (_this$meta_data$dossi = _this.meta_data['dossier_credit']) === null || _this$meta_data$dossi === void 0 ? void 0 : _this$meta_data$dossi.applied_templ_name;
            tbArrays = _this.determineCredPubTables(applied_templ_name, _this.meta_data['dossier_credit']);
            _this.credpub_8 = tbArrays[2];
            _this.loadRetrieved();
            _this.loadTbAttrs(); // charge les attributs + sous attributs des tables
            _this.tableClosedOrOpened();
          case 9:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }))();
  },
  data: function data() {
    var vm = this;
    return {
      ebapisHost: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_2__["default"].host,
      appEnviron: "local",
      authcheck: false,
      authcheckUsr: null,
      authcheckStatus: null,
      watchInPause: false,
      initLoad: true,
      seen: true,
      isLoading: false,
      addComment: false,
      seen1: true,
      meta_parseable: {
        cred_pub_key: this.meta_data["cred_pub_key"],
        tb_name: this.tb_name
      },
      formDataToBeWatched: {
        notes: [],
        methode: "",
        sending_mail: {
          status: false,
          date: null,
          end_date: null
        },
        admin_votes: []
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
      admin_votes: [],
      listingNote: false,
      loadAdmin: false,
      methode: "",
      downId: null,
      hoursToShow: 0,
      minutesToShow: 0,
      secondsToShow: 0,
      automateVote: {},
      load_final_decision: false,
      get_manuel_decision: null,
      displayCanApp: null,
      credpub_4: null
    };
  },
  computed: {},
  methods: {
    handleDoubleClickOrClick: function handleDoubleClickOrClick(event, index, element) {
      var _this2 = this;
      EventBus.$emit("open-extra-file-explorer");
      setTimeout(function () {
        EventBus.$emit("data-extra-file-explorer", {
          name: "Pièce(s) jointe(s) {(*)}admin_votes" + index + "_" + _this2.$route.params.templateId
        });
      }, 500);
    },
    checkboxValCashCall2: function checkboxValCashCall2(event, key, index) {
      var _this3 = this;
      if (this.methode != 'Manuel') {
        return;
      }
      if (event.target.checked) {
        this.admin_votes[index][key] = event.target.value;
      } else {
        this.admin_votes[index][key] = null;
      }
      this.$set(this.automateVote, 'responses', null);
      this.$set(this.automateVote, 'response', null);
      this.formDataToBeWatched['methode'] = "Manuel";
      this.handleInput();
      clearTimeout(this.get_manuel_decision);
      this.get_manuel_decision = setTimeout(function () {
        _this3.getManuelDecision();
      }, 1500);
    },
    checkboxValMethode: function checkboxValMethode(event) {
      var _this4 = this;
      if (!['', null, undefined].includes(this.formDataToBeWatched['methode'])) {
        var oldValue = this.methode;
        var msg = "Cette action entrainera la réinitialisation de toutes les données déjà saisies. Voulez-vous poursuivre ?";
        this.methode = "";
        setTimeout(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
          var response;
          return _regeneratorRuntime().wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
              case 0:
                if (event.target.checked) {
                  _this4.methode = event.target.value;
                }
                _context3.prev = 1;
                _context3.next = 4;
                return _this4.$confirm(msg, "Changement de méthode", "warning");
              case 4:
                response = _context3.sent;
                if (response === true) {
                  oldValue = _this4.methode;
                  _this4.formDataToBeWatched = _objectSpread(_objectSpread({}, _this4.formDataToBeWatched), {}, {
                    methode: "",
                    sending_mail: {
                      status: false,
                      date: null,
                      end_date: null
                    },
                    admin_votes: []
                  });
                  _this4.admin_votes = [];
                  _this4.getAdmins();
                }
                _context3.next = 11;
                break;
              case 8:
                _context3.prev = 8;
                _context3.t0 = _context3["catch"](1);
                _this4.methode = oldValue;
              case 11:
              case "end":
                return _context3.stop();
            }
          }, _callee3, null, [[1, 8]]);
        })), 500);
        return;
      }
      if (event.target.checked) {
        this.methode = event.target.value;
      } else {
        this.methode = "";
      }
      this.handleInput();
    },
    setMethode: function setMethode(methode) {
      return;
      // removed by dead control flow
{}
      // removed by dead control flow
{}
    },
    changeComment: function changeComment() {
      this.formDataToBeWatched['methode'] = "Manuel";
      this.handleInput();
    },
    getAdmins: function getAdmins() {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var _this5$meta_data$doss;
        var filiale, url, data;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _this5.loadAdmin = true;
              filiale = (_this5$meta_data$doss = _this5.meta_data['dossier_credit']) === null || _this5$meta_data$doss === void 0 || (_this5$meta_data$doss = _this5$meta_data$doss.caf_recorded_file) === null || _this5$meta_data$doss === void 0 ? void 0 : _this5$meta_data$doss.filiale;
              console.log("getAdmins", filiale);
              url = '/api/search_user_csc';
              data = {
                "search": "",
                "limit": 5,
                "without-entity": true,
                "filiale": filiale,
                "role_uuid": ['s6HrzzeG7YJVRpaEtfhu', 'uC5pxrM7aN1Tp95RyU7w']
              };
              _context5.next = 7;
              return _this5.$axios.post(url, data).then(/*#__PURE__*/function () {
                var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(response) {
                  var data, message;
                  return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                    while (1) switch (_context4.prev = _context4.next) {
                      case 0:
                        data = response.data.data;
                        message = response.data.message;
                        _this5.loadAdmin = false;
                        if (!(!['', null, undefined].includes(data) && data.length > 0)) {
                          _context4.next = 13;
                          break;
                        }
                        _context4.next = 6;
                        return data.map(function (a) {
                          return {
                            decision: null,
                            template: {},
                            files: [],
                            commentaire: "",
                            validated_at: "",
                            user: {
                              user_id: a['id'],
                              name: a['name'],
                              email: a['email'],
                              role_id: a['role'][0]['id'],
                              display_name: a['role'][0]['display_name'],
                              role_uuid: a['role'][0]['role_uuid'],
                              role_sigle: a['role'][0]['role_sigle'],
                              what_to_be_produced: a['role'][0]['what_to_be_produced'],
                              contact_whatsap: a["contact_whatsap"]
                            }
                          };
                        });
                      case 6:
                        _this5.admin_votes = _context4.sent;
                        if (!(_this5.methode == "Automatique")) {
                          _context4.next = 10;
                          break;
                        }
                        _context4.next = 10;
                        return _this5.getDecisions();
                      case 10:
                        _this5.handleInput();
                        _context4.next = 14;
                        break;
                      case 13:
                        _this5.$toasted.show(message, {
                          duration: 5000
                        });
                      case 14:
                      case "end":
                        return _context4.stop();
                    }
                  }, _callee4);
                }));
                return function (_x) {
                  return _ref3.apply(this, arguments);
                };
              }())["catch"](function (error) {
                _this5.loadAdmin = false;
                console.warn('Oh. Something went wrong');
              });
            case 7:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }))();
    },
    getDecisions: function getDecisions() {
      var _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
        var url, form_data;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              _this6.loadAdmin = true;
              url = '/api/get-decision-doss-cred';
              form_data = {
                "cred_pub_key": _this6.meta_data['dossier_credit']['cred_pub_key']
              };
              _context8.next = 5;
              return _this6.$axios.post(url, form_data).then(/*#__PURE__*/function () {
                var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(response) {
                  var data, url;
                  return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                    while (1) switch (_context7.prev = _context7.next) {
                      case 0:
                        data = response.data.data;
                        form_data['decisions'] = data;
                        url = _this6.ebapisHost + 'creditbuilder/api/v1/get-automate-vote/';
                        _context7.next = 5;
                        return _this6.$axios.post(url, form_data).then(/*#__PURE__*/function () {
                          var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(response) {
                            var _data$decisions, _data$final_decision;
                            var data, decisions, final_decision;
                            return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                              while (1) switch (_context6.prev = _context6.next) {
                                case 0:
                                  data = response.data.data;
                                  decisions = (_data$decisions = data['decisions']) !== null && _data$decisions !== void 0 ? _data$decisions : [];
                                  final_decision = (_data$final_decision = data['final_decision']) !== null && _data$final_decision !== void 0 ? _data$final_decision : "EN ATTENTE DES AVIS";
                                  _this6.admin_votes.forEach(function (element, index) {
                                    var found = decisions.find(function (el) {
                                      return el['user_id'] == element['user']['user_id'];
                                    });
                                    if (found) {
                                      var vote = _this6.admin_votes[index];
                                      vote['decision'] = found['decision'];
                                      vote['commentaire'] = found['comment'];
                                      vote['validated_at'] = found['validated_at'];
                                      _this6.$set(_this6.admin_votes, index, vote);
                                    } else {
                                      var _vote = _this6.admin_votes[index];
                                      _vote['decision'] = null;
                                      _vote['commentaire'] = "";
                                      _vote['validated_at'] = null;
                                      _this6.$set(_this6.admin_votes, index, _vote);
                                    }
                                  });
                                  _context6.next = 6;
                                  return _this6.updateAutomateVote(_this6.admin_votes, final_decision);
                                case 6:
                                  _this6.handleInput();
                                  _this6.loadAdmin = false;
                                case 8:
                                case "end":
                                  return _context6.stop();
                              }
                            }, _callee6);
                          }));
                          return function (_x3) {
                            return _ref5.apply(this, arguments);
                          };
                        }())["catch"](function (error) {
                          _this6.loadAdmin = false;
                          console.log(error);
                        });
                      case 5:
                      case "end":
                        return _context7.stop();
                    }
                  }, _callee7);
                }));
                return function (_x2) {
                  return _ref4.apply(this, arguments);
                };
              }())["catch"](function (error) {
                _this6.loadAdmin = false;
                console.log(error);
              });
            case 5:
            case "end":
              return _context8.stop();
          }
        }, _callee8);
      }))();
    },
    verifyCanApprove: function verifyCanApprove() {
      var _this7 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              _context9.next = 2;
              return _this7.$axios.post(_this7.ebapisHost + "workflowbuilder/api/v1/verify-canapprove/", {
                'cred_pub_key': _this7.meta_parseable.cred_pub_key
              }).then(function (response) {
                _this7.displayCanApp = response.data["trav_status"]["can_approveOrDeny"];
              })["catch"](function (error) {
                _this7.$console.log(error);
              });
            case 2:
            case "end":
              return _context9.stop();
          }
        }, _callee9);
      }))();
    },
    formDataVars: function formDataVars(event) {
      this.formDataToBeWatched[event[0]] = event[1];
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
    loadRetrieved: function loadRetrieved() {
      var _this8 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee0() {
        var lentb, createdKey, createdKeyArr, _this8$formDataToBeWa;
        return _regeneratorRuntime().wrap(function _callee0$(_context0) {
          while (1) switch (_context0.prev = _context0.next) {
            case 0:
              lentb = _this8.meta_data["dossier_credit"]["tbs_in_use"];
              createdKey = _this8.tb_name;
              createdKeyArr = createdKey.split("tb");
              createdKey = "cred_pub_tb_" + createdKeyArr[1];
              if (_this8.meta_data["dossier_credit"][createdKey] == undefined) {
                _this8.getAdmins();
              }
              if (!(lentb.length > 0)) {
                _context0.next = 21;
                break;
              }
              if (!(_this8.meta_data["dossier_credit"][createdKey] != undefined)) {
                _context0.next = 21;
                break;
              }
              _this8.formDataToBeWatched = _this8.meta_data["dossier_credit"][createdKey];
              if (_this8.formDataToBeWatched['sending_mail']['status'] == true) {
                _this8.formDataToBeWatched['methode'] = "Automatique";
                _this8.downId = setInterval(function () {
                  _this8.countDown();
                }, 1000);
              }
              _this8.methode = (_this8$formDataToBeWa = _this8.formDataToBeWatched['methode']) !== null && _this8$formDataToBeWa !== void 0 ? _this8$formDataToBeWa : '';
              if (!(!['', null, undefined].includes(_this8.meta_data["dossier_credit"][createdKey]["admin_votes"]) && _this8.meta_data["dossier_credit"][createdKey]["admin_votes"].length > 0)) {
                _context0.next = 20;
                break;
              }
              _this8.admin_votes = _this8.meta_data["dossier_credit"][createdKey]["admin_votes"];
              if (!(_this8.methode == "Automatique")) {
                _context0.next = 16;
                break;
              }
              _this8.getDecisions();
              _context0.next = 18;
              break;
            case 16:
              _context0.next = 18;
              return _this8.getManuelDecision();
            case 18:
              _context0.next = 21;
              break;
            case 20:
              _this8.getAdmins();
            case 21:
            case "end":
              return _context0.stop();
          }
        }, _callee0);
      }))();
    },
    handleInput: function handleInput() {
      this.formDataToBeWatched["admin_votes"] = this.admin_votes;
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
          filledData: newVal,
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
    retract1: function retract1() {
      this.seen1 = !this.seen1;
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
        id: "ccca2-head"
      };
      // console.log(p)
      this.$emit("load-buffer", p);
    },
    sendMail: function sendMail() {
      window.location.href = window.location.origin + '/creation-pdf/' + this.meta_data['cred_pub_key'];
    },
    countDown: function countDown() {
      var _this$formDataToBeWat;
      var date = (_this$formDataToBeWat = this.formDataToBeWatched) === null || _this$formDataToBeWat === void 0 || (_this$formDataToBeWat = _this$formDataToBeWat.sending_mail) === null || _this$formDataToBeWat === void 0 ? void 0 : _this$formDataToBeWat.end_date;
      var now = new Date().getTime();
      var timeleft = new Date(date).getTime() - now;
      var hours = Math.floor(timeleft % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
      var minutes = Math.floor(timeleft % (1000 * 60 * 60) / (1000 * 60));
      var seconds = Math.floor(timeleft % (1000 * 60) / 1000);
      if (hours <= 0 && minutes <= 0 && seconds <= 0) {
        hours = 0;
        minutes = 0;
        seconds = 0;
        clearInterval(this.downId);
      }
      this.hoursToShow = hours;
      this.minutesToShow = minutes;
      this.secondsToShow = seconds;
    },
    updateAutomateVote: function updateAutomateVote(votes, final_decision) {
      var _this9 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee1() {
        var _president$decision, _president, _admins$0$decision, _admins$, _admins$1$decision, _admins$2;
        var president, admins, responses;
        return _regeneratorRuntime().wrap(function _callee1$(_context1) {
          while (1) switch (_context1.prev = _context1.next) {
            case 0:
              president = null;
              admins = [];
              votes.forEach(function (el) {
                var _el$user;
                if ((el === null || el === void 0 || (_el$user = el.user) === null || _el$user === void 0 ? void 0 : _el$user.role_uuid) == 's6HrzzeG7YJVRpaEtfhu') {
                  president = el;
                } else {
                  admins.push(el);
                }
              });
              responses = {
                president: (_president$decision = (_president = president) === null || _president === void 0 ? void 0 : _president.decision) !== null && _president$decision !== void 0 ? _president$decision : null,
                admin1: (_admins$0$decision = (_admins$ = admins[0]) === null || _admins$ === void 0 ? void 0 : _admins$.decision) !== null && _admins$0$decision !== void 0 ? _admins$0$decision : null,
                admin2: (_admins$1$decision = (_admins$2 = admins[1]) === null || _admins$2 === void 0 ? void 0 : _admins$2.decision) !== null && _admins$1$decision !== void 0 ? _admins$1$decision : null
              };
              _this9.load_final_decision = true;
              _context1.next = 7;
              return _this9.verifyCanApprove();
            case 7:
              if (_this9.displayCanApp == true) {
                if (final_decision == "AVIS FAVORABLE") {
                  final_decision = "APPROBATION";
                }
                if (final_decision == "AVIS NON FAVORABLE") {
                  final_decision = "REFUS";
                }
              }
              _this9.$set(_this9.automateVote, 'responses', responses);
              _this9.$set(_this9.automateVote, 'response', final_decision);
              _this9.$set(_this9.automateVote, 'methode', _this9.methode);

              // this.automateVote['responses'] = responses
              // this.automateVote['response'] = final_decision

              EventBus.$emit('send-admin-votes', {
                "admin_votes": _this9.admin_votes,
                "automateVote": _this9.automateVote
              });
              _this9.load_final_decision = false;
            case 13:
            case "end":
              return _context1.stop();
          }
        }, _callee1);
      }))();
    },
    getManuelDecision: function getManuelDecision() {
      var _this0 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
        var decisions, form_data, url;
        return _regeneratorRuntime().wrap(function _callee11$(_context11) {
          while (1) switch (_context11.prev = _context11.next) {
            case 0:
              decisions = [];
              _this0.load_final_decision = true;
              _this0.admin_votes.forEach(function (el, index) {
                var _el$user2, _el$user3, _el$commentaire, _el$decision;
                decisions.push({
                  id: index,
                  user_id: el === null || el === void 0 || (_el$user2 = el.user) === null || _el$user2 === void 0 ? void 0 : _el$user2.user_id,
                  role_uuid: el === null || el === void 0 || (_el$user3 = el.user) === null || _el$user3 === void 0 ? void 0 : _el$user3.role_uuid,
                  comment: (_el$commentaire = el === null || el === void 0 ? void 0 : el.commentaire) !== null && _el$commentaire !== void 0 ? _el$commentaire : "",
                  cred_pub_key: _this0.meta_parseable['cred_pub_key'],
                  decision: (_el$decision = el === null || el === void 0 ? void 0 : el.decision) !== null && _el$decision !== void 0 ? _el$decision : null,
                  validated_at: ""
                });
              });
              form_data = {};
              form_data['decisions'] = decisions;
              url = _this0.ebapisHost + 'creditbuilder/api/v1/get-automate-vote/';
              _context11.next = 8;
              return _this0.$axios.post(url, form_data).then(/*#__PURE__*/function () {
                var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10(response) {
                  var _data$final_decision2;
                  var data, final_decision;
                  return _regeneratorRuntime().wrap(function _callee10$(_context10) {
                    while (1) switch (_context10.prev = _context10.next) {
                      case 0:
                        data = response.data.data;
                        final_decision = (_data$final_decision2 = data['final_decision']) !== null && _data$final_decision2 !== void 0 ? _data$final_decision2 : "EN ATTENTE DES AVIS";
                        _context10.next = 4;
                        return _this0.updateAutomateVote(_this0.admin_votes, final_decision);
                      case 4:
                        _this0.handleInput();
                        _this0.load_final_decision = false;
                      case 6:
                      case "end":
                        return _context10.stop();
                    }
                  }, _callee10);
                }));
                return function (_x4) {
                  return _ref6.apply(this, arguments);
                };
              }())["catch"](function (error) {
                _this0.load_final_decision = false;
                console.log(error);
              });
            case 8:
            case "end":
              return _context11.stop();
          }
        }, _callee11);
      }))();
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
  },
  beforeDestroy: function beforeDestroy() {
    clearInterval(this.downId);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/pv_csc/PV-CSC0.vue?vue&type=template&id=19cb9747&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/pv_csc/PV-CSC0.vue?vue&type=template&id=19cb9747&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$formDataToBeWatch, _this$formDataToBeWat, _vm$automateVote, _vm$automateVote2, _vm$automateVote3, _vm$automateVote4, _vm$formDataToBeWatch2;
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
      id: "ccca2-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Recueil des avis administrateurs\n                        ")]), _vm._v(" "), _c("div", {
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
  }, [_vm.isLoading ? _c("div", [_vm._m(0)]) : _c("div", [_c("div", [_c("h5", {
    staticClass: "text-center"
  }, [_vm._v("Quelle méthode voulez-vous utiliser pour le recueil des avis.")]), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-content-center"
  }, [_c("div", {
    staticClass: "m-2 d-flex mr-4"
  }, [_c("input", {
    staticStyle: {
      transform: "scale(1.5) !important",
      height: "20px!important"
    },
    attrs: {
      type: "checkbox",
      value: "Manuel",
      id: "methode_manuel"
    },
    domProps: {
      checked: _vm.methode == "Manuel"
    },
    on: {
      input: function input($event) {
        return _vm.checkboxValMethode($event);
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "text-nowrap",
    staticStyle: {
      "margin-left": "10px"
    },
    attrs: {
      "for": "methode_manuel"
    }
  }, [_vm._v("Manuel")])]), _vm._v(" "), _c("div", {
    staticClass: "m-2 d-flex mr-4"
  }, [_c("input", {
    staticStyle: {
      transform: "scale(1.5) !important",
      height: "20px!important"
    },
    attrs: {
      type: "checkbox",
      value: "Automatique",
      id: "methode_automatique"
    },
    domProps: {
      checked: _vm.methode == "Automatique"
    },
    on: {
      input: function input($event) {
        return _vm.checkboxValMethode($event);
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "text-nowrap",
    staticStyle: {
      "margin-left": "10px"
    },
    attrs: {
      "for": "methode_automatique"
    }
  }, [_vm._v("Automatique")])])]), _vm._v(" "), _c("hr")]), _vm._v(" "), !["", null, undefined].includes(_vm.methode) ? _c("div", {
    staticClass: "col-12 d-flex border-bottom"
  }, [_c("div", {
    staticClass: "col cursor-pointer border-end d-flex justify-content-center align-items-center text-center bg-deep-blue p-2",
    "class": {
      "bg-white text-orange fw-semibold": _vm.methode == "Manuel",
      "bg-disabled color-disabled cursor-not-allowed": !["", null, undefined].includes(_vm.formDataToBeWatched["methode"]) && _vm.formDataToBeWatched["methode"] != "Manuel"
    },
    on: {
      click: function click($event) {
        return _vm.setMethode("Manuel");
      }
    }
  }, [_vm._v("\n                            Recueil manuel\n                        ")]), _vm._v(" "), _c("div", {
    staticClass: "col cursor-pointer border-end d-flex justify-content-center align-items-center text-center bg-deep-blue p-2",
    "class": {
      "bg-white text-orange fw-semibold": _vm.methode == "Automatique",
      "bg-disabled color-disabled cursor-not-allowed": !["", null, undefined].includes(_vm.formDataToBeWatched["methode"]) && _vm.formDataToBeWatched["methode"] != "Automatique"
    },
    on: {
      click: function click($event) {
        return _vm.setMethode("Automatique");
      }
    }
  }, [_vm._v("\n                            Recueil par mail d'approbation (Auto)\n                        ")])]) : _vm._e(), _vm._v(" "), !["", null, undefined].includes(_vm.methode) ? _c("div", [_vm.methode == "Automatique" ? _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header"
  }, [_c("h6", {
    attrs: {
      id: "Initiation"
    }
  }, [_vm._v("\n                                    Initiation\n                                    "), _c("chevron-up-icon", {
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
  }, [_c("div", [_c("div", {
    staticClass: "d-flex justify-content-center"
  }, [_c("button", {
    staticClass: "btn shadow-md text-white",
    "class": {
      "cursor-not-allowed": _vm.formDataToBeWatched["sending_mail"]["status"]
    },
    staticStyle: {
      cursor: "pointer",
      background: "#34495e",
      "max-width": "max-content",
      display: "flex",
      "align-items": "center"
    },
    attrs: {
      type: "button",
      name: "button",
      disabled: _vm.formDataToBeWatched["sending_mail"]["status"],
      title: "Envoie des mails"
    },
    on: {
      click: function click($event) {
        return _vm.sendMail();
      }
    }
  }, [_c("i", {
    staticClass: "icofont-send-mail",
    staticStyle: {
      "font-size": "1.5em"
    }
  }), _vm._v(" Envoie des mails ")])]), _vm._v(" "), _vm.formDataToBeWatched["sending_mail"]["status"] == true ? _c("div", {
    staticClass: "text-center"
  }, [_vm._v("\n\n                                        Les administrateurs doivent répondre dans : "), ((_this$formDataToBeWat = this.formDataToBeWatched) === null || _this$formDataToBeWat === void 0 || (_this$formDataToBeWat = _this$formDataToBeWat.sending_mail) === null || _this$formDataToBeWat === void 0 ? void 0 : _this$formDataToBeWat.status) == true ? _c("span", {
    staticClass: "count-down"
  }, [_c("span", [_vm._v(" " + _vm._s(_vm.hoursToShow) + " "), _c("span", {
    staticClass: "indicator"
  }, [_vm._v("H")])]), _vm._v(" "), _c("span", [_vm._v(" " + _vm._s(_vm.minutesToShow) + " "), _c("span", {
    staticClass: "indicator"
  }, [_vm._v("M")])]), _vm._v(" "), _c("span", [_vm._v(" " + _vm._s(_vm.secondsToShow) + " "), _c("span", {
    staticClass: "indicator"
  }, [_vm._v("S")])])]) : _vm._e(), _vm._v(" "), _c("br"), _vm._v(" "), _c("small", {
    staticClass: "text-danger fw-bold"
  }, [_vm._v("Au délà de ce délai les règles de validation automatique seront appliquées.")])]) : _vm._e()])])]) : _vm._e(), _vm._v(" "), _vm.seen1 ? _c("div", {
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
      id: "Recensement-des-votes-des-administrateurs"
    }
  }, [_vm._v("\n                                    Recensement des votes des administrateurs\n                                    "), _c("chevron-up-icon", {
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
  }, [_vm.loadAdmin ? _c("div", {
    staticClass: "card-body"
  }, [_vm._m(1)]) : _c("div", [_c("div", {
    staticClass: "table-responsive",
    staticStyle: {
      "max-height": "50vh"
    }
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_c("thead", [_c("tr", [_c("th", {
    staticClass: "sticky sticky-top-4 text-nowrap",
    staticStyle: {
      background: "#f4f3f3 !important"
    }
  }, [_vm._v("Nom & Prénoms")]), _vm._v(" "), _c("th", {
    staticClass: "sticky-top-3 text-center",
    staticStyle: {
      background: "#f4f3f3 !important"
    }
  }, [_vm._v("Fonction")]), _vm._v(" "), _c("th", {
    staticClass: "sticky-top-3 text-center",
    staticStyle: {
      background: "#f4f3f3 !important"
    }
  }, [_vm._v("Décision")]), _vm._v(" "), _c("th", {
    staticClass: "sticky-top-3 text-center",
    staticStyle: {
      background: "#f4f3f3 !important"
    }
  }, [_vm._v("Commentaire")]), _vm._v(" "), _vm.methode == "Manuel" ? _c("th", {
    staticClass: "sticky-top-3 text-nowrap text-center",
    staticStyle: {
      background: "#f4f3f3 !important"
    }
  }, [_vm._v("Pièce(s) jointe(s) (Mail)")]) : _vm._e()])]), _vm._v(" "), _c("tbody", _vm._l(_vm.admin_votes, function (admin, index) {
    var _admin$user, _admin$user2, _admin$files, _admin$files2, _admin$files3;
    return _c("tr", {
      key: "admin" + index
    }, [_c("td", {
      staticClass: "sticky"
    }, [_vm._v(_vm._s(admin === null || admin === void 0 || (_admin$user = admin.user) === null || _admin$user === void 0 ? void 0 : _admin$user.name))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(admin === null || admin === void 0 || (_admin$user2 = admin.user) === null || _admin$user2 === void 0 ? void 0 : _admin$user2.display_name))]), _vm._v(" "), _c("td", [_vm.methode == "Manuel" ? _c("div", {
      staticClass: "d-flex"
    }, [_c("div", {
      staticClass: "m-2 d-flex mr-4"
    }, [_c("input", {
      staticStyle: {
        transform: "scale(1.5) !important",
        height: "20px!important"
      },
      attrs: {
        type: "checkbox",
        value: "AVIS FAVORABLE",
        id: "decision_favorable" + index,
        disabled: _vm.methode != "Manuel",
        readonly: _vm.methode != "Manuel"
      },
      domProps: {
        checked: admin.decision == "AVIS FAVORABLE"
      },
      on: {
        input: function input($event) {
          return _vm.checkboxValCashCall2($event, "decision", index);
        }
      }
    }), _vm._v(" "), _c("label", {
      staticClass: "text-nowrap",
      staticStyle: {
        "margin-left": "10px"
      },
      attrs: {
        "for": "decision_favorable" + index
      }
    }, [_vm._v("Favorable")])]), _vm._v(" "), _c("div", {
      staticClass: "m-2 d-flex mr-4"
    }, [_c("input", {
      staticStyle: {
        transform: "scale(1.5) !important",
        height: "20px!important"
      },
      attrs: {
        type: "checkbox",
        value: "AVIS NON FAVORABLE",
        id: "decision_defavorable" + index,
        disabled: _vm.methode != "Manuel",
        readonly: _vm.methode != "Manuel"
      },
      domProps: {
        checked: admin.decision == "AVIS NON FAVORABLE"
      },
      on: {
        input: function input($event) {
          return _vm.checkboxValCashCall2($event, "decision", index);
        }
      }
    }), _vm._v(" "), _c("label", {
      staticClass: "text-nowrap",
      staticStyle: {
        "margin-left": "10px"
      },
      attrs: {
        "for": "decision_defavorable" + index
      }
    }, [_vm._v("Défavorable")])]), _vm._v(" "), _c("div", {
      staticClass: "m-2 d-flex mr-4"
    }, [_c("input", {
      staticStyle: {
        transform: "scale(1.5) !important",
        height: "20px!important"
      },
      attrs: {
        type: "checkbox",
        value: "",
        id: "decision_non_repondu" + index,
        disabled: _vm.methode != "Manuel",
        readonly: _vm.methode != "Manuel"
      },
      domProps: {
        checked: admin.decision == ""
      },
      on: {
        input: function input($event) {
          return _vm.checkboxValCashCall2($event, "decision", index);
        }
      }
    }), _vm._v(" "), _c("label", {
      staticClass: "text-nowrap",
      staticStyle: {
        "margin-left": "10px"
      },
      attrs: {
        "for": "decision_non_repondu" + index
      }
    }, [_vm._v("Non répondu")])])]) : _c("div", [["", null, undefined].includes(admin.decision) ? _c("span", {
      staticClass: "text-info"
    }, [_vm._v("Avis en attente de réception ...")]) : admin.decision == "AVIS FAVORABLE" ? _c("span", {
      staticClass: "text-success",
      attrs: {
        title: admin.decision
      }
    }, [_c("check-circle-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "1.5x"
      }
    }), _vm._v(" " + _vm._s(admin.decision) + "\n                                                            ")], 1) : admin.decision == "AVIS NON FAVORABLE" ? _c("span", {
      staticClass: "text-danger",
      attrs: {
        title: admin.decision
      }
    }, [_c("x-circle-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "1.5x"
      }
    }), _vm._v(" " + _vm._s(admin.decision) + "\n                                                            ")], 1) : _vm._e()])]), _vm._v(" "), _c("td", [_c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: admin.commentaire,
        expression: "admin.commentaire"
      }],
      staticClass: "form-control",
      staticStyle: {
        height: "initial!important",
        resize: "vertical!important",
        "min-width": "200px!important"
      },
      attrs: {
        disabled: _vm.methode != "Manuel",
        readonly: _vm.methode != "Manuel"
      },
      domProps: {
        value: admin.commentaire
      },
      on: {
        change: _vm.changeComment,
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(admin, "commentaire", $event.target.value);
        }
      }
    })]), _vm._v(" "), _vm.methode == "Manuel" ? _c("td", {
      staticStyle: {
        "vertical-align": "middle"
      }
    }, [_c("div", {
      staticClass: "d-flex align-items-center text-center justify-content-center"
    }, [_c("div", [(admin === null || admin === void 0 || (_admin$files = admin.files) === null || _admin$files === void 0 ? void 0 : _admin$files.length) > 0 ? _c("span", {
      staticClass: "p-1 px-2 mx-2 text-nowrap",
      staticStyle: {
        "background-color": "rgb(44, 62, 80)",
        color: "white",
        "font-size": "13px",
        "border-radius": "5px",
        "margin-left": "0!important",
        width: "150px"
      }
    }, [_vm._v(_vm._s((admin === null || admin === void 0 || (_admin$files2 = admin.files) === null || _admin$files2 === void 0 ? void 0 : _admin$files2.length) > 0 ? (admin === null || admin === void 0 || (_admin$files3 = admin.files) === null || _admin$files3 === void 0 ? void 0 : _admin$files3.length) + " fichier(s) uploadé(s)" : ""))]) : _vm._e()]), _vm._v(" "), _c("div", [_c("button", {
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
          return _vm.handleDoubleClickOrClick($event, index, admin);
        }
      }
    }, [_c("i", {
      staticClass: "icofont-attachment"
    })])])])]) : _vm._e()]);
  }), 0)]), _vm._v(" "), _c("hr"), _vm._v(" "), _vm.methode == "Automatique" ? _c("div", [[["EN ATTENTE DES AVIS", "EN ATTENTE DU 3EME AVIS"].includes((_vm$automateVote = _vm.automateVote) === null || _vm$automateVote === void 0 ? void 0 : _vm$automateVote.response) ? _c("div", [_c("button", {
    staticClass: "btn btn-secondary",
    staticStyle: {
      width: "100%",
      height: "8vh",
      "background-color": "#7f8c8d"
    },
    attrs: {
      disabled: ""
    }
  }, [_vm._v("\n                                                        " + _vm._s(_vm.automateVote.response) + "\n                                                    ")])]) : ["AVIS FAVORABLE", "APPROBATION"].includes((_vm$automateVote2 = _vm.automateVote) === null || _vm$automateVote2 === void 0 ? void 0 : _vm$automateVote2.response) ? _c("div", [_vm._m(2), _vm._v(" "), _c("div", {
    staticClass: "text-center m-1"
  }, [_c("b", [_vm._v(_vm._s(_vm.automateVote.response == "APPROBATION" ? "Accord définitif" : "Avis favorable"))])])]) : ["AVIS NON FAVORABLE", "REFUS"].includes((_vm$automateVote3 = _vm.automateVote) === null || _vm$automateVote3 === void 0 ? void 0 : _vm$automateVote3.response) ? _c("div", [_vm._m(3), _vm._v(" "), _c("div", {
    staticClass: "text-center m-1"
  }, [_c("b", [_vm._v(_vm._s(_vm.automateVote.response == "REFUS" ? "Refus définitif" : "Avis non favorable"))])])]) : _vm._e()], _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-content-center my-2"
  }, [_c("button", {
    staticClass: "btn shadow-md text-white",
    staticStyle: {
      cursor: "pointer",
      background: "#34495e",
      "max-width": "max-content",
      display: "flex",
      "align-items": "center"
    },
    attrs: {
      type: "button",
      name: "button",
      title: "Charger les avis"
    },
    on: {
      click: function click($event) {
        return _vm.getDecisions();
      }
    }
  }, [_c("i", {
    staticClass: "icofont-refresh",
    staticStyle: {
      "font-size": "1.2em"
    }
  }), _vm._v(" Charger les avis")])])], 2) : _vm._e()]), _vm._v(" "), _vm.methode == "Manuel" ? _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header"
  }, [_c("h6", {
    attrs: {
      id: "Récapitulatif-des-avis"
    }
  }, [_vm._v("\n                                                Récapitulatif des avis\n                                                "), _c("chevron-up-icon", {
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
  }, [_vm.load_final_decision ? _c("div", {
    staticClass: "card-body"
  }, [_vm._m(4)]) : _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(5), _vm._v(" "), _c("tbody", _vm._l(_vm.admin_votes, function (admin, index) {
    var _admin$user3, _admin$user4;
    return _c("tr", {
      key: "admin" + index
    }, [_c("td", {
      staticClass: "sticky"
    }, [_vm._v(_vm._s(admin === null || admin === void 0 || (_admin$user3 = admin.user) === null || _admin$user3 === void 0 ? void 0 : _admin$user3.name))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(admin === null || admin === void 0 || (_admin$user4 = admin.user) === null || _admin$user4 === void 0 ? void 0 : _admin$user4.display_name))]), _vm._v(" "), _c("td", [["", null, undefined].includes(admin.decision) ? _c("span", {
      staticClass: "text-info"
    }, [_vm._v("Avis en attente de réception ...")]) : admin.decision == "AVIS FAVORABLE" ? _c("span", {
      staticClass: "text-success",
      attrs: {
        title: admin.decision
      }
    }, [_c("check-circle-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "1.5x"
      }
    }), _vm._v(" " + _vm._s(admin.decision) + "\n                                                                    ")], 1) : admin.decision == "AVIS NON FAVORABLE" ? _c("span", {
      staticClass: "text-danger",
      attrs: {
        title: admin.decision
      }
    }, [_c("x-circle-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "1.5x"
      }
    }), _vm._v(" " + _vm._s(admin.decision) + "\n                                                                    ")], 1) : _vm._e()])]);
  }), 0)]), _vm._v(" "), ["EN ATTENTE DES AVIS", "EN ATTENTE DU 3EME AVIS"].includes((_vm$automateVote4 = _vm.automateVote) === null || _vm$automateVote4 === void 0 ? void 0 : _vm$automateVote4.response) ? _c("div", [_c("button", {
    staticClass: "btn btn-secondary",
    staticStyle: {
      width: "100%",
      height: "8vh",
      "background-color": "#7f8c8d"
    },
    attrs: {
      disabled: ""
    }
  }, [_vm._v("\n                                                            " + _vm._s(_vm.automateVote.response) + "\n                                                        ")])]) : _vm._e()])])])]) : _vm._e()])])]) : _c("div", {
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
      id: "Recensement-des-votes-des-administrateurs"
    }
  }, [_vm._v("\n                                    Recensement des votes des administrateurs\n                                    "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)])])]) : _vm._e()]), _vm._v(" "), _c("br")]), _vm._v(" "), _c("div", {
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
  }, [_vm._v("Fermer le tableau")])]) : _c("div", {
    staticClass: "card card-width-height"
  }, [_c("br"), _vm._v(" "), _c("div", {
    staticClass: "card-header hdc pb-0 pt-2"
  }, [_c("h3", {
    staticClass: "head",
    attrs: {
      id: "ccca2-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Recueil des avis administrateurs\n                        ")]), _vm._v(" "), _c("div", {
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
        var _vm$formDataToBeWatch3;
        (_vm$formDataToBeWatch3 = _vm.formDataToBeWatched.notes) === null || _vm$formDataToBeWatch3 === void 0 || _vm$formDataToBeWatch3.unshift($event);
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
  return _c("table", {
    staticClass: "table-borderless w-100"
  }, [_c("tbody", [_c("tr", [_c("td", {
    staticClass: "align-middle",
    attrs: {
      colspan: "100"
    }
  }, [_c("div", {
    staticClass: "d-flex justify-content-center align-items-center text-center",
    staticStyle: {
      width: "100%",
      height: "300px"
    }
  }, [_c("div", {
    staticClass: "column"
  }, [_c("div", {
    staticClass: "spinner-border spinner-border-xl"
  }), _vm._v(" "), _c("div", {
    staticClass: "d-block"
  }, [_vm._v("\n                                                Chargement des données en cours\n                                            ")])])])])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "d-flex justify-content-center text-center align-items-center text-muted py-4"
  }, [_c("div", [_c("span", {
    staticClass: "spinner-border spinner-border"
  }), _vm._v(" "), _c("h5", [_vm._v("\n                                                Chargement des données en cours ... "), _c("br"), _vm._v("\n                                                Ceci peut prendre un peu de temps\n                                            ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("button", {
    staticClass: "btn btn-success",
    staticStyle: {
      width: "100%",
      height: "8vh",
      "background-color": "#27ae60"
    },
    attrs: {
      disabled: ""
    }
  }, [_c("i", {
    staticClass: "icofont icofont-check icofont-3x"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("button", {
    staticClass: "btn btn-danger",
    staticStyle: {
      width: "100%",
      height: "8vh",
      "background-color": "#e74c3c"
    },
    attrs: {
      disabled: ""
    }
  }, [_c("i", {
    staticClass: "icofont icofont-close icofont-3x"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "d-flex justify-content-center text-center align-items-center text-muted py-4"
  }, [_c("div", [_c("span", {
    staticClass: "spinner-border spinner-border"
  }), _vm._v(" "), _c("h5", [_vm._v("\n                                                            Chargement des données en cours ... "), _c("br"), _vm._v("\n                                                            Ceci peut prendre un peu de temps\n                                                        ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", {
    staticClass: "col-4 sticky sticky-top-4 text-nowrap",
    staticStyle: {
      background: "#f4f3f3 !important"
    }
  }, [_vm._v("Nom & Prénoms")]), _vm._v(" "), _c("th", {
    staticClass: "col-3 sticky-top-3 text-center",
    staticStyle: {
      background: "#f4f3f3 !important"
    }
  }, [_vm._v("Fonction")]), _vm._v(" "), _c("th", {
    staticClass: "col-5 sticky-top-3 text-center",
    staticStyle: {
      background: "#f4f3f3 !important"
    }
  }, [_vm._v("Décision")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/pv_csc/PV-CSC0.vue?vue&type=style&index=0&id=19cb9747&lang=css&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/pv_csc/PV-CSC0.vue?vue&type=style&index=0&id=19cb9747&lang=css&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n*[data-v-19cb9747] {\r\n    font-family: \"Google sans\";\n}\nlabel[data-v-19cb9747] {\r\n    height: 10px;\r\n    font-size: 13px;\n}\ntd[data-v-19cb9747] {\r\n    padding: 5px;\n}\ninput[data-v-19cb9747],\r\nselect[data-v-19cb9747] {\r\n    height: 35px;\r\n    border-color: #34495e;\r\n    color: #57606f;\r\n    font-size: 13px;\r\n    font-weight: bold;\n}\n.card-width-height[data-v-19cb9747] {\r\n    width: 100%;\r\n    height: 100%;\n}\n.head[data-v-19cb9747] {\r\n    color: #f1f2f6;\r\n    font-size: 22px;\n}\n.hdc[data-v-19cb9747] {\r\n    background-color: #57606f;\n}\n.relook-header[data-v-19cb9747] {\r\n    color: #000;\r\n    background-color: #f4f3f3;\r\n    padding: 5px;\r\n    border-bottom: 1px solid #b6b8bb;\n}\n.badge-sm[data-v-19cb9747] {\r\n    display: inline-block;\r\n    width: 15px;\r\n    height: 15px;\r\n    background: rgba(255, 0, 0, 0.882);\r\n    color: white;\r\n    font-size: 12px;\r\n    font-weight: 500;\r\n    border-radius: 100%;\r\n    position: absolute;\r\n    top: -20%;\r\n    left: 55%;\r\n    text-align: center;\n}\n.color-disabled[data-v-19cb9747] {\r\n    color: #57606f !important;\n}\n.indicator[data-v-19cb9747] {\r\n    font-size: smaller;\r\n    font-weight: bold;\r\n    color: #95a5a6;\r\n    text-transform: uppercase;\n}\n.count-down[data-v-19cb9747] {\r\n    color: #02ab02;\n}\r\n\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/pv_csc/PV-CSC0.vue?vue&type=style&index=0&id=19cb9747&lang=css&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/pv_csc/PV-CSC0.vue?vue&type=style&index=0&id=19cb9747&lang=css&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PV_CSC0_vue_vue_type_style_index_0_id_19cb9747_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PV-CSC0.vue?vue&type=style&index=0&id=19cb9747&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/pv_csc/PV-CSC0.vue?vue&type=style&index=0&id=19cb9747&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PV_CSC0_vue_vue_type_style_index_0_id_19cb9747_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PV_CSC0_vue_vue_type_style_index_0_id_19cb9747_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/forms/afg/pv_csc/PV-CSC0.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/forms/afg/pv_csc/PV-CSC0.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PV_CSC0_vue_vue_type_template_id_19cb9747_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PV-CSC0.vue?vue&type=template&id=19cb9747&scoped=true */ "./resources/js/components/forms/afg/pv_csc/PV-CSC0.vue?vue&type=template&id=19cb9747&scoped=true");
/* harmony import */ var _PV_CSC0_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PV-CSC0.vue?vue&type=script&lang=js */ "./resources/js/components/forms/afg/pv_csc/PV-CSC0.vue?vue&type=script&lang=js");
/* harmony import */ var _PV_CSC0_vue_vue_type_style_index_0_id_19cb9747_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PV-CSC0.vue?vue&type=style&index=0&id=19cb9747&lang=css&scoped=true */ "./resources/js/components/forms/afg/pv_csc/PV-CSC0.vue?vue&type=style&index=0&id=19cb9747&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PV_CSC0_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _PV_CSC0_vue_vue_type_template_id_19cb9747_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _PV_CSC0_vue_vue_type_template_id_19cb9747_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "19cb9747",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/forms/afg/pv_csc/PV-CSC0.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/forms/afg/pv_csc/PV-CSC0.vue?vue&type=script&lang=js":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/pv_csc/PV-CSC0.vue?vue&type=script&lang=js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PV_CSC0_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PV-CSC0.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/pv_csc/PV-CSC0.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PV_CSC0_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/forms/afg/pv_csc/PV-CSC0.vue?vue&type=style&index=0&id=19cb9747&lang=css&scoped=true":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/pv_csc/PV-CSC0.vue?vue&type=style&index=0&id=19cb9747&lang=css&scoped=true ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PV_CSC0_vue_vue_type_style_index_0_id_19cb9747_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PV-CSC0.vue?vue&type=style&index=0&id=19cb9747&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/pv_csc/PV-CSC0.vue?vue&type=style&index=0&id=19cb9747&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/forms/afg/pv_csc/PV-CSC0.vue?vue&type=template&id=19cb9747&scoped=true":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/pv_csc/PV-CSC0.vue?vue&type=template&id=19cb9747&scoped=true ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PV_CSC0_vue_vue_type_template_id_19cb9747_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PV_CSC0_vue_vue_type_template_id_19cb9747_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PV_CSC0_vue_vue_type_template_id_19cb9747_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PV-CSC0.vue?vue&type=template&id=19cb9747&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/pv_csc/PV-CSC0.vue?vue&type=template&id=19cb9747&scoped=true");


/***/ })

}]);