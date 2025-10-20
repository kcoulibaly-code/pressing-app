"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_modals_UrgentissimoUploadModal_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modals/UrgentissimoUploadModal.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modals/UrgentissimoUploadModal.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_urgentissimo_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/urgentissimo.service */ "./resources/js/services/urgentissimo.service.js");
/* harmony import */ var _services_credit_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/credit.service */ "./resources/js/services/credit.service.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./resources/js/services/auth.service.js");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _services_connects_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/connects.service */ "./resources/js/services/connects.service.js");
/* harmony import */ var _services_proxy_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/proxy.service */ "./resources/js/services/proxy.service.js");
/* harmony import */ var read_excel_file__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! read-excel-file */ "./node_modules/read-excel-file/modules/read/readXlsxFileBrowser.js");
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _reportex_statistics_StatTable_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reportex/statistics/StatTable.vue */ "./resources/js/components/reportex/statistics/StatTable.vue");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), c(GeneratorFunctionPrototype, u, GeneratorFunction.displayName = "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }









/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "UrgentissimoUploadModal",
  components: {
    CheckCircleIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.CheckCircleIcon,
    StatTable: _reportex_statistics_StatTable_vue__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  props: {
    dossier_credit: {
      type: [Object],
      required: true,
      "default": function _default() {
        return {};
      }
    },
    currentUser: {
      type: [Object],
      required: true
    }
  },
  data: function data() {
    return {
      isLoading: false,
      extensions: ["xlsx", "xls"],
      fileToUpload: null,
      isDragging: false,
      isLoadingInputUpload: {},
      isLoadingInput: false,
      connectsHost: _services_connects_service__WEBPACK_IMPORTED_MODULE_4__["default"].loadablehost(),
      canClose: true,
      currentTab: 'tab_urgentissimo',
      dossierCredit: null,
      ebapisHost: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_3__["default"].host,
      errorMessage: null,
      errorHint: null,
      loadingMessage: "Chargement URGENTISSIMO",
      loadingHint: null,
      selectedEcheanceNumber: null,
      showFileInputForm: false,
      state: {},
      tamor_data: null,
      showSuccesBlock: false,
      isclickToClose: true,
      headerUrgenTable: ['Date mise en place', 'Nom', 'Matricule', 'Nature de credit', 'Notation', 'Score Global', 'Quotité Max', 'Montant Urg.', 'Ratio Echéance'],
      contentUrgenTable: []
    };
  },
  mounted: function mounted() {
    var _this = this;
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _this.initApp();
          case 1:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  computed: {
    cred_pub_key: function cred_pub_key() {
      var _this$dossierCredit;
      return (_this$dossierCredit = this.dossierCredit) === null || _this$dossierCredit === void 0 ? void 0 : _this$dossierCredit.cred_pub_key;
    },
    isAnEcheanceSelected: function isAnEcheanceSelected() {
      return this.isRemindersListVisible;
    },
    isRemindersListVisible: function isRemindersListVisible() {
      return this.selectedEcheanceNumber != null;
    },
    isTamorDataValid: function isTamorDataValid() {
      var _this$tamor, _this$tamor$tamor_dat, _this$tamor2;
      return !!((_this$tamor = this.tamor) !== null && _this$tamor !== void 0 && _this$tamor.file_url) && ((_this$tamor$tamor_dat = (_this$tamor2 = this.tamor) === null || _this$tamor2 === void 0 || (_this$tamor2 = _this$tamor2.tamor_data) === null || _this$tamor2 === void 0 || (_this$tamor2 = _this$tamor2.headers) === null || _this$tamor2 === void 0 ? void 0 : _this$tamor2.length) !== null && _this$tamor$tamor_dat !== void 0 ? _this$tamor$tamor_dat : 0) > 0;
    },
    tamor: function tamor() {
      var _this$dossierCredit2;
      return (_this$dossierCredit2 = this.dossierCredit) === null || _this$dossierCredit2 === void 0 ? void 0 : _this$dossierCredit2.tamor;
    },
    tamorData: function tamorData() {
      var _this$tamor3;
      return (_this$tamor3 = this.tamor) === null || _this$tamor3 === void 0 ? void 0 : _this$tamor3.tamor_data;
    }
  },
  methods: {
    initApp: function initApp() {
      var _arguments = arguments,
        _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var _ref, _ref$refresh, refresh, _ref$online, online;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _ref = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : {}, _ref$refresh = _ref.refresh, refresh = _ref$refresh === void 0 ? false : _ref$refresh, _ref$online = _ref.online, online = _ref$online === void 0 ? false : _ref$online;
              _this2.fileToUpload = null;
            case 2:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    onFileInputChanged: function onFileInputChanged(event) {
      try {
        var _event$target$files$, _event$target, _uploadedFile$name, _this$extensions, _uploadedFile$name2;
        var errors = [];
        this.isLoadingInput = true;
        var uploadedFile = (_event$target$files$ = event === null || event === void 0 || (_event$target = event.target) === null || _event$target === void 0 ? void 0 : _event$target.files[0]) !== null && _event$target$files$ !== void 0 ? _event$target$files$ : null;
        var ext = uploadedFile === null || uploadedFile === void 0 || (_uploadedFile$name = uploadedFile.name) === null || _uploadedFile$name === void 0 ? void 0 : _uploadedFile$name.split('.').at(-1);
        if (!((_this$extensions = this.extensions) !== null && _this$extensions !== void 0 && _this$extensions.includes(ext))) {
          errors.push({
            code: 401,
            message: "Ce type de fichier n'est pas autorisé"
          });
          this.$toasted.show("'" + (uploadedFile === null || uploadedFile === void 0 ? void 0 : uploadedFile.name) + "' Refusé. Ce type de fichier n'est pas accepté", {
            duration: 5000
          });
          return;
        }
        var fileNameExt = uploadedFile === null || uploadedFile === void 0 || (_uploadedFile$name2 = uploadedFile.name) === null || _uploadedFile$name2 === void 0 ? void 0 : _uploadedFile$name2.split('.');
        this.fileToUpload = {
          file: uploadedFile,
          name: fileNameExt[0],
          ext: fileNameExt.at(-1),
          errors: errors,
          uploadErrors: [],
          isUploaded: null,
          hasUploadError: false
        };
        this.isLoadingInput = false;
      } catch (error) {
        this.isLoading = false;
        this.$toasted.show("Une erreur s'est produite");
        this.isLoadingInput = false;
        this.$console.error(error);
        // throw error;
      } finally {
        this.isLoadingInput = false;
      }
    },
    toggleRenamingForm: function toggleRenamingForm() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      if (this.isLoadingInput) return;
      if (state == false) {
        if (!!value == false) {
          this.$toasted.show("Veuillez ajouter un nom au fichier");
          var n = 1;
          this.toggleInputFileState('name', 'fichier_' + n);
        }
      }
      this.toggleInputFileState('renaming', state);
    },
    toggleInputFileState: function toggleInputFileState(field, value) {
      var data = _objectSpread({}, this.fileToUpload);
      data[field] = value;
      this.fileToUpload = data;
    },
    uploadURGENTISSIMO: function uploadURGENTISSIMO() {
      var _this3 = this;
      this.isLoadingInput = true;

      // if (!this.cred_pub_key) {
      //     this.$toasted.show("Dossier non trouvé. Veuiller rafraichir la page svp")
      //     this.toggleInputFileState('uploadErrors', ["Dossier non trouvé. Veuillez rafraichir la page svp"])
      //     return;
      // }

      // if (!this.authenticatedUser) {
      //     this.$toasted.show("Vous n'êtes pas authentifié. Veuiller rafraichir la page svp")
      //     return;
      // }

      // this.toggleInputFileState('hasUploadError', false)
      // this.toggleInputFileState('uploadErrors', [])
      // this.toggleInputFileState('uploadPercentage', 0)
      // this.toggleInputUploadingState('hasUploadError', false)

      var data = new FormData();
      // data.append('user_id', this.authenticatedUser?.user_id ?? this.authenticatedUser?.id)
      // data.append('entity_id', this.authenticatedUser?.type_entite)
      // data.append('entity_name', this.authenticatedUser?.nom_entite)
      // data.append('application_id', this.authenticatedUser?.app_id)
      // data.append('file_identity', this.cred_pub_key)
      // data.append('file_url', this.fileToUpload.file)
      // data.append('file_name', this.fileToUpload.name?.replace(/\s/g, '_'))
      // data.append('file_ext', this.fileToUpload.ext)
      // data.append('parameters', JSON.stringify({ url: this.connectsHost + 'api/upload-file-tamor', method: 'POST' }))

      var headers = {
        'Content-Type': 'multipart/form-data'
      };
      _services_proxy_service__WEBPACK_IMPORTED_MODULE_5__["default"].proxyRequestByFormData(data, {
        callback: function (progressEvent) {
          var uploadPercentage = parseInt(Math.round(progressEvent.loaded / progressEvent.total * 100));
          this.toggleInputFileState('uploadPercentage', uploadPercentage);
        }.bind(this)
      }).then(function (res) {
        var _file$file_url$split$, _this3$fileToUpload;
        res.data = JSON.parse(res.data);
        _this3.$console.log("data", res.data);
        var resp = res.data;
        if (!(resp !== null && resp !== void 0 && resp.is_success)) {
          var _resp$message;
          _this3.$toasted.show((_resp$message = resp === null || resp === void 0 ? void 0 : resp.message) !== null && _resp$message !== void 0 ? _resp$message : "Une erreur s'est produite");
          return;
        }
        var file = resp.data;
        var ext = (_file$file_url$split$ = file.file_url.split('.').at(-1)) === null || _file$file_url$split$ === void 0 ? void 0 : _file$file_url$split$.toLowerCase();
        file.ext = ext;
        _this3.toggleInputFileState('isUploaded', true);
        var file_url = file === null || file === void 0 ? void 0 : file.file_url;
        file_url = _this3._addUrlProtocol(file_url, "http");

        // update dossier credit
        _this3.fileToUpload.file_url = file_url;
        _this3.setupTAMORInDossierCredit({
          cred_pub_key: _this3.cred_pub_key,
          file_url: (_this3$fileToUpload = _this3.fileToUpload) === null || _this3$fileToUpload === void 0 ? void 0 : _this3$fileToUpload.file_url
        });
        _this3.isLoadingInput = false;
      })["catch"](function (err) {
        _this3.$console.error(err);
        _this3.toggleInputFileState('isUploaded', false);
        _this3.toggleInputFileState('hasUploadError', true);
        _this3.toggleInputFileState('uploadPercentage', 100);
        _this3.toggleInputUploadingState('hasUploadError', true);
        _this3.toggleInputFileState('uploadErrors', [{
          code: 500,
          message: "Erreur sur l'upload."
        }]);
        _this3.isLoadingInput = false;
      })["finally"](function () {
        _this3.isLoadingInput = false;
      });
    },
    formatContentTable: function formatContentTable(data) {
      return data.map(function (item) {
        return {
          "Nom": item.infos_client.nom,
          "Matricule": item.infos_client.matricule,
          "Nature de credit": item.ligne_credits.lignes_eligibles[0].nature_credit,
          "Notation": item.ligne_credits.lignes_eligibles[0].notation,
          "Date mise en place": new Date(item.ligne_credits.lignes_eligibles[0].date_mise_en_place).toLocaleDateString('fr'),
          "Quotité Max": parseFloat(item.ligne_credits.lignes_eligibles[0].quotite_max.toFixed(2)).toLocaleString('fr'),
          "Ratio Echéance": item.ligne_credits.lignes_eligibles[0].ratio_echeance_urgentissimo.toFixed(2),
          "Montant Urg.": parseFloat(item.ligne_credits.lignes_eligibles[0].montant_max_urgentissimo.toFixed(2)).toLocaleString('fr'),
          "Score Global": item.ligne_credits.lignes_eligibles[0].score_global.toFixed(2)
        };
      });
    },
    sendFiles: function sendFiles() {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var _this4$currentUser, _this4$currentUser2, _this4$currentUser3, _this4$fileToUpload$n, resp_connect, data, headers;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _this4.isclickToClose = false;
              _this4.isLoadingInput = true;
              if (_this4.currentUser) {
                _context4.next = 7;
                break;
              }
              _this4.$toasted.show("Vous n'êtes pas authentifié. Veuiller rafraichir la page svp");
              _this4.toggleInputFileState('uploadErrors', ["Vous n'êtes pas authentifié"]);
              return _context4.abrupt("return");
            case 7:
              // initialisation
              _this4.toggleInputFileState('hasUploadError', false);
              _this4.toggleInputFileState('uploadErrors', []);
              _this4.toggleInputFileState('uploadPercentage', 0);
              _this4.toggleInputUploadingState('hasUploadError', false);
              data = new FormData();
              data.append('user_id', (_this4$currentUser = _this4.currentUser) === null || _this4$currentUser === void 0 ? void 0 : _this4$currentUser.user_id);
              data.append('file_identity', _this4.dossier_credit.cred_pub_key);
              data.append('file_url', _this4.fileToUpload.file);
              data.append('entity_id', (_this4$currentUser2 = _this4.currentUser) === null || _this4$currentUser2 === void 0 ? void 0 : _this4$currentUser2.type_entite);
              data.append('entity_name', (_this4$currentUser3 = _this4.currentUser) === null || _this4$currentUser3 === void 0 ? void 0 : _this4$currentUser3.nom_entite);
              data.append('file_name', (_this4$fileToUpload$n = _this4.fileToUpload.name) === null || _this4$fileToUpload$n === void 0 ? void 0 : _this4$fileToUpload$n.replace(/\s/g, '_'));
              data.append('file_ext', _this4.fileToUpload.ext);
              data.append('parameters', JSON.stringify({
                url: _this4.connectsHost + 'api/upload-file-urgentissimo',
                method: 'POST'
              }));
              headers = {
                'Content-Type': 'multipart/form-data'
              };
              _context4.next = 23;
              return _services_proxy_service__WEBPACK_IMPORTED_MODULE_5__["default"].proxyRequestByFormData(data, {
                callback: function (progressEvent) {
                  var uploadPercentage = parseInt(Math.round(progressEvent.loaded / progressEvent.total * 100));
                  this.toggleInputFileState('uploadPercentage', uploadPercentage);
                }.bind(_this4)
              }).then(/*#__PURE__*/function () {
                var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(res) {
                  var response;
                  return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                    while (1) switch (_context3.prev = _context3.next) {
                      case 0:
                        response = JSON.parse(res.data);
                        _this4.resp_connect = response.data;
                        _this4.fileToUpload.isUploaded = true;

                        // Traitment Excel data
                        _context3.next = 5;
                        return (0,read_excel_file__WEBPACK_IMPORTED_MODULE_8__["default"])(_this4.fileToUpload.file).then(function (rows) {
                          _this4.$axios.post(_this4.ebapisHost + "workflowbuilder/api/v1/urgentissimo-file-traitment/", {
                            rows: rows,
                            user: _this4.currentUser,
                            file_url: _this4.resp_connect['file_url']
                          }).then(function (response) {
                            var resp = response.data;
                            if (resp["succes"] === true) {
                              _this4.contentUrgenTable = _this4.formatContentTable(resp["results"]);
                              _this4.fileToUpload = null;
                              _this4.showSuccesBlock = true;
                              _this4.isclickToClose = true;
                            }
                          })["catch"](function (err) {
                            console.log(err);
                            _this4.toggleInputFileState('isUploaded', false);
                            _this4.toggleInputFileState('hasUploadError', true);
                            _this4.toggleInputFileState('uploadPercentage', 100);
                            _this4.toggleInputFileState('errors', [{
                              code: 500,
                              message: "Le document n'est pas correct."
                            }]);
                            _this4.showSuccesBlock = false;
                            _this4.isLoadingInput = false;
                            _this4.isclickToClose = true;
                          });
                        });
                      case 5:
                      case "end":
                        return _context3.stop();
                    }
                  }, _callee3);
                }));
                return function (_x) {
                  return _ref2.apply(this, arguments);
                };
              }())["catch"](function (err) {
                _this4.$console.error(err);
                _this4.toggleInputFileState('isUploaded', false);
                _this4.toggleInputFileState('hasUploadError', true);
                _this4.toggleInputFileState('uploadPercentage', 100);
                _this4.toggleInputFileState('errors', [{
                  code: 500,
                  message: "Erreur sur l'upload."
                }]);
                _this4.isLoadingInput = false;
                _this4.isclickToClose = true;
              })["finally"](function () {
                _this4.isLoadingInput = false;
              });
            case 23:
              _context4.next = 31;
              break;
            case 25:
              _context4.prev = 25;
              _context4.t0 = _context4["catch"](0);
              _this4.$console.error(_context4.t0);
              _this4.isLoadingInput = false;
              _this4.isclickToClose = true;
              _this4.$toasted.show("Oups, une erreur s'est produite");
            case 31:
            case "end":
              return _context4.stop();
          }
        }, _callee4, null, [[0, 25]]);
      }))();
    },
    toggleInputUploadingState: function toggleInputUploadingState(field, value) {
      var data = _objectSpread({}, this.isLoadingInputUpload);
      data[field] = value;
      this.isLoadingInputUpload = data;
    },
    canEditFileName: function canEditFileName(_ref3) {
      var renaming = _ref3.renaming,
        isUploaded = _ref3.isUploaded;
      if (this.isLoadingInput) return false;
      return !renaming && !isUploaded;
    },
    canShowFileEditInput: function canShowFileEditInput(_ref4) {
      var renaming = _ref4.renaming,
        isUploaded = _ref4.isUploaded;
      return renaming && !isUploaded;
    },
    clearInputForm: function clearInputForm() {
      var clearAll = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      if (this.isLoadingInput) {
        this.$toasted.show("Chargement du fichier en cours");
        return;
      }
      if (clearAll) {
        this.fileToUpload = null;
        this.showFileInputForm = false;
        return;
      }
      if (this.fileToUpload) {
        this.fileToUpload = null;
        return;
      }
      if (this.showFileInputForm) {
        this.showFileInputForm = false;
        return;
      }
      return;
    },
    resetUpload: function resetUpload() {
      this.fileToUpload = null;
      this.showSuccesBlock = false;
    },
    clearLoading: function clearLoading() {
      this.isLoading = false;
      this.loadingHint = null;
    },
    deleteInputFile: function deleteInputFile() {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var _this5$fileToUpload;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              if (!((_this5$fileToUpload = _this5.fileToUpload) !== null && _this5$fileToUpload !== void 0 && _this5$fileToUpload.file_url)) {
                _context5.next = 4;
                break;
              }
              if (!_this5.state['delete_file_urgentissimo']) {
                _context5.next = 3;
                break;
              }
              return _context5.abrupt("return");
            case 3:
              _this5.toggleState('delete_file_urgentissimo', true);
            case 4:
              _this5.clearInputForm();
            case 5:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }))();
    },
    isFileNameTooLong: function isFileNameTooLong(_ref5) {
      var name = _ref5.name;
      return (name === null || name === void 0 ? void 0 : name.length) > this.MAX_NAME_LENGTH;
    },
    onClose: function onClose() {
      var _this6 = this;
      if (this.isLoadingInput) {
        // this.$toasted.show("Chargement du fichier en cours")
        this.$confirm("Un fichier est en cours de téléchargement ! Êtes-vous sur(e) de vouloir fermer ?", "Fichier en téléchargement").then(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
          return _regeneratorRuntime().wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
              case 0:
                _this6.canClose = true;
                _this6.$modal.hide('urgentissimo_modal');
              case 2:
              case "end":
                return _context6.stop();
            }
          }, _callee6);
        })));
        return;
      }
      if (!this.canClose) return false;
      return true;
    },
    onDrop: function onDrop(e) {
      e.preventDefault();
      var droppedFiles = e.dataTransfer.files;
      this.onFileInputChanged(e, {
        droppedFiles: droppedFiles
      });
    },
    onDragEnter: function onDragEnter() {
      this.isDragging = true;
    },
    onDragLeave: function onDragLeave() {
      var _this7 = this;
      setTimeout(function () {
        _this7.isDragging = false;
      }, 2000);
    },
    openFileDialog: function openFileDialog() {
      var elm = document.getElementById("urgentissimo_file_input");
      if (!elm) return;
      elm.click();
    },
    setError: function setError() {
      var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var hint = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      this.errorMessage = message !== null && message !== void 0 ? message : "Une erreur s'est produite";
      this.errorHint = hint !== null && hint !== void 0 ? hint : "Veuillez réessayer dans quelques minutes";
      this.clearLoading();
    },
    formatFileName: function formatFileName(input) {
      return this.isFileNameTooLong(input) ? this.shortenFileName(input) : input.name;
    },
    shortenFileName: function shortenFileName(_ref7) {
      var name = _ref7.name;
      // ?- ({abcdefghijklmnopqrstuvxyz}) => abcdef....qrstuvxyz
      return (name === null || name === void 0 ? void 0 : name.substring(0, Math.floor(this.MAX_NAME_LENGTH / 2))) + this.SHORT_NAME_SEPARATOR + (name === null || name === void 0 ? void 0 : name.substring((name === null || name === void 0 ? void 0 : name.length) - 1 - Math.floor(this.MAX_NAME_LENGTH / 2), (name === null || name === void 0 ? void 0 : name.length) - 1));
    },
    toggleState: function toggleState(key, val) {
      var data = _objectSpread({}, this.state);
      data[key] = val;
      this.state = data;
    },
    cancelModal: function cancelModal(modalName) {
      this.$modal.hide(modalName);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modals/UrgentissimoUploadModal.vue?vue&type=template&id=dd758d6a&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modals/UrgentissimoUploadModal.vue?vue&type=template&id=dd758d6a&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$fileToUpload, _vm$fileToUpload2, _vm$fileToUpload3, _vm$fileToUpload4, _ref, _ref2, _vm$fileToUpload$ext, _ref3, _ref4, _vm$fileToUpload5, _vm$fileToUpload6, _vm$isLoadingInputUpl, _vm$fileToUpload7;
  var _vm = this,
    _c = _vm._self._c;
  return _c("modal", {
    staticStyle: {
      margin: "auto!important"
    },
    attrs: {
      name: "urgentissimo_modal",
      width: 1500,
      height: "auto",
      adaptive: true,
      resizable: false,
      draggable: false,
      clickToClose: _vm.isclickToClose
    },
    on: {
      close: function close($event) {
        return _vm.onClose();
      }
    }
  }, [_c("div", {
    staticClass: "mx-auto p-3",
    staticStyle: {
      overflow: "auto"
    }
  }, [_c("div", {
    staticClass: "relative d-flex flex-column m-0 bg-white border rounded mx-auto p-3",
    staticStyle: {
      height: "90vh",
      overflow: "hidden",
      "z-index": "9999"
    }
  }, [_c("div", {
    staticClass: "modal-header"
  }, [_c("h5", {
    staticClass: "modal-title",
    attrs: {
      id: "denial"
    }
  }, [_vm._v("Traitement de votre descente Urgentissimo")]), _vm._v(" "), _c("button", {
    staticClass: "btn-close",
    attrs: {
      type: "button",
      disabled: !_vm.isclickToClose
    },
    on: {
      click: function click($event) {
        return _vm.cancelModal("urgentissimo_modal");
      }
    }
  })]), _vm._v(" "), _vm.isLoading ? [_c("div", {
    staticClass: "d-flex flex-column gap-1 justify-content-center text-center py-5 align-items-center text-secondary h-100"
  }, [_c("span", {
    staticClass: "spinner-border spinner-border-lg"
  }), _vm._v(" "), _c("h3", {
    staticClass: "mt-3 mb-0"
  }, [_vm._v(_vm._s(_vm.loadingMessage) + " "), _c("loading-dots")], 1)])] : [[_c("div", {
    staticClass: "d-flex flex-column text-secondary justify-content-center align-items-center text-center py-2 h-100"
  }, [_vm.showSuccesBlock ? [_c("div", {
    staticClass: "px-3 succes-traitment",
    staticStyle: {
      color: "rgb(70 186 132)"
    }
  }, [_c("check-circle-icon", {
    staticClass: "custom-class",
    attrs: {
      size: "4.5x"
    }
  }), _vm._v(" "), _c("h5", {
    staticClass: "my-2 mb-1"
  }, [_vm._v("Traitement terminé avec succès")]), _vm._v(" "), _c("button", {
    staticClass: "mt-2 btn btn-outline-secondary gap-2 align-items-center w-75",
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.resetUpload();
      }
    }
  }, [_vm._v("\n                                    Recommencer\n                                ")])], 1), _vm._v(" "), _c("stat-table", {
    attrs: {
      headers: _vm.headerUrgenTable,
      items: _vm.contentUrgenTable,
      title: "Liste des personnes éligibles à urgentissimo"
    },
    scopedSlots: _vm._u([{
      key: "header",
      fn: function fn() {
        return [_c("div", {
          staticClass: "d-flex justify-content-between"
        }, [_c("h5", {
          staticClass: "text-start"
        }, [_vm._v("Liste des personnes éligibles à urgentissimo")])])];
      },
      proxy: true
    }, {
      key: "toolbar",
      fn: function fn() {
        return [_c("div")];
      },
      proxy: true
    }], null, false, 1727520011)
  })] : _vm._e(), _vm._v(" "), !_vm.showSuccesBlock ? _c("section", {
    staticClass: "form-group py-1 pb-2 mx-3 border rounded bg-light w-form-bg my-3"
  }, [!_vm.fileToUpload && !_vm.showSuccesBlock ? _c("div", {
    staticClass: "px-3"
  }, [_c("h5", {
    staticClass: "my-2 mb-1"
  }, [_vm._v("Veuillez uploader la descente")]), _vm._v(" "), _c("div", {
    staticClass: "input-group"
  }, [_c("input", {
    staticClass: "d-none",
    attrs: {
      id: "urgentissimo_file_input",
      type: "file",
      accept: _vm.extensions.map(function (k) {
        return "." + k;
      }).join(",")
    },
    on: {
      change: _vm.onFileInputChanged
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "drop-zone fs-5 mt-2",
    "class": {
      expanded: _vm.fileToUpload != null || _vm.isDragging
    },
    on: {
      dragover: function dragover($event) {
        $event.preventDefault();
      },
      dragenter: function dragenter($event) {
        $event.preventDefault();
        return _vm.onDragEnter();
      },
      dragleave: function dragleave($event) {
        $event.preventDefault();
        return _vm.onDragLeave();
      },
      drop: _vm.onDrop,
      click: _vm.openFileDialog
    }
  }, [_c("span", [_vm._v(" Déposez le fichier ici ")])])])]) : _vm._e(), _vm._v(" "), !_vm.fileToUpload && _vm.isLoadingInput == true ? _c("div", {
    staticClass: "d-flex justify-content-center align-items-center gap-2 px-3"
  }, [_c("div", {
    staticClass: "spinner-border spinner-border-sm"
  }), _vm._v(" "), _c("span", {
    staticClass: "fs-5"
  }, [_vm._v("\n                                    Chargement en cours ...\n                                ")])]) : _vm._e(), _vm._v(" "), _vm.fileToUpload != null ? _c("div", {
    staticClass: "mt-2"
  }, [_c("div", {
    staticClass: "p-1 mx-3 rounded"
  }, [_c("div", {
    staticClass: "relative transition-color bg-white border rounded p-2 mb-2",
    "class": [((_vm$fileToUpload = _vm.fileToUpload) === null || _vm$fileToUpload === void 0 ? void 0 : _vm$fileToUpload.errors.length) > 0 ? "border border-danger" : "border-secondary"]
  }, [_c("div", {
    staticClass: "d-flex gap-2"
  }, [_c("span", {
    staticClass: "rounded border p-2 file-thumbnail d-flex justify-content-center align-items-center",
    "class": [((_vm$fileToUpload2 = _vm.fileToUpload) === null || _vm$fileToUpload2 === void 0 ? void 0 : _vm$fileToUpload2.errors.length) > 0 ? "border border-danger" : ""],
    staticStyle: {
      overflow: "hidden"
    }
  }, [_c("span", {
    staticClass: "text-uppercase px-2 text-secondary",
    "class": [((_vm$fileToUpload3 = _vm.fileToUpload) === null || _vm$fileToUpload3 === void 0 || (_vm$fileToUpload3 = _vm$fileToUpload3.ext) === null || _vm$fileToUpload3 === void 0 ? void 0 : _vm$fileToUpload3.length) < 4 ? "fs-4" : "fs-6", !_vm.extensions.includes(_vm.fileToUpload.ext) ? "text-danger" : ""]
  }, [_vm._v("\n                                                    " + _vm._s((_vm$fileToUpload4 = _vm.fileToUpload) === null || _vm$fileToUpload4 === void 0 ? void 0 : _vm$fileToUpload4.ext) + "\n                                                ")])]), _vm._v(" "), _c("div", {
    staticClass: "col d-flex flex-column gap-1"
  }, [_c("div", {
    staticClass: "d-flex gap-3 justify-content-between align-items-start"
  }, [_c("div", {
    staticClass: "col d-flex",
    "class": [_vm.canEditFileName(_vm.fileToUpload) ? "cursor-edit" : ""],
    staticStyle: {
      "word-break": "break-all"
    },
    attrs: {
      title: (!_vm.fileToUpload.isUploaded ? "Modifier " : "") + _vm.fileToUpload.name
    },
    on: {
      click: function click($event) {
        _vm.canEditFileName(_vm.fileToUpload) ? _vm.toggleRenamingForm() : null;
      }
    }
  }, [_vm.canShowFileEditInput(_vm.fileToUpload) ? _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.fileToUpload.name,
      expression: "fileToUpload.name"
    }],
    staticClass: "form-control mb-1",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.fileToUpload.name
    },
    on: {
      keyup: [function ($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
        return _vm.toggleRenamingForm(false, _vm.fileToUpload.name);
      }, function ($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "esc", 27, $event.key, ["Esc", "Escape"])) return null;
        return _vm.toggleRenamingForm(false, _vm.fileToUpload.name);
      }],
      blur: function blur($event) {
        return _vm.toggleRenamingForm(false, _vm.fileToUpload.name);
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.fileToUpload, "name", $event.target.value);
      }
    }
  }) : _c("span", {
    on: {
      click: function click($event) {
        return _vm.toggleRenamingForm();
      }
    }
  }, [_vm._v("\n                                                            " + _vm._s(_vm.formatFileName(_vm.fileToUpload)) + "\n                                                        ")])]), _vm._v(" "), !_vm.isLoadingInput ? _c("span", {
    staticClass: "delete-icon-btn transition-color text-danger p-1 rounded no-shrink",
    style: "visibility: " + (!_vm.isLoadingInput && !_vm.fileToUpload.isUploaded || _vm.fileToUpload.hasUploadError ? "visible" : "hidden") + ";",
    attrs: {
      title: "Supprimer le fichier " + _vm.fileToUpload.file.name
    },
    on: {
      click: function click($event) {
        return _vm.deleteInputFile();
      }
    }
  }, [_c("i", {
    staticClass: "icofont-trash"
  }), _vm._v(" "), _c("i", {
    staticClass: "icofont-ui-delete"
  })]) : _vm._e()]), _vm._v(" "), _c("small", {
    staticClass: "d-flex gap-3 justify-content-between align-items-center"
  }, [_c("div", {
    staticClass: "d-flex flex-wrap text-secondary",
    staticStyle: {
      gap: "0rem 1rem"
    }
  }, [_c("div", {
    staticClass: "transition-color",
    "class": {
      "text-danger": !_vm.extensions.includes(_vm.fileToUpload.ext)
    }
  }, [_vm._v("\n                                                            Type:\n                                                            "), !_vm.extensions.includes(_vm.fileToUpload.ext) ? _c("i", {
    staticClass: "icofont-exclamation-tringle text-danger"
  }) : _c("i", {
    "class": {
      "icofont-file-jpg": (_ref = ["png", "webp", "jpg", "jpeg"]) === null || _ref === void 0 ? void 0 : _ref.includes(_vm.fileToUpload.ext),
      "icofont-file-spreadsheet": (_ref2 = ["xls", "xlsx"]) === null || _ref2 === void 0 ? void 0 : _ref2.includes(_vm.fileToUpload.ext),
      "icofont-file-pdf": ((_vm$fileToUpload$ext = _vm.fileToUpload.ext) === null || _vm$fileToUpload$ext === void 0 ? void 0 : _vm$fileToUpload$ext.toLowerCase()) === "pdf",
      "icofont-file-word": (_ref3 = ["doc", "docx"]) === null || _ref3 === void 0 ? void 0 : _ref3.includes(_vm.fileToUpload.ext),
      "icofont-file-powerpoint": (_ref4 = ["ppt", "pptx"]) === null || _ref4 === void 0 ? void 0 : _ref4.includes(_vm.fileToUpload.ext)
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "transition-color",
    "class": {
      "text-danger": _vm.fileToUpload.errors.find(function (e) {
        return e.code == 413;
      })
    }
  }, [_vm._v("\n                                                            Taille : " + _vm._s((_vm.fileToUpload.file.size / 1048576).toFixed(2)) + " Mo\n                                                        ")])])]), _vm._v(" "), _vm.isLoadingInput === true || _vm.fileToUpload.isUploaded != null ? _c("small", [_c("div", {
    staticClass: "progress mt-1",
    staticStyle: {
      height: ".5rem!important"
    }
  }, [_c("div", {
    staticClass: "progress-bar",
    "class": {
      "bg-success": _vm.fileToUpload.isUploaded,
      "progress-bar-striped progress-bar-animated": _vm.fileToUpload.isUploaded == null,
      "bg-danger": _vm.fileToUpload.hasUploadError
    },
    style: "width: " + _vm.fileToUpload.uploadPercentage + "%",
    attrs: {
      role: "progressbar",
      "aria-valuenow": _vm.fileToUpload.uploadPercentage,
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    }
  })])]) : _vm._e(), _vm._v(" "), _c("small", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.fileToUpload.errors,
      expression: "fileToUpload.errors"
    }],
    staticClass: "transition-color text-left"
  }, _vm._l(_vm.fileToUpload.errors, function (err, k) {
    return _c("b", {
      key: k,
      staticClass: "text-danger"
    }, [_vm._v("\n                                                        " + _vm._s(err.message) + " "), _c("br")]);
  }), 0)])])])]), _vm._v(" "), _vm.isLoadingInput == true ? _c("div", {
    staticClass: "d-flex justify-content-center align-items-center gap-2 px-3"
  }, [_c("div", {
    staticClass: "spinner-border spinner-border-sm"
  }), _vm._v(" "), _c("span", {
    staticClass: "fs-5"
  }, [_vm._v("\n                                        Chargement en cours ...\n                                    ")])]) : _c("div", {
    staticClass: "d-flex gap-2 px-3"
  }, [((_vm$fileToUpload5 = _vm.fileToUpload) === null || _vm$fileToUpload5 === void 0 ? void 0 : _vm$fileToUpload5.isUploaded) == null ? _c("a", {
    staticClass: "btn d-flex justify-content-center align-items-center w-100 mt-2",
    "class": [((_vm$fileToUpload6 = _vm.fileToUpload) === null || _vm$fileToUpload6 === void 0 ? void 0 : _vm$fileToUpload6.isUploaded) == true ? " btn-success" : "bg-deep-blue"],
    staticStyle: {
      border: "1px solid"
    },
    on: {
      click: function click($event) {
        return _vm.sendFiles();
      }
    }
  }, [((_vm$isLoadingInputUpl = _vm.isLoadingInputUpload) === null || _vm$isLoadingInputUpl === void 0 ? void 0 : _vm$isLoadingInputUpl.isLoading) == true ? _c("div", {
    staticClass: "d-flex gap-2 align-items-center justify-content-center"
  }, [_c("span", {
    staticClass: "spinner-border spinner-border-sm"
  }), _vm._v(" "), _c("span", [_vm._v("Envoi du fichier en cours...")])]) : _c("div", [_vm._v("\n                                            Envoyer le fichier\n                                        ")])]) : _vm._e(), _vm._v(" "), ((_vm$fileToUpload7 = _vm.fileToUpload) === null || _vm$fileToUpload7 === void 0 ? void 0 : _vm$fileToUpload7.isUploaded) == true ? _c("span", {
    staticClass: "d-flex justify-content-center align-items-center w-100 mt-2 bg-text-load"
  }, [_vm._v("\n                                        Traitement en cours "), _c("span", {
    domProps: {
      innerHTML: _vm._s(_vm.loadingDots)
    }
  })]) : _vm._e()])]) : _vm._e()]) : _vm._e(), _vm._v(" "), !_vm.fileToUpload && !_vm.showSuccesBlock ? _c("button", {
    staticClass: "mt-2 btn btn-sm btn-danger d-flex gap-2 justify-content-center align-items-center",
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.clearInputForm();
      }
    }
  }, [_vm._v("\n                            Annuler\n                        ")]) : _vm._e()], 2)]]], 2)])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modals/UrgentissimoUploadModal.vue?vue&type=style&index=0&id=dd758d6a&scoped=true&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modals/UrgentissimoUploadModal.vue?vue&type=style&index=0&id=dd758d6a&scoped=true&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".tableFixedHead[data-v-dd758d6a] {\r\n    background-color: #fff;\r\n    overflow: auto;\r\n    height: 100px;\n}\n.tableFixedHead thead th[data-v-dd758d6a] {\r\n    background-color: #fff;\r\n    position: sticky !important;\r\n    top: 0;\r\n    z-index: 1;\n}\n.sticky[data-v-dd758d6a] {\r\n    background-color: #fff;\r\n    position: sticky !important;\r\n    top: 0;\r\n    z-index: 1;\n}\n.progress-bar[data-v-dd758d6a] {\r\n    background-color: #7b8087;\n}\n.bg-text-load[data-v-dd758d6a] {\r\n    background-color: #f8f9fa;\r\n    color: #e11a1a;\n}\n.w-form-bg[data-v-dd758d6a] {\r\n    width: 45%;\n}\n.succes-traitment[data-v-dd758d6a] {\r\n    color: rgb(70, 186, 132);\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\n}\r\n\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modals/UrgentissimoUploadModal.vue?vue&type=style&index=0&id=dd758d6a&scoped=true&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modals/UrgentissimoUploadModal.vue?vue&type=style&index=0&id=dd758d6a&scoped=true&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UrgentissimoUploadModal_vue_vue_type_style_index_0_id_dd758d6a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UrgentissimoUploadModal.vue?vue&type=style&index=0&id=dd758d6a&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modals/UrgentissimoUploadModal.vue?vue&type=style&index=0&id=dd758d6a&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UrgentissimoUploadModal_vue_vue_type_style_index_0_id_dd758d6a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UrgentissimoUploadModal_vue_vue_type_style_index_0_id_dd758d6a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/modals/UrgentissimoUploadModal.vue":
