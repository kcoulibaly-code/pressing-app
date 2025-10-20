"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_forms_afg_demande_depassement_DA-DE1_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/demande_depassement/DA-DE1.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/demande_depassement/DA-DE1.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/ContextMenu */ "./resources/js/components/shared/ContextMenu.vue");
/* harmony import */ var _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/ContextMenuItem */ "./resources/js/components/shared/ContextMenuItem.vue");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/auth.service */ "./resources/js/services/auth.service.js");
/* harmony import */ var _services_credit_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/credit.service */ "./resources/js/services/credit.service.js");
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../helpers/helper */ "./resources/js/helpers/helper.js");
/* harmony import */ var _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @vueform/multiselect/dist/multiselect.vue2 */ "./node_modules/@vueform/multiselect/dist/multiselect.vue2.js");
/* harmony import */ var _shared_widgets_subtable_ST1_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/widgets/subtable/ST1.vue */ "./resources/js/components/shared/widgets/subtable/ST1.vue");
/* harmony import */ var _services_afg_f8_manager_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../services/afg/f8-manager.js */ "./resources/js/services/afg/f8-manager.js");
/* harmony import */ var _services_afg_f8_constants_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../services/afg/f8-constants.js */ "./resources/js/services/afg/f8-constants.js");
/* harmony import */ var _johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @johmun/vue-tags-input */ "./node_modules/@johmun/vue-tags-input/dist/vue-tags-input.js");
/* harmony import */ var _johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_10__);
var _methods;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }














