"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_manage_ChecklistEditor_rows_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/manage/ChecklistEditor_rows.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/manage/ChecklistEditor_rows.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/auth.service */ "./resources/js/services/auth.service.js");
/* harmony import */ var _services_proxy_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/proxy.service */ "./resources/js/services/proxy.service.js");
/* harmony import */ var _CheckListForm_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CheckListForm.vue */ "./resources/js/components/manage/CheckListForm.vue");
/* harmony import */ var _services_connects_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/connects.service */ "./resources/js/services/connects.service.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), c(GeneratorFunctionPrototype, u, GeneratorFunction.displayName = "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }




window.$ = window.jQuery = __webpack_require__(/*! jquery/dist/jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'checklist_editor',
  components: {
    CheckListForm: _CheckListForm_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
      isLoadingFilesToUpload: false,
      //  errorMessage : null,
      //  successMessage : null,
      newRowInputField: null,
      selectedColumnId: false,
      savingColumnRowId: false,
      newRowInputError: null,
      selectedFolders: [],
      checklistTemplates: {},
      item: {},
      currentTypeId: null,
      currentRubriqueId: null,
      currentCategoryId: null,
      currentDossierId: null,
      selectedItem: null,
      selectedItemId: null,
      selectedItemType: null,
      currentItem: null,
      currentItemId: null,
      canSelectedRubriqueHaveCategories: true,
      CACHE_STORAGE_KEY: 'files_explorer_templates',
      columns: [],
      _templates: [],
      // ?- Don't modify
      _folders: [],
      // ?- Don't modify
      _file_tree: [],
      // ?- Don't modify
      fileTemplates: [],
      treeTemplates: [],
      selectedItemsPathArrays: {},
      selectedTemplates: [],
      isDragging: {},
      selectedDirs: [],
      selectedCategorie: undefined,
      selectedCategories: [],
      selectedRubriques: [],
      isSur: false,
      choosingType: true,
      choosingRubrique: false,
      choosingCategorie: false,
      choosingFile: false,
      connectsHost: _services_connects_service__WEBPACK_IMPORTED_MODULE_3__["default"].loadablehost(),
      fileCountMaxLimitPerUpload: 10,
      fileToUpload: [],
      MAX_NAME_LENGTH: 40,
      SHORT_NAME_SEPARATOR: '.....',
      limitSize: 51200 * 1024,
      typeOfFileToAdd: '',
      rubriqueOfFileToAdd: '',
      categoryOfFileToAdd: '',
      selectedUpload: [],
      errorCodes: {
        401: 'Non autorisé',
        413: 'Fichier trop lourd'
      },
      fileToAdd: "",
      adding: false,
      currentFile: null,
      isFullscreen: true,
      files: [],
      filesToUpload: {},
      filesSureteToUpload: {},
      deleteLoading: {},
      editLoading: {},
      uploadLoading: {},
      updating: {
        index: false
      },
      isLoading: false
    }, "isLoadingFilesToUpload", false), "isLoadingInput", {}), "isLoadingInputUpload", {}), "uploadedFiles", []), "authorizedExt", ["jpg", "png", "jpeg", "pdf", "PDF", "JPG", "PNG", "JPEG", "doc", "docx", "xlsx", "xls", "pptx", "ppt"]), "user", null);
  },
  created: function created() {
    console.log("Created");
  },
  mounted: function mounted() {
    console.log("Mounted");
    this.getFilesTemplates();
    this.authBeforeRequest(this.getFiles);
  },
  computed: {},
  methods: {
    saveRowInput: function saveRowInput() {
      var _this = this,
        _this$selectedFolders;
      console.log("saveRowInput", this.selectedColumnId);
      this.newRowInputError = null;
      if (!this.newRowInputField) {
        this.newRowInputError = "Veuillez entrer une valeur";
        return;
      }
      this.savingColumnRowId = this.selectedColumnId;
      var colIdx = this.columns.findIndex(function (col) {
        return col.id == _this.selectedColumnId;
      });
      if (colIdx == -1) return;
      var column = this.columns[colIdx];
      var parent_id = this.selectedFolders.length > 0 ? (_this$selectedFolders = this.selectedFolders) === null || _this$selectedFolders === void 0 || (_this$selectedFolders = _this$selectedFolders.at(-1)) === null || _this$selectedFolders === void 0 ? void 0 : _this$selectedFolders.id : null;
      var newRow = {
        id: Math.ceil(Math.random() * 4),
        name: this.newRowInputField,
        parent_id: parent_id,
        type_id: this.selectedColumnId
      };
      // TODO call api to save
      console.log("newRow", newRow);
      column.rows = [].concat(_toConsumableArray(column.rows), [newRow]);
      this.columns[colIdx] = column;
      this.closeRowInput();
    },
    showRowInput: function showRowInput(_ref2) {
      var id = _ref2.id;
      this.closeRowInput();
      this.selectedColumnId = id;
    },
    closeRowInput: function closeRowInput() {
      this.selectedColumnId = false;
      this.newRowInputField = null;
      this.newRowInputError = null;
    },
    _isListEmpty: function _isListEmpty(list) {
      return (list === null || list === void 0 ? void 0 : list.length) == 0;
    },
    _findFolder: function _findFolder(id) {
      var _this$_folders;
      return (_this$_folders = this._folders) === null || _this$_folders === void 0 ? void 0 : _this$_folders.find(function (item) {
        return item.id == id;
      });
    },
    _isFolderColumnSelected: function _isFolderColumnSelected(index) {
      var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var elm = this.selectedItemsPathArrays[index];
      if (!elm) return false;
      if (path != null) {
        return elm == path;
      }
      return true;
    },
    lastIndexToSelect: function lastIndexToSelect() {},
    onClickP: function onClickP() {
      console.log("onClickP__");
    },
    handleFolderSelection: function handleFolderSelection(col_index, folder) {
      var _this2 = this;
      console.log("handleFolderSelection");
      // this.selectedItemsPathArrays[col_index] = null;
      console.log("!!! _handleFolderSelection", this.selectedItemsPathArrays, col_index, folder.slug);
      if (col_index == null || folder == null) return;
      var that = this;
      var some_files_are_selected_but_not_uploaded_yet = this.selectedTemplates.some(function (temp) {
        var _temp$id;
        return Object.keys(_this2.filesToUpload).includes(temp === null || temp === void 0 || (_temp$id = temp.id) === null || _temp$id === void 0 ? void 0 : _temp$id.toString());
      });
      if (some_files_are_selected_but_not_uploaded_yet) {
        this.$confirm("Vous avez des fichiers selectionnés et prêts à être envoyés. Voulez-vous les abandonner avant de changer d'onglet ?", "Changer d'onglet", 'warning', {
          confirmButtonText: "Oui, supprimer les fichiers",
          cancelButtonText: "Non, garder ces fichiers"
          // type: 'warning'
        }).then(function () {
          _this2.$toasted.show("Fichiers supprimés");
          _this2.filesToUpload = {};
        })["catch"](function () {
          _this2.$toasted.show("Fichiers gardés");
        })["finally"](function () {
          return _makeFolderSelection(col_index, folder);
        });
      } else {
        _makeFolderSelection(col_index, folder);
      }
      function _makeFolderSelection(col_index, folder) {
        if (col_index == null || folder == null) return;
        var is_parent_selected = false;
        var parent_id = folder === null || folder === void 0 ? void 0 : folder.parent_id;
        //
        var parent_index = col_index - 1;
        // ?- empty selected templates file inputs
        // ?- // TODO ask confirmation when there are file upload errors and the user wants to switch tabs
        // if()

        that.selectedTemplates = [];
        if (parent_index == -1) {
          console.log("****parent null", parent_index, parent_id);

          // ?- reset selection
          that.selectedItemsPathArrays = {};
          that.selectedItemsPathArrays[col_index] = folder === null || folder === void 0 ? void 0 : folder.path_array;

          // console.log("update path arrays ", that.selectedItemsPathArrays);
          return;
        }
        ;
        //
        is_parent_selected = that._isFolderColumnSelected(parent_index);
        console.log("is_parent_selected", is_parent_selected);
        if (!is_parent_selected) {
          // ?- reset selection
          that.selectedItemsPathArrays = {};
          that.selectedItemsPathArrays = {
            col_index: folder === null || folder === void 0 ? void 0 : folder.path_array
          };
          return;
        }
      }
    },
    isFolderColumnVisible: function isFolderColumnVisible(col_index) {
      var is_col_visible = false;
      var previous_col_index = col_index - 1;
      if (previous_col_index == -1) {
        is_col_visible = true;
      } else {
        var _this$selectedItemsPa;
        if (Array.isArray(this.selectedItemsPathArrays[previous_col_index]) && ((_this$selectedItemsPa = this.selectedItemsPathArrays[previous_col_index]) === null || _this$selectedItemsPa === void 0 ? void 0 : _this$selectedItemsPa.length) > 0) {
          is_col_visible = true;
        }
      }
      return is_col_visible;
    },
    isFileUploadRowVisible: function isFileUploadRowVisible(_ref3) {
      var _Object$keys;
      var main_row_id = _ref3.id;
      var last_folder_path_array = this.selectedItemsPathArrays[(_Object$keys = Object.keys(this.selectedItemsPathArrays)) === null || _Object$keys === void 0 ? void 0 : _Object$keys.at(-1)];
      if (last_folder_path_array) {
        return last_folder_path_array[0] == main_row_id;
      }
      return false;
    },
    selectedRowFolders: function selectedRowFolders(main_row, column, col_index) {
      var _column$rows, _column$rows3;
      return (_column$rows = column.rows) === null || _column$rows === void 0 ? void 0 : _column$rows.filter(function (item) {
        var _item$path_array;
        return (_item$path_array = item.path_array) === null || _item$path_array === void 0 ? void 0 : _item$path_array.includes(main_row.id);
      });
      // removed by dead control flow
{}
      // removed by dead control flow
{ var parent_col_idx; }
      // removed by dead control flow
{ var _column$rows2; }
      // removed by dead control flow
{ var is_parent_selected; }
      // removed by dead control flow
{}
      // removed by dead control flow
{ var parent_path; }
      // removed by dead control flow
{}
    },
    selectedRowTemplates: function selectedRowTemplates(_ref4) {
      var _this$fileTemplates, _this$selectedItemsPa2, _Object$keys2, _this$fileTemplates2;
      var main_row_id = _ref4.id;
      return (_this$fileTemplates = this.fileTemplates) === null || _this$fileTemplates === void 0 ? void 0 : _this$fileTemplates.filter(function (item) {
        return item.path_array[0] == main_row_id;
      });
      // removed by dead control flow
{ var last_folder_path; }
      // removed by dead control flow
{}
      // removed by dead control flow
{}
    },
    formatFileName: function formatFileName(input) {
      return this.isFileNameTooLong(input) ? this.shortenFileName(input) : input.name;
    },
    shortenFileName: function shortenFileName(_ref5) {
      var name = _ref5.name;
      // ?- ({abcdefghijklmnopqrstuvxyz}) => abcdef....qrstuvxyz
      return (name === null || name === void 0 ? void 0 : name.substring(0, Math.floor(this.MAX_NAME_LENGTH / 2))) + this.SHORT_NAME_SEPARATOR + (name === null || name === void 0 ? void 0 : name.substring((name === null || name === void 0 ? void 0 : name.length) - 1 - Math.floor(this.MAX_NAME_LENGTH / 2), (name === null || name === void 0 ? void 0 : name.length) - 1));
    },
    isFileNameTooLong: function isFileNameTooLong(_ref6) {
      var name = _ref6.name;
      return (name === null || name === void 0 ? void 0 : name.length) > this.MAX_NAME_LENGTH;
    },
    canShowFileEditInput: function canShowFileEditInput(_ref7) {
      var renaming = _ref7.renaming,
        isUploaded = _ref7.isUploaded;
      return renaming && !isUploaded;
    },
    canEditFileName: function canEditFileName(_ref8) {
      var renaming = _ref8.renaming,
        isUploaded = _ref8.isUploaded;
      return !renaming && !isUploaded;
    },
    toggleRenamingForm: function toggleRenamingForm(_ref9, file_index) {
      var id = _ref9.id;
      var state = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var value = arguments.length > 3 ? arguments[3] : undefined;
      if (state == false) {
        if (!!value == false) {
          this.$toasted.show("Veuillez ajouter un nom au fichier");
          var n = file_index + 1;
          this.toggleInputFileState({
            id: id
          }, 'name', 'fichier_' + n, file_index, this.isSur);
        }
      }
      this.toggleInputFileState({
        id: id
      }, 'renaming', state, file_index, this.isSur);
    },
    onDrop: function onDrop(e, d) {
      // console.log("onDrop", e, d);
      e.preventDefault();
      var droppedFiles = e.dataTransfer.files;
      this.authBeforeUpload(d.upload, {
        droppedFiles: droppedFiles
      }, d.index, d.sur = false);
    },
    onDragEnter: function onDragEnter(_ref0) {
      var id = _ref0.id;
      // console.log("Drag Enter");
      var data = _objectSpread({}, this.isDragging);
      data[id] = true;
      data = _objectSpread({}, data);
      this.isDragging = data;
    },
    onDragLeave: function onDragLeave(_ref1) {
      var _this3 = this;
      var id = _ref1.id;
      setTimeout(function () {
        // console.log("Drag Leave");
        var data = _objectSpread({}, _this3.isDragging);
        data[id] = false;
        data = _objectSpread({}, data);
        _this3.isDragging = data;
      }, 2000);
    },
    sendFiles: function sendFiles(template) {
      var _arguments = arguments,
        _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var isSur, _this4$filesToUpload$, _files, filesToUpload, files, i;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              isSur = _arguments.length > 1 && _arguments[1] !== undefined ? _arguments[1] : null;
              _context.prev = 1;
              _this4.toggleInputUploadingState(template, 'hasUploadError', false, isSur);
              if (template) {
                _context.next = 5;
                break;
              }
              return _context.abrupt("return");
            case 5:
              _this4.toggleInputUploadingLoader(template);
              filesToUpload = [];
              files = [];
              files = _this4.filesToUpload[template === null || template === void 0 ? void 0 : template.id];
              filesToUpload = (_this4$filesToUpload$ = _this4.filesToUpload[template === null || template === void 0 ? void 0 : template.id]) === null || _this4$filesToUpload$ === void 0 ? void 0 : _this4$filesToUpload$.filter(function (f) {
                return f.isUploaded != true;
              });

              // ?- Check for reuploads
              if (!((_files = files) !== null && _files !== void 0 && (_files = _files.filter(function (f) {
                return f.errors.length == 0;
              })) !== null && _files !== void 0 && _files.every(function (f) {
                return f.isUploaded == true;
              }))) {
                _context.next = 15;
                break;
              }
              // Case of reupload
              // empty the files
              _this4.toggleInputUploadingLoader(template, false);
              _this4.removeAllFiles(template, isSur, false);
              setTimeout(function () {
                _this4.openFileDialog('hidden' + (template === null || template === void 0 ? void 0 : template.id.toString()));
              }, 1000);
              return _context.abrupt("return");
            case 15:
              if (filesToUpload) {
                _context.next = 17;
                break;
              }
              return _context.abrupt("return");
            case 17:
              i = 0;
            case 18:
              if (!(i < filesToUpload.length)) {
                _context.next = 26;
                break;
              }
              // upload each file
              if (i == filesToUpload.length - 1) {
                setTimeout(function () {
                  var _this4$isLoadingInput;
                  if ((_this4$isLoadingInput = _this4.isLoadingInputUpload[template === null || template === void 0 ? void 0 : template.id]) !== null && _this4$isLoadingInput !== void 0 && _this4$isLoadingInput.hasUploadError) {
                    _this4.$toasted.show("Certains fichiers n'ont pas pu être envoyés sur le serveur");
                  }
                  _this4.toggleInputUploadingLoader(template, false);
                  // Get files
                  _this4.authBeforeRequest(_this4.getFiles);
                }, 3000);
              }
              if (!(filesToUpload[i].isUploaded || filesToUpload[i].errors.length > 0)) {
                _context.next = 22;
                break;
              }
              return _context.abrupt("continue", 23);
            case 22:
              _this4.uploadFileV2(template, filesToUpload[i], i, isSur);
              //
            case 23:
              i++;
              _context.next = 18;
              break;
            case 26:
              _context.next = 33;
              break;
            case 28:
              _context.prev = 28;
              _context.t0 = _context["catch"](1);
              console.error(_context.t0);
              _this4.toggleInputUploadingLoader(template, false);
              _this4.$toasted.show("Oups, une erreur s'est produite");
            case 33:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[1, 28]]);
      }))();
    },
    toggleInputLoader: function toggleInputLoader(id) {
      var isLoading = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var data = _objectSpread({}, this.isLoadingInput);
      // data[id] = data[id] != null ? !data[id] : isLoading;
      data[id] = isLoading;
      this.isLoadingInput = data;
    },
    toggleInputFileState: function toggleInputFileState(_ref10, field, value) {
      var id = _ref10.id;
      var index = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : -1;
      var isSur = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      isSur = this.isSur;
      var data = _objectSpread({}, this.filesToUpload);
      var list = data[id];
      if (!list) return;
      if (index == -1) return;
      var item = list[index];
      if (!item) return;
      item[field] = value;
      list[index] = item;
      data = _objectSpread(_objectSpread({}, data), {}, {
        list: list
      });
      if (data) {
        this.filesToUpload = data;
      }
    },
    toggleInputFileLoadingState: function toggleInputFileLoadingState(_ref11, isLoading, index, isSur) {
      var id = _ref11.id;
      // console.log("** toggleInputFileLoadingState", id, isLoading, index, isSur);
      this.toggleInputFileState({
        id: id
      }, 'isLoading', isLoading, index, isSur);
    },
    toggleInputUploadingLoader: function toggleInputUploadingLoader(_ref12) {
      var id = _ref12.id;
      var isLoading = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;
      var data = _objectSpread({}, this.isLoadingInputUpload);
      // data[id] = data[id] != null ? !data[id] : isLoading;
      if (!data[id]) {
        data[id] = {};
      }
      if (index == -1) {
        data[id] = _objectSpread(_objectSpread({}, data[id]), {}, {
          isLoading: isLoading
        });
      } else {
        data[id][index] = isLoading;
        data[id] = _objectSpread({}, data[id]);
      }
      this.isLoadingInputUpload = data;
    },
    toggleInputUploadingState: function toggleInputUploadingState(_ref13, field, value) {
      var id = _ref13.id;
      var data = _objectSpread({}, this.isLoadingInputUpload);
      if (!data[id]) {
        data[id] = {};
      }
      data[id][field] = value;
      data[id] = _objectSpread({}, data[id]);
      this.isLoadingInputUpload = data;
    },
    getFilesTemplates: function getFilesTemplates() {
      var _arguments2 = arguments,
        _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var useCache, cacheValid;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              useCache = _arguments2.length > 0 && _arguments2[0] !== undefined ? _arguments2[0] : true;
              //console.log("getFilesTemplates");
              cacheValid = false; // if(useCache){
              //     cacheValid = this.checkCachedFilesToUpload()
              // }
              if (cacheValid) {
                _context2.next = 6;
                break;
              }
              _this5.isLoadingFilesToUpload = true;
              _context2.next = 6;
              return _this5.$axios.get("/api/file-explorer-templates").then(function (res) {
                var _res$data, _res$data$data, _res$data4;
                if (!((_res$data = res.data) !== null && _res$data !== void 0 && _res$data.data)) {
                  var _res$data2;
                  if ((_res$data2 = res.data) !== null && _res$data2 !== void 0 && _res$data2.message) {
                    var _res$data3;
                    _this5.isLoadingFilesToUpload = false;
                    _this5.errorMessage = (_res$data3 = res.data) === null || _res$data3 === void 0 ? void 0 : _res$data3.message;
                  }
                  return;
                }
                var data = (_res$data$data = (_res$data4 = res.data) === null || _res$data4 === void 0 ? void 0 : _res$data4.data) !== null && _res$data$data !== void 0 ? _res$data$data : {};
                _this5.columns = data['columns'];
                _this5._templates = data['templates'];
                _this5._folders = data['folders'];
                _this5._file_tree = data['file_tree'];
                _this5.fileTemplates = _this5._templates;
                localStorage.setItem(_this5.CACHE_STORAGE_KEY, JSON.stringify(_this5.fileToUpload));
              })["catch"](function (err) {
                console.error(err);
                _this5.errorMessage = "Une erreur s'est produite,\n nous n'avons pas pu voir le status des fichiers de la checklist";
                _this5.isLoadingFilesToUpload = false;
              })["finally"](function () {
                _this5.isLoadingFilesToUpload = false;
              });
            case 6:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    checkCachedFilesToUpload: function checkCachedFilesToUpload() {
      var cachedData = localStorage.getItem(this.CACHE_STORAGE_KEY);
      if (cachedData != undefined && cachedData != null) {
        var data = JSON.parse(cachedData);
        if ((data === null || data === void 0 ? void 0 : data.length) > 0) {
          this.fileToUpload = data;
          return true;
        }
        return false;
      } else {
        return false;
      }
    },
    openFileDialog: function openFileDialog(ref) {
      var elm = document.getElementById(ref);
      if (!elm) return;
      elm.click();
    },
    findCategories: function findCategories(rub) {
      return this.sureteFiles.filter(function (el) {
        return el.categorie && el.rubrique === rub;
      }).map(function (el) {
        return el.categorie;
      }).filter(function (el, index, list) {
        return list.indexOf(el) === index && Boolean(el);
      });
    },
    findRubriques: function findRubriques(index) {
      if (index === 0) return this.findClientRubriques;else if (index === 1) return this.findSureteRubriques;else return [];
    },
    chooseFile: function chooseFile() {
      this.choosingCategorie = false;
      this.choosingFile = false;
      this.categoryOfFileToAdd = "";
      this.choosingType = true;
    },
    fullscreen: function fullscreen(evt) {
      evt.target.requestFullscreen();
      this.isFullscreen = true;
      this.$toasted.show('Appuyez sur le boutton eschap pour sortir du mode plein écran');
    },
    preview: function preview(file) {
      this.currentFile = file;
      this.$modal.show('preview');
    },
    removeAllFiles: function removeAllFiles(_ref14) {
      var id = _ref14.id;
      var isSur = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var notif = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var onlyFilesWithError = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var data = _objectSpread({}, this.filesToUpload);
      if (onlyFilesWithError) {
        var list = data[id];
        list = list.filter(function (f) {
          return f.errors.length == 0;
        });
        data[id] = list;
      } else {
        data[id] = [];
      }
      data = _objectSpread({}, data);
      if (data) {
        this.filesToUpload = data;
      }
      this.filesSureteToUpload = _objectSpread({}, this.filesSureteToUpload);
      this.filesToUpload = _objectSpread({}, this.filesToUpload);
      if (notif) {
        this.$toasted.show("Liste vidée");
      }
    },
    removeFile: function removeFile(_ref15, index, isSur) {
      var id = _ref15.id;
      var file_name = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
      isSur = this.isSur;
      var data = _objectSpread({}, this.filesToUpload);
      var list = data[id];
      if (!list) return;
      if (list[index] == null) return;
      // if(list[index].isLoading == true) return;
      list.splice(index, 1);
      data = _objectSpread(_objectSpread({}, data), {}, {
        list: list
      });
      if (data) {
        this.filesToUpload = data;
      }
      this.$toasted.show("Fichier " + file_name + " supprimé");
    },
    getFiles: function getFiles() {
      var _this6 = this;
      this.isLoading = true;
      _services_proxy_service__WEBPACK_IMPORTED_MODULE_1__["default"].proxyEbapis({
        url: this.connectsHost + 'api/get-files',
        method: 'POST',
        data: {
          file_identity: this.doss_id
        }
      })
      //this.$axios.post(this.connectsHost + 'api/get-files', { file_identity: this.doss_id })
      .then(function (res) {
        var _res$data$data2, _res$data$data3;
        res.data = JSON.parse(res.data);
        if (((_res$data$data2 = res.data.data) === null || _res$data$data2 === void 0 ? void 0 : _res$data$data2.length) > 0 || ((_res$data$data3 = res.data.data) === null || _res$data$data3 === void 0 ? void 0 : _res$data$data3.length) != null) {
          _this6.files = res.data.data.filter(function (file) {
            return file.file_template_id;
          });
        }
        _this6.isLoading = false;
      })["catch"](function (err) {
        console.error(err);
        _this6.isLoading = false;
      });
    },
    uploadFileV2: function uploadFileV2(template, uploadItem, index) {
      var _this7 = this;
      var isSur = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      // console.log("Uploading File", index, uploadItem)

      if (!template || !(template !== null && template !== void 0 && template.id)) {
        this.$toasted.show("Dossier non trouvé. Veuiller rafraichir la page svp");
        return;
      }
      if (!uploadItem) {
        this.$toasted.show("Fichier non trouvé. Veuiller rafraichir la page svp");
        return;
      }
      if (!this.user) {
        this.$toasted.show("Souci d'authentification. Veuiller rafraichir la page svp");
        return;
      }
      //
      this.toggleInputFileLoadingState(template, true, index, isSur);
      this.toggleInputFileState(template, 'hasUploadError', false, index, isSur);
      this.toggleInputFileState(template, 'uploadErrors', [], index, isSur);
      this.toggleInputFileState(template, 'uploadPercentage', 0, index, isSur);
      this.toggleInputUploadingState(template, 'hasUploadError', false, isSur);
      var data = new FormData();
      //
      data.append('user_id', this.user.user_id);
      data.append('entity_id', this.user.type_entite);
      data.append('entity_name', this.user.nom_entite);
      data.append('application_id', this.user.app_id);
      data.append('file_identity', this.doss_id);
      //
      data.append('file_template_id', template === null || template === void 0 ? void 0 : template.id);
      //
      data.append('file_url', uploadItem.file);
      data.append('file_name', uploadItem.name);
      data.append('file_ext', uploadItem.ext);
      data.append('parameters', JSON.stringify({
        url: this.connectsHost + 'api/upload-file-v2',
        method: 'POST'
      }));
      var headers = {
        'Content-Type': 'multipart/form-data'
      };
      _services_proxy_service__WEBPACK_IMPORTED_MODULE_1__["default"].proxyRequestByFormData(data, {
        callback: function (progressEvent) {
          var uploadPercentage = parseInt(Math.round(progressEvent.loaded / progressEvent.total * 100));
          this.toggleInputFileState(template, 'uploadPercentage', uploadPercentage, index, isSur);
        }.bind(this)
      })
      //this.$axios.post(
      //     this.connectsHost + 'api/upload-file-v2',
      //     data,
      //     {
      //         headers,
      //         onUploadProgress: function( progressEvent ) {
      //             let uploadPercentage = parseInt(Math.round( (progressEvent.loaded/progressEvent.total) * 100));
      //             this.toggleInputFileState(template, 'uploadPercentage', uploadPercentage, index, isSur)
      //         }.bind(this)}
      //     )
      .then(function (res) {
        var _file$file_url$split$;
        res.data = JSON.parse(res.data);
        var file = res.data.data;
        var ext = (_file$file_url$split$ = file.file_url.split('.').at(-1)) === null || _file$file_url$split$ === void 0 ? void 0 : _file$file_url$split$.toLowerCase();
        file.ext = ext;
        _this7.toggleInputFileState(template, 'isUploaded', true, index, isSur);
        _this7.currentFile = _objectSpread({}, file);
        // this.authBeforeRequest(this.getFiles)
        // this.selectedUpload = this.selectedUpload?.filter(el => el.label != file.file_name)
        // this.$toasted.show(res.data.message)

        // this.uploadLoading[index] = false
      })["catch"](function (err) {
        console.error(err);
        // this.uploadLoading[index] = false
        _this7.toggleInputFileState(template, 'isUploaded', false, index, isSur);
        _this7.toggleInputFileState(template, 'hasUploadError', true, index, isSur);
        _this7.toggleInputFileState(template, 'uploadPercentage', 100, index, isSur);
        _this7.toggleInputUploadingState(template, 'hasUploadError', true, isSur);
        _this7.toggleInputFileState(template, 'uploadErrors', [{
          code: 500,
          message: "Erreur sur l'upload."
        }], index, isSur);
      });
    },
    uploadFile: function uploadFile(data, index) {
      var _this8 = this;
      var sur = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      // this.uploadLoading[index] = true
      // console.log("uploadFile")
      // for (var pair of data.entries()) {
      //     console.log(pair[0]+ ', ' + pair[1]);
      // }

      var headers = {
        'Content-Type': 'multipart/form-data'
      };
      _services_proxy_service__WEBPACK_IMPORTED_MODULE_1__["default"].proxyRequestByFormData(data, {
        callback: function callback() {}
      })
      //this.$axios.post(this.connectsHost + 'api/upload-file', data, headers)
      .then(function (res) {
        var _file$file_url$split$2, _this8$selectedUpload;
        res.data = JSON.parse(res.data);
        if (sur) _this8.selectedDirs[index].file_name = null;else _this8.selectedDirs[index].file_name = null;
        var file = res.data.data;
        var ext = (_file$file_url$split$2 = file.file_url.split('.').at(-1)) === null || _file$file_url$split$2 === void 0 ? void 0 : _file$file_url$split$2.toLowerCase();
        file.ext = ext;
        _this8.currentFile = _objectSpread({}, file);
        _this8.authBeforeRequest(_this8.getFiles);
        _this8.selectedUpload = (_this8$selectedUpload = _this8.selectedUpload) === null || _this8$selectedUpload === void 0 ? void 0 : _this8$selectedUpload.filter(function (el) {
          return el.label != file.file_name;
        });
        _this8.$toasted.show(res.data.message);

        // this.uploadLoading[index] = false
      })["catch"](function (err) {
        console.error(err);
        // this.uploadLoading[index] = false
      });
    },
    updateFile: function updateFile(data, index) {
      var _this9 = this;
      this.uploadLoading[index] = true;
      var headers = {
        'Content-Type': 'multipart/form-data'
      };
      _services_proxy_service__WEBPACK_IMPORTED_MODULE_1__["default"].proxyRequestByFormData(data, {
        callback: function callback() {}
      })
      //this.$axios.post(this.connectsHost + 'api/update-file', data, headers)
      .then(function (res) {
        var _file$file_url$split$3;
        res.data = JSON.parse(res.data);
        var file = res.data.data;
        var ext = (_file$file_url$split$3 = file.file_url.split('.').at(-1)) === null || _file$file_url$split$3 === void 0 ? void 0 : _file$file_url$split$3.toLowerCase();
        file.ext = ext;
        _this9.currentFile = _objectSpread({}, file);
        _this9.authBeforeRequest(_this9.getFiles);
        _this9.$toasted.show(res.data.message);
        _this9.uploadLoading[index] = false;
        _this9.updating[index] = !Boolean(_this9.updating[index]);
        _this9.updating = _objectSpread({}, _this9.updating);
      })["catch"](function (err) {
        console.error(err);
        _this9.uploadLoading[index] = false;
      });
    },
    deleteFile: function deleteFile(data, upload, index) {
      var _this0 = this;
      this.deleteLoading[index] = true;
      this.currentFile = upload.file;
      var headers = {
        'Content-Type': 'multipart/form-data'
      };
      _services_proxy_service__WEBPACK_IMPORTED_MODULE_1__["default"].proxyEbapis({
        url: this.connectsHost + 'api/delete-file',
        method: 'POST',
        data: data
      })
      //this.$axios.post(this.connectsHost + 'api/delete-file', data, headers)
      .then(function (res) {
        res.data = JSON.parse(res.data);
        _this0.$toasted.show(res.data.message);
        _this0.deleteLoading[index] = false;
        _this0.getFiles();
        // delete upload.file
        _this0.fileToUpload.push(upload);
        _this0.selectedUpload = _this0.selectedUpload.filter(function (el) {
          return el.label != upload.label;
        });
        _this0.$toasted.show(res.data.message);
        _this0.currentFile = null;
      })["catch"](function (err) {
        console.error(err);
        _this0.deleteLoading[index] = false;
      });
    },
    loadWithError: function loadWithError(err) {
      // window.location.href = "/login" ;
    },
    authBeforeUpload: function authBeforeUpload(upload, _ref16, index) {
      var _this1 = this;
      var ref = _ref16.ref,
        droppedFiles = _ref16.droppedFiles;
      var isSur = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var updating = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      isSur = this.isSur;
      this.toggleInputLoader(upload === null || upload === void 0 ? void 0 : upload.id);
      _services_auth_service__WEBPACK_IMPORTED_MODULE_0__["default"].loadUserData().then(function (res) {
        try {
          var _data$upload$id;
          var user = res.data;
          _this1.user = user;
          // const limitSize = 51200 * 1024
          var files = [];
          var uploadedFiles = droppedFiles !== null && droppedFiles !== void 0 ? droppedFiles : _this1.$refs[ref][0].files;

          // ?- only take $fileCountMaxLimitPerUpload files per upload
          var _loop = function _loop() {
              var _this1$filesToUpload$;
              // ?- too many files
              if (files.length > _this1.fileCountMaxLimitPerUpload) {
                _this1.$toasted.show("Vous ne pouvez pas envoyer plus de " + _this1.fileCountMaxLimitPerUpload + " fichier" + (_this1.fileCountMaxLimitPerUpload > 1 ? 's' : '') + " à la fois");
                return 0; // break
              }
              var uploadedFile = uploadedFiles[i];
              if (!uploadedFile) return 1; // continue
              // ?- don't allow doublons in current list
              if (files.find(function (f) {
                return f.name === (uploadedFile === null || uploadedFile === void 0 ? void 0 : uploadedFile.name) && f.type === (uploadedFile === null || uploadedFile === void 0 ? void 0 : uploadedFile.type) && f.size === (uploadedFile === null || uploadedFile === void 0 ? void 0 : uploadedFile.size);
              })) {
                _this1.$toasted.show("Le fichier " + uploadedFile.name + " est déjà ajouté");
                return 1; // continue
              }
              // ?- don't allow doublons in saved lists

              var existingFiles = (_this1$filesToUpload$ = _this1.filesToUpload[upload === null || upload === void 0 ? void 0 : upload.id]) !== null && _this1$filesToUpload$ !== void 0 ? _this1$filesToUpload$ : [];
              if (existingFiles.find(function (f) {
                return f.file.name === uploadedFile.name && f.file.type === uploadedFile.type && f.file.size === uploadedFile.size;
              })) {
                _this1.$toasted.show("Le fichier " + uploadedFile.name + " est déjà ajouté");
                return 1; // continue
              }
              files.push(uploadedFile);
            },
            _ret;
          for (var i = 0; i < uploadedFiles.length; i++) {
            _ret = _loop();
            if (_ret === 0) break;
            if (_ret === 1) continue;
          }
          // if(uploadedFiles.length > this.fileCountMaxLimitPerUpload){
          // }

          // console.log("document client");
          var data = _objectSpread({}, _this1.filesToUpload);
          var list = (_data$upload$id = data[upload === null || upload === void 0 ? void 0 : upload.id]) !== null && _data$upload$id !== void 0 ? _data$upload$id : [];
          var fileItems = [];
          var maxFilesToAdd = _this1.fileCountMaxLimitPerUpload - list.length;
          if (maxFilesToAdd <= 0) {
            _this1.$toasted.show("Limite du nombre de fichiers par upload atteint");
            _this1.toggleInputLoader(upload === null || upload === void 0 ? void 0 : upload.id, false);
            return;
          }
          // format filelist

          for (var _i = 0; _i < maxFilesToAdd; _i++) {
            var _files$_i;
            if (_i >= files.length && files.length >= _this1.fileCountMaxLimitPerUpload) {
              _this1.$toasted.show("Le nombre de fichiers a atteint la limite autorisée ");
              break;
            }
            if (_i >= files.length) {
              // All files have been uploaded
              break;
            }
            var fileNameExt = (_files$_i = files[_i]) === null || _files$_i === void 0 || (_files$_i = _files$_i.name) === null || _files$_i === void 0 ? void 0 : _files$_i.split('.');
            // let src = URL.createObjectURL(files[i]);
            fileItems.push({
              file: files[_i],
              name: fileNameExt[0],
              // src,
              ext: fileNameExt.at(-1),
              errors: [],
              uploadErrors: [],
              isUploaded: null,
              hasUploadError: false
            });
          }
          data[upload === null || upload === void 0 ? void 0 : upload.id] = [].concat(_toConsumableArray(list), fileItems);
          _this1.filesToUpload = data;

          //

          var hasError = false;
          for (var _index = 0; _index < files.length; _index++) {
            var _file$name;
            //
            var file = files[_index];
            //
            var errors = [];
            if (!_this1.authorizedExt.includes(file === null || file === void 0 || (_file$name = file.name) === null || _file$name === void 0 ? void 0 : _file$name.split('.').at(-1))) {
              errors.push({
                code: 401,
                message: "Ce type de fichier n'est pas autorisé"
              });
              // this.$toasted.show("Le type de fichier choisi n'est pas autorisé. Veuillez choisir un autre fichier")
            }
            if (_this1.limitSize < file.size) {
              errors.push({
                code: 413,
                message: "Fichier trop volumineux (taille maximum autorisée : " + (_this1.limitSize / 1048576).toFixed(0) + " Mo)"
              });
              // this.$toasted.show("La taille de ce fichier est plus élévé que la taille autorisée de 50 Mo.")
            }
            if (errors.length > 0) {
              var _data$upload$id2, _list$_index;
              hasError = true;
              //
              var _data = _objectSpread({}, _this1.filesToUpload);
              var _list = (_data$upload$id2 = _data[upload === null || upload === void 0 ? void 0 : upload.id]) !== null && _data$upload$id2 !== void 0 ? _data$upload$id2 : {};
              var item = (_list$_index = _list[_index]) !== null && _list$_index !== void 0 ? _list$_index : null;
              if (!item) continue;
              item = _objectSpread(_objectSpread({}, item), {}, {
                errors: errors
              });
              _list[_index] = item;
              _this1.filesToUpload = _data;
              continue;
            }
          }
          if (hasError) {
            _this1.toggleInputLoader(upload === null || upload === void 0 ? void 0 : upload.id, false);
            _this1.$toasted.show("Certains fichiers présentent des erreurs.");
            return;
          }
          _this1.toggleInputLoader(upload === null || upload === void 0 ? void 0 : upload.id, false);
        } catch (error) {
          _this1.isLoading = false;
          _this1.$toasted.show("Une erreur s'est produite");
          _this1.toggleInputLoader(upload === null || upload === void 0 ? void 0 : upload.id, false);
          console.error(error);
          // throw error;
        }
      })["catch"](function (err) {
        // this.uploadLoading[index] = false
        _this1.isLoading = false;
        _this1.$toasted.show("Une erreur s'est produite");
        _this1.toggleInputLoader(upload === null || upload === void 0 ? void 0 : upload.id, false);
        console.error(err);
        _this1.loadWithError(err);
      })["finally"](function () {
        _this1.toggleInputLoader(upload === null || upload === void 0 ? void 0 : upload.id, false);
      });
    },
    startUpdating: function startUpdating(index) {
      this.updating[index] = !Boolean(this.updating[index]);
      this.updating = _objectSpread({}, this.updating);
    },
    authBeforeUpdate: function authBeforeUpdate(_ref17, index) {
      var _this10 = this;
      var id = _ref17.id,
        name = _ref17.name;
      // if (updating) this.updating[index] = true
      this.uploadLoading[index] = true;
      _services_auth_service__WEBPACK_IMPORTED_MODULE_0__["default"].loadUserData().then(function (res) {
        var user = res.data;
        var file = _this10.$refs[id][0].files[0];
        var data = new FormData();
        data.append('user_id', user.user_id);
        data.append('new_file', name);
        data.append('file_url', file);
        data.append('entity_id', user.type_entite);
        data.append('entity_name', user.nom_entite);
        data.append('application_id', user.app_id);
        data.append('file_identity', _this10.doss_id);
        data.append('parameters', JSON.stringify({
          url: _this10.connectsHost + 'api/update-file',
          method: 'POST'
        }));
        _this10.uploadLoading[index] = false;
        _this10.updateFile(data, index);
      })["catch"](function (err) {
        _this10.uploadLoading[index] = false;
        console.error(err);
        _this10.loaloadWithError(err);
      });
    },
    setExplorferOn: function setExplorferOn() {
      this.$modal.show('explorer');
      // window.$('#explorer').modal('show');
    },
    addNewFile: function addNewFile() {
      if (this.adding) return;
      this.adding = true;
    },
    addFileType: function addFileType() {
      if (this.fileToAdd) {
        this.selectedUpload.unshift(this.fileToAdd);
        this.fileToAdd = "";
        this.typeOfFileToAdd = "";
        this.chooseFile();
        this.adding = false;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/manage/ChecklistEditor_rows.vue?vue&type=template&id=74a06818":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/manage/ChecklistEditor_rows.vue?vue&type=template&id=74a06818 ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "container-fluid"
  }, [_vm._m(0), _vm._v(" "), _c("main", {
    staticClass: "row ms-2"
  }, [_c("div", {
    staticClass: "col-12 p-3 bg-white"
  }, [_c("div", {
    staticClass: "row"
  }, [_vm._l(_vm.columns, function (column, col_idx) {
    return _c("section", {
      key: col_idx,
      staticClass: "col"
    }, [_c("h5", [_vm._v("\n                        " + _vm._s(column.name) + "\n                    ")]), _vm._v(" "), _c("div", {
      staticClass: "row p-2",
      staticStyle: {
        "border-top": "1px solid #dee2e6",
        "border-right": "1px solid #dee2e6"
      }
    }, _vm._l(column.rows, function (row, row_idx) {
      return _c("div", {
        key: row_idx,
        staticClass: "d-flex justify-content-between align-items-center"
      }, [_c("span", [_vm._v("\n                                " + _vm._s(row.name) + "\n                            ")]), _vm._v(" "), _c("div", [_c("span", {
        staticClass: "transition animation-jolt text-warning p-1 rounded no-shrink cursor-pointer",
        staticStyle: {
          visibility: "visible"
        },
        attrs: {
          title: "Modifier le type " + row.name
        }
      }, [_c("i", {
        staticClass: "icofont-ui-edit"
      })])])]);
    }), 0), _vm._v(" "), _vm.selectedColumnId == column.id ? [_c("li", {
      staticClass: "list-group-item p-1 mt-1 rounded"
    }, [_c("h4", [_vm._v("Ajouter un nouveau type ")]), _vm._v(" "), _c("div", {
      staticClass: "d-flex gap-1"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.newRowInputField,
        expression: "newRowInputField"
      }],
      staticClass: "form-control",
      attrs: {
        type: "text",
        required: "",
        placeholder: "Nom du type"
      },
      domProps: {
        value: _vm.newRowInputField
      },
      on: {
        keydown: function keydown($event) {
          if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
          return _vm.saveRowInput.apply(null, arguments);
        },
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.newRowInputField = $event.target.value;
        }
      }
    }), _vm._v(" "), _c("a", {
      staticClass: "btn btn-success",
      on: {
        click: _vm.saveRowInput
      }
    }, [_c("i", {
      staticClass: "icofont-save"
    })])]), _vm._v(" "), _vm.newRowInputError ? _c("b", {
      staticClass: "text-danger"
    }, [_vm._v("\n                                " + _vm._s(_vm.$newRowInputError) + "\n                            ")]) : _vm._e()]), _vm._v(" "), _c("a", {
      staticClass: "btn btn-danger mt-3 d-flex gap-2 justify-content-center align-items-center",
      on: {
        click: _vm.closeRowInput
      }
    }, [_c("i", {
      staticClass: "icofont-close"
    }), _vm._v(" Fermer")])] : _c("a", {
      staticClass: "btn btn-secondary mt-3 d-flex gap-2 justify-content-center align-items-center",
      on: {
        click: function click($event) {
          return _vm.showRowInput(column);
        }
      }
    }, [_c("i", {
      staticClass: "uil-plus-circle"
    }), _vm._v(" Ajouter un type")])], 2);
  }), _vm._v(" "), _c("section", {
    staticClass: "col"
  }, [_c("h5", [_vm._v("\n                        Documents\n                    ")]), _vm._v(" "), _c("div", {
    staticClass: "row p-2 border-top"
  }, _vm._l(_vm.fileTemplates, function (template, template_idx) {
    return _c("div", {
      key: template_idx,
      staticClass: "d-flex justify-content-between align-items-center"
    }, [_c("span", [_vm._v("\n                                " + _vm._s(template.name) + "\n                            ")]), _vm._v(" "), _c("div", [_c("span", {
      staticClass: "transition animation-jolt text-warning p-1 rounded no-shrink cursor-pointer",
      staticStyle: {
        visibility: "visible"
      },
      attrs: {
        title: "Modifier le type " + template.name
      }
    }, [_c("i", {
      staticClass: "icofont-ui-edit"
    })])])]);
  }), 0)])], 2)])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("div", {
    staticClass: "page-title-box"
  }, [_c("h3", {}, [_vm._v("Editeur de checklist")]), _vm._v(" "), _c("div", {
    staticClass: "page-title-right"
  })])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/manage/ChecklistEditor_rows.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/manage/ChecklistEditor_rows.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ChecklistEditor_rows_vue_vue_type_template_id_74a06818__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChecklistEditor_rows.vue?vue&type=template&id=74a06818 */ "./resources/js/components/manage/ChecklistEditor_rows.vue?vue&type=template&id=74a06818");
