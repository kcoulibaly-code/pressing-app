"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_loan_recovery_iq_FR7_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/loan_recovery_iq/FR7.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/loan_recovery_iq/FR7.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vueform/multiselect/dist/multiselect.vue2 */ "./node_modules/@vueform/multiselect/dist/multiselect.vue2.js");
/* harmony import */ var _services_user_manager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user_manager.js */ "./resources/js/services/user_manager.js");
/* harmony import */ var _services_connects_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/connects.service */ "./resources/js/services/connects.service.js");
/* harmony import */ var _services_proxy_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/proxy.service */ "./resources/js/services/proxy.service.js");
/* harmony import */ var _helpers_indexedDB__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/indexedDB */ "./resources/js/helpers/indexedDB.js");
/* harmony import */ var _helpers_indexedDB__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_helpers_indexedDB__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _recovery_component_QuestionHistory_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./recovery_component/QuestionHistory.vue */ "./resources/js/components/loan_recovery_iq/recovery_component/QuestionHistory.vue");
/* harmony import */ var _recovery_component_QuestionHistoryV2_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./recovery_component/QuestionHistoryV2.vue */ "./resources/js/components/loan_recovery_iq/recovery_component/QuestionHistoryV2.vue");
/* harmony import */ var _services_recouvrement_service_teams_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/recouvrement.service_teams.js */ "./resources/js/services/recouvrement.service_teams.js");
/* harmony import */ var _johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @johmun/vue-tags-input */ "./node_modules/@johmun/vue-tags-input/dist/vue-tags-input.js");
/* harmony import */ var _johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _recovery_component_PhoneInput_vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./recovery_component/PhoneInput.vue */ "./resources/js/components/loan_recovery_iq/recovery_component/PhoneInput.vue");
/* provided dependency */ var process = __webpack_require__(/*! process/browser.js */ "./node_modules/process/browser.js");
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
    par: null,
    user_id: 0,
    user_infos: null,
    date_planification: null,
    phase: null,
    checkListVisiteClient: [{
      type_doc: "CLIENT / CAUTION",
      name: "Caution visité ?",
      value: "",
      checked: false,
      disabled: false,
      files: 0,
      template: "",
      comment: "",
      slug: "caution_visite"
    }, {
      type_doc: "CLIENT / CAUTION",
      name: "Garanties utilisables",
      value: "",
      checked: false,
      disabled: false,
      files: 0,
      template: "",
      comment: "",
      slug: "garanties_utilisable"
    }, {
      type_doc: "CLIENT / CAUTION",
      name: "Transmission par mail de la lettre d'information à la caution",
      value: "",
      checked: false,
      disabled: false,
      files: 0,
      template: "",
      comment: "",
      slug: "transmission_lettre_information_caution"
    }
    // {
    //     type_doc: "CLIENT / CAUTION",
    //     name: "Promesse du client", // client
    //     value: "",
    //     checked: false,
    //     disabled: false,
    //     files: 0,
    //     template: "",
    //     comment: "",
    //     is_client:true,
    //     is_caution:false,
    //     slug: "promesse_du_client"
    // }
    ],
    date_visite: "",
    heure_debut: "",
    heure_fin: "",
    type_visite: "",
    observation: "",
    visite_groupee: "",
    collaborateurs: [{
      user_id: "",
      user_name: "",
      user_email: "",
      role_name: "",
      is_editing: true
    }],
    lieu_visite: "",
    garantites_utilisable: [],
    modes_paiements: "",
    resultats: "",
    object_visites: "",
    lieux_visite: "",
    autres_garanties_used: "",
    autres_resultats: "",
    autres_object_visites: "",
    autres_lieux_visite: "",
    numero_cheque_telephone: "",
    cheque: "",
    motif_impaye: "",
    montant_paye: "",
    existance_activite: "",
    etat_activite: "",
    promesses: [{
      montant: 0,
      echeance: "",
      commentaire: "",
      promesseTenu: null
    }]
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Planification",
  display: "Planification",
  components: {
    MoreVerticalIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_12__.MoreVerticalIcon,
    ChevronUpIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_12__.ChevronUpIcon,
    ChevronDownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_12__.ChevronDownIcon,
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_12__.PlusIcon,
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_12__.TrashIcon,
    AirplayIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_12__.AirplayIcon,
    Multiselect: _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_1__["default"],
    Questionhistory: _recovery_component_QuestionHistory_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    QuestionhistoryV2: _recovery_component_QuestionHistoryV2_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    VueTagsInput: (_johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_10___default()),
    PhoneInput: _recovery_component_PhoneInput_vue__WEBPACK_IMPORTED_MODULE_11__["default"]
  },
  computed: {
    phases: function phases() {
      var _this$meta_data;
      return _services_recouvrement_service_teams_js__WEBPACK_IMPORTED_MODULE_9__["default"].getPhases(this === null || this === void 0 ? void 0 : this.authcheckUsr, (_this$meta_data = this.meta_data) === null || _this$meta_data === void 0 || (_this$meta_data = _this$meta_data.dossier_credit_recovery) === null || _this$meta_data === void 0 ? void 0 : _this$meta_data.dureeimp);
    },
    filteredCollaborators: function filteredCollaborators() {
      var _this$users$filter,
        _this$users,
        _this = this;
      var collaborators = (_this$users$filter = (_this$users = this.users) === null || _this$users === void 0 ? void 0 : _this$users.filter(function (user) {
        var _this$authcheckUsr;
        return user.id != ((_this$authcheckUsr = _this.authcheckUsr) === null || _this$authcheckUsr === void 0 ? void 0 : _this$authcheckUsr.user_id);
      })) !== null && _this$users$filter !== void 0 ? _this$users$filter : [];
      collaborators = collaborators.filter(function (user) {
        var _this$rapport_de_visi;
        return !((_this$rapport_de_visi = _this.rapport_de_visite[_this.currentSeen]) !== null && _this$rapport_de_visi !== void 0 && (_this$rapport_de_visi = _this$rapport_de_visi.collaborateurs) !== null && _this$rapport_de_visi !== void 0 && _this$rapport_de_visi.some(function (c) {
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
              _this2.authcheckUsr = _this2.UserManager.getAuthUser();
            }
            EventBus.$on("user_manager_updated", function () {
              _this2.users = _this2.UserManager.getUsers();
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
    var _this3 = this,
      _this$rapport_de_visi2;
    this.loadRetrieved();
    this.loadTbAttrs();
    this.tableClosedOrOpened();
    EventBus.$on("created-extra-file-template", function (data) {
      _this3.rapport_de_visite.forEach(function (rapport, index) {
        rapport.checkListVisiteClient.forEach(function (element, index_chek_list) {
          var _this3$meta_data, _this3$rapport_de_vis, _data$template;
          // Rapport visite {(*)}check_list
          // const current_user_id = this.rapport_appel_telephonique[index]?.user_id
          var identity = ((_this3$meta_data = _this3.meta_data) === null || _this3$meta_data === void 0 || (_this3$meta_data = _this3$meta_data.dossier_credit) === null || _this3$meta_data === void 0 ? void 0 : _this3$meta_data.cred_pub_key) + "_" + (rapport === null || rapport === void 0 ? void 0 : rapport.user_id) + "_" + index;
          var template_name = "Rapport visite_caution -check_list_" + identity + "_" + ((_this3$rapport_de_vis = _this3.rapport_de_visite[index].checkListVisiteClient[index_chek_list]) === null || _this3$rapport_de_vis === void 0 ? void 0 : _this3$rapport_de_vis.name);
          if (template_name == (data === null || data === void 0 || (_data$template = data.template) === null || _data$template === void 0 ? void 0 : _data$template.name)) {
            var _data$template2, _data$template3, _data$template4;
            _this3.rapport_de_visite[index].checkListVisiteClient[index_chek_list]["template"] = {
              id: data === null || data === void 0 || (_data$template2 = data.template) === null || _data$template2 === void 0 ? void 0 : _data$template2.id,
              name: data === null || data === void 0 || (_data$template3 = data.template) === null || _data$template3 === void 0 ? void 0 : _data$template3.name,
              slug: data === null || data === void 0 || (_data$template4 = data.template) === null || _data$template4 === void 0 ? void 0 : _data$template4.slug
            };
            _this3.handleInput();
          }
        });
      });
    });
    EventBus.$on("updated-extra-file-upload", function (data) {
      _this3.getFiles();
    });
    EventBus.$on("value-updated", function (data) {
      _this3.runLockFields();
    });
    EventBus.$on("openTbRecovery", function (data) {
      if (![null, undefined, ""].includes(data.key)) {
        var _this3$meta_data2;
        if (((_this3$meta_data2 = _this3.meta_data) === null || _this3$meta_data2 === void 0 || (_this3$meta_data2 = _this3$meta_data2.dossier_credit) === null || _this3$meta_data2 === void 0 ? void 0 : _this3$meta_data2[data.key]) != undefined) {
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
    EventBus.$on("updatePromesse", function (data) {
      if (data['tb16507'].length > 0) {
        _this3.rapport_de_visite.forEach(function (el, idx) {
          el.promesses = data['tb16507'][idx][promesses];
        });
      }
    });
    this.getFiles();
    this.currentSeen = ((_this$rapport_de_visi2 = this.rapport_de_visite.length) !== null && _this$rapport_de_visi2 !== void 0 ? _this$rapport_de_visi2 : 0) - 1;
    this.fixCkEditorBug();
    this.setDefaultPhase();
  },
  data: function data() {
    var vm = this;
    return {
      ebapisHost: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__["default"].host,
      files: [],
      connectsHost: _services_connects_service__WEBPACK_IMPORTED_MODULE_3__["default"].loadablehost(),
      authcheck: false,
      authcheckUsr: null,
      authcheckStatus: null,
      watchInPause: false,
      initLoad: true,
      seen: true,
      seen1: true,
      seen2: true,
      seen3: true,
      tag: "",
      tags: [],
      currentSeen: 0,
      isLoading: false,
      UserManager: _services_user_manager_js__WEBPACK_IMPORTED_MODULE_2__["default"],
      users: [],
      meta_parseable: {
        cred_pub_key: this.meta_data["cred_pub_key"],
        tb_name: this.tb_name
      },
      formDataToBeWatched: {
        notes: [],
        rapport_de_visite: []
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
      promessesOptions: [],
      garanties_used: [{
        label: "Dépôt garantie",
        value: "Dépôt garantie"
      }, {
        label: "PEP",
        value: "PEP"
      }, {
        label: "Gage véhicule/matériel",
        value: "Gage véhicule/matériel"
      }, {
        label: "Hypothèque",
        value: "Hypothèque"
      }, {
        label: "CRSD",
        value: "CRSD"
      }, {
        label: "Autres garanties",
        value: "Autre garanties"
      }],
      modes_paiements: [{
        label: "Chèque",
        value: "Chèque"
      }, {
        label: "Mobile Money",
        value: "Mobile Money"
      }, {
        label: "Espèce",
        value: "Espèce"
      }, {
        label: "Fastpay",
        value: "Fastpay"
      }],
      resultats: [{
        label: "Partiellement payé",
        value: "Partiellement payé"
      }, {
        label: "Totalement payé",
        value: "Totalement payé"
      }, {
        label: "Non payé",
        value: "Non payé"
      }, {
        label: "Engagement pris",
        value: "Engagement pris"
      }, {
        label: "Autre",
        value: "autres"
      }],
      object_visites: [{
        label: "Discuter du paiement du client dont il est caution",
        value: "Discuter du paiement du client dont il est caution"
      }, {
        label: "Suivi de l’engagement pris",
        value: "Suivi de l’engagement pris"
      }, {
        label: "Négociation d’un protocole",
        value: "Négociation d’un protocole"
      }, {
        label: "Autre",
        value: "autres"
      }],
      lieux_visite: [{
        label: "Site de vente principal",
        value: "site de vente principal"
      }, {
        label: "Site de vente secondaire",
        value: "site de vente secondaire"
      }, {
        label: "Site de vente tertiaire",
        value: "site de vente tertiaire"
      }, {
        label: "Site de vente et bureau ",
        value: "site de vente et bureau"
      }, {
        label: "Domicile",
        value: "domicile"
      }, {
        label: "Bureau",
        value: "bureau"
      }, {
        label: "Autre",
        value: "autres"
      }],
      rapport_de_visite: [tableTemplate()],
      //
      // checkListVisiteClient: "",
      //     lieu: "",
      //     date_visite: "",
      //     heure_debut: "",
      //     heure_fin: "",
      //     type_visite: "",
      //     observation: "",
      //     collaborateurs: "",
      //     garanties_used: "",
      //     modes_paiements: "",
      //     resultats: "",
      //     object_visites: "",
      //     lieux_visite: "",
      //     visite_groupee: "",
      //
      lock_fields: [{
        lock: false
      }],
      first: false,
      newTableItemIdx: new Set()
    };
  },
  methods: {
    copy: function copy(msg, idx, isLock) {
      if (isLock) {
        return;
      }
      var last = this.rapport_de_visite[idx].promesses.length - 1;
      this.rapport_de_visite[idx].promesses[last] = msg;
      this.handleInput();
    },
    updateGarantit: function updateGarantit(event, obj, key, index) {
      var arr = _toConsumableArray(this[obj][index][key]);
      if (event.target.checked) {
        arr.push(event.target.value);
      } else {
        arr = arr.filter(function (el) {
          return el != event.target.value;
        });
      }
      this[obj][index][key] = arr;
      this.handleInput();
    },
    formDataPromesse: function formDataPromesse(event) {
      if (event.origine != "Rapport de visite") {
        EventBus.$emit("updatePromesse", _objectSpread(_objectSpread({}, event), {}, {
          "tb": "Rapport d'appel caution"
        }));
        return;
      }
      this.rapport_de_visite[event.index].promesses[event.nestedId].promesseTenu = event.outcome;
      this.handleInput();
    },
    formDataVars3: function formDataVars3(event, index, key, indexCol) {
      this.rapport_de_visite[index].promesses[indexCol].echeance = event[1];
      this.handleInput();
    },
    datePlanification: function datePlanification() {
      moment__WEBPACK_IMPORTED_MODULE_6___default().locale('fr');

      // Récupérer la date courante et la formater
      var currentDate = moment__WEBPACK_IMPORTED_MODULE_6___default()().format("DD/MM/YYYY [à] HH:mm:ss");
      return currentDate;
    },
    loadMsgLetterByPAR: function loadMsgLetterByPAR() {
      var par = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var cste = '(Si nécessaire)';
      if (par == null) {
        return "de la première lettre de relance " + cste;
      } else if (par >= 1 && par <= 7) {
        return "de la première lettre de relance " + cste;
      } else if (par >= 8 && par <= 20) {
        return "de la deuxième lettre de relance " + cste;
      } else if (par >= 21 && par <= 45) {
        message = " de la lettre d'information à la caution agence " + cste;
      } else if (par >= 46 && par <= 60) {
        message = "de la troisième lettre de relance CDR " + cste;
      } else if (par >= 61 && par <= 90) {
        message = "de le lettre de presentation de bien à gage ou lettre d'information à la caution CDR " + cste;
      } else {
        return "uploader de l'acte " + cste;
      }

      // return "première lettre de première lettre de relance (Si nécessaire)"
    },
    handleDoubleClickOrClick: function handleDoubleClickOrClick(event, index, index_checkList, lock_file) {
      var _this$rapport_de_visi3, _this$meta_data2, _this$rapport_de_visi4;
      EventBus.$emit("open-extra-file-explorer");
      var current_user_id = (_this$rapport_de_visi3 = this.rapport_de_visite[index]) === null || _this$rapport_de_visi3 === void 0 ? void 0 : _this$rapport_de_visi3.user_id;
      var identity = ((_this$meta_data2 = this.meta_data) === null || _this$meta_data2 === void 0 || (_this$meta_data2 = _this$meta_data2.dossier_credit) === null || _this$meta_data2 === void 0 ? void 0 : _this$meta_data2.cred_pub_key) + "_" + current_user_id + "_" + index;
      var fullName = "Rapport visite_caution {(*)}check_list_" + identity + "_" + ((_this$rapport_de_visi4 = this.rapport_de_visite[index].checkListVisiteClient[index_checkList]) === null || _this$rapport_de_visi4 === void 0 ? void 0 : _this$rapport_de_visi4.name);
      // name:"Contrat {(*)}envoie_contrats_" +index +"_" +this.$route.params.templateId,
      setTimeout(function () {
        EventBus.$emit("data-extra-file-explorer", {
          name: fullName,
          view: lock_file
        });
      }, 500);
    },
    getFiles: function getFiles() {
      var _this4 = this;
      _services_proxy_service__WEBPACK_IMPORTED_MODULE_4__["default"].proxyEbapis({
        url: this.connectsHost + "api/get-files",
        method: "POST",
        data: {
          file_identity: this.meta_data["dossier_credit"].cred_pub_key
        }
      })
      //this.$axios.post(this.connectsHost + 'api/get-files', { file_identity: this.meta_data["dossier_credit"].cred_pub_key })
      .then(function (res) {
        var _res$data$data, _res$data$data2;
        res.data = JSON.parse(res.data);
        if (((_res$data$data = res.data.data) === null || _res$data$data === void 0 ? void 0 : _res$data$data.length) > 0 || ((_res$data$data2 = res.data.data) === null || _res$data$data2 === void 0 ? void 0 : _res$data$data2.length) != null) {
          _this4.files = res.data.data;
          _this4.rapport_de_visite.forEach(function (rapport, index_rapport) {
            rapport.checkListVisiteClient.forEach(function (element, index) {
              var count = 0;
              _this4.files.forEach(function (file) {
                var _element$template;
                if ((file === null || file === void 0 ? void 0 : file.extra_file_template_id) != null && (element === null || element === void 0 || (_element$template = element.template) === null || _element$template === void 0 ? void 0 : _element$template.id) == (file === null || file === void 0 ? void 0 : file.extra_file_template_id)) {
                  count++;
                }
              });
              _this4.rapport_de_visite[index_rapport].checkListVisiteClient[index]["files"] = count;
              _this4.handleInput();
            });
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
    formDataVars: function formDataVars(event) {
      this.formDataToBeWatched[event[0]] = event[1];
      this.handleInput();
    },
    formDataVars2: function formDataVars2(event, index, obj, key) {
      this[obj][index][key] = event[1];
      this.handleInput();
    },
    addMore: function addMore() {
      var isCaution = this.dureeimp !== undefined && this.dureeimp !== null && (this.dureeimp >= 21 && this.dureeimp <= 45 || this.dureeimp >= 61 && this.dureeimp <= 90);
      var newLength = this.rapport_de_visite.push(tableTemplate());
      this.newTableItemIdx.add(newLength - 1);
      this.runLockFields();
      this.handleInput();
      this.currentSeen = this.rapport_de_visite.length - 1;
      this.setDefaultPhase();
    },
    setDefaultPhase: function setDefaultPhase() {
      var _this$authcheckUsr2,
        _this5 = this;
      if (((_this$authcheckUsr2 = this.authcheckUsr) === null || _this$authcheckUsr2 === void 0 ? void 0 : _this$authcheckUsr2.user_id) == undefined) {
        setTimeout(function () {
          _this5.setDefaultPhase();
        }, 2000);
      } else {
        var current = sessionStorage.getItem('actual-phase');
        this.rapport_de_visite.forEach(function (el, tableId) {
          if (el.phase == null) {
            el.phase = _this5.phases.find(function (p) {
              return p.phase == current;
            });
          }
        });
        this.handleInput();
      }
    },
    remove: function remove(index) {
      this.rapport_de_visite.splice(index, 1);
      this.handleInput();
      this.currentSeen = this.rapport_de_visite.length - 1;
    },
    addMoreCol: function addMoreCol(index) {
      this.rapport_de_visite[index].collaborateurs.push({
        user_id: "",
        user_name: "",
        user_email: "",
        role_name: "",
        is_editing: true
      });
      this.handleInput();
    },
    addMoreColPromesse: function addMoreColPromesse(index) {
      this.rapport_de_visite[index].promesses.push({
        created_at: Date.now(),
        montant: 0,
        echeance: "",
        commentaire: "",
        comingfrom: this.tb_name,
        promesseTenu: null,
        user_id: this.authcheckUsr.user_id,
        id: this.rapport_de_visite[index].promesses.length
      });
      this.handleInput();
    },
    removeColPromesse: function removeColPromesse(index, indexCol) {
      this.rapport_de_visite[index].promesses.splice(indexCol, 1);
      this.handleInput();
    },
    addMoreCheckList: function addMoreCheckList(index) {
      this.rapport_de_visite[index].checkListVisiteClient.push({
        type_doc: "",
        name: "",
        value: "",
        checked: true,
        disabled: false,
        files: 0,
        template: "",
        comment: ""
      });
      this.handleInput();
    },
    removeColCheckList: function removeColCheckList(index, indexCol) {
      // this.rapport_de_visite[index].checkListVisiteClient.splice(
      //     indexCol,
      //     1
      // );
      // this.handleInput();

      this.handleDeleteFile("rapport_de_visite", index, "checkListVisiteClient", indexCol);
      if (this.rapport_de_visite[index].checkListVisiteClient[indexCol]["files"] == 0) {
        this.rapport_de_visite[index].checkListVisiteClient.splice(indexCol, 1);
        this.handleInput();
      }
    },
    removeCol: function removeCol(index, indexCol) {
      this.rapport_de_visite[index].collaborateurs.splice(indexCol, 1);
      this.handleInput();
    },
    changeEditing: function changeEditing(index, indexCol) {
      var _this$lock_fields$ind;
      if ((_this$lock_fields$ind = this.lock_fields[index]) !== null && _this$lock_fields$ind !== void 0 && _this$lock_fields$ind.lock) return;
      this.rapport_de_visite[index].collaborateurs[indexCol]["is_editing"] = true;
      this.handleInput();
    },
    selectedOptionUser: function selectedOptionUser(value, obj, $event) {
      this.rapport_de_visite[$event.$el.dataset.index]["collaborateurs"][$event.$el.dataset.index_col]["user_id"] = obj.id;
      this.rapport_de_visite[$event.$el.dataset.index]["collaborateurs"][$event.$el.dataset.index_col]["user_name"] = obj.name;
      this.rapport_de_visite[$event.$el.dataset.index]["collaborateurs"][$event.$el.dataset.index_col]["user_email"] = obj.email;
      this.rapport_de_visite[$event.$el.dataset.index]["collaborateurs"][$event.$el.dataset.index_col]["role_name"] = obj.role_name;
      this.rapport_de_visite[$event.$el.dataset.index]["collaborateurs"][$event.$el.dataset.index_col]["is_editing"] = false;
      this.handleInput();
    },
    setCurrentSeen: function setCurrentSeen(index) {
      this.currentSeen = index;
    },
    checkboxVal: function checkboxVal(event, obj, key, index) {
      if (event.target.checked) {
        this[obj][index][key] = event.target.value;
      } else {
        this[obj][index][key] = "";
      }
      this.handleInput();
    },
    selectVal: function selectVal(event, obj, key, index) {
      this[obj][index][key] = event.target.value;
      if (key == 'resultats') {
        this[obj][index]["modes_paiements"] = "";
        this[obj][index]["numero_cheque_telephone"] = "";
        this[obj][index]["motif_impaye"] = "";
        this[obj][index]["montant_paye"] = "";
        this[obj][index]["autres_resultats"] = "";
      } else if (key == 'modes_paiements') {
        this[obj][index]["numero_cheque_telephone"] = "";
        this[obj][index]["cheque"] = "";
      }
      this.handleInput();
    },
    checkboxValCheckList: function checkboxValCheckList(event, obj, key, index, index_col) {
      if (event.target.checked) {
        this[obj][index][key][index_col]["value"] = event.target.value;
      } else {
        this[obj][index][key][index_col]["value"] = "";
      }
      this.handleFileDeletionConfirmation(event, obj, index, key, index_col);
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
          if (this.meta_data["dossier_credit"][createdKey]["rapport_de_visite"] != "") {
            this.rapport_de_visite = this.meta_data["dossier_credit"][createdKey]["rapport_de_visite"];
            this.updateUserId();
          }
        }
      }
      this.runLockFields();
    },
    runLockFields: function runLockFields() {
      var _this$authcheckUsr3,
        _this6 = this;
      if (((_this$authcheckUsr3 = this.authcheckUsr) === null || _this$authcheckUsr3 === void 0 ? void 0 : _this$authcheckUsr3.user_id) == undefined) {
        setTimeout(function () {
          _this6.runLockFields();
        }, 2000);
      } else {
        this.lock_fields = [];
        this.rapport_de_visite.forEach(function (el, tableId) {
          var _dossierCredit$recouv, _this6$authcheckUsr3;
          if (_this6.first) {
            var _this6$authcheckUsr, _this6$meta_data;
            el.user_id = (_this6$authcheckUsr = _this6.authcheckUsr) === null || _this6$authcheckUsr === void 0 ? void 0 : _this6$authcheckUsr.user_id;
            el.par = (_this6$meta_data = _this6.meta_data) === null || _this6$meta_data === void 0 || (_this6$meta_data = _this6$meta_data.dossier_credit_recovery) === null || _this6$meta_data === void 0 ? void 0 : _this6$meta_data.dureeimp;
            el.user_infos = _this6.authcheckUsr;
            if (["", null, undefined].includes(el.date_planification)) {
              el.date_planification = _this6.datePlanification();
            }
          } else {
            _this6.contextList = _this6.contextList.filter(function (el) {
              return el.id != "remove";
            });
          }
          var dossierCredit = _this6.meta_data["dossier_credit"];
          var decisionAlreadyGiven = (_dossierCredit$recouv = dossierCredit["recouvrement_decision_logs"]) === null || _dossierCredit$recouv === void 0 ? void 0 : _dossierCredit$recouv.some(function (log) {
            var _this6$authcheckUsr2;
            return log.given_by == ((_this6$authcheckUsr2 = _this6.authcheckUsr) === null || _this6$authcheckUsr2 === void 0 ? void 0 : _this6$authcheckUsr2.user_id);
          });
          var islock;
          if (el.user_id != ((_this6$authcheckUsr3 = _this6.authcheckUsr) === null || _this6$authcheckUsr3 === void 0 ? void 0 : _this6$authcheckUsr3.user_id)) {
            islock = true;
          } else {
            var _this6$meta_data2;
            islock = el.stage_id != ((_this6$meta_data2 = _this6.meta_data) === null || _this6$meta_data2 === void 0 || (_this6$meta_data2 = _this6$meta_data2.dossier_credit) === null || _this6$meta_data2 === void 0 || (_this6$meta_data2 = _this6$meta_data2.workflow) === null || _this6$meta_data2 === void 0 || (_this6$meta_data2 = _this6$meta_data2.current_stage) === null || _this6$meta_data2 === void 0 ? void 0 : _this6$meta_data2.stage_id);
          }
          _this6.lock_fields.push({
            lock: islock
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
          console.log(error);
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
      var _this$authcheckUsr4,
        _this7 = this;
      if (((_this$authcheckUsr4 = this.authcheckUsr) === null || _this$authcheckUsr4 === void 0 ? void 0 : _this$authcheckUsr4.user_id) == undefined) {
        setTimeout(function () {
          _this7.handleInput();
        }, 500);
      } else {
        this.updateUserId();
        this.formDataToBeWatched["rapport_de_visite"] = this.rapport_de_visite;
      }
    },
    updateUserId: function updateUserId() {
      var _this8 = this;
      this.rapport_de_visite.forEach(function (el) {
        if (["", "0", 0, null, undefined].includes(el === null || el === void 0 ? void 0 : el.user_id)) {
          var _this8$authcheckUsr$u, _this8$authcheckUsr, _this8$authcheckUsr2, _this8$meta_data;
          el.user_id = (_this8$authcheckUsr$u = (_this8$authcheckUsr = _this8.authcheckUsr) === null || _this8$authcheckUsr === void 0 ? void 0 : _this8$authcheckUsr.user_id) !== null && _this8$authcheckUsr$u !== void 0 ? _this8$authcheckUsr$u : (_this8$authcheckUsr2 = _this8.authcheckUsr) === null || _this8$authcheckUsr2 === void 0 ? void 0 : _this8$authcheckUsr2.id;
          el.par = (_this8$meta_data = _this8.meta_data) === null || _this8$meta_data === void 0 || (_this8$meta_data = _this8$meta_data.dossier_credit_recovery) === null || _this8$meta_data === void 0 ? void 0 : _this8$meta_data.dureeimp;
          el.user_infos = _this8.authcheckUsr;
          if (["", null, undefined].includes(el.date_planification)) {
            el.date_planification = _this8.datePlanification();
          }
          if (_this8.phases.length == 1) {
            el.phase = _this8.phases[0];
          } else {
            el.phase = null;
          }
        }
        if (["", "0", 0, null, undefined].includes(el === null || el === void 0 ? void 0 : el.stage_id)) {
          var _this8$meta_data2;
          el.stage_id = (_this8$meta_data2 = _this8.meta_data) === null || _this8$meta_data2 === void 0 || (_this8$meta_data2 = _this8$meta_data2.dossier_credit) === null || _this8$meta_data2 === void 0 || (_this8$meta_data2 = _this8$meta_data2.workflow) === null || _this8$meta_data2 === void 0 || (_this8$meta_data2 = _this8$meta_data2.current_stage) === null || _this8$meta_data2 === void 0 ? void 0 : _this8$meta_data2.stage_id;
        }
        el.promesses.forEach(function (prom, promId) {
          if (!el.promesses[promId].user_id) {
            var _this8$authcheckUsr3;
            el.promesses[promId] = _objectSpread(_objectSpread({}, el.promesses[promId]), {}, {
              'created_at': Date.now(),
              'comingfrom': _this8.tb_name,
              'user_id': (_this8$authcheckUsr3 = _this8.authcheckUsr) === null || _this8$authcheckUsr3 === void 0 ? void 0 : _this8$authcheckUsr3.user_id,
              'id': promId
            });
          }
        });
        if (el.modes_paiements == 'Mobile Money' && ["", "0", 0, null, undefined].includes(el === null || el === void 0 ? void 0 : el.numero_cheque_telephone)) {
          var _this8$meta_data$doss, _this8$meta_data$doss2, _this8$meta_data$doss3;
          var client = (_this8$meta_data$doss = (_this8$meta_data$doss2 = _this8.meta_data.dossier_credit) === null || _this8$meta_data$doss2 === void 0 || (_this8$meta_data$doss2 = _this8$meta_data$doss2.caf_recorded_file) === null || _this8$meta_data$doss2 === void 0 || (_this8$meta_data$doss2 = _this8$meta_data$doss2.client) === null || _this8$meta_data$doss2 === void 0 ? void 0 : _this8$meta_data$doss2.phonecli) !== null && _this8$meta_data$doss !== void 0 ? _this8$meta_data$doss : (_this8$meta_data$doss3 = _this8.meta_data.dossier_credit.doss_central_file_recorder) === null || _this8$meta_data$doss3 === void 0 || (_this8$meta_data$doss3 = _this8$meta_data$doss3.client) === null || _this8$meta_data$doss3 === void 0 ? void 0 : _this8$meta_data$doss3.phonecli;
          if ([null, undefined].includes(client)) {
            client = "";
          }
          el.numero_cheque_telephone = '+225 ' + client;
        }
        if (el.checkListVisiteClient[1].value != 'Oui') {
          el.garantites_utilisable = [];
          el.autres_garanties_used = "";
        }
      });
      this.runLockFields();
    },
    selectPhase: function selectPhase(event, index) {
      if (event.target.value) {
        this.rapport_de_visite[index].phase = this.phases.find(function (el) {
          return el.id == event.target.value;
        });
      }
      this.handleInput();
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
      return Number(n === null || n === void 0 || (_n$toString = n.toString()) === null || _n$toString === void 0 ? void 0 : _n$toString.replace(/\s/g, ""));
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
    removeAccents: function removeAccents(str) {
      return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    },
    handleAddCollaborator: function handleAddCollaborator(newTags) {
      this.rapport_de_visite[this.currentSeen].collaborateurs = newTags.map(function (tag) {
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
    fixCkEditorBug: function fixCkEditorBug(index) {
      if (index) {
        var _this$rapport_de_visi5;
        var rapport = (_this$rapport_de_visi5 = this.rapport_de_visite) === null || _this$rapport_de_visi5 === void 0 ? void 0 : _this$rapport_de_visi5[index];
        if (rapport && [null, undefined].includes(rapport.observation)) {
          rapport.observation = "";
        }
      } else {
        var _this$rapport_de_visi6;
        this === null || this === void 0 || (_this$rapport_de_visi6 = this.rapport_de_visite) === null || _this$rapport_de_visi6 === void 0 || _this$rapport_de_visi6.forEach(function (rapport) {
          if (rapport && [null, undefined].includes(rapport.observation)) {
            rapport.observation = "";
          }
        });
      }
    },
    handleFileDeletionConfirmation: function handleFileDeletionConfirmation(event, obj, index, key, index_col) {
      // console.log("event.target.value => ", event.target.value);
      // console.log("[obj][index][key][index_col][value] => ", this[obj][index][key][index_col]["value"]);

      // Vérifier si la valeur est dans le tableau donné
      if (['Non', "", 'Non applicable'].includes(this[obj][index][key][index_col]["value"])) {
        // Vérifier s'il y a des fichiers et un template associé
        this.handleDeleteFile(obj, index, key, index_col);
      }
    },
    handleDeleteFile: function handleDeleteFile(obj, index, key, index_col) {
      var _this9 = this;
      if (this[obj][index][key][index_col]["files"] > 0 && this[obj][index][key][index_col]["template"]) {
        var count_files = this[obj][index][key][index_col]["files"];
        var msg = "Suppression des ".concat(count_files, " fichiers attach\xE9s.");
        if (count_files == 1) {
          msg = "Suppression du fichier attach\xE9.";
        }
        this.$confirm(msg, "Suppression de fichier", {
          confirmButtonText: "Oui",
          cancelButtonText: "Non",
          type: "warning"
        }).then(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                // Code après confirmation
                try {
                  // Action après la confirmation, par exemple suppression du fichier
                  _this9.handleDoubleClickOrClick(event, index, index_col, false);
                } catch (err) {
                  _this9.$console.error("Erreur lors de la suppression", err);
                }
              case 1:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        })))["catch"](function (error) {
          // Si l'utilisateur annule ou si une erreur survient
          _this9.$console.error("Action annulée ou erreur:", error);
          _this9[obj][index][key][index_col]["value"] = 'Oui';
          _this9.handleInput();
        });
      }
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
        var _this$rapport_de_visi7,
          _this$rapport_de_visi8,
          _this0 = this;
        this.tag = "";
        this.tags = (_this$rapport_de_visi7 = (_this$rapport_de_visi8 = this.rapport_de_visite[newVal]) === null || _this$rapport_de_visi8 === void 0 || (_this$rapport_de_visi8 = _this$rapport_de_visi8.collaborateurs) === null || _this$rapport_de_visi8 === void 0 || (_this$rapport_de_visi8 = _this$rapport_de_visi8.filter(function (col) {
          return col === null || col === void 0 ? void 0 : col.user_id;
        })) === null || _this$rapport_de_visi8 === void 0 ? void 0 : _this$rapport_de_visi8.map(function (col) {
          return _this0.buildColaboratorTag({
            user_id: col.user_id,
            name: col.user_name,
            email: col.user_email,
            role_name: col.role_name
          });
        })) !== null && _this$rapport_de_visi7 !== void 0 ? _this$rapport_de_visi7 : [];
        this.fixCkEditorBug(newVal);
      },
      immediate: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/loan_recovery_iq/recovery_component/PhoneInput.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/loan_recovery_iq/recovery_component/PhoneInput.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    isDisabled: Boolean,
    indicatif: String,
    number: String
  },
  data: function data() {
    var _this$number;
    return {
      query: this.indicatif,
      indicatifData: this.indicatif,
      numberData: (_this$number = this.number) !== null && _this$number !== void 0 ? _this$number : '',
      phoneNumber: '',
      opened: false,
      stayOpened: false,
      items: [{
        "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_C%C3%B4te_d%27Ivoire.svg/20px-Flag_of_C%C3%B4te_d%27Ivoire.svg.png",
        "indicatif": "+225"
      }, {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Flag_of_Burkina_Faso.svg/20px-Flag_of_Burkina_Faso.svg.png",
        "indicatif": "+226"
      }, {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Flag_of_the_Republic_of_the_Congo.svg/20px-Flag_of_the_Republic_of_the_Congo.svg.png",
        "indicatif": "+242"
      }, {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Flag_of_Guinea.svg/20px-Flag_of_Guinea.svg.png",
        "indicatif": "+224"
      }, {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Flag_of_Mali.svg/20px-Flag_of_Mali.svg.png",
        "indicatif": "+223"
      }, {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Flag_of_Senegal.svg/20px-Flag_of_Senegal.svg.png",
        "indicatif": "+221"
      }, {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Flag_of_Togo.svg/20px-Flag_of_Togo.svg.png",
        "indicatif": "+228"
      }, {
        "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Flag_of_Gabon.svg/20px-Flag_of_Gabon.svg.png",
        "indicatif": "+241"
      }]
    };
  },
  methods: {
    onUpdate: function onUpdate(v) {
      this.query = v;
      this.indicatifData = v;
      // emit('update',v)
    }
  },
  watch: {
    indicatifData: function indicatifData(newNum, oldNum) {
      this.phoneNumber = this.indicatifData + " " + this.numberData;
      this.$emit('updatephone', this.phoneNumber);
    },
    numberData: function numberData(newNum, oldNum) {
      if (newNum.length > 10) {
        this.numberData = newNum.slice(0, 10);
      }
      this.phoneNumber = this.indicatifData + " " + this.numberData;
      this.$emit('updatephone', this.phoneNumber);
    },
    query: function query(newNum, oldNum) {
      var regex = /^\+?[1-9]\d{0,14}$/;
      if (!regex.test(newNum)) {
        this.query = "+";
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/loan_recovery_iq/recovery_component/QuestionHistory.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/loan_recovery_iq/recovery_component/QuestionHistory.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Questionhistory",
  display: "Questionhistory",
  props: {
    buttonTitle: {
      "default": "Historique"
    },
    title: {
      "default": "Historique"
    },
    logs: {
      "default": [{
        author: "Kipeya soro",
        date: "08/06/2024",
        data: [{
          "label": "test",
          "value": "test"
        }, {
          "label": "test",
          "value": "test"
        }]
      }]
    },
    index: 0,
    question: '',
    questionLabels: []
  },
  computed: {
    computedLogs: function computedLogs() {
      var _this = this;
      return this.logs.map(function (el) {
        if (el[_this.question] != undefined) {
          var obj = {
            author: "".concat(el.user_infos.name, " (").concat(el.user_infos.role, ")"),
            date: el.date_action,
            data: [] // Initialize the data array here
          };
          el[_this.question].forEach(function (item, itmId) {
            obj.data[itmId] = [];
            for (var index = 0; index < _this.questionLabels.length; index++) {
              var _item$_this$questionL;
              obj.data[itmId].push({
                label: _this.questionLabels[index].label,
                value: (_item$_this$questionL = item[_this.questionLabels[index].value]) !== null && _item$_this$questionL !== void 0 ? _item$_this$questionL : "NA"
              });
            }
          });
          return obj;
        }
        return {
          author: "".concat(el.user_infos.name, " (").concat(el.user_infos.role, ")"),
          date: el.date_action,
          data: [] // Initialize the data array here
        };
      });
    }
  },
  data: function data() {
    return {
      open: false
    };
  },
  methods: {
    copy: function copy(sublog) {
      var _this2 = this;
      var obj = {};
      var _loop = function _loop(index) {
        obj[_this2.questionLabels[index].value] = sublog.find(function (el) {
          return _this2.questionLabels[index].label == el.label;
        }).value;
      };
      for (var index = 0; index < this.questionLabels.length; index++) {
        _loop(index);
      }
      this.$emit('copy', obj);
      this.open = !open;
    },
    update: function update(outcome, index, label, nestedId, sublog, Logidx) {
      var origine = sublog.find(function (el) {
        return el.label.toLowerCase() == 'origine';
      });
      var obj = {};
      obj.outcome = outcome;
      obj.index = index;
      obj.label = label;
      obj.nestedId = nestedId;
      obj.data = sublog;
      obj.origine = origine.value;

      // console.log("ruru obj",obj)
      this.$emit('updatePromesse', obj);

      // console.log("ruru elem",this.logs[Logidx][this.question][nestedId])
      this.logs[Logidx][this.question][nestedId].prommesseTenu = outcome;
      sublog.find(function (el) {
        return el.label.toLowerCase() == 'origine';
      }).value = outcome;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/loan_recovery_iq/recovery_component/QuestionHistoryV2.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/loan_recovery_iq/recovery_component/QuestionHistoryV2.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "QuestionhistoryV2",
  display: "QuestionhistoryV2",
  props: {
    buttonTitle: {
      "default": "Historique des promesses"
    },
    title: {
      "default": "Promesse précédentes"
    },
    dossier_credit: {
      "default": {}
    },
    WholeDoss: {
      "default": {}
    },
    authUser: {
      "default": {}
    }
  },
  mounted: function mounted() {
    // EventBus.$on("set_autosaving_mode", (data) => {
    //     console.log('set_autosaving_mode dataset' , data);
    // });
  },
  data: function data() {
    return {
      open: false,
      // promesse: [],
      isloading: false,
      promesseTenu: {},
      hasUpdate: false
    };
  },
  watch: {
    dossier_credit: function dossier_credit(newVal, oldVal) {
      // console.log('myProp changed from', oldVal, 'to', newVal);
      // You can perform any side-effects or actions here
      this.isloading = false;
    }
  },
  computed: {
    promesse: function promesse() {
      var _this = this;
      var promesseArray = [];

      // const RapportTb = [
      //     ...(this.dossier_credit?.cred_pub_tb_16500?.rapport_appel_telephonique || []),
      //     ...(this.dossier_credit?.cred_pub_tb_16506?.rapport_appel_telephonique || []),
      //     ...(this.dossier_credit?.cred_pub_tb_16501?.rapport_de_visite || []),
      //     ...(this.dossier_credit?.cred_pub_tb_16507?.rapport_de_visite || []),
      // ]

      var i = -1;
      var origin = 'tb16500';
      this.dossier_credit.forEach(function (el, idx) {
        if (el["promesses"] != undefined) {
          var _el$promesses$;
          if (((_el$promesses$ = el["promesses"][0]) === null || _el$promesses$ === void 0 ? void 0 : _el$promesses$.comingfrom) != origin) {
            var _el$promesses$2;
            i = 0;
            origin = (_el$promesses$2 = el["promesses"][0]) === null || _el$promesses$2 === void 0 ? void 0 : _el$promesses$2.comingfrom;
          } else {
            i = i + 1;
          }

          // 
          el["promesses"].forEach(function (item, itmId) {
            if (item.montant != 0) {
              _this.promesseTenu[item.created_at] = item.prommesseTenu;
              promesseArray.push(_objectSpread(_objectSpread({}, item), {}, {
                author: "".concat(el.user_infos.name, " (").concat(el.user_infos.role, ")"),
                rapportId: i
              }));
            }
          });
        }
      });
      return promesseArray;
    }
  },
  methods: {
    onOpen: function onOpen() {
      this.open = true;
      this.hasUpdate = false;
    },
    updateStatus: function updateStatus(event, created_at) {
      this.hasUpdate = true;

      // if(event.target.checked){
      //     this.promesseTenu[created_at] = event.target.value
      // }else{
      //     this.promesseTenu[created_at] = null
      // }
    },
    onClose: function onClose() {
      var _this2 = this;
      this.isloading = this.hasUpdate;
      var obj = this.WholeDoss;
      this.promesse.forEach(function (el) {
        obj[el.comingfrom][el.rapportId]['promesses'][el.id].prommesseTenu = _this2.promesseTenu[el.created_at];
      });
      this.$emit('updatePromesse', obj);
      EventBus.$emit('updatePromesse', obj);
      this.open = false;
    },
    getOriginLabel: function getOriginLabel(tbname) {
      switch (tbname) {
        case 'tb16500':
          return "Rapport d'appel téléphonique";
        // break;
        case 'tb16506':
          return "Rapport d'appel téléphonique caution";
        // break;
        case 'tb16501':
          return "Rapport de visite";
        // break;
        case 'tb16507':
          return "Rapport de visite caution";
        // break;
        default:
          break;
      }
    },
    formatTimeStamp: function formatTimeStamp(timestamp) {
      var date = new Date(timestamp);
      var day = date.getDate();
      var month = date.getMonth() + 1; // Months are zero-based, so add 1
      var year = date.getFullYear();

      // Add leading zeros to day and month if necessary
      day = day < 10 ? '0' + day : day;
      month = month < 10 ? '0' + month : month;
      return "".concat(day, "-").concat(month, "-").concat(year);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/loan_recovery_iq/FR7.vue?vue&type=template&id=4e65c36a&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/loan_recovery_iq/FR7.vue?vue&type=template&id=4e65c36a&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
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
  }, [_vm._v("\n                                " + _vm._s(_vm.tb_display_name) + " : Rapport de visite (cautions)\n                            ")]), _vm._v(" "), _c("div", {
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
  }, [_c("span", [_vm._v("\n                                                " + _vm._s(_vm.formDataToBeWatched.notes.length) + "\n                                            ")])])])]) : _vm._e(), _vm._v(" "), _c("chevron-up-icon", {
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
  }, [_vm._l(_vm.rapport_de_visite, function (planification, index) {
    var _planification$type, _Math$floor, _planification$user_i, _planification$user_i2, _planification$date_p, _planification$phase, _planification$type2, _Math$floor2, _planification$user_i3, _planification$user_i4, _planification$date_p2;
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
    }, [_vm._v("\n                                            Rapport " + _vm._s(index + 1) + " de visite " + _vm._s((_planification$type = planification.type) !== null && _planification$type !== void 0 ? _planification$type : "Caution") + " " + _vm._s(index + 1) + "\n                                        ")]), _vm._v(" "), _c("small", {
      staticStyle: {
        margin: "0"
      }
    }, [_vm._v("\n                                            Jour(s) de retard : "), _c("span", {
      staticClass: "seuil"
    }, [_vm._v(_vm._s((_Math$floor = Math.floor(planification.par)) !== null && _Math$floor !== void 0 ? _Math$floor : ""))])]), _vm._v(" "), _c("small", {
      staticStyle: {
        margin: "0"
      }
    }, [_vm._v("\n                                            Etabli par: " + _vm._s(_vm.textTruncate((_planification$user_i = planification.user_infos) === null || _planification$user_i === void 0 ? void 0 : _planification$user_i.name) + "(" + _vm.textTruncate((_planification$user_i2 = planification.user_infos) === null || _planification$user_i2 === void 0 ? void 0 : _planification$user_i2.role_sigle) + ")") + "\n                                        ")]), _vm._v(" "), _c("div", {
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
    }, [_vm._v("\n                                                    le : " + _vm._s((_planification$date_p = planification.date_planification) !== null && _planification$date_p !== void 0 ? _planification$date_p : "#NA") + "\n                                                ")])])]), _vm._v(" "), _c("chevron-up-icon", {
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
      staticClass: "align-items-center col-md-8 py-2 d-flex"
    }, [_c("span", {
      staticStyle: {
        width: "75px"
      },
      attrs: {
        "for": ""
      }
    }, [_vm._v("\n                                            Phase :\n                                        ")]), _vm._v(" "), _c("div", {
      staticClass: "w-50"
    }, [_c("select", {
      staticClass: "form-select",
      attrs: {
        disabled: true
      }
    }, [_c("option", [_vm._v(_vm._s(planification === null || planification === void 0 || (_planification$phase = planification.phase) === null || _planification$phase === void 0 ? void 0 : _planification$phase.phase))])])])]), _vm._v(" "), _c("div", {
      staticClass: "table-responsive"
    }, [_c("table", {
      staticClass: "table table-bordered"
    }, [_vm._m(0, true), _vm._v(" "), _vm._l(planification.checkListVisiteClient, function (el, index_checkList) {
      var _vm$lock_fields$index, _vm$lock_fields$index2, _vm$lock_fields$index3, _vm$lock_fields$index4, _vm$lock_fields$index6, _vm$lock_fields$index7, _vm$lock_fields$index8, _vm$lock_fields$index9, _vm$lock_fields$index0, _vm$lock_fields$index1, _vm$lock_fields$index10, _vm$lock_fields$index11, _vm$lock_fields$index12, _vm$lock_fields$index13, _vm$lock_fields$index14, _vm$lock_fields$index15, _vm$lock_fields$index16, _vm$lock_fields$index17, _vm$lock_fields$index18, _vm$lock_fields$index19, _vm$lock_fields$index20, _vm$lock_fields$index21, _vm$meta_data$dossier, _vm$meta_data$dossier2, _vm$meta_data$dossier3, _vm$meta_data$dossier4, _vm$meta_data$dossier5, _vm$meta_data$dossier6, _vm$lock_fields$index27, _vm$lock_fields$index28;
      return _c("tbody", {
        key: index_checkList,
        "class": {
          "bg-grey": index_checkList % 2 == 0
        }
      }, [_c("tr", [_c("td", [index_checkList > 2 ? _c("textarea", {
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
          cols: "1",
          rows: "1",
          disabled: (_vm$lock_fields$index = _vm.lock_fields[index]) === null || _vm$lock_fields$index === void 0 ? void 0 : _vm$lock_fields$index.lock
        },
        domProps: {
          value: el.name
        },
        on: {
          change: _vm.handleInput,
          input: function input($event) {
            if ($event.target.composing) return;
            _vm.$set(el, "name", $event.target.value);
          }
        }
      }) : _c("span", [_vm._v(_vm._s(el.name))])]), _vm._v(" "), _c("td", {
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
          value: "Oui",
          id: "oui" + index_checkList,
          disabled: (_vm$lock_fields$index2 = _vm.lock_fields[index]) === null || _vm$lock_fields$index2 === void 0 ? void 0 : _vm$lock_fields$index2.lock
        },
        domProps: {
          checked: el.value == "Oui"
        },
        on: {
          change: function change($event) {
            return _vm.checkboxValCheckList($event, "rapport_de_visite", "checkListVisiteClient", index, index_checkList);
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
          value: "Non",
          id: "non" + index_checkList,
          disabled: (_vm$lock_fields$index3 = _vm.lock_fields[index]) === null || _vm$lock_fields$index3 === void 0 ? void 0 : _vm$lock_fields$index3.lock
        },
        domProps: {
          checked: el.value == "Non"
        },
        on: {
          change: function change($event) {
            return _vm.checkboxValCheckList($event, "rapport_de_visite", "checkListVisiteClient", index, index_checkList);
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
          id: "non_applicable" + index_checkList,
          disabled: (_vm$lock_fields$index4 = _vm.lock_fields[index]) === null || _vm$lock_fields$index4 === void 0 ? void 0 : _vm$lock_fields$index4.lock
        },
        domProps: {
          checked: el.value == "Non applicable"
        },
        on: {
          change: function change($event) {
            return _vm.checkboxValCheckList($event, "rapport_de_visite", "checkListVisiteClient", index, index_checkList);
          }
        }
      })])]), _vm._v(" "), _c("td", [el.value == "Oui" ? _c("div", {
        staticClass: "d-flex align-items-center text-center justify-content-center"
      }, [_c("div", [(el === null || el === void 0 ? void 0 : el.files) > 0 ? _c("span", {
        staticClass: "p-1 px-2 mx-2 text-nowrap",
        staticStyle: {
          "background-color": "rgb(44,62,80)",
          color: "white",
          "font-size": "13px",
          "border-radius": "5px",
          "margin-left": "0 !important",
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
            var _vm$lock_fields$index5;
            return _vm.handleDoubleClickOrClick($event, index, index_checkList, (_vm$lock_fields$index5 = _vm.lock_fields[index]) === null || _vm$lock_fields$index5 === void 0 ? void 0 : _vm$lock_fields$index5.lock);
          }
        }
      }, [_c("i", {
        staticClass: "icofont-attachment"
      })])]) : _vm._e()]) : _c("div", {
        staticClass: "text-center text-danger"
      }, [_vm._v("\n                                                            Aucun fichier(s)\n                                                            uploadé(s)\n                                                        ")])]), _vm._v(" "), _c("td", [_c("textarea", {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: el.comment,
          expression: "el.comment"
        }],
        staticClass: "form-control",
        staticStyle: {
          "min-width": "250px"
        },
        attrs: {
          cols: "1",
          rows: "1",
          disabled: (_vm$lock_fields$index6 = _vm.lock_fields[index]) === null || _vm$lock_fields$index6 === void 0 ? void 0 : _vm$lock_fields$index6.lock
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
      })]), _vm._v(" "), index_checkList == 2 ? _c("td", {
        staticStyle: {
          "font-size": "16px"
        }
      }, [_c("button", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: index_checkList == 2,
          expression: "\n                                                                index_checkList ==\n                                                                2\n                                                            "
        }],
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
            return _vm.addMoreCheckList(index);
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
          value: index_checkList > 2,
          expression: "\n                                                                index_checkList >\n                                                                2\n                                                            "
        }],
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
            return _vm.removeColCheckList(index, index_checkList);
          }
        }
      }, [_c("trash-icon", {
        staticClass: "custom-class",
        attrs: {
          size: "21"
        }
      })], 1)])]), _vm._v(" "), _vm.rapport_de_visite[index].checkListVisiteClient[0].value == "Oui" && index_checkList == 0 ? _c("tr", [_c("td", {
        attrs: {
          colspan: "7"
        }
      }, [_c("div", {
        staticClass: "row py-4"
      }, [_c("div", {
        staticClass: "col-md-6 pl-4 mt-4"
      }, [_c("label", {
        attrs: {
          "for": "date_visite" + index
        }
      }, [_vm._v("Date\n                                                                    action")]), _vm._v(" "), _c("date-input", {
        staticClass: "input-date",
        attrs: {
          viewonly: (_vm$lock_fields$index7 = _vm.lock_fields[index]) === null || _vm$lock_fields$index7 === void 0 ? void 0 : _vm$lock_fields$index7.lock,
          value: planification.date_visite,
          id: "date_visite" + index
        },
        on: {
          input: function input($event) {
            return _vm.formDataVars2($event, index, "rapport_de_visite", "date_visite");
          }
        }
      })], 1), _vm._v(" "), _c("div", {
        staticClass: "col-md-6 pl-4 mt-4"
      }, [_c("label", {
        attrs: {
          "for": "heure_debut" + index
        }
      }, [_vm._v("Heure\n                                                                    début")]), _vm._v(" "), _c("input", {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: planification.heure_debut,
          expression: "\n                                                                        planification.heure_debut\n                                                                    "
        }],
        staticClass: "form-control",
        attrs: {
          required: "",
          type: "time",
          disabled: (_vm$lock_fields$index8 = _vm.lock_fields[index]) === null || _vm$lock_fields$index8 === void 0 ? void 0 : _vm$lock_fields$index8.lock,
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
        staticClass: "col-md-6 pl-4 mt-4"
      }, [_c("label", {
        attrs: {
          "for": "heure_debut" + index
        }
      }, [_vm._v("Heure\n                                                                    fin")]), _vm._v(" "), _c("input", {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: planification.heure_fin,
          expression: "\n                                                                        planification.heure_fin\n                                                                    "
        }],
        staticClass: "form-control",
        attrs: {
          required: "",
          type: "time",
          disabled: (_vm$lock_fields$index9 = _vm.lock_fields[index]) === null || _vm$lock_fields$index9 === void 0 ? void 0 : _vm$lock_fields$index9.lock,
          id: "heure_fin" + index
        },
        domProps: {
          value: planification.heure_fin
        },
        on: {
          input: function input($event) {
            if ($event.target.composing) return;
            _vm.$set(planification, "heure_fin", $event.target.value);
          }
        }
      })]), _vm._v(" "), _c("div", {
        staticClass: "col-md-6 pl-4 mt-4"
      }, [_c("label", {
        attrs: {
          "for": "heure_debut" + index
        }
      }, [_vm._v("Type\n                                                                    visite")]), _vm._v(" "), _c("select", {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: planification.type_visite,
          expression: "\n                                                                        planification.type_visite\n                                                                    "
        }],
        staticClass: "form-select",
        attrs: {
          disabled: (_vm$lock_fields$index0 = _vm.lock_fields[index]) === null || _vm$lock_fields$index0 === void 0 ? void 0 : _vm$lock_fields$index0.lock
        },
        on: {
          change: function change($event) {
            var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
              return o.selected;
            }).map(function (o) {
              var val = "_value" in o ? o._value : o.value;
              return val;
            });
            _vm.$set(planification, "type_visite", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
          }
        }
      }, [_c("option", {
        attrs: {
          value: ""
        }
      }), _vm._v(" "), _c("option", {
        attrs: {
          value: "Planifié"
        }
      }, [_vm._v("\n                                                                        Planifié\n                                                                    ")]), _vm._v(" "), _c("option", {
        attrs: {
          value: "Inopiné"
        }
      }, [_vm._v("\n                                                                        Inopiné\n                                                                    ")]), _vm._v(" "), _c("option", {
        attrs: {
          value: "Appel"
        }
      }, [_vm._v("\n                                                                        Appel\n                                                                    ")])])]), _vm._v(" "), _c("div", {
        staticClass: "col-md-7 pl-4 mt-4"
      }, [_c("div", {
        staticClass: "d-flex flex-column"
      }, [_c("label", {
        staticClass: "form-label"
      }, [_vm._v("Cette\n                                                                        visite\n                                                                        était-elle\n                                                                        en\n                                                                        groupe\n                                                                        ?")]), _vm._v(" "), _c("div", {
        staticClass: "d-flex"
      }, [_c("div", {
        staticClass: "m-2 d-flex mr-4"
      }, [_c("input", {
        staticClass: "form-check-input",
        attrs: {
          type: "checkbox",
          disabled: (_vm$lock_fields$index1 = _vm.lock_fields[index]) === null || _vm$lock_fields$index1 === void 0 ? void 0 : _vm$lock_fields$index1.lock,
          value: "Oui",
          id: "visite_groupee_oui" + index
        },
        domProps: {
          checked: planification.visite_groupee == "Oui"
        },
        on: {
          change: function change($event) {
            return _vm.checkboxVal($event, "rapport_de_visite", "visite_groupee", index);
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
          disabled: (_vm$lock_fields$index10 = _vm.lock_fields[index]) === null || _vm$lock_fields$index10 === void 0 ? void 0 : _vm$lock_fields$index10.lock,
          value: "Non",
          id: "visite_groupee_non" + index
        },
        domProps: {
          checked: planification.visite_groupee == "Non"
        },
        on: {
          change: function change($event) {
            return _vm.checkboxVal($event, "rapport_de_visite", "visite_groupee", index);
          }
        }
      }), _vm._v(" "), _c("label", {
        staticClass: "text-nowrap",
        attrs: {
          "for": "visite_groupee_non" + index
        }
      }, [_vm._v("Non")])])])])]), _vm._v(" "), planification.visite_groupee == "Oui" ? _c("div", {
        staticClass: "col-md-7 pl-4 mt-2"
      }, [_c("label", [_vm._v("Liste des\n                                                                    participants")]), _vm._v(" "), _c("div", {
        staticClass: "position-relative p-0"
      }, [_c("vue-tags-input", {
        attrs: {
          "autocomplete-items": _vm.filteredCollaborators,
          tags: _vm.tags,
          placeholder: "Ajouter un collaborateur"
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
      }), _vm._v(" "), (_vm$lock_fields$index11 = _vm.lock_fields[index]) !== null && _vm$lock_fields$index11 !== void 0 && _vm$lock_fields$index11.lock || _vm.users.length == 0 ? _c("div", {
        staticClass: "overlay border",
        "class": {
          "bg-transparent": ((_vm$lock_fields$index12 = _vm.lock_fields[index]) === null || _vm$lock_fields$index12 === void 0 ? void 0 : _vm$lock_fields$index12.lock) && _vm.users.length > 0,
          "bg-white": _vm.users.length == 0
        }
      }, [_vm.users.length == 0 ? [_c("span", {
        staticClass: "spinner-border spinner-border spinner-custom-input"
      }), _vm._v(" "), _c("span", [_vm._v("Chargement des collaborateurs...")])] : _vm._e()], 2) : _vm._e()], 1)]) : _vm._e(), _vm._v(" "), _c("div", {
        staticClass: "col-md-7 pl-4 mt-4"
      }, [_c("div", {
        staticClass: "d-flex flex-column"
      }, [_vm._m(1, true), _vm._v(" "), _c("div", {
        staticClass: "d-flex flex-wrap align-items-stretch"
      }, [_c("select", {
        staticClass: "form-select",
        attrs: {
          disabled: (_vm$lock_fields$index13 = _vm.lock_fields[index]) === null || _vm$lock_fields$index13 === void 0 ? void 0 : _vm$lock_fields$index13.lock
        },
        on: {
          change: function change($event) {
            return _vm.selectVal($event, "rapport_de_visite", "lieu_visite", index);
          }
        }
      }, [_c("option", {
        attrs: {
          value: ""
        }
      }), _vm._v(" "), _vm._l(_vm.lieux_visite, function (option, option_index) {
        return _c("option", {
          key: option_index,
          domProps: {
            selected: planification.lieu_visite == option.value,
            value: option.value
          }
        }, [_vm._v(_vm._s(option.label))]);
      })], 2)])])]), _vm._v(" "), planification.lieu_visite == "autres" ? _c("div", {
        staticClass: "col-md-7 mt-4"
      }, [_c("div", {
        staticClass: "pl-4"
      }, [_c("label", {
        staticClass: "mb-0",
        attrs: {
          "for": "autres_object_visites" + index
        }
      }, [_vm._v("Si\n                                                                        "), _c("b", [_vm._v(" Autre lieu de visite\n                                                                            :")])])]), _vm._v(" "), _c("div", {
        staticClass: "pl-4"
      }, [_c("input", {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: planification.autres_lieux_visite,
          expression: "\n                                                                        planification.autres_lieux_visite\n                                                                    "
        }],
        staticClass: "form-control",
        staticStyle: {
          "min-width": "max-content"
        },
        attrs: {
          required: "",
          type: "text",
          id: "autres_lieux_visite" + index
        },
        domProps: {
          value: planification.autres_lieux_visite
        },
        on: {
          input: function input($event) {
            if ($event.target.composing) return;
            _vm.$set(planification, "autres_lieux_visite", $event.target.value);
          }
        }
      })])]) : _vm._e(), _vm._v(" "), ["aFwisnrdo42c4n9MHCG2", "tmu3PEDVQsevYH2rhw4o", "icWghWx71w9VpwZ6y1mT"].includes(planification.user_infos.role_uuid) ? [_c("div", {
        staticClass: "col-md-7 pl-4 mt-4"
      }, [_c("div", {
        staticClass: "d-flex flex-column"
      }, [_c("label", {
        staticClass: "form-label font-weight-bold"
      }, [_vm._v("L'activité existe-t-elle ? / Est-il toujours en poste ?")]), _vm._v(" "), _c("div", {
        staticClass: "d-flex"
      }, [_c("div", {
        staticClass: "m-2 d-flex mr-4"
      }, [_c("input", {
        staticClass: "form-check-input",
        attrs: {
          type: "checkbox",
          disabled: (_vm$lock_fields$index14 = _vm.lock_fields[index]) === null || _vm$lock_fields$index14 === void 0 ? void 0 : _vm$lock_fields$index14.lock,
          value: "Oui",
          id: "existance_activite_oui" + index
        },
        domProps: {
          checked: planification.existance_activite == "Oui"
        },
        on: {
          change: function change($event) {
            return _vm.checkboxVal($event, "rapport_de_visite", "existance_activite", index);
          }
        }
      }), _vm._v(" "), _c("label", {
        staticClass: "text-nowrap",
        attrs: {
          "for": "existance_activite_oui" + index
        }
      }, [_vm._v("Oui")])]), _vm._v(" "), _c("div", {
        staticClass: "m-2 d-flex mr-4"
      }, [_c("input", {
        staticClass: "form-check-input",
        attrs: {
          type: "checkbox",
          disabled: (_vm$lock_fields$index15 = _vm.lock_fields[index]) === null || _vm$lock_fields$index15 === void 0 ? void 0 : _vm$lock_fields$index15.lock,
          value: "Non",
          id: "existance_activite_non" + index
        },
        domProps: {
          checked: planification.existance_activite == "Non"
        },
        on: {
          change: function change($event) {
            return _vm.checkboxVal($event, "rapport_de_visite", "existance_activite", index);
          }
        }
      }), _vm._v(" "), _c("label", {
        staticClass: "text-nowrap",
        attrs: {
          "for": "existance_activite_non" + index
        }
      }, [_vm._v("Non")])])])])]), _vm._v(" "), planification.existance_activite == "Oui" ? _c("div", {
        staticClass: "col-md-7 mt-4"
      }, [_c("div", {
        staticClass: "pl-4"
      }, [_c("label", {
        staticClass: "mb-0",
        attrs: {
          "for": "etat_activite" + index
        }
      }, [_c("b", [_vm._v(" Etat de l'activité\n                                                                                    :")])])]), _vm._v(" "), _c("div", {
        staticClass: "pl-4"
      }, [_c("input", {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: planification.etat_activite,
          expression: "\n                                                                                planification.etat_activite\n                                                                            "
        }],
        staticClass: "form-control",
        staticStyle: {
          "min-width": "max-content"
        },
        attrs: {
          required: "",
          type: "text",
          id: "etat_activite" + index
        },
        domProps: {
          value: planification.etat_activite
        },
        on: {
          input: function input($event) {
            if ($event.target.composing) return;
            _vm.$set(planification, "etat_activite", $event.target.value);
          }
        }
      })])]) : _vm._e()] : _vm._e(), _vm._v(" "), _c("div", {
        staticClass: "col-md-7 pl-4 mt-4"
      }, [_c("div", {
        staticClass: "d-flex flex-column"
      }, [_vm._m(2, true), _vm._v(" "), _c("div", {
        staticClass: "d-flex flex-wrap align-items-stretch"
      }, [_c("select", {
        staticClass: "form-select",
        attrs: {
          disabled: (_vm$lock_fields$index16 = _vm.lock_fields[index]) === null || _vm$lock_fields$index16 === void 0 ? void 0 : _vm$lock_fields$index16.lock
        },
        on: {
          change: function change($event) {
            return _vm.selectVal($event, "rapport_de_visite", "object_visites", index);
          }
        }
      }, [_c("option", {
        attrs: {
          value: ""
        }
      }), _vm._v(" "), _vm._l(_vm.object_visites, function (option, option_index) {
        return _c("option", {
          key: option_index,
          domProps: {
            selected: planification.object_visites == option.value,
            value: option.value
          }
        }, [_vm._v(_vm._s(option.label))]);
      })], 2)])])]), _vm._v(" "), planification.object_visites == "autres" ? _c("div", {
        staticClass: "col-md-7 mt-4"
      }, [_c("div", {
        staticClass: "pl-4"
      }, [_c("label", {
        staticClass: "mb-0",
        attrs: {
          "for": "autres_object_visites" + index
        }
      }, [_vm._v("Si\n                                                                        "), _c("b", [_vm._v(" Autre objet de visite\n                                                                            :")])])]), _vm._v(" "), _c("div", {
        staticClass: "pl-4"
      }, [_c("input", {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: planification.autres_object_visites,
          expression: "\n                                                                        planification.autres_object_visites\n                                                                    "
        }],
        staticClass: "form-control",
        staticStyle: {
          "min-width": "max-content"
        },
        attrs: {
          required: "",
          type: "text",
          id: "autres_object_visites" + index
        },
        domProps: {
          value: planification.autres_object_visites
        },
        on: {
          input: function input($event) {
            if ($event.target.composing) return;
            _vm.$set(planification, "autres_object_visites", $event.target.value);
          }
        }
      })])]) : _vm._e(), _vm._v(" "), planification.object_visites == "Rencontre client pour comprendre motifs impayés" ? _c("div", {
        staticClass: "col-md-7 pl-4 mt-4"
      }, [_c("label", {
        staticClass: "fw-semibold"
      }, [_vm._v("Motif de\n                                                                        l'impayé")]), _vm._v(" "), _c("vue-editor", {
        attrs: {
          id: "motif_impaye" + index
        },
        on: {
          "update-value": function updateValue($event) {
            planification.motif_impaye = $event[1];
          },
          change: _vm.handleInput
        },
        model: {
          value: planification.motif_impaye,
          callback: function callback($$v) {
            _vm.$set(planification, "motif_impaye", $$v);
          },
          expression: "\n                                                                        planification.motif_impaye\n                                                                    "
        }
      })], 1) : _vm._e(), _vm._v(" "), _c("div", {
        staticClass: "col-md-7 pl-4 mt-4"
      }, [_c("div", {
        staticClass: "d-flex flex-column"
      }, [_vm._m(3, true), _vm._v(" "), _c("div", {
        staticClass: "d-flex flex-wrap align-items-stretch"
      }, [_c("select", {
        staticClass: "form-select",
        attrs: {
          disabled: (_vm$lock_fields$index17 = _vm.lock_fields[index]) === null || _vm$lock_fields$index17 === void 0 ? void 0 : _vm$lock_fields$index17.lock
        },
        on: {
          change: function change($event) {
            return _vm.selectVal($event, "rapport_de_visite", "resultats", index);
          }
        }
      }, [_c("option", {
        attrs: {
          value: ""
        }
      }), _vm._v(" "), _vm._l(_vm.resultats, function (option, option_index) {
        return _c("option", {
          key: option_index,
          domProps: {
            selected: planification.resultats == option.value,
            value: option.value
          }
        }, [_vm._v(_vm._s(option.label))]);
      })], 2)])])]), _vm._v(" "), planification.resultats == "autres" ? _c("div", {
        staticClass: "col-md-7 mt-4"
      }, [_c("div", {
        staticClass: "pl-4"
      }, [_c("label", {
        staticClass: "mb-0",
        attrs: {
          "for": "autres_resultats" + index
        }
      }, [_vm._v("Si\n                                                                        "), _c("b", [_vm._v(" Autre resultat\n                                                                            :")])])]), _vm._v(" "), _c("div", {
        staticClass: "pl-4"
      }, [_c("input", {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: planification.autres_resultats,
          expression: "\n                                                                        planification.autres_resultats\n                                                                    "
        }],
        staticClass: "form-control",
        staticStyle: {
          "min-width": "max-content"
        },
        attrs: {
          required: "",
          type: "text",
          id: "autres_resultats" + index
        },
        domProps: {
          value: planification.autres_resultats
        },
        on: {
          input: function input($event) {
            if ($event.target.composing) return;
            _vm.$set(planification, "autres_resultats", $event.target.value);
          }
        }
      })])]) : _vm._e(), _vm._v(" "), ["Partiellement payé", "Totalement payé"].includes(planification.resultats) ? [_c("div", {
        staticClass: "col-md-7 mt-4"
      }, [_c("div", {
        staticClass: "pl-4"
      }, [_c("label", {
        staticClass: "mb-0",
        attrs: {
          "for": "montant_paye"
        }
      }, [_vm._v("Si\n                                                                        "), _c("b", [_vm._v(_vm._s(planification.resultats) + ", Montant\n                                                                            payé:")])])]), _vm._v(" "), _c("div", {
        staticClass: "pl-4"
      }, [_c("currency-input", {
        staticClass: "form-control",
        staticStyle: {
          "min-width": "150px"
        },
        attrs: {
          "default-typing": false,
          type: "text",
          id: "\n                                                                            montant_paye\n                                                                        ",
          disabled: (_vm$lock_fields$index18 = _vm.lock_fields[index]) === null || _vm$lock_fields$index18 === void 0 ? void 0 : _vm$lock_fields$index18.lock
        },
        on: {
          change: _vm.handleInput
        },
        model: {
          value: planification.montant_paye,
          callback: function callback($$v) {
            _vm.$set(planification, "montant_paye", $$v);
          },
          expression: "\n                                                                            planification.montant_paye\n                                                                        "
        }
      })], 1), _vm._v(" "), _c("div", {
        staticClass: "pl-4 mt-4"
      }, [_c("div", {
        staticClass: "d-flex flex-column"
      }, [_vm._m(4, true), _vm._v(" "), _c("div", {
        staticClass: "d-flex flex-wrap align-items-stretch"
      }, [_c("select", {
        staticClass: "form-select",
        attrs: {
          disabled: (_vm$lock_fields$index19 = _vm.lock_fields[index]) === null || _vm$lock_fields$index19 === void 0 ? void 0 : _vm$lock_fields$index19.lock
        },
        on: {
          change: function change($event) {
            return _vm.selectVal($event, "rapport_de_visite", "modes_paiements", index);
          }
        }
      }, [_c("option", {
        attrs: {
          value: ""
        }
      }), _vm._v(" "), _vm._l(_vm.modes_paiements, function (option, option_index) {
        return _c("option", {
          key: option_index,
          domProps: {
            selected: planification.modes_paiements == option.value,
            value: option.value
          }
        }, [_vm._v(_vm._s(option.label))]);
      })], 2)])])])]), _vm._v(" "), ["Chèque", "Mobile Money"].includes(planification.modes_paiements) ? _c("div", {
        staticClass: "col-md-7 mt-4"
      }, [_c("div", {
        staticClass: "pl-4"
      }, [_c("label", {
        staticClass: "fw-semibold",
        attrs: {
          "for": "\n                                                                            numero_cheque_telephone\n                                                                        "
        }
      }, [_vm._v("\n                                                                        Numéro\n                                                                        " + _vm._s(planification.modes_paiements == "Chèque" ? "chèque" : "Téléphone") + "\n                                                                    ")])]), _vm._v(" "), _c("div", {
        staticClass: "pl-4"
      }, [planification.modes_paiements == "Chèque" ? _c("input", {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: planification.cheque,
          expression: "\n                                                                            planification.cheque\n                                                                        "
        }],
        staticClass: "form-control",
        attrs: {
          required: "",
          type: "text",
          disabled: (_vm$lock_fields$index20 = _vm.lock_fields[index]) === null || _vm$lock_fields$index20 === void 0 ? void 0 : _vm$lock_fields$index20.lock,
          id: "numero_cheque_telephone" + index
        },
        domProps: {
          value: planification.cheque
        },
        on: {
          input: function input($event) {
            if ($event.target.composing) return;
            _vm.$set(planification, "cheque", $event.target.value);
          }
        }
      }) : _c("PhoneInput", {
        attrs: {
          isDisabled: (_vm$lock_fields$index21 = _vm.lock_fields[index]) === null || _vm$lock_fields$index21 === void 0 ? void 0 : _vm$lock_fields$index21.lock,
          indicatif: planification !== null && planification !== void 0 && planification.numero_cheque_telephone ? planification === null || planification === void 0 ? void 0 : planification.numero_cheque_telephone.split(" ")[0] : "+225",
          number: planification !== null && planification !== void 0 && planification.numero_cheque_telephone ? planification === null || planification === void 0 ? void 0 : planification.numero_cheque_telephone.split(" ")[1] : ""
        },
        on: {
          updatephone: function updatephone($event) {
            planification.numero_cheque_telephone = $event;
          }
        }
      })], 1)]) : _vm._e()] : _vm._e(), _vm._v(" "), ["Engagement pris"].includes(planification.resultats) ? [_c("div", {
        staticClass: "row"
      }, [_c("div", {
        staticClass: "col-md-12 pl-4"
      }, [_c("QuestionhistoryV2", {
        attrs: {
          WholeDoss: {
            tb16500: _toConsumableArray(((_vm$meta_data$dossier = _vm.meta_data.dossier_credit) === null || _vm$meta_data$dossier === void 0 || (_vm$meta_data$dossier = _vm$meta_data$dossier.cred_pub_tb_16500) === null || _vm$meta_data$dossier === void 0 ? void 0 : _vm$meta_data$dossier.rapport_appel_telephonique) || []),
            tb16506: _toConsumableArray(((_vm$meta_data$dossier2 = _vm.meta_data.dossier_credit) === null || _vm$meta_data$dossier2 === void 0 || (_vm$meta_data$dossier2 = _vm$meta_data$dossier2.cred_pub_tb_16506) === null || _vm$meta_data$dossier2 === void 0 ? void 0 : _vm$meta_data$dossier2.rapport_appel_telephonique) || []),
            tb16501: _toConsumableArray(((_vm$meta_data$dossier3 = _vm.meta_data.dossier_credit) === null || _vm$meta_data$dossier3 === void 0 || (_vm$meta_data$dossier3 = _vm$meta_data$dossier3.cred_pub_tb_16501) === null || _vm$meta_data$dossier3 === void 0 ? void 0 : _vm$meta_data$dossier3.rapport_de_visite) || []),
            tb16507: _toConsumableArray(_vm.rapport_de_visite)
          },
          dossier_credit: [].concat(_toConsumableArray(((_vm$meta_data$dossier4 = _vm.meta_data.dossier_credit) === null || _vm$meta_data$dossier4 === void 0 || (_vm$meta_data$dossier4 = _vm$meta_data$dossier4.cred_pub_tb_16500) === null || _vm$meta_data$dossier4 === void 0 ? void 0 : _vm$meta_data$dossier4.rapport_appel_telephonique) || []), _toConsumableArray(((_vm$meta_data$dossier5 = _vm.meta_data.dossier_credit) === null || _vm$meta_data$dossier5 === void 0 || (_vm$meta_data$dossier5 = _vm$meta_data$dossier5.cred_pub_tb_16506) === null || _vm$meta_data$dossier5 === void 0 ? void 0 : _vm$meta_data$dossier5.rapport_appel_telephonique) || []), _toConsumableArray(((_vm$meta_data$dossier6 = _vm.meta_data.dossier_credit) === null || _vm$meta_data$dossier6 === void 0 || (_vm$meta_data$dossier6 = _vm$meta_data$dossier6.cred_pub_tb_16501) === null || _vm$meta_data$dossier6 === void 0 ? void 0 : _vm$meta_data$dossier6.rapport_de_visite) || []), _toConsumableArray(_vm.rapport_de_visite)),
          authUser: _vm.authcheckUsr
        }
      }), _vm._v(" "), _c("div", {
        staticClass: "table-responsive"
      }, [_c("table", {
        staticClass: "table table-bordered mb-1"
      }, [_vm._m(5, true), _vm._v(" "), _c("tbody", _vm._l(planification.promesses, function (pro, ind_pro) {
        var _vm$lock_fields$index22, _vm$lock_fields$index23, _vm$lock_fields$index24, _vm$lock_fields$index25, _vm$lock_fields$index26;
        return _c("tr", {
          key: "col" + ind_pro
        }, [_c("td", [_c("currency-input", {
          staticClass: "form-control",
          staticStyle: {
            "min-width": "100px"
          },
          attrs: {
            "default-typing": false,
            type: "text",
            id: "montant_promesse" + ind_pro,
            disabled: (_vm$lock_fields$index22 = _vm.lock_fields[index]) === null || _vm$lock_fields$index22 === void 0 ? void 0 : _vm$lock_fields$index22.lock
          },
          on: {
            change: _vm.handleInput
          },
          model: {
            value: pro.montant,
            callback: function callback($$v) {
              _vm.$set(pro, "montant", $$v);
            },
            expression: "pro.montant"
          }
        })], 1), _vm._v(" "), _c("td", [_c("date-input", {
          staticClass: "input-date",
          staticStyle: {
            "min-width": "250px"
          },
          attrs: {
            value: pro.echeance,
            id: "date_promesse" + ind_pro,
            viewonly: (_vm$lock_fields$index23 = _vm.lock_fields[index]) === null || _vm$lock_fields$index23 === void 0 ? void 0 : _vm$lock_fields$index23.lock
          },
          on: {
            input: function input($event) {
              return _vm.formDataVars3($event, index, "echeance", ind_pro);
            }
          }
        })], 1), _vm._v(" "), _c("td", [_c("textarea", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: pro.commentaire,
            expression: "pro.commentaire"
          }],
          staticClass: "form-control",
          staticStyle: {
            "min-width": "200px"
          },
          attrs: {
            cols: "40",
            rows: "2",
            id: ind_pro + "libelle_conv",
            disabled: (_vm$lock_fields$index24 = _vm.lock_fields[index]) === null || _vm$lock_fields$index24 === void 0 ? void 0 : _vm$lock_fields$index24.lock
          },
          domProps: {
            value: pro.commentaire
          },
          on: {
            change: _vm.handleInput,
            input: function input($event) {
              if ($event.target.composing) return;
              _vm.$set(pro, "commentaire", $event.target.value);
            }
          }
        })]), _vm._v(" "), ind_pro == 0 ? _c("td", [_c("button", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: !((_vm$lock_fields$index25 = _vm.lock_fields[index]) !== null && _vm$lock_fields$index25 !== void 0 && _vm$lock_fields$index25.lock),
            expression: "\n                                                                                !lock_fields[index]\n                                                                                    ?.lock\n                                                                            "
          }],
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
            title: "Ajouter"
          },
          on: {
            click: function click($event) {
              return _vm.addMoreColPromesse(index);
            }
          }
        }, [_c("plus-icon", {
          staticClass: "custom-class",
          attrs: {
            size: "21"
          }
        })], 1)]) : _c("td", [_c("button", {
          staticStyle: {
            "background-color": "transparent",
            border: "none"
          },
          attrs: {
            type: "button",
            title: "Supprimer",
            disabled: (_vm$lock_fields$index26 = _vm.lock_fields[index]) === null || _vm$lock_fields$index26 === void 0 ? void 0 : _vm$lock_fields$index26.lock
          },
          on: {
            click: function click($event) {
              return _vm.removeColPromesse(index, ind_pro);
            }
          }
        }, [_c("trash-icon", {
          staticClass: "custom-class",
          attrs: {
            size: "21"
          }
        })], 1)])]);
      }), 0)])])], 1)])] : _vm._e()], 2), _vm._v(" "), _c("div", {
        staticClass: "col-md-7 pl-4 mt-4"
      }, [_c("label", {
        attrs: {
          "for": "observation" + index
        }
      }, [_vm._v("Observation")]), _vm._v(" "), (_vm$lock_fields$index27 = _vm.lock_fields[index]) !== null && _vm$lock_fields$index27 !== void 0 && _vm$lock_fields$index27.lock ? _c("div", {
        staticClass: "form-control textarea",
        attrs: {
          disabled: ""
        },
        domProps: {
          innerHTML: _vm._s(planification.observation)
        }
      }) : _c("vue-editor", {
        attrs: {
          id: "observation" + index,
          disabled: (_vm$lock_fields$index28 = _vm.lock_fields[index]) === null || _vm$lock_fields$index28 === void 0 ? void 0 : _vm$lock_fields$index28.lock
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
      })], 1)])]) : _vm._e(), _vm._v(" "), _vm.rapport_de_visite[index].checkListVisiteClient[0].value == "Oui" && index_checkList == 0 ? _c("tr", {
        staticClass: "text-center bg-white"
      }, [_vm._m(6, true), _vm._v(" "), _vm._m(7, true), _vm._v(" "), _vm._m(8, true), _vm._v(" "), _vm._m(9, true), _vm._v(" "), _vm._m(10, true), _vm._v(" "), _vm._m(11, true), _vm._v(" "), _vm._m(12, true)]) : _vm._e(), _vm._v(" "), _vm.rapport_de_visite[index].checkListVisiteClient[1].value == "Oui" && index_checkList == 1 ? _c("tr", {
        staticClass: "col-md-12 pl-4 mt-4"
      }, [_c("td", {
        attrs: {
          colspan: "7"
        }
      }, [_c("div", {
        staticClass: "d-flex flex-column"
      }, [_vm._m(13, true), _vm._v(" "), _c("div", {
        staticClass: "d-flex flex-wrap align-items-stretch"
      }, _vm._l(_vm.garanties_used, function (garantie, garantie_index) {
        var _vm$lock_fields$index29;
        return _c("div", {
          key: garantie_index,
          staticClass: "m-2 d-flex align-items-center"
        }, [_c("input", {
          staticClass: "form-check-input mr-2",
          attrs: {
            type: "checkbox",
            disabled: (_vm$lock_fields$index29 = _vm.lock_fields[index]) === null || _vm$lock_fields$index29 === void 0 ? void 0 : _vm$lock_fields$index29.lock,
            id: "garanties_" + garantie.value + garantie_index
          },
          domProps: {
            checked: (planification === null || planification === void 0 ? void 0 : planification.garantites_utilisable) && planification.garantites_utilisable.includes(garantie.value),
            value: garantie.value
          },
          on: {
            change: function change($event) {
              return _vm.updateGarantit($event, "rapport_de_visite", "garantites_utilisable", index);
            }
          }
        }), _vm._v(" "), _c("label", {
          staticClass: "mb-0",
          attrs: {
            "for": "garanties_" + garantie.value + garantie_index
          }
        }, [_vm._v(_vm._s(garantie.label))])]);
      }), 0)]), _vm._v(" "), planification.garantites_utilisable.includes("Autre garanties") ? _c("div", {
        staticClass: "col-md-7 mt-4"
      }, [_c("div", {
        staticClass: "pl-4"
      }, [_c("label", {
        staticClass: "mb-0",
        attrs: {
          "for": "autres_garanties_used" + index
        }
      }, [_vm._v("Si\n                                                                                "), _c("b", [_vm._v(" Autres Garanties\n                                                                                    utilisables\n                                                                                    :")])])]), _vm._v(" "), _c("div", {
        staticClass: "pl-4"
      }, [_c("input", {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: planification.autres_garanties_used,
          expression: "\n                                                                                planification.autres_garanties_used\n                                                                            "
        }],
        staticClass: "form-control",
        staticStyle: {
          "min-width": "max-content"
        },
        attrs: {
          required: "",
          type: "text",
          id: "autres_garanties_used" + index
        },
        domProps: {
          value: planification.autres_garanties_used
        },
        on: {
          input: function input($event) {
            if ($event.target.composing) return;
            _vm.$set(planification, "autres_garanties_used", $event.target.value);
          }
        }
      })])]) : _vm._e()])]) : _vm._e()]);
    })], 2)])])]) : _c("div", {
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
    }, [_vm._v("\n                                            Rapport " + _vm._s(index + 1) + " de visite " + _vm._s((_planification$type2 = planification.type) !== null && _planification$type2 !== void 0 ? _planification$type2 : "Caution") + "\n                                        ")]), _vm._v(" "), _c("small", {
      staticStyle: {
        margin: "0"
      }
    }, [_vm._v("\n                                            Jour(s) de retard : "), _c("span", {
      staticClass: "seuil"
    }, [_vm._v(_vm._s((_Math$floor2 = Math.floor(planification.par)) !== null && _Math$floor2 !== void 0 ? _Math$floor2 : ""))])]), _vm._v(" "), _c("small", {
      staticStyle: {
        margin: "0"
      }
    }, [_vm._v("\n                                            Etabli par: " + _vm._s(_vm.textTruncate((_planification$user_i3 = planification.user_infos) === null || _planification$user_i3 === void 0 ? void 0 : _planification$user_i3.name) + "(" + _vm.textTruncate((_planification$user_i4 = planification.user_infos) === null || _planification$user_i4 === void 0 ? void 0 : _planification$user_i4.role_sigle) + ")") + "\n                                        ")]), _vm._v(" "), _c("div", {
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
    }, [_vm._v("\n                                                    le : " + _vm._s((_planification$date_p2 = planification.date_planification) !== null && _planification$date_p2 !== void 0 ? _planification$date_p2 : "#NA") + "\n                                                ")])])]), _vm._v(" "), _c("chevron-down-icon", {
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
  }), _vm._v(" "), _c("span", [_vm._v("Ajouter un rapport de visite")])], 1), _vm._v(" "), _vm.rapport_de_visite.length - 1 > 0 && !((_vm$lock_fields = _vm.lock_fields[_vm.rapport_de_visite.length - 1]) !== null && _vm$lock_fields !== void 0 && _vm$lock_fields.lock) ? _c("button", {
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
        return _vm.remove(_vm.rapport_de_visite.length - 1);
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
  }, [_vm._v("\n                            Fermer le tableau\n                        ")])], 2)])]) : _c("div", {
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
  }, [_vm._v("\n                                " + _vm._s(_vm.tb_display_name) + " : Rapport de visite (cautions)\n                            ")]), _vm._v(" "), _c("div", {
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
  }, [_c("span", [_vm._v("\n                                                " + _vm._s(_vm.formDataToBeWatched.notes.length) + "\n                                            ")])])])]) : _vm._e(), _vm._v(" "), _c("chevron-down-icon", {
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
  return _c("thead", [_c("tr", {
    staticClass: "text-center"
  }, [_c("td", {
    staticClass: "th text-start"
  }, [_c("label", [_vm._v("QUESTIONS")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("OUI ")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("NON ")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("N/A")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("\n                                                            FICHIER\n                                                            ATTACHE")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("COMMENTAIRE")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("b", [_c("label", {
    staticClass: "form-label mr-3"
  }, [_vm._v("Lieu\n                                                                            de\n                                                                            la\n                                                                            visite:")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("b", [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Objet\n                                                                            de\n                                                                            la\n                                                                            visite\n                                                                        ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("b", [_c("label", {
    staticClass: "form-label mr-3"
  }, [_vm._v("Résultats:")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("b", [_c("label", {
    staticClass: "form-label mr-3"
  }, [_vm._v("Mode\n                                                                                de\n                                                                                paiement:")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("td", {
    staticClass: "th vertical-middle sticky sticky-top-4"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_c("b", [_vm._v("Montant")])])]), _vm._v(" "), _c("td", {
    staticClass: "th vertical-middle sticky-top-3"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_c("b", [_vm._v("Échéance")])])]), _vm._v(" "), _c("td", {
    staticClass: "th vertical-middle sticky-top-3"
  }, [_c("label", {
    staticClass: "fw-bold",
    attrs: {
      "for": ""
    }
  }, [_vm._v("Commentaire")])]), _vm._v(" "), _c("td", {
    staticClass: "th vertical-middle sticky-top-3"
  }, [_c("label", {
    staticClass: "fw-bold",
    attrs: {
      "for": ""
    }
  })])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "th text-start"
  }, [_c("label", [_vm._v("QUESTIONS")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("OUI ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("NON ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("N/A")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("\n                                                                FICHIER\n                                                                ATTACHE")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("COMMENTAIRE")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "th"
  }, [_c("label")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("b", [_c("label", {
    staticClass: "form-label mr-3"
  }, [_vm._v("Garanties\n                                                                                utilisables:")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/loan_recovery_iq/recovery_component/PhoneInput.vue?vue&type=template&id=5ce26b17":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/loan_recovery_iq/recovery_component/PhoneInput.vue?vue&type=template&id=5ce26b17 ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "input-group"
  }, [_c("div", {
    staticClass: "input-group-prepend d-flex w-100"
  }, [_c("div", {
    staticClass: "position-relative",
    staticStyle: {
      width: "100px",
      "border-radius": "0"
    }
  }, [_c("div", [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.query,
      expression: "query"
    }],
    staticClass: "form-control shadow-none",
    staticStyle: {
      "border-radius": "0"
    },
    attrs: {
      disabled: _vm.isDisabled,
      type: "text"
    },
    domProps: {
      value: _vm.query
    },
    on: {
      focusout: function focusout($event) {
        _vm.opened = false;
      },
      focusin: function focusin($event) {
        _vm.opened = true;
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.query = $event.target.value;
      }
    }
  })]), _vm._v(" "), _vm.opened | _vm.stayOpened ? _c("div", {
    staticClass: "options w-100 bg-white shadow-sm overflow-x-hidden overflow-auto",
    staticStyle: {
      "max-height": "350px"
    }
  }, [_c("ul", {
    staticClass: "list-group border-0",
    on: {
      mouseover: function mouseover($event) {
        _vm.stayOpened = true;
      },
      mouseleave: function mouseleave($event) {
        _vm.stayOpened = false;
      }
    }
  }, _vm._l(_vm.items.filter(function (el) {
    return el.indicatif.includes(_vm.query);
  }), function (item, index) {
    return _c("li", {
      key: index,
      staticClass: "list-group-item p-1 border-top-0 border-left-0 border-right-0",
      "class": {
        "rounded-bottom": index == _vm.items.length - 1,
        "rounded-0": index != _vm.items.length - 1
      },
      attrs: {
        role: "button"
      },
      on: {
        click: function click($event) {
          return _vm.onUpdate(item.indicatif);
        }
      }
    }, [_c("div", {
      staticClass: "d-flex align-items-center justify-item-start"
    }, [_c("img", {
      staticClass: "mx-1",
      attrs: {
        src: item.flag,
        alt: ""
      }
    }), _vm._v(" "), _c("span", {
      staticStyle: {
        "font-size": "14px"
      }
    }, [_vm._v("\n                                " + _vm._s(item.indicatif) + "\n                            ")])])]);
  }), 0)]) : _vm._e()]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.numberData,
      expression: "numberData"
    }],
    staticClass: "form-control w-100 rounded-l-0 shadow-none",
    staticStyle: {
      "border-radius": "0"
    },
    attrs: {
      disabled: _vm.isDisabled,
      type: "tel"
    },
    domProps: {
      value: _vm.numberData
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.numberData = $event.target.value;
      }
    }
  })])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/loan_recovery_iq/recovery_component/QuestionHistory.vue?vue&type=template&id=3bf9607a&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/loan_recovery_iq/recovery_component/QuestionHistory.vue?vue&type=template&id=3bf9607a&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "historyBTN"
  }, [_c("button", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.computedLogs.length > 0,
      expression: "computedLogs.length > 0"
    }],
    staticClass: "btn shadow-md text-white",
    staticStyle: {
      cursor: "pointer",
      background: "#2c3e50"
    },
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        _vm.open = !_vm.open;
      }
    }
  }, [_vm._v(_vm._s(_vm.buttonTitle) + " "), _c("i", {
    staticClass: "icofont-history"
  })]), _vm._v(" "), _vm.open ? _c("div", {
    staticClass: "card historyCard",
    staticStyle: {
      width: "90%"
    }
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "header-card"
  }, [_c("h4", {
    staticClass: "card-title"
  }, [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-outline",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        _vm.open = !_vm.open;
      }
    }
  }, [_c("i", {
    staticClass: "icofont-close"
  })])]), _vm._v(" "), _c("div", [_c("table", {
    staticClass: "table table-responsive"
  }, [_c("thead", [_c("tr", {
    staticClass: "table-active"
  }, [_c("th"), _vm._v(" "), _vm._l(_vm.computedLogs[0].data[0], function (d, idx) {
    return _c("th", {
      key: idx
    }, [d.label != "id" ? _c("span", [_vm._v(_vm._s(d.label))]) : _vm._e()]);
  })], 2)]), _vm._v(" "), _vm._l(_vm.computedLogs, function (log, Logidx) {
    return _c("tbody", {
      key: Logidx
    }, [log.data[0].filter(function (el) {
      return el.value == 0 && el.label == "Montant";
    }).length == 0 ? _vm._l(log.data, function (sublog, sublogidx) {
      return _c("tr", {
        key: sublogidx
      }, [_c("th", [_c("h6", [_c("b", [_vm._v(_vm._s(log.author))])]), _c("time", [_vm._v(_vm._s(log.date))])]), _vm._v(" "), _vm._l(sublog, function (d, idx) {
        return _c("td", {
          key: idx
        }, [d.label.toLowerCase() == "promesse tenue ?" ? _c("div", {
          staticClass: "d-flex justify-content-around"
        }, [_c("div", {
          staticClass: "d-flex flex-column justify-content-around"
        }, [_c("label", {
          staticClass: "form-check-label",
          staticStyle: {
            height: "unset"
          },
          attrs: {
            "for": "flexRadioDefault1"
          }
        }, [_vm._v("\n                                              Oui\n                                            ")]), _vm._v(" "), _c("input", {
          staticClass: "form-check-input",
          attrs: {
            type: "checkbox",
            name: "flexRadioDefault",
            id: "flexRadioDefault1"
          },
          domProps: {
            checked: d.value == true
          },
          on: {
            change: function change($event) {
              return _vm.update(true, _vm.index, "prommesseTenu", sublogidx, sublog, Logidx);
            }
          }
        })]), _vm._v(" "), _c("div", {
          staticClass: "d-flex flex-column justify-content-around"
        }, [_c("label", {
          staticClass: "form-check-label",
          staticStyle: {
            height: "unset"
          },
          attrs: {
            "for": "flexRadioDefault2"
          }
        }, [_vm._v("\n                                              Non\n                                            ")]), _vm._v(" "), _c("input", {
          staticClass: "form-check-input",
          attrs: {
            type: "checkbox",
            name: "flexRadioDefault",
            id: "flexRadioDefault2"
          },
          domProps: {
            checked: d.value == false
          },
          on: {
            change: function change($event) {
              return _vm.update(false, _vm.index, "prommesseTenu", sublogidx, sublog, Logidx);
            }
          }
        })])]) : d.label.toLowerCase() != "id" ? _c("span", [_vm._v("\n                                        " + _vm._s(d.value) + "\n                                    ")]) : _vm._e()]);
      })], 2);
    }) : _vm._e()], 2);
  })], 2)])])]) : _vm._e()]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/loan_recovery_iq/recovery_component/QuestionHistoryV2.vue?vue&type=template&id=a25be4c2":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/loan_recovery_iq/recovery_component/QuestionHistoryV2.vue?vue&type=template&id=a25be4c2 ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "historyBTN"
  }, [_c("button", {
    staticClass: "btn shadow-md text-white",
    staticStyle: {
      cursor: "pointer",
      background: "#2c3e50"
    },
    attrs: {
      type: "button"
    },
    on: {
      click: _vm.onOpen
    }
  }, [_vm._v(_vm._s(_vm.buttonTitle) + " "), _c("i", {
    staticClass: "icofont-history"
  })]), _vm._v(" "), _vm.open ? _c("div", {
    staticClass: "card historyCard",
    staticStyle: {
      width: "90%"
    }
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "header-card"
  }, [_c("h4", {
    staticClass: "card-title"
  }, [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-outline",
    attrs: {
      type: "button"
    },
    on: {
      click: _vm.onClose
    }
  }, [_c("i", {
    staticClass: "icofont-close"
  })])]), _vm._v(" "), _c("div", [_c("table", {
    staticClass: "table table-responsive"
  }, [_vm._m(0), _vm._v(" "), _c("tbody", _vm._l(_vm.promesse, function (log, Logidx) {
    var _vm$authUser;
    return _c("tr", {
      key: Logidx,
      "class": {
        loading: _vm.isloading
      }
    }, [!_vm.isloading ? [_c("th", [_c("h6", [_c("b", [_vm._v(_vm._s(log.author))])])]), _vm._v(" "), _c("td", [_c("time", [_vm._v(_vm._s(_vm.formatTimeStamp(log.created_at)))])]), _vm._v(" "), _c("td", [_vm._v("\n                                    " + _vm._s(log.commentaire) + "\n                                ")]), _vm._v(" "), _c("td", [_vm._v("\n                                    " + _vm._s(log.echeance) + "\n                                ")]), _vm._v(" "), _c("td", [_vm._v("\n                                    " + _vm._s(log.montant) + "\n                                ")]), _vm._v(" "), _c("td", [_vm._v("\n                                    " + _vm._s(_vm.getOriginLabel(log === null || log === void 0 ? void 0 : log.comingfrom)) + "\n                                ")]), _vm._v(" "), _c("td", [_c("div", {
      staticClass: "d-flex justify-content-around"
    }, [_c("div", {
      staticClass: "d-flex flex-column justify-content-around"
    }, [_c("label", {
      staticClass: "form-check-label",
      staticStyle: {
        height: "unset"
      },
      attrs: {
        "for": "flexRadioDefault1"
      }
    }, [_vm._v("\n                                                Oui\n                                               \n                                                \n                                            ")]), _vm._v(" "), _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.promesseTenu[log.created_at],
        expression: "promesseTenu[log.created_at]"
      }],
      staticClass: "form-check-input",
      attrs: {
        value: "true",
        disabled: log.user_id != ((_vm$authUser = _vm.authUser) === null || _vm$authUser === void 0 ? void 0 : _vm$authUser.user_id),
        type: "radio",
        name: "promesse_" + log.created_at,
        id: "flexRadioDefault1"
      },
      domProps: {
        checked: _vm._q(_vm.promesseTenu[log.created_at], "true")
      },
      on: {
        change: [function ($event) {
          return _vm.$set(_vm.promesseTenu, log.created_at, "true");
        }, _vm.updateStatus]
      }
    })]), _vm._v(" "), _c("div", {
      staticClass: "d-flex flex-column justify-content-around"
    }, [_c("label", {
      staticClass: "form-check-label",
      staticStyle: {
        height: "unset"
      },
      attrs: {
        "for": "flexRadioDefault2"
      }
    }, [_vm._v("\n                                                Non\n                                            ")]), _vm._v(" "), _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.promesseTenu[log.created_at],
        expression: "promesseTenu[log.created_at]"
      }],
      staticClass: "form-check-input",
      attrs: {
        type: "radio",
        value: "false",
        disabled: log.user_id != _vm.authUser.user_id,
        name: "promesse_" + log.created_at,
        id: "flexRadioDefault2"
      },
      domProps: {
        checked: _vm._q(_vm.promesseTenu[log.created_at], "false")
      },
      on: {
        change: [function ($event) {
          return _vm.$set(_vm.promesseTenu, log.created_at, "false");
        }, _vm.updateStatus]
      }
    })])])])] : [_c("th", {
      staticClass: "bar"
    }), _vm._v(" "), _c("td", {
      staticClass: "bar"
    }), _vm._v(" "), _c("td", {
      staticClass: "bar"
    }), _vm._v(" "), _c("td", {
      staticClass: "bar"
    }), _vm._v(" "), _c("td", {
      staticClass: "bar"
    }), _vm._v(" "), _c("td", {
      staticClass: "bar"
    }), _vm._v(" "), _c("td", {
      staticClass: "bar"
    })]], 2);
  }), 0)])])])]) : _vm._e()]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", {
    staticClass: "table-active"
  }, [_c("th", [_vm._v(" Auteur ")]), _vm._v(" "), _c("th", [_vm._v("\n                                Date\n                            ")]), _vm._v(" "), _c("th", [_vm._v("\n                                Commentaires\n                            ")]), _vm._v(" "), _c("th", [_vm._v("\n                                Échéance\n                            ")]), _vm._v(" "), _c("th", [_vm._v("\n                                Montant\n                            ")]), _vm._v(" "), _c("th", [_vm._v("\n                                Origine\n                            ")]), _vm._v(" "), _c("th", [_vm._v("\n                                Promesse tenu ?\n                            ")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/loan_recovery_iq/FR7.vue?vue&type=style&index=0&id=4e65c36a&lang=css&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/loan_recovery_iq/FR7.vue?vue&type=style&index=0&id=4e65c36a&lang=css&scoped=true ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "\n*[data-v-4e65c36a] {\r\n    font-family: \"Google sans\";\n}\nlabel[data-v-4e65c36a] {\r\n    height: 10px;\r\n    font-size: 13px;\n}\ninput[data-v-4e65c36a],\r\nselect[data-v-4e65c36a] {\r\n    border-color: #34495e;\r\n    color: #57606f;\r\n    font-size: 13px;\r\n    font-weight: bold;\n}\n.th[data-v-4e65c36a] {\r\n    padding: 4px;\r\n    padding-bottom: 0px;\n}\n.card-width-height[data-v-4e65c36a] {\r\n    width: 100%;\r\n    height: 100%;\n}\n.head[data-v-4e65c36a] {\r\n    color: #f1f2f6;\r\n    font-size: 22px;\n}\n.hdc[data-v-4e65c36a] {\r\n    background-color: #57606f;\n}\n.relook-header[data-v-4e65c36a] {\r\n    color: #000;\r\n    background-color: #f4f3f3;\r\n    padding: 5px;\r\n    border-bottom: 1px solid #b6b8bb;\n}\n.badge-sm[data-v-4e65c36a] {\r\n    display: inline-block;\r\n    width: 15px;\r\n    height: 15px;\r\n    background: rgba(255, 0, 0, 0.882);\r\n    color: white;\r\n    font-size: 12px;\r\n    font-weight: 500;\r\n    border-radius: 100%;\r\n    position: absolute;\r\n    top: -20%;\r\n    left: 55%;\r\n    text-align: center;\n}\ntd[data-v-4e65c36a],\r\np[data-v-4e65c36a] {\r\n    font-size: 13px;\n}\ntd[data-v-4e65c36a]{\r\n    vertical-align: middle;\n}\n.relook-header[data-v-4e65c36a] {\r\n    color: #000;\r\n    background-color: #f4f3f3;\r\n    padding: 5px;\r\n    border-bottom: 1px solid #b6b8bb;\n}\ninput[type=\"checkbox\"][data-v-4e65c36a] {\r\n    height: 18px;\r\n    width: 20px;\r\n    margin-right: 5px;\r\n    margin-top: 0;\n}\ninput[type=\"checkbox\"][data-v-4e65c36a]:disabled {\r\n    opacity: 0.4;\n}\n.textarea[data-v-4e65c36a] {\r\n    opacity: 1;\r\n    resize: vertical;\r\n    background-color: #e9ecef;\r\n    max-height: 200px;\r\n    min-height: calc(1.5em + 0.75rem + 2px);\r\n    overflow: auto;\n}\n.seuil[data-v-4e65c36a] {\r\n  color: #FD7E14;\r\n  font-weight: 600 !important;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/loan_recovery_iq/recovery_component/QuestionHistory.vue?vue&type=style&index=0&id=3bf9607a&lang=css&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/loan_recovery_iq/recovery_component/QuestionHistory.vue?vue&type=style&index=0&id=3bf9607a&lang=css&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.historyBTN[data-v-3bf9607a] {\r\n    margin: 5px;\n}\n.historyCard[data-v-3bf9607a] {\r\n    position: absolute;\r\n    z-index: 2;\r\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\r\n    overflow-y: scroll;\r\n    max-height: 400px;\n}\n.header-card[data-v-3bf9607a] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: 15px;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/loan_recovery_iq/recovery_component/QuestionHistoryV2.vue?vue&type=style&index=0&id=a25be4c2&lang=css":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/loan_recovery_iq/recovery_component/QuestionHistoryV2.vue?vue&type=style&index=0&id=a25be4c2&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.historyBTN {\r\n    margin: 5px;\n}\n.historyCard {\r\n    position: absolute;\r\n    z-index: 2;\r\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\r\n    overflow-y: scroll;\r\n    max-height: 400px;\n}\n.header-card {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: 15px;\n}\n@keyframes loading {\n40% {\r\n        background-position: 100% 0;\n}\n100% {\r\n        background-position: 100% 0;\n}\n}\n.loading {\r\n    position: relative;\r\n    padding: 10px;\n}\n.loading .bar {\r\n    background-color: #e7e7e7;\r\n    height: 20px;\r\n    margin: 5px;\r\n    /*border-radius: 7px;*/\r\n    width: 80%;\n}\n.loading:after {\r\n    position: absolute;\r\n    transform: translateY(-50%);\r\n    top: 50%;\r\n    left: 0;\r\n    content: \"\";\r\n    display: block;\r\n    width: 100%;\r\n    height: 24px;\r\n    background-image: linear-gradient(100deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.5) 60%, rgba(255, 255, 255, 0) 80%);\r\n    background-size: 200px 24px;\r\n    background-position: -100px 0;\r\n    background-repeat: no-repeat;\r\n    animation: loading 1s infinite;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/loan_recovery_iq/FR7.vue?vue&type=style&index=0&id=4e65c36a&lang=css&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/loan_recovery_iq/FR7.vue?vue&type=style&index=0&id=4e65c36a&lang=css&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FR7_vue_vue_type_style_index_0_id_4e65c36a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FR7.vue?vue&type=style&index=0&id=4e65c36a&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/loan_recovery_iq/FR7.vue?vue&type=style&index=0&id=4e65c36a&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FR7_vue_vue_type_style_index_0_id_4e65c36a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FR7_vue_vue_type_style_index_0_id_4e65c36a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/loan_recovery_iq/recovery_component/QuestionHistory.vue?vue&type=style&index=0&id=3bf9607a&lang=css&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/loan_recovery_iq/recovery_component/QuestionHistory.vue?vue&type=style&index=0&id=3bf9607a&lang=css&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_QuestionHistory_vue_vue_type_style_index_0_id_3bf9607a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./QuestionHistory.vue?vue&type=style&index=0&id=3bf9607a&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/loan_recovery_iq/recovery_component/QuestionHistory.vue?vue&type=style&index=0&id=3bf9607a&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_QuestionHistory_vue_vue_type_style_index_0_id_3bf9607a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_QuestionHistory_vue_vue_type_style_index_0_id_3bf9607a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/loan_recovery_iq/recovery_component/QuestionHistoryV2.vue?vue&type=style&index=0&id=a25be4c2&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/loan_recovery_iq/recovery_component/QuestionHistoryV2.vue?vue&type=style&index=0&id=a25be4c2&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_QuestionHistoryV2_vue_vue_type_style_index_0_id_a25be4c2_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./QuestionHistoryV2.vue?vue&type=style&index=0&id=a25be4c2&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/loan_recovery_iq/recovery_component/QuestionHistoryV2.vue?vue&type=style&index=0&id=a25be4c2&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_QuestionHistoryV2_vue_vue_type_style_index_0_id_a25be4c2_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_QuestionHistoryV2_vue_vue_type_style_index_0_id_a25be4c2_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/loan_recovery_iq/FR7.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/loan_recovery_iq/FR7.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FR7_vue_vue_type_template_id_4e65c36a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FR7.vue?vue&type=template&id=4e65c36a&scoped=true */ "./resources/js/components/loan_recovery_iq/FR7.vue?vue&type=template&id=4e65c36a&scoped=true");
/* harmony import */ var _FR7_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FR7.vue?vue&type=script&lang=js */ "./resources/js/components/loan_recovery_iq/FR7.vue?vue&type=script&lang=js");
/* harmony import */ var _FR7_vue_vue_type_style_index_0_id_4e65c36a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FR7.vue?vue&type=style&index=0&id=4e65c36a&lang=css&scoped=true */ "./resources/js/components/loan_recovery_iq/FR7.vue?vue&type=style&index=0&id=4e65c36a&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _FR7_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _FR7_vue_vue_type_template_id_4e65c36a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _FR7_vue_vue_type_template_id_4e65c36a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "4e65c36a",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/loan_recovery_iq/FR7.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/loan_recovery_iq/FR7.vue?vue&type=script&lang=js":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/loan_recovery_iq/FR7.vue?vue&type=script&lang=js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FR7_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FR7.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/loan_recovery_iq/FR7.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FR7_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/loan_recovery_iq/FR7.vue?vue&type=style&index=0&id=4e65c36a&lang=css&scoped=true":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/loan_recovery_iq/FR7.vue?vue&type=style&index=0&id=4e65c36a&lang=css&scoped=true ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FR7_vue_vue_type_style_index_0_id_4e65c36a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FR7.vue?vue&type=style&index=0&id=4e65c36a&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/loan_recovery_iq/FR7.vue?vue&type=style&index=0&id=4e65c36a&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/loan_recovery_iq/FR7.vue?vue&type=template&id=4e65c36a&scoped=true":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/loan_recovery_iq/FR7.vue?vue&type=template&id=4e65c36a&scoped=true ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FR7_vue_vue_type_template_id_4e65c36a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FR7_vue_vue_type_template_id_4e65c36a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FR7_vue_vue_type_template_id_4e65c36a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FR7.vue?vue&type=template&id=4e65c36a&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/loan_recovery_iq/FR7.vue?vue&type=template&id=4e65c36a&scoped=true");


/***/ }),

/***/ "./resources/js/components/loan_recovery_iq/recovery_component/PhoneInput.vue":
/*!************************************************************************************!*\
  !*** ./resources/js/components/loan_recovery_iq/recovery_component/PhoneInput.vue ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PhoneInput_vue_vue_type_template_id_5ce26b17__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PhoneInput.vue?vue&type=template&id=5ce26b17 */ "./resources/js/components/loan_recovery_iq/recovery_component/PhoneInput.vue?vue&type=template&id=5ce26b17");