window.$ = window.jQuery = __webpack_require__(/*! jquery/dist/jquery */ "./node_modules/jquery/dist/jquery.js");
var NOW = new Date();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Centrale_Risques_Adhesion_au_BIC",
  display: "Centrale Risques – Adhésion au BIC",
  components: {
    MoreVerticalIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_11__.MoreVerticalIcon,
    ChevronUpIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_11__.ChevronUpIcon,
    ChevronDownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_11__.ChevronDownIcon,
    ContextMenu: _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_0__["default"],
    ContextMenuItem: _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_1__["default"],
    AirplayIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_11__.AirplayIcon,
    BookOpenIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_11__.BookOpenIcon,
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_11__.PlusIcon,
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_11__.TrashIcon,
    Multiselect: _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_6__["default"],
    VueTagsInput: (_johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_10___default()),
    ST1: _shared_widgets_subtable_ST1_vue__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  props: {
    meta_data: Object,
    tb_name: String,
    tb_display_name: String
  },
  mounted: function mounted() {
    this.tableClosedOrOpened();
    this.loadRetrieved();
    this.loadTbAttrs();
  },
  data: function data() {
    var vm = this;
    return {
      f8Manager: _services_afg_f8_manager_js__WEBPACK_IMPORTED_MODULE_8__["default"],
      seen: true,
      seen1: true,
      seen2: true,
      ebapisHost: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_2__["default"].host,
      authcheck: false,
      authcheckUsr: null,
      authcheckStatus: null,
      f8Constants: _services_afg_f8_constants_js__WEBPACK_IMPORTED_MODULE_9__["default"],
      meta_parseable: {
        cred_pub_key: this.meta_data["cred_pub_key"],
        tb_name: this.tb_name
      },
      dossier_credit: {},
      formDataToBeWatched: {
        notes: []
      },
      listingNote: false,
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
      ligneSelected: {},
      flag: {},
      filiale_afg: ["AFG Bank CI", "AFG Bank Gabon", "AFG Bank Mali", "AFG Bank Magadascar", "AFG Bank Cameroun", "AFG Bank Comorres", "AFG Bank Benin"]
    };
  },
  methods: (_methods = {
    tableClosedOrOpened: function tableClosedOrOpened() {
      this.seen = this.fetchClosedTables(this.tb_name + this.meta_data["cred_pub_key"]);
    },
    openModal: function openModal(modalName, ligneSelected) {
      var download = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var res = true;
      this.ligneSelected = ligneSelected;
      if (!(ligneSelected !== null && ligneSelected !== void 0 && ligneSelected.ligne)) {
        this.$toasted.show("Veuillez selectionner la ligne avant d'attacher les suretés ");
        return;
      }
      if (download) {
        res = this.f8Manager.loadSuretesOfOldLines(ligneSelected);
      }
      this.$modal.show(modalName);
    },
    closeModal: function closeModal(modalName, ligneSelected) {
      var a = this.f8Manager.modalConditions(ligneSelected.id);
      // if(a) this.$modal.hide(modalName)
      this.$modal.hide(modalName);
    },
    formDataVars: function formDataVars(vars, event) {
      this.f8Manager.data[vars] = event[1];
      // this.handleInput()
    },
    formDataVars2: function formDataVars2(event, index, objectName, keyName) {
      this.f8Manager.data[objectName][index][keyName] = event[1];
    },
    tous_les_lignes_sorted: function tous_les_lignes_sorted() {
      tous_les_lignes.sort(function (a, b) {
        return a.libelle.localeCompare(b.libelle);
      });
    }
  }, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_methods, "tableClosedOrOpened", function tableClosedOrOpened() {
    this.seen = this.fetchClosedTables(this.tb_name + this.meta_data["cred_pub_key"]);
  }), "openNotesModal", function openNotesModal() {
    var listing = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    this.listingNote = listing;
    this.$modal.show(this.tb_name);
  }), "loadRetrieved", function loadRetrieved() {
    var _this$meta_data$dossi;
    var lentb = this.meta_data["dossier_credit"]["tbs_in_use"];
    // const createdKey = this.determineKey()
    var createdKey = "cred_pub_tb_14011";
    this.defaultRetract(false, (_this$meta_data$dossi = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi === void 0 ? void 0 : _this$meta_data$dossi.applied_templ_id);
    if (lentb.length == 0 || !this.meta_data["dossier_credit"][createdKey]) {
      // console.warn("Pas de tableau ou pas de cred_pub_tb");
      this.f8Manager.setDefaultLines('tb14011');
      return;
    }
    var credit_folder_table = _objectSpread({}, this.meta_data["dossier_credit"][createdKey]);
    // console.log('dossier credit', credit_folder_table);
    this.f8Manager.setData(credit_folder_table, 'tb14011');
  }), "determineKey", function determineKey() {
    var createdKey = this.tb_name;
    var createdKeyArr = createdKey.split("tb");
    createdKey = "cred_pub_tb_" + createdKeyArr[1];
    return createdKey;
  }), "defaultRetract", function defaultRetract(rc, ra) {
    if (ra != null) {
      this.seen = rc;
      var a = {
        tb_name: this.tb_name + this.meta_data["cred_pub_key"],
        status: this.seen
      };
      EventBus.$emit("savedclosed-table", a);
    }
  }), "send2Backend", function send2Backend(res) {
    this.authcheck = true;
    this.authcheckUsr = res.data;
    this.authcheckStatus = res.status;
    if (this.authcheckStatus === 401) {
      // // window.location.href = "/login";
    }
    if (this.authcheck === true) {
      this.$emit("autosaving");
      this.$axios.post(this.ebapisHost + "creditbuilder/api/v1/autosaving/", {
        user: this.authcheckUsr,
        meta_parseable: this.meta_parseable,
        filledData: this.f8Manager.data
      }).then(function (response) {
        this.$emit("autosaving");
        // this.$Progress.finish();
        // console.log(response);
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
  }), "loadTbAttrs", function loadTbAttrs() {
    var l = [];
    var topdivel = this.$refs.topdiv;
    var k = document.querySelectorAll(".subdiv" + this.tb_name);
    // console.log(k)
    k.forEach(function (e) {
      l.push(e.innerText);
      // console.log(l)
    });
    var p = {
      name_of_title: topdivel.innerText,
      list_of_content: l,
      id: "f8-head"
    };
    // console.log(p)
    this.$emit("load-buffer", p);
  }), "isFirstOccurrence", function isFirstOccurrence(keyName, index) {
    var ligne = this.f8Manager.data[keyName][index];
    if (!ligne.ligne_mixe_id) return true;
    return !this.f8Manager.data[keyName].slice(0, index).some(function (item) {
      return item.ligne_mixe_id === ligne.ligne_mixe_id;
    });
  }), "getRowspan", function getRowspan(keyName, ligne_mixe_id) {
    if (!ligne_mixe_id) return 1;
    return this.f8Manager.data[keyName].filter(function (item) {
      return item.ligne_mixe_id === ligne_mixe_id;
    }).length;
  }), "isFirstOrLastOccurrence", function isFirstOrLastOccurrence(keyName, index) {
    var data = this.f8Manager.data[keyName];
    var ligne = data[index];

    // Ignore les lignes sans `ligne_mixe_id` en retournant `false` pour les bordures
    if (!ligne.ligne_mixe_id) {
      return {
        isFirst: false,
        isLast: false
      };
    }

    // Filtre pour trouver toutes les lignes avec le même `ligne_mixe_id`
    var sameGroup = data.filter(function (item) {
      return item.ligne_mixe_id === ligne.ligne_mixe_id;
    });

    // Récupère l'index dans le groupe
    var groupIndex = sameGroup.indexOf(ligne);
    return {
      isFirst: groupIndex === 0,
      isLast: groupIndex === sameGroup.length - 1,
      isMiddle: groupIndex > 0 && groupIndex < sameGroup.length - 1
    };
  }), _defineProperty(_defineProperty(_methods, "getMinWidth", function getMinWidth(keyName) {
    return this.f8Manager.data[keyName].some(function (item) {
      return item.ligne_mixte === 'Mixte';
    }) ? '425px' : '165px';
  }), "getMixteIndex", function getMixteIndex(keyName, currentIndex) {
    var data = this.f8Manager.data[keyName];

    // Vérification si 'data' existe bien avant d'y accéder
    if (!data || !Array.isArray(data)) {
      console.error("Donn\xE9es non disponibles pour la cl\xE9: ".concat(keyName));
      return 0; // Retourne une valeur par défaut ou gère l'erreur autrement
    }
    var currentLine = data[currentIndex];

    // Vérification de la ligne courante
    if (!currentLine) {
      console.error("Ligne non disponible pour l'index: ".concat(currentIndex));
      return 0; // Valeur par défaut en cas d'erreur
    }
    var uniqueGroups = new Set();

    // Boucle à travers les éléments jusqu'à currentIndex pour compter le nombre de groupes 'Mixte'
    for (var i = 0; i <= currentIndex; i++) {
      var item = data[i];
      if (item.ligne_mixte === 'Mixte') {
        uniqueGroups.add(item.ligne_mixe_id);
      }
    }
    return Array.from(uniqueGroups).indexOf(currentLine.ligne_mixe_id) + 1;
  })),
  watch: {
    "f8Manager.data": {
      handler: function handler(newVal, oldVal) {
        this.autosaving(newVal, oldVal);
        EventBus.$emit("refresh-dajc", this.f8Manager.data);
      },
      deep: true,
      immediate: false
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/demande_depassement/DA-DE1.vue?vue&type=template&id=3f34228a&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/demande_depassement/DA-DE1.vue?vue&type=template&id=3f34228a&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$f8Manager$data$no, _vm$f8Manager$data$no2, _vm$ligneSelected, _vm$ligneSelected2;
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    on: {
      contextmenu: function contextmenu($event) {
        return _vm.$refs.menu.open($event, _vm.tb_name);
      }
    }
  }, [_c("div", {
    staticClass: "row bg-light card-width-height",
    staticStyle: {
      width: "100%",
      height: "100%"
    }
  }, [_c("ContextMenu", {
    ref: "menu",
    attrs: {
      cred_pub_key: _vm.meta_parseable.cred_pub_key,
      id: _vm.tb_name,
      contextList: _vm.contextList
    }
  }), _vm._v(" "), _vm.seen === true ? _c("div", {
    staticClass: "card",
    staticStyle: {
      width: "100%",
      height: "100%"
    }
  }, [_c("br"), _vm._v(" "), _c("br"), _vm._v(" "), _c("div", {
    staticClass: "card-header hdc pb-0 pt-2"
  }, [_c("h6", {
    ref: "topdiv",
    staticClass: "head",
    attrs: {
      id: "f8-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Presentation de la demande\n                        ")]), _vm._v(" "), _c("div", {
    staticClass: "col-auto"
  }, [((_vm$f8Manager$data$no = _vm.f8Manager.data.notes) === null || _vm$f8Manager$data$no === void 0 ? void 0 : _vm$f8Manager$data$no.length) > 0 ? _c("div", {
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
    staticClass: "icofont icofont-comment text-white px-2autorisation",
    staticStyle: {
      "font-size": "12px"
    },
    attrs: {
      role: "button"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "badge-sm"
  }, [_c("span", [_vm._v("\n                                            " + _vm._s(_vm.f8Manager.data.notes.length) + "\n                                        ")])])])]) : _vm._e(), _vm._v(" "), _c("airplay-icon", {
    staticClass: "custom-class mt-1",
    staticStyle: {
      cursor: "pointer",
      margin: "0 5px"
    },
    attrs: {
      size: "0.7x",
      title: "exemple"
    },
    on: {
      click: function click($event) {
        return _vm.$modal.show("description_et_justification_des_lignes");
      }
    }
  }), _vm._v(" "), _c("chevron-up-icon", {
    staticClass: "custom-class",
    staticStyle: {
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    },
    on: {
      click: function click($event) {
        _vm.seen = !_vm.seen;
      }
    }
  })], 1)])])]), _vm._v(" "), _vm.seen1 == true ? _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen1 = !_vm.seen1;
      }
    }
  }, [_c("h6", {
    "class": " subdiv" + this.tb_name,
    attrs: {
      id: "lignes-existantes"
    }
  }, [_vm._v("\n                        Lignes existantes\n                        "), _c("chevron-up-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive mt-4"
  }, [_c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-borderless"
  }, [_c("thead", [_c("tr", {
    staticClass: "text-center",
    staticStyle: {
      "vertical-align": "center"
    }
  }, [_c("th", [_vm._v("Filiale")]), _vm._v(" "), _c("th", [_vm._v("Lignes (FCFA)")]), _vm._v(" "), _c("th", [_vm._v("Autorisations")]), _vm._v(" "), _c("th", [_c("span", [_vm._v("Encours au ")]), _vm._v(" "), _c("date-input", {
    attrs: {
      value: _vm.f8Manager.data.encours_au,
      id: "encours_au"
    },
    on: {
      input: function input($event) {
        return _vm.formDataVars("encours_au", $event);
      }
    }
  })], 1), _vm._v(" "), _c("th", [_vm._v("Taux")]), _vm._v(" "), _c("th", [_vm._v("Durée (mois)")]), _vm._v(" "), _c("th", [_vm._v("Echéance")]), _vm._v(" "), _c("th", [_vm._v("Impayés")]), _vm._v(" "), _c("th", [_vm._v("Suretés")]), _vm._v(" "), _c("th")])]), _vm._v(" "), _c("tbody", [_vm._l(_vm.f8Manager.data.lignes_existantes, function (ligne_existante, idx) {
    return _c("tr", {
      key: idx + "lg_exv"
    }, [_c("td", [_c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: ligne_existante.filiale,
        expression: "ligne_existante.filiale"
      }],
      staticClass: "form-select",
      on: {
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(ligne_existante, "filiale", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, function ($event) {
          return _vm.f8Manager.handleInput(ligne_existante, "nouvelles_lignes_caisse", ["lignes_existantes", idx]);
        }]
      }
    }, [_c("option", {
      domProps: {
        value: ""
      }
    }), _vm._v(" "), _vm._l(_vm.filiale_afg, function (filiale_afg, indexF) {
      return _c("option", {
        key: indexF + "4z_1",
        domProps: {
          value: filiale_afg
        }
      }, [_vm._v(_vm._s(filiale_afg) + "\n                                            ")]);
    })], 2)]), _vm._v(" "), _vm.isFirstOccurrence("lignes_existantes", idx) ? _c("td", {
      attrs: {
        rowspan: _vm.getRowspan("lignes_existantes", ligne_existante.ligne_mixe_id)
      }
    }, [ligne_existante.ligne_mixte == "Mixte" ? _c("div", {
      staticClass: "d-flex"
    }, [_c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: ligne_existante.ligne_mixte,
        expression: "ligne_existante.ligne_mixte"
      }],
      staticClass: "form-select",
      on: {
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(ligne_existante, "ligne_mixte", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, function ($event) {
          return _vm.f8Manager.handleInput(ligne_existante, "nouvelles_lignes_caisse", ["lignes_existantes", idx]);
        }]
      }
    }, [_c("option", {
      domProps: {
        value: ""
      }
    }), _vm._v(" "), _vm._l(_vm.f8Constants.tous_les_lignes, function (line, indexL) {
      return _c("option", {
        key: indexL + "4z_1",
        domProps: {
          value: line.libelle
        }
      }, [_vm._v(_vm._s(line.libelle) + "\n                                                ")]);
    }), _vm._v(" "), _c("optgroup", {
      attrs: {
        label: "--------------------------------"
      }
    }), _vm._v(" "), _c("option", {
      attrs: {
        value: "Mixte"
      }
    }, [_vm._v("Mixte")])], 2), _vm._v(" "), _c("div", {
      staticStyle: {
        "margin-left": "0.5rem!important"
      }
    }, [_c("vue-tags-input", {
      staticStyle: {
        width: "250px",
        border: "1px solid #ccc",
        "border-radius": "6px"
      },
      attrs: {
        "autocomplete-items": _vm.f8Constants.ligneAutoComplete("tous_les_lignes"),
        tags: ligne_existante.tags,
        placeholder: "Selectionner les lignes"
      },
      on: {
        "tags-changed": function tagsChanged($event) {
          return _vm.f8Manager.handleTag($event, ["lignes_existantes", idx], _vm.f8Constants.tous_les_lignes, ligne_existante, "nouvelles_lignes_caisse");
        },
        "adding-duplicate": function addingDuplicate() {}
      },
      model: {
        value: ligne_existante.tag,
        callback: function callback($$v) {
          _vm.$set(ligne_existante, "tag", $$v);
        },
        expression: "ligne_existante.tag"
      }
    })], 1)]) : _c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: ligne_existante.ligne,
        expression: "ligne_existante.ligne"
      }],
      staticClass: "form-select",
      on: {
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(ligne_existante, "ligne", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, function ($event) {
          return _vm.f8Manager.handleInput(ligne_existante, "nouvelles_lignes_caisse", ["lignes_existantes", idx]);
        }]
      }
    }, [_c("option", {
      domProps: {
        value: ""
      }
    }), _vm._v(" "), _vm._l(_vm.f8Constants.tous_les_lignes, function (line, indexL) {
      return _c("option", {
        key: indexL + "4z_1",
        domProps: {
          value: line.libelle
        }
      }, [_vm._v(_vm._s(line.libelle) + "\n                                            ")]);
    }), _vm._v(" "), _c("optgroup", {
      attrs: {
        label: "--------------------------------"
      }
    }), _vm._v(" "), _c("option", {
      attrs: {
        value: "Mixte"
      }
    }, [_vm._v("Mixte")])], 2)]) : _vm._e(), _vm._v(" "), _c("td", [_c("currency-input2", {
      attrs: {
        "default-typing": false
      },
      on: {
        change: function change($event) {
          return _vm.f8Manager.handleInput(ligne_existante, "nouvelles_lignes_caisse");
        }
      },
      model: {
        value: ligne_existante.autorisation,
        callback: function callback($$v) {
          _vm.$set(ligne_existante, "autorisation", $$v);
        },
        expression: "ligne_existante.autorisation"
      }
    }), _vm._v(" "), ligne_existante.ligne_mixte_libelle ? _c("label", {
      staticClass: "text-center",
      staticStyle: {
        "font-size": "12px !important"
      },
      attrs: {
        "for": "floatingTextarea"
      }
    }, [_vm._v(_vm._s(ligne_existante.ligne_mixte_libelle))]) : _vm._e()], 1), _vm._v(" "), _c("td", [_c("currency-input2", {
      staticStyle: {
        width: "unset"
      },
      attrs: {
        "default-typing": false
      },
      on: {
        change: function change($event) {
          return _vm.f8Manager.handleInput(ligne_existante, "nouvelles_lignes_caisse");
        }
      },
      model: {
        value: ligne_existante.encours,
        callback: function callback($$v) {
          _vm.$set(ligne_existante, "encours", $$v);
        },
        expression: "ligne_existante.encours"
      }
    })], 1), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: ligne_existante.taux,
        expression: "ligne_existante.taux"
      }],
      staticClass: "form-control",
      staticStyle: {
        width: "60px"
      },
      attrs: {
        type: "number"
      },
      domProps: {
        value: ligne_existante.taux
      },
      on: {
        change: function change($event) {
          return _vm.f8Manager.handleInput(ligne_existante, "nouvelles_lignes_caisse");
        },
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(ligne_existante, "taux", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: ligne_existante.duree,
        expression: "ligne_existante.duree"
      }],
      staticClass: "form-control",
      staticStyle: {
        width: "80px"
      },
      attrs: {
        type: "number"
      },
      domProps: {
        value: ligne_existante.duree
      },
      on: {
        change: function change($event) {
          return _vm.f8Manager.handleInput(ligne_existante, "nouvelles_lignes_caisse");
        },
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(ligne_existante, "duree", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("div", {
      staticStyle: {
        width: "280px"
      }
    }, [_c("date-input", {
      attrs: {
        value: ligne_existante.echeance
      },
      on: {
        input: function input($event) {
          return _vm.formDataVars2($event, idx, "lignes_existantes", "echeance");
        }
      }
    })], 1)]), _vm._v(" "), _c("td", [_c("currency-input2", {
      staticStyle: {
        width: "unset"
      },
      attrs: {
        "default-typing": false
      },
      on: {
        change: function change($event) {
          return _vm.f8Manager.handleInput(ligne_existante, "nouvelles_lignes_caisse");
        }
      },
      model: {
        value: ligne_existante.impayes,
        callback: function callback($$v) {
          _vm.$set(ligne_existante, "impayes", $$v);
        },
        expression: "ligne_existante.impayes"
      }
    })], 1), _vm._v(" "), _c("td", [_c("button", {
      staticStyle: {
        color: "#ffffff",
        "border-radius": "15%",
        border: "none"
      },
      style: _vm.f8Manager.lineHasSuretes(ligne_existante),
      attrs: {
        type: "button",
        title: "Ajouter des suretés à cette ligne"
      },
      on: {
        click: function click($event) {
          return _vm.openModal("hypoModal", ligne_existante);
        }
      }
    }, [_c("i", {
      staticClass: "icofont-list",
      attrs: {
        size: "21"
      }
    })])]), _vm._v(" "), _c("td", [_c("button", {
      staticStyle: {
        "background-color": "#2c3e50",
        "border-radius": "15%",
        color: "#ffffff",
        border: "none"
      },
      attrs: {
        type: "button",
        title: "Effacer le contenu"
      },
      on: {
        click: function click($event) {
          return _vm.f8Manager.cleanLine("lignes_existantes", ligne_existante.id, "nouvelles_lignes_caisse");
        }
      }
    }, [_c("i", {
      staticClass: "icofont-dropbox"
    })])]), _vm._v(" "), _c("td", [idx == 0 ? _c("button", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: idx == 0,
        expression: "idx == 0"
      }],
      staticStyle: {
        "background-color": "#2c3e50",
        color: "#ffffff",
        "border-radius": "15%",
        border: "none"
      },
      attrs: {
        type: "button",
        title: "Ajouter un nouvel article"
      },
      on: {
        click: function click($event) {
          return _vm.f8Manager.addLine("lignes_existantes", "nouvelles_lignes_caisse");
        }
      }
    }, [_c("plus-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1) : _c("button", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: ligne_existante.from != "",
        expression: "ligne_existante.from != ''"
      }],
      staticStyle: {
        "background-color": "transparent",
        border: "none"
      },
      attrs: {
        type: "button",
        title: "Supprimer cette action"
      },
      on: {
        click: function click($event) {
          return _vm.f8Manager.removeLine("lignes_existantes", ligne_existante.id, "nouvelles_lignes_caisse");
        }
      }
    }, [_c("trash-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1)])]);
  }), _vm._v(" "), _c("tr", [_vm._m(0), _vm._v(" "), _c("td", [_c("currency-input2", {
    staticClass: "form-control",
    attrs: {
      "default-typing": false,
      readonly: ""
    },
    model: {
      value: _vm.f8Manager.data.st_caisse_ligne_existantes_autorisation,
      callback: function callback($$v) {
        _vm.$set(_vm.f8Manager.data, "st_caisse_ligne_existantes_autorisation", $$v);
      },
      expression: "f8Manager.data.st_caisse_ligne_existantes_autorisation"
    }
  })], 1), _vm._v(" "), _c("td", [_c("currency-input2", {
    staticClass: "form-control",
    staticStyle: {
      width: "unset"
    },
    attrs: {
      "default-typing": false,
      readonly: ""
    },
    model: {
      value: _vm.f8Manager.data.st_caisse_ligne_existantes_encours,
      callback: function callback($$v) {
        _vm.$set(_vm.f8Manager.data, "st_caisse_ligne_existantes_encours", $$v);
      },
      expression: "f8Manager.data.st_caisse_ligne_existantes_encours"
    }
  })], 1)])], 2)])]), _vm._v(" "), _c("br"), _vm._v(" "), _c("b", [_vm._v("Engagement signature")]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-borderless"
  }, [_c("thead", [_c("tr", {
    staticClass: "text-center",
    staticStyle: {
      "vertical-align": "center"
    }
  }, [_c("th", [_vm._v("Filiale")]), _vm._v(" "), _c("th", [_vm._v("Lignes")]), _vm._v(" "), _c("th", [_vm._v("Autorisations")]), _vm._v(" "), _c("th", [_c("span", [_vm._v("Encours au")]), _vm._v(" "), _c("date-input", {
    attrs: {
      value: _vm.f8Manager.data.encours_au,
      id: "encours_au"
    },
    on: {
      input: function input($event) {
        return _vm.formDataVars("encours_au", $event);
      }
    }
  })], 1), _vm._v(" "), _c("th", [_vm._v("Taux")]), _vm._v(" "), _c("th", [_vm._v("Durée (mois)")]), _vm._v(" "), _c("th", [_vm._v("Echéance")]), _vm._v(" "), _c("th", [_vm._v("Impayés")]), _vm._v(" "), _c("th", [_vm._v("Suretés")]), _vm._v(" "), _c("th")])]), _vm._v(" "), _c("tbody", [_vm._l(_vm.f8Manager.data.lignes_existantes_engagements_signatures, function (eng_sign, i) {
    return _c("tr", {
      key: i + "lg_ex"
    }, [_c("td", [_c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: eng_sign.filiale,
        expression: "eng_sign.filiale"
      }],
      staticClass: "form-select",
      on: {
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(eng_sign, "filiale", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, function ($event) {
          return _vm.f8Manager.handleInput(eng_sign, "nouvelles_lignes_signature", ["lignes_existantes_engagements_signatures", i]);
        }]
      }
    }, [_c("option", {
      domProps: {
        value: ""
      }
    }), _vm._v(" "), _vm._l(_vm.filiale_afg, function (filiale_afg, indexF) {
      return _c("option", {
        key: indexF + "1z_1",
        domProps: {
          value: filiale_afg
        }
      }, [_vm._v(_vm._s(filiale_afg) + "\n                                            ")]);
    })], 2)]), _vm._v(" "), _vm.isFirstOccurrence("lignes_existantes_engagements_signatures", i) ? _c("td", {
      attrs: {
        rowspan: _vm.getRowspan("lignes_existantes_engagements_signatures", eng_sign.ligne_mixe_id)
      }
    }, [eng_sign.ligne_mixte == "Mixte" ? _c("div", {
      staticClass: "d-flex"
    }, [_c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: eng_sign.ligne_mixte,
        expression: "eng_sign.ligne_mixte"
      }],
      staticClass: "form-select",
      on: {
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(eng_sign, "ligne_mixte", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, function ($event) {
          return _vm.f8Manager.handleInput(eng_sign, "nouvelles_lignes_signature", ["lignes_existantes_engagements_signatures", i]);
        }]
      }
    }, [_c("option", {
      domProps: {
        value: ""
      }
    }), _vm._v(" "), _vm._l(_vm.f8Constants.lignes_engagements_signatures, function (line, indexL) {
      return _c("option", {
        key: indexL + "4eg",
        domProps: {
          value: line.libelle
        }
      }, [_vm._v(_vm._s(line.libelle) + "\n                                                ")]);
    }), _vm._v(" "), _c("optgroup", {
      attrs: {
        label: "--------------------------------"
      }
    }), _vm._v(" "), _c("option", {
      attrs: {
        value: "Mixte"
      }
    }, [_vm._v("Mixte")])], 2), _vm._v(" "), _c("div", {
      staticStyle: {
        "margin-left": "0.5rem!important"
      }
    }, [_c("vue-tags-input", {
      staticStyle: {
        width: "250px",
        border: "1px solid #ccc",
        "border-radius": "6px"
      },
      attrs: {
        "autocomplete-items": _vm.f8Constants.ligneAutoComplete("lignes_engagements_signatures"),
        tags: eng_sign.tags,
        placeholder: "Selectionner les lignes"
      },
      on: {
        "tags-changed": function tagsChanged($event) {
          return _vm.f8Manager.handleTag($event, ["lignes_existantes_engagements_signatures", i], _vm.f8Constants.lignes_engagements_signatures, eng_sign, "nouvelles_lignes_signature");
        },
        "adding-duplicate": function addingDuplicate() {}
      },
      model: {
        value: eng_sign.tag,
        callback: function callback($$v) {
          _vm.$set(eng_sign, "tag", $$v);
        },
        expression: "eng_sign.tag"
      }
    })], 1)]) : _c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: eng_sign.ligne,
        expression: "eng_sign.ligne"
      }],
      staticClass: "form-select",
      on: {
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(eng_sign, "ligne", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, function ($event) {
          return _vm.f8Manager.handleInput(eng_sign, "nouvelles_lignes_signature", ["lignes_existantes_engagements_signatures", i]);
        }]
      }
    }, [_c("option", {
      domProps: {
        value: ""
      }
    }), _vm._v(" "), _vm._l(_vm.f8Constants.lignes_engagements_signatures, function (line, indexL) {
      return _c("option", {
        key: indexL + "4eg",
        domProps: {
          value: line.libelle
        }
      }, [_vm._v(_vm._s(line.libelle) + "\n                                            ")]);
    }), _vm._v(" "), _c("optgroup", {
      attrs: {
        label: "--------------------------------"
      }
    }), _vm._v(" "), _c("option", {
      attrs: {
        value: "Mixte"
      }
    }, [_vm._v("Mixte")])], 2)]) : _vm._e(), _vm._v(" "), _c("td", [_c("currency-input2", {
      attrs: {
        "default-typing": false
      },
      on: {
        change: function change($event) {
          return _vm.f8Manager.handleInput(eng_sign, "nouvelles_lignes_signature");
        }
      },
      model: {
        value: eng_sign.autorisation,
        callback: function callback($$v) {
          _vm.$set(eng_sign, "autorisation", $$v);
        },
        expression: "eng_sign.autorisation"
      }
    }), _vm._v(" "), eng_sign.ligne_mixte_libelle ? _c("label", {
      staticClass: "text-center",
      staticStyle: {
        "font-size": "12px !important"
      },
      attrs: {
        "for": "floatingTextarea"
      }
    }, [_vm._v(_vm._s(eng_sign.ligne_mixte_libelle))]) : _vm._e()], 1), _vm._v(" "), _c("td", [_c("currency-input2", {
      staticStyle: {
        width: "unset"
      },
      attrs: {
        "default-typing": false
      },
      on: {
        change: function change($event) {
          return _vm.f8Manager.handleInput(eng_sign, "nouvelles_lignes_signature");
        }
      },
      model: {
        value: eng_sign.encours,
        callback: function callback($$v) {
          _vm.$set(eng_sign, "encours", $$v);
        },
        expression: "eng_sign.encours"
      }
    })], 1), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: eng_sign.taux,
        expression: "eng_sign.taux"
      }],
      staticClass: "form-control",
      staticStyle: {
        width: "60px"
      },
      attrs: {
        type: "number"
      },
      domProps: {
        value: eng_sign.taux
      },
      on: {
        change: function change($event) {
          return _vm.f8Manager.handleInput(eng_sign, "nouvelles_lignes_signature");
        },
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(eng_sign, "taux", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: eng_sign.duree,
        expression: "eng_sign.duree"
      }],
      staticClass: "form-control",
      staticStyle: {
        width: "80px"
      },
      attrs: {
        type: "number"
      },
      domProps: {
        value: eng_sign.duree
      },
      on: {
        change: function change($event) {
          return _vm.f8Manager.handleInput(eng_sign, "nouvelles_lignes_signature");
        },
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(eng_sign, "duree", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("div", {
      staticStyle: {
        width: "280px"
      }
    }, [_c("date-input", {
      attrs: {
        value: eng_sign.echeance
      },
      on: {
        input: function input($event) {
          return _vm.formDataVars2($event, i, "lignes_existantes_engagements_signatures", "echeance");
        }
      }
    })], 1)]), _vm._v(" "), _c("td", [_c("currency-input2", {
      staticStyle: {
        width: "unset"
      },
      attrs: {
        "default-typing": false
      },
      on: {
        change: function change($event) {
          return _vm.f8Manager.handleInput(eng_sign, "nouvelles_lignes_signature");
        }
      },
      model: {
        value: eng_sign.impayes,
        callback: function callback($$v) {
          _vm.$set(eng_sign, "impayes", $$v);
        },
        expression: "eng_sign.impayes"
      }
    })], 1), _vm._v(" "), _c("td", [_c("button", {
      staticStyle: {
        color: "#ffffff",
        "border-radius": "15%",
        border: "none"
      },
      style: _vm.f8Manager.lineHasSuretes(eng_sign),
      attrs: {
        type: "button",
        title: "Ajouter des suretés à cette ligne"
      },
      on: {
        click: function click($event) {
          return _vm.openModal("hypoModal", eng_sign);
        }
      }
    }, [_c("i", {
      staticClass: "icofont-list",
      attrs: {
        size: "21"
      }
    })])]), _vm._v(" "), _c("td", [_c("button", {
      staticStyle: {
        "background-color": "#2c3e50",
        "border-radius": "15%",
        color: "#ffffff",
        border: "none"
      },
      attrs: {
        type: "button",
        title: "Effacer le contenu de ligne"
      },
      on: {
        click: function click($event) {
          return _vm.f8Manager.cleanLine("lignes_existantes_engagements_signatures", eng_sign.id, "nouvelles_lignes_signature");
        }
      }
    }, [_c("i", {
      staticClass: "icofont-dropbox"
    })])]), _vm._v(" "), i == 0 ? _c("td", [_c("button", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: i == 0,
        expression: "i == 0"
      }],
      staticStyle: {
        "background-color": "#2c3e50",
        color: "#ffffff",
        "border-radius": "15%",
        border: "none"
      },
      attrs: {
        type: "button",
        title: "Ajouter un nouvel article"
      },
      on: {
        click: function click($event) {
          return _vm.f8Manager.addLine("lignes_existantes_engagements_signatures", "nouvelles_lignes_signature");
        }
      }
    }, [_c("plus-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1)]) : _c("td", [_c("button", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: i != 0,
        expression: "i != 0"
      }],
      staticStyle: {
        "background-color": "transparent",
        border: "none"
      },
      attrs: {
        type: "button",
        title: "Supprimer cette action"
      },
      on: {
        click: function click($event) {
          return _vm.f8Manager.removeLine("lignes_existantes_engagements_signatures", eng_sign.id, "nouvelles_lignes_signature");
        }
      }
    }, [_c("trash-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1)])]);
  }), _vm._v(" "), _c("tr", [_vm._m(1), _vm._v(" "), _c("td", [_c("currency-input2", {
    staticClass: "form-control",
    attrs: {
      "default-typing": false,
      readonly: ""
    },
    model: {
      value: _vm.f8Manager.data.st_signature_ligne_existantes_autorisation,
      callback: function callback($$v) {
        _vm.$set(_vm.f8Manager.data, "st_signature_ligne_existantes_autorisation", $$v);
      },
      expression: "f8Manager.data.st_signature_ligne_existantes_autorisation"
    }
  })], 1), _vm._v(" "), _c("td", [_c("currency-input2", {
    staticClass: "form-control",
    staticStyle: {
      width: "unset"
    },
    attrs: {
      "default-typing": false,
      readonly: ""
    },
    model: {
      value: _vm.f8Manager.data.st_signature_ligne_existantes_encours,
      callback: function callback($$v) {
        _vm.$set(_vm.f8Manager.data, "st_signature_ligne_existantes_encours", $$v);
      },
      expression: "f8Manager.data.st_signature_ligne_existantes_encours"
    }
  })], 1)]), _vm._v(" "), _c("tr", [_vm._m(2), _vm._v(" "), _c("td", [_c("currency-input2", {
    staticClass: "form-control",
    staticStyle: {
      background: "#34495e",
      color: "#fff"
    },
    attrs: {
      "default-typing": false,
      readonly: ""
    },
    model: {
      value: _vm.f8Manager.data.total_lignes_existantes_autorisation,
      callback: function callback($$v) {
        _vm.$set(_vm.f8Manager.data, "total_lignes_existantes_autorisation", $$v);
      },
      expression: "f8Manager.data.total_lignes_existantes_autorisation"
    }
  })], 1), _vm._v(" "), _c("td", [_c("currency-input2", {
    staticClass: "form-control",
    staticStyle: {
      background: "#34495e",
      color: "#fff",
      width: "unset"
    },
    attrs: {
      "default-typing": false,
      readonly: ""
    },
    model: {
      value: _vm.f8Manager.data.total_lignes_existantes_encours,
      callback: function callback($$v) {
        _vm.$set(_vm.f8Manager.data, "total_lignes_existantes_encours", $$v);
      },
      expression: "f8Manager.data.total_lignes_existantes_encours"
    }
  })], 1)])], 2)])])])]) : _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen1 = !_vm.seen1;
      }
    }
  }, [_c("h6", {
    attrs: {
      id: "lignes-existantes"
    }
  }, [_vm._v("\n                        Lignes existantes\n                        "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)])]), _vm._v(" "), _vm.seen2 == true ? _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen2 = !_vm.seen2;
      }
    }
  }, [_c("h6", {
    "class": " subdiv" + this.tb_name,
    attrs: {
      id: "lignes-existantes"
    }
  }, [_vm._v("\n                        Concours sollicités\n                        "), _c("chevron-up-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive mt-4"
  }, [_c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-borderless"
  }, [_vm._m(3), _vm._v(" "), _c("tbody", [_vm._l(_vm.f8Manager.data.nouvelles_lignes_caisse, function (nv_ligne_caisse, idx_) {
    return _c("tr", {
      key: idx_ + "nv_lg_1"
    }, [_c("td", [_c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: nv_ligne_caisse.filiale,
        expression: "nv_ligne_caisse.filiale"
      }],
      staticClass: "form-select",
      attrs: {
        disabled: !["", null, undefined].includes(nv_ligne_caisse.from)
      },
      on: {
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(nv_ligne_caisse, "filiale", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, function ($event) {
          return _vm.f8Manager.handleInput(nv_ligne_caisse, "nouvelles_lignes_caisse", ["lignes_existantes", _vm.i]);
        }]
      }
    }, [_c("option", {
      domProps: {
        value: ""
      }
    }), _vm._v(" "), _vm._l(_vm.filiale_afg, function (filiale_afg, indexF) {
      return _c("option", {
        key: indexF + "2z_1",
        domProps: {
          value: filiale_afg
        }
      }, [_vm._v(_vm._s(filiale_afg) + "\n                                            ")]);
    })], 2)]), _vm._v(" "), _c("td", [nv_ligne_caisse !== null && nv_ligne_caisse !== void 0 && nv_ligne_caisse.from ? [nv_ligne_caisse.ligne_mixte == "Mixte" ? _c("div", {
      staticClass: "d-flex"
    }, [_c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: nv_ligne_caisse.ligne,
        expression: "nv_ligne_caisse.ligne"
      }],
      staticClass: "form-select",
      attrs: {
        title: nv_ligne_caisse.ligne,
        disabled: ""
      },
      on: {
        change: function change($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(nv_ligne_caisse, "ligne", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }
      }
    }, [_c("option", {
      domProps: {
        value: nv_ligne_caisse.ligne
      }
    }, [_vm._v("\n                                                        " + _vm._s(nv_ligne_caisse.ligne_mixte) + " - " + _vm._s(_vm.getMixteIndex("nouvelles_lignes_caisse", idx_)) + "\n                                                    ")])]), _vm._v(" "), _c("div", {
      staticStyle: {
        "margin-left": "0.5rem!important"
      }
    }, [_c("input", {
      staticClass: "form-control",
      staticStyle: {
        width: "150px",
        border: "1px solid #ccc",
        "border-radius": "6px"
      },
      attrs: {
        type: "text",
        disabled: ""
      },
      domProps: {
        value: nv_ligne_caisse.ligne
      }
    })])]) : _c("div", [nv_ligne_caisse !== null && nv_ligne_caisse !== void 0 && nv_ligne_caisse.from ? _c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: nv_ligne_caisse.ligne,
        expression: "nv_ligne_caisse.ligne"
      }],
      staticClass: "form-select",
      attrs: {
        disabled: !["", null, undefined].includes(nv_ligne_caisse.from)
      },
      on: {
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(nv_ligne_caisse, "ligne", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, function ($event) {
          null;
        }]
      }
    }, [_c("option", {
      domProps: {
        value: ""
      }
    }), _vm._v(" "), _vm._l(_vm.f8Constants.tous_les_lignes_filtres, function (line, indexL) {
      return _c("option", {
        key: indexL + "4z_1",
        domProps: {
          value: line.libelle
        }
      }, [_vm._v(_vm._s(line.libelle))]);
    })], 2) : _c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: nv_ligne_caisse.ligne,
        expression: "nv_ligne_caisse.ligne"
      }],
      staticClass: "form-select",
      attrs: {
        disabled: !["", null, undefined].includes(nv_ligne_caisse.from)
      },
      on: {
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(nv_ligne_caisse, "ligne", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, function ($event) {
          null;
        }]
      }
    }, [_c("option", {
      domProps: {
        value: ""
      }
    }), _vm._v(" "), _vm._l(_vm.f8Constants.tous_les_lignes, function (line, indexL) {
      return _c("option", {
        key: indexL + "4z_1",
        domProps: {
          value: line.libelle
        }
      }, [_vm._v(_vm._s(line.libelle))]);
    })], 2)])] : [nv_ligne_caisse.ligne_mixte == "Mixte" ? _c("div", {
      staticClass: "d-flex"
    }, [_c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: nv_ligne_caisse.ligne_mixte,
        expression: "nv_ligne_caisse.ligne_mixte"
      }],
      staticClass: "form-select",
      on: {
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(nv_ligne_caisse, "ligne_mixte", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, function ($event) {
          return _vm.f8Manager.addVarMixte(["nouvelles_lignes_caisse", idx_]);
        }]
      }
    }, [_c("option", {
      domProps: {
        value: ""
      }
    }), _vm._v(" "), _vm._l(_vm.f8Constants.tous_les_lignes_filtres, function (line, indexL) {
      return _c("option", {
        key: indexL + "4z_1",
        domProps: {
          value: line.libelle
        }
      }, [_vm._v(_vm._s(line.libelle))]);
    }), _vm._v(" "), _c("optgroup", {
      attrs: {
        label: "--------------------------------"
      }
    }), _vm._v(" "), _c("option", {
      attrs: {
        value: "Mixte"
      }
    }, [_vm._v("Mixte")])], 2), _vm._v(" "), _c("div", {
      staticStyle: {
        "margin-left": "0.5rem!important"
      }
    }, [_c("vue-tags-input", {
      staticStyle: {
        width: "250px",
        border: "1px solid #ccc",
        "border-radius": "6px"
      },
      attrs: {
        "autocomplete-items": _vm.f8Constants.ligneAutoComplete("tous_les_lignes_filtres"),
        tags: nv_ligne_caisse.tags,
        placeholder: "Selectionner les lignes"
      },
      on: {
        "tags-changed": function tagsChanged($event) {
          return _vm.f8Manager.handleTag($event, ["nouvelles_lignes_caisse", idx_], _vm.f8Constants.tous_les_lignes_filtres, null, null);
        },
        "adding-duplicate": function addingDuplicate() {}
      },
      model: {
        value: nv_ligne_caisse.tag,
        callback: function callback($$v) {
          _vm.$set(nv_ligne_caisse, "tag", $$v);
        },
        expression: "nv_ligne_caisse.tag"
      }
    })], 1)]) : _c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: nv_ligne_caisse.ligne,
        expression: "nv_ligne_caisse.ligne"
      }],
      staticClass: "form-select",
      on: {
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(nv_ligne_caisse, "ligne", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, function ($event) {
          return _vm.f8Manager.addVarMixte(["nouvelles_lignes_caisse", idx_]);
        }]
      }
    }, [_c("option", {
      domProps: {
        value: ""
      }
    }), _vm._v(" "), _vm._l(_vm.f8Constants.tous_les_lignes_filtres, function (line, indexL) {
      return _c("option", {
        key: indexL + "4z_1",
        domProps: {
          value: line.libelle
        }
      }, [_vm._v(_vm._s(line.libelle) + "\n                                                ")]);
    }), _vm._v(" "), _c("optgroup", {
      attrs: {
        label: "--------------------------------"
      }
    }), _vm._v(" "), _c("option", {
      attrs: {
        value: "Mixte"
      }
    }, [_vm._v("Mixte")])], 2)]], 2), _vm._v(" "), _c("td", [_c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: nv_ligne_caisse.statut,
        expression: "nv_ligne_caisse.statut"
      }],
      staticClass: "form-select",
      "class": {
        "already-exist": nv_ligne_caisse === null || nv_ligne_caisse === void 0 ? void 0 : nv_ligne_caisse.from
      },
      attrs: {
        title: nv_ligne_caisse.statut
      },
      on: {
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(nv_ligne_caisse, "statut", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, function ($event) {
          return _vm.f8Manager.computedTypeStatus("lignes_existantes", nv_ligne_caisse, idx_, "nouvelles_lignes_caisse");
        }]
      }
    }, [nv_ligne_caisse !== null && nv_ligne_caisse !== void 0 && nv_ligne_caisse.from ? [_c("option", {
      domProps: {
        value: "Renouvellement"
      }
    }, [_vm._v("Renouvellement")]), _vm._v(" "), _c("option", {
      domProps: {
        value: "Abandon"
      }
    }, [_vm._v("Abandon")])] : [_c("option", {
      domProps: {
        value: "Nouveau"
      }
    }, [_vm._v("Nouveau")])]], 2)]), _vm._v(" "), _c("td", [_c("currency-input2", {
      "class": {
        "already-exist": nv_ligne_caisse === null || nv_ligne_caisse === void 0 ? void 0 : nv_ligne_caisse.from
      },
      attrs: {
        disabled: !["", null, undefined].includes(nv_ligne_caisse.from),
        "default-typing": false
      },
      on: {
        change: function change($event) {
          return _vm.f8Manager.computedTypeStatus("lignes_existantes", nv_ligne_caisse, idx_, "nouvelles_lignes_caisse");
        }
      },
      model: {
        value: nv_ligne_caisse.montant,
        callback: function callback($$v) {
          _vm.$set(nv_ligne_caisse, "montant", $$v);
        },
        expression: "nv_ligne_caisse.montant"
      }
    })], 1), _vm._v(" "), _c("td", [_c("currency-input2", {
      "class": {
        "already-exist": nv_ligne_caisse === null || nv_ligne_caisse === void 0 ? void 0 : nv_ligne_caisse.from
      },
      attrs: {
        "default-typing": false
      },
      on: {
        change: function change($event) {
          return _vm.f8Manager.computedTypeStatus("lignes_existantes", nv_ligne_caisse, idx_, "nouvelles_lignes_caisse");
        }
      },
      model: {
        value: nv_ligne_caisse.proposition,
        callback: function callback($$v) {
          _vm.$set(nv_ligne_caisse, "proposition", $$v);
        },
        expression: "nv_ligne_caisse.proposition"
      }
    })], 1), _vm._v(" "), _c("td", [_c("currency-input2", {
      "class": {
        "already-exist": nv_ligne_caisse === null || nv_ligne_caisse === void 0 ? void 0 : nv_ligne_caisse.from
      },
      staticStyle: {
        width: "unset"
      },
      attrs: {
        "default-typing": false
      },
      on: {
        change: function change($event) {
          return _vm.f8Manager.computedTypeStatus("lignes_existantes", nv_ligne_caisse, idx_, "nouvelles_lignes_caisse");
        }
      },
      model: {
        value: nv_ligne_caisse.encours_avant,
        callback: function callback($$v) {
          _vm.$set(nv_ligne_caisse, "encours_avant", $$v);
        },
        expression: "nv_ligne_caisse.encours_avant"
      }
    })], 1), _vm._v(" "), _c("td", [_c("currency-input2", {
      "class": {
        "already-exist": nv_ligne_caisse === null || nv_ligne_caisse === void 0 ? void 0 : nv_ligne_caisse.from
      },
      staticStyle: {
        width: "unset"
      },
      attrs: {
        "default-typing": false
      },
      on: {
        change: function change($event) {
          return _vm.f8Manager.computedTypeStatus("lignes_existantes", nv_ligne_caisse, idx_, "nouvelles_lignes_caisse");
        }
      },
      model: {
        value: nv_ligne_caisse.encours_apres,
        callback: function callback($$v) {
          _vm.$set(nv_ligne_caisse, "encours_apres", $$v);
        },
        expression: "nv_ligne_caisse.encours_apres"
      }
    })], 1), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: nv_ligne_caisse.duree,
        expression: "nv_ligne_caisse.duree"
      }],
      staticClass: "form-control",
      "class": {
        "already-exist": nv_ligne_caisse === null || nv_ligne_caisse === void 0 ? void 0 : nv_ligne_caisse.from
      },
      staticStyle: {
        width: "80px"
      },
      attrs: {
        type: "number"
      },
      domProps: {
        value: nv_ligne_caisse.duree
      },
      on: {
        change: function change($event) {
          return _vm.f8Manager.computedTypeStatus("lignes_existantes", nv_ligne_caisse, idx_, "nouvelles_lignes_caisse");
        },
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(nv_ligne_caisse, "duree", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("div", {
      staticStyle: {
        width: "280px"
      }
    }, [_c("date-input", {
      attrs: {
        classname: nv_ligne_caisse !== null && nv_ligne_caisse !== void 0 && nv_ligne_caisse.from ? "already-exist" : "",
        value: nv_ligne_caisse.echeance
      },
      on: {
        input: function input($event) {
          return _vm.formDataVars2($event, idx_, "nouvelles_lignes_caisse", "echeance");
        }
      }
    })], 1)]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: nv_ligne_caisse.taux,
        expression: "nv_ligne_caisse.taux"
      }],
      staticClass: "form-control",
      "class": {
        "already-exist": nv_ligne_caisse === null || nv_ligne_caisse === void 0 ? void 0 : nv_ligne_caisse.from
      },
      staticStyle: {
        width: "60px"
      },
      attrs: {
        type: "number"
      },
      domProps: {
        value: nv_ligne_caisse.taux
      },
      on: {
        change: function change($event) {
          null;
        },
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(nv_ligne_caisse, "taux", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: nv_ligne_caisse.type,
        expression: "nv_ligne_caisse.type"
      }],
      staticClass: "form-control",
      "class": {
        "already-exist": nv_ligne_caisse === null || nv_ligne_caisse === void 0 ? void 0 : nv_ligne_caisse.from
      },
      staticStyle: {
        width: "60px"
      },
      attrs: {
        disabled: "",
        title: nv_ligne_caisse.type == "RI" ? "Renouvellement identique" : nv_ligne_caisse.type == "RH" ? "Renouvellement à la hausse" : nv_ligne_caisse.type == "RB" ? "Renouvellement à la baisse" : nv_ligne_caisse.type == "AB" ? "Abandon" : ""
      },
      domProps: {
        value: nv_ligne_caisse.type
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(nv_ligne_caisse, "type", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [nv_ligne_caisse.from ? _c("button", {
      staticStyle: {
        color: "#ffffff",
        "border-radius": "15%",
        border: "none"
      },
      style: _vm.f8Manager.lineHasSuretes(nv_ligne_caisse),
      attrs: {
        type: "button",
        title: "Chager les suretés de la ligne existante correspondante"
      },
      on: {
        click: function click($event) {
          return _vm.openModal("hypoModal", nv_ligne_caisse, true);
        }
      }
    }, [_c("i", {
      staticClass: "icofont-download",
      attrs: {
        size: "21"
      }
    })]) : _c("button", {
      staticStyle: {
        color: "#ffffff",
        "border-radius": "15%",
        border: "none"
      },
      style: _vm.f8Manager.lineHasSuretes(nv_ligne_caisse),
      attrs: {
        type: "button",
        title: "Ajouter des suretés à cette ligne"
      },
      on: {
        click: function click($event) {
          return _vm.openModal("hypoModal", nv_ligne_caisse);
        }
      }
    }, [_c("i", {
      staticClass: "icofont-list",
      attrs: {
        size: "21"
      }
    })])]), _vm._v(" "), _c("td", [_c("button", {
      staticStyle: {
        "background-color": "#2c3e50",
        "border-radius": "15%",
        color: "#ffffff",
        border: "none"
      },
      style: !["", null, undefined].includes(nv_ligne_caisse.from) ? {
        "background-color": "#e9ecef"
      } : "",
      attrs: {
        disabled: !["", null, undefined].includes(nv_ligne_caisse.from),
        type: "button",
        title: "Effacer le contenu de ligne"
      },
      on: {
        click: function click($event) {
          return _vm.f8Manager.cleanLine("nouvelles_lignes_caisse", nv_ligne_caisse.id);
        }
      }
    }, [_c("i", {
      staticClass: "icofont-dropbox"
    })])]), _vm._v(" "), _c("td", [idx_ === 0 ? [_c("button", {
      staticStyle: {
        "background-color": "#2c3e50",
        color: "#ffffff",
        "border-radius": "15%",
        border: "none"
      },
      attrs: {
        type: "button",
        title: "Ajouter un nouvel article"
      },
      on: {
        click: function click($event) {
          return _vm.f8Manager.addLine("nouvelles_lignes_caisse");
        }
      }
    }, [_c("plus-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1)] : [["", null, undefined].includes(nv_ligne_caisse.from) ? _c("button", {
      staticStyle: {
        "background-color": "transparent",
        border: "none"
      },
      attrs: {
        type: "button",
        title: "Supprimer cette action"
      },
      on: {
        click: function click($event) {
          return _vm.f8Manager.removeLine("nouvelles_lignes_caisse", nv_ligne_caisse.id);
        }
      }
    }, [_c("trash-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1) : _vm._e()]], 2)]);
  }), _vm._v(" "), _c("tr", [_vm._m(4), _vm._v(" "), _c("td", [_c("currency-input2", {
    staticClass: "form-control",
    attrs: {
      "default-typing": false,
      readonly: ""
    },
    model: {
      value: _vm.f8Manager.data.st_caisse_nouvelles_lignes_montant,
      callback: function callback($$v) {
        _vm.$set(_vm.f8Manager.data, "st_caisse_nouvelles_lignes_montant", $$v);
      },
      expression: "f8Manager.data.st_caisse_nouvelles_lignes_montant"
    }
  })], 1), _vm._v(" "), _c("td", [_c("currency-input2", {
    staticClass: "form-control",
    attrs: {
      "default-typing": false,
      readonly: ""
    },
    model: {
      value: _vm.f8Manager.data.st_caisse_nouvelles_lignes_proposition,
      callback: function callback($$v) {
        _vm.$set(_vm.f8Manager.data, "st_caisse_nouvelles_lignes_proposition", $$v);
      },
      expression: "f8Manager.data.st_caisse_nouvelles_lignes_proposition"
    }
  })], 1), _vm._v(" "), _c("td", [_c("currency-input2", {
    staticClass: "form-control",
    attrs: {
      "default-typing": false,
      readonly: ""
    },
    model: {
      value: _vm.f8Manager.data.st_caisse_nouvelles_lignes_encours_avant,
      callback: function callback($$v) {
        _vm.$set(_vm.f8Manager.data, "st_caisse_nouvelles_lignes_encours_avant", $$v);
      },
      expression: "f8Manager.data.st_caisse_nouvelles_lignes_encours_avant"
    }
  })], 1), _vm._v(" "), _c("td", [_c("currency-input2", {
    staticClass: "form-control",
    attrs: {
      "default-typing": false,
      readonly: ""
    },
    model: {
      value: _vm.f8Manager.data.st_caisse_nouvelles_lignes_encours_apres,
      callback: function callback($$v) {
        _vm.$set(_vm.f8Manager.data, "st_caisse_nouvelles_lignes_encours_apres", $$v);
      },
      expression: "f8Manager.data.st_caisse_nouvelles_lignes_encours_apres"
    }
  })], 1)])], 2)])]), _vm._v(" "), _c("br"), _vm._v(" "), _c("b", [_vm._v("Engagement signature")]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-borderless"
  }, [_vm._m(5), _vm._v(" "), _c("tbody", [_vm._l(_vm.f8Manager.data.nouvelles_lignes_signature, function (nv_ligne_sign, i) {
    return _c("tr", {
      key: i + "lg_ext"
    }, [_c("td", [_c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: nv_ligne_sign.filiale,
        expression: "nv_ligne_sign.filiale"
      }],
      staticClass: "form-select",
      attrs: {
        disabled: !["", null, undefined].includes(nv_ligne_sign.from)
      },
      on: {
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(nv_ligne_sign, "filiale", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, function ($event) {
          return _vm.f8Manager.handleInput(_vm.nv_ligne_caisse, "nouvelles_lignes_signature", ["lignes_existantes", i]);
        }]
      }
    }, [_c("option", {
      domProps: {
        value: ""
      }
    }), _vm._v(" "), _vm._l(_vm.filiale_afg, function (filiale_afg, indexF) {
      return _c("option", {
        key: indexF + "2z_1",
        domProps: {
          value: filiale_afg
        }
      }, [_vm._v(_vm._s(filiale_afg) + "\n                                            ")]);
    })], 2)]), _vm._v(" "), _c("td", [nv_ligne_sign !== null && nv_ligne_sign !== void 0 && nv_ligne_sign.from ? [nv_ligne_sign.ligne_mixte == "Mixte" ? _c("div", {
      staticClass: "d-flex"
    }, [_c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: nv_ligne_sign.ligne,
        expression: "nv_ligne_sign.ligne"
      }],
      staticClass: "form-select",
      attrs: {
        title: nv_ligne_sign.ligne,
        disabled: ""
      },
      on: {
        change: function change($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(nv_ligne_sign, "ligne", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }
      }
    }, [_c("option", {
      domProps: {
        value: nv_ligne_sign.ligne
      }
    }, [_vm._v("\n                                                        " + _vm._s(nv_ligne_sign.ligne_mixte) + " - " + _vm._s(_vm.getMixteIndex("nouvelles_lignes_signature", i)) + "\n                                                    ")])]), _vm._v(" "), _c("div", {
      staticStyle: {
        "margin-left": "0.5rem !important"
      }
    }, [_c("input", {
      staticClass: "form-control",
      staticStyle: {
        width: "150px",
        border: "1px solid #ccc",
        "border-radius": "6px"
      },
      attrs: {
        type: "text",
        disabled: ""
      },
      domProps: {
        value: nv_ligne_sign.ligne
      }
    })])]) : _c("div", [nv_ligne_sign.ligne == "" ? _c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: nv_ligne_sign.ligne,
        expression: "nv_ligne_sign.ligne"
      }],
      staticClass: "form-select",
      attrs: {
        disabled: !["", null, undefined].includes(nv_ligne_sign.from)
      },
      on: {
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(nv_ligne_sign, "ligne", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, function ($event) {
          null;
        }]
      }
    }, [_c("option", {
      domProps: {
        value: ""
      }
    }), _vm._v(" "), _vm._l(_vm.f8Constants.lignes_engagements_signatures, function (line, indexL) {
      return _c("option", {
        key: indexL + "4z_1",
        domProps: {
          value: line.libelle
        }
      }, [_vm._v(_vm._s(line.libelle))]);
    })], 2) : _c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: nv_ligne_sign.ligne,
        expression: "nv_ligne_sign.ligne"
      }],
      staticClass: "form-select",
      attrs: {
        disabled: !["", null, undefined].includes(nv_ligne_sign.from)
      },
      on: {
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(nv_ligne_sign, "ligne", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, function ($event) {
          null;
        }]
      }
    }, [_c("option", {
      domProps: {
        value: ""
      }
    }), _vm._v(" "), _vm._l(_vm.f8Constants.lignes_engagements_signatures, function (line, indexL) {
      return _c("option", {
        key: indexL + "4z_1",
        domProps: {
          value: line.libelle
        }
      }, [_vm._v(_vm._s(line.libelle))]);
    })], 2)])] : [nv_ligne_sign.ligne_mixte == "Mixte" ? _c("div", {
      staticClass: "d-flex"
    }, [_c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: nv_ligne_sign.ligne_mixte,
        expression: "nv_ligne_sign.ligne_mixte"
      }],
      staticClass: "form-select",
      on: {
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(nv_ligne_sign, "ligne_mixte", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, function ($event) {
          return _vm.f8Manager.addVarMixte(["nouvelles_lignes_signature", i]);
        }]
      }
    }, [_c("option", {
      domProps: {
        value: ""
      }
    }), _vm._v(" "), _vm._l(_vm.f8Constants.lignes_engagements_signatures, function (line, indexL) {
      return _c("option", {
        key: indexL + "4z_1",
        domProps: {
          value: line.libelle
        }
      }, [_vm._v(_vm._s(line.libelle))]);
    }), _vm._v(" "), _c("optgroup", {
      attrs: {
        label: "--------------------------------"
      }
    }), _vm._v(" "), _c("option", {
      attrs: {
        value: "Mixte"
      }
    }, [_vm._v("Mixte")])], 2), _vm._v(" "), _c("div", {
      staticStyle: {
        "margin-left": "0.5rem!important"
      }
    }, [_c("vue-tags-input", {
      staticStyle: {
        width: "250px",
        border: "1px solid #ccc",
        "border-radius": "6px"
      },
      attrs: {
        "autocomplete-items": _vm.f8Constants.ligneAutoComplete("lignes_engagements_signatures"),
        tags: nv_ligne_sign.tags,
        placeholder: "Selectionner les lignes"
      },
      on: {
        "tags-changed": function tagsChanged($event) {
          return _vm.f8Manager.handleTag($event, ["nouvelles_lignes_signature", i], _vm.f8Constants.lignes_engagements_signatures, null, null);
        },
        "adding-duplicate": function addingDuplicate() {}
      },
      model: {
        value: nv_ligne_sign.tag,
        callback: function callback($$v) {
          _vm.$set(nv_ligne_sign, "tag", $$v);
        },
        expression: "nv_ligne_sign.tag"
      }
    })], 1)]) : _c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: nv_ligne_sign.ligne,
        expression: "nv_ligne_sign.ligne"
      }],
      staticClass: "form-select",
      on: {
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(nv_ligne_sign, "ligne", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, function ($event) {
          return _vm.f8Manager.addVarMixte(["nouvelles_lignes_signature", i]);
        }]
      }
    }, [_c("option", {
      domProps: {
        value: ""
      }
    }), _vm._v(" "), _vm._l(_vm.f8Constants.lignes_engagements_signatures, function (line, indexL) {
      return _c("option", {
        key: indexL + "4z_1",
        domProps: {
          value: line.libelle
        }
      }, [_vm._v(_vm._s(line.libelle) + "\n                                                ")]);
    }), _vm._v(" "), _c("optgroup", {
      attrs: {
        label: "--------------------------------"
      }
    }), _vm._v(" "), _c("option", {
      attrs: {
        value: "Mixte"
      }
    }, [_vm._v("Mixte")])], 2)]], 2), _vm._v(" "), _c("td", [_c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: nv_ligne_sign.statut,
        expression: "nv_ligne_sign.statut"
      }],
      staticClass: "form-select",
      "class": {
        "already-exist": nv_ligne_sign.from
      },
      attrs: {
        title: nv_ligne_sign.statut
      },
      on: {
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(nv_ligne_sign, "statut", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, function ($event) {
          return _vm.f8Manager.computedTypeStatus("lignes_existantes_engagements_signatures", nv_ligne_sign, i, "nouvelles_lignes_signature");
        }]
      }
    }, [nv_ligne_sign !== null && nv_ligne_sign !== void 0 && nv_ligne_sign.from ? [_c("option", {
      domProps: {
        value: "Renouvellement"
      }
    }, [_vm._v("Renouvellement")]), _vm._v(" "), _c("option", {
      domProps: {
        value: "Abandon"
      }
    }, [_vm._v("Abandon")])] : [_c("option", {
      domProps: {
        value: "Nouveau"
      }
    }, [_vm._v("Nouveau")])]], 2)]), _vm._v(" "), _c("td", [_c("currency-input2", {
      attrs: {
        disabled: !["", null, undefined].includes(nv_ligne_sign.from),
        "default-typing": false
      },
      on: {
        change: function change($event) {
          return _vm.f8Manager.computedTypeStatus("lignes_existantes_engagements_signatures", nv_ligne_sign, i, "nouvelles_lignes_signature");
        }
      },
      model: {
        value: nv_ligne_sign.montant,
        callback: function callback($$v) {
          _vm.$set(nv_ligne_sign, "montant", $$v);
        },
        expression: "nv_ligne_sign.montant"
      }
    })], 1), _vm._v(" "), _c("td", [_c("currency-input2", {
      "class": {
        "already-exist": nv_ligne_sign.from
      },
      attrs: {
        "default-typing": false
      },
      on: {
        change: function change($event) {
          return _vm.f8Manager.computedTypeStatus("lignes_existantes_engagements_signatures", nv_ligne_sign, i, "nouvelles_lignes_signature");
        }
      },
      model: {
        value: nv_ligne_sign.proposition,
        callback: function callback($$v) {
          _vm.$set(nv_ligne_sign, "proposition", $$v);
        },
        expression: "nv_ligne_sign.proposition"
      }
    })], 1), _vm._v(" "), _c("td", [_c("currency-input2", {
      "class": {
        "already-exist": nv_ligne_sign.from
      },
      attrs: {
        "default-typing": false
      },
      on: {
        change: function change($event) {
          return _vm.f8Manager.computedTypeStatus("lignes_existantes_engagements_signatures", nv_ligne_sign, i, "nouvelles_lignes_signature");
        }
      },
      model: {
        value: nv_ligne_sign.encours_avant,
        callback: function callback($$v) {
          _vm.$set(nv_ligne_sign, "encours_avant", $$v);
        },
        expression: "nv_ligne_sign.encours_avant"
      }
    })], 1), _vm._v(" "), _c("td", [_c("currency-input2", {
      "class": {
        "already-exist": nv_ligne_sign.from
      },
      attrs: {
        "default-typing": false
      },
      on: {
        change: function change($event) {
          return _vm.f8Manager.computedTypeStatus("lignes_existantes_engagements_signatures", nv_ligne_sign, i, "nouvelles_lignes_signature");
        }
      },
      model: {
        value: nv_ligne_sign.encours_apres,
        callback: function callback($$v) {
          _vm.$set(nv_ligne_sign, "encours_apres", $$v);
        },
        expression: "nv_ligne_sign.encours_apres"
      }
    })], 1), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: nv_ligne_sign.duree,
        expression: "nv_ligne_sign.duree"
      }],
      staticClass: "form-control",
      "class": {
        "already-exist": nv_ligne_sign.from
      },
      staticStyle: {
        width: "80px"
      },
      attrs: {
        type: "number"
      },
      domProps: {
        value: nv_ligne_sign.duree
      },
      on: {
        change: function change($event) {
          null;
        },
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(nv_ligne_sign, "duree", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("div", {
      staticStyle: {
        width: "280px"
      }
    }, [_c("date-input", {
      attrs: {
        classname: nv_ligne_sign.from ? "already-exist" : "",
        value: nv_ligne_sign.echeance
      },
      on: {
        input: function input($event) {
          return _vm.formDataVars2($event, i, "nouvelles_lignes_signature", "echeance");
        }
      }
    })], 1)]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: nv_ligne_sign.taux,
        expression: "nv_ligne_sign.taux"
      }],
      staticClass: "form-control",
      "class": {
        "already-exist": nv_ligne_sign.from
      },
      staticStyle: {
        width: "60px"
      },
      attrs: {
        type: "number"
      },
      domProps: {
        value: nv_ligne_sign.taux
      },
      on: {
        change: function change($event) {
          null;
        },
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(nv_ligne_sign, "taux", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: nv_ligne_sign.type,
        expression: "nv_ligne_sign.type"
      }],
      staticClass: "form-control",
      "class": {
        "already-exist": nv_ligne_sign.from
      },
      staticStyle: {
        width: "60px"
      },
      attrs: {
        disabled: "",
        title: nv_ligne_sign.type == "RI" ? "Renouvellement identique" : nv_ligne_sign.type == "RH" ? "Renouvellement à la hausse" : nv_ligne_sign.type == "RB" ? "Renouvellement à la baisse" : nv_ligne_sign.type == "AB" ? "Abandon" : ""
      },
      domProps: {
        value: nv_ligne_sign.type
      },
      on: {
        change: function change($event) {
          null;
        },
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(nv_ligne_sign, "type", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [nv_ligne_sign.from ? _c("button", {
      staticStyle: {
        color: "#ffffff",
        "border-radius": "15%",
        border: "none"
      },
      style: nv_ligne_sign.type == "AB" ? {
        "background-color": "#e9ecef",
        color: "#000",
        border: "#000"
      } : _vm.f8Manager.lineHasSuretes(nv_ligne_sign),
      attrs: {
        disabled: (nv_ligne_sign === null || nv_ligne_sign === void 0 ? void 0 : nv_ligne_sign.type) == "AB",
        type: "button",
        title: "Chager les suretés de la ligne existante correspondante"
      },
      on: {
        click: function click($event) {
          return _vm.openModal("hypoModal", nv_ligne_sign, true);
        }
      }
    }, [_c("i", {
      staticClass: "icofont-download",
      attrs: {
        size: "21"
      }
    })]) : _c("button", {
      staticStyle: {
        color: "#ffffff",
        "border-radius": "15%",
        border: "none"
      },
      style: _vm.f8Manager.lineHasSuretes(nv_ligne_sign),
      attrs: {
        type: "button",
        title: "Ajouter des suretés à cette ligne"
      },
      on: {
        click: function click($event) {
          return _vm.openModal("hypoModal", nv_ligne_sign);
        }
      }
    }, [_c("i", {
      staticClass: "icofont-list",
      attrs: {
        size: "21"
      }
    })])]), _vm._v(" "), _c("td", [_c("button", {
      staticStyle: {
        "background-color": "#2c3e50",
        "border-radius": "15%",
        color: "#ffffff",
        border: "none"
      },
      style: !["", null, undefined].includes(nv_ligne_sign.from) ? {
        "background-color": "#e9ecef"
      } : "",
      attrs: {
        disabled: !["", null, undefined].includes(nv_ligne_sign.from),
        type: "button",
        title: "Effacer le contenu de ligne"
      },
      on: {
        click: function click($event) {
          return _vm.f8Manager.cleanLine("nouvelles_lignes_signature", nv_ligne_sign.id);
        }
      }
    }, [_c("i", {
      staticClass: "icofont-dropbox"
    })])]), _vm._v(" "), _c("td", [i === 0 ? [_c("button", {
      staticStyle: {
        "background-color": "#2c3e50",
        color: "#ffffff",
        "border-radius": "15%",
        border: "none"
      },
      attrs: {
        type: "button",
        title: "Ajouter une nouvelle ligne"
      },
      on: {
        click: function click($event) {
          return _vm.f8Manager.addLine("nouvelles_lignes_signature");
        }
      }
    }, [_c("plus-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1)] : [["", null, undefined].includes(nv_ligne_sign.from) ? _c("button", {
      staticStyle: {
        "background-color": "transparent",
        border: "none"
      },
      attrs: {
        type: "button",
        title: "Supprimer cette action"
      },
      on: {
        click: function click($event) {
          return _vm.f8Manager.removeLine("nouvelles_lignes_signature", nv_ligne_sign.id);
        }
      }
    }, [_c("trash-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1) : _vm._e()]], 2)]);
  }), _vm._v(" "), _c("tr", [_vm._m(6), _vm._v(" "), _c("td", [_c("currency-input2", {
    staticClass: "form-control",
    attrs: {
      "default-typing": false,
      readonly: ""
    },
    model: {
      value: _vm.f8Manager.data.st_signature_nouvelles_lignes_montant,
      callback: function callback($$v) {
        _vm.$set(_vm.f8Manager.data, "st_signature_nouvelles_lignes_montant", $$v);
      },
      expression: "f8Manager.data.st_signature_nouvelles_lignes_montant"
    }
  })], 1), _vm._v(" "), _c("td", [_c("currency-input2", {
    staticClass: "form-control",
    attrs: {
      "default-typing": false,
      readonly: ""
    },
    model: {
      value: _vm.f8Manager.data.st_signature_nouvelles_lignes_proposition,
      callback: function callback($$v) {
        _vm.$set(_vm.f8Manager.data, "st_signature_nouvelles_lignes_proposition", $$v);
      },
      expression: "f8Manager.data.st_signature_nouvelles_lignes_proposition"
    }
  })], 1), _vm._v(" "), _c("td", [_c("currency-input2", {
    staticClass: "form-control",
    attrs: {
      "default-typing": false,
      readonly: ""
    },
    model: {
      value: _vm.f8Manager.data.st_signature_nouvelles_lignes_encours_avant,
      callback: function callback($$v) {
        _vm.$set(_vm.f8Manager.data, "st_signature_nouvelles_lignes_encours_avant", $$v);
      },
      expression: "f8Manager.data.st_signature_nouvelles_lignes_encours_avant"
    }
  })], 1), _vm._v(" "), _c("td", [_c("currency-input2", {
    staticClass: "form-control",
    attrs: {
      "default-typing": false,
      readonly: ""
    },
    model: {
      value: _vm.f8Manager.data.st_signature_nouvelles_lignes_encours_apres,
      callback: function callback($$v) {
        _vm.$set(_vm.f8Manager.data, "st_signature_nouvelles_lignes_encours_apres", $$v);
      },
      expression: "f8Manager.data.st_signature_nouvelles_lignes_encours_apres"
    }
  })], 1)]), _vm._v(" "), _c("tr", [_vm._m(7), _vm._v(" "), _c("td", [_c("currency-input2", {
    staticClass: "form-control",
    staticStyle: {
      background: "#34495e",
      color: "#fff"
    },
    attrs: {
      "default-typing": false,
      readonly: ""
    },
    model: {
      value: _vm.f8Manager.data.total_nouvelles_lignes_montant,
      callback: function callback($$v) {
        _vm.$set(_vm.f8Manager.data, "total_nouvelles_lignes_montant", $$v);
      },
      expression: "f8Manager.data.total_nouvelles_lignes_montant"
    }
  })], 1), _vm._v(" "), _c("td", [_c("currency-input2", {
    staticClass: "form-control",
    staticStyle: {
      background: "#34495e",
      color: "#fff"
    },
    attrs: {
      "default-typing": false,
      readonly: ""
    },
    model: {
      value: _vm.f8Manager.data.total_nouvelles_lignes_proposition,
      callback: function callback($$v) {
        _vm.$set(_vm.f8Manager.data, "total_nouvelles_lignes_proposition", $$v);
      },
      expression: "f8Manager.data.total_nouvelles_lignes_proposition"
    }
  })], 1), _vm._v(" "), _c("td", [_c("currency-input2", {
    staticClass: "form-control",
    staticStyle: {
      background: "#34495e",
      color: "#fff"
    },
    attrs: {
      "default-typing": false,
      readonly: ""
    },
    model: {
      value: _vm.f8Manager.data.total_nouvelles_lignes_encours_avant,
      callback: function callback($$v) {
        _vm.$set(_vm.f8Manager.data, "total_nouvelles_lignes_encours_avant", $$v);
      },
      expression: "f8Manager.data.total_nouvelles_lignes_encours_avant"
    }
  })], 1), _vm._v(" "), _c("td", [_c("currency-input2", {
    staticClass: "form-control",
    staticStyle: {
      background: "#34495e",
      color: "#fff"
    },
    attrs: {
      "default-typing": false,
      readonly: ""
    },
    model: {
      value: _vm.f8Manager.data.total_nouvelles_lignes_encours_apres,
      callback: function callback($$v) {
        _vm.$set(_vm.f8Manager.data, "total_nouvelles_lignes_encours_apres", $$v);
      },
      expression: "f8Manager.data.total_nouvelles_lignes_encours_apres"
    }
  })], 1)])], 2)])])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("vue-editor", {
    attrs: {
      id: "commentaire_nouvelles_lignes"
    },
    on: {
      "update-value": function updateValue($event) {
        _vm.f8Manager.data[$event[0]] = $event[1];
      }
    },
    model: {
      value: _vm.f8Manager.data.commentaire_nouvelles_lignes,
      callback: function callback($$v) {
        _vm.$set(_vm.f8Manager.data, "commentaire_nouvelles_lignes", $$v);
      },
      expression: "f8Manager.data.commentaire_nouvelles_lignes"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("label", {
    staticClass: "font-weight-bold"
  }, [_vm._v("Commentaire sur les garanties non détenues")]), _vm._v(" "), _c("vue-editor", {
    attrs: {
      id: "commentaire_nouvelles_lignes_garanties_nd"
    },
    on: {
      "update-value": function updateValue($event) {
        _vm.f8Manager.data[$event[0]] = $event[1];
      }
    },
    model: {
      value: _vm.f8Manager.data.commentaire_nouvelles_lignes_garanties_nd,
      callback: function callback($$v) {
        _vm.$set(_vm.f8Manager.data, "commentaire_nouvelles_lignes_garanties_nd", $$v);
      },
      expression: "f8Manager.data.commentaire_nouvelles_lignes_garanties_nd"
    }
  })], 1)]) : _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen2 = !_vm.seen2;
      }
    }
  }, [_c("h6", {
    attrs: {
      id: "lignes-existantes"
    }
  }, [_vm._v("\n                        Concours sollicités\n                        "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "mb-5"
  }), _vm._v(" "), _c("button", {
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
        _vm.seen = !_vm.seen;
      }
    }
  }, [_vm._v("\n                Fermer le tableau\n            ")])]) : _c("div", {
    staticClass: "card card-width-height"
  }, [_c("br"), _vm._v(" "), _c("div", {
    staticClass: "card-header hdc pb-0 pt-2"
  }, [_c("h6", {
    staticClass: "head",
    attrs: {
      id: "f8-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Presentation de la demande\n                        ")]), _vm._v(" "), _c("div", {
    staticClass: "col-auto"
  }, [((_vm$f8Manager$data$no2 = _vm.f8Manager.data.notes) === null || _vm$f8Manager$data$no2 === void 0 ? void 0 : _vm$f8Manager$data$no2.length) > 0 ? _c("div", {
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
    staticClass: "badge-sm"
  }, [_c("span", [_vm._v("\n                                            " + _vm._s(_vm.f8Manager.data.notes.length) + "\n                                        ")])])])]) : _vm._e(), _vm._v(" "), _c("airplay-icon", {
    staticClass: "custom-class mt-1",
    staticStyle: {
      cursor: "pointer",
      margin: "0 5px"
    },
    attrs: {
      size: "0.7x",
      title: "exemple"
    },
    on: {
      click: function click($event) {
        return _vm.$modal.show("description_et_justification_des_lignes");
      }
    }
  }), _vm._v(" "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    },
    on: {
      click: function click($event) {
        _vm.seen = !_vm.seen;
      }
    }
  })], 1)])])])])], 1), _vm._v(" "), _c("modal", {
    staticClass: "pb-5",
    attrs: {
      name: "hypoModal",
      width: "1500",
      height: "1000",
      adaptive: true,
      resizable: true,
      clickToClose: false
    }
  }, [_c("div", {
    staticClass: "container py-3 mb-2",
    staticStyle: {
      "max-height": "100%",
      overflow: "auto"
    }
  }, [_c("div", {
    staticClass: "modal-content"
  }, [_c("div", {
    staticClass: "modal-header px-3",
    staticStyle: {
      "background-color": "#2c3e50"
    }
  }, [_c("h5", {
    staticClass: "modal-title py-2 text-white"
  }, [_vm._v("\n                        Garanties et supports retenus de la ligne : " + _vm._s((_vm$ligneSelected = _vm.ligneSelected) === null || _vm$ligneSelected === void 0 ? void 0 : _vm$ligneSelected.ligne) + " "), !((_vm$ligneSelected2 = _vm.ligneSelected) !== null && _vm$ligneSelected2 !== void 0 && _vm$ligneSelected2.from) ? _c("span", [_vm._v("(Ligne existante)")]) : _c("span", [_vm._v("(Nouvelle ligne)")])]), _vm._v(" "), _c("i", {
    staticClass: "icofont-close-line text-white",
    on: {
      click: function click($event) {
        return _vm.closeModal("hypoModal", _vm.ligneSelected);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "modal-body px-2"
  }, [_c("ST1", {
    attrs: {
      ligneSelected: _vm.ligneSelected,
      meta_data: _vm.meta_data
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "mb-5"
  }), _vm._v(" "), _c("button", {
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
        return _vm.closeModal("hypoModal", _vm.ligneSelected);
      }
    }
  }, [_vm._v("\n                    Fermer\n                ")])])])]), _vm._v(" "), _c("modal", {
    attrs: {
      name: "description_et_justification_des_lignes",
      width: 500,
      resizable: "",
      height: "300"
    }
  }, [_c("div", {
    staticClass: "image1"
  })]), _vm._v(" "), _c("note-modal", {
    attrs: {
      name: _vm.tb_name,
      listingNote: _vm.listingNote,
      notes: _vm.f8Manager.data.notes
    },
    on: {
      close: function close($event) {
        return _vm.$modal.hide(_vm.tb_name);
      },
      addNote: function addNote($event) {
        var _vm$f8Manager$data$no3;
        (_vm$f8Manager$data$no3 = _vm.f8Manager.data.notes) === null || _vm$f8Manager$data$no3 === void 0 || _vm$f8Manager$data$no3.unshift($event);
      }
    },
    model: {
      value: _vm.f8Manager.data.notes,
      callback: function callback($$v) {
        _vm.$set(_vm.f8Manager.data, "notes", $$v);
      },
      expression: "f8Manager.data.notes"
    }
  })], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "text-start",
    attrs: {
      colspan: "2"
    }
  }, [_c("label", [_c("b", [_vm._v("S/Total par caisse")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "text-start",
    attrs: {
      colspan: "2"
    }
  }, [_c("label", [_c("b", [_vm._v("S/Total par signature")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "text-start",
    attrs: {
      colspan: "2"
    }
  }, [_c("label", [_c("b", [_vm._v("Total")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", {
    staticClass: "text-center",
    staticStyle: {
      "vertical-align": "center"
    }
  }, [_c("th", [_vm._v("Filiale")]), _vm._v(" "), _c("th", [_vm._v("Lignes")]), _vm._v(" "), _c("th", [_vm._v("Statut")]), _vm._v(" "), _c("th", [_vm._v("Montant (Demande Client)")]), _vm._v(" "), _c("th", [_vm._v("Proposition DCE (autorisation)")]), _vm._v(" "), _c("th", [_c("span", [_vm._v("Encours avant")])]), _vm._v(" "), _c("th", [_vm._v("Encours après")]), _vm._v(" "), _c("th", [_vm._v("Durée (mois)")]), _vm._v(" "), _c("th", [_vm._v("Echéance/Durée tirage")]), _vm._v(" "), _c("th", [_vm._v("Taux")]), _vm._v(" "), _c("th"), _vm._v(" "), _c("th", [_vm._v("Suretés")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "text-start",
    attrs: {
      colspan: "3"
    }
  }, [_c("label", [_c("b", [_vm._v("S/Total par caisse")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", {
    staticClass: "text-center",
    staticStyle: {
      "vertical-align": "center"
    }
  }, [_c("th", [_vm._v("Filiale")]), _vm._v(" "), _c("th", [_vm._v("Lignes")]), _vm._v(" "), _c("th", [_vm._v("Statut")]), _vm._v(" "), _c("th", [_vm._v("Montant (Demande Client)")]), _vm._v(" "), _c("th", [_vm._v("Proposition DCE (autorisation)")]), _vm._v(" "), _c("th", [_c("span", [_vm._v("Encours avant")])]), _vm._v(" "), _c("th", [_vm._v("Encours après")]), _vm._v(" "), _c("th", [_vm._v("Durée (mois)")]), _vm._v(" "), _c("th", [_vm._v("Echeance/Durée tirage")]), _vm._v(" "), _c("th", [_vm._v("Taux")]), _vm._v(" "), _c("th"), _vm._v(" "), _c("th", [_vm._v("Suretés")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "text-start",
    attrs: {
      colspan: "3"
    }
  }, [_c("label", [_c("b", [_vm._v("S/Total par signature")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "text-start",
    attrs: {
      colspan: "3"
    }
  }, [_c("label", [_c("b", [_vm._v("Total")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/demande_depassement/DA-DE1.vue?vue&type=style&index=0&id=3f34228a&lang=css&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/demande_depassement/DA-DE1.vue?vue&type=style&index=0&id=3f34228a&lang=css&scoped=true ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "\n*[data-v-3f34228a] {\r\n    font-family: \"Google sans\";\n}\nth[data-v-3f34228a] {\r\n    font-size: 12px;\n}\nlabel[data-v-3f34228a] {\r\n    height: 10px;\r\n    font-size: 13px;\n}\ninput[data-v-3f34228a],\r\nselect[data-v-3f34228a],\r\ntextarea[data-v-3f34228a] {\r\n    height: 35px;\r\n    border-color: #34495e;\r\n    color: #57606f;\r\n    font-size: 13px;\r\n    font-weight: bold;\r\n    min-width: 150px;\n}\n.card-width-height[data-v-3f34228a] {\r\n    width: 100%;\r\n    height: 100%;\n}\n.head[data-v-3f34228a] {\r\n    color: #f1f2f6;\r\n    font-size: 22px;\n}\n.hdc[data-v-3f34228a] {\r\n    background-color: #57606f;\n}\r\n\r\n/* Ajouter note */\n.badge-sm[data-v-3f34228a] {\r\n    display: inline-block;\r\n    width: 15px;\r\n    height: 15px;\r\n    background: rgba(255, 0, 0, 0.882);\r\n    color: white;\r\n    font-size: 12px;\r\n    font-weight: 500;\r\n    border-radius: 100%;\r\n    position: absolute;\r\n    top: -20%;\r\n    left: 55%;\r\n    text-align: center;\n}\n.relook-header[data-v-3f34228a] {\r\n    color: #000;\r\n    background-color: #f4f3f3;\r\n    padding: 5px;\r\n    border-bottom: 1px solid #b6b8bb;\n}\n.checked[data-v-3f34228a] {\r\n    width: 19px;\r\n    height: 19px;\n}\n.relook-header-sb[data-v-3f34228a] {\r\n    color: #fff;\r\n    background-color: #736372;\r\n    padding: 5px;\r\n    border-bottom: 1px solid #b6b8bb;\n}\n.image1[data-v-3f34228a] {\r\n    background: url(\"/images/capture/exemples/description_et_justification_des_lignes.png\")\r\n        no-repeat;\r\n    background-position: center;\r\n    background-size: contain;\r\n\r\n    width: 500px;\r\n    height: 300px;\n}\n.bg-relooker[data-v-3f34228a] {\r\n    background-color: #2c3e50;\r\n    color: white;\n}\r\n\r\n/* CSS Pour rendre sticky a ne pas supprimer  */\n.table-container[data-v-3f34228a] {\r\n    overflow-x: auto;\r\n    width: 100%;\n}\ntable[data-v-3f34228a] {\r\n    width: 100%;\r\n    border-collapse: collapse;\n}\r\n\r\n/* th, td {\r\n    padding: 8px;\r\n    border: 1px solid #ccc;\r\n    text-align: left;\r\n    width: 150px;\r\n} */\n#col-sticky-1[data-v-3f34228a], .col-sticky-1[data-v-3f34228a] {\r\n    position: sticky;\r\n    left: 0;\r\n    background-color: #f0f0f0;\r\n    z-index: 2;\n}\n#col-sticky-2[data-v-3f34228a], .col-sticky-2[data-v-3f34228a] {\r\n    position: sticky;\r\n    \r\n    background-color: #f0f0f0;\r\n    z-index: 1;\n}\r\n\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/demande_depassement/DA-DE1.vue?vue&type=style&index=0&id=3f34228a&lang=css&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/demande_depassement/DA-DE1.vue?vue&type=style&index=0&id=3f34228a&lang=css&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DA_DE1_vue_vue_type_style_index_0_id_3f34228a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DA-DE1.vue?vue&type=style&index=0&id=3f34228a&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/demande_depassement/DA-DE1.vue?vue&type=style&index=0&id=3f34228a&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DA_DE1_vue_vue_type_style_index_0_id_3f34228a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DA_DE1_vue_vue_type_style_index_0_id_3f34228a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/forms/afg/demande_depassement/DA-DE1.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/components/forms/afg/demande_depassement/DA-DE1.vue ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DA_DE1_vue_vue_type_template_id_3f34228a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DA-DE1.vue?vue&type=template&id=3f34228a&scoped=true */ "./resources/js/components/forms/afg/demande_depassement/DA-DE1.vue?vue&type=template&id=3f34228a&scoped=true");
/* harmony import */ var _DA_DE1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DA-DE1.vue?vue&type=script&lang=js */ "./resources/js/components/forms/afg/demande_depassement/DA-DE1.vue?vue&type=script&lang=js");
/* harmony import */ var _DA_DE1_vue_vue_type_style_index_0_id_3f34228a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DA-DE1.vue?vue&type=style&index=0&id=3f34228a&lang=css&scoped=true */ "./resources/js/components/forms/afg/demande_depassement/DA-DE1.vue?vue&type=style&index=0&id=3f34228a&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DA_DE1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _DA_DE1_vue_vue_type_template_id_3f34228a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _DA_DE1_vue_vue_type_template_id_3f34228a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "3f34228a",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/forms/afg/demande_depassement/DA-DE1.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/forms/afg/demande_depassement/DA-DE1.vue?vue&type=script&lang=js":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/demande_depassement/DA-DE1.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DA_DE1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DA-DE1.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/demande_depassement/DA-DE1.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DA_DE1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/forms/afg/demande_depassement/DA-DE1.vue?vue&type=style&index=0&id=3f34228a&lang=css&scoped=true":
/*!**********************************************************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/demande_depassement/DA-DE1.vue?vue&type=style&index=0&id=3f34228a&lang=css&scoped=true ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DA_DE1_vue_vue_type_style_index_0_id_3f34228a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DA-DE1.vue?vue&type=style&index=0&id=3f34228a&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/demande_depassement/DA-DE1.vue?vue&type=style&index=0&id=3f34228a&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/forms/afg/demande_depassement/DA-DE1.vue?vue&type=template&id=3f34228a&scoped=true":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/demande_depassement/DA-DE1.vue?vue&type=template&id=3f34228a&scoped=true ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DA_DE1_vue_vue_type_template_id_3f34228a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DA_DE1_vue_vue_type_template_id_3f34228a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DA_DE1_vue_vue_type_template_id_3f34228a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DA-DE1.vue?vue&type=template&id=3f34228a&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/demande_depassement/DA-DE1.vue?vue&type=template&id=3f34228a&scoped=true");


/***/ })

}]);