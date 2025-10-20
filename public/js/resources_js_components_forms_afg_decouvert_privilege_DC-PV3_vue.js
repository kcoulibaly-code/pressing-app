"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_forms_afg_decouvert_privilege_DC-PV3_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/decouvert_privilege/DC-PV3.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/decouvert_privilege/DC-PV3.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/ContextMenu */ "./resources/js/components/shared/ContextMenu.vue");
/* harmony import */ var _services_ebapis_service_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/ebapis.service.js */ "./resources/js/services/ebapis.service.js");
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "DCPP-CS4",
  props: {
    meta_data: Object,
    tb_name: String,
    tb_display_name: String
  },
  components: {
    MoreVerticalIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_2__.MoreVerticalIcon,
    ChevronUpIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_2__.ChevronUpIcon,
    ChevronDownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_2__.ChevronDownIcon,
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_2__.PlusIcon,
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_2__.TrashIcon,
    AirplayIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_2__.AirplayIcon
  },
  data: function data() {
    var vm = this;
    return {
      meta_parseable: {
        cred_pub_key: this.meta_data["cred_pub_key"],
        tb_name: this.tb_name
      },
      commentaire_pieces_jointes: "",
      conditions: [{
        "id": 1,
        "label": "Être client de AFG BANK CAMEROUN, titulaire d’un compte chèque",
        "label_en": "Be a client of AFG BANK CAMEROON, holder of a current account",
        "value": "",
        "observation": "",
        "files": []
      }, {
        "id": 2,
        "label": "Agé dans l'intervalle de 18 à 59 ans à la date de souscription",
        "label_en": "Be aged between 18 and 59 years at the date of subscription",
        "value": "",
        "observation": "",
        "files": []
      }, {
        "id": 3,
        "label": "Domicilier irrévocablement ses revenus dans les livres de la Banque",
        "label_en": "Irrevocably domicile one’s income in the Bank’s books",
        "value": "",
        "observation": "",
        "files": []
      }, {
        "id": 4,
        "label": "Être titulaire d’une carte PRIVILEGE",
        "label_en": "Be a holder of a PRIVILEGE card",
        "value": "",
        "observation": "",
        "files": []
      }, {
        "id": 5,
        "label": "Avoir souscrit à l'assurance sur les découverts",
        "label_en": "Have subscribed to overdraft insurance",
        "value": "",
        "observation": "",
        "files": []
      }],
      formDataToBeWatched: {
        notes: [],
        conditions_eligibilites: [],
        commentaire_conditions_eligibilites: "",
        lang: "fr"
      },
      contextList: [
      // Ajouter note
      {
        title: "Commenter",
        icon: "icofont icofont-comment",
        handler: function () {
          this.openNotesModal();
        }.bind(vm),
        disabled: false
      }, {
        title: "Assigner",
        icon: "icofont icofont-check",
        handler: function handler() {},
        disabled: true
      }, {
        title: "Supprimer",
        icon: "icofont icofont-trash",
        handler: this.startDeletingTbFromContext,
        disabled: false
      }],
      seen: false,
      authcheckUsr: "",
      authcheckStatus: "",
      isLoadingData: false,
      ebapisHost: _services_ebapis_service_js__WEBPACK_IMPORTED_MODULE_1__["default"].host
    };
  },
  methods: {
    handleInput: function handleInput() {
      this.formDataToBeWatched.conditions_eligibilites = _toConsumableArray(this.conditions);
    },
    openContext: function openContext(event) {
      var _this$meta_data$dossi;
      if (((_this$meta_data$dossi = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi === void 0 || (_this$meta_data$dossi = _this$meta_data$dossi.final_outcome) === null || _this$meta_data$dossi === void 0 ? void 0 : _this$meta_data$dossi.outcome) != 0 && !this.isDAJC) return;
      this.$refs.menu.open(event, this.tb_name);
    },
    loadTbAttrs: function loadTbAttrs() {
      var l = [];
      var topdivel = this.$refs.topdiv;
      // let k = document.querySelectorAll('.subdiv')
      var k = document.querySelectorAll(".subdiv" + this.tb_name);
      if (k.length > 0) {
        k.forEach(function (e) {
          l.push(e.innerText);
        });
      }
      var p = {
        name_of_title: topdivel.innerText,
        list_of_content: l,
        id: "dcp-cs10-head"
      };
      this.$emit("load-buffer", p);
    },
    loadRetrieved: function loadRetrieved() {
      var _this$meta_data$dossi2, _this$meta_data$dossi3;
      var lentb = this.meta_data["dossier_credit"]["tbs_in_use"];
      var createdKey = this.tb_name;
      var createdKeyArr = createdKey.split("tb");
      createdKey = "cred_pub_tb_" + createdKeyArr[1];
      var applied_templ_name = (_this$meta_data$dossi2 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi2 === void 0 ? void 0 : _this$meta_data$dossi2.applied_templ_name;
      var tbArrays = this.determineCredPubTables(applied_templ_name, this.meta_data["dossier_credit"]);
      var conditions = ((_this$meta_data$dossi3 = this.meta_data["dossier_credit"][createdKey]) === null || _this$meta_data$dossi3 === void 0 ? void 0 : _this$meta_data$dossi3.conditions) || [];
      if (lentb.length > 0) {
        if (this.meta_data["dossier_credit"][createdKey] != undefined) {
          var _this$meta_data$dossi4;
          this.formDataToBeWatched = this.meta_data["dossier_credit"][createdKey];
          if (((_this$meta_data$dossi4 = this.meta_data["dossier_credit"][createdKey]) === null || _this$meta_data$dossi4 === void 0 ? void 0 : _this$meta_data$dossi4.conditions) != undefined) {
            // console.log("check", !Array.isArray(conditions) && conditions.length !== 0)
            if (Array.isArray(conditions) && conditions.length !== 0) {
              this.conditions = JSON.parse(JSON.stringify(conditions));
            }
          }
          this.isLoadingData = false;
        }
      }
    },
    retract: function retract() {
      this.seen = !this.seen;
      var a = {
        tb_name: this.tb_name + this.meta_data["cred_pub_key"],
        status: this.seen
      };
      EventBus.$emit("savedclosed-table", a);
    },
    checkboxValCondition: function checkboxValCondition(event, index, selectedValue) {
      // Si la checkbox était déjà cochée (même valeur), on décoche tout
      if (this.conditions[index].value === selectedValue) {
        this.conditions[index].value = '';
      } else {
        // Sinon, on coche la nouvelle valeur (les autres se décocheront automatiquement grâce au :checked)
        this.conditions[index].value = selectedValue;
      }
      this.$set(this.formDataToBeWatched, 'conditions', this.conditions);
    },
    send2Backend: function send2Backend(res, newVal, oldVal) {
      this.authcheck = true;
      this.authcheckUsr = res.data;
      this.authcheckStatus = res.status;
      if (this.authcheckStatus === 401) {
        // // window.location.href = "/login";
      }
      if (this.authcheck) {
        this.$emit("autosaving");
        this.$axios.post(this.ebapisHost + "creditbuilder/api/v1/autosaving/", {
          user: this.authcheckUsr,
          meta_parseable: this.meta_parseable,
          filledData: this.formDataToBeWatched
        }).then(function (response) {
          this.$emit("autosaving");
          var tbFetcheData = response.data;
          if (tbFetcheData["is_success"] === true) {
            this.$emit("load-shell");
          }
        }.bind(this))["catch"](function (error) {
          this.$Progress.finish();
          console.log(error);
        }.bind(this));
      } else {
        alert("Unauthenticated");
      }
    },
    tableClosedOrOpened: function tableClosedOrOpened() {
      this.seen = this.fetchClosedTables(this.tb_name + this.meta_data["cred_pub_key"]);
    },
    addMore: function addMore() {
      this.conditions.push({
        id: this.conditions.length + 1,
        label: "",
        value: "",
        observation: "",
        files: []
      });
    },
    remove: function remove(objectName, index) {
      this[objectName].splice(index, 1);
    },
    formDataVars3: function formDataVars3(event, index, key) {
      this[key][index][event[0]] = event[1];
      this.formDataToBeWatched[key] = this[key];
    }
  },
  mounted: function mounted() {
    this.loadRetrieved();
    this.loadTbAttrs();
    this.tableClosedOrOpened();
    // EventBus.$on('selected-language-ad', (lang) => {
    //    this.formDataToBeWatched.lang = lang
    //}) 
  },
  watch: {
    formDataToBeWatched: {
      handler: function handler(newVal, oldVal) {
        this.autosaving(newVal, oldVal);
        // ? Cache management
        // this.saveDataInCache(newVal, oldVal);
      },
      immediate: true,
      deep: true
    }
  }
  //"meta_data.dossier_credit.cred_pub_tb_20010" (newVal, oldVal) {
  //    if (newVal && newVal?.conventions?.length > 0) {
  //        this.formDataToBeWatched.lang = newVal?.conventions[0].langue
  //    }
  //}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/decouvert_privilege/DC-PV3.vue?vue&type=template&id=71f1309b&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/decouvert_privilege/DC-PV3.vue?vue&type=template&id=71f1309b&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$meta_data$dossier, _vm$formDataToBeWatch, _this$meta_data$dossi, _vm$formDataToBeWatch3;
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    on: {
      contextmenu: function contextmenu($event) {
        $event.preventDefault();
        return _vm.openContext($event);
      }
    }
  }, [_c("div", {
    staticClass: "row bg-light card-width-height"
  }, [!((_vm$meta_data$dossier = _vm.meta_data["dossier_credit"]) !== null && _vm$meta_data$dossier !== void 0 && (_vm$meta_data$dossier = _vm$meta_data$dossier.final_outcome) !== null && _vm$meta_data$dossier !== void 0 && _vm$meta_data$dossier.outcome) != 0 || _vm.isDAJC ? _c("ContextMenu", {
    ref: "menu",
    attrs: {
      id: _vm.tb_name,
      cred_pub_key: _vm.meta_parseable.cred_pub_key,
      tb_name: _vm.tb_name,
      contextList: _vm.contextList
    }
  }) : _vm._e(), _vm._v(" "), _vm.seen === true ? _c("div", {
    staticClass: "card card-width-height"
  }, [_c("br"), _vm._v(" "), _c("div", {
    staticClass: "card-header hdc pb-0 pt-2"
  }, [_c("h6", {
    ref: "topdiv",
    staticClass: "head",
    attrs: {
      id: "dcp-cs10-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n              " + _vm._s(_vm.tb_display_name) + " : Conditions d'éligibilité\n            ")]), _vm._v(" "), _c("div", {
    staticClass: "col-auto"
  }, [((_vm$formDataToBeWatch = _vm.formDataToBeWatched.notes) === null || _vm$formDataToBeWatch === void 0 ? void 0 : _vm$formDataToBeWatch.length) > 0 ? _c("div", {
    staticStyle: {
      display: "inline-block",
      position: "relative"
    }
  }, [_c("span", {
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.openNotesModal(true);
      }
    }
  }, [_c("i", {
    staticClass: "icofont icofont-comment text-white px-2",
    staticStyle: {
      "font-size": "12px"
    },
    attrs: {
      role: "button"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "badge-sm pb-3"
  }, [_c("span", [_vm._v(_vm._s(_vm.formDataToBeWatched.notes.length))])])])]) : _vm._e(), _vm._v(" "), _c("chevron-up-icon", {
    staticClass: "custom-class",
    staticStyle: {
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    },
    on: {
      click: function click($event) {
        return _vm.retract();
      }
    }
  })], 1)])])]), _vm._v(" "), _c("div", {
    staticClass: "card-body mt-1"
  }, [_c("div", {
    staticClass: "row p-0"
  }, [_c("div", {
    staticClass: "col-12 p-0"
  }, [_c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(0), _vm._v(" "), _c("tbody", [_vm._l(_vm.conditions, function (condition, index) {
    var _vm$formDataToBeWatch2;
    return _c("tr", {
      key: condition.id
    }, [_c("td", [condition.id > 5 ? _c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: condition.label,
        expression: "condition.label"
      }],
      staticClass: "form-control",
      staticStyle: {
        "min-width": "200px"
      },
      attrs: {
        id: "label" + index
      },
      domProps: {
        value: condition.label
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(condition, "label", $event.target.value);
        }
      }
    }) : _c("span", [_vm._v(_vm._s(((_vm$formDataToBeWatch2 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch2 === void 0 ? void 0 : _vm$formDataToBeWatch2.lang) === "en" ? condition === null || condition === void 0 ? void 0 : condition.label_en : condition.label))])]), _vm._v(" "), _c("td", {
      staticClass: "text-center"
    }, [_c("input", {
      staticClass: "form-check-input text-center align-middle",
      staticStyle: {
        width: "20px",
        height: "20px"
      },
      attrs: {
        type: "checkbox",
        value: "Oui",
        id: "oui" + index
      },
      domProps: {
        checked: condition.value == "Oui"
      },
      on: {
        change: function change($event) {
          return _vm.checkboxValCondition($event, index, "Oui");
        }
      }
    })]), _vm._v(" "), _c("td", {
      staticClass: "text-center"
    }, [_c("input", {
      staticClass: "form-check-input text-center align-middle",
      staticStyle: {
        width: "20px",
        height: "20px"
      },
      attrs: {
        type: "checkbox",
        value: "Non",
        id: "non" + index
      },
      domProps: {
        checked: condition.value == "Non"
      },
      on: {
        change: function change($event) {
          return _vm.checkboxValCondition($event, index, "Non");
        }
      }
    })]), _vm._v(" "), _c("td", {
      staticClass: "text-center"
    }, [_c("input", {
      staticClass: "form-check-input text-center align-middle",
      staticStyle: {
        width: "20px",
        height: "20px"
      },
      attrs: {
        type: "checkbox",
        value: "Non applicable",
        id: "non_applicable" + index
      },
      domProps: {
        checked: condition.value == "Non applicable"
      },
      on: {
        change: function change($event) {
          return _vm.checkboxValCondition($event, index, "Non applicable");
        }
      }
    })]), _vm._v(" "), _c("td", [_c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: condition.observation,
        expression: "condition.observation"
      }],
      staticClass: "form-control",
      staticStyle: {
        width: "250px"
      },
      attrs: {
        cols: "1",
        rows: "2"
      },
      domProps: {
        value: condition.observation
      },
      on: {
        change: _vm.handleInput,
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(condition, "observation", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", {
      staticClass: "text-center"
    }, [index >= 6 ? _c("button", {
      staticStyle: {
        "background-color": "transparent",
        border: "none",
        padding: "0"
      },
      attrs: {
        type: "button",
        title: "Supprimer ce document"
      },
      on: {
        click: function click($event) {
          return _vm.remove("conditions", index);
        }
      }
    }, [_c("trash-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1) : _vm._e()])]);
  }), _vm._v(" "), _c("tr", [_c("td", {
    attrs: {
      colspan: "5"
    }
  }), _vm._v(" "), _c("td", {
    staticClass: "text-center"
  }, [_c("button", {
    staticStyle: {
      "background-color": "#2c3e50",
      color: "#ffffff",
      "border-radius": "15%",
      border: "none",
      padding: "0"
    },
    attrs: {
      type: "button",
      title: "Ajouter"
    },
    on: {
      click: function click($event) {
        return _vm.addMore();
      }
    }
  }, [_c("plus-icon", {
    staticClass: "custom-class",
    attrs: {
      size: "21"
    }
  })], 1)])])], 2)])])])]), _vm._v(" "), _c("div", {
    staticClass: "mb-5"
  }), _vm._v(" "), !((_this$meta_data$dossi = this.meta_data["dossier_credit"]) !== null && _this$meta_data$dossi !== void 0 && (_this$meta_data$dossi = _this$meta_data$dossi.final_outcome) !== null && _this$meta_data$dossi !== void 0 && _this$meta_data$dossi.outcome) != 0 || _vm.isDAJC ? _c("button", {
    staticClass: "btn shadow-md text-white position-absolute",
    staticStyle: {
      cursor: "pointer",
      right: "16px",
      bottom: "10px",
      background: "#2c3e50",
      "max-width": "max-content"
    },
    attrs: {
      type: "button",
      name: "button"
    },
    on: {
      click: function click($event) {
        return _vm.retract();
      }
    }
  }, [_vm._v("\n          Fermer le tableau\n        ")]) : _vm._e()])]) : _c("div", {
    staticClass: "card card-width-height"
  }, [_c("br"), _vm._v(" "), _c("div", {
    staticClass: "card-header hdc pb-0 pt-2"
  }, [_c("h6", {
    ref: "topdiv",
    staticClass: "head",
    attrs: {
      id: "dcp-cs10-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n              " + _vm._s(_vm.tb_display_name) + " : Conditions d'éligibilité\n            ")]), _vm._v(" "), _c("div", {
    staticClass: "col-auto"
  }, [((_vm$formDataToBeWatch3 = _vm.formDataToBeWatched.notes) === null || _vm$formDataToBeWatch3 === void 0 ? void 0 : _vm$formDataToBeWatch3.length) > 0 ? _c("div", {
    staticStyle: {
      display: "inline-block",
      position: "relative"
    }
  }, [_c("span", {
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.openNotesModal(true);
      }
    }
  }, [_c("i", {
    staticClass: "icofont icofont-comment text-white px-2",
    staticStyle: {
      "font-size": "12px"
    },
    attrs: {
      role: "button"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "badge-sm pb-3"
  }, [_c("span", [_vm._v(_vm._s(_vm.formDataToBeWatched.notes.length))])])])]) : _vm._e(), _vm._v(" "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    },
    on: {
      click: function click($event) {
        return _vm.retract();
      }
    }
  })], 1)])])])])], 1)]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", {
    staticClass: "text-center"
  }, [_c("td", {
    staticClass: "th fw-bold",
    staticStyle: {
      "min-width": "300px"
    }
  }, [_c("label", [_vm._v("CONDITIONS")])]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold"
  }, [_c("label", [_vm._v("OUI")])]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold"
  }, [_c("label", [_vm._v("NON")])]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold"
  }, [_c("label", [_vm._v("N/A")])]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold"
  }, [_c("label", [_vm._v("COMMENTAIRE")])]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold",
    staticStyle: {
      width: "50px"
    }
  }, [_c("label", [_vm._v("ACTION")])])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/decouvert_privilege/DC-PV3.vue?vue&type=style&index=0&id=71f1309b&lang=css&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/decouvert_privilege/DC-PV3.vue?vue&type=style&index=0&id=71f1309b&lang=css&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n*[data-v-71f1309b] {\n    font-family: \"Google sans\";\n}\nlabel[data-v-71f1309b] {\n    height: 10px;\n    font-size: 13px;\n}\ninput[type=\"text\"][data-v-71f1309b],\ninput[type=\"date\"][data-v-71f1309b],\nselect[data-v-71f1309b] {\n    height: 35px;\n    border-color: #34495e;\n    color: #57606f;\n    font-size: 13px;\n    font-weight: bold;\n}\n.card-width-height[data-v-71f1309b] {\n    width: 100%;\n    height: 100%;\n}\n.head[data-v-71f1309b] {\n    color: #f1f2f6;\n    font-size: 22px;\n}\n.hdc[data-v-71f1309b] {\n    background-color: #57606f;\n}\n.card-width-height[data-v-71f1309b] {\n    width: 100%;\n    height: 100%;\n}\n.head[data-v-71f1309b] {\n    color: #f1f2f6;\n    font-size: 22px;\n}\n.review[data-v-71f1309b] {\n    width: 180px !important;\n}\n.engagement input[type=\"text\"][data-v-71f1309b],\ninput[type=\"date\"][data-v-71f1309b] {\n    width: 100% !important;\n}\n.th[data-v-71f1309b] {\n    padding: 4px;\n    padding-bottom: 0px;\n}\n\n/* select {\n    width: 250px;\n} */\n.badge-sm[data-v-71f1309b] {\n    display: inline-block;\n    width: 15px;\n    height: 15px;\n    background: rgba(255, 0, 0, 0.882);\n    color: white;\n    font-size: 12px;\n    font-weight: 500;\n    border-radius: 100%;\n    position: absolute;\n    top: -20%;\n    left: 55%;\n    text-align: center;\n}\n.relook-header[data-v-71f1309b] {\n    color: #000;\n    background-color: #f4f3f3;\n    padding: 5px;\n    border-bottom: 1px solid #b6b8bb;\n}\ninput[type=\"checkbox\"][data-v-71f1309b] {\n    height: 18px;\n    width: 20px;\n    margin-right: 5px;\n}\n.image1[data-v-71f1309b] {\n    background: url(\"/images/capture/exemples/documentation_somise.png\") no-repeat;\n    background-position: center;\n    background-size: contain;\n\n    width: 500px;\n    height: 300px;\n}\n.btn-group .multiselect[data-v-71f1309b] {\n    border: 1px solid #ced4da;\n}\n\n/* .select-with-checkbox {\n  border: 1px solid #ddd;\n  padding: 10px;\n  width: 200px;\n} */\n.select-with-checkbox[data-v-71f1309b] {\n    position: relative;\n}\n.select-with-checkbox .options[data-v-71f1309b] {\n    z-index: 15;\n    position: absolute;\n    background: white;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/decouvert_privilege/DC-PV3.vue?vue&type=style&index=0&id=71f1309b&lang=css&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/decouvert_privilege/DC-PV3.vue?vue&type=style&index=0&id=71f1309b&lang=css&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DC_PV3_vue_vue_type_style_index_0_id_71f1309b_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DC-PV3.vue?vue&type=style&index=0&id=71f1309b&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/decouvert_privilege/DC-PV3.vue?vue&type=style&index=0&id=71f1309b&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DC_PV3_vue_vue_type_style_index_0_id_71f1309b_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DC_PV3_vue_vue_type_style_index_0_id_71f1309b_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/forms/afg/decouvert_privilege/DC-PV3.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/components/forms/afg/decouvert_privilege/DC-PV3.vue ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DC_PV3_vue_vue_type_template_id_71f1309b_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DC-PV3.vue?vue&type=template&id=71f1309b&scoped=true */ "./resources/js/components/forms/afg/decouvert_privilege/DC-PV3.vue?vue&type=template&id=71f1309b&scoped=true");
/* harmony import */ var _DC_PV3_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DC-PV3.vue?vue&type=script&lang=js */ "./resources/js/components/forms/afg/decouvert_privilege/DC-PV3.vue?vue&type=script&lang=js");
/* harmony import */ var _DC_PV3_vue_vue_type_style_index_0_id_71f1309b_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DC-PV3.vue?vue&type=style&index=0&id=71f1309b&lang=css&scoped=true */ "./resources/js/components/forms/afg/decouvert_privilege/DC-PV3.vue?vue&type=style&index=0&id=71f1309b&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DC_PV3_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _DC_PV3_vue_vue_type_template_id_71f1309b_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _DC_PV3_vue_vue_type_template_id_71f1309b_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "71f1309b",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/forms/afg/decouvert_privilege/DC-PV3.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/forms/afg/decouvert_privilege/DC-PV3.vue?vue&type=script&lang=js":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/decouvert_privilege/DC-PV3.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DC_PV3_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DC-PV3.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/decouvert_privilege/DC-PV3.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DC_PV3_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/forms/afg/decouvert_privilege/DC-PV3.vue?vue&type=style&index=0&id=71f1309b&lang=css&scoped=true":
/*!**********************************************************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/decouvert_privilege/DC-PV3.vue?vue&type=style&index=0&id=71f1309b&lang=css&scoped=true ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DC_PV3_vue_vue_type_style_index_0_id_71f1309b_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DC-PV3.vue?vue&type=style&index=0&id=71f1309b&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/decouvert_privilege/DC-PV3.vue?vue&type=style&index=0&id=71f1309b&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/forms/afg/decouvert_privilege/DC-PV3.vue?vue&type=template&id=71f1309b&scoped=true":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/decouvert_privilege/DC-PV3.vue?vue&type=template&id=71f1309b&scoped=true ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DC_PV3_vue_vue_type_template_id_71f1309b_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DC_PV3_vue_vue_type_template_id_71f1309b_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DC_PV3_vue_vue_type_template_id_71f1309b_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DC-PV3.vue?vue&type=template&id=71f1309b&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/decouvert_privilege/DC-PV3.vue?vue&type=template&id=71f1309b&scoped=true");


/***/ })

}]);