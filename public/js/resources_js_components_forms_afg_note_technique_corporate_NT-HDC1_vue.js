"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_forms_afg_note_technique_corporate_NT-HDC1_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/note_technique_corporate/NT-HDC1.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/note_technique_corporate/NT-HDC1.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/auth.service */ "./resources/js/services/auth.service.js");
/* harmony import */ var _services_connects_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/connects.service */ "./resources/js/services/connects.service.js");
/* harmony import */ var _services_afg_f8_manager_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/afg/f8-manager.js */ "./resources/js/services/afg/f8-manager.js");
/* harmony import */ var _services_afg_f8_constants_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/afg/f8-constants.js */ "./resources/js/services/afg/f8-constants.js");
/* harmony import */ var _services_afg_f8_data_extractor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/afg/f8-data-extractor */ "./resources/js/services/afg/f8-data-extractor.js");
/* harmony import */ var _johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @johmun/vue-tags-input */ "./node_modules/@johmun/vue-tags-input/dist/vue-tags-input.js");
/* harmony import */ var _johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_6__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
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








var externalKeysToWatch = ["priorite", "notes"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "PresentationDemande",
  components: {
    ChevronUpIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.ChevronUpIcon,
    ChevronDownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.ChevronDownIcon,
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.PlusIcon,
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.TrashIcon,
    AirplayIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.AirplayIcon,
    VueTagsInput: (_johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_6___default())
  },
  props: {
    meta_data: Object,
    tb_name: String,
    tb_display_name: String
  },
  mounted: function mounted() {
    console.log('is nt hdc1 mounted');
    this.tableClosedOrOpened();
    this.loadRetrieved();
    this.loadTbAttrs();
  },
  data: function data() {
    return {
      f8Manager: _services_afg_f8_manager_js__WEBPACK_IMPORTED_MODULE_3__["default"],
      f8Constants: _services_afg_f8_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"],
      f8DataExtractor: _services_afg_f8_data_extractor__WEBPACK_IMPORTED_MODULE_5__["default"],
      connectsHost: _services_connects_service__WEBPACK_IMPORTED_MODULE_2__["default"].loadablehost(),
      ebapisHost: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__["default"].host,
      seen: true,
      seen4: true,
      seen5: true,
      seen6: true,
      seen9: true,
      isLoading: false,
      contextList: [{
        title: "Commenter",
        icon: "icofont icofont-comment",
        handler: function () {
          this.openNotesModal();
        }.bind(this),
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
      meta_parseable: {
        cred_pub_key: this.meta_data["cred_pub_key"],
        tb_name: this.tb_name,
        type_table: null
      },
      formDataToBeWatched: {
        notes: [],
        priorite: ""
      },
      credPubTb14064: {},
      credPubTb14064WithGarantie: {},
      ligneSelected: {},
      aDesLigneExistanteCaisse: false,
      aDesLigneExistanteSignature: false,
      flag: {},
      filiale_afg: ["AFGB CI", "AFGB GA", "AFGB ML", "AFGB MG", "AFGB CM", "AFGB KM", "AFGB BJ"],
      listingNote: false,
      t8_data: {},
      f8Data: {}
    };
  },
  computed: {
    docFiliale: function docFiliale() {
      var _doc$caf_recorded_fil;
      var doc = this.meta_data["dossier_credit"];
      var filiale = doc === null || doc === void 0 || (_doc$caf_recorded_fil = doc.caf_recorded_file) === null || _doc$caf_recorded_fil === void 0 || (_doc$caf_recorded_fil = _doc$caf_recorded_fil.filiale) === null || _doc$caf_recorded_fil === void 0 || (_doc$caf_recorded_fil = _doc$caf_recorded_fil.trim()) === null || _doc$caf_recorded_fil === void 0 ? void 0 : _doc$caf_recorded_fil.toUpperCase();
      if (filiale) return filiale;
      var numDoc = doc === null || doc === void 0 ? void 0 : doc.numero_dossier;
      if (!numDoc || typeof numDoc !== "string") return null;
      var part0 = numDoc.split("-")[0].trim().toUpperCase();
      return part0.replace("AFGB", "AFGB ");
    },
    toutes_anciennes_lignes: function toutes_anciennes_lignes() {
      return [].concat(_toConsumableArray(this.f8Constants.ligneAutoComplete('tous_les_lignes')), _toConsumableArray(this.f8Constants.ligneAutoComplete('lignes_engagements_signatures')));
    },
    toutes_nouvelles_lignes: function toutes_nouvelles_lignes() {
      return [].concat(_toConsumableArray(this.f8Constants.ligneAutoComplete('tous_les_lignes_filtres')), _toConsumableArray(this.f8Constants.ligneAutoComplete('lignes_engagements_signatures')));
    }
  },
  methods: {
    getMixteIndex: function getMixteIndex(keyName, currentIndex) {
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
        if (item.ligne_mixte === "Mixte") {
          uniqueGroups.add(item.ligne_mixe_id);
        }
      }
      return Array.from(uniqueGroups).indexOf(currentLine.ligne_mixe_id) + 1;
    },
    isFirstOccurrence: function isFirstOccurrence(keyName, index) {
      console.log('key name', keyName);
      console.log('index', index);
      var ligne = this.f8Manager.data[keyName][index];
      if (!ligne.ligne_mixe_id) return true;
      return !this.f8Manager.data[keyName].slice(0, index).some(function (item) {
        return item.ligne_mixe_id === ligne.ligne_mixe_id;
      });
    },
    getRowspan: function getRowspan(keyName, ligne_mixe_id) {
      if (!ligne_mixe_id) return 1;
      return this.f8Manager.data[keyName].filter(function (item) {
        return item.ligne_mixe_id === ligne_mixe_id;
      }).length;
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
      this.$modal.show('hypo_modal_groupe');
      EventBus.$emit('updated-st-1-hypode-groupe', {
        ligneSelected: this.ligneSelected,
        meta_data: this.meta_data
      });
    },
    closeModal: function closeModal(modalName, ligneSelected) {
      var a = this.f8Manager.modalConditions(ligneSelected.id);
      // if(a) this.$modal.hide(modalName)
      this.$modal.hide(modalName);
    },
    formDataVars: function formDataVars(vars, event) {
      this.f8Manager.data[vars] = event[1];
    },
    formDataVars2: function formDataVars2(event, index, objectName, keyName) {
      this.f8Manager.data[objectName][index][keyName] = event[1];
    },
    openNotesModal: function openNotesModal() {
      var listing = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.listingNote = listing;
      this.$modal.show(this.tb_name);
    },
    retract: function retract() {
      this.seen = !this.seen;
      var a = {
        tb_name: this.tb_name + this.meta_data["cred_pub_key"],
        status: this.seen
      };
      EventBus.$emit("savedclosed-table", a);
    },
    tableClosedOrOpened: function tableClosedOrOpened() {
      this.seen = this.fetchClosedTables(this.tb_name + this.meta_data["cred_pub_key"]);
    },
    loadTbAttrs: function loadTbAttrs() {
      var l = [];
      var topdivel = this.$refs.topdiv;
      var k = document.querySelectorAll(".subdiv" + this.tb_name);
      k.forEach(function (e) {
        l.push(e.innerText);
      });
      var p = {
        name_of_title: topdivel.innerText,
        list_of_content: l,
        id: "f2-head"
      };
      this.$emit("load-buffer", p);
    },
    loadRetrieved2: function loadRetrieved2() {
      var _this$tb_name;
      var doc = this.meta_data["dossier_credit"];
      var tbsInUse = doc["tbs_in_use"];
      var createdTbNum = (_this$tb_name = this.tb_name) === null || _this$tb_name === void 0 || (_this$tb_name = _this$tb_name.split("tb")) === null || _this$tb_name === void 0 ? void 0 : _this$tb_name[1];
      var createdTbKey = "cred_pub_tb_" + createdTbNum;
      var credTable = doc[createdTbKey];
      var credPubTb14064Key = "cred_pub_tb_14064";
      this.credPubTb14064 = _objectSpread({}, doc[credPubTb14064Key]);
      this.credPubTb14064WithGarantie = this.f8DataExtractor.getData(doc, credPubTb14064Key);
      if (this.isNullish(credTable)) {
        this.f8Manager.setData(_objectSpread({}, this.credPubTb14064), createdTbKey);
      } else {
        this.f8Manager.setData(_objectSpread({}, credTable), createdTbKey);
      }
      this.f8Manager.handleInput();
      return;
    },
    determineKey: function determineKey() {
      var createdKey = this.tb_name;
      var createdKeyArr = createdKey.split("tb");
      createdKey = "cred_pub_tb_" + createdKeyArr[1];
      return createdKey;
    },
    loadRetrieved: function loadRetrieved() {
      var _this$meta_data$dossi;
      var lentb = this.meta_data["dossier_credit"]["tbs_in_use"];
      var createdKey = "cred_pub_tb_8";
      var createdKey14064 = "cred_pub_tb_14064";
      var actual_createdKey = this.determineKey();
      this.defaultRetract(false, (_this$meta_data$dossi = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi === void 0 ? void 0 : _this$meta_data$dossi.applied_templ_id);
      if (this.meta_data["dossier_credit"][createdKey14064] != undefined) {
        this.credPubTb14064WithGarantie = this.f8DataExtractor.getData(this.meta_data["dossier_credit"], createdKey14064);
        this.credPubTb14064 = this.meta_data["dossier_credit"][createdKey14064];
      } else if (this.meta_data["dossier_credit"][createdKey] != undefined) {
        this.credPubTb14064WithGarantie = this.f8DataExtractor.getData(this.meta_data["dossier_credit"], createdKey);
        this.credPubTb14064 = this.meta_data["dossier_credit"][createdKey];
        // console.log(">>t8_data", this.t8_data);
      }
      if (lentb.length == 0 || !this.meta_data["dossier_credit"][actual_createdKey]) {
        // console.log('************** !this.meta_data["dossier_credit"][actual_createdKey]');

        if (this.meta_data["dossier_credit"][actual_createdKey] != undefined) {
          var credit_folder_table_8 = _objectSpread({}, this.meta_data["dossier_credit"][actual_createdKey]);
          this.f8Manager.setData(credit_folder_table_8, 'tb15701');
          this.formDataToBeWatched = this.meta_data["dossier_credit"][actual_createdKey];
          //console.log(this.formDataToBeWatched);
          for (var _i = 0, _Object$entries = Object.entries(this.formDataToBeWatched); _i < _Object$entries.length; _i++) {
            var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
              key = _Object$entries$_i[0],
              value = _Object$entries$_i[1];
            if (this[key] != undefined) {
              this[key] = value;
            }
          }
        } else {
          // console.log("loadRetrieved +++ ");

          var _credit_folder_table_ = _objectSpread({}, this.meta_data["dossier_credit"][createdKey]);
          var credit_folder_table_14064 = _objectSpread({}, this.meta_data["dossier_credit"][createdKey14064]);
          if (credit_folder_table_14064) {
            credit_folder_table_14064.commentaire_nouvelles_lignes = "";
            credit_folder_table_14064.commentaire_nouvelles_lignes_garanties_generales_detenues = "";
            credit_folder_table_14064.commentaire_nouvelles_lignes_garanties_specifiques_detenues = "";
            this.f8Manager.setData(credit_folder_table_14064, 'tb15701', true);
          } else if (_credit_folder_table_) {
            _credit_folder_table_.commentaire_nouvelles_lignes = "";
            _credit_folder_table_.commentaire_nouvelles_lignes_garanties_generales_detenues = "";
            _credit_folder_table_.commentaire_nouvelles_lignes_garanties_specifiques_detenues = "";
            this.f8Manager.setData(_credit_folder_table_, 'tb15701', true);
          }
        }
        this.f8Manager.handleInput();
        return;
      }
      var credit_folder_table = _objectSpread({}, this.meta_data["dossier_credit"][actual_createdKey]);
      this.f8Manager.setData(credit_folder_table, 'tb15701');

      // console.log("this.f8Manager", this.f8Manager);
      // console.log("this.credit_folder_table", credit_folder_table);
    },
    defaultRetract: function defaultRetract(rc, ra) {
      if (ra != null) {
        this.seen = rc;
        var a = {
          tb_name: this.tb_name + this.meta_data["cred_pub_key"],
          status: this.seen
        };
        EventBus.$emit("savedclosed-table", a);
      }
    },
    launchAutoSaver: function launchAutoSaver() {
      var _this = this;
      _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["default"].loadUserData().then(function (res) {
        _this.send2Backend(res, 0, 0);
      })["catch"](function (err) {});
    },
    send2Backend: function send2Backend(res) {
      this.authcheck = true;
      this.authcheckUsr = res.data;
      this.authcheckStatus = res.status;
      if (this.authcheckStatus === 401) {
        // // window.location.href = "/login";
      }
      // console.log("Auth check status", this.authcheckUsr);
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
    },
    updateFilialeDefaults: function updateFilialeDefaults() {
      var _this$authcheckUsr,
        _this2 = this;
      if ((_this$authcheckUsr = this.authcheckUsr) !== null && _this$authcheckUsr !== void 0 && _this$authcheckUsr.filiale) {
        this.f8Manager.data.nouvelles_lignes_caisse.forEach(function (line) {
          if (["", null, undefined].includes(line.filiale)) {
            line.filiale = _this2.docFiliale;
          }
        });
        this.f8Manager.data.nouvelles_lignes_signature.forEach(function (line) {
          if (["", null, undefined].includes(line.filiale)) {
            line.filiale = _this2.docFiliale;
          }
        });
        this.f8Manager.data.lignes_existantes_engagements_signatures.forEach(function (line) {
          if (["", null, undefined].includes(line.filiale)) {
            line.filiale = _this2.docFiliale;
          }
        });
        this.f8Manager.data.lignes_existantes.forEach(function (line) {
          if (["", null, undefined].includes(line.filiale)) {
            line.filiale = _this2.docFiliale;
          }
        });
      }
    },
    getGarantiesForLine: function getGarantiesForLine(line) {
      if (!line || !line.id) return [];
      var allGaranties = [].concat(_toConsumableArray(this.credPubTb14064WithGarantie.newLinesgarantiesSpecifiques || []), _toConsumableArray(this.credPubTb14064WithGarantie.newLinesgarantiesGenerales || []));

      // Si la ligne a un champ "from", chercher les garanties associées à la ligne source
      if (line.from) {
        return allGaranties.filter(function (garantie) {
          return garantie.parentId && garantie.parentId.includes(line.from);
        });
      }

      // Sinon, chercher les garanties associées à l'id de la ligne courante
      return allGaranties.filter(function (garantie) {
        return garantie.parentId && garantie.parentId.includes(line.id);
      });
    }
  },
  watch: {
    "f8Manager.data": {
      handler: function handler(newVal, oldVal) {
        var _newVal$nouvelles_lig, _newVal$nouvelles_lig2;
        // console.log('newVal f8Manager old upd',newVal);

        newVal = _objectSpread(_objectSpread({}, newVal), this.formDataToBeWatched);
        // console.log('newVal autosav', newVal);
        this.autosaving(newVal, oldVal);
        this.updateFilialeDefaults();
        var ligne_caisses = (_newVal$nouvelles_lig = newVal.nouvelles_lignes_caisse) === null || _newVal$nouvelles_lig === void 0 ? void 0 : _newVal$nouvelles_lig.filter(function (el) {
          return !['', null, undefined].includes(el === null || el === void 0 ? void 0 : el.from) && !['', null, undefined].includes(el === null || el === void 0 ? void 0 : el.ligne) || ['', null, undefined].includes(el === null || el === void 0 ? void 0 : el.from);
        });
        var ligne_signatures = (_newVal$nouvelles_lig2 = newVal.nouvelles_lignes_signature) === null || _newVal$nouvelles_lig2 === void 0 ? void 0 : _newVal$nouvelles_lig2.filter(function (el) {
          return !['', null, undefined].includes(el === null || el === void 0 ? void 0 : el.from) && !['', null, undefined].includes(el === null || el === void 0 ? void 0 : el.ligne) || ['', null, undefined].includes(el === null || el === void 0 ? void 0 : el.from);
        });
        this.aDesLigneExistanteCaisse = (ligne_caisses === null || ligne_caisses === void 0 ? void 0 : ligne_caisses.length) == 0;
        this.aDesLigneExistanteSignature = (ligne_signatures === null || ligne_signatures === void 0 ? void 0 : ligne_signatures.length) == 0;
      },
      deep: true,
      immediate: false
    },
    formDataToBeWatched: {
      handler: function handler(newVal, oldVal) {
        newVal = _objectSpread(_objectSpread({}, this.f8Manager.data), newVal);
        this.autosaving(newVal, oldVal);
      },
      deep: true,
      immediate: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/note_technique_corporate/NT-HDC1.vue?vue&type=template&id=6f886143&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/note_technique_corporate/NT-HDC1.vue?vue&type=template&id=6f886143&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$formDataToBeWatch, _vm$credPubTb, _vm$credPubTb2, _vm$formDataToBeWatch2;
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    on: {
      contextmenu: function contextmenu($event) {
        return _vm.$refs.menu.open($event, _vm.tb_name);
      }
    }
  }, [_vm.isLoading ? _c("loader") : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "row bg-light",
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
  }), _vm._v(" "), _vm.seen ? _c("div", {
    staticClass: "card card-width-height"
  }, [_c("br"), _vm._v(" "), _c("div", {
    staticClass: "card-header hdc pb-0 pt-2"
  }, [_c("h3", {
    ref: "topdiv",
    staticClass: "head",
    attrs: {
      id: "f2-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n              " + _vm._s(_vm.tb_display_name) + " : Présentation de la demande\n            ")]), _vm._v(" "), _c("div", {
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
    staticClass: "badge-sm"
  }, [_c("span", [_vm._v("\n                      " + _vm._s(_vm.formDataToBeWatched.notes.length) + "\n                    ")])])])]) : _vm._e(), _vm._v(" "), _c("airplay-icon", {
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
        return _vm.$modal.show("presentation_demande");
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
        return _vm.retract();
      }
    }
  })], 1)])])]), _vm._v(" "), _c("div", {
    staticClass: "row p-0"
  }, [_c("div", {
    staticClass: "col-12 p-0 position-relative"
  }, [_c("div", {
    staticClass: "w-100"
  }, [_vm.seen4 ? _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen4 = !_vm.seen4;
      }
    }
  }, [_c("h6", {
    "class": "subdiv" + _vm.tb_name,
    attrs: {
      id: "frais-de-crédit"
    }
  }, [_vm._v("\n                  Proposition de concours / Facilité après analyse (DE Filiale)\n                  "), _c("chevron-up-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "mt-3"
  }, [_c("h5", {
    staticClass: "fw-bold"
  }, [_vm._v("Engagement par caisse")]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_c("thead", [_c("tr", {
    staticClass: "text-center",
    staticStyle: {
      "vertical-align": "center"
    }
  }, [_c("th", [_vm._v("Filiale")]), _vm._v(" "), _c("th", [_vm._v("Lignes")]), _vm._v(" "), _c("th", [_vm._v("Statut")]), _vm._v(" "), _c("th", [_vm._v("Montant (Demande Client)")]), _vm._v(" "), _c("th", [_vm._v("Proposition DCE (autorisation)")]), _vm._v(" "), _c("th", {
    staticStyle: {
      "min-width": "220px"
    }
  }, [_c("span", [_vm._v("Encours au")]), _vm._v(" "), _c("date-input", {
    attrs: {
      value: _vm.f8Manager.data.encours_au,
      viewonly: true,
      id: "encours_au_de_lignes_caisse"
    }
  })], 1), _vm._v(" "), _c("th", [_vm._v("Durée (mois)")]), _vm._v(" "), _c("th", [_vm._v("Echéance")]), _vm._v(" "), _c("th", [_vm._v("Durée tirage (en jour)")]), _vm._v(" "), _c("th", [_vm._v("Taux (%)")]), _vm._v(" "), _c("th", [_vm._v("Modalité de renouvellement")]), _vm._v(" "), _c("th", {
    staticClass: "wide-column"
  }, [_vm._v("Garanties")])])]), _vm._v(" "), _c("tbody", [_vm._l((_vm$credPubTb = _vm.credPubTb14064) === null || _vm$credPubTb === void 0 ? void 0 : _vm$credPubTb.nouvelles_lignes_caisse, function (nv_ligne_caisse, idx_) {
    return [_c("tr", {
      key: idx_ + "nv_lg_1"
    }, [_c("td", {
      staticClass: "centered-input"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: nv_ligne_caisse.filiale,
        expression: "nv_ligne_caisse.filiale"
      }],
      staticClass: "form-control",
      attrs: {
        type: "text",
        disabled: ""
      },
      domProps: {
        value: nv_ligne_caisse.filiale
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(nv_ligne_caisse, "filiale", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", {
      staticClass: "centered-input"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: nv_ligne_caisse.ligne,
        expression: "nv_ligne_caisse.ligne"
      }],
      staticClass: "form-control",
      attrs: {
        type: "text",
        disabled: ""
      },
      domProps: {
        value: nv_ligne_caisse.ligne
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(nv_ligne_caisse, "ligne", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", {
      staticClass: "centered-input"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: nv_ligne_caisse.statut,
        expression: "nv_ligne_caisse.statut"
      }],
      staticClass: "form-control",
      attrs: {
        type: "text",
        disabled: ""
      },
      domProps: {
        value: nv_ligne_caisse.statut
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(nv_ligne_caisse, "statut", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", {
      staticClass: "centered-input"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: nv_ligne_caisse.montant,
        expression: "nv_ligne_caisse.montant"
      }],
      staticClass: "form-control",
      attrs: {
        type: "text",
        disabled: ""
      },
      domProps: {
        value: nv_ligne_caisse.montant
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(nv_ligne_caisse, "montant", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", {
      staticClass: "centered-input"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: nv_ligne_caisse.proposition,
        expression: "nv_ligne_caisse.proposition"
      }],
      staticClass: "form-control",
      attrs: {
        type: "text",
        disabled: ""
      },
      domProps: {
        value: nv_ligne_caisse.proposition
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(nv_ligne_caisse, "proposition", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", {
      staticClass: "centered-input"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: nv_ligne_caisse.encours,
        expression: "nv_ligne_caisse.encours"
      }],
      staticClass: "form-control",
      attrs: {
        type: "text",
        disabled: ""
      },
      domProps: {
        value: nv_ligne_caisse.encours
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(nv_ligne_caisse, "encours", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", {
      staticClass: "centered-input"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: nv_ligne_caisse.duree,
        expression: "nv_ligne_caisse.duree"
      }],
      staticClass: "form-control",
      attrs: {
        type: "text",
        disabled: ""
      },
      domProps: {
        value: nv_ligne_caisse.duree
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(nv_ligne_caisse, "duree", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", {
      staticClass: "centered-input"
    }, [_c("date-input", {
      staticStyle: {
        width: "210px"
      },
      attrs: {
        value: nv_ligne_caisse.echeance,
        viewonly: true
      }
    })], 1), _vm._v(" "), _c("td", {
      staticClass: "centered-input"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: nv_ligne_caisse.duree_tirage,
        expression: "nv_ligne_caisse.duree_tirage"
      }],
      staticClass: "form-control",
      attrs: {
        type: "text",
        disabled: ""
      },
      domProps: {
        value: nv_ligne_caisse.duree_tirage
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(nv_ligne_caisse, "duree_tirage", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", {
      staticClass: "centered-input"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: nv_ligne_caisse.taux,
        expression: "nv_ligne_caisse.taux"
      }],
      staticClass: "form-control",
      attrs: {
        type: "text",
        disabled: ""
      },
      domProps: {
        value: nv_ligne_caisse.taux
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(nv_ligne_caisse, "taux", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", {
      staticClass: "centered-input"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: nv_ligne_caisse.type,
        expression: "nv_ligne_caisse.type"
      }],
      staticClass: "form-control",
      attrs: {
        type: "text",
        disabled: ""
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
    })]), _vm._v(" "), _c("td", {
      staticClass: "align-middle wide-column"
    }, [_c("ul", _vm._l(_vm.getGarantiesForLine(nv_ligne_caisse), function (garantie) {
      var _garantie$state_;
      return _c("li", {
        key: garantie.id,
        staticClass: "mb-2"
      }, [_vm._v("\n                                  - " + _vm._s(garantie && garantie.formulation_surete || "Aucune formulation") + "\n                                  "), (garantie === null || garantie === void 0 || (_garantie$state_ = garantie.state_) === null || _garantie$state_ === void 0 ? void 0 : _garantie$state_.is_detained) == "detenues" ? _c("span", {
        staticClass: "badge badge-success"
      }, [_vm._v("Retenu")]) : _c("span", {
        staticClass: "badge badge-danger"
      }, [_vm._v("Non Retenu")])]);
    }), 0)])])];
  }), _vm._v(" "), _c("tr", [_vm._m(0), _vm._v(" "), _c("td", {
    staticClass: "centered-input"
  }, [_c("currency-input2", {
    staticClass: "form-control",
    attrs: {
      "default-typing": false,
      disabled: "",
      readonly: ""
    },
    model: {
      value: _vm.credPubTb14064.st_caisse_nouvelles_lignes_montant,
      callback: function callback($$v) {
        _vm.$set(_vm.credPubTb14064, "st_caisse_nouvelles_lignes_montant", $$v);
      },
      expression: "credPubTb14064.st_caisse_nouvelles_lignes_montant"
    }
  })], 1), _vm._v(" "), _c("td", {
    staticClass: "centered-input"
  }, [_c("currency-input2", {
    staticClass: "form-control",
    attrs: {
      "default-typing": false,
      disabled: "",
      readonly: ""
    },
    model: {
      value: _vm.credPubTb14064.st_caisse_nouvelles_lignes_proposition,
      callback: function callback($$v) {
        _vm.$set(_vm.credPubTb14064, "st_caisse_nouvelles_lignes_proposition", $$v);
      },
      expression: "credPubTb14064.st_caisse_nouvelles_lignes_proposition"
    }
  })], 1)])], 2)])])]), _vm._v(" "), _c("div", {
    staticClass: "mt-3"
  }, [_c("h5", {
    staticClass: "fw-bold"
  }, [_vm._v("Engagement par signature")]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_c("thead", [_c("tr", {
    staticClass: "text-center",
    staticStyle: {
      "vertical-align": "center"
    }
  }, [_c("th", [_vm._v("Filiale")]), _vm._v(" "), _c("th", [_vm._v("Lignes")]), _vm._v(" "), _c("th", [_vm._v("Statut")]), _vm._v(" "), _c("th", [_vm._v("Montant (Demande Client)")]), _vm._v(" "), _c("th", [_vm._v("Proposition DCE (autorisation)")]), _vm._v(" "), _c("th", {
    staticStyle: {
      "min-width": "220px"
    }
  }, [_c("span", [_vm._v("Encours au")]), _vm._v(" "), _c("date-input", {
    attrs: {
      value: _vm.f8Manager.data.encours_au,
      viewonly: true,
      id: "encours_au_de_lignes_signature"
    }
  })], 1), _vm._v(" "), _c("th", [_vm._v("Durée (mois)")]), _vm._v(" "), _c("th", [_vm._v("Echéance")]), _vm._v(" "), _c("th", [_vm._v("Durée tirage (en jour)")]), _vm._v(" "), _c("th", [_vm._v("Taux (%)")]), _vm._v(" "), _c("th", {
    staticClass: "wide-column"
  }, [_vm._v("Garanties")])])]), _vm._v(" "), _c("tbody", [_vm._l((_vm$credPubTb2 = _vm.credPubTb14064) === null || _vm$credPubTb2 === void 0 ? void 0 : _vm$credPubTb2.nouvelles_lignes_signature, function (nv_ligne_sign, i) {
    return [_c("tr", {
      key: i + "lg_ext"
    }, [_c("td", {
      staticClass: "centered-input"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: nv_ligne_sign.filiale,
        expression: "nv_ligne_sign.filiale"
      }],
      staticClass: "form-control",
      attrs: {
        type: "text",
        disabled: ""
      },
      domProps: {
        value: nv_ligne_sign.filiale
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(nv_ligne_sign, "filiale", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", {
      staticClass: "centered-input"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: nv_ligne_sign.ligne,
        expression: "nv_ligne_sign.ligne"
      }],
      staticClass: "form-control",
      attrs: {
        type: "text",
        disabled: ""
      },
      domProps: {
        value: nv_ligne_sign.ligne
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(nv_ligne_sign, "ligne", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", {
      staticClass: "centered-input"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: nv_ligne_sign.statut,
        expression: "nv_ligne_sign.statut"
      }],
      staticClass: "form-control",
      attrs: {
        type: "text",
        disabled: ""
      },
      domProps: {
        value: nv_ligne_sign.statut
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(nv_ligne_sign, "statut", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", {
      staticClass: "centered-input"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: nv_ligne_sign.montant,
        expression: "nv_ligne_sign.montant"
      }],
      staticClass: "form-control",
      attrs: {
        type: "text",
        disabled: ""
      },
      domProps: {
        value: nv_ligne_sign.montant
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(nv_ligne_sign, "montant", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", {
      staticClass: "centered-input"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: nv_ligne_sign.proposition,
        expression: "nv_ligne_sign.proposition"
      }],
      staticClass: "form-control",
      attrs: {
        type: "text",
        disabled: ""
      },
      domProps: {
        value: nv_ligne_sign.proposition
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(nv_ligne_sign, "proposition", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", {
      staticClass: "centered-input"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: nv_ligne_sign.encours,
        expression: "nv_ligne_sign.encours"
      }],
      staticClass: "form-control",
      attrs: {
        type: "text",
        disabled: ""
      },
      domProps: {
        value: nv_ligne_sign.encours
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(nv_ligne_sign, "encours", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", {
      staticClass: "centered-input"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: nv_ligne_sign.duree,
        expression: "nv_ligne_sign.duree"
      }],
      staticClass: "form-control",
      attrs: {
        type: "text",
        disabled: ""
      },
      domProps: {
        value: nv_ligne_sign.duree
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(nv_ligne_sign, "duree", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", {
      staticClass: "centered-input"
    }, [_c("date-input", {
      staticStyle: {
        width: "210px"
      },
      attrs: {
        value: nv_ligne_sign.echeance,
        viewonly: true
      }
    })], 1), _vm._v(" "), _c("td", {
      staticClass: "centered-input"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: nv_ligne_sign.duree_tirage,
        expression: "nv_ligne_sign.duree_tirage"
      }],
      staticClass: "form-control",
      attrs: {
        type: "text",
        disabled: ""
      },
      domProps: {
        value: nv_ligne_sign.duree_tirage
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(nv_ligne_sign, "duree_tirage", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", {
      staticClass: "centered-input"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: nv_ligne_sign.taux,
        expression: "nv_ligne_sign.taux"
      }],
      staticClass: "form-control",
      attrs: {
        type: "text",
        disabled: ""
      },
      domProps: {
        value: nv_ligne_sign.taux
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(nv_ligne_sign, "taux", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", {
      staticClass: "align-middle wide-column"
    }, [_c("ul", _vm._l(_vm.getGarantiesForLine(nv_ligne_sign), function (garantie) {
      var _garantie$state_2;
      return _c("li", {
        key: garantie.id,
        staticClass: "mb-2"
      }, [_vm._v("\n                                  - " + _vm._s(garantie === null || garantie === void 0 ? void 0 : garantie.formulation_surete) + "\n                                  "), (garantie === null || garantie === void 0 || (_garantie$state_2 = garantie.state_) === null || _garantie$state_2 === void 0 ? void 0 : _garantie$state_2.is_detained) == "detenues" ? _c("span", {
        staticClass: "badge badge-success"
      }, [_vm._v("Retenu")]) : _c("span", {
        staticClass: "badge badge-danger"
      }, [_vm._v("Non Retenu")])]);
    }), 0)])])];
  }), _vm._v(" "), _c("tr", [_vm._m(1), _vm._v(" "), _c("td", {
    staticClass: "centered-input"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.credPubTb14064.st_signature_nouvelles_lignes_montant,
      expression: "credPubTb14064.st_signature_nouvelles_lignes_montant"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      disabled: ""
    },
    domProps: {
      value: _vm.credPubTb14064.st_signature_nouvelles_lignes_montant
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.credPubTb14064, "st_signature_nouvelles_lignes_montant", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("td", {
    staticClass: "centered-input"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.credPubTb14064.st_signature_nouvelles_lignes_proposition,
      expression: "credPubTb14064.st_signature_nouvelles_lignes_proposition"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      disabled: ""
    },
    domProps: {
      value: _vm.credPubTb14064.st_signature_nouvelles_lignes_proposition
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.credPubTb14064, "st_signature_nouvelles_lignes_proposition", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("tr", [_vm._m(2), _vm._v(" "), _c("td", {
    staticClass: "centered-input"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.credPubTb14064.total_nouvelles_lignes_montant,
      expression: "credPubTb14064.total_nouvelles_lignes_montant"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      disabled: ""
    },
    domProps: {
      value: _vm.credPubTb14064.total_nouvelles_lignes_montant
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.credPubTb14064, "total_nouvelles_lignes_montant", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("td", {
    staticClass: "centered-input"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.credPubTb14064.total_nouvelles_lignes_proposition,
      expression: "credPubTb14064.total_nouvelles_lignes_proposition"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      disabled: ""
    },
    domProps: {
      value: _vm.credPubTb14064.total_nouvelles_lignes_proposition
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.credPubTb14064, "total_nouvelles_lignes_proposition", $event.target.value);
      }
    }
  })])])], 2)])])])])]) : _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen4 = !_vm.seen4;
      }
    }
  }, [_c("h6", {
    attrs: {
      id: "frais-de-crédit"
    }
  }, [_vm._v("\n                  Proposition de concours / Facilité après analyse (DE Filiale)\n                  "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)])]), _vm._v(" "), _vm.seen5 ? _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen5 = !_vm.seen5;
      }
    }
  }, [_c("h6", {
    "class": "subdiv" + _vm.tb_name,
    attrs: {
      id: "bref-rappel-des-relations-du-client-avec-la-afg-banque-ci"
    }
  }, [_vm._v("\n                  Proposition de concours / Facilité après analyse (Holding)\n                  "), _c("chevron-up-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "mt-3"
  }, [_c("h5", {
    staticClass: "fw-bold"
  }, [_vm._v("Engagement par caisse")]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-borderless"
  }, [_c("thead", [_c("tr", {
    staticClass: "text-center",
    staticStyle: {
      "vertical-align": "center"
    }
  }, [_c("th", [_vm._v("Filiale")]), _vm._v(" "), _c("th", [_vm._v("Lignes")]), _vm._v(" "), _c("th", [_vm._v("Statut")]), _vm._v(" "), _c("th", [_vm._v("Demande du client ")]), _vm._v(" "), _c("th", [_vm._v("Proposition DCE ")]), _vm._v(" "), _c("th", [_vm._v("Proposition Analyste DE ")]), _vm._v(" "), _c("th", [_vm._v("Proposition Analyste HLD")]), _vm._v(" "), _c("th", [_vm._v("Durée (mois)")]), _vm._v(" "), _c("th", [_vm._v("Echéance/Durée tirage (en jour)")]), _vm._v(" "), _c("th", [_vm._v("Durée tirage (mois)")]), _vm._v(" "), _c("th", [_vm._v("Taux (%)")]), _vm._v(" "), _c("th", [_vm._v("Modalité de renouvellement")]), _vm._v(" "), _c("th", [_vm._v("Suretés")]), _vm._v(" "), _c("th"), _vm._v(" "), _c("th", [[_c("button", {
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
  })], 1)]], 2)])]), _vm._v(" "), _c("tbody", [_vm._l(_vm.f8Manager.data.nouvelles_lignes_caisse, function (nv_ligne_caisse, idx_) {
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
      "class": {
        "already-exist": ["tb14064", "tb8"].includes(nv_ligne_caisse === null || nv_ligne_caisse === void 0 ? void 0 : nv_ligne_caisse.tb)
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
          return _vm.f8Manager.handleInput(nv_ligne_caisse, "nouvelles_lignes_caisse", ["lignes_existantes", idx_]);
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
      }, [_vm._v(_vm._s(filiale_afg) + "\n                                        ")]);
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
    }, [_vm._v("\n                                                          " + _vm._s(nv_ligne_caisse.ligne_mixte) + " - " + _vm._s(_vm.getMixteIndex("nouvelles_lignes_caisse", idx_)) + "\n                                                      ")])]), _vm._v(" "), _c("div", {
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
          var _el$text;
          return (_el$text = el.text) === null || _el$text === void 0 || (_el$text = _el$text.toLowerCase()) === null || _el$text === void 0 ? void 0 : _el$text.includes(nv_ligne_caisse.tag);
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
      }, [_vm._v(_vm._s(line.libelle) + "\n                                                  ")]);
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
        "already-exist": ["tb14064", "tb8"].includes(nv_ligne_caisse === null || nv_ligne_caisse === void 0 ? void 0 : nv_ligne_caisse.tb)
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
    }, [[_c("option", {
      domProps: {
        value: "Nouveau"
      }
    }, [_vm._v("Nouveau")])]], 2)]), _vm._v(" "), _c("td", [_c("currency-input2", {
      attrs: {
        "default-typing": false,
        disabled: ""
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
      attrs: {
        "default-typing": false,
        disabled: ""
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
      attrs: {
        "default-typing": false,
        disabled: ""
      },
      on: {
        change: function change($event) {
          return _vm.f8Manager.computedTypeStatus("lignes_existantes", nv_ligne_caisse, idx_, "nouvelles_lignes_caisse");
        }
      },
      model: {
        value: nv_ligne_caisse.proposition_analyste_de,
        callback: function callback($$v) {
          _vm.$set(nv_ligne_caisse, "proposition_analyste_de", $$v);
        },
        expression: "nv_ligne_caisse.proposition_analyste_de"
      }
    })], 1), _vm._v(" "), _c("td", [_c("currency-input2", {
      attrs: {
        "default-typing": false
      },
      on: {
        change: function change($event) {
          return _vm.f8Manager.computedTypeStatus("lignes_existantes", nv_ligne_caisse, idx_, "nouvelles_lignes_caisse");
        }
      },
      model: {
        value: nv_ligne_caisse.proposition_analyste_hld,
        callback: function callback($$v) {
          _vm.$set(nv_ligne_caisse, "proposition_analyste_hld", $$v);
        },
        expression: "nv_ligne_caisse.proposition_analyste_hld"
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
        "already-exist": ["tb14064", "tb8"].includes(nv_ligne_caisse === null || nv_ligne_caisse === void 0 ? void 0 : nv_ligne_caisse.tb)
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
        background: ["tb14064", "tb8"].includes(nv_ligne_caisse === null || nv_ligne_caisse === void 0 ? void 0 : nv_ligne_caisse.tb) ? "background: #00ffff21" : "",
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
        "already-exist": ["tb14064", "tb8"].includes(nv_ligne_caisse === null || nv_ligne_caisse === void 0 ? void 0 : nv_ligne_caisse.tb)
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
              "already-exist": ["tb14064", "tb8"].includes(nv_ligne_caisse === null || nv_ligne_caisse === void 0 ? void 0 : nv_ligne_caisse.tb)
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
    })])]), _vm._v(" "), _c("td", {
      attrs: {
        colspan: "10"
      }
    }, [[_c("button", {
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
    })], 1)]], 2)]);
  }), _vm._v(" "), _vm.aDesLigneExistanteCaisse ? _c("tr", [_vm._m(3)]) : _vm._e(), _vm._v(" "), _c("tr", [_vm._m(4), _vm._v(" "), _c("td", [_c("currency-input2", {
    staticClass: "form-control",
    attrs: {
      "default-typing": false,
      disabled: "",
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
      disabled: "",
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
      disabled: "",
      readonly: ""
    },
    model: {
      value: _vm.f8Manager.data.st_caisse_nouvelles_lignes_proposition_ana_de,
      callback: function callback($$v) {
        _vm.$set(_vm.f8Manager.data, "st_caisse_nouvelles_lignes_proposition_ana_de", $$v);
      },
      expression: "f8Manager.data.st_caisse_nouvelles_lignes_proposition_ana_de"
    }
  })], 1), _vm._v(" "), _c("td", [_c("currency-input2", {
    staticClass: "form-control",
    attrs: {
      "default-typing": false,
      disabled: "",
      readonly: ""
    },
    model: {
      value: _vm.f8Manager.data.st_caisse_nouvelles_lignes_proposition_ana_hld,
      callback: function callback($$v) {
        _vm.$set(_vm.f8Manager.data, "st_caisse_nouvelles_lignes_proposition_ana_hld", $$v);
      },
      expression: "f8Manager.data.st_caisse_nouvelles_lignes_proposition_ana_hld"
    }
  })], 1)])], 2)])])]), _vm._v(" "), _c("div", {
    staticClass: "mt-3"
  }, [_c("h5", {
    staticClass: "fw-bold"
  }, [_vm._v("Engagement par signature")]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-borderless"
  }, [_c("thead", [_c("tr", {
    staticClass: "text-center",
    staticStyle: {
      "vertical-align": "center"
    }
  }, [_c("th", [_vm._v("Filiale")]), _vm._v(" "), _c("th", [_vm._v("Lignes")]), _vm._v(" "), _c("th", [_vm._v("Statut")]), _vm._v(" "), _c("th", [_vm._v("Demande du client")]), _vm._v(" "), _c("th", [_vm._v("Proposition DCE")]), _vm._v(" "), _c("th", [_vm._v("Proposition Analyste DE")]), _vm._v(" "), _c("th", [_vm._v("Proposition Analyste HLD")]), _vm._v(" "), _c("th", [_vm._v("Durée (mois)")]), _vm._v(" "), _c("th", [_vm._v("Echéance/Durée tirage (en jour)")]), _vm._v(" "), _c("th", [_vm._v("Durée tirage (mois)")]), _vm._v(" "), _c("th", [_vm._v("Taux (%)")]), _vm._v(" "), _c("th", [_vm._v("Modalité de Renouvellement")]), _vm._v(" "), _c("th", [_vm._v("Suretés")]), _vm._v(" "), _c("th"), _vm._v(" "), _c("th", [[_c("button", {
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
  })], 1)]], 2)])]), _vm._v(" "), _c("tbody", [_vm._l(_vm.f8Manager.data.nouvelles_lignes_signature, function (nv_ligne_sign, i) {
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
      "class": {
        "already-exist": ["tb14064", "tb8"].includes(nv_ligne_sign === null || nv_ligne_sign === void 0 ? void 0 : nv_ligne_sign.tb)
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
        key: indexF + "4z_1",
        domProps: {
          value: filiale_afg
        }
      }, [_vm._v(_vm._s(filiale_afg) + "\n                                              ")]);
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
    }, [_vm._v("\n                                                          " + _vm._s(nv_ligne_sign.ligne_mixte) + " - " + _vm._s(_vm.getMixteIndex("nouvelles_lignes_signature", i)) + "\n                                                      ")])]), _vm._v(" "), _c("div", {
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
          var _el$text2;
          return (_el$text2 = el.text) === null || _el$text2 === void 0 || (_el$text2 = _el$text2.toLowerCase()) === null || _el$text2 === void 0 ? void 0 : _el$text2.includes(nv_ligne_sign.tag);
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
      }, [_vm._v(_vm._s(line.libelle) + "\n                                                  ")]);
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
        "already-exist": ["tb14064", "tb8"].includes(nv_ligne_sign === null || nv_ligne_sign === void 0 ? void 0 : nv_ligne_sign.tb)
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
    }, [[_c("option", {
      domProps: {
        value: "Nouveau"
      }
    }, [_vm._v("Nouveau")])]], 2)]), _vm._v(" "), _c("td", [_c("currency-input2", {
      attrs: {
        "default-typing": false,
        disabled: ""
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
      attrs: {
        "default-typing": false,
        disabled: ""
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
      attrs: {
        "default-typing": false,
        disabled: ""
      },
      on: {
        change: function change($event) {
          return _vm.f8Manager.computedTypeStatus("lignes_existantes_engagements_signatures", nv_ligne_sign, i, "nouvelles_lignes_signature");
        }
      },
      model: {
        value: nv_ligne_sign.proposition_analyste_de,
        callback: function callback($$v) {
          _vm.$set(nv_ligne_sign, "proposition_analyste_de", $$v);
        },
        expression: "nv_ligne_sign.proposition_analyste_de"
      }
    })], 1), _vm._v(" "), _c("td", [_c("currency-input2", {
      staticStyle: {
        width: "unset"
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
        value: nv_ligne_sign.proposition_analyste_hld,
        callback: function callback($$v) {
          _vm.$set(nv_ligne_sign, "proposition_analyste_hld", $$v);
        },
        expression: "nv_ligne_sign.proposition_analyste_hld"
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
        "already-exist": ["tb14064", "tb8"].includes(nv_ligne_sign === null || nv_ligne_sign === void 0 ? void 0 : nv_ligne_sign.tb)
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
        background: ["tb14064", "tb8"].includes(nv_ligne_sign === null || nv_ligne_sign === void 0 ? void 0 : nv_ligne_sign.tb) ? "background: #00ffff21" : "",
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
        "already-exist": ["tb14064", "tb8"].includes(nv_ligne_sign === null || nv_ligne_sign === void 0 ? void 0 : nv_ligne_sign.tb)
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
            "class": {
              "already-exist": ["tb14064", "tb8"].includes(nv_ligne_sign === null || nv_ligne_sign === void 0 ? void 0 : nv_ligne_sign.tb)
            },
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
    })])]), _vm._v(" "), _c("td", {
      attrs: {
        colspan: "10"
      }
    }, [[_c("button", {
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
    })], 1)]], 2)]);
  }), _vm._v(" "), _vm.aDesLigneExistanteSignature ? _c("tr", [_vm._m(5)]) : _vm._e(), _vm._v(" "), _c("tr", [_vm._m(6), _vm._v(" "), _c("td", [_c("currency-input2", {
    staticClass: "form-control",
    attrs: {
      "default-typing": false,
      disabled: "",
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
      disabled: "",
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
      disabled: "",
      readonly: ""
    },
    model: {
      value: _vm.f8Manager.data.st_signature_nouvelles_lignes_proposition_ana_de,
      callback: function callback($$v) {
        _vm.$set(_vm.f8Manager.data, "st_signature_nouvelles_lignes_proposition_ana_de", $$v);
      },
      expression: "f8Manager.data.st_signature_nouvelles_lignes_proposition_ana_de"
    }
  })], 1), _vm._v(" "), _c("td", [_c("currency-input2", {
    staticClass: "form-control",
    attrs: {
      "default-typing": false,
      disabled: "",
      readonly: ""
    },
    model: {
      value: _vm.f8Manager.data.st_signature_nouvelles_lignes_proposition_ana_hld,
      callback: function callback($$v) {
        _vm.$set(_vm.f8Manager.data, "st_signature_nouvelles_lignes_proposition_ana_hld", $$v);
      },
      expression: "f8Manager.data.st_signature_nouvelles_lignes_proposition_ana_hld"
    }
  })], 1)]), _vm._v(" "), _c("tr", [_vm._m(7), _vm._v(" "), _c("td", [_c("currency-input2", {
    staticClass: "form-control",
    staticStyle: {
      background: "#34495e",
      color: "#fff"
    },
    attrs: {
      "default-typing": false,
      disabled: "",
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
      disabled: "",
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
      disabled: "",
      readonly: ""
    },
    model: {
      value: _vm.f8Manager.data.total_nouvelles_lignes_proposition_ana_de,
      callback: function callback($$v) {
        _vm.$set(_vm.f8Manager.data, "total_nouvelles_lignes_proposition_ana_de", $$v);
      },
      expression: "f8Manager.data.total_nouvelles_lignes_proposition_ana_de"
    }
  })], 1), _vm._v(" "), _c("td", [_c("currency-input2", {
    staticClass: "form-control",
    staticStyle: {
      background: "#34495e",
      color: "#fff"
    },
    attrs: {
      "default-typing": false,
      disabled: "",
      readonly: ""
    },
    model: {
      value: _vm.f8Manager.data.total_nouvelles_lignes_proposition_ana_hld,
      callback: function callback($$v) {
        _vm.$set(_vm.f8Manager.data, "total_nouvelles_lignes_proposition_ana_hld", $$v);
      },
      expression: "f8Manager.data.total_nouvelles_lignes_proposition_ana_hld"
    }
  })], 1)])], 2)])])]), _vm._v(" "), _c("div", {
    staticClass: "card-body px-0"
  }, [_c("label", {
    staticClass: "font-weight-bold"
  }, [_vm._v("Commentaire sur les concours sollicités")]), _vm._v(" "), _c("vue-editor", {
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
    staticClass: "card-body px-0"
  }, [_vm._m(8), _vm._v(" "), _c("vue-editor", {
    attrs: {
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
  }, [_vm._m(9), _vm._v(" "), _c("vue-editor", {
    attrs: {
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
  })], 1)])]) : _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen5 = !_vm.seen5;
      }
    }
  }, [_c("h6", {
    attrs: {
      id: "bref-rappel-des-relations-du-client-avec-la-afg-banque-ci"
    }
  }, [_vm._v("\n                  Proposition de concours / Facilité après analyse (Holding)\n                  "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)])])]), _vm._v(" "), _c("div", {
    staticClass: "mt-5"
  }, [_c("button", {
    staticClass: "btn shadow-md text-white position-absolute",
    staticStyle: {
      right: "32px",
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
  }, [_vm._v("\n              Fermer le tableau\n            ")])])])])]) : _c("div", {
    staticClass: "card card-width-height"
  }, [_c("br"), _vm._v(" "), _c("div", {
    staticClass: "card-header hdc pb-0"
  }, [_c("h3", {
    staticClass: "head",
    attrs: {
      id: "f2-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n              " + _vm._s(_vm.tb_display_name) + " : Présentation de la demande\n            ")]), _vm._v(" "), _c("div", {
    staticClass: "col-auto"
  }, [((_vm$formDataToBeWatch2 = _vm.formDataToBeWatched.notes) === null || _vm$formDataToBeWatch2 === void 0 ? void 0 : _vm$formDataToBeWatch2.length) > 0 ? _c("div", {
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
  }, [_c("span", [_vm._v("\n                      " + _vm._s(_vm.formDataToBeWatched.notes.length) + "\n                    ")])])])]) : _vm._e(), _vm._v(" "), _c("airplay-icon", {
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
        return _vm.$modal.show("presentation_demande");
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
        return _vm.retract();
      }
    }
  })], 1)])])])])], 1), _vm._v(" "), _c("modal", {
    attrs: {
      name: "presentation_demande",
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
      notes: _vm.formDataToBeWatched.notes
    },
    on: {
      close: function close($event) {
        return _vm.$modal.hide(_vm.tb_name);
      },
      addNote: function addNote($event) {
        return _vm.formDataToBeWatched.notes.unshift($event);
      }
    },
    model: {
      value: _vm.formDataToBeWatched.notes,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "notes", $$v);
      },
      expression: "formDataToBeWatched.notes"
    }
  })], 1);
};
var staticRenderFns = [function () {
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
  return _c("td", {
    attrs: {
      colspan: "14"
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
      colspan: "14"
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
  }, [_vm._v("générales")]), _vm._v(" détenues des nouvelles lignes")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "font-weight-bold"
  }, [_vm._v("Commentaire sur les garanties "), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("spécifiques")]), _vm._v(" détenues des nouvelles lignes")]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/note_technique_corporate/NT-HDC1.vue?vue&type=style&index=0&id=6f886143&scoped=true&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/note_technique_corporate/NT-HDC1.vue?vue&type=style&index=0&id=6f886143&scoped=true&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n*[data-v-6f886143] {\r\n  font-family: \"Google sans\";\n}\nlabel[data-v-6f886143] {\r\n  height: 10px;\r\n  font-size: 13px;\n}\nth[data-v-6f886143] {\r\n  font-size: 12px;\n}\ntd[data-v-6f886143] {\r\n  padding: 5px;\r\n  font-size: 13px;\n}\ninput[data-v-6f886143],\r\nselect[data-v-6f886143],\r\ntextarea[data-v-6f886143] {\r\n  height: 35px;\r\n  border-color: #34495e;\r\n  color: #57606f;\r\n  font-size: 13px;\r\n  font-weight: bold;\r\n  min-width: 150px;\n}\ninput[type=\"checkbox\"][data-v-6f886143] {\r\n  height: 18px;\r\n  width: 20px;\r\n  margin-right: 5px;\n}\ninput[type=\"checkbox\"].bg-blue[data-v-6f886143]:checked {\r\n  background-color: #0d6efd !important;\n}\n.card-width-height[data-v-6f886143] {\r\n  width: 100%;\r\n  height: 100%;\n}\n.head[data-v-6f886143] {\r\n  color: #f1f2f6;\r\n  font-size: 22px;\n}\n.hdc[data-v-6f886143] {\r\n  background-color: #57606f;\n}\n.relook-header[data-v-6f886143] {\r\n  color: #000;\r\n  background-color: #f4f3f3;\r\n  padding: 5px;\r\n  border-bottom: 1px solid #b6b8bb;\n}\n.relook-header-sb[data-v-6f886143] {\r\n  color: #fff;\r\n  background-color: #736372;\r\n  padding: 5px;\r\n  border-bottom: 1px solid #b6b8bb;\n}\n.badge-sm[data-v-6f886143] {\r\n  display: inline-block;\r\n  width: 15px;\r\n  height: 15px;\r\n  background: rgba(255, 0, 0, 0.882);\r\n  color: white;\r\n  font-size: 12px;\r\n  font-weight: 500;\r\n  border-radius: 100%;\r\n  position: absolute;\r\n  top: -20%;\r\n  left: 55%;\r\n  text-align: center;\n}\n.checked[data-v-6f886143] {\r\n  width: 19px;\r\n  height: 19px;\n}\n.bg-blue[data-v-6f886143] {\r\n  background-color: #00ffff21 !important;\n}\n.bg-relooker[data-v-6f886143] {\r\n  background-color: #2c3e50;\r\n  color: white;\n}\n.image1[data-v-6f886143] {\r\n  background: url(\"/images/capture/exemples/description_et_justification_des_lignes.png\") no-repeat;\r\n  background-position: center;\r\n  background-size: contain;\r\n  width: 500px;\r\n  height: 300px;\n}\r\n\r\n/* Sticky columns for tables */\n.table-container[data-v-6f886143] {\r\n  overflow-x: auto;\r\n  max-width: 100%;\r\n  width: 100%;\n}\ntable[data-v-6f886143] {\r\n  width: 100%;\r\n  border-collapse: collapse;\n}\n#col-sticky-1[data-v-6f886143],\r\n.col-sticky-1[data-v-6f886143] {\r\n  position: sticky;\r\n  left: 0;\r\n  background-color: #f0f0f0;\r\n  z-index: 2;\n}\n#col-sticky-2[data-v-6f886143],\r\n.col-sticky-2[data-v-6f886143] {\r\n  position: sticky;\r\n  background-color: #f0f0f0;\r\n  z-index: 1;\n}\n.wide-column[data-v-6f886143] {\r\n  min-width: 300px;\r\n  word-wrap: break-word;\n}\n.centered-input[data-v-6f886143] {\r\n  vertical-align: middle;\r\n  display: table-cell;\r\n  padding: 8px;\n}\n.centered-input input[data-v-6f886143] {\r\n  margin: 0 auto;\r\n  display: block;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/note_technique_corporate/NT-HDC1.vue?vue&type=style&index=0&id=6f886143&scoped=true&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/note_technique_corporate/NT-HDC1.vue?vue&type=style&index=0&id=6f886143&scoped=true&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NT_HDC1_vue_vue_type_style_index_0_id_6f886143_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NT-HDC1.vue?vue&type=style&index=0&id=6f886143&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/note_technique_corporate/NT-HDC1.vue?vue&type=style&index=0&id=6f886143&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NT_HDC1_vue_vue_type_style_index_0_id_6f886143_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NT_HDC1_vue_vue_type_style_index_0_id_6f886143_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/forms/afg/note_technique_corporate/NT-HDC1.vue":
/*!********************************************************************************!*\
  !*** ./resources/js/components/forms/afg/note_technique_corporate/NT-HDC1.vue ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NT_HDC1_vue_vue_type_template_id_6f886143_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NT-HDC1.vue?vue&type=template&id=6f886143&scoped=true */ "./resources/js/components/forms/afg/note_technique_corporate/NT-HDC1.vue?vue&type=template&id=6f886143&scoped=true");
