"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_shared_SimplifiedDocAnalOffBank_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/SimplifiedDocAnalOffBank.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/SimplifiedDocAnalOffBank.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_printer_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/printer.service */ "./resources/js/services/printer.service.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "SimplifiedDocAnalOffBank",
  props: {
    producMemo: {
      type: String,
      "default": 'memorandum'
    },
    dossier_credit: Object,
    dismiss: Boolean,
    offBankList: Array,
    doc_tobe_produced: String,
    authcheckusr: Object
  },
  mounted: function mounted() {
    var _this$dossier_credit,
      _this = this,
      _this$dossier_credit$,
      _this$dossier_credit2;
    this.checkIfEmpty();
    var userOptionCache = this.fetchEditModeCache((_this$dossier_credit = this.dossier_credit) === null || _this$dossier_credit === void 0 ? void 0 : _this$dossier_credit.cred_pub_key);
    var editor_view_mode = "";
    if (userOptionCache != null) {
      editor_view_mode = userOptionCache.mode;
      if ([1, 2, 4, 5].includes(editor_view_mode)) {
        this.changeBlock('CAF');
      } else {
        if (this.doc_tobe_produced === 'CONTRE_ANALYSE_GROUPE' || this.doc_tobe_produced === 'REVIEW_CONTRE_ANALYSE_GROUPE' || this.doc_tobe_produced === 'PV_CONTRE_ANALYSE_GROUPE') {
          this.changeBlock('CAG');
        } else {
          this.changeBlock('CAF');
        }
      }
    } else {
      this.changeBlock('CAF');
    }
    this.unansweredComment();
    EventBus.$on("value-updated", function () {
      _this.unansweredComment();
    });
    this.fiche_a_utilise = (_this$dossier_credit$ = (_this$dossier_credit2 = this.dossier_credit) === null || _this$dossier_credit2 === void 0 || (_this$dossier_credit2 = _this$dossier_credit2.cred_pub_tb_1001) === null || _this$dossier_credit2 === void 0 ? void 0 : _this$dossier_credit2.fiche_a_utilise) !== null && _this$dossier_credit$ !== void 0 ? _this$dossier_credit$ : "";
    if (["", null, undefined].includes(this.fiche_a_utilise)) {
      var _this$dossier_credit3;
      if (((_this$dossier_credit3 = this.dossier_credit) === null || _this$dossier_credit3 === void 0 ? void 0 : _this$dossier_credit3.selected_path_type) == "SHORT") {
        this.fiche_a_utilise = "Fiche Analyse CCDG";
      } else {
        this.fiche_a_utilise = "Fiche de Décision CCCA et CA";
      }
    }
    EventBus.$on("close-Workspace-right-left", function (data) {
      _this.is_fullscreen = data;
    });
    EventBus.$emit('request-view-mode');
    this.nodeElements = this.$refs.node_element_views;
  },
  created: function created() {
    var _this2 = this;
    EventBus.$on('view-mode', function (data) {
      _this2.detViewMode = data;
    });
  },
  data: function data() {
    return {
      seeContent: false,
      iterateLignes: 0,
      smiterateLignes: 0,
      tb_34: null,
      isDoc: false,
      selectedOpt: "CAF",
      producContreAnl: 'contre-analyse',
      specialBankList: ['CONTRE_ANALYSE_FILIALE', 'CONTRE_ANALYSE_GROUPE', 'PV_CONTRE_ANALYSE_FILIALE', 'PV_CONTRE_ANALYSE_GROUPE'],
      currentYear: new Date().getFullYear(),
      // 2020
      viewMode: 'memorandum',
      printerService: _services_printer_service__WEBPACK_IMPORTED_MODULE_0__["default"],
      getAttention: false,
      fiche_a_utilise: "",
      is_fullscreen: false,
      detViewMode: null,
      nodeElements: []
    };
  },
  methods: _defineProperty({
    showComponent: function showComponent(element) {
      this.viewMode = element;
    },
    unansweredComment: function unansweredComment() {
      var _this$dossier_credit4;
      if (!((_this$dossier_credit4 = this.dossier_credit) !== null && _this$dossier_credit4 !== void 0 && _this$dossier_credit4.fiche_commentaires)) return false;
      // Vérifie si une fiche de commentaire n'a pas de réponse
      var isThereUnansweredComment = this.dossier_credit.fiche_commentaires.some(function (fc) {
        return fc.fiche.some(function (f) {
          var _f$question, _f$reponse;
          return ((_f$question = f.question) === null || _f$question === void 0 ? void 0 : _f$question.trim()) && !((_f$reponse = f.reponse) !== null && _f$reponse !== void 0 && _f$reponse.trim());
        });
      });
      this.getAttention = isThereUnansweredComment;
    },
    changeBlock: function changeBlock(blockName) {
      this.selectedOpt = blockName;
    },
    formatDate: function formatDate(date) {
      var options = {
        year: "numeric",
        month: "numeric",
        day: "numeric"
      };
      return new Date(date).toLocaleDateString("fr", options);
    },
    launchCompilerT0: function launchCompilerT0() {
      this.$emit('value-updatedT1');
      EventBus.$emit('value-updated');
    },
    checkIfEmpty: function checkIfEmpty() {
      if (this.dossier_credit.tbs_in_use.length > 0) {
        this.seeContent = true;
      } else {
        this.$toasted.show('Ce dossier crédit est vide');
      }
    }
  }, "formatDate", function formatDate(date) {
    var options = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric'
    };
    return new Date(date).toLocaleDateString('fr', options);
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/SimplifiedDocAnalOffBank.vue?vue&type=template&id=45e1ebc2&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/SimplifiedDocAnalOffBank.vue?vue&type=template&id=45e1ebc2&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$dossier_credit, _vm$dossier_credit2, _vm$dossier_credit3, _vm$dossier_credit4, _vm$dossier_credit5, _vm$dossier_credit6;
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    "class": {
      tp_page_fullscreen: _vm.is_fullscreen && [0, 1, 3].includes(_vm.detViewMode)
    },
    attrs: {
      id: "printcaffil"
    }
  }, [_vm.dismiss ? [_c("doc-header", {
    attrs: {
      dossier_credit: _vm.dossier_credit,
      authcheckusr: _vm.authcheckusr
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
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
  }, [_vm.viewMode !== null ? _c("button", [_c("i", {
    staticClass: "icofont icofont-read-book",
    attrs: {
      title: "Vue partagée"
    },
    on: {
      click: function click($event) {
        return _vm.showComponent(null);
      }
    }
  })]) : _vm._e(), _vm._v(" "), _vm.viewMode === null ? _c("button", [_c("i", {
    staticClass: "icofont icofont-close",
    attrs: {
      title: "Fermer le mémorandum"
    },
    on: {
      click: function click($event) {
        return _vm.showComponent("commentaire");
      }
    }
  })]) : _vm._e(), _vm._v(" "), _vm.viewMode === "memorandum" ? _c("button", {
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
  })]) : _vm._e(), _vm._v(" "), _c("button", [_c("i", {
    staticClass: "icofont-print",
    attrs: {
      title: "Imprimer"
    },
    on: {
      click: function click($event) {
        return _vm.printerService.launchPrinter(null, null, null, "printcaffil");
      }
    }
  })])])]), _vm._v(" "), _c("div", [_c("div", {
    staticClass: "row justify-content-center p-opts no_printer_content_body"
  }, [_c("div", {
    "class": _vm.selectedOpt == "CAF" ? "col bg-grey bg-opacity-50" : "col",
    on: {
      click: function click($event) {
        return _vm.changeBlock("CAF");
      }
    }
  }, [_vm._v("CONTRE ANALYSE\n                            FILIALE")]), _vm._v(" "), _vm.doc_tobe_produced === "CONTRE_ANALYSE_GROUPE" || _vm.doc_tobe_produced === "REVIEW_CONTRE_ANALYSE_GROUPE" || _vm.doc_tobe_produced === "PV_CONTRE_ANALYSE_GROUPE" ? _c("div", {
    "class": _vm.selectedOpt == "CAG" ? "col bg-grey bg-opacity-50" : "col",
    on: {
      click: function click($event) {
        return _vm.changeBlock("CAG");
      }
    }
  }, [_vm._v("\n                            CONTRE ANALYSE GROUPE")]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "tabs effect-1"
  }, [_c("loader-off-view", {
    attrs: {
      nodeElements: _vm.nodeElements
    }
  }), _vm._v(" "), _vm.selectedOpt === "CAF" && _vm.seeContent === true ? _c("div", {
    ref: "node_element_views"
  }, [_vm.fiche_a_utilise == "Fiche Analyse CCDG" ? [(_vm$dossier_credit = _vm.dossier_credit) !== null && _vm$dossier_credit !== void 0 && _vm$dossier_credit.cred_pub_tb_17501 ? _c("fiche-analyse-ccdg-final", {
    attrs: {
      dossier_credit: _vm.dossier_credit,
      authcheckusr: _vm.authcheckusr,
      doc_tobe_produced: _vm.doc_tobe_produced,
      dismiss: _vm.dismiss,
      offBankList: _vm.offBankList
    }
  }) : _c("fiche-analyse-ccdg", {
    attrs: {
      dossier_credit: _vm.dossier_credit,
      authcheckusr: _vm.authcheckusr,
      doc_tobe_produced: _vm.doc_tobe_produced,
      dismiss: _vm.dismiss,
      offBankList: _vm.offBankList
    }
  })] : _vm._e(), _vm._v(" "), _vm.fiche_a_utilise == "Fiche de Décision CCCA et CA" ? [(_vm$dossier_credit2 = _vm.dossier_credit) !== null && _vm$dossier_credit2 !== void 0 && _vm$dossier_credit2.cred_pub_tb_19501 ? _c("fiche-dec-crcca-ca-final", {
    attrs: {
      dossier_credit: _vm.dossier_credit,
      authcheckusr: _vm.authcheckusr,
      doc_tobe_produced: _vm.doc_tobe_produced,
      dismiss: _vm.dismiss,
      offBankList: _vm.offBankList
    }
  }) : _c("fiche-dec-crcca-ca", {
    attrs: {
      dossier_credit: _vm.dossier_credit,
      authcheckusr: _vm.authcheckusr,
      doc_tobe_produced: _vm.doc_tobe_produced,
      dismiss: _vm.dismiss,
      offBankList: _vm.offBankList
    }
  })] : _vm._e()], 2) : _vm._e(), _vm._v(" "), _vm.selectedOpt === "CAG" && _vm.seeContent === true ? _c("div", {}, [_c("ca-groupe", {
    attrs: {
      dossier_credit: _vm.dossier_credit,
      authcheckusr: _vm.authcheckusr,
      doc_tobe_produced: _vm.doc_tobe_produced,
      dismiss: _vm.dismiss,
      offBankList: _vm.offBankList
    }
  })], 1) : _vm._e()], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "p-2 off",
    "class": {
      "border col-6 add-overflow-y": _vm.viewMode == null,
      "commentaire col-12": _vm.viewMode === "commentaire",
      "d-none": _vm.viewMode === "memorandum"
    }
  }, [_c("div", {
    staticClass: "head-opt-block-container"
  }, [_c("div", {
    staticClass: "head-opt-block"
  }, [_vm.viewMode !== null ? _c("button", [_c("i", {
    staticClass: "icofont icofont-read-book",
    attrs: {
      title: "Vue partagée"
    },
    on: {
      click: function click($event) {
        return _vm.showComponent(null);
      }
    }
  })]) : _vm._e(), _vm._v(" "), _vm.viewMode === null ? _c("button", [_c("i", {
    staticClass: "icofont icofont-close",
    attrs: {
      title: "Fermer le commentaire"
    },
    on: {
      click: function click($event) {
        return _vm.showComponent("memorandum");
      }
    }
  })]) : _vm._e(), _vm._v(" "), _vm.viewMode !== null ? _c("button", [_c("i", {
    staticClass: "icofont icofont-page",
    attrs: {
      title: "Afficher le mémorandum"
    },
    on: {
      click: function click($event) {
        return _vm.showComponent("memorandum");
      }
    }
  })]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_c("costumed-fiche", {
    attrs: {
      fiche_name: "Fiche de commentaire",
      backend_name: "fiche_commentaires",
      mustNotify: false,
      cred_pub_key: (_vm$dossier_credit3 = _vm.dossier_credit) === null || _vm$dossier_credit3 === void 0 ? void 0 : _vm$dossier_credit3.cred_pub_key,
      fiche_corps: (_vm$dossier_credit4 = _vm.dossier_credit) === null || _vm$dossier_credit4 === void 0 ? void 0 : _vm$dossier_credit4.fiche_commentaires
    }
  })], 1)])])] : [_c("div", {
    staticClass: "row justify-content-center p-opts no_printer_content_body"
  }, [_c("div", {
    "class": _vm.selectedOpt == "CAF" ? "col bg-grey bg-opacity-50" : "col",
    on: {
      click: function click($event) {
        return _vm.changeBlock("CAF");
      }
    }
  }, [_vm._v("CONTRE ANALYSE\n                FILIALE")]), _vm._v(" "), _vm.doc_tobe_produced === "CONTRE_ANALYSE_GROUPE" || _vm.doc_tobe_produced === "REVIEW_CONTRE_ANALYSE_GROUPE" || _vm.doc_tobe_produced === "PV_CONTRE_ANALYSE_GROUPE" ? _c("div", {
    "class": _vm.selectedOpt == "CAG" ? "col bg-grey bg-opacity-50" : "col",
    on: {
      click: function click($event) {
        return _vm.changeBlock("CAG");
      }
    }
  }, [_vm._v("\n                CONTRE ANALYSE GROUPE")]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "tabs effect-1 py-1"
  }, [_vm.selectedOpt === "CAF" && _vm.seeContent === true ? _c("div", {}, [_vm.fiche_a_utilise == "Fiche Analyse CCDG" ? [(_vm$dossier_credit5 = _vm.dossier_credit) !== null && _vm$dossier_credit5 !== void 0 && _vm$dossier_credit5.cred_pub_tb_17501 ? _c("fiche-analyse-ccdg-final", {
    attrs: {
      dossier_credit: _vm.dossier_credit,
      authcheckusr: _vm.authcheckusr,
      doc_tobe_produced: _vm.doc_tobe_produced,
      dismiss: _vm.dismiss,
      offBankList: _vm.offBankList
    }
  }) : _c("fiche-analyse-ccdg", {
    attrs: {
      dossier_credit: _vm.dossier_credit,
      authcheckusr: _vm.authcheckusr,
      doc_tobe_produced: _vm.doc_tobe_produced,
      dismiss: _vm.dismiss,
      offBankList: _vm.offBankList
    }
  })] : _vm._e(), _vm._v(" "), _vm.fiche_a_utilise == "Fiche de Décision CCCA et CA" ? [(_vm$dossier_credit6 = _vm.dossier_credit) !== null && _vm$dossier_credit6 !== void 0 && _vm$dossier_credit6.cred_pub_tb_19501 ? _c("fiche-dec-crcca-ca-final", {
    attrs: {
      dossier_credit: _vm.dossier_credit,
      authcheckusr: _vm.authcheckusr,
      doc_tobe_produced: _vm.doc_tobe_produced,
      dismiss: _vm.dismiss,
      offBankList: _vm.offBankList
    }
  }) : _c("fiche-dec-crcca-ca", {
    attrs: {
      dossier_credit: _vm.dossier_credit,
      authcheckusr: _vm.authcheckusr,
      doc_tobe_produced: _vm.doc_tobe_produced,
      dismiss: _vm.dismiss,
      offBankList: _vm.offBankList
    }
  })] : _vm._e()], 2) : _vm._e(), _vm._v(" "), _vm.selectedOpt === "CAG" && _vm.seeContent === true ? _c("div", {}, [_c("ca-groupe", {
    attrs: {
      dossier_credit: _vm.dossier_credit,
      authcheckusr: _vm.authcheckusr,
      doc_tobe_produced: _vm.doc_tobe_produced,
      dismiss: _vm.dismiss,
      offBankList: _vm.offBankList
    }
  })], 1) : _vm._e()])]], 2);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/SimplifiedDocAnalOffBank.vue?vue&type=style&index=0&id=45e1ebc2&lang=css&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/SimplifiedDocAnalOffBank.vue?vue&type=style&index=0&id=45e1ebc2&lang=css&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n*[data-v-45e1ebc2] {\r\n    font-family: \"Google sans\";\n}\n.head-analyse-financiere[data-v-45e1ebc2] {\r\n    margin-top: 15px;\r\n    padding: 16px;\r\n    border: 3px solid#b05b14;\r\n    font-weight: bold;\r\n    font-size: 16px;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    border-radius: 10px;\r\n    margin-bottom: 15px;\n}\n.contre-analyse[data-v-45e1ebc2] {\r\n    background-color: white;\r\n    /* box-shadow: 0 0 5px grey; */\r\n    padding: 10px;\n}\n.memo[data-v-45e1ebc2] {\r\n    margin-top: 10px;\r\n    padding: 20px 16px;\r\n    border: 2px solid black;\r\n    font-weight: 550;\r\n    font-size: 16px;\r\n    text-align: center;\r\n    text-transform: uppercase;\n}\nth[data-v-45e1ebc2] {\r\n    background: #f4f3f3 !important;\n}\ntd[data-v-45e1ebc2] {\r\n    font-size: 15px;\n}\n.card[data-v-45e1ebc2] {\r\n    border: 1px solid #000 !important;\n}\n.off-memo[data-v-45e1ebc2] {\r\n    background-color: white;\r\n    padding: 0px;\n}\n.text-container[data-v-45e1ebc2]::-webkit-scrollbar-track {\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\r\n    background-color: #f5f5f5;\n}\n.text-container[data-v-45e1ebc2]::-webkit-scrollbar {\r\n    width: 5px;\r\n    background-color: #f5f5f5;\n}\n.text-container[data-v-45e1ebc2]::-webkit-scrollbar-thumb {\r\n    background-color: #2c3e50;\r\n    border: 2px solid #555555;\n}\n.ctn[data-v-45e1ebc2] {\r\n    position: fixed;\r\n    z-index: 25;\r\n    top: 35vh;\r\n    font-weight: bold;\r\n    writing-mode: vertical-lr;\r\n    text-orientation: mixed;\r\n    cursor: pointer;\r\n    box-shadow: 0 0 2px 0px grey;\r\n    width: 4vh;\n}\n.p-opts .col[data-v-45e1ebc2] {\r\n    padding: 20px 10px;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    color: #3498db;\r\n    font-weight: bold;\r\n    cursor: pointer;\n}\n.tp_page_fullscreen[data-v-45e1ebc2] {\r\n    margin-left:40px !important;\r\n    width:95% !important; \r\n    left: 0 !important;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/SimplifiedDocAnalOffBank.vue?vue&type=style&index=0&id=45e1ebc2&lang=css&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/SimplifiedDocAnalOffBank.vue?vue&type=style&index=0&id=45e1ebc2&lang=css&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SimplifiedDocAnalOffBank_vue_vue_type_style_index_0_id_45e1ebc2_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SimplifiedDocAnalOffBank.vue?vue&type=style&index=0&id=45e1ebc2&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/SimplifiedDocAnalOffBank.vue?vue&type=style&index=0&id=45e1ebc2&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SimplifiedDocAnalOffBank_vue_vue_type_style_index_0_id_45e1ebc2_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SimplifiedDocAnalOffBank_vue_vue_type_style_index_0_id_45e1ebc2_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/shared/SimplifiedDocAnalOffBank.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/components/shared/SimplifiedDocAnalOffBank.vue ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SimplifiedDocAnalOffBank_vue_vue_type_template_id_45e1ebc2_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SimplifiedDocAnalOffBank.vue?vue&type=template&id=45e1ebc2&scoped=true */ "./resources/js/components/shared/SimplifiedDocAnalOffBank.vue?vue&type=template&id=45e1ebc2&scoped=true");
/* harmony import */ var _SimplifiedDocAnalOffBank_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SimplifiedDocAnalOffBank.vue?vue&type=script&lang=js */ "./resources/js/components/shared/SimplifiedDocAnalOffBank.vue?vue&type=script&lang=js");
/* harmony import */ var _SimplifiedDocAnalOffBank_vue_vue_type_style_index_0_id_45e1ebc2_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SimplifiedDocAnalOffBank.vue?vue&type=style&index=0&id=45e1ebc2&lang=css&scoped=true */ "./resources/js/components/shared/SimplifiedDocAnalOffBank.vue?vue&type=style&index=0&id=45e1ebc2&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SimplifiedDocAnalOffBank_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _SimplifiedDocAnalOffBank_vue_vue_type_template_id_45e1ebc2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _SimplifiedDocAnalOffBank_vue_vue_type_template_id_45e1ebc2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "45e1ebc2",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/shared/SimplifiedDocAnalOffBank.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/shared/SimplifiedDocAnalOffBank.vue?vue&type=script&lang=js":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/shared/SimplifiedDocAnalOffBank.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SimplifiedDocAnalOffBank_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SimplifiedDocAnalOffBank.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/SimplifiedDocAnalOffBank.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SimplifiedDocAnalOffBank_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/shared/SimplifiedDocAnalOffBank.vue?vue&type=style&index=0&id=45e1ebc2&lang=css&scoped=true":
/*!*****************************************************************************************************************************!*\
  !*** ./resources/js/components/shared/SimplifiedDocAnalOffBank.vue?vue&type=style&index=0&id=45e1ebc2&lang=css&scoped=true ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SimplifiedDocAnalOffBank_vue_vue_type_style_index_0_id_45e1ebc2_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SimplifiedDocAnalOffBank.vue?vue&type=style&index=0&id=45e1ebc2&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/SimplifiedDocAnalOffBank.vue?vue&type=style&index=0&id=45e1ebc2&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/shared/SimplifiedDocAnalOffBank.vue?vue&type=template&id=45e1ebc2&scoped=true":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/shared/SimplifiedDocAnalOffBank.vue?vue&type=template&id=45e1ebc2&scoped=true ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SimplifiedDocAnalOffBank_vue_vue_type_template_id_45e1ebc2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SimplifiedDocAnalOffBank_vue_vue_type_template_id_45e1ebc2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SimplifiedDocAnalOffBank_vue_vue_type_template_id_45e1ebc2_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SimplifiedDocAnalOffBank.vue?vue&type=template&id=45e1ebc2&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/SimplifiedDocAnalOffBank.vue?vue&type=template&id=45e1ebc2&scoped=true");


/***/ })

}]);