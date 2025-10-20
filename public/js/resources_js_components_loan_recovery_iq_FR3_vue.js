"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_loan_recovery_iq_FR3_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/loan_recovery_iq/FR3.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/loan_recovery_iq/FR3.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vueform/multiselect/dist/multiselect.vue2 */ "./node_modules/@vueform/multiselect/dist/multiselect.vue2.js");
/* harmony import */ var _services_user_manager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user_manager.js */ "./resources/js/services/user_manager.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @johmun/vue-tags-input */ "./node_modules/@johmun/vue-tags-input/dist/vue-tags-input.js");
/* harmony import */ var _johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _helpers_indexedDB__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/indexedDB */ "./resources/js/helpers/indexedDB.js");
/* harmony import */ var _helpers_indexedDB__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_helpers_indexedDB__WEBPACK_IMPORTED_MODULE_5__);
/* provided dependency */ var process = __webpack_require__(/*! process/browser.js */ "./node_modules/process/browser.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
var tableTemplate = function tableTemplate() {
  return {
    user_id: 0,
    lieu: "",
    par: "",
    user_infos: null,
    date_planification: null,
    date_visite: "",
    heure_debut: "",
    type_visite: "",
    observation: "",
    visite_groupee: "",
    autre_lieu: "",
    phase: null,
    collaborateurs: [{
      user_id: "",
      user_name: "",
      user_email: "",
      role_name: "",
      is_editing: true,
      is_notified: false
    }]
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Planification",
  display: "Planification",
  components: {
    MoreVerticalIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.MoreVerticalIcon,
    ChevronUpIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.ChevronUpIcon,
    ChevronDownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.ChevronDownIcon,
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.PlusIcon,
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.TrashIcon,
    AirplayIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.AirplayIcon,
    Multiselect: _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_1__["default"],
    VueTagsInput: (_johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_4___default())
  },
  computed: {
    // filteredOptions() {
    // return this.users.filter(user => option.language === this.languageFilter);
    // },
    filteredCollaborators: function filteredCollaborators() {
      var _this$users$filter,
        _this$users,
        _this = this;
      var collaborators = (_this$users$filter = (_this$users = this.users) === null || _this$users === void 0 ? void 0 : _this$users.filter(function (user) {
        var _this$authcheckUsr;
        return user.id != ((_this$authcheckUsr = _this.authcheckUsr) === null || _this$authcheckUsr === void 0 ? void 0 : _this$authcheckUsr.user_id);
      })) !== null && _this$users$filter !== void 0 ? _this$users$filter : [];
      collaborators = collaborators.filter(function (user) {
        var _this$planifications$;
        return !((_this$planifications$ = _this.planifications[_this.currentSeen]) !== null && _this$planifications$ !== void 0 && (_this$planifications$ = _this$planifications$.collaborateurs) !== null && _this$planifications$ !== void 0 && _this$planifications$.some(function (c) {
          return c.user_id == user.id;
        }));
      }).map(this.buildColaboratorTag);
      if (this.tag) {
        collaborators = collaborators.filter(function (collaborator) {
          var _collaborator$text, _this$tag;
          var text = _this.removeAccents((_collaborator$text = collaborator.text) !== null && _collaborator$text !== void 0 ? _collaborator$text : "").toLowerCase();
          var tag = _this.removeAccents((_this$tag = _this.tag) !== null && _this$tag !== void 0 ? _this$tag : "").toLowerCase();
          return text.includes(tag);
        });
      }

      // remove duplicate collaborators by text
      collaborators = collaborators.filter(function (collaborator, index, self) {
        return index === self.findIndex(function (t) {
          return t.text === collaborator.text;
        });
      });

      // order by duplicate
      return collaborators.sort(function (a, b) {
        return a.text.localeCompare(b.text);
      });
    },
    collaboratorsToNotify: function collaboratorsToNotify() {
      var _this$planifications$2, _this$planifications$3;
      return (_this$planifications$2 = (_this$planifications$3 = this.planifications[this.currentSeen]) === null || _this$planifications$3 === void 0 || (_this$planifications$3 = _this$planifications$3.collaborateurs) === null || _this$planifications$3 === void 0 ? void 0 : _this$planifications$3.filter(function (c) {
        return !c.is_notified;
      })) !== null && _this$planifications$2 !== void 0 ? _this$planifications$2 : [];
    },
    inDevelopment: function inDevelopment() {
      return this.appEnv === 'local';
    },
    logger: function logger() {
      if (this.inDevelopment) {
        return console;
      }
      return {};
    }
  },
  props: {
    meta_data: Object,
    tb_name: String,
    tb_display_name: String
  },
  created: function created() {
    var _this2 = this;
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!_this2.UserManager.data.has_users) {
              _this2.UserManager.loadUsers();
            } else {
              _this2.users = _this2.UserManager.getUsers();
              _this2.users = _this2.safeUsers(_this2.users);
              _this2.authcheckUsr = _this2.UserManager.getAuthUser();
            }
            EventBus.$on('user_manager_updated', function () {
              _this2.users = _this2.UserManager.getUsers();
              _this2.users = _this2.safeUsers(_this2.users);
              _this2.authcheckUsr = _this2.UserManager.getAuthUser();
            });
          case 2:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  mounted: function mounted() {
    var _this$planifications,
      _this$planifications$4,
      _this$planifications$5,
      _this$planifications$6,
      _this3 = this;
    this.loadRetrieved();
    this.loadTbAttrs();
    this.tableClosedOrOpened();
    (_this$planifications = this.planifications) === null || _this$planifications === void 0 || _this$planifications.forEach(function (el) {
      var _el$collaborateurs;
      el === null || el === void 0 || (_el$collaborateurs = el.collaborateurs) === null || _el$collaborateurs === void 0 || _el$collaborateurs.filter(function (col) {
        return col === null || col === void 0 ? void 0 : col.user_id;
      });
    });
    this.currentSeen = ((_this$planifications$4 = this.planifications.length) !== null && _this$planifications$4 !== void 0 ? _this$planifications$4 : 0) - 1;
    this.tags = (_this$planifications$5 = (_this$planifications$6 = this.planifications[this.currentSeen]) === null || _this$planifications$6 === void 0 || (_this$planifications$6 = _this$planifications$6.collaborateurs) === null || _this$planifications$6 === void 0 || (_this$planifications$6 = _this$planifications$6.filter(function (col) {
      return col === null || col === void 0 ? void 0 : col.user_id;
    })) === null || _this$planifications$6 === void 0 ? void 0 : _this$planifications$6.map(function (col) {
      return _this3.buildColaboratorTag({
        user_id: col.user_id,
        name: col.user_name,
        email: col.user_email,
        role_name: col.role_name
      });
    })) !== null && _this$planifications$5 !== void 0 ? _this$planifications$5 : [];
    EventBus.$on("value-updated", function (data) {
      _this3.runLockFields();
    });
    EventBus.$on("openTbRecovery", function (data) {
      if (![null, undefined, ""].includes(data.key)) {
        var _this3$meta_data;
        if (((_this3$meta_data = _this3.meta_data) === null || _this3$meta_data === void 0 || (_this3$meta_data = _this3$meta_data.dossier_credit) === null || _this3$meta_data === void 0 ? void 0 : _this3$meta_data[data.key]) != undefined) {
          if (data.tbname == _this3.tb_name && !_this3.seen) {
            _this3.retract();
            _this3.$refs.form.scrollIntoView({
              behavior: "smooth",
              block: "start",
              inline: "nearest"
            });
          } else if (data.tbname == _this3.tb_name && _this3.seen) {
            _this3.$refs.form.scrollIntoView({
              behavior: "smooth",
              block: "start",
              inline: "nearest"
            });
          }
        }
      }
    });
  },
  data: function data() {
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
      currentSeen: 0,
      isLoading: false,
      isSendingNotification: false,
      UserManager: _services_user_manager_js__WEBPACK_IMPORTED_MODULE_2__["default"],
      users: [],
      tag: "",
      tags: [],
      meta_parseable: {
        cred_pub_key: this.meta_data["cred_pub_key"],
        tb_name: this.tb_name
      },
      formDataToBeWatched: {
        notes: [],
        planifications: []
      },
      listingNote: false,
      contextList: [{
        title: "Commenter",
        icon: "icofont icofont-comment",
        handler: function () {
          this.openNotesModal();
        }.bind(vm),
        disabled: false,
        id: 'comment'
      }, {
        title: "Assigner",
        icon: "icofont icofont-check",
        handler: function handler() {},
        disabled: true,
        id: 'asign'
      }],
      planifications: [tableTemplate()],
      lock_fields: [{
        lock: false
      }],
      first: false,
      newTableItemIdx: new Set(),
      appEnv: "local"
    };
  },
  methods: {
    safeUsers: function safeUsers(users) {
      var _this4 = this;
      return users.filter(function (u) {
        var _this4$authcheckUsr, _u$name;
        return u && (u === null || u === void 0 ? void 0 : u.id) != ((_this4$authcheckUsr = _this4.authcheckUsr) === null || _this4$authcheckUsr === void 0 ? void 0 : _this4$authcheckUsr.user_id) &&
        // u?.codeagence?.toUpperCase()?.includes(this.authcheckUsr?.filiale?.replace(" ", "_")) &&
        !["puJ6WRQWDdvvvVkCRxwL"].includes(u.role_id) && !(u !== null && u !== void 0 && (_u$name = u.name) !== null && _u$name !== void 0 && (_u$name = _u$name.toLowerCase()) !== null && _u$name !== void 0 && _u$name.includes("default_"));
      });
    },
    datePlanification: function datePlanification() {
      moment__WEBPACK_IMPORTED_MODULE_3___default().locale('fr');

      // Récupérer la date courante et la formater
      var currentDate = moment__WEBPACK_IMPORTED_MODULE_3___default()().format("DD/MM/YYYY [à] HH:mm:ss");
      return currentDate;
    },
    tableClosedOrOpened: function tableClosedOrOpened() {
      this.seen = this.fetchClosedTables(this.tb_name + this.meta_data["cred_pub_key"]);
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
    formDataVars2: function formDataVars2(event, index, obj, key) {
      this[obj][index][key] = event[1];
      this.handleInput();
    },
    addMore: function addMore() {
      var newLength = this.planifications.push(tableTemplate());
      this.newTableItemIdx.add(newLength - 1);
      this.runLockFields();
      this.handleInput();
      this.currentSeen = this.planifications.length - 1;
    },
    remove: function remove(index) {
      this.planifications.splice(index, 1);
      this.handleInput();
      this.currentSeen = this.planifications.length - 1;
    },
    addMoreCol: function addMoreCol(index) {
      this.planifications[index].collaborateurs.push({
        user_id: "",
        user_name: "",
        user_email: "",
        role_name: "",
        is_editing: true
      });
      this.handleInput();
    },
    removeCol: function removeCol(index, indexCol) {
      this.planifications[index].collaborateurs.splice(indexCol, 1);
      this.handleInput();
    },
    changeEditing: function changeEditing(index, indexCol) {
      var _this$lock_fields$ind;
      if ((_this$lock_fields$ind = this.lock_fields[index]) !== null && _this$lock_fields$ind !== void 0 && _this$lock_fields$ind.lock) return;
      this.planifications[index].collaborateurs[indexCol]['is_editing'] = true;
      this.handleInput();
    },
    selectedOptionUser: function selectedOptionUser(value, obj, $event) {
      this.planifications[$event.$el.dataset.index]['collaborateurs'][$event.$el.dataset.index_col]['user_id'] = obj.id;
      this.planifications[$event.$el.dataset.index]['collaborateurs'][$event.$el.dataset.index_col]['user_name'] = obj.name;
      this.planifications[$event.$el.dataset.index]['collaborateurs'][$event.$el.dataset.index_col]['user_email'] = obj.email;
      this.planifications[$event.$el.dataset.index]['collaborateurs'][$event.$el.dataset.index_col]['role_name'] = obj.role_name;
      this.planifications[$event.$el.dataset.index]['collaborateurs'][$event.$el.dataset.index_col]['is_editing'] = false;
      this.handleInput();
    },
    setCurrentSeen: function setCurrentSeen(index) {
      this.currentSeen = index;
    },
    checkboxVal: function checkboxVal(event, obj, index) {
      if (event.target.checked) {
        this[obj][index]['visite_groupee'] = event.target.value;
      } else {
        this[obj][index]['visite_groupee'] = "";
      }
      this.handleInput();
    },
    loadRetrieved: function loadRetrieved() {
      var _this$meta_data$dossi;
      var lentb = this.meta_data["dossier_credit"]["tbs_in_use"];
      var createdKey = this.tb_name;
      var createdKeyArr = createdKey.split("tb");
      createdKey = "cred_pub_tb_" + createdKeyArr[1];
      if (this.meta_data["dossier_credit"][createdKey] == undefined) {
        this.first = true;
      }
      this.defaultRetract(this.first, (_this$meta_data$dossi = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi === void 0 ? void 0 : _this$meta_data$dossi.applied_templ_id);
      if (lentb.length > 0) {
        if (this.meta_data["dossier_credit"][createdKey] != undefined) {
          this.formDataToBeWatched = this.meta_data["dossier_credit"][createdKey];
          if (this.meta_data["dossier_credit"][createdKey]["planifications"] != "") {
            this.planifications = this.meta_data["dossier_credit"][createdKey]["planifications"];
            this.updateUserId();
          }
        }
      }
      this.runLockFields();
    },
    runLockFields: function runLockFields() {
      var _this$authcheckUsr2,
        _this5 = this;
      if (((_this$authcheckUsr2 = this.authcheckUsr) === null || _this$authcheckUsr2 === void 0 ? void 0 : _this$authcheckUsr2.user_id) == undefined) {
        setTimeout(function () {
          _this5.runLockFields();
        }, 2000);
      } else {
        this.lock_fields = [];
        this.planifications.forEach(function (el, tableId) {
          var _dossierCredit$recouv, _el$collaborateurs2, _this5$authcheckUsr3;
          if (_this5.first) {
            var _this5$authcheckUsr, _this5$meta_data;
            el.user_id = (_this5$authcheckUsr = _this5.authcheckUsr) === null || _this5$authcheckUsr === void 0 ? void 0 : _this5$authcheckUsr.user_id;
            el.par = (_this5$meta_data = _this5.meta_data) === null || _this5$meta_data === void 0 || (_this5$meta_data = _this5$meta_data.dossier_credit_recovery) === null || _this5$meta_data === void 0 ? void 0 : _this5$meta_data.dureeimp;
            el.user_infos = _this5.authcheckUsr;
            if (["", null, undefined].includes(el.date_planification)) {
              el.date_planification = _this5.datePlanification();
            }
          } else {
            _this5.contextList = _this5.contextList.filter(function (el) {
              return el.id != "remove";
            });
          }
          var dossierCredit = _this5.meta_data["dossier_credit"];
          var decisionAlreadyGiven = (_dossierCredit$recouv = dossierCredit["recouvrement_decision_logs"]) === null || _dossierCredit$recouv === void 0 ? void 0 : _dossierCredit$recouv.some(function (log) {
            var _this5$authcheckUsr2;
            return log.given_by == ((_this5$authcheckUsr2 = _this5.authcheckUsr) === null || _this5$authcheckUsr2 === void 0 ? void 0 : _this5$authcheckUsr2.user_id);
          });
          var collaborators = (_el$collaborateurs2 = el.collaborateurs) !== null && _el$collaborateurs2 !== void 0 ? _el$collaborateurs2 : [];
          var isNotified = collaborators.every(function (col) {
            return col.is_notified;
          });
          var islock;
          if (el.user_id != ((_this5$authcheckUsr3 = _this5.authcheckUsr) === null || _this5$authcheckUsr3 === void 0 ? void 0 : _this5$authcheckUsr3.user_id)) {
            islock = true;
          } else {
            var _this5$meta_data2;
            islock = el.stage_id != ((_this5$meta_data2 = _this5.meta_data) === null || _this5$meta_data2 === void 0 || (_this5$meta_data2 = _this5$meta_data2.dossier_credit) === null || _this5$meta_data2 === void 0 || (_this5$meta_data2 = _this5$meta_data2.workflow) === null || _this5$meta_data2 === void 0 || (_this5$meta_data2 = _this5$meta_data2.current_stage) === null || _this5$meta_data2 === void 0 ? void 0 : _this5$meta_data2.stage_id);
          }
          _this5.lock_fields.push({
            lock: islock || isNotified && collaborators.length > 0
          });
        });
      }
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
          this.logger.log(error);
        }.bind(this));
      } else {
        alert("Unauthenticated");
      }
    },
    retract: function retract() {
      this.seen = !this.seen;
      var a = {
        tb_name: this.tb_name + this.meta_data["cred_pub_key"],
        status: this.seen
      };
      EventBus.$emit("savedclosed-table", a);
    },
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
    handleInput: function handleInput() {
      this.updateUserId();
      this.formDataToBeWatched['planifications'] = this.planifications;
    },
    updateUserId: function updateUserId() {
      var _this6 = this;
      this.planifications.forEach(function (el) {
        if (['', '0', 0, null, undefined].includes(el === null || el === void 0 ? void 0 : el.user_id)) {
          var _this6$authcheckUsr$u, _this6$authcheckUsr, _this6$authcheckUsr2, _this6$meta_data;
          el.user_id = (_this6$authcheckUsr$u = (_this6$authcheckUsr = _this6.authcheckUsr) === null || _this6$authcheckUsr === void 0 ? void 0 : _this6$authcheckUsr.user_id) !== null && _this6$authcheckUsr$u !== void 0 ? _this6$authcheckUsr$u : (_this6$authcheckUsr2 = _this6.authcheckUsr) === null || _this6$authcheckUsr2 === void 0 ? void 0 : _this6$authcheckUsr2.id;
          el.par = (_this6$meta_data = _this6.meta_data) === null || _this6$meta_data === void 0 || (_this6$meta_data = _this6$meta_data.dossier_credit_recovery) === null || _this6$meta_data === void 0 ? void 0 : _this6$meta_data.dureeimp;
          el.user_infos = _this6.authcheckUsr;
          if (["", null, undefined].includes(el.date_planification)) {
            el.date_planification = _this6.datePlanification();
          }
        }
        if (["", "0", 0, null, undefined].includes(el === null || el === void 0 ? void 0 : el.stage_id)) {
          var _this6$meta_data2;
          el.stage_id = (_this6$meta_data2 = _this6.meta_data) === null || _this6$meta_data2 === void 0 || (_this6$meta_data2 = _this6$meta_data2.dossier_credit) === null || _this6$meta_data2 === void 0 || (_this6$meta_data2 = _this6$meta_data2.workflow) === null || _this6$meta_data2 === void 0 || (_this6$meta_data2 = _this6$meta_data2.current_stage) === null || _this6$meta_data2 === void 0 ? void 0 : _this6$meta_data2.stage_id;
        }
      });
      this.runLockFields();
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
        id: "dcp-ppo1-head"
      };
      // console.log(p)
      this.$emit("load-buffer", p);
    },
    formatAmount: function formatAmount(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    },
    convertInt: function convertInt(n) {
      var _n$toString;
      return Number(n === null || n === void 0 || (_n$toString = n.toString()) === null || _n$toString === void 0 ? void 0 : _n$toString.replace(/\s/g, ''));
    },
    textTruncate: function textTruncate(str, length, ending) {
      if (typeof str === "string") {
        if (length == null) {
          length = 25;
        }
        if (ending == null) {
          ending = "...";
        }
        if (str.length > length) {
          return str.substring(0, length - ending.length) + ending;
        } else {
          return str;
        }
      }
    },
    handleAddCollaborator: function handleAddCollaborator(newTags) {
      this.planifications[this.currentSeen].collaborateurs = newTags.map(function (tag) {
        return tag.user;
      });
    },
    checkTag: function checkTag(obj) {
      if (obj.tag.id) {
        obj.addTag();
      }
    },
    buildColaboratorTag: function buildColaboratorTag(user) {
      var _user$user_id, _user$name, _user$is_editing, _user$is_notified;
      var user_id = (_user$user_id = user.user_id) !== null && _user$user_id !== void 0 ? _user$user_id : user.id;
      var userName = (_user$name = user.name) !== null && _user$name !== void 0 ? _user$name : "";
      var roleName = this.UserManager.getRoleName(user);
      if (userName.length > 20) {
        userName = userName.substring(0, 20) + "...";
      }
      if (roleName.length > 20) {
        roleName = roleName.substring(0, 20) + "...";
      }
      return {
        id: user_id,
        user: {
          user_id: user_id,
          user_name: user.name,
          user_email: user.email,
          role_name: user.role_name,
          is_editing: 'is_editing' in user ? (_user$is_editing = user.is_editing) !== null && _user$is_editing !== void 0 ? _user$is_editing : true : true,
          is_notified: 'is_notified' in user ? (_user$is_notified = user.is_notified) !== null && _user$is_notified !== void 0 ? _user$is_notified : false : false
        },
        text: "".concat(userName, " (").concat(roleName, ")")
      };
    },
    removeAccents: function removeAccents(str) {
      return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    },
    sendNotification: function sendNotification(collaborators, planification, creditFolder) {
      var _this7 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var _creditFolder$caf_rec, _this7$authcheckUsr;
        var formattedDate, formattedTime, response;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              /** visit_date: 2024-04-14 -> 14/04/2024 */
              formattedDate = moment__WEBPACK_IMPORTED_MODULE_3___default()(planification.date_visite).format("DD/MM/YYYY");
              /** visit_time: 21:42 -> 21h 42min */
              formattedTime = moment__WEBPACK_IMPORTED_MODULE_3___default()(planification.heure_debut, "HH:mm").format("HH[h] mm[min]");
              _context2.next = 4;
              return _this7.$axios.post("".concat(_this7.ebapisHost, "notifications/api/v1/recovery/notify/email/"), {
                receivers: collaborators,
                template_id: 1,
                template_data: {
                  client_name: (_creditFolder$caf_rec = creditFolder.caf_recorded_file) === null || _creditFolder$caf_rec === void 0 || (_creditFolder$caf_rec = _creditFolder$caf_rec.client) === null || _creditFolder$caf_rec === void 0 ? void 0 : _creditFolder$caf_rec.nomcli,
                  planificator_name: (_this7$authcheckUsr = _this7.authcheckUsr) === null || _this7$authcheckUsr === void 0 ? void 0 : _this7$authcheckUsr.name,
                  folder_number: creditFolder.numero_dossier,
                  visit_date: formattedDate,
                  visit_time: formattedTime,
                  observations: planification.observation
                }
              });
            case 4:
              response = _context2.sent;
              if (!response.data.is_success) {
                _context2.next = 10;
                break;
              }
              collaborators.forEach(function (col) {
                col.is_notified = true;
              });
              _this7.$toasted.success("Collaborateurs notifiés avec succès", {
                duration: 5000
              });
              _context2.next = 11;
              break;
            case 10:
              throw new Error("Une erreur s'est produite lors de la notification des collaborateurs");
            case 11:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    notifyCollaborators: function notifyCollaborators() {
      var _this8 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var _this8$meta_data, _planification$observ;
        var collaborators, planification, creditFolder;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              collaborators = _this8.collaboratorsToNotify;
              planification = _this8.planifications[_this8.currentSeen];
              creditFolder = (_this8$meta_data = _this8.meta_data) === null || _this8$meta_data === void 0 ? void 0 : _this8$meta_data.dossier_credit;
              if (creditFolder) {
                _context4.next = 6;
                break;
              }
              _this8.$toasted.error("Impossible de récupérer les informations du dossier", {
                duration: 5000
              });
              return _context4.abrupt("return");
            case 6:
              if (planification) {
                _context4.next = 9;
                break;
              }
              _this8.$toasted.error("Ajouter une planification avec l'option visite groupé et ajouter des collaborateurs", {
                duration: 5000
              });
              return _context4.abrupt("return");
            case 9:
              if (planification !== null && planification !== void 0 && planification.date_visite) {
                _context4.next = 12;
                break;
              }
              _this8.$toasted.error("Veuillez renseigner la date de visite", {
                duration: 5000
              });
              return _context4.abrupt("return");
            case 12:
              if (planification !== null && planification !== void 0 && planification.heure_debut) {
                _context4.next = 15;
                break;
              }
              _this8.$toasted.error("Veuillez renseigner l'heure de début de la visite", {
                duration: 5000
              });
              return _context4.abrupt("return");
            case 15:
              planification.observation = (_planification$observ = planification.observation) !== null && _planification$observ !== void 0 ? _planification$observ : "";
              if (!(collaborators.length == 0)) {
                _context4.next = 19;
                break;
              }
              _this8.$toasted.error("Ajouter des collaborateurs à notifier", {
                duration: 5000
              });
              return _context4.abrupt("return");
            case 19:
              _this8.isSendingNotification = true;
              _this8.$confirm("Voulez-vous notifier les collaborateurs s\xE9lectionn\xE9s pour la planification du dossier ".concat(creditFolder.numero_dossier, " ?\nVous ne pourrez plus modifier les informations de la planification apr\xE8s la notification."), "Notification des collaborateurs", {
                confirmButtonText: "Oui",
                cancelButtonText: "Non",
                type: "warning"
              }).then(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
                return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                  while (1) switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return _this8.sendNotification(collaborators, planification, creditFolder);
                    case 2:
                      _this8.lock_fields[_this8.currentSeen].lock = true;
                    case 3:
                    case "end":
                      return _context3.stop();
                  }
                }, _callee3);
              })))["catch"](function (error) {
                _this8.logger.error(error);
                _this8.$toasted.error("Une erreur s'est produite lors de la notification des collaborateurs", {
                  duration: 5000
                });
              })["finally"](function () {
                _this8.isSendingNotification = false;
              });
            case 21:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
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
    },
    currentSeen: {
      handler: function handler(newVal) {
        var _this$planifications$7,
          _this$planifications$8,
          _this9 = this;
        this.tag = "";
        this.tags = (_this$planifications$7 = (_this$planifications$8 = this.planifications[newVal]) === null || _this$planifications$8 === void 0 || (_this$planifications$8 = _this$planifications$8.collaborateurs) === null || _this$planifications$8 === void 0 || (_this$planifications$8 = _this$planifications$8.filter(function (col) {
          return col === null || col === void 0 ? void 0 : col.user_id;
        })) === null || _this$planifications$8 === void 0 ? void 0 : _this$planifications$8.map(function (col) {
          return _this9.buildColaboratorTag({
            user_id: col.user_id,
            name: col.user_name,
            email: col.user_email,
            role_name: col.role_name
          });
        })) !== null && _this$planifications$7 !== void 0 ? _this$planifications$7 : [];
        if (this.lock_fields[newVal]) {
          var _this$planifications$9, _this$planifications$0;
          var collaborators = (_this$planifications$9 = (_this$planifications$0 = this.planifications[newVal]) === null || _this$planifications$0 === void 0 ? void 0 : _this$planifications$0.collaborateurs) !== null && _this$planifications$9 !== void 0 ? _this$planifications$9 : [];
          var isNotified = collaborators.every(function (col) {
            return col.is_notified;
          });
          this.lock_fields[newVal]['lock'] = isNotified && collaborators.length > 0;
        }
      },
      immediate: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/loan_recovery_iq/FR3.vue?vue&type=template&id=4e2d6566&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/loan_recovery_iq/FR3.vue?vue&type=template&id=4e2d6566&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$formDataToBeWatch, _vm$lock_fields, _vm$formDataToBeWatch2;
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    ref: "form",
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
      id: "dcp-ppo1-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Planification\n                        ")]), _vm._v(" "), _c("div", {
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
  }, [_vm._l(_vm.planifications, function (planification, index) {
    var _Math$floor, _planification$user_i, _planification$user_i2, _planification$date_p, _vm$lock_fields$index, _vm$lock_fields$index2, _vm$lock_fields$index3, _vm$lock_fields$index4, _vm$lock_fields$index5, _vm$lock_fields$index6, _vm$lock_fields$index7, _vm$lock_fields$index8, _vm$lock_fields$index9, _vm$lock_fields$index0, _Math$floor2, _planification$user_i3, _planification$user_i4, _planification$date_p2;
    return [_vm.currentSeen == index ? _c("div", {
      key: index,
      staticClass: "card-body"
    }, [_c("div", {
      staticClass: "relook-header",
      on: {
        click: function click($event) {
          return _vm.setCurrentSeen(-1);
        }
      }
    }, [_c("div", {
      staticClass: "header-content",
      staticStyle: {
        display: "flex",
        "justify-content": "space-between",
        "align-items": "center"
      }
    }, [_c("h6", {
      attrs: {
        id: "rapport_appel_telephonique" + (index + 1)
      }
    }, [_vm._v("\n                                        Planification " + _vm._s(index + 1) + "\n                                    ")]), _vm._v(" "), _c("small", {
      staticStyle: {
        margin: "0"
      }
    }, [_vm._v("\n                                        Jour(s) de retard : "), _c("span", {
      staticClass: "seuil"
    }, [_vm._v(_vm._s((_Math$floor = Math.floor(planification.par)) !== null && _Math$floor !== void 0 ? _Math$floor : ""))])]), _vm._v(" "), _c("small", {
      staticStyle: {
        margin: "0"
      }
    }, [_vm._v("\n                                        Etabli par: " + _vm._s(_vm.textTruncate((_planification$user_i = planification.user_infos) === null || _planification$user_i === void 0 ? void 0 : _planification$user_i.name) + "(" + _vm.textTruncate((_planification$user_i2 = planification.user_infos) === null || _planification$user_i2 === void 0 ? void 0 : _planification$user_i2.role_sigle) + ")") + "\n                                    ")]), _vm._v(" "), _c("div", {
      staticClass: "row"
    }, [_c("div", {
      staticClass: "col",
      staticStyle: {
        "float": "left"
      }
    }, [_c("small", {
      staticStyle: {
        margin: "0"
      }
    }, [_vm._v("\n                                                le : " + _vm._s((_planification$date_p = planification.date_planification) !== null && _planification$date_p !== void 0 ? _planification$date_p : "#NA") + "\n                                            ")])])]), _vm._v(" "), _c("chevron-up-icon", {
      staticClass: "custom-class",
      staticStyle: {
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
      staticClass: "col-md-4 pl-4"
    }, [_c("label", {
      attrs: {
        "for": "lieu" + index
      }
    }, [_vm._v("Lieu")]), _vm._v(" "), _c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: planification.lieu,
        expression: "planification.lieu"
      }],
      staticClass: "form-select",
      attrs: {
        disabled: (_vm$lock_fields$index = _vm.lock_fields[index]) === null || _vm$lock_fields$index === void 0 ? void 0 : _vm$lock_fields$index.lock
      },
      on: {
        change: function change($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(planification, "lieu", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }
      }
    }, [_c("option", {
      attrs: {
        value: ""
      }
    }), _vm._v(" "), _c("option", {
      attrs: {
        value: "Site de vente principal"
      }
    }, [_vm._v("Site de vente principal")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "Site de vente secondaire"
      }
    }, [_vm._v("Site de vente secondaire")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "Site de vente tertiaire"
      }
    }, [_vm._v("Site de vente tertiaire")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "Site de vente et bureau"
      }
    }, [_vm._v("Site de vente et bureau")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "Domicile"
      }
    }, [_vm._v("Domicile")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "Bureau"
      }
    }, [_vm._v("Bureau")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "Autre"
      }
    }, [_vm._v("Autre")])])]), _vm._v(" "), planification.lieu == "Autre" ? _c("div", {
      staticClass: "col-md-2 pl-4"
    }, [_c("label", {
      attrs: {
        "for": "lieu" + index
      }
    }, [_vm._v("Autre Lieu")]), _vm._v(" "), _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: planification.autre_lieu,
        expression: "planification.autre_lieu"
      }],
      staticClass: "form-control",
      attrs: {
        required: "",
        type: "text",
        disabled: (_vm$lock_fields$index2 = _vm.lock_fields[index]) === null || _vm$lock_fields$index2 === void 0 ? void 0 : _vm$lock_fields$index2.lock,
        id: "autre_lieu" + index
      },
      domProps: {
        value: planification.autre_lieu
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(planification, "autre_lieu", $event.target.value);
        }
      }
    })]) : _vm._e(), _vm._v(" "), _c("div", {
      staticClass: "col-md-4 pl-4"
    }, [_c("label", {
      attrs: {
        "for": "date_visite" + index
      }
    }, [_vm._v("Date visite")]), _vm._v(" "), _c("date-input", {
      staticClass: "input-date",
      attrs: {
        viewonly: (_vm$lock_fields$index3 = _vm.lock_fields[index]) === null || _vm$lock_fields$index3 === void 0 ? void 0 : _vm$lock_fields$index3.lock,
        value: planification.date_visite,
        id: "date_visite" + index
      },
      on: {
        input: function input($event) {
          return _vm.formDataVars2($event, index, "planifications", "date_visite");
        }
      }
    })], 1), _vm._v(" "), _c("div", {
      staticClass: "col-md-4 pl-4"
    }, [_c("label", {
      attrs: {
        "for": "heure_debut" + index
      }
    }, [_vm._v("Heure début")]), _vm._v(" "), _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: planification.heure_debut,
        expression: "planification.heure_debut"
      }],
      staticClass: "form-control",
      attrs: {
        required: "",
        type: "time",
        disabled: (_vm$lock_fields$index4 = _vm.lock_fields[index]) === null || _vm$lock_fields$index4 === void 0 ? void 0 : _vm$lock_fields$index4.lock,
        id: "heure_debut" + index
      },
      domProps: {
        value: planification.heure_debut
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(planification, "heure_debut", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("div", {
      staticClass: "col-md-12 pl-4 mb-2"
    }, [_c("label", {
      attrs: {
        "for": "observation" + index
      }
    }, [_vm._v("Observation")]), _vm._v(" "), (_vm$lock_fields$index5 = _vm.lock_fields[index]) !== null && _vm$lock_fields$index5 !== void 0 && _vm$lock_fields$index5.lock ? _c("div", {
      staticClass: "form-control textarea",
      attrs: {
        disabled: ""
      },
      domProps: {
        innerHTML: _vm._s(planification.observation)
      }
    }) : _c("vue-editor", {
      attrs: {
        id: "observation" + index
      },
      on: {
        "update-value": function updateValue($event) {
          planification.observation = $event[1];
        },
        change: _vm.handleInput
      },
      model: {
        value: planification.observation,
        callback: function callback($$v) {
          _vm.$set(planification, "observation", $$v);
        },
        expression: "planification.observation"
      }
    })], 1), _vm._v(" "), _c("div", {
      staticClass: "col-md-12 pl-4 mt-4"
    }, [_c("div", {
      staticClass: "d-flex align-items-center"
    }, [_c("label", {
      staticClass: "form-label"
    }, [_vm._v("Visite groupée ?")]), _vm._v(" "), _c("div", {
      staticClass: "d-flex"
    }, [_c("div", {
      staticClass: "m-2 d-flex mr-4"
    }, [_c("input", {
      staticClass: "form-check-input",
      attrs: {
        type: "checkbox",
        disabled: (_vm$lock_fields$index6 = _vm.lock_fields[index]) === null || _vm$lock_fields$index6 === void 0 ? void 0 : _vm$lock_fields$index6.lock,
        value: "Oui",
        id: "visite_groupee_oui" + index
      },
      domProps: {
        checked: planification.visite_groupee == "Oui"
      },
      on: {
        change: function change($event) {
          return _vm.checkboxVal($event, "planifications", index);
        }
      }
    }), _vm._v(" "), _c("label", {
      staticClass: "text-nowrap",
      attrs: {
        "for": "visite_groupee_oui" + index
      }
    }, [_vm._v("Oui")])]), _vm._v(" "), _c("div", {
      staticClass: "m-2 d-flex mr-4"
    }, [_c("input", {
      staticClass: "form-check-input",
      attrs: {
        type: "checkbox",
        disabled: (_vm$lock_fields$index7 = _vm.lock_fields[index]) === null || _vm$lock_fields$index7 === void 0 ? void 0 : _vm$lock_fields$index7.lock,
        value: "Non",
        id: "visite_groupee_non" + index
      },
      domProps: {
        checked: planification.visite_groupee == "Non"
      },
      on: {
        change: function change($event) {
          return _vm.checkboxVal($event, "planifications", index);
        }
      }
    }), _vm._v(" "), _c("label", {
      staticClass: "text-nowrap",
      attrs: {
        "for": "visite_groupee_non" + index
      }
    }, [_vm._v("Non")])])])])]), _vm._v(" "), planification.visite_groupee == "Oui" ? _c("div", {
      staticClass: "col-md-12 pl-4 mt-2 gap-4"
    }, [_c("label", [_vm._v("Liste des participants")]), _vm._v(" "), _c("div", {
      staticClass: "row gap-2",
      staticStyle: {
        "padding-left": "0.8rem",
        "padding-right": "0.8rem"
      }
    }, [_c("div", {
      staticClass: "col-9 position-relative p-0"
    }, [_c("vue-tags-input", {
      attrs: {
        "autocomplete-items": _vm.filteredCollaborators,
        tags: _vm.tags,
        placeholder: "Ajouter un collaborateur à notifier"
      },
      on: {
        "tags-changed": _vm.handleAddCollaborator,
        "before-adding-tag": _vm.checkTag,
        "adding-duplicate": function addingDuplicate() {}
      },
      model: {
        value: _vm.tag,
        callback: function callback($$v) {
          _vm.tag = $$v;
        },
        expression: "tag"
      }
    }), _vm._v(" "), (_vm$lock_fields$index8 = _vm.lock_fields[index]) !== null && _vm$lock_fields$index8 !== void 0 && _vm$lock_fields$index8.lock || _vm.users.length == 0 || _vm.isSendingNotification ? _c("div", {
      staticClass: "overlay border",
      "class": {
        "bg-transparent": ((_vm$lock_fields$index9 = _vm.lock_fields[index]) === null || _vm$lock_fields$index9 === void 0 ? void 0 : _vm$lock_fields$index9.lock) && _vm.users.length > 0,
        "bg-white": _vm.users.length == 0
      }
    }, [_vm.users.length == 0 || _vm.isSendingNotification ? [_c("span", {
      staticClass: "spinner-border spinner-border spinner-custom-input"
    }), _vm._v(" "), _vm.isSendingNotification ? _c("span", [_vm._v("Envoie en cours...")]) : _c("span", [_vm._v("Chargement des collaborateurs...")])] : _vm._e()], 2) : _vm._e()], 1), _vm._v(" "), _c("button", {
      staticClass: "btn shadow-md text-white col-3",
      staticStyle: {
        cursor: "pointer",
        background: "#2c3e50",
        "max-width": "max-content"
      },
      attrs: {
        type: "button",
        name: "notify-collaborators",
        disabled: !_vm.collaboratorsToNotify.length || ((_vm$lock_fields$index0 = _vm.lock_fields[index]) === null || _vm$lock_fields$index0 === void 0 ? void 0 : _vm$lock_fields$index0.lock) || _vm.users.length == 0,
        title: "Ajouter"
      },
      on: {
        click: _vm.notifyCollaborators
      }
    }, [!_vm.collaboratorsToNotify.length ? _c("i", {
      staticClass: "icofont-check"
    }) : _c("i", {
      staticClass: "icofont-notification"
    }), _vm._v(" "), _c("span", [_vm._v("Notifier")])])])]) : _vm._e()])])]) : _c("div", {
      key: index,
      staticClass: "card-body"
    }, [_c("div", {
      staticClass: "relook-header",
      on: {
        click: function click($event) {
          return _vm.setCurrentSeen(index);
        }
      }
    }, [_c("div", {
      staticClass: "header-content",
      staticStyle: {
        display: "flex",
        "justify-content": "space-between",
        "align-items": "center"
      }
    }, [_c("h6", {
      attrs: {
        id: "rapport_appel_telephonique" + (index + 1)
      }
    }, [_vm._v("\n                                        Planification  " + _vm._s(index + 1) + "\n                                    ")]), _vm._v(" "), _c("small", {
      staticStyle: {
        margin: "0"
      }
    }, [_vm._v("\n                                        Jour(s) de retard : "), _c("span", {
      staticClass: "seuil"
    }, [_vm._v(_vm._s((_Math$floor2 = Math.floor(planification.par)) !== null && _Math$floor2 !== void 0 ? _Math$floor2 : ""))])]), _vm._v(" "), _c("small", {
      staticStyle: {
        margin: "0"
      }
    }, [_vm._v("\n                                        Etabli par: " + _vm._s(_vm.textTruncate((_planification$user_i3 = planification.user_infos) === null || _planification$user_i3 === void 0 ? void 0 : _planification$user_i3.name) + "(" + _vm.textTruncate((_planification$user_i4 = planification.user_infos) === null || _planification$user_i4 === void 0 ? void 0 : _planification$user_i4.role_sigle) + ")") + "\n                                    ")]), _vm._v(" "), _c("div", {
      staticClass: "row"
    }, [_c("div", {
      staticClass: "col",
      staticStyle: {
        "float": "left"
      }
    }, [_c("small", {
      staticStyle: {
        margin: "0"
      }
    }, [_vm._v("\n                                                le : " + _vm._s((_planification$date_p2 = planification.date_planification) !== null && _planification$date_p2 !== void 0 ? _planification$date_p2 : "#NA") + "\n                                            ")])])]), _vm._v(" "), _c("chevron-down-icon", {
      staticClass: "custom-class",
      staticStyle: {
        "float": "right",
        cursor: "pointer"
      },
      attrs: {
        size: "21"
      }
    })], 1)])])];
  }), _vm._v(" "), _c("br"), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-content-end gap-2 p-3"
  }, [_c("button", {
    staticClass: "btn shadow-md text-white",
    staticStyle: {
      cursor: "pointer",
      background: "#2c3e50",
      "max-width": "max-content"
    },
    attrs: {
      type: "button",
      name: "button",
      title: "Ajouter"
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
  }), _vm._v(" "), _c("span", [_vm._v("Ajouter une planification")])], 1), _vm._v(" "), _vm.planifications.length - 1 > 0 && !((_vm$lock_fields = _vm.lock_fields[_vm.planifications.length - 1]) !== null && _vm$lock_fields !== void 0 && _vm$lock_fields.lock) ? _c("button", {
    staticClass: "btn shadow-md text-white",
    staticStyle: {
      cursor: "pointer",
      background: "#dc0030",
      "max-width": "max-content"
    },
    attrs: {
      type: "button",
      name: "button",
      title: "Supprimer"
    },
    on: {
      click: function click($event) {
        return _vm.remove(_vm.planifications.length - 1);
      }
    }
  }, [_c("trash-icon", {
    staticClass: "custom-class",
    attrs: {
      size: "21"
    }
  }), _vm._v(" "), _c("span")], 1) : _vm._e()]), _vm._v(" "), _c("br"), _vm._v(" "), _c("div", {
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
  }, [_vm._v("\n                        Fermer le tableau\n                    ")])], 2)])]) : _c("div", {
    staticClass: "card card-width-height"
  }, [_c("br"), _vm._v(" "), _c("div", {
    staticClass: "card-header hdc pb-0 pt-2"
  }, [_c("h6", {
    staticClass: "head",
    attrs: {
      id: "dcp-ppo1-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Planification\n                        ")]), _vm._v(" "), _c("div", {
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
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/loan_recovery_iq/FR3.vue?vue&type=style&index=0&id=4e2d6566&lang=css&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/loan_recovery_iq/FR3.vue?vue&type=style&index=0&id=4e2d6566&lang=css&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n*[data-v-4e2d6566] {\r\n    font-family: \"Google sans\";\n}\nlabel[data-v-4e2d6566] {\r\n    height: 10px;\r\n    font-size: 13px;\n}\ninput[data-v-4e2d6566],\r\nselect[data-v-4e2d6566] {\r\n    border-color: #34495e;\r\n    color: #57606f;\r\n    font-size: 13px;\r\n    font-weight: bold;\n}\n.th[data-v-4e2d6566] {\r\n    padding: 4px;\r\n    padding-bottom: 0px;\n}\n.card-width-height[data-v-4e2d6566] {\r\n    width: 100%;\r\n    height: 100%;\n}\n.head[data-v-4e2d6566] {\r\n    color: #f1f2f6;\r\n    font-size: 22px;\n}\n.hdc[data-v-4e2d6566] {\r\n    background-color: #57606f;\n}\n.relook-header[data-v-4e2d6566] {\r\n    color: #000;\r\n    background-color: #f4f3f3;\r\n    padding: 5px;\r\n    border-bottom: 1px solid #b6b8bb;\n}\n.badge-sm[data-v-4e2d6566] {\r\n    display: inline-block;\r\n    width: 15px;\r\n    height: 15px;\r\n    background: rgba(255, 0, 0, 0.882);\r\n    color: white;\r\n    font-size: 12px;\r\n    font-weight: 500;\r\n    border-radius: 100%;\r\n    position: absolute;\r\n    top: -20%;\r\n    left: 55%;\r\n    text-align: center;\n}\ntd[data-v-4e2d6566],\r\np[data-v-4e2d6566] {\r\n    font-size: 13px;\n}\n.relook-header[data-v-4e2d6566] {\r\n    color: #000;\r\n    background-color: #f4f3f3;\r\n    padding: 5px;\r\n    border-bottom: 1px solid #b6b8bb;\n}\ninput[type=\"checkbox\"][data-v-4e2d6566] {\r\n    height: 18px;\r\n    width: 20px;\r\n    margin-right: 5px;\r\n    margin-top: 0;\n}\ninput[type=checkbox][data-v-4e2d6566]:disabled{\r\n    opacity:1\n}\ntd[data-v-4e2d6566]{\r\n    vertical-align: middle;\n}\n.textarea[data-v-4e2d6566] {\r\n    opacity: 1;\r\n    resize: vertical;\r\n    background-color: #e9ecef;\r\n    max-height: 200px;\r\n    min-height: calc(1.5em + 0.75rem + 2px);\r\n    overflow: auto;\n}\n.seuil[data-v-4e2d6566] {\r\n  color: #FD7E14;\r\n  font-weight: 600 !important;\n}\n.vue-tags-input[data-v-4e2d6566] {\r\n    max-width: 100%;\n}\n.vue-tags-input *[data-v-4e2d6566] {\r\n    border-radius: 5px !important;\n}\n.overlay[data-v-4e2d6566] {\r\n    width: 100%;\r\n    height: 100%;\r\n    position: absolute;\r\n    top: 0;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 0.5rem;\r\n    padding: 10px;\r\n    background-color: rgba(255, 255, 255, 0.7);\n}\n.overlay .spinner-custom-input[data-v-4e2d6566] {\r\n    position: relative !important;\r\n    top: -1px;\r\n    right: auto !important;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/loan_recovery_iq/FR3.vue?vue&type=style&index=0&id=4e2d6566&lang=css&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/loan_recovery_iq/FR3.vue?vue&type=style&index=0&id=4e2d6566&lang=css&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FR3_vue_vue_type_style_index_0_id_4e2d6566_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FR3.vue?vue&type=style&index=0&id=4e2d6566&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/loan_recovery_iq/FR3.vue?vue&type=style&index=0&id=4e2d6566&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FR3_vue_vue_type_style_index_0_id_4e2d6566_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FR3_vue_vue_type_style_index_0_id_4e2d6566_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/loan_recovery_iq/FR3.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/loan_recovery_iq/FR3.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FR3_vue_vue_type_template_id_4e2d6566_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FR3.vue?vue&type=template&id=4e2d6566&scoped=true */ "./resources/js/components/loan_recovery_iq/FR3.vue?vue&type=template&id=4e2d6566&scoped=true");
/* harmony import */ var _FR3_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FR3.vue?vue&type=script&lang=js */ "./resources/js/components/loan_recovery_iq/FR3.vue?vue&type=script&lang=js");
/* harmony import */ var _FR3_vue_vue_type_style_index_0_id_4e2d6566_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FR3.vue?vue&type=style&index=0&id=4e2d6566&lang=css&scoped=true */ "./resources/js/components/loan_recovery_iq/FR3.vue?vue&type=style&index=0&id=4e2d6566&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _FR3_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _FR3_vue_vue_type_template_id_4e2d6566_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _FR3_vue_vue_type_template_id_4e2d6566_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "4e2d6566",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/loan_recovery_iq/FR3.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/loan_recovery_iq/FR3.vue?vue&type=script&lang=js":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/loan_recovery_iq/FR3.vue?vue&type=script&lang=js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FR3_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FR3.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/loan_recovery_iq/FR3.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FR3_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/loan_recovery_iq/FR3.vue?vue&type=style&index=0&id=4e2d6566&lang=css&scoped=true":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/loan_recovery_iq/FR3.vue?vue&type=style&index=0&id=4e2d6566&lang=css&scoped=true ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FR3_vue_vue_type_style_index_0_id_4e2d6566_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FR3.vue?vue&type=style&index=0&id=4e2d6566&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/loan_recovery_iq/FR3.vue?vue&type=style&index=0&id=4e2d6566&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/loan_recovery_iq/FR3.vue?vue&type=template&id=4e2d6566&scoped=true":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/loan_recovery_iq/FR3.vue?vue&type=template&id=4e2d6566&scoped=true ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FR3_vue_vue_type_template_id_4e2d6566_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FR3_vue_vue_type_template_id_4e2d6566_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FR3_vue_vue_type_template_id_4e2d6566_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FR3.vue?vue&type=template&id=4e2d6566&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/loan_recovery_iq/FR3.vue?vue&type=template&id=4e2d6566&scoped=true");


/***/ })

}]);