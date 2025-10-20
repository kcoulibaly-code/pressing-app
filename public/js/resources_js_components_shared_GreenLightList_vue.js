"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_shared_GreenLightList_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/GreenLightList.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/GreenLightList.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "GreenLight",
  props: {
    greenLights: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    type: {
      type: String,
      "default": ''
    },
    containerClass: {
      type: String,
      "default": 'd-flex flex-column'
    },
    singleOpened: {
      type: Boolean,
      "default": false
    },
    search: {
      type: String,
      "default": ''
    },
    forceOpen: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      is_answering: false,
      current_green_light: null,
      message_response: '',
      ebapisHost: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__["default"].host,
      loading_answer: false
    };
  },
  methods: {
    highlightedText: function highlightedText(text) {
      if (!this.search) {
        return text; // Si aucun terme de recherche, retourne le texte tel quel
      }

      // Crée une expression régulière pour rechercher le terme (insensible à la casse)
      var regex = new RegExp("(".concat(this.search.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), ")"), "gi");

      // Remplace les occurrences du terme par un span avec un style de surlignage
      return text.replace(regex, '<span style="background-color: orange;">$1</span>');
    },
    sendResponse: function sendResponse(id, response) {
      var _this = this;
      // const current_green_light = this.green_lights.find(el => el.id === id)
      this.loading_answer = true;
      this.$axios.post(this.ebapisHost + "creditbuilder/api/v1/answer-green-light/", {
        "green_light_id": id,
        "response": response,
        message: this.message_response,
        cred_pub_key: this.$route.params.templateId
      }).then(function (res) {
        _this.$toasted.show("Bravo votre reponse a été enregistrée !");
        EventBus.$emit("value-updatedT1");
        _this.message_response = '';
        _this.current_green_light = null;
      })["catch"](function (err) {
        console.log(err.data);
        _this.$toasted.error("Une erreur est survenue lors de l'enregistrement de votre reponse");
      })["finally"](function () {
        return _this.loading_answer = false;
      });
    },
    str_title: function str_title(str) {
      if (!str) return '';
      return str.split(' ').map(function (el) {
        return el.charAt(0).toUpperCase() + el.slice(1).toLowerCase();
      }).join(' ');
    },
    didIAnswered: function didIAnswered(green_light) {
      var _green_light$response,
        _this2 = this;
      if (!green_light) return false;
      var my_answer = (_green_light$response = green_light.responses) === null || _green_light$response === void 0 ? void 0 : _green_light$response.find(function (el) {
        var _this2$authenticatedU;
        return el.user_id === ((_this2$authenticatedU = _this2.authenticatedUser) === null || _this2$authenticatedU === void 0 ? void 0 : _this2$authenticatedU.id);
      });
      return Boolean(my_answer === null || my_answer === void 0 ? void 0 : my_answer.response);
    },
    getMyAnswer: function getMyAnswer(green_light) {
      var _green_light$response2,
        _this3 = this;
      if (!green_light) return false;
      var my_answer = (_green_light$response2 = green_light.responses) === null || _green_light$response2 === void 0 ? void 0 : _green_light$response2.find(function (el) {
        var _this3$authenticatedU;
        return el.user_id === ((_this3$authenticatedU = _this3.authenticatedUser) === null || _this3$authenticatedU === void 0 ? void 0 : _this3$authenticatedU.id);
      });
      return my_answer;
    }
  },
  computed: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/GreenLightList.vue?vue&type=template&id=9f263140":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/GreenLightList.vue?vue&type=template&id=9f263140 ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$greenLights;
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    "class": _vm.containerClass,
    staticStyle: {
      "max-height": "400px",
      "overflow-y": "auto"
    }
  }, [((_vm$greenLights = _vm.greenLights) === null || _vm$greenLights === void 0 ? void 0 : _vm$greenLights.length) > 0 ? _c("div", {
    staticClass: "d-flex flex-column px-0 pb-2 mb-3"
  }, _vm._l(_vm.greenLights, function (item) {
    var _vm$current_green_lig, _vm$authenticatedUser, _vm$getMyAnswer, _vm$getMyAnswer2, _vm$getMyAnswer3;
    return _c("div", {
      key: item.id,
      staticClass: "col-12"
    }, [_c("expandable-item", {
      attrs: {
        icon: "icofont-lamp-light",
        label: _vm.str_title(item.type).replace("_", " ") || "Green light",
        subtitle: _vm._f("textTruncate")(item.message, 30),
        right_text: item.created_at,
        forceOpen: _vm.singleOpened ? ((_vm$current_green_lig = _vm.current_green_light) === null || _vm$current_green_lig === void 0 ? void 0 : _vm$current_green_lig.id) === item.id || _vm.forceOpen : false
      },
      on: {
        click: function click($event) {
          _vm.current_green_light = item;
          _vm.message_response = "";
        }
      }
    }, [_c("div", {
      staticClass: "card border-none m-0 w-100"
    }, [_c("div", {
      staticClass: "card-body p-1"
    }, [_c("div", {
      staticClass: "d-flex justify-content-between align-items-center mb-2"
    }, [_c("h5", {
      staticClass: "card-title mb-0"
    }, [_c("span", {
      domProps: {
        innerHTML: _vm._s(_vm.highlightedText(_vm.str_title(item.sender.name)))
      }
    })]), _vm._v(" "), _c("small", {
      staticClass: "text-muted"
    }, [_vm._v("\n                                " + _vm._s(_vm._f("formatDate")(item.created_at, true)) + "\n                            ")])]), _vm._v(" "), _c("p", {
      staticClass: "card-text mb-3",
      domProps: {
        innerHTML: _vm._s(_vm.highlightedText(item.message))
      }
    }), _vm._v(" "), _c("div", {}, [item.sender.user_id === ((_vm$authenticatedUser = _vm.authenticatedUser) === null || _vm$authenticatedUser === void 0 ? void 0 : _vm$authenticatedUser.user_id) ? _c("div", [_c("strong", {
      staticClass: "text-muted fw-semibold"
    }, [_vm._v("Reponses")]), _vm._v(" "), _c("ul", {
      staticClass: "list-group"
    }, _vm._l(item.responses, function (answer) {
      return _c("li", {
        key: answer.email,
        staticClass: "list-group-item"
      }, [_c("div", {
        staticClass: "d-flex w-100 justify-content-between"
      }, [_c("h6", {
        staticClass: "mb-1"
      }, [_vm._v(" " + _vm._s(_vm.str_title(answer.name)) + "\n                                            ")]), _vm._v(" "), answer.response === "accepte" ? _c("small", {
        staticClass: "bg-success text-white rounded-pill px-2 align-middle d-flex align-items-center gap-1"
      }, [_c("i", {
        staticClass: "icofont-check"
      }), _vm._v(" Accepté\n                                            ")]) : _vm._e(), _vm._v(" "), answer.response === "refuse" ? _c("small", {
        staticClass: "bg-danger text-white rounded-pill px-2 align-middle d-flex align-items-center gap-1"
      }, [_c("i", {
        staticClass: "icofont-close"
      }), _vm._v(" Refusé\n                                            ")]) : _vm._e()]), _vm._v(" "), _c("p", {
        staticClass: "mb-1"
      }, [_vm._v("\n                                            " + _vm._s(answer.message) + "\n                                        ")])]);
    }), 0)]) : _vm.didIAnswered(item) ? _c("div", {
      staticClass: "d-flex flex-column justify-content-between"
    }, [_c("ul", {
      staticClass: "list-group"
    }, [_c("li", {
      staticClass: "list-group-item"
    }, [_c("div", {
      staticClass: "d-flex w-100 justify-content-between"
    }, [_c("h6", {
      staticClass: "mb-1"
    }, [_vm._v(" Vous ")]), _vm._v(" "), ((_vm$getMyAnswer = _vm.getMyAnswer(item)) === null || _vm$getMyAnswer === void 0 ? void 0 : _vm$getMyAnswer.response) === "accepte" ? _c("small", {
      staticClass: "bg-success text-white rounded-pill px-2 align-middle d-flex align-items-center gap-1"
    }, [_c("i", {
      staticClass: "icofont-check"
    }), _vm._v(" Accepté\n                                            ")]) : _vm._e(), _vm._v(" "), ((_vm$getMyAnswer2 = _vm.getMyAnswer(item)) === null || _vm$getMyAnswer2 === void 0 ? void 0 : _vm$getMyAnswer2.response) === "refuse" ? _c("small", {
      staticClass: "bg-danger text-white rounded-pill px-2 align-middle d-flex align-items-center gap-1"
    }, [_c("i", {
      staticClass: "icofont-close"
    }), _vm._v(" Refusé\n                                            ")]) : _vm._e()]), _vm._v(" "), _c("p", {
      staticClass: "mb-1"
    }, [_vm._v("\n                                            " + _vm._s((_vm$getMyAnswer3 = _vm.getMyAnswer(item)) === null || _vm$getMyAnswer3 === void 0 ? void 0 : _vm$getMyAnswer3.message) + "\n                                        ")])])])]) : _c("div", [_c("div", {
      staticClass: "d-flex flex-column justify-content-between"
    }, [_c("div", {
      staticClass: "form-group mb-2"
    }, [_c("label", {
      staticClass: "form-label",
      attrs: {
        "for": "message"
      }
    }, [_vm._v("\n                                            Veuillez saisir un commentaire\n                                        ")]), _vm._v(" "), _c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.message_response,
        expression: "message_response"
      }],
      staticClass: "form-control",
      attrs: {
        rows: "4",
        cols: "50"
      },
      domProps: {
        value: _vm.message_response
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.message_response = $event.target.value;
        }
      }
    })]), _vm._v(" "), _c("div", {
      staticClass: "d-flex justify-content-between gap-2"
    }, [_c("button", {
      staticClass: "btn btn-danger d-block col",
      attrs: {
        type: "button",
        disabled: _vm.loading_answer
      },
      on: {
        click: function click($event) {
          return _vm.sendResponse(item.id, "refuse");
        }
      }
    }, [_vm.loading_answer ? _c("span", {
      staticClass: "spinner-border spinner-border-sm me-2",
      attrs: {
        role: "status",
        "aria-hidden": "true"
      }
    }) : _vm._e(), _vm._v("\n                                            Refuser\n                                        ")]), _vm._v(" "), _c("button", {
      staticClass: "btn btn-success d-block col",
      attrs: {
        type: "button",
        disabled: _vm.loading_answer
      },
      on: {
        click: function click($event) {
          return _vm.sendResponse(item.id, "accepte");
        }
      }
    }, [_vm.loading_answer ? _c("span", {
      staticClass: "spinner-border spinner-border-sm me-2",
      attrs: {
        role: "status",
        "aria-hidden": "true"
      }
    }) : _vm._e(), _vm._v("\n                                            Accepter\n                                        ")])])])])])])])])], 1);
  }), 0) : _c("div", {
    staticClass: "d-flex justify-content-center align-items-center text-center w-100 h-25"
  }, [_vm._m(0)])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "mt-5 text-muted"
  }, [_c("i", {
    staticClass: "icofont icofont-dropbox icofont-4x p-0"
  }), _vm._v(" "), _c("p", {
    staticClass: "my-0"
  }, [_vm._v("Aucune demande enregistrée")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/shared/GreenLightList.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/shared/GreenLightList.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GreenLightList_vue_vue_type_template_id_9f263140__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GreenLightList.vue?vue&type=template&id=9f263140 */ "./resources/js/components/shared/GreenLightList.vue?vue&type=template&id=9f263140");
/* harmony import */ var _GreenLightList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GreenLightList.vue?vue&type=script&lang=js */ "./resources/js/components/shared/GreenLightList.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _GreenLightList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _GreenLightList_vue_vue_type_template_id_9f263140__WEBPACK_IMPORTED_MODULE_0__.render,
  _GreenLightList_vue_vue_type_template_id_9f263140__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/shared/GreenLightList.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/shared/GreenLightList.vue?vue&type=script&lang=js":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/shared/GreenLightList.vue?vue&type=script&lang=js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GreenLightList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GreenLightList.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/GreenLightList.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GreenLightList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/shared/GreenLightList.vue?vue&type=template&id=9f263140":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/shared/GreenLightList.vue?vue&type=template&id=9f263140 ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GreenLightList_vue_vue_type_template_id_9f263140__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GreenLightList_vue_vue_type_template_id_9f263140__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GreenLightList_vue_vue_type_template_id_9f263140__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GreenLightList.vue?vue&type=template&id=9f263140 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/GreenLightList.vue?vue&type=template&id=9f263140");


/***/ })

}]);