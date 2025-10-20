"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_pv_nsia_ccca_CCCA-PV2_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pv/nsia/ccca/CCCA-PV2.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pv/nsia/ccca/CCCA-PV2.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************/
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
/* harmony import */ var _services_nsia_f8_manager_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/nsia/f8-manager.js */ "./resources/js/services/nsia/f8-manager.js");
/* harmony import */ var _services_nsia_f8_constants_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/nsia/f8-constants.js */ "./resources/js/services/nsia/f8-constants.js");
/* harmony import */ var _helpers_indexedDB__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../helpers/indexedDB */ "./resources/js/helpers/indexedDB.js");
/* harmony import */ var _helpers_indexedDB__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_helpers_indexedDB__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _shared_widgets_subtable_ST1_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/widgets/subtable/ST1.vue */ "./resources/js/components/shared/widgets/subtable/ST1.vue");
/* harmony import */ var _johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @johmun/vue-tags-input */ "./node_modules/@johmun/vue-tags-input/dist/vue-tags-input.js");
/* harmony import */ var _johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_10__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
//  import {
//      MoreVerticalIcon,
//      ChevronUpIcon,
//      ChevronDownIcon,
//  } from "vue-feather-icons";



//  import { AirplayIcon } from 'vue-feather-icons'
//  import { BookOpenIcon } from 'vue-feather-icons'










