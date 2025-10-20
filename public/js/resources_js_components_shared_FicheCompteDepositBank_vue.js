"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_shared_FicheCompteDepositBank_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-DEP0.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-DEP0.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/ContextMenu */ "./resources/js/components/shared/ContextMenu.vue");
/* harmony import */ var _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/ContextMenuItem */ "./resources/js/components/shared/ContextMenuItem.vue");
/* harmony import */ var _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vueform/multiselect/dist/multiselect.vue2 */ "./node_modules/@vueform/multiselect/dist/multiselect.vue2.js");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../services/auth.service */ "./resources/js/services/auth.service.js");
/* harmony import */ var _services_credit_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../services/credit.service */ "./resources/js/services/credit.service.js");
/* harmony import */ var _services_connects_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../services/connects.service */ "./resources/js/services/connects.service.js");
/* harmony import */ var _services_proxy_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../services/proxy.service */ "./resources/js/services/proxy.service.js");
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../helpers/helper */ "./resources/js/helpers/helper.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _helpers_indexedDB__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../helpers/indexedDB */ "./resources/js/helpers/indexedDB.js");
/* harmony import */ var _helpers_indexedDB__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_helpers_indexedDB__WEBPACK_IMPORTED_MODULE_9__);
/* provided dependency */ var process = __webpack_require__(/*! process/browser.js */ "./node_modules/process/browser.js");












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
  name: "Checklist",
  display: "Checklist",
  components: {
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_10__.PlusIcon,
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_10__.TrashIcon,
    MoreVerticalIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_10__.MoreVerticalIcon,
    ChevronUpIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_10__.ChevronUpIcon,
    ChevronDownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_10__.ChevronDownIcon,
    ContextMenu: _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_0__["default"],
    ContextMenuItem: _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_1__["default"],
    Multiselect: _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_2__["default"],
    AirplayIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_10__.AirplayIcon
  },
  props: {
    meta_data: Object,
    tb_name: String,
    tb_display_name: String
  },
  created: function created() {
    var _this = this;
    EventBus.$on("created-extra-file-template", function (data) {
      var _data$template5, _this$formDataToBeWat;
      _this.check_list_diligeances.forEach(function (element, index) {
        var _data$template;
        var template_name = "Pièce(s) jointe(s) -check_list_diligeances" + index + "_" + _this.$route.params.templateId;
        if (template_name == (data === null || data === void 0 || (_data$template = data.template) === null || _data$template === void 0 ? void 0 : _data$template.name)) {
          var _data$template2, _data$template3, _data$template4;
          _this.check_list_diligeances[index]["template"] = {
            id: data === null || data === void 0 || (_data$template2 = data.template) === null || _data$template2 === void 0 ? void 0 : _data$template2.id,
            name: data === null || data === void 0 || (_data$template3 = data.template) === null || _data$template3 === void 0 ? void 0 : _data$template3.name,
            slug: data === null || data === void 0 || (_data$template4 = data.template) === null || _data$template4 === void 0 ? void 0 : _data$template4.slug
          };
          _this.handleInput();
        }
      });
      var template_name = "Notification signée -notification_signee_" + _this.$route.params.templateId;
      if (template_name == (data === null || data === void 0 || (_data$template5 = data.template) === null || _data$template5 === void 0 ? void 0 : _data$template5.name) && !['', null, undefined].includes((_this$formDataToBeWat = _this.formDataToBeWatched) === null || _this$formDataToBeWat === void 0 ? void 0 : _this$formDataToBeWat.notif_accord_credit_signe)) {
        var _data$template6, _data$template7, _data$template8;
        _this.formDataToBeWatched.notif_accord_credit_signe.template = {
          id: data === null || data === void 0 || (_data$template6 = data.template) === null || _data$template6 === void 0 ? void 0 : _data$template6.id,
          name: data === null || data === void 0 || (_data$template7 = data.template) === null || _data$template7 === void 0 ? void 0 : _data$template7.name,
          slug: data === null || data === void 0 || (_data$template8 = data.template) === null || _data$template8 === void 0 ? void 0 : _data$template8.slug
        };
      }
    });
    EventBus.$on("updated-extra-file-upload", function (data) {
      _this.getFiles();
    });
    EventBus.$on("extra-files-uploaded", function (data) {
      var count = 0;
      var files = data === null || data === void 0 ? void 0 : data.files;
      files.forEach(function (file) {
        var _this$formDataToBeWat2;
        if ((file === null || file === void 0 ? void 0 : file.extra_file_template_id) != null && ((_this$formDataToBeWat2 = _this.formDataToBeWatched) === null || _this$formDataToBeWat2 === void 0 || (_this$formDataToBeWat2 = _this$formDataToBeWat2.notif_accord_credit_signe) === null || _this$formDataToBeWat2 === void 0 || (_this$formDataToBeWat2 = _this$formDataToBeWat2.template) === null || _this$formDataToBeWat2 === void 0 ? void 0 : _this$formDataToBeWat2.id) == (file === null || file === void 0 ? void 0 : file.extra_file_template_id)) {
          count++;
        }
      });
      if (count > 0) {
        _this.formDataToBeWatched.notif_accord_credit_signe.files = count;
      }
    });
    this.getFiles();
  },
  mounted: function mounted() {
    // this.tableClosedOrOpened();
    this.loadRetrieved();
    // this.loadTbAttrs();
  },
  computed: {},
  data: function data() {
    var vm = this;
    return {
      ebapisHost: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_3__["default"].host,
      authcheck: false,
      authcheckUsr: null,
      authcheckStatus: null,
      watchInPause: false,
      initLoad: true,
      seen: true,
      seen1: true,
      seen2: true,
      seen3: true,
      seen4: true,
      seen5: true,
      notify_user: false,
      connectsHost: _services_connects_service__WEBPACK_IMPORTED_MODULE_6__["default"].loadablehost(),
      duree_credit0: null,
      mode_paiement0: null,
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
      },
      // {
      //     title: "Rejeter",
      //     icon: "icofont icofont-close",
      //     handler: function () { },
      //     disabled: true
      // },
      // {
      //     title: "Vider",
      //     icon: "icofont icofont-paperclip",
      //     handler: function () { },
      //     disabled: true
      // },
      {
        title: "Supprimer",
        icon: "icofont icofont-trash",
        handler: this.startDeletingTbFromContext,
        disabled: false
      }],
      meta_parseable: {
        cred_pub_key: this.meta_data["cred_pub_key"],
        tb_name: this.tb_name
      },
      check_list_diligeances: [{
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_11__["default"])(),
        name: "Le prêt est-il accordé selon la matrice de subdélégation des pouvoirs",
        value: "",
        parent: "",
        numero_compte: "",
        ss_obj: false,
        checked: false,
        disabled: false,
        files: 0,
        template: "",
        comment: "",
        from_monteur_doss: false
      }, {
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_11__["default"])(),
        name: "Les comptes de nantissement à solde fixe sont-ils disponibles ?",
        value: "",
        parent: "",
        numero_compte: "",
        ss_obj: false,
        checked: false,
        disabled: false,
        files: 0,
        template: "",
        comment: "",
        from_monteur_doss: true
      }, {
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_11__["default"])(),
        name: "Compte Courant",
        value: "",
        parent: "Les comptes de nantissement à solde fixe sont-ils disponibles ?",
        numero_compte: "",
        ss_obj: true,
        checked: false,
        disabled: false,
        files: 0,
        template: "",
        comment: "",
        from_monteur_doss: true
      }, {
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_11__["default"])(),
        name: "Deposit",
        value: "",
        parent: "Les comptes de nantissement à solde fixe sont-ils disponibles ?",
        numero_compte: "",
        ss_obj: true,
        checked: false,
        disabled: false,
        files: 0,
        template: "",
        comment: "",
        from_monteur_doss: true
      }, {
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_11__["default"])(),
        name: "DAT",
        value: "",
        parent: "Les comptes de nantissement à solde fixe sont-ils disponibles ?",
        numero_compte: "",
        ss_obj: true,
        checked: false,
        disabled: false,
        files: 0,
        template: "",
        comment: "",
        from_monteur_doss: true
      }, {
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_11__["default"])(),
        name: "PEE",
        value: "",
        parent: "Les comptes de nantissement à solde fixe sont-ils disponibles ?",
        numero_compte: "",
        ss_obj: true,
        checked: false,
        disabled: false,
        files: 0,
        template: "",
        comment: "",
        from_monteur_doss: true
      }, {
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_11__["default"])(),
        name: "PEC",
        value: "",
        parent: "Les comptes de nantissement à solde fixe sont-ils disponibles ?",
        numero_compte: "",
        ss_obj: true,
        checked: false,
        disabled: false,
        files: 0,
        template: "",
        comment: "",
        from_monteur_doss: true
      }, {
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_11__["default"])(),
        name: "Les comptes de nantissement à solde progressif sont-ils disponibles ?",
        value: "",
        parent: "",
        numero_compte: "",
        ss_obj: false,
        checked: false,
        disabled: false,
        files: 0,
        template: "",
        comment: "",
        from_monteur_doss: true
      }, {
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_11__["default"])(),
        name: "Compte Courant",
        value: "",
        parent: "Les comptes de nantissement à solde progressif sont-ils disponibles ?",
        numero_compte: "",
        ss_obj: true,
        checked: false,
        disabled: false,
        files: 0,
        template: "",
        comment: "",
        from_monteur_doss: true
      }, {
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_11__["default"])(),
        name: "Deposit",
        value: "",
        parent: "Les comptes de nantissement à solde progressif sont-ils disponibles ?",
        numero_compte: "",
        ss_obj: true,
        checked: false,
        disabled: false,
        files: 0,
        template: "",
        comment: "",
        from_monteur_doss: true
      }, {
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_11__["default"])(),
        name: "DAT",
        value: "",
        parent: "Les comptes de nantissement à solde progressif sont-ils disponibles ?",
        numero_compte: "",
        ss_obj: true,
        checked: false,
        disabled: false,
        files: 0,
        template: "",
        comment: "",
        from_monteur_doss: true
      }, {
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_11__["default"])(),
        name: "PEE",
        value: "",
        parent: "Les comptes de nantissement à solde progressif sont-ils disponibles ?",
        numero_compte: "",
        ss_obj: true,
        checked: false,
        disabled: false,
        files: 0,
        template: "",
        comment: "",
        from_monteur_doss: true
      }, {
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_11__["default"])(),
        name: "PEC",
        value: "",
        parent: "Les comptes de nantissement à solde progressif sont-ils disponibles ?",
        numero_compte: "",
        ss_obj: true,
        checked: false,
        disabled: false,
        files: 0,
        template: "",
        comment: "",
        from_monteur_doss: true
      }, {
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_11__["default"])(),
        name: "Le TEG est-il disponible ?",
        value: "",
        parent: "",
        numero_compte: "",
        ss_obj: false,
        checked: false,
        disabled: false,
        files: 0,
        template: "",
        comment: "",
        from_monteur_doss: true
      }],
      formDataToBeWatched: {
        notes: [],
        check_list_diligeances: [],
        commentaire: "",
        notify_dajc: false,
        notif_accord_credit_signe: {
          name: "Notification signée",
          files: 0,
          checked: "",
          template: {},
          commentaire: ""
        }
      },
      files: [],
      countries: [],
      categorie_client: "",
      exposition_globale: 0,
      notif_accord_final_outcome: null
    };
  },
  methods: {
    handleDoubleClickOrClick: function handleDoubleClickOrClick(event, index) {
      var _this2 = this;
      EventBus.$emit("open-extra-file-explorer");
      setTimeout(function () {
        EventBus.$emit("data-extra-file-explorer", {
          name: "Pièce(s) jointe(s) {(*)}check_list_diligeances" + index + "_" + _this2.$route.params.templateId
        });
      }, 500);
    },
    getFiles: function getFiles() {
      var _this3 = this;
      _services_proxy_service__WEBPACK_IMPORTED_MODULE_7__["default"].proxyEbapis({
        url: this.connectsHost + 'api/get-files',
        method: 'POST',
        data: {
          file_identity: this.meta_data["dossier_credit"].cred_pub_key
        }
      })
      //this.$axios.post(this.connectsHost + 'api/get-files', { file_identity: this.meta_data["dossier_credit"].cred_pub_key })
      .then(function (res) {
        var _res$data$data, _res$data$data2;
        // console.log("resres55",res);
        res.data = JSON.parse(res.data);
        if (((_res$data$data = res.data.data) === null || _res$data$data === void 0 ? void 0 : _res$data$data.length) > 0 || ((_res$data$data2 = res.data.data) === null || _res$data$data2 === void 0 ? void 0 : _res$data$data2.length) != null) {
          _this3.files = res.data.data;
          // console.log("filesfiles",this.files);
          _this3.check_list_diligeances.forEach(function (element, index) {
            var count = 0;
            _this3.files.forEach(function (file) {
              var _element$template;
              if ((file === null || file === void 0 ? void 0 : file.extra_file_template_id) != null && (element === null || element === void 0 || (_element$template = element.template) === null || _element$template === void 0 ? void 0 : _element$template.id) == (file === null || file === void 0 ? void 0 : file.extra_file_template_id)) {
                count++;
              }
            });
            _this3.check_list_diligeances[index]['files'] = count;
            _this3.handleInput();
          });
        }
      })["catch"](function (err) {
        console.error(err);
      });
    },
    tableClosedOrOpened: function tableClosedOrOpened() {
      this.seen = this.fetchClosedTables(this.tb_name + this.meta_data["cred_pub_key"]);
    },
    openNotesModal: function openNotesModal() {
      var listing = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.listingNote = listing;
      this.$modal.show(this.tb_name);
    },
    checkboxValCashCall: function checkboxValCashCall(event, index) {
      if (event.target.checked) {
        this.check_list_diligeances[index]["value"] = event.target.value;
      } else {
        this.check_list_diligeances[index]["value"] = "";
      }
      this.handleInput();
    },
    checkboxValCashCall2: function checkboxValCashCall2(event) {
      var value = "";
      if (event.target.checked) {
        value = event.target.value;
      } else {
        value = "";
      }
      this.formDataToBeWatched.notif_accord_credit_signe.checked = value;
      this.handleInput();
    },
    handleDoubleClickOrClick2: function handleDoubleClickOrClick2(event) {
      var _this4 = this;
      var view = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      EventBus.$emit("open-extra-file-explorer");
      setTimeout(function () {
        EventBus.$emit("data-extra-file-explorer", {
          name: "Notification signée {(*)}notification_signee_" + _this4.$route.params.templateId,
          view: view
        });
      }, 500);
    },
    loadRetrieved: function loadRetrieved() {
      var _this$meta_data, _this$meta_data$dossi, _this$meta_data2, _this$meta_data$dossi3, _this$meta_data$dossi4;
      var lentb = this.meta_data["dossier_credit"]["tbs_in_use"];
      var createdKey = this.tb_name;
      var createdKeyArr = createdKey.split("tb");
      createdKey = "cred_pub_tb_" + createdKeyArr[1];
      var client_core_banking = this.meta_data["dossier_credit"]["client_core_banking"];
      this.categorie_client = (_this$meta_data = this.meta_data) === null || _this$meta_data === void 0 || (_this$meta_data = _this$meta_data.dossier_credit) === null || _this$meta_data === void 0 ? void 0 : _this$meta_data.categorie_client;
      this.notif_accord_final_outcome = (_this$meta_data$dossi = (_this$meta_data2 = this.meta_data) === null || _this$meta_data2 === void 0 || (_this$meta_data2 = _this$meta_data2.dossier_credit) === null || _this$meta_data2 === void 0 ? void 0 : _this$meta_data2.notif_accord_final_outcome) !== null && _this$meta_data$dossi !== void 0 ? _this$meta_data$dossi : null;
      var credpub0 = null;
      if (this.categorie_client == "Corporate") {
        var _this$meta_data$dossi2;
        var tbArrays = this.determineCredPubTables((_this$meta_data$dossi2 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi2 === void 0 ? void 0 : _this$meta_data$dossi2.applied_templ_name);
        credpub0 = tbArrays[0];
      } else {
        var credVal = this.determineCredPubTablesFromDosCred(this.meta_data["dossier_credit"]);
        if (credVal[0]) {
          credpub0 = credVal[1];
        }
      }
      this.exposition_globale = (_this$meta_data$dossi3 = (_this$meta_data$dossi4 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi4 === void 0 || (_this$meta_data$dossi4 = _this$meta_data$dossi4[credpub0]) === null || _this$meta_data$dossi4 === void 0 ? void 0 : _this$meta_data$dossi4.exposition_globale) !== null && _this$meta_data$dossi3 !== void 0 ? _this$meta_data$dossi3 : 0;
      this.exposition_globale = this.convertNumber(this.exposition_globale);
      if (this.meta_data["dossier_credit"][createdKey] == undefined) {
        var _client_core_banking$;
        var client_core_banking_code = client_core_banking === null || client_core_banking === void 0 || (_client_core_banking$ = client_core_banking.accounts_data) === null || _client_core_banking$ === void 0 || (_client_core_banking$ = _client_core_banking$.comptes_courants[0]) === null || _client_core_banking$ === void 0 ? void 0 : _client_core_banking$.code;
        this.check_list_diligeances.forEach(function (el) {
          if (el.name == "Compte Courant") {
            el.value = "Oui";
            el.numero_compte = client_core_banking_code;
          }
        });

        // if (this.categorie_client == 'Corporate') {
        //     this.formDataToBeWatched['notif_accord_credit_signe'] = {
        //         name: "Notification signée",
        //         files: 0,
        //         checked: "",
        //         template: {},
        //         commentaire: "",
        //     };
        // }

        this.handleInput();
      }
      if (lentb.length > 0) {
        if (this.meta_data["dossier_credit"][createdKey] != undefined) {
          var _this$meta_data$dossi5;
          this.formDataToBeWatched = this.meta_data["dossier_credit"][createdKey];
          if (((_this$meta_data$dossi5 = this.meta_data["dossier_credit"][createdKey]) === null || _this$meta_data$dossi5 === void 0 ? void 0 : _this$meta_data$dossi5.check_list_diligeances) != "") {
            this.check_list_diligeances = this.meta_data["dossier_credit"][createdKey]["check_list_diligeances"];
          }
        }
      }
    },
    convertNumber: function convertNumber(valeur) {
      return Number(String(valeur).replace(/\s+/g, ""));
    },
    // AJOUTER
    launchAutoSaver: function launchAutoSaver() {
      var _this5 = this;
      _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["default"].loadUserData().then(function (res) {
        _this5.send2Backend(res, 0, 0);
      })["catch"](function (err) {
        _this5.loadWithError(err);
      });
    },
    addMore: function addMore() {
      this.check_list_diligeances.push({
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_11__["default"])(),
        name: "",
        value: "",
        parent: "",
        numero_compte: "",
        checked: true,
        disabled: false,
        comment: "",
        template: "",
        files: 0,
        from_monteur_doss: true
      });
    },
    remove: function remove(index) {
      this.check_list_diligeances.splice(index, 1);
      this.handleInput();
    },
    somX3: function somX3(ob, key) {
      var som = 0;
      ob.filter(function (elm) {
        var _elm$key;
        som += parseInt((_elm$key = elm[key]) === null || _elm$key === void 0 ? void 0 : _elm$key.toString().replace(/\s/g, ""));
      });
      return som;
    },
    removeByKey: function removeByKey(index, removeList) {
      this[removeList].splice(index, 1);
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
        id: "dcp-ppo7-head"
      };
      this.$emit("load-buffer", p);
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
    setTbVal: function setTbVal(val) {
      this.cred_pub_key = val;
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
    handleInput: function handleInput() {
      this.formDataToBeWatched.check_list_diligeances = this.check_list_diligeances;
    },
    retract1: function retract1() {
      this.seen1 = !this.seen1;
    },
    retract2: function retract2() {
      this.seen2 = !this.seen2;
    },
    retract3: function retract3() {
      this.seen3 = !this.seen3;
    },
    retract4: function retract4() {
      this.seen4 = !this.seen4;
    },
    deleteTB: function deleteTB() {
      if (confirm("Êtes-vous sûr de vouloir supprimer ce tableau ?")) {
        this.$emit("delete-tb", {
          tb_name: this.tb_name
        });
      }
    },
    notifierLaDAJC: function notifierLaDAJC() {
      var _this6 = this;
      this.$axios.post(this.ebapisHost + "creditbuilder/api/v1/send-notify-service-juridique-bank/", {
        cred_pub_key: this.meta_data["cred_pub_key"]
      }).then(function (response) {
        _this6.$modal.hide('fiche_compte_deposit_bank');
        _this6.$toasted.show("Message envoyé avec succès");
        EventBus.$emit("value-updated");
      })["catch"](function (error) {
        console.log(error);
      });
    },
    recompileLinkedList: function recompileLinkedList() {
      var _this7 = this;
      var block_transmission = false;
      this.formDataToBeWatched.check_list_diligeances.forEach(function (el, index) {
        if (![0, 1, 7].includes(index)) {
          if (!['Oui', 'Non', 'Non applicable'].includes(el === null || el === void 0 ? void 0 : el.value)) {
            block_transmission = true;
          }
        }
      });
      if (block_transmission) {
        this.$toasted.show("Merci de répondre à toutes les questions de la checklist avant transmission.", {
          duration: 5000
        });
        return false;
      }
      var message = "Vous êtes sur le point de soumettre le dossier de crédit à la DAJC. \nEtes-vous sûr(e) ?";
      this.$confirm(message, "Transmission du dossier").then(function () {
        _this7.notify_user = true;
        _this7.$axios.post(_this7.ebapisHost + "core/api/v1/recompile-linkedlist/", {
          cred_pub_key: _this7.meta_data["cred_pub_key"],
          departement_annexe: "dajc"
        }).then(function (response) {
          _this7.formDataToBeWatched.notify_dajc = true;
          _this7.notifierLaDAJC();
        })["catch"](function (error) {
          console.log(error);
          _this7.notify_user = false;
        });
      });
    }
  },
  watch: {
    formDataToBeWatched: {
      handler: function handler(newVal, oldVal) {
        this.autosaving(newVal, oldVal);
        // ? Cache management
        // this.saveDataInCache(newVal, oldVal);
      },
      deep: true,
      immediate: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/dajc/DAJC0.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/dajc/DAJC0.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_connects_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../services/connects.service */ "./resources/js/services/connects.service.js");
/* harmony import */ var _services_proxy_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../services/proxy.service */ "./resources/js/services/proxy.service.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "DAJC0",
  props: {
    dossier_credit: Object
  },
  created: function created() {},
  data: function data() {
    var _this$dossier_credit;
    return {
      data_tb: (_this$dossier_credit = this.dossier_credit) === null || _this$dossier_credit === void 0 ? void 0 : _this$dossier_credit.cred_pub_tb_200401,
      files: [],
      connectsHost: _services_connects_service__WEBPACK_IMPORTED_MODULE_0__["default"].loadablehost(),
      isLoadingFile: false
    };
  },
  methods: {
    handleDoubleClickOrClick: function handleDoubleClickOrClick(index) {
      var _this = this;
      //   console.log(" index", index)
      //   console.log("data_tb", this.data_tb.check_list_diligeances)

      EventBus.$emit("open-extra-file-explorer");
      setTimeout(function () {
        EventBus.$emit("data-extra-file-explorer", {
          name: "Pièce(s) jointe(s) {(*)}check_list_diligeances" + index + "_" + _this.$route.params.templateId,
          view: true
        });
      }, 500);
    },
    getFiles: function getFiles() {
      var _this$data_tb,
        _this2 = this;
      if ((_this$data_tb = this.data_tb) !== null && _this$data_tb !== void 0 && _this$data_tb.check_list_diligeances && this.data_tb.check_list_diligeances.length > 0) {
        this.isLoadingFile = true;
        _services_proxy_service__WEBPACK_IMPORTED_MODULE_1__["default"].proxyEbapis({
          url: this.connectsHost + 'api/get-files',
          method: 'POST',
          data: {
            file_identity: this.dossier_credit.cred_pub_key
          }
        })
        //this.$axios.post(this.connectsHost + 'api/get-files', { file_identity: this.dossier_credit.cred_pub_key })
        .then(function (res) {
          var _res$data$data, _res$data$data2;
          res.data = JSON.parse(res.data);
          if (((_res$data$data = res.data.data) === null || _res$data$data === void 0 ? void 0 : _res$data$data.length) > 0 || ((_res$data$data2 = res.data.data) === null || _res$data$data2 === void 0 ? void 0 : _res$data$data2.length) != null) {
            _this2.files = res.data.data;
            _this2.data_tb.check_list_diligeances.forEach(function (element, index) {
              var count = 0;
              _this2.files.forEach(function (file) {
                var _element$template;
                if ((file === null || file === void 0 ? void 0 : file.extra_file_template_id) != null && (element === null || element === void 0 || (_element$template = element.template) === null || _element$template === void 0 ? void 0 : _element$template.id) == (file === null || file === void 0 ? void 0 : file.extra_file_template_id)) {
                  count++;
                }
              });
              _this2.data_tb.check_list_diligeances[index]['files'] = count;
            });
          }
          _this2.isLoadingFile = false;
        })["catch"](function (err) {
          _this2.isLoadingFile = false;
          console.error(err);
        });
      }
    }
  },
  computed: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/FicheCompteDepositBank.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/FicheCompteDepositBank.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _contreanalyse_nsia_filiale_dajc_DAJC_DEP0_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../contreanalyse/nsia/filiale/dajc/DAJC-DEP0.vue */ "./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-DEP0.vue");
/* harmony import */ var _offview_bank_nsia_dajc_DAJC0_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../offview/bank/nsia/dajc/DAJC0.vue */ "./resources/js/components/offview/bank/nsia/dajc/DAJC0.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "FicheCompteDepositBank",
  props: {
    dossier_credit: Object
  },
  components: {
    tb200401: _contreanalyse_nsia_filiale_dajc_DAJC_DEP0_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    DAJC0: _offview_bank_nsia_dajc_DAJC0_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  created: function created() {
    var _this$dossier_credit,
      _this = this,
      _this$dossier_credit3;
    this.meta_data = {
      cred_pub_key: (_this$dossier_credit = this.dossier_credit) === null || _this$dossier_credit === void 0 ? void 0 : _this$dossier_credit.cred_pub_key,
      dossier_credit: this.dossier_credit
    };
    EventBus.$on("savedclosed-table", function (a) {
      if (!a.status) {
        var _this$dossier_credit2;
        var tb_name = a.tb_name.replace((_this$dossier_credit2 = _this.dossier_credit) === null || _this$dossier_credit2 === void 0 ? void 0 : _this$dossier_credit2.cred_pub_key, "");
        if (tb_name == "tb00000") _this.$modal.hide("notifacc");
      }
    });
    if ((_this$dossier_credit3 = this.dossier_credit) !== null && _this$dossier_credit3 !== void 0 && _this$dossier_credit3.service_juridique) {
      var _this$dossier_credit4;
      this.edit_mode = false;
      if ((_this$dossier_credit4 = this.dossier_credit) !== null && _this$dossier_credit4 !== void 0 && _this$dossier_credit4.instance_fiches) {
        this.edit_mode = true;
      }
    }
  },
  mounted: function mounted() {},
  data: function data() {
    return {
      meta_data: [],
      edit_mode: true
    };
  },
  methods: {
    setAutosaving: function setAutosaving() {
      EventBus.$emit("autosaving-updated");
    },
    loadShell: function loadShell() {
      EventBus.$emit("value-updated");
    },
    setEditMode: function setEditMode() {
      EventBus.$emit("value-updated");
      this.edit_mode = !this.edit_mode;
    }
  },
  computed: {
    disable_edit_mode: function disable_edit_mode() {
      var _this$dossier_credit5;
      if ((_this$dossier_credit5 = this.dossier_credit) !== null && _this$dossier_credit5 !== void 0 && _this$dossier_credit5.service_juridique) {
        var _this$dossier_credit6;
        this.edit_mode = false;
        if ((_this$dossier_credit6 = this.dossier_credit) !== null && _this$dossier_credit6 !== void 0 && _this$dossier_credit6.instance_fiches) {
          this.edit_mode = true;
        }
      }
      return this.edit_mode;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-DEP0.vue?vue&type=template&id=3e951b2a&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-DEP0.vue?vue&type=template&id=3e951b2a&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$formDataToBeWatch, _vm$notif_accord_fina, _vm$formDataToBeWatch2, _vm$formDataToBeWatch3, _vm$formDataToBeWatch4, _vm$formDataToBeWatch5, _vm$formDataToBeWatch6, _vm$formDataToBeWatch7, _vm$formDataToBeWatch8, _vm$formDataToBeWatch9, _vm$meta_data$dossier, _vm$formDataToBeWatch0, _vm$formDataToBeWatch1;
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [(_vm$formDataToBeWatch = _vm.formDataToBeWatched) !== null && _vm$formDataToBeWatch !== void 0 && _vm$formDataToBeWatch.notif_accord_credit_signe && ((_vm$notif_accord_fina = _vm.notif_accord_final_outcome) === null || _vm$notif_accord_fina === void 0 ? void 0 : _vm$notif_accord_fina.outcome) == 1 && !_vm.notify_user ? _c("div", [_vm.seen1 ? _c("div", {
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
      id: "Signature-de-la-notification-(Optionnel)"
    }
  }, [_vm._v("\n                    Signature de la notification (Optionnel)\n                    "), _c("chevron-up-icon", {
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
    staticClass: "table-responsive mt-3"
  }, [_c("table", {
    staticClass: "table mb-2 table-bordered"
  }, [_vm._m(0), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", {
    staticClass: "vertical-middle"
  }, [_vm._v("\n                                    Notification signée\n                                ")]), _vm._v(" "), _c("td", {
    staticClass: "vertical-middle text-center"
  }, [_c("div", {
    staticClass: "m-2 mr-4",
    staticStyle: {
      "vertical-align": "middle"
    }
  }, [_c("input", {
    staticClass: "form-check-input",
    staticStyle: {
      width: "20px",
      height: "20px"
    },
    attrs: {
      type: "checkbox",
      value: "Oui",
      id: "oui_0"
    },
    domProps: {
      checked: ((_vm$formDataToBeWatch2 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch2 === void 0 ? void 0 : _vm$formDataToBeWatch2.notif_accord_credit_signe.checked) == "Oui"
    },
    on: {
      change: function change($event) {
        return _vm.checkboxValCashCall2($event);
      }
    }
  })])]), _vm._v(" "), _c("td", {
    staticClass: "vertical-middle text-center"
  }, [_c("div", {
    staticClass: "m-2 mr-4"
  }, [_c("input", {
    staticClass: "form-check-input",
    staticStyle: {
      width: "20px",
      height: "20px"
    },
    attrs: {
      type: "checkbox",
      value: "Non",
      id: "non_0"
    },
    domProps: {
      checked: ((_vm$formDataToBeWatch3 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch3 === void 0 ? void 0 : _vm$formDataToBeWatch3.notif_accord_credit_signe.checked) == "Non"
    },
    on: {
      change: function change($event) {
        return _vm.checkboxValCashCall2($event);
      }
    }
  })])]), _vm._v(" "), _c("td", {
    staticClass: "vertical-middle text-center"
  }, [((_vm$formDataToBeWatch4 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch4 === void 0 ? void 0 : _vm$formDataToBeWatch4.notif_accord_credit_signe.checked) == "Oui" ? _c("div", {
    staticClass: "d-flex align-items-center justify-content-center"
  }, [_c("div", [((_vm$formDataToBeWatch5 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch5 === void 0 || (_vm$formDataToBeWatch5 = _vm$formDataToBeWatch5.notif_accord_credit_signe) === null || _vm$formDataToBeWatch5 === void 0 ? void 0 : _vm$formDataToBeWatch5.files) > 0 ? _c("span", {
    staticClass: "p-1 px-2 mx-2 text-nowrap",
    staticStyle: {
      "background-color": "rgb(44, 62, 80)",
      color: "white",
      "font-size": "13px",
      "border-radius": "5px",
      "margin-left": "0 !important",
      width: "150px"
    }
  }, [_vm._v(_vm._s(((_vm$formDataToBeWatch6 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch6 === void 0 || (_vm$formDataToBeWatch6 = _vm$formDataToBeWatch6.notif_accord_credit_signe) === null || _vm$formDataToBeWatch6 === void 0 ? void 0 : _vm$formDataToBeWatch6.files) > 0 ? ((_vm$formDataToBeWatch7 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch7 === void 0 || (_vm$formDataToBeWatch7 = _vm$formDataToBeWatch7.notif_accord_credit_signe) === null || _vm$formDataToBeWatch7 === void 0 ? void 0 : _vm$formDataToBeWatch7.files) + " fichier(s) uploadé(s)" : ""))]) : _vm._e()]), _vm._v(" "), ((_vm$formDataToBeWatch8 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch8 === void 0 ? void 0 : _vm$formDataToBeWatch8.notif_accord_credit_signe.name.trim()) != "" ? _c("div", [_c("button", {
    staticClass: "btn shadow-md text-white",
    staticStyle: {
      cursor: "pointer",
      background: "#2c3e50",
      width: "26px",
      "font-size": "13px",
      padding: "1px"
    },
    attrs: {
      type: "button",
      name: "button",
      "data-toggle": "tooltip",
      title: "Cliquer ici pour uploader ou voir le(s) fichier(s)"
    },
    on: {
      click: function click($event) {
        return _vm.handleDoubleClickOrClick2($event);
      }
    }
  }, [_c("i", {
    staticClass: "icofont-attachment"
  })])]) : _vm._e()]) : _c("div", {
    staticClass: "text-center text-danger"
  }, [_vm._v("\n                                        Aucun fichier(s) attaché(s)\n                                    ")])])])])])])])]) : _c("div", {
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
      id: "Signature-de-la-notification-(Optionnel)"
    }
  }, [_vm._v("\n                    Signature de la notification (Optionnel)\n                    "), _c("chevron-down-icon", {
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
  })]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "row bg-light card-width-height"
  }, [_vm.seen === true ? _c("div", {
    staticClass: "card card-width-height"
  }, [_c("br"), _vm._v(" "), _c("div", {
    staticClass: "card-header hdc pb-0 pt-2"
  }, [_c("h6", {
    ref: "topdiv",
    staticClass: "head",
    attrs: {
      id: "dcp-ppo7-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Checklist\n                        ")]), _vm._v(" "), _c("div", {
    staticClass: "col-auto"
  }, [((_vm$formDataToBeWatch9 = _vm.formDataToBeWatched.notes) === null || _vm$formDataToBeWatch9 === void 0 ? void 0 : _vm$formDataToBeWatch9.length) > 0 ? _c("div", {
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
  }, [_c("span", [_vm._v("\n                                            " + _vm._s(_vm.formDataToBeWatched.notes.length) + "\n                                        ")])])])]) : _vm._e()])])])]), _vm._v(" "), _c("div", {
    staticClass: "row p-0"
  }, [_c("div", {
    staticClass: "col-12 p-0 position-relative"
  }, [_vm.notify_user ? _c("div", {
    staticClass: "card-body"
  }, [_vm._m(1)]) : _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(2), _vm._v(" "), _c("tbody", [_vm._l(_vm.check_list_diligeances, function (el, index) {
    return _c("tr", {
      key: index
    }, [[1, 7].includes(index) ? [_c("td", {
      attrs: {
        colspan: "8"
      }
    }, [_c("span", [_vm._v(_vm._s(el.name))])])] : ![0].includes(index) ? [_c("td", {
      staticClass: "vertical-middle"
    }, [index > 13 ? _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: el.name,
        expression: "el.name"
      }],
      staticClass: "form-control",
      staticStyle: {
        "min-width": "250px"
      },
      attrs: {
        type: "text",
        required: ""
      },
      domProps: {
        value: el.name
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(el, "name", $event.target.value);
        }
      }
    }) : _c("span", {
      "class": {
        floating_text: (el === null || el === void 0 ? void 0 : el.ss_obj) == true
      }
    }, [_vm._v(_vm._s(el.name))])]), _vm._v(" "), _c("td", {
      staticClass: "text-center"
    }, [_c("div", {
      staticClass: "m-2 mr-4",
      staticStyle: {
        "vertical-align": "middle"
      }
    }, [_c("input", {
      staticClass: "form-check-input",
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
        checked: el.value == "Oui"
      },
      on: {
        change: function change($event) {
          return _vm.checkboxValCashCall($event, index);
        }
      }
    })])]), _vm._v(" "), _c("td", {
      staticClass: "text-center"
    }, [_c("div", {
      staticClass: "m-2 mr-4",
      staticStyle: {
        "vertical-align": "middle"
      }
    }, [_c("input", {
      staticClass: "form-check-input",
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
        checked: el.value == "Non"
      },
      on: {
        change: function change($event) {
          return _vm.checkboxValCashCall($event, index);
        }
      }
    })])]), _vm._v(" "), _c("td", {
      staticClass: "text-center"
    }, [_c("div", {
      staticClass: "m-2 mr-4",
      staticStyle: {
        "vertical-align": "middle"
      }
    }, [_c("input", {
      staticClass: "form-check-input",
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
        checked: el.value == "Non applicable"
      },
      on: {
        change: function change($event) {
          return _vm.checkboxValCashCall($event, index);
        }
      }
    })])]), _vm._v(" "), _c("td", [_c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: el.numero_compte,
        expression: "el.numero_compte"
      }],
      staticClass: "form-control",
      staticStyle: {
        "min-width": "150px"
      },
      attrs: {
        cols: "1",
        rows: "1"
      },
      domProps: {
        value: el.numero_compte
      },
      on: {
        change: _vm.handleInput,
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(el, "numero_compte", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [el.value == "Oui" ? _c("div", {
      staticClass: "d-flex align-items-center text-center justify-content-center"
    }, [_c("div", [(el === null || el === void 0 ? void 0 : el.files) > 0 ? _c("span", {
      staticClass: "p-1 px-2 mx-2 text-nowrap",
      staticStyle: {
        "background-color": "rgb(44, 62, 80)",
        color: "white",
        "font-size": "13px",
        "border-radius": "5px",
        "margin-left": "0!important",
        width: "150px"
      }
    }, [_vm._v(_vm._s((el === null || el === void 0 ? void 0 : el.files) > 0 ? (el === null || el === void 0 ? void 0 : el.files) + " fichier(s) uploadé(s)" : ""))]) : _vm._e()]), _vm._v(" "), el.name.trim() != "" ? _c("div", [_c("button", {
      staticClass: "btn shadow-md text-white",
      staticStyle: {
        cursor: "pointer",
        background: "#2c3e50",
        width: "26px",
        "font-size": "13px",
        padding: "1px"
      },
      attrs: {
        type: "button",
        name: "button",
        "data-toggle": "tooltip",
        title: "Cliquer ici pour uploader ou voir le(s) fichier(s)"
      },
      on: {
        click: function click($event) {
          return _vm.handleDoubleClickOrClick($event, index);
        }
      }
    }, [_c("i", {
      staticClass: "icofont-attachment"
    })])]) : _vm._e()]) : _c("div", {
      staticClass: "text-center text-danger"
    }, [_vm._v("\n                                                    Aucun fichier(s) uploadé(s)\n                                                ")])]), _vm._v(" "), _c("td", [_c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: el.comment,
        expression: "el.comment"
      }],
      staticClass: "form-control",
      staticStyle: {
        "min-width": "150px"
      },
      attrs: {
        cols: "1",
        rows: "1"
      },
      domProps: {
        value: el.comment
      },
      on: {
        change: _vm.handleInput,
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(el, "comment", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", {
      staticClass: "text-center vertical-middle"
    }, [index > 13 ? _c("button", {
      staticStyle: {
        "background-color": "transparent",
        border: "none"
      },
      attrs: {
        type: "button",
        title: "Supprimer ce document"
      },
      on: {
        click: function click($event) {
          return _vm.remove(index);
        }
      }
    }, [_c("trash-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1) : _vm._e()])] : _vm._e()], 2);
  }), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "text-right",
    attrs: {
      colspan: "8"
    }
  }, [_c("button", {
    staticStyle: {
      "background-color": "#2c3e50",
      color: "#ffffff",
      "border-radius": "15%",
      border: "none"
    },
    attrs: {
      type: "button",
      title: "Ajouter un document"
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
  })], 1)])])], 2)])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 mt-4 mb-5"
  }, [_vm._m(3), _vm._v(" "), _c("vue-editor", {
    attrs: {
      id: "commentaire"
    },
    on: {
      "update-value": function updateValue($event) {
        _vm.formDataToBeWatched[$event[0]] = $event[1];
      }
    },
    model: {
      value: _vm.formDataToBeWatched.commentaire,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "commentaire", $$v);
      },
      expression: "formDataToBeWatched.commentaire"
    }
  })], 1), _vm._v(" "), !["CA", "SPZ", "CD_DCP"].includes((_vm$meta_data$dossier = _vm.meta_data["dossier_credit"]) === null || _vm$meta_data$dossier === void 0 || (_vm$meta_data$dossier = _vm$meta_data$dossier.final_outcome) === null || _vm$meta_data$dossier === void 0 ? void 0 : _vm$meta_data$dossier.giver_role_sigle) || _vm.exposition_globale >= 10000000 ? _c("div", {
    staticClass: "col-md-12 mt-4 mb-5"
  }, [!((_vm$formDataToBeWatch0 = _vm.formDataToBeWatched) !== null && _vm$formDataToBeWatch0 !== void 0 && _vm$formDataToBeWatch0.notify_dajc) ? _c("button", {
    staticClass: "btn btn-primary",
    attrs: {
      type: "button",
      title: "Transmission à la DAJC",
      disabled: _vm.notify_user
    },
    on: {
      click: _vm.recompileLinkedList
    }
  }, [_vm._v("\n                                Transmission à la DAJC\n                            ")]) : _vm._e()]) : _vm._e()])])])]) : _c("div", {
    staticClass: "card card-width-height"
  }, [_c("br"), _vm._v(" "), _c("div", {
    staticClass: "card-header hdc pb-0 pt-2"
  }, [_c("h6", {
    staticClass: "head",
    attrs: {
      id: "dcp-ppo7-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Checklist\n                        ")]), _vm._v(" "), _c("div", {
    staticClass: "col-auto"
  }, [((_vm$formDataToBeWatch1 = _vm.formDataToBeWatched.notes) === null || _vm$formDataToBeWatch1 === void 0 ? void 0 : _vm$formDataToBeWatch1.length) > 0 ? _c("div", {
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
  }, [_c("span", [_vm._v("\n                                            " + _vm._s(_vm.formDataToBeWatched.notes.length) + "\n                                        ")])])])]) : _vm._e()])])])])])]), _vm._v(" "), _c("modal", {
    attrs: {
      name: "documentation_somise",
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
  return _c("thead", [_c("tr", [_c("td", {
    staticClass: "text-center vertical-middle th fw-bold col-4"
  }), _vm._v(" "), _c("td", {
    staticClass: "text-center vertical-middle th fw-bold col-2"
  }, [_vm._v("\n                                    Oui\n                                ")]), _vm._v(" "), _c("td", {
    staticClass: "text-center vertical-middle th fw-bold col-2"
  }, [_vm._v("\n                                    Non\n                                ")]), _vm._v(" "), _c("td", {
    staticClass: "text-center vertical-middle th fw-bold col-4"
  }, [_vm._v("\n                                    Fichier attaché\n                                ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "d-flex justify-content-center text-center align-items-center text-muted py-4"
  }, [_c("div", [_c("span", {
    staticClass: "spinner-border spinner-border"
  }), _vm._v(" "), _c("h5", [_vm._v("\n                                    Transmission en cours ... "), _c("br"), _vm._v("\n                                    Ceci peut prendre un peu de temps\n                                ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", {
    staticClass: "text-center"
  }, [_c("td", {
    staticClass: "th vertical-middle fw-bold"
  }, [_c("label", [_vm._v("LIBELLE")])]), _vm._v(" "), _c("td", {
    staticClass: "th vertical-middle fw-bold"
  }, [_c("label", [_vm._v("OUI ")])]), _vm._v(" "), _c("td", {
    staticClass: "th vertical-middle fw-bold"
  }, [_c("label", [_vm._v("NON ")])]), _vm._v(" "), _c("td", {
    staticClass: "th vertical-middle fw-bold"
  }, [_c("label", [_vm._v("NON APPLICABLE")])]), _vm._v(" "), _c("td", {
    staticClass: "th vertical-middle fw-bold"
  }, [_c("label", [_vm._v("NUMERO DE COMPTE")])]), _vm._v(" "), _c("td", {
    staticClass: "th vertical-middle fw-bold"
  }, [_c("label", [_vm._v("FICHIERS ATTACHES")])]), _vm._v(" "), _c("td", {
    staticClass: "th vertical-middle fw-bold"
  }, [_c("label", [_vm._v("COMMENTAIRE")])]), _vm._v(" "), _c("td", {
    staticClass: "th vertical-middle fw-bold"
  }, [_c("label")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", [_c("b", [_vm._v("Commentaire")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/dajc/DAJC0.vue?vue&type=template&id=466dd866&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/dajc/DAJC0.vue?vue&type=template&id=466dd866&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$data_tb, _vm$data_tb2;
  var _vm = this,
    _c = _vm._self._c;
  return _vm.data_tb ? _c("div", [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "mx-3 my-3"
  }, [_c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(1), _vm._v(" "), _c("tbody", _vm._l((_vm$data_tb = _vm.data_tb) === null || _vm$data_tb === void 0 ? void 0 : _vm$data_tb.check_list_diligeances, function (el, index) {
    return _c("tr", {
      key: index
    }, [[1, 7].includes(index) ? [_c("td", {
      attrs: {
        colspan: "7"
      }
    }, [_c("span", [_vm._v(_vm._s(el.name))])])] : ![0].includes(index) ? [_c("td", [_c("span", {
      "class": {
        floating_text: (el === null || el === void 0 ? void 0 : el.ss_obj) == true
      }
    }, [_vm._v(_vm._s(el.name))])]), _vm._v(" "), _c("td", {
      staticClass: "text-center"
    }, [el.value == "Oui" ? _c("input", {
      staticClass: "form-check-input",
      staticStyle: {
        width: "20px",
        height: "20px"
      },
      attrs: {
        disabled: "",
        type: "checkbox",
        checked: ""
      }
    }) : _c("input", {
      staticClass: "form-check-input",
      staticStyle: {
        width: "20px",
        height: "20px"
      },
      attrs: {
        type: "checkbox",
        disabled: ""
      }
    })]), _vm._v(" "), _c("td", {
      staticClass: "text-center"
    }, [el.value == "Non" ? _c("input", {
      staticClass: "form-check-input",
      staticStyle: {
        width: "20px",
        height: "20px"
      },
      attrs: {
        disabled: "",
        type: "checkbox",
        checked: ""
      }
    }) : _c("input", {
      staticClass: "form-check-input",
      staticStyle: {
        width: "20px",
        height: "20px"
      },
      attrs: {
        type: "checkbox",
        disabled: ""
      }
    })]), _vm._v(" "), _c("td", {
      staticClass: "text-center"
    }, [el.value == "Non applicable" ? _c("input", {
      staticClass: "form-check-input",
      staticStyle: {
        width: "20px",
        height: "20px"
      },
      attrs: {
        disabled: "",
        type: "checkbox",
        checked: ""
      }
    }) : _c("input", {
      staticClass: "form-check-input",
      staticStyle: {
        width: "20px",
        height: "20px"
      },
      attrs: {
        type: "checkbox",
        disabled: ""
      }
    })]), _vm._v(" "), _c("td", [_vm._v("\n                                " + _vm._s(el.numero_compte) + "\n                            ")]), _vm._v(" "), _c("td", [el.value == "Oui" && (el === null || el === void 0 ? void 0 : el.files) > 0 ? _c("div", {
      staticClass: "d-flex align-items-center text-center justify-content-center"
    }, [_c("div", [(el === null || el === void 0 ? void 0 : el.files) > 0 ? _c("span", {
      staticClass: "p-1 px-2 mx-2 text-nowrap",
      staticStyle: {
        "background-color": "rgb(44, 62, 80)",
        color: "white",
        "font-size": "13px",
        "border-radius": "5px",
        "margin-left": "0!important",
        width: "150px"
      }
    }, [_vm._v(_vm._s((el === null || el === void 0 ? void 0 : el.files) > 0 ? (el === null || el === void 0 ? void 0 : el.files) + " fichier(s) uploadé(s)" : ""))]) : _vm._e()]), _vm._v(" "), el.name.trim() != "" ? _c("div", [_c("button", {
      staticClass: "btn shadow-md text-white",
      staticStyle: {
        cursor: "pointer",
        background: "#2c3e50",
        width: "26px",
        "font-size": "13px",
        padding: "1px"
      },
      attrs: {
        type: "button",
        name: "button",
        "data-toggle": "tooltip",
        title: "Cliquer ici pour uploader ou voir le(s) fichier(s)"
      },
      on: {
        click: function click($event) {
          return _vm.handleDoubleClickOrClick(index);
        }
      }
    }, [_c("i", {
      staticClass: "icofont-attachment"
    })])]) : _vm._e()]) : _c("div", {
      staticClass: "text-center text-danger"
    }, [_vm._v("\n                                    Aucun fichier(s) uploadé(s)\n                                ")])]), _vm._v(" "), _c("td", [_vm._v("\n                                " + _vm._s(el.comment) + "\n                            ")])] : _vm._e()], 2);
  }), 0)])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 mt-4"
  }, [_c("table", {
    staticClass: "table mb-2 table-bordered"
  }, [_vm._m(2), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", [_c("span", {
    domProps: {
      innerHTML: _vm._s((_vm$data_tb2 = _vm.data_tb) === null || _vm$data_tb2 === void 0 ? void 0 : _vm$data_tb2.commentaire)
    }
  })])])])])])])]) : _vm._e();
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "justify-content-center"
  }, [_c("div", {
    staticClass: "head-memorandum-title px-3 mb-2",
    staticStyle: {
      "text-align": "center"
    }
  }, [_vm._v("\n            CHECKLIST DES DILIGENCES\n        ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", {
    staticClass: "text-center"
  }, [_c("th", {
    staticClass: "th fw-bold"
  }, [_c("label", [_vm._v("LIBELLE")])]), _vm._v(" "), _c("th", {
    staticClass: "th fw-bold"
  }, [_c("label", [_vm._v("OUI ")])]), _vm._v(" "), _c("th", {
    staticClass: "th fw-bold"
  }, [_c("label", [_vm._v("NON ")])]), _vm._v(" "), _c("th", {
    staticClass: "th fw-bold"
  }, [_c("label", [_vm._v("NON APPLICABLE")])]), _vm._v(" "), _c("th", {
    staticClass: "th fw-bold"
  }, [_c("label", [_vm._v("NUMERO DE COMPTE")])]), _vm._v(" "), _c("th", {
    staticClass: "th fw-bold"
  }, [_c("label", [_vm._v("FICHIERS ATTACHES")])]), _vm._v(" "), _c("th", {
    staticClass: "th fw-bold"
  }, [_c("label", [_vm._v("COMMENTAIRE")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("td", {
    staticClass: "text-uppercase bg-grey text-center"
  }, [_vm._v("\n                            Commentaire\n                        ")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/FicheCompteDepositBank.vue?vue&type=template&id=52dc43ec":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/FicheCompteDepositBank.vue?vue&type=template&id=52dc43ec ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$entityType, _vm$dossier_credit, _vm$dossier_credit2, _vm$dossier_credit3;
  var _vm = this,
    _c = _vm._self._c;
  return ((_vm$entityType = _vm.entityType) === null || _vm$entityType === void 0 ? void 0 : _vm$entityType.toUpperCase()) === "BANK" && ((_vm$dossier_credit = _vm.dossier_credit) === null || _vm$dossier_credit === void 0 || (_vm$dossier_credit = _vm$dossier_credit.final_outcome) === null || _vm$dossier_credit === void 0 ? void 0 : _vm$dossier_credit.outcome) == 1 ? _c("div", [_c("div", {
    staticClass: "p-2 d-flex justify-content-between align-items-center",
    style: {
      "background-color": _vm.entityColor,
      color: "white"
    }
  }, [((_vm$dossier_credit2 = _vm.dossier_credit) === null || _vm$dossier_credit2 === void 0 || (_vm$dossier_credit2 = _vm$dossier_credit2.notif_accord_final_outcome) === null || _vm$dossier_credit2 === void 0 ? void 0 : _vm$dossier_credit2.outcome) == 1 ? _c("h4", {
    staticClass: "m-0"
  }, [_vm._v("Signature de la notification de crédit et informations sur les comptes")]) : ((_vm$dossier_credit3 = _vm.dossier_credit) === null || _vm$dossier_credit3 === void 0 ? void 0 : _vm$dossier_credit3.categorie_client) == "Retail" ? _c("h4", {
    staticClass: "m-0"
  }, [_vm._v("Informations sur les comptes")]) : _vm._e(), _vm._v(" "), _c("div", [_vm.edit_mode ? _c("i", {
    staticClass: "icofont-pencil mx-2",
    staticStyle: {
      "font-size": "1.2rem"
    },
    attrs: {
      title: "Edit mode",
      role: "button"
    },
    on: {
      click: _vm.setEditMode
    }
  }) : _c("i", {
    staticClass: "icofont-paperclip mx-2",
    staticStyle: {
      "font-size": "1.2rem"
    },
    attrs: {
      title: "Edit mode",
      role: "button"
    },
    on: {
      click: _vm.setEditMode
    }
  }), _vm._v(" "), _c("i", {
    staticClass: "icofont-close",
    staticStyle: {
      "font-size": "1.2rem"
    },
    attrs: {
      title: "Fermer",
      role: "button"
    },
    on: {
      click: function click($event) {
        return _vm.$modal.hide("fiche_compte_deposit_bank");
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "p-3",
    staticStyle: {
      "max-height": "80vh",
      overflow: "auto"
    }
  }, [_vm.disable_edit_mode ? _c("tb200401", {
    attrs: {
      tb_name: "tb200401",
      meta_data: _vm.meta_data,
      tb_display_name: "DAJC - DEP 0"
    },
    on: {
      autosaving: _vm.setAutosaving,
      "load-shell": _vm.loadShell,
      "edit-mode": _vm.setEditMode
    }
  }) : _c("DAJC0", {
    attrs: {
      dossier_credit: _vm.dossier_credit
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "text-right w-100 p-2",
    staticStyle: {
      position: "absolute",
      bottom: "0",
      right: "0",
      background: "white"
    }
  }, [_c("button", {
    staticClass: "btn",
    staticStyle: {
      background: "rgb(44, 62, 80)",
      color: "white"
    },
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.$modal.hide("fiche_compte_deposit_bank");
      }
    }
  }, [_vm._v("Fermer")])])], 1)]) : _vm._e();
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-DEP0.vue?vue&type=style&index=0&id=3e951b2a&lang=css&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-DEP0.vue?vue&type=style&index=0&id=3e951b2a&lang=css&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n*[data-v-3e951b2a] {\r\n    font-family: \"Google sans\";\n}\nlabel[data-v-3e951b2a] {\r\n    height: 10px;\r\n    font-size: 13px;\n}\ninput[type=\"text\"][data-v-3e951b2a],\r\ninput[type=\"date\"][data-v-3e951b2a],\r\nselect[data-v-3e951b2a] {\r\n    height: 35px;\r\n    border-color: #34495e;\r\n    color: #57606f;\r\n    font-size: 13px;\r\n    font-weight: bold;\n}\n.card-width-height[data-v-3e951b2a] {\r\n    width: 100%;\r\n    height: 100%;\n}\n.head[data-v-3e951b2a] {\r\n    color: #f1f2f6;\r\n    font-size: 22px;\n}\n.hdc[data-v-3e951b2a] {\r\n    background-color: #57606f;\n}\n.card-width-height[data-v-3e951b2a] {\r\n    width: 100%;\r\n    height: 100%;\n}\n.head[data-v-3e951b2a] {\r\n    color: #f1f2f6;\r\n    font-size: 22px;\n}\n.review[data-v-3e951b2a] {\r\n    width: 180px !important;\n}\n.engagement input[type=\"text\"][data-v-3e951b2a],\r\ninput[type=\"date\"][data-v-3e951b2a] {\r\n    width: 100% !important;\n}\n.th[data-v-3e951b2a] {\r\n    padding: 4px;\r\n    padding-bottom: 0px;\n}\nselect[data-v-3e951b2a] {\r\n    width: 250px;\n}\n.badge-sm[data-v-3e951b2a] {\r\n    display: inline-block;\r\n    width: 15px;\r\n    height: 15px;\r\n    background: rgba(255, 0, 0, 0.882);\r\n    color: white;\r\n    font-size: 12px;\r\n    font-weight: 500;\r\n    border-radius: 100%;\r\n    position: absolute;\r\n    top: -20%;\r\n    left: 55%;\r\n    text-align: center;\n}\n.relook-header[data-v-3e951b2a] {\r\n    color: #000;\r\n    background-color: #f4f3f3;\r\n    padding: 5px;\r\n    border-bottom: 1px solid #b6b8bb;\n}\ninput[type=\"checkbox\"][data-v-3e951b2a] {\r\n    /* Double-sized Checkboxes */\r\n    /* IE */\r\n    /* FF */\r\n    /* Safari and Chrome */\r\n    /* Opera */\r\n    transform: scale(1);\r\n    padding: 10px;\r\n    cursor: pointer;\n}\n.image1[data-v-3e951b2a] {\r\n    background: url(\"/images/capture_nsia/exemples/documentation_somise.png\")\r\n        no-repeat;\r\n    background-position: center;\r\n    background-size: contain;\r\n\r\n    width: 500px;\r\n    height: 300px;\n}\n.floating_text[data-v-3e951b2a] {\r\n    float: right;\r\n    /* text-align: right; */\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/dajc/DAJC0.vue?vue&type=style&index=0&id=466dd866&lang=css&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/dajc/DAJC0.vue?vue&type=style&index=0&id=466dd866&lang=css&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.bg-grey[data-v-466dd866] {\r\n    background-color: #f4f3f3;\n}\nth[data-v-466dd866] {\r\n    background: #f4f3f3 !important;\n}\n.vertical-middle[data-v-466dd866] {\r\n    vertical-align: middle;\n}\n.font-bold[data-v-466dd866] {\r\n    font-weight: bold;\n}\n.head-memorandum-title[data-v-466dd866] {\r\n    margin-top: 15px;\r\n    padding: 16px;\r\n    color: #fff;\r\n    font-weight: bold;\r\n    background-color: #34495e;\r\n    border: 2px solid #575759;\r\n    box-shadow: 1px 3px 4px #ddd;\r\n    font-size: 16px;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    border-radius: 10px;\r\n    margin-bottom: 15px;\n}\n.text-uppercase[data-v-466dd866] {\r\n    text-transform: uppercase;\n}\n._border_right[data-v-466dd866] {\r\n    border-right: 1px solid;\n}\n._border_bottom[data-v-466dd866] {\r\n    border-bottom: 1px solid;\n}\n.pl-10-px[data-v-466dd866] {\r\n    padding-left: 10px;\n}\n.pl-30-px[data-v-466dd866] {\r\n    padding-left: 30px;\n}\n.pl-3[data-v-466dd866] {\r\n    padding-left: 10px;\n}\n.form-check-input[data-v-466dd866]:disabled {\r\n    opacity: 1;\n}\n.floating_text[data-v-466dd866] {\r\n    float: right;\r\n    /* text-align: right; */\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-DEP0.vue?vue&type=style&index=0&id=3e951b2a&lang=css&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-DEP0.vue?vue&type=style&index=0&id=3e951b2a&lang=css&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJC_DEP0_vue_vue_type_style_index_0_id_3e951b2a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DAJC-DEP0.vue?vue&type=style&index=0&id=3e951b2a&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-DEP0.vue?vue&type=style&index=0&id=3e951b2a&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJC_DEP0_vue_vue_type_style_index_0_id_3e951b2a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJC_DEP0_vue_vue_type_style_index_0_id_3e951b2a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/dajc/DAJC0.vue?vue&type=style&index=0&id=466dd866&lang=css&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/dajc/DAJC0.vue?vue&type=style&index=0&id=466dd866&lang=css&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJC0_vue_vue_type_style_index_0_id_466dd866_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DAJC0.vue?vue&type=style&index=0&id=466dd866&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/dajc/DAJC0.vue?vue&type=style&index=0&id=466dd866&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJC0_vue_vue_type_style_index_0_id_466dd866_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJC0_vue_vue_type_style_index_0_id_466dd866_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-DEP0.vue":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-DEP0.vue ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DAJC_DEP0_vue_vue_type_template_id_3e951b2a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DAJC-DEP0.vue?vue&type=template&id=3e951b2a&scoped=true */ "./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-DEP0.vue?vue&type=template&id=3e951b2a&scoped=true");
/* harmony import */ var _DAJC_DEP0_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DAJC-DEP0.vue?vue&type=script&lang=js */ "./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-DEP0.vue?vue&type=script&lang=js");
/* harmony import */ var _DAJC_DEP0_vue_vue_type_style_index_0_id_3e951b2a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DAJC-DEP0.vue?vue&type=style&index=0&id=3e951b2a&lang=css&scoped=true */ "./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-DEP0.vue?vue&type=style&index=0&id=3e951b2a&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DAJC_DEP0_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _DAJC_DEP0_vue_vue_type_template_id_3e951b2a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _DAJC_DEP0_vue_vue_type_template_id_3e951b2a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "3e951b2a",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-DEP0.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-DEP0.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-DEP0.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJC_DEP0_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DAJC-DEP0.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-DEP0.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJC_DEP0_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-DEP0.vue?vue&type=style&index=0&id=3e951b2a&lang=css&scoped=true":
/*!***************************************************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-DEP0.vue?vue&type=style&index=0&id=3e951b2a&lang=css&scoped=true ***!
  \***************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJC_DEP0_vue_vue_type_style_index_0_id_3e951b2a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DAJC-DEP0.vue?vue&type=style&index=0&id=3e951b2a&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-DEP0.vue?vue&type=style&index=0&id=3e951b2a&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-DEP0.vue?vue&type=template&id=3e951b2a&scoped=true":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-DEP0.vue?vue&type=template&id=3e951b2a&scoped=true ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJC_DEP0_vue_vue_type_template_id_3e951b2a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJC_DEP0_vue_vue_type_template_id_3e951b2a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJC_DEP0_vue_vue_type_template_id_3e951b2a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DAJC-DEP0.vue?vue&type=template&id=3e951b2a&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-DEP0.vue?vue&type=template&id=3e951b2a&scoped=true");


/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/dajc/DAJC0.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/dajc/DAJC0.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DAJC0_vue_vue_type_template_id_466dd866_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DAJC0.vue?vue&type=template&id=466dd866&scoped=true */ "./resources/js/components/offview/bank/nsia/dajc/DAJC0.vue?vue&type=template&id=466dd866&scoped=true");
/* harmony import */ var _DAJC0_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DAJC0.vue?vue&type=script&lang=js */ "./resources/js/components/offview/bank/nsia/dajc/DAJC0.vue?vue&type=script&lang=js");
/* harmony import */ var _DAJC0_vue_vue_type_style_index_0_id_466dd866_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DAJC0.vue?vue&type=style&index=0&id=466dd866&lang=css&scoped=true */ "./resources/js/components/offview/bank/nsia/dajc/DAJC0.vue?vue&type=style&index=0&id=466dd866&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DAJC0_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _DAJC0_vue_vue_type_template_id_466dd866_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _DAJC0_vue_vue_type_template_id_466dd866_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "466dd866",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/offview/bank/nsia/dajc/DAJC0.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/dajc/DAJC0.vue?vue&type=script&lang=js":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/dajc/DAJC0.vue?vue&type=script&lang=js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJC0_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DAJC0.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/dajc/DAJC0.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJC0_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/dajc/DAJC0.vue?vue&type=style&index=0&id=466dd866&lang=css&scoped=true":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/dajc/DAJC0.vue?vue&type=style&index=0&id=466dd866&lang=css&scoped=true ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJC0_vue_vue_type_style_index_0_id_466dd866_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DAJC0.vue?vue&type=style&index=0&id=466dd866&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/dajc/DAJC0.vue?vue&type=style&index=0&id=466dd866&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/dajc/DAJC0.vue?vue&type=template&id=466dd866&scoped=true":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/dajc/DAJC0.vue?vue&type=template&id=466dd866&scoped=true ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJC0_vue_vue_type_template_id_466dd866_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJC0_vue_vue_type_template_id_466dd866_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJC0_vue_vue_type_template_id_466dd866_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DAJC0.vue?vue&type=template&id=466dd866&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/dajc/DAJC0.vue?vue&type=template&id=466dd866&scoped=true");


/***/ }),

/***/ "./resources/js/components/shared/FicheCompteDepositBank.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/shared/FicheCompteDepositBank.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FicheCompteDepositBank_vue_vue_type_template_id_52dc43ec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FicheCompteDepositBank.vue?vue&type=template&id=52dc43ec */ "./resources/js/components/shared/FicheCompteDepositBank.vue?vue&type=template&id=52dc43ec");
/* harmony import */ var _FicheCompteDepositBank_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FicheCompteDepositBank.vue?vue&type=script&lang=js */ "./resources/js/components/shared/FicheCompteDepositBank.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FicheCompteDepositBank_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _FicheCompteDepositBank_vue_vue_type_template_id_52dc43ec__WEBPACK_IMPORTED_MODULE_0__.render,
  _FicheCompteDepositBank_vue_vue_type_template_id_52dc43ec__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/shared/FicheCompteDepositBank.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/shared/FicheCompteDepositBank.vue?vue&type=script&lang=js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/shared/FicheCompteDepositBank.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FicheCompteDepositBank_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FicheCompteDepositBank.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/FicheCompteDepositBank.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FicheCompteDepositBank_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/shared/FicheCompteDepositBank.vue?vue&type=template&id=52dc43ec":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/shared/FicheCompteDepositBank.vue?vue&type=template&id=52dc43ec ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FicheCompteDepositBank_vue_vue_type_template_id_52dc43ec__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FicheCompteDepositBank_vue_vue_type_template_id_52dc43ec__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FicheCompteDepositBank_vue_vue_type_template_id_52dc43ec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FicheCompteDepositBank.vue?vue&type=template&id=52dc43ec */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/FicheCompteDepositBank.vue?vue&type=template&id=52dc43ec");


/***/ })

}]);