"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_forms_afg_fiche_suivi_corporate_CF-SA4_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/fiche_suivi_corporate/CF-SA4.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/fiche_suivi_corporate/CF-SA4.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/auth.service */ "./resources/js/services/auth.service.js");
/* harmony import */ var _services_credit_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/credit.service */ "./resources/js/services/credit.service.js");
/* harmony import */ var _services_connects_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/connects.service */ "./resources/js/services/connects.service.js");
/* harmony import */ var _services_proxy_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/proxy.service */ "./resources/js/services/proxy.service.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _services_afg_f8_data_extractor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/afg/f8-data-extractor */ "./resources/js/services/afg/f8-data-extractor.js");
/* harmony import */ var _johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @johmun/vue-tags-input */ "./node_modules/@johmun/vue-tags-input/dist/vue-tags-input.js");
/* harmony import */ var _johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }












window.$ = window.jQuery = __webpack_require__(/*! jquery/dist/jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "fiche-suivi",
  display: "Fiche de suivi",
  components: {
    MoreVerticalIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__.MoreVerticalIcon,
    ChevronUpIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__.ChevronUpIcon,
    ChevronDownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__.ChevronDownIcon,
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__.PlusIcon,
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__.TrashIcon,
    AirplayIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__.AirplayIcon,
    BookOpenIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__.BookOpenIcon,
    VueTagsInput: (_johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_6___default())
  },
  props: _defineProperty({
    meta_data: Object,
    tb_name: String,
    tb_display_name: String
  }, "tb_display_name", String),
  created: function created() {
    var _pub_workflow;
    var _this$meta_data$dossi = this.meta_data["dossier_credit"],
      stage = _this$meta_data$dossi.pub_workflow_curr_stage,
      pub_workflow = _this$meta_data$dossi.pub_workflow;
    var sup_id = (_pub_workflow = pub_workflow[stage + 1]) === null || _pub_workflow === void 0 ? void 0 : _pub_workflow.responsible_id;
    var roles = ['kggrA5A18KdHk452gEtk', 'mq98YcQYj8HXUXca2JMR'];
    var users_id = [];
    if (!['', null, undefined].includes(sup_id)) {
      users_id.push(sup_id);
    }
    this.getUsersDefault(roles, users_id);
  },
  mounted: function mounted() {
    var _this$meta_data$dossi2,
      _this = this;
    this.loadRetrieved();
    this.loadTbAttrs(); // charge les attributs + sous attributs des tables
    this.tableClosedOrOpened();
    var cred_pub_keys = this.determineCredPubTables((_this$meta_data$dossi2 = this.meta_data.dossier_credit) === null || _this$meta_data$dossi2 === void 0 ? void 0 : _this$meta_data$dossi2.applied_templ_name);
    this.f8Data = this.f8DataExtractor.getData(this.meta_data.dossier_credit, cred_pub_keys[2]);
    EventBus.$on("created-extra-file-template", function (data) {
      _this.revues_garanties.forEach(function (element, index) {
        var _data$template;
        var template_name = "Pièce jointe -revues_garanties" + index + "_" + _this.$route.params.templateId;
        if (template_name == (data === null || data === void 0 || (_data$template = data.template) === null || _data$template === void 0 ? void 0 : _data$template.name)) {
          var _data$template2, _data$template3, _data$template4;
          _this.revues_garanties[index]['template'] = {
            id: data === null || data === void 0 || (_data$template2 = data.template) === null || _data$template2 === void 0 ? void 0 : _data$template2.id,
            name: data === null || data === void 0 || (_data$template3 = data.template) === null || _data$template3 === void 0 ? void 0 : _data$template3.name,
            slug: data === null || data === void 0 || (_data$template4 = data.template) === null || _data$template4 === void 0 ? void 0 : _data$template4.slug
          };
          _this.handleInput();
        }
      });
    });
    EventBus.$on("updated-extra-file-upload", function (data) {
      _this.getFiles();
    });
    this.formDataToBeWatched.revues_garanties = _toConsumableArray(this.revues_garanties);
    this.formDataToBeWatched.garantie_recueillis = this.garantiesSpecifiquesNew;
    this.getFiles();
  },
  computed: {
    filteredUsers: function filteredUsers() {
      this.receivers = this.users.map(function (el) {
        return _objectSpread({
          text: "".concat(el.name, " ( ").concat(el.role[0].display_name, " )")
        }, el);
      });
      return this.receivers;
    },
    filteredUsersDefault: function filteredUsersDefault() {
      var users = this.usersDefault.map(function (el) {
        return _objectSpread({
          text: "".concat(el.name, " ( ").concat(el.role[0].display_name, " )")
        }, el);
      });
      return users;
    },
    defaultActors: function defaultActors() {
      var _pub_workflow2;
      var caf = this.filteredUsersDefault.find(function (el) {
        return ['kggrA5A18KdHk452gEtk'].includes(el.role_id);
      });
      var ca = this.filteredUsersDefault.find(function (el) {
        return (el === null || el === void 0 ? void 0 : el.role_id) == 'mq98YcQYj8HXUXca2JMR';
      });
      var _this$meta_data$dossi3 = this.meta_data["dossier_credit"],
        stage = _this$meta_data$dossi3.pub_workflow_curr_stage,
        pub_workflow = _this$meta_data$dossi3.pub_workflow;
      var roles_dajc = [];
      var responsibles = this.filteredUsersDefault.filter(function (el) {
        return roles_dajc.includes(el === null || el === void 0 ? void 0 : el.role_id);
      });
      var sup_id = (_pub_workflow2 = pub_workflow[stage + 1]) === null || _pub_workflow2 === void 0 ? void 0 : _pub_workflow2.responsible_id;
      var sup = this.filteredUsersDefault.find(function (el) {
        return el.id == sup_id;
      });
      var actors = [caf, ca, sup];
      if (!['', null, undefined].includes(responsibles) && responsibles.length > 0) {
        actors = actors.concat(responsibles);
      }
      return actors.filter(function (el) {
        return el != null;
      });
    },
    isDAJC: function isDAJC() {
      return false;
      // return this.meta_data['dossier_credit']?.final_outcome?.outcome != 0 && 
      //        this.autorizeRole.includes(this.authcheckUsr?.role_uuid);
    },
    garantiesSpecifiquesNew: function garantiesSpecifiquesNew() {
      var _this$f8Data,
        _this$f8Data2,
        _this2 = this;
      var newGarantie = [].concat(_toConsumableArray((_this$f8Data = this.f8Data) === null || _this$f8Data === void 0 ? void 0 : _this$f8Data.newLinesgarantiesSpecifiques), _toConsumableArray((_this$f8Data2 = this.f8Data) === null || _this$f8Data2 === void 0 ? void 0 : _this$f8Data2.newLinesgarantiesGenerales));
      return newGarantie.filter(function (garantie, index, list) {
        var _this2$f8Data, _this2$authenticatedU, _garantie$state_;
        var line = (_this2$f8Data = _this2.f8Data) === null || _this2$f8Data === void 0 ? void 0 : _this2$f8Data.newLines.find(function (l) {
          var _garantie$parentId, _garantie$parentId2;
          return ((_garantie$parentId = garantie.parentId) === null || _garantie$parentId === void 0 ? void 0 : _garantie$parentId.includes(l.id)) || ((_garantie$parentId2 = garantie.parentId) === null || _garantie$parentId2 === void 0 ? void 0 : _garantie$parentId2.includes(l.from));
        });
        if ((line === null || line === void 0 ? void 0 : line.filiale) != ((_this2$authenticatedU = _this2.authenticatedUser) === null || _this2$authenticatedU === void 0 ? void 0 : _this2$authenticatedU.filiale)) return false;
        if ((line === null || line === void 0 ? void 0 : line.statut) != 'Nouveau') return ((_garantie$state_ = garantie.state_) === null || _garantie$state_ === void 0 ? void 0 : _garantie$state_.is_detained) == 'detenues';
        return true;
      });
    },
    garantiesGeneralesOld: function garantiesGeneralesOld() {
      var _this$f8Data3,
        _this$f8Data4,
        _this3 = this;
      var generales = Array.isArray((_this$f8Data3 = this.f8Data) === null || _this$f8Data3 === void 0 ? void 0 : _this$f8Data3.oldLinesgarantiesGenerales) ? this.f8Data.oldLinesgarantiesGenerales : [];
      var specifiques = Array.isArray((_this$f8Data4 = this.f8Data) === null || _this$f8Data4 === void 0 ? void 0 : _this$f8Data4.oldLinesgarantiesSpecifiques) ? this.f8Data.oldLinesgarantiesSpecifiques : [];

      // Combine arrays
      var garantieOld = [].concat(_toConsumableArray(generales), _toConsumableArray(specifiques));
      return garantieOld.filter(function (garantie) {
        var _this3$f8Data, _this3$authenticatedU;
        // Find matching line, default to null if not found
        var line = ((_this3$f8Data = _this3.f8Data) === null || _this3$f8Data === void 0 || (_this3$f8Data = _this3$f8Data.oldLines) === null || _this3$f8Data === void 0 ? void 0 : _this3$f8Data.find(function (l) {
          return Array.isArray(garantie.parentId) && (garantie.parentId.includes(l.id) || garantie.parentId.includes(l.from));
        })) || null;

        // Return true only if line exists and filiale matches
        return line && line.filiale === ((_this3$authenticatedU = _this3.authenticatedUser) === null || _this3$authenticatedU === void 0 ? void 0 : _this3$authenticatedU.filiale);
      });
    }
  },
  data: function data() {
    var _ref;
    var vm = this;
    return _ref = {
      isLoding: {
        0: false
      },
      buttonStatus: {
        0: true
      },
      filterInput: "",
      tagValue: undefined,
      tagging: false,
      users: [],
      taggedUsers: [],
      autocompleteItems: [],
      pieces_versees_clients: [],
      pieces_versees_credits: [],
      pieces_versees_suretes: [],
      pieces_versees_autres: [],
      tag: {
        0: ""
      },
      tg: "",
      seens: {
        0: true
      },
      seen1: true,
      seen2: true,
      template: "",
      files: 0,
      connectsHost: _services_connects_service__WEBPACK_IMPORTED_MODULE_3__["default"].loadablehost()
    }, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_ref, "files", []), "tags", {
      0: []
    }), "autorizeRole", ["gTz6TD6V0yVaXAssKaUg", "WUBaT1LB5GbXzr9ru2D3"]), "contextList", [{
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
    }]), "ebapisHost", _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__["default"].host), "authcheck", false), "authcheckUsr", null), "authcheckStatus", null), "watchInPause", false), "initLoad", true), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_ref, "seen", true), "seen2", true), "seen3", true), "listingNote", false), "dossier_credit", null), "toDelete", ''), "meta_parseable", {
      cred_pub_key: this.meta_data["cred_pub_key"],
      tb_name: this.tb_name
    }), "display_response", false), "formDataToBeWatched", {
      comment_pieces_requises: "",
      fiche_suivis: "",
      notes: [],
      revues_garanties: [],
      garantie_recueillis: []
    }), "fiche_suivis", [{
      fiche: [{
        question: "",
        reponse: "",
        is_answered: false
      }],
      is_answered: false,
      update_at: "",
      created_at: new Date(),
      created_by: "",
      sender: "",
      receivers: "",
      has_notified: false
    }]), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_ref, "isResponse", false), "debounce", null), "searchUser", false), "usersDefault", []), "revues_garanties", [{
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_9__["default"])(),
      name: "Statut des Titres de propriété des biens affectés en garantie (libres de toute charge/déjà grevés/inaliénables/indisponibles)",
      value: "",
      comment: "",
      files: 0,
      template: {},
      is_client: true,
      "default": true
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_9__["default"])(),
      name: "Les biens appartiennent-ils au client ?",
      value: "",
      comment: "",
      files: 0,
      template: {},
      is_client: true,
      "default": true
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_9__["default"])(),
      name: "S’agit-il des garanties d’emprunt ?",
      value: "",
      comment: "",
      files: 0,
      template: {},
      is_client: true,
      "default": true
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_9__["default"])(),
      name: "Quel est le lien juridique entre les propriétaires des biens et le client ?",
      value: "",
      comment: "",
      files: 0,
      template: {},
      is_client: true,
      "default": true
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_9__["default"])(),
      name: "Rapports d’expertise du bien valides (expert agréé, expertise de moins de 02 ans)",
      value: "",
      comment: "",
      files: 0,
      template: {},
      is_client: true,
      "default": true
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_9__["default"])(),
      name: "Légalité de l’activité financée (activités illicites interdites ou prohibées)",
      value: "",
      comment: "",
      files: 0,
      template: {},
      is_client: true,
      "default": true
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_9__["default"])(),
      name: "Les biens immobiliers sont-ils des parcelles forestières/plantations/marécages/en zone inhabitées /rurale/impraticable ?",
      value: "",
      comment: "",
      files: 0,
      template: {},
      is_client: true,
      "default": true
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_9__["default"])(),
      name: "Activité conforme aux bonnes mœurs et à la bonne moralité publique",
      value: "",
      comment: "",
      files: 0,
      template: {},
      is_client: true,
      "default": true
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_9__["default"])(),
      name: "Les biens immobiliers sont-ils des parcelles forestières/plantations/marécages/en zone inhabitées /rurale/impraticable ?",
      value: "",
      comment: "",
      files: 0,
      template: {},
      is_client: true,
      "default": true
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_9__["default"])(),
      name: "Rapport de visite obligatoire de la garantie par la DJC, la DCP et la ligne commerciale ",
      value: "",
      comment: "",
      files: 0,
      template: {},
      is_client: true,
      is_credit: true,
      "default": true
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_9__["default"])(),
      name: "Quelles sont les conclusions du rapport de visite ?",
      value: "",
      comment: "",
      files: 0,
      template: {},
      is_client: true,
      "default": true
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_9__["default"])(),
      name: "Détermination de la valeur de la caution personnelle ou Fiche de déclaration de patrimoine",
      value: "",
      comment: "",
      files: 0,
      template: {},
      is_client: true,
      "default": true
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_9__["default"])(),
      name: "Au regard de la fiche de patrimoine, la Caution a-t-elle une valeur certaine rapportée aux engagements ?",
      value: "",
      comment: "",
      files: 0,
      template: {},
      is_client: true,
      "default": true
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_9__["default"])(),
      name: "Plan de localisation du domicile de la caution",
      value: "",
      comment: "",
      files: 0,
      template: {},
      is_client: true,
      "default": true
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_9__["default"])(),
      name: "PV de l’organe délibérant autorisant l’exécutif social à affecter les biens sociaux en garanties",
      value: "",
      comment: "",
      files: 0,
      template: {},
      is_client: true,
      "default": true
    }]), "f8Data", null), "f8DataExtractor", _services_afg_f8_data_extractor__WEBPACK_IMPORTED_MODULE_5__["default"]), "is_client", false), "is_surete", false), "is_credit", false), _defineProperty(_defineProperty(_defineProperty(_ref, "is_autre", true), "default", false), "is_dajc", false);
  },
  methods: {
    // changeGarantie(index) {
    //     this.formDataToBeWatched.garantie_recueillis[index].default = !this.formDataToBeWatched.garantie_recueillis[index].default
    // },
    determineSRC: function determineSRC() {
      this.getUsers();
      var src = this.users.filter(function (el) {
        if ((el === null || el === void 0 ? void 0 : el.role_id) == 'tyJLxuAh6F2DJR6e') {
          return el;
        }
      });
      src = src[0];
      return src;
    },
    manageButton: function manageButton(index) {
      if (this.isLoding[index] == false && this.buttonStatus[index] == false) {
        return true;
      }
      return false;
    },
    getTag: function getTag(index) {
      this.tg = this.tag[index];
    },
    retractDynamique: function retractDynamique(index) {
      this.$set(this.seens, index, !this.seens[index]);
    },
    setColor: function setColor(elt) {
      var _elt$;
      if (((_elt$ = elt[1]) === null || _elt$ === void 0 ? void 0 : _elt$.reponse) == "") {
        return "text-dark";
      }
    },
    addMoreFiche: function addMoreFiche() {
      var receivers = this.defaultActors;
      var notified_users = _toConsumableArray(receivers);
      this.tags[this.fiche_suivis.length] = _toConsumableArray(receivers);
      this.fiche_suivis[0].sender = this.authcheckUsr;
      this.fiche_suivis.push({
        fiche: [{
          question: "",
          reponse: "",
          is_answered: false
        }],
        is_answered: false,
        update_at: "",
        created_at: new Date(),
        created_by: "",
        sender: this.authcheckUsr,
        receivers: receivers,
        notified_users: notified_users,
        has_notified: false
      });
      this.$set(this.seens, this.fiche_suivis.length - 1, true);
      this.$set(this.isLoding, this.fiche_suivis.length - 1, false);
      this.$set(this.buttonStatus, this.fiche_suivis.length - 1, true);
      console.log("isLoding", this.isLoding);
    },
    removeFiche: function removeFiche(index) {
      this.toDelete = index;
      this.$modal.show("confirm_supp_fiche_suivis", index);
    },
    deleteFiche: function deleteFiche(index) {
      this.fiche_suivis.splice(index, 1);
      this.$modal.hide("confirm_supp_fiche_suivis");
      this.toDelete = '';
    },
    closeModal: function closeModal() {
      this.$modal.hide("confirm_supp_fiche_suivis");
    },
    initFicheLecture: function initFicheLecture() {
      this.fiche_suivis = [[{
        question: "",
        niveau_risque: "",
        avis: ""
      }, {
        reponse: "",
        niveau_risque: "",
        avis: ""
      }]];
    },
    tableClosedOrOpened: function tableClosedOrOpened() {
      this.seen = this.fetchClosedTables(this.tb_name + this.meta_data['cred_pub_key']);
    },
    addMore: function addMore(index) {
      var _this$fiche_suivis$in;
      (_this$fiche_suivis$in = this.fiche_suivis[index]) === null || _this$fiche_suivis$in === void 0 || _this$fiche_suivis$in.fiche.push({
        question: "",
        reponse: "",
        is_answered: false
      });
      this.handleInput();
    },
    remove: function remove(index, idx) {
      this.fiche_suivis[index].fiche.splice(idx, 1);
      this.handleInput();
    },
    handleDoubleClickOrClick: function handleDoubleClickOrClick(event, index) {
      var _this4 = this;
      EventBus.$emit("open-extra-file-explorer");
      // const filename = this.revues_garanties[index]?.name

      setTimeout(function () {
        EventBus.$emit("data-extra-file-explorer", {
          id: _this4.slugify("Pièce jointe"),
          name: "Pièce jointe" + ' {(*)}revues_garanties' + index + "_" + _this4.$route.params.templateId
          // name: filename,
        });
      }, 500);
    },
    highlightText: function highlightText(text, el) {
      var doc_name = this.$options.filters.highlight(text, this.checkListSearchInput);
      if (el.is_required) {
        doc_name = doc_name + ' <span class="fw-bold" style="color:red">*</span>';
      }
      return doc_name;
    },
    addMoreKYC: function addMoreKYC() {
      var obj = {
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_9__["default"])(),
        name: "",
        type_clientele: ["morale_ordinaire", "physique_ordinaire", "physique_commercante", "societes_commerciales", "ong_et_associations", "sci"],
        type_credits: ["avance_sur_facture_bon_de_commande", "pret_amortissables", "ouverture_de_credit_negoce_icafe_cacao", "cautions_sur_marche", "cautions_fiscales_et_diverses", "credit_enlevement", "les_obligations_cautionnees", "entrepots_fictifs", "aval_sur_effet", "credit_bail"],
        surete: ["nantissement_de_titres", "nantissement_de_compte", "nantissement_de_marche_public", "gage_materiel_stock_machandises_produits_nantis", "gage_de_vehicule", "nantissement_de_fdc_au_materiel", "cession_creance", "hypotheque", "cautionnement_solidaire_et_personnel", "garanties_autonomes_et_contre_garanties_autonomes"],
        value: "",
        checked: true,
        disabled: false,
        files: 0,
        template: "",
        comment: "",
        is_client: false,
        // this.activeMenu == "client" ? true : false,
        is_surete: false,
        // this.activeMenu == "surete" ? true : false,
        is_credit: false,
        // this.activeMenu == "credit" ? true : false,
        is_autre: true,
        // this.activeMenu == "autre" ? true : false,
        "default": false,
        is_dajc: false,
        is_post_approval: this.isPostAppro
      };
      this.revues_garanties.push(obj);
      this.pieces_versees_autres.push(this.revues_garanties[this.revues_garanties.length - 1]);
    },
    removeKYC: function removeKYC(id) {
      this.revues_garanties = this.revues_garanties.filter(function (item) {
        return item.id !== id;
      });
      this.handleInput();
    },
    pressAtKey: function pressAtKey(event) {
      this.tagging = true;
    },
    checkboxValCashCall: function checkboxValCashCall(event, index) {
      var value = event.target.checked ? event.target.value : "";
      this.revues_garanties[index]["value"] = value;
      var isClient = this.revues_garanties[index].is_client;
      var isCredit = this.revues_garanties[index].is_credit;
      var isSurete = this.revues_garanties[index].is_surete;
      var name = this.revues_garanties[index].name;
      var findIdxByName = function findIdxByName(arr) {
        return arr && Array.isArray(arr) ? arr.findIndex(function (item) {
          return item.name === name;
        }) : -1;
      };
      if (isClient && this.pieces_versees_clients && this.pieces_versees_clients.length > 0) {
        var idx = findIdxByName(this.pieces_versees_clients);
        if (idx !== -1) this.pieces_versees_clients[idx]["value"] = value;
      } else if (isCredit && this.pieces_versees_credits && this.pieces_versees_credits.length > 0) {
        var _idx = findIdxByName(this.pieces_versees_credits);
        if (_idx !== -1) this.pieces_versees_credits[_idx]["value"] = value;
      } else if (isSurete && this.pieces_versees_suretes && this.pieces_versees_suretes.length > 0) {
        var _idx2 = findIdxByName(this.pieces_versees_suretes);
        if (_idx2 !== -1) this.pieces_versees_suretes[_idx2]["value"] = value;
      } else if (this.pieces_versees_autres && this.pieces_versees_autres.length > 0) {
        var _idx3 = findIdxByName(this.pieces_versees_autres);
        if (_idx3 !== -1) this.pieces_versees_autres[_idx3]["value"] = value;
      }
      this.handleInput();
    },
    openNotesModal: function openNotesModal() {
      var listing = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.listingNote = listing;
      this.$modal.show(this.tb_name);
    },
    determineCurrentKey: function determineCurrentKey() {
      return "revues_garanties";
    },
    getFiles: function getFiles() {
      var _this$meta_data,
        _this5 = this;
      _services_proxy_service__WEBPACK_IMPORTED_MODULE_4__["default"].proxyEbapis({
        url: this.connectsHost + 'api/get-files',
        method: 'POST',
        data: {
          file_identity: (_this$meta_data = this.meta_data) === null || _this$meta_data === void 0 || (_this$meta_data = _this$meta_data.dossier_credit) === null || _this$meta_data === void 0 ? void 0 : _this$meta_data.cred_pub_key
        }
      }).then(function (res) {
        var _res$data$data, _res$data$data2;
        res.data = JSON.parse(res.data);
        if (((_res$data$data = res.data.data) === null || _res$data$data === void 0 ? void 0 : _res$data$data.length) > 0 || ((_res$data$data2 = res.data.data) === null || _res$data$data2 === void 0 ? void 0 : _res$data$data2.length) != null) {
          _this5.files = res.data.data;
          var current_key = _this5.determineCurrentKey();
          // console.log("current",current_key);

          _this5[current_key].forEach(function (element, index) {
            var count = 0;
            _this5.files.forEach(function (file) {
              var _element$template;
              // console.log(file);
              // console.log("element", element);
              if ((file === null || file === void 0 ? void 0 : file.extra_file_template_id) != null && (element === null || element === void 0 || (_element$template = element.template) === null || _element$template === void 0 ? void 0 : _element$template.id) == (file === null || file === void 0 ? void 0 : file.extra_file_template_id)) {
                count++;
              }
            });
            _this5[current_key][index]['files'] = count;
          });
        }
      })["catch"](function (err) {
        console.error("getFiles error", err);
      });
    },
    loadCheckListData: function loadCheckListData() {
      var _this$meta_data$dossi4, _this$meta_data$dossi5, _this$meta_data$dossi6, _this$meta_data$dossi7;
      var categorie_client = (_this$meta_data$dossi4 = this.meta_data.dossier_credit) === null || _this$meta_data$dossi4 === void 0 ? void 0 : _this$meta_data$dossi4.categorie_client;
      var options = {
        categorie_client: categorie_client,
        type_credit: (_this$meta_data$dossi5 = (_this$meta_data$dossi6 = this.meta_data.dossier_credit) === null || _this$meta_data$dossi6 === void 0 ? void 0 : _this$meta_data$dossi6.applied_templ_name) !== null && _this$meta_data$dossi5 !== void 0 ? _this$meta_data$dossi5 : "",
        occupation: "NA",
        filiale: (_this$meta_data$dossi7 = this.meta_data.dossier_credit) === null || _this$meta_data$dossi7 === void 0 || (_this$meta_data$dossi7 = _this$meta_data$dossi7.caf_recorded_file) === null || _this$meta_data$dossi7 === void 0 ? void 0 : _this$meta_data$dossi7.filiale,
        is_group: "non"
      };

      // this.sendrequest(options)
    },
    loadRetrieved: function loadRetrieved() {
      var _this$meta_data$dossi8, _this$meta_data$dossi9, _this$meta_data$dossi0;
      var lentb = ((_this$meta_data$dossi8 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi8 === void 0 ? void 0 : _this$meta_data$dossi8.tbs_in_use) || [];
      var createdKey = this.tb_name;
      var createdKeyArr = createdKey.split("tb");
      createdKey = "cred_pub_tb_" + createdKeyArr[1];
      var applied_templ_name = (_this$meta_data$dossi9 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi9 === void 0 ? void 0 : _this$meta_data$dossi9.applied_templ_name;
      var tbArrays = this.determineCredPubTables(applied_templ_name, this.meta_data["dossier_credit"]);
      var tbPiecesVerseesList = ((_this$meta_data$dossi0 = this.meta_data["dossier_credit"][createdKey]) === null || _this$meta_data$dossi0 === void 0 ? void 0 : _this$meta_data$dossi0.revues_garanties) || [];
      if (!Array.isArray(tbPiecesVerseesList) || tbPiecesVerseesList.length === 0) {
        var _this$meta_data2;
        this.loadCheckListData((_this$meta_data2 = this.meta_data) === null || _this$meta_data2 === void 0 ? void 0 : _this$meta_data2.dossier_credit, tbArrays[0], tbArrays[2], true);
      }
      if (lentb.length > 0 && this.meta_data["dossier_credit"][createdKey]) {
        var _this$meta_data$dossi1;
        this.formDataToBeWatched = this.meta_data["dossier_credit"][createdKey];
        if ((_this$meta_data$dossi1 = this.meta_data["dossier_credit"][createdKey]) !== null && _this$meta_data$dossi1 !== void 0 && _this$meta_data$dossi1.revues_garanties) {
          this.showCheckList = true;
          this.revues_garanties = this.meta_data["dossier_credit"][createdKey]["revues_garanties"];
          this.pieces_versees_clients = this.revues_garanties.filter(function (liste) {
            return liste.is_client === true;
          }) || [];
          this.pieces_versees_suretes = this.revues_garanties.filter(function (liste) {
            return liste.is_surete === true;
          }) || [];
          this.pieces_versees_credits = this.revues_garanties.filter(function (liste) {
            return liste.is_credit === true;
          }) || [];
          this.pieces_versees_autres = this.revues_garanties.filter(function (liste) {
            return ![liste.is_client, liste.is_surete, liste.is_credit].includes(true);
          }) || [];
        }
        this.isLoadingData = false;
      }
    },
    setTbVal: function setTbVal(val) {
      this.cred_pub_key = val;
    },
    loadWithError: function loadWithError(err) {},
    send2Backend: function send2Backend(res, newVal, oldVal) {
      this.authcheck = true;
      this.authcheckUsr = res.data;
      this.authcheckStatus = res.status;
      if (this.authcheckStatus === 401) {}
      if (this.authcheck === true) {
        this.$emit("autosaving");
        this.$axios.post(this.ebapisHost + "creditbuilder/api/v1/autosaving/", {
          user: this.authcheckUsr,
          meta_parseable: this.meta_parseable,
          filledData: this.formDataToBeWatched,
          loadDossier: true
        }).then(function (response) {
          this.$emit("autosaving");
          var tbFetcheData = response.data;
          if (tbFetcheData["is_success"] === true) {
            this.dossier_credit = tbFetcheData['dossier_credit'];
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
    retract: function retract() {
      this.seen = !this.seen;
      var a = {
        "tb_name": this.tb_name + this.meta_data['cred_pub_key'],
        "status": this.seen
      };
      EventBus.$emit("savedclosed-table", a);
    },
    defaultRetract: function defaultRetract(rc, ra) {
      if (ra != null) {
        this.seen = rc;
        var a = {
          "tb_name": this.tb_name + this.meta_data['cred_pub_key'],
          "status": this.seen
        };
        EventBus.$emit("savedclosed-table", a);
      }
    },
    initLoding: function initLoding() {
      var _this6 = this;
      //console.log("initLoding", this.fiche_suivis)
      if (this.fiche_suivis != undefined) {
        this.fiche_suivis.forEach(function (element, key) {
          _this6.$set(_this6.isLoding, key, false);
        });
      }
    },
    initButtonStatus: function initButtonStatus() {
      var _this7 = this;
      if (this.fiche_suivis != undefined) {
        this.fiche_suivis.forEach(function (element, key) {
          _this7.$set(_this7.buttonStatus, key, true);
        });
      }
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
        id: "ca6-head"
      };
      this.$emit("load-buffer", p);
    },
    // SOMME DES MONTANTS
    somX3: function somX3(ob, key) {
      var som = 0;
      ob.filter(function (elm) {
        var result = String(elm[key]).replace(/\s+/g, "");
        if (result === "") {
          som += 0;
        } else {
          som += parseInt(result);
        }
      });
      return som;
    },
    somX4: function somX4(ob, key) {
      var som = 0;
      var val1 = ob.replace(/\s+/g, "");
      var val2 = key.replace(/\s+/g, "");
      som = val1 + val2;
      return som;
    },
    handleInput: function handleInput() {
      this.formDataToBeWatched.revues_garanties = _toConsumableArray(this.revues_garanties);
    },
    handleInput1: function handleInput1(evt, index) {
      this.fiche_suivis[index].receivers = this.tags[index];
      this.fiche_suivis[index].notified_users = this.tags[index];
      this.fiche_suivis[index].sender = this.authcheckUsr;
      this.handleInput();
    },
    setButton: function setButton(evt, index) {
      var _this8 = this;
      console.log("index", index);
      console.log("this.fiche_suivis", this.fiche_suivis);
      this.fiche_suivis.forEach(function (element) {
        element.fiche.forEach(function (elt) {
          if (elt.question != "") {
            _this8.$set(_this8.buttonStatus, index, true);
          }
        });
      });
    },
    instruction3: function instruction3(id) {
      var id0 = '#' + id;
      window.$(id0).modal('show');
    },
    updateTags: function updateTags(newTags, ficheIndex) {
      this.users = [];
      newTags = newTags.filter(function (el) {
        return el === null || el === void 0 ? void 0 : el.email;
      });
      this.tags[ficheIndex] = newTags;
    },
    getUsersDefault: function getUsersDefault(roles, users_id) {
      var _this$meta_data3,
        _this9 = this;
      var url = this.ebapisHost + "creditbuilder/api/v1/load-all-doc-users/";
      var data = {
        "search": "",
        "limit": 10,
        "roles": roles,
        "users_id": users_id,
        "cred_pub_key": (_this$meta_data3 = this.meta_data) === null || _this$meta_data3 === void 0 ? void 0 : _this$meta_data3.cred_pub_key
      };
      this.$axios.post(url, data).then(function (response) {
        var data = response.data.data;
        if (!['', null, undefined].includes(data) && data.length > 0) {
          _this9.usersDefault = data;
        }
        _this9.searchUser = false;
      })["catch"](function (error) {
        _this9.searchUser = false;
        console.warn('Oh. Something went wrong');
      });
    },
    initItems: function initItems() {
      var _this0 = this;
      if (this.tg.trim().length < 3) return;
      clearTimeout(this.debounce);
      this.debounce = setTimeout(function () {
        var _this0$meta_data;
        _this0.searchUser = true;
        var url = _this0.ebapisHost + "creditbuilder/api/v1/load-all-doc-users/";
        var data = {
          "search": _this0.tg,
          "limit": 10,
          "cred_pub_key": (_this0$meta_data = _this0.meta_data) === null || _this0$meta_data === void 0 ? void 0 : _this0$meta_data.cred_pub_key
        };
        _this0.$axios.post(url, data).then(function (response) {
          var data = response.data.data;
          var message = response.data.message;
          if (!['', null, undefined].includes(data) && data.length > 0) {
            _this0.users = data;
          } else {
            _this0.users = [];
            // this.$toasted.show(message, {
            //     duration: 5000
            // })
          }
          _this0.$axios.post('/api/search_user', {
            "search": _this0.tg,
            "limit": 10
          }).then(function (response) {
            var _others_users, _this0$users;
            var data = response.data.data;
            var message = response.data.message;
            var others_users = [];
            if (!['', null, undefined].includes(data) && data.length > 0) {
              others_users = data;
            } else {
              others_users = [];
            }
            if (((_others_users = others_users) === null || _others_users === void 0 ? void 0 : _others_users.length) > 0) {
              others_users.forEach(function (el) {
                var find = _this0.users.find(function (u) {
                  return (u === null || u === void 0 ? void 0 : u.id) == (el === null || el === void 0 ? void 0 : el.id);
                });
                if (['', null, undefined].includes(find)) {
                  _this0.users.push(el);
                }
              });
            }
            if (((_this0$users = _this0.users) === null || _this0$users === void 0 ? void 0 : _this0$users.length) == 0) {
              _this0.$toasted.show(message, {
                duration: 5000
              });
            }
            _this0.searchUser = false;
          })["catch"](function (error) {
            _this0.searchUser = false;
            console.warn('Oh. Something went wrong');
          });

          // this.searchUser = false
        })["catch"](function (error) {
          _this0.searchUser = false;
          console.warn('Oh. Something went wrong');
        });
      }, 800);
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
    filteredUsersDefault: function filteredUsersDefault() {
      if (this.fiche_suivis[0].receivers == "") {
        this.fiche_suivis[0].receivers = this.defaultActors;
        this.fiche_suivis[0].notified_users = this.defaultActors;
        this.tags[0] = this.defaultActors;
        this.fiche_suivis[0].sender = this.authcheckUsr;
        this.formDataToBeWatched.fiche_suivis = this.fiche_suivis;
      }
    },
    tg: 'initItems'
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/fiche_suivi_corporate/CF-SA4.vue?vue&type=template&id=47d99df6&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/fiche_suivi_corporate/CF-SA4.vue?vue&type=template&id=47d99df6&scoped=true ***!
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
  }), _vm._v(" "), _vm.seen === true ? _c("div", {
    staticClass: "card",
    staticStyle: {
      width: "100%",
      height: "100%"
    }
  }, [_c("br"), _vm._v(" "), _c("div", {
    staticClass: "card-header hdc pb-0 pt-2"
  }, [_c("h6", {
    ref: "topdiv",
    staticClass: "head",
    attrs: {
      id: "ca6-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Revue des garanties\n                        ")]), _vm._v(" "), _c("div", {
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
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "card-body mt-1"
  }, [_c("div", {
    staticClass: "col-12 p-0"
  }, [_c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(0), _vm._v(" "), _c("tbody", [_vm._l(_vm.revues_garanties, function (el, index) {
    return _c("tr", {
      key: index
    }, [_c("td", [!el["default"] ? _c("label", [_c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: el.name,
        expression: "el.name"
      }],
      staticClass: "form-control",
      staticStyle: {
        "min-width": "200px"
      },
      attrs: {
        cols: "5",
        rows: "2",
        required: "",
        "aria-required": "true"
      },
      domProps: {
        value: el.name
      },
      on: {
        change: function change($event) {
          return _vm.handleInput($event, index);
        },
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(el, "name", $event.target.value);
        }
      }
    }), _vm._v(" "), _c("span", {
      staticClass: "text-danger",
      attrs: {
        "aria-hidden": "true"
      }
    }, [_vm._v("*")])]) : _c("label", [_c("span", {
      staticStyle: {
        "min-width": "200px"
      },
      domProps: {
        innerHTML: _vm._s(_vm.highlightText(el.name, el))
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
        value: "Oui",
        id: "oui" + index,
        disabled: _vm.isDAJC
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
        id: "non" + index,
        disabled: _vm.isDAJC
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
      staticClass: "m-2 mr-4"
    }, [_c("input", {
      staticClass: "form-check-input",
      staticStyle: {
        width: "20px",
        height: "20px"
      },
      attrs: {
        type: "checkbox",
        value: "Non applicable",
        id: "non_applicable" + index,
        disabled: _vm.isDAJC
      },
      domProps: {
        checked: el.value == "Non applicable"
      },
      on: {
        change: function change($event) {
          return _vm.checkboxValCashCall($event, index);
        }
      }
    })])]), _vm._v(" "), _c("td", [el.value == "Oui" ? _c("div", {
      staticClass: "d-flex align-items-center text-center justify-content-center"
    }, [_c("div", [(el === null || el === void 0 ? void 0 : el.files) > 0 ? _c("span", {
      staticClass: "p-1 px-2 mx-2 text-nowrap",
      staticStyle: {
        "background-color": "rgb(44,62,80)",
        color: "white",
        "font-size": "13px",
        "border-radius": "5px",
        "margin-left": "0 !important",
        width: "150px"
      }
    }, [_vm._v("\n                                                                        " + _vm._s((el === null || el === void 0 ? void 0 : el.files) > 0 ? (el === null || el === void 0 ? void 0 : el.files) + " fichier(s) uploadé(s)" : "") + "\n                                                                    ")]) : _vm._e()]), _vm._v(" "), el.name.trim() != "" ? _c("div", [_c("button", {
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
    }, [_vm._v("\n                                                                Aucun fichier(s) uploadé(s)\n                                                            ")])]), _vm._v(" "), _c("td", [_c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: el.comment,
        expression: "el.comment"
      }],
      staticClass: "form-control",
      staticStyle: {
        width: "250px"
      },
      attrs: {
        cols: "1",
        rows: "2",
        disabled: _vm.isDAJC,
        id: "comment"
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
    })]), _vm._v(" "), !el["default"] ? _c("td", [_c("button", {
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
          return _vm.removeKYC(el.id);
        }
      }
    }, [_c("trash-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1)]) : _c("td")]);
  }), _vm._v(" "), _c("tr", [_c("td", {
    attrs: {
      colspan: "6"
    }
  }), _vm._v(" "), _c("td", {
    attrs: {
      rowspan: _vm.revues_garanties.length - 1
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
        return _vm.addMoreKYC();
      }
    }
  }, [_c("plus-icon", {
    staticClass: "custom-class",
    attrs: {
      size: "21"
    }
  })], 1)])])], 2)])])])])]), _vm._v(" "), _vm.seen2 ? _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen2 = !_vm.seen2;
      }
    }
  }, [_c("h6", {
    "class": "subdiv" + this.tb_name,
    attrs: {
      id: "conjoint(e)"
    }
  }, [_vm._v("\n                                                GARANTIES DETENUES  \n                                            "), _c("chevron-up-icon", {
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
    staticClass: "col-md-12"
  }, [_vm._m(1), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(2), _vm._v(" "), _c("tbody", _vm._l(_vm.garantiesGeneralesOld, function (el, ind) {
    var _el$state_;
    return _c("tr", {
      key: ind
    }, [_c("td", [_c("div", {
      staticClass: "d-flex align-content-center"
    }, [_c("span", [_vm._v(_vm._s(ind + 1))])])]), _vm._v(" "), _c("td", [_c("ul", [_c("div", {
      staticClass: "d-flex align-content-center"
    }, [_c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: el.formulation_surete,
        expression: "el.formulation_surete"
      }],
      staticClass: "form-control",
      attrs: {
        rows: "2",
        id: "formulation_surete",
        readonly: true
      },
      domProps: {
        value: el.formulation_surete
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(el, "formulation_surete", $event.target.value);
        }
      }
    })])])]), _vm._v(" "), _c("td", [_c("ul", [_c("li", [(el === null || el === void 0 || (_el$state_ = el.state_) === null || _el$state_ === void 0 ? void 0 : _el$state_.is_detained) == "detenues" ? _c("span", {
      staticClass: "badge badge-success"
    }, [_vm._v(" Recueilli")]) : _c("span", {
      staticClass: "badge badge-danger"
    }, [_vm._v("  Non Recueilli")])])])]), _vm._v(" "), _c("td", [_c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: el.intitule_ligne,
        expression: "el.intitule_ligne"
      }],
      staticClass: "form-control",
      attrs: {
        rows: "2",
        id: "intitule_ligne",
        readonly: ""
      },
      domProps: {
        value: el.intitule_ligne
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(el, "intitule_ligne", $event.target.value);
        }
      }
    })])]);
  }), 0)])])])])]) : _c("div", {
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
      id: "conjoint(e)"
    }
  }, [_vm._v("\n                                        GARANTIES DETENUES  \n                                    "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)])]), _vm._v(" "), _vm.seen3 ? _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen3 = !_vm.seen3;
      }
    }
  }, [_c("h6", {
    "class": "subdiv" + this.tb_name,
    attrs: {
      id: "conjoint(e)"
    }
  }, [_vm._v("\n                                                GARANTIES A RECUEILLIR  \n                                            "), _c("chevron-up-icon", {
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
    staticClass: "col-md-12"
  }, [_vm._m(3), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(4), _vm._v(" "), _c("tbody", _vm._l(_vm.formDataToBeWatched.garantie_recueillis, function (el, ind) {
    return _c("tr", {
      key: ind
    }, [_c("td", [_c("div", {
      staticClass: "d-flex align-content-center"
    }, [_c("span", [_vm._v(_vm._s(ind + 1))])])]), _vm._v(" "), _c("td", [_c("ul", [_c("div", {
      staticClass: "d-flex align-content-center"
    }, [_c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: el.formulation_surete,
        expression: "el.formulation_surete"
      }],
      staticClass: "form-control",
      attrs: {
        rows: "2",
        id: "formulation_surete",
        readonly: true
      },
      domProps: {
        value: el.formulation_surete
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(el, "formulation_surete", $event.target.value);
        }
      }
    })])])]), _vm._v(" "), _c("td", [_c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: el.name_garantie,
        expression: "el.name_garantie"
      }],
      staticClass: "form-control",
      attrs: {
        rows: "2",
        id: "name_garantie"
      },
      domProps: {
        value: el.name_garantie
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(el, "name_garantie", $event.target.value);
        }
      }
    })])]);
  }), 0)])])])])]) : _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen3 = !_vm.seen3;
      }
    }
  }, [_c("h6", {
    attrs: {
      id: "conjoint(e)"
    }
  }, [_vm._v("\n                                        GARANTIES A RECUEILLIR  \n                                    "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_vm._m(5), _vm._v(" "), _c("vue-editor", {
    attrs: {
      id: "comment_pieces_requises"
    },
    on: {
      "update-value": function updateValue($event) {
        _vm.formDataToBeWatched[$event[0]] = $event[1];
      }
    },
    model: {
      value: _vm.formDataToBeWatched.comment_pieces_requises,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "comment_pieces_requises", $$v);
      },
      expression: "formDataToBeWatched.comment_pieces_requises\n                                    "
    }
  })], 1)])])]), _vm._v(" "), _c("div", {
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
  }, [_vm._v("\n                Fermer le tableau\n            ")])]) : _c("div", {
    staticClass: "card card-width-height"
  }, [_c("br"), _vm._v(" "), _c("div", {
    staticClass: "card-header hdc pb-0 pt-2"
  }, [_c("h6", {
    ref: "topdiv",
    staticClass: "head",
    attrs: {
      id: "ca6-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Revue des garanties  \n                        ")]), _vm._v(" "), _c("div", {
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
  })], 1)])])])])], 1), _vm._v(" "), _c("modal", {
    staticClass: "pb-5",
    attrs: {
      name: "confirm_supp_fiche_suivis",
      width: "300",
      height: "auto",
      adaptive: true,
      resizable: true
    }
  }, [_c("div", {
    staticClass: "container py-3 mb-2",
    staticStyle: {
      "max-height": "100%",
      overflow: "auto"
    }
  }, [_c("div", {
    staticClass: "col-12 fw-bold mb-2"
  }, [_vm._v("Voulez-vous supprimer cette fiche ?")]), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-content-between"
  }, [_c("button", {
    staticClass: "btn bg-danger border-none",
    on: {
      click: function click($event) {
        return _vm.closeModal();
      }
    }
  }, [_vm._v("NON")]), _vm._v(" "), _c("button", {
    staticClass: "btn bg-success",
    on: {
      click: function click($event) {
        return _vm.deleteFiche(_vm.toDelete);
      }
    }
  }, [_vm._v("OUI")])])])]), _vm._v(" "), _c("note-modal", {
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
  return _c("thead", [_c("tr", {
    staticClass: "text-center"
  }, [_c("td", {
    staticClass: "th fw-bold",
    staticStyle: {
      "min-width": "300px"
    }
  }, [_c("label", [_vm._v("DOCUMENTATION")])]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold"
  }, [_c("label", [_vm._v("OUI")])]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold"
  }, [_c("label", [_vm._v("NON")])]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold"
  }, [_c("label", [_vm._v("N/A")])]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold"
  }, [_c("label", [_vm._v("FICHIER ATTACHE")])]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold"
  }, [_c("label", [_vm._v("COMMENTAIRE")])]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold"
  }, [_c("label")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", [_c("b")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("td", {
    staticClass: "th"
  }, [_vm._v("N°")]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_vm._v("GARANTIES DÉTENUES")]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_vm._v("STATUT")]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_vm._v("Titre de Matérialisation")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", [_c("b")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("td", {
    staticClass: "th"
  }, [_vm._v("N°")]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_vm._v("GARANTIES DÉTENUES")]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_vm._v("Appréciation juridique et économique")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", [_c("b", [_vm._v("Commentaire")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/fiche_suivi_corporate/CF-SA4.vue?vue&type=style&index=0&id=47d99df6&lang=css&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/fiche_suivi_corporate/CF-SA4.vue?vue&type=style&index=0&id=47d99df6&lang=css&scoped=true ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "\n*[data-v-47d99df6] {\r\n    font-family: \"Google sans\";\n}\nlabel[data-v-47d99df6] {\r\n    height: 10px;\r\n    font-size: 13px;\n}\ninput[type=\"text\"][data-v-47d99df6],\r\ninput[type=\"date\"][data-v-47d99df6],\r\nselect[data-v-47d99df6] {\r\n    height: 35px;\r\n    border-color: #34495e;\r\n    color: #57606f;\r\n    font-size: 13px;\r\n    font-weight: bold;\n}\n.card-width-height[data-v-47d99df6] {\r\n    width: 100%;\r\n    height: 100%;\n}\n.head[data-v-47d99df6] {\r\n    color: #f1f2f6;\r\n    font-size: 22px;\n}\n.hdc[data-v-47d99df6] {\r\n    background-color: #57606f;\n}\n.review[data-v-47d99df6] {\r\n    width: 180px !important;\n}\n.engagement input[type=\"text\"][data-v-47d99df6],\r\ninput[type=\"date\"][data-v-47d99df6] {\r\n    width: 100% !important;\n}\n.th[data-v-47d99df6] {\r\n    padding: 4px;\r\n    padding-bottom: 0px;\n}\nselect[data-v-47d99df6] {\r\n    width: 250px;\n}\n.badge-sm[data-v-47d99df6] {\r\n    display: inline-block;\r\n    width: 15px;\r\n    height: 15px;\r\n    background: rgba(255, 0, 0, 0.882);\r\n    color: white;\r\n    font-size: 12px;\r\n    font-weight: 500;\r\n    border-radius: 100%;\r\n    position: absolute;\r\n    top: -20%;\r\n    left: 55%;\r\n    text-align: center;\n}\n.relook-header[data-v-47d99df6] {\r\n    color: #000;\r\n    background-color: #f4f3f3;\r\n    padding: 5px;\r\n    border-bottom: 1px solid #b6b8bb;\n}\ninput[type=\"checkbox\"][data-v-47d99df6] {\r\n    transform: scale(1);\r\n    padding: 10px;\r\n    cursor: pointer;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/fiche_suivi_corporate/CF-SA4.vue?vue&type=style&index=0&id=47d99df6&lang=css&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/fiche_suivi_corporate/CF-SA4.vue?vue&type=style&index=0&id=47d99df6&lang=css&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CF_SA4_vue_vue_type_style_index_0_id_47d99df6_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CF-SA4.vue?vue&type=style&index=0&id=47d99df6&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/fiche_suivi_corporate/CF-SA4.vue?vue&type=style&index=0&id=47d99df6&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CF_SA4_vue_vue_type_style_index_0_id_47d99df6_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CF_SA4_vue_vue_type_style_index_0_id_47d99df6_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/forms/afg/fiche_suivi_corporate/CF-SA4.vue":
/*!****************************************************************************!*\
  !*** ./resources/js/components/forms/afg/fiche_suivi_corporate/CF-SA4.vue ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CF_SA4_vue_vue_type_template_id_47d99df6_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CF-SA4.vue?vue&type=template&id=47d99df6&scoped=true */ "./resources/js/components/forms/afg/fiche_suivi_corporate/CF-SA4.vue?vue&type=template&id=47d99df6&scoped=true");
