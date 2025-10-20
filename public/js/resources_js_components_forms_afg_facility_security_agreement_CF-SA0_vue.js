"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_forms_afg_facility_security_agreement_CF-SA0_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/facility_security_agreement/CF-SA0.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/facility_security_agreement/CF-SA0.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/ContextMenu */ "./resources/js/components/shared/ContextMenu.vue");
/* harmony import */ var _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/ContextMenuItem */ "./resources/js/components/shared/ContextMenuItem.vue");
/* harmony import */ var _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vueform/multiselect/dist/multiselect.vue2 */ "./node_modules/@vueform/multiselect/dist/multiselect.vue2.js");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/auth.service */ "./resources/js/services/auth.service.js");
/* harmony import */ var _services_credit_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/credit.service */ "./resources/js/services/credit.service.js");
/* harmony import */ var _johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @johmun/vue-tags-input */ "./node_modules/@johmun/vue-tags-input/dist/vue-tags-input.js");
/* harmony import */ var _johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _helpers_indexedDB__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../helpers/indexedDB */ "./resources/js/helpers/indexedDB.js");
/* harmony import */ var _helpers_indexedDB__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_helpers_indexedDB__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _services_proxy_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../services/proxy.service */ "./resources/js/services/proxy.service.js");
/* harmony import */ var _services_connects_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../services/connects.service */ "./resources/js/services/connects.service.js");
/* harmony import */ var _services_afg_f8_constants_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../services/afg/f8-constants.js */ "./resources/js/services/afg/f8-constants.js");
/* harmony import */ var _services_afg_f8_data_extractor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../services/afg/f8-data-extractor */ "./resources/js/services/afg/f8-data-extractor.js");
/* provided dependency */ var process = __webpack_require__(/*! process/browser.js */ "./node_modules/process/browser.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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









// import helper from "../../../../../helpers/helper";

// ? IndexedDB helper for formDataToBeWatched Cache management






/**
 * Cache Management variables
 */
var indexedDBName = "CREDITFLOW_TABLES";
var collectionName = "TABLES";
var documentName = "T";
var documentId = null;
var _cache,
  _lastSaveTime = null,
  _onlineSaveIntervalTimeInSeconds = 30;
var _DEBUG = process.env.MIX_APP_DEBUG;
var _cacheAutosaveInterval = null;
var _timeSpentInSeconds = 0;
// -- End Cache Management variables

window.$ = window.jQuery = __webpack_require__(/*! jquery/dist/jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "FacilitySecurityAgreement",
  display: "FacilitySecurityAgreement",
  components: {
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_12__.PlusIcon,
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_12__.TrashIcon,
    MoreVerticalIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_12__.MoreVerticalIcon,
    ChevronUpIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_12__.ChevronUpIcon,
    ChevronDownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_12__.ChevronDownIcon,
    ContextMenu: _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_0__["default"],
    ContextMenuItem: _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_1__["default"],
    Multiselect: _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_2__["default"],
    VueTagsInput: (_johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_6___default())
  },
  props: {
    meta_data: Object,
    tb_name: String,
    tb_display_name: String
  },
  created: function created() {},
  mounted: function mounted() {
    var _this = this,
      _this$meta_data$dossi;
    this.loadRetrieved();
    this.loadTbAttrs();
    this.checkAllSent();
    EventBus.$on("created-extra-file-template", function (data) {
      _this.conventions.forEach(function (element, index) {
        var _data$template, _data$template5;
        var template_name = "Actes et Garanties non signés -credit_facility_security_agreement_non_signe" + index + "_" + _this.$route.params.templateId;
        var template_name_signe = "Actes et Garanties signés -credit_facility_security_agreement_signe" + index + "_" + _this.$route.params.templateId;
        if (template_name == (data === null || data === void 0 || (_data$template = data.template) === null || _data$template === void 0 ? void 0 : _data$template.name)) {
          var _data$template2, _data$template3, _data$template4;
          _this.conventions[index]["template"] = {
            id: data === null || data === void 0 || (_data$template2 = data.template) === null || _data$template2 === void 0 ? void 0 : _data$template2.id,
            name: data === null || data === void 0 || (_data$template3 = data.template) === null || _data$template3 === void 0 ? void 0 : _data$template3.name,
            slug: data === null || data === void 0 || (_data$template4 = data.template) === null || _data$template4 === void 0 ? void 0 : _data$template4.slug
          };
          _this.handleInput();
        }
        if (template_name_signe == (data === null || data === void 0 || (_data$template5 = data.template) === null || _data$template5 === void 0 ? void 0 : _data$template5.name)) {
          var _data$template6, _data$template7, _data$template8;
          _this.conventions[index]["template_signes"] = {
            id: data === null || data === void 0 || (_data$template6 = data.template) === null || _data$template6 === void 0 ? void 0 : _data$template6.id,
            name: data === null || data === void 0 || (_data$template7 = data.template) === null || _data$template7 === void 0 ? void 0 : _data$template7.name,
            slug: data === null || data === void 0 || (_data$template8 = data.template) === null || _data$template8 === void 0 ? void 0 : _data$template8.slug
          };
          _this.handleInput();
        }
      });
    });
    EventBus.$on("updated-extra-file-upload", function (data) {
      _this.getFiles();
    });
    EventBus.$on('facilites-updated', function (data) {
      _this.ligne_sollicites = data.facilites_sollicitees;
    });
    this.ligne_sollicites = (_this$meta_data$dossi = this.meta_data["dossier_credit"]["cred_pub_tb_120004"]) === null || _this$meta_data$dossi === void 0 ? void 0 : _this$meta_data$dossi.facilites_sollicitees;
    this.getFiles();
    this.getEnvoieContratFiles();
    this.getAllNewLines();
  },
  computed: {
    cligneAutoComplete2: function cligneAutoComplete2() {
      var _this$newLines;
      return (_this$newLines = this.newLines) === null || _this$newLines === void 0 ? void 0 : _this$newLines.map(function (el) {
        return {
          text: el === null || el === void 0 ? void 0 : el.libelle
        };
      });
    },
    isUserAG_DAJ: function isUserAG_DAJ() {
      var _this$authcheckUsr;
      return this.disablBtnSignRoles.includes((_this$authcheckUsr = this.authcheckUsr) === null || _this$authcheckUsr === void 0 ? void 0 : _this$authcheckUsr.role_uuid);
    }
  },
  data: function data() {
    var vm = this;
    return {
      connectsHost: _services_connects_service__WEBPACK_IMPORTED_MODULE_9__["default"].loadablehost(),
      ebapisHost: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_3__["default"].host,
      authcheck: false,
      authcheckUsr: null,
      authcheckStatus: null,
      seen: true,
      listingNote: false,
      isSeenState: {
        conventions: true
      },
      sendRequest: false,
      disableTable: false,
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
      meta_parseable: {
        cred_pub_key: this.meta_data["cred_pub_key"],
        tb_name: this.tb_name
      },
      formDataToBeWatched: {
        conventions: []
      },
      conventions: [{
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_13__["default"])(),
        type_facilite: "",
        autre_type_facilite: "",
        libelle: "",
        commentaire: "",
        template_signes: "",
        template: "",
        files: 0,
        files_signes: 0,
        is_send: false,
        selectedIndex: null,
        convention_tags: [],
        type_contrat: ""
      }],
      is_notify: false,
      file_data_list: [],
      file_data_list_signe: [],
      showBtnDownload: false,
      showAllFiles: [],
      showMoreNumber: 2,
      MAX_NAME_LENGTH: 10,
      SHORT_NAME_SEPARATOR: '...',
      isButtonDisabled: false,
      allSent: false,
      ligne_sollicites: null,
      showBtnDownloadSigne: false,
      tags: {
        0: []
      },
      tag: {
        0: ""
      },
      concoursFacilityItems: _services_afg_f8_constants_js__WEBPACK_IMPORTED_MODULE_10__["default"],
      f8Data: null,
      newLines: [],
      disablBtnSignRoles: ['WUBaT1LB5GbXzr9ru2D3'],
      list_contratypes: ["Contrat de ligne de crédit", "Contrat de garantie", "Contrat de cautionnement", "Lettre de confort (si applicable)", "Convention de compte", "Contrats spécifiques selon le type de crédit", "Annexes et conditions particulières", "Autre"],
      spinContratNonSigne: false
    };
  },
  methods: {
    cligneAutoComplete: function cligneAutoComplete(objectString) {
      var _this$objectString;
      return (_this$objectString = this[objectString]) === null || _this$objectString === void 0 ? void 0 : _this$objectString.map(function (el) {
        return {
          text: el === null || el === void 0 ? void 0 : el.libelle
        };
      });
    },
    getAllNewLines: function getAllNewLines() {
      var _this$meta_data;
      var cred_pub_tb_8 = (_this$meta_data = this.meta_data) === null || _this$meta_data === void 0 || (_this$meta_data = _this$meta_data.dossier_credit) === null || _this$meta_data === void 0 ? void 0 : _this$meta_data.cred_pub_tb_8;
      var newLinesCombine = [].concat(_toConsumableArray(cred_pub_tb_8 === null || cred_pub_tb_8 === void 0 ? void 0 : cred_pub_tb_8.nouvelles_lignes_caisse), _toConsumableArray(cred_pub_tb_8 === null || cred_pub_tb_8 === void 0 ? void 0 : cred_pub_tb_8.nouvelles_lignes_signature));
      this.newLines = newLinesCombine.filter(function (line) {
        return (line === null || line === void 0 ? void 0 : line.hasOwnProperty('ligne')) && ![null, '', undefined].includes(line.ligne);
      }).map(function (line) {
        return {
          libelle: line.ligne
        };
      }).filter(function (item, index, self) {
        return index === self.findIndex(function (obj) {
          return obj.libelle === item.libelle;
        });
      });
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
        id: "dajc-red0-head"
      };
      this.$emit("load-buffer", p);
    },
    sedOrOpened: function sedOrOpened() {
      this.seen = this.fetchClosedTables(this.tb_name + this.meta_data["cred_pub_key"]);
    },
    openNotesModal: function openNotesModal() {
      var listing = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.listingNote = listing;
      this.$modal.show(this.tb_name);
    },
    loadRetrieved: function loadRetrieved() {
      var _this2 = this;
      var lentb = this.meta_data["dossier_credit"]["tbs_in_use"];
      var createdKey = this.tb_name;
      var createdKeyArr = createdKey.split("tb");
      createdKey = "cred_pub_tb_" + createdKeyArr[1];
      if (this.meta_data["dossier_credit"][createdKey] == undefined) {
        var _this$conventions;
        // permet de precharger la liste facilites a la line pour index 0
        if (((_this$conventions = this.conventions) === null || _this$conventions === void 0 ? void 0 : _this$conventions.length) == 1) {
          this.prechargedColConcoursFacilites(0);
          this.conventions[0]['convention_tags'] = this.tags[0];
          this.formDataToBeWatched["conventions"] = this.conventions;
        }
      }

      // this.defaultRetract(false, this.meta_data["dossier_credit"]?.applied_templ_id);

      if (lentb.length > 0) {
        if (this.meta_data["dossier_credit"][createdKey] != undefined) {
          var _this$meta_data$dossi2, _this$meta_data$dossi3;
          this.formDataToBeWatched = this.meta_data["dossier_credit"][createdKey];
          if (((_this$meta_data$dossi2 = this.meta_data["dossier_credit"][createdKey]) === null || _this$meta_data$dossi2 === void 0 ? void 0 : _this$meta_data$dossi2.conventions) != undefined) {
            this.conventions = this.meta_data["dossier_credit"][createdKey]["conventions"];
          }
          if (this.conventions) {
            this.conventions.forEach(function (convention, index) {
              _this2.tags[index] = convention.convention_tags;
            });
          }
          if (((_this$meta_data$dossi3 = this.meta_data["dossier_credit"][createdKey]) === null || _this$meta_data$dossi3 === void 0 ? void 0 : _this$meta_data$dossi3.contrats_signes) != undefined) {
            var _this$meta_data$dossi4;
            var contrats_signes = (_this$meta_data$dossi4 = this.meta_data["dossier_credit"][createdKey]) === null || _this$meta_data$dossi4 === void 0 ? void 0 : _this$meta_data$dossi4.contrats_signes;
            contrats_signes.forEach(function (contrat_signe) {
              var convention = _this2.conventions.find(function (convention) {
                return convention.id === contrat_signe.contrats_id;
              });
              if (convention && contrat_signe.files <= 0) {
                convention.is_send = false;
              }
            });
          }
        }
      }
    },
    // AJOUTER
    launchAutoSaver: function launchAutoSaver() {
      var _this3 = this;
      _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["default"].loadUserData().then(function (res) {
        _this3.send2Backend(res, 0, 0);
      })["catch"](function (err) {
        _this3.loadWithError(err);
      });
    },
    retract: function retract() {
      this.seen = !this.seen;
      var a = {
        tb_name: this.tb_name + this.meta_data["cred_pub_key"],
        status: this.seen
      };
      EventBus.$emit("savedclosed-table", a);
    },
    // add defaultRetract
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
    loadWithError: function loadWithError(err) {
      // // window.location.href = "/login";
    },
    send2Backend: function send2Backend(res, newVal, oldVal) {
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
    handleInput: function handleInput(evt, idx) {
      var _this4 = this;
      this.conventions.forEach(function (convention) {
        if (![null, undefined, ''].includes(idx)) {
          _this4.conventions[idx]['convention_tags'] = _this4.tags[idx];
        }
        if (convention.selectedIndex !== null) {
          var _this4$ligne_sollicit;
          convention.type_facilite = ((_this4$ligne_sollicit = _this4.ligne_sollicites[convention.selectedIndex]) === null || _this4$ligne_sollicit === void 0 ? void 0 : _this4$ligne_sollicit.type_facilite) || '';
        }
      });
      this.formDataToBeWatched["conventions"] = this.conventions;
      this.validateEnvoieContrats();
      this.checkAllSent();
    },
    deleteTB: function deleteTB() {
      if (confirm("Êtes-vous sûr de vouloir supprimer ce tableau ?")) {
        this.$emit("delete-tb", {
          tb_name: this.tb_name
        });
      }
    },
    toggleIsSeen: function toggleIsSeen(key) {
      var _ref;
      var val = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var data = _objectSpread({}, this.isSeenState);
      val = (_ref = val !== null && val !== void 0 ? val : data[key]) !== null && _ref !== void 0 ? _ref : false;
      data[key] = !val;
      this.isSeenState = data;
    },
    addMore1: function addMore1() {
      var _this$conventions2;
      this.conventions.push({
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_13__["default"])(),
        type_facilite: "",
        autre_type_facilite: "",
        libelle: "",
        commentaire: "",
        template_signes: "",
        template: "",
        file: 0,
        files_signes: 0,
        is_send: false,
        selectedIndex: null,
        convention_tags: [],
        type_contrat: ""
      });

      // permet de precharger la liste facilites a chaq new line
      var index = ((_this$conventions2 = this.conventions) === null || _this$conventions2 === void 0 ? void 0 : _this$conventions2.length) - 1;
      this.tags[index] = [];
      this.prechargedColConcoursFacilites(index);
      this.handleInput(null, index);
    },
    remove1: function remove1(index) {
      this.conventions.splice(index, 1);
      this.handleInput();
    },
    beforeUpload: function beforeUpload(index, obj) {
      if (!index) return false;
    },
    handleDoubleClickOrClick: function handleDoubleClickOrClick(index) {
      var _this$conventions$ind,
        _this$conventions$ind2,
        _this5 = this;
      if ([null, '', undefined, 'type_contrat'].includes((_this$conventions$ind = this.conventions[index]) === null || _this$conventions$ind === void 0 ? void 0 : _this$conventions$ind.type_contrat)) {
        this.$toasted.show("Assurez-vous d'avoir selectionn\xE9 le Veuillez le type de contrat \xE0 la line ".concat(index + 1), {
          duration: 8000
        });
        return;
      }
      EventBus.$emit("open-extra-file-explorer");
      var numeroPiece = ((_this$conventions$ind2 = this.conventions[index]) === null || _this$conventions$ind2 === void 0 || (_this$conventions$ind2 = _this$conventions$ind2.nom) === null || _this$conventions$ind2 === void 0 ? void 0 : _this$conventions$ind2.trim()) || "";
      var result = numeroPiece;
      setTimeout(function () {
        EventBus.$emit("data-extra-file-explorer", {
          name: "Actes et Garanties non signés {(*)}credit_facility_security_agreement_non_signe" + index + "_" + _this5.$route.params.templateId,
          is_auto: false
        });
      }, 500);
    },
    handleDoubleClickOrClickSigne: function handleDoubleClickOrClickSigne(index) {
      var _this$conventions$ind3,
        _this$conventions$ind4,
        _this6 = this;
      if ([null, '', undefined, 'type_contrat'].includes((_this$conventions$ind3 = this.conventions[index]) === null || _this$conventions$ind3 === void 0 ? void 0 : _this$conventions$ind3.type_contrat)) {
        this.$toasted.show("Assurez-vous d'avoir selectionn\xE9 le Veuillez le type de contrat \xE0 la line ".concat(index + 1), {
          duration: 8000
        });
        return;
      }
      EventBus.$emit("open-extra-file-explorer");
      var numeroPiece = ((_this$conventions$ind4 = this.conventions[index]) === null || _this$conventions$ind4 === void 0 || (_this$conventions$ind4 = _this$conventions$ind4.nom) === null || _this$conventions$ind4 === void 0 ? void 0 : _this$conventions$ind4.trim()) || "";
      var result = numeroPiece;
      setTimeout(function () {
        EventBus.$emit("data-extra-file-explorer", {
          name: "Actes et Garanties signés {(*)}credit_facility_security_agreement_signe" + index + "_" + _this6.$route.params.templateId,
          is_auto: false
        });
      }, 500);
    },
    getFiles: function getFiles() {
      var _this7 = this;
      _services_proxy_service__WEBPACK_IMPORTED_MODULE_8__["default"].proxyEbapis({
        url: this.connectsHost + "api/get-files",
        method: "POST",
        data: {
          file_identity: this.meta_data["dossier_credit"].cred_pub_key
        }
      }).then(function (res) {
        var _res$data$data, _res$data$data2;
        res.data = JSON.parse(res.data);
        if (((_res$data$data = res.data.data) === null || _res$data$data === void 0 ? void 0 : _res$data$data.length) > 0 || ((_res$data$data2 = res.data.data) === null || _res$data$data2 === void 0 ? void 0 : _res$data$data2.length) != null) {
          _this7.files = res.data.data;
          _this7.conventions.forEach(function (element, index) {
            var count = 0;
            var count_signe = 0;
            _this7.files.forEach(function (file) {
              var _element$template, _element$template_sig;
              if ((file === null || file === void 0 ? void 0 : file.extra_file_template_id) != null && (element === null || element === void 0 || (_element$template = element.template) === null || _element$template === void 0 ? void 0 : _element$template.id) == (file === null || file === void 0 ? void 0 : file.extra_file_template_id)) {
                count++;
              }
              if ((file === null || file === void 0 ? void 0 : file.extra_file_template_id) != null && (element === null || element === void 0 || (_element$template_sig = element.template_signes) === null || _element$template_sig === void 0 ? void 0 : _element$template_sig.id) == (file === null || file === void 0 ? void 0 : file.extra_file_template_id)) {
                count_signe++;
              }
            });
            _this7.conventions[index]["files"] = count;
            _this7.conventions[index]["files_signes"] = count_signe;

            // Nouvelle logique : si files_signes > 1, définir statut à "signe"
            if (_this7.conventions[index]["files_signes"] >= 1) {
              _this7.conventions[index]["statut"] = "signe";
            }
            _this7.handleInput();
            _this7.getEnvoieContratFiles();
          });
        }
      })["catch"](function (err) {
        console.error(err);
      });
    },
    getEnvoieContratFiles: function getEnvoieContratFiles() {
      var _this8 = this;
      _services_proxy_service__WEBPACK_IMPORTED_MODULE_8__["default"].proxyEbapis({
        url: this.connectsHost + "api/get-files",
        method: "POST",
        data: {
          file_identity: this.meta_data["dossier_credit"].cred_pub_key
        }
      }).then(function (res) {
        var _res$data$data3, _res$data$data4;
        res.data = JSON.parse(res.data);
        _this8.file_data_list = [];
        _this8.file_data_list_signe = [];
        if (((_res$data$data3 = res.data.data) === null || _res$data$data3 === void 0 ? void 0 : _res$data$data3.length) > 0 || ((_res$data$data4 = res.data.data) === null || _res$data$data4 === void 0 ? void 0 : _res$data$data4.length) != null) {
          _this8.files = res.data.data;
          _this8.conventions.forEach(function (element, index) {
            var fileData = [];
            var fileDataSigne = [];
            _this8.files.forEach(function (file) {
              var _element$template2, _element$template_sig2;
              if ((file === null || file === void 0 ? void 0 : file.extra_file_template_id) != null && (element === null || element === void 0 || (_element$template2 = element.template) === null || _element$template2 === void 0 ? void 0 : _element$template2.id) == (file === null || file === void 0 ? void 0 : file.extra_file_template_id)) {
                // fileData.push(file.file_url);
                fileData.push({
                  file_id: file === null || file === void 0 ? void 0 : file.id,
                  file_name: "".concat((file === null || file === void 0 ? void 0 : file.file_name) + '.' + (file === null || file === void 0 ? void 0 : file.file_ext)),
                  file_url: file === null || file === void 0 ? void 0 : file.file_url,
                  file_ext: file === null || file === void 0 ? void 0 : file.file_ext
                });
              }
              if ((file === null || file === void 0 ? void 0 : file.extra_file_template_id) != null && (element === null || element === void 0 || (_element$template_sig2 = element.template_signes) === null || _element$template_sig2 === void 0 ? void 0 : _element$template_sig2.id) == (file === null || file === void 0 ? void 0 : file.extra_file_template_id)) {
                // fileData.push(file.file_url);
                fileDataSigne.push({
                  file_id: file === null || file === void 0 ? void 0 : file.id,
                  file_name: "".concat((file === null || file === void 0 ? void 0 : file.file_name) + '.' + (file === null || file === void 0 ? void 0 : file.file_ext)),
                  file_url: file === null || file === void 0 ? void 0 : file.file_url,
                  file_ext: file === null || file === void 0 ? void 0 : file.file_ext
                });
              }
            });
            _this8.file_data_list.push(fileData);
            _this8.showAllFiles = Array(_this8.file_data_list.length).fill(false);
            _this8.showBtnDownload = true;
            _this8.file_data_list_signe.push(fileDataSigne);
            _this8.showAllFilesSigne = Array(_this8.file_data_list_signe.length).fill(false);
            _this8.showBtnDownloadSigne = true;
          });
        }
      })["catch"](function (err) {
        console.error(err);
      });
    },
    updateAllList: function updateAllList() {
      this.conventions.forEach(function (element) {
        element.is_send = true;
      }), this.handleInput();
    },
    getIcon: function getIcon(extension) {
      var icon = '';
      switch (extension === null || extension === void 0 ? void 0 : extension.toLowerCase()) {
        case 'png':
        case 'webp':
        case 'jpg':
        case 'jpeg':
          icon = 'icofont-file-jpg text-purple';
          break;
        case 'xls':
        case 'xlsx':
          icon = 'icofont-file-spreadsheet text-success';
          break;
        case 'pdf':
          icon = 'icofont-file-pdf text-danger';
          break;
        case 'doc':
        case 'docx':
          icon = 'icofont-file-word text-primary';
          break;
        case 'ppt':
        case 'pptx':
          icon = 'icofont-file-powerpoint text-warning';
          break;
        default:
          icon = '';
      }
      return icon;
    },
    downloadFile: function downloadFile(index, fileIndex) {
      var file = this.file_data_list[index][fileIndex];
      var url = window.location.origin + '/file?f=' + encodeURIComponent(file.file_url);
      window.open(url, '_blank');
    },
    downloadFileSinge: function downloadFileSinge(index, fileIndex) {
      var file = this.file_data_list_signe[index][fileIndex];
      var url = window.location.origin + '/file?f=' + encodeURIComponent(file.file_url);
      window.open(url, '_blank');
    },
    deleteFile: function deleteFile(data, index, signe) {
      var _this9 = this;
      var headers = {
        'Content-Type': 'multipart/form-data'
      };
      _services_proxy_service__WEBPACK_IMPORTED_MODULE_8__["default"].proxyEbapis({
        url: this.connectsHost + 'api/delete-file',
        method: 'POST',
        data: data
      }).then(function (res) {
        res.data = JSON.parse(res.data);
        _this9.$toasted.show(res.data.message);
        _this9.getFiles();
        if (signe) {
          _this9.formDataToBeWatched["conventions"][index]["files_signes"] -= 1;
          _this9.formDataToBeWatched["conventions"][index]["template_signes"] = null;
        } else {
          _this9.formDataToBeWatched["conventions"][index]["files"] -= 1;
          _this9.formDataToBeWatched["conventions"][index]["template"] = null;
        }
      })["catch"](function (err) {
        console.error(err);
      });
    },
    formatFileName: function formatFileName(name) {
      return this.isFileNameTooLong(name) ? this.shortenFileName(name) : name;
    },
    shortenFileName: function shortenFileName(name) {
      return (name === null || name === void 0 ? void 0 : name.substring(0, Math.floor(this.MAX_NAME_LENGTH / 2))) + this.SHORT_NAME_SEPARATOR + (name === null || name === void 0 ? void 0 : name.substring((name === null || name === void 0 ? void 0 : name.length) - 1 - Math.floor(this.MAX_NAME_LENGTH / 2), (name === null || name === void 0 ? void 0 : name.length) - 1));
    },
    isFileNameTooLong: function isFileNameTooLong(name) {
      return (name === null || name === void 0 ? void 0 : name.length) > this.MAX_NAME_LENGTH;
    },
    validateEnvoieContrats: function validateEnvoieContrats() {
      var _this0 = this;
      this.isButtonDisabled = false;
      this.conventions.forEach(function (convention) {
        if (['', null, undefined].includes(convention.type_facilite)) {
          _this0.isButtonDisabled = true;
        } else if (convention.type_facilite.toUpperCase() === 'AUTRE' && (convention.autre_nom === null || convention.autre_nom === '')) {
          _this0.isButtonDisabled = true;
        } else if (convention.files <= 0) {
          _this0.isButtonDisabled = true;
        }
      });
    },
    checkAllSent: function checkAllSent() {
      this.allSent = this.conventions.every(function (convention) {
        return convention.is_send === true;
      });
    },
    // Ouverture de la modal de sconvention 
    openAnnexeModal: function openAnnexeModal(index) {
      var _this1 = this;
      if (!this.conventions[index].selectedIndex && this.conventions[index].selectedIndex !== 0) {
        this.$toasted.show("Veuillez sélectionner un Concours/Facilités !");
        return;
      }
      var formatted_tb_name = this.tb_name.replace(/^tb(\d+)/, 'tb_$1');
      this.$modal.show('redaction_annexe');
      var selectedIndex = this.conventions[index].selectedIndex;
      setTimeout(function () {
        EventBus.$emit('redaction-fiche-annexe', {
          index: index,
          facilite_index: _objectSpread(_objectSpread({}, _this1.ligne_sollicites[selectedIndex]), {}, {
            index: selectedIndex
          }),
          annexe: _this1.conventions[index],
          document: "billet_ordre",
          tb_name: formatted_tb_name
        });
      }, 500);
    },
    onChangeStateShowAll: function onChangeStateShowAll(index) {
      this.$set(this.showAllFiles, index, !this.showAllFiles[index]);
    },
    handleFacilites: function handleFacilites(event, conventionIndex) {
      var selectedValue = event.target.value;
      if (selectedValue) {
        var ligneSollicite = JSON.parse(selectedValue);
        this.conventions[conventionIndex].libelle = ligneSollicite.type_facilite ? "AUTRE DOCUMENT/ ".concat(ligneSollicite.type_facilite) : '';
      }
    },
    filteredUsers: function filteredUsers() {
      this.receivers = this.users.map(function (el) {
        return _objectSpread({
          text: "".concat(el.name, " ( ").concat(el.role[0].display_name, " )")
        }, el);
      });
      return this.receivers;
    },
    updateTags: function updateTags(newTags, conventionIndex) {
      this.tags[conventionIndex] = newTags;
      this.conventions[conventionIndex].convention_tags = this.tags[conventionIndex];
    },
    formDataVarsConvention: function formDataVarsConvention(event, index, key, objName) {
      this.conventions[index][key] = event.target.value;
      this.formDataToBeWatched[objName] = this[objName];
    },
    disableAutreConvention: function disableAutreConvention(index, key) {
      this.conventions[index][key] = "";
      this.conventions[index]['type_contrat'] = "";
      this.formDataToBeWatched['conventions'] = this.conventions;
    },
    prechargedColConcoursFacilites: function prechargedColConcoursFacilites(index) {
      var _this$newLines2,
        _this10 = this;
      this.getAllNewLines();
      (_this$newLines2 = this.newLines) === null || _this$newLines2 === void 0 || _this$newLines2.forEach(function (el) {
        var pstg = {
          "text": el.libelle,
          "tiClasses": ["ti-valid"]
        };
        _this10.tags[index].push(pstg);
      });
    }
  },
  watch: {
    formDataToBeWatched: {
      handler: function handler(newVal, oldVal) {
        this.autosaving(newVal, oldVal);
      },
      deep: true,
      immediate: true
    },
    'meta_data.dossier_credit.cred_pub_tb_120004.facilites_sollicitees': {
      handler: function handler(newVal) {
        this.ligne_sollicites = newVal;
      },
      deep: true,
      immediate: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/facility_security_agreement/CF-SA0.vue?vue&type=template&id=b3c66250&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/facility_security_agreement/CF-SA0.vue?vue&type=template&id=b3c66250&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$formDataToBeWatch, _vm$formDataToBeWatch2;
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    on: {
      contextmenu: function contextmenu($event) {
        return _vm.$refs.menu.open($event, _vm.tb_name);
      }
    }
  }, [_c("div", {
    staticClass: "row bg-light card-width-height"
  }, [_c("ContextMenu", {
    ref: "menu",
    attrs: {
      id: _vm.tb_name,
      cred_pub_key: _vm.meta_parseable.cred_pub_key,
      tb_name: _vm.tb_name,
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
      id: "dajc-red0-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v(_vm._s(_vm.tb_display_name) + " : Actes et garanties")]), _vm._v(" "), _c("div", {
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
  }, [_c("span", [_vm._v(" " + _vm._s(_vm.formDataToBeWatched.notes.length) + " ")])])])]) : _vm._e(), _vm._v(" "), _c("chevron-up-icon", {
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
  }, [_vm.isSeenState["conventions"] === true ? _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "table-responsive",
    staticStyle: {
      "padding-bottom": "50px"
    }
  }, [_c("table", {
    staticClass: "table table-bordered mb-1"
  }, [_c("thead", [_c("tr", [_vm._m(0), _vm._v(" "), _vm._m(1), _vm._v(" "), _vm._m(2), _vm._v(" "), _vm._m(3), _vm._v(" "), _vm._m(4), _vm._v(" "), !_vm.isUserAG_DAJ ? _c("td", {
    staticClass: "th font-weight-bold text-uppercase vertical-middle text-center"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Contrat signé")])]) : _vm._e(), _vm._v(" "), _c("td")])]), _vm._v(" "), _c("tbody", _vm._l(_vm.conventions, function (convention, index) {
    return _c("tr", {
      key: index
    }, [_c("td", {
      staticClass: "col-4 vertical-middle",
      staticStyle: {
        "min-width": "250px"
      }
    }, [!["Autre"].includes(convention.type_contrat) ? _c("div", {
      staticClass: "d-flex position-relative align-items-center"
    }, [_c("Multiselect", {
      staticStyle: {
        height: "42px",
        "border-color": "#34495e",
        color: "#57606f",
        "font-size": "13px",
        "font-weight": "bold"
      },
      attrs: {
        disabled: !_vm.isUserAG_DAJ,
        searchable: true,
        trackBy: "description",
        label: "description",
        "value-prop": "description",
        id: "type",
        classes: {
          optionPointed: "text-gray-800 bg-gray-100"
        },
        options: _vm.list_contratypes
      },
      scopedSlots: _vm._u([{
        key: "option",
        fn: function fn(_ref) {
          var option = _ref.option;
          return [_c("p", {
            staticClass: "multiselect-option"
          }, [_vm._v(_vm._s(option.description))])];
        }
      }, {
        key: "singlelabel",
        fn: function fn(_ref2) {
          var value = _ref2.value;
          return [_c("p", {
            staticClass: "multiselect-single-label"
          }, [_vm._v(_vm._s(value.description))])];
        }
      }], null, true),
      model: {
        value: convention.type_contrat,
        callback: function callback($$v) {
          _vm.$set(convention, "type_contrat", $$v);
        },
        expression: "convention.type_contrat"
      }
    })], 1) : _c("div", {
      staticClass: "input-group"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: convention.autre_type_facilite,
        expression: "convention.autre_type_facilite"
      }],
      staticClass: "form-control",
      staticStyle: {
        padding: "20px",
        "border-radius": "1px"
      },
      attrs: {
        readonly: !_vm.isUserAG_DAJ,
        type: "text",
        placeholder: "Saisir type de garantie/acte",
        id: "conv_prod"
      },
      domProps: {
        value: convention.autre_type_facilite
      },
      on: {
        blur: function blur($event) {
          return _vm.formDataVarsConvention($event, index, "autre_type_facilite", "conventions");
        },
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(convention, "autre_type_facilite", $event.target.value);
        }
      }
    }), _vm._v(" "), _vm.isUserAG_DAJ ? _c("span", {
      staticClass: "input-group-text",
      staticStyle: {
        cursor: "pointer",
        "border-radius": "1px"
      },
      attrs: {
        title: "Annuler la saisie"
      },
      on: {
        click: function click($event) {
          return _vm.disableAutreConvention(index, "autre_type_facilite");
        }
      }
    }, [_c("i", {
      staticClass: "icofont icofont-close text-danger"
    })]) : _vm._e()])]), _vm._v(" "), _c("td", {
      staticClass: "col-4 vertical-middle",
      staticStyle: {
        "min-width": "250px"
      }
    }, [_c("vue-tags-input", {
      staticStyle: {
        width: "100%"
      },
      attrs: {
        tags: _vm.tags[index],
        "autocomplete-items": _vm.cligneAutoComplete2,
        "add-only-from-autocomplete": true,
        disabled: !_vm.isUserAG_DAJ,
        placeholder: "Ajouter une facilité"
      },
      on: {
        "tags-changed": function tagsChanged($event) {
          return _vm.updateTags($event, index);
        }
      },
      model: {
        value: _vm.tag[index],
        callback: function callback($$v) {
          _vm.$set(_vm.tag, index, $$v);
        },
        expression: "tag[index]"
      }
    })], 1), _vm._v(" "), _c("td", {
      staticClass: "col-4 vertical-middle",
      staticStyle: {
        "min-width": "150px"
      }
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: convention.libelle,
        expression: "convention.libelle"
      }],
      staticClass: "form-control",
      attrs: {
        readonly: !_vm.isUserAG_DAJ,
        type: "text"
      },
      domProps: {
        value: convention.libelle
      },
      on: {
        change: _vm.handleInput,
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(convention, "libelle", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", {
      staticClass: "col-4 vertical-middle"
    }, [_c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: convention.commentaire,
        expression: "convention.commentaire",
        modifiers: {
          lazy: true
        }
      }],
      staticClass: "form-control",
      staticStyle: {
        "min-width": "150px",
        width: "100%"
      },
      attrs: {
        rows: "1",
        readonly: !_vm.isUserAG_DAJ
      },
      domProps: {
        value: convention.commentaire
      },
      on: {
        change: [function ($event) {
          return _vm.$set(convention, "commentaire", $event.target.value);
        }, _vm.handleInput]
      }
    })]), _vm._v(" "), _c("td", {
      staticClass: "col-2 vertical-middle"
    }, [_c("div", {
      staticClass: "d-flex justify-content-center"
    }, [(convention === null || convention === void 0 ? void 0 : convention.files) > 0 ? _c("div", [_vm.showBtnDownload ? _c("div", _vm._l(_vm.file_data_list[index], function (file, fileIndex) {
      return _c("div", {
        key: fileIndex,
        staticClass: "mb-2 nowrap",
        staticStyle: {
          "margin-top": "5 !important"
        }
      }, [_c("span", {
        staticClass: "p-1 px-2 mx-2 text-nowrap",
        staticStyle: {
          color: "black",
          "font-size": "13px",
          "border-radius": "5px",
          "margin-left": "0 !important",
          width: "150px",
          cursor: "pointer"
        }
      }, [_c("i", {
        "class": _vm.getIcon(file === null || file === void 0 ? void 0 : file.file_ext)
      }), _vm._v(" " + _vm._s(_vm.formatFileName(file === null || file === void 0 ? void 0 : file.file_name)) + "." + _vm._s(file === null || file === void 0 ? void 0 : file.file_ext) + "\n                                  ")]), _vm._v(" "), _c("span", {
        staticClass: "p-1 px-2 text-nowrap",
        staticStyle: {
          color: "black",
          "font-size": "13px",
          border: "1px solid rgb(44, 62, 80)",
          "border-radius": "5px",
          "margin-left": "0 !important",
          width: "150px",
          cursor: "pointer"
        },
        attrs: {
          "data-toggle": "tooltip",
          title: "Télécharger le convention"
        },
        on: {
          click: function click($event) {
            return _vm.downloadFile(index, fileIndex, true);
          }
        }
      }, [_c("i", {
        staticClass: "icofont-download"
      })]), _vm._v(" "), _vm.isUserAG_DAJ ? [_c("span", {
        staticClass: "p-1 px-2 text-nowrap",
        staticStyle: {
          color: "black",
          "font-size": "13px",
          border: "1px solid rgb(44, 62, 80)",
          "border-radius": "5px",
          "margin-left": "0 !important",
          width: "150px",
          cursor: "pointer"
        },
        attrs: {
          "data-toggle": "tooltip",
          title: "Supprimer la convention"
        },
        on: {
          click: function click($event) {
            return _vm.deleteFile({
              id: file.file_id,
              file_url: file.file_url
            }, index, false);
          }
        }
      }, [_c("i", {
        staticClass: "icofont-ui-delete"
      })])] : _vm._e()], 2);
    }), 0) : _c("div", [_c("span", {
      staticClass: "spinner-border"
    })])]) : _vm._e(), _vm._v(" "), !(convention !== null && convention !== void 0 && convention.files) > 0 ? _c("div", {
      staticStyle: {
        "margin-left": "5px"
      }
    }, [!convention.is_send ? _c("button", {
      staticClass: "btn shadow-md text-white",
      staticStyle: {
        cursor: "pointer",
        background: "#2c3e50",
        width: "50px",
        height: "30px",
        border: "1px solid rgb(44, 62, 80)",
        "font-size": "13px",
        padding: "1px"
      },
      attrs: {
        disabled: !_vm.isUserAG_DAJ,
        type: "button",
        name: "button",
        "data-toggle": "tooltip",
        title: "Uploader ou voir acte / Garantie"
      },
      on: {
        click: function click($event) {
          return _vm.handleDoubleClickOrClick(index);
        }
      }
    }, [_c("i", {
      staticClass: "icofont-attachment"
    })]) : _vm._e()]) : _vm._e()])]), _vm._v(" "), !_vm.isUserAG_DAJ ? _c("td", {
      staticClass: "col-2 vertical-middle"
    }, [_c("div", {
      staticClass: "d-flex justify-content-center"
    }, [(convention === null || convention === void 0 ? void 0 : convention.files_signes) > 0 ? _c("div", [_vm.showBtnDownloadSigne ? _c("div", {}, _vm._l(_vm.file_data_list_signe[index], function (file, fileIndex) {
      return _c("div", {
        key: fileIndex,
        staticClass: "mb-2 nowrap",
        staticStyle: {
          "margin-top": "5 !important"
        }
      }, [_c("span", {
        staticClass: "p-1 px-2 mx-2 text-nowrap",
        staticStyle: {
          color: "black",
          "font-size": "13px",
          "border-radius": "5px",
          "margin-left": "0 !important",
          width: "150px",
          cursor: "pointer"
        }
      }, [_c("i", {
        "class": _vm.getIcon(file === null || file === void 0 ? void 0 : file.file_ext)
      }), _vm._v(" " + _vm._s(_vm.formatFileName(file === null || file === void 0 ? void 0 : file.file_name)) + "." + _vm._s(file === null || file === void 0 ? void 0 : file.file_ext) + "\n                                  ")]), _vm._v(" "), _c("span", {
        staticClass: "p-1 px-2 text-nowrap",
        staticStyle: {
          color: "black",
          "font-size": "13px",
          border: "1px solid rgb(44, 62, 80)",
          "border-radius": "5px",
          "margin-left": "0 !important",
          width: "150px",
          cursor: "pointer"
        },
        attrs: {
          "data-toggle": "tooltip",
          title: "Télécharger le convention"
        },
        on: {
          click: function click($event) {
            return _vm.downloadFileSinge(index, fileIndex, true);
          }
        }
      }, [_c("i", {
        staticClass: "icofont-download"
      })]), _vm._v(" "), _c("span", {
        staticClass: "p-1 px-2 text-nowrap",
        staticStyle: {
          color: "black",
          "font-size": "13px",
          border: "1px solid rgb(44, 62, 80)",
          "border-radius": "5px",
          "margin-left": "0 !important",
          width: "150px",
          cursor: "pointer"
        },
        attrs: {
          "data-toggle": "tooltip",
          title: "Supprimer la convention"
        },
        on: {
          click: function click($event) {
            return _vm.deleteFile({
              id: file.file_id,
              file_url: file.file_url
            }, index, true);
          }
        }
      }, [_c("i", {
        staticClass: "icofont-ui-delete"
      })])]);
    }), 0) : _c("div", [_c("span", {
      staticClass: "spinner-border"
    })])]) : _vm._e(), _vm._v(" "), !(convention !== null && convention !== void 0 && convention.files_signes) > 0 ? _c("div", {
      staticStyle: {
        "margin-left": "5px"
      }
    }, [!convention.is_send ? _c("button", {
      staticClass: "btn shadow-md text-white",
      staticStyle: {
        cursor: "pointer",
        background: "#2c3e50",
        width: "50px",
        height: "30px",
        border: "1px solid rgb(44, 62, 80)",
        "font-size": "13px",
        padding: "1px"
      },
      attrs: {
        type: "button",
        name: "button",
        "data-toggle": "tooltip",
        title: "Uploader ou voir le(s) acte(s)/Garantie(s)"
      },
      on: {
        click: function click($event) {
          return _vm.handleDoubleClickOrClickSigne(index);
        }
      }
    }, [_c("i", {
      staticClass: "icofont-attachment"
    })]) : _vm._e()]) : _vm._e()])]) : _vm._e(), _vm._v(" "), index == 0 ? _c("td", {
      staticClass: "col-1 text-center vertical-middle",
      staticStyle: {
        "max-width": "50px"
      }
    }, [_c("button", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: index == 0,
        expression: "index == 0"
      }],
      staticStyle: {
        "background-color": "#2c3e50",
        color: "#ffffff",
        "border-radius": "15%",
        border: "none",
        "font-size": "16px"
      },
      attrs: {
        type: "button",
        title: "Ajouter un convention"
      },
      on: {
        click: function click($event) {
          return _vm.addMore1();
        }
      }
    }, [_c("plus-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1)]) : _c("td", {
      staticClass: "col-1 text-center vertical-middle",
      staticStyle: {
        "max-width": "50px"
      }
    }, [!convention.is_send ? _c("button", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: index != 0,
        expression: "index != 0"
      }],
      staticStyle: {
        "background-color": "transparent",
        border: "none"
      },
      attrs: {
        type: "button",
        title: "Supprimer"
      },
      on: {
        click: function click($event) {
          return _vm.remove1(index);
        }
      }
    }, [_c("trash-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1) : _vm._e()])]);
  }), 0)])])])]) : _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        return _vm.toggleIsSeen("conventions");
      }
    }
  }, [_c("h6", {
    "class": " subdiv" + this.tb_name,
    attrs: {
      id: "conventions"
    }
  }, [_vm._v("\n                Envoie des contrats\n                "), _c("chevron-down-icon", {
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
        return _vm.retract();
      }
    }
  }, [_vm._v("\n            Fermer le tableau\n          ")])])])]) : _c("div", {
    staticClass: "card card-width-height"
  }, [_c("br"), _vm._v(" "), _c("div", {
    staticClass: "card-header hdc pb-0 pt-2"
  }, [_c("h6", {
    staticClass: "head",
    attrs: {
      id: "dajc-red0-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v(_vm._s(_vm.tb_display_name) + " : Actes et garanties")]), _vm._v(" "), _c("div", {
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
    staticClass: "badge-sm pb-3"
  }, [_c("span", [_vm._v(" " + _vm._s(_vm.formDataToBeWatched.notes.length) + " ")])])])]) : _vm._e(), _vm._v(" "), _c("chevron-down-icon", {
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
  })], 1)])])])])], 1), _vm._v(" "), _c("note-modal", {
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
    staticClass: "th font-weight-bold text-uppercase vertical-middle sticky"
  }, [_c("label", {
    staticStyle: {
      "padding-left": "5px"
    },
    attrs: {
      "for": ""
    }
  }, [_vm._v("Type actes / garanties")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "th font-weight-bold text-uppercase vertical-middle sticky"
  }, [_c("label", {
    staticStyle: {
      "padding-left": "5px"
    },
    attrs: {
      "for": ""
    }
  }, [_vm._v(" Concours/Facilités")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "th font-weight-bold text-uppercase vertical-middle"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(" Libellé")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "th font-weight-bold text-uppercase vertical-middle"
  }, [_c("label", {
    staticStyle: {
      "padding-left": "5px"
    },
    attrs: {
      "for": ""
    }
  }, [_vm._v(" Commentaire")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "th font-weight-bold text-uppercase vertical-middle text-center"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Actes / Garanties non signés")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/facility_security_agreement/CF-SA0.vue?vue&type=style&index=0&id=b3c66250&lang=css&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/facility_security_agreement/CF-SA0.vue?vue&type=style&index=0&id=b3c66250&lang=css&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n*[data-v-b3c66250] {\r\n  font-family: \"Google sans\";\n}\nlabel[data-v-b3c66250] {\r\n  height: 10px;\r\n  font-size: 13px;\n}\ninput[type=\"text\"][data-v-b3c66250],\r\ninput[type=\"date\"][data-v-b3c66250],\r\nselect[data-v-b3c66250] {\r\n  height: 35px;\r\n  color: #57606f;\r\n  font-size: 13px;\r\n  font-weight: bold;\n}\n.card-width-height[data-v-b3c66250] {\r\n  width: 100%;\r\n  height: 100%;\n}\n.head[data-v-b3c66250] {\r\n  color: #f1f2f6;\r\n  font-size: 22px;\n}\n.hdc[data-v-b3c66250] {\r\n  background-color: #57606f;\n}\n.card-width-height[data-v-b3c66250] {\r\n  width: 100%;\r\n  height: 100%;\n}\n.head[data-v-b3c66250] {\r\n  color: #f1f2f6;\r\n  font-size: 22px;\n}\ninput[type=\"text\"][data-v-b3c66250],\r\ninput[type=\"date\"][data-v-b3c66250] {\r\n  width: 250px;\n}\n.review[data-v-b3c66250] {\r\n  width: 180px !important;\n}\n.engagement input[type=\"text\"][data-v-b3c66250],\r\ninput[type=\"date\"][data-v-b3c66250] {\r\n  width: 100% !important;\n}\n.th[data-v-b3c66250] {\r\n  padding: 4px;\r\n  padding-bottom: 0px;\n}\r\n\r\n/* select {\r\n  width: 250px;\r\n} */\n.badge-sm[data-v-b3c66250] {\r\n  display: inline-block;\r\n  width: 15px;\r\n  height: 15px;\r\n  background: rgba(255, 0, 0, 0.882);\r\n  color: white;\r\n  font-size: 12px;\r\n  font-weight: 500;\r\n  border-radius: 100%;\r\n  position: absolute;\r\n  top: -20%;\r\n  left: 55%;\r\n  text-align: center;\n}\n.relook-header[data-v-b3c66250] {\r\n  color: #000;\r\n  background-color: #f4f3f3;\r\n  padding: 5px;\r\n  border-bottom: 1px solid #b6b8bb;\n}\n.input-group[data-v-b3c66250] {\r\n  flex-wrap: nowrap;\r\n  white-space: nowrap;\n}\r\n\r\n/* td.sticky {\r\n  position: sticky;\r\n  left: 0; \r\n  background-color: #fff; \r\n  z-index: 1;\r\n} */\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/facility_security_agreement/CF-SA0.vue?vue&type=style&index=0&id=b3c66250&lang=css&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/facility_security_agreement/CF-SA0.vue?vue&type=style&index=0&id=b3c66250&lang=css&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CF_SA0_vue_vue_type_style_index_0_id_b3c66250_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CF-SA0.vue?vue&type=style&index=0&id=b3c66250&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/facility_security_agreement/CF-SA0.vue?vue&type=style&index=0&id=b3c66250&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CF_SA0_vue_vue_type_style_index_0_id_b3c66250_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CF_SA0_vue_vue_type_style_index_0_id_b3c66250_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/forms/afg/facility_security_agreement/CF-SA0.vue":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/forms/afg/facility_security_agreement/CF-SA0.vue ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CF_SA0_vue_vue_type_template_id_b3c66250_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CF-SA0.vue?vue&type=template&id=b3c66250&scoped=true */ "./resources/js/components/forms/afg/facility_security_agreement/CF-SA0.vue?vue&type=template&id=b3c66250&scoped=true");
/* harmony import */ var _CF_SA0_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CF-SA0.vue?vue&type=script&lang=js */ "./resources/js/components/forms/afg/facility_security_agreement/CF-SA0.vue?vue&type=script&lang=js");
/* harmony import */ var _CF_SA0_vue_vue_type_style_index_0_id_b3c66250_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CF-SA0.vue?vue&type=style&index=0&id=b3c66250&lang=css&scoped=true */ "./resources/js/components/forms/afg/facility_security_agreement/CF-SA0.vue?vue&type=style&index=0&id=b3c66250&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CF_SA0_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _CF_SA0_vue_vue_type_template_id_b3c66250_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _CF_SA0_vue_vue_type_template_id_b3c66250_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "b3c66250",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/forms/afg/facility_security_agreement/CF-SA0.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/forms/afg/facility_security_agreement/CF-SA0.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/facility_security_agreement/CF-SA0.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CF_SA0_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CF-SA0.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/facility_security_agreement/CF-SA0.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CF_SA0_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/forms/afg/facility_security_agreement/CF-SA0.vue?vue&type=style&index=0&id=b3c66250&lang=css&scoped=true":
/*!******************************************************************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/facility_security_agreement/CF-SA0.vue?vue&type=style&index=0&id=b3c66250&lang=css&scoped=true ***!
  \******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CF_SA0_vue_vue_type_style_index_0_id_b3c66250_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CF-SA0.vue?vue&type=style&index=0&id=b3c66250&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/facility_security_agreement/CF-SA0.vue?vue&type=style&index=0&id=b3c66250&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/forms/afg/facility_security_agreement/CF-SA0.vue?vue&type=template&id=b3c66250&scoped=true":
/*!****************************************************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/facility_security_agreement/CF-SA0.vue?vue&type=template&id=b3c66250&scoped=true ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CF_SA0_vue_vue_type_template_id_b3c66250_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CF_SA0_vue_vue_type_template_id_b3c66250_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CF_SA0_vue_vue_type_template_id_b3c66250_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CF-SA0.vue?vue&type=template&id=b3c66250&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/facility_security_agreement/CF-SA0.vue?vue&type=template&id=b3c66250&scoped=true");


/***/ })

}]);