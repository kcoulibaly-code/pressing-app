"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_forms_afg_contre_etude_corporate_NS-AC7_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/contre_etude_corporate/NS-AC7.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/contre_etude_corporate/NS-AC7.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/ContextMenu */ "./resources/js/components/shared/ContextMenu.vue");
/* harmony import */ var _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/ContextMenuItem */ "./resources/js/components/shared/ContextMenuItem.vue");
/* harmony import */ var _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vueform/multiselect/dist/multiselect.vue2 */ "./node_modules/@vueform/multiselect/dist/multiselect.vue2.js");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/auth.service */ "./resources/js/services/auth.service.js");
/* harmony import */ var _services_credit_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/credit.service */ "./resources/js/services/credit.service.js");
/* harmony import */ var _services_connects_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/connects.service */ "./resources/js/services/connects.service.js");
/* harmony import */ var _services_proxy_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/proxy.service */ "./resources/js/services/proxy.service.js");
/* harmony import */ var _johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @johmun/vue-tags-input */ "./node_modules/@johmun/vue-tags-input/dist/vue-tags-input.js");
/* harmony import */ var _johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), c(GeneratorFunctionPrototype, u, GeneratorFunction.displayName = "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
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
  name: "FicheDeLecture",
  components: {
    MoreVerticalIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_10__.MoreVerticalIcon,
    ChevronUpIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_10__.ChevronUpIcon,
    ChevronDownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_10__.ChevronDownIcon,
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_10__.PlusIcon,
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_10__.TrashIcon,
    AirplayIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_10__.AirplayIcon,
    BookOpenIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_10__.BookOpenIcon,
    VueTagsInput: (_johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_8___default())
  },
  props: {
    meta_data: Object,
    tb_name: String,
    tb_display_name: String
  },
  created: function created() {
    var _pub_workflow, _pub_workflow$map;
    var _this$meta_data$dossi = this.meta_data["dossier_credit"],
      stage = _this$meta_data$dossi.pub_workflow_curr_stage,
      pub_workflow = _this$meta_data$dossi.pub_workflow;
    console.log("pub_workflow", pub_workflow);
    console.log("stage", stage);
    var sup_id = (_pub_workflow = pub_workflow[stage + 1]) === null || _pub_workflow === void 0 ? void 0 : _pub_workflow.responsible_id;
    console.log("Sup_id", sup_id);
    this.searchableUsers = (pub_workflow === null || pub_workflow === void 0 || (_pub_workflow$map = pub_workflow.map(function (_ref) {
      var action = _ref.action,
        responsible = _ref.responsible,
        responsible_email = _ref.responsible_email,
        responsible_role = _ref.responsible_role,
        responsible_id = _ref.responsible_id;
      return {
        action: action,
        responsible: responsible,
        responsible_email: responsible_email,
        responsible_role: responsible_role,
        responsible_id: responsible_id
      };
    }) // Map to extract relevant fields
    ) === null || _pub_workflow$map === void 0 || (_pub_workflow$map = _pub_workflow$map.filter(function (_ref2) {
      var responsible_id = _ref2.responsible_id;
      return responsible_id;
    }) // Filter out entries without responsible_id
    ) === null || _pub_workflow$map === void 0 ? void 0 : _pub_workflow$map.reduce(function (acc, curr) {
      // Reduce to remove duplicates
      if (!acc.some(function (item) {
        return item.responsible_id === curr.responsible_id;
      })) {
        acc.push(curr);
      }
      return acc;
    }, [])) || [];
    var roles = ["kggrA5A18KdHk452gEtk", "mq98YcQYj8HXUXca2JMR"];
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
      _this.$modal.hide('fiche_lecture');
    });
  },
  computed: {
    filteredUsers: function filteredUsers() {
      var db = this.users.map(function (el) {
        return _objectSpread({
          text: "".concat(el.name, " ( ").concat(el.role[0].display_name, " )")
        }, el);
      });
      return this.searchEngine({
        db: db,
        query: this.tg,
        keys: ['name', 'email', 'role_name'],
        minimalLength: 3,
        strict: true
      });
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
        return ["kggrA5A18KdHk452gEtk"].includes(el.role_id);
      });
      var ca = this.filteredUsersDefault.find(function (el) {
        return (el === null || el === void 0 ? void 0 : el.role_id) == 'mq98YcQYj8HXUXca2JMR';
      });
      var _this$meta_data$dossi2 = this.meta_data["dossier_credit"],
        stage = _this$meta_data$dossi2.pub_workflow_curr_stage,
        pub_workflow = _this$meta_data$dossi2.pub_workflow;
      var sup_id = (_pub_workflow2 = pub_workflow[stage + 1]) === null || _pub_workflow2 === void 0 ? void 0 : _pub_workflow2.responsible_id;
      var sup = this.filteredUsersDefault.find(function (el) {
        return el.id == sup_id;
      });
      return [caf, ca, sup].filter(function (el) {
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
      ebapisHost: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_3__["default"].host,
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
        fiche_lectures: "",
        notes: []
      },
      fiche_lectures: [{
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
      usersDefault: [],
      searchableUsers: []
    };
  },
  methods: {
    determineSRC: function determineSRC() {
      var src = this.users.filter(function (el) {
        if ((el === null || el === void 0 ? void 0 : el.role_id) == 'tyJLxuAh6F2DJR6e') {
          return el;
        }
      });
      src = src[0];
      return src;
    },
    manageButton: function manageButton(index) {
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
      this.tags[this.fiche_lectures.length] = _toConsumableArray(receivers);
      this.fiche_lectures[0].sender = this.authcheckUsr;
      this.fiche_lectures.push({
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
      this.$set(this.seens, this.fiche_lectures.length - 1, true);
      this.$set(this.isLoding, this.fiche_lectures.length - 1, false);
      this.$set(this.buttonStatus, this.fiche_lectures.length - 1, true);
    },
    removeFiche: function removeFiche(index) {
      this.toDelete = index;
      this.$modal.show("confirm_supp_fiche_lecture", index);
    },
    deleteFiche: function deleteFiche(index) {
      this.fiche_lectures.splice(index, 1);
      this.$modal.hide("confirm_supp_fiche_lecture");
      this.toDelete = '';
    },
    closeModal: function closeModal() {
      this.$modal.hide("confirm_supp_fiche_lecture");
    },
    NotifyUser: function NotifyUser(index) {
      var _this$tags$index,
        _this2 = this;
      if (((_this$tags$index = this.tags[index]) === null || _this$tags$index === void 0 ? void 0 : _this$tags$index.length) > 0) {
        this.$set(this.isLoding, index, true);
        _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["default"].loadUserData().then(function (res) {
          _this2.$axios.post(_this2.ebapisHost + "notifications/api/v1/questions-responses-notifications/", {
            cred_pub_key: _this2.meta_parseable["cred_pub_key"],
            sender: res.data,
            receivers: _this2.tags[index]
          }).then(function (response) {
            _this2.tags = [];
            EventBus.$emit("message-send");
            _this2.$toasted.show("Message envoyé avec succès");
            _this2.$set(_this2.isLoding, index, false);
            _this2.$set(_this2.buttonStatus, index, false);
            _this2.formDataToBeWatched.fiche_lectures[index]["sender"] = res.data;
            _this2.formDataToBeWatched.fiche_lectures[index]["has_notified"] = true;
            _this2.fiche_lectures[index]["has_notified"] = true;
            EventBus.$emit('launch-bulk-save');
          })["catch"](function (error) {
            console.error(error);
          });
        })["catch"](function (err) {
          _this2.loadWithError(err);
        });
      } else {
        this.$toasted.show("Veuillez saisir le collaborateur à notifier");
      }
    },
    initFicheLecture: function initFicheLecture() {
      this.fiche_lecture = [[{
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
      var _this$fiche_lectures$;
      (_this$fiche_lectures$ = this.fiche_lectures[index]) === null || _this$fiche_lectures$ === void 0 || _this$fiche_lectures$.fiche.push({
        question: "",
        reponse: "",
        is_answered: false
      });
      this.handleInput();
    },
    remove: function remove(index, idx) {
      this.fiche_lectures[index].fiche.splice(idx, 1);
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
          if (this.meta_data["dossier_credit"][createdKey]["fiche_lectures"] != "") {
            this.fiche_lectures = this.formDataToBeWatched["fiche_lectures"];
            this.tags = this.fiche_lectures.reduce(function (cum, curr, index) {
              var data = {};
              data[index] = curr.notified_users;
              cum = _objectSpread(_objectSpread({}, cum), data);
              return cum;
            }, {});
            this.initLoding();
            this.initButtonStatus();
          }
        }
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
          console.error(error);
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
    initLoding: function initLoding() {
      var _this3 = this;
      if (this.fiche_lectures != undefined) {
        this.fiche_lectures.forEach(function (element, key) {
          _this3.$set(_this3.isLoding, key, false);
        });
      }
    },
    initButtonStatus: function initButtonStatus() {
      var _this4 = this;
      if (this.fiche_lectures != undefined) {
        this.fiche_lectures.forEach(function (element, key) {
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
      this.formDataToBeWatched.fiche_lectures = this.fiche_lectures;
      this.formDataToBeWatched.sender = this.authcheckUsr;
    },
    handleInput1: function handleInput1(evt, index) {
      this.fiche_lectures[index].receivers = this.tags[index];
      this.fiche_lectures[index].notified_users = this.tags[index];
      this.fiche_lectures[index].sender = this.authcheckUsr;
      this.handleInput();
    },
    setButton: function setButton(evt, index) {
      var _this5 = this;
      this.fiche_lectures.forEach(function (element) {
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
      // this.users = [];
      while (this.users.length > 10) {
        this.users.shift();
      }
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
    searchEngine: function searchEngine(_ref3) {
      var db = _ref3.db,
        query = _ref3.query,
        keys = _ref3.keys,
        _ref3$minimalLength = _ref3.minimalLength,
        minimalLength = _ref3$minimalLength === void 0 ? 3 : _ref3$minimalLength,
        _ref3$strict = _ref3.strict,
        strict = _ref3$strict === void 0 ? false : _ref3$strict;
      if (!query || query.length < minimalLength) {
        return strict ? [] : db; // If query is too short, return empty array or full db based on strict mode
      }
      var cleanQuery = function cleanQuery(query) {
        return query.toLowerCase().normalize('NFD') // decompose accents
        .replace(/[\u0300-\u036f]/g, '') // remove accents
        .replace(/[^a-z0-9\s]/g, '') // remove non-alphanum
        .replace(/\s+/g, ' ') // collapse spaces
        .trim();
      };
      return db.filter(function (item) {
        return keys.some(function (keyPath) {
          var value = lodash__WEBPACK_IMPORTED_MODULE_9___default().get(item, keyPath, ''); // safely get value
          if (typeof value !== 'string') return false; // ensure value is a string
          return cleanQuery(value).includes(cleanQuery(query));
        });
      });
    },
    initItems: function initItems() {
      var _this7 = this;
      if (this.tg.trim().length < 3) return;
      clearTimeout(this.debounce);
      this.debounce = setTimeout(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _this7$meta_data2;
        var foundUsers, nonFetchedUsers, _this7$meta_data, _response$data, response, _data, url, data;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _this7.searchUser = true;
              _context.prev = 1;
              foundUsers = _this7.searchEngine({
                db: _this7.searchableUsers,
                query: _this7.tg,
                keys: ['responsible', 'responsible_email', 'action'],
                minimalLength: 3,
                strict: true
              });
              nonFetchedUsers = foundUsers.filter(function (user) {
                return !_this7.users.some(function (u) {
                  return u.id === user.responsible_id;
                });
              }).map(function (user) {
                return {
                  id: user.responsible_id,
                  name: user.responsible,
                  email: user.responsible_email,
                  strict: true
                };
              });
              if (!(nonFetchedUsers.length === 0)) {
                _context.next = 9;
                break;
              }
              _this7.searchUser = false;
              return _context.abrupt("return");
            case 9:
              _context.next = 11;
              return _this7.$axios.post("/api/fetch_users_info", {
                cred_pub_key: (_this7$meta_data = _this7.meta_data) === null || _this7$meta_data === void 0 ? void 0 : _this7$meta_data.cred_pub_key,
                filters: nonFetchedUsers,
                strict: true
              });
            case 11:
              response = _context.sent;
              _data = ((_response$data = response.data) === null || _response$data === void 0 ? void 0 : _response$data.map(function (user) {
                var _user$role, _user$role2;
                return {
                  contact_whatsap: user.contact_whatsap || "",
                  email: user.email || "",
                  id: user.id || user.user_id,
                  name: user.name,
                  role: user.role,
                  role_id: user.role_id || ((_user$role = user.role) === null || _user$role === void 0 || (_user$role = _user$role[0]) === null || _user$role === void 0 ? void 0 : _user$role.id),
                  role_name: ((_user$role2 = user.role) === null || _user$role2 === void 0 || (_user$role2 = _user$role2[0]) === null || _user$role2 === void 0 ? void 0 : _user$role2.display_name) || user.role_name || ""
                };
              })) || [];
              _this7.users = [].concat(_toConsumableArray(_this7.users), _toConsumableArray(_data));
              _this7.searchUser = false;
              if (_this7.users.length > 0) {
                _this7.$toasted.show("Utilisateurs trouvés", {
                  duration: 5000
                });
              } else {
                _this7.$toasted.show("Aucun utilisateur trouvé", {
                  duration: 5000
                });
              }
              return _context.abrupt("return");
            case 17:
              _context.next = 23;
              break;
            case 19:
              _context.prev = 19;
              _context.t0 = _context["catch"](1);
              console.error("Error fetching users:", _context.t0);
              _this7.$toasted.show("Erreur lors de la recherche des utilisateurs", {
                duration: 5000
              });
              // Continue la reccherche avec l'ancienne méthode
            case 23:
              url = _this7.ebapisHost + "creditbuilder/api/v1/load-all-doc-users/";
              data = {
                "search": _this7.tg,
                "limit": 10,
                "cred_pub_key": (_this7$meta_data2 = _this7.meta_data) === null || _this7$meta_data2 === void 0 ? void 0 : _this7$meta_data2.cred_pub_key
              };
              _this7.$axios.post(url, data).then(function (response) {
                var data = response.data.data;
                var message = response.data.message;
                if (!['', null, undefined].includes(data) && data.length > 0) {
                  _this7.users = data;
                } else {
                  _this7.users = [];
                  _this7.$toasted.show(message, {
                    duration: 5000
                  });
                }
                _this7.searchUser = false;
              })["catch"](function (error) {
                _this7.searchUser = false;
                console.warn('Oh. Something went wrong');
              });
            case 26:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[1, 19]]);
      })), 800);
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
      if (this.fiche_lectures[0].receivers == "") {
        this.fiche_lectures[0].receivers = this.defaultActors;
        this.fiche_lectures[0].notified_users = this.defaultActors;
        this.tags[0] = this.defaultActors;
        this.fiche_lectures[0].sender = this.authcheckUsr;
        this.formDataToBeWatched.fiche_lectures = this.fiche_lectures;
      }
    },
    tg: 'initItems'
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/contre_etude_corporate/NS-AC7.vue?vue&type=template&id=14cdd7a1&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/contre_etude_corporate/NS-AC7.vue?vue&type=template&id=14cdd7a1&scoped=true ***!
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
  }, [_vm._v("\n              " + _vm._s(_vm.tb_display_name) + " : Fiche de lecture\n            ")]), _vm._v(" "), _c("div", {
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
  })], 1)])])]), _vm._v(" "), _vm._l(_vm.fiche_lectures, function (ficheLecture, index) {
    return _c("div", {
      key: index.toString() + "fiche_lecture",
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
    })], 1), _vm._v("\n                  Fiche de lecture " + _vm._s(index + 1) + "\n                ")]), _vm._v(" "), _c("chevron-up-icon", {
      staticClass: "custom-class",
      staticStyle: {
        "float": "right",
        cursor: "pointer"
      },
      attrs: {
        size: "21"
      }
    })], 1)])]), _vm._v(" "), _vm._l(ficheLecture.fiche, function (elt, index_) {
      return _c("div", {
        key: index_
      }, [_c("div", {
        staticClass: "row mt-2"
      }, [_c("div", {
        staticClass: "col-1"
      }, [_vm._v("Q" + _vm._s(index_ + 1))]), _vm._v(" "), _c("div", {
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
          disabled: elt.is_answered || ficheLecture.has_notified,
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
      })]), _vm._v(" "), index_ == 0 && !ficheLecture.has_notified ? _c("div", {
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
      }, [_vm._v("R" + _vm._s(index_ + 1))]), _vm._v(" "), _c("div", {
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
    }), _vm._v(" "), !ficheLecture.has_notified ? _c("div", {
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
    })], 1), _vm._v("\n                    Fiche de lecture " + _vm._s(index + 1) + "\n                  ")]), _vm._v(" "), _c("chevron-down-icon", {
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
        value: _vm.fiche_lectures.length - 1 == index,
        expression: "fiche_lectures.length - 1 == index"
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
    }, [_vm._v("\n              Ajouter une nouvelle fiche\n            ")])]), _vm._v(" "), _c("hr", {
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
  }, [_vm._v("\n        Fermer le tableau\n      ")])], 2) : _c("div", {
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
  }, [_vm._v("\n              " + _vm._s(_vm.tb_display_name) + " : Fiche de lecture\n            ")]), _vm._v(" "), _c("div", {
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
      name: "confirm_supp_fiche_lecture",
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

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/contre_etude_corporate/NS-AC7.vue?vue&type=style&index=0&id=14cdd7a1&lang=css&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/contre_etude_corporate/NS-AC7.vue?vue&type=style&index=0&id=14cdd7a1&lang=css&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\ninput[data-v-14cdd7a1] {\r\n  /*border: 1px solid red;*/\n}\n*[data-v-14cdd7a1] {\r\n  font-family: \"Google sans\";\n}\nlabel[data-v-14cdd7a1] {\r\n  height: 10px;\r\n  font-size: 13px;\n}\ninput[data-v-14cdd7a1],\r\nselect[data-v-14cdd7a1] {\r\n  height: 35px;\r\n  border-color: #34495e;\r\n  color: #57606f;\r\n  font-size: 13px;\r\n  font-weight: bold;\n}\n.card-width-height[data-v-14cdd7a1] {\r\n  width: 100%;\r\n  height: 100%;\n}\n.head[data-v-14cdd7a1] {\r\n  color: #f1f2f6;\r\n  font-size: 22px;\n}\n.hdc[data-v-14cdd7a1] {\r\n  background-color: #57606f;\n}\n.badge-sm[data-v-14cdd7a1] {\r\n  display: inline-block;\r\n  width: 15px;\r\n  height: 15px;\r\n  background: rgba(255, 0, 0, 0.882);\r\n  color: white;\r\n  font-size: 12px;\r\n  font-weight: 500;\r\n  border-radius: 100%;\r\n  position: absolute;\r\n  top: -20%;\r\n  left: 55%;\r\n  text-align: center;\n}\n.relook-header[data-v-14cdd7a1] {\r\n  color: #000;\r\n  background-color: #f4f3f3;\r\n  padding: 5px;\r\n  border-bottom: 1px solid #b6b8bb;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/contre_etude_corporate/NS-AC7.vue?vue&type=style&index=0&id=14cdd7a1&lang=css&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/contre_etude_corporate/NS-AC7.vue?vue&type=style&index=0&id=14cdd7a1&lang=css&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NS_AC7_vue_vue_type_style_index_0_id_14cdd7a1_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NS-AC7.vue?vue&type=style&index=0&id=14cdd7a1&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/contre_etude_corporate/NS-AC7.vue?vue&type=style&index=0&id=14cdd7a1&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NS_AC7_vue_vue_type_style_index_0_id_14cdd7a1_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NS_AC7_vue_vue_type_style_index_0_id_14cdd7a1_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/forms/afg/contre_etude_corporate/NS-AC7.vue":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/forms/afg/contre_etude_corporate/NS-AC7.vue ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NS_AC7_vue_vue_type_template_id_14cdd7a1_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NS-AC7.vue?vue&type=template&id=14cdd7a1&scoped=true */ "./resources/js/components/forms/afg/contre_etude_corporate/NS-AC7.vue?vue&type=template&id=14cdd7a1&scoped=true");
/* harmony import */ var _NS_AC7_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NS-AC7.vue?vue&type=script&lang=js */ "./resources/js/components/forms/afg/contre_etude_corporate/NS-AC7.vue?vue&type=script&lang=js");
/* harmony import */ var _NS_AC7_vue_vue_type_style_index_0_id_14cdd7a1_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NS-AC7.vue?vue&type=style&index=0&id=14cdd7a1&lang=css&scoped=true */ "./resources/js/components/forms/afg/contre_etude_corporate/NS-AC7.vue?vue&type=style&index=0&id=14cdd7a1&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _NS_AC7_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _NS_AC7_vue_vue_type_template_id_14cdd7a1_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _NS_AC7_vue_vue_type_template_id_14cdd7a1_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "14cdd7a1",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/forms/afg/contre_etude_corporate/NS-AC7.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/forms/afg/contre_etude_corporate/NS-AC7.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/contre_etude_corporate/NS-AC7.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NS_AC7_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NS-AC7.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/contre_etude_corporate/NS-AC7.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NS_AC7_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/forms/afg/contre_etude_corporate/NS-AC7.vue?vue&type=style&index=0&id=14cdd7a1&lang=css&scoped=true":
/*!*************************************************************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/contre_etude_corporate/NS-AC7.vue?vue&type=style&index=0&id=14cdd7a1&lang=css&scoped=true ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NS_AC7_vue_vue_type_style_index_0_id_14cdd7a1_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NS-AC7.vue?vue&type=style&index=0&id=14cdd7a1&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/contre_etude_corporate/NS-AC7.vue?vue&type=style&index=0&id=14cdd7a1&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/forms/afg/contre_etude_corporate/NS-AC7.vue?vue&type=template&id=14cdd7a1&scoped=true":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/contre_etude_corporate/NS-AC7.vue?vue&type=template&id=14cdd7a1&scoped=true ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NS_AC7_vue_vue_type_template_id_14cdd7a1_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NS_AC7_vue_vue_type_template_id_14cdd7a1_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NS_AC7_vue_vue_type_template_id_14cdd7a1_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NS-AC7.vue?vue&type=template&id=14cdd7a1&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/contre_etude_corporate/NS-AC7.vue?vue&type=template&id=14cdd7a1&scoped=true");


/***/ })

}]);