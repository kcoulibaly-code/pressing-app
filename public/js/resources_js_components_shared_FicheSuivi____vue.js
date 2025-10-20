"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_shared_FicheSuivi____vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/FicheSuivi___.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/FicheSuivi___.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./resources/js/services/auth.service.js");
/* harmony import */ var _johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @johmun/vue-tags-input */ "./node_modules/@johmun/vue-tags-input/dist/vue-tags-input.js");
/* harmony import */ var _johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_credit_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/credit.service */ "./resources/js/services/credit.service.js");
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), c(GeneratorFunctionPrototype, u, GeneratorFunction.displayName = "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "FicheSuivi",
  props: {
    // fiche_suivi: Array,
    cred_pub_key: String,
    fiche_suivi: Array
  },
  components: {
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_4__.PlusIcon,
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_4__.TrashIcon,
    MoreVerticalIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_4__.MoreVerticalIcon,
    ChevronUpIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_4__.ChevronUpIcon,
    ChevronDownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_4__.ChevronDownIcon,
    VueTagsInput: (_johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_2___default())
  },
  computed: {
    // checkButtonStatus(){
    // }
    filteredUsers: function filteredUsers() {
      var _this = this;
      var tex;
      // console.log("this tag", this.tag)
      this.receivers = this.users.filter(function (user) {
        return user.name.toLocaleLowerCase().includes(_this.tag.toLocaleLowerCase());
      }).map(function (el) {
        return tex = el.name + ' (' + el.role_name + ')', _objectSpread({
          text: tex
        }, el);
      });
      // console.log("this receivers", this.receivers, "this.tag", this.tag)
      return this.receivers;
    }
  },
  mounted: function mounted() {
    var _this2 = this;
    _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["default"].loadUserData().then(function (res) {
      _this2.user = res.data;
    });
  },
  created: function created() {
    var _this3 = this;
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _this3.populateFicheSuivi();
          case 2:
            _this3.getComputedHeight();
            _this3.getUsers();
          case 4:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  data: function data() {
    var _ref;
    return _ref = {
      user_id: null,
      user: null,
      newQuestion: null,
      ficheLoading: {},
      isLoding: false,
      buttonStatuses: [],
      seen: true,
      ebapisHost: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__["default"].host,
      items: [],
      fiche_suivis: [],
      ficheSuivi_model: {
        fiche: [{
          question: "",
          reponse: "",
          is_answered: false
        }],
        sender: "",
        receivers: ""
      },
      // buttonStatus: false,
      filterInput: "",
      tagValue: undefined,
      tagging: false,
      users: [],
      taggedUsers: [],
      autocompleteItems: [],
      tag: "",
      tags: []
    }, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_ref, "ebapisHost", _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__["default"].host), "editingMode", true), "authcheck", false), "authcheckUsr", null), "authcheckStatus", null), "watchInPause", false), "initLoad", true), "seen", true), "listingNote", false), "dossier_credit", null), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_ref, "display_response", false), "formDataToBeWatched", {
      item: '',
      fiche_id: "",
      reponses: "",
      user: "",
      notes: []
    }), "fiche_lecture", [[{
      question: "",
      niveau_risque: "",
      avis: ""
    }, {
      reponse: "",
      niveau_risque: "",
      avis: ""
    }]]), "isResponse", false), "isEditable", {});
  },
  methods: {
    isReceiver: function isReceiver(id) {
      var _this$user;
      var allow = false;
      // console.log("user_has sent fiche", this.user)
      var permittedRoles = [];
      if (((_this$user = this.user) === null || _this$user === void 0 ? void 0 : _this$user.role_uuid) != undefined) {
        var _this$fiche_suivis;
        // console.log("fiche_suis", this.fiche_suivis)
        if (((_this$fiche_suivis = this.fiche_suivis[id - 1]) === null || _this$fiche_suivis === void 0 || (_this$fiche_suivis = _this$fiche_suivis.content) === null || _this$fiche_suivis === void 0 ? void 0 : _this$fiche_suivis.receivers) != undefined) {
          var _this$fiche_suivis2, _this$user2;
          if (((_this$fiche_suivis2 = this.fiche_suivis[id - 1]) === null || _this$fiche_suivis2 === void 0 || (_this$fiche_suivis2 = _this$fiche_suivis2.content) === null || _this$fiche_suivis2 === void 0 ? void 0 : _this$fiche_suivis2.receivers) != '') {
            var _this$fiche_suivis3;
            (_this$fiche_suivis3 = this.fiche_suivis[id - 1]) === null || _this$fiche_suivis3 === void 0 || (_this$fiche_suivis3 = _this$fiche_suivis3.content) === null || _this$fiche_suivis3 === void 0 || _this$fiche_suivis3.receivers.forEach(function (el) {
              permittedRoles.push(el === null || el === void 0 ? void 0 : el.role_id);
            });
          }
          if (permittedRoles.includes((_this$user2 = this.user) === null || _this$user2 === void 0 ? void 0 : _this$user2.role_uuid)) {
            return true;
          }
        }
      }
      return allow;
    },
    isSender: function isSender(id) {
      var _this$user3;
      var allow = false;
      var permittedRoles = [];
      if (((_this$user3 = this.user) === null || _this$user3 === void 0 ? void 0 : _this$user3.role_uuid) != undefined) {
        var _this$fiche_suivis4;
        if (((_this$fiche_suivis4 = this.fiche_suivis[id - 1]) === null || _this$fiche_suivis4 === void 0 || (_this$fiche_suivis4 = _this$fiche_suivis4.content) === null || _this$fiche_suivis4 === void 0 ? void 0 : _this$fiche_suivis4.sender) != undefined) {
          var _this$fiche_suivis5, _this$user4;
          if (((_this$fiche_suivis5 = this.fiche_suivis[id - 1]) === null || _this$fiche_suivis5 === void 0 || (_this$fiche_suivis5 = _this$fiche_suivis5.content) === null || _this$fiche_suivis5 === void 0 ? void 0 : _this$fiche_suivis5.sender) != '') {
            var _this$fiche_suivis6;
            permittedRoles.push((_this$fiche_suivis6 = this.fiche_suivis[id - 1]) === null || _this$fiche_suivis6 === void 0 || (_this$fiche_suivis6 = _this$fiche_suivis6.content) === null || _this$fiche_suivis6 === void 0 || (_this$fiche_suivis6 = _this$fiche_suivis6.sender) === null || _this$fiche_suivis6 === void 0 ? void 0 : _this$fiche_suivis6.role_uuid);
          } else {
            return true;
          }
          if (permittedRoles.includes((_this$user4 = this.user) === null || _this$user4 === void 0 ? void 0 : _this$user4.role_uuid)) {
            return true;
          }
        }
      }
      return allow;
    },
    // canSubmitResponse(id){
    //     let allow = false
    //     let permittedRoles = []
    //     if(this.user?.role_uuid != undefined ){
    //         if(this.fiche_suivis[id-1]?.content?.sender != undefined){
    //             if (this.fiche_suivis[id-1]?.content?.sender!= ''){
    //                 permittedRoles.push(this.fiche_suivis[id-1]?.content?.sender?.role_uuid)
    //             }
    //             if(permittedRoles.includes(this.user?.role_uuid)){
    //                 return true
    //             }
    //             }
    //         }
    //     return allow
    // },
    SubmitResponses: function SubmitResponses(item) {
      var _this4 = this;
      var loaders = {};
      loaders[item.id] = true;
      this.ficheLoading = Object.assign({}, this.ficheLoading, loaders);
      this.tags = [this.fiche_suivi[item.id - 1]["sender"]];
      _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["default"].loadUserData().then(function (res) {
        _this4.$axios.post(_this4.ebapisHost + "creditbuilder/api/v1/save-fiche-suivi-responses/", {
          cred_pub_key: _this4.cred_pub_key,
          sender: res.data,
          receivers: _this4.tags,
          fiche_suivis: item["content"],
          fiche_id: item.id - 1
        }).then(function (response) {
          _this4.isLoding = false;
          loaders[item.id] = false;
          _this4.ficheLoading = Object.assign({}, _this4.ficheLoading, loaders);
          _this4.$set(_this4.ficheLoading, item.id, false);
          _this4.buttonStatus = false;
          _this4.NotifyUser(res.data, _this4.tags);
          _this4.$toasted.show("Reponses sauvegardées avec succès");
          EventBus.$emit('value-updated');
          _this4.$emit("fiche-suivi-sent");
        });
      });
    },
    NotifyUser: function NotifyUser(sender, receivers) {
      var _this5 = this;
      var what_tobe_notified = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "FICHE-SUIVI";
      console.log("receivers", receivers);
      this.$axios.post(this.ebapisHost + "notifications/api/v1/questions-responses-notifications/", {
        cred_pub_key: this.cred_pub_key,
        sender: sender,
        receivers: receivers,
        what_tobe_notified: what_tobe_notified
      }).then(function (response) {
        _this5.tags = [];
        EventBus.$emit("message-send");
        _this5.$toasted.show("Message envoyé avec succès");
      })["catch"](function (error) {
        console.log(error);
      });
    },
    handleInput: function handleInput(fiche_suivi) {
      // console.log("fiche_suivi", fiche_suivi)
      // this.buttonStatuses[ficheIndex] = true;
      this.formDataToBeWatched.item = fiche_suivi === null || fiche_suivi === void 0 ? void 0 : fiche_suivi.content;
      this.formDataToBeWatched.id = (fiche_suivi === null || fiche_suivi === void 0 ? void 0 : fiche_suivi.id) - 1;
      fiche_suivi.content.sender = this.user;
    },
    getButtonStatus: function getButtonStatus(ficheIndex) {
      return this.buttonStatuses[ficheIndex];
    },
    getUsers: function getUsers() {},
    addQuestion: function addQuestion(ficheIndex) {
      // if (!this.newQuestion) return;
      console.log("content", this.fiche_suivis[ficheIndex]);
      this.fiche_suivis[ficheIndex].content.fiche.push({
        question: "",
        reponse: "",
        is_answered: false
      });
      this.newQuestion = null;
    },
    removeQuestion: function removeQuestion(ficheIndex, index) {
      this.fiche_suivis[ficheIndex].content.fiche.splice(index, 1);
    },
    addFicheSuivi: function addFicheSuivi() {
      //
      this.fiche_suivis.push({
        id: this.fiche_suivis.length + 1,
        title: "Fiche de suivi ".concat(this.fiche_suivis.length + 1),
        content: this.ficheSuivi_model,
        isExpand: true,
        computedHeight: 0,
        tb_key: "tb_key" + this.fiche_suivis.length + 1
      });
      this.buttonStatuses.push(false);
      this.ficheLoading[this.fiche_suivis.length] = false;
      this.getComputedHeight();
    },
    removeFicheSuivi: function removeFicheSuivi(index) {
      var _this$fiche_suivis$in,
        _this6 = this;
      var answered = [];
      var a = true;
      (_this$fiche_suivis$in = this.fiche_suivis[index]) === null || _this$fiche_suivis$in === void 0 || (_this$fiche_suivis$in = _this$fiche_suivis$in.content) === null || _this$fiche_suivis$in === void 0 || _this$fiche_suivis$in.fiche.forEach(function (element) {
        answered.push(element === null || element === void 0 ? void 0 : element.is_answered);
      });
      console.log("answered", answered.indexOf(a) > 0);
      if (answered.indexOf(a) > 0) {
        console.log("answered", answered);
        this.$toasted.show("Vous ne pouvez pas supprimer");
      } else {
        var _this$user5, _this$fiche_suivis$in2;
        // il peut supprimer la fiche OKLM
        if (((_this$user5 = this.user) === null || _this$user5 === void 0 ? void 0 : _this$user5.user_id) != ((_this$fiche_suivis$in2 = this.fiche_suivis[index]) === null || _this$fiche_suivis$in2 === void 0 || (_this$fiche_suivis$in2 = _this$fiche_suivis$in2.content) === null || _this$fiche_suivis$in2 === void 0 || (_this$fiche_suivis$in2 = _this$fiche_suivis$in2.sender) === null || _this$fiche_suivis$in2 === void 0 ? void 0 : _this$fiche_suivis$in2.user_id)) {
          this.$toasted.show("Vous ne pouvez pas supprimer cette fiche");
        } else {
          this.$axios.post(this.ebapisHost + "creditbuilder/api/v1/delete-fiche-suivis/", {
            cred_pub_key: this.cred_pub_key,
            fiche_id: this.fiche_suivis[index]['id'] - 1
          }).then(function (response) {
            _this6.$toasted.show("Fiche supprimer avec succès");
            EventBus.$emit("value-updated");
            EventBus.$emit("fiche-suivi-sent");
          })["catch"](function (error) {
            console.log(error);
          });
        }
      }
      // if (this.user?.user_id != this.fiche_suivis[index]?.content?.sender?.user_id)
      // this.fiche_suivis.splice(index, 1);
    },
    checkButtonStatus: function checkButtonStatus(item) {
      var _this7 = this;
      item === null || item === void 0 || item.content.forEach(function (element) {
        if (element[0].reponse != "") {
          // this.buttonStatus[item.id] = true;
          _this7.buttonStatuses[item.id] = true;
        }
      });
      console.log("bttonStatus", this.buttonStatus[item.id]);
    },
    submitFicheSuivi: function submitFicheSuivi(item) {
      var _this8 = this;
      var loaders = {};
      loaders[item.id] = true;
      this.ficheLoading = Object.assign({}, this.ficheLoading, loaders);
      // console.log('item', item)
      item.content.receivers = this.tags;
      item.content.sender = this.user;
      _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["default"].loadUserData().then(function (res) {
        _this8.$axios.post(_this8.ebapisHost + "creditbuilder/api/v1/save-fiche-suivi/", {
          cred_pub_key: _this8.cred_pub_key,
          sender: res.data,
          receivers: _this8.tags,
          fiche_suivis: item["content"],
          fiche_id: item.id - 1
        }).then(function (response) {
          _this8.$toasted.show("Reponses sauvegardées avec succès");
          _this8.isLoding = false;
          loaders[item.id] = false;
          _this8.ficheLoading = Object.assign({}, _this8.ficheLoading, loaders);
          _this8.$set(_this8.ficheLoading, item.id, false);
          _this8.buttonStatus = false;
          // this.NotifyUser(res.data, this.tags)
          // EventBus.$emit("savedclosed-table", a)
          // this.$forceUpdate();
          _this8.$emit("created");
        })["catch"](function (error) {
          console.log(error);
          _this8.isLoding = false;
          loaders[item.id] = false;
          _this8.ficheLoading = Object.assign({}, _this8.ficheLoading, loaders);
          _this8.$set(_this8.ficheLoading, item.id, false);
        });
      });
    },
    toggleExpand: function toggleExpand(item) {
      item.isExpand = !item.isExpand;
    },
    // toggleExpand() {
    //     // item.isExpand = !item.isExpand;
    //     this.fiche_suivi.isExpand = !this.fiche_suivi.isExpand;
    //     // this.getComputedHeight();
    // },
    getComputedHeight: function getComputedHeight() {
      var _this9 = this;
      console.log("this.fiche_suivis", this.fiche_suivis);
      // this.items.forEach((item) => {
      if (this.fiche_suivis != undefined) {
        if (this.fiche_suivis.length > 0) {
          this.fiche_suivis.forEach(function (item) {
            // var content = this.$refs["content" + item.id][0];
            var content = _this9.$refs["content" + item.id];
            content.style.height = "auto";
            content.style.position = "absolute";
            content.style.visibility = "hidden";
            content.style.display = "block";
            var height = getComputedStyle(content).height;
            item.computedHeight = height;
            content.style.height = 0;
            content.style.position = null;
            content.style.visibility = null;
            content.style.display = null;
          });
        }
      }
    },
    getReceiversId: function getReceiversId(a) {
      var receivers_id = [0];
      a.forEach(function (element) {
        receivers_id.push(element.id);
      });
      return receivers_id;
    },
    populateFicheSuivi: function populateFicheSuivi() {
      var _this0 = this;
      var receivers_id;
      _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["default"].loadUserData().then(function (res) {
        _this0.user_id = res.data["user_id"];
        // console.log("fiche_suivi", this.fiche_suivi)
        if (_this0.fiche_suivi != undefined) {
          if (_this0.fiche_suivi.length > 0) {
            for (var i = 0; i < _this0.fiche_suivi.length; i++) {
              // receivers_id = this.getReceiversId(this.fiche_suivi[i]["receivers"])
              // console.log("receivers_id",receivers_id)
              var a = {
                id: i + 1,
                title: "Fiche de suivi ".concat(i + 1),
                content: _this0.fiche_suivi[i],
                isExpand: i == 0 ? true : false,
                computedHeight: 0,
                tb_key: "tb_key" + _this0.fiche_suivi.length + 1
              };
              // console.log("aaaaaa", a), this.items.push(a);
              _this0.fiche_suivis.push(a);
              _this0.ficheLoading[i + 1] = false;
              _this0.isEditable[i + 1] = false;
              _this0.buttonStatuses.push(true);
              //console.log('this.ficheLoading', this.ficheLoading)
              // if ((this.fiche_suivi[i]["sender"]["user_id"] == this.user_id)|| receivers_id.includes(this.user_id) ) {
              //     let a = {
              //         id: i + 1,
              //         title: `Fiche de suivi ${i + 1}`,
              //         content: this.fiche_suivi[i]["fiche_suivi"],
              //         isExpand: i == 0 ? true : false,
              //         computedHeight: 0,
              //         tb_key: "tb_key" + this.fiche_suivi.length + 1,
              //     };
              //     // console.log("aaaaaa", a), this.items.push(a);
              //     this.fiche_suivis.push(a);
              //     this.ficheLoading[i + 1] = false;
              //     this.isEditable[i + 1] = false;
              //     this.buttonStatuses.push(true);
              //     console.log('this.ficheLoading', this.ficheLoading)
              // }
            }
          } else {
            _this0.fiche_suivis.push({
              id: _this0.fiche_suivis.length + 1,
              title: "Fiche de suivi ".concat(_this0.fiche_suivis.length + 1),
              content: _this0.ficheSuivi_model,
              isExpand: true,
              computedHeight: 0,
              tb_key: "tb_key" + _this0.fiche_suivis.length + 1
            });
            _this0.ficheLoading[_this0.fiche_suivis.length] = false;
            _this0.isEditable[_this0.fiche_suivis.length] = true;
          }
        } else {
          _this0.fiche_suivis.push({
            id: _this0.fiche_suivis.length + 1,
            title: "Fiche de suivi ".concat(_this0.fiche_suivis.length + 11),
            content: _this0.ficheSuivi_model,
            isExpand: true,
            computedHeight: 0,
            tb_key: "tb_key" + _this0.fiche_suivis.length + 1
          });
          _this0.ficheLoading[_this0.fiche_suivis.length] = false;
          _this0.isEditable[_this0.fiche_suivis.length] = true;
        }
      });
    },
    sendToBackend: function sendToBackend(res, newVal, oldVal) {
      this.$emit("autosaving");
      this.$axios.post(this.ebapisHost + "creditbuilder/api/v1/autosave-fiche-suivi/", {
        cred_pub_key: this.cred_pub_key,
        // sender: res.data,
        // receivers: this.tags,
        fiche_suivi: this.formDataToBeWatched
      }).then(function (response) {
        this.$emit("autosaving");
        // this.$Progress.finish();
        // console.log(response);
        var tbFetcheData = response.data;
        if (tbFetcheData["is_success"] === true) {
          this.dossier_credit = tbFetcheData['dossier_credit'];
          // this.formDataToBeWatched.ligne_existantes = this.dossier_credit.cred_pub_tb_34.lignes_existantes;
          // this.formDataToBeWatched.ligne_existantes.ligne_mfcfa_ca = this.dossier_credit.cred_pub_tb_34.ligne_existantes.ligne_mfcfa
          this.$emit("load-shell");
        }
      }.bind(this))["catch"](function (error) {
        this.$Progress.finish();
        console.log(error);
      }.bind(this));
    },
    checkAuthenticated: function checkAuthenticated() {
      var _this1 = this;
      _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["default"].loadUserData().then(function (res) {
        _this1.authcheckUsr = res.data;
        console.log("this.authcheckUsr", _this1.authcheckUsr);
      });
    },
    autosaveFiche: function autosaveFiche(newVal, oldVal) {
      var _this10 = this;
      _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["default"].loadUserData().then(function (res) {
        _this10.sendToBackend(res, newVal, oldVal);
      })["catch"](function (err) {
        _this10.loadWithError(err);
      });
    }
  },
  watch: {
    formDataToBeWatched: {
      handler: function handler(newVal, oldVal) {
        // if (oldVal === undefined) {
        //   return
        // }
        this.autosaveFiche(newVal, oldVal);
      },
      deep: true
      // immediate: true,
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/FicheSuivi___.vue?vue&type=template&id=42a298ba&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/FicheSuivi___.vue?vue&type=template&id=42a298ba&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.user != null ? _c("div", [ true ? _c("div", [_c("div", {
    staticClass: "text-center"
  }, [_c("h1", [_c("span", {
    staticClass: "position-relative"
  }, [_vm._v("Fiches de suivi\n                "), _c("span", {
    staticClass: "badge btn btn-danger position-absolute top-0 start-100 translate-middle text-light rounded-pill",
    staticStyle: {
      outline: "none",
      "font-size": "8px",
      "margin-left": "10px"
    }
  }, [_vm._v(_vm._s(_vm.fiche_suivis.length))])])])]), _vm._v(" "), _vm._l(_vm.fiche_suivis, function (fiche_suivi, ficheIndex) {
    var _fiche_suivi$content;
    return _c("div", {
      key: fiche_suivi.id,
      staticClass: "d-flex justify-content-center"
    }, [_c("div", {
      staticClass: "card"
    }, [_c("div", {
      staticClass: "card-header",
      on: {
        click: function click($event) {
          $event.preventDefault();
          return _vm.toggleExpand(fiche_suivi);
        }
      }
    }, [_c("span", [_vm._v(_vm._s(fiche_suivi.title))]), _vm._v(" "), _c("div", {
      staticClass: "icon"
    }, [!fiche_suivi.isExpand ? _c("i", {
      staticClass: "fas fa-arrow-down"
    }) : _vm._e(), _vm._v(" "), fiche_suivi.isExpand ? _c("i", {
      staticClass: "fas fa-arrow-up"
    }) : _vm._e(), _vm._v(" "), _c("div", {
      staticClass: "col-auto"
    }, [fiche_suivi.isExpand ? _c("chevron-up-icon", {
      staticClass: "custom-class",
      staticStyle: {
        cursor: "pointer"
      },
      attrs: {
        size: "21"
      },
      on: {
        click: function click($event) {
          _vm.seen = !_vm.seen;
        }
      }
    }) : _vm._e(), _vm._v(" "), !fiche_suivi.isExpand ? _c("chevron-down-icon", {
      staticClass: "custom-class",
      staticStyle: {
        cursor: "pointer"
      },
      attrs: {
        size: "21"
      },
      on: {
        click: function click($event) {
          _vm.seen = !_vm.seen;
        }
      }
    }) : _vm._e()], 1)])]), _vm._v(" "), _c("div", {
      ref: "content" + fiche_suivi.id,
      refInFor: true,
      staticClass: "card-body py-0",
      style: [fiche_suivi.isExpand ? {
        height: fiche_suivi.computedHeight
      } : {}]
    }, [_c("div", {
      staticClass: "d-flex justify-content-between"
    }), _vm._v(" "), _c("hr"), _vm._v(" "), (fiche_suivi === null || fiche_suivi === void 0 || (_fiche_suivi$content = fiche_suivi.content) === null || _fiche_suivi$content === void 0 ? void 0 : _fiche_suivi$content.length) > 0 ? _c("div", {
      staticClass: "row"
    }, [_c("div", {
      staticClass: "col-1"
    }, [_vm._v("N°")]), _vm._v(" "), _c("div", {
      staticClass: "col"
    }, [_vm._v("Régularisation")]), _vm._v(" "), _c("div", {
      staticClass: "col-auto"
    }, [_vm._v(_vm._s(fiche_suivi === null || fiche_suivi === void 0 ? void 0 : fiche_suivi.content))])]) : _vm._e(), _vm._v(" "), _vm._l(fiche_suivi.content.fiche, function (itm, index) {
      return _c("div", {
        key: index,
        staticClass: "card-content"
      }, [_c("div", {
        staticClass: "row"
      }, [_c("div", {
        staticClass: "col-1"
      }, [_vm._v(_vm._s(index + 1))]), _vm._v(" "), _c("div", {
        staticClass: "col-10"
      }, [_c("textarea", {
        directives: [{
          name: "model",
          rawName: "v-model.lazy",
          value: itm.question,
          expression: "itm.question",
          modifiers: {
            lazy: true
          }
        }],
        staticClass: "form-control text-danger",
        attrs: {
          disabled: itm.is_answered || !_vm.isSender(fiche_suivi.id),
          type: "text",
          placeholder: "Entrez votre préoccupation",
          cols: "30",
          rows: "1"
        },
        domProps: {
          value: itm.question
        },
        on: {
          change: [function ($event) {
            return _vm.$set(itm, "question", $event.target.value);
          }, function ($event) {
            return _vm.handleInput(fiche_suivi);
          }]
        }
      })]), _vm._v(" "), _c("div", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: index == 0,
          expression: "index == 0"
        }],
        staticClass: "col-1"
      }, [_c("button", {
        staticStyle: {
          "background-color": "#2c3e50",
          color: "#ffffff",
          "border-radius": "15%",
          border: "none"
        },
        attrs: {
          type: "button",
          title: "Ajouter une nouvelle préoccupation"
        },
        on: {
          click: function click($event) {
            return _vm.addQuestion(ficheIndex);
          }
        }
      }, [_c("plus-icon", {
        staticClass: "custom-class",
        attrs: {
          size: "21"
        }
      })], 1)]), _vm._v(" "), _c("div", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: index != 0 && !itm.is_answered,
          expression: "index != 0 && !itm.is_answered"
        }],
        staticClass: "col-1"
      }, [_c("button", {
        staticStyle: {
          "background-color": "transparent",
          border: "none"
        },
        attrs: {
          type: "button",
          title: "Supprimer cette fiche de lecture"
        },
        on: {
          click: function click($event) {
            return _vm.removeQuestion(ficheIndex, index);
          }
        }
      }, [_c("trash-icon", {
        staticClass: "custom-class",
        attrs: {
          size: "21"
        }
      })], 1)])]), _vm._v(" "), _vm.isEditable[fiche_suivi.id] == false ? _c("div", {
        staticClass: "row mt-3"
      }, [_c("div", {
        staticClass: "col-1"
      }, [_vm._v("R" + _vm._s(index + 1))]), _vm._v(" "), _c("div", {
        staticClass: "col-10"
      }, [_c("textarea", {
        directives: [{
          name: "model",
          rawName: "v-model.lazy",
          value: itm.reponse,
          expression: "itm.reponse",
          modifiers: {
            lazy: true
          }
        }],
        staticClass: "form-control text-success",
        attrs: {
          disabled: !_vm.isReceiver(fiche_suivi.id),
          type: "text",
          disable: true,
          placeholder: "Entrez votre réponse ici",
          cols: "30",
          rows: "1"
        },
        domProps: {
          value: itm.reponse
        },
        on: {
          change: [function ($event) {
            return _vm.$set(itm, "reponse", $event.target.value);
          }, function ($event) {
            return _vm.handleInput(fiche_suivi);
          }]
        }
      })]), _vm._v(" "), _c("div", {
        staticClass: "col-1"
      })]) : _vm._e()]);
    }), _vm._v(" "), _c("br"), _vm._v(" "), _vm.isEditable[fiche_suivi.id] != false ? _c("div", {
      staticClass: "row mt-2 ml-4 mb-3"
    }, [_c("div", {
      staticClass: "col-1"
    }), _vm._v(" "), _c("div", {
      staticClass: "col"
    }, [_c("vue-tags-input", {
      attrs: {
        "autocomplete-items": _vm.filteredUsers,
        tags: _vm.tags,
        placeholder: "Ajouter un collaborateur à notifier"
      },
      on: {
        "tags-changed": function tagsChanged(newTags) {
          return _vm.tags = newTags;
        }
      },
      model: {
        value: _vm.tag,
        callback: function callback($$v) {
          _vm.tag = $$v;
        },
        expression: "tag"
      }
    })], 1), _vm._v(" "), _vm.ficheLoading[fiche_suivi.id] == false ? _c("div", {
      staticClass: "col-auto justify-end"
    }, [_c("button", {
      staticClass: "btn btn-primary",
      attrs: {
        id: fiche_suivi.id,
        disabled: _vm.tags.length == 0
      },
      on: {
        click: function click($event) {
          return _vm.submitFicheSuivi(fiche_suivi);
        }
      }
    }, [_vm._v("\n                            Soumettre\n                        ")])]) : _vm._e(), _vm._v(" "), _vm.ficheLoading[fiche_suivi.id] == true ? _c("div", {
      staticClass: "spinner-border text-primary",
      attrs: {
        role: "status"
      }
    }, [_c("span", {
      staticClass: "sr-only"
    }, [_vm._v("Loading...")])]) : _vm._e()]) : _vm._e(), _vm._v(" "), _vm.isReceiver(fiche_suivi.id) == true ? _c("div", {
      staticClass: "d-flex flex-row-reverse bd-highlight"
    }, [_vm.ficheLoading[fiche_suivi.id] == false ? _c("div", {
      staticClass: "p-2 bd-highlight"
    }, [_c("button", {
      staticClass: "btn btn-primary",
      attrs: {
        id: fiche_suivi.id
      },
      on: {
        click: function click($event) {
          return _vm.SubmitResponses(fiche_suivi);
        }
      }
    }, [_vm._v("\n                            Soumettre\n                        ")])]) : _vm._e(), _vm._v(" "), _vm.ficheLoading[fiche_suivi.id] == true ? _c("div", {
      staticClass: "spinner-border text-primary",
      attrs: {
        role: "status"
      }
    }, [_c("span", {
      staticClass: "sr-only"
    }, [_vm._v("Loading...")])]) : _vm._e()]) : _vm._e(), _vm._v(" "), _c("div", {
      staticClass: "d-flex flex-row-reverse bd-highlight"
    }, [ true ? _c("div", {
      staticClass: "p-2 bd-highlight"
    }, [_c("button", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: true,
        expression: "true"
      }],
      staticStyle: {
        "background-color": "transparent",
        border: "none"
      },
      attrs: {
        type: "button",
        title: "Supprimer cette fiche de lecture"
      },
      on: {
        click: function click($event) {
          return _vm.removeFicheSuivi(ficheIndex);
        }
      }
    }, [_c("trash-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1)]) : 0, _vm._v(" "), _c("div", {
      staticClass: "p-2 bd-highlight"
    }, [_c("button", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: ficheIndex == _vm.fiche_suivis.length - 1,
        expression: "ficheIndex == (fiche_suivis.length - 1)"
      }],
      staticStyle: {
        "background-color": "#2c3e50",
        color: "#ffffff",
        "/* border-radius": "15%",
        "*/\n                                border": "none"
      },
      attrs: {
        type: "button",
        title: "Ajouter une nouvelle fiche de suivi"
      },
      on: {
        click: function click($event) {
          return _vm.addFicheSuivi();
        }
      }
    }, [_vm._v("\n                            Ajouter une fiche\n                        ")])])])], 2)]), _vm._v(" "), _c("div")]);
  })], 2) : 0]) : _vm._e();
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/FicheSuivi___.vue?vue&type=style&index=0&id=42a298ba&lang=css&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/FicheSuivi___.vue?vue&type=style&index=0&id=42a298ba&lang=css&scoped=true ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.card[data-v-42a298ba] {\r\n    width: 80%;\r\n    height: auto;\r\n    display: block;\r\n    position: relative;\r\n    margin: 8px 0;\r\n    padding: 0 10px;\r\n    border: 1px solid #aaa;\r\n    border-radius: 4px;\n}\n.card-header[data-v-42a298ba],\r\n.card-content[data-v-42a298ba] {\r\n    margin: 10px 0;\n}\n.card-header[data-v-42a298ba] {\r\n    cursor: pointer;\n}\n.card-header span[data-v-42a298ba] {\r\n    font-weight: 600;\n}\n.card-body[data-v-42a298ba] {\r\n    height: 500 px;\r\n    overflow: hidden;\r\n    transition: 0.3s;\n}\n.icon[data-v-42a298ba] {\r\n    float: right;\n}\nhr[data-v-42a298ba] {\r\n    margin: 0;\r\n    height: 1px;\r\n    display: block;\r\n    border-width: 0;\r\n    border-top: 1px solid #aaa;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/FicheSuivi___.vue?vue&type=style&index=0&id=42a298ba&lang=css&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/FicheSuivi___.vue?vue&type=style&index=0&id=42a298ba&lang=css&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FicheSuivi_vue_vue_type_style_index_0_id_42a298ba_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FicheSuivi___.vue?vue&type=style&index=0&id=42a298ba&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/FicheSuivi___.vue?vue&type=style&index=0&id=42a298ba&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FicheSuivi_vue_vue_type_style_index_0_id_42a298ba_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FicheSuivi_vue_vue_type_style_index_0_id_42a298ba_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/shared/FicheSuivi___.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/shared/FicheSuivi___.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FicheSuivi_vue_vue_type_template_id_42a298ba_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FicheSuivi___.vue?vue&type=template&id=42a298ba&scoped=true */ "./resources/js/components/shared/FicheSuivi___.vue?vue&type=template&id=42a298ba&scoped=true");
/* harmony import */ var _FicheSuivi_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FicheSuivi___.vue?vue&type=script&lang=js */ "./resources/js/components/shared/FicheSuivi___.vue?vue&type=script&lang=js");
/* harmony import */ var _FicheSuivi_vue_vue_type_style_index_0_id_42a298ba_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FicheSuivi___.vue?vue&type=style&index=0&id=42a298ba&lang=css&scoped=true */ "./resources/js/components/shared/FicheSuivi___.vue?vue&type=style&index=0&id=42a298ba&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _FicheSuivi_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _FicheSuivi_vue_vue_type_template_id_42a298ba_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _FicheSuivi_vue_vue_type_template_id_42a298ba_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "42a298ba",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/shared/FicheSuivi___.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/shared/FicheSuivi___.vue?vue&type=script&lang=js":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/shared/FicheSuivi___.vue?vue&type=script&lang=js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FicheSuivi_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FicheSuivi___.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/FicheSuivi___.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FicheSuivi_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/shared/FicheSuivi___.vue?vue&type=style&index=0&id=42a298ba&lang=css&scoped=true":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/shared/FicheSuivi___.vue?vue&type=style&index=0&id=42a298ba&lang=css&scoped=true ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FicheSuivi_vue_vue_type_style_index_0_id_42a298ba_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FicheSuivi___.vue?vue&type=style&index=0&id=42a298ba&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/FicheSuivi___.vue?vue&type=style&index=0&id=42a298ba&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/shared/FicheSuivi___.vue?vue&type=template&id=42a298ba&scoped=true":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/shared/FicheSuivi___.vue?vue&type=template&id=42a298ba&scoped=true ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FicheSuivi_vue_vue_type_template_id_42a298ba_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FicheSuivi_vue_vue_type_template_id_42a298ba_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FicheSuivi_vue_vue_type_template_id_42a298ba_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FicheSuivi___.vue?vue&type=template&id=42a298ba&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/FicheSuivi___.vue?vue&type=template&id=42a298ba&scoped=true");


/***/ })

}]);