/* harmony import */ var _ChecklistEditor_rows_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChecklistEditor_rows.vue?vue&type=script&lang=js */ "./resources/js/components/manage/ChecklistEditor_rows.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ChecklistEditor_rows_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChecklistEditor_rows_vue_vue_type_template_id_74a06818__WEBPACK_IMPORTED_MODULE_0__.render,
  _ChecklistEditor_rows_vue_vue_type_template_id_74a06818__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/manage/ChecklistEditor_rows.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/manage/ChecklistEditor_rows.vue?vue&type=script&lang=js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/manage/ChecklistEditor_rows.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChecklistEditor_rows_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ChecklistEditor_rows.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/manage/ChecklistEditor_rows.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChecklistEditor_rows_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/manage/ChecklistEditor_rows.vue?vue&type=template&id=74a06818":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/manage/ChecklistEditor_rows.vue?vue&type=template&id=74a06818 ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ChecklistEditor_rows_vue_vue_type_template_id_74a06818__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ChecklistEditor_rows_vue_vue_type_template_id_74a06818__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ChecklistEditor_rows_vue_vue_type_template_id_74a06818__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ChecklistEditor_rows.vue?vue&type=template&id=74a06818 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/manage/ChecklistEditor_rows.vue?vue&type=template&id=74a06818");


/***/ })

}]);