/* harmony import */ var _PhoneInput_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PhoneInput.vue?vue&type=script&lang=js */ "./resources/js/components/loan_recovery_iq/recovery_component/PhoneInput.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PhoneInput_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _PhoneInput_vue_vue_type_template_id_5ce26b17__WEBPACK_IMPORTED_MODULE_0__.render,
  _PhoneInput_vue_vue_type_template_id_5ce26b17__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/loan_recovery_iq/recovery_component/PhoneInput.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/loan_recovery_iq/recovery_component/PhoneInput.vue?vue&type=script&lang=js":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/loan_recovery_iq/recovery_component/PhoneInput.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PhoneInput_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PhoneInput.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/loan_recovery_iq/recovery_component/PhoneInput.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PhoneInput_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/loan_recovery_iq/recovery_component/PhoneInput.vue?vue&type=template&id=5ce26b17":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/loan_recovery_iq/recovery_component/PhoneInput.vue?vue&type=template&id=5ce26b17 ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PhoneInput_vue_vue_type_template_id_5ce26b17__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PhoneInput_vue_vue_type_template_id_5ce26b17__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PhoneInput_vue_vue_type_template_id_5ce26b17__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PhoneInput.vue?vue&type=template&id=5ce26b17 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/loan_recovery_iq/recovery_component/PhoneInput.vue?vue&type=template&id=5ce26b17");


