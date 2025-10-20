"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_offview_microfinance_cofina_memo_annexes_CheckList_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/memo/annexes/CheckList.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/memo/annexes/CheckList.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _services_connects_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../../../services/connects.service */ "./resources/js/services/connects.service.js");
/* harmony import */ var _checklist_checklist_client_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checklist/checklist_client.json */ "./resources/js/components/offview/microfinance/cofina/memo/annexes/checklist/checklist_client.json");
/* harmony import */ var _checklist_checklist_surete_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checklist/checklist_surete.json */ "./resources/js/components/offview/microfinance/cofina/memo/annexes/checklist/checklist_surete.json");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
// import ebapis from "@services/ebapis.service";
// import connects from "@services/connects.service";




//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "CheckList",
  props: {
    dossier_credit: Object
  },
  computed: {
    doss_id: function doss_id() {
      var _this$dossier_credit;
      return (_this$dossier_credit = this.dossier_credit) === null || _this$dossier_credit === void 0 ? void 0 : _this$dossier_credit.cred_pub_key;
    },
    hasError: function hasError() {
      return this.errorMessage != null && this.errorMessage != '';
    }
  },
  data: function data() {
    return _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
      // httpHost: "http"
      httpHost: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__["default"].loadableHttpHost(),
      connectsHost: _services_connects_service__WEBPACK_IMPORTED_MODULE_1__["default"].loadablehost(),
      files: [],
      fileTemplates: [],
      checklistTables: [],
      fileChecklistTemplate: [],
      isLoading: true,
      errorMessage: null
    }, "checklistTables", []), "errorMessage", "Erreur sur le tableau"), "fileTemplates", []), "checklistTBHeaders", []), "fileChecklistTemplate", []), "files", []), "folders", []), "HTML_TABLE_BODIES", {}), "used_rowspan_tds", []);
  },
  mounted: function mounted() {
    // Read json reference file
    this.$toasted.show('Creation de la Checklist...');
    this.getFileTemplates();
  },
  methods: {
    generateChecklistHTML: function generateChecklistHTML() {
      var _this = this;
      this.fileChecklistTemplate.forEach(function (table, table_idx) {
        if (_this.HTML_TABLE_BODIES[table_idx]) {
          _this.HTML_TABLE_BODIES[table_idx] = '';
        }
        var innerHtml = '';
        try {
          innerHtml = _this.generateTableContent(table);
        } catch (err) {
          console.error(err);
          _this.$toasted.show('Erreur de compilation ' + table.name);
          innerHtml = "<tr><td class=\"text-center py-2\" colspan='".concat(table.headers.length + table.other_headers.length - 1, "'>Une erreur s'est produite lors de la compilation de la checklist</td></tr>");
        }
        _this.HTML_TABLE_BODIES[table_idx] = innerHtml;
        _this.HTML_TABLE_BODIES = _objectSpread({}, _this.HTML_TABLE_BODIES);
      });
    },
    generateTableContent: function generateTableContent(table) {
      var _table$children,
        _this2 = this;
      var html = '';
      this.used_rowspan_tds = [];
      table === null || table === void 0 || (_table$children = table.children) === null || _table$children === void 0 || _table$children.forEach(function (folder) {
        html += _this2.generateTableRowTemplate(table, folder);
      });
      return html;
    },
    generateTableRowTemplate: function generateTableRowTemplate(table, folder) {
      var _this3 = this;
      var template = "";
      if (folder.files) {
        var childElement = '';
        folder.files.forEach(function (file, file_idx) {
          childElement += "<tr>";
          //
          var headers = table.headers.slice(0, table.headers.length - 2);
          var _loop = function _loop() {
            var header = headers[header_idx];
            // let td = this.generateTD();
            // let td = `<td rowspan='${folder.rowspan ?? 1}'>${header}</td>`;
            var tdatas = [];
            var td = '';
            // On last index is a file
            if (header_idx == headers.length - 1) {
              var _this3$files, _this3$files$filter, _this3$files2, _uploadedFiles$;
              // ?- This is a file

              td += "<td id=\"".concat('h_' + header_idx + '_ci_' + file_idx + '_fi_' + file.id, "\">\n                                    ").concat(file_idx + 1, "\n                                    </td>");
              var uploadedFilesCount = (_this3$files = _this3.files) === null || _this3$files === void 0 || (_this3$files = _this3$files.filter(function (f) {
                return f.file_template_id == file.id;
              })) === null || _this3$files === void 0 ? void 0 : _this3$files.length;
              td += "<td id=\"".concat('h_' + header_idx + '_fi_' + file.id, "\">").concat(file.name, " ").concat(uploadedFilesCount > 0 ? '<b> - (' + uploadedFilesCount + ' fichier' + (uploadedFilesCount > 1 ? 's' : '') + ' uploadé' + (uploadedFilesCount > 1 ? 's' : '') + ')</b>' : '', " </td>");
              tdatas.push(td);

              // ?- Adding where the file was uploaded or not

              var uploadedFiles = (_this3$files$filter = (_this3$files2 = _this3.files) === null || _this3$files2 === void 0 ? void 0 : _this3$files2.filter(function (f) {
                return f.file_template_id == file.id;
              })) !== null && _this3$files$filter !== void 0 ? _this3$files$filter : [];
              var fileCount = uploadedFiles.length;
              var uploadedFile = (_uploadedFiles$ = uploadedFiles[0]) !== null && _uploadedFiles$ !== void 0 ? _uploadedFiles$ : null;
              var roles = [];
              roles = uploadedFiles.map(function (f) {
                return f.user_role;
              });
              // roles = [...new Set(roles)]
              var _loop2 = function _loop2() {
                var role_header = table.other_headers[other_header_idx];
                var isUploadedByThisRole = roles.includes(role_header);
                var uploadCount = roles.filter(function (f) {
                  return f == role_header;
                }).length;

                // td = `<td>${role_header}</td>`
                td = "<td id=\"".concat('h_' + header_idx + '_fi_' + file.id + '_oh_' + other_header_idx, "\">\n                                            <center");
                if (isUploadedByThisRole) {
                  td += " title=\"Le ".concat(role_header, " a upload\xE9 ").concat(uploadCount, " Fichiers\"");
                }
                td += ">\n                                            <input\n                                                class=\"checkbox\"\n                                                type=\"checkbox\"\n                                                onclick=\"return false;\"";
                if (isUploadedByThisRole) {
                  td += 'checked="true" />';
                  // td += `<span ">
                  //             <br />
                  //             ${uploadCount}
                  //         </span>`;
                }
                td += " </center>\n                                        </td>";
                tdatas.push(td);
              };
              for (var other_header_idx = 0; other_header_idx < table.other_headers.length - 1; other_header_idx++) {
                _loop2();
              }
              td = "<td id=\"".concat('h_' + header_idx + '_fi_' + file.id + '_oh_autre', "\">\n                                        <center>\n                                        <input\n                                            class=\"checkbox\"\n                                            type=\"checkbox\"\n                                            onclick=\"return false;\"\n                                    ");
              var filesUploadedByOthers = uploadedFiles === null || uploadedFiles === void 0 ? void 0 : uploadedFiles.filter(function (f) {
                return f.uploaded_by_other == true;
              });
              var isFileUploadedByOther = filesUploadedByOthers.length > 0;
              if (isFileUploadedByOther) {
                var _filesUploadedByOther;
                // add additional other line
                td += "checked='true'/>";
                td += "<span>\n                                                <br />\n                                                ".concat((_filesUploadedByOther = filesUploadedByOthers[0]) === null || _filesUploadedByOther === void 0 ? void 0 : _filesUploadedByOther.user_role, "\n                                            </span>");
                // td += "Autre";
              }
              td += " </center>\n                                    </td>";
              tdatas.push(td);
            } else {
              // ?- This is a folder
              var elm = folder;
              for (var h_idx = headers.length - 2; h_idx >= 0; h_idx--) {
                //
                if (file_idx == 0) {
                  if (h_idx == header_idx) {
                    // td += `<td >${elm.name}</td>`;
                    td = "<td id=\"".concat('h_' + header_idx + 'fo_' + elm.id, "\" rowspan=\"").concat(elm.rowspan, "\">").concat(elm.name, "</td>");
                    if (!_this3.used_rowspan_tds.includes(td)) {
                      tdatas.push(td);
                      _this3.used_rowspan_tds.push(td);
                    }
                  }
                  var parent = _this3.folders.find(function (item) {
                    return item.id == elm.parent_id;
                  });
                  if (parent) {
                    elm = parent;
                  }
                }
              }
              // td += `<td >${elm.name}</td>`;
            }

            // ?- Filter and unify the table rows
            var _tdatas = _toConsumableArray(new Set(tdatas));
            childElement += _tdatas.join('');
          };
          for (var header_idx = 0; header_idx < headers.length; header_idx++) {
            _loop();
          }
          childElement += '</tr>';
        });
        template += childElement;
      } else {
        if (folder.children) {
          folder.children.forEach(function (foldr) {
            template += _this3.generateTableRowTemplate(table, foldr);
          });
        }
      }
      return template;
    },
    getFileTemplates: function getFileTemplates() {
      var _this4 = this;
      // console.log("**getFileTemplates");
      this.$axios.get("/api/file-checklist-templates").then(function (res) {
        var _res$data, _res$data$data$tables, _res$data$data$folder;
        if (!((_res$data = res.data) !== null && _res$data !== void 0 && _res$data.data)) {
          var _res$data2;
          if ((_res$data2 = res.data) !== null && _res$data2 !== void 0 && _res$data2.message) {
            var _res$data3;
            _this4.isLoading = false;
            _this4.errorMessage = (_res$data3 = res.data) === null || _res$data3 === void 0 ? void 0 : _res$data3.message;
          }
          return;
        }
        _this4.fileChecklistTemplate = (_res$data$data$tables = res.data.data.tables) !== null && _res$data$data$tables !== void 0 ? _res$data$data$tables : [];
        _this4.folders = (_res$data$data$folder = res.data.data.folders) !== null && _res$data$data$folder !== void 0 ? _res$data$data$folder : [];
        // this.fileTemplates = res.data.data;
        // console.log("fileTemplates**");
        // console.log(this.fileTemplates);

        _this4.generateChecklistHTML();
      })["catch"](function (err) {
        console.error(err);
        console.dir(err);
        _this4.errorMessage = "Une erreur s'est produite,\n nous n'avons pas pu voir le status des fichiers de la checklist";
        _this4.isLoading = false;
      })["finally"](function () {
        _this4.isLoading = false;
        _this4.getFiles();
      });
    },
    getFiles: function getFiles() {
      var _this5 = this;
      this.$toasted.show('Recherche des fichiers...');
      this.isLoading = true;
      this.errorMessage = null;
      this.$axios.post(this.connectsHost + "api/get-files", {
        file_identity: this.doss_id
      }).then(function (res) {
        var _res$data4;
        res.data = JSON.parse(res.data);
        if (!((_res$data4 = res.data) !== null && _res$data4 !== void 0 && _res$data4.data)) {
          var _res$data5;
          _this5.isLoading = false;
          _this5.errorMessage = (_res$data5 = res.data) === null || _res$data5 === void 0 ? void 0 : _res$data5.message;
          return;
        }
        //
        _this5.files = res.data.data.filter(function (file) {
          return file.file_template_id;
        });
        // console.log("got files", this.files)
        _this5.$axios.post("/api/file-uploader-role", {
          files: _this5.files
        }).then(function (res) {
          var _res$data6;
          if (!((_res$data6 = res.data) !== null && _res$data6 !== void 0 && _res$data6.data)) {
            var _res$data7;
            if ((_res$data7 = res.data) !== null && _res$data7 !== void 0 && _res$data7.message) {
              var _res$data8;
              _this5.isLoading = false;
              _this5.errorMessage = (_res$data8 = res.data) === null || _res$data8 === void 0 ? void 0 : _res$data8.message;
            }
            return;
          }
          _this5.files = res.data.data;
          // console.log("got files with uploader role", this.files)
        })["catch"](function (err) {
          console.error(err);
          console.dir(err);
          _this5.errorMessage = "Une erreur s'est produite,\n nous n'avons pas pu voir le status des fichiers de la checklist";
          _this5.isLoading = false;
        })["finally"](function () {
          _this5.generateChecklistHTML();
          _this5.isLoading = false;
        });
      })["catch"](function (err) {
        console.error(err);
        console.dir(err);
        _this5.isLoading = false;
        _this5.errorMessage = "Une erreur s'est produite,\n nous n'avons pas pu accéder à la checklist";
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/memo/annexes/CheckList.vue?vue&type=template&id=124c857e&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/memo/annexes/CheckList.vue?vue&type=template&id=124c857e&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "row justify-content-center"
  }, [_c("div", {
    staticClass: "mb-3"
  }, [_c("div", {
    staticClass: "head-memorandum-title mb-4",
    staticStyle: {
      "text-align": "center"
    }
  }, [_vm._v("\n                CheckList\n            ")]), _vm._v(" "), _c("br"), _vm._v(" "), _vm._l(_vm.fileChecklistTemplate, function (table, table_idx) {
    return _c("table", {
      staticClass: "table table-bordered mb-5"
    }, [_c("thead", {
      staticClass: "bg-ed-primary"
    }, [_c("tr", {
      staticClass: "bg-grey"
    }, [_c("th", {
      staticClass: "text-uppercase",
      staticStyle: {
        "text-align": "center"
      },
      attrs: {
        scope: "row",
        colspan: table.headers.length + table.other_headers.length - 2
      }
    }, [_vm._v("\n                            " + _vm._s(table.name) + "\n                        ")]), _vm._v(" "), !_vm.hasError && !_vm.isLoading ? _c("th", {
      staticClass: "cursor-pointer",
      attrs: {
        title: "Rafraichir la checklist"
      },
      on: {
        click: _vm.getFileTemplates
      }
    }, [_c("center", [_c("span", {
      staticClass: "icofont icofont-refresh"
    })])], 1) : _vm._e()]), _vm._v(" "), !_vm.hasError ? [!_vm.isLoading ? _c("tr", _vm._l(table.headers, function (header, i) {
      return _c("th", {
        key: i,
        staticStyle: {
          "text-align": "center",
          "vertical-align": "middle"
        },
        attrs: {
          rowspan: i == table.headers.length - 1 ? 1 : 2,
          colspan: i == table.headers.length - 1 ? table.other_headers.length : 1,
          scope: "row"
        }
      }, [_c("b", [_vm._v(" " + _vm._s(header))])]);
    }), 0) : _vm._e(), _vm._v(" "), !_vm.isLoading ? _c("tr", _vm._l(table.other_headers, function (header) {
      return _c("th", {
        key: header,
        staticStyle: {
          "text-align": "center"
        },
        attrs: {
          scope: "row"
        }
      }, [_c("b", [_vm._v(" " + _vm._s(header))])]);
    }), 0) : _vm._e()] : _vm._e()], 2), _vm._v(" "), _vm.hasError ? [_c("tr", [_c("td", {
      staticClass: "p-5",
      staticStyle: {
        "text-align": "center"
      },
      attrs: {
        scope: "row"
      }
    }, [_vm._v("\n                            " + _vm._s(_vm.errorMessage) + "\n                            "), _c("br"), _vm._v(" "), _c("div", {
      staticClass: "col-12 shead text-center p-0 m-0"
    }, [_c("button", {
      staticClass: "btn mt-3 btn btn-block",
      staticStyle: {
        background: "#7f8c8d",
        color: "white"
      },
      attrs: {
        disabled: _vm.isLoading
      },
      on: {
        click: _vm.getFileTemplates
      }
    }, [_vm.isLoading ? _c("span", [_c("span", {
      staticClass: "spinner-border spinner-border-sm me-2",
      attrs: {
        role: "status",
        "aria-hidden": "true"
      }
    }), _vm._v("\n                                        Rafraichissement en cours..\n                                    ")]) : _c("span", [_c("i", {
      staticClass: "icofont icofont-refresh me-2"
    }), _vm._v("Rafraichir")])]), _vm._v(" "), _c("br")])])])] : [_vm.isLoading ? _c("tbody", [_c("td", {
      attrs: {
        colspan: table.headers.length
      }
    }, [_c("center", [_c("span", {
      staticClass: "spinner-border spinner-border-sm text-orange me-2"
    }), _vm._v("\n                                Chargement des données en cours...\n                            ")])], 1)]) : _c("tbody", {
      domProps: {
        innerHTML: _vm._s(_vm.HTML_TABLE_BODIES[table_idx])
      }
    })]], 2);
  }), _vm._v(" "), _c("br"), _vm._v(" "), _c("div", {
    staticClass: "row my-2"
  }, [_c("div", {
    staticClass: "col-12 shead text-center p-0 m-0"
  }, [_c("button", {
    staticClass: "btn mt-3 btn btn-block",
    staticStyle: {
      background: "#7f8c8d",
      color: "white"
    },
    attrs: {
      disabled: _vm.isLoading
    },
    on: {
      click: _vm.getFileTemplates
    }
  }, [_vm.isLoading ? _c("span", [_c("span", {
    staticClass: "spinner-border spinner-border-sm me-2",
    attrs: {
      role: "status",
      "aria-hidden": "true"
    }
  }), _vm._v("\n                            Rafraichissement en cours..\n                        ")]) : _c("span", [_c("i", {
    staticClass: "icofont icofont-refresh me-2"
  }), _vm._v("Rafraichir")])]), _vm._v(" "), _c("br")])])], 2)])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/memo/annexes/CheckList.vue?vue&type=style&index=0&id=124c857e&lang=css&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/memo/annexes/CheckList.vue?vue&type=style&index=0&id=124c857e&lang=css&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.checkbox[data-v-124c857e] {\r\n    /* Double-sized Checkboxes */\r\n    /* IE */\r\n    /* FF */\r\n    /* Safari and Chrome */\r\n    /* Opera */\r\n    transform: scale(2) !important;\r\n    padding: 10px !important;\n}\n.bg-grey[data-v-124c857e] {\r\n    background-color: #f4f3f3;\r\n    font-weight: 600;\n}\n.memo[data-v-124c857e] {\r\n    margin-top: 10px;\r\n    padding: 10px;\r\n    border: 2px solid #fff;\r\n    font-weight: 550;\r\n    font-size: 16px;\r\n    text-align: left;\r\n    text-transform: uppercase;\r\n    background-color: #34495e;\r\n    color: #fff;\n}\n.head-memorandum-title[data-v-124c857e] {\r\n    margin-top: 15px;\r\n    padding: 16px;\r\n    color: #fff;\r\n    font-weight: bold;\r\n    background-color: #34495e;\r\n    border: 2px solid #575759;\r\n    box-shadow: 1px 3px 4px #ddd;\r\n    font-size: 16px;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    border-radius: 10px;\r\n    margin-bottom: 15px;\n}\n.lgcrd[data-v-124c857e] {\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    color: #dc0030;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/memo/annexes/CheckList.vue?vue&type=style&index=0&id=124c857e&lang=css&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/memo/annexes/CheckList.vue?vue&type=style&index=0&id=124c857e&lang=css&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckList_vue_vue_type_style_index_0_id_124c857e_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CheckList.vue?vue&type=style&index=0&id=124c857e&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/memo/annexes/CheckList.vue?vue&type=style&index=0&id=124c857e&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckList_vue_vue_type_style_index_0_id_124c857e_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckList_vue_vue_type_style_index_0_id_124c857e_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/offview/microfinance/cofina/memo/annexes/CheckList.vue":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/offview/microfinance/cofina/memo/annexes/CheckList.vue ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CheckList_vue_vue_type_template_id_124c857e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CheckList.vue?vue&type=template&id=124c857e&scoped=true */ "./resources/js/components/offview/microfinance/cofina/memo/annexes/CheckList.vue?vue&type=template&id=124c857e&scoped=true");
/* harmony import */ var _CheckList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CheckList.vue?vue&type=script&lang=js */ "./resources/js/components/offview/microfinance/cofina/memo/annexes/CheckList.vue?vue&type=script&lang=js");
/* harmony import */ var _CheckList_vue_vue_type_style_index_0_id_124c857e_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CheckList.vue?vue&type=style&index=0&id=124c857e&lang=css&scoped=true */ "./resources/js/components/offview/microfinance/cofina/memo/annexes/CheckList.vue?vue&type=style&index=0&id=124c857e&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CheckList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _CheckList_vue_vue_type_template_id_124c857e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _CheckList_vue_vue_type_template_id_124c857e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "124c857e",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/offview/microfinance/cofina/memo/annexes/CheckList.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/offview/microfinance/cofina/memo/annexes/CheckList.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/offview/microfinance/cofina/memo/annexes/CheckList.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CheckList.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/memo/annexes/CheckList.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/offview/microfinance/cofina/memo/annexes/CheckList.vue?vue&type=style&index=0&id=124c857e&lang=css&scoped=true":
/*!************************************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/microfinance/cofina/memo/annexes/CheckList.vue?vue&type=style&index=0&id=124c857e&lang=css&scoped=true ***!
  \************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckList_vue_vue_type_style_index_0_id_124c857e_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CheckList.vue?vue&type=style&index=0&id=124c857e&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/memo/annexes/CheckList.vue?vue&type=style&index=0&id=124c857e&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/offview/microfinance/cofina/memo/annexes/CheckList.vue?vue&type=template&id=124c857e&scoped=true":
/*!**********************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/microfinance/cofina/memo/annexes/CheckList.vue?vue&type=template&id=124c857e&scoped=true ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckList_vue_vue_type_template_id_124c857e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckList_vue_vue_type_template_id_124c857e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckList_vue_vue_type_template_id_124c857e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CheckList.vue?vue&type=template&id=124c857e&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/memo/annexes/CheckList.vue?vue&type=template&id=124c857e&scoped=true");


/***/ }),

