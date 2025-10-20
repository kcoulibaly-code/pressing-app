"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_forms_afg_memorandum_F6_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/memorandum/F6.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/memorandum/F6.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/ContextMenu */ "./resources/js/components/shared/ContextMenu.vue");
/* harmony import */ var _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/ContextMenuItem */ "./resources/js/components/shared/ContextMenuItem.vue");
/* harmony import */ var _services_ebapis_service_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/ebapis.service.js */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vueform/multiselect/dist/multiselect.vue2 */ "./node_modules/@vueform/multiselect/dist/multiselect.vue2.js");
/* harmony import */ var _shared_widgets_subtable_ST1AFG_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/widgets/subtable/ST1AFG.vue */ "./resources/js/components/shared/widgets/subtable/ST1AFG.vue");
/* harmony import */ var _services_afg_f8_manager_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/afg/f8-manager.js */ "./resources/js/services/afg/f8-manager.js");
/* harmony import */ var _services_afg_f8_constants_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/afg/f8-constants.js */ "./resources/js/services/afg/f8-constants.js");
/* harmony import */ var _johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @johmun/vue-tags-input */ "./node_modules/@johmun/vue-tags-input/dist/vue-tags-input.js");
/* harmony import */ var _johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_7__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _methods;
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }










window.$ = window.jQuery = __webpack_require__(/*! jquery/dist/jquery */ "./node_modules/jquery/dist/jquery.js");
var NOW = new Date();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Description_et_justification_des_lignes",
  display: "Description et justification des lignes",
  components: {
    MoreVerticalIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__.MoreVerticalIcon,
    ChevronUpIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__.ChevronUpIcon,
    ChevronDownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__.ChevronDownIcon,
    ContextMenu: _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_0__["default"],
    ContextMenuItem: _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_1__["default"],
    AirplayIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__.AirplayIcon,
    BookOpenIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__.BookOpenIcon,
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__.PlusIcon,
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__.TrashIcon,
    Multiselect: _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_3__["default"],
    VueTagsInput: (_johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_7___default()),
    ST1: _shared_widgets_subtable_ST1AFG_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
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
  computed: {
    toutes_anciennes_lignes: function toutes_anciennes_lignes() {
      return [].concat(_toConsumableArray(this.f8Constants.ligneAutoComplete('tous_les_lignes')), _toConsumableArray(this.f8Constants.ligneAutoComplete('lignes_engagements_signatures')));
    },
    toutes_nouvelles_lignes: function toutes_nouvelles_lignes() {
      return [].concat(_toConsumableArray(this.f8Constants.ligneAutoComplete('tous_les_lignes_filtres')), _toConsumableArray(this.f8Constants.ligneAutoComplete('lignes_engagements_signatures')));
    }
  },
  data: function data() {
    var vm = this;
    return {
      f8Manager: _services_afg_f8_manager_js__WEBPACK_IMPORTED_MODULE_5__["default"],
      seen: true,
      seen1: true,
      seen2: true,
      seen3: true,
      seen5: true,
      seen6: true,
      seen4: true,
      ebapisHost: _services_ebapis_service_js__WEBPACK_IMPORTED_MODULE_2__["default"].host,
      authcheck: false,
      authcheckUsr: null,
      authcheckStatus: null,
      f8Constants: _services_afg_f8_constants_js__WEBPACK_IMPORTED_MODULE_6__["default"],
      meta_parseable: {
        cred_pub_key: this.meta_data["cred_pub_key"],
        tb_name: this.tb_name
      },
      dossier_credit: {},
      formDataToBeWatched: {
        objet_demande: "",
        structuration_justificatif_demande: "",
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
      aDesLigneExistanteCaisse: false,
      aDesLigneExistanteSignature: false,
      revenus_attendus: [],
      totalRevenus: 0,
      filiale_afg: ["AFGB CI", "AFGB GA", "AFGB ML", "AFGB MG", "AFGB CM", "AFGB KM", "AFGB BJ"]
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
    var createdKey = this.determineKey();
    this.defaultRetract(false, (_this$meta_data$dossi = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi === void 0 ? void 0 : _this$meta_data$dossi.applied_templ_id);
    if (lentb.length == 0 || !this.meta_data["dossier_credit"][createdKey]) {
      // console.warn("Pas de tableau ou pas de cred_pub_tb");
      this.f8Manager.setDefaultLines('tb8');
      return;
    }
    var credit_folder_table = _objectSpread({}, this.meta_data["dossier_credit"][createdKey]);
    // console.log('dossier credit', credit_folder_table);
    this.f8Manager.setData(credit_folder_table, 'tb8');
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
    // console.log('this.f8Manager.data', this.f8Manager.data)
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
  }), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_methods, "getMinWidth", function getMinWidth(keyName) {
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
  }), "updateFilialeDefaults", function updateFilialeDefaults() {
    var _this$authcheckUsr,
      _this = this;
    if ((_this$authcheckUsr = this.authcheckUsr) !== null && _this$authcheckUsr !== void 0 && _this$authcheckUsr.filiale) {
      this.f8Manager.data.nouvelles_lignes_caisse.forEach(function (line) {
        if (["", null, undefined].includes(line.filiale)) {
          line.filiale = _this.authcheckUsr.filiale;
        }
      });
      this.f8Manager.data.nouvelles_lignes_signature.forEach(function (line) {
        if (["", null, undefined].includes(line.filiale)) {
          line.filiale = _this.authcheckUsr.filiale;
        }
      });
      this.f8Manager.data.lignes_existantes_engagements_signatures.forEach(function (line) {
        if (["", null, undefined].includes(line.filiale)) {
          line.filiale = _this.authcheckUsr.filiale;
        }
      });
      this.f8Manager.data.lignes_existantes.forEach(function (line) {
        if (["", null, undefined].includes(line.filiale)) {
          line.filiale = _this.authcheckUsr.filiale;
        }
      });
    }
  }), "retract3", function retract3() {
    this.seen3 = !this.seen3;
  }), "retract4", function retract4() {
    // this.seen4 = !this.seen4;
  }), "retract5", function retract5() {
    this.seen5 = !this.seen5;
  }), "updateRevenusAttendu", function updateRevenusAttendu(item, index) {
    this.$set(item, 'update', true);
    var updatedItem = _objectSpread({}, item);
    this.$set(this.revenus_attendus, index, updatedItem);
    this.$set(this.f8Manager.data.revenus_attendus, index, updatedItem);
    this.totalRevenus = this.revenus_attendus.reduce(function (total, item) {
      var revenusAttendu = typeof item.revenus_attendu === 'string' ? Number(item.revenus_attendu.replace(/\s/g, '')) || 0 : Number(item.revenus_attendu) || 0;
      return total + revenusAttendu;
    }, 0);
  }), "updateRevenusAttendus", function updateRevenusAttendus() {
    var _this$f8Manager$data$, _this$f8Manager$data$2, _this$f8Manager$data$3;
    var existingWithUpdate = ((_this$f8Manager$data$ = this.f8Manager.data.revenus_attendus) !== null && _this$f8Manager$data$ !== void 0 ? _this$f8Manager$data$ : []).filter(function (item) {
      return item.update;
    });
    var newData = [].concat(_toConsumableArray((_this$f8Manager$data$2 = this.f8Manager.data.nouvelles_lignes_signature) !== null && _this$f8Manager$data$2 !== void 0 ? _this$f8Manager$data$2 : []), _toConsumableArray((_this$f8Manager$data$3 = this.f8Manager.data.nouvelles_lignes_caisse) !== null && _this$f8Manager$data$3 !== void 0 ? _this$f8Manager$data$3 : [])).filter(function (item) {
      return item.ligne && item.proposition && item.proposition.trim() !== '';
    });
    var uniqueNewData = newData.filter(function (newItem) {
      return !existingWithUpdate.some(function (existing) {
        return existing.ligne === newItem.ligne;
      });
    });
    this.revenus_attendus = [].concat(_toConsumableArray(existingWithUpdate), _toConsumableArray(uniqueNewData.map(function (item) {
      return _objectSpread(_objectSpread({}, item), {}, {
        ligne: item.ligne || '',
        proposition: item.proposition || '',
        taux: Number(item.taux) || 0,
        revenus_attendu: 0,
        hypothese: ""
      });
    })));
    this.totalRevenus = this.revenus_attendus.reduce(function (total, item) {
      if (item.update === true) {
        var revenusAttendu = typeof item.revenus_attendu === 'string' ? Number(item.revenus_attendu.replace(/\s/g, '')) || 0 : Number(item.revenus_attendu) || 0;
        return total + revenusAttendu;
      }
      var proposition = Number(item.proposition.replace(/\s/g, '')) || 0;
      var taux = Number(item.taux) || 0;
      return total + proposition * taux / 100;
    }, 0);
    this.f8Manager.data.revenus_attendus = _toConsumableArray(this.revenus_attendus);
  }), "calculateRevenusAttendu", function calculateRevenusAttendu(item) {
    var proposition = Number(item.proposition.replace(/\s/g, '')) || 0;
    var taux = Number(item.taux) || 0;
    return proposition * taux / 100;
  }), "formatNumber", function formatNumber(value) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  })),
  watch: {
    "f8Manager.data": {
      handler: function handler(newVal, oldVal) {
        this.autosaving(newVal, oldVal);
        this.updateFilialeDefaults();
        var ligne_caisses = newVal.nouvelles_lignes_caisse.filter(function (el) {
          return !['', null, undefined].includes(el === null || el === void 0 ? void 0 : el.from) && !['', null, undefined].includes(el === null || el === void 0 ? void 0 : el.ligne) || ['', null, undefined].includes(el === null || el === void 0 ? void 0 : el.from);
        });
        var ligne_signatures = newVal.nouvelles_lignes_signature.filter(function (el) {
          return !['', null, undefined].includes(el === null || el === void 0 ? void 0 : el.from) && !['', null, undefined].includes(el === null || el === void 0 ? void 0 : el.ligne) || ['', null, undefined].includes(el === null || el === void 0 ? void 0 : el.from);
        });
        this.aDesLigneExistanteCaisse = ligne_caisses.length == 0;
        this.aDesLigneExistanteSignature = ligne_signatures.length == 0;
        EventBus.$emit("refresh-dajc", this.f8Manager.data);
      },
      deep: true,
      immediate: false
    },
    authcheckUsr: {
      handler: function handler(newVal) {
        if (newVal !== null && newVal !== void 0 && newVal.filiale) {
          this.updateFilialeDefaults();
        }
      },
      deep: true,
      immediate: false
    },
    'f8Manager.data.nouvelles_lignes_signature': {
      handler: function handler() {
        this.updateRevenusAttendus();
      },
      deep: true
    },
    'f8Manager.data.nouvelles_lignes_caisse': {
      handler: function handler() {
        this.updateRevenusAttendus();
      },
      deep: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/memorandum/F6.vue?vue&type=template&id=045d7040&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/memorandum/F6.vue?vue&type=template&id=045d7040&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "row bg-light position-relative",
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
    staticClass: "card card-width-height"
  }, [_c("br"), _vm._v(" "), _c("div", {
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
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Description et justification des lignes\n                        ")]), _vm._v(" "), _c("div", {
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
    staticClass: "icofont icofont-comment text-white px-2",
    staticStyle: {
      "font-size": "12px"
    },
    attrs: {
      role: "button"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "badge-sm"
  }, [_c("span", [_vm._v("\n                                            " + _vm._s(_vm.f8Manager.data.notes.length) + "\n                                        ")])])])]) : _vm._e(), _vm._v(" "), _c("book-open-icon", {
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
        return _vm.$modal.show("instruction_garantie");
      }
    }
  }), _vm._v(" "), _c("airplay-icon", {
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
  })], 1)])])]), _vm._v(" "), _vm.seen5 === true ? _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        return _vm.retract5();
      }
    }
  }, [_c("h6", {
    "class": " subdiv" + this.tb_name,
    attrs: {
      id: "fournisseurs"
    }
  }, [_vm._v("\n                        STRUCTURATION ET JUSTIFICATIF DE LA DEMANDE\n                        "), _c("chevron-up-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "p-2"
  }, [_c("div", {}, [_vm._m(0), _vm._v(" "), _c("vue-editor", {
    attrs: {
      id: "objet_demande"
    },
    on: {
      "update-value": function updateValue($event) {
        _vm.f8Manager[$event[0]] = $event[1];
      }
    },
    model: {
      value: _vm.f8Manager.data.structuration_justificatif_demande,
      callback: function callback($$v) {
        _vm.$set(_vm.f8Manager.data, "structuration_justificatif_demande", $$v);
      },
      expression: "f8Manager.data.structuration_justificatif_demande\n                            "
    }
  })], 1)])]) : _c("div", [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        return _vm.retract5();
      }
    }
  }, [_c("h6", {
    attrs: {
      id: "fournisseurs"
    }
  }, [_vm._v("\n                            STRUCTURATION ET JUSTIFICATIF DE LA DEMANDE\n                            "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
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
  }, [_vm._v("\n                        LIGNES EXISTANTES\n                        "), _c("chevron-up-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)]), _vm._v(" "), _vm._m(1), _vm._v(" "), _c("br"), _vm._v(" "), _c("b", [_vm._v("Engagement par caisse")]), _vm._v(" "), _c("div", {
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
  }, [_c("th", [_vm._v("Filiale")]), _vm._v(" "), _c("th", [_vm._v("Lignes")]), _vm._v(" "), _c("th", [_vm._v("Autorisations")]), _vm._v(" "), _c("th", [_c("span", [_vm._v("Encours au")]), _vm._v(" "), _c("date-input", {
    staticStyle: {
      "min-width": "230px"
    },
    attrs: {
      value: _vm.f8Manager.data.encours_au,
      id: "encours_au"
    },
    on: {
      input: function input($event) {
        return _vm.formDataVars("encours_au", $event);
      }
    }
  })], 1), _vm._v(" "), _c("th", [_vm._v("Taux (%)")]), _vm._v(" "), _c("th", [_vm._v("Durée (mois)")]), _vm._v(" "), _c("th", [_vm._v("Echéance")]), _vm._v(" "), _c("th", [_vm._v("Durée tirage (mois)")]), _vm._v(" "), _c("th", [_vm._v("Suretés")]), _vm._v(" "), _c("th"), _vm._v(" "), _c("th", [_c("button", {
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
  })], 1)])])]), _vm._v(" "), _c("tbody", [_vm._l(_vm.f8Manager.data.lignes_existantes, function (ligne_existante, idx) {
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
        "autocomplete-items": _vm.toutes_anciennes_lignes.filter(function (el) {
          var _el$text;
          return (_el$text = el.text) === null || _el$text === void 0 || (_el$text = _el$text.toLowerCase()) === null || _el$text === void 0 ? void 0 : _el$text.includes(ligne_existante.tag);
        }),
        tags: ligne_existante.tags,
        placeholder: "Selectionner les lignes"
      },
      on: {
        "tags-changed": function tagsChanged($event) {
          return _vm.f8Manager.handleTag($event, ["lignes_existantes", idx], _vm.toutes_anciennes_lignes, ligne_existante, "nouvelles_lignes_caisse");
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
    })], 1), _vm._v(" "), _c("td", [_c("input-group", {
      staticStyle: {
        "min-width": "110px"
      },
      scopedSlots: _vm._u([{
        key: "input",
        fn: function fn() {
          return [_c("currency-input", {
            attrs: {
              "default-typing": false,
              "float": "",
              percentage: ""
            },
            on: {
              change: function change($event) {
                return _vm.f8Manager.handleInput(ligne_existante, "nouvelles_lignes_caisse");
              }
            },
            model: {
              value: ligne_existante.taux,
              callback: function callback($$v) {
                _vm.$set(ligne_existante, "taux", $$v);
              },
              expression: "ligne_existante.taux"
            }
          })];
        },
        proxy: true
      }, {
        key: "right",
        fn: function fn() {
          return [_vm._v("%")];
        },
        proxy: true
      }], null, true)
    })], 1), _vm._v(" "), _c("td", [_c("input", {
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
    })], 1)]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: ligne_existante.duree_tirage,
        expression: "ligne_existante.duree_tirage"
      }],
      staticClass: "form-control",
      staticStyle: {
        width: "80px"
      },
      attrs: {
        type: "number"
      },
      domProps: {
        value: ligne_existante.duree_tirage
      },
      on: {
        change: function change($event) {
          return _vm.f8Manager.handleInput(ligne_existante, "nouvelles_lignes_caisse");
        },
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(ligne_existante, "duree_tirage", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("button", {
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
        "background-color": "#e74c3c",
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
      staticClass: "icofont-brush"
    })])]), _vm._v(" "), _c("td", [idx != 0 ? _c("button", {
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
    })], 1) : _vm._e()])]);
  }), _vm._v(" "), _c("tr", [_vm._m(2), _vm._v(" "), _c("td", [_c("currency-input2", {
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
  })], 1), _vm._v(" "), _c("td", {
    attrs: {
      colspan: "6"
    }
  }), _vm._v(" "), _c("td", {
    attrs: {
      colspan: "2"
    }
  })])], 2)])]), _vm._v(" "), _c("br"), _vm._v(" "), _c("b", [_vm._v("Engagement par signature")]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-borderless"
  }, [_c("thead", [_c("tr", {
    staticClass: "text-center",
    staticStyle: {
      "vertical-align": "center"
    }
  }, [_c("th", [_vm._v("Filiale")]), _vm._v(" "), _c("th", [_vm._v("Lignes")]), _vm._v(" "), _c("th", [_vm._v("Autorisations")]), _vm._v(" "), _c("th", [_c("span", [_vm._v("Encours au")]), _vm._v(" "), _c("date-input", {
    staticStyle: {
      "min-width": "230px"
    },
    attrs: {
      value: _vm.f8Manager.data.encours_au,
      id: "encours_au"
    },
    on: {
      input: function input($event) {
        return _vm.formDataVars("encours_au", $event);
      }
    }
  })], 1), _vm._v(" "), _c("th", [_vm._v("Taux (%)")]), _vm._v(" "), _c("th", [_vm._v("Durée (mois)")]), _vm._v(" "), _c("th", [_vm._v("Echéance")]), _vm._v(" "), _c("th", [_vm._v("Durée tirage (mois)")]), _vm._v(" "), _c("th", [_vm._v("Suretés")]), _vm._v(" "), _c("th"), _vm._v(" "), _c("th", [_c("button", {
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
  })], 1)])])]), _vm._v(" "), _c("tbody", [_vm._l(_vm.f8Manager.data.lignes_existantes_engagements_signatures, function (eng_sign, i) {
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
        "autocomplete-items": _vm.toutes_anciennes_lignes.filter(function (el) {
          var _el$text2;
          return (_el$text2 = el.text) === null || _el$text2 === void 0 || (_el$text2 = _el$text2.toLowerCase()) === null || _el$text2 === void 0 ? void 0 : _el$text2.includes(eng_sign.tag);
        }),
        tags: eng_sign.tags,
        placeholder: "Selectionner les lignes"
      },
      on: {
        "tags-changed": function tagsChanged($event) {
          return _vm.f8Manager.handleTag($event, ["lignes_existantes_engagements_signatures", i], _vm.toutes_anciennes_lignes, eng_sign, "nouvelles_lignes_signature");
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
    })], 1), _vm._v(" "), _c("td", [_c("input-group", {
      staticStyle: {
        "min-width": "110px"
      },
      scopedSlots: _vm._u([{
        key: "input",
        fn: function fn() {
          return [_c("currency-input", {
            attrs: {
              "default-typing": false,
              "float": "",
              percentage: ""
            },
            on: {
              change: function change($event) {
                return _vm.f8Manager.handleInput(eng_sign, "nouvelles_lignes_signature");
              }
            },
            model: {
              value: eng_sign.taux,
              callback: function callback($$v) {
                _vm.$set(eng_sign, "taux", $$v);
              },
              expression: "eng_sign.taux"
            }
          })];
        },
        proxy: true
      }, {
        key: "right",
        fn: function fn() {
          return [_vm._v("%")];
        },
        proxy: true
      }], null, true)
    })], 1), _vm._v(" "), _c("td", [_c("input", {
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
    })], 1)]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: eng_sign.duree_tirage,
        expression: "eng_sign.duree_tirage"
      }],
      staticClass: "form-control",
      staticStyle: {
        width: "80px"
      },
      attrs: {
        type: "number"
      },
      domProps: {
        value: eng_sign.duree_tirage
      },
      on: {
        change: function change($event) {
          return _vm.f8Manager.handleInput(eng_sign, "nouvelles_lignes_signature");
        },
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(eng_sign, "duree_tirage", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("button", {
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
        "background-color": "#e74c3c",
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
      staticClass: "icofont-brush"
    })])]), _vm._v(" "), _c("td", [i != 0 ? _c("button", {
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
    })], 1) : _vm._e()])]);
  }), _vm._v(" "), _c("tr", [_vm._m(3), _vm._v(" "), _c("td", [_c("currency-input2", {
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
  })], 1), _vm._v(" "), _c("td", {
    attrs: {
      colspan: "5"
    }
  }), _vm._v(" "), _c("td", {
    attrs: {
      colspan: "2"
    }
  })]), _vm._v(" "), _c("tr", [_vm._m(4), _vm._v(" "), _c("td", [_c("currency-input2", {
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
      color: "#fff"
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
  })], 1)])], 2)])])]), _vm._v(" "), _c("div", {
    staticClass: "card-body px-0"
  }, [_c("label", {
    staticClass: "font-weight-bold"
  }, [_vm._v("Commentaire sur les lignes existantes")]), _vm._v(" "), _c("vue-editor", {
    attrs: {
      maximum: 1000,
      id: "commentaire_lignes_existantes"
    },
    on: {
      "update-value": function updateValue($event) {
        _vm.f8Manager.data[$event[0]] = $event[1];
      }
    },
    model: {
      value: _vm.f8Manager.data.commentaire_lignes_existantes,
      callback: function callback($$v) {
        _vm.$set(_vm.f8Manager.data, "commentaire_lignes_existantes", $$v);
      },
      expression: "f8Manager.data.commentaire_lignes_existantes"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "card-body px-0"
  }, [_vm._m(5), _vm._v(" "), _c("vue-editor", {
    attrs: {
      maximum: 1000,
      id: "commentaire_lignes_existantes_garanties_generales_detenues"
    },
    on: {
      "update-value": function updateValue($event) {
        _vm.f8Manager.data[$event[0]] = $event[1];
      }
    },
    model: {
      value: _vm.f8Manager.data.commentaire_lignes_existantes_garanties_generales_detenues,
      callback: function callback($$v) {
        _vm.$set(_vm.f8Manager.data, "commentaire_lignes_existantes_garanties_generales_detenues", $$v);
      },
      expression: "f8Manager.data.commentaire_lignes_existantes_garanties_generales_detenues"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "card-body px-0"
  }, [_vm._m(6), _vm._v(" "), _c("vue-editor", {
    attrs: {
      maximum: 1000,
      id: "commentaire_lignes_existantes_garanties_specifiques_detenues"
    },
    on: {
      "update-value": function updateValue($event) {
        _vm.f8Manager.data[$event[0]] = $event[1];
      }
    },
    model: {
      value: _vm.f8Manager.data.commentaire_lignes_existantes_garanties_specifiques_detenues,
      callback: function callback($$v) {
        _vm.$set(_vm.f8Manager.data, "commentaire_lignes_existantes_garanties_specifiques_detenues", $$v);
      },
      expression: "f8Manager.data.commentaire_lignes_existantes_garanties_specifiques_detenues"
    }
  })], 1)]) : _c("div", {
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
  }, [_vm._v("\n                        LIGNES EXISTANTES\n                        "), _c("chevron-down-icon", {
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
  }, [_vm._v("\n                        CONCOURS SOLLICITÉS\n                        "), _c("chevron-up-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)]), _vm._v(" "), _vm._m(7), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("br"), _vm._v(" "), _c("b", [_vm._v("Engagement par caisse")]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-borderless"
  }, [_c("thead", [_c("tr", {
    staticClass: "text-center",
    staticStyle: {
      "vertical-align": "center"
    }
  }, [_c("th", [_vm._v("Filiale")]), _vm._v(" "), _c("th", [_vm._v("Lignes")]), _vm._v(" "), _c("th", [_vm._v("Statut")]), _vm._v(" "), _c("th", [_vm._v("Montant (demandé)")]), _vm._v(" "), _c("th", [_vm._v("Proposition DCE (autorisation)")]), _vm._v(" "), _c("th", [_c("span", [_vm._v("Encours au")]), _vm._v(" "), _c("date-input", {
    staticStyle: {
      "min-width": "230px"
    },
    attrs: {
      value: _vm.f8Manager.data.encours_au,
      id: "encours_au"
    },
    on: {
      input: function input($event) {
        return _vm.formDataVars("encours_au", $event);
      }
    }
  })], 1), _vm._v(" "), _c("th", [_vm._v("Durée (mois)")]), _vm._v(" "), _c("th", [_vm._v("Echéance")]), _vm._v(" "), _c("th", [_vm._v("Durée tirage (mois)")]), _vm._v(" "), _c("th", [_vm._v("Taux (%)")]), _vm._v(" "), _c("th"), _vm._v(" "), _c("th", [_vm._v("Suretés")]), _vm._v(" "), _c("th"), _vm._v(" "), _c("th", [_c("button", {
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
  })], 1)])])]), _vm._v(" "), _c("tbody", [_vm._l(_vm.f8Manager.data.nouvelles_lignes_caisse, function (nv_ligne_caisse, idx_) {
    return !["", null, undefined].includes(nv_ligne_caisse === null || nv_ligne_caisse === void 0 ? void 0 : nv_ligne_caisse.from) && !["", null, undefined].includes(nv_ligne_caisse === null || nv_ligne_caisse === void 0 ? void 0 : nv_ligne_caisse.ligne) || ["", null, undefined].includes(nv_ligne_caisse === null || nv_ligne_caisse === void 0 ? void 0 : nv_ligne_caisse.from) ? _c("tr", {
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
    })], 2)]), _vm._v(" "), _vm.isFirstOccurrence("nouvelles_lignes_caisse", idx_) ? _c("td", {
      attrs: {
        rowspan: _vm.getRowspan("nouvelles_lignes_caisse", nv_ligne_caisse.ligne_mixe_id)
      }
    }, [nv_ligne_caisse !== null && nv_ligne_caisse !== void 0 && nv_ligne_caisse.from ? [nv_ligne_caisse.ligne_mixte == "Mixte" ? _c("div", {
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
      "class": {
        "already-exist": nv_ligne_caisse === null || nv_ligne_caisse === void 0 ? void 0 : nv_ligne_caisse.from
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
        "autocomplete-items": _vm.toutes_nouvelles_lignes.filter(function (el) {
          var _el$text3;
          return (_el$text3 = el.text) === null || _el$text3 === void 0 || (_el$text3 = _el$text3.toLowerCase()) === null || _el$text3 === void 0 ? void 0 : _el$text3.includes(nv_ligne_caisse.tag);
        }),
        tags: nv_ligne_caisse.tags,
        placeholder: "Selectionner les lignes"
      },
      on: {
        "tags-changed": function tagsChanged($event) {
          return _vm.f8Manager.handleTag($event, ["nouvelles_lignes_caisse", idx_], _vm.toutes_nouvelles_lignes, null, null);
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
    }, [_vm._v("Mixte")])], 2)]], 2) : _vm._e(), _vm._v(" "), _c("td", [_c("select", {
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
    }), _vm._v(" "), nv_ligne_caisse.ligne_mixte_libelle ? _c("label", {
      staticClass: "text-center",
      staticStyle: {
        "font-size": "12px !important"
      },
      attrs: {
        "for": "floatingTextarea"
      }
    }, [_vm._v(_vm._s(nv_ligne_caisse.ligne_mixte_libelle))]) : _vm._e()], 1), _vm._v(" "), _c("td", [_c("currency-input2", {
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
      attrs: {
        "default-typing": false
      },
      on: {
        change: function change($event) {
          return _vm.f8Manager.computedTypeStatus("lignes_existantes", nv_ligne_caisse, idx_, "nouvelles_lignes_caisse");
        }
      },
      model: {
        value: nv_ligne_caisse.encours,
        callback: function callback($$v) {
          _vm.$set(nv_ligne_caisse, "encours", $$v);
        },
        expression: "nv_ligne_caisse.encours"
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
        value: nv_ligne_caisse.duree_tirage,
        expression: "nv_ligne_caisse.duree_tirage"
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
        value: nv_ligne_caisse.duree_tirage
      },
      on: {
        change: function change($event) {
          return _vm.f8Manager.computedTypeStatus("lignes_existantes", nv_ligne_caisse, idx_, "nouvelles_lignes_caisse");
        },
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(nv_ligne_caisse, "duree_tirage", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("input-group", {
      staticStyle: {
        "min-width": "110px"
      },
      scopedSlots: _vm._u([{
        key: "input",
        fn: function fn() {
          return [_c("currency-input", {
            "class": {
              "already-exist": nv_ligne_caisse === null || nv_ligne_caisse === void 0 ? void 0 : nv_ligne_caisse.from
            },
            attrs: {
              "default-typing": false,
              "float": "",
              percentage: "",
              id: "taux"
            },
            model: {
              value: nv_ligne_caisse.taux,
              callback: function callback($$v) {
                _vm.$set(nv_ligne_caisse, "taux", $$v);
              },
              expression: "nv_ligne_caisse.taux"
            }
          })];
        },
        proxy: true
      }, {
        key: "right",
        fn: function fn() {
          return [_vm._v("%")];
        },
        proxy: true
      }], null, true)
    })], 1), _vm._v(" "), _c("td", [_c("input", {
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
      staticClass: "icofont-list",
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
        "background-color": "#e74c3c",
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
      staticClass: "icofont-brush"
    })])]), _vm._v(" "), _c("td", [idx_ == 0 ? void 0 : [["", null, undefined].includes(nv_ligne_caisse.from) ? _c("button", {
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
    })], 1) : _vm._e()]], 2)]) : _vm._e();
  }), _vm._v(" "), _vm.aDesLigneExistanteCaisse ? _c("tr", [_vm._m(8)]) : _vm._e(), _vm._v(" "), _c("tr", [_vm._m(9), _vm._v(" "), _c("td", [_c("currency-input2", {
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
  })], 1), _vm._v(" "), _c("td", {
    attrs: {
      colspan: "9"
    }
  }), _vm._v(" "), _c("td")])], 2)])]), _vm._v(" "), _c("br"), _vm._v(" "), _c("b", [_vm._v("Engagement signature")]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-borderless"
  }, [_c("thead", [_c("tr", {
    staticClass: "text-center",
    staticStyle: {
      "vertical-align": "center"
    }
  }, [_c("th", [_vm._v("Filiale")]), _vm._v(" "), _c("th", [_vm._v("Lignes")]), _vm._v(" "), _c("th", [_vm._v("Statut")]), _vm._v(" "), _c("th", [_vm._v("Montant (demandé)")]), _vm._v(" "), _c("th", [_vm._v("Proposition DCE (autorisation)")]), _vm._v(" "), _c("th", [_c("span", [_vm._v("Encours au")]), _vm._v(" "), _c("date-input", {
    staticStyle: {
      "min-width": "230px"
    },
    attrs: {
      value: _vm.f8Manager.data.encours_au,
      id: "encours_au"
    },
    on: {
      input: function input($event) {
        return _vm.formDataVars("encours_au", $event);
      }
    }
  })], 1), _vm._v(" "), _c("th", [_vm._v("Durée (mois)")]), _vm._v(" "), _c("th", [_vm._v("Echeance")]), _vm._v(" "), _c("th", [_vm._v("Durée tirage (mois)")]), _vm._v(" "), _c("th", [_vm._v("Taux (%)")]), _vm._v(" "), _c("th"), _vm._v(" "), _c("th", [_vm._v("Suretés")]), _vm._v(" "), _c("th"), _vm._v(" "), _c("th", [_c("button", {
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
  })], 1)])])]), _vm._v(" "), _c("tbody", [_vm._l(_vm.f8Manager.data.nouvelles_lignes_signature, function (nv_ligne_sign, i) {
    return !["", null, undefined].includes(nv_ligne_sign === null || nv_ligne_sign === void 0 ? void 0 : nv_ligne_sign.from) && !["", null, undefined].includes(nv_ligne_sign === null || nv_ligne_sign === void 0 ? void 0 : nv_ligne_sign.ligne) || ["", null, undefined].includes(nv_ligne_sign === null || nv_ligne_sign === void 0 ? void 0 : nv_ligne_sign.from) ? _c("tr", {
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
          return _vm.f8Manager.handleInput(nv_ligne_sign, "nouvelles_lignes_signature", ["lignes_existantes", i]);
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
    })], 2)]), _vm._v(" "), _vm.isFirstOccurrence("nouvelles_lignes_signature", i) ? _c("td", {
      attrs: {
        rowspan: _vm.getRowspan("nouvelles_lignes_signature", nv_ligne_sign.ligne_mixe_id)
      }
    }, [nv_ligne_sign !== null && nv_ligne_sign !== void 0 && nv_ligne_sign.from ? [nv_ligne_sign.ligne_mixte == "Mixte" ? _c("div", {
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
    })])]) : _c("div", [nv_ligne_sign !== null && nv_ligne_sign !== void 0 && nv_ligne_sign.from ? _c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: nv_ligne_sign.ligne,
        expression: "nv_ligne_sign.ligne"
      }],
      staticClass: "form-select",
      "class": {
        "already-exist": nv_ligne_sign === null || nv_ligne_sign === void 0 ? void 0 : nv_ligne_sign.from
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
        "autocomplete-items": _vm.toutes_nouvelles_lignes.filter(function (el) {
          var _el$text4;
          return (_el$text4 = el.text) === null || _el$text4 === void 0 || (_el$text4 = _el$text4.toLowerCase()) === null || _el$text4 === void 0 ? void 0 : _el$text4.includes(nv_ligne_sign.tag);
        }),
        tags: nv_ligne_sign.tags,
        placeholder: "Selectionner les lignes"
      },
      on: {
        "tags-changed": function tagsChanged($event) {
          return _vm.f8Manager.handleTag($event, ["nouvelles_lignes_signature", i], _vm.toutes_nouvelles_lignes, null, null);
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
    }, [_vm._v("Mixte")])], 2)]], 2) : _vm._e(), _vm._v(" "), _c("td", [_c("select", {
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
        value: nv_ligne_sign.montant,
        callback: function callback($$v) {
          _vm.$set(nv_ligne_sign, "montant", $$v);
        },
        expression: "nv_ligne_sign.montant"
      }
    }), _vm._v(" "), nv_ligne_sign.ligne_mixte_libelle ? _c("label", {
      staticClass: "text-center",
      staticStyle: {
        "font-size": "12px !important"
      },
      attrs: {
        "for": "floatingTextarea"
      }
    }, [_vm._v(_vm._s(nv_ligne_sign.ligne_mixte_libelle))]) : _vm._e()], 1), _vm._v(" "), _c("td", [_c("currency-input2", {
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
          null;
        }
      },
      model: {
        value: nv_ligne_sign.encours,
        callback: function callback($$v) {
          _vm.$set(nv_ligne_sign, "encours", $$v);
        },
        expression: "nv_ligne_sign.encours"
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
        value: nv_ligne_sign.duree_tirage,
        expression: "nv_ligne_sign.duree_tirage"
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
        value: nv_ligne_sign.duree_tirage
      },
      on: {
        change: function change($event) {
          null;
        },
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(nv_ligne_sign, "duree_tirage", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("input-group", {
      staticStyle: {
        "min-width": "110px"
      },
      scopedSlots: _vm._u([{
        key: "input",
        fn: function fn() {
          return [_c("currency-input", {
            attrs: {
              "default-typing": false,
              "float": "",
              percentage: "",
              id: "taux"
            },
            model: {
              value: nv_ligne_sign.taux,
              callback: function callback($$v) {
                _vm.$set(nv_ligne_sign, "taux", $$v);
              },
              expression: "nv_ligne_sign.taux"
            }
          })];
        },
        proxy: true
      }, {
        key: "right",
        fn: function fn() {
          return [_vm._v("%")];
        },
        proxy: true
      }], null, true)
    })], 1), _vm._v(" "), _c("td", [_c("input", {
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
        title: "Charger les suretés de la ligne existante correspondante"
      },
      on: {
        click: function click($event) {
          return _vm.openModal("hypoModal", nv_ligne_sign, true);
        }
      }
    }, [_c("i", {
      staticClass: "icofont-list",
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
        "background-color": "#e74c3c",
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
      staticClass: "icofont-brush"
    })])]), _vm._v(" "), _c("td", [i == 0 ? void 0 : [["", null, undefined].includes(nv_ligne_sign.from) ? _c("button", {
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
    })], 1) : _vm._e()]], 2)]) : _vm._e();
  }), _vm._v(" "), _vm.aDesLigneExistanteSignature ? _c("tr", [_vm._m(10)]) : _vm._e(), _vm._v(" "), _c("tr", [_vm._m(11), _vm._v(" "), _c("td", [_c("currency-input2", {
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
  })], 1), _vm._v(" "), _c("td", {
    attrs: {
      colspan: "8"
    }
  }), _vm._v(" "), _c("td")]), _vm._v(" "), _c("tr", [_vm._m(12), _vm._v(" "), _c("td", [_c("currency-input2", {
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
  })], 1)])], 2)])])]), _vm._v(" "), _c("div", {
    staticClass: "card-body px-0"
  }, [_c("label", {
    staticClass: "font-weight-bold"
  }, [_vm._v("Commentaire sur les concours sollicités")]), _vm._v(" "), _c("vue-editor", {
    attrs: {
      maximum: 1000,
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
    staticClass: "card-body px-0"
  }, [_vm._m(13), _vm._v(" "), _c("vue-editor", {
    attrs: {
      maximum: 1000,
      id: "commentaire_nouvelles_lignes_garanties_generales_detenues"
    },
    on: {
      "update-value": function updateValue($event) {
        _vm.f8Manager.data[$event[0]] = $event[1];
      }
    },
    model: {
      value: _vm.f8Manager.data.commentaire_nouvelles_lignes_garanties_generales_detenues,
      callback: function callback($$v) {
        _vm.$set(_vm.f8Manager.data, "commentaire_nouvelles_lignes_garanties_generales_detenues", $$v);
      },
      expression: "f8Manager.data.commentaire_nouvelles_lignes_garanties_generales_detenues"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "card-body px-0"
  }, [_vm._m(14), _vm._v(" "), _c("vue-editor", {
    attrs: {
      maximum: 1000,
      id: "commentaire_nouvelles_lignes_garanties_specifiques_detenues"
    },
    on: {
      "update-value": function updateValue($event) {
        _vm.f8Manager.data[$event[0]] = $event[1];
      }
    },
    model: {
      value: _vm.f8Manager.data.commentaire_nouvelles_lignes_garanties_specifiques_detenues,
      callback: function callback($$v) {
        _vm.$set(_vm.f8Manager.data, "commentaire_nouvelles_lignes_garanties_specifiques_detenues", $$v);
      },
      expression: "f8Manager.data.commentaire_nouvelles_lignes_garanties_specifiques_detenues"
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
  })], 1)])]), _vm._v(" "), _vm.seen3 === true ? _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        return _vm.retract3();
      }
    }
  }, [_c("h6", {
    "class": " subdiv" + this.tb_name,
    attrs: {
      id: "fournisseurs"
    }
  }, [_vm._v("\n                        REVENUS ATTENDUS\n                        "), _c("chevron-up-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "p-2",
    attrs: {
      id: "div_autres_surete"
    }
  }, [_c("div", {
    staticClass: "table-responsive mt-1",
    attrs: {
      id: "div_autres_surete"
    }
  }, [_c("table", {
    staticClass: "table table-borderless"
  }, [_vm._m(15), _vm._v(" "), _c("tbody", _vm._l(_vm.revenus_attendus, function (item, index) {
    return _c("tr", {
      key: index
    }, [_c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: item.ligne,
        expression: "item.ligne"
      }],
      staticClass: "form-control",
      staticStyle: {
        width: "60px"
      },
      attrs: {
        type: "text",
        disabled: true
      },
      domProps: {
        value: item.ligne
      },
      on: {
        change: function change($event) {
          return _vm.updateRevenusAttendu(item, index);
        },
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(item, "ligne", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("currency-input2", {
      attrs: {
        disabled: true,
        "default-typing": false
      },
      on: {
        change: function change($event) {
          return _vm.updateRevenusAttendu(item, index);
        }
      },
      model: {
        value: item.proposition,
        callback: function callback($$v) {
          _vm.$set(item, "proposition", $$v);
        },
        expression: "item.proposition"
      }
    })], 1), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: item.taux,
        expression: "item.taux"
      }],
      staticClass: "form-control",
      staticStyle: {
        width: "60px"
      },
      attrs: {
        type: "number",
        disabled: true
      },
      domProps: {
        value: item.taux
      },
      on: {
        change: function change($event) {
          return _vm.updateRevenusAttendu(item, index);
        },
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(item, "taux", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: item.hypothese,
        expression: "item.hypothese"
      }],
      staticClass: "form-control",
      staticStyle: {
        width: "60px"
      },
      domProps: {
        value: item.hypothese
      },
      on: {
        change: function change($event) {
          return _vm.updateRevenusAttendu(item, index);
        },
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(item, "hypothese", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("currency-input2", {
      attrs: {
        "default-typing": false,
        value: _vm.formatNumber((Number(item.proposition.replace(/\s/g, "")) || 0) * (Number(item.taux) || 0) / 100)
      },
      on: {
        change: function change($event) {
          return _vm.updateRevenusAttendu(item, index);
        }
      },
      model: {
        value: item.revenus_attendu,
        callback: function callback($$v) {
          _vm.$set(item, "revenus_attendu", $$v);
        },
        expression: "item.revenus_attendu"
      }
    })], 1)]);
  }), 0), _vm._v(" "), _c("tfoot", [_c("tr", [_vm._m(16), _vm._v(" "), _c("td", {
    attrs: {
      colspan: ""
    }
  }, [_vm._v("-")]), _vm._v(" "), _c("td", {
    attrs: {
      colspan: ""
    }
  }, [_vm._v("-")]), _vm._v(" "), _c("td", {
    attrs: {
      colspan: ""
    }
  }, [_vm._v("-")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.formatNumber(_vm.totalRevenus)))])])])]), _vm._v(" "), _vm._m(17)]), _vm._v(" "), _c("div", {
    staticClass: "mt-2"
  }, [_c("div", {
    staticClass: "px-0"
  }, [_c("label", {
    staticClass: "font-weight-bold"
  }, [_vm._v("Commentaire sur les revenus attendus")]), _vm._v(" "), _c("vue-editor", {
    attrs: {
      maximum: 1000,
      id: "commentaire_revenu_attendus"
    },
    on: {
      "update-value": function updateValue($event) {
        _vm.f8Manager.data[$event[0]] = $event[1];
      }
    },
    model: {
      value: _vm.f8Manager.data.commentaire_revenu_attendus,
      callback: function callback($$v) {
        _vm.$set(_vm.f8Manager.data, "commentaire_revenu_attendus", $$v);
      },
      expression: "f8Manager.data.commentaire_revenu_attendus"
    }
  })], 1)])])]) : _c("div", [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        return _vm.retract3();
      }
    }
  }, [_c("h6", {
    attrs: {
      id: "fournisseurs"
    }
  }, [_vm._v("\n                        REVENUS ATTENDUS\n                            "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)])])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        _vm.seen4 = !_vm.seen4;
      }
    }
  }, [_c("h6", {
    "class": " subdiv" + this.tb_name,
    attrs: {
      id: "fournisseurs"
    }
  }, [_vm._v("\n                        Conditions spéciales précedentes réalisées\n                        "), _vm.seen4 ? _c("chevron-up-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  }) : _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)]), _vm._v(" "), _vm.seen4 ? _c("div", {
    staticClass: "p-2",
    attrs: {
      id: "cond_spec_precedent_real"
    }
  }, [_c("div", {
    staticClass: "mt-2"
  }, [_c("div", {
    staticClass: "px-0"
  }, [_c("label", {
    staticClass: "font-weight-bold"
  }, [_vm._v("Conditions spéciales précedentes réalisées")]), _vm._v(" "), _c("vue-editor", {
    attrs: {
      maximum: 1000,
      id: "commentaire_cond_spec_precedent_real"
    },
    on: {
      "update-value": function updateValue($event) {
        _vm.f8Manager.data[$event[0]] = $event[1];
      }
    },
    model: {
      value: _vm.f8Manager.data.commentaire_cond_spec_precedent_real,
      callback: function callback($$v) {
        _vm.$set(_vm.f8Manager.data, "commentaire_cond_spec_precedent_real", $$v);
      },
      expression: "f8Manager.data.commentaire_cond_spec_precedent_real"
    }
  })], 1)])]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        _vm.seen5 = !_vm.seen5;
      }
    }
  }, [_c("h6", {
    "class": " subdiv" + this.tb_name,
    attrs: {
      id: "fournisseurs"
    }
  }, [_vm._v("\n                        Conditions spéciales et covenants a prevoir\n                        "), _vm.seen5 ? _c("chevron-up-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  }) : _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)]), _vm._v(" "), _vm.seen5 ? _c("div", {
    staticClass: "p-2",
    attrs: {
      id: "cond_spec_covenant_prevoir"
    }
  }, [_c("div", {
    staticClass: "mt-2"
  }, [_c("div", {
    staticClass: "px-0"
  }, [_c("label", {
    staticClass: "font-weight-bold"
  }, [_vm._v("Conditions spéciales et covenants à prevoir")]), _vm._v(" "), _c("vue-editor", {
    attrs: {
      maximum: 1000,
      id: "commentaire_cond_spec_covenant_prevoir"
    },
    on: {
      "update-value": function updateValue($event) {
        _vm.f8Manager.data[$event[0]] = $event[1];
      }
    },
    model: {
      value: _vm.f8Manager.data.commentaire_cond_spec_covenant_prevoir,
      callback: function callback($$v) {
        _vm.$set(_vm.f8Manager.data, "commentaire_cond_spec_covenant_prevoir", $$v);
      },
      expression: "f8Manager.data.commentaire_cond_spec_covenant_prevoir"
    }
  })], 1)])]) : _vm._e()]), _vm._v(" "), _c("div", {
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
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Description et justification des lignes\n                        ")]), _vm._v(" "), _c("div", {
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
  }, [_c("span", [_vm._v("\n                                            " + _vm._s(_vm.f8Manager.data.notes.length) + "\n                                        ")])])])]) : _vm._e(), _vm._v(" "), _c("book-open-icon", {
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
        return _vm.$modal.show("instruction_garantie");
      }
    }
  }), _vm._v(" "), _c("airplay-icon", {
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
  }, [_vm._v("\n                        Garanties et supports retenus de la ligne : " + _vm._s((_vm$ligneSelected = _vm.ligneSelected) === null || _vm$ligneSelected === void 0 ? void 0 : _vm$ligneSelected.ligne) + " "), ["Abandon", "Renouvellement", "Nouveau"].includes((_vm$ligneSelected2 = _vm.ligneSelected) === null || _vm$ligneSelected2 === void 0 ? void 0 : _vm$ligneSelected2.statut) ? _c("span", [_vm._v("(Nouvelle ligne)")]) : _c("span", [_vm._v("(Ligne existante)")])]), _vm._v(" "), _c("i", {
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
  }, [_vm._v("\n                    Fermer\n                ")])])])]), _vm._v(" "), _c("ketri-modal", {
    attrs: {
      name: "description_et_justification_des_lignes",
      images: ["/images/capture_afg/exemples/lignes_et_garanties.png", "/images/capture_afg/exemples/relation_dans_le_groupe.png", "/images/capture_afg/exemples/revenu_attendus.png"]
    }
  }), _vm._v(" "), _c("ketri-modal", {
    attrs: {
      name: "instruction_garantie",
      images: ["/images/capture_afg/instructions/garantie.png"],
      title: "Instruction"
    }
  }), _vm._v(" "), _c("note-modal", {
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
  return _c("label", [_c("b", [_vm._v("Structuration et justificatif de la demande")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("p", {
    staticClass: "alert alert-danger mt-2"
  }, [_c("i", {
    staticClass: "icofont-info-circle"
  }), _vm._v("\n                    Veuillez renseigner toutes les lignes de crédit (caisses et signatures) existantes, avant d'ajouter les garanties.\n                ")]);
}, function () {
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
  return _c("label", {
    staticClass: "font-weight-bold"
  }, [_vm._v("Commentaire sur les garanties "), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("générales")]), _vm._v(" des lignes existantes")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "font-weight-bold"
  }, [_vm._v("Commentaire sur les garanties "), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("spécifiques")]), _vm._v(" des lignes existantes")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("p", {
    staticClass: "alert alert-danger mt-2"
  }, [_c("i", {
    staticClass: "icofont-info-circle"
  }), _vm._v("\n                    Veuillez renseigner toutes les lignes de crédit (caisses et signatures) souhaitées, avant d'ajouter les garanties.\n                ")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    attrs: {
      colspan: "13"
    }
  }, [_c("hr")]);
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
  return _c("td", {
    attrs: {
      colspan: "13"
    }
  }, [_c("hr")]);
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
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "font-weight-bold"
  }, [_vm._v("Commentaire sur les garanties "), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("générales")]), _vm._v(" des nouvelles lignes")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "font-weight-bold"
  }, [_vm._v("Commentaire sur les garanties "), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("spécifiques")]), _vm._v(" des nouvelles lignes")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", {
    staticStyle: {
      width: "200px"
    }
  }, [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("LIGNES\n                                            "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })])]), _vm._v(" "), _c("th", {
    staticStyle: {
      width: "100px"
    }
  }, [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("AUTORISATION\n                                            "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })])]), _vm._v(" "), _c("th", {
    staticStyle: {
      width: "100px"
    }
  }, [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("TARIFICATION "), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("(*)")])])]), _vm._v(" "), _c("th", {
    staticStyle: {
      width: "100px"
    }
  }, [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("HYPOTHESE ")])]), _vm._v(" "), _c("th", {
    staticStyle: {
      width: "100px"
    }
  }, [_c("div", {
    staticStyle: {
      width: "100px!important"
    }
  }, [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("REVENUS ATTENDUS"), _c("span", {
    staticStyle: {
      color: "red"
    }
  })])])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    attrs: {
      colspan: ""
    }
  }, [_c("label", {
    staticClass: "form-label mt-1",
    attrs: {
      "for": "total_ligne_existante"
    }
  }, [_c("b", [_vm._v("Total")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "row"
  }, [_c("p", [_c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("(*)")]), _vm._v(" Justification des taux (taux préférentiel et /ou modifications)\n                            ")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/memorandum/F6.vue?vue&type=style&index=0&id=045d7040&lang=css&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/memorandum/F6.vue?vue&type=style&index=0&id=045d7040&lang=css&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n*[data-v-045d7040] {\r\n    font-family: \"Google sans\";\n}\np.alert.alert-danger[data-v-045d7040] {\r\n    border: 1px dashed rgba(192, 57, 43, 1) !important;\r\n    color: rgba(188, 39, 23, 1) !important;\r\n    border-left: 4px solid red !important;\r\n    background: #fbd5d538 !important\n}\nth[data-v-045d7040] {\r\n    font-size: 12px;\n}\nlabel[data-v-045d7040] {\r\n    height: 10px;\r\n    font-size: 13px;\n}\ninput[data-v-045d7040],\r\nselect[data-v-045d7040],\r\ntextarea[data-v-045d7040] {\r\n    height: 35px;\r\n    border-color: #34495e;\r\n    color: #57606f;\r\n    font-size: 13px;\r\n    font-weight: bold;\r\n    min-width: 150px;\n}\n.card-width-height[data-v-045d7040] {\r\n    width: 100%;\r\n    height: 100%;\n}\n.head[data-v-045d7040] {\r\n    color: #f1f2f6;\r\n    font-size: 22px;\n}\n.hdc[data-v-045d7040] {\r\n    background-color: #57606f;\n}\r\n\r\n/* Ajouter note */\n.badge-sm[data-v-045d7040] {\r\n    display: inline-block;\r\n    width: 15px;\r\n    height: 15px;\r\n    background: rgba(255, 0, 0, 0.882);\r\n    color: white;\r\n    font-size: 12px;\r\n    font-weight: 500;\r\n    border-radius: 100%;\r\n    position: absolute;\r\n    top: -20%;\r\n    left: 55%;\r\n    text-align: center;\n}\n.relook-header[data-v-045d7040] {\r\n    color: #000;\r\n    background-color: #f4f3f3;\r\n    padding: 5px;\r\n    border-bottom: 1px solid #b6b8bb;\n}\n.checked[data-v-045d7040] {\r\n    width: 19px;\r\n    height: 19px;\n}\n.relook-header-sb[data-v-045d7040] {\r\n    color: #fff;\r\n    background-color: #736372;\r\n    padding: 5px;\r\n    border-bottom: 1px solid #b6b8bb;\n}\n.image1[data-v-045d7040] {\r\n    background: url(\"/images/capture/exemples/description_et_justification_des_lignes.png\")\r\n        no-repeat;\r\n    background-position: center;\r\n    background-size: contain;\r\n\r\n    width: 500px;\r\n    height: 300px;\n}\n.bg-relooker[data-v-045d7040] {\r\n    background-color: #2c3e50;\r\n    color: white;\n}\r\n\r\n/* CSS Pour rendre sticky a ne pas supprimer  */\n.table-container[data-v-045d7040] {\r\n    overflow-x: auto;\r\n    width: 100%;\n}\ntable[data-v-045d7040] {\r\n    width: 100%;\r\n    border-collapse: collapse;\n}\r\n\r\n/* th, td {\r\n    padding: 8px;\r\n    border: 1px solid #ccc;\r\n    text-align: left;\r\n    width: 150px;\r\n} */\n#col-sticky-1[data-v-045d7040], .col-sticky-1[data-v-045d7040] {\r\n    position: sticky;\r\n    left: 0;\r\n    background-color: #f0f0f0;\r\n    z-index: 2;\n}\n#col-sticky-2[data-v-045d7040], .col-sticky-2[data-v-045d7040] {\r\n    position: sticky;\r\n    \r\n    background-color: #f0f0f0;\r\n    z-index: 1;\n}\nth[data-v-045d7040] {\r\n    font-size: 12px;\r\n    background: #f4f3f3 !important;\r\n    vertical-align: middle;\n}\r\n\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/memorandum/F6.vue?vue&type=style&index=0&id=045d7040&lang=css&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/memorandum/F6.vue?vue&type=style&index=0&id=045d7040&lang=css&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_F6_vue_vue_type_style_index_0_id_045d7040_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./F6.vue?vue&type=style&index=0&id=045d7040&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/memorandum/F6.vue?vue&type=style&index=0&id=045d7040&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_F6_vue_vue_type_style_index_0_id_045d7040_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_F6_vue_vue_type_style_index_0_id_045d7040_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/forms/afg/memorandum/F6.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/forms/afg/memorandum/F6.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _F6_vue_vue_type_template_id_045d7040_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./F6.vue?vue&type=template&id=045d7040&scoped=true */ "./resources/js/components/forms/afg/memorandum/F6.vue?vue&type=template&id=045d7040&scoped=true");
/* harmony import */ var _F6_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./F6.vue?vue&type=script&lang=js */ "./resources/js/components/forms/afg/memorandum/F6.vue?vue&type=script&lang=js");
/* harmony import */ var _F6_vue_vue_type_style_index_0_id_045d7040_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./F6.vue?vue&type=style&index=0&id=045d7040&lang=css&scoped=true */ "./resources/js/components/forms/afg/memorandum/F6.vue?vue&type=style&index=0&id=045d7040&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _F6_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _F6_vue_vue_type_template_id_045d7040_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _F6_vue_vue_type_template_id_045d7040_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "045d7040",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/forms/afg/memorandum/F6.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/forms/afg/memorandum/F6.vue?vue&type=script&lang=js":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/memorandum/F6.vue?vue&type=script&lang=js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_F6_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./F6.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/memorandum/F6.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_F6_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/forms/afg/memorandum/F6.vue?vue&type=style&index=0&id=045d7040&lang=css&scoped=true":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/memorandum/F6.vue?vue&type=style&index=0&id=045d7040&lang=css&scoped=true ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_F6_vue_vue_type_style_index_0_id_045d7040_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./F6.vue?vue&type=style&index=0&id=045d7040&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/memorandum/F6.vue?vue&type=style&index=0&id=045d7040&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/forms/afg/memorandum/F6.vue?vue&type=template&id=045d7040&scoped=true":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/memorandum/F6.vue?vue&type=template&id=045d7040&scoped=true ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_F6_vue_vue_type_template_id_045d7040_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_F6_vue_vue_type_template_id_045d7040_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_F6_vue_vue_type_template_id_045d7040_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./F6.vue?vue&type=template&id=045d7040&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/memorandum/F6.vue?vue&type=template&id=045d7040&scoped=true");


/***/ })

}]);