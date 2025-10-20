"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_offview_bank_afg_middle_office_GC1_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/middle_office/GC1.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/middle_office/GC1.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_connects_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../services/connects.service */ "./resources/js/services/connects.service.js");
/* harmony import */ var _services_proxy_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../services/proxy.service */ "./resources/js/services/proxy.service.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "GC1",
  props: {
    dossier_credit: Object
  },
  created: function created() {
    //   this.loadData();
  },
  data: function data() {
    var _this$dossier_credit;
    return {
      data_tb2001: (_this$dossier_credit = this.dossier_credit) === null || _this$dossier_credit === void 0 ? void 0 : _this$dossier_credit.cred_pub_tb_2001,
      files: [],
      connectsHost: _services_connects_service__WEBPACK_IMPORTED_MODULE_0__["default"].loadablehost(),
      isLoadingFile: false
    };
  },
  methods: {
    formatDate: function formatDate(date) {
      if (['', null, undefined].includes(date)) return "";
      var options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
      };
      return new Date(date).toLocaleDateString('fr', options);
    },
    formatAmount: function formatAmount(x) {
      var _x$toString;
      return x === null || x === void 0 || (_x$toString = x.toString()) === null || _x$toString === void 0 ? void 0 : _x$toString.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    },
    convertInt: function convertInt(n) {
      var _n$toString;
      return Number(n === null || n === void 0 || (_n$toString = n.toString()) === null || _n$toString === void 0 ? void 0 : _n$toString.replace(/\s/g, ''));
    },
    handleDoubleClickOrClick: function handleDoubleClickOrClick(event, index, element) {
      var _this = this;
      EventBus.$emit("open-extra-file-explorer");
      setTimeout(function () {
        EventBus.$emit("data-extra-file-explorer", {
          name: (element === null || element === void 0 ? void 0 : element.name) + " {(*)}pieces_versees_list" + index + "_" + _this.$route.params.templateId,
          view: true
        });
      }, 500);
    },
    getFiles: function getFiles() {
      var _this$data_tb,
        _this2 = this;
      if ((_this$data_tb = this.data_tb2001) !== null && _this$data_tb !== void 0 && _this$data_tb.documentations && this.data_tb2001.documentations.length > 0) {
        this.isLoadingFile = true;
        _services_proxy_service__WEBPACK_IMPORTED_MODULE_1__["default"].proxyEbapis({
          url: this.connectsHost + 'api/get-files',
          method: 'POST',
          data: {
            file_identity: this.dossier_credit.cred_pub_key
          }
        })
        //this.$axios.post(this.connectsHost + 'api/get-files', { file_identity: this.dossier_credit.cred_pub_key })
        .then(function (res) {
          var _res$data$data, _res$data$data2;
          res.data = JSON.parse(res.data);
          if (((_res$data$data = res.data.data) === null || _res$data$data === void 0 ? void 0 : _res$data$data.length) > 0 || ((_res$data$data2 = res.data.data) === null || _res$data$data2 === void 0 ? void 0 : _res$data$data2.length) != null) {
            _this2.files = res.data.data;
            _this2.data_tb2001.documentations.forEach(function (element, index) {
              var count = 0;
              _this2.files.forEach(function (file) {
                var _element$template;
                if ((file === null || file === void 0 ? void 0 : file.extra_file_template_id) != null && (element === null || element === void 0 || (_element$template = element.template) === null || _element$template === void 0 ? void 0 : _element$template.id) == (file === null || file === void 0 ? void 0 : file.extra_file_template_id)) {
                  count++;
                }
              });
              _this2.data_tb2001.documentations[index]['files'] = count;
            });
          }
          _this2.isLoadingFile = false;
        })["catch"](function (err) {
          _this2.isLoadingFile = false;
          console.error(err);
        });
      }
    }
  },
  computed: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/middle_office/GC1.vue?vue&type=template&id=96b3f65c&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/middle_office/GC1.vue?vue&type=template&id=96b3f65c&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$dossier_credit;
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_vm.dossier_credit.tbs_in_use.includes("tb2001") ? _c("div", {
    staticClass: "justify-content-center"
  }, [_c("div", {
    staticClass: "head-memorandum-title px-3 mb-2",
    staticStyle: {
      "text-align": "center"
    }
  }, [_vm._v("Documentation")])]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "row my-3"
  }, [_c("div", {
    staticClass: "card-body",
    "class": _vm.paysageClasses
  }, [_c("div", {
    staticClass: "table-responsive",
    "class": _vm.tableResponsiveClasses
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(0), _vm._v(" "), _c("tbody", _vm._l((_vm$dossier_credit = _vm.dossier_credit) === null || _vm$dossier_credit === void 0 || (_vm$dossier_credit = _vm$dossier_credit.cred_pub_tb_2001) === null || _vm$dossier_credit === void 0 ? void 0 : _vm$dossier_credit.pieces_versee_list, function (el, index) {
    return _c("tr", {
      key: index
    }, [_c("td", {
      staticClass: "td-personalize",
      "class": !(el !== null && el !== void 0 && el.isEditable) ? "unchanged-cell" : "",
      staticStyle: {
        "min-width": "250px"
      }
    }, [_vm._v("\n                                            " + _vm._s(el.name) + "\n                                        ")]), _vm._v(" "), _c("td", {
      staticClass: "text-center td-personalize",
      "class": !(el !== null && el !== void 0 && el.isEditable) ? "unchanged-cell" : ""
    }, [_c("div", {
      staticClass: "m-2 mr-4 d-flex gap-1 align-items-center",
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
        disabled: "",
        value: "Oui",
        id: "oui" + index
      },
      domProps: {
        checked: el.value == "Oui" || (el === null || el === void 0 ? void 0 : el.files) > 0
      }
    }), _vm._v(" "), _c("span", {
      staticClass: "libelle_name"
    }, [_vm._v("Présent")])])]), _vm._v(" "), _c("td", {
      staticClass: "text-center td-personalize",
      "class": !(el !== null && el !== void 0 && el.isEditable) ? "unchanged-cell" : ""
    }, [_c("div", {
      staticClass: "m-2 mr-4 d-flex gap-1 align-items-center",
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
        id: "non" + index,
        disabled: ""
      },
      domProps: {
        checked: (el === null || el === void 0 ? void 0 : el.files) == 0 && el.value == "Non"
      }
    }), _vm._v(" "), _c("span", {
      staticClass: "libelle_name"
    }, [_vm._v("Absent")])])]), _vm._v(" "), _c("td", {
      staticClass: "text-center td-personalize",
      "class": !(el !== null && el !== void 0 && el.isEditable) ? "unchanged-cell" : ""
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
        id: "non_applicable" + index,
        disabled: ""
      },
      domProps: {
        checked: el.value == "Non applicable"
      }
    })])]), _vm._v(" "), _c("td", {
      staticClass: "text-center td-personalize",
      "class": !(el !== null && el !== void 0 && el.isEditable) ? "unchanged-cell" : ""
    }, [el.files > 0 ? _c("div", {
      staticClass: "d-flex align-items-center text-center justify-content-center"
    }, [_c("div", [(el === null || el === void 0 ? void 0 : el.files) > 0 ? _c("span", {
      staticClass: "p-1 px-2 mx-2 text-nowrap",
      staticStyle: {
        "background-color": "rgb(44, 62, 80)",
        color: "white",
        "font-size": "13px",
        "border-radius": "5px",
        "margin-left": "0!important",
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
          return _vm.handleDoubleClickOrClick($event, index, el);
        }
      }
    }, [_c("i", {
      staticClass: "icofont-attachment"
    })])]) : _vm._e()]) : _c("div", {
      staticClass: "text-center text-danger"
    }, [_vm._v("\n                                                Aucun fichier(s) uploadé(s)\n                                            ")])]), _vm._v(" "), _c("td", {
      staticClass: "text-center"
    }, [_vm._v("\n                                          " + _vm._s(el.comment) + "\n                                        ")]), _vm._v(" "), _c("td", {
      staticClass: "text-center td-personalize"
    }, [_c("div", {
      staticClass: "m-2 mr-4 d-flex gap-1 align-items-center"
    }, [_c("input", {
      staticClass: "form-check-input",
      staticStyle: {
        width: "20px",
        height: "20px"
      },
      attrs: {
        type: "checkbox",
        value: "Complete",
        id: "complete" + index,
        disabled: ""
      },
      domProps: {
        checked: el.status === "Complete"
      }
    }), _vm._v(" "), _c("span", {
      staticClass: "libelle_name"
    }, [_vm._v("Complet")])])]), _vm._v(" "), _c("td", {
      staticClass: "text-center td-personalize"
    }, [_c("div", {
      staticClass: "m-2 mr-4 d-flex gap-1 align-items-center"
    }, [_c("input", {
      staticClass: "form-check-input",
      staticStyle: {
        width: "20px",
        height: "20px"
      },
      attrs: {
        type: "checkbox",
        value: "Incomplete",
        id: "incomplete" + index,
        disabled: ""
      },
      domProps: {
        checked: el.status === "Incomplete"
      }
    }), _vm._v(" "), _c("span", {
      staticClass: "libelle_name"
    }, [_vm._v("Incomplet")])])]), _vm._v(" "), _c("td", {
      staticClass: "text-center td-personalize"
    }, [_c("div", {
      staticClass: "m-2 mr-4 d-flex gap-1 align-items-center"
    }, [_c("input", {
      staticClass: "form-check-input",
      staticStyle: {
        width: "20px",
        height: "20px"
      },
      attrs: {
        type: "checkbox",
        value: "Non applicable",
        id: "non_applicable" + index,
        disabled: ""
      },
      domProps: {
        checked: el.status === "Non applicable"
      }
    })])]), _vm._v(" "), _c("td", [_vm._v("\n                                          " + _vm._s(el.commentaire_analyste) + "\n                                        ")])]);
  }), 0)])])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", {
    staticClass: "text-center"
  }, [_c("td", {
    staticClass: "th vertical-middle fw-bold"
  }, [_c("label", [_vm._v("LIBELLE")])]), _vm._v(" "), _c("td", {
    staticClass: "th vertical-middle fw-bold",
    attrs: {
      colspan: "2"
    }
  }, [_c("label", [_vm._v("PRESENT / ABSENT")])]), _vm._v(" "), _c("td", {
    staticClass: "th vertical-middle fw-bold"
  }, [_c("label", [_vm._v("NON APPLICABLE")])]), _vm._v(" "), _c("td", {
    staticClass: "th vertical-middle fw-bold"
  }, [_c("label", [_vm._v("FICHIERS ATTACHES")])]), _vm._v(" "), _c("td", {
    staticClass: "th vertical-middle fw-bold"
  }, [_c("label", [_vm._v("COMMENTAIRE DU GC")])]), _vm._v(" "), _c("td", {
    staticClass: "th vertical-middle fw-bold",
    attrs: {
      colspan: "2"
    }
  }, [_c("label", [_vm._v("COMPLET / INCOMPLET")])]), _vm._v(" "), _c("td", {
    staticClass: "th vertical-middle fw-bold"
  }, [_c("label", [_vm._v("NON APPLICABLE")])]), _vm._v(" "), _c("td", {
    staticClass: "th vertical-middle fw-bold"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("COMMENTAIRE DU MO")])]), _vm._v(" "), _c("td", {
    staticClass: "th vertical-middle fw-bold"
  })])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/middle_office/GC1.vue?vue&type=style&index=0&id=96b3f65c&lang=css&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/middle_office/GC1.vue?vue&type=style&index=0&id=96b3f65c&lang=css&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.bg-grey[data-v-96b3f65c] {\r\n  background-color: #f4f3f3;\n}\nth[data-v-96b3f65c] {\r\n  background: #f4f3f3 !important;\n}\n.vertical-middle[data-v-96b3f65c] {\r\n  vertical-align: middle;\n}\n.font-bold[data-v-96b3f65c] {\r\n  font-weight: bold;\n}\n.head-memorandum-title[data-v-96b3f65c] {\r\n\r\nfont-weight: bold;\r\ntext-transform: uppercase;\r\ntext-align: center;border: 1px solid;\r\npadding: 4px;\n}\n.text-uppercase[data-v-96b3f65c] {\r\n  text-transform: uppercase;\n}\n._border_right[data-v-96b3f65c] {\r\n  border-right: 1px solid;\n}\n._border_bottom[data-v-96b3f65c] {\r\n  border-bottom: 1px solid;\n}\n.pl-10-px[data-v-96b3f65c] {\r\n  padding-left: 10px;\n}\n.pl-30-px[data-v-96b3f65c] {\r\n  padding-left: 30px;\n}\n.pl-3[data-v-96b3f65c] {\r\n  padding-left: 10px;\n}\n.form-check-input[data-v-96b3f65c]:disabled {\r\n  opacity: 1;\n}\n.floating_text[data-v-96b3f65c]{\r\n  float: right;\r\n  /* text-align: right; */\n}\n.input-label[data-v-96b3f65c] {\r\n  font-size: 12px !important;\n}\n.td-personalize[data-v-96b3f65c] {\r\n  vertical-align: middle;\n}\n.libelle_name[data-v-96b3f65c]{\r\n  margin-bottom: -5px !important;\n}\n@media print {\nbody[data-v-96b3f65c] {\r\n    margin: 0;\r\n    padding: 0;\n}\r\n\r\n  /* Règles @page nommées */\n@page portrait {\r\n    size: portrait;\r\n    margin: 20mm;\n}\n@page paysage {\r\n    size: landscape;\r\n    margin: 20mm;\n}\r\n\r\n  /* Application des règles @page */\n.portrait[data-v-96b3f65c] {\r\n    page: portrait;\r\n    page-break-before: always;\n}\n.paysage[data-v-96b3f65c] {\r\n    page: paysage;\r\n    width: 100% !important;\r\n    page-break-before: always;\r\n    page-break-after: always;\n}\r\n\r\n  /* Cacher le bouton à l'impression */\n#printBtn[data-v-96b3f65c] {\r\n    display: none;\n}\r\n\r\n  /* Optionnel : ajuster la taille du texte à l'impression */\n.portrait[data-v-96b3f65c],\r\n  .paysage[data-v-96b3f65c] {\r\n    font-size: 12pt;\n}\n.paysage .table-responsive[data-v-96b3f65c] {\r\n    overflow: visible !important;\r\n    width: auto !important;\r\n    max-width: none !important;\r\n    display: block !important;\n}\n.paysage .table-responsive table[data-v-96b3f65c] {\r\n    width: 100% !important;\r\n    max-width: none !important;\r\n    display: table !important;\n}\r\n\r\n  /* Réduction taille police et padding */\n.paysage .table-wide table[data-v-96b3f65c] {\r\n    font-size: 7pt;\n}\n.paysage .table-wide th[data-v-96b3f65c],\r\n  td[data-v-96b3f65c] {\r\n    padding: 2px 3px;\n}\n.unchanged-cell[data-v-96b3f65c] {\r\n    background-color: #f4f5f5 !important;\n}\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/middle_office/GC1.vue?vue&type=style&index=0&id=96b3f65c&lang=css&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/middle_office/GC1.vue?vue&type=style&index=0&id=96b3f65c&lang=css&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GC1_vue_vue_type_style_index_0_id_96b3f65c_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GC1.vue?vue&type=style&index=0&id=96b3f65c&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/middle_office/GC1.vue?vue&type=style&index=0&id=96b3f65c&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GC1_vue_vue_type_style_index_0_id_96b3f65c_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GC1_vue_vue_type_style_index_0_id_96b3f65c_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/offview/bank/afg/middle_office/GC1.vue":
/*!************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/middle_office/GC1.vue ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GC1_vue_vue_type_template_id_96b3f65c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GC1.vue?vue&type=template&id=96b3f65c&scoped=true */ "./resources/js/components/offview/bank/afg/middle_office/GC1.vue?vue&type=template&id=96b3f65c&scoped=true");
/* harmony import */ var _GC1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GC1.vue?vue&type=script&lang=js */ "./resources/js/components/offview/bank/afg/middle_office/GC1.vue?vue&type=script&lang=js");
/* harmony import */ var _GC1_vue_vue_type_style_index_0_id_96b3f65c_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GC1.vue?vue&type=style&index=0&id=96b3f65c&lang=css&scoped=true */ "./resources/js/components/offview/bank/afg/middle_office/GC1.vue?vue&type=style&index=0&id=96b3f65c&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _GC1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _GC1_vue_vue_type_template_id_96b3f65c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _GC1_vue_vue_type_template_id_96b3f65c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "96b3f65c",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/offview/bank/afg/middle_office/GC1.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/offview/bank/afg/middle_office/GC1.vue?vue&type=script&lang=js":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/middle_office/GC1.vue?vue&type=script&lang=js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GC1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GC1.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/middle_office/GC1.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GC1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/offview/bank/afg/middle_office/GC1.vue?vue&type=style&index=0&id=96b3f65c&lang=css&scoped=true":
/*!********************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/middle_office/GC1.vue?vue&type=style&index=0&id=96b3f65c&lang=css&scoped=true ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GC1_vue_vue_type_style_index_0_id_96b3f65c_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GC1.vue?vue&type=style&index=0&id=96b3f65c&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/middle_office/GC1.vue?vue&type=style&index=0&id=96b3f65c&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/offview/bank/afg/middle_office/GC1.vue?vue&type=template&id=96b3f65c&scoped=true":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/middle_office/GC1.vue?vue&type=template&id=96b3f65c&scoped=true ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GC1_vue_vue_type_template_id_96b3f65c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GC1_vue_vue_type_template_id_96b3f65c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GC1_vue_vue_type_template_id_96b3f65c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GC1.vue?vue&type=template&id=96b3f65c&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/middle_office/GC1.vue?vue&type=template&id=96b3f65c&scoped=true");


/***/ })

}]);