/* harmony import */ var _CF_SA4_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CF-SA4.vue?vue&type=script&lang=js */ "./resources/js/components/forms/afg/fiche_suivi_corporate/CF-SA4.vue?vue&type=script&lang=js");
/* harmony import */ var _CF_SA4_vue_vue_type_style_index_0_id_47d99df6_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CF-SA4.vue?vue&type=style&index=0&id=47d99df6&lang=css&scoped=true */ "./resources/js/components/forms/afg/fiche_suivi_corporate/CF-SA4.vue?vue&type=style&index=0&id=47d99df6&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CF_SA4_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _CF_SA4_vue_vue_type_template_id_47d99df6_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _CF_SA4_vue_vue_type_template_id_47d99df6_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "47d99df6",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/forms/afg/fiche_suivi_corporate/CF-SA4.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/forms/afg/fiche_suivi_corporate/CF-SA4.vue?vue&type=script&lang=js":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/fiche_suivi_corporate/CF-SA4.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CF_SA4_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CF-SA4.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/fiche_suivi_corporate/CF-SA4.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CF_SA4_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/forms/afg/fiche_suivi_corporate/CF-SA4.vue?vue&type=style&index=0&id=47d99df6&lang=css&scoped=true":
/*!************************************************************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/fiche_suivi_corporate/CF-SA4.vue?vue&type=style&index=0&id=47d99df6&lang=css&scoped=true ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CF_SA4_vue_vue_type_style_index_0_id_47d99df6_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CF-SA4.vue?vue&type=style&index=0&id=47d99df6&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/fiche_suivi_corporate/CF-SA4.vue?vue&type=style&index=0&id=47d99df6&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/forms/afg/fiche_suivi_corporate/CF-SA4.vue?vue&type=template&id=47d99df6&scoped=true":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/fiche_suivi_corporate/CF-SA4.vue?vue&type=template&id=47d99df6&scoped=true ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CF_SA4_vue_vue_type_template_id_47d99df6_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CF_SA4_vue_vue_type_template_id_47d99df6_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CF_SA4_vue_vue_type_template_id_47d99df6_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CF-SA4.vue?vue&type=template&id=47d99df6&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/fiche_suivi_corporate/CF-SA4.vue?vue&type=template&id=47d99df6&scoped=true");


/***/ })

}]);