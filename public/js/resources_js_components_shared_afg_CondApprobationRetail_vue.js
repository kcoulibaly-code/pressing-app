"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_shared_afg_CondApprobationRetail_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/CondApprobationRetail.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/CondApprobationRetail.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), c(GeneratorFunctionPrototype, u, GeneratorFunction.displayName = "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "CondApprobationRetail",
  props: {
    dossier_credit: Object
  },
  components: {
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__.PlusIcon,
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__.TrashIcon
  },
  created: function created() {
    var _this$dossier_credit;
    this.meta_data = {
      cred_pub_key: (_this$dossier_credit = this.dossier_credit) === null || _this$dossier_credit === void 0 ? void 0 : _this$dossier_credit.cred_pub_key,
      dossier_credit: this.dossier_credit
    };
    this.meta_parseable = {
      cred_pub_key: this.meta_data["cred_pub_key"],
      tb_name: this.tb_name
    };
  },
  mounted: function mounted() {
    var _this = this;
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _this.loadData = true;
            _context.next = 3;
            return _this.loadRetrieved();
          case 3:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  data: function data() {
    return {
      loadData: false,
      maskedBtn: false,
      tb_name: "tb999",
      meta_parseable: null,
      ebapisHost: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__["default"].host,
      intervalAutosavingTb: null,
      condition_approbations: [],
      checkVerifyCanApprove: false,
      formDataToBeWatched: {
        notes: [],
        commentaire: '',
        condition_approbations: []
      },
      CONDITION_MAPPING: [{
        pattern: /ancienneté chez l’employeur\s*:\s*\[01 mois\s*-\s*03 mois\]/i,
        validator: 'checkSeniorityCondition'
      }, {
        pattern: /être âgé de 21 à 69 ans/i,
        validator: 'checkAgeCondition'
      }, {
        pattern: /cdi ou un cdd.*salaire d’au moins 50 000f cfa/i,
        validator: 'checkSalaryCondition'
      }, {
        pattern: /ancienneté minimale d’un mois.*(fonctionnaires|privé)/i,
        validator: 'checkAncienneteFonctionnaireOuPrive'
      }, {
        pattern: /ancienneté chez l’employeur\s*:\s*\[01 mois\s*-\s*36 mois\]/i,
        validator: 'checkAncienneteFlexible'
      }, {
        pattern: /salaire minimum\s*:\s*\]0\s*-\s*100 000\]/i,
        validator: 'checkSalaryConditionFlexible'
      }]
    };
  },
  computed: {
    checkFields: function checkFields() {
      var valid = true;
      this.condition_approbations.forEach(function (el) {
        if (['', null, undefined].includes(el.value)) {
          valid = false;
        }
      });
      return valid;
    }
  },
  methods: {
    // applyApprovalConditions() {
    //     this.condition_approbations.forEach((el, index) => {
    //         const name = el.name?.toLowerCase()?.trim() || '';
    //         let isValid = false;
    //         // Trouver la première règle qui correspond au nom
    //         const matchedRule = this.CONDITION_MAPPING.find(rule => 
    //             rule.pattern.test(el.name)
    //         );
    //         if (matchedRule && typeof this[matchedRule.validator] === 'function') {
    //             isValid = this[matchedRule.validator](index);
    //         }
    //         this.$set(this.condition_approbations[index], 'value', isValid ? 'Oui' : 'Non');
    //     });
    // },
    applyApprovalConditions: function applyApprovalConditions() {
      var _this2 = this;
      this.condition_approbations.forEach(function (el, index) {
        var _el$name;
        var name = ((_el$name = el.name) === null || _el$name === void 0 || (_el$name = _el$name.toLowerCase()) === null || _el$name === void 0 ? void 0 : _el$name.trim()) || '';

        // Skip if name is empty or value is already set (preserve user input)
        if (!name || el.value) {
          return;
        }
        var matchedRule = _this2.CONDITION_MAPPING.find(function (rule) {
          return rule.pattern.test(name);
        });
        if (matchedRule && typeof _this2[matchedRule.validator] === 'function') {
          var isValid = _this2[matchedRule.validator](index);
          _this2.$set(_this2.condition_approbations[index], 'value', isValid ? 'Oui' : 'Non');
        } else {
          _this2.$set(_this2.condition_approbations[index], 'value', '');
        }
      });
      this.handleInput();
    },
    handleDoubleClickOrClick: function handleDoubleClickOrClick(event, index, element) {
      var _this3 = this;
      EventBus.$emit("open-extra-file-explorer");
      setTimeout(function () {
        EventBus.$emit("data-extra-file-explorer", {
          name: "Pièce(s) jointe(s) {(*)}condition_approbations" + index + "_" + _this3.$route.params.templateId,
          view: element === null || element === void 0 ? void 0 : element.from_monteur_doss
        });
      }, 500);
    },
    getFiles: function getFiles() {
      var _this4 = this;
      ProxyService.proxyEbapis({
        url: this.connectsHost + 'api/get-files',
        method: 'POST',
        data: {
          file_identity: this.meta_data["dossier_credit"].cred_pub_key
        }
      }).then(function (res) {
        var _res$data$data, _res$data$data2;
        res.data = JSON.parse(res.data);
        if (((_res$data$data = res.data.data) === null || _res$data$data === void 0 ? void 0 : _res$data$data.length) > 0 || ((_res$data$data2 = res.data.data) === null || _res$data$data2 === void 0 ? void 0 : _res$data$data2.length) != null) {
          _this4.files = res.data.data;
          _this4.condition_approbations.forEach(function (element, index) {
            var count = 0;
            _this4.files.forEach(function (file) {
              var _element$template;
              if ((file === null || file === void 0 ? void 0 : file.extra_file_template_id) != null && (element === null || element === void 0 || (_element$template = element.template) === null || _element$template === void 0 ? void 0 : _element$template.id) == (file === null || file === void 0 ? void 0 : file.extra_file_template_id)) {
                count++;
              }
            });
            _this4.condition_approbations[index]['files'] = count;
            _this4.handleInput();
          });
        }
      })["catch"](function (err) {
        console.error(err);
      });
    },
    handleInput: function handleInput() {
      this.formDataToBeWatched['condition_approbations'] = this.condition_approbations;
    },
    checkboxValCashCall: function checkboxValCashCall(event, index) {
      if (event.target.checked) {
        this.condition_approbations[index]["value"] = event.target.value;
      } else {
        this.condition_approbations[index]["value"] = "";
      }
      this.handleInput();
    },
    addMore: function addMore() {
      this.condition_approbations.push({
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_2__["default"])(),
        name: "",
        value: "",
        files: 0,
        template: "",
        comment: "",
        new_line: true,
        categorie_client: this.condition_approbations[0]['categorie_client'],
        type_credit: this.condition_approbations[0]['type_credit'],
        filiale: this.condition_approbations[0]['filiale']
      });
    },
    remove: function remove(index) {
      this.condition_approbations.splice(index, 1);
      this.handleInput();
    },
    get_condition_approbations: function get_condition_approbations() {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var _this5$dossier_credit, _this5$dossier_credit2, _this5$dossier_credit4;
        var type_credits, applied_templ_name, tbArrays, credpub3, facilites_sollicitees, _this5$dossier_credit3;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              type_credits = [];
              applied_templ_name = (_this5$dossier_credit = _this5.dossier_credit) === null || _this5$dossier_credit === void 0 ? void 0 : _this5$dossier_credit.applied_templ_name;
              tbArrays = _this5.determineCredPubTables(applied_templ_name);
              credpub3 = tbArrays[3]; // if (applied_templ_name == "DAD / DAE") {
              //     credpub3 = tbArrays[2]
              // }
              facilites_sollicitees = [];
              if (!['', null, undefined].includes((_this5$dossier_credit2 = _this5.dossier_credit) === null || _this5$dossier_credit2 === void 0 ? void 0 : _this5$dossier_credit2[credpub3])) {
                facilites_sollicitees = (_this5$dossier_credit3 = _this5.dossier_credit[credpub3]) === null || _this5$dossier_credit3 === void 0 ? void 0 : _this5$dossier_credit3.facilites_sollicitees;
              }
              if (facilites_sollicitees.length > 0) {
                facilites_sollicitees.forEach(function (el) {
                  var _el$montant_credit;
                  var mt = Number(el === null || el === void 0 || (_el$montant_credit = el.montant_credit) === null || _el$montant_credit === void 0 ? void 0 : _el$montant_credit.toString().replace(/\s/g, ""));
                  if (mt > 0) {
                    type_credits.push(el.type_facilite);
                  }
                });
              }
              _context2.next = 9;
              return _this5.$axios.post(_this5.ebapisHost + "creditbuilder/api/v1/afg/get-cond-approbation/", {
                cred_pub_key: _this5.cred_pub_key,
                categorie_client: (_this5$dossier_credit4 = _this5.dossier_credit) === null || _this5$dossier_credit4 === void 0 ? void 0 : _this5$dossier_credit4.categorie_client,
                type_credits: type_credits
              }).then(function (res) {
                var _res$data$condition_a;
                _this5.loadData = false;
                _this5.condition_approbations = (_res$data$condition_a = res.data.condition_approbations) !== null && _res$data$condition_a !== void 0 ? _res$data$condition_a : [];
                _this5.condition_approbations.forEach(function (el) {
                  el['id'] = (0,uuid__WEBPACK_IMPORTED_MODULE_2__["default"])();
                });
                _this5.applyApprovalConditions();
                _this5.handleInput();
              })["catch"](function (error) {
                _this5.loadData = false;
                _this5.$console.error(error);
                // this.$toasted.show("Une erreur est survenue", {
                //     duration: 5000
                // })
              });
            case 9:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    loadRetrieved: function loadRetrieved() {
      var _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var createdKey, createdKeyArr;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _this6.loadData = true;
              createdKey = _this6.tb_name;
              createdKeyArr = createdKey.split("tb");
              createdKey = "cred_pub_tb_" + createdKeyArr[1];
              if (!(_this6.meta_data["dossier_credit"][createdKey] == undefined)) {
                _context3.next = 9;
                break;
              }
              _context3.next = 7;
              return _this6.get_condition_approbations();
            case 7:
              _context3.next = 16;
              break;
            case 9:
              if (['', null, undefined].includes(_this6.meta_data["dossier_credit"][createdKey])) {
                _context3.next = 15;
                break;
              }
              _this6.formDataToBeWatched = _this6.meta_data["dossier_credit"][createdKey];
              if (!['', null, undefined].includes(_this6.meta_data["dossier_credit"][createdKey]['condition_approbations'])) {
                _this6.condition_approbations = _this6.meta_data["dossier_credit"][createdKey]['condition_approbations'];
              }
              if (!(_this6.condition_approbations.length == 0)) {
                _context3.next = 15;
                break;
              }
              _context3.next = 15;
              return _this6.get_condition_approbations();
            case 15:
              _this6.loadData = false;
              // this.getFiles();
            case 16:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
    },
    validateRp: function validateRp(rep) {
      if (!this.checkFields) {
        this.$toasted.show("Prière de répondre à ces questions avant de continuer.", {
          duration: 10000
        });
        return;
      }
      this.maskedBtn = true;
      this.$emit('validate-response', rep);
      this.checkVerifyCanApprove = rep;
    },
    send2Backend: function send2Backend(newVal, oldVal) {
      this.$axios.post(this.ebapisHost + "creditbuilder/api/v1/autosaving/", {
        user: this.authcheckUsr,
        meta_parseable: this.meta_parseable,
        filledData: newVal
      }).then(function () {})["catch"](function (error) {});
    },
    checkSeniorityCondition: function checkSeniorityCondition(index) {
      var _this$dossier_credit2, _creditData$type_cont;
      if (index < 0 || index >= this.condition_approbations.length) {
        return false;
      }
      var seniority = 0; // en mois

      var creditData = ((_this$dossier_credit2 = this.dossier_credit) === null || _this$dossier_credit2 === void 0 ? void 0 : _this$dossier_credit2.cred_pub_tb_120002) || {};
      var typeContrat = (_creditData$type_cont = creditData.type_contrat) === null || _creditData$type_cont === void 0 ? void 0 : _creditData$type_cont.toLowerCase();
      var today = new Date();

      // Cas CDI : calculer ancienneté à partir de la date d'entrée dans l'emploi
      if (typeContrat === 'cdi') {
        var startDate = new Date(creditData.annee_act_emploi);
        if (!isNaN(startDate)) {
          var monthsDiff = (today.getFullYear() - startDate.getFullYear()) * 12 + (today.getMonth() - startDate.getMonth());
          if (today.getDate() < startDate.getDate()) {
            monthsDiff--;
          }
          seniority = monthsDiff;
        }
      }

      // Cas CDD ou Intérim : calculer à partir de la date de début
      else if (typeContrat === 'cdd' || typeContrat === 'interim') {
        var _startDate = new Date(creditData.date_debut_cdd_interim);
        if (!isNaN(_startDate)) {
          var _monthsDiff = (today.getFullYear() - _startDate.getFullYear()) * 12 + (today.getMonth() - _startDate.getMonth());
          if (today.getDate() < _startDate.getDate()) {
            _monthsDiff--;
          }
          seniority = _monthsDiff;
        }
      }

      // Vérifier si l'ancienneté est entre 1 et 3 mois inclus
      return seniority >= 1 && seniority <= 3;
    },
    checkAgeCondition: function checkAgeCondition(index) {
      var _this$dossier_credit3;
      if (index < 0 || index >= this.condition_approbations.length) {
        return false;
      }
      var creditData = ((_this$dossier_credit3 = this.dossier_credit) === null || _this$dossier_credit3 === void 0 ? void 0 : _this$dossier_credit3.cred_pub_tb_120001) || {};
      var dateNaissanceStr = creditData.date_naissance;
      if (!dateNaissanceStr) {
        return false;
      }
      var dateNaissance = new Date(dateNaissanceStr);
      if (!(dateNaissance instanceof Date) || isNaN(dateNaissance)) {
        return false;
      }
      var today = new Date();
      var age = today.getFullYear() - dateNaissance.getFullYear();
      var monthDiff = today.getMonth() - dateNaissance.getMonth();
      var dayDiff = today.getDate() - dateNaissance.getDate();

      // Ajuster si la date anniversaire n'est pas encore passée cette année
      if (monthDiff < 0 || monthDiff === 0 && dayDiff < 0) {
        age--;
      }
      return age >= 21 && age <= 69;
    },
    checkSalaryCondition: function checkSalaryCondition(index) {
      var _this$dossier_credit4, _this$dossier_credit5, _creditData$type_cont2, _this$dossier_credit6, _creditData$employeur;
      if (index < 0 || index >= this.condition_approbations.length) {
        return false;
      }
      var creditData = ((_this$dossier_credit4 = this.dossier_credit) === null || _this$dossier_credit4 === void 0 ? void 0 : _this$dossier_credit4.cred_pub_tb_120002) || {};
      var salaireStr = (_this$dossier_credit5 = this.dossier_credit) === null || _this$dossier_credit5 === void 0 || (_this$dossier_credit5 = _this$dossier_credit5.cred_pub_tb_120001) === null || _this$dossier_credit5 === void 0 || (_this$dossier_credit5 = _this$dossier_credit5.revenu_domicilie[0]) === null || _this$dossier_credit5 === void 0 || (_this$dossier_credit5 = _this$dossier_credit5.montant_salaire) === null || _this$dossier_credit5 === void 0 || (_this$dossier_credit5 = _this$dossier_credit5.toString()) === null || _this$dossier_credit5 === void 0 ? void 0 : _this$dossier_credit5.replace(/[^0-9]/g, '');
      var salaire = Number(salaireStr);
      var typeContrat = (_creditData$type_cont2 = creditData.type_contrat) === null || _creditData$type_cont2 === void 0 ? void 0 : _creditData$type_cont2.toLowerCase();
      var echeancePret = (_this$dossier_credit6 = this.dossier_credit) === null || _this$dossier_credit6 === void 0 || (_this$dossier_credit6 = _this$dossier_credit6.cred_pub_tb_120004) === null || _this$dossier_credit6 === void 0 || (_this$dossier_credit6 = _this$dossier_credit6.facilites_sollicitees) === null || _this$dossier_credit6 === void 0 ? void 0 : _this$dossier_credit6.forEach(function (el) {
        return el === null || el === void 0 ? void 0 : el.date_echeance;
      });
      var employeur = ((_creditData$employeur = creditData.employeur) === null || _creditData$employeur === void 0 ? void 0 : _creditData$employeur.toLowerCase()) || '';
      var isFonctionnaire = employeur.includes('fonctionnaire') || employeur.includes('public');

      // Fonctionnaires : pas de condition sur salaire ou durée
      if (isFonctionnaire) {
        return true;
      }
      // CDI : vérifier que le salaire est >= 50 000
      if (typeContrat === 'cdi') {
        return salaire >= 50000;
      }

      // CDD ou Intérim : calculer la durée réelle du contrat
      if (typeContrat === 'cdd' || typeContrat === 'intérim' || typeContrat === 'interim') {
        var start = new Date(creditData.date_debut_cdd_interim);
        var end = new Date(creditData.date_expiration_cdd_interim);
        if (!(start instanceof Date && !isNaN(start)) || !(end instanceof Date && !isNaN(end))) {
          return false;
        }
        var durationMonths = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
        if (end.getDate() < start.getDate()) {
          durationMonths--;
        }

        // Salaire >= 50 000 ET durée contrat >= échéance prêt + 2 mois
        return salaire >= 50000 && durationMonths >= echeancePret + 2;
      }
      return false;
    },
    checkAncienneteFonctionnaireOuPrive: function checkAncienneteFonctionnaireOuPrive(index) {
      var _this$dossier_credit7, _creditData$type_cont3, _creditData$employeur2;
      if (index < 0 || index >= this.condition_approbations.length) {
        return false;
      }
      var creditData = ((_this$dossier_credit7 = this.dossier_credit) === null || _this$dossier_credit7 === void 0 ? void 0 : _this$dossier_credit7.cred_pub_tb_120002) || {};
      var typeContrat = ((_creditData$type_cont3 = creditData.type_contrat) === null || _creditData$type_cont3 === void 0 ? void 0 : _creditData$type_cont3.toLowerCase()) || '';
      var employeur = ((_creditData$employeur2 = creditData.employeur) === null || _creditData$employeur2 === void 0 ? void 0 : _creditData$employeur2.toLowerCase()) || '';
      var today = new Date();
      var ancienneteMois = 0;

      // Fonctionnaire ou employeur public
      var isFonctionnaire = employeur.includes('fonctionnaire') || employeur.includes('public');

      // CDI : calculer à partir de la date d'entrée
      if (typeContrat === 'cdi') {
        var startDate = new Date(creditData.annee_act_emploi);
        if (!isNaN(startDate)) {
          var monthsDiff = (today.getFullYear() - startDate.getFullYear()) * 12 + (today.getMonth() - startDate.getMonth());
          if (today.getDate() < startDate.getDate()) {
            monthsDiff--;
          }
          ancienneteMois = monthsDiff;
        }
      }

      // CDD / Intérim : calculer depuis la date de début
      else if (typeContrat === 'cdd' || typeContrat === 'intérim' || typeContrat === 'interim') {
        var _startDate2 = new Date(creditData.date_debut_cdd_interim);
        if (!isNaN(_startDate2)) {
          var _monthsDiff2 = (today.getFullYear() - _startDate2.getFullYear()) * 12 + (today.getMonth() - _startDate2.getMonth());
          if (today.getDate() < _startDate2.getDate()) {
            _monthsDiff2--;
          }
          ancienneteMois = _monthsDiff2;
        }
      }

      // Vérification selon le secteur
      if (isFonctionnaire) {
        return ancienneteMois >= 1;
      } else {
        return ancienneteMois >= 6;
      }
    },
    checkAncienneteFlexible: function checkAncienneteFlexible(index) {
      var _this$dossier_credit8, _creditData$type_cont4;
      if (index < 0 || index >= this.condition_approbations.length) {
        return false;
      }
      var creditData = ((_this$dossier_credit8 = this.dossier_credit) === null || _this$dossier_credit8 === void 0 ? void 0 : _this$dossier_credit8.cred_pub_tb_120002) || {};
      var typeContrat = ((_creditData$type_cont4 = creditData.type_contrat) === null || _creditData$type_cont4 === void 0 ? void 0 : _creditData$type_cont4.toLowerCase()) || '';
      var today = new Date();
      var ancienneteMois = 0;

      // CDI : calculer ancienneté à partir de la date de début
      if (typeContrat === 'cdi') {
        var startDate = new Date(creditData.annee_act_emploi);
        if (!isNaN(startDate)) {
          var monthsDiff = (today.getFullYear() - startDate.getFullYear()) * 12 + (today.getMonth() - startDate.getMonth());
          if (today.getDate() < startDate.getDate()) {
            monthsDiff--;
          }
          ancienneteMois = monthsDiff;
        }
      }

      // CDD / Intérim : durée entre début et expiration
      else if (typeContrat === 'cdd' || typeContrat === 'intérim' || typeContrat === 'interim') {
        var _startDate3 = new Date(creditData.date_debut_cdd_interim);
        var endDate = new Date(creditData.date_expiration_cdd_interim);
        if (!isNaN(_startDate3) && !isNaN(endDate)) {
          var _monthsDiff3 = (endDate.getFullYear() - _startDate3.getFullYear()) * 12 + (endDate.getMonth() - _startDate3.getMonth());
          if (endDate.getDate() < _startDate3.getDate()) {
            _monthsDiff3--;
          }
          ancienneteMois = _monthsDiff3;
        }
      }

      // Ancienneté entre 1 et 36 mois
      return ancienneteMois >= 1 && ancienneteMois <= 36;
    },
    checkSalaryConditionFlexible: function checkSalaryConditionFlexible(index) {
      var _this$dossier_credit9;
      if (index < 0 || index >= this.condition_approbations.length) {
        return false;
      }
      var salaireStr = ((_this$dossier_credit9 = this.dossier_credit) === null || _this$dossier_credit9 === void 0 || (_this$dossier_credit9 = _this$dossier_credit9.cred_pub_tb_120001) === null || _this$dossier_credit9 === void 0 || (_this$dossier_credit9 = _this$dossier_credit9.revenu_domicilie[0]) === null || _this$dossier_credit9 === void 0 || (_this$dossier_credit9 = _this$dossier_credit9.montant_salaire) === null || _this$dossier_credit9 === void 0 ? void 0 : _this$dossier_credit9.replace(/[^0-9]/g, '')) || '0';
      var salaire = Number(salaireStr);
      return salaire > 0 && salaire <= 100000;
    }
  },
  watch: {
    formDataToBeWatched: {
      handler: function handler(newVal, oldVal) {
        var _this7 = this;
        if (this.intervalAutosavingTb != null) {
          clearTimeout(this.intervalAutosavingTb);
        }
        this.intervalAutosavingTb = setTimeout(function () {
          _this7.send2Backend(newVal, oldVal);
        }, 2000);
      },
      deep: true,
      immediate: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/CondApprobationRetail.vue?vue&type=template&id=56eb4ee6&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/CondApprobationRetail.vue?vue&type=template&id=56eb4ee6&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("div", {
    staticClass: "memo",
    style: {
      "background-color": _vm.entityColor
    }
  }, [_c("div", {
    staticClass: "container-fluid"
  }, [_c("div", {
    staticClass: "d-flex justify-content-between align-items-center"
  }, [_c("div", [_vm._v("CONDITIONS D'APPROBATION")]), _vm._v(" "), _c("div", [_c("div", {
    staticClass: "d-flex justify-content-between align-items-center"
  }, [_c("i", {
    staticClass: "icofont-close",
    attrs: {
      role: "button"
    },
    on: {
      click: function click($event) {
        return _vm.$modal.hide("cond_approbation_retail");
      }
    }
  })])])])])]), _vm._v(" "), _c("div", {
    staticStyle: {
      "max-height": "80vh",
      overflow: "auto"
    }
  }, [_c("div", {
    staticClass: "card",
    staticStyle: {
      width: "100%",
      margin: "0",
      border: "none"
    }
  }, [_vm.loadData || _vm.checkVerifyCanApprove ? _c("div", {
    staticClass: "card-body"
  }, [_vm._m(0)]) : _c("div", {
    staticClass: "card-body"
  }, [_c("h5", {
    staticClass: "text-center text-danger mb-3"
  }, [_vm._v("Prière de répondre à ces questions avant publication du dossier.")]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(1), _vm._v(" "), _c("tbody", _vm._l(_vm.condition_approbations, function (el, index) {
    return _c("tr", {
      key: index
    }, [_c("td", [(el === null || el === void 0 ? void 0 : el.new_line) == true ? _c("input", {
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
        required: ""
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
        id: "oui" + index
      },
      domProps: {
        checked: el.value === "Oui"
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
        id: "non" + index
      },
      domProps: {
        checked: el.value === "Non"
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
        value: "Non applicable",
        id: "non_applicable" + index
      },
      domProps: {
        checked: el.value === "Non applicable"
      },
      on: {
        change: function change($event) {
          return _vm.checkboxValCashCall($event, index);
        }
      }
    })])]), _vm._v(" "), _c("td", [_c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: el.comment,
        expression: "el.comment"
      }],
      staticClass: "form-control",
      staticStyle: {
        "min-width": "300px"
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
    })])]);
  }), 0)])]), _vm._v(" "), _c("div", [_vm._m(2), _vm._v(" "), _c("vue-editor", {
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
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "mt-3"
  }, [!_vm.maskedBtn ? _c("h6", {
    staticClass: "text-center"
  }, [_vm._v("\n                            Attestez-vous que les conditions mentionnées ci-dessus reflètent la situation actuelle du client ?\n                        ")]) : _vm._e(), _vm._v(" "), !_vm.maskedBtn ? _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-sm-6 col-md-6 col-lg-6"
  }, [_c("div", {
    staticClass: "text-center"
  }, [_c("button", {
    staticClass: "btn btn-danger",
    staticStyle: {
      width: "100%",
      height: "8vh",
      "background-color": "#e74c3c"
    },
    attrs: {
      title: "Non"
    },
    on: {
      click: function click($event) {
        return _vm.validateRp(false);
      }
    }
  }, [_c("i", {
    staticClass: "icofont icofont-close icofont-3x"
  })]), _vm._v(" "), _vm._m(3)])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-6 col-md-6 col-lg-6"
  }, [_c("div", {
    staticClass: "text-center"
  }, [_c("button", {
    staticClass: "btn btn-success",
    staticStyle: {
      width: "100%",
      height: "8vh",
      "background-color": "#27ae60"
    },
    attrs: {
      title: "Oui"
    },
    on: {
      click: function click($event) {
        return _vm.validateRp(true);
      }
    }
  }, [_c("i", {
    staticClass: "icofont icofont-check icofont-3x"
  })]), _vm._v(" "), _vm._m(4)])])]) : _vm._e()])])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "d-flex justify-content-center text-center align-items-center text-muted py-4"
  }, [_c("div", [_c("span", {
    staticClass: "spinner-border spinner-border"
  }), _vm._v(" "), _c("h5", [_vm._v("\n                                Chargement des données en cours ... "), _c("br"), _vm._v("\n                                Ceci peut prendre un peu de temps\n                            ")])])]);
}, function () {
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
  }, [_c("label", [_vm._v("COMMENTAIRE")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", [_c("b", [_vm._v("Commentaire")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("b", [_vm._v("Non")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("b", [_vm._v("Oui")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/CondApprobationRetail.vue?vue&type=style&index=0&id=56eb4ee6&lang=css&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/CondApprobationRetail.vue?vue&type=style&index=0&id=56eb4ee6&lang=css&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.memo[data-v-56eb4ee6] {\r\n    padding: 10px;\r\n    border: 2px solid #fff;\r\n    font-weight: 550;\r\n    font-size: 16px;\r\n    /* text-align: center; */\r\n    text-transform: uppercase;\r\n    background-color: #dc0030;\r\n    color: #fff;\n}\n.bg-grey[data-v-56eb4ee6] {\r\n    background-color: #f4f3f3;\n}\n.container[data-v-56eb4ee6] {\r\n    width: 100%;\r\n    max-width: 1000px;\r\n    margin: 0 auto;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/CondApprobationRetail.vue?vue&type=style&index=0&id=56eb4ee6&lang=css&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/CondApprobationRetail.vue?vue&type=style&index=0&id=56eb4ee6&lang=css&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CondApprobationRetail_vue_vue_type_style_index_0_id_56eb4ee6_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CondApprobationRetail.vue?vue&type=style&index=0&id=56eb4ee6&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/CondApprobationRetail.vue?vue&type=style&index=0&id=56eb4ee6&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CondApprobationRetail_vue_vue_type_style_index_0_id_56eb4ee6_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CondApprobationRetail_vue_vue_type_style_index_0_id_56eb4ee6_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/shared/afg/CondApprobationRetail.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/components/shared/afg/CondApprobationRetail.vue ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CondApprobationRetail_vue_vue_type_template_id_56eb4ee6_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CondApprobationRetail.vue?vue&type=template&id=56eb4ee6&scoped=true */ "./resources/js/components/shared/afg/CondApprobationRetail.vue?vue&type=template&id=56eb4ee6&scoped=true");
/* harmony import */ var _CondApprobationRetail_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CondApprobationRetail.vue?vue&type=script&lang=js */ "./resources/js/components/shared/afg/CondApprobationRetail.vue?vue&type=script&lang=js");
/* harmony import */ var _CondApprobationRetail_vue_vue_type_style_index_0_id_56eb4ee6_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CondApprobationRetail.vue?vue&type=style&index=0&id=56eb4ee6&lang=css&scoped=true */ "./resources/js/components/shared/afg/CondApprobationRetail.vue?vue&type=style&index=0&id=56eb4ee6&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CondApprobationRetail_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _CondApprobationRetail_vue_vue_type_template_id_56eb4ee6_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _CondApprobationRetail_vue_vue_type_template_id_56eb4ee6_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "56eb4ee6",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/shared/afg/CondApprobationRetail.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/shared/afg/CondApprobationRetail.vue?vue&type=script&lang=js":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/shared/afg/CondApprobationRetail.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CondApprobationRetail_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CondApprobationRetail.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/CondApprobationRetail.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CondApprobationRetail_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/shared/afg/CondApprobationRetail.vue?vue&type=style&index=0&id=56eb4ee6&lang=css&scoped=true":
/*!******************************************************************************************************************************!*\
  !*** ./resources/js/components/shared/afg/CondApprobationRetail.vue?vue&type=style&index=0&id=56eb4ee6&lang=css&scoped=true ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CondApprobationRetail_vue_vue_type_style_index_0_id_56eb4ee6_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CondApprobationRetail.vue?vue&type=style&index=0&id=56eb4ee6&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/CondApprobationRetail.vue?vue&type=style&index=0&id=56eb4ee6&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/shared/afg/CondApprobationRetail.vue?vue&type=template&id=56eb4ee6&scoped=true":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/shared/afg/CondApprobationRetail.vue?vue&type=template&id=56eb4ee6&scoped=true ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CondApprobationRetail_vue_vue_type_template_id_56eb4ee6_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CondApprobationRetail_vue_vue_type_template_id_56eb4ee6_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CondApprobationRetail_vue_vue_type_template_id_56eb4ee6_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CondApprobationRetail.vue?vue&type=template&id=56eb4ee6&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/CondApprobationRetail.vue?vue&type=template&id=56eb4ee6&scoped=true");


/***/ })

}]);