/***/ }),

/***/ "./resources/js/components/loan_recovery_iq/recovery_component/QuestionHistory.vue":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/loan_recovery_iq/recovery_component/QuestionHistory.vue ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _QuestionHistory_vue_vue_type_template_id_3bf9607a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QuestionHistory.vue?vue&type=template&id=3bf9607a&scoped=true */ "./resources/js/components/loan_recovery_iq/recovery_component/QuestionHistory.vue?vue&type=template&id=3bf9607a&scoped=true");
/* harmony import */ var _QuestionHistory_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QuestionHistory.vue?vue&type=script&lang=js */ "./resources/js/components/loan_recovery_iq/recovery_component/QuestionHistory.vue?vue&type=script&lang=js");
/* harmony import */ var _QuestionHistory_vue_vue_type_style_index_0_id_3bf9607a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./QuestionHistory.vue?vue&type=style&index=0&id=3bf9607a&lang=css&scoped=true */ "./resources/js/components/loan_recovery_iq/recovery_component/QuestionHistory.vue?vue&type=style&index=0&id=3bf9607a&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _QuestionHistory_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _QuestionHistory_vue_vue_type_template_id_3bf9607a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _QuestionHistory_vue_vue_type_template_id_3bf9607a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "3bf9607a",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/loan_recovery_iq/recovery_component/QuestionHistory.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/loan_recovery_iq/recovery_component/QuestionHistory.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/loan_recovery_iq/recovery_component/QuestionHistory.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuestionHistory_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./QuestionHistory.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/loan_recovery_iq/recovery_component/QuestionHistory.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuestionHistory_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/loan_recovery_iq/recovery_component/QuestionHistory.vue?vue&type=style&index=0&id=3bf9607a&lang=css&scoped=true":
/*!*************************************************************************************************************************************************!*\
  !*** ./resources/js/components/loan_recovery_iq/recovery_component/QuestionHistory.vue?vue&type=style&index=0&id=3bf9607a&lang=css&scoped=true ***!
  \*************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_QuestionHistory_vue_vue_type_style_index_0_id_3bf9607a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./QuestionHistory.vue?vue&type=style&index=0&id=3bf9607a&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/loan_recovery_iq/recovery_component/QuestionHistory.vue?vue&type=style&index=0&id=3bf9607a&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/loan_recovery_iq/recovery_component/QuestionHistory.vue?vue&type=template&id=3bf9607a&scoped=true":
/*!***********************************************************************************************************************************!*\
  !*** ./resources/js/components/loan_recovery_iq/recovery_component/QuestionHistory.vue?vue&type=template&id=3bf9607a&scoped=true ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_QuestionHistory_vue_vue_type_template_id_3bf9607a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_QuestionHistory_vue_vue_type_template_id_3bf9607a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_QuestionHistory_vue_vue_type_template_id_3bf9607a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./QuestionHistory.vue?vue&type=template&id=3bf9607a&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/loan_recovery_iq/recovery_component/QuestionHistory.vue?vue&type=template&id=3bf9607a&scoped=true");


/***/ }),

