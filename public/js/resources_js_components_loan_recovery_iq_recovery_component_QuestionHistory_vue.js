"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_loan_recovery_iq_recovery_component_QuestionHistory_vue"],{

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


/***/ })

}]);