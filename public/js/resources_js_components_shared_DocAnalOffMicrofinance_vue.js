"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_shared_DocAnalOffMicrofinance_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/DocAnalOffMicrofinance.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/DocAnalOffMicrofinance.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************/
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
  name: "DocAnalOffMicrofinance",
  props: {
    // seeContent: {
    //     type: Boolean,
    //     require: true,
    // },
    producMemo: {
      type: String,
      "default": 'tp_page memorandum'
    },
    // isDoc: {
    //     type: Boolean,
    //     require: true,
    // },
    dossier_credit: Object,
    dismiss: Boolean,
    offBankList: Array,
    doc_tobe_produced: String,
    authcheckusr: Object
  },
  mounted: function mounted() {
    var _this$dossier_credit,
      _this = this;
    /* Switch entre commentaire et offview*/
    //  this.menuBtn('commentaire')
    /* Switch entre commentaire et offview*/
    this.alignCredLigne();
    this.checkIfEmpty();
    // this.scroll()
    this.navigateTouch();
    this.scrollTo();
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

    /*  Switch entre commentaire et offview*/
    // EventBus.$on("show-commentaire",(data)=>{
    //     if(data==null){
    //         if(this.$refs.commentaire){
    //             this.$refs.commentaire.classList.add('col-6')
    //             this.$refs.commentaire.classList.remove('col-12')
    //             this.$refs.commentaire.classList.remove('d-none')
    //         }
    //         if(this.$refs.closeOff) this.$refs.closeOff.classList.remove('d-none')

    //         if(this.$refs.offview){
    //             this.$refs.offview.classList.remove('col-12')
    //             this.$refs.offview.classList.remove('d-none')
    //             this.$refs.offview.classList.add('col-6')
    //         }

    //         // this.$refs.menu.classList.add('d-none')
    //         // this.$refs.menu.classList.add('d-none')

    //     }else if(data=='commentaire'){
    //         if(this.$refs.commentaire){
    //             this.$refs.commentaire.classList.remove('col-12')
    //             this.$refs.commentaire.classList.add('d-none')
    //         }
    //         if(this.$refs.offview){
    //             this.$refs.offview.classList.add('col-12')
    //             this.$refs.offview.classList.remove('d-none')
    //             this.$refs.offview.classList.remove('col-6')
    //         }
    //         // this.$refs.menu.classList.remove('d-none')

    //     }
    //     // this.menuBtn(data)

    // })
    this.unansweredComment();
    EventBus.$on("value-updated", function () {
      _this.unansweredComment();
    });
    EventBus.$on("close-Workspace-right-left", function (data) {
      _this.is_fullscreen = data;
    });
  },
  data: function data() {
    return {
      seeContent: false,
      iterateLignes: 0,
      smiterateLignes: 0,
      tb_34: null,
      isDoc: false,
      producContreAnl: 'contre-analyse',
      specialBankList: ['CONTRE_ANALYSE_FILIALE', 'CONTRE_ANALYSE_GROUPE', 'PV_CONTRE_ANALYSE_FILIALE', 'PV_CONTRE_ANALYSE_GROUPE'],
      currentYear: new Date().getFullYear(),
      viewMode: 'memorandum',
      printerService: _services_printer_service__WEBPACK_IMPORTED_MODULE_0__["default"],
      getAttention: false,
      selectedOpt: "CAF",
      is_fullscreen: false
    };
  },
  methods: _defineProperty(_defineProperty(_defineProperty(_defineProperty({
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
    scrollerY: function scrollerY(elm) {
      var bool = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var doc = arguments.length > 2 ? arguments[2] : undefined;
      if (elm != undefined) {
        var action = function action() {
          if (window.screen.availHeight >= document.body.scrollHeight) {
            isScroll(elm, bool, doc);
          } else {
            isScroll(elm, bool, null);
          }
        };
        var inaction = function inaction() {
          elm.style.transform = "scale(1)";
          elm.style.transition = "0.8s";
        };
        var isScroll = function isScroll(elm, bool, doc) {
          elm.style.transform = "scale(0.8)";
          elm.style.transition = "0.8s";
          if (doc !== null) {
            if (bool == true) {
              doc.scroll({
                top: 0
              });
            } else {
              doc.scroll({
                top: doc.scrollHeight
              });
            }
          } else {
            var scroll = window.scrollY;
            if (bool == true) {
              if (scroll <= 100) {
                scroll = 0;
              }
              scroll -= 100;
            } else {
              scroll += 100;
            }
            window.scrollTo({
              top: scroll
            });
          }
        };
        elm.addEventListener("mousedown", action);
        elm.addEventListener("mouseup", inaction);
      }
    },
    navigateTouch: function navigateTouch(e) {
      var div = document.createElement("div");
      var ico = [];
      div.classList.add("bg-light");
      div.classList.add("rounded-circle");
      div.classList.add("position-sticky");
      div.style.bottom = "80px";
      div.style.left = "100%";
      div.style.width = "50px";
      div.style.height = "50px";
      div.style.zIndex = "9";
      div.style.boxShadow = "0 0 5px 0 grey";
      var div2 = document.querySelector(".div2");
      for (var i = 0; i < 2; i++) {
        ico[i] = document.createElement("i");
        ico[i].style.fontSize = "25px";
        div.append(ico[i]);
        ico[i].style.position = "absolute";
        if (i == 0) {
          ico[i].classList.add("icofont-caret-up");
          ico[i].style.top = "1px";
          ico[i].style.left = "27%";
          this.scrollerY(ico[i], true, div2);
        }
        if (i == 1) {
          ico[i].classList.add("icofont-caret-down");
          ico[i].style.bottom = "1px";
          ico[i].style.left = "27%";
          this.scrollerY(ico[i], false, div2);
        }
      }
      this.$el.append(div);
    },
    scrollTo: function scrollTo() {
      var _this2 = this;
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
              window.scrollTo(0, _this2.$el.scrollHeight);
            });
          } else {
            ico.classList.add("icofont-swoosh-up");
            ico.classList.remove("icofont-swoosh-down");
            ico.addEventListener("click", function () {
              window.scrollTo(0, 0);
            });
          }
          _this2.$el.append(ico);
        });
      }
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
    },
    alignCredLigne: function alignCredLigne() {
      if (this.dossier_credit != null) {
        if (this.dossier_credit.tbs_in_use.includes('tb65')) {
          this.tb_65 = this.dossier_credit.cred_pub_tb_65;
          this.smiterateLignes = Math.min(this.tb_65.lignes_existantes.length, this.tb_65.nouvelles_lignes.length);
          this.iterateLignes = Math.max(this.tb_65.lignes_existantes.length, this.tb_65.nouvelles_lignes.length);
        }
      }
    }
  }, "formatDate", function formatDate(date) {
    var options = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric'
    };
    return new Date(date).toLocaleDateString('fr', options);
  }), "loadIndex", function loadIndex(index, a) {
    if (a === 0) {
      if (this.tb_65.lignes_existantes.length > index) {
        return true;
      }
      return false;
    } else if (a === 1) {
      if (this.tb_65.nouvelles_lignes.length > index) {
        return true;
      }
      return false;
    } else if (a === 2) {
      if (this.tb_65.cautions_lignes_existantes.length > index) {
        return true;
      }
      return false;
    } else {
      if (this.tb_65.cautions_nouvelles_lignes.length > index) {
        return true;
      }
      return false;
    }
  }), "showComponent", function showComponent(element) {
    this.viewMode = element;
  }), "changeBlock", function changeBlock(blockName) {
    this.selectedOpt = blockName;
  })
  /* Switch entre commentaire et offview*/
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/DocAnalOffMicrofinance.vue?vue&type=template&id=7f7b6664&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/DocAnalOffMicrofinance.vue?vue&type=template&id=7f7b6664&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$dossier_credit, _vm$dossier_credit2;
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {}, [_c("div", {
    "class": [_vm.isDoc ? _vm.producContreAnl : "", _vm.producMemo, {
      tp_page_fullscreen: _vm.is_fullscreen
    }]
  }, [_c("div", [_c("div", {
    staticClass: "container0"
  }, [_c("doc-header", {
    attrs: {
      dossier_credit: _vm.dossier_credit,
      authcheckusr: _vm.authcheckusr
    }
  }), _vm._v(" "), _c("div", [_c("div", {
    staticClass: "tab-content"
  }, [_c("div", {
    staticClass: "row mt-1"
  }, [_c("div", {
    ref: "offview",
    staticClass: "off",
    "class": {
      "border col-6 add-overflow-y": _vm.viewMode === null,
      "memorandum col-12": _vm.viewMode === "memorandum",
      "d-none": _vm.viewMode === "commentaire"
    }
  }, [_c("div", {
    staticClass: "row justify-content-center p-opts"
  }, [_vm.doc_tobe_produced === "CONTRE_ANALYSE_GROUPE" || _vm.doc_tobe_produced === "REVIEW_CONTRE_ANALYSE_GROUPE" || _vm.doc_tobe_produced === "PV_CONTRE_ANALYSE_GROUPE" ? [_c("div", {
    "class": _vm.selectedOpt == "CAF" ? "active col" : "bg-grey bg-opacity-50 col",
    on: {
      click: function click($event) {
        return _vm.changeBlock("CAF");
      }
    }
  }, [_vm._v("CONTRE ANALYSE FILIALE")]), _vm._v(" "), _c("div", {
    "class": _vm.selectedOpt == "CAG" ? "active col" : "bg-grey bg-opacity-50 col",
    on: {
      click: function click($event) {
        return _vm.changeBlock("CAG");
      }
    }
  }, [_vm._v("CONTRE ANALYSE GROUPE")])] : _c("div", {
    staticClass: "active col one_view_tab"
  }, [_vm._v("CONTRE ANALYSE FILIALE ")])], 2), _vm._v(" "), _c("div", {
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
        return _vm.printerService.launchPrinter(null, null, "COFINA", "printcaffil");
      }
    }
  })])]), _vm._v(" "), _vm.selectedOpt == "CAF" ? _c("ca-filiale", {
    attrs: {
      dossier_credit: _vm.dossier_credit,
      authcheckusr: _vm.authcheckusr,
      doc_tobe_produced: _vm.doc_tobe_produced,
      dismiss: _vm.dismiss,
      offBankList: _vm.offBankList
    }
  }) : _vm._e(), _vm._v(" "), _vm.selectedOpt == "CAG" ? _c("div", [_vm.doc_tobe_produced === "CONTRE_ANALYSE_GROUPE" || _vm.doc_tobe_produced === "REVIEW_CONTRE_ANALYSE_GROUPE" || _vm.doc_tobe_produced === "PV_CONTRE_ANALYSE_GROUPE" ? _c("div", [_vm.seeContent === true ? _c("div", {
    staticClass: "container-fluid"
  }, [_c("ca-groupe", {
    attrs: {
      dossier_credit: _vm.dossier_credit,
      authcheckusr: _vm.authcheckusr,
      doc_tobe_produced: _vm.doc_tobe_produced,
      dismiss: _vm.dismiss,
      offBankList: _vm.offBankList
    }
  })], 1) : _vm._e()]) : _vm._e()]) : _vm._e()], 1), _vm._v(" "), _c("div", {
    ref: "commentaire",
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
  })], 1)])])])])], 1)])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/DocAnalOffMicrofinance.vue?vue&type=style&index=0&id=7f7b6664&lang=css&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/DocAnalOffMicrofinance.vue?vue&type=style&index=0&id=7f7b6664&lang=css&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n*[data-v-7f7b6664] {\r\n    font-family: \"Google sans\";\n}\n.head-analyse-financiere[data-v-7f7b6664] {\r\n    margin-top: 15px;\r\n    padding: 16px;\r\n    border: 3px solid#b05b14;\r\n    font-weight: bold;\r\n    font-size: 16px;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    border-radius: 10px;\r\n    margin-bottom: 15px;\n}\n.contre-analyse[data-v-7f7b6664] {\r\n    background-color: white;\r\n    /* box-shadow: 0 0 5px grey; */\r\n    padding: 10px;\n}\n.memo[data-v-7f7b6664] {\r\n    margin-top: 10px;\r\n    padding: 20px 16px;\r\n    border: 2px solid black;\r\n    font-weight: 550;\r\n    font-size: 16px;\r\n    text-align: center;\r\n    text-transform: uppercase;\n}\nth[data-v-7f7b6664] {\r\n    background: #f4f3f3 !important;\n}\ntd[data-v-7f7b6664] {\r\n    font-size: 15px;\n}\n.card[data-v-7f7b6664] {\r\n    border: 1px solid #000 !important;\n}\n.memorandum[data-v-7f7b6664] {\r\n    padding-left: 25px;\r\n    padding-top: 25px;\r\n    padding-right: 25px;\r\n    padding-bottom: 20vh;\n}\n.contre-analyse[data-v-7f7b6664] {\r\n    background-color: white;\r\n    /* box-shadow: 0 0 5px grey; */\r\n    padding: 10px;\n}\n.off-memo[data-v-7f7b6664] {\r\n    background-color: white;\r\n    padding: 0px;\n}\n.text-container[data-v-7f7b6664]::-webkit-scrollbar-track {\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\r\n    background-color: #f5f5f5;\n}\n.text-container[data-v-7f7b6664]::-webkit-scrollbar {\r\n    width: 5px;\r\n    background-color: #f5f5f5;\n}\n.text-container[data-v-7f7b6664]::-webkit-scrollbar-thumb {\r\n    background-color: #2c3e50;\r\n    border: 2px solid #555555;\n}\n.ctn[data-v-7f7b6664] {\r\n    position: fixed;\r\n    z-index: 25;\r\n    top: 35vh;\r\n    font-weight: bold;\r\n    writing-mode: vertical-lr;\r\n    text-orientation: mixed;\r\n    cursor: pointer;\r\n    box-shadow: 0 0 2px 0px grey;\r\n    width: 4vh;\n}\n.tabs[data-v-7f7b6664] {\r\n    background: #fff;\r\n    position: relative;\r\n    margin-bottom: 0px;\n}\n.tabs>input[data-v-7f7b6664],\r\n.tabs>span[data-v-7f7b6664] {\r\n    width: 50%;\r\n    height: 60px;\r\n    line-height: 60px;\r\n    position: absolute;\r\n    top: 0;\n}\n.tabs>input[data-v-7f7b6664] {\r\n    cursor: pointer;\r\n    filter: alpha(opacity=0);\r\n    opacity: 0;\r\n    position: absolute;\r\n    z-index: 99;\n}\n.tabs>span[data-v-7f7b6664] {\r\n    background: #f0f0f0;\r\n    text-align: center;\r\n    overflow: hidden;\n}\n.tabs>span i[data-v-7f7b6664],\r\n.tabs>span[data-v-7f7b6664] {\r\n    transition: all .5s;\n}\n.tabs>input:hover+span[data-v-7f7b6664] {\r\n    background: rgba(255, 255, 255, .1);\n}\n.tabs>input:checked+span[data-v-7f7b6664] {\r\n    background: #fff;\n}\n.tabs>input:checked+span[data-v-7f7b6664],\r\n.tabs>input:hover+span[data-v-7f7b6664] {\r\n    color: #3498db;\n}\n#tab-1[data-v-7f7b6664],\r\n#tab-1+span[data-v-7f7b6664] {\r\n    left: 0;\n}\n#tab-2[data-v-7f7b6664],\r\n#tab-2+span[data-v-7f7b6664] {\r\n    left: 50%;\n}\n#tab-3[data-v-7f7b6664],\r\n#tab-3+span[data-v-7f7b6664] {\r\n    left: 40%;\n}\n#tab-4[data-v-7f7b6664],\r\n#tab-4+span[data-v-7f7b6664] {\r\n    left: 60%;\n}\n#tab-5[data-v-7f7b6664],\r\n#tab-5+span[data-v-7f7b6664] {\r\n    left: 80%;\n}\n.tab-content[data-v-7f7b6664] {\r\n    /* padding: 80px 20px 20px; */\r\n    width: 100%;\r\n    min-height: 340px;\n}\n.tab-content section[data-v-7f7b6664] {\r\n    width: 100%;\r\n    display: none;\n}\n.tab-content section h1[data-v-7f7b6664] {\r\n    margin-top: 15px;\r\n    font-size: 100px;\r\n    font-weight: 100;\r\n    text-align: center;\n}\n#tab-1:checked~.tab-content #tab-item-1[data-v-7f7b6664] {\r\n    display: block;\n}\n#tab-2:checked~.tab-content #tab-item-2[data-v-7f7b6664] {\r\n    display: block;\n}\n#tab-3:checked~.tab-content #tab-item-3[data-v-7f7b6664] {\r\n    display: block;\n}\n#tab-4:checked~.tab-content #tab-item-4[data-v-7f7b6664] {\r\n    display: block;\n}\n#tab-5:checked~.tab-content #tab-item-5[data-v-7f7b6664] {\r\n    display: block;\n}\r\n\r\n/* effect-1 */\n.effect-1>input:checked+span[data-v-7f7b6664] {\r\n    background: #fff;\n}\n#tab-1:checked~.line[data-v-7f7b6664] {\r\n    left: 0;\n}\n#tab-2:checked~.line[data-v-7f7b6664] {\r\n    left: 20%;\n}\n#tab-3:checked~.line[data-v-7f7b6664] {\r\n    left: 40%;\n}\n#tab-4:checked~.line[data-v-7f7b6664] {\r\n    left: 60%;\n}\n#tab-5:checked~.line[data-v-7f7b6664] {\r\n    left: 80%;\n}\r\n\r\n/* Style Switch entre commentaire et offview*/\n.off[data-v-7f7b6664] {\r\n    transition-duration: 0.2s;\n}\n#menuBtn[data-v-7f7b6664] {\r\n    position: fixed;\r\n    z-index: 9999;\r\n    font-weight: bold;\r\n    left: 40%;\r\n    top: 94%;\r\n    /* border-radius:5px;  */\r\n    box-shadow: 0 0 4px 0 black;\r\n    transform: translateX(35%);\r\n    cursor: pointer;\r\n    transition-duration: 0.2s;\n}\n#menuBtn[data-v-7f7b6664]:hover {\r\n    transform: scale(1.1);\r\n    left: 43%;\n}\n#menuBtn[data-v-7f7b6664]:active {\r\n    transform: scale(0.9);\n}\n.p-opts .col[data-v-7f7b6664] {\r\n    padding: 20px 10px;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    font-weight: bold;\r\n    cursor: pointer;\n}\n.p-opts .active[data-v-7f7b6664] {\r\n    color: #3498db;\n}\n.one_view_tab[data-v-7f7b6664]{\r\n    text-align: left!important;\r\n    padding: 0 4rem!important;\n}\n.tp_page_fullscreen[data-v-7f7b6664] {\r\n    margin-left:40px !important;\r\n    width:95% !important; \r\n    left: 0 !important;\n}\r\n/* Style Switch entre commentaire et offview*/\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/DocAnalOffMicrofinance.vue?vue&type=style&index=0&id=7f7b6664&lang=css&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/DocAnalOffMicrofinance.vue?vue&type=style&index=0&id=7f7b6664&lang=css&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DocAnalOffMicrofinance_vue_vue_type_style_index_0_id_7f7b6664_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DocAnalOffMicrofinance.vue?vue&type=style&index=0&id=7f7b6664&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/DocAnalOffMicrofinance.vue?vue&type=style&index=0&id=7f7b6664&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DocAnalOffMicrofinance_vue_vue_type_style_index_0_id_7f7b6664_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DocAnalOffMicrofinance_vue_vue_type_style_index_0_id_7f7b6664_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/shared/DocAnalOffMicrofinance.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/shared/DocAnalOffMicrofinance.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DocAnalOffMicrofinance_vue_vue_type_template_id_7f7b6664_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DocAnalOffMicrofinance.vue?vue&type=template&id=7f7b6664&scoped=true */ "./resources/js/components/shared/DocAnalOffMicrofinance.vue?vue&type=template&id=7f7b6664&scoped=true");
/* harmony import */ var _DocAnalOffMicrofinance_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DocAnalOffMicrofinance.vue?vue&type=script&lang=js */ "./resources/js/components/shared/DocAnalOffMicrofinance.vue?vue&type=script&lang=js");
/* harmony import */ var _DocAnalOffMicrofinance_vue_vue_type_style_index_0_id_7f7b6664_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DocAnalOffMicrofinance.vue?vue&type=style&index=0&id=7f7b6664&lang=css&scoped=true */ "./resources/js/components/shared/DocAnalOffMicrofinance.vue?vue&type=style&index=0&id=7f7b6664&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DocAnalOffMicrofinance_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _DocAnalOffMicrofinance_vue_vue_type_template_id_7f7b6664_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _DocAnalOffMicrofinance_vue_vue_type_template_id_7f7b6664_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "7f7b6664",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/shared/DocAnalOffMicrofinance.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/shared/DocAnalOffMicrofinance.vue?vue&type=script&lang=js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/shared/DocAnalOffMicrofinance.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DocAnalOffMicrofinance_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DocAnalOffMicrofinance.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/DocAnalOffMicrofinance.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DocAnalOffMicrofinance_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/shared/DocAnalOffMicrofinance.vue?vue&type=style&index=0&id=7f7b6664&lang=css&scoped=true":
/*!***************************************************************************************************************************!*\
  !*** ./resources/js/components/shared/DocAnalOffMicrofinance.vue?vue&type=style&index=0&id=7f7b6664&lang=css&scoped=true ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DocAnalOffMicrofinance_vue_vue_type_style_index_0_id_7f7b6664_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DocAnalOffMicrofinance.vue?vue&type=style&index=0&id=7f7b6664&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/DocAnalOffMicrofinance.vue?vue&type=style&index=0&id=7f7b6664&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/shared/DocAnalOffMicrofinance.vue?vue&type=template&id=7f7b6664&scoped=true":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/shared/DocAnalOffMicrofinance.vue?vue&type=template&id=7f7b6664&scoped=true ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DocAnalOffMicrofinance_vue_vue_type_template_id_7f7b6664_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DocAnalOffMicrofinance_vue_vue_type_template_id_7f7b6664_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DocAnalOffMicrofinance_vue_vue_type_template_id_7f7b6664_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DocAnalOffMicrofinance.vue?vue&type=template&id=7f7b6664&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/DocAnalOffMicrofinance.vue?vue&type=template&id=7f7b6664&scoped=true");


/***/ })

}]);