/***/ "./resources/js/components/loan_recovery_iq/recovery_component/QuestionHistoryV2.vue":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/loan_recovery_iq/recovery_component/QuestionHistoryV2.vue ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _QuestionHistoryV2_vue_vue_type_template_id_a25be4c2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QuestionHistoryV2.vue?vue&type=template&id=a25be4c2 */ "./resources/js/components/loan_recovery_iq/recovery_component/QuestionHistoryV2.vue?vue&type=template&id=a25be4c2");
/* harmony import */ var _QuestionHistoryV2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QuestionHistoryV2.vue?vue&type=script&lang=js */ "./resources/js/components/loan_recovery_iq/recovery_component/QuestionHistoryV2.vue?vue&type=script&lang=js");
/* harmony import */ var _QuestionHistoryV2_vue_vue_type_style_index_0_id_a25be4c2_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./QuestionHistoryV2.vue?vue&type=style&index=0&id=a25be4c2&lang=css */ "./resources/js/components/loan_recovery_iq/recovery_component/QuestionHistoryV2.vue?vue&type=style&index=0&id=a25be4c2&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _QuestionHistoryV2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _QuestionHistoryV2_vue_vue_type_template_id_a25be4c2__WEBPACK_IMPORTED_MODULE_0__.render,
  _QuestionHistoryV2_vue_vue_type_template_id_a25be4c2__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/loan_recovery_iq/recovery_component/QuestionHistoryV2.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/loan_recovery_iq/recovery_component/QuestionHistoryV2.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/loan_recovery_iq/recovery_component/QuestionHistoryV2.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuestionHistoryV2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./QuestionHistoryV2.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/loan_recovery_iq/recovery_component/QuestionHistoryV2.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuestionHistoryV2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/loan_recovery_iq/recovery_component/QuestionHistoryV2.vue?vue&type=style&index=0&id=a25be4c2&lang=css":