var NOW = new Date();
window.$ = window.jQuery = __webpack_require__(/*! jquery/dist/jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "CCCA-PV2",
  display: "CCCAPV2",
  components: {
    MoreVerticalIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_11__.MoreVerticalIcon,
    ChevronUpIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_11__.ChevronUpIcon,
    ChevronDownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_11__.ChevronDownIcon,
    ContextMenu: _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_0__["default"],
    ContextMenuItem: _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_1__["default"],
    AirplayIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_11__.AirplayIcon,
    CheckCircleIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_11__.CheckCircleIcon,
    XIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_11__.XIcon,
    XCircleIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_11__.XCircleIcon,
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_11__.TrashIcon,
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_11__.PlusIcon,
    ShuffleIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_11__.ShuffleIcon,
    BookOpenIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_11__.BookOpenIcon,
    EyeIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_11__.EyeIcon,
    VueTagsInput: (_johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_9___default()),
    ST1: _shared_widgets_subtable_ST1_vue__WEBPACK_IMPORTED_MODULE_8__["default"]
  },
  props: {
    meta_data: Object,
    tb_name: String,
    tb_display_name: String
  },
  created: function created() {
    this.checkIfMemberHasVoted();
  },
  mounted: function mounted() {
    var _this = this,
      _this$meta_data$dossi;
    EventBus.$on("created-extra-file-template", function (data) {
      _this.admin_votes.forEach(function (element, index) {
        var _data$template;
        var template_name = "Pièce(s) jointe(s) -admin_votes" + index + "_" + _this.$route.params.templateId;
        if (template_name == (data === null || data === void 0 || (_data$template = data.template) === null || _data$template === void 0 ? void 0 : _data$template.name)) {
          var _data$template2, _data$template3, _data$template4;
          _this.admin_votes[index]["template"] = {
            id: data === null || data === void 0 || (_data$template2 = data.template) === null || _data$template2 === void 0 ? void 0 : _data$template2.id,
            name: data === null || data === void 0 || (_data$template3 = data.template) === null || _data$template3 === void 0 ? void 0 : _data$template3.name,
            slug: data === null || data === void 0 || (_data$template4 = data.template) === null || _data$template4 === void 0 ? void 0 : _data$template4.slug
          };
          _this.handleInput();
        }
      });
    });
    EventBus.$on("extra-files-uploaded", function (data) {
      _this.admin_votes.forEach(function (element, index) {
        var _element$template, _data$template5;
        if ((element === null || element === void 0 || (_element$template = element.template) === null || _element$template === void 0 ? void 0 : _element$template.id) == (data === null || data === void 0 || (_data$template5 = data.template) === null || _data$template5 === void 0 ? void 0 : _data$template5.id)) {
          var _data$files$map;
          _this.admin_votes[index]["files"] = (_data$files$map = data === null || data === void 0 ? void 0 : data.files.map(function (el) {
            return {
              file_name: el === null || el === void 0 ? void 0 : el.file_name,
              file_ext: el === null || el === void 0 ? void 0 : el.file_ext,
              file_url: el === null || el === void 0 ? void 0 : el.file_url,
              user_id: el === null || el === void 0 ? void 0 : el.user_id
            };
          })) !== null && _data$files$map !== void 0 ? _data$files$map : [];
          _this.handleInput();
        }
      });
      _this.handleInput();
    });
    var applied_templ_name = (_this$meta_data$dossi = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi === void 0 ? void 0 : _this$meta_data$dossi.applied_templ_name;
    var tbArrays = this.determineCredPubTables(applied_templ_name);
    this.credpub_8 = tbArrays[2];
    // console.log("this.authcheckusr?.role_uuid => ", this.authcheckusr?.role_uuid)
    this.getLastProp();
    this.loadRetrieved();
    this.loadTbAttrs(); // charge les attributs + sous attributs des tables
    // helper.loadCurrencyFormatter();
    this.tableClosedOrOpened();

    // this.crdLd();
  },
  data: function data() {
    var vm = this;
    return {
      f8Manager: _services_nsia_f8_manager_js__WEBPACK_IMPORTED_MODULE_5__["default"],
      f8Constants: _services_nsia_f8_constants_js__WEBPACK_IMPORTED_MODULE_6__["default"],
      ebapisHost: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_2__["default"].host,
      appEnviron: "local",
      authcheck: false,
      authcheckUsr: null,
      authcheckStatus: null,
      watchInPause: false,
      initLoad: true,
      seen: true,
      observer_code: "OBS",
      isLoading: false,
      addComment: false,
      has_sg_ccca: false,
      has_observer: false,
      seen1: true,
      hide_random_vote: false,
      choice_: "",
      displ_ccca_decision: false,
      member_vote_info: {
        date_vote: "",
        stage_id: "",
        user_comment_of_decision: "",
        user_decision_bool: "",
        user_id: "",
        user_role: "",
        user_recommandation: []
      },
      receiver_bags: "",
      voters_list: "",
      member_comment: "",
      seen2: true,
      seen5: true,
      v_decision: "",
      credits: [],
      clients: [],
      secteurs_activites: [],
      dossier_credit: null,
      encours: null,
      placeholder: "Chercher clients",
      matcli: "matcli",
      nomcli: "nomcli",
      meta_parseable: {
        cred_pub_key: this.meta_data["cred_pub_key"],
        tb_name: this.tb_name
      },
      note_risque_es: [{
        note: "A",
        risque: "Risques elevés"
      }, {
        note: "B-",
        risque: "Risques moyen"
      }, {
        note: "B+",
        risque: "Risques moyen (Nécessitant vigilance)"
      }, {
        note: "C",
        risque: "Risques faible"
      }],
      dc_nouvelles_lignes: [],
      addCommentRecommandation: true,
      recommandations: [{
        libelle: ""
      }],
      recommandations_observer: [{
        libelle: ""
      }],
      disableBtn: true,
      formDataToBeWatched: {
        comite_credit_conseil_admin: "",
        comment: "",
        commentaire_libre: "",
        recommandations_observer: "",
        comment_situation_apres_accord: "",
        //
        notes: [],
        admin_votes: []
      },
      ligneSelected: {},
      flag: {},
      contextList: [{
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
      credpub_8: null,
      denomination_client: null,
      cotation_risque_es: null,
      groupe: null,
      grand_risque: null,
      consentement_bic: null,
      date_approbation_ccdg: null,
      lignes: null,
      lignes_par_caisse: null,
      engagement_signatures: null,
      listingNote: false,
      admin_votes: [],
      loadAdmin: false
    };
  },
  methods: {
    handleDoubleClickOrClick: function handleDoubleClickOrClick(event, index, element) {
      var _this2 = this;
      EventBus.$emit("open-extra-file-explorer");
      setTimeout(function () {
        EventBus.$emit("data-extra-file-explorer", {
          name: "Pièce(s) jointe(s) {(*)}admin_votes" + index + "_" + _this2.$route.params.templateId
        });
      }, 500);
    },
    checkboxValCashCall2: function checkboxValCashCall2(event, key, index) {
      if (event.target.checked) {
        this.admin_votes[index][key] = event.target.value;
      } else {
        this.admin_votes[index][key] = "";
      }
      this.handleInput();
    },
    getAdmins: function getAdmins() {
      var _this3 = this;
      this.loadAdmin = true;
      var url = '/api/search_user';
      var data = {
        "search": "",
        "limit": 25,
        "role_uuid": [, 'GJPBaavRqHP4kg6YvuyH', 'p2bR6VyKvAJw2enA7Zuq', 'zozEsdGqdpHs7eAqJuHC', 'GeqoC3Z4v7u4iBDYuEiJ']
      };
      this.$axios.post(url, data).then(function (response) {
        var data = response.data.data;
        var message = response.data.message;
        _this3.loadAdmin = false;
        if (!['', null, undefined].includes(data) && data.length > 0) {
          _this3.admin_votes = data.map(function (a) {
            return {
              decision: "",
              template: {},
              files: [],
              commentaire: "",
              user: {
                user_id: a['id'],
                name: a['name'],
                email: a['email'],
                role_id: a['role'][0]['id'],
                display_name: a['role'][0]['display_name'],
                role_uuid: a['role'][0]['role_uuid'],
                role_sigle: a['role'][0]['role_sigle'],
                what_to_be_produced: a['role'][0]['what_to_be_produced'],
                contact_whatsap: a["contact_whatsap"]
              }
            };
          });
        } else {
          _this3.$toasted.show(message, {
            duration: 5000
          });
        }
      })["catch"](function (error) {
        _this3.loadAdmin = false;
        console.warn('Oh. Something went wrong');
      });
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
    handleChangeLinges: function handleChangeLinges() {
      var _this4 = this;
      //this.tous_les_lignes_filtres = [];
      this.tous_les_lignes_filtres = this.tous_les_lignes;
      this.lignes_engagements_signatures_filtres = [];
      this.lignes_engagements_signatures.forEach(function (el) {
        var f = false;
        _this4.nv_lignes_signature_2.forEach(function (el1) {
          if (el.libelle == el1.ligne) {
            f = true;
          }
        });
        _this4.nv_lignes_signature_1.forEach(function (el1) {
          if (el.libelle == el1.ligne) {
            f = true;
          }
        });
        if (f == false) {
          _this4.lignes_engagements_signatures_filtres.push(el);
        }
      });
    },
    formDataVars: function formDataVars(event) {
      this.formDataToBeWatched[event[0]] = event[1];
      // this.handleInput()
    },
    formDataVars2: function formDataVars2(event, index, objectName, keyName) {
      this.f8Manager.data[objectName][index][keyName] = event[1];
    },
    tous_les_lignes_sorted: function tous_les_lignes_sorted() {
      tous_les_lignes.sort(function (a, b) {
        return a.libelle.localeCompare(b.libelle);
      });
    },
    determineKey: function determineKey() {
      var createdKey = this.tb_name;
      var createdKeyArr = createdKey.split("tb");
      createdKey = "cred_pub_tb_" + createdKeyArr[1];
      return createdKey;
    },
    getLastProp: function getLastProp() {
      var _this$meta_data$dossi2, _this$meta_data$dossi3;
      var caract_leng = (_this$meta_data$dossi2 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi2 === void 0 || (_this$meta_data$dossi2 = _this$meta_data$dossi2.caract_inter_pret_bank) === null || _this$meta_data$dossi2 === void 0 ? void 0 : _this$meta_data$dossi2.length;
      this.lignes = (_this$meta_data$dossi3 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi3 === void 0 ? void 0 : _this$meta_data$dossi3.caract_inter_pret_bank[caract_leng - 1];
    },
    checkboxValCashCall: function checkboxValCashCall(value, index) {
      this.choice_ = value;
      this.handleInput();
      // this.formDataToBeWatched.pret_couvert_cash_call = value;
    },
    checkIfMemberHasVoted: function checkIfMemberHasVoted() {
      var _this5 = this;
      this.isLoading = true;
      _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["default"].loadUserData().then(function (res) {
        var tb_data = res.data;
        _this5.isLoading = false;
        if (["Bw0yd0WZbRemfdbHiuhK"].includes(tb_data['role_uuid'])) {
          // this.isLoading = false
          _this5.has_sg_ccca = true;
          _this5.getVoterListAndDisplay(res);
        } else if (["4JWcXW4o4Ww8Y1GumHF5"].includes(tb_data['role_uuid'])) {
          _this5.has_observer = true;
          _this5.getVoterListAndDisplay(res);
          // this.isLoading = false
        } else {
          _this5.hasVoted(res);
        }
      })["catch"](function (err) {
        _this5.loadWithError(err);
      });
    },
    showRecommandation: function showRecommandation() {
      this.$modal.show('cccaRecommandations');
    },
    getVoterListAndDisplay: function getVoterListAndDisplay(res) {
      this.authcheck = true;
      this.authcheckUsr = res.data;
      this.authcheckStatus = res.status;
      if (this.authcheck === true) {
        // this.isLoading = true
        this.$axios.post(this.ebapisHost + "creditbuilder/api/v1/nsia/vote/voters-list/", {
          cred_pub_key: this.meta_data["cred_pub_key"],
          user: this.authcheckUsr
        }).then(function (response) {
          var tbFetcheData = response.data;
          var df_list_vot = [];
          if (tbFetcheData["is_success"] === true) {
            if (tbFetcheData["receivers_bag"].length > 0) {
              this.voters_list = this.initProcessVoteList(tbFetcheData["receivers_bag"], tbFetcheData["all_ccca_member_who_has_voted"]);
              // console.log("voters_list ==> ",this.voters_list)
              this.isLoading = false;
            }
          }
        }.bind(this))["catch"](function (error) {
          // this.$Progress.finish();
          console.log(error);
          this.isLoading = false;
        }.bind(this));
      } else {
        alert("Unauthenticated");
      }
    },
    cancelAppOrDenial: function cancelAppOrDenial(modalName) {
      var isCancel = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      this.$modal.hide(modalName);
      this.v_decision = "";
      this.member_comment = "";
      this.recommandations = [{
        libelle: ""
      }];
      if (isCancel) {
        this.disableBtn = true;
      }
    },
    initProcessVoteList: function initProcessVoteList(receivers_bag, all_ccca_member_who_has_voted) {
      var l = [];
      var should_receiv_ = receivers_bag;
      // console.log("should_receiv_", should_receiv_)
      var has_voted_ = all_ccca_member_who_has_voted;
      if (has_voted_.length > 0) {
        var _loop = function _loop(i) {
          // console.log("role_id", should_receiv_[i]["role_id"])
          if (["Bw0yd0WZbRemfdbHiuhK", "2YUrhvU1t9Evin4mXK0e", "4JWcXW4o4Ww8Y1GumHF5", "B1mgnsGXqCYvzi0K05LA"].includes(should_receiv_[i]["role_id"])) {
            return 1; // continue
          } else {
            var h = has_voted_.filter(function (item, index) {
              return item.user_id == should_receiv_[i]["id"];
            });
            if (h.length > 0) {
              should_receiv_[i]["vote_bool"] = h[0]["user_decision_bool"];
              should_receiv_[i]["vote_lib"] = h[0]["user_decision_lib"];
            } else {
              should_receiv_[i]["vote_bool"] = undefined;
              should_receiv_[i]["vote_lib"] = undefined;
            }
          }
        };
        for (var i = 0; i < should_receiv_.length; i++) {
          if (_loop(i)) continue;
        }
        return should_receiv_;
      } else {
        for (var _i = 0; _i < should_receiv_.length; _i++) {
          should_receiv_[_i]["vote_bool"] = undefined;
          should_receiv_[_i]["vote_lib"] = undefined;
        }
        // console.log("has_voted_ non",should_receiv_.length)
        return should_receiv_;
      }
      // console.log("has_voted_ non",should_receiv_.length)
    },
    appOrdenialOn: function appOrdenialOn(d) {
      this.v_decision = d;
      // console.log("d==> ", this.v_decision)
      this.$modal.show('approval');
    },
    // 
    hasVoted: function hasVoted(res) {
      // this.isLoading = true
      if (this.displ_ccca_decision == false) {
        var _this$meta_data$dossi4;
        var ccca_vote_logs = (_this$meta_data$dossi4 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi4 === void 0 ? void 0 : _this$meta_data$dossi4.ccca_vote_logs;
        var authUser = res.data;
        var user_id = authUser["user_id"];
        // console.log("ccca_vote_logs",ccca_vote_logs)
        if (ccca_vote_logs != undefined) {
          var record = ccca_vote_logs.filter(function (el) {
            return el.user_id == user_id;
          });
          this.displ_ccca_decision = record.length > 0 ? true : false;
          this.member_vote_info = record[0];
          this.isLoading = false;
        } else {
          // this.displ_ccca_decision = true
          this.isLoading = false;
        }
      }
    },
    confirmAction: function confirmAction() {
      var modalName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      if (modalName !== null) {
        this.$modal.show(modalName);
      }
      // EventBus.$emit('value-updated')
      // this.errors = {}
      var that = this;
      // console.log("that => ", that)
      var dc_m = this.v_decision;
      var rec_m = this.recommandations;
      var com_m = this.member_comment;
      var dc_com_m = {
        commentaire: this.member_comment,
        decision_of_member: dc_m
      };
      sendDecision(dc_com_m, rec_m);
      function sendDecision(a, b) {
        that.cancelAppOrDenial(modalName);
        that.$toasted.show("Prise en compte de la décision en cours...");
        // console.log("Avant decision_process v_decision => ", dc_m)
        _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["default"].loadUserData().then(function (res) {
          that.sendMemberComiteDecision(res, a, b);
        })["catch"](function (err) {
          that.loadWithError(err);
        });

        // that.$confirm("Votre décision va être prise en compte. Etes-vous sûr(e) de continuer ?", "Confirmez votre décision").then(() => {
        //     that.cancelAppOrDenial(modalName);

        //     that.$toasted.show("Prise en compte de la décision en cours...")
        //     console.log("Avant decision_process v_decision => ", this.v_decision)
        //     that.decision_process(this.v_decision)
        //     Auth.loadUserData()
        //             .then(res => {
        //               that.sendMemberComiteDecision(res);

        //             }).catch(err => {that.loadWithError(err)})
        //     }).catch(() => {
        //     that.cancelAppOrDenial();
        //     });
      }
    },
    decision_process: function decision_process(dc) {
      var _this6 = this;
      _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["default"].loadUserData().then(function (res) {
        if ([true, false].includes(dc)) {
          _this6.sendMemberComiteDecision(res, dc);
        } else {
          _this6.sendRecommendation(res);
        }
      })["catch"](function (err) {
        _this6.loadWithError(err);
      });
    },
    simulationion_process_init: function simulationion_process_init(dc) {
      var _this7 = this;
      // console.log("dc****",dc)
      var choice = this.choice_;
      var tb_choice = ["FAVORABLE", "DEFAVORABLE", "EGALITE"];
      _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["default"].loadUserData().then(function (res) {
        // console.log("dc****",dc)
        if (choice == "") {
          var nb = Math.floor(Math.random() * 3);
          choice = tb_choice[nb];
          _this7.startRandomVoting(res, choice);
          // this.$toasted.show("Veuillez choisir le type de Simulation.",{position: "top-right",'duration' : 5000})
        } else {
          _this7.startRandomVoting(res, choice);
        }
      })["catch"](function (err) {
        _this7.loadWithError(err);
      });
    },
    startRandomVoting: function startRandomVoting(res, decision) {
      this.authcheck = true;
      this.authcheckUsr = res.data;
      this.authcheckStatus = res.status;
      var random = true;
      var ch = decision;
      if (this.authcheck === true) {
        this.isLoading = true;
        this.$axios.post(this.ebapisHost + "creditbuilder/api/v1/nsia/random-vote/", {
          user: this.authcheckUsr,
          cred_pub_key: this.meta_data["cred_pub_key"],
          random_vote: random,
          random_choice: ch
        }).then(function (response) {
          this.member_comment = "";
          var tbFetcheData = response.data;
          if (tbFetcheData["is_success"] === true && (tbFetcheData["code_vote"] == "ALL_" || tbFetcheData["code_vote"] == "CCCA_ONLY")) {
            this.checkIfMemberHasVoted();
            // this.displ_ccca_decision = true;
            this.isLoading = false;
            this.hide_random_vote = true;
            this.$toasted.show("toutes les décisions ont été prisent en compte.", {
              position: "top-right",
              'duration': 5000
            });
            var data_ccca = {
              cred_pub_key: this.meta_data["cred_pub_key"],
              key: "ccca_vote_logs",
              value: tbFetcheData['ccca_voted_record']
            };
            var data_ca = {
              cred_pub_key: this.meta_data["cred_pub_key"],
              key: "ca_vote_logs",
              value: tbFetcheData['ca_voted_record']
            };
            this.$store.dispatch('set_key', data_ccca);
            this.$store.dispatch('set_key', data_ca);
            var obj = {};
            obj['ca_vote_logs'] = data_ca.value;
            obj['ccca_vote_logs'] = data_ccca.value;
            EventBus.$emit('unify', obj);
          } else {
            if (tbFetcheData["is_success"] === true && tbFetcheData["code_vote"] == "DV_ALL") {
              // this.member_vote_info = tbFetcheData["voted_record"]
              // this.displ_ccca_decision = true
              this.isLoading = false;
              this.$toasted.show("Inpossible de faire à nouveau une simulation de vote ...", {
                position: "top-right",
                'duration': 5000
              });
            }
          }
        }.bind(this))["catch"](function (error) {
          // this.$Progress.finish();
          console.log(error);
        }.bind(this));
      } else {
        alert("Unauthenticated");
      }
    },
    sendRecommendation: function sendRecommendation(res) {
      this.authcheck = true;
      this.authcheckUsr = res.data;
      this.authcheckStatus = res.status;
      var observer_recommandations = this.recommandations;
      if (this.authcheck === true) {
        this.isLoading = true;
        this.$axios.post(this.ebapisHost + "creditbuilder/api/v1/nsia/observer/recommandation/", {
          user: this.authcheckUsr,
          cred_pub_key: this.meta_data["cred_pub_key"],
          recommandations: observer_recommandations
          // l_get:sg_get_inf
        }).then(function (response) {
          this.recommandations = [{
            libelle: ""
          }];
          // this.recommandations.forEach(element => {
          //     element.libelle = ""
          // });

          var tbFetcheData = response.data;
          if (tbFetcheData["is_success"] === true) {
            // console.log("member_vote_info", tbFetcheData["voted_record"])
            // this.member_vote_info = tbFetcheData["voted_record"]
            // this.displ_ccca_decision = true;
            this.isLoading = false;
            this.$toasted.show("Vos reccommandation ont été prise en compte.", {
              position: "top-right",
              'duration': 5000
            });
          }
          // else{
          //     if(tbFetcheData["is_success"] === true &&  tbFetcheData["code_vote"] == "DV"){
          //         // this.member_vote_info = tbFetcheData["voted_record"]
          //         // this.displ_ccca_decision = true
          //         // this.isLoading = false
          //         this.$toasted.show("Vous avez déjà voté ...",{position: "top-right",'duration' : 5000})
          //     }
          // }
        }.bind(this))["catch"](function (error) {
          // this.$Progress.finish();
          console.log(error);
        }.bind(this));
      } else {
        alert("Unauthenticated");
      }
    },
    sendMemberComiteDecision: function sendMemberComiteDecision(res, a, b) {
      this.authcheck = true;
      this.authcheckUsr = res.data;
      this.authcheckStatus = res.status;
      var info_of_user = a;
      var user_recommandations = b;
      if (this.authcheck === true) {
        this.isLoading = true;
        this.$axios.post(this.ebapisHost + "creditbuilder/api/v1/nsia/vote/", {
          user: this.authcheckUsr,
          cred_pub_key: this.meta_data["cred_pub_key"],
          user_comment_decision: info_of_user,
          recommandations: user_recommandations
          // l_get:sg_get_inf
        }).then(function (response) {
          this.member_comment = "";
          var tbFetcheData = response.data;
          if (tbFetcheData["is_success"] === true && tbFetcheData["code_vote"] == "V2V") {
            // console.log("member_vote_info", tbFetcheData["voted_record"])
            this.member_vote_info = tbFetcheData["voted_record"];
            this.displ_ccca_decision = true;
            this.isLoading = false;
            this.$toasted.show("Votre vote a été pris en compte.", {
              position: "top-right",
              'duration': 5000
            });
          } else {
            if (tbFetcheData["is_success"] === true && tbFetcheData["code_vote"] == "DV") {
              // this.member_vote_info = tbFetcheData["voted_record"]
              // this.displ_ccca_decision = true
              this.isLoading = false;
              this.$toasted.show("Vous avez déjà voté ...", {
                position: "top-right",
                'duration': 5000
              });
            }
          }
        }.bind(this))["catch"](function (error) {
          // this.$Progress.finish();
          console.log(error);
        }.bind(this));
      } else {
        alert("Unauthenticated");
      }
    },
    check: function check(e) {
      var _this8 = this;
      this.$nextTick(function () {
        _this8.addComment = !_this8.addComment;
      });
    },
    findIndexByObj: function findIndexByObj(label) {
      var _this$tab;
      var tab = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "secteurs_activites";
      return (_this$tab = this[tab]) === null || _this$tab === void 0 ? void 0 : _this$tab.findIndex(function (el) {
        return (el === null || el === void 0 ? void 0 : el.secteurs_cofina) === label;
      });
    },
    tableClosedOrOpened: function tableClosedOrOpened() {
      this.seen = this.fetchClosedTables(this.tb_name + this.meta_data['cred_pub_key']);
    },
    openNotesModal: function openNotesModal() {
      var listing = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.listingNote = listing;
      this.$modal.show(this.tb_name);
    },
    //  formDataVars(event) {
    //      this.formDataToBeWatched[event[0]] = event[1];
    //  },
    setTauxCredVars: function setTauxCredVars() {
      if (parseFloat(this.formDataToBeWatched.taux_credit_propose) > 100) {
        this.formDataToBeWatched.taux_credit_propose = 100;
      }
    },
    loadRetrieved: function loadRetrieved() {
      var _this$meta_data$dossi5;
      var lentb = this.meta_data["dossier_credit"]["tbs_in_use"];
      var createdKey = this.tb_name;
      var createdKeyArr = createdKey.split("tb");
      createdKey = "cred_pub_tb_" + createdKeyArr[1];
      this.defaultRetract(true, (_this$meta_data$dossi5 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi5 === void 0 ? void 0 : _this$meta_data$dossi5.applied_templ_id);
      if (lentb.length == 0 || !this.meta_data["dossier_credit"][createdKey]) {
        var _this$meta_data$dossi6, _this$meta_data$dossi7, _this$meta_data$dossi8;
        // console.warn("Pas de tableau ou pas de cred_pub_tb");
        if (((_this$meta_data$dossi6 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi6 === void 0 ? void 0 : _this$meta_data$dossi6.cred_pub_tb_40007) != undefined) {
          var credit_folder_table_40007 = _objectSpread({}, this.meta_data["dossier_credit"]["cred_pub_tb_40007"]);
          this.f8Manager.setData(credit_folder_table_40007, "tb40007");
          this.f8Manager.handleInput();
          // this.formDataToBeWatched.comment_situation_apres_accord = data_f19003?.comment_situation_apres_accord
        } else if (((_this$meta_data$dossi7 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi7 === void 0 ? void 0 : _this$meta_data$dossi7.cred_pub_tb_19503) != undefined) {
          var credit_folder_table_19003 = _objectSpread({}, this.meta_data["dossier_credit"]["cred_pub_tb_19503"]);
          this.f8Manager.setData(credit_folder_table_19003, "tb40007");
          this.f8Manager.handleInput();
          // this.formDataToBeWatched.comment_situation_apres_accord = data_f19003?.comment_situation_apres_accord
        } else if (((_this$meta_data$dossi8 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi8 === void 0 ? void 0 : _this$meta_data$dossi8.cred_pub_tb_19003) != undefined) {
          var _credit_folder_table_ = _objectSpread({}, this.meta_data["dossier_credit"]["cred_pub_tb_19003"]);
          this.f8Manager.setData(_credit_folder_table_, "tb40007");
          this.f8Manager.handleInput();
          // this.formDataToBeWatched.comment_situation_apres_accord = data_f19003?.comment_situation_apres_accord
        } else if (this.meta_data["dossier_credit"][this.credpub_8] != undefined) {
          var data_f8 = this.meta_data["dossier_credit"][this.credpub_8];
          // console.warn("Pas de tableau ou pas de cred_pub_tb");
          var credit_folder_table_8 = _objectSpread({}, this.meta_data["dossier_credit"][this.credpub_8]);
          this.f8Manager.setData(credit_folder_table_8, "tb40007");
          this.f8Manager.handleInput();
          // this.formDataToBeWatched.comment_situation_apres_accord = data_f8?.comment_situation_apres_accord
        }
        this.getAdmins();
        // this.loadConsoFondsPropres();
        return;
      } else {
        var _this$meta_data$dossi9, _this$meta_data$dossi0, _this$meta_data$dossi1;
        if (((_this$meta_data$dossi9 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi9 === void 0 ? void 0 : _this$meta_data$dossi9.cred_pub_tb_40007) != undefined) {
          var _credit_folder_table_2 = _objectSpread({}, this.meta_data["dossier_credit"]["cred_pub_tb_40007"]);
          this.f8Manager.setData(_credit_folder_table_2, "tb40007");
          this.f8Manager.handleInput();
          // this.formDataToBeWatched.comment_situation_apres_accord = data_f19003?.comment_situation_apres_accord
        } else if (((_this$meta_data$dossi0 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi0 === void 0 ? void 0 : _this$meta_data$dossi0.cred_pub_tb_19503) != undefined) {
          var _credit_folder_table_3 = _objectSpread({}, this.meta_data["dossier_credit"]["cred_pub_tb_19503"]);
          this.f8Manager.setData(_credit_folder_table_3, "tb40007");
          this.f8Manager.handleInput();
          // this.formDataToBeWatched.comment_situation_apres_accord = data_f19003?.comment_situation_apres_accord
        } else if (((_this$meta_data$dossi1 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi1 === void 0 ? void 0 : _this$meta_data$dossi1.cred_pub_tb_19003) != undefined) {
          var _credit_folder_table_4 = _objectSpread({}, this.meta_data["dossier_credit"]["cred_pub_tb_19003"]);
          this.f8Manager.setData(_credit_folder_table_4, "tb40007");
          this.f8Manager.handleInput();
          // this.formDataToBeWatched.comment_situation_apres_accord = data_f19003?.comment_situation_apres_accord
        } else if (this.meta_data["dossier_credit"][this.credpub_8] != undefined) {
          var _data_f = this.meta_data["dossier_credit"][this.credpub_8];
          // console.warn("Pas de tableau ou pas de cred_pub_tb");

          var _credit_folder_table_5 = _objectSpread({}, this.meta_data["dossier_credit"][this.credpub_8]);
          this.f8Manager.setData(_credit_folder_table_5, "tb40007");
          this.f8Manager.handleInput();
          // this.formDataToBeWatched.comment_situation_apres_accord = data_f8?.comment_situation_apres_accord
        }
      }

      // const credit_folder_table = {...this.meta_data["dossier_credit"][createdKey]};
      // console.log("credit_folder_table => ", credit_folder_table)
      // this.f8Manager.setData(credit_folder_table);

      if (lentb.length > 0) {
        if (this.meta_data["dossier_credit"][createdKey] != undefined) {
          this.formDataToBeWatched = this.meta_data["dossier_credit"][createdKey];
          if (this.meta_data["dossier_credit"][createdKey]["recommandations_observer"] != "") {
            this.recommandations_observer = this.meta_data["dossier_credit"][createdKey]["recommandations_observer"];
          }
          if (this.meta_data["dossier_credit"][createdKey]["admin_votes"] != "") {
            this.admin_votes = this.meta_data["dossier_credit"][createdKey]["admin_votes"];
          }
        }
      }
    },
    setTbVal: function setTbVal(val) {
      this.cred_pub_key = val;
    },
    loadWithError: function loadWithError(err) {
      // // window.location.href = "/login";
    },
    addMoreRecommandation: function addMoreRecommandation(listName) {
      this[listName].push({
        libelle: ""
      });
    },
    removeRecommandation: function removeRecommandation(index) {
      this.recommandations.splice(index, 1);
      this.handleInput();
    },
    addMoreRecommandationObserver: function addMoreRecommandationObserver(listName) {
      this[listName].push({
        libelle: ""
      });
    },
    removeRecommandationObserver: function removeRecommandationObserver() {
      this.recommandations_observer.splice(index, 1);
      this.handleInput();
    },
    checkRecommendation: function checkRecommendation(e) {
      var _this9 = this;
      this.$nextTick(function () {
        _this9.addCommentRecommandation = !_this9.addCommentRecommandation;
      });
    },
    handleInput: function handleInput() {
      this.formDataToBeWatched["admin_votes"] = this.admin_votes;
      this.formDataToBeWatched["recommandations_observer"] = this.recommandations_observer;
    },
    // SOMME DES MONTANTS
    somX3: function somX3(ob, key) {
      var som = 0;
      ob === null || ob === void 0 || ob.filter(function (elm) {
        var result = String(elm[key]).replace(/\s+/g, "");
        if (result === "" || isNaN(result)) {
          som += 0;
        } else {
          som += parseInt(result);
        }
      });
      return som;
    },
    send2Backend: function send2Backend(res, newVal, oldVal, key) {
      this.authcheck = true;
      this.authcheckUsr = res.data;
      this.authcheckStatus = res.status;
      var ky = key === 'F8' ? _objectSpread(_objectSpread({}, newVal), this.formDataToBeWatched) : _objectSpread(_objectSpread({}, newVal), this.f8Manager.data);
      if (this.authcheckStatus === 401) {
        // // window.location.href = "/login";
      }
      if (this.authcheck === true) {
        this.$emit("autosaving");
        this.$axios.post(this.ebapisHost + "creditbuilder/api/v1/autosaving/", {
          user: this.authcheckUsr,
          meta_parseable: this.meta_parseable,
          // filledData: this.formDataToBeWatched,
          filledData: ky,
          // filledData: {...this.f8Manager.data, ...this.formDataToBeWatched},

          loadDossier: true
        }).then(function (response) {
          this.$emit("autosaving");
          // this.$Progress.finish();
          // console.log(response);
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
    // add defaultRetract
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
    retract1: function retract1() {
      this.seen1 = !this.seen1;
    },
    retract2: function retract2() {
      this.seen2 = !this.seen2;
    },
    deleteTB: function deleteTB() {
      if (confirm("Êtes-vous sûr de vouloir supprimer ce tableau ?")) {
        this.$emit("delete-tb", {
          tb_name: this.tb_name
        });
      }
    },
    loadTbAttrs: function loadTbAttrs() {
      var l = [];
      var topdivel = this.$refs.topdiv;
      // let k = document.querySelectorAll('.subdiv')
      var k = document.querySelectorAll(".subdiv" + this.tb_name);
      // console.log(k)
      k.forEach(function (e) {
        l.push(e.innerText);
      });
      var p = {
        name_of_title: topdivel.innerText,
        list_of_content: l,
        id: "ccca2-head"
      };
      // console.log(p)
      this.$emit("load-buffer", p);
    },
    credData: function credData(res) {
      this.credits = res.data;
    },
    send2Backend0: function send2Backend0(res) {
      this.authcheck = true;
      this.authcheckUsr = res.data;
      this.authcheckStatus = res.status;
      if (this.authcheckStatus === 401) {
        // window.location.href = "/login";
      }
      if (this.authcheck === true) {
        this.$axios.post(this.ebapisHost + "creditbuilder/api/v1/updatedoctitle/", {
          user: this.authcheckUsr,
          cred_pub_key: this.meta_parseable.cred_pub_key,
          filledData: {
            doss_name: this.formDataToBeWatched.nom_client + "_" + this.formDataToBeWatched.prefixe
          }
        }).then(function (response) {
          var tbFetcheData = response.data;
        }.bind(this))["catch"](function (error) {
          this.$Progress.finish();
          console.log(error);
        }.bind(this));
      } else {
        alert("Unauthenticated");
      }
    },
    autoRenamer: function autoRenamer() {
      var _this0 = this;
      _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["default"].loadUserData().then(function (res) {
        _this0.send2Backend0(res);
      })["catch"](function (err) {
        _this0.loadWithError(err);
      });
    },
    instruction2: function instruction2(id) {
      var id0 = '#' + id;
      window.$(id0).modal('show');
    }
  },
  watch: {
    formDataToBeWatched: {
      handler: function handler(newVal, oldVal) {
        newVal = _objectSpread(_objectSpread({}, newVal), this.f8Manager.data);
        this.autosaving(newVal, oldVal);
      },
      deep: true,
      immediate: true
    }
  },
  computed: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pv/nsia/ccca/CCCA-PV2.vue?vue&type=template&id=8c8814ec&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pv/nsia/ccca/CCCA-PV2.vue?vue&type=template&id=8c8814ec&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$formDataToBeWatch, _vm$member_vote_info, _vm$member_vote_info2, _vm$member_vote_info3, _vm$member_vote_info4, _vm$member_vote_info5, _vm$member_vote_info6, _vm$member_vote_info7, _vm$member_vote_info8, _vm$member_vote_info9, _vm$member_vote_info0, _vm$member_vote_info1, _vm$member_vote_info10, _vm$member_vote_info11, _vm$member_vote_info12, _vm$formDataToBeWatch2, _vm$ligneSelected, _vm$ligneSelected2;
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
  }, [_c("h3", {
    ref: "topdiv",
    staticClass: "head",
    attrs: {
      id: "ccca2-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                             " + _vm._s(_vm.tb_display_name) + " : CCCA-PV2\n                         ")]), _vm._v(" "), _c("div", {
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
    staticClass: "card-body"
  }, [_vm.isLoading ? _c("div", [_vm._m(0)]) : _c("div", [_c("div", [_vm.seen2 ? _c("div", {
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
      id: "Recensement-des-votes-des-administrateurs-et-présidents-(CCCA-et-CA)"
    }
  }, [_vm._v("\n                                    Recensement des votes des administrateurs et présidents (CCCA et CA)\n                                    "), _c("chevron-up-icon", {
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
  }, [_vm.loadAdmin ? _c("div", {
    staticClass: "card-body"
  }, [_vm._m(1)]) : _c("div", [_c("div", {
    staticClass: "table-responsive",
    staticStyle: {
      "max-height": "50vh"
    }
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(2), _vm._v(" "), _c("tbody", _vm._l(_vm.admin_votes, function (admin, index) {
    var _admin$user, _admin$user2, _admin$files, _admin$files2, _admin$files3;
    return _c("tr", {
      key: "admin" + index
    }, [_c("td", {
      staticClass: "sticky"
    }, [_vm._v(_vm._s(admin === null || admin === void 0 || (_admin$user = admin.user) === null || _admin$user === void 0 ? void 0 : _admin$user.name))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(admin === null || admin === void 0 || (_admin$user2 = admin.user) === null || _admin$user2 === void 0 ? void 0 : _admin$user2.display_name))]), _vm._v(" "), _c("td", [_c("div", {
      staticClass: "d-flex"
    }, [_c("div", {
      staticClass: "m-2 d-flex mr-4"
    }, [_c("input", {
      staticStyle: {
        transform: "scale(1.5) !important",
        height: "20px!important"
      },
      attrs: {
        type: "checkbox",
        value: "Favorable",
        id: "pret_couvert_cash_call_favorable" + index
      },
      domProps: {
        checked: admin.decision == "Favorable"
      },
      on: {
        input: function input($event) {
          return _vm.checkboxValCashCall2($event, "decision", index);
        }
      }
    }), _vm._v(" "), _c("label", {
      staticClass: "text-nowrap",
      staticStyle: {
        "margin-left": "10px"
      },
      attrs: {
        "for": "pret_couvert_cash_call_favorable" + index
      }
    }, [_vm._v("Favorable")])]), _vm._v(" "), _c("div", {
      staticClass: "m-2 d-flex mr-4"
    }, [_c("input", {
      staticStyle: {
        transform: "scale(1.5) !important",
        height: "20px!important"
      },
      attrs: {
        type: "checkbox",
        value: "Défavorable",
        id: "pret_couvert_cash_call_defavorable" + index
      },
      domProps: {
        checked: admin.decision == "Défavorable"
      },
      on: {
        input: function input($event) {
          return _vm.checkboxValCashCall2($event, "decision", index);
        }
      }
    }), _vm._v(" "), _c("label", {
      staticClass: "text-nowrap",
      staticStyle: {
        "margin-left": "10px"
      },
      attrs: {
        "for": "pret_couvert_cash_call_defavorable" + index
      }
    }, [_vm._v("Défavorable")])])])]), _vm._v(" "), _c("td", [_c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: admin.commentaire,
        expression: "admin.commentaire"
      }],
      staticClass: "form-control",
      staticStyle: {
        height: "initial!important",
        background: "initial!important",
        padding: "0!important",
        resize: "vertical!important",
        "min-width": "200px!important"
      },
      domProps: {
        value: admin.commentaire
      },
      on: {
        change: _vm.handleInput,
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(admin, "commentaire", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("div", {
      staticClass: "d-flex align-items-center text-center justify-content-center"
    }, [_c("div", [(admin === null || admin === void 0 || (_admin$files = admin.files) === null || _admin$files === void 0 ? void 0 : _admin$files.length) > 0 ? _c("span", {
      staticClass: "p-1 px-2 mx-2 text-nowrap",
      staticStyle: {
        "background-color": "rgb(44, 62, 80)",
        color: "white",
        "font-size": "13px",
        "border-radius": "5px",
        "margin-left": "0!important",
        width: "150px"
      }
    }, [_vm._v(_vm._s((admin === null || admin === void 0 || (_admin$files2 = admin.files) === null || _admin$files2 === void 0 ? void 0 : _admin$files2.length) > 0 ? (admin === null || admin === void 0 || (_admin$files3 = admin.files) === null || _admin$files3 === void 0 ? void 0 : _admin$files3.length) + " fichier(s) uploadé(s)" : ""))]) : _vm._e()]), _vm._v(" "), _c("div", [_c("button", {
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
          return _vm.handleDoubleClickOrClick($event, index, admin);
        }
      }
    }, [_c("i", {
      staticClass: "icofont-attachment"
    })])])])])]);
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
      id: "Recensement-des-votes-des-administrateurs-et-présidents-(CCCA-et-CA)"
    }
  }, [_vm._v("\n                                    Recensement des votes des administrateurs et présidents (CCCA et CA)\n                                    "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)])])]), _vm._v(" "), _c("hr"), _vm._v(" "), _c("div", {
    staticClass: "my-4"
  }, [_c("div", {
    staticClass: "card",
    staticStyle: {
      width: "100%"
    }
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("h5", {
    staticClass: "card-title text-center"
  }, [_vm._v("Syntèse des lignes et garanties ")]), _vm._v(" "), _c("div", {
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
  }, [_c("th", [_vm._v("Banque")]), _vm._v(" "), _c("th", [_vm._v("Lignes")]), _vm._v(" "), _c("th", [_vm._v("Statut")]), _vm._v(" "), _c("th", [_vm._v("Montant")]), _vm._v(" "), _c("th", [_vm._v("Proposition (autorisation)")]), _vm._v(" "), _c("th", [_c("span", [_vm._v("Encours au")]), _vm._v(" "), _c("date-input", {
    staticStyle: {
      "min-width": "250px"
    },
    attrs: {
      value: _vm.f8Manager.data.encours_au,
      id: "encours_au",
      background: "background: #00ffff21",
      color: "color: #000"
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("th", [_vm._v("Durée (mois)")]), _vm._v(" "), _c("th", [_vm._v("Ech/Durée tirage")]), _vm._v(" "), _c("th", [_vm._v("Taux")]), _vm._v(" "), _c("th"), _vm._v(" "), _c("th", [_vm._v("Suretés")])])]), _vm._v(" "), _c("tbody", [_vm._l(_vm.f8Manager.data.nouvelles_lignes_caisse, function (nv_ligne_caisse, idx_) {
    return _c("tr", {
      key: idx_ + "nv_lg_1"
    }, [_c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: nv_ligne_caisse.banque,
        expression: "nv_ligne_caisse.banque"
      }],
      staticClass: "form-control",
      staticStyle: {
        background: "#e9ecef",
        color: "#000",
        "min-width": "250px"
      },
      attrs: {
        type: "text",
        readonly: ""
      },
      domProps: {
        value: nv_ligne_caisse.banque
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(nv_ligne_caisse, "banque", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [nv_ligne_caisse !== null && nv_ligne_caisse !== void 0 && nv_ligne_caisse.from ? [nv_ligne_caisse.ligne_mixte == "Mixte" ? _c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: nv_ligne_caisse.ligne,
        expression: "nv_ligne_caisse.ligne"
      }],
      staticClass: "form-select",
      "class": {
        "already-exist": ["tb40007", "tb19003", "tb8"].includes(nv_ligne_caisse === null || nv_ligne_caisse === void 0 ? void 0 : nv_ligne_caisse.tb)
      },
      staticStyle: {
        "min-width": "250px"
      },
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
    }, [_vm._v(_vm._s(nv_ligne_caisse.ligne))])]) : _c("div", [nv_ligne_caisse.ligne == "" ? _c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: nv_ligne_caisse.ligne,
        expression: "nv_ligne_caisse.ligne"
      }],
      staticClass: "form-select",
      "class": {
        "already-exist": ["tb40007", "tb19003", "tb8"].includes(nv_ligne_caisse === null || nv_ligne_caisse === void 0 ? void 0 : nv_ligne_caisse.tb)
      },
      staticStyle: {
        "min-width": "250px"
      },
      attrs: {
        disabled: !["", null, undefined].includes(nv_ligne_caisse.from),
        readonly: ""
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
      "class": {
        "already-exist": ["tb40007", "tb19003", "tb8"].includes(nv_ligne_caisse === null || nv_ligne_caisse === void 0 ? void 0 : nv_ligne_caisse.tb)
      },
      staticStyle: {
        "min-width": "250px"
      },
      attrs: {
        disabled: !["", null, undefined].includes(nv_ligne_caisse.from),
        readonly: ""
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
      "class": {
        "already-exist": ["tb40007", "tb19003", "tb8"].includes(nv_ligne_caisse === null || nv_ligne_caisse === void 0 ? void 0 : nv_ligne_caisse.tb)
      },
      staticStyle: {
        "min-width": "250px"
      },
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
      "class": {
        "already-exist": ["tb40007", "tb19003", "tb8"].includes(nv_ligne_caisse === null || nv_ligne_caisse === void 0 ? void 0 : nv_ligne_caisse.tb)
      },
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
      "class": {
        "already-exist": ["tb40007", "tb19003", "tb8"].includes(nv_ligne_caisse === null || nv_ligne_caisse === void 0 ? void 0 : nv_ligne_caisse.tb)
      },
      staticStyle: {
        "min-width": "250px"
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
    }, [_vm._v("Mixte")])], 2)]], 2), _vm._v(" "), _c("td", [_c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: nv_ligne_caisse.statut,
        expression: "nv_ligne_caisse.statut"
      }],
      staticClass: "form-select",
      "class": {
        "already-exist": (nv_ligne_caisse === null || nv_ligne_caisse === void 0 ? void 0 : nv_ligne_caisse.from) || ["tb40007", "tb19003", "tb8"].includes(nv_ligne_caisse === null || nv_ligne_caisse === void 0 ? void 0 : nv_ligne_caisse.tb)
      },
      staticStyle: {
        "min-width": "250px"
      },
      attrs: {
        title: nv_ligne_caisse.statut,
        readonly: ""
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
        "already-exist": (nv_ligne_caisse === null || nv_ligne_caisse === void 0 ? void 0 : nv_ligne_caisse.from) || ["tb40007", "tb19003", "tb8"].includes(nv_ligne_caisse === null || nv_ligne_caisse === void 0 ? void 0 : nv_ligne_caisse.tb)
      },
      staticStyle: {
        "min-width": "250px"
      },
      attrs: {
        disabled: !["", null, undefined].includes(nv_ligne_caisse.from),
        "default-typing": false,
        readonly: ""
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
        "already-exist": (nv_ligne_caisse === null || nv_ligne_caisse === void 0 ? void 0 : nv_ligne_caisse.from) || ["tb40007", "tb19003", "tb8"].includes(nv_ligne_caisse === null || nv_ligne_caisse === void 0 ? void 0 : nv_ligne_caisse.tb)
      },
      staticStyle: {
        "min-width": "250px"
      },
      attrs: {
        "default-typing": false,
        readonly: ""
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
        "already-exist": (nv_ligne_caisse === null || nv_ligne_caisse === void 0 ? void 0 : nv_ligne_caisse.from) || ["tb40007", "tb19003", "tb8"].includes(nv_ligne_caisse === null || nv_ligne_caisse === void 0 ? void 0 : nv_ligne_caisse.tb)
      },
      staticStyle: {
        "min-width": "250px"
      },
      attrs: {
        "default-typing": false,
        readonly: ""
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
        "already-exist": (nv_ligne_caisse === null || nv_ligne_caisse === void 0 ? void 0 : nv_ligne_caisse.from) || ["tb40007", "tb19003", "tb8"].includes(nv_ligne_caisse === null || nv_ligne_caisse === void 0 ? void 0 : nv_ligne_caisse.tb)
      },
      staticStyle: {
        width: "80px"
      },
      attrs: {
        type: "number",
        readonly: ""
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
        classname: nv_ligne_caisse !== null && nv_ligne_caisse !== void 0 && nv_ligne_caisse.from || ["tb40007", "tb19003", "tb8"].includes(nv_ligne_caisse === null || nv_ligne_caisse === void 0 ? void 0 : nv_ligne_caisse.tb) ? "already-exist" : "",
        value: nv_ligne_caisse.echeance,
        viewonly: true
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
        "already-exist": (nv_ligne_caisse === null || nv_ligne_caisse === void 0 ? void 0 : nv_ligne_caisse.from) || ["tb40007", "tb19003", "tb8"].includes(nv_ligne_caisse === null || nv_ligne_caisse === void 0 ? void 0 : nv_ligne_caisse.tb)
      },
      staticStyle: {
        width: "60px"
      },
      attrs: {
        type: "number",
        readonly: ""
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
        "already-exist": (nv_ligne_caisse === null || nv_ligne_caisse === void 0 ? void 0 : nv_ligne_caisse.from) || ["tb40007", "tb19003", "tb8"].includes(nv_ligne_caisse === null || nv_ligne_caisse === void 0 ? void 0 : nv_ligne_caisse.tb)
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
    })])]);
  }), _vm._v(" "), _c("tr", [_vm._m(3), _vm._v(" "), _c("td", [_c("currency-input2", {
    staticClass: "form-control",
    staticStyle: {
      "min-width": "250px"
    },
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
    staticStyle: {
      "min-width": "250px"
    },
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
  })], 1)])], 2)])]), _vm._v(" "), _c("br"), _vm._v(" "), _c("b", [_vm._v("Engagement signature")]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-borderless"
  }, [_c("thead", [_c("tr", {
    staticClass: "text-center",
    staticStyle: {
      "vertical-align": "center"
    }
  }, [_c("th", [_vm._v("Banque")]), _vm._v(" "), _c("th", [_vm._v("Lignes")]), _vm._v(" "), _c("th", [_vm._v("Statut")]), _vm._v(" "), _c("th", [_vm._v("Montant (demandé)")]), _vm._v(" "), _c("th", [_vm._v("Proposition (autorisation)")]), _vm._v(" "), _c("th", [_c("span", [_vm._v("Encours au")]), _vm._v(" "), _c("date-input", {
    staticStyle: {
      "min-width": "250px"
    },
    attrs: {
      value: _vm.f8Manager.data.encours_au,
      id: "encours_au",
      background: "background: #00ffff21",
      color: "color: #000"
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("th", [_vm._v("Durée (mois)")]), _vm._v(" "), _c("th", [_vm._v("Echeance")]), _vm._v(" "), _c("th", [_vm._v("Taux")]), _vm._v(" "), _c("th"), _vm._v(" "), _c("th", [_vm._v("Suretés")])])]), _vm._v(" "), _c("tbody", [_vm._l(_vm.f8Manager.data.nouvelles_lignes_signature, function (nv_ligne_sign, i) {
    return _c("tr", {
      key: i + "lg_ext"
    }, [_c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: nv_ligne_sign.banque,
        expression: "nv_ligne_sign.banque"
      }],
      staticClass: "form-control",
      staticStyle: {
        "min-width": "250px"
      },
      attrs: {
        type: "text",
        readonly: ""
      },
      domProps: {
        value: nv_ligne_sign.banque
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(nv_ligne_sign, "banque", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [nv_ligne_sign !== null && nv_ligne_sign !== void 0 && nv_ligne_sign.from ? [nv_ligne_sign.ligne_mixte == "Mixte" ? _c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: nv_ligne_sign.ligne,
        expression: "nv_ligne_sign.ligne"
      }],
      staticClass: "form-select",
      "class": {
        "already-exist": ["tb40007", "tb19003", "tb8"].includes(nv_ligne_sign === null || nv_ligne_sign === void 0 ? void 0 : nv_ligne_sign.tb)
      },
      staticStyle: {
        "min-width": "250px"
      },
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
    }, [_vm._v(_vm._s(nv_ligne_sign.ligne))])]) : _c("div", [nv_ligne_sign.ligne == "" ? _c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: nv_ligne_sign.ligne,
        expression: "nv_ligne_sign.ligne"
      }],
      staticClass: "form-select",
      "class": {
        "already-exist": ["tb40007", "tb19003", "tb8"].includes(nv_ligne_sign === null || nv_ligne_sign === void 0 ? void 0 : nv_ligne_sign.tb)
      },
      staticStyle: {
        "min-width": "250px"
      },
      attrs: {
        disabled: !["", null, undefined].includes(nv_ligne_sign.from),
        readonly: ""
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
    }), _vm._v(" "), _vm._l(_vm.f8Constants.lignes_engagements_signatures_filtres, function (line, indexL) {
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
      "class": {
        "already-exist": ["tb40007", "tb19003", "tb8"].includes(nv_ligne_sign === null || nv_ligne_sign === void 0 ? void 0 : nv_ligne_sign.tb)
      },
      staticStyle: {
        "min-width": "250px"
      },
      attrs: {
        disabled: !["", null, undefined].includes(nv_ligne_sign.from),
        readonly: ""
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
      "class": {
        "already-exist": ["tb40007", "tb19003", "tb8"].includes(nv_ligne_sign === null || nv_ligne_sign === void 0 ? void 0 : nv_ligne_sign.tb)
      },
      staticStyle: {
        "min-width": "250px"
      },
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
      "class": {
        "already-exist": ["tb40007", "tb19003", "tb8"].includes(nv_ligne_sign === null || nv_ligne_sign === void 0 ? void 0 : nv_ligne_sign.tb)
      },
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
      "class": {
        "already-exist": ["tb40007", "tb19003", "tb8"].includes(nv_ligne_sign === null || nv_ligne_sign === void 0 ? void 0 : nv_ligne_sign.tb)
      },
      staticStyle: {
        "min-width": "250px"
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
          return _vm.f8Manager.addVarMixte(["nouvelles_lignes_signature", i]);
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
    }, [_vm._v("Mixte")])], 2)]], 2), _vm._v(" "), _c("td", [_c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: nv_ligne_sign.statut,
        expression: "nv_ligne_sign.statut"
      }],
      staticClass: "form-select",
      "class": {
        "already-exist": nv_ligne_sign.from || ["tb40007", "tb19003", "tb8"].includes(nv_ligne_sign === null || nv_ligne_sign === void 0 ? void 0 : nv_ligne_sign.tb)
      },
      staticStyle: {
        "min-width": "250px"
      },
      attrs: {
        title: nv_ligne_sign.statut,
        readonly: ""
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
        "already-exist": ["tb40007", "tb19003", "tb8"].includes(nv_ligne_sign === null || nv_ligne_sign === void 0 ? void 0 : nv_ligne_sign.tb)
      },
      staticStyle: {
        "min-width": "250px"
      },
      attrs: {
        disabled: !["", null, undefined].includes(nv_ligne_sign.from),
        "default-typing": false,
        readonly: ""
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
        "already-exist": nv_ligne_sign.from || ["tb40007", "tb19003", "tb8"].includes(nv_ligne_sign === null || nv_ligne_sign === void 0 ? void 0 : nv_ligne_sign.tb)
      },
      staticStyle: {
        "min-width": "250px"
      },
      attrs: {
        "default-typing": false,
        readonly: ""
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
        "already-exist": nv_ligne_sign.from || ["tb40007", "tb19003", "tb8"].includes(nv_ligne_sign === null || nv_ligne_sign === void 0 ? void 0 : nv_ligne_sign.tb)
      },
      staticStyle: {
        "min-width": "250px"
      },
      attrs: {
        readonly: "",
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
        "already-exist": nv_ligne_sign.from || ["tb40007", "tb19003", "tb8"].includes(nv_ligne_sign === null || nv_ligne_sign === void 0 ? void 0 : nv_ligne_sign.tb)
      },
      staticStyle: {
        width: "80px"
      },
      attrs: {
        type: "number",
        readonly: ""
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
        classname: nv_ligne_sign.from || ["tb40007", "tb19003", "tb8"].includes(nv_ligne_sign === null || nv_ligne_sign === void 0 ? void 0 : nv_ligne_sign.tb) ? "already-exist" : "",
        value: nv_ligne_sign.echeance,
        viewonly: true
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
        "already-exist": nv_ligne_sign.from || ["tb40007", "tb19003", "tb8"].includes(nv_ligne_sign === null || nv_ligne_sign === void 0 ? void 0 : nv_ligne_sign.tb)
      },
      staticStyle: {
        width: "60px"
      },
      attrs: {
        type: "number",
        readonly: ""
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
        "already-exist": nv_ligne_sign.from || ["tb40007", "tb19003", "tb8"].includes(nv_ligne_sign === null || nv_ligne_sign === void 0 ? void 0 : nv_ligne_sign.tb)
      },
      staticStyle: {
        width: "60px"
      },
      attrs: {
        disabled: "",
        readonly: "",
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
    })])]);
  }), _vm._v(" "), _c("tr", [_vm._m(4), _vm._v(" "), _c("td", [_c("currency-input2", {
    staticClass: "form-control",
    staticStyle: {
      "min-width": "250px"
    },
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
    staticStyle: {
      "min-width": "250px"
    },
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
  })], 1)]), _vm._v(" "), _c("tr", [_vm._m(5), _vm._v(" "), _c("td", [_c("currency-input2", {
    staticClass: "form-control",
    staticStyle: {
      background: "#34495e",
      color: "#fff",
      "min-width": "250px"
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
      color: "#fff",
      "min-width": "250px"
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
  })], 1)])], 2)])])])])])]), _vm._v(" "), _c("br"), _vm._v(" "), _c("br"), _vm._v(" "), _vm.has_sg_ccca == false ? _c("div", [_vm.displ_ccca_decision == false ? _c("div", [_c("br"), _vm._v(" "), _c("div", {
    staticClass: "mb-4"
  }), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.has_sg_ccca,
      expression: "has_sg_ccca"
    }],
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-1"
  }, [_c("small", {
    staticStyle: {
      color: "#95a5a6"
    },
    attrs: {
      title: _vm.addCommentRecommandation ? "Plier la zone de saisie" : "Déplier la zone de saisie"
    }
  }, [_c("input", {
    attrs: {
      type: "checkbox",
      checked: ""
    },
    on: {
      change: function change($event) {
        return _vm.checkRecommendation($event);
      }
    }
  })])]), _vm._v(" "), _vm._m(6)]), _vm._v(" "), _vm.addCommentRecommandation === true ? _c("div", {
    staticClass: "mb-4"
  }, [_c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.has_observer,
      expression: "has_observer"
    }],
    staticClass: "card-body"
  }, [_vm._m(7), _vm._v(" "), _vm._l(_vm.recommandations_observer, function (rec, index) {
    return _c("div", {
      key: index,
      staticClass: "row my-2"
    }, [_c("div", {
      staticClass: "col-1"
    }, [_vm._v(_vm._s(index + 1))]), _vm._v(" "), _c("div", {
      staticClass: "col"
    }, [_c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: rec.libelle,
        expression: "rec.libelle"
      }],
      staticClass: "form-control",
      staticStyle: {
        height: "unset",
        padding: "unset",
        resize: "vertical"
      },
      attrs: {
        id: "exampleFormControlTextarea1",
        rows: "1"
      },
      domProps: {
        value: rec.libelle
      },
      on: {
        change: _vm.handleInput,
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(rec, "libelle", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("div", {
      staticClass: "col-auto"
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
        title: "Ajouter une recommandation"
      },
      on: {
        click: function click($event) {
          return _vm.addMoreRecommandationObserver("recommandations_observer");
        }
      }
    }, [_c("i", {
      staticClass: "icofont-plus"
    })]), _vm._v(" "), _c("button", {
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
          return _vm.removeRecommandationObserver(index);
        }
      }
    }, [_c("i", {
      staticClass: "icofont-trash"
    })])])]);
  })], 2)]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "mt-5"
  }), _vm._v(" "), _c("hr"), _vm._v(" "), _c("h6", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.has_observer == false,
      expression: "has_observer == false"
    }],
    staticClass: "text-center"
  }, [_vm._v("\n                                Quel est votre avis sur ce crédit ?\n                            ")]), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.has_observer == false,
      expression: "has_observer == false"
    }],
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-sm-6 col-md-6 col-lg-6"
  }, [_c("div", [_c("button", {
    staticClass: "btn btn-danger",
    staticStyle: {
      width: "100%",
      height: "8vh",
      "background-color": "#e74c3c"
    },
    attrs: {
      title: "DEFAVORABLE"
    },
    on: {
      click: function click($event) {
        return _vm.appOrdenialOn(false);
      }
    }
  }, [_c("i", {
    staticClass: "icofont icofont-close icofont-3x"
  })]), _vm._v(" "), _vm._m(8)])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-6 col-md-6 col-lg-6"
  }, [_c("div", [_c("button", {
    staticClass: "btn btn-success",
    staticStyle: {
      width: "100%",
      height: "8vh",
      "background-color": "#27ae60"
    },
    attrs: {
      title: "FAVORABLE"
    },
    on: {
      click: function click($event) {
        return _vm.appOrdenialOn(true);
      }
    }
  }, [_c("i", {
    staticClass: "icofont icofont-check icofont-3x"
  })]), _vm._v(" "), _vm._m(9)])])])]) : _c("div", [_c("br"), _vm._v(" "), _c("table", {
    staticClass: "table"
  }, [_c("tbody", [_c("tr", [_c("td", {
    attrs: {
      scope: "row"
    }
  }, [_c("span", {
    "class": ((_vm$member_vote_info = _vm.member_vote_info) === null || _vm$member_vote_info === void 0 ? void 0 : _vm$member_vote_info.user_decision_bool) == 0 ? "stamp is-approved" : "stamp is-nope"
  }, [_vm._v(_vm._s(((_vm$member_vote_info2 = _vm.member_vote_info) === null || _vm$member_vote_info2 === void 0 ? void 0 : _vm$member_vote_info2.user_decision_bool) == 0 ? "Avis Favorable" : "Avis défavorable"))])]), _vm._v(" "), _c("td", {
    attrs: {
      scope: "row"
    }
  }, [_vm._v("\n                                        " + _vm._s((_vm$member_vote_info3 = _vm.member_vote_info) === null || _vm$member_vote_info3 === void 0 ? void 0 : _vm$member_vote_info3.user_comment_of_decision) + "\n                                    ")])]), _vm._v(" "), _c("tr", [_c("td", {
    attrs: {
      scope: "row"
    }
  }), _vm._v(" "), _c("td", {
    attrs: {
      scope: "row"
    }
  }, [_c("h6", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: ((_vm$member_vote_info4 = _vm.member_vote_info) === null || _vm$member_vote_info4 === void 0 ? void 0 : _vm$member_vote_info4.user_recommandation.length) > 0,
      expression: "member_vote_info?.user_recommandation.length > 0"
    }]
  }, [((_vm$member_vote_info5 = _vm.member_vote_info) === null || _vm$member_vote_info5 === void 0 ? void 0 : _vm$member_vote_info5.user_recommandation.length) > 0 ? _c("span", {
    staticClass: "italic"
  }, [_vm._v("Recommandations")]) : _vm._e()]), _vm._v(" "), (_vm$member_vote_info6 = _vm.member_vote_info) !== null && _vm$member_vote_info6 !== void 0 && _vm$member_vote_info6.user_recommandation ? _c("ul", _vm._l((_vm$member_vote_info7 = _vm.member_vote_info) === null || _vm$member_vote_info7 === void 0 ? void 0 : _vm$member_vote_info7.user_recommandation, function (rec, it) {
    return _c("li", {
      key: it
    }, [rec !== null && rec !== void 0 && rec.libelle ? [_vm._v("- " + _vm._s(rec === null || rec === void 0 ? void 0 : rec.libelle))] : _vm._e()], 2);
  }), 0) : _vm._e()])])])]), _vm._v(" "), _c("hr"), _vm._v(" "), _c("br"), _vm._v(" "), _c("div", [_c("span", {
    staticStyle: {
      "font-size": "13px"
    }
  }, [_c("b", [_vm._v("Date vote")]), _vm._v("  :  "), _c("span", {
    staticStyle: {
      color: "#3498db"
    }
  }, [_vm._v(_vm._s((_vm$member_vote_info8 = _vm.member_vote_info) === null || _vm$member_vote_info8 === void 0 ? void 0 : _vm$member_vote_info8.date_vote))])]), _c("br")])]), _vm._v(" "), _c("br")]) : _c("div")]), _vm._v(" "), _c("br")]), _vm._v(" "), _c("modal", {
    staticClass: "pb-5",
    attrs: {
      name: "cccaRecommandations",
      width: "700",
      height: "auto",
      adaptive: true,
      resizable: true
    }
  }, [_c("div", {
    staticClass: "container-fluid py-3 mb-2",
    staticStyle: {
      "max-height": "100%",
      overflow: "auto"
    }
  }, [_c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_c("thead", [_c("tr", [_c("th", [_vm._v("N°")]), _vm._v(" "), _c("th", [_vm._v("Recommandations")])])]), _vm._v(" "), ((_vm$member_vote_info9 = _vm.member_vote_info) === null || _vm$member_vote_info9 === void 0 || (_vm$member_vote_info9 = _vm$member_vote_info9.user_recommandation) === null || _vm$member_vote_info9 === void 0 ? void 0 : _vm$member_vote_info9.length) == 1 && ((_vm$member_vote_info0 = _vm.member_vote_info) === null || _vm$member_vote_info0 === void 0 || (_vm$member_vote_info0 = _vm$member_vote_info0.user_recommandation[0]) === null || _vm$member_vote_info0 === void 0 || (_vm$member_vote_info0 = _vm$member_vote_info0.libelle) === null || _vm$member_vote_info0 === void 0 ? void 0 : _vm$member_vote_info0.length) == 0 ? [_c("tbody", [_c("tr", [_c("td", {
    staticClass: "text-center text-danger",
    attrs: {
      colspan: "2"
    }
  }, [_vm._v("Aucune recommandation")])])])] : ((_vm$member_vote_info1 = _vm.member_vote_info) === null || _vm$member_vote_info1 === void 0 || (_vm$member_vote_info1 = _vm$member_vote_info1.user_recommandation) === null || _vm$member_vote_info1 === void 0 ? void 0 : _vm$member_vote_info1.length) > 1 || ((_vm$member_vote_info10 = _vm.member_vote_info) === null || _vm$member_vote_info10 === void 0 || (_vm$member_vote_info10 = _vm$member_vote_info10.user_recommandation) === null || _vm$member_vote_info10 === void 0 ? void 0 : _vm$member_vote_info10.length) == 1 && ((_vm$member_vote_info11 = _vm.member_vote_info) === null || _vm$member_vote_info11 === void 0 || (_vm$member_vote_info11 = _vm$member_vote_info11.user_recommandation[0]) === null || _vm$member_vote_info11 === void 0 || (_vm$member_vote_info11 = _vm$member_vote_info11.libelle) === null || _vm$member_vote_info11 === void 0 ? void 0 : _vm$member_vote_info11.length) > 0 ? [_c("tbody", _vm._l((_vm$member_vote_info12 = _vm.member_vote_info) === null || _vm$member_vote_info12 === void 0 ? void 0 : _vm$member_vote_info12.user_recommandation, function (rec, it) {
    return _c("tr", {
      key: it
    }, [_c("td", [_vm._v(_vm._s(it + 1))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(rec === null || rec === void 0 ? void 0 : rec.libelle))])]);
  }), 0)] : _vm._e()], 2)])])]), _vm._v(" "), _c("modal", {
    staticClass: "pb-5",
    attrs: {
      name: "approval",
      width: "650",
      height: "auto",
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
    staticClass: "modal-header"
  }, [_c("h5", {
    staticClass: "modal-title",
    attrs: {
      id: "approval"
    }
  }), _vm._v(" "), _c("button", {
    staticClass: "btn-close",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.cancelAppOrDenial("approval", true);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "modal-body"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("\n                        Si vous avez un commentaire particulier à ajouter avant l'approbation du dossier, notez-le ici.\n                    ")]), _vm._v(" "), _c("div", [_c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.member_comment,
      expression: "member_comment"
    }],
    attrs: {
      id: "input_message",
      rows: "4",
      cols: "50",
      placeholder: "Justifiez votre avis"
    },
    domProps: {
      value: _vm.member_comment
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.member_comment = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-1"
  }, [_c("small", {
    staticStyle: {
      color: "#95a5a6"
    },
    attrs: {
      title: _vm.addCommentRecommandation ? "Plier la zone de saisie" : "Déplier la zone de saisie"
    }
  }, [_c("input", {
    attrs: {
      type: "checkbox",
      checked: ""
    },
    on: {
      change: function change($event) {
        return _vm.checkRecommendation($event);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-11"
  }, [_c("span", [_vm._v(" Ajouter des recommandations")])])]), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.addCommentRecommandation === true,
      expression: "addCommentRecommandation === true"
    }],
    staticClass: "mb-4"
  }, [_vm.has_observer == false ? _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "row my-2"
  }, [_c("div", {
    staticClass: "col-1"
  }, [_vm._v("N°")]), _vm._v(" "), _c("div", {
    staticClass: "col"
  }, [_vm._v("Recommandations")]), _vm._v(" "), _c("div", {
    staticClass: "col-auto"
  })]), _vm._v(" "), _vm._l(_vm.recommandations, function (rec, index) {
    return _c("div", {
      key: index,
      staticClass: "row my-2"
    }, [_c("div", {
      staticClass: "col-1"
    }, [_vm._v(_vm._s(index + 1))]), _vm._v(" "), _c("div", {
      staticClass: "col"
    }, [_c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: rec.libelle,
        expression: "rec.libelle"
      }],
      staticClass: "form-control",
      staticStyle: {
        height: "unset",
        padding: "unset",
        resize: "vertical"
      },
      attrs: {
        id: "exampleFormControlTextarea1",
        rows: "1"
      },
      domProps: {
        value: rec.libelle
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(rec, "libelle", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("div", {
      staticClass: "col-auto"
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
        title: "Ajouter une recommandation"
      },
      on: {
        click: function click($event) {
          return _vm.addMoreRecommandation("recommandations");
        }
      }
    }, [_c("i", {
      staticClass: "icofont-plus"
    })]), _vm._v(" "), _c("button", {
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
          return _vm.removeRecommandation(index);
        }
      }
    }, [_c("i", {
      staticClass: "icofont-trash"
    })])])]);
  })], 2) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "modal-footer"
  }, [_c("button", {
    staticClass: "btn btn-sucess",
    staticStyle: {
      color: "#fff",
      "background-color": "#27ae60"
    },
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.confirmAction("approval");
      }
    }
  }, [_vm._v("Confirmer votre décision")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-secondary ml",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.cancelAppOrDenial("approval", true);
      }
    }
  }, [_vm._v("Annuler")])])])])]), _vm._v(" "), _c("div", {
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
  }, [_vm._v("\n                    Fermer le tableau\n                ")])], 1) : _c("div", {
    staticClass: "card card-width-height"
  }, [_c("br"), _vm._v(" "), _c("div", {
    staticClass: "card-header hdc pb-0 pt-2"
  }, [_c("h3", {
    staticClass: "head",
    attrs: {
      id: "ccca2-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                             " + _vm._s(_vm.tb_display_name) + " : CCCA-PV2\n                         ")]), _vm._v(" "), _c("div", {
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
  })], 1)])])])])], 1), _vm._v(" "), _c("div", [_c("div", {
    staticClass: "modal fade modal-lg",
    attrs: {
      id: "instruction2",
      tabindex: "-1",
      "aria-labelledby": "instruction2",
      "aria-hidden": "true"
    }
  }, [_c("div", {
    staticClass: "modal-dialog",
    staticStyle: {
      width: "650px"
    }
  }, [_c("div", {
    staticClass: "modal-content"
  }, [_c("div", {
    staticClass: "modal-header"
  }, [_c("h5", {
    staticClass: "modal-title",
    attrs: {
      id: "instruction2"
    }
  }, [_vm._v("\n                             Instruction - " + _vm._s(_vm.tb_display_name) + " : Présentation du client\n                         ")]), _vm._v(" "), _c("button", {
    staticClass: "btn-close",
    attrs: {
      type: "button",
      "data-bs-dismiss": "modal",
      "aria-label": "Close"
    }
  })]), _vm._v(" "), _vm._m(10), _vm._v(" "), _vm._m(11)])])])]), _vm._v(" "), _c("modal", {
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
  }, [_vm._v("\n                    Garanties et supports retenus de la ligne : " + _vm._s((_vm$ligneSelected = _vm.ligneSelected) === null || _vm$ligneSelected === void 0 ? void 0 : _vm$ligneSelected.ligne) + " "), (_vm$ligneSelected2 = _vm.ligneSelected) !== null && _vm$ligneSelected2 !== void 0 && _vm$ligneSelected2.from ? _c("span", [_vm._v("(Nouvelle ligne)")]) : _c("span", [_vm._v("(Ligne existante)")])]), _vm._v(" "), _c("i", {
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
      ligneSelected: _vm.ligneSelected
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
  }, [_vm._v("\n                    Fermer\n                ")])])])]), _vm._v(" "), _c("note-modal", {
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
        var _vm$f8Manager$data$no;
        (_vm$f8Manager$data$no = _vm.f8Manager.data.notes) === null || _vm$f8Manager$data$no === void 0 || _vm$f8Manager$data$no.unshift($event);
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
  return _c("table", {
    staticClass: "table-borderless w-100"
  }, [_c("tbody", [_c("tr", [_c("td", {
    staticClass: "align-middle",
    attrs: {
      colspan: "100"
    }
  }, [_c("div", {
    staticClass: "d-flex justify-content-center align-items-center text-center",
    staticStyle: {
      width: "100%",
      height: "300px"
    }
  }, [_c("div", {
    staticClass: "column"
  }, [_c("div", {
    staticClass: "spinner-border spinner-border-xl"
  }), _vm._v(" "), _c("div", {
    staticClass: "d-block"
  }, [_vm._v("\n                                                Chargement des données en cours\n                                            ")])])])])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "d-flex justify-content-center text-center align-items-center text-muted py-4"
  }, [_c("div", [_c("span", {
    staticClass: "spinner-border spinner-border"
  }), _vm._v(" "), _c("h5", [_vm._v("\n                                                Chargement des données en cours ... "), _c("br"), _vm._v("\n                                                Ceci peut prendre un peu de temps\n                                            ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", {
    staticClass: "sticky sticky-top-4 text-nowrap",
    staticStyle: {
      background: "#f4f3f3 !important"
    }
  }, [_vm._v("Nom & Prénoms")]), _vm._v(" "), _c("th", {
    staticClass: "sticky-top-3 text-center",
    staticStyle: {
      background: "#f4f3f3 !important"
    }
  }, [_vm._v("Fonction")]), _vm._v(" "), _c("th", {
    staticClass: "sticky-top-3 text-center",
    staticStyle: {
      background: "#f4f3f3 !important"
    }
  }, [_vm._v("Décision")]), _vm._v(" "), _c("th", {
    staticClass: "sticky-top-3 text-center",
    staticStyle: {
      background: "#f4f3f3 !important"
    }
  }, [_vm._v("Commentaire")]), _vm._v(" "), _c("th", {
    staticClass: "sticky-top-3 text-nowrap text-center",
    staticStyle: {
      background: "#f4f3f3 !important"
    }
  }, [_vm._v("Fichier(s) attaché(s)")])])]);
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
  return _c("div", {
    staticClass: "col-11"
  }, [_c("span", [_vm._v(" Ajouter des recommandations")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "row my-2"
  }, [_c("div", {
    staticClass: "col-1"
  }, [_vm._v("N°")]), _vm._v(" "), _c("div", {
    staticClass: "col"
  }, [_vm._v("Recommandations")]), _vm._v(" "), _c("div", {
    staticClass: "col-auto"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "text-center"
  }, [_c("b", [_vm._v("DEFAVORABLE")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "text-center"
  }, [_c("b", [_vm._v("FAVORABLE")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "modal-body"
  }, [_c("img", {
    attrs: {
      src: "/images/capture_afg/signaletique.png",
      width: "100%; height:100%;"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "modal-footer"
  }, [_c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button",
      "data-bs-dismiss": "modal"
    }
  }, [_vm._v("Fermer")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pv/nsia/ccca/CCCA-PV2.vue?vue&type=style&index=0&id=8c8814ec&lang=css&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pv/nsia/ccca/CCCA-PV2.vue?vue&type=style&index=0&id=8c8814ec&lang=css&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\ninput[data-v-8c8814ec] {\n     /*border: 1px solid red;*/\n}\n*[data-v-8c8814ec] {\n     font-family: \"Google sans\";\n}\nlabel[data-v-8c8814ec] {\n     height: 10px;\n     font-size: 13px;\n}\ninput[data-v-8c8814ec],\n select[data-v-8c8814ec] {\n     height: 35px;\n     border-color: #34495e;\n     color: #57606f;\n     font-size: 13px;\n     font-weight: bold;\n}\n.card-width-height[data-v-8c8814ec] {\n     width: 100%;\n     height: 100%;\n}\n.head[data-v-8c8814ec] {\n     color: #f1f2f6;\n     font-size: 22px;\n}\n.hdc[data-v-8c8814ec] {\n     background-color: #57606f;\n}\n\n /*  List element styles */\n#menu ul[data-v-8c8814ec],\n #menu li[data-v-8c8814ec] {\n     list-style: none;\n     padding: 0;\n     margin: 0;\n     display: inline-block;\n}\n#menu li[data-v-8c8814ec] {\n     padding: 5px 0px;\n}\n\n /* Main menu links */\n#menu a[data-v-8c8814ec]:link,\n #menu a[data-v-8c8814ec]:visited,\n #menu a[data-v-8c8814ec]:active {\n     text-decoration: none;\n     color: var(--link2-color);\n     padding: 5px 7px;\n     font-weight: bold;\n     position: relative;\n     z-index: 2;\n}\n#menu a[data-v-8c8814ec]:hover,\n #menu a[data-v-8c8814ec]:focus {\n     background-color: var(--link-color);\n     color: var(--link2-color);\n     text-decoration: underline;\n}\n\n /* The submenu links container*/\n.subdrop[data-v-8c8814ec] {\n     background: var(--bg-color);\n     height: 0;\n     border-top: 0;\n     min-width: 100%;\n     left: 0;\n     margin: 0;\n     position: absolute;\n     text-align: left;\n     top: 100%;\n     visibility: hidden;\n     height: 1px;\n     overflow: hidden;\n     z-index: 10;\n}\n\n /* Dropdown Parent Link Style */\n.droplink[data-v-8c8814ec] {\n     display: inline-block;\n     min-width: -moz-fit-content;\n     min-width: fit-content;\n     position: relative;\n}\ninput[type=checkbox][data-v-8c8814ec] {\n     /* Double-sized Checkboxes */\n     /* IE */\n     /* FF */\n     /* Safari and Chrome */\n     /* Opera */\n     transform: scale(2);\n     padding: 10px;\n}\n\n /* List elements within the dropdown */\n.subdrop li[data-v-8c8814ec] {\n     display: block !important;\n     padding: 0 !important;\n}\n\n /* Links within the dropdown list */\n.subdrop a[data-v-8c8814ec] {\n     display: block;\n     padding: 12px 20px;\n     white-space: nowrap;\n}\n\n /* Allows links to show on hover/focus and through keyboard navigation via focus-within */\n.droplink:hover .subdrop[data-v-8c8814ec] {\n     visibility: visible;\n     height: auto;\n     z-index: 11;\n}\n\n /* Separate these to avoid IE completely ignoring the css above */\n.droplink:focus-within .subdrop[data-v-8c8814ec] {\n     visibility: visible;\n     height: auto;\n     z-index: 11;\n}\n.relook-header[data-v-8c8814ec] {\n    color: #000;\n    background-color: #f4f3f3;\n    padding: 2px;\n    border-bottom: 1px solid #b6b8bb;\n}\n.badge-sm[data-v-8c8814ec] {\n     display: inline-block;\n     width: 15px;\n     height: 15px;\n     background: rgba(255, 0, 0, 0.882);\n     color: white;\n     font-size: 12px;\n     font-weight: 500;\n     border-radius: 100%;\n     position: absolute;\n     top: -20%;\n     left: 55%;\n     text-align: center;\n}\n.stamp[data-v-8c8814ec] {\n  transform: rotate(-4deg);\n\tcolor:  #3498db;\n\tfont-size: 1.5rem;\n\tfont-weight: 700;\n\tborder: 0.25rem solid #3498db;\n\tdisplay: inline-block;\n\tpadding: 0.25rem 1rem;\n\ttext-transform: uppercase;\n\tborder-radius: 1rem;\n\tfont-family: 'Courier';\n\t-webkit-mask-image: url('/images/grunge.png');\n  -webkit-mask-size: 944px 604px;\n  mix-blend-mode: multiply;\n  /* float: right; */\n  /*\n  position: relative; */\n  /* top: 20vh;\n  right: -25vh; */\n}\ntextarea[data-v-8c8814ec] {\n  width: 100%;\n  height: 150px;\n  padding: 12px 20px;\n  box-sizing: border-box;\n  border: 2px solid #ccc;\n  border-radius: 4px;\n  background-color: #f8f8f8;\n  font-size: 16px;\n  resize: none;\n}\n.is-nope[data-v-8c8814ec] {\ncolor: #D23;\nborder: 0.5rem double #D23;\ntransform: rotate(3deg);\n    -webkit-mask-position: 2rem 3rem;\nfont-size: 1.5rem;}\n.is-approved[data-v-8c8814ec] {\n    color: #0A9928;\n    border: 0.5rem solid #0A9928;\n    -webkit-mask-position: 13rem 6rem;\n    transform: rotate(-4deg);\nborder-radius: 0;\n}\ntd.sticky[data-v-8c8814ec], th.sticky[data-v-8c8814ec] {\n  position: sticky;\n  left: 0; /* ou right: 0; selon la direction souhaitée */\n  background-color: #f4f3f3; /* couleur de fond facultative pour masquer le contenu en dessous */\n  z-index: 1; /* pour s'assurer que l'élément est au-dessus des autres éléments */\n}\ntd.sticky-top[data-v-8c8814ec], th.sticky-top[data-v-8c8814ec] {\n  position: sticky;\n  top: 0; /* ou right: 0; selon la direction souhaitée */\n  background-color: #f4f3f3; /* couleur de fond facultative pour masquer le contenu en dessous */\n  z-index: 2; /* pour s'assurer que l'élément est au-dessus des autres éléments */\n}\ntd.sticky-top-3[data-v-8c8814ec], th.sticky-top-3[data-v-8c8814ec] {\n  position: sticky;\n  top: 0; /* ou right: 0; selon la direction souhaitée */\n  background-color: #f4f3f3; /* couleur de fond facultative pour masquer le contenu en dessous */\n  z-index: 3; /* pour s'assurer que l'élément est au-dessus des autres éléments */\n}\ntd.sticky-top-4[data-v-8c8814ec], th.sticky-top-4[data-v-8c8814ec] {\n  position: sticky;\n  top: 0; /* ou right: 0; selon la direction souhaitée */\n  background-color: #f4f3f3; /* couleur de fond facultative pour masquer le contenu en dessous */\n  z-index: 4; /* pour s'assurer que l'élément est au-dessus des autres éléments */\n}\n\n ", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pv/nsia/ccca/CCCA-PV2.vue?vue&type=style&index=0&id=8c8814ec&lang=css&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pv/nsia/ccca/CCCA-PV2.vue?vue&type=style&index=0&id=8c8814ec&lang=css&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CCCA_PV2_vue_vue_type_style_index_0_id_8c8814ec_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CCCA-PV2.vue?vue&type=style&index=0&id=8c8814ec&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pv/nsia/ccca/CCCA-PV2.vue?vue&type=style&index=0&id=8c8814ec&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CCCA_PV2_vue_vue_type_style_index_0_id_8c8814ec_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CCCA_PV2_vue_vue_type_style_index_0_id_8c8814ec_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/pv/nsia/ccca/CCCA-PV2.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/pv/nsia/ccca/CCCA-PV2.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CCCA_PV2_vue_vue_type_template_id_8c8814ec_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CCCA-PV2.vue?vue&type=template&id=8c8814ec&scoped=true */ "./resources/js/components/pv/nsia/ccca/CCCA-PV2.vue?vue&type=template&id=8c8814ec&scoped=true");
