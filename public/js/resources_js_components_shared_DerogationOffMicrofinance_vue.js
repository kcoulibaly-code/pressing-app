(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_shared_DerogationOffMicrofinance_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/DerogationOffMicrofinance.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/DerogationOffMicrofinance.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_printer_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/printer.service */ "./resources/js/services/printer.service.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./resources/js/services/auth.service.js");


var startTime, endTime;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "DerogationOffMicrofinance",
  props: {
    dossier_credit: Object,
    doc_tobe_produced: String,
    list1: Array,
    authcheckusr: Object,
    currentSpanIndex: {
      type: Number,
      "default": 0
    },
    useLeftSpan: {
      type: Boolean,
      "default": true
    }
  },
  components: {},
  computed: {
    addPageClass: function addPageClass() {
      // const toRemove = ["CONTRE_ANALYSE_FILIALE", "CONTRE_ANALYSE_GROUPE", "AVIS_SRC_FILIALE", "AVIS_SRC_GROUPE", "PV_CONTRE_ANALYSE_FILIALE", "PV_CONTRE_ANALYSE_GROUPE", "CREDIT_AVAILMENT_TICKET", "PV_SERVICE_JURIDIQUE"]
      // return toRemove.includes(this.doc_tobe_produced)
      return false;
    },
    currentProps: function currentProps() {
      // console.log("this.currentSpan", this.currentSpan)

      if (this.currentSpan === 0) {
        var _this$dossier_credit;
        var applied_templ_name = (_this$dossier_credit = this.dossier_credit) === null || _this$dossier_credit === void 0 ? void 0 : _this$dossier_credit.applied_templ_name;
        // let oldDossier = this.dossier_credit?.caf_recorded_file?.oldDossier;
        // let old_applied_templ_name = null

        var loadedComponents = ["DER1"];
        if (["Derogation"].includes(applied_templ_name)) {
          // console.log('===========in derogation========');
          loadedComponents = ["DER1"];
        }
        return {
          components: loadedComponents,
          // components_scene_three: ["T0-CCM"],
          dossier_credit: this.dossier_credit,
          doc_tobe_produced: this.doc_tobe_produced,
          authcheckusr: this.authcheckusr,
          needHeader: false
        };
      }
    }
  },
  mounted: function mounted() {
    var _this = this;
    /* Switch entre commentaire et offview*/
    // this.menuBtn('commentaire')
    /* Switch entre commentaire et offview*/
    this.fucAddClass();
    // startTime = new Date().getTime(); // ?- timer
    // this.navigateTouch()
    this.scrollTo();
    // this.popLeftSpanEl()

    endTime = new Date().getTime(); // ?- timer
    /*  Switch entre commentaire et offview*/
    // EventBus.$on("show-commentaire", (data) => {
    //   this.viewMode = data;
    // })
    this.unansweredComment();
    EventBus.$on("value-updated", function () {
      _this.unansweredComment();
    });
  },
  data: function data() {
    var _this2 = this;
    return {
      listOfComponents: [],
      leftSpans: ["Derogation"],
      currentSpan: 0,
      components: [function () {
        return __webpack_require__("./resources/js/components/offview lazy recursive ^\\.\\/.*\\/memo\\/derogation\\/DER1\\.vue$")("./".concat(_this2.entityType, "/").concat(_this2.realEntity, "/memo/derogation/DER1.vue"));
      }],
      offBankList: ['DEROGATION'],
      dismiss: false,
      viewMode: 'memorandum',
      printerService: _services_printer_service__WEBPACK_IMPORTED_MODULE_0__["default"],
      authcheckUsr: null,
      getAttention: false
    };
  },
  methods: {
    unansweredComment: function unansweredComment() {
      var _this$dossier_credit2;
      if (!((_this$dossier_credit2 = this.dossier_credit) !== null && _this$dossier_credit2 !== void 0 && _this$dossier_credit2.fiche_commentaires)) return false;
      // Vérifie si une fiche de commentaire n'a pas de réponse
      var isThereUnansweredComment = this.dossier_credit.fiche_commentaires.some(function (fc) {
        return fc.fiche.some(function (f) {
          var _f$question, _f$reponse;
          return ((_f$question = f.question) === null || _f$question === void 0 ? void 0 : _f$question.trim()) && !((_f$reponse = f.reponse) !== null && _f$reponse !== void 0 && _f$reponse.trim());
        });
      });
      this.getAttention = isThereUnansweredComment;
    },
    fucAddClass: function fucAddClass() {
      if (this.$router.history.current.query.view_only != undefined) {
        if (!this.roleDismissedViewOnly.includes(this.authcheckUsr.role_uuid)) {
          this.$el.classList.add("tp_page");
        }
      }
    },
    scrollTo: function scrollTo() {
      var _this3 = this;
      if (window.screen.availHeight >= document.body.scrollHeight) {
        var btn = document.createElement("button");
        var ico = document.createElement("i");
        ico.classList.add("icofont-3x");
        ico.style.position = "sticky";
        ico.style.bottom = "0px";
        ico.style.left = "100%";
        ico.style.cursor = "pointer";
        ico.style.boxShadow = "0 0 5px 1px rgb(0,0,0/27%)";
        ico.style.right = "100px";
        ico.style.zIndex = "9";
        window.addEventListener("scroll", function () {
          if (window.scrollY === 0) {
            ico.classList.add("icofont-swoosh-down");
            ico.classList.remove("icofont-swoosh-up");
            ico.addEventListener("click", function () {
              window.scrollTo(0, _this3.$el.scrollHeight);
            });
          } else {
            ico.classList.add("icofont-swoosh-up");
            ico.classList.remove("icofont-swoosh-down");
            ico.addEventListener("click", function () {
              window.scrollTo(0, 0);
            });
          }
          _this3.$el.append(ico);
        });
      }
    },
    /* Switch entre vue commentaire, memorandum et partagée */showComponent: function showComponent(element) {
      this.viewMode = element;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/DerogationOffMicrofinance.vue?vue&type=template&id=50720acc&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/DerogationOffMicrofinance.vue?vue&type=template&id=50720acc&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$dossier_credit, _vm$dossier_credit2;
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    ref: "body",
    "class": {
      tp_page: !_vm.addPageClass
    },
    staticStyle: {
      padding: "25px",
      "min-height": "84vh"
    }
  }, [_c("doc-header", {
    attrs: {
      dossier_credit: _vm.dossier_credit,
      authcheckusr: _vm.authcheckusr
    }
  }), _vm._v(" "), _vm.useLeftSpan ? _c("div", {
    staticClass: "ctn text-center bg-light"
  }, _vm._l(_vm.leftSpans, function (span, index) {
    return _c("span", {
      key: span,
      staticClass: "ps-2 pe-2 py-4 border-success border-top-0 border-bottom-0 border-start-0 text-center",
      "class": {
        "text-warning2": index === _vm.currentSpan
      },
      on: {
        click: function click($event) {
          _vm.currentSpan = index;
        }
      }
    }, [_vm._v(_vm._s(span) + "\n        ")]);
  }), 0) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    ref: "offview",
    staticClass: "off",
    "class": {
      "border col-6 add-overflow-y": _vm.viewMode === null,
      "memorandum col-12": _vm.viewMode === "memorandum",
      "d-none": _vm.viewMode === "commentaire"
    }
  }, [_c("div", {
    staticClass: "head-opt-block-container"
  }, [_c("div", {
    staticClass: "head-opt-block"
  }, [_vm.viewMode !== null ? _c("i", {
    staticClass: "icofont icofont-read-book",
    attrs: {
      title: "Vue partagée"
    },
    on: {
      click: function click($event) {
        return _vm.showComponent(null);
      }
    }
  }) : _vm._e(), _vm._v(" "), _vm.viewMode === null ? _c("i", {
    staticClass: "icofont icofont-close",
    attrs: {
      title: "Fermer le mémorandum"
    },
    on: {
      click: function click($event) {
        return _vm.showComponent("commentaire");
      }
    }
  }) : _vm._e(), _vm._v(" "), _vm.viewMode === "memorandum" ? _c("button", {
    "class": {
      "get-attention": _vm.getAttention
    }
  }, [_c("i", {
    staticClass: "icofont icofont-comment",
    attrs: {
      title: "Afficher la fiche de commentaire"
    },
    on: {
      click: function click($event) {
        return _vm.showComponent("commentaire");
      }
    }
  })]) : _vm._e(), _vm._v(" "), _c("i", {
    staticClass: "icofont-print",
    attrs: {
      title: "Imprimer"
    },
    on: {
      click: function click($event) {
        return _vm.printerService.launchPrinter(_vm.leftSpans, 0, "COFINA");
      }
    }
  })])]), _vm._v(" "), _c(_vm.components[_vm.currentSpan], _vm._b({
    tag: "component"
  }, "component", _vm.currentProps, false)), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_c("appnstamp", {
    attrs: {
      dossier_credit: _vm.dossier_credit,
      doc_tobe_produced: _vm.doc_tobe_produced,
      authcheckusr: _vm.authcheckusr
    }
  })], 1)], 1), _vm._v(" "), _c("div", {
    ref: "commentaire",
    staticClass: "pt-2 off",
    "class": {
      "border col-6 add-overflow-y": _vm.viewMode == null,
      "commentaire col-12": _vm.viewMode === "commentaire",
      "d-none": _vm.viewMode === "memorandum"
    }
  }, [_c("div", {
    staticClass: "head-opt-block-container"
  }, [_c("div", {
    staticClass: "head-opt-block"
  }, [_vm.viewMode !== null ? _c("i", {
    staticClass: "icofont icofont-read-book",
    attrs: {
      title: "Vue partagée"
    },
    on: {
      click: function click($event) {
        return _vm.showComponent(null);
      }
    }
  }) : _vm._e(), _vm._v(" "), _vm.viewMode === null ? _c("i", {
    staticClass: "icofont icofont-close",
    attrs: {
      title: "Fermer le commentaire"
    },
    on: {
      click: function click($event) {
        return _vm.showComponent("memorandum");
      }
    }
  }) : _vm._e(), _vm._v(" "), _vm.viewMode !== null ? _c("i", {
    staticClass: "icofont icofont-page",
    attrs: {
      title: "Afficher le mémorandum"
    },
    on: {
      click: function click($event) {
        return _vm.showComponent("memorandum");
      }
    }
  }) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_c("costumed-fiche", {
    attrs: {
      fiche_name: "Fiche de commentaire",
      backend_name: "fiche_commentaires",
      mustNotify: false,
      cred_pub_key: (_vm$dossier_credit = _vm.dossier_credit) === null || _vm$dossier_credit === void 0 ? void 0 : _vm$dossier_credit.cred_pub_key,
      fiche_corps: (_vm$dossier_credit2 = _vm.dossier_credit) === null || _vm$dossier_credit2 === void 0 ? void 0 : _vm$dossier_credit2.fiche_commentaires
    }
  })], 1)])])], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/DerogationOffMicrofinance.vue?vue&type=style&index=0&id=50720acc&lang=css&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/DerogationOffMicrofinance.vue?vue&type=style&index=0&id=50720acc&lang=css&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n*[data-v-50720acc] {\r\n\r\n    font-family: \"Google sans\";\n}\nth[data-v-50720acc] {\r\n    background: #f4f3f3 !important;\n}\n.leftNav[data-v-50720acc] {\r\n    position: fixed;\r\n    z-index: 25;\r\n    top: 16vh;\r\n    left: 0;\r\n    font-weight: bold;\r\n    writing-mode:\r\n        vertical-lr;\r\n    text-orientation: mixed;\r\n    cursor: pointer;\r\n    box-shadow: 0 0 2px 0px grey;\r\n    width: 3vh;\r\n    height: 82vh;\r\n    overflow-y: auto;\r\n    overflow-x: hidden;\r\n    white-space: nowrap;\r\n    padding-right: 26px;\n}\n.leftNav strong[data-v-50720acc] {\r\n    flex-grow: 1 !important;\r\n    flex-shrink: 1 !important;\r\n    flex-basis: content;\r\n    cursor: pointer;\n}\n.ctn[data-v-50720acc] {\r\n    position: fixed;\r\n    z-index: 25;\r\n    top: 110px;\r\n    left: 0;\r\n    font-weight: bold;\r\n    writing-mode:\r\n        vertical-lr;\r\n    text-orientation: mixed;\r\n    cursor: pointer;\r\n    box-shadow: 0 0 2px 0px grey;\r\n    width: 3vh;\r\n    height: 82%;\r\n    overflow-y: auto;\r\n    overflow-x: hidden;\r\n    white-space: nowrap;\r\n    padding-right: 26px;\n}\n.text-warning2[data-v-50720acc] {\r\n    color: #e67e22;\n}\r\n\r\n/* Style Switch entre commentaire et offview*/\n#menuBtn[data-v-50720acc] {\r\n    position: fixed;\r\n    z-index: 9999;\r\n    font-weight: bold;\r\n    left: 40%;\r\n    top: 94%;\r\n    /* border-radius:5px;  */\r\n    box-shadow: 0 0 4px 0 black;\r\n    transform: translateX(35%);\r\n    cursor: pointer;\r\n    transition-duration: 0.2s;\n}\n#menuBtn[data-v-50720acc]:hover {\r\n    transform: scale(1.1);\r\n    left: 43%;\n}\n#menuBtn[data-v-50720acc]:active {\r\n    transform: scale(0.9);\n}\r\n\r\n/* Style Switch entre commentaire et offview*/\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/DerogationOffMicrofinance.vue?vue&type=style&index=0&id=50720acc&lang=css&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/DerogationOffMicrofinance.vue?vue&type=style&index=0&id=50720acc&lang=css&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DerogationOffMicrofinance_vue_vue_type_style_index_0_id_50720acc_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DerogationOffMicrofinance.vue?vue&type=style&index=0&id=50720acc&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/DerogationOffMicrofinance.vue?vue&type=style&index=0&id=50720acc&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DerogationOffMicrofinance_vue_vue_type_style_index_0_id_50720acc_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DerogationOffMicrofinance_vue_vue_type_style_index_0_id_50720acc_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/offview lazy recursive ^\\.\\/.*\\/memo\\/derogation\\/DER1\\.vue$":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/offview/ lazy ^\.\/.*\/memo\/derogation\/DER1\.vue$ namespace object ***!
  \******************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./microfinance/cofina/memo/derogation/DER1.vue": [
		"./resources/js/components/offview/microfinance/cofina/memo/derogation/DER1.vue",
		"resources_js_components_offview_microfinance_cofina_memo_derogation_DER1_vue"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./resources/js/components/offview lazy recursive ^\\.\\/.*\\/memo\\/derogation\\/DER1\\.vue$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./resources/js/components/shared/DerogationOffMicrofinance.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/components/shared/DerogationOffMicrofinance.vue ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DerogationOffMicrofinance_vue_vue_type_template_id_50720acc_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DerogationOffMicrofinance.vue?vue&type=template&id=50720acc&scoped=true */ "./resources/js/components/shared/DerogationOffMicrofinance.vue?vue&type=template&id=50720acc&scoped=true");