/***/ "./resources/js/components/offview/microfinance/cofina/memo/annexes/checklist/checklist_client.json":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/offview/microfinance/cofina/memo/annexes/checklist/checklist_client.json ***!
  \**********************************************************************************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('[{"rubrique":"DEMANDE DE CREDIT","items":[{"label":"Formulaire de demande de crédit signé par le client précisant l\'objet du prêt","uploaded_by":{"CAF":false,"ARC":false,"SRC":false}},{"label":"Prélévement frais de demande de crédit (reçu à joindre au dossier)","uploaded_by":{"CAF":false,"ARC":false,"SRC":false}}]},{"rubrique":"IDENTIFICATION DU CLIENT ","items":[{"label":"Copie de la CNI ou attestation d\'identité ou copie passport ou copie carte d\'identité d\'étranger (représentant de la société)","uploaded_by":{"CAF":false,"ARC":false,"SRC":false}},{"label":"Facture d\'eau ou d\'électricité ou certificat de résidence ou contrat de location ou attestation d\'hébergement  au nom du client ","uploaded_by":{"CAF":false,"ARC":false,"SRC":false}},{"label":"Plan de localisation réalisé par le CAF","uploaded_by":{"CAF":false,"ARC":false,"SRC":false}},{"label":"Formulaire Cofina Lab","uploaded_by":{"CAF":false,"ARC":false,"SRC":false}}]},{"rubrique":"IDENTIFICATION DE L\'ACTIVITE","items":[{"label":"Documents constitutifs de l\'entité (statuts, délégation de pouvoirs du ou des dirigeants)","uploaded_by":{"CAF":false,"ARC":false,"SRC":false}},{"label":"Justificatif d\'occupation (Titre de propriété du local de l\'activité, si propriétaire, ou contrat de bail en cours de validité ou quittances des loyers versés sur les 3 derniers mois d’activité)","uploaded_by":{"CAF":false,"ARC":false,"SRC":false}},{"label":"Ninea/Nif/Niu/copie RCCM certifié conforme","uploaded_by":{"CAF":false,"ARC":false,"SRC":false}},{"label":"Attestation de régularité fiscale (datant de moins de trois mois) et déclaration fiscale d\'existence","uploaded_by":{"CAF":false,"ARC":false,"SRC":false}}]},{"rubrique":"ANALYSE DE LA DEMANDE","items":[{"label":"Etats financiers des 02 derniers exercices + Compte d\'exploitation prévisionnel sur la durée du crédit ","uploaded_by":{"CAF":false,"ARC":false,"SRC":false}},{"label":"Plan de trésorerie sur les douze prochains mois","uploaded_by":{"CAF":false,"ARC":false,"SRC":false}},{"label":"Copies du registre de ventes ou reçus de ventes (à dépouiller par le CAF)","uploaded_by":{"CAF":false,"ARC":false,"SRC":false}},{"label":"Factures d\'achats et/ou copie du passeport incluant  les visas et cachets (pour les achats hors zone)","uploaded_by":{"CAF":false,"ARC":false,"SRC":false}},{"label":"Relevé de tous les comptes bancaires de l\'institution et autres institutions sur toute l\'année N-1 et la période écoulée sur l\'année N (obligation sur les 6 mois)","uploaded_by":{"CAF":false,"ARC":false,"SRC":false}},{"label":"PV de visite clientèle dûment renseigné et signé par le client et le CAFet falsecluant les plans de localisation de l\'activité et du domicile du client","uploaded_by":{"CAF":false,"ARC":false,"SRC":false}},{"label":"Détails du besoin et devis estimatifs des investissements à réaliser (délivrés par les prestataires)","uploaded_by":{"CAF":false,"ARC":false,"SRC":false}},{"label":"Factures pro forma des fournisseurs d\'investissement","uploaded_by":{"CAF":false,"ARC":false,"SRC":false}},{"label":"Formulaire de recueil de consentement BIC-UEMOA (espace UMOA uniquement)","uploaded_by":{"CAF":false,"ARC":false,"SRC":false}},{"label":"Copie du rapport de solvabilité du BIC-UEMOA - Creditinfo Volo (espace UMOA uniquement)","uploaded_by":{"CAF":false,"ARC":false,"SRC":false}},{"label":"Photos du lieu d\'activité du client","uploaded_by":{"CAF":false,"ARC":false,"SRC":false}}]},{"rubrique":"EN CAS DE RENOUVELLEMENT","items":[{"label":"Fiche de renouvellement retraçant les infos sur chacun des crédits précédents","uploaded_by":{"CAF":false,"ARC":false,"SRC":false}},{"label":"Relevé bancaire de l\'institutionretraçant l’ensemble des cycles","uploaded_by":{"CAF":false,"ARC":false,"SRC":false}}]}]');