/*!***************************************************************************************************************************************!*\
  !*** ./resources/js/components/loan_recovery_iq/recovery_component/QuestionHistoryV2.vue?vue&type=style&index=0&id=a25be4c2&lang=css ***!
  \***************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_QuestionHistoryV2_vue_vue_type_style_index_0_id_a25be4c2_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./QuestionHistoryV2.vue?vue&type=style&index=0&id=a25be4c2&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/loan_recovery_iq/recovery_component/QuestionHistoryV2.vue?vue&type=style&index=0&id=a25be4c2&lang=css");


/***/ }),

/***/ "./resources/js/components/loan_recovery_iq/recovery_component/QuestionHistoryV2.vue?vue&type=template&id=a25be4c2":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/components/loan_recovery_iq/recovery_component/QuestionHistoryV2.vue?vue&type=template&id=a25be4c2 ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_QuestionHistoryV2_vue_vue_type_template_id_a25be4c2__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_QuestionHistoryV2_vue_vue_type_template_id_a25be4c2__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_QuestionHistoryV2_vue_vue_type_template_id_a25be4c2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./QuestionHistoryV2.vue?vue&type=template&id=a25be4c2 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/loan_recovery_iq/recovery_component/QuestionHistoryV2.vue?vue&type=template&id=a25be4c2");


/***/ })

}]);