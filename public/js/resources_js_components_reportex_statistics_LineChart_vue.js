"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_reportex_statistics_LineChart_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/statistics/LineChart.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/statistics/LineChart.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_chartjs_legacy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-chartjs/legacy */ "./node_modules/vue-chartjs/legacy/index.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/chart.mjs");


chart_js__WEBPACK_IMPORTED_MODULE_0__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_0__.Title, chart_js__WEBPACK_IMPORTED_MODULE_0__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_0__.Legend, chart_js__WEBPACK_IMPORTED_MODULE_0__.LineElement, chart_js__WEBPACK_IMPORTED_MODULE_0__.LinearScale, chart_js__WEBPACK_IMPORTED_MODULE_0__.CategoryScale, chart_js__WEBPACK_IMPORTED_MODULE_0__.PointElement, chart_js__WEBPACK_IMPORTED_MODULE_0__.Filler);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'LineChart',
  components: {
    LineChartVue: vue_chartjs_legacy__WEBPACK_IMPORTED_MODULE_1__.Line
  },
  props: {
    chartId: {
      type: String,
      "default": 'line-chart'
    },
    width: {
      type: Number,
      "default": 400
    },
    height: {
      type: Number,
      "default": 500
    },
    cssClasses: {
      "default": 'w-100',
      type: String
    },
    styles: {
      type: Object,
      "default": function _default() {
        return {
          height: "500px",
          position: "relative"
        };
      }
    },
    plugins: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    chartData: {
      type: Object,
      "default": function _default() {
        return {
          labels: ['Jan', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [{
            label: 'Data One',
            borderColor: 'blue',
            pointBackgroundColor: 'white',
            borderWidth: 1,
            radius: 0,
            fill: true,
            pointBorderColor: 'white',
            backgroundColor: "rgba(0,0,200,0.5)",
            tension: 0.25,
            data: [40, 39, 10, 40, 39, 80, 40]
          }]
        };
      }
    }
  },
  data: function data() {
    return {
      // chartData: {
      //     labels: ['Jan', 'February', 'March', 'April', 'May', 'June', 'July'],
      //     datasets: [
      //         {
      //             label: 'Data One',
      //             borderColor: 'blue',
      //             pointBackgroundColor: 'white',
      //             borderWidth: 1,
      //             radius: 0,
      //             fill: true,
      //             pointBorderColor: 'white',
      //             backgroundColor: "rgba(0,0,200,0.5)",

      //             tension: 0.25,
      //             data: [40, 39, 10, 40, 39, 80, 40]
      //         }]
      // },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            position: "bottom"
          }
        }
      }
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/statistics/LineChart.vue?vue&type=template&id=5a63292b":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/statistics/LineChart.vue?vue&type=template&id=5a63292b ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("LineChartVue", {
    attrs: {
      chartData: _vm.chartData,
      chartOptions: _vm.chartOptions,
      chartId: _vm.chartId,
      width: _vm.width,
      height: _vm.height,
      cssClasses: _vm.cssClasses,
      styles: _vm.styles,
      plugins: _vm.plugins
    }
  });
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/reportex/statistics/LineChart.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/reportex/statistics/LineChart.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LineChart_vue_vue_type_template_id_5a63292b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LineChart.vue?vue&type=template&id=5a63292b */ "./resources/js/components/reportex/statistics/LineChart.vue?vue&type=template&id=5a63292b");
/* harmony import */ var _LineChart_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LineChart.vue?vue&type=script&lang=js */ "./resources/js/components/reportex/statistics/LineChart.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LineChart_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _LineChart_vue_vue_type_template_id_5a63292b__WEBPACK_IMPORTED_MODULE_0__.render,
  _LineChart_vue_vue_type_template_id_5a63292b__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/reportex/statistics/LineChart.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/reportex/statistics/LineChart.vue?vue&type=script&lang=js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/reportex/statistics/LineChart.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LineChart_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LineChart.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/statistics/LineChart.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LineChart_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/reportex/statistics/LineChart.vue?vue&type=template&id=5a63292b":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/reportex/statistics/LineChart.vue?vue&type=template&id=5a63292b ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LineChart_vue_vue_type_template_id_5a63292b__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LineChart_vue_vue_type_template_id_5a63292b__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LineChart_vue_vue_type_template_id_5a63292b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LineChart.vue?vue&type=template&id=5a63292b */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/statistics/LineChart.vue?vue&type=template&id=5a63292b");


/***/ })

}]);