/* harmony import */ var _CCCA_PV2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CCCA-PV2.vue?vue&type=script&lang=js */ "./resources/js/components/pv/nsia/ccca/CCCA-PV2.vue?vue&type=script&lang=js");
/* harmony import */ var _CCCA_PV2_vue_vue_type_style_index_0_id_8c8814ec_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CCCA-PV2.vue?vue&type=style&index=0&id=8c8814ec&lang=css&scoped=true */ "./resources/js/components/pv/nsia/ccca/CCCA-PV2.vue?vue&type=style&index=0&id=8c8814ec&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CCCA_PV2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _CCCA_PV2_vue_vue_type_template_id_8c8814ec_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _CCCA_PV2_vue_vue_type_template_id_8c8814ec_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "8c8814ec",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/pv/nsia/ccca/CCCA-PV2.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/pv/nsia/ccca/CCCA-PV2.vue?vue&type=script&lang=js":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/pv/nsia/ccca/CCCA-PV2.vue?vue&type=script&lang=js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CCCA_PV2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CCCA-PV2.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pv/nsia/ccca/CCCA-PV2.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CCCA_PV2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pv/nsia/ccca/CCCA-PV2.vue?vue&type=style&index=0&id=8c8814ec&lang=css&scoped=true":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/pv/nsia/ccca/CCCA-PV2.vue?vue&type=style&index=0&id=8c8814ec&lang=css&scoped=true ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CCCA_PV2_vue_vue_type_style_index_0_id_8c8814ec_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CCCA-PV2.vue?vue&type=style&index=0&id=8c8814ec&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pv/nsia/ccca/CCCA-PV2.vue?vue&type=style&index=0&id=8c8814ec&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/pv/nsia/ccca/CCCA-PV2.vue?vue&type=template&id=8c8814ec&scoped=true":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/pv/nsia/ccca/CCCA-PV2.vue?vue&type=template&id=8c8814ec&scoped=true ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CCCA_PV2_vue_vue_type_template_id_8c8814ec_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CCCA_PV2_vue_vue_type_template_id_8c8814ec_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CCCA_PV2_vue_vue_type_template_id_8c8814ec_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CCCA-PV2.vue?vue&type=template&id=8c8814ec&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pv/nsia/ccca/CCCA-PV2.vue?vue&type=template&id=8c8814ec&scoped=true");


/***/ })

}]);