/*!********************************************************************!*\
  !*** ./resources/js/components/modals/UrgentissimoUploadModal.vue ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UrgentissimoUploadModal_vue_vue_type_template_id_dd758d6a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UrgentissimoUploadModal.vue?vue&type=template&id=dd758d6a&scoped=true */ "./resources/js/components/modals/UrgentissimoUploadModal.vue?vue&type=template&id=dd758d6a&scoped=true");
/* harmony import */ var _UrgentissimoUploadModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UrgentissimoUploadModal.vue?vue&type=script&lang=js */ "./resources/js/components/modals/UrgentissimoUploadModal.vue?vue&type=script&lang=js");
/* harmony import */ var _UrgentissimoUploadModal_vue_vue_type_style_index_0_id_dd758d6a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UrgentissimoUploadModal.vue?vue&type=style&index=0&id=dd758d6a&scoped=true&lang=css */ "./resources/js/components/modals/UrgentissimoUploadModal.vue?vue&type=style&index=0&id=dd758d6a&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _UrgentissimoUploadModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _UrgentissimoUploadModal_vue_vue_type_template_id_dd758d6a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _UrgentissimoUploadModal_vue_vue_type_template_id_dd758d6a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "dd758d6a",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/modals/UrgentissimoUploadModal.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/modals/UrgentissimoUploadModal.vue?vue&type=script&lang=js":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/modals/UrgentissimoUploadModal.vue?vue&type=script&lang=js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UrgentissimoUploadModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UrgentissimoUploadModal.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modals/UrgentissimoUploadModal.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UrgentissimoUploadModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/modals/UrgentissimoUploadModal.vue?vue&type=style&index=0&id=dd758d6a&scoped=true&lang=css":
/*!****************************************************************************************************************************!*\
  !*** ./resources/js/components/modals/UrgentissimoUploadModal.vue?vue&type=style&index=0&id=dd758d6a&scoped=true&lang=css ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UrgentissimoUploadModal_vue_vue_type_style_index_0_id_dd758d6a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UrgentissimoUploadModal.vue?vue&type=style&index=0&id=dd758d6a&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modals/UrgentissimoUploadModal.vue?vue&type=style&index=0&id=dd758d6a&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/modals/UrgentissimoUploadModal.vue?vue&type=template&id=dd758d6a&scoped=true":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/modals/UrgentissimoUploadModal.vue?vue&type=template&id=dd758d6a&scoped=true ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UrgentissimoUploadModal_vue_vue_type_template_id_dd758d6a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UrgentissimoUploadModal_vue_vue_type_template_id_dd758d6a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UrgentissimoUploadModal_vue_vue_type_template_id_dd758d6a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UrgentissimoUploadModal.vue?vue&type=template&id=dd758d6a&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modals/UrgentissimoUploadModal.vue?vue&type=template&id=dd758d6a&scoped=true");


/***/ })

}]);