/* harmony import */ var _DerogationOffMicrofinance_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DerogationOffMicrofinance.vue?vue&type=script&lang=js */ "./resources/js/components/shared/DerogationOffMicrofinance.vue?vue&type=script&lang=js");
/* harmony import */ var _DerogationOffMicrofinance_vue_vue_type_style_index_0_id_50720acc_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DerogationOffMicrofinance.vue?vue&type=style&index=0&id=50720acc&lang=css&scoped=true */ "./resources/js/components/shared/DerogationOffMicrofinance.vue?vue&type=style&index=0&id=50720acc&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DerogationOffMicrofinance_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _DerogationOffMicrofinance_vue_vue_type_template_id_50720acc_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _DerogationOffMicrofinance_vue_vue_type_template_id_50720acc_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "50720acc",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/shared/DerogationOffMicrofinance.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/shared/DerogationOffMicrofinance.vue?vue&type=script&lang=js":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/shared/DerogationOffMicrofinance.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DerogationOffMicrofinance_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DerogationOffMicrofinance.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/DerogationOffMicrofinance.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DerogationOffMicrofinance_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/shared/DerogationOffMicrofinance.vue?vue&type=style&index=0&id=50720acc&lang=css&scoped=true":
/*!******************************************************************************************************************************!*\
  !*** ./resources/js/components/shared/DerogationOffMicrofinance.vue?vue&type=style&index=0&id=50720acc&lang=css&scoped=true ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DerogationOffMicrofinance_vue_vue_type_style_index_0_id_50720acc_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DerogationOffMicrofinance.vue?vue&type=style&index=0&id=50720acc&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/DerogationOffMicrofinance.vue?vue&type=style&index=0&id=50720acc&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/shared/DerogationOffMicrofinance.vue?vue&type=template&id=50720acc&scoped=true":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/shared/DerogationOffMicrofinance.vue?vue&type=template&id=50720acc&scoped=true ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DerogationOffMicrofinance_vue_vue_type_template_id_50720acc_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DerogationOffMicrofinance_vue_vue_type_template_id_50720acc_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DerogationOffMicrofinance_vue_vue_type_template_id_50720acc_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DerogationOffMicrofinance.vue?vue&type=template&id=50720acc&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/DerogationOffMicrofinance.vue?vue&type=template&id=50720acc&scoped=true");


/***/ })

}]);