/***/ }),

/***/ "./resources/js/components/offview/microfinance/cofina/memo/annexes/checklist/checklist_surete.json":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/offview/microfinance/cofina/memo/annexes/checklist/checklist_surete.json ***!
  \**********************************************************************************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('[{"rubrique":"SURETES PERSONNELLES ","categorie_items":[{"categorie":"Cautions","items":[{"label":"Fiche d’approbation de la caution","uploaded_by":{"CAF":false,"ARC":false,"SRC":false}},{"label":"Relevé de compte bancaire sur la durée écoulée de l\'année ","uploaded_by":{"CAF":false,"ARC":false,"SRC":false}}]},{"categorie":"Caution salariée","items":[{"label":"Pièce d’identité en cours de validité (CNI, Carte consulaire, Passeport)","uploaded_by":{"CAF":false,"ARC":false,"SRC":false}},{"label":"Bulletin de salaire des trois derniers mois","uploaded_by":{"CAF":false,"ARC":false,"SRC":false}},{"label":"Attestation de travail trois derniers mois","uploaded_by":{"CAF":false,"ARC":false,"SRC":false}}]},{"categorie":"Caution Commerçant ou Entrepreneur individuel","items":[{"label":"Pièce d’identité en cours de validité (CNI, Carte consulaire, Passeport)","uploaded_by":{"CAF":false,"ARC":false,"SRC":false}},{"label":"Copie du Registre de commerce","uploaded_by":{"CAF":false,"ARC":false,"SRC":false}}]},{"categorie":"Caution société (SA, SARL...)","items":[{"label":"Pièce d’identité en cours de validité du ou des dirigeant (CNI, Carte consulaire, Passeport)","uploaded_by":{"CAF":false,"ARC":false,"SRC":false}},{"label":"Copie du Registre de commerce","uploaded_by":{"CAF":false,"ARC":false,"SRC":false}},{"label":"Résolution de l’Assemblée Générale ou du Conseil d’Administration autorisant le dirigeant à se porter caution au nom de la société qu’il dirige, pour le compte du client demandeur en faveur de COFINA","uploaded_by":{"CAF":false,"ARC":false,"SRC":false}},{"label":"Statuts ","uploaded_by":{"CAF":false,"ARC":false,"SRC":false}}]}]},{"rubrique":"SURETES REELLES HYPOTHECAIRES ","categorie_items":[{"categorie":"Hypothèque","items":[{"label":"Réquisition foncière datant de moins de trois (03) mois","uploaded_by":{"CAF":false,"ARC":false,"SRC":false}},{"label":"Titre foncier (ACD, Certificat de propriété, ou certificat de mutation de propriété foncière)","uploaded_by":{"CAF":false,"ARC":false,"SRC":false}},{"label":"Titre acquisitif de propriété le cas échéant (vente, donation, attribution judiciaire ou conventionnelle)","uploaded_by":{"CAF":false,"ARC":false,"SRC":false}}]},{"categorie":"Personne physique","items":[{"label":"Pièce d\'identité en cours de validité (CNI, Passeport, Attestation d\'dentité pour les nationaux et Carte consulaire ou Carte de résident pour les non nationaux)","uploaded_by":{"CAF":false,"ARC":false,"SRC":false}}]},{"categorie":"Célibataire","items":[{"label":"Un extrait d’acte de naissance datant de moins de trois (03) mois ","uploaded_by":{"CAF":false,"ARC":false,"SRC":false}}]},{"categorie":"Marié","items":[{"label":"Un certificat de mariage ou un extrait d’acte de mariage mentionnant le régime matrimonial ","uploaded_by":{"CAF":false,"ARC":false,"SRC":false}},{"label":"Pièce d\'identité du conjoint","uploaded_by":{"CAF":false,"ARC":false,"SRC":false}}]},{"categorie":"Mineur","items":[{"label":"Une ordonnance du juge des tutelles autorisant l’affectation hypothécaire et dûment enregistré au greffe du tribunal","uploaded_by":{"CAF":false,"ARC":false,"SRC":false}},{"label":"Un extrait d’acte de naissance datant de moins de trois (03) mois ","uploaded_by":{"CAF":false,"ARC":false,"SRC":false}},{"label":"Une copie de la Carte Nationale d’Identité de l’administrateur légal ","uploaded_by":{"CAF":false,"ARC":false,"SRC":false}}]},{"categorie":"Personne Morale","items":[{"label":"RCCM ","uploaded_by":{"CAF":false,"ARC":false,"SRC":false}},{"label":"Statuts à jour (Sauf pour les entreprises individuelles)","uploaded_by":{"CAF":false,"ARC":false,"SRC":false}},{"label":"Pièce d\'identité du gérant ","uploaded_by":{"CAF":false,"ARC":false,"SRC":false}}]},{"categorie":"SARL Pluripersonnelle","items":[{"label":"Si les statuts le mentionnent, le gérant doit fournir un document émanant des associés l’autorisant à contracter un emprunt","uploaded_by":{"CAF":false,"ARC":false,"SRC":false}}]},{"categorie":"SA","items":[{"label":"Procès-verbal de l’assemblée générale nommant le dirigeant et ou autorisant la prise de crédit le cas échéant","uploaded_by":{"CAF":false,"ARC":false,"SRC":false}}]}]},{"rubrique":"AUTRES SURETES RELLES ","categorie_items":[{"categorie":"Gage véhicules","items":[{"label":"Copie des cartes grises (à jour) des véhicules à gager","uploaded_by":{"CAF":false,"ARC":false,"SRC":false}},{"label":"Copies des certificats de visite technique à jour","uploaded_by":{"CAF":false,"ARC":false,"SRC":false}},{"label":"Copies des certificats d\'assurance à jour","uploaded_by":{"CAF":false,"ARC":false,"SRC":false}}]},{"categorie":"Gage matériels professionnels ","items":[{"label":"Inventaire détaillé du matériel à gager (Nombre / Désignation avec marque, références, n° série le cas échéant / Valeur / Localisation)","uploaded_by":{"CAF":false,"ARC":false,"SRC":false}},{"label":"Titre de propriété du matériel à gager le cas échéant (Facture, contrat etc.)","uploaded_by":{"CAF":false,"ARC":false,"SRC":false}},{"label":"Assurance sur le matériel à gager couvrant la période du prêt","uploaded_by":{"CAF":false,"ARC":false,"SRC":false}}]},{"categorie":"Nantissement de compte ","items":[{"label":"Attestation de compte bancaire (compte domicilié hors CAC)","uploaded_by":{"CAF":false,"ARC":false,"SRC":false}},{"label":"Relevé de compte bancaire sur la durée écoulée de l\'année ","uploaded_by":{"CAF":false,"ARC":false,"SRC":false}}]},{"categorie":"Cession de loyers","items":[{"label":"L’inventaire ou détail des loyers existants à céder (situation géographique, type d’habitation, montant du loyer mensuel, montant total loyer) + baux individuels de chaque locataire","uploaded_by":{"CAF":false,"ARC":false,"SRC":false}},{"label":"Réquisition foncière + Titre foncier","uploaded_by":{"CAF":false,"ARC":false,"SRC":false}}]}]}]');

/***/ })

}]);