/* harmony import */ var _NT_HDC1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NT-HDC1.vue?vue&type=script&lang=js */ "./resources/js/components/forms/afg/note_technique_corporate/NT-HDC1.vue?vue&type=script&lang=js");
/* harmony import */ var _NT_HDC1_vue_vue_type_style_index_0_id_6f886143_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NT-HDC1.vue?vue&type=style&index=0&id=6f886143&scoped=true&lang=css */ "./resources/js/components/forms/afg/note_technique_corporate/NT-HDC1.vue?vue&type=style&index=0&id=6f886143&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _NT_HDC1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _NT_HDC1_vue_vue_type_template_id_6f886143_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _NT_HDC1_vue_vue_type_template_id_6f886143_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "6f886143",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/forms/afg/note_technique_corporate/NT-HDC1.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/forms/afg/note_technique_corporate/NT-HDC1.vue?vue&type=script&lang=js":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/note_technique_corporate/NT-HDC1.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NT_HDC1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NT-HDC1.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/note_technique_corporate/NT-HDC1.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NT_HDC1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/forms/afg/note_technique_corporate/NT-HDC1.vue?vue&type=style&index=0&id=6f886143&scoped=true&lang=css":
/*!****************************************************************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/note_technique_corporate/NT-HDC1.vue?vue&type=style&index=0&id=6f886143&scoped=true&lang=css ***!
  \****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NT_HDC1_vue_vue_type_style_index_0_id_6f886143_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NT-HDC1.vue?vue&type=style&index=0&id=6f886143&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/note_technique_corporate/NT-HDC1.vue?vue&type=style&index=0&id=6f886143&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/forms/afg/note_technique_corporate/NT-HDC1.vue?vue&type=template&id=6f886143&scoped=true":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/note_technique_corporate/NT-HDC1.vue?vue&type=template&id=6f886143&scoped=true ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NT_HDC1_vue_vue_type_template_id_6f886143_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NT_HDC1_vue_vue_type_template_id_6f886143_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NT_HDC1_vue_vue_type_template_id_6f886143_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NT-HDC1.vue?vue&type=template&id=6f886143&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/note_technique_corporate/NT-HDC1.vue?vue&type=template&id=6f886143&scoped=true");


/***/ })

}]);