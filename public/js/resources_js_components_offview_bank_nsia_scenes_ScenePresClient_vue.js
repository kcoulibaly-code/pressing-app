"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_offview_bank_nsia_scenes_ScenePresClient_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/scenes/ScenePresClient.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/scenes/ScenePresClient.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "PresentationDuClient",
  props: {
    components: {
      type: Array,
      require: true
    },
    dossier_credit: {
      type: Object,
      require: true
    },
    doc_tobe_produced: String,
    authcheckusr: Object,
    dismiss: Boolean,
    offBankList: Array
  },
  computed: {
    currentProps: function currentProps() {
      return {
        dossier_credit: this.dossier_credit
      };
    },
    doss_cred_t_1: function doss_cred_t_1() {
      var tbArrays = null;
      var credpub1 = null;
      var t1 = {};
      if (![undefined, null, ''].includes(this.dossier_credit)) {
        if (this.entityType.toUpperCase() == 'BANK') {
          tbArrays = this.determineCredPubTablesFromDosCred(this.dossier_credit);
          credpub1 = tbArrays[1];
          t1 = this.dossier_credit[credpub1];
        }
        if (this.entityType.toUpperCase() != 'BANK') {
          var _this$dossier_credit;
          tbArrays = this.determineCredPubTables((_this$dossier_credit = this.dossier_credit) === null || _this$dossier_credit === void 0 ? void 0 : _this$dossier_credit.applied_templ_name);
          credpub1 = tbArrays[1];
          t1 = this.dossier_credit[credpub1];
        }
      }
      return t1;
    }
  },
  data: function data() {
    return {
      comps: {},
      // doss_cred_t_1:{},
      headerTitle: "PRESENTATION DU CLIENT",
      nodeElements: []
    };
  },
  mounted: function mounted() {
    this.nodeElements = this.$refs.node_element_views;

    //   EventBus.$on("printccmface1", (divName) => {
    //       this.launchPrintView(divName)
    //   })
    //   this.getCredPubTb();
  },
  created: function created() {
    this.isItaPP();
  },
  methods: {
    isItaPP: function isItaPP() {
      var _this = this;
      var f = "scene_pres_client/";
      this.headerTitle = "PRESENTATION DU CLIENT";
      var isPP = [];
      for (var i = 0; i < this.tableMappingNSIA.length; i++) {
        var _this$dossier_credit2;
        if (this.tableMappingNSIA[i]['creditType'] == ((_this$dossier_credit2 = this.dossier_credit) === null || _this$dossier_credit2 === void 0 ? void 0 : _this$dossier_credit2.applied_templ_name)) {
          isPP.push(1);
        }
      }
      if (isPP.length == 0) {
        f = "scene_cover/";
        this.headerTitle = "Memo Face (Cover)";
      }
      if (this.components) {
        this.components.forEach(function (el) {
          return _this.comps[el] = el != "T001" ? function () {
            return __webpack_require__("./resources/js/components/offview/bank/nsia/memo lazy recursive ^\\.\\/.*\\.vue$")("./" + f + el + ".vue");
          } : function () {
            return __webpack_require__("./resources/js/components/offview/bank/nsia/memo lazy recursive ^\\.\\/.*\\.vue$")("./" + el + ".vue");
          };
        });
      } else {
        this.$toasted.show("vous n'avez chargé aucun composant dans la Scene Presentation du client/Cover");
      }
    },
    launchCompilerT0: function launchCompilerT0() {
      EventBus.$emit("value-updatedT1");
    },
    launchPrintView: function launchPrintView(divName) {

      // var printContents = document.getElementById(divName).innerHTML;
      // var originalContents = document.body.innerHTML;
      // document.body.innerHTML = printContents;
      // document.body.style.backgroundColor = "white";
      // document.body.style.height = "auto";
      // document.body.style.width = "auto";
      // document.body.style.margin = "auto";
      // window.print();
      // document.body.innerHTML = originalContents;
      // location.reload();

      // console.log('in memo face cover');
      // PrinterService.print(divName);
    } // getCredPubTb(){
    //     // alert(0)
    //     let tbArrays = null
    //     let credpub1 = null
    //     if(this.entityType.toUpperCase() == 'BANK'){
    //         tbArrays = this.determineCredPubTablesFromDosCred(this.dossier_credit)
    //         credpub1 = tbArrays[1]
    //         this.doss_cred_t_1 = this.dossier_credit[credpub1]
    //     }
    //     if (this.entityType.toUpperCase() == 'MICROFINANCE'){
    //         tbArrays = this.determineCredPubTables(this.dossier_credit?.applied_templ_name)
    //         credpub1 = tbArrays[1]
    //         this.doss_cred_t_1 = this.dossier_credit[credpub1]
    //     }
    // },
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/scenes/ScenePresClient.vue?vue&type=template&id=78ea8544&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/scenes/ScenePresClient.vue?vue&type=template&id=78ea8544&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    attrs: {
      id: "printccmface1"
    }
  }, [_c("div", {
    staticClass: "memo mb-4",
    style: {
      "background-color": _vm.entityColor
    }
  }, [_vm._v("\n    " + _vm._s(this.headerTitle) + " "), _c("br")]), _vm._v(" "), _c("div", [_c("loader-off-view", {
    attrs: {
      nodeElements: _vm.nodeElements
    }
  }), _vm._v(" "), _vm._l(_vm.components, function (comp) {
    return _c("div", {
      key: comp,
      ref: "node_element_views",
      refInFor: true,
      staticClass: "col-12"
    }, [_c("keep-alive", [_c(_vm.comps[comp], _vm._b({
      tag: "component"
    }, "component", _vm.currentProps, false))], 1)], 1);
  })], 2), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_c("appnstamp", {
    attrs: {
      dossier_credit: _vm.dossier_credit,
      doc_tobe_produced: _vm.doc_tobe_produced,
      authcheckusr: _vm.authcheckusr
    }
  })], 1)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/scenes/ScenePresClient.vue?vue&type=style&index=0&id=78ea8544&lang=css&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/scenes/ScenePresClient.vue?vue&type=style&index=0&id=78ea8544&lang=css&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.memo[data-v-78ea8544] {\n    /* margin-top: 10px; */\n    padding: 20px 10px;\n    border: 2px solid #fff;\n    font-weight: 550;\n    font-size: 16px;\n    text-align: center;\n    text-transform: uppercase;\n    background-color: #dc0030;\n    color: #fff;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/scenes/ScenePresClient.vue?vue&type=style&index=0&id=78ea8544&lang=css&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/scenes/ScenePresClient.vue?vue&type=style&index=0&id=78ea8544&lang=css&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ScenePresClient_vue_vue_type_style_index_0_id_78ea8544_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ScenePresClient.vue?vue&type=style&index=0&id=78ea8544&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/scenes/ScenePresClient.vue?vue&type=style&index=0&id=78ea8544&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ScenePresClient_vue_vue_type_style_index_0_id_78ea8544_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ScenePresClient_vue_vue_type_style_index_0_id_78ea8544_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/scenes/ScenePresClient.vue":
/*!******************************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/scenes/ScenePresClient.vue ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ScenePresClient_vue_vue_type_template_id_78ea8544_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ScenePresClient.vue?vue&type=template&id=78ea8544&scoped=true */ "./resources/js/components/offview/bank/nsia/scenes/ScenePresClient.vue?vue&type=template&id=78ea8544&scoped=true");
/* harmony import */ var _ScenePresClient_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ScenePresClient.vue?vue&type=script&lang=js */ "./resources/js/components/offview/bank/nsia/scenes/ScenePresClient.vue?vue&type=script&lang=js");
/* harmony import */ var _ScenePresClient_vue_vue_type_style_index_0_id_78ea8544_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ScenePresClient.vue?vue&type=style&index=0&id=78ea8544&lang=css&scoped=true */ "./resources/js/components/offview/bank/nsia/scenes/ScenePresClient.vue?vue&type=style&index=0&id=78ea8544&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ScenePresClient_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _ScenePresClient_vue_vue_type_template_id_78ea8544_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _ScenePresClient_vue_vue_type_template_id_78ea8544_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "78ea8544",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/offview/bank/nsia/scenes/ScenePresClient.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/scenes/ScenePresClient.vue?vue&type=script&lang=js":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/scenes/ScenePresClient.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScenePresClient_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ScenePresClient.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/scenes/ScenePresClient.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScenePresClient_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/scenes/ScenePresClient.vue?vue&type=style&index=0&id=78ea8544&lang=css&scoped=true":
/*!**************************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/scenes/ScenePresClient.vue?vue&type=style&index=0&id=78ea8544&lang=css&scoped=true ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ScenePresClient_vue_vue_type_style_index_0_id_78ea8544_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ScenePresClient.vue?vue&type=style&index=0&id=78ea8544&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/scenes/ScenePresClient.vue?vue&type=style&index=0&id=78ea8544&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/scenes/ScenePresClient.vue?vue&type=template&id=78ea8544&scoped=true":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/scenes/ScenePresClient.vue?vue&type=template&id=78ea8544&scoped=true ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ScenePresClient_vue_vue_type_template_id_78ea8544_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ScenePresClient_vue_vue_type_template_id_78ea8544_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ScenePresClient_vue_vue_type_template_id_78ea8544_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ScenePresClient.vue?vue&type=template&id=78ea8544&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/scenes/ScenePresClient.vue?vue&type=template&id=78ea8544&scoped=true");


/***/ })

}]);