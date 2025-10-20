"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_contreanalyse_cofina_filiale_CA5_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/filiale/CA5.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/filiale/CA5.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/auth.service */ "./resources/js/services/auth.service.js");
/* harmony import */ var _services_credit_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/credit.service */ "./resources/js/services/credit.service.js");
/* harmony import */ var _johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @johmun/vue-tags-input */ "./node_modules/@johmun/vue-tags-input/dist/vue-tags-input.js");
/* harmony import */ var _johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }





// import { VueEditor } from "vue2-editor";


window.$ = window.jQuery = __webpack_require__(/*! jquery/dist/jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "fiche-lecture",
  display: "Fiche de lecture",
  components: {
    MoreVerticalIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_4__.MoreVerticalIcon,
    ChevronUpIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_4__.ChevronUpIcon,
    ChevronDownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_4__.ChevronDownIcon,
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_4__.PlusIcon,
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_4__.TrashIcon,
    AirplayIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_4__.AirplayIcon,
    BookOpenIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_4__.BookOpenIcon,
    VueTagsInput: (_johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_3___default())
  },
  props: _defineProperty({
    meta_data: Object,
    tb_name: String,
    tb_display_name: String
  }, "tb_display_name", String),
  created: function created() {
    this.getUsers();
  },
  mounted: function mounted() {
    var _this = this;
    this.loadRetrieved();
    this.loadTbAttrs(); // charge les attributs + sous attributs des tables
    this.tableClosedOrOpened();

    // EventBus.$on('send-file',this.fiche_lecture = this.meta_data?.cred_pub_tb_50?.fiche_lecture)
    EventBus.$on('send-fiche', function (data) {
      // console.log(data)
      _this.$modal.hide('fiche_lecture');
    });
  },
  computed: {
    filteredUsers: function filteredUsers() {
      var _this2 = this;
      this.receivers = this.users.filter(function (user) {
        // console.log("username", user.name.toLocaleLowerCase().includes(this.tag.toLocaleLowerCase()))
        return user.name.toLocaleLowerCase().includes(_this2.tg.toLocaleLowerCase());
      }).map(function (el) {
        return _objectSpread({
          text: el.name
        }, el);
      });
      return this.receivers;
    },
    defaultActors: function defaultActors() {
      var caf = this.filteredUsers.find(function (el) {
        return ['r472oAxtaFJSlsh5', "DUxMP2ZQheGFreQt5z2s"].includes(el.role_id);
      });
      var ca = this.filteredUsers.find(function (el) {
        return (el === null || el === void 0 ? void 0 : el.role_id) == 'yYnev325ob1vDkgq';
      });

      // const { pub_workflow_curr_stage: stage, pub_workflow } = this.meta_data["dossier_credit"]
      //const sup_id = pub_workflow[stage + 1]?.responsible_id
      //const sup = this.filteredUsers.find(el => el.id == sup_id)

      return [caf, ca].filter(function (el) {
        return el != null;
      });
    }
  },
  data: function data() {
    var vm = this;
    return {
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
      tag: {
        0: ""
      },
      tg: "",
      seens: {
        0: true
      },
      seen1: true,
      tags: {
        0: []
      },
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
      ebapisHost: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__["default"].host,
      authcheck: false,
      authcheckUsr: null,
      authcheckStatus: null,
      watchInPause: false,
      initLoad: true,
      seen: true,
      listingNote: false,
      dossier_credit: null,
      toDelete: '',
      meta_parseable: {
        cred_pub_key: this.meta_data["cred_pub_key"],
        tb_name: this.tb_name
      },
      display_response: false,
      formDataToBeWatched: {
        fiche_lectures: "",
        // sender: "",
        // receivers: "",
        // user: "",
        notes: []
      },
      fiche_lectures: [{
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
        receivers: ""
      }],
      // fiche_lecture: [
      //   [{
      //     question: "",
      //     niveau_risque: "",
      //     avis: ""
      //   },
      //   {
      //     reponse: "",
      //     niveau_risque: "",
      //     avis: "",
      //   }]
      // ],
      isResponse: false
    };
  },
  methods: {
    determineActors: function determineActors() {
      this.getUsers();
      var caf = this.users.filter(function (el) {
        if ((el === null || el === void 0 ? void 0 : el.role_id) == 'r472oAxtaFJSlsh5') {
          return el;
        }
      });
      var chz = this.users.filter(function (el) {
        if ((el === null || el === void 0 ? void 0 : el.role_id) == 'yYnev325ob1vDkgq') {
          return el;
        }
      });
      var dex = this.users.filter(function (el) {
        if ((el === null || el === void 0 ? void 0 : el.role_id) == 'tIr9QhALZPULkbino7T' || (el === null || el === void 0 ? void 0 : el.role_id) == 'QBRHlcRW5H52grDn') {
          return el;
        }
      });
      return caf;
    },
    determineSRC: function determineSRC() {
      this.getUsers();
      // console.log("this.users", this.users)
      var src = this.users.filter(function (el) {
        if ((el === null || el === void 0 ? void 0 : el.role_id) == 'tyJLxuAh6F2DJR6e') {
          return el;
        }
      });
      src = src[0];
      return src;
    },
    manageButton: function manageButton(index) {
      // console.log("indexxx", index)
      // console.log("isLoding", this.isLoding)
      // console.log("buttonStatus", this.buttonStatus)
      if (this.isLoding[index] == false && this.buttonStatus[index] == false) {
        return true;
      }
      return false;
    },
    getTag: function getTag(index) {
      this.tg = this.tag[index];
      // console.log("tg======>",this.tg)
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
      this.tags[this.fiche_lectures.length] = _toConsumableArray(receivers);
      this.fiche_lectures[0].sender = this.authcheckUsr;
      this.fiche_lectures.push({
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
      this.$set(this.seens, this.fiche_lectures.length - 1, true);
      this.$set(this.isLoding, this.fiche_lectures.length - 1, false);
      this.$set(this.buttonStatus, this.fiche_lectures.length - 1, true);
      // console.log("isLoding", this.isLoding)
    },
    // addMoreFiche() {
    //     let caf = this.filteredUsers.filter((el) => {
    //             if (el?.role_id == 'r472oAxtaFJSlsh5') {
    //                 return el
    //             }
    //         })
    //         const { pub_workflow } = this.meta_data["dossier_credit"]
    //         const caf_level = pub_workflow.findIndex(el => el.responsible_id == caf[0].id)
    //         const stage = caf_level != -1 ? caf_level : 0
    //         const sup_id = pub_workflow[stage + 1]?.responsible_id
    //         const sup = this.filteredUsers.find(el => el.id == sup_id)
    //         const receivers = [...caf, sup].filter((el, index, list) => {
    //             const ind = list.findIndex(elm => el.id == elm.id)
    //             return list.indexOf(el) === ind
    //         })
    //         const notified_users = [...receivers]
    //         this.tags[this.fiche_lectures.length] = [...receivers]
    //         this.fiche_lectures[0].sender = this.authcheckUsr
    //         this.fiche_lectures.push({
    //             fiche: [{ question: "", reponse: "", is_answered: false }],
    //             is_answered: false,
    //             update_at: "",
    //             created_at: new Date(),
    //             created_by: "",
    //             sender: this.authcheckUsr,
    //             receivers,
    //             notified_users
    //         })
    //   this.$set(this.seens, this.fiche_lectures.length - 1, true)
    //   this.$set(this.isLoding, this.fiche_lectures.length - 1, false)
    //   this.$set(this.buttonStatus, this.fiche_lectures.length - 1, true)
    //   console.log("isLoding", this.isLoding)
    // },
    removeFiche: function removeFiche(index) {
      this.toDelete = index;
      this.$modal.show("confirm_supp_fiche_lecture", index);
      // this.fiche_lectures.splice(index, 1)
    },
    deleteFiche: function deleteFiche(index) {
      this.fiche_lectures.splice(index, 1);
      this.$modal.hide("confirm_supp_fiche_lecture");
      this.toDelete = '';
      this.handleInput();
    },
    closeModal: function closeModal() {
      this.$modal.hide("confirm_supp_fiche_lecture");
    },
    NotifyUser: function NotifyUser(index) {
      var _this$tags$index,
        _this3 = this;
      if (((_this$tags$index = this.tags[index]) === null || _this$tags$index === void 0 ? void 0 : _this$tags$index.length) > 0) {
        this.$set(this.isLoding, index, true);
        // this.isLoding = true
        _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["default"].loadUserData().then(function (res) {
          _this3.$axios.post(_this3.ebapisHost + "notifications/api/v1/questions-responses-notifications/", {
            cred_pub_key: _this3.meta_parseable["cred_pub_key"],
            sender: res.data,
            receivers: _this3.tags[index]
          }).then(function (response) {
            _this3.tags = [];
            EventBus.$emit("message-send");
            _this3.$toasted.show("Message envoyé avec succès");
            // this.isLoding = false
            _this3.$set(_this3.isLoding, index, false);
            // this.initFicheLecture()
            _this3.$set(_this3.buttonStatus, index, false);
            _this3.formDataToBeWatched.fiche_lectures[index]["sender"] = res.data;
            EventBus.$emit('launch-bulk-save');
          })["catch"](function (error) {
            console.log(error);
          });
        })["catch"](function (err) {
          _this3.loadWithError(err);
        });
      } else {
        this.$toasted.show("Veuillez saisir le collaborateur à notifier");
      }
    },
    initFicheLecture: function initFicheLecture() {
      this.fiche_lecture = [[{
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
      var _this$fiche_lectures$;
      (_this$fiche_lectures$ = this.fiche_lectures[index]) === null || _this$fiche_lectures$ === void 0 || _this$fiche_lectures$.fiche.push({
        question: "",
        reponse: "",
        is_answered: false
      });
    },
    remove: function remove(index, idx) {
      // console.log("fiche_lectures", this.fiche_lectures[index])
      this.fiche_lectures[index].fiche.splice(idx, 1);
      this.handleInput();
    },
    tagUser: function tagUser(user) {
      this.formDataToBeWatched.commentaire = this.formDataToBeWatched.commentaire.replace(this.formDataToBeWatched.commentaire.at(-1), '') + "<span class=' text-primary' style='color:#e67e22'>" + user.name + ' - ' + user.role_name + "</span> &nbsp;";
      this.tagValue = this.formDataToBeWatched.commentaire;
      this.taggedUsers.push(user);
      this.tagging = false;
      this.formDataToBeWatched.user = user;
    },
    pressAtKey: function pressAtKey(event) {
      this.tagging = true;
    },
    getUsers: function getUsers() {
      var _this$meta_data,
        _this4 = this;
      // requete pour recuperer tous les utilisateurs qui ont traité le dossier
      this.$axios.post(this.ebapisHost + "creditbuilder/api/v1/load-all-doc-users/", {
        cred_pub_key: (_this$meta_data = this.meta_data) === null || _this$meta_data === void 0 ? void 0 : _this$meta_data.cred_pub_key
      }).then(function (data) {
        _this4.users = data.data.users;
        // console.log("users", this.users)
      })["catch"](function (err) {
        console.dir(err);
      });
    },
    openNotesModal: function openNotesModal() {
      var listing = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.listingNote = listing;
      this.$modal.show(this.tb_name);
    },
    loadRetrieved: function loadRetrieved() {
      var lentb = this.meta_data["dossier_credit"]["tbs_in_use"];
      var createdKey = this.tb_name;
      var createdKeyArr = createdKey.split("tb");
      createdKey = "cred_pub_tb_" + createdKeyArr[1];
      if (lentb.length > 0) {
        var _this$meta_data$dossi;
        if (this.meta_data["dossier_credit"][createdKey] != undefined) {
          this.formDataToBeWatched = this.meta_data["dossier_credit"][createdKey];
          if (this.meta_data["dossier_credit"][createdKey]["fiche_lectures"] != "") {
            // alert(0)
            this.fiche_lectures = this.formDataToBeWatched["fiche_lectures"];
            this.tags = this.fiche_lectures.reduce(function (cum, curr, index) {
              var data = {};
              data[index] = curr.notified_users;
              cum = _objectSpread(_objectSpread({}, cum), data);
              return cum;
            }, {});
            this.initLoding();
            this.initButtonStatus();
          }
        }
        // Close table by default
        this.defaultRetract(false, (_this$meta_data$dossi = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi === void 0 ? void 0 : _this$meta_data$dossi.applied_templ_id);
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
        // window.location.href = "/login";
      }
      if (this.authcheck === true) {
        this.$emit("autosaving");
        this.$axios.post(this.ebapisHost + "creditbuilder/api/v1/autosaving/", {
          user: this.authcheckUsr,
          meta_parseable: this.meta_parseable,
          filledData: this.formDataToBeWatched,
          loadDossier: true
        }).then(function (response) {
          this.$emit("autosaving");
          // this.$Progress.finish();
          // console.log(response);
          var tbFetcheData = response.data;
          if (tbFetcheData["is_success"] === true) {
            this.dossier_credit = tbFetcheData['dossier_credit'];
            // this.formDataToBeWatched.ligne_existantes = this.dossier_credit.cred_pub_tb_34.lignes_existantes;
            // this.formDataToBeWatched.ligne_existantes.ligne_mfcfa_ca = this.dossier_credit.cred_pub_tb_34.ligne_existantes.ligne_mfcfa
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
    initLoding: function initLoding() {
      var _this5 = this;
      if (this.fiche_lectures != undefined) {
        this.fiche_lectures.forEach(function (element, key) {
          // this.isLoding[key] = false
          _this5.$set(_this5.isLoding, key, false);
        });
      }
    },
    initButtonStatus: function initButtonStatus() {
      var _this6 = this;
      if (this.fiche_lectures != undefined) {
        this.fiche_lectures.forEach(function (element, key) {
          _this6.$set(_this6.buttonStatus, key, true);
        });
      }
    },
    loadTbAttrs: function loadTbAttrs() {
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
        id: "tb51-head"
      };
      // console.log(p)
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
    handleInput: function handleInput(evt, index) {
      if (![undefined, 'undefined'].includes(index)) {
        this.fiche_lectures[index].receivers = this.tags[index];
        this.fiche_lectures[index].notified_users = this.tags[index];
        this.fiche_lectures[index].sender = this.authcheckUsr;
        this.formDataToBeWatched.fiche_lectures = this.fiche_lectures;
        this.formDataToBeWatched.sender = this.authcheckUsr;
      }
    },
    setButton: function setButton(evt, index) {
      var _this7 = this;
      this.fiche_lectures.forEach(function (element) {
        element.fiche.forEach(function (elt) {
          if (elt.question != "") {
            _this7.$set(_this7.buttonStatus, index, true);
          }
        });
      });
    },
    instruction3: function instruction3(id) {
      var id0 = '#' + id;
      window.$(id0).modal('show');
    }
  },
  watch: {
    formDataToBeWatched: {
      handler: function handler(newVal, oldVal) {
        // if (oldVal === undefined) {
        //   return
        // }
        this.autosaving(newVal, oldVal);
      },
      deep: true,
      immediate: true
    },
    filteredUsers: function filteredUsers() {
      if (this.fiche_lectures[0].receivers == "") {
        this.fiche_lectures[0].receivers = this.defaultActors;
        this.fiche_lectures[0].notified_users = this.defaultActors;
        this.tags[0] = this.defaultActors;
        this.fiche_lectures[0].sender = this.authcheckUsr;
        this.formDataToBeWatched.fiche_lectures = this.fiche_lectures;
      }
    } // filteredUsers() {
    //         if (this.fiche_lectures[0].receivers == "") {
    //             let caf = this.filteredUsers.filter((el) => {
    //                 if (el?.role_id == 'r472oAxtaFJSlsh5') {
    //                     return el
    //                 }
    //             })
    //             const { pub_workflow } = this.meta_data["dossier_credit"]
    //             const caf_level = pub_workflow.findIndex(el => el.responsible_id == caf[0].id)
    //             const stage = caf_level != -1 ? caf_level : 0
    //             const sup_id = pub_workflow[stage + 1]?.responsible_id
    //             const sup = this.filteredUsers.find(el => el.id == sup_id)
    //             this.fiche_lectures[0].receivers = [...caf, sup].filter((el, index, list) => {
    //                 const ind = list.findIndex(elm => el.id == elm.id)
    //                 return list.indexOf(el) === ind
    //             })
    //             this.fiche_lectures[0].notified_users = [...caf, sup].filter((el, index, list) => {
    //                 const ind = list.findIndex(elm => el.id == elm.id)
    //                 return list.indexOf(el) === ind
    //             })
    //             this.tags[0] = [...caf, sup].filter((el, index, list) => {
    //                 const ind = list.findIndex(elm => el.id == elm.id)
    //                 return list.indexOf(el) === ind
    //             })
    //             this.fiche_lectures[0].sender = this.authcheckUsr
    //             this.formDataToBeWatched.fiche_lectures = this.fiche_lectures;
    //         }
    //     }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/filiale/CA5.vue?vue&type=template&id=2a5efa7e&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/filiale/CA5.vue?vue&type=template&id=2a5efa7e&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      id: "tb51-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n              " + _vm._s(_vm.tb_display_name) + " : Fiche de lecture\n            ")]), _vm._v(" "), _c("div", {
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
  })], 1)])])]), _vm._v(" "), _vm._l(_vm.fiche_lectures, function (ficheLecture, index) {
    return _c("div", {
      key: index.toString() + "fiche_lecture",
      staticClass: "card-body"
    }, [_vm.seens[index] == true ? _c("div", {
      staticClass: "card-body"
    }, [_c("div", {
      staticClass: "relook-header",
      staticStyle: {
        cursor: "pointer"
      },
      on: {
        click: function click($event) {
          return _vm.retractDynamique(index);
        }
      }
    }, [_c("h6", {
      "class": "subdiv" + _vm.tb_name + " mb-0",
      attrs: {
        id: "frais-annexes"
      }
    }, [_c("div", {
      staticClass: "d-flex justify-content-between"
    }, [_c("div", [_c("button", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: index != 0,
        expression: "index != 0"
      }],
      staticStyle: {
        "background-color": "transparent",
        "margin-right": "10px",
        border: "none"
      },
      attrs: {
        type: "button",
        title: "Supprimer"
      },
      on: {
        click: function click($event) {
          return _vm.removeFiche(index);
        }
      }
    }, [_c("trash-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1), _vm._v("\n                  Fiche de lecture " + _vm._s(index + 1) + "\n                ")]), _vm._v(" "), _c("chevron-up-icon", {
      staticClass: "custom-class",
      staticStyle: {
        "float": "right",
        cursor: "pointer"
      },
      attrs: {
        size: "21"
      }
    })], 1)])]), _vm._v(" "), _vm._l(ficheLecture.fiche, function (elt, index_) {
      return _c("div", {
        key: index_
      }, [_c("div", {
        staticClass: "row mt-2"
      }, [_c("div", {
        staticClass: "col-1"
      }, [_vm._v("Q" + _vm._s(index_ + 1))]), _vm._v(" "), _c("div", {
        staticClass: "col"
      }, [_c("textarea", {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: elt.question,
          expression: "elt.question"
        }],
        staticClass: "form-control",
        "class": _vm.setColor(elt),
        attrs: {
          disabled: elt.is_answered,
          type: "text",
          cols: "30",
          rows: "1"
        },
        domProps: {
          value: elt.question
        },
        on: {
          change: function change($event) {
            _vm.handleInput($event, index);
            _vm.setButton($event, index);
          },
          input: function input($event) {
            if ($event.target.composing) return;
            _vm.$set(elt, "question", $event.target.value);
          }
        }
      })]), _vm._v(" "), index_ == 0 ? _c("div", {
        staticClass: "col-auto"
      }, [_c("button", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: index_ == 0,
          expression: "index_ == 0"
        }],
        staticStyle: {
          "background-color": "#2c3e50",
          color: "#ffffff",
          "border-radius": "15%",
          border: "none"
        },
        attrs: {
          type: "button",
          title: "Ajouter une nouvelle garantie"
        },
        on: {
          click: function click($event) {
            return _vm.addMore(index);
          }
        }
      }, [_c("plus-icon", {
        staticClass: "custom-class",
        attrs: {
          size: "21"
        }
      })], 1)]) : _vm._e(), _vm._v(" "), index_ != 0 ? _c("div", {
        staticClass: "col-auto"
      }, [_c("button", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: index_ != 0 && elt.is_answered == false,
          expression: "index_ != 0 && elt.is_answered == false"
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
            return _vm.remove(index, index_);
          }
        }
      }, [_c("trash-icon", {
        staticClass: "custom-class",
        attrs: {
          size: "21"
        }
      })], 1)]) : _vm._e(), _vm._v(" "), elt.is_anwered == true ? _c("div", {
        staticClass: "col-auto"
      }) : _vm._e()]), _vm._v(" "), _c("div", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: elt.is_answered,
          expression: "elt.is_answered"
        }],
        staticClass: "row mt-2"
      }, [_c("div", {
        staticClass: "col-1"
      }, [_vm._v("R" + _vm._s(index + 1))]), _vm._v(" "), _c("div", {
        staticClass: "col"
      }, [_c("textarea", {
        directives: [{
          name: "model",
          rawName: "v-model.lazy",
          value: elt.reponse,
          expression: "elt.reponse",
          modifiers: {
            lazy: true
          }
        }],
        staticClass: "form-control text-success",
        staticStyle: {
          color: "green"
        },
        attrs: {
          readonly: "",
          type: "text",
          cols: "30",
          rows: "1"
        },
        domProps: {
          value: elt.reponse
        },
        on: {
          change: [function ($event) {
            return _vm.$set(elt, "reponse", $event.target.value);
          }, _vm.handleInput]
        }
      })]), _vm._v(" "), _c("div", {
        staticClass: "col-auto"
      })])]);
    }), _vm._v(" "), _c("div", {
      staticClass: "row mt-4 ml-4"
    }, [_c("div", {
      staticClass: "col-1"
    }), _vm._v(" "), _c("div", {
      staticClass: "col-9"
    }, [_c("vue-tags-input", {
      attrs: {
        "autocomplete-items": _vm.filteredUsers,
        tags: _vm.tags[index],
        placeholder: "Ajouter un collaborateur à notifier"
      },
      on: {
        input: function input($event) {
          return _vm.getTag(index);
        },
        "tags-changed": function tagsChanged(newTags) {
          _vm.tags[index] = newTags;
          _vm.handleInput(null, index);
        }
      },
      model: {
        value: _vm.tag[index],
        callback: function callback($$v) {
          _vm.$set(_vm.tag, index, $$v);
        },
        expression: "tag[index]"
      }
    })], 1), _vm._v(" "), _c("div", {
      staticClass: "col-2"
    }, [_vm.buttonStatus[index] == true && !_vm.isLoding[index] ? _c("button", {
      staticClass: "btn btn-primary",
      attrs: {
        title: "Choisir un utilisateur pour lui envoyer une notification"
      },
      on: {
        click: function click($event) {
          return _vm.NotifyUser(index);
        }
      }
    }, [_vm._v("Notifier")]) : _vm._e(), _vm._v(" "), _vm.buttonStatus[index] == true && _vm.isLoding[index] == true ? _c("div", {
      staticClass: "spinner-border text-primary",
      attrs: {
        role: "status"
      }
    }, [_c("span", {
      staticClass: "sr-only"
    }, [_vm._v("Loading...")])]) : _vm._e(), _vm._v(" "), _vm.buttonStatus[index] == false && _vm.isLoding[index] == false ? _c("button", {
      staticClass: "btn btn-primary",
      attrs: {
        title: "Choisir un utilisateur pour lui envoyer une notification",
        disabled: ""
      }
    }, [_vm._v("Notifier")]) : _vm._e()])])], 2) : _c("div", [_c("div", {
      staticClass: "card-body"
    }, [_c("div", {
      staticClass: "relook-header",
      staticStyle: {
        cursor: "pointer"
      },
      on: {
        click: function click($event) {
          return _vm.retractDynamique(index);
        }
      }
    }, [_c("h6", {
      staticClass: "mb-0",
      attrs: {
        id: "frais-annexes"
      }
    }, [_c("div", {
      staticClass: "d-flex justify-content-between"
    }, [_c("div", [_c("button", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: index != 0,
        expression: "index != 0"
      }],
      staticStyle: {
        "background-color": "transparent",
        "margin-right": "10px",
        border: "none"
      },
      attrs: {
        type: "button",
        title: "Supprimer"
      },
      on: {
        click: function click($event) {
          return _vm.removeFiche(index);
        }
      }
    }, [_c("trash-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1), _vm._v("\n                  Fiche de lecture " + _vm._s(index + 1) + "\n                ")]), _vm._v(" "), _c("chevron-down-icon", {
      staticClass: "custom-class",
      staticStyle: {
        "float": "right",
        cursor: "pointer"
      },
      attrs: {
        size: "21"
      }
    })], 1)])])])]), _vm._v(" "), _c("div", {
      staticClass: "card-body"
    }, [_c("div", {
      staticClass: "d-flex justify-content-end"
    }, [_c("button", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.fiche_lectures.length - 1 == index,
        expression: "fiche_lectures.length - 1 == index"
      }],
      staticClass: "btn shadow-md text-white text-end mb-3",
      staticStyle: {
        cursor: "pointer",
        background: "#2c3e50",
        "max-width": "max-content"
      },
      attrs: {
        type: "button",
        name: "button"
      },
      on: {
        click: function click($event) {
          return _vm.addMoreFiche();
        }
      }
    }, [_vm._v("\n              Ajouter une nouvelle fiche\n            ")])]), _vm._v(" "), _c("hr", {
      staticClass: "my-0 py-0"
    })])]);
  }), _vm._v(" "), _c("div", {
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
  }, [_vm._v("\n        Fermer le tableau\n      ")])], 2) : _c("div", {
    staticClass: "card card-width-height"
  }, [_c("br"), _vm._v(" "), _c("div", {
    staticClass: "card-header hdc pb-0 pt-2"
  }, [_c("h6", {
    ref: "topdiv",
    staticClass: "head",
    attrs: {
      id: "tb51-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n              " + _vm._s(_vm.tb_display_name) + " : Fiche de lecture\n            ")]), _vm._v(" "), _c("div", {
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
      name: "confirm_supp_fiche_lecture",
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
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/filiale/CA5.vue?vue&type=style&index=0&id=2a5efa7e&lang=css&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/filiale/CA5.vue?vue&type=style&index=0&id=2a5efa7e&lang=css&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\ninput[data-v-2a5efa7e] {\r\n  /*border: 1px solid red;*/\n}\n*[data-v-2a5efa7e] {\r\n  font-family: \"Google sans\";\n}\nlabel[data-v-2a5efa7e] {\r\n  height: 10px;\r\n  font-size: 13px;\n}\ninput[data-v-2a5efa7e],\r\nselect[data-v-2a5efa7e] {\r\n  height: 35px;\r\n  border-color: #34495e;\r\n  color: #57606f;\r\n  font-size: 13px;\r\n  font-weight: bold;\n}\n.card-width-height[data-v-2a5efa7e] {\r\n  width: 100%;\r\n  height: 100%;\n}\n.head[data-v-2a5efa7e] {\r\n  color: #f1f2f6;\r\n  font-size: 22px;\n}\n.hdc[data-v-2a5efa7e] {\r\n  background-color: #57606f;\n}\n.badge-sm[data-v-2a5efa7e] {\r\n  display: inline-block;\r\n  width: 15px;\r\n  height: 15px;\r\n  background: rgba(255, 0, 0, 0.882);\r\n  color: white;\r\n  font-size: 12px;\r\n  font-weight: 500;\r\n  border-radius: 100%;\r\n  position: absolute;\r\n  top: -20%;\r\n  left: 55%;\r\n  text-align: center;\n}\n.relook-header[data-v-2a5efa7e] {\r\n  color: #000;\r\n  background-color: #f4f3f3;\r\n  padding: 5px;\r\n  border-bottom: 1px solid #b6b8bb;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/filiale/CA5.vue?vue&type=style&index=0&id=2a5efa7e&lang=css&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/filiale/CA5.vue?vue&type=style&index=0&id=2a5efa7e&lang=css&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA5_vue_vue_type_style_index_0_id_2a5efa7e_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CA5.vue?vue&type=style&index=0&id=2a5efa7e&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/filiale/CA5.vue?vue&type=style&index=0&id=2a5efa7e&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA5_vue_vue_type_style_index_0_id_2a5efa7e_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA5_vue_vue_type_style_index_0_id_2a5efa7e_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/contreanalyse/cofina/filiale/CA5.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/components/contreanalyse/cofina/filiale/CA5.vue ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CA5_vue_vue_type_template_id_2a5efa7e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CA5.vue?vue&type=template&id=2a5efa7e&scoped=true */ "./resources/js/components/contreanalyse/cofina/filiale/CA5.vue?vue&type=template&id=2a5efa7e&scoped=true");
/* harmony import */ var _CA5_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CA5.vue?vue&type=script&lang=js */ "./resources/js/components/contreanalyse/cofina/filiale/CA5.vue?vue&type=script&lang=js");
/* harmony import */ var _CA5_vue_vue_type_style_index_0_id_2a5efa7e_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CA5.vue?vue&type=style&index=0&id=2a5efa7e&lang=css&scoped=true */ "./resources/js/components/contreanalyse/cofina/filiale/CA5.vue?vue&type=style&index=0&id=2a5efa7e&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CA5_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _CA5_vue_vue_type_template_id_2a5efa7e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _CA5_vue_vue_type_template_id_2a5efa7e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "2a5efa7e",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/contreanalyse/cofina/filiale/CA5.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/contreanalyse/cofina/filiale/CA5.vue?vue&type=script&lang=js":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/cofina/filiale/CA5.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CA5_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CA5.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/filiale/CA5.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CA5_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/contreanalyse/cofina/filiale/CA5.vue?vue&type=style&index=0&id=2a5efa7e&lang=css&scoped=true":
/*!******************************************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/cofina/filiale/CA5.vue?vue&type=style&index=0&id=2a5efa7e&lang=css&scoped=true ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA5_vue_vue_type_style_index_0_id_2a5efa7e_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CA5.vue?vue&type=style&index=0&id=2a5efa7e&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/filiale/CA5.vue?vue&type=style&index=0&id=2a5efa7e&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/contreanalyse/cofina/filiale/CA5.vue?vue&type=template&id=2a5efa7e&scoped=true":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/cofina/filiale/CA5.vue?vue&type=template&id=2a5efa7e&scoped=true ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA5_vue_vue_type_template_id_2a5efa7e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA5_vue_vue_type_template_id_2a5efa7e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA5_vue_vue_type_template_id_2a5efa7e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CA5.vue?vue&type=template&id=2a5efa7e&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/filiale/CA5.vue?vue&type=template&id=2a5efa7e&scoped=true");


/***/ })

}]);