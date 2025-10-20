"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_forms_afg_notification_decision_NO-CB0_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/notification_decision/NO-CB0.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/notification_decision/NO-CB0.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _shared_ContextMenu_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/ContextMenu.vue */ "./resources/js/components/shared/ContextMenu.vue");
/* harmony import */ var _shared_NoteModal_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/NoteModal.vue */ "./resources/js/components/shared/NoteModal.vue");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/auth.service */ "./resources/js/services/auth.service.js");
/* harmony import */ var _services_credit_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/credit.service */ "./resources/js/services/credit.service.js");
/* harmony import */ var _services_proxy_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/proxy.service */ "./resources/js/services/proxy.service.js");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _services_connects_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/connects.service */ "./resources/js/services/connects.service.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }









window.$ = window.jQuery = __webpack_require__(/*! jquery/dist/jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "notification_de_concours_bancaires",
  components: {
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.PlusIcon,
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.TrashIcon,
    MoreVerticalIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.MoreVerticalIcon,
    ChevronUpIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.ChevronUpIcon,
    ChevronDownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.ChevronDownIcon,
    ContextMenu: _shared_ContextMenu_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    NoteModal: _shared_NoteModal_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    meta_data: {
      type: Object,
      required: true
    },
    tb_name: {
      type: String,
      required: true
    },
    tb_display_name: {
      type: String,
      required: true
    }
  },
  data: function data() {
    var _this = this;
    return {
      connectsHost: _services_connects_service__WEBPACK_IMPORTED_MODULE_6__["default"].loadablehost(),
      ebapisHost: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_5__["default"].host,
      authcheck: false,
      authcheckUsr: null,
      authcheckStatus: null,
      seen: true,
      listingNote: false,
      isSeenState: {
        conventions: true
      },
      contextList: [{
        title: "Commenter",
        icon: "icofont icofont-comment",
        handler: function handler() {
          return _this.openNotesModal();
        },
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
        conventions: [],
        notes: []
      },
      conventions: [{
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_8__["default"])(),
        type_facilite: "",
        selectedIndex: null,
        libelle: "",
        commentaire: "",
        template: "",
        template_signes: "",
        template_signes_banque: "",
        files: 0,
        files_signes: 0,
        files_banque_signes: 0,
        is_send: false,
        statut: ""
      }],
      is_notify: false,
      file_data_list: [],
      file_data_list_signe: [],
      showBtnDownload: false,
      showBtnDownloadSigne: false,
      showBtnDownloadBanqueSigne: false,
      showAllFiles: [],
      showAllFilesSigne: [],
      showMoreNumber: 2,
      MAX_NAME_LENGTH: 10,
      SHORT_NAME_SEPARATOR: "...",
      isButtonDisabled: false,
      allSent: false,
      ligne_sollicites: [],
      file_data_list_banque_signe: []
    };
  },
  computed: {
    updateName: function updateName() {
      return this.conventions.map(function (convention) {
        return _objectSpread(_objectSpread({}, convention), {}, {
          libelle: "notification de concours bancaires"
        });
      });
    },
    showUploadButton: function showUploadButton() {
      if (!this.authcheckUsr) return false;
      return this.authcheckUsr.role_uuid === "weu2BjZkaf0Y4tHguD2Y";
    },
    showNotifyButton: function showNotifyButton() {
      if (!this.authcheckUsr) return false;
      if (this.authcheckUsr.role_uuid === "8viff90JetZtxR5uYfu2") {
        return !this.conventions.every(function (convention) {
          return convention.is_send === true;
        });
      }
      return false;
    },
    authcheckUsrNotAnalyst: function authcheckUsrNotAnalyst() {
      var _this$authcheckUsr;
      return ((_this$authcheckUsr = this.authcheckUsr) === null || _this$authcheckUsr === void 0 ? void 0 : _this$authcheckUsr.role_uuid) != "8viff90JetZtxR5uYfu2";
    }
  },
  created: function created() {
    var _this2 = this;
    _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["default"].loadUserData().then(function (res) {
      _this2.authcheckUsr = res.data;
      _this2.authcheckStatus = res.status;
      _this2.authcheck = true;
    })["catch"](function (err) {
      console.error("Erreur lors du chargement des données utilisateur:", err);
      _this2.loadWithError(err);
    });
  },
  mounted: function mounted() {
    var _this3 = this;
    this.tableClosedOrOpened();
    this.loadRetrieved();
    this.loadTbAttrs();
    this.checkAllSent();
    this.checkNotify();
    EventBus.$on("created-extra-file-template", function (data) {
      _this3.conventions.forEach(function (element, index) {
        var _data$template, _data$template5, _data$template9;
        var template_name = "Notification -concours_bancaire_".concat(index, "_").concat(_this3.$route.params.templateId);
        var template_name_signe = "Notification signe -concours_bancaire_signes_".concat(index, "_").concat(_this3.$route.params.templateId);
        var template_name_signe_banque = "Notification signe par la banque -concours_bancaire_banque_signes_".concat(index, "_").concat(_this3.$route.params.templateId);
        if (template_name === (data === null || data === void 0 || (_data$template = data.template) === null || _data$template === void 0 ? void 0 : _data$template.name)) {
          var _data$template2, _data$template3, _data$template4;
          _this3.conventions[index].template = {
            id: data === null || data === void 0 || (_data$template2 = data.template) === null || _data$template2 === void 0 ? void 0 : _data$template2.id,
            name: data === null || data === void 0 || (_data$template3 = data.template) === null || _data$template3 === void 0 ? void 0 : _data$template3.name,
            slug: data === null || data === void 0 || (_data$template4 = data.template) === null || _data$template4 === void 0 ? void 0 : _data$template4.slug
          };
          _this3.handleInput();
        }
        if (template_name_signe === (data === null || data === void 0 || (_data$template5 = data.template) === null || _data$template5 === void 0 ? void 0 : _data$template5.name)) {
          var _data$template6, _data$template7, _data$template8;
          _this3.conventions[index]["template_signes"] = {
            id: data === null || data === void 0 || (_data$template6 = data.template) === null || _data$template6 === void 0 ? void 0 : _data$template6.id,
            name: data === null || data === void 0 || (_data$template7 = data.template) === null || _data$template7 === void 0 ? void 0 : _data$template7.name,
            slug: data === null || data === void 0 || (_data$template8 = data.template) === null || _data$template8 === void 0 ? void 0 : _data$template8.slug
          };
          _this3.handleInput();
        }
        if (template_name_signe_banque === (data === null || data === void 0 || (_data$template9 = data.template) === null || _data$template9 === void 0 ? void 0 : _data$template9.name)) {
          var _data$template0, _data$template1, _data$template10;
          _this3.conventions[index]["template_signes_banque"] = {
            id: data === null || data === void 0 || (_data$template0 = data.template) === null || _data$template0 === void 0 ? void 0 : _data$template0.id,
            name: data === null || data === void 0 || (_data$template1 = data.template) === null || _data$template1 === void 0 ? void 0 : _data$template1.name,
            slug: data === null || data === void 0 || (_data$template10 = data.template) === null || _data$template10 === void 0 ? void 0 : _data$template10.slug
          };
          _this3.handleInput();
        }
      });
    });
    EventBus.$on("updated-extra-file-upload", function () {
      _this3.getFiles();
    });
    this.getFiles();
    this.getEnvoieContratFiles();
  },
  beforeDestroy: function beforeDestroy() {
    EventBus.$off("updated-extra-file-upload");
  },
  methods: {
    loadTbAttrs: function loadTbAttrs() {
      var _this$$refs$topdiv;
      var titles = Array.from(document.querySelectorAll(".subdiv".concat(this.tb_name))).map(function (e) {
        return e.innerText;
      });
      this.$emit("load-buffer", {
        name_of_title: ((_this$$refs$topdiv = this.$refs.topdiv) === null || _this$$refs$topdiv === void 0 ? void 0 : _this$$refs$topdiv.innerText) || "",
        list_of_content: titles,
        id: "dajc-red0-head"
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
    loadRetrieved: function loadRetrieved() {
      var _this4 = this,
        _this$meta_data$dossi;
      var createdKey = 'cred_pub_tb_15507';
      if (this.meta_data["dossier_credit"][createdKey] !== undefined) {
        if (this.meta_data["dossier_credit"][createdKey]) {
          this.formDataToBeWatched = this.meta_data["dossier_credit"][createdKey];
          if (this.meta_data["dossier_credit"][createdKey].conventions) {
            this.conventions = this.meta_data["dossier_credit"][createdKey].conventions;
          }
          if (this.meta_data["dossier_credit"][createdKey].contrats_signes) {
            this.meta_data["dossier_credit"][createdKey].contrats_signes.forEach(function (contrat_signe) {
              var convention = _this4.conventions.find(function (c) {
                return c.id === contrat_signe.contrats_id;
              });
              if (convention && contrat_signe.files <= 0) {
                convention.is_send = false;
              }
            });
          }
        }
      }
      if (((_this$meta_data$dossi = this.meta_data["dossier_credit"]["cred_pub_tb_8"]["nouvelles_lignes_signature"]) === null || _this$meta_data$dossi === void 0 ? void 0 : _this$meta_data$dossi.length) > 0) {
        var facilites = this.meta_data["dossier_credit"]["cred_pub_tb_8"]["nouvelles_lignes_signature"];
        var facilites2 = this.meta_data["dossier_credit"]["cred_pub_tb_8"]["nouvelles_lignes_caisse"].filter(function (obj) {
          return obj.montant !== 0;
        });
        var faciliteFull = facilites.concat(facilites2);
        this.ligne_sollicites = faciliteFull;

        // this.formDataToBeWatched.conventions[0].libelle = `notification de concours bancaires`;
        setTimeout(function () {
          var _faciliteFull$;
          _this4.formDataToBeWatched.conventions[0].libelle = "notification de concours bancaires";
          _this4.formDataToBeWatched.conventions[0].type_facilite = ((_faciliteFull$ = faciliteFull[0]) === null || _faciliteFull$ === void 0 ? void 0 : _faciliteFull$.ligne) || 'concours';
        }, 2000);
      }
    },
    retract: function retract() {
      this.seen = !this.seen;
      EventBus.$emit("savedclosed-table", {
        tb_name: this.tb_name + this.meta_data["cred_pub_key"],
        status: this.seen
      });
    },
    loadWithError: function loadWithError(err) {
      console.error("Erreur:", err);
    },
    send2Backend: function send2Backend() {
      var _this5 = this;
      if (!this.authcheckUsr) return;
      this.$emit("autosaving");
      this.$axios.post(this.ebapisHost + "creditbuilder/api/v1/autosaving/", {
        user: this.authcheckUsr,
        meta_parseable: this.meta_parseable,
        filledData: this.formDataToBeWatched
      }).then(function (response) {
        if (response.data.is_success) {
          _this5.$emit("load-shell");
        }
      })["catch"](function (error) {
        console.error("Erreur lors de l'autosaving:", error);
      });
    },
    handleInput: function handleInput() {
      var _this6 = this;
      this.conventions.forEach(function (convention) {
        if (convention.selectedIndex !== null) {
          var _this6$ligne_sollicit;
          convention.type_facilite = ((_this6$ligne_sollicit = _this6.ligne_sollicites[convention.selectedIndex]) === null || _this6$ligne_sollicit === void 0 ? void 0 : _this6$ligne_sollicit.ligne) || '';
        }
      });
      this.formDataToBeWatched.conventions = this.conventions;
      this.validateEnvoieContrats();
      this.checkAllSent();
      this.send2Backend();
    },
    deleteTB: function deleteTB() {
      if (confirm("Êtes-vous sûr de vouloir supprimer ce tableau ?")) {
        this.$emit("delete-tb", {
          tb_name: this.tb_name
        });
      }
    },
    toggleIsSeen: function toggleIsSeen(key) {
      this.isSeenState[key] = !this.isSeenState[key];
    },
    handleDoubleClickOrClick: function handleDoubleClickOrClick(index) {
      var _this$conventions$ind,
        _this7 = this;
      EventBus.$emit("open-extra-file-explorer");
      var numeroPiece = ((_this$conventions$ind = this.conventions[index]) === null || _this$conventions$ind === void 0 || (_this$conventions$ind = _this$conventions$ind.nom) === null || _this$conventions$ind === void 0 ? void 0 : _this$conventions$ind.trim()) || "";
      var result = numeroPiece;
      setTimeout(function () {
        EventBus.$emit("data-extra-file-explorer", {
          name: "Notification {(*)}concours_bancaire_".concat(index, "_").concat(_this7.$route.params.templateId),
          is_auto: false
        });
      }, 500);
    },
    handleDoubleClickOrClickSigne: function handleDoubleClickOrClickSigne(index) {
      var _this$conventions$ind2,
        _this8 = this;
      EventBus.$emit("open-extra-file-explorer");
      var numeroPiece = ((_this$conventions$ind2 = this.conventions[index]) === null || _this$conventions$ind2 === void 0 || (_this$conventions$ind2 = _this$conventions$ind2.nom) === null || _this$conventions$ind2 === void 0 ? void 0 : _this$conventions$ind2.trim()) || "";
      var result = numeroPiece;
      setTimeout(function () {
        EventBus.$emit("data-extra-file-explorer", {
          name: "Notification signe {(*)}concours_bancaire_signes_".concat(index, "_").concat(_this8.$route.params.templateId)
        });
      }, 500);
    },
    getFiles: function getFiles() {
      var _this9 = this;
      _services_proxy_service__WEBPACK_IMPORTED_MODULE_4__["default"].proxyEbapis({
        url: this.connectsHost + "api/get-files",
        method: "POST",
        data: {
          file_identity: this.meta_data["dossier_credit"].cred_pub_key
        }
      }).then(function (res) {
        var _res$data$data;
        res.data = JSON.parse(res.data);
        if ((_res$data$data = res.data.data) !== null && _res$data$data !== void 0 && _res$data$data.length) {
          _this9.files = res.data.data;
          _this9.conventions.forEach(function (element, index) {
            var count = 0;
            var count_signe = 0;
            var count_banque_signe = 0;
            _this9.files.forEach(function (file) {
              var _element$template, _element$template_sig, _element$template_sig2;
              if ((file === null || file === void 0 ? void 0 : file.extra_file_template_id) != null && (element === null || element === void 0 || (_element$template = element.template) === null || _element$template === void 0 ? void 0 : _element$template.id) == file.extra_file_template_id) {
                count++;
              }
              if ((file === null || file === void 0 ? void 0 : file.extra_file_template_id) != null && (element === null || element === void 0 || (_element$template_sig = element.template_signes) === null || _element$template_sig === void 0 ? void 0 : _element$template_sig.id) == (file === null || file === void 0 ? void 0 : file.extra_file_template_id)) {
                count_signe++;
              }
              if ((file === null || file === void 0 ? void 0 : file.extra_file_template_id) != null && (element === null || element === void 0 || (_element$template_sig2 = element.template_signes_banque) === null || _element$template_sig2 === void 0 ? void 0 : _element$template_sig2.id) == (file === null || file === void 0 ? void 0 : file.extra_file_template_id)) {
                count_banque_signe++;
              }
            });
            _this9.conventions[index].files = count;
            _this9.conventions[index].files_signes = count_signe;
            _this9.conventions[index].files_banque_signes = count_banque_signe;
            _this9.conventions[index].statut = count_signe >= 1 ? "signe" : "non_signe";
            console.log("count_banque_signe", count_banque_signe);
            _this9.conventions[index].statut = count_banque_signe >= 1 ? "signe_banque" : "non_signe";
            console.log("conventions[index].statut", _this9.conventions[index].statut);
          });
          _this9.handleInput();
          _this9.getEnvoieContratFiles();
        }
      })["catch"](function (err) {
        console.error("Erreur lors de la récupération des fichiers:", err);
      });
    },
    getEnvoieContratFiles: function getEnvoieContratFiles() {
      var _this0 = this;
      _services_proxy_service__WEBPACK_IMPORTED_MODULE_4__["default"].proxyEbapis({
        url: this.connectsHost + "api/get-files",
        method: "POST",
        data: {
          file_identity: this.meta_data["dossier_credit"].cred_pub_key
        }
      }).then(function (res) {
        var _res$data$data2;
        res.data = JSON.parse(res.data);
        _this0.file_data_list = [];
        _this0.file_data_list_signe = [];
        _this0.file_data_list_banque_signe = [];
        if ((_res$data$data2 = res.data.data) !== null && _res$data$data2 !== void 0 && _res$data$data2.length) {
          _this0.files = res.data.data;
          _this0.conventions.forEach(function (element, index) {
            var fileData = [];
            var fileDataSigne = [];
            var fileDataBanqueSigne = [];
            _this0.files.forEach(function (file) {
              var _element$template2, _element$template_sig3, _element$template_sig4;
              if (file !== null && file !== void 0 && file.extra_file_template_id && (element === null || element === void 0 || (_element$template2 = element.template) === null || _element$template2 === void 0 ? void 0 : _element$template2.id) === file.extra_file_template_id) {
                fileData.push({
                  file_id: file.id,
                  file_name: "".concat(file.file_name, ".").concat(file.file_ext),
                  file_url: file.file_url,
                  file_ext: file.file_ext
                });
              }
              if (file !== null && file !== void 0 && file.extra_file_template_id && (element === null || element === void 0 || (_element$template_sig3 = element.template_signes) === null || _element$template_sig3 === void 0 ? void 0 : _element$template_sig3.id) === file.extra_file_template_id) {
                fileDataSigne.push({
                  file_id: file.id,
                  file_name: "".concat(file.file_name, ".").concat(file.file_ext),
                  file_url: file.file_url,
                  file_ext: file.file_ext
                });
              }
              if (file !== null && file !== void 0 && file.extra_file_template_id && (element === null || element === void 0 || (_element$template_sig4 = element.template_signes_banque) === null || _element$template_sig4 === void 0 ? void 0 : _element$template_sig4.id) === file.extra_file_template_id) {
                fileDataBanqueSigne.push({
                  file_id: file.id,
                  file_name: "".concat(file.file_name, ".").concat(file.file_ext),
                  file_url: file.file_url,
                  file_ext: file.file_ext
                });
              }
            });
            _this0.file_data_list.push(fileData);
            _this0.file_data_list_signe.push(fileDataSigne);
            _this0.file_data_list_banque_signe.push(fileDataBanqueSigne);
          });
          _this0.showAllFiles = Array(_this0.file_data_list.length).fill(false);
          _this0.showAllFilesSigne = Array(_this0.file_data_list_signe.length).fill(false);
          _this0.showAllFilesBanqueSigne = Array(_this0.file_data_list_banque_signe.length).fill(false);
          _this0.showBtnDownload = true;
          _this0.showBtnDownloadSigne = true;
          _this0.showBtnDownloadBanqueSigne = true;
        }
      })["catch"](function (err) {
        console.error("Erreur lors de la récupération des fichiers:", err);
      });
    },
    NotifyUser: function NotifyUser() {
      this.conventions.forEach(function (convention) {
        convention.is_send = true;
      });
      this.handleInput();
    },
    checkNotify: function checkNotify() {
      this.is_notify = !!this.meta_data["dossier_credit"].contrat_notification;
      this.handleInput();
    },
    checkAllSent: function checkAllSent() {
      this.allSent = this.conventions.every(function (convention) {
        return convention.is_send === true;
      });
    },
    getIcon: function getIcon(extension) {
      var ext = extension === null || extension === void 0 ? void 0 : extension.toLowerCase();
      var icons = {
        png: "icofont-file-jpg text-purple",
        webp: "icofont-file-jpg text-purple",
        jpg: "icofont-file-jpg text-purple",
        jpeg: "icofont-file-jpg text-purple",
        xls: "icofont-file-spreadsheet text-success",
        xlsx: "icofont-file-spreadsheet text-success",
        pdf: "icofont-file-pdf text-danger",
        doc: "icofont-file-word text-primary",
        docx: "icofont-file-word text-primary",
        ppt: "icofont-file-powerpoint text-warning",
        pptx: "icofont-file-powerpoint text-warning"
      };
      return icons[ext] || "";
    },
    downloadFileNonSigne: function downloadFileNonSigne(index, fileIndex) {
      var _fileList$index;
      var fileList = this.file_data_list;
      var file = (_fileList$index = fileList[index]) === null || _fileList$index === void 0 ? void 0 : _fileList$index[fileIndex];
      if (file !== null && file !== void 0 && file.file_url) {
        var url = window.location.origin + "/file?f=" + encodeURIComponent(file.file_url);
        window.open(url, "_blank");
      } else {
        console.error("Fichier non trouvé:", {
          index: index,
          fileIndex: fileIndex,
          type: type
        });
      }
    },
    downloadFileSigne: function downloadFileSigne(index, fileIndex, type) {
      var _fileList$index2;
      var fileList = this.file_data_list_signe;
      var file = (_fileList$index2 = fileList[index]) === null || _fileList$index2 === void 0 ? void 0 : _fileList$index2[fileIndex];
      if (file !== null && file !== void 0 && file.file_url) {
        var url = window.location.origin + "/file?f=" + encodeURIComponent(file.file_url);
        window.open(url, "_blank");
      } else {
        console.error("Fichier non trouvé:", {
          index: index,
          fileIndex: fileIndex,
          type: type
        });
      }
    },
    downloadFileSigneBanque: function downloadFileSigneBanque(index, fileIndex, type) {
      var _fileList$index3;
      var fileList = this.file_data_list_banque_signe;
      var file = (_fileList$index3 = fileList[index]) === null || _fileList$index3 === void 0 ? void 0 : _fileList$index3[fileIndex];
      if (file !== null && file !== void 0 && file.file_url) {
        var url = window.location.origin + "/file?f=" + encodeURIComponent(file.file_url);
        window.open(url, "_blank");
      } else {
        console.error("Fichier non trouvé:", {
          index: index,
          fileIndex: fileIndex,
          type: type
        });
      }
    },
    deleteFile: function deleteFile(data, index, signe) {
      var _this1 = this;
      var banque_signe = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var headers = {
        'Content-Type': 'multipart/form-data'
      };
      _services_proxy_service__WEBPACK_IMPORTED_MODULE_4__["default"].proxyEbapis({
        url: this.connectsHost + 'api/delete-file',
        method: 'POST',
        data: data
      }).then(function (res) {
        res.data = JSON.parse(res.data);
        _this1.$toasted.show(res.data.message);
        _this1.getFiles();
        if (signe) {
          _this1.formDataToBeWatched["conventions"][index]["files_signes"] -= 1;
          _this1.formDataToBeWatched["conventions"][index]["template_signes"] = null;
        } else if (banque_signe) {
          _this1.formDataToBeWatched["conventions"][index]["files_banque_signes"] -= 1;
          _this1.formDataToBeWatched["conventions"][index]["template_signes_banque"] = null;
        } else {
          _this1.formDataToBeWatched["conventions"][index]["files"] -= 1;
          _this1.formDataToBeWatched["conventions"][index]["template"] = null;
        }
      })["catch"](function (err) {
        console.error(err);
      });
    },
    formatFileName: function formatFileName(name) {
      if (!name) return "";
      return name.length > this.MAX_NAME_LENGTH ? name.substring(0, Math.floor(this.MAX_NAME_LENGTH / 2)) + this.SHORT_NAME_SEPARATOR + name.substring(name.length - 1 - Math.floor(this.MAX_NAME_LENGTH / 2)) : name;
    },
    validateEnvoieContrats: function validateEnvoieContrats() {
      this.isButtonDisabled = this.conventions.some(function (convention) {
        return !convention.type_facilite || convention.type_facilite.toUpperCase() === "AUTRE" && !convention.autre_nom || convention.files <= 0;
      });
    },
    openAnnexeModal: function openAnnexeModal(index) {
      var _this10 = this;
      // if(!this.facilites_sollicitees.) return;
      var formatted_tb_name = this.tb_name.replace(/^tb(\d+)/, "tb_$1");
      this.$modal.show("redaction_annexe");
      var selectedIndex = this.conventions[index].selectedIndex;

      // console.log('>>selectedIndex', this.ligne_sollicites[selectedIndex])

      setTimeout(function () {
        EventBus.$emit("redaction-fiche-annexe", {
          index: index,
          facilite_index: _objectSpread(_objectSpread({}, _this10.ligne_sollicites[selectedIndex]), {}, {
            index: selectedIndex
          }),
          annexe: _this10.conventions[index],
          document: "notification_de_concours_bancaires",
          tb_name: formatted_tb_name
        });
      }, 500);
    },
    onChangeStateShowAll: function onChangeStateShowAll(index) {
      this.$set(this.showAllFiles, index, !this.showAllFiles[index]);
    },
    onChangeStateShowAllSigne: function onChangeStateShowAllSigne(index) {
      this.$set(this.showAllFilesSigne, index, !this.showAllFilesSigne[index]);
    },
    fetchClosedTables: function fetchClosedTables(key) {
      return true;
    },
    areInputsDisabled: function areInputsDisabled(index) {
      if (!this.authcheckUsr) return false;
      if (this.authcheckUsr.role_uuid === "8viff90JetZtxR5uYfu2") {
        var convention = this.conventions[index];
        return convention.files > 0 && (convention.files_signes > 0 || convention.files_banque_signes > 0);
      }
      return false;
    },
    showGenerateButton: function showGenerateButton(index) {
      if (!this.authcheckUsr) return false;
      if (this.authcheckUsr.role_uuid === "8viff90JetZtxR5uYfu2") {
        return this.conventions[index].files === 0;
      }
      return true;
    },
    handleDoubleClickOrClickSigneBanque: function handleDoubleClickOrClickSigneBanque(index) {
      var _this$conventions$ind3,
        _this11 = this;
      EventBus.$emit("open-extra-file-explorer");
      var numeroPiece = ((_this$conventions$ind3 = this.conventions[index]) === null || _this$conventions$ind3 === void 0 || (_this$conventions$ind3 = _this$conventions$ind3.nom) === null || _this$conventions$ind3 === void 0 ? void 0 : _this$conventions$ind3.trim()) || "";
      var result = numeroPiece;
      setTimeout(function () {
        EventBus.$emit("data-extra-file-explorer", {
          name: "Notification signe par la banque {(*)}concours_bancaire_banque_signes_".concat(index, "_").concat(_this11.$route.params.templateId)
        });
      }, 500);
    }
  },
  watch: {
    formDataToBeWatched: {
      handler: function handler() {
        this.send2Backend();
      },
      deep: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/notification_decision/NO-CB0.vue?vue&type=template&id=1beb315c&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/notification_decision/NO-CB0.vue?vue&type=template&id=1beb315c&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  }), _vm._v(" "), _vm.seen ? _c("div", {
    staticClass: "card card-width-height"
  }, [_c("br"), _vm._v(" "), _c("div", {
    staticClass: "card-header hdc pb-0 pt-2"
  }, [_c("h6", {
    ref: "topdiv",
    attrs: {
      id: "dajc-red0-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v(_vm._s(_vm.tb_display_name) + " : Notification de concours bancaires")]), _vm._v(" "), _c("div", {
    staticClass: "col-auto"
  }, [((_vm$formDataToBeWatch = _vm.formDataToBeWatched.notes) === null || _vm$formDataToBeWatch === void 0 ? void 0 : _vm$formDataToBeWatch.length) > 0 ? _c("span", {
    attrs: {
      role: "button"
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
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "badge-sm pb-3"
  }, [_vm._v(_vm._s(_vm.formDataToBeWatched.notes.length))])]) : _vm._e(), _vm._v(" "), _c("chevron-up-icon", {
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
  }, [_vm.isSeenState.conventions ? _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "table-responsive",
    staticStyle: {
      "padding-bottom": "80px"
    }
  }, [_c("table", {
    staticClass: "table table-bordered mb-1"
  }, [_c("thead", [_c("tr", [_vm._m(0), _vm._v(" "), _vm._m(1), _vm._v(" "), !_vm.authcheckUsrNotAnalyst ? _c("th", {
    staticClass: "font-weight-bold text-uppercase vertical-middle"
  }, [_c("label", [_vm._v("Statut")])]) : _vm._e(), _vm._v(" "), _vm._m(2), _vm._v(" "), _vm.authcheckUsrNotAnalyst ? _c("th", {
    staticClass: "font-weight-bold text-uppercase vertical-middle text-center"
  }, [_c("label", [_vm._v("Attacher la notification signé")])]) : _vm._e(), _vm._v(" "), !_vm.authcheckUsrNotAnalyst ? _c("th", {
    staticClass: "font-weight-bold text-uppercase vertical-middle text-center"
  }, [_c("label", [_vm._v("Attacher la notification signé par la banque")])]) : _vm._e()])]), _vm._v(" "), _c("tbody", _vm._l(_vm.conventions, function (convention, index) {
    return _c("tr", {
      key: convention.id
    }, [_c("td", {
      staticClass: "col-4 vertical-middle",
      staticStyle: {
        "min-width": "100px"
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
        type: "text",
        disabled: _vm.areInputsDisabled(index)
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
        disabled: _vm.areInputsDisabled(index)
      },
      domProps: {
        value: convention.commentaire
      },
      on: {
        change: [function ($event) {
          return _vm.$set(convention, "commentaire", $event.target.value);
        }, _vm.handleInput]
      }
    })]), _vm._v(" "), !_vm.authcheckUsrNotAnalyst ? _c("td", {
      staticClass: "col-4 vertical-middle",
      staticStyle: {
        "min-width": "75px"
      }
    }, [_c("div", {
      staticClass: "row display-flex"
    }, [_c("div", {
      staticClass: "col",
      staticStyle: {
        flex: "1"
      }
    }, [_c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: convention.statut,
        expression: "convention.statut"
      }],
      staticClass: "form-select",
      staticStyle: {
        width: "100%"
      },
      attrs: {
        disabled: _vm.areInputsDisabled(index)
      },
      on: {
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(convention, "statut", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, _vm.handleInput]
      }
    }, [_c("option", {
      attrs: {
        disabled: "",
        selected: "",
        value: ""
      }
    }, [_vm._v("Sélectionner")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "signe"
      }
    }, [_vm._v("Signé")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "signe_banque"
      }
    }, [_vm._v("Signé par la Banque")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "non_signe"
      }
    }, [_vm._v("Non signé")])])])])]) : _vm._e(), _vm._v(" "), _c("td", {
      staticClass: "col-2 vertical-middle"
    }, [_c("div", {
      staticClass: "d-flex justify-content-center"
    }, [(convention === null || convention === void 0 ? void 0 : convention.files) > 0 ? _c("div", [_vm.showBtnDownload ? _c("div", {}, _vm._l(_vm.file_data_list[index], function (file, fileIndex) {
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
          title: "Télécharger la convention"
        },
        on: {
          click: function click($event) {
            return _vm.downloadFileNonSigne(index, fileIndex);
          }
        }
      }, [_c("i", {
        staticClass: "icofont-download"
      })]), _vm._v(" "), !_vm.authcheckUsrNotAnalyst ? _c("span", {
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
      })]) : _vm._e()]);
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
        background: "#04821a",
        width: "50px",
        height: "30px",
        border: "1px solid rgb(4, 130, 26)",
        "font-size": "13px",
        padding: "1px"
      },
      attrs: {
        type: "button",
        name: "button",
        "data-toggle": "tooltip",
        title: "Cliquer ici pour générer automatiquement le(s) convention(s)"
      },
      on: {
        click: function click($event) {
          return _vm.openAnnexeModal(index);
        }
      }
    }, [_c("i", {
      staticClass: "icofont-automation"
    })]) : _vm._e()]) : _vm._e()])]), _vm._v(" "), _vm.authcheckUsrNotAnalyst ? _c("td", {
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
            return _vm.downloadFileSigne(index, fileIndex);
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
        title: "Cliquer ici pour uploader ou voir le(s) convention(s)"
      },
      on: {
        click: function click($event) {
          return _vm.handleDoubleClickOrClickSigne(index);
        }
      }
    }, [_c("i", {
      staticClass: "icofont-attachment"
    })]) : _vm._e()]) : _vm._e()])]) : _vm._e(), _vm._v(" "), !_vm.authcheckUsrNotAnalyst ? _c("td", {
      staticClass: "col-2 vertical-middle"
    }, [_c("div", {
      staticClass: "d-flex justify-content-center"
    }, [(convention === null || convention === void 0 ? void 0 : convention.files_banque_signes) > 0 ? _c("div", [_vm.showBtnDownloadBanqueSigne ? _c("div", {}, _vm._l(_vm.file_data_list_banque_signe[index], function (file, fileIndex) {
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
            return _vm.downloadFileSigneBanque(index, fileIndex);
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
            }, index, false, true);
          }
        }
      }, [_c("i", {
        staticClass: "icofont-ui-delete"
      })])]);
    }), 0) : _c("div", [_c("span", {
      staticClass: "spinner-border"
    })])]) : _vm._e(), _vm._v(" "), !(convention !== null && convention !== void 0 && convention.files_banque_signes) > 0 ? _c("div", {
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
        title: "Cliquer ici pour uploader ou voir le(s) convention(s)"
      },
      on: {
        click: function click($event) {
          return _vm.handleDoubleClickOrClickSigneBanque(index);
        }
      }
    }, [_c("i", {
      staticClass: "icofont-attachment"
    })]) : _vm._e()]) : _vm._e()])]) : _vm._e()]);
  }), 0)])])]) : _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        return _vm.toggleIsSeen("conventions");
      }
    }
  }, [_c("h6", {
    "class": "subdiv" + _vm.tb_name
  }, [_vm._v("\n                  Envoie des contrats\n                  "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)])]), _vm._v(" "), _c("button", {
    staticClass: "btn shadow-md text-white position-absolute",
    staticStyle: {
      cursor: "pointer",
      right: "16px",
      bottom: "50px",
      background: "#2c3e50",
      "max-width": "max-content"
    },
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.retract();
      }
    }
  }, [_vm._v("\n              Fermer le tableau\n            ")])])])]) : _c("div", {
    staticClass: "card card-width-height"
  }, [_c("br"), _vm._v(" "), _c("div", {
    staticClass: "card-header hdc pb-0 pt-2"
  }, [_c("h6", {
    attrs: {
      id: "dajc-red0-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v(_vm._s(_vm.tb_display_name) + " : Notification de concours bancaires")]), _vm._v(" "), _c("div", {
    staticClass: "col-auto"
  }, [((_vm$formDataToBeWatch2 = _vm.formDataToBeWatched.notes) === null || _vm$formDataToBeWatch2 === void 0 ? void 0 : _vm$formDataToBeWatch2.length) > 0 ? _c("span", {
    attrs: {
      role: "button"
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
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "badge-sm pb-3"
  }, [_vm._v(_vm._s(_vm.formDataToBeWatched.notes.length))])]) : _vm._e(), _vm._v(" "), _c("chevron-down-icon", {
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
  return _c("th", {
    staticClass: "font-weight-bold text-uppercase vertical-middle"
  }, [_c("label", [_vm._v("Libéllé")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("th", {
    staticClass: "font-weight-bold text-uppercase vertical-middle"
  }, [_c("label", {
    staticStyle: {
      "padding-left": "5px"
    }
  }, [_vm._v("Commentaire")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("th", {
    staticClass: "font-weight-bold text-uppercase vertical-middle text-center"
  }, [_c("label", [_vm._v("Générer une notification de concours")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/notification_decision/NO-CB0.vue?vue&type=style&index=0&id=1beb315c&scoped=true&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/notification_decision/NO-CB0.vue?vue&type=style&index=0&id=1beb315c&scoped=true&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n*[data-v-1beb315c] {\r\n  font-family: \"Google Sans\", sans-serif;\n}\nlabel[data-v-1beb315c] {\r\n  font-size: 13px;\r\n  margin-bottom: 0;\n}\ninput[type=\"text\"][data-v-1beb315c],\r\ninput[type=\"date\"][data-v-1beb315c],\r\nselect[data-v-1beb315c],\r\ntextarea[data-v-1beb315c] {\r\n  height: 35px;\r\n  border-color: #34495e08;\r\n  color: #57606f;\r\n  font-size: 13px;\r\n  font-weight: bold;\n}\n.card-width-height[data-v-1beb315c] {\r\n  width: 100%;\r\n  height: 100%;\n}\n.hdc[data-v-1beb315c] {\r\n  background-color: #57606f;\n}\n.card-header h6[data-v-1beb315c] {\r\n  color: #f1f2f6;\r\n  font-size: 22px;\n}\ninput[type=\"text\"][data-v-1beb315c],\r\ninput[type=\"date\"][data-v-1beb315c],\r\ntextarea[data-v-1beb315c] {\r\n  width: 100%;\n}\n.th[data-v-1beb315c] {\r\n  padding: 4px;\r\n  padding-bottom: 0;\n}\n.badge-sm[data-v-1beb315c] {\r\n  display: inline-block;\r\n  width: 15px;\r\n  height: 15px;\r\n  background: rgba(255, 0, 0, 0.882);\r\n  color: white;\r\n  font-size: 12px;\r\n  font-weight: 500;\r\n  border-radius: 100%;\r\n  position: absolute;\r\n  top: -20%;\r\n  left: 55%;\r\n  text-align: center;\n}\n.relook-header[data-v-1beb315c] {\r\n  color: #000;\r\n  background-color: #f4f3f3;\r\n  padding: 5px;\r\n  border-bottom: 1px solid #b6b8bb;\n}\n.table-responsive[data-v-1beb315c] {\r\n  overflow-x: auto;\n}\n.sticky[data-v-1beb315c] {\r\n  position: sticky;\r\n  left: 0;\r\n  background: #fff;\r\n  z-index: 1;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/notification_decision/NO-CB0.vue?vue&type=style&index=0&id=1beb315c&scoped=true&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/notification_decision/NO-CB0.vue?vue&type=style&index=0&id=1beb315c&scoped=true&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NO_CB0_vue_vue_type_style_index_0_id_1beb315c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NO-CB0.vue?vue&type=style&index=0&id=1beb315c&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/notification_decision/NO-CB0.vue?vue&type=style&index=0&id=1beb315c&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NO_CB0_vue_vue_type_style_index_0_id_1beb315c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NO_CB0_vue_vue_type_style_index_0_id_1beb315c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/forms/afg/notification_decision/NO-CB0.vue":
/*!****************************************************************************!*\
  !*** ./resources/js/components/forms/afg/notification_decision/NO-CB0.vue ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NO_CB0_vue_vue_type_template_id_1beb315c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NO-CB0.vue?vue&type=template&id=1beb315c&scoped=true */ "./resources/js/components/forms/afg/notification_decision/NO-CB0.vue?vue&type=template&id=1beb315c&scoped=true");
