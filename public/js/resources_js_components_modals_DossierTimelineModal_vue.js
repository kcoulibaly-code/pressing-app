"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_modals_DossierTimelineModal_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modals/DossierTimelineModal.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modals/DossierTimelineModal.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/auth.service */ "./resources/js/services/auth.service.js");
/* harmony import */ var _services_ebapis_service_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/ebapis.service.js */ "./resources/js/services/ebapis.service.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), c(GeneratorFunctionPrototype, u, GeneratorFunction.displayName = "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "DossierTimelineModal",
  props: {
    dossier_credit: {
      type: Object,
      required: true,
      "default": function _default() {}
    }
  },
  data: function data() {
    return {
      NUMBER_OF_STEPS_AFTER_CURRENT_STEP_TO_SHOW: 0,
      assignmentForm: {},
      current_step: null,
      decision_logs: [],
      dossier: null,
      ebapisHost: _services_ebapis_service_js__WEBPACK_IMPORTED_MODULE_1__["default"].host,
      errorMessage: null,
      final_outcome: null,
      hoveringWorkflowId: null,
      isAnwserInputVisible: false,
      isLoading: true,
      isLoadingAssignDossier: false,
      options: [1, -1],
      selectedWorkflowId: null,
      user: null,
      workflows: []
    };
  },
  mounted: function mounted() {
    var _this = this;
    // const el = this.$refs.current[0];
    // if (el) {
    //     // Use el.scrollIntoView() to instantly scroll to the element
    //     el.scrollIntoView({behavior: 'smooth'});
    // }
    // this.workflows = this.
    // for (let index = 1; index < 10; index++) {
    //     this.workflows.push({
    //             id: index,
    //             action: `action: ${index}`,
    //             responsible: `responsible: ${index}`,
    //             responsible_role: `responsible_role: ${index}`,
    //         })

    // }

    EventBus.$on('remove-decision-dossier-timeline', function (data) {
      _this.initTimeline(data);
    });

    //this.$console.log("**Mounted DossierTimelineModal**", this.dossier_credit)
    _services_auth_service__WEBPACK_IMPORTED_MODULE_0__["default"].loadUserData().then(function (res) {
      _this.user = res.data;
      //this.$console.log("User", this.user);
    })["catch"](function (err) {
      _this.$toasted.show("Erreur vous n'êtes pas connecté.");
    });
    this.initTimeline();
  },
  computed: {
    currentWorkflow: function currentWorkflow() {
      var _this2 = this;
      return this.workflows.find(function (item) {
        return item.id == _this2.current_step;
      });
    },
    currentUserWorkflow: function currentUserWorkflow() {
      var _this3 = this;
      return this.workflows.find(function (item) {
        var _this3$user;
        return item.responsible_role === ((_this3$user = _this3.user) === null || _this3$user === void 0 ? void 0 : _this3$user.role);
      });
    },
    canMakeAffectation: function canMakeAffectation() {
      return this.current_step != 0 && this.currentUserWorkflow === this.currentWorkflow;
    },
    isAssignDossierFormValid: function isAssignDossierFormValid() {
      var _this$assignmentForm;
      return !!((_this$assignmentForm = this.assignmentForm) !== null && _this$assignmentForm !== void 0 && _this$assignmentForm.message); // message exists and is not null
    },
    isCurrentUserAffectationAuthor: function isCurrentUserAffectationAuthor() {
      var _this$dossier, _this$user;
      return ((_this$dossier = this.dossier) === null || _this$dossier === void 0 || (_this$dossier = _this$dossier.affectation) === null || _this$dossier === void 0 || (_this$dossier = _this$dossier.author) === null || _this$dossier === void 0 ? void 0 : _this$dossier.user_id) == ((_this$user = this.user) === null || _this$user === void 0 ? void 0 : _this$user.user_id);
    },
    isCurrentUserAffectationTarget: function isCurrentUserAffectationTarget() {
      var _this$dossier2, _this$user2;
      return ((_this$dossier2 = this.dossier) === null || _this$dossier2 === void 0 || (_this$dossier2 = _this$dossier2.affectation) === null || _this$dossier2 === void 0 || (_this$dossier2 = _this$dossier2.target) === null || _this$dossier2 === void 0 ? void 0 : _this$dossier2.user_id) == ((_this$user2 = this.user) === null || _this$user2 === void 0 ? void 0 : _this$user2.user_id);
    }
  },
  methods: {
    canShowAffectForm: function canShowAffectForm(workflow) {
      return this.canAffectToTarget(workflow) && this.hoveringWorkflowId == workflow.id || this.selectedWorkflowId == workflow.id;
    },
    canAffectToTarget: function canAffectToTarget(workflow) {
      return !this.isCurrentUserStep(workflow) && !!this.workflowDecision(workflow);
    },
    workflowDecision: function workflowDecision(workflow) {
      return this.decision_logs.find(function (decision) {
        return decision.stage_id == workflow.id;
      });
    },
    sendBackDossier: function sendBackDossier() {
      var _this$assignmentForm2,
        _this4 = this;
      // this.$console.log('sendAssignDossierDecision', this.assignmentForm);
      // if(!this.canMakeAffectation){
      //     this.$toasted.show("Le dossier de crédit n'est pas à votre niveau, vous ne pouvez pas l'affecter")
      //     return;
      // }
      // if(this.current_step < this.assignmentForm?.target.stage_id){
      //     this.$toasted.show("Vous ne pouvez pas affecter ce dossier à ce niveau")
      //     return;
      // }
      // if(this.current_step == this.assignmentForm?.target.stage_id){
      //     this.$toasted.show("Vous avez déjà le dossier")
      //     return;
      // }
      // if(!this.assignmentForm?.message){
      //     this.$toasted.show("Veuillez ajouter un message")
      //     return;
      // }

      var cMessage = "Vous êtes sur le point d'affecter le dossier crédit à " + this.assignmentForm.target.name + "(" + this.assignmentForm.target.role + ") avec le message : " + ((_this$assignmentForm2 = this.assignmentForm) === null || _this$assignmentForm2 === void 0 ? void 0 : _this$assignmentForm2.message);
      var cTitle = "Affecter le dossier à " + this.assignmentForm.target.name + " ?";
      this.$confirm(cMessage, cTitle).then(function () {
        _this4.$Progress.start();
        _this4.finalPubDoss = false;
        var _this4$user = _this4.user,
          name = _this4$user.name,
          user_id = _this4$user.user_id,
          email = _this4$user.email,
          role_uuid = _this4$user.role_uuid,
          role = _this4$user.role;
        var user = {
          name: name,
          user_id: user_id,
          email: email,
          role_uuid: role_uuid,
          role: role
        };
        var decision = 'AFFECTATION';
        _this4.isLoadingAssignDossier = true;

        // setTimeout(()=>{
        //     this.isLoadingAssignDossier = false;

        // }, 3000);

        // return;
        _this4.errorMessage = null;
        _services_auth_service__WEBPACK_IMPORTED_MODULE_0__["default"].loadUserData().then(function (res) {
          _this4.$axios.post(_this4.ebapisHost + "creditbuilder/api/v1/approval-or-denial/", {
            user: user,
            cred_pub_key: _this4.dossier_credit.cred_pub_key,
            filledData: {
              message: _this4.assignmentForm.message,
              approval: decision,
              is_pub: false,
              decision: decision,
              target: _this4.assignmentForm.target
              // montant_modifier:this.montant_modifier,
              // duree_modifier:this.duree_modifier
            }
          }).then(function (resp) {
            var _this5 = this;
            var data = resp === null || resp === void 0 ? void 0 : resp.data;
            if (!(data !== null && data !== void 0 && data.is_success)) {
              this.$toasted.show("Oups, une erreur s'est produite. Veuillez réessayer dans quelques temps.");
              return;
            }
            this.dossier = _objectSpread(_objectSpread({}, this.dossier), data === null || data === void 0 ? void 0 : data.dossier_credit);
            this.$toasted.show("Le dossier a bien été affecté!");
            setTimeout(function () {
              _this5.$toasted.show("Rafraichissement de la page...");
              location.reload();
            }, 1000);
          }.bind(_this4))["catch"](function (error) {
            this.$toasted.show("Une erreur s'est produite");
            this.errorMessage = "Nous n'avons pas pu affecter le dossier. Veuillez réessayer dans quelques minutes..";
            // this.$Progress.finish();
            this.$console.log(error);
            this.isLoadingAssignDossier = false;
          }.bind(_this4));
        })["catch"](function (err) {
          console.error("auth error", err);
          _this4.isLoadingAssignDossier = false;
          // this.loadWithError(err);
        });
      });
    },
    toggleAnwserInput: function toggleAnwserInput() {
      this.isAnwserInputVisible = !this.isAnwserInputVisible;
    },
    onMouseEnter: function onMouseEnter(_ref) {
      var _this$dossier3,
        _this6 = this;
      var id = _ref.id;
      if (!this.canMakeAffectation) return;
      if ((_this$dossier3 = this.dossier) !== null && _this$dossier3 !== void 0 && _this$dossier3.has_affectation) return;

      //
      setTimeout(function () {
        _this6.hoveringWorkflowId = id;
      }, 300);
    },
    onMouseLeave: function onMouseLeave() {
      var _this7 = this;
      setTimeout(function () {
        _this7.hoveringWorkflowId = null;
      }, 300);
    },
    selectWorkflow: function selectWorkflow(_ref2) {
      var id = _ref2.id;
      this.selectedWorkflowId = id;
    },
    unselectWorkflow: function unselectWorkflow() {
      if (this.selectedWorkflowId != null) {
        this.selectedWorkflowId = null;
      }
    },
    selectWorkflowStep: function selectWorkflowStep(workflow) {
      var _workflow$responsible, _workflow$responsible2;
      // this.$console.log("selectWorkflowStep", workflow.id, "current", this.current_step, "user", this.user, "workflow", workflow)
      // if(!this.currentUserWorkflow){
      //     this.$toasted.show("Le dossier de crédit n'est pas à votre niveau, vous ne pouvez pas l'affecter")
      //     return;
      // }
      if (!this.canMakeAffectation || this.current_step < workflow.id || this.current_step == workflow.id) {
        return;
      }
      var decision_log = this.decision_logs.find(function (decision) {
        return decision.stage_id == workflow.id;
      });
      if (!decision_log) {
        return;
      }
      // this.$console.log("affectation to workflow: ", workflow, "decision_log:", decision_log)
      var target = {
        stage_id: workflow.id,
        user_id: (_workflow$responsible = workflow === null || workflow === void 0 ? void 0 : workflow.responsible_id) !== null && _workflow$responsible !== void 0 ? _workflow$responsible : decision_log === null || decision_log === void 0 ? void 0 : decision_log.given_by,
        name: (_workflow$responsible2 = workflow === null || workflow === void 0 ? void 0 : workflow.responsible) !== null && _workflow$responsible2 !== void 0 ? _workflow$responsible2 : decision_log === null || decision_log === void 0 ? void 0 : decision_log.giver_name,
        role: decision_log === null || decision_log === void 0 ? void 0 : decision_log.giver_role,
        role_sigle: decision_log === null || decision_log === void 0 ? void 0 : decision_log.giver_role_sigle
        // user_id: decision_log?.given_by,
        // name: decision_log?.giver_name,
        // role: decision_log?.giver_role,
        // role_sigle: decision_log?.giver_role_sigle,
      };
      var decision = 'AFFECTATION';
      var credTbKey = this.determineCredPubTables(this.dossier_credit['applied_templ_name']);
      var cred_pub_tb_00 = this.dossier_credit[credTbKey[0]];

      // console.log("credTbKey", credTbKey)
      // console.log("cred_pub_tb_00", cred_pub_tb_00)

      var _this$dossier_credit = this.dossier_credit,
        cred_pub_key = _this$dossier_credit.cred_pub_key,
        doss_name = _this$dossier_credit.doss_name,
        numero_dossier = _this$dossier_credit.numero_dossier,
        assignment_request = _this$dossier_credit.assignment_request;
      if (this.entityType.toUpperCase() == "BANK") {
        var _ref3 = cred_pub_tb_00 !== null && cred_pub_tb_00 !== void 0 ? cred_pub_tb_00 : {},
          montant_sollicite = _ref3.montant_sollicite,
          nom_emprunteur = _ref3.nom_emprunteur,
          type_credit = _ref3.type_credit,
          type_de_clientele = _ref3.type_de_clientele;
      } else {
        // const { montant_sollicite, nom_emprunteur, type_credit, type_de_clientele } = cred_pub_tb_00 ?? {}
        // if (!cred_pub_key || !doss_name || !numero_dossier || !cred_pub_tb_00 || !montant_sollicite || !nom_emprunteur || !type_credit || !type_de_clientele) {
        //     this.$toasted.show("Données manquantes... Veuillez remplir la fiche signalétique du dossier svp.")
        //     return;
        // }
      }
      var _this$user3 = this.user,
        name = _this$user3.name,
        user_id = _this$user3.user_id,
        email = _this$user3.email,
        role_uuid = _this$user3.role_uuid,
        role = _this$user3.role;
      var author = {
        name: name,
        user_id: user_id,
        email: email,
        role_uuid: role_uuid,
        role: role
      };
      this.assignmentForm = _objectSpread(_objectSpread({}, this.assignmentForm), {}, {
        target: target
      }, assignment_request);
      // this.$console.log("AssignmentForm", this.assignmentForm)

      // this.$modal.show('assign_dossier_form_modal');
    },
    sendAssignDossierDecision: function sendAssignDossierDecision() {
      var _this$assignmentForm3,
        _this$assignmentForm4,
        _this$assignmentForm5,
        _this$assignmentForm6,
        _this8 = this;
      // this.$console.log('sendAssignDossierDecision', this.assignmentForm);
      if (!this.canMakeAffectation) {
        this.$toasted.show("Le dossier de crédit n'est pas à votre niveau, vous ne pouvez pas l'affecter");
        return;
      }
      if (this.current_step < ((_this$assignmentForm3 = this.assignmentForm) === null || _this$assignmentForm3 === void 0 ? void 0 : _this$assignmentForm3.target.stage_id)) {
        this.$toasted.show("Vous ne pouvez pas affecter ce dossier à ce niveau");
        return;
      }
      if (this.current_step == ((_this$assignmentForm4 = this.assignmentForm) === null || _this$assignmentForm4 === void 0 ? void 0 : _this$assignmentForm4.target.stage_id)) {
        this.$toasted.show("Vous avez déjà le dossier");
        return;
      }
      if (!((_this$assignmentForm5 = this.assignmentForm) !== null && _this$assignmentForm5 !== void 0 && _this$assignmentForm5.message)) {
        this.$toasted.show("Veuillez ajouter un message");
        return;
      }
      var cMessage = "Vous êtes sur le point d'affecter le dossier crédit à " + this.assignmentForm.target.name + "(" + this.assignmentForm.target.role + ") avec le message : " + ((_this$assignmentForm6 = this.assignmentForm) === null || _this$assignmentForm6 === void 0 ? void 0 : _this$assignmentForm6.message);
      var cTitle = "Affecter le dossier à " + this.assignmentForm.target.name + " ?";
      this.$confirm(cMessage, cTitle).then(function () {
        _this8.$Progress.start();
        _this8.finalPubDoss = false;
        var _this8$user = _this8.user,
          name = _this8$user.name,
          user_id = _this8$user.user_id,
          email = _this8$user.email,
          role_uuid = _this8$user.role_uuid,
          role = _this8$user.role;
        var user = {
          name: name,
          user_id: user_id,
          email: email,
          role_uuid: role_uuid,
          role: role
        };
        var decision = 'AFFECTATION';
        _this8.isLoadingAssignDossier = true;
        _this8.errorMessage = null;
        _services_auth_service__WEBPACK_IMPORTED_MODULE_0__["default"].loadUserData().then(function (res) {
          _this8.$axios.post(_this8.ebapisHost + "creditbuilder/api/v1/approval-or-denial/", {
            user: user,
            cred_pub_key: _this8.dossier_credit.cred_pub_key,
            filledData: {
              message: _this8.assignmentForm.message,
              approval: decision,
              is_pub: false,
              decision: decision,
              target: _this8.assignmentForm.target
              // montant_modifier:this.montant_modifier,
              // duree_modifier:this.duree_modifier
            }
          }).then(function (resp) {
            var _this9 = this;
            this.isLoadingAssignDossier = false;
            var data = resp === null || resp === void 0 ? void 0 : resp.data;
            if (!(data !== null && data !== void 0 && data.is_success)) {
              this.$toasted.show("Oups, une erreur s'est produite. Veuillez réessayer dans quelques temps.");
              return;
            }
            this.dossier = _objectSpread(_objectSpread({}, this.dossier), data === null || data === void 0 ? void 0 : data.dossier_credit);
            this.$toasted.show("Le dossier a bien été affecté!");
            setTimeout(function () {
              _this9.$toasted.show("Rafraichissement de la page...");
              location.reload();
            }, 1000);
          }.bind(_this8))["catch"](function (error) {
            this.$toasted.show("Une erreur s'est produite");
            this.errorMessage = "Nous n'avons pas pu affecter le dossier. Veuillez réessayer dans quelques minutes..";
            // this.$Progress.finish();
            this.$console.log(error);
            this.isLoadingAssignDossier = false;
          }.bind(_this8));
        })["catch"](function (err) {
          // console.error("auth error", err);
          _this8.isLoadingAssignDossier = false;
          // this.loadWithError(err);
        });
      });
    },
    stepIndicatorLineStyle: function stepIndicatorLineStyle(index) {
      return this.isActiveStep(index) ? 'border-success' : 'border-secondar';
    },
    stepIndicatorDotStyle: function stepIndicatorDotStyle(index) {
      return this.isActiveStep(index) ? 'bg-success' : 'bg-secondar';
    },
    stepBubbleStyle: function stepBubbleStyle(index) {
      var classes = "";
      if (this.isInactiveStep(index)) {
        classes = "bg-secondary";
      }
      if (this.current_step === index) {
        classes = "bg-orange";
      }
      return classes;
    },
    isCurrentUserStep: function isCurrentUserStep(_ref4) {
      var _this$user4;
      var responsible_role = _ref4.responsible_role;
      return responsible_role === ((_this$user4 = this.user) === null || _this$user4 === void 0 ? void 0 : _this$user4.role);
    },
    isDossierWithCurrentUser: function isDossierWithCurrentUser() {
      var _this$currentWorkflow, _this$user5;
      return ((_this$currentWorkflow = this.currentWorkflow) === null || _this$currentWorkflow === void 0 ? void 0 : _this$currentWorkflow.responsible_role) == ((_this$user5 = this.user) === null || _this$user5 === void 0 ? void 0 : _this$user5.role);
    },
    isActiveStep: function isActiveStep(index) {
      return this.current_step >= index;
    },
    isInactiveStep: function isInactiveStep(index) {
      return !this.isActiveStep(index);
      // return  this.current_step > index;
    },
    initTimeline: function initTimeline() {
      var _arguments = arguments,
        _this0 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _this0$dossier_credit, _this0$dossier_credit2, _this0$dossier_credit3, _this0$dossier_credit4, _this0$entityType, _this0$entityType2, _this0$currentUserWor;
        var remove_decisions, _workflows, _this0$dossier_credit5, _this0$dossier_credit8, _this0$dossier_credit1, _this0$dossier_credit12, _this0$dossier_credit17, _this0$dossier_credit20, _this0$dossier_credit6, _this0$dossier_credit7, notif_accord_decision_logs, _this0$dossier_credit9, _this0$dossier_credit0, serv_jurid_decision_logs, _this0$dossier_credit10, _this0$dossier_credit11, serv_case_decision_logs, _this0$dossier_credit13, _this0$dossier_credit14, serv_back_office_decision_logs, _this0$dossier_credit15, _this0$dossier_credit16, _serv_case_decision_logs, _this0$dossier_credit18, _this0$dossier_credit19, serv_admin_credit_decision_logs, _this0$dossier_credit21, _this0$dossier_credit22, controle_admin_credit_decision_logs, _this0$dossier_credit23, _this0$dossier_credit24, _this0$dossier_credit25, _notif_accord_decision_logs, currentUserTimelineElmId;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              remove_decisions = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : [];
              // this.$console.log("**initTimeline**")
              // this.$console.log("initTimeline DossierTimelineModal", this.dossier_credit)
              _this0.dossier = _this0.dossier_credit;
              _this0.decision_logs = _toConsumableArray((_this0$dossier_credit = _this0.dossier_credit) === null || _this0$dossier_credit === void 0 ? void 0 : _this0$dossier_credit.decision_logs);
              _workflows = _toConsumableArray((_this0$dossier_credit2 = _this0.dossier_credit) === null || _this0$dossier_credit2 === void 0 ? void 0 : _this0$dossier_credit2.pub_workflow);
              _this0.final_outcome = (_this0$dossier_credit3 = _this0.dossier_credit) === null || _this0$dossier_credit3 === void 0 ? void 0 : _this0$dossier_credit3.final_outcome;
              _this0.current_step = (_this0$dossier_credit4 = _this0.dossier_credit) === null || _this0$dossier_credit4 === void 0 || (_this0$dossier_credit4 = _this0$dossier_credit4.workflow) === null || _this0$dossier_credit4 === void 0 || (_this0$dossier_credit4 = _this0$dossier_credit4.current_stage) === null || _this0$dossier_credit4 === void 0 ? void 0 : _this0$dossier_credit4.stage_id;
              _this0.workflows = _workflows.slice(0, _this0.current_step + _this0.NUMBER_OF_STEPS_AFTER_CURRENT_STEP_TO_SHOW + 1);
              _this0.workflows.reverse();
              if (((_this0$entityType = _this0.entityType) === null || _this0$entityType === void 0 ? void 0 : _this0$entityType.toUpperCase()) === "BANK") {
                if ((_this0$dossier_credit5 = _this0.dossier_credit) !== null && _this0$dossier_credit5 !== void 0 && _this0$dossier_credit5.notif_accord_credit) {
                  notif_accord_decision_logs = (_this0$dossier_credit6 = (_this0$dossier_credit7 = _this0.dossier_credit) === null || _this0$dossier_credit7 === void 0 ? void 0 : _this0$dossier_credit7.notif_accord_decision_logs) !== null && _this0$dossier_credit6 !== void 0 ? _this0$dossier_credit6 : null;
                  if (notif_accord_decision_logs != null) {
                    _this0.decision_logs = _toConsumableArray(notif_accord_decision_logs);
                    // this.decision_logs = [...this.decision_logs, ...notif_accord_decision_logs]
                  }
                }
                if ((_this0$dossier_credit8 = _this0.dossier_credit) !== null && _this0$dossier_credit8 !== void 0 && _this0$dossier_credit8.service_juridique) {
                  serv_jurid_decision_logs = (_this0$dossier_credit9 = (_this0$dossier_credit0 = _this0.dossier_credit) === null || _this0$dossier_credit0 === void 0 ? void 0 : _this0$dossier_credit0.serv_jurid_decision_logs) !== null && _this0$dossier_credit9 !== void 0 ? _this0$dossier_credit9 : null;
                  if (serv_jurid_decision_logs != null) {
                    _this0.decision_logs = _toConsumableArray(serv_jurid_decision_logs);
                    // this.decision_logs = [...this.decision_logs, ...serv_jurid_decision_logs]
                  }
                }
                if ((_this0$dossier_credit1 = _this0.dossier_credit) !== null && _this0$dossier_credit1 !== void 0 && _this0$dossier_credit1.gestion_case) {
                  serv_case_decision_logs = (_this0$dossier_credit10 = (_this0$dossier_credit11 = _this0.dossier_credit) === null || _this0$dossier_credit11 === void 0 ? void 0 : _this0$dossier_credit11.serv_case_decision_logs) !== null && _this0$dossier_credit10 !== void 0 ? _this0$dossier_credit10 : null;
                  if (serv_case_decision_logs != null) {
                    _this0.decision_logs = _toConsumableArray(serv_case_decision_logs);
                    // this.decision_logs = [...this.decision_logs, ...serv_case_decision_logs]
                  }
                }
                if ((_this0$dossier_credit12 = _this0.dossier_credit) !== null && _this0$dossier_credit12 !== void 0 && _this0$dossier_credit12.gestion_back_office) {
                  serv_back_office_decision_logs = (_this0$dossier_credit13 = (_this0$dossier_credit14 = _this0.dossier_credit) === null || _this0$dossier_credit14 === void 0 ? void 0 : _this0$dossier_credit14.serv_back_office_decision_logs) !== null && _this0$dossier_credit13 !== void 0 ? _this0$dossier_credit13 : null;
                  if (serv_back_office_decision_logs != null) {
                    _this0.decision_logs = _toConsumableArray(serv_back_office_decision_logs);
                    _serv_case_decision_logs = (_this0$dossier_credit15 = (_this0$dossier_credit16 = _this0.dossier_credit) === null || _this0$dossier_credit16 === void 0 ? void 0 : _this0$dossier_credit16.serv_case_decision_logs) !== null && _this0$dossier_credit15 !== void 0 ? _this0$dossier_credit15 : null;
                    if (_serv_case_decision_logs != null) {
                      _this0.decision_logs = [].concat(_toConsumableArray(_serv_case_decision_logs), _toConsumableArray(_this0.decision_logs));
                    }
                  }
                }
                if ((_this0$dossier_credit17 = _this0.dossier_credit) !== null && _this0$dossier_credit17 !== void 0 && _this0$dossier_credit17.gestion_admin_credit) {
                  serv_admin_credit_decision_logs = (_this0$dossier_credit18 = (_this0$dossier_credit19 = _this0.dossier_credit) === null || _this0$dossier_credit19 === void 0 ? void 0 : _this0$dossier_credit19.serv_admin_credit_decision_logs) !== null && _this0$dossier_credit18 !== void 0 ? _this0$dossier_credit18 : null;
                  if (serv_admin_credit_decision_logs != null) {
                    _this0.decision_logs = _toConsumableArray(serv_admin_credit_decision_logs);
                    // this.decision_logs = [...this.decision_logs, ...serv_admin_credit_decision_logs]
                  }
                }
                if ((_this0$dossier_credit20 = _this0.dossier_credit) !== null && _this0$dossier_credit20 !== void 0 && _this0$dossier_credit20.controle_admin_credit) {
                  controle_admin_credit_decision_logs = (_this0$dossier_credit21 = (_this0$dossier_credit22 = _this0.dossier_credit) === null || _this0$dossier_credit22 === void 0 ? void 0 : _this0$dossier_credit22.controle_admin_credit_decision_logs) !== null && _this0$dossier_credit21 !== void 0 ? _this0$dossier_credit21 : null;
                  if (controle_admin_credit_decision_logs != null) {
                    _this0.decision_logs = _toConsumableArray(controle_admin_credit_decision_logs);
                    // this.decision_logs = [...this.decision_logs, ...controle_admin_credit_decision_logs]
                  }
                }
              }
              if (((_this0$entityType2 = _this0.entityType) === null || _this0$entityType2 === void 0 ? void 0 : _this0$entityType2.toUpperCase()) !== "BANK") {
                if ((_this0$dossier_credit23 = _this0.dossier_credit) !== null && _this0$dossier_credit23 !== void 0 && _this0$dossier_credit23.notif_accord_credit) {
                  _notif_accord_decision_logs = (_this0$dossier_credit24 = (_this0$dossier_credit25 = _this0.dossier_credit) === null || _this0$dossier_credit25 === void 0 ? void 0 : _this0$dossier_credit25.notif_accord_decision_logs) !== null && _this0$dossier_credit24 !== void 0 ? _this0$dossier_credit24 : null;
                  if (_notif_accord_decision_logs != null) {
                    _this0.decision_logs = _toConsumableArray(_notif_accord_decision_logs);
                  }
                }
              }

              //this.$console.log("Decision Logs", this.dossier_credit?.decision_logs)
              //this.$console.log("Workflows", this.workflows)
              //this.$console.log("Timeline", "outcome:", this.final_outcome, "current_step:", this.current_step)
              //this.$console.log("Current Workflow:", this.currentUserWorkflow)

              // ?- Scroll timeline to current user
              currentUserTimelineElmId = 'workflow_timeline_user_' + ((_this0$currentUserWor = _this0.currentUserWorkflow) === null || _this0$currentUserWor === void 0 ? void 0 : _this0$currentUserWor.id); //this.$console.log("currentUserTimelineElmId:", currentUserTimelineElmId)
              //
              _this0.isLoading = false;
              if (!['', null, undefined, 'undefined'].includes(remove_decisions) && remove_decisions.length > 0) {
                _this0.decision_logs = _this0.decision_logs.filter(function (el) {
                  if (!remove_decisions.includes(el === null || el === void 0 ? void 0 : el.giver_role_sigle)) {
                    return true;
                  }
                  return false;
                });
              }
            case 13:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    updateUI: function updateUI() {
      var _this$dossier4, _this$dossier5, _this$dossier6, _this$dossier7, _this$entityType, _this$entityType2;
      this.decision_logs = _toConsumableArray((_this$dossier4 = this.dossier) === null || _this$dossier4 === void 0 ? void 0 : _this$dossier4.decision_logs);
      var _workflows = _toConsumableArray((_this$dossier5 = this.dossier) === null || _this$dossier5 === void 0 ? void 0 : _this$dossier5.pub_workflow);
      this.final_outcome = (_this$dossier6 = this.dossier) === null || _this$dossier6 === void 0 ? void 0 : _this$dossier6.final_outcome;
      this.current_step = (_this$dossier7 = this.dossier) === null || _this$dossier7 === void 0 || (_this$dossier7 = _this$dossier7.workflow) === null || _this$dossier7 === void 0 || (_this$dossier7 = _this$dossier7.current_stage) === null || _this$dossier7 === void 0 ? void 0 : _this$dossier7.stage_id;
      this.workflows = _workflows.slice(0, this.current_step + this.NUMBER_OF_STEPS_AFTER_CURRENT_STEP_TO_SHOW + 1);
      this.workflows.reverse();
      if (((_this$entityType = this.entityType) === null || _this$entityType === void 0 ? void 0 : _this$entityType.toUpperCase()) === "BANK") {
        var _this$dossier_credit2, _this$dossier_credit4, _this$dossier_credit6, _this$dossier_credit8, _this$dossier_credit0, _this$dossier_credit10;
        if ((_this$dossier_credit2 = this.dossier_credit) !== null && _this$dossier_credit2 !== void 0 && _this$dossier_credit2.notif_accord_credit) {
          var _this$dossier_credit$, _this$dossier_credit3;
          var notif_accord_decision_logs = (_this$dossier_credit$ = (_this$dossier_credit3 = this.dossier_credit) === null || _this$dossier_credit3 === void 0 ? void 0 : _this$dossier_credit3.notif_accord_decision_logs) !== null && _this$dossier_credit$ !== void 0 ? _this$dossier_credit$ : null;
          if (notif_accord_decision_logs != null) {
            this.decision_logs = _toConsumableArray(notif_accord_decision_logs);
            // this.decision_logs = [...this.decision_logs, ...notif_accord_decision_logs]
          }
        }
        if ((_this$dossier_credit4 = this.dossier_credit) !== null && _this$dossier_credit4 !== void 0 && _this$dossier_credit4.service_juridique) {
          var _this$dossier_credit$2, _this$dossier_credit5;
          var serv_jurid_decision_logs = (_this$dossier_credit$2 = (_this$dossier_credit5 = this.dossier_credit) === null || _this$dossier_credit5 === void 0 ? void 0 : _this$dossier_credit5.serv_jurid_decision_logs) !== null && _this$dossier_credit$2 !== void 0 ? _this$dossier_credit$2 : null;
          if (serv_jurid_decision_logs != null) {
            this.decision_logs = _toConsumableArray(serv_jurid_decision_logs);
            // this.decision_logs = [...this.decision_logs, ...serv_jurid_decision_logs]
          }
        }
        if ((_this$dossier_credit6 = this.dossier_credit) !== null && _this$dossier_credit6 !== void 0 && _this$dossier_credit6.gestion_case) {
          var _this$dossier_credit$3, _this$dossier_credit7;
          var serv_case_decision_logs = (_this$dossier_credit$3 = (_this$dossier_credit7 = this.dossier_credit) === null || _this$dossier_credit7 === void 0 ? void 0 : _this$dossier_credit7.serv_case_decision_logs) !== null && _this$dossier_credit$3 !== void 0 ? _this$dossier_credit$3 : null;
          if (serv_case_decision_logs != null) {
            this.decision_logs = _toConsumableArray(serv_case_decision_logs);
            // this.decision_logs = [...this.decision_logs, ...serv_case_decision_logs]
          }
        }
        if ((_this$dossier_credit8 = this.dossier_credit) !== null && _this$dossier_credit8 !== void 0 && _this$dossier_credit8.gestion_back_office) {
          var _this$dossier_credit$4, _this$dossier_credit9;
          var serv_back_office_decision_logs = (_this$dossier_credit$4 = (_this$dossier_credit9 = this.dossier_credit) === null || _this$dossier_credit9 === void 0 ? void 0 : _this$dossier_credit9.serv_back_office_decision_logs) !== null && _this$dossier_credit$4 !== void 0 ? _this$dossier_credit$4 : null;
          if (serv_back_office_decision_logs != null) {
            this.decision_logs = _toConsumableArray(serv_back_office_decision_logs);
            // this.decision_logs = [...this.decision_logs, ...serv_back_office_decision_logs]
          }
        }
        if ((_this$dossier_credit0 = this.dossier_credit) !== null && _this$dossier_credit0 !== void 0 && _this$dossier_credit0.gestion_admin_credit) {
          var _this$dossier_credit$5, _this$dossier_credit1;
          var serv_admin_credit_decision_logs = (_this$dossier_credit$5 = (_this$dossier_credit1 = this.dossier_credit) === null || _this$dossier_credit1 === void 0 ? void 0 : _this$dossier_credit1.serv_admin_credit_decision_logs) !== null && _this$dossier_credit$5 !== void 0 ? _this$dossier_credit$5 : null;
          if (serv_admin_credit_decision_logs != null) {
            this.decision_logs = _toConsumableArray(serv_admin_credit_decision_logs);
            // this.decision_logs = [...this.decision_logs, ...serv_admin_credit_decision_logs]
          }
        }
        if ((_this$dossier_credit10 = this.dossier_credit) !== null && _this$dossier_credit10 !== void 0 && _this$dossier_credit10.controle_admin_credit) {
          var _this$dossier_credit$6, _this$dossier_credit11;
          var controle_admin_credit_decision_logs = (_this$dossier_credit$6 = (_this$dossier_credit11 = this.dossier_credit) === null || _this$dossier_credit11 === void 0 ? void 0 : _this$dossier_credit11.controle_admin_credit_decision_logs) !== null && _this$dossier_credit$6 !== void 0 ? _this$dossier_credit$6 : null;
          if (controle_admin_credit_decision_logs != null) {
            this.decision_logs = _toConsumableArray(controle_admin_credit_decision_logs);
            // this.decision_logs = [...this.decision_logs, ...controle_admin_credit_decision_logs]
          }
        }
      }
      if (((_this$entityType2 = this.entityType) === null || _this$entityType2 === void 0 ? void 0 : _this$entityType2.toUpperCase()) !== "BANK") {
        var _this$dossier_credit12;
        if ((_this$dossier_credit12 = this.dossier_credit) !== null && _this$dossier_credit12 !== void 0 && _this$dossier_credit12.notif_accord_credit) {
          var _this$dossier_credit$7, _this$dossier_credit13;
          var _notif_accord_decision_logs2 = (_this$dossier_credit$7 = (_this$dossier_credit13 = this.dossier_credit) === null || _this$dossier_credit13 === void 0 ? void 0 : _this$dossier_credit13.notif_accord_decision_logs) !== null && _this$dossier_credit$7 !== void 0 ? _this$dossier_credit$7 : null;
          if (_notif_accord_decision_logs2 != null) {
            this.decision_logs = _toConsumableArray(_notif_accord_decision_logs2);
          }
        }
      }
    },
    sendPubReq: function sendPubReq(res) {
      var decision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
      this.authcheck = true;
      this.authcheckUsr = res.data;
      this.authcheckStatus = res.status;
      if (this.authcheckStatus === 401) {
        //// window.location.href = "/login";
      }
      if (this.authcheck === true) {
        if (this.what_tobe_produced === "MEMORANDUM_CREDIT" || this.what_tobe_produced === "") {
          this.$axios.post(this.ebapisHost + "creditbuilder/api/v1/pub-dossier/", {
            user: this.authcheckUsr,
            cred_pub_key: this.meta_parseable.cred_pub_key,
            filledData: {
              message: this.outcome_msg,
              approval: "Dossier publié",
              is_pub: true,
              decision: decision,
              montant_modifier: this.montant_modifier,
              duree_modifier: this.duree_modifier
            }
          }).then(function (response) {
            this.$emit("value-updated");
            this.finalPubDoss = true;
            this.$Progress.finish();
            // console.log(response.data['editing_mode'])
            this.canPublish = false;
            this.$axios.post(this.ebapisHost + "reportex/api/v1/start-watcher/", {
              cred_pub_key: this.meta_parseable.cred_pub_key,
              entity_type: "BANK"
            }).then(function (res) {
              //
              // this.$toasted.show('timesheets updated successfully')
            })["catch"](function (err) {
              console.error(err);
            });
            this.$modal.hide("publish");
            this.$modal.hide("publishMemo");
            //EventBus.$emit("printmemo-auto")
            this.$toasted.show("Dossier crédit publié avec succès !");
          }.bind(this))["catch"](function (error) {
            // this.$Progress.finish();
            console.log(error);
          }.bind(this));
        } else {
          if (["tyJLxuAh6F2DJR6e"].includes(this.role_uuid)) {
            // Apply this for CFN CIV
            if (this.authcheckUsr.filiale == 'CFN CIV') {
              this.updateSRCInfo(decision);
            }
          }
          this.$axios.post(this.ebapisHost + "creditbuilder/api/v1/approval-or-denial/", {
            user: this.authcheckUsr,
            cred_pub_key: this.meta_parseable.cred_pub_key,
            filledData: {
              message: this.outcome_msg,
              approval: decision,
              is_pub: false,
              decision: decision,
              montant_modifier: this.montant_modifier,
              duree_modifier: this.duree_modifier
            }
          }).then(function (response) {
            this.$emit("value-updated");
            this.finalPubDoss = true;
            this.canPublish = false;
            this.$modal.hide("publish");
            this.$modal.hide("publishMemo");
            this.$toasted.show("Votre décision a été prise en compte avec succès !");
            this.$axios.post(this.ebapisHost + "reportex/api/v1/start-watcher/", {
              cred_pub_key: this.meta_parseable.cred_pub_key,
              entity_type: "BANK"
            }).then(function (res) {
              //
              // this.$toasted.show('timesheets updated successfully')
            })["catch"](function (err) {
              console.error(err);
            });
          }.bind(this))["catch"](function (error) {
            // this.$Progress.finish();
            console.log(error);
          }.bind(this));
        }
      } else {
        alert("Unauthenticated");
      }
    },
    loadWithError: function loadWithError(err) {
      // console.log(err)
      window.location.href = "/login";
    }
  },
  watch: {
    // dossier_credit : function(doss){
    //         this.$console.log("oo dossier_credit", doss)

    //     if(doss != null){
    //         this.$console.log("oo << dossier_credit", doss)
    //         this.initTimeline();
    //     }
    // }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modals/DossierTimelineModal.vue?vue&type=template&id=258535e2&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modals/DossierTimelineModal.vue?vue&type=template&id=258535e2&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$dossier, _vm$dossier2, _vm$dossier3, _vm$dossier4, _vm$dossier5, _vm$dossier6, _vm$dossier7, _vm$dossier8, _vm$dossier9, _vm$dossier0;
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("modal", {
    attrs: {
      name: "dossier_timeline_modal",
      width: 650,
      height: "auto",
      adaptive: true,
      resizable: true,
      draggable: false
    }
  }, [_vm.dossier_credit ? _c("div", {
    staticClass: "container-fluid p-2 bg-light",
    style: "max-height:" + ((_vm$dossier = _vm.dossier) !== null && _vm$dossier !== void 0 && _vm$dossier.has_affectation ? "70" : "90") + "vh;"
  }, [_c("button", {
    staticClass: "btn-close",
    staticStyle: {
      "float": "right"
    },
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.$modal.hide("dossier_timeline_modal");
      }
    }
  }), _vm._v(" "), _c("h1", {
    staticClass: "text-center d-flex justify-content-center align-items-center gap-2",
    staticStyle: {
      color: "#34495e"
    }
  }, [(_vm$dossier2 = _vm.dossier) !== null && _vm$dossier2 !== void 0 && _vm$dossier2.has_affectation ? _c("i", {
    staticClass: "icofont-send-mail"
  }) : _vm._e(), _vm._v("\r\n                Affectation de dossier\r\n            ")]), _vm._v(" "), !((_vm$dossier3 = _vm.dossier) !== null && _vm$dossier3 !== void 0 && _vm$dossier3.has_affectation) ? _c("span", {
    staticStyle: {
      "font-weight": "bold"
    }
  }, [_c("span", {
    staticStyle: {
      color: "#e74c3c",
      "font-weight": "bold"
    }
  }, [_c("center", [_vm._v("Ramenez le dossier à vos collabateurs")])], 1)]) : _vm._e(), _vm._v(" "), _c("hr"), _vm._v(" "), (_vm$dossier4 = _vm.dossier) !== null && _vm$dossier4 !== void 0 && _vm$dossier4.has_affectation ? [_c("div", {
    staticClass: "d-flex flex-column justify-content-between align-items-center my-5"
  }, [_c("div", [_c("div", {
    staticClass: "d-flex gap-2 justify-content-center align-items-center"
  }, [_vm.isCurrentUserAffectationTarget ? _c("div", {
    staticClass: "text-center"
  }, [_c("span", [_vm._v("Le dossier vous a été affecté par")]), _vm._v(" "), _c("b", [_vm._v(_vm._s((_vm$dossier5 = _vm.dossier) === null || _vm$dossier5 === void 0 || (_vm$dossier5 = _vm$dossier5.affectation) === null || _vm$dossier5 === void 0 || (_vm$dossier5 = _vm$dossier5.author) === null || _vm$dossier5 === void 0 ? void 0 : _vm$dossier5.name) + " (" + _vm._s((_vm$dossier6 = _vm.dossier) === null || _vm$dossier6 === void 0 || (_vm$dossier6 = _vm$dossier6.affectation) === null || _vm$dossier6 === void 0 || (_vm$dossier6 = _vm$dossier6.author) === null || _vm$dossier6 === void 0 ? void 0 : _vm$dossier6.role) + ")")])]) : _c("div", {
    staticClass: "text-center"
  }, [_vm.isCurrentUserAffectationAuthor ? _c("span", [_vm._v("Vous avez affecté le dossier à")]) : _c("span", [_vm._v("Le dossier a été affecté à")]), _vm._v(" "), _c("b", [_vm._v(_vm._s((_vm$dossier7 = _vm.dossier) === null || _vm$dossier7 === void 0 || (_vm$dossier7 = _vm$dossier7.affectation) === null || _vm$dossier7 === void 0 || (_vm$dossier7 = _vm$dossier7.target) === null || _vm$dossier7 === void 0 ? void 0 : _vm$dossier7.name) + " (" + _vm._s((_vm$dossier8 = _vm.dossier) === null || _vm$dossier8 === void 0 || (_vm$dossier8 = _vm$dossier8.affectation) === null || _vm$dossier8 === void 0 || (_vm$dossier8 = _vm$dossier8.target) === null || _vm$dossier8 === void 0 ? void 0 : _vm$dossier8.role) + ")")])])]), _vm._v(" "), (_vm$dossier9 = _vm.dossier) !== null && _vm$dossier9 !== void 0 && (_vm$dossier9 = _vm$dossier9.affectation) !== null && _vm$dossier9 !== void 0 && _vm$dossier9.message ? _c("div", {
    staticClass: "d-flex flex-column align-items-center gap-1"
  }, [_vm._v("\r\n                            Avec le message :\r\n                            "), _c("p", [_vm._v("\r\n                                " + _vm._s((_vm$dossier0 = _vm.dossier) === null || _vm$dossier0 === void 0 || (_vm$dossier0 = _vm$dossier0.affectation) === null || _vm$dossier0 === void 0 ? void 0 : _vm$dossier0.message) + "\r\n                            ")])]) : _vm._e()])])] : _c("div", {
    staticClass: "container",
    staticStyle: {
      "max-height": "65vh"
    }
  }, [_vm.isLoading ? _c("div", {
    staticClass: "h-100 d-flex flex-column gap-2 justify-content-center align-items-center"
  }, [_c("div", {
    staticClass: "spinner-border spinner-border-xl"
  }), _vm._v(" "), _c("h4", {
    staticClass: "mb-5"
  }, [_vm._v("Chargement en cours...")])]) : [_vm.workflows.length ? _c("div", {
    staticClass: "mb-5 pb-5 ps-4 pe-3"
  }, _vm._l(_vm.workflows, function (workflow, index) {
    var _vm$dossier1, _vm$dossier10, _vm$dossier11, _vm$dossier12, _vm$dossier13, _vm$workflowDecision, _vm$workflowDecision2, _vm$workflowDecision3, _vm$workflowDecision4, _vm$workflowDecision5, _vm$workflowDecision6, _vm$workflowDecision7, _vm$workflowDecision8, _vm$workflowDecision9, _vm$workflowDecision0;
    return _c("div", {
      key: index,
      ref: _vm.current_step === index ? "current" : "",
      refInFor: true,
      staticClass: "article-container",
      "class": [_vm.stepIndicatorLineStyle(index)]
    }, [_c("div", {
      staticClass: "dot",
      "class": [_vm.stepIndicatorDotStyle(index)]
    }, [_vm._v("\r\n                                " + _vm._s(workflow.id) + "\r\n                            ")]), _vm._v(" "), _c("div", {
      staticClass: "w-100",
      style: "padding-bottom:" + (_vm.selectedWorkflowId == workflow.id && !_vm.workflowDecision(workflow) ? 3 : 0) + "rem;"
    }, [_c("div", {
      staticClass: "px-3 mt-2"
    }, [_c("h5", {
      staticClass: "text-dark"
    }, [_vm._v(_vm._s(workflow.action))])]), _vm._v(" "), _c("div", {
      staticClass: "relative d-flex flex-column ms-2 rounded",
      "class": [_vm.canAffectToTarget(workflow) ? "bg-white border shadow-sm" : "bg-light-gris", _vm.canShowAffectForm(workflow) ? "cursor-pointer" : "", _vm.selectedWorkflowId == workflow.id ? "mb-5" : ""],
      attrs: {
        title: (_vm$dossier1 = _vm.dossier) !== null && _vm$dossier1 !== void 0 && _vm$dossier1.has_affectation ? "" : !_vm.canMakeAffectation ? "" : !_vm.isCurrentUserStep(workflow) ? "Affecter le dossier" : "C'est vous"
      },
      on: {
        click: function click($event) {
          return _vm.selectWorkflowStep(workflow);
        },
        mouseenter: function mouseenter($event) {
          $event.preventDefault();
          return _vm.onMouseEnter(workflow);
        },
        mouseleave: function mouseleave($event) {
          $event.preventDefault();
          return _vm.onMouseLeave();
        }
      }
    }, [_vm.canShowAffectForm(workflow) ? _c("div", {
      directives: [{
        name: "click-outside",
        rawName: "v-click-outside",
        value: _vm.unselectWorkflow,
        expression: "unselectWorkflow"
      }, {
        name: "show",
        rawName: "v-show",
        value: _vm.hoveringWorkflowId == workflow.id || _vm.selectedWorkflowId == workflow.id,
        expression: "(hoveringWorkflowId == workflow.id) || selectedWorkflowId == workflow.id"
      }],
      staticClass: "absolute d-flex align-items-stretch bg-deep-blue text-white rounded p-1",
      staticStyle: {
        "z-index": "10",
        left: "0",
        right: "0",
        "min-height": "100%"
      },
      on: {
        click: function click($event) {
          return _vm.selectWorkflow(workflow);
        }
      }
    }, [_c("div", {
      staticClass: "border-dashed-white rounded w-100 h-full d-flex flex-column gap-2 justify-content-center align-items-stretch px-3 p-2"
    }, [_c("div", {
      staticClass: "d-flex gap-2 justify-content-center align-items-center"
    }, [_c("i", {
      staticClass: "icofont-send-mail icofont-4x"
    }), _vm._v(" "), _c("div", {
      staticClass: "text-center"
    }, [_vm._v("\r\n                                                    Affecter le dossier à "), _c("b", [_vm._v(_vm._s(workflow.responsible) + " (" + _vm._s(workflow.responsible_role) + ")")])])]), _vm._v(" "), _vm.selectedWorkflowId == workflow.id ? _c("div", {
      staticClass: "d-flex flex-column gap-1 align-items-stretch"
    }, [_c("label", {
      attrs: {
        "for": "affectation_dossier_input"
      }
    }, [_vm._v("Message :")]), _vm._v(" "), _c("div", {
      staticClass: "d-flex gap-2 align-items-center"
    }, [_c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.assignmentForm.message,
        expression: "assignmentForm.message"
      }],
      staticClass: "form-control w-100",
      attrs: {
        id: "affectation_dossier_input",
        placeholder: "Veuillez ajouter un message",
        row: "1"
      },
      domProps: {
        value: _vm.assignmentForm.message
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(_vm.assignmentForm, "message", $event.target.value);
        }
      }
    }), _vm._v(" "), _c("button", {
      staticClass: "btn btn-orange d-flex",
      staticStyle: {
        color: "white!important",
        border: "1px solid!important"
      },
      attrs: {
        disabled: _vm.isLoadingAssignDossier || !_vm.isAssignDossierFormValid
      },
      on: {
        click: _vm.sendAssignDossierDecision
      }
    }, [_vm.isLoadingAssignDossier ? _c("span", {
      staticClass: "d-flex gap-1 align-items-center"
    }, [_c("span", {
      staticClass: "spinner-border spinner-border-sm",
      attrs: {
        role: "status",
        "aria-hidden": "true"
      }
    }), _vm._v("\r\n                                                            Loading...\r\n                                                        ")]) : _c("span", [_c("span", [_vm._v("Affecter")])])])])]) : _vm._e(), _vm._v(" "), _vm.errorMessage ? _c("div", {
      staticClass: "text-danger"
    }, [_c("b", [_vm._v(_vm._s(_vm.errorMessage))])]) : _vm._e()])]) : _vm._e(), _vm._v(" "), !_vm.isCurrentUserStep(workflow) && ((_vm$dossier10 = _vm.dossier) === null || _vm$dossier10 === void 0 || (_vm$dossier10 = _vm$dossier10.affectation) === null || _vm$dossier10 === void 0 || (_vm$dossier10 = _vm$dossier10.target) === null || _vm$dossier10 === void 0 ? void 0 : _vm$dossier10.stage_id) == workflow.id ? _c("div", {
      staticClass: "absolute bg-deep-blue text-white rounded p-1 h-100",
      staticStyle: {
        "z-index": "10",
        left: "0",
        right: "0"
      }
    }, [_c("div", {
      staticClass: "border-dashed-white rounded w-100 h-100 d-flex flex-column gap-2 justify-content-center align-items-stretch px-3 p-2"
    }, [_c("div", {
      staticClass: "d-flex gap-2 justify-content-center align-items-center"
    }, [_c("i", {
      staticClass: "icofont-send-mail icofont-4x"
    }), _vm._v(" "), _c("div", {
      staticClass: "text-center"
    }, [_vm.isCurrentUserAffectationAuthor ? _c("span", [_vm._v("Vous avez affecté le dossier à")]) : _c("span", [_vm._v("Le dossier a été affecté à")]), _vm._v(" "), _c("b", [_vm._v(_vm._s(workflow.responsible) + " (" + _vm._s(workflow.responsible_role) + ")")])])])])]) : _vm._e(), _vm._v(" "), [_c("div", {
      staticClass: "d-flex justify-content-between align-items-start mt-2 p-2 px-3"
    }, [_c("div", {
      staticClass: "d-flex gap-2 align-items-center"
    }, [_c("div", {
      staticClass: "d-flex flex-column gap-1 justify-content-center align-items-start",
      attrs: {
        id: "workflow_timeline_user_" + workflow.id
      }
    }, [_c("div", {
      staticClass: "d-flex gap-2 align-items-start"
    }, [_c("h5", {
      staticClass: "fs-bold mb-0",
      "class": [_vm.isCurrentUserStep(workflow) ? "text-orange" : ""]
    }, [_vm._v(_vm._s(workflow.responsible))]), _vm._v(" "), _vm.isCurrentUserStep(workflow) ? _c("span", {
      staticClass: "badge bg-orange d-flex justify-content-center align-items-center"
    }, [_vm._v("C'est vous")]) : _vm._e()]), _vm._v(" "), _c("h6", {
      staticClass: "text-deep-blue"
    }, [_vm._v(_vm._s(workflow.responsible_role))])])]), _vm._v(" "), _c("div", {
      staticClass: "d-flex gap-2 align-items-start"
    }, [_vm.current_step === workflow.id ? _c("div", {
      staticClass: "d-flex flex-column justify-content-center align-items-center text-center"
    }, [_c("i", {
      staticClass: "icofont-folder-open icofont-2x",
      "class": [(_vm$dossier11 = _vm.dossier) !== null && _vm$dossier11 !== void 0 && _vm$dossier11.has_affectation ? "text-secondary" : "text-purple"]
    }), _vm._v(" "), _c("span", {
      staticClass: "badge bg-purple"
    }, [_vm._v("Dossier ici")])]) : _vm._e(), _vm._v(" "), ((_vm$dossier12 = _vm.dossier) === null || _vm$dossier12 === void 0 || (_vm$dossier12 = _vm$dossier12.affectation) === null || _vm$dossier12 === void 0 || (_vm$dossier12 = _vm$dossier12.target) === null || _vm$dossier12 === void 0 ? void 0 : _vm$dossier12.stage_id) === workflow.id ? _c("div", {
      staticClass: "d-flex flex-column justify-content-center align-items-center text-center"
    }, [_c("i", {
      staticClass: "icofont-folder-open icofont-4x",
      "class": [(_vm$dossier13 = _vm.dossier) !== null && _vm$dossier13 !== void 0 && _vm$dossier13.has_affectation ? "text-orange" : "text-purple"]
    }), _vm._v(" "), _c("span", [_vm._v("Dossier affecté")])]) : _vm._e()])]), _vm._v(" "), _vm.workflowDecision(workflow) ? [_c("hr", {
      staticClass: "my-0 mx-3"
    }), _vm._v(" "), _c("div", {
      staticClass: "d-flex align-items-stretch py-2"
    }, [_c("div", {
      staticClass: "col-md-4 d-flex flex-column justify-content-between p-2 px-3"
    }, [_c("h6", [_vm._v("Décision")]), _vm._v(" "), [((_vm$workflowDecision = _vm.workflowDecision(workflow)) === null || _vm$workflowDecision === void 0 ? void 0 : _vm$workflowDecision.stage_id) === 0 ? _c("div", [_c("span", {
      staticClass: "stamp"
    }, [_vm._v("Dossier publié")]), _vm._v(" "), _c("br"), _vm._v(" "), ((_vm$workflowDecision2 = _vm.workflowDecision(workflow)) === null || _vm$workflowDecision2 === void 0 ? void 0 : _vm$workflowDecision2.outcome) === 1 ? _c("span", {
      staticClass: "stamp avis-fav"
    }, [_vm._v("clôturé avec avis favorable")]) : _vm._e(), _vm._v(" "), ((_vm$workflowDecision3 = _vm.workflowDecision(workflow)) === null || _vm$workflowDecision3 === void 0 ? void 0 : _vm$workflowDecision3.outcome) === -1 ? _c("span", {
      staticClass: "stamp avis-nonfav"
    }, [_vm._v("clôturé avec avis défavorable")]) : _vm._e(), _vm._v(" "), ((_vm$workflowDecision4 = _vm.workflowDecision(workflow)) === null || _vm$workflowDecision4 === void 0 ? void 0 : _vm$workflowDecision4.outcome) === 2 ? _c("span", {
      staticClass: "stamp is-approved"
    }, [_vm._v("Avis Favorable")]) : _vm._e(), _vm._v(" "), ((_vm$workflowDecision5 = _vm.workflowDecision(workflow)) === null || _vm$workflowDecision5 === void 0 ? void 0 : _vm$workflowDecision5.outcome) === 3 ? _c("span", {
      staticClass: "stamp is-nope"
    }, [_vm._v("Avis défavorable")]) : _vm._e()]) : _c("div", [_c("div", [((_vm$workflowDecision6 = _vm.workflowDecision(workflow)) === null || _vm$workflowDecision6 === void 0 ? void 0 : _vm$workflowDecision6.outcome) === 1 ? _c("span", {
      staticClass: "stamp avis-fav"
    }, [_vm._v("clôturé avec avis favorable")]) : _vm._e(), _vm._v(" "), ((_vm$workflowDecision7 = _vm.workflowDecision(workflow)) === null || _vm$workflowDecision7 === void 0 ? void 0 : _vm$workflowDecision7.outcome) === -1 ? _c("span", {
      staticClass: "stamp avis-nonfav"
    }, [_vm._v("clôturé avec avis défavorable")]) : _vm._e(), _vm._v(" "), ((_vm$workflowDecision8 = _vm.workflowDecision(workflow)) === null || _vm$workflowDecision8 === void 0 ? void 0 : _vm$workflowDecision8.outcome) === 2 ? _c("span", {
      staticClass: "stamp is-approved"
    }, [_vm._v("Avis Favorable")]) : _vm._e(), _vm._v(" "), ((_vm$workflowDecision9 = _vm.workflowDecision(workflow)) === null || _vm$workflowDecision9 === void 0 ? void 0 : _vm$workflowDecision9.outcome) === 3 ? _c("span", {
      staticClass: "stamp is-nope"
    }, [_vm._v("Avis défavorable")]) : _vm._e()])])]], 2), _vm._v(" "), _c("div", {
      staticClass: "col-md-8 p-2 px-3 d-flex flex-column justify-content-between border-left"
    }, [_c("h6", [_vm._v("Commentaires")]), _vm._v(" "), _c("p", [_vm._v("\r\n                                                        " + _vm._s((_vm$workflowDecision0 = _vm.workflowDecision(workflow)) === null || _vm$workflowDecision0 === void 0 ? void 0 : _vm$workflowDecision0.outcome_message) + "\r\n                                                    ")])])])] : _vm._e()]], 2)])]);
  }), 0) : _c("p", [_vm._v("Aucun élément trouvé")])]], 2)], 2) : _vm._e()])], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modals/DossierTimelineModal.vue?vue&type=style&index=0&id=258535e2&scoped=true&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modals/DossierTimelineModal.vue?vue&type=style&index=0&id=258535e2&scoped=true&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n*[data-v-258535e2] {\r\n    outline: none;\r\n    box-sizing: border-box;\n}\n.article-container[data-v-258535e2] {\r\n    padding: 10px;\r\n    position: relative;\r\n    border-left: 4px solid var(--border-color);\n}\n.container[data-v-258535e2] {\r\n    margin: 0;\r\n    padding: 0;\r\n    width: 100%;\r\n    /* max-width: 500px; */\r\n    height: 84vh;\r\n    overflow-y: auto ;\r\n    overflow-x: hidden ;\n}\n.vr[data-v-258535e2]{\r\n    height: 100%;\r\n    width:0;\r\n    border: 0;\r\n    border-left: 1px solid;\r\n    opacity: .25;\n}\n.border-left[data-v-258535e2] {\r\n    border: 0;\r\n    border-left: 1px solid #bcbdbe;\n}\n.stamp[data-v-258535e2]{\r\n    font-size: 1rem !important;\n}\n.avatar-img[data-v-258535e2]{\r\n    width: 3rem;\r\n    height: 3rem;\r\n    border-radius: 100%;\n}\n.container .[data-v-258535e2]     {\r\n    position: relative;\n}\r\n/* .container .timeline .date {\r\n    display: inline-block;\r\n    border: 1px solid black;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n    position: relative;\r\n    left: 15px;\r\n    margin: 15px 0;\r\n}\r\n.container .timeline .date:before {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: 50%;\r\n    left: -16px;\r\n    border: 1px solid black;\r\n    width: 14px;\r\n} */\n.container .timeline .article[data-v-258535e2] {\r\n    position: relative;\r\n    /* left: 20px; */\r\n    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);\r\n    border-radius: 5px;\r\n    margin: 10px 0;\n}\n.infobulle[data-v-258535e2] {\r\n    background: #34495e;\r\n    color: white;\r\n    padding: 5px;\r\n    border-color: transparent white transparent transparent;\r\n    content: \"\";\r\n    border-radius: 5px;\r\n    border-width: 5px;\r\n    width: 17vh;\r\n    text-align: center;\r\n    font-size: 12px;\n}\r\n/* .container .timeline .article:hover {\r\n    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.4);\r\n} */\n.container .timeline .article a[data-v-258535e2] {\r\n    color: green;\r\n    text-decoration: none;\n}\n.container .timeline .article .article-date[data-v-258535e2] {\r\n    font-weight: 300;\r\n    font-size: 14px;\n}\n.container .dot[data-v-258535e2] {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    position: absolute;\r\n    width: 25px;\r\n    height: 25px;\r\n    border-radius: 50%;\r\n    background:  #34495e;\r\n    left: -14px;\r\n    top: 0;\r\n    text-align: center;\r\n    color: white;\n}\n.hgt-50[data-v-258535e2] {\r\n    height: 50px;\r\n    opacity: 0;\n}\n[data-v-258535e2]::-webkit-scrollbar-track {\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\r\n    background-color: #F5F5F5;\n}\n[data-v-258535e2]::-webkit-scrollbar {\r\n    width: 5px;\r\n    background-color: #F5F5F5;\n}\n[data-v-258535e2]::-webkit-scrollbar-thumb {\r\n    background-color: #2c3e50;\r\n    border: 2px solid #555555;\n}\r\n\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modals/DossierTimelineModal.vue?vue&type=style&index=0&id=258535e2&scoped=true&lang=css":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modals/DossierTimelineModal.vue?vue&type=style&index=0&id=258535e2&scoped=true&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DossierTimelineModal_vue_vue_type_style_index_0_id_258535e2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DossierTimelineModal.vue?vue&type=style&index=0&id=258535e2&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modals/DossierTimelineModal.vue?vue&type=style&index=0&id=258535e2&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DossierTimelineModal_vue_vue_type_style_index_0_id_258535e2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DossierTimelineModal_vue_vue_type_style_index_0_id_258535e2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/modals/DossierTimelineModal.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/modals/DossierTimelineModal.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DossierTimelineModal_vue_vue_type_template_id_258535e2_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DossierTimelineModal.vue?vue&type=template&id=258535e2&scoped=true */ "./resources/js/components/modals/DossierTimelineModal.vue?vue&type=template&id=258535e2&scoped=true");
/* harmony import */ var _DossierTimelineModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DossierTimelineModal.vue?vue&type=script&lang=js */ "./resources/js/components/modals/DossierTimelineModal.vue?vue&type=script&lang=js");
/* harmony import */ var _DossierTimelineModal_vue_vue_type_style_index_0_id_258535e2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DossierTimelineModal.vue?vue&type=style&index=0&id=258535e2&scoped=true&lang=css */ "./resources/js/components/modals/DossierTimelineModal.vue?vue&type=style&index=0&id=258535e2&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DossierTimelineModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _DossierTimelineModal_vue_vue_type_template_id_258535e2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _DossierTimelineModal_vue_vue_type_template_id_258535e2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "258535e2",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/modals/DossierTimelineModal.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/modals/DossierTimelineModal.vue?vue&type=script&lang=js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/modals/DossierTimelineModal.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DossierTimelineModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DossierTimelineModal.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modals/DossierTimelineModal.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DossierTimelineModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/modals/DossierTimelineModal.vue?vue&type=style&index=0&id=258535e2&scoped=true&lang=css":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/components/modals/DossierTimelineModal.vue?vue&type=style&index=0&id=258535e2&scoped=true&lang=css ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DossierTimelineModal_vue_vue_type_style_index_0_id_258535e2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DossierTimelineModal.vue?vue&type=style&index=0&id=258535e2&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modals/DossierTimelineModal.vue?vue&type=style&index=0&id=258535e2&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/modals/DossierTimelineModal.vue?vue&type=template&id=258535e2&scoped=true":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/modals/DossierTimelineModal.vue?vue&type=template&id=258535e2&scoped=true ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DossierTimelineModal_vue_vue_type_template_id_258535e2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DossierTimelineModal_vue_vue_type_template_id_258535e2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DossierTimelineModal_vue_vue_type_template_id_258535e2_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DossierTimelineModal.vue?vue&type=template&id=258535e2&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modals/DossierTimelineModal.vue?vue&type=template&id=258535e2&scoped=true");


/***/ })

}]);