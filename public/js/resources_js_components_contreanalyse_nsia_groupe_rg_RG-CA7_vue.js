"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_contreanalyse_nsia_groupe_rg_RG-CA7_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/groupe/rg/RG-CA7.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/groupe/rg/RG-CA7.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/ContextMenu */ "./resources/js/components/shared/ContextMenu.vue");
/* harmony import */ var _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/ContextMenuItem */ "./resources/js/components/shared/ContextMenuItem.vue");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _services_connects_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../services/connects.service */ "./resources/js/services/connects.service.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../services/auth.service */ "./resources/js/services/auth.service.js");
/* harmony import */ var _services_credit_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../services/credit.service */ "./resources/js/services/credit.service.js");
/* harmony import */ var _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @vueform/multiselect/dist/multiselect.vue2 */ "./node_modules/@vueform/multiselect/dist/multiselect.vue2.js");
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../helpers/helper */ "./resources/js/helpers/helper.js");
/* harmony import */ var _shared_widgets_subtable_ST1_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/widgets/subtable/ST1.vue */ "./resources/js/components/shared/widgets/subtable/ST1.vue");
/* harmony import */ var _services_nsia_f8_manager_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../services/nsia/f8-manager.js */ "./resources/js/services/nsia/f8-manager.js");
/* harmony import */ var _services_nsia_f8_constants_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../services/nsia/f8-constants.js */ "./resources/js/services/nsia/f8-constants.js");
/* harmony import */ var _johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @johmun/vue-tags-input */ "./node_modules/@johmun/vue-tags-input/dist/vue-tags-input.js");
/* harmony import */ var _johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_11__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), c(GeneratorFunctionPrototype, u, GeneratorFunction.displayName = "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var formDataToBeWatchedProperty = ["situations_apres_accords", "conso_fond_propre", "comment_conso_fond_propre", "comment_situation_apres_accord"];
















var NOW = new Date();
// import Multiselect from "@vueform/multiselect/dist/multiselect.vue2";

window.$ = window.jQuery = __webpack_require__(/*! jquery/dist/jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Centrale_Risques_Adhesion_au_BIC",
  display: "Centrale Risques – Adhésion au BIC",
  components: {
    MoreVerticalIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_12__.MoreVerticalIcon,
    ChevronUpIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_12__.ChevronUpIcon,
    ChevronDownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_12__.ChevronDownIcon,
    ContextMenu: _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_0__["default"],
    ContextMenuItem: _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_1__["default"],
    AirplayIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_12__.AirplayIcon,
    BookOpenIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_12__.BookOpenIcon,
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_12__.PlusIcon,
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_12__.TrashIcon,
    VueTagsInput: (_johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_11___default()),
    ST1: _shared_widgets_subtable_ST1_vue__WEBPACK_IMPORTED_MODULE_8__["default"]
  },
  props: {
    meta_data: Object,
    tb_name: String,
    tb_display_name: String
  },
  created: function created() {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  } // const cachedCreditTypes = localStorage.getItem('credit_types');
  // if (!cachedCreditTypes) {
  //     // console.log("\n *** using credit types from server");
  //     await Credit.loadCredits()
  //         .then(res => {
  //             this.credData(res);
  //             localStorage.setItem('credit_types', JSON.stringify(res.data));
  //         }).catch(err => {
  //             console.log(err)
  //         })
  // } else {
  //     // console.log("\n *** using credit types from caches");
  //     let data = JSON.parse(cachedCreditTypes);
  //     this.credits = data;
  // }
  ,
  computed: {},
  mounted: function mounted() {
    var _this$meta_data$dossi,
      _this = this;
    var applied_templ_name = (_this$meta_data$dossi = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi === void 0 ? void 0 : _this$meta_data$dossi.applied_templ_name;
    var tbArrays = this.determineCredPubTables(applied_templ_name);
    this.credpub_8 = tbArrays[2];
    this.loadRetrieved();
    this.loadTbAttrs(); // charge les attributs + sous attributs des tables

    EventBus.$on("created-extra-file-template", function (data) {
      _this.conso_fond_propre.forEach(function (element, index) {
        var _data$template;
        if ((element === null || element === void 0 ? void 0 : element.name) == (data === null || data === void 0 || (_data$template = data.template) === null || _data$template === void 0 ? void 0 : _data$template.name)) {
          var _data$template2, _data$template3, _data$template4;
          _this.conso_fond_propre[index]['template'] = {
            'id': data === null || data === void 0 || (_data$template2 = data.template) === null || _data$template2 === void 0 ? void 0 : _data$template2.id,
            'name': data === null || data === void 0 || (_data$template3 = data.template) === null || _data$template3 === void 0 ? void 0 : _data$template3.name,
            'slug': data === null || data === void 0 || (_data$template4 = data.template) === null || _data$template4 === void 0 ? void 0 : _data$template4.slug
          };
          _this.handleInput();
        }
      });
    });
    EventBus.$on("updated-extra-file-upload", function (data) {
      _this.getFiles();
    });
    // this.banqueData();
  },
  data: function data() {
    var vm = this;
    return {
      f8Manager: _services_nsia_f8_manager_js__WEBPACK_IMPORTED_MODULE_9__["default"],
      f8Constants: _services_nsia_f8_constants_js__WEBPACK_IMPORTED_MODULE_10__["default"],
      ebapisHost: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_2__["default"].host,
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
      seen4: true,
      seen5: true,
      seen6: true,
      index: 0,
      credits: [],
      clients: [],
      files: [],
      encours: null,
      dataToSave: undefined,
      placeholder: "Chercher clients",
      matcli: "matcli",
      nomcli: "nomcli",
      banques: "",
      meta_parseable: {
        cred_pub_key: this.meta_data["cred_pub_key"],
        tb_name: this.tb_name
      },
      formDataToBeWatched: {
        notes: [],
        situations_apres_accords: "",
        conso_fond_propre: "",
        comment_conso_fond_propre: "",
        comment_situation_apres_accord: "",
        mode_calcul: ""
        // encours_au: datefns.format(NOW, 'yyyy-MM-dd'),
      },
      conso_fond_propre: [{
        name: "Consommation fonds propre",
        montant: 0,
        files: 0,
        template: ""
      }],
      situations_apres_accords: "",
      listingNote: false,
      frais: [],
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
      credpub_8: null,
      // =======================
      ligneSelected: {},
      flag: {}
    };
  },
  methods: {
    openModal: function openModal(modalName, ligneSelected) {
      var download = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var res = true;
      this.ligneSelected = ligneSelected;
      if (!(ligneSelected !== null && ligneSelected !== void 0 && ligneSelected.ligne)) {
        this.$toasted.show("Veuillez selectionner la ligne avant d'attacher les suretés ");
        return;
      }
      if (download) {
        res = this.f8Manager.loadSuretesOfOldLines(ligneSelected);
      }
      //this.$modal.show(modalName)
      this.$modal.show('hypo_modal_dc');
      EventBus.$emit('updated-st-1-hypo', {
        ligneSelected: this.ligneSelected,
        meta_data: this.meta_data
      });
    },
    closeModal: function closeModal(modalName, ligneSelected) {
      var a = this.f8Manager.modalConditions(ligneSelected.id);
      // if(a) this.$modal.hide(modalName)
      this.$modal.hide(modalName);
    },
    handleChangeLinges: function handleChangeLinges() {
      var _this2 = this;
      //this.tous_les_lignes_filtres = [];
      this.tous_les_lignes_filtres = this.tous_les_lignes;
      this.lignes_engagements_signatures_filtres = [];
      this.lignes_engagements_signatures.forEach(function (el) {
        var f = false;
        _this2.nv_lignes_signature_2.forEach(function (el1) {
          if (el.libelle == el1.ligne) {
            f = true;
          }
        });
        _this2.nv_lignes_signature_1.forEach(function (el1) {
          if (el.libelle == el1.ligne) {
            f = true;
          }
        });
        if (f == false) {
          _this2.lignes_engagements_signatures_filtres.push(el);
        }
      });
    },
    formDataVars: function formDataVars(event) {
      this.formDataToBeWatched[event[0]] = event[1];
      // this.handleInput()
    },
    formDataVars2: function formDataVars2(event, index, objectName, keyName) {
      this.f8Manager.data[objectName][index][keyName] = event[1];
    },
    tous_les_lignes_sorted: function tous_les_lignes_sorted() {
      tous_les_lignes.sort(function (a, b) {
        return a.libelle.localeCompare(b.libelle);
      });
    },
    determineKey: function determineKey() {
      var createdKey = this.tb_name;
      var createdKeyArr = createdKey.split("tb");
      createdKey = "cred_pub_tb_" + createdKeyArr[1];
      return createdKey;
    },
    tableClosedOrOpened: function tableClosedOrOpened() {
      this.seen = this.fetchClosedTables(this.tb_name + this.meta_data["cred_pub_key"]);
    },
    openNotesModal: function openNotesModal() {
      var listing = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.listingNote = listing;
      this.$modal.show(this.tb_name);
    },
    launchAutoSaver: function launchAutoSaver() {
      var _this3 = this;
      _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["default"].loadUserData().then(function (res) {
        _this3.send2Backend(res, 0, 0);
      })["catch"](function (err) {
        _this3.loadWithError(err);
      });
    },
    loadRetrieved: function loadRetrieved() {
      var _this$meta_data$dossi2;
      var lentb = this.meta_data["dossier_credit"]["tbs_in_use"];
      var createdKey = this.tb_name;
      var createdKeyArr = createdKey.split("tb");
      createdKey = "cred_pub_tb_" + createdKeyArr[1];

      // Close table by default
      // this.defaultRetract(
      //     false,
      //     this.meta_data["dossier_credit"]?.applied_templ_id
      // );

      var data_f19003 = (_this$meta_data$dossi2 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi2 === void 0 ? void 0 : _this$meta_data$dossi2.cred_pub_tb_19503;
      if (lentb.length == 0 || !this.meta_data["dossier_credit"][createdKey]) {
        var _this$meta_data$dossi3, _this$meta_data$dossi4, _this$meta_data$dossi10;
        // console.warn("Pas de tableau ou pas de cred_pub_tb");
        if (((_this$meta_data$dossi3 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi3 === void 0 ? void 0 : _this$meta_data$dossi3.cred_pub_tb_19503) != undefined) {
          var credit_folder_table_19003 = _objectSpread({}, this.meta_data["dossier_credit"]["cred_pub_tb_19503"]);
          this.f8Manager.setData(credit_folder_table_19003);
          this.formDataToBeWatched.comment_situation_apres_accord = data_f19003 === null || data_f19003 === void 0 ? void 0 : data_f19003.comment_situation_apres_accord;
        } else if (this.meta_data["dossier_credit"][this.credpub_8] != undefined) {
          var data_f8 = this.meta_data["dossier_credit"][this.credpub_8];
          // console.warn("Pas de tableau ou pas de cred_pub_tb");
          var credit_folder_table_8 = _objectSpread({}, this.meta_data["dossier_credit"][this.credpub_8]);
          this.f8Manager.setData(credit_folder_table_8);
          this.formDataToBeWatched.comment_situation_apres_accord = data_f8 === null || data_f8 === void 0 ? void 0 : data_f8.comment_situation_apres_accord;
        }
        if (((_this$meta_data$dossi4 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi4 === void 0 ? void 0 : _this$meta_data$dossi4.cred_pub_tb_28004) != undefined) {
          var _this$meta_data$dossi5;
          if (((_this$meta_data$dossi5 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi5 === void 0 || (_this$meta_data$dossi5 = _this$meta_data$dossi5.cred_pub_tb_28004) === null || _this$meta_data$dossi5 === void 0 ? void 0 : _this$meta_data$dossi5.mode_calcul) == 'M') {
            var _this$meta_data$dossi6, _this$meta_data$dossi7, _this$conso_fond_prop;
            this.formDataToBeWatched.mode_calcul = "M";
            this.conso_fond_propre = (_this$meta_data$dossi6 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi6 === void 0 || (_this$meta_data$dossi6 = _this$meta_data$dossi6.cred_pub_tb_28004) === null || _this$meta_data$dossi6 === void 0 ? void 0 : _this$meta_data$dossi6.conso_fond_propre;
            this.formDataToBeWatched.comment_conso_fond_propre = (_this$meta_data$dossi7 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi7 === void 0 || (_this$meta_data$dossi7 = _this$meta_data$dossi7.cred_pub_tb_28004) === null || _this$meta_data$dossi7 === void 0 ? void 0 : _this$meta_data$dossi7.comment_conso_fond_propre;
            // this.conso_fond_propre

            if (((_this$conso_fond_prop = this.conso_fond_propre) === null || _this$conso_fond_prop === void 0 ? void 0 : _this$conso_fond_prop.length) > 0) {
              this.conso_fond_propre = this.conso_fond_propre.map(function (ed) {
                return _objectSpread(_objectSpread({}, ed), {}, {
                  comeFrom: 'tb_28004'
                });
              });
            }
          } else {
            var _this$meta_data$dossi8;
            if (((_this$meta_data$dossi8 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi8 === void 0 || (_this$meta_data$dossi8 = _this$meta_data$dossi8.cred_pub_tb_28004) === null || _this$meta_data$dossi8 === void 0 ? void 0 : _this$meta_data$dossi8.mode_calcul) == 'A') {
              var _this$meta_data$dossi9, _this$meta_data$dossi0;
              this.formDataToBeWatched.comment_conso_fond_propre = (_this$meta_data$dossi9 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi9 === void 0 || (_this$meta_data$dossi9 = _this$meta_data$dossi9.cred_pub_tb_28004) === null || _this$meta_data$dossi9 === void 0 ? void 0 : _this$meta_data$dossi9.comment_conso_fond_propre;
              if (((_this$meta_data$dossi0 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi0 === void 0 || (_this$meta_data$dossi0 = _this$meta_data$dossi0.cred_pub_tb_28004) === null || _this$meta_data$dossi0 === void 0 ? void 0 : _this$meta_data$dossi0.conso_fond_propre_mode_auto) != "") {
                var _this$meta_data$dossi1;
                this.conso_fond_propre[0].montant = (_this$meta_data$dossi1 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi1 === void 0 || (_this$meta_data$dossi1 = _this$meta_data$dossi1.cred_pub_tb_28004) === null || _this$meta_data$dossi1 === void 0 || (_this$meta_data$dossi1 = _this$meta_data$dossi1.conso_fond_propre_mode_auto[0]) === null || _this$meta_data$dossi1 === void 0 ? void 0 : _this$meta_data$dossi1.montant;
              }
              // conso_fond_propre_mode_auto
            }
          }
        } else if (((_this$meta_data$dossi10 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi10 === void 0 ? void 0 : _this$meta_data$dossi10.cred_pub_tb_19503) != undefined) {
          var _this$meta_data$dossi11;
          if (((_this$meta_data$dossi11 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi11 === void 0 || (_this$meta_data$dossi11 = _this$meta_data$dossi11.cred_pub_tb_19503) === null || _this$meta_data$dossi11 === void 0 ? void 0 : _this$meta_data$dossi11.mode_calcul) == 'M') {
            var _this$meta_data$dossi12, _this$meta_data$dossi13, _this$conso_fond_prop2;
            this.formDataToBeWatched.mode_calcul = "M";
            this.formDataToBeWatched.comment_conso_fond_propre = (_this$meta_data$dossi12 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi12 === void 0 || (_this$meta_data$dossi12 = _this$meta_data$dossi12.cred_pub_tb_19503) === null || _this$meta_data$dossi12 === void 0 ? void 0 : _this$meta_data$dossi12.comment_conso_fond_propre;
            this.conso_fond_propre = (_this$meta_data$dossi13 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi13 === void 0 || (_this$meta_data$dossi13 = _this$meta_data$dossi13.cred_pub_tb_19503) === null || _this$meta_data$dossi13 === void 0 ? void 0 : _this$meta_data$dossi13.conso_fond_propre;
            if (((_this$conso_fond_prop2 = this.conso_fond_propre) === null || _this$conso_fond_prop2 === void 0 ? void 0 : _this$conso_fond_prop2.length) > 0) {
              this.conso_fond_propre = this.conso_fond_propre.map(function (ed) {
                return _objectSpread(_objectSpread({}, ed), {}, {
                  comeFrom: 'tb_19003'
                });
              });
            }
          } else {
            var _this$meta_data$dossi14;
            if (((_this$meta_data$dossi14 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi14 === void 0 || (_this$meta_data$dossi14 = _this$meta_data$dossi14.cred_pub_tb_19503) === null || _this$meta_data$dossi14 === void 0 ? void 0 : _this$meta_data$dossi14.mode_calcul) == 'A') {
              var _this$meta_data$dossi15, _this$meta_data$dossi16;
              this.formDataToBeWatched.comment_conso_fond_propre = (_this$meta_data$dossi15 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi15 === void 0 || (_this$meta_data$dossi15 = _this$meta_data$dossi15.cred_pub_tb_28004) === null || _this$meta_data$dossi15 === void 0 ? void 0 : _this$meta_data$dossi15.comment_conso_fond_propre;
              if (((_this$meta_data$dossi16 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi16 === void 0 || (_this$meta_data$dossi16 = _this$meta_data$dossi16.cred_pub_tb_19503) === null || _this$meta_data$dossi16 === void 0 ? void 0 : _this$meta_data$dossi16.conso_fond_propre_mode_auto) != "") {
                var _this$meta_data$dossi17;
                this.conso_fond_propre[0].montant = (_this$meta_data$dossi17 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi17 === void 0 || (_this$meta_data$dossi17 = _this$meta_data$dossi17.cred_pub_tb_19503) === null || _this$meta_data$dossi17 === void 0 || (_this$meta_data$dossi17 = _this$meta_data$dossi17.conso_fond_propre_mode_auto[0]) === null || _this$meta_data$dossi17 === void 0 ? void 0 : _this$meta_data$dossi17.montant;
              }
              // conso_fond_propre_mode_auto
            }
          }
        }
        // this.loadConsoFondsPropres();
        return;
      }

      // this.formDataToBeWatched.comment_conso_fond_propre = data_f19003?.comment_conso_fond_propre

      var credit_folder_table = _objectSpread({}, this.meta_data["dossier_credit"][createdKey]);
      // console.log("credit_folder_table => ", credit_folder_table)
      this.f8Manager.setData(credit_folder_table);
      if (lentb.length > 0) {
        if (this.meta_data["dossier_credit"][createdKey] != undefined) {
          // this.formDataToBeWatched =
          //     this.meta_data["dossier_credit"][createdKey];

          for (var _i = 0, _formDataToBeWatchedP = formDataToBeWatchedProperty; _i < _formDataToBeWatchedP.length; _i++) {
            var property = _formDataToBeWatchedP[_i];
            this.formDataToBeWatched[property] = this.meta_data["dossier_credit"][createdKey][property];
          }

          // for (const property of formDataToBeWatchedProperty) {
          // this.formDataToBeWatched[property] = this.meta_data["dossier_credit"][createdKey][property]
          // }

          // if (
          //     this.meta_data["dossier_credit"][createdKey][
          //     "lignes_existantes"
          //     ] != ""
          // ) {
          //     this.lignes_existantes =
          //         this.meta_data["dossier_credit"][createdKey][
          //         "lignes_existantes"
          //         ];
          // }

          // if (
          //     this.meta_data["dossier_credit"][createdKey][
          //     "nouvelles_lignes"
          //     ] != ""
          // ) {
          //     this.nouvelles_lignes =
          //         this.meta_data["dossier_credit"][createdKey][
          //         "nouvelles_lignes"
          //         ];
          // }
          if (this.meta_data["dossier_credit"][createdKey]["situations_apres_accords"] != "") {
            this.situations_apres_accords = this.meta_data["dossier_credit"][createdKey]["situations_apres_accords"];
          }
          if (this.meta_data["dossier_credit"][createdKey]["conso_fond_propre"] != "") {
            this.conso_fond_propre = this.meta_data["dossier_credit"][createdKey]["conso_fond_propre"];
          }
        }
      }
      // Close table by default
      //  this.defaultRetract(
      //     false,
      //     this.meta_data["dossier_credit"]?.applied_templ_id
      // );
    },
    handleDoubleClickOrClick: function handleDoubleClickOrClick(event, index) {
      var _this4 = this;
      EventBus.$emit("open-extra-file-explorer");
      setTimeout(function () {
        var _this4$conso_fond_pro;
        EventBus.$emit("data-extra-file-explorer", {
          name: (_this4$conso_fond_pro = _this4.conso_fond_propre[index]) === null || _this4$conso_fond_pro === void 0 ? void 0 : _this4$conso_fond_pro.name
        });
      }, 500);
    },
    getFiles: function getFiles() {
      var _this5 = this;
      this.$axios.post(this.connectsHost + 'api/get-files', {
        file_identity: this.meta_data["dossier_credit"].cred_pub_key
      }).then(function (res) {
        var _res$data$data, _res$data$data2;
        res.data = JSON.parse(res.data);
        if (((_res$data$data = res.data.data) === null || _res$data$data === void 0 ? void 0 : _res$data$data.length) > 0 || ((_res$data$data2 = res.data.data) === null || _res$data$data2 === void 0 ? void 0 : _res$data$data2.length) != null) {
          _this5.files = res.data.data;
          console.log("this.files => ", _this5.files);
          _this5.conso_fond_propre.forEach(function (element, index) {
            var count = 0;
            _this5.files.forEach(function (file) {
              var _element$template;
              if ((file === null || file === void 0 ? void 0 : file.extra_file_template_id) != null && (element === null || element === void 0 || (_element$template = element.template) === null || _element$template === void 0 ? void 0 : _element$template.id) == (file === null || file === void 0 ? void 0 : file.extra_file_template_id)) {
                count++;
              }
            });
            _this5.conso_fond_propre[index]['files'] = count;
            _this5.handleInput();
          });
        }
      })["catch"](function (err) {
        console.error(err);
      });
    },
    setTbVal: function setTbVal(val) {
      this.cred_pub_key = val;
    },
    loadWithError: function loadWithError(err) {
      // // window.location.href = "/login";
    },
    send2Backend: function send2Backend(res, newVal, oldVal, key) {
      this.authcheck = true;
      this.authcheckUsr = res.data;
      this.authcheckStatus = res.status;
      var ky = key === 'F8' ? _objectSpread(_objectSpread({}, newVal), this.formDataToBeWatched) : _objectSpread(_objectSpread({}, newVal), this.f8Manager.data);
      if (this.authcheckStatus === 401) {
        // // window.location.href = "/login";
      }
      if (this.authcheck === true) {
        this.$emit("autosaving");
        this.$axios.post(this.ebapisHost + "creditbuilder/api/v1/autosaving/", {
          user: this.authcheckUsr,
          meta_parseable: this.meta_parseable,
          // filledData: this.formDataToBeWatched,
          filledData: this.dataToSave,
          // filledData: {...this.f8Manager.data, ...this.formDataToBeWatched},
          loadDossier: true
        }).then(function (response) {
          this.$emit("autosaving");
          // this.$Progress.finish();
          // console.log(response);
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
    autosaving: function autosaving(newVal, oldVal, k) {
      var _this6 = this;
      if (this.canLaunchAutosaving() === true) {
        _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["default"].loadUserData().then(function (res) {
          _this6.send2Backend(res, newVal, oldVal, k);
        })["catch"](function (err) {
          _this6.loadWithError(err);
        });
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
    retract3: function retract3() {
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
    deleteTB: function deleteTB() {
      if (confirm("Êtes-vous sûr de vouloir supprimer ce tableau ?")) {
        this.$emit("delete-tb", {
          tb_name: this.tb_name
        });
      }
    },
    loadDate: function loadDate() {
      var options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      };
      var today = new Date();
      this.dateOfToday = today.toLocaleDateString("fr-FR");
    },
    instruction4: function instruction4(id) {
      var id0 = "#" + id;
      window.$(id0).modal("show");
    },
    // SOMME DES MONTANTS
    somX3: function somX3(ob, key) {
      var som = 0;
      ob.filter(function (elm) {
        var result = String(elm[key]).replace(/\s+/g, "");
        if (result === "" || isNaN(result)) {
          som += 0;
        } else {
          som += parseInt(result);
        }
      });
      return som;
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
        id: "ca7-head"
      };
      // console.log(p)
      this.$emit("load-buffer", p);
    },
    onChange: function onChange(e) {
      if (e.target.value == "Non") {
        this.disp = true;
      } else {
        this.disp = false;
      }
    },
    handleInput: function handleInput(evt, index) {
      this.formDataToBeWatched["conso_fond_propre"] = this.conso_fond_propre;
    },
    instruction3: function instruction3(id) {
      var id0 = "#" + id;
      window.$(id0).modal("show");
    },
    isFirstOrLastOccurrence: function isFirstOrLastOccurrence(keyName, index) {
      var data = this.f8Manager.data[keyName];
      var ligne = data[index];

      // Ignore les lignes sans `ligne_mixe_id` en retournant `false` pour les bordures
      if (!ligne.ligne_mixe_id) {
        return {
          isFirst: false,
          isLast: false
        };
      }

      // Filtre pour trouver toutes les lignes avec le même `ligne_mixe_id`
      var sameGroup = data.filter(function (item) {
        return item.ligne_mixe_id === ligne.ligne_mixe_id;
      });

      // Récupère l'index dans le groupe
      var groupIndex = sameGroup.indexOf(ligne);
      return {
        isFirst: groupIndex === 0,
        isLast: groupIndex === sameGroup.length - 1,
        isMiddle: groupIndex > 0 && groupIndex < sameGroup.length - 1
      };
    },
    getMixteIndex: function getMixteIndex(keyName, currentIndex) {
      var data = this.f8Manager.data[keyName];

      // Vérification si 'data' existe bien avant d'y accéder
      if (!data || !Array.isArray(data)) {
        console.error("Donn\xE9es non disponibles pour la cl\xE9: ".concat(keyName));
        return 0; // Retourne une valeur par défaut ou gère l'erreur autrement
      }
      var currentLine = data[currentIndex];

      // Vérification de la ligne courante
      if (!currentLine) {
        console.error("Ligne non disponible pour l'index: ".concat(currentIndex));
        return 0; // Valeur par défaut en cas d'erreur
      }
      var uniqueGroups = new Set();

      // Boucle à travers les éléments jusqu'à currentIndex pour compter le nombre de groupes 'Mixte'
      for (var i = 0; i <= currentIndex; i++) {
        var item = data[i];
        if (item.ligne_mixte === 'Mixte') {
          uniqueGroups.add(item.ligne_mixe_id);
        }
      }
      return Array.from(uniqueGroups).indexOf(currentLine.ligne_mixe_id) + 1;
    }
  },
  watch: {
    "f8Manager.data": {
      handler: function handler(newVal, oldVal) {
        // console.log("newVal f8Manager => ", newVal)
        // console.log("f8Manager => ", this.f8Manager.data)

        // this.autosaving(newVal,oldVal,"F8");
        this.dataToSave = _objectSpread(_objectSpread({}, this.f8Manager.data), this.formDataToBeWatched);
        // console.warn('dataToSave f8 w', this.dataToSave)
        this.autosaving();
      },
      deep: true,
      immediate: false
    },
    formDataToBeWatched: {
      handler: function handler(newVal, oldVal) {
        // this.autosaving(newVal,oldVal,"CONSO_FP");
        // // console.log("formDataToBeWatched newVal => ", newVal)
        // console.log("formDataToBeWatched => ", this.formDataToBeWatched)
        this.dataToSave = _objectSpread(_objectSpread({}, this.f8Manager.data), this.formDataToBeWatched);
        // console.warn('dataToSave fd w', this.dataToSave)
        this.autosaving();
      },
      deep: true,
      immediate: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/groupe/rg/RG-CA7.vue?vue&type=template&id=28785530&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/groupe/rg/RG-CA7.vue?vue&type=template&id=28785530&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$formDataToBeWatch;
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
      id: "ca7-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Synthèse des lignes du client et des garanties \n                        ")]), _vm._v(" "), _c("div", {
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
    staticClass: "card-body"
  }, [_c("br"), _vm._v(" "), _c("div", {
    staticClass: "table-responsive mt-4"
  }, [_c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-borderless"
  }, [_c("thead", [_c("tr", {
    staticClass: "text-center",
    staticStyle: {
      "vertical-align": "center"
    }
  }, [_c("th", [_vm._v("Lignes")]), _vm._v(" "), _c("th", [_vm._v("Statut")]), _vm._v(" "), _c("th", [_vm._v("Montant")]), _vm._v(" "), _c("th", [_vm._v("Proposition (autorisation)")]), _vm._v(" "), _c("th", [_c("span", [_vm._v("Encours au")]), _vm._v(" "), _c("date-input", {
    staticStyle: {
      "min-width": "250px"
    },
    attrs: {
      value: _vm.f8Manager.data.encours_au,
      id: "encours_au",
      background: "background: #00ffff21",
      color: "color: #000"
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("th", [_vm._v("Durée (mois)")]), _vm._v(" "), _c("th", [_vm._v("Ech/Durée tirage")]), _vm._v(" "), _c("th", [_vm._v("Taux")]), _vm._v(" "), _c("th"), _vm._v(" "), _c("th", [_vm._v("Suretés")])])]), _vm._v(" "), _c("tbody", [_vm._l(_vm.f8Manager.data.nouvelles_lignes_caisse, function (nv_ligne_caisse, idx_) {
    return _c("tr", {
      key: idx_ + "nv_lg_1"
    }, [_c("td", [nv_ligne_caisse !== null && nv_ligne_caisse !== void 0 && nv_ligne_caisse.from ? [nv_ligne_caisse.ligne_mixte == "Mixte" ? _c("div", {
      staticClass: "d-flex"
    }, [nv_ligne_caisse.ligne_mixte == "Mixte" ? _c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: nv_ligne_caisse.ligne,
        expression: "nv_ligne_caisse.ligne"
      }],
      staticClass: "form-select",
      "class": {
        "already-exist": ["tb19003", "tb8"].includes(nv_ligne_caisse === null || nv_ligne_caisse === void 0 ? void 0 : nv_ligne_caisse.tb)
      },
      staticStyle: {
        "min-width": "250px"
      },
      attrs: {
        title: nv_ligne_caisse.ligne,
        disabled: ""
      },
      on: {
        change: function change($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(nv_ligne_caisse, "ligne", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }
      }
    }, [_c("option", {
      domProps: {
        value: nv_ligne_caisse.ligne
      }
    }, [_vm._v("\n                                                        " + _vm._s(nv_ligne_caisse.ligne_mixte) + " - " + _vm._s(_vm.getMixteIndex("nouvelles_lignes_caisse", idx_)) + "\n                                                    ")])]) : _vm._e(), _vm._v(" "), _c("div", {
      staticStyle: {
        "margin-left": "0.5rem!important"
      }
    }, [_c("input", {
      staticClass: "form-control",
      staticStyle: {
        width: "150px",
        border: "1px solid #ccc",
        "border-radius": "6px"
      },
      attrs: {
        type: "text",
        disabled: ""
      },
      domProps: {
        value: nv_ligne_caisse.ligne
      }
    })])]) : _c("div", [nv_ligne_caisse.ligne == "" ? _c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: nv_ligne_caisse.ligne,
        expression: "nv_ligne_caisse.ligne"
      }],
      staticClass: "form-select",
      "class": {
        "already-exist": ["tb19003", "tb8"].includes(nv_ligne_caisse === null || nv_ligne_caisse === void 0 ? void 0 : nv_ligne_caisse.tb)
      },
      staticStyle: {
        "min-width": "250px"
      },
      attrs: {
        disabled: !["", null, undefined].includes(nv_ligne_caisse.from)
      },
      on: {
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(nv_ligne_caisse, "ligne", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, function ($event) {
          null;
        }]
      }
    }, [_c("option", {
      domProps: {
        value: ""
      }
    }), _vm._v(" "), _vm._l(_vm.f8Constants.tous_les_lignes_filtres, function (line, indexL) {
      return _c("option", {
        key: indexL + "4z_1",
        domProps: {
          value: line.libelle
        }
      }, [_vm._v(_vm._s(line.libelle))]);
    })], 2) : _c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: nv_ligne_caisse.ligne,
        expression: "nv_ligne_caisse.ligne"
      }],
      staticClass: "form-select",
      "class": {
        "already-exist": ["tb19003", "tb8"].includes(nv_ligne_caisse === null || nv_ligne_caisse === void 0 ? void 0 : nv_ligne_caisse.tb)
      },
      staticStyle: {
        "min-width": "250px"
      },
      attrs: {
        disabled: !["", null, undefined].includes(nv_ligne_caisse.from)
      },
      on: {
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(nv_ligne_caisse, "ligne", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, function ($event) {
          null;
        }]
      }
    }, [_c("option", {
      domProps: {
        value: ""
      }
    }), _vm._v(" "), _vm._l(_vm.f8Constants.tous_les_lignes, function (line, indexL) {
      return _c("option", {
        key: indexL + "4z_1",
        domProps: {
          value: line.libelle
        }
      }, [_vm._v(_vm._s(line.libelle))]);
    })], 2)])] : [nv_ligne_caisse.ligne_mixte == "Mixte" ? _c("div", {
      staticClass: "d-flex"
    }, [_c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: nv_ligne_caisse.ligne_mixte,
        expression: "nv_ligne_caisse.ligne_mixte"
      }],
      staticClass: "form-select",
      "class": {
        "already-exist": ["tb19003", "tb8"].includes(nv_ligne_caisse === null || nv_ligne_caisse === void 0 ? void 0 : nv_ligne_caisse.tb)
      },
      staticStyle: {
        "min-width": "250px"
      },
      on: {
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(nv_ligne_caisse, "ligne_mixte", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, function ($event) {
          return _vm.f8Manager.addVarMixte(["nouvelles_lignes_caisse", idx_]);
        }]
      }
    }, [_c("option", {
      domProps: {
        value: ""
      }
    }), _vm._v(" "), _vm._l(_vm.f8Constants.tous_les_lignes_filtres, function (line, indexL) {
      return _c("option", {
        key: indexL + "4z_1",
        domProps: {
          value: line.libelle
        }
      }, [_vm._v(_vm._s(line.libelle))]);
    }), _vm._v(" "), _c("optgroup", {
      attrs: {
        label: "--------------------------------"
      }
    }), _vm._v(" "), _c("option", {
      attrs: {
        value: "Mixte"
      }
    }, [_vm._v("Mixte")])], 2), _vm._v(" "), _c("div", {
      staticStyle: {
        "margin-left": "0.5rem!important"
      }
    }, [_c("vue-tags-input", {
      "class": {
        "already-exist": ["tb19003", "tb8"].includes(nv_ligne_caisse === null || nv_ligne_caisse === void 0 ? void 0 : nv_ligne_caisse.tb)
      },
      staticStyle: {
        width: "250px",
        border: "1px solid #ccc",
        "border-radius": "6px"
      },
      attrs: {
        "autocomplete-items": _vm.f8Constants.ligneAutoComplete("tous_les_lignes_filtres"),
        tags: nv_ligne_caisse.tags,
        placeholder: "Selectionner les lignes"
      },
      on: {
        "tags-changed": function tagsChanged($event) {
          return _vm.f8Manager.handleTag($event, ["nouvelles_lignes_caisse", idx_], _vm.f8Constants.tous_les_lignes_filtres, null, null);
        },
        "adding-duplicate": function addingDuplicate() {}
      },
      model: {
        value: nv_ligne_caisse.tag,
        callback: function callback($$v) {
          _vm.$set(nv_ligne_caisse, "tag", $$v);
        },
        expression: "nv_ligne_caisse.tag"
      }
    })], 1)]) : _c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: nv_ligne_caisse.ligne,
        expression: "nv_ligne_caisse.ligne"
      }],
      staticClass: "form-select",
      "class": {
        "already-exist": ["tb19003", "tb8"].includes(nv_ligne_caisse === null || nv_ligne_caisse === void 0 ? void 0 : nv_ligne_caisse.tb)
      },
      staticStyle: {
        "min-width": "250px"
      },
      on: {
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(nv_ligne_caisse, "ligne", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, function ($event) {
          return _vm.f8Manager.addVarMixte(["nouvelles_lignes_caisse", idx_]);
        }]
      }
    }, [_c("option", {
      domProps: {
        value: ""
      }
    }), _vm._v(" "), _vm._l(_vm.f8Constants.tous_les_lignes_filtres, function (line, indexL) {
      return _c("option", {
        key: indexL + "4z_1",
        domProps: {
          value: line.libelle
        }
      }, [_vm._v(_vm._s(line.libelle))]);
    }), _vm._v(" "), _c("optgroup", {
      attrs: {
        label: "--------------------------------"
      }
    }), _vm._v(" "), _c("option", {
      attrs: {
        value: "Mixte"
      }
    }, [_vm._v("Mixte")])], 2)]], 2), _vm._v(" "), _c("td", [_c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: nv_ligne_caisse.statut,
        expression: "nv_ligne_caisse.statut"
      }],
      staticClass: "form-select",
      "class": {
        "already-exist": (nv_ligne_caisse === null || nv_ligne_caisse === void 0 ? void 0 : nv_ligne_caisse.from) || ["tb19003", "tb8"].includes(nv_ligne_caisse === null || nv_ligne_caisse === void 0 ? void 0 : nv_ligne_caisse.tb)
      },
      staticStyle: {
        "min-width": "250px"
      },
      attrs: {
        title: nv_ligne_caisse.statut
      },
      on: {
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(nv_ligne_caisse, "statut", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, function ($event) {
          return _vm.f8Manager.computedTypeStatus("lignes_existantes", nv_ligne_caisse, idx_, "nouvelles_lignes_caisse");
        }]
      }
    }, [nv_ligne_caisse !== null && nv_ligne_caisse !== void 0 && nv_ligne_caisse.from ? [_c("option", {
      domProps: {
        value: "Renouvellement"
      }
    }, [_vm._v("Renouvellement")]), _vm._v(" "), _c("option", {
      domProps: {
        value: "Abandon"
      }
    }, [_vm._v("Abandon")])] : [_c("option", {
      domProps: {
        value: "Nouveau"
      }
    }, [_vm._v("Nouveau")])]], 2)]), _vm._v(" "), _c("td", [_c("currency-input2", {
      "class": {
        "already-exist": (nv_ligne_caisse === null || nv_ligne_caisse === void 0 ? void 0 : nv_ligne_caisse.from) || ["tb19003", "tb8"].includes(nv_ligne_caisse === null || nv_ligne_caisse === void 0 ? void 0 : nv_ligne_caisse.tb)
      },
      staticStyle: {
        "min-width": "250px"
      },
      attrs: {
        disabled: !["", null, undefined].includes(nv_ligne_caisse.from),
        "default-typing": false
      },
      on: {
        change: function change($event) {
          return _vm.f8Manager.computedTypeStatus("lignes_existantes", nv_ligne_caisse, idx_, "nouvelles_lignes_caisse");
        }
      },
      model: {
        value: nv_ligne_caisse.montant,
        callback: function callback($$v) {
          _vm.$set(nv_ligne_caisse, "montant", $$v);
        },
        expression: "nv_ligne_caisse.montant"
      }
    })], 1), _vm._v(" "), _c("td", [_c("currency-input2", {
      "class": {
        "already-exist": (nv_ligne_caisse === null || nv_ligne_caisse === void 0 ? void 0 : nv_ligne_caisse.from) || ["tb19003", "tb8"].includes(nv_ligne_caisse === null || nv_ligne_caisse === void 0 ? void 0 : nv_ligne_caisse.tb)
      },
      staticStyle: {
        "min-width": "250px"
      },
      attrs: {
        "default-typing": false
      },
      on: {
        change: function change($event) {
          return _vm.f8Manager.computedTypeStatus("lignes_existantes", nv_ligne_caisse, idx_, "nouvelles_lignes_caisse");
        }
      },
      model: {
        value: nv_ligne_caisse.proposition,
        callback: function callback($$v) {
          _vm.$set(nv_ligne_caisse, "proposition", $$v);
        },
        expression: "nv_ligne_caisse.proposition"
      }
    })], 1), _vm._v(" "), _c("td", [_c("currency-input2", {
      "class": {
        "already-exist": (nv_ligne_caisse === null || nv_ligne_caisse === void 0 ? void 0 : nv_ligne_caisse.from) || ["tb19003", "tb8"].includes(nv_ligne_caisse === null || nv_ligne_caisse === void 0 ? void 0 : nv_ligne_caisse.tb)
      },
      staticStyle: {
        "min-width": "250px"
      },
      attrs: {
        "default-typing": false
      },
      on: {
        change: function change($event) {
          return _vm.f8Manager.computedTypeStatus("lignes_existantes", nv_ligne_caisse, idx_, "nouvelles_lignes_caisse");
        }
      },
      model: {
        value: nv_ligne_caisse.encours,
        callback: function callback($$v) {
          _vm.$set(nv_ligne_caisse, "encours", $$v);
        },
        expression: "nv_ligne_caisse.encours"
      }
    })], 1), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: nv_ligne_caisse.duree,
        expression: "nv_ligne_caisse.duree"
      }],
      staticClass: "form-control",
      "class": {
        "already-exist": (nv_ligne_caisse === null || nv_ligne_caisse === void 0 ? void 0 : nv_ligne_caisse.from) || ["tb19003", "tb8"].includes(nv_ligne_caisse === null || nv_ligne_caisse === void 0 ? void 0 : nv_ligne_caisse.tb)
      },
      staticStyle: {
        width: "80px"
      },
      attrs: {
        type: "number"
      },
      domProps: {
        value: nv_ligne_caisse.duree
      },
      on: {
        change: function change($event) {
          return _vm.f8Manager.computedTypeStatus("lignes_existantes", nv_ligne_caisse, idx_, "nouvelles_lignes_caisse");
        },
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(nv_ligne_caisse, "duree", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("div", {
      staticStyle: {
        width: "280px"
      }
    }, [_c("date-input", {
      attrs: {
        classname: nv_ligne_caisse !== null && nv_ligne_caisse !== void 0 && nv_ligne_caisse.from || ["tb19003", "tb8"].includes(nv_ligne_caisse === null || nv_ligne_caisse === void 0 ? void 0 : nv_ligne_caisse.tb) ? "already-exist" : "",
        value: nv_ligne_caisse.echeance
      },
      on: {
        input: function input($event) {
          return _vm.formDataVars2($event, idx_, "nouvelles_lignes_caisse", "echeance");
        }
      }
    })], 1)]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: nv_ligne_caisse.taux,
        expression: "nv_ligne_caisse.taux"
      }],
      staticClass: "form-control",
      "class": {
        "already-exist": (nv_ligne_caisse === null || nv_ligne_caisse === void 0 ? void 0 : nv_ligne_caisse.from) || ["tb19003", "tb8"].includes(nv_ligne_caisse === null || nv_ligne_caisse === void 0 ? void 0 : nv_ligne_caisse.tb)
      },
      staticStyle: {
        width: "60px"
      },
      attrs: {
        type: "number"
      },
      domProps: {
        value: nv_ligne_caisse.taux
      },
      on: {
        change: function change($event) {
          null;
        },
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(nv_ligne_caisse, "taux", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: nv_ligne_caisse.type,
        expression: "nv_ligne_caisse.type"
      }],
      staticClass: "form-control",
      "class": {
        "already-exist": (nv_ligne_caisse === null || nv_ligne_caisse === void 0 ? void 0 : nv_ligne_caisse.from) || ["tb19003", "tb8"].includes(nv_ligne_caisse === null || nv_ligne_caisse === void 0 ? void 0 : nv_ligne_caisse.tb)
      },
      staticStyle: {
        width: "60px"
      },
      attrs: {
        disabled: "",
        title: nv_ligne_caisse.type == "RI" ? "Renouvellement identique" : nv_ligne_caisse.type == "RH" ? "Renouvellement à la hausse" : nv_ligne_caisse.type == "RB" ? "Renouvellement à la baisse" : nv_ligne_caisse.type == "AB" ? "Abandon" : ""
      },
      domProps: {
        value: nv_ligne_caisse.type
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(nv_ligne_caisse, "type", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [nv_ligne_caisse.from ? _c("button", {
      staticStyle: {
        color: "#ffffff",
        "border-radius": "15%",
        border: "none"
      },
      style: _vm.f8Manager.lineHasSuretes(nv_ligne_caisse),
      attrs: {
        type: "button",
        title: "Chager les suretés de la ligne existante correspondante"
      },
      on: {
        click: function click($event) {
          return _vm.openModal("hypoModal", nv_ligne_caisse, true);
        }
      }
    }, [_c("i", {
      staticClass: "icofont-download",
      attrs: {
        size: "21"
      }
    })]) : _c("button", {
      staticStyle: {
        color: "#ffffff",
        "border-radius": "15%",
        border: "none"
      },
      style: _vm.f8Manager.lineHasSuretes(nv_ligne_caisse),
      attrs: {
        type: "button",
        title: "Ajouter des suretés à cette ligne"
      },
      on: {
        click: function click($event) {
          return _vm.openModal("hypoModal", nv_ligne_caisse);
        }
      }
    }, [_c("i", {
      staticClass: "icofont-list",
      attrs: {
        size: "21"
      }
    })])]), _vm._v(" "), _c("td", [_c("button", {
      staticStyle: {
        "background-color": "#2c3e50",
        "border-radius": "15%",
        color: "#ffffff",
        border: "none"
      },
      style: !["", null, undefined].includes(nv_ligne_caisse.from) ? {
        "background-color": "#e9ecef"
      } : "",
      attrs: {
        disabled: !["", null, undefined].includes(nv_ligne_caisse.from),
        type: "button",
        title: "Effacer le contenu de ligne"
      },
      on: {
        click: function click($event) {
          return _vm.f8Manager.cleanLine("nouvelles_lignes_caisse", nv_ligne_caisse.id);
        }
      }
    }, [_c("i", {
      staticClass: "icofont-dropbox"
    })])]), _vm._v(" "), _c("td", [idx_ === 0 ? [_c("button", {
      staticStyle: {
        "background-color": "#2c3e50",
        color: "#ffffff",
        "border-radius": "15%",
        border: "none"
      },
      attrs: {
        type: "button",
        title: "Ajouter un nouvel article"
      },
      on: {
        click: function click($event) {
          return _vm.f8Manager.addLine("nouvelles_lignes_caisse");
        }
      }
    }, [_c("plus-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1)] : [!nv_ligne_caisse.from ? _c("button", {
      staticStyle: {
        "background-color": "transparent",
        border: "none"
      },
      attrs: {
        type: "button",
        title: "Supprimer cette action"
      },
      on: {
        click: function click($event) {
          return _vm.f8Manager.removeLine("nouvelles_lignes_caisse", nv_ligne_caisse.id);
        }
      }
    }, [_c("trash-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1) : _vm._e()]], 2)]);
  }), _vm._v(" "), _c("tr", [_vm._m(0), _vm._v(" "), _c("td", [_c("currency-input2", {
    staticClass: "form-control",
    staticStyle: {
      "min-width": "250px"
    },
    attrs: {
      "default-typing": false,
      readonly: ""
    },
    model: {
      value: _vm.f8Manager.data.st_caisse_nouvelles_lignes_montant,
      callback: function callback($$v) {
        _vm.$set(_vm.f8Manager.data, "st_caisse_nouvelles_lignes_montant", $$v);
      },
      expression: "f8Manager.data.st_caisse_nouvelles_lignes_montant"
    }
  })], 1), _vm._v(" "), _c("td", [_c("currency-input2", {
    staticClass: "form-control",
    staticStyle: {
      "min-width": "250px"
    },
    attrs: {
      "default-typing": false,
      readonly: ""
    },
    model: {
      value: _vm.f8Manager.data.st_caisse_nouvelles_lignes_proposition,
      callback: function callback($$v) {
        _vm.$set(_vm.f8Manager.data, "st_caisse_nouvelles_lignes_proposition", $$v);
      },
      expression: "f8Manager.data.st_caisse_nouvelles_lignes_proposition"
    }
  })], 1)])], 2)])]), _vm._v(" "), _c("br"), _vm._v(" "), _c("b", [_vm._v("Engagement signature")]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-borderless"
  }, [_c("thead", [_c("tr", {
    staticClass: "text-center",
    staticStyle: {
      "vertical-align": "center"
    }
  }, [_c("th", [_vm._v("Lignes")]), _vm._v(" "), _c("th", [_vm._v("Statut")]), _vm._v(" "), _c("th", [_vm._v("Montant (demandé)")]), _vm._v(" "), _c("th", [_vm._v("Proposition (autorisation)")]), _vm._v(" "), _c("th", [_c("span", [_vm._v("Encours au")]), _vm._v(" "), _c("date-input", {
    staticStyle: {
      "min-width": "250px"
    },
    attrs: {
      value: _vm.f8Manager.data.encours_au,
      id: "encours_au",
      background: "background: #00ffff21",
      color: "color: #000"
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("th", [_vm._v("Durée (mois)")]), _vm._v(" "), _c("th", [_vm._v("Echeance")]), _vm._v(" "), _c("th", [_vm._v("Taux")]), _vm._v(" "), _c("th"), _vm._v(" "), _c("th", [_vm._v("Suretés")])])]), _vm._v(" "), _c("tbody", [_vm._l(_vm.f8Manager.data.nouvelles_lignes_signature, function (nv_ligne_sign, i) {
    return _c("tr", {
      key: i + "lg_ext"
    }, [_c("td", [nv_ligne_sign !== null && nv_ligne_sign !== void 0 && nv_ligne_sign.from ? [nv_ligne_sign.ligne_mixte == "Mixte" ? _c("div", {
      staticClass: "d-flex"
    }, [nv_ligne_sign.ligne_mixte == "Mixte" ? _c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: nv_ligne_sign.ligne,
        expression: "nv_ligne_sign.ligne"
      }],
      staticClass: "form-select",
      "class": {
        "already-exist": ["tb19003", "tb8"].includes(nv_ligne_sign === null || nv_ligne_sign === void 0 ? void 0 : nv_ligne_sign.tb)
      },
      staticStyle: {
        "min-width": "250px"
      },
      attrs: {
        title: nv_ligne_sign.ligne,
        disabled: ""
      },
      on: {
        change: function change($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(nv_ligne_sign, "ligne", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }
      }
    }, [_c("option", {
      domProps: {
        value: nv_ligne_sign.ligne
      }
    }, [_vm._v("\n                                                        " + _vm._s(nv_ligne_sign.ligne_mixte) + " - " + _vm._s(_vm.getMixteIndex("nouvelles_lignes_signature", i)) + "\n                                                    ")])]) : _vm._e(), _vm._v(" "), _c("div", {
      staticStyle: {
        "margin-left": "0.5rem !important"
      }
    }, [_c("input", {
      staticClass: "form-control",
      staticStyle: {
        width: "150px",
        border: "1px solid #ccc",
        "border-radius": "6px"
      },
      attrs: {
        type: "text",
        disabled: ""
      },
      domProps: {
        value: nv_ligne_sign.ligne
      }
    })])]) : _c("div", [nv_ligne_sign.ligne == "" ? _c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: nv_ligne_sign.ligne,
        expression: "nv_ligne_sign.ligne"
      }],
      staticClass: "form-select",
      "class": {
        "already-exist": ["tb19003", "tb8"].includes(nv_ligne_sign === null || nv_ligne_sign === void 0 ? void 0 : nv_ligne_sign.tb)
      },
      staticStyle: {
        "min-width": "250px"
      },
      attrs: {
        disabled: !["", null, undefined].includes(nv_ligne_sign.from)
      },
      on: {
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(nv_ligne_sign, "ligne", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, function ($event) {
          null;
        }]
      }
    }, [_c("option", {
      domProps: {
        value: ""
      }
    }), _vm._v(" "), _vm._l(_vm.f8Constants.lignes_engagements_signatures_filtres, function (line, indexL) {
      return _c("option", {
        key: indexL + "4z_1",
        domProps: {
          value: line.libelle
        }
      }, [_vm._v(_vm._s(line.libelle))]);
    })], 2) : _c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: nv_ligne_sign.ligne,
        expression: "nv_ligne_sign.ligne"
      }],
      staticClass: "form-select",
      "class": {
        "already-exist": ["tb19003", "tb8"].includes(nv_ligne_sign === null || nv_ligne_sign === void 0 ? void 0 : nv_ligne_sign.tb)
      },
      staticStyle: {
        "min-width": "250px"
      },
      attrs: {
        disabled: !["", null, undefined].includes(nv_ligne_sign.from)
      },
      on: {
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(nv_ligne_sign, "ligne", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, function ($event) {
          null;
        }]
      }
    }, [_c("option", {
      domProps: {
        value: ""
      }
    }), _vm._v(" "), _vm._l(_vm.f8Constants.lignes_engagements_signatures, function (line, indexL) {
      return _c("option", {
        key: indexL + "4z_1",
        domProps: {
          value: line.libelle
        }
      }, [_vm._v(_vm._s(line.libelle))]);
    })], 2)])] : [nv_ligne_sign.ligne_mixte == "Mixte" ? _c("div", {
      staticClass: "d-flex"
    }, [_c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: nv_ligne_sign.ligne_mixte,
        expression: "nv_ligne_sign.ligne_mixte"
      }],
      staticClass: "form-select",
      "class": {
        "already-exist": ["tb19003", "tb8"].includes(nv_ligne_sign === null || nv_ligne_sign === void 0 ? void 0 : nv_ligne_sign.tb)
      },
      staticStyle: {
        "min-width": "250px"
      },
      on: {
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(nv_ligne_sign, "ligne_mixte", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, function ($event) {
          return _vm.f8Manager.addVarMixte(["nouvelles_lignes_signature", i]);
        }]
      }
    }, [_c("option", {
      domProps: {
        value: ""
      }
    }), _vm._v(" "), _vm._l(_vm.f8Constants.lignes_engagements_signatures, function (line, indexL) {
      return _c("option", {
        key: indexL + "4z_1",
        domProps: {
          value: line.libelle
        }
      }, [_vm._v(_vm._s(line.libelle))]);
    }), _vm._v(" "), _c("optgroup", {
      attrs: {
        label: "--------------------------------"
      }
    }), _vm._v(" "), _c("option", {
      attrs: {
        value: "Mixte"
      }
    }, [_vm._v("Mixte")])], 2), _vm._v(" "), _c("div", {
      staticStyle: {
        "margin-left": "0.5rem!important"
      }
    }, [_c("vue-tags-input", {
      "class": {
        "already-exist": ["tb19003", "tb8"].includes(nv_ligne_sign === null || nv_ligne_sign === void 0 ? void 0 : nv_ligne_sign.tb)
      },
      staticStyle: {
        width: "250px",
        border: "1px solid #ccc",
        "border-radius": "6px"
      },
      attrs: {
        "autocomplete-items": _vm.f8Constants.ligneAutoComplete("lignes_engagements_signatures"),
        tags: nv_ligne_sign.tags,
        placeholder: "Selectionner les lignes"
      },
      on: {
        "tags-changed": function tagsChanged($event) {
          return _vm.f8Manager.handleTag($event, ["nouvelles_lignes_signature", i], _vm.f8Constants.lignes_engagements_signatures, null, null);
        },
        "adding-duplicate": function addingDuplicate() {}
      },
      model: {
        value: nv_ligne_sign.tag,
        callback: function callback($$v) {
          _vm.$set(nv_ligne_sign, "tag", $$v);
        },
        expression: "nv_ligne_sign.tag"
      }
    })], 1)]) : _c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: nv_ligne_sign.ligne,
        expression: "nv_ligne_sign.ligne"
      }],
      staticClass: "form-select",
      "class": {
        "already-exist": ["tb19003", "tb8"].includes(nv_ligne_sign === null || nv_ligne_sign === void 0 ? void 0 : nv_ligne_sign.tb)
      },
      staticStyle: {
        "min-width": "250px"
      },
      on: {
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(nv_ligne_sign, "ligne", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, function ($event) {
          return _vm.f8Manager.addVarMixte(["nouvelles_lignes_signature", i]);
        }]
      }
    }, [_c("option", {
      domProps: {
        value: ""
      }
    }), _vm._v(" "), _vm._l(_vm.f8Constants.tous_les_lignes_filtres, function (line, indexL) {
      return _c("option", {
        key: indexL + "4z_1",
        domProps: {
          value: line.libelle
        }
      }, [_vm._v(_vm._s(line.libelle))]);
    }), _vm._v(" "), _c("optgroup", {
      attrs: {
        label: "--------------------------------"
      }
    }), _vm._v(" "), _c("option", {
      attrs: {
        value: "Mixte"
      }
    }, [_vm._v("Mixte")])], 2)]], 2), _vm._v(" "), _c("td", [_c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: nv_ligne_sign.statut,
        expression: "nv_ligne_sign.statut"
      }],
      staticClass: "form-select",
      "class": {
        "already-exist": nv_ligne_sign.from || ["tb19003", "tb8"].includes(nv_ligne_sign === null || nv_ligne_sign === void 0 ? void 0 : nv_ligne_sign.tb)
      },
      staticStyle: {
        "min-width": "250px"
      },
      attrs: {
        title: nv_ligne_sign.statut
      },
      on: {
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(nv_ligne_sign, "statut", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, function ($event) {
          return _vm.f8Manager.computedTypeStatus("lignes_existantes_engagements_signatures", nv_ligne_sign, i, "nouvelles_lignes_signature");
        }]
      }
    }, [nv_ligne_sign !== null && nv_ligne_sign !== void 0 && nv_ligne_sign.from ? [_c("option", {
      domProps: {
        value: "Renouvellement"
      }
    }, [_vm._v("Renouvellement")]), _vm._v(" "), _c("option", {
      domProps: {
        value: "Abandon"
      }
    }, [_vm._v("Abandon")])] : [_c("option", {
      domProps: {
        value: "Nouveau"
      }
    }, [_vm._v("Nouveau")])]], 2)]), _vm._v(" "), _c("td", [_c("currency-input2", {
      "class": {
        "already-exist": ["tb19003", "tb8"].includes(nv_ligne_sign === null || nv_ligne_sign === void 0 ? void 0 : nv_ligne_sign.tb)
      },
      staticStyle: {
        "min-width": "250px"
      },
      attrs: {
        disabled: !["", null, undefined].includes(nv_ligne_sign.from),
        "default-typing": false
      },
      on: {
        change: function change($event) {
          return _vm.f8Manager.computedTypeStatus("lignes_existantes_engagements_signatures", nv_ligne_sign, i, "nouvelles_lignes_signature");
        }
      },
      model: {
        value: nv_ligne_sign.montant,
        callback: function callback($$v) {
          _vm.$set(nv_ligne_sign, "montant", $$v);
        },
        expression: "nv_ligne_sign.montant"
      }
    })], 1), _vm._v(" "), _c("td", [_c("currency-input2", {
      "class": {
        "already-exist": nv_ligne_sign.from || ["tb19003", "tb8"].includes(nv_ligne_sign === null || nv_ligne_sign === void 0 ? void 0 : nv_ligne_sign.tb)
      },
      staticStyle: {
        "min-width": "250px"
      },
      attrs: {
        "default-typing": false
      },
      on: {
        change: function change($event) {
          return _vm.f8Manager.computedTypeStatus("lignes_existantes_engagements_signatures", nv_ligne_sign, i, "nouvelles_lignes_signature");
        }
      },
      model: {
        value: nv_ligne_sign.proposition,
        callback: function callback($$v) {
          _vm.$set(nv_ligne_sign, "proposition", $$v);
        },
        expression: "nv_ligne_sign.proposition"
      }
    })], 1), _vm._v(" "), _c("td", [_c("currency-input2", {
      "class": {
        "already-exist": nv_ligne_sign.from || ["tb19003", "tb8"].includes(nv_ligne_sign === null || nv_ligne_sign === void 0 ? void 0 : nv_ligne_sign.tb)
      },
      staticStyle: {
        "min-width": "250px"
      },
      attrs: {
        "default-typing": false
      },
      on: {
        change: function change($event) {
          null;
        }
      },
      model: {
        value: nv_ligne_sign.encours,
        callback: function callback($$v) {
          _vm.$set(nv_ligne_sign, "encours", $$v);
        },
        expression: "nv_ligne_sign.encours"
      }
    })], 1), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: nv_ligne_sign.duree,
        expression: "nv_ligne_sign.duree"
      }],
      staticClass: "form-control",
      "class": {
        "already-exist": nv_ligne_sign.from || ["tb19003", "tb8"].includes(nv_ligne_sign === null || nv_ligne_sign === void 0 ? void 0 : nv_ligne_sign.tb)
      },
      staticStyle: {
        width: "80px"
      },
      attrs: {
        type: "number"
      },
      domProps: {
        value: nv_ligne_sign.duree
      },
      on: {
        change: function change($event) {
          null;
        },
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(nv_ligne_sign, "duree", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("div", {
      staticStyle: {
        width: "280px"
      }
    }, [_c("date-input", {
      attrs: {
        classname: nv_ligne_sign.from || ["tb19003", "tb8"].includes(nv_ligne_sign === null || nv_ligne_sign === void 0 ? void 0 : nv_ligne_sign.tb) ? "already-exist" : "",
        value: nv_ligne_sign.echeance
      },
      on: {
        input: function input($event) {
          return _vm.formDataVars2($event, i, "nouvelles_lignes_signature", "echeance");
        }
      }
    })], 1)]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: nv_ligne_sign.taux,
        expression: "nv_ligne_sign.taux"
      }],
      staticClass: "form-control",
      "class": {
        "already-exist": nv_ligne_sign.from || ["tb19003", "tb8"].includes(nv_ligne_sign === null || nv_ligne_sign === void 0 ? void 0 : nv_ligne_sign.tb)
      },
      staticStyle: {
        width: "60px"
      },
      attrs: {
        type: "number"
      },
      domProps: {
        value: nv_ligne_sign.taux
      },
      on: {
        change: function change($event) {
          null;
        },
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(nv_ligne_sign, "taux", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: nv_ligne_sign.type,
        expression: "nv_ligne_sign.type"
      }],
      staticClass: "form-control",
      "class": {
        "already-exist": nv_ligne_sign.from || ["tb19003", "tb8"].includes(nv_ligne_sign === null || nv_ligne_sign === void 0 ? void 0 : nv_ligne_sign.tb)
      },
      staticStyle: {
        width: "60px"
      },
      attrs: {
        disabled: "",
        title: nv_ligne_sign.type == "RI" ? "Renouvellement identique" : nv_ligne_sign.type == "RH" ? "Renouvellement à la hausse" : nv_ligne_sign.type == "RB" ? "Renouvellement à la baisse" : nv_ligne_sign.type == "AB" ? "Abandon" : ""
      },
      domProps: {
        value: nv_ligne_sign.type
      },
      on: {
        change: function change($event) {
          null;
        },
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(nv_ligne_sign, "type", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [nv_ligne_sign.from ? _c("button", {
      staticStyle: {
        color: "#ffffff",
        "border-radius": "15%",
        border: "none"
      },
      style: nv_ligne_sign.type == "AB" ? {
        "background-color": "#e9ecef",
        color: "#000",
        border: "#000"
      } : _vm.f8Manager.lineHasSuretes(nv_ligne_sign),
      attrs: {
        disabled: (nv_ligne_sign === null || nv_ligne_sign === void 0 ? void 0 : nv_ligne_sign.type) == "AB",
        type: "button",
        title: "Chager les suretés de la ligne existante correspondante"
      },
      on: {
        click: function click($event) {
          return _vm.openModal("hypoModal", nv_ligne_sign, true);
        }
      }
    }, [_c("i", {
      staticClass: "icofont-download",
      attrs: {
        size: "21"
      }
    })]) : _c("button", {
      staticStyle: {
        color: "#ffffff",
        "border-radius": "15%",
        border: "none"
      },
      style: _vm.f8Manager.lineHasSuretes(nv_ligne_sign),
      attrs: {
        type: "button",
        title: "Ajouter des suretés à cette ligne"
      },
      on: {
        click: function click($event) {
          return _vm.openModal("hypoModal", nv_ligne_sign);
        }
      }
    }, [_c("i", {
      staticClass: "icofont-list",
      attrs: {
        size: "21"
      }
    })])]), _vm._v(" "), _c("td", [_c("button", {
      staticStyle: {
        "background-color": "#2c3e50",
        "border-radius": "15%",
        color: "#ffffff",
        border: "none"
      },
      style: !["", null, undefined].includes(nv_ligne_sign.from) ? {
        "background-color": "#e9ecef"
      } : "",
      attrs: {
        disabled: !["", null, undefined].includes(nv_ligne_sign.from),
        type: "button",
        title: "Effacer le contenu de ligne"
      },
      on: {
        click: function click($event) {
          return _vm.f8Manager.cleanLine("nouvelles_lignes_signature", nv_ligne_sign.id);
        }
      }
    }, [_c("i", {
      staticClass: "icofont-dropbox"
    })])]), _vm._v(" "), _c("td", [i == 0 ? [_c("button", {
      staticStyle: {
        "background-color": "#2c3e50",
        color: "#ffffff",
        "border-radius": "15%",
        border: "none"
      },
      attrs: {
        type: "button",
        title: "Ajouter une nouvelle ligne"
      },
      on: {
        click: function click($event) {
          return _vm.f8Manager.addLine("nouvelles_lignes_signature");
        }
      }
    }, [_c("plus-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1)] : [!nv_ligne_sign.from ? _c("button", {
      staticStyle: {
        "background-color": "transparent",
        border: "none"
      },
      attrs: {
        type: "button",
        title: "Supprimer cette action"
      },
      on: {
        click: function click($event) {
          return _vm.f8Manager.removeLine("nouvelles_lignes_signature", nv_ligne_sign.id);
        }
      }
    }, [_c("trash-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1) : _vm._e()]], 2)]);
  }), _vm._v(" "), _c("tr", [_vm._m(1), _vm._v(" "), _c("td", [_c("currency-input2", {
    staticClass: "form-control",
    staticStyle: {
      "min-width": "250px"
    },
    attrs: {
      "default-typing": false,
      readonly: ""
    },
    model: {
      value: _vm.f8Manager.data.st_signature_nouvelles_lignes_montant,
      callback: function callback($$v) {
        _vm.$set(_vm.f8Manager.data, "st_signature_nouvelles_lignes_montant", $$v);
      },
      expression: "f8Manager.data.st_signature_nouvelles_lignes_montant"
    }
  })], 1), _vm._v(" "), _c("td", [_c("currency-input2", {
    staticClass: "form-control",
    staticStyle: {
      "min-width": "250px"
    },
    attrs: {
      "default-typing": false,
      readonly: ""
    },
    model: {
      value: _vm.f8Manager.data.st_signature_nouvelles_lignes_proposition,
      callback: function callback($$v) {
        _vm.$set(_vm.f8Manager.data, "st_signature_nouvelles_lignes_proposition", $$v);
      },
      expression: "f8Manager.data.st_signature_nouvelles_lignes_proposition"
    }
  })], 1)]), _vm._v(" "), _c("tr", [_vm._m(2), _vm._v(" "), _c("td", [_c("currency-input2", {
    staticClass: "form-control",
    staticStyle: {
      background: "#34495e",
      color: "#fff",
      "min-width": "250px"
    },
    attrs: {
      "default-typing": false,
      readonly: ""
    },
    model: {
      value: _vm.f8Manager.data.total_nouvelles_lignes_montant,
      callback: function callback($$v) {
        _vm.$set(_vm.f8Manager.data, "total_nouvelles_lignes_montant", $$v);
      },
      expression: "f8Manager.data.total_nouvelles_lignes_montant"
    }
  })], 1), _vm._v(" "), _c("td", [_c("currency-input2", {
    staticClass: "form-control",
    staticStyle: {
      background: "#34495e",
      color: "#fff",
      "min-width": "250px"
    },
    attrs: {
      "default-typing": false,
      readonly: ""
    },
    model: {
      value: _vm.f8Manager.data.total_nouvelles_lignes_proposition,
      callback: function callback($$v) {
        _vm.$set(_vm.f8Manager.data, "total_nouvelles_lignes_proposition", $$v);
      },
      expression: "f8Manager.data.total_nouvelles_lignes_proposition"
    }
  })], 1)])], 2)])])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("vue-editor", {
    attrs: {
      id: "commentaire_nouvelles_lignes"
    },
    on: {
      "update-value": function updateValue($event) {
        _vm.f8Manager.data[$event[0]] = $event[1];
      }
    },
    model: {
      value: _vm.f8Manager.data.commentaire_nouvelles_lignes,
      callback: function callback($$v) {
        _vm.$set(_vm.f8Manager.data, "commentaire_nouvelles_lignes", $$v);
      },
      expression: "f8Manager.data.commentaire_nouvelles_lignes"
    }
  })], 1)]), _vm._v(" "), (_vm.seen6 = _vm.seen6) ? _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen6 = !_vm.seen6;
      }
    }
  }, [_c("h6", {
    "class": " subdiv" + this.tb_name,
    attrs: {
      id: "situation-après-accord"
    }
  }, [_vm._v("\n                        Consommation en Fond Propres du montant sollicité\n                        "), _c("chevron-up-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)]), _vm._v(" "), _c("br"), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", [_c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered mb-1"
  }, [_c("tbody", _vm._l(_vm.conso_fond_propre, function (conso_fp, index) {
    return _c("tr", {
      key: index
    }, [_c("td", [_c("label", [_c("b", [_vm._v(_vm._s(conso_fp.name))]), _c("span", {
      staticClass: "text-danger"
    }, [_vm._v("*")])])]), _vm._v(" "), _c("td", [_c("currency-input", {
      staticClass: "form-control equipe",
      staticStyle: {
        width: "150px"
      },
      attrs: {
        "default-typing": false,
        type: "text"
      },
      on: {
        change: _vm.handleInput
      },
      model: {
        value: conso_fp.montant,
        callback: function callback($$v) {
          _vm.$set(conso_fp, "montant", $$v);
        },
        expression: "conso_fp.montant\n                                        "
      }
    })], 1), _vm._v(" "), _c("td", [Number(String(conso_fp.montant).replace(/\s+/g, "")) > 0 ? _c("div", {
      staticClass: "d-flex align-items-center"
    }, [_c("div", [conso_fp.files > 0 ? _c("span", {
      staticClass: "p-1 px-2 mx-2 text-nowrap",
      staticStyle: {
        "background-color": "rgb(44, 62, 80)",
        color: "white",
        "font-size": "13px",
        "border-radius": "5px",
        "margin-left": "0!important"
      }
    }, [_vm._v(_vm._s(conso_fp.files > 0 ? conso_fp.files + " fichier(s) uploadé(s)" : ""))]) : _vm._e()]), _vm._v(" "), conso_fp.name.trim() != "" ? _c("div", [_c("button", {
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
          return _vm.handleDoubleClickOrClick($event, index);
        }
      }
    }, [_c("i", {
      staticClass: "icofont-attachment"
    })])]) : _vm._e()]) : _vm._e()])]);
  }), 0)])]), _vm._v(" "), _c("br"), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 mt-3 mb-3"
  }, [_vm._m(3), _vm._v(" "), _c("vue-editor", {
    attrs: {
      id: "comment_conso_fond_propre"
    },
    on: {
      "update-value": function updateValue($event) {
        _vm.formDataToBeWatched[$event[0]] = $event[1];
      }
    },
    model: {
      value: _vm.formDataToBeWatched.comment_conso_fond_propre,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "comment_conso_fond_propre", $$v);
      },
      expression: "formDataToBeWatched.comment_conso_fond_propre\n                        "
    }
  })], 1), _vm._v(" "), _c("br")])])]) : _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header mb-5",
    on: {
      click: function click($event) {
        _vm.seen6 = !_vm.seen6;
      }
    }
  }, [_c("h6", {
    attrs: {
      id: "situation-après-accord"
    }
  }, [_vm._v("\n                        Consommation en Fond Propres du montant sollicité\n                        "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
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
  }, [_vm._v("\n                    Fermer le tableau\n                ")])]) : _c("div", {
    staticClass: "card card-width-height"
  }, [_c("br"), _vm._v(" "), _c("div", {
    staticClass: "card-header hdc pb-0 pt-2"
  }, [_c("h3", {
    staticClass: "head",
    attrs: {
      id: "ca7-head"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.tb_display_name) + " : Synthèse des lignes du client et des garanties\n                    "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
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
  })], 1)])])], 1), _vm._v(" "), _c("div", {
    staticStyle: {
      position: "relative",
      "z-index": "999999999"
    }
  }, [_c("div", {
    staticClass: "modal fade modal-lg",
    attrs: {
      id: "instruction6",
      tabindex: "-1",
      "aria-labelledby": "instruction6",
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
      id: "instruction6"
    }
  }, [_vm._v("\n                            Instruction - " + _vm._s(_vm.tb_display_name) + " : Centrales\n                            risques - Adhésion au BIC(si applicable)\n                        ")]), _vm._v(" "), _c("button", {
    staticClass: "btn-close",
    attrs: {
      type: "button",
      "data-bs-dismiss": "modal",
      "aria-label": "Close"
    }
  })]), _vm._v(" "), _vm._m(4), _vm._v(" "), _vm._m(5)])])])]), _vm._v(" "), _c("note-modal", {
    attrs: {
      name: _vm.tb_name,
      listingNote: _vm.listingNote,
      notes: _vm.f8Manager.data.notes
    },
    on: {
      close: function close($event) {
        return _vm.$modal.hide(_vm.tb_name);
      },
      addNote: function addNote($event) {
        var _vm$f8Manager$data$no;
        (_vm$f8Manager$data$no = _vm.f8Manager.data.notes) === null || _vm$f8Manager$data$no === void 0 || _vm$f8Manager$data$no.unshift($event);
      }
    },
    model: {
      value: _vm.f8Manager.data.notes,
      callback: function callback($$v) {
        _vm.$set(_vm.f8Manager.data, "notes", $$v);
      },
      expression: "f8Manager.data.notes"
    }
  })], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "text-start",
    attrs: {
      colspan: "3"
    }
  }, [_c("label", [_c("b", [_vm._v("S/Total par caisse")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "text-start",
    attrs: {
      colspan: "3"
    }
  }, [_c("label", [_c("b", [_vm._v("S/Total par signature")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "text-start",
    attrs: {
      colspan: "3"
    }
  }, [_c("label", [_c("b", [_vm._v("Total")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_c("b", [_vm._v(" Commentaires")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "modal-body"
  }, [_c("img", {
    attrs: {
      src: "/images/capture_afg/centrale_risques_adhesion_au_bic.png",
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
  }, [_vm._v("\n                            Fermer\n                        ")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/groupe/rg/RG-CA7.vue?vue&type=style&index=0&id=28785530&lang=css&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/groupe/rg/RG-CA7.vue?vue&type=style&index=0&id=28785530&lang=css&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\ninput[data-v-28785530] {\r\n    /*border: 1px solid red;*/\n}\n*[data-v-28785530] {\r\n    font-family: \"Google sans\";\n}\nth[data-v-28785530] {\r\n    font-size: 12px;\n}\nlabel[data-v-28785530] {\r\n    height: 10px;\r\n    font-size: 13px;\n}\ninput[data-v-28785530],\r\nselect[data-v-28785530] {\r\n    height: 35px;\r\n    border-color: #34495e;\r\n    color: #57606f;\r\n    font-size: 13px;\r\n    font-weight: bold;\n}\r\n\r\n/* select{\r\n    width: 150px;\r\n} */\r\n\r\n/* textarea,\r\ninput[type=\"text\"],\r\ninput[type=\"date\"] {\r\n    width: 250px;\r\n} */\n.card-width-height[data-v-28785530] {\r\n    width: 100%;\r\n    height: 100%;\n}\n.head[data-v-28785530] {\r\n    color: #f1f2f6;\r\n    font-size: 22px;\n}\n.hdc[data-v-28785530] {\r\n    background-color: #57606f;\n}\r\n\r\n/* Ajouter note */\n.badge-sm[data-v-28785530] {\r\n    display: inline-block;\r\n    width: 15px;\r\n    height: 15px;\r\n    background: rgba(255, 0, 0, 0.882);\r\n    color: white;\r\n    font-size: 12px;\r\n    font-weight: 500;\r\n    border-radius: 100%;\r\n    position: absolute;\r\n    top: -20%;\r\n    left: 55%;\r\n    text-align: center;\n}\n.equipe[data-v-28785530]{\r\n    background: #00ffff21; \r\n    color: #000;\n}\n.relook-header[data-v-28785530] {\r\n    color: #000;\r\n    background-color: #f4f3f3;\r\n    padding: 5px;\r\n    border-bottom: 1px solid #b6b8bb;\n}\n.bg-relooker[data-v-28785530] {\r\n    background-color: #2c3e50;\r\n    color: white;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/groupe/rg/RG-CA7.vue?vue&type=style&index=0&id=28785530&lang=css&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/groupe/rg/RG-CA7.vue?vue&type=style&index=0&id=28785530&lang=css&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RG_CA7_vue_vue_type_style_index_0_id_28785530_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RG-CA7.vue?vue&type=style&index=0&id=28785530&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/groupe/rg/RG-CA7.vue?vue&type=style&index=0&id=28785530&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RG_CA7_vue_vue_type_style_index_0_id_28785530_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RG_CA7_vue_vue_type_style_index_0_id_28785530_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/contreanalyse/nsia/groupe/rg/RG-CA7.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/nsia/groupe/rg/RG-CA7.vue ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RG_CA7_vue_vue_type_template_id_28785530_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RG-CA7.vue?vue&type=template&id=28785530&scoped=true */ "./resources/js/components/contreanalyse/nsia/groupe/rg/RG-CA7.vue?vue&type=template&id=28785530&scoped=true");
/* harmony import */ var _RG_CA7_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RG-CA7.vue?vue&type=script&lang=js */ "./resources/js/components/contreanalyse/nsia/groupe/rg/RG-CA7.vue?vue&type=script&lang=js");
/* harmony import */ var _RG_CA7_vue_vue_type_style_index_0_id_28785530_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RG-CA7.vue?vue&type=style&index=0&id=28785530&lang=css&scoped=true */ "./resources/js/components/contreanalyse/nsia/groupe/rg/RG-CA7.vue?vue&type=style&index=0&id=28785530&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _RG_CA7_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _RG_CA7_vue_vue_type_template_id_28785530_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _RG_CA7_vue_vue_type_template_id_28785530_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "28785530",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/contreanalyse/nsia/groupe/rg/RG-CA7.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/contreanalyse/nsia/groupe/rg/RG-CA7.vue?vue&type=script&lang=js":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/nsia/groupe/rg/RG-CA7.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RG_CA7_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RG-CA7.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/groupe/rg/RG-CA7.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RG_CA7_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/contreanalyse/nsia/groupe/rg/RG-CA7.vue?vue&type=style&index=0&id=28785530&lang=css&scoped=true":
/*!*********************************************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/nsia/groupe/rg/RG-CA7.vue?vue&type=style&index=0&id=28785530&lang=css&scoped=true ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RG_CA7_vue_vue_type_style_index_0_id_28785530_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RG-CA7.vue?vue&type=style&index=0&id=28785530&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/groupe/rg/RG-CA7.vue?vue&type=style&index=0&id=28785530&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/contreanalyse/nsia/groupe/rg/RG-CA7.vue?vue&type=template&id=28785530&scoped=true":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/nsia/groupe/rg/RG-CA7.vue?vue&type=template&id=28785530&scoped=true ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RG_CA7_vue_vue_type_template_id_28785530_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RG_CA7_vue_vue_type_template_id_28785530_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RG_CA7_vue_vue_type_template_id_28785530_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RG-CA7.vue?vue&type=template&id=28785530&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/groupe/rg/RG-CA7.vue?vue&type=template&id=28785530&scoped=true");


/***/ })

}]);