/* harmony import */ var _NO_CB0_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NO-CB0.vue?vue&type=script&lang=js */ "./resources/js/components/forms/afg/notification_decision/NO-CB0.vue?vue&type=script&lang=js");
/* harmony import */ var _NO_CB0_vue_vue_type_style_index_0_id_1beb315c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NO-CB0.vue?vue&type=style&index=0&id=1beb315c&scoped=true&lang=css */ "./resources/js/components/forms/afg/notification_decision/NO-CB0.vue?vue&type=style&index=0&id=1beb315c&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _NO_CB0_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _NO_CB0_vue_vue_type_template_id_1beb315c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _NO_CB0_vue_vue_type_template_id_1beb315c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "1beb315c",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/forms/afg/notification_decision/NO-CB0.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/forms/afg/notification_decision/NO-CB0.vue?vue&type=script&lang=js":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/notification_decision/NO-CB0.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NO_CB0_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NO-CB0.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/notification_decision/NO-CB0.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NO_CB0_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/forms/afg/notification_decision/NO-CB0.vue?vue&type=style&index=0&id=1beb315c&scoped=true&lang=css":
/*!************************************************************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/notification_decision/NO-CB0.vue?vue&type=style&index=0&id=1beb315c&scoped=true&lang=css ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NO_CB0_vue_vue_type_style_index_0_id_1beb315c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NO-CB0.vue?vue&type=style&index=0&id=1beb315c&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/notification_decision/NO-CB0.vue?vue&type=style&index=0&id=1beb315c&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/forms/afg/notification_decision/NO-CB0.vue?vue&type=template&id=1beb315c&scoped=true":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/notification_decision/NO-CB0.vue?vue&type=template&id=1beb315c&scoped=true ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NO_CB0_vue_vue_type_template_id_1beb315c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NO_CB0_vue_vue_type_template_id_1beb315c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NO_CB0_vue_vue_type_template_id_1beb315c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NO-CB0.vue?vue&type=template&id=1beb315c&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/notification_decision/NO-CB0.vue?vue&type=template&id=1beb315c&scoped=true");


/***/ })

}]);