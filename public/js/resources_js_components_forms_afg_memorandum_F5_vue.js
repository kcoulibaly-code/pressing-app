"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_forms_afg_memorandum_F5_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/memorandum/F5.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/memorandum/F5.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/ContextMenu */ "./resources/js/components/shared/ContextMenu.vue");
/* harmony import */ var _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/ContextMenuItem */ "./resources/js/components/shared/ContextMenuItem.vue");
/* harmony import */ var _services_ebapis_service_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/ebapis.service.js */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _services_auth_service_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/auth.service.js */ "./resources/js/services/auth.service.js");
/* harmony import */ var _services_credit_service_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/credit.service.js */ "./resources/js/services/credit.service.js");
/* harmony import */ var _helpers_helper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../helpers/helper.js */ "./resources/js/helpers/helper.js");
/* harmony import */ var _services_afg_f8_constants_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/afg/f8-constants.js */ "./resources/js/services/afg/f8-constants.js");










window.$ = window.jQuery = __webpack_require__(/*! jquery/dist/jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Centrale_Risques_Adhesion_au_BIC",
  display: "Centrale Risques – Adhésion au BIC",
  components: {
    MoreVerticalIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.MoreVerticalIcon,
    ChevronUpIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.ChevronUpIcon,
    ChevronDownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.ChevronDownIcon,
    ContextMenu: _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_0__["default"],
    ContextMenuItem: _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_1__["default"],
    AirplayIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.AirplayIcon,
    BookOpenIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.BookOpenIcon,
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.PlusIcon,
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.TrashIcon
  },
  props: {
    meta_data: Object,
    tb_name: String,
    tb_display_name: String
  },
  computed: {},
  mounted: function mounted() {
    this.loadRetrieved();
    this.loadTbAttrs(); // charge les attributs + sous attributs des tables
    // helper.loadCurrencyFormatter();
    // this.crdLd()
    this.banqueData();
  },
  data: function data() {
    var vm = this;
    return {
      ebapisHost: _services_ebapis_service_js__WEBPACK_IMPORTED_MODULE_2__["default"].host,
      authcheck: false,
      authcheckUsr: null,
      authcheckStatus: null,
      watchInPause: false,
      initLoad: true,
      seen: true,
      seen1: true,
      seen2: true,
      seen3: true,
      index: 0,
      credits: [],
      clients: [],
      encours: null,
      placeholder: "Chercher clients",
      matcli: "matcli",
      nomcli: "nomcli",
      banques: [],
      f8Constants: _services_afg_f8_constants_js__WEBPACK_IMPORTED_MODULE_6__["default"],
      meta_parseable: {
        cred_pub_key: this.meta_data["cred_pub_key"],
        tb_name: this.tb_name
      },
      formDataToBeWatched: {
        commentaire_adh_bic: "",
        commentaire_cent_risque: "",
        date_adhesion_bic: "",
        notes: [],
        nouvelles_lignes: "",
        lignes_existantes: "",
        lignes_existantes1: "",
        commentaire_lignes: "",
        commentaire_lignes_clients: "",
        cautions_lignes_existantes: "",
        cautions_nouvelles_lignes: "",
        caution_ligne_existante_echance: "",
        caution_ligne_existante_encours: "",
        caution_ligne_existante_autorisation: "",
        total_signature_ligne_existante_autorisation: "",
        total_signature_ligne_existante_encours: "",
        total_signature_ligne_existante_echance: "",
        total_ligne_existante_1: "",
        total_ligne_existante_2: "",
        total_ligne_existante_3: "",
        total_caisse_ligne_existante_autorisation: "0",
        total_caisse_ligne_existante_echeance: "",
        total_caisse_ligne_existante_encours: "0",
        total_caisse_ligne_existante_encours1: "0",
        total_caisse_nouvelle_ligne_proposition_dcpr: "",
        total_caisse_nouvelle_ligne_encours: "",
        total_caisse_nouvelle_ligne_autorisation: "",
        total_caisse_nouvelle_ligne_echeance: "",
        total_montant_nouvel_ligne: "",
        caution_nouvelle_ligne_autorisation: "",
        caution_nouvelle_ligne_encours: "",
        caution_nouvelle_ligne_echance: "",
        total_signature_nouvelle_ligne_autorisation: "",
        total_signature_nouvelle_ligne_encours: "",
        total_signature_nouvelle_ligne_echance: "",
        total_signature_nouvelle_ligne_montant: "",
        total_nouvelle_ligne_0: "",
        total_nouvelle_ligne_1: "",
        total_nouvelle_ligne_2: "",
        total_nouvelle_ligne_3: "",
        commentaire_sur_garantie_generale_retenu: "",
        commentaire_sur_garantie_generale_proposee: "",
        ligne_existante_commentaire_sur_garantie_non_detenue: "",
        ligne_existante_banque_hypotheques: [],
        total_ligne_existante_banque_hypotheques_valeur_marchande: "",
        total_ligne_existante_banque_hypotheques_valeur_considere: "",
        ligne_existante_banque_gages: [],
        total_ligne_existante_banque_gages_valeur_marchande: "",
        total_ligne_existante_banque_gages_valeur_considere: "",
        total_communique_signature_autorisation: "",
        total_communique_signature_encours: "",
        lignes_signatures_centrales_risques: "",
        ligne_communique_signatures: "",
        total_signature_centrale_autorisation: "",
        total_caisse_ligne_existante_autorisation1: "",
        total_signature_centrale_encours: "",
        total_ligne_centrale_autorisation: ""
      },
      lignes_existantes: [{
        ligne_mfcfa: "",
        banque: "",
        ligne_encours: 0,
        autorisation: "",
        ligne_echeance: ""
      }],
      lignes_existantes1: [{
        ligne_mfcfa: "",
        banque: "",
        ligne_encours: 0,
        autorisation: "",
        ligne_echeance: ""
      }],
      ligne_communique_signatures: [{
        ligne_mfcfa: "",
        banque: "",
        ligne_encours: 0,
        autorisation: "",
        ligne_echeance: ""
      }],
      lignes_signatures_centrales_risques: [{
        ligne_mfcfa: "",
        banque: "",
        ligne_encours: 0,
        autorisation: "",
        ligne_echeance: ""
      }],
      lignes_existantes_selected_ligne: [],
      listingNote: false,
      frais: [],
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
      }]
    };
  },
  methods: {
    banqueData: function banqueData() {
      var _this = this;
      _services_credit_service_js__WEBPACK_IMPORTED_MODULE_4__["default"].loadbank("COTE D'IVOIRE", "BK").then(function (res) {
        // console.log("bonjour", res);
        _this.bankData(res);
      })["catch"](function (err) {
        console.log(err);
      });
    },
    bankData: function bankData(res) {
      this.banques = res.data;
      // console.log({ "banque": this.banques });
    },
    tableClosedOrOpened: function tableClosedOrOpened() {
      this.seen = this.fetchClosedTables(this.tb_name + this.meta_data["cred_pub_key"]);
    },
    openNotesModal: function openNotesModal() {
      var listing = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.listingNote = listing;
      this.$modal.show(this.tb_name);
    },
    launchAutoSaver: function launchAutoSaver() {
      var _this2 = this;
      _services_auth_service_js__WEBPACK_IMPORTED_MODULE_3__["default"].loadUserData().then(function (res) {
        _this2.send2Backend(res, 0, 0);
      })["catch"](function (err) {
        _this2.loadWithError(err);
      });
    },
    setChiffreCleVars: function setChiffreCleVars(event, index) {
      this.chiffres_cles[index][event[0]] = event[1];
      this.handleInput();
      this.chiffres_cles[0].nb_an_activite_n_2 = parseInt(this.chiffres_cles[0].nb_an_activite_n_1) - 1;
      this.formDataToBeWatched["chiffres_cles"] = this.chiffres_cles;
    },
    updateValue: function updateValue(val) {
      alert("value to update");
      alert(JSON.stringify(val));
    },
    loadRetrieved: function loadRetrieved() {
      var _this$meta_data$dossi,
        _this$meta_data$dossi2,
        _this3 = this;
      var lentb = this.meta_data["dossier_credit"]["tbs_in_use"];
      var createdKey = this.tb_name;
      var createdKeyArr = createdKey.split("tb");
      createdKey = "cred_pub_tb_" + createdKeyArr[1];

      // Close table by default
      this.defaultRetract(false, (_this$meta_data$dossi = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi === void 0 ? void 0 : _this$meta_data$dossi.applied_templ_id);
      if (((_this$meta_data$dossi2 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi2 === void 0 ? void 0 : _this$meta_data$dossi2.doss_central_file_recorder) != undefined) {
        var _this$meta_data$dossi3;
        this.formDataToBeWatched.nom_emprunteur = (_this$meta_data$dossi3 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi3 === void 0 || (_this$meta_data$dossi3 = _this$meta_data$dossi3.doss_central_file_recorder) === null || _this$meta_data$dossi3 === void 0 || (_this$meta_data$dossi3 = _this$meta_data$dossi3.client) === null || _this$meta_data$dossi3 === void 0 ? void 0 : _this$meta_data$dossi3.nomcli;
      } else {
        var _this$meta_data$dossi4;
        this.formDataToBeWatched.nom_emprunteur = (_this$meta_data$dossi4 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi4 === void 0 || (_this$meta_data$dossi4 = _this$meta_data$dossi4.cred_pub_tb_00) === null || _this$meta_data$dossi4 === void 0 ? void 0 : _this$meta_data$dossi4.raison_sociale;
      }
      if (lentb.length > 0) {
        if (this.meta_data["dossier_credit"][createdKey] != undefined) {
          this.formDataToBeWatched = this.meta_data["dossier_credit"][createdKey];
          if (this.meta_data["dossier_credit"][createdKey]["lignes_existantes"] != "") {
            this.lignes_existantes = this.meta_data["dossier_credit"][createdKey]["lignes_existantes"];
            setTimeout(function () {
              _this3.lignes_existantes_selected_ligne = [];
              _this3.lignes_existantes.forEach(function (element) {
                _this3.lignes_existantes_selected_ligne.push(element.ligne_mfcfa);
              });
            }, 1000);
          }
          if (this.meta_data["dossier_credit"][createdKey]["lignes_existantes1"] != "") {
            this.lignes_existantes1 = this.meta_data["dossier_credit"][createdKey]["lignes_existantes1"];
          }
          if (this.meta_data["dossier_credit"][createdKey]["ligne_existante_banque_gages"] != "") {
            this.ligne_existante_banque_gages = this.meta_data["dossier_credit"][createdKey]["ligne_existante_banque_gages"];
          }
          if (this.meta_data["dossier_credit"][createdKey]["ligne_existante_banque_hypotheques"] != "") {
            this.ligne_existante_banque_hypotheques = this.meta_data["dossier_credit"][createdKey]["ligne_existante_banque_hypotheques"];
          }
          if (this.meta_data["dossier_credit"][createdKey]["nouvelles_lignes"] != "") {
            this.nouvelles_lignes = this.meta_data["dossier_credit"][createdKey]["nouvelles_lignes"];
          }
          if (this.meta_data["dossier_credit"][createdKey]["cautions_lignes_existantes"] != "") {
            this.cautions_lignes_existantes = this.meta_data["dossier_credit"][createdKey]["cautions_lignes_existantes"];
          }
          if (this.meta_data["dossier_credit"][createdKey]["cautions_nouvelles_lignes"] != "") {
            this.cautions_nouvelles_lignes = this.meta_data["dossier_credit"][createdKey]["cautions_nouvelles_lignes"];
          }
          if (this.meta_data["dossier_credit"][createdKey]["ligne_communique_signatures"] != "") {
            this.ligne_communique_signatures = this.meta_data["dossier_credit"][createdKey]["ligne_communique_signatures"];
          }
          if (this.meta_data["dossier_credit"][createdKey]["lignes_signatures_centrales_risques"] != "") {
            this.lignes_signatures_centrales_risques = this.meta_data["dossier_credit"][createdKey]["lignes_signatures_centrales_risques"];
          }
        }
      }
      // Close table by default
      //  this.defaultRetract(
      //     false,
      //     this.meta_data["dossier_credit"]?.applied_templ_id
      // );
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
    addMore5: function addMore5() {
      this.cautions_nouvelles_lignes.push({
        cautions_nouvelles_lignes_demande_client: "",
        banque: "",
        cautions_nouvelles_lignes_proposition_dcpr: 0,
        cautions_nouvelles_lignes_echeance_duree_tirage: 0,
        cautions_nouvelles_lignes_taux: 0
      });
    },
    // gestion des input personnalisés
    setLigneExistanteVars: function setLigneExistanteVars(event, index, key) {
      this.lignes_existantes[index][key] = event[1];
      this.handleInput();
    },
    setLigneExistanteVars1: function setLigneExistanteVars1(event, index, key) {
      this.lignes_existantes1[index][key] = event[1];
      this.handleInput();
    },
    setLigneCommuniqueVars1: function setLigneCommuniqueVars1(event, index, key) {
      this.ligne_communique_signatures[index][key] = event[1];
      this.handleInput();
    },
    setLigneSignatureCentraleVars: function setLigneSignatureCentraleVars(event, index, key) {
      this.lignes_signatures_centrales_risques[index][key] = event[1];
      this.handleInput();
    },
    formDataVars: function formDataVars(event) {
      this.formDataToBeWatched[event[0]] = event[1];
    },
    setCautionLigneExistanteVars: function setCautionLigneExistanteVars(event, index) {
      this.cautions_lignes_existantes[index][event[0]] = event[1];
      this.handleInput();
    },
    setNouvelleLigneVars: function setNouvelleLigneVars(event, index) {
      this.nouvelles_lignes[index][event[0]] = event[1];
      this.handleInput();
    },
    setCautionNouvelleLigneVars: function setCautionNouvelleLigneVars(event, index) {
      this.cautions_nouvelles_lignes[index][event[0]] = event[1];
      this.handleInput();
    },
    retract: function retract() {
      this.seen = !this.seen;
      var a = {
        tb_name: this.tb_name + this.meta_data["cred_pub_key"],
        status: this.seen
      };
      EventBus.$emit("savedclosed-table", a);
    },
    retract3: function retract3() {
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
    deleteTB: function deleteTB() {
      if (confirm("Êtes-vous sûr de vouloir supprimer ce tableau ?")) {
        this.$emit("delete-tb", {
          tb_name: this.tb_name
        });
      }
    },
    loadDate: function loadDate() {
      var options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      };
      var today = new Date();
      this.dateOfToday = today.toLocaleDateString("fr-FR");
    },
    instruction4: function instruction4(id) {
      var id0 = "#" + id;
      window.$(id0).modal("show");
    },
    precomputeScore: function precomputeScore() {
      var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      this.meta_parseable["type_table"] = a;
      var scoringVar = [];
      if (a == "organisation") {
        scoringVar = ["vivre", "competences_manageriales", "formalisation", "interaction"];
      } else {
        scoringVar = ["technologie", "risque_juridique", "risque_politique"];
      }
      for (var i = 0; i < scoringVar.length; i++) {
        if (this.formDataToBeWatched[scoringVar[i]] == "") {
          return false;
        }
      }
      return true;
    },
    launchScoringTable: function launchScoringTable(a) {
      if (this.precomputeScore(a) === true) {
        this.$axios.post(this.ebapisHost + "cofiscore/api/v1/launchscorer-table/", {
          user: this.authcheckUsr,
          meta_parseable: this.meta_parseable,
          filledData: this.formDataToBeWatched
        }).then(function (response) {
          // console.log(response)
          var tbFetcheData = response.data;
          if (a == "organisation") {
            this.decision_theorique1 = tbFetcheData["decision_theorique"];
            if (this.formDataToBeWatched.decision_theorique1 == "") {
              this.formDataToBeWatched.decision_theorique1 = this.decision_theorique1;
            }
          } else {
            this.decision_theorique2 = tbFetcheData["decision_theorique"];
            if (this.formDataToBeWatched.decision_theorique2 == "") {
              this.formDataToBeWatched.decision_theorique2 = this.decision_theorique2;
            }
          }
        }.bind(this))["catch"](function (error) {
          this.$Progress.finish();
          console.log(error);
        }.bind(this));
      }
    },
    // addMore() {
    //     this.source_revenus.push({
    //         activite: "",
    //         emplacement: "",
    //         depuis_quand: "",
    //         loue: "",
    //         Permanente: 0,
    //         interimaires: 0
    //     });
    // },
    // addMore1() {
    //     this.entite_connectes.push({
    //         matricule_client_entite_connecte: "",
    //         raison_social_entite_connecte: "",
    //         secteur_activite_entite_connecte: "",
    //     });
    // },
    addMore: function addMore() {
      this.lignes_existantes.push({
        ligne_mfcfa: "",
        banque: "",
        autorisation: "",
        ligne_encours: 0,
        ligne_echeance: ""
      });
    },
    addMore1: function addMore1() {
      this.lignes_existantes1.push({
        ligne_mfcfa: "",
        banque: "",
        autorisation: "",
        ligne_encours: 0,
        ligne_echeance: ""
      });
    },
    addMore4: function addMore4() {
      this.ligne_communique_signatures.push({
        ligne_mfcfa: "",
        banque: "",
        autorisation: "",
        ligne_encours: 0,
        ligne_echeance: ""
      });
    },
    addMore6: function addMore6() {
      this.lignes_signatures_centrales_risques.push({
        ligne_mfcfa: "",
        banque: "",
        autorisation: "",
        ligne_encours: 0,
        ligne_echeance: ""
      });
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
    remove: function remove(index) {
      this.lignes_existantes.splice(index, 1);
      this.handleInput();
    },
    remove1: function remove1(index) {
      this.lignes_existantes1.splice(index, 1);
      this.handleInput();
    },
    remove4: function remove4(index) {
      this.ligne_communique_signatures.splice(index, 1);
      this.handleInput();
    },
    remove6: function remove6(index) {
      this.lignes_signatures_centrales_risques.splice(index, 1);
      this.handleInput();
    },
    removeNew: function removeNew(index, removeList) {
      this[removeList].splice(index, 1);
      console.log(removeList);
      this.formDataToBeWatched["total_" + removeList + "_valeur_marchande"] = this.somX3(this[removeList], "valeur_marchande");
      this.formDataToBeWatched["total_" + removeList + "_valeur_considere"] = this.somX3(this[removeList], "valeur_considere");
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
        id: "f7-head"
      };
      // console.log(p)
      this.$emit("load-buffer", p);
    },
    onChange: function onChange(e) {
      if (e.target.value == "Non") {
        this.disp = true;
      } else {
        this.disp = false;
      }
    },
    onSlctMatCli: function onSlctMatCli(obj, key) {
      this.entite_connectes[key]["raison_social_entite_connecte"] = obj.nomcli;
      this.entite_connectes[key]["matricule_client_entite_connecte"] = obj.matclihan;
      this.handleInput();
    },
    addMore2: function addMore2() {
      this.nouvelles_lignes.push({
        montant_nouvel_ligne: 0,
        banque: "",
        proposition_dcpr: 0,
        echeance_duree_tirage: 0,
        nouvelle_ligne_taux: 0,
        ligne_garantie_covenant_specifique_propose: "",
        ligne_garantie_covenant_generale_propose: ""
      });
    },
    addMoreNew: function addMoreNew(listName) {
      var obj = {
        numero_ligne: "",
        intitule_ligne: "",
        proprietaire: "",
        numero_tel: "",
        annee_achat: "",
        adresse_emplacement: "",
        date_evaluation: "",
        valeur_marchande: 0,
        valeur_considere: 0
      };
      if (listName === 'ligne_existante_banque_hypotheques') {
        obj.longitude = "";
        obj.lattitude = "";
        obj.bien_hypotheque = "";
      }
      if (listName === 'ligne_existante_banque_gages') {
        obj.bien_a_gage = "";
      }
      this[listName].push(obj);
    },
    updateLigneSelected: function updateLigneSelected(evt, index, item_name) {
      this[item_name][index].intitule_ligne = this.lignes_existantes_selected_ligne[evt.target.value];
    },
    handleInput: function handleInput(evt, index) {
      // this.source_revenus[index][evt[0]] = evt[1]
      // this.formDataToBeWatched.total_interimaires = this.totalInterimaires;
      // this.formDataToBeWatched.total_permanent = this.totalPermanent;
      // this.formDataToBeWatched['source_revenus'] = this.source_revenus
      this.formDataToBeWatched["chiffres_cles"] = this.chiffres_cles;
      this.formDataToBeWatched["entite_connectes"] = this.entite_connectes;
      // console.log(this.formDataToBeWatched["chiffres_cles"]);
      this.formDataToBeWatched["lignes_existantes"] = this.lignes_existantes;
      this.formDataToBeWatched["nouvelles_lignes"] = this.nouvelles_lignes;
      this.formDataToBeWatched["cautions_lignes_existantes"] = this.cautions_lignes_existantes;
      this.formDataToBeWatched["cautions_nouvelles_lignes"] = this.cautions_nouvelles_lignes;
      this.formDataToBeWatched["lignes_existantes1"] = this.lignes_existantes1;
      this.formDataToBeWatched["ligne_communique_signatures"] = this.ligne_communique_signatures;
      this.formDataToBeWatched["lignes_signatures_centrales_risques"] = this.lignes_signatures_centrales_risques;
      this.formDataToBeWatched.total_communique_signature_encours = this.somX3(this.ligne_communique_signatures, "ligne_encours");
      this.formDataToBeWatched.total_communique_signature_autorisation = this.somX3(this.ligne_communique_signatures, "autorisation");
      this.formDataToBeWatched.total_signature_centrale_encours = this.somX3(this.lignes_signatures_centrales_risques, "ligne_encours");
      this.formDataToBeWatched.total_signature_centrale_autorisation = this.somX3(this.lignes_signatures_centrales_risques, "autorisation");

      //----------------ligne existante-------------------------------//

      this.formDataToBeWatched.total_caisse_ligne_existante_autorisation = this.somX3(this.lignes_existantes, "autorisation");
      this.formDataToBeWatched["lignes_existantes"] = this.lignes_existantes;
      this.formDataToBeWatched.total_caisse_ligne_existante_encours = this.somX3(this.lignes_existantes, "ligne_encours");
      this.formDataToBeWatched.total_caisse_ligne_existante_encours1 = this.somX3(this.lignes_existantes1, "ligne_encours");
      this.formDataToBeWatched.total_caisse_ligne_existante_autorisation1 = this.somX3(this.lignes_existantes1, "autorisation");
      this.formDataToBeWatched["lignes_existantes"] = this.lignes_existantes;
      this.formDataToBeWatched.total_caisse_ligne_existante_echeance = this.somX3(this.lignes_existantes, "ligne_echeance");
      this.formDataToBeWatched["lignes_existantes"] = this.lignes_existantes;

      //----------------Total par signature ligne existante-------------------------------//

      this.formDataToBeWatched.total_signature_ligne_existante_autorisation = this.somX3(this.cautions_lignes_existantes, "caution_ligne_existante_autorisation");
      this.formDataToBeWatched["cautions_lignes_existantes"] = this.cautions_lignes_existantes;
      this.formDataToBeWatched.total_signature_ligne_existante_encours = this.somX3(this.cautions_lignes_existantes, "caution_ligne_existante_encours");
      this.formDataToBeWatched["caution_ligne_existante_encours"] = this.cautions_lignes_existantes;

      //this.formDataToBeWatched.total_signature_ligne_existante_echance = this.somX3(this.cautions_lignes_existantes, 'caution_ligne_existante_echeance')
      this.formDataToBeWatched["caution_ligne_existante_echeance"] = this.cautions_lignes_existantes;

      //----------------Nouvelles lignes-------------------------------//

      this.formDataToBeWatched.total_montant_nouvel_ligne = this.somX3(this.nouvelles_lignes, "montant_nouvel_ligne");
      this.formDataToBeWatched["nouvelles_lignes"] = this.nouvelles_lignes;
      this.formDataToBeWatched.total_caisse_nouvelle_ligne_proposition_dcpr = this.somX3(this.nouvelles_lignes, "proposition_dcpr");
      this.formDataToBeWatched["nouvelles_lignes"] = this.nouvelles_lignes;
      this.formDataToBeWatched.total_caisse_nouvelle_ligne_encours = this.somX3(this.nouvelles_lignes, "echeance_duree_tirage");
      this.formDataToBeWatched["nouvelles_lignes"] = this.nouvelles_lignes;
      this.formDataToBeWatched.total_caisse_nouvelle_ligne_echeance = this.somX3(this.nouvelles_lignes, "nouvelle_ligne_taux");
      this.formDataToBeWatched["nouvelles_lignes"] = this.nouvelles_lignes;

      //----------------Signature nouvelles lignes-------------------------------//

      this.formDataToBeWatched.total_signature_nouvelle_ligne_montant = this.somX3(this.cautions_nouvelles_lignes, "caution_nouvelle_lignes_montant");
      this.formDataToBeWatched["cautions_nouvelles_lignes"] = this.cautions_nouvelles_lignes;
      this.formDataToBeWatched.total_signature_nouvelle_ligne_autorisation = this.somX3(this.cautions_nouvelles_lignes, "cautions_nouvelles_lignes_proposition_dcpr");
      this.formDataToBeWatched["cautions_nouvelles_lignes"] = this.cautions_nouvelles_lignes;
      this.formDataToBeWatched.total_signature_nouvelle_ligne_encours = this.somX3(this.cautions_nouvelles_lignes, "cautions_nouvelles_lignes_echeance_duree_tirage");
      this.formDataToBeWatched["cautions_nouvelles_lignes"] = this.cautions_nouvelles_lignes;
      this.formDataToBeWatched.total_signature_nouvelle_ligne_echance = this.somX3(this.cautions_nouvelles_lignes, "cautions_nouvelles_lignes_taux");
      this.formDataToBeWatched["cautions_nouvelles_lignes"] = this.cautions_nouvelles_lignes;

      //----------------Total engagement signature-------------------------------//

      this.formDataToBeWatched.total_ligne_centrale = this.formDataToBeWatched.total_signature_centrale_encours + this.formDataToBeWatched.total_caisse_ligne_existante_encours;
      this.formDataToBeWatched.total_ligne_centrale_autorisation = this.formDataToBeWatched.total_signature_centrale_autorisation + this.formDataToBeWatched.total_caisse_ligne_existante_autorisation;
      this.formDataToBeWatched.total_ligne_communique = this.formDataToBeWatched.total_caisse_ligne_existante_encours1 + this.formDataToBeWatched.total_communique_signature_encours;
      this.formDataToBeWatched.total_ligne_communique_autorisation = this.formDataToBeWatched.total_caisse_ligne_existante_autorisation1 + this.formDataToBeWatched.total_communique_signature_autorisation;
      this.formDataToBeWatched["ligne_existante_banque_hypotheques"] = this.ligne_existante_banque_hypotheques;
      this.formDataToBeWatched["ligne_existante_banque_gages"] = this.ligne_existante_banque_gages;

      /* setTimeout(() => {
          this.lignes_existantes_selected_ligne = [];
          this.lignes_existantes.forEach(element => {
              this.lignes_existantes_selected_ligne.push(element.ligne_mfcfa);
          });
            document.querySelectorAll('.ligne_existante_banque_hypotheques td:nth-child(2) select').forEach((element) => {
              if (this.ligne_existante_banque_hypotheques[element.value].numero_ligne !== '') {
                  this.ligne_existante_banque_hypotheques[element.value].numero_ligne = element.value;
                  this.ligne_existante_banque_hypotheques[element.value].intitule_ligne = this.lignes_existantes_selected_ligne[element.value];
              }
          });
            document.querySelectorAll('.ligne_existante_banque_gages td:nth-child(2) select').forEach((element) => {
              if (this.ligne_existante_banque_gages[element.value].numero_ligne !== '') {
                  this.ligne_existante_banque_gages[element.value].numero_ligne = element.value;
                  this.ligne_existante_banque_gages[element.value].intitule_ligne = this.lignes_existantes_selected_ligne[element.value];
              }
          });
        }, 2000); */

      EventBus.$emit("ligne-selected-updated", {
        "cred_pub_tb_7": "cred_pub_tb_7",
        "lignes_existantes": this.formDataToBeWatched.lignes_existantes,
        "lignes_existantes1": this.formDataToBeWatched.lignes_existantes1
      });
      this.formDataToBeWatched.total_ligne_existante_banque_hypotheques_valeur_marchande = this.somX3(this.ligne_existante_banque_hypotheques, "valeur_marchande");
      this.formDataToBeWatched.total_ligne_existante_banque_hypotheques_valeur_considere = this.somX3(this.ligne_existante_banque_hypotheques, "valeur_considere");
      this.formDataToBeWatched.total_ligne_existante_banque_gages_valeur_marchande = this.somX3(this.ligne_existante_banque_gages, "valeur_marchande");
      this.formDataToBeWatched.total_ligne_existante_banque_gages_valeur_considere = this.somX3(this.ligne_existante_banque_gages, "valeur_considere");
    },
    instruction3: function instruction3(id) {
      var id0 = "#" + id;
      window.$(id0).modal("show");
    },
    dateInputHdl: function dateInputHdl() {
      this.chiffres_cles[0].date_creation_rccm_n_2 = this.chiffres_cles[0].date_creation_rccm_n_1;
      this.formDataToBeWatched["chiffres_cles"] = this.chiffres_cles;
    },
    // nbActvHdl() {
    //     this.chiffres_cles[0].nb_an_activite_n_2 = parseInt(this.chiffres_cles[0].nb_an_activite_n_1) - 1;
    //     this.formDataToBeWatched['chiffres_cles'] = this.chiffres_cles;
    // },
    loadPrincChifCle: function loadPrincChifCle() {
      var load = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      if (load != null) {
        this.chiffres_cles[0].chiffres_affaires_n_1 = load.ca_n1;
        this.chiffres_cles[0].chiffres_affaires_n_2 = load.ca_n2;
        this.chiffres_cles[0].resulat_net_n_1 = load.rn_n1;
        this.chiffres_cles[0].resulat_net_n_2 = load.rn_n2;
        this.chiffres_cles[0].nb_an_activite_n_1 = load.experience_secteur;
        this.chiffres_cles[0].nb_an_activite_n_2 = load.experience_secteur - 1;
      } else {
        var _this$meta_data$dossi5, _this$meta_data$dossi6;
        // this.chiffres_cles[0].chiffres_affaires_n_1 = this.meta_data.dossier_credit?.cred_pub_tb_00.ca_n1;
        // this.chiffres_cles[0].chiffres_affaires_n_2 = this.meta_data.dossier_credit?.cred_pub_tb_00.ca_n2;
        // this.chiffres_cles[0].resulat_net_n_1 = this.meta_data.dossier_credit?.cred_pub_tb_00.rn_n1;
        // this.chiffres_cles[0].resulat_net_n_2 = this.meta_data.dossier_credit?.cred_pub_tb_00.rn_n2;
        this.chiffres_cles[0].nb_an_activite_n_1 = (_this$meta_data$dossi5 = this.meta_data.dossier_credit) === null || _this$meta_data$dossi5 === void 0 || (_this$meta_data$dossi5 = _this$meta_data$dossi5.cred_pub_tb_00) === null || _this$meta_data$dossi5 === void 0 ? void 0 : _this$meta_data$dossi5.experience_secteur;
        this.chiffres_cles[0].nb_an_activite_n_2 = ((_this$meta_data$dossi6 = this.meta_data.dossier_credit) === null || _this$meta_data$dossi6 === void 0 || (_this$meta_data$dossi6 = _this$meta_data$dossi6.cred_pub_tb_00) === null || _this$meta_data$dossi6 === void 0 ? void 0 : _this$meta_data$dossi6.experience_secteur) - 1;
      }
      this.formDataToBeWatched.chiffres_cles = this.chiffres_cles;
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/memorandum/F5.vue?vue&type=template&id=044f58bf&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/memorandum/F5.vue?vue&type=template&id=044f58bf&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$formDataToBeWatch;
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
      id: "f7-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Relation avec les autres banques\n                        ")]), _vm._v(" "), _c("div", {
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
  }, [_c("span", [_vm._v("\n                                            " + _vm._s(_vm.formDataToBeWatched.notes.length) + "\n                                        ")])])])]) : _vm._e(), _vm._v(" "), _c("BookOpenIcon", {
    staticClass: "custom-class mt-1",
    staticStyle: {
      cursor: "pointer"
    },
    attrs: {
      size: "0.7x"
    },
    on: {
      click: function click($event) {
        return _vm.$modal.show("instruction_engagement_globaux");
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
        return _vm.$modal.show("relation_avec_les_autres_banques");
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
  })], 1)])])]), _vm._v(" "), (_vm.seen2 = _vm.seen2) ? _c("div", {
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
      id: "centrale-des-risques"
    }
  }, [_vm._v("\n                        Centrale des risques\n                        "), _c("chevron-up-icon", {
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
  }, [_c("div", {}, [_c("div", {
    staticClass: "row",
    staticStyle: {
      "margin-bottom": "5px"
    }
  }, [_c("div", {
    staticClass: "col-md-6 p-2"
  }, [_c("label", {
    staticClass: "form-label",
    staticStyle: {
      "/* font-weight": "bold",
      "*/\n                                            font-size": "12px"
    }
  }, [_vm._v("Numéro d’immatriculation\n                                ")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.numero_immatriculation,
      expression: "formDataToBeWatched.numero_immatriculation\n                                    "
    }],
    staticClass: "form-control",
    attrs: {
      required: "",
      type: "text"
    },
    domProps: {
      value: _vm.formDataToBeWatched.numero_immatriculation
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "numero_immatriculation", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 p-2"
  }, [_c("label", {
    staticClass: "form-label",
    staticStyle: {
      "/* font-weight": "bold",
      "*/\n                                            font-size": "12px"
    }
  }, [_vm._v("Date de la centrale des risques\n                                ")]), _vm._v(" "), _c("date-input", {
    attrs: {
      value: _vm.formDataToBeWatched.date_centrale_risque,
      id: "date_centrale_risque"
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1)]), _vm._v(" "), _c("hr"), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table"
  }, [_vm._m(0), _vm._v(" "), _vm._l(_vm.lignes_existantes, function (ligne_existante, index) {
    return _c("tr", {
      key: index
    }, [_c("td", [_c("div", {
      staticClass: "d-flex position-relative align-items-center"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: ligne_existante.banque,
        expression: "ligne_existante.banque\n                                                "
      }],
      staticClass: "form-control",
      attrs: {
        type: "text"
      },
      domProps: {
        value: ligne_existante.banque
      },
      on: {
        input: [function ($event) {
          if ($event.target.composing) return;
          _vm.$set(ligne_existante, "banque", $event.target.value);
        }, _vm.handleInput]
      }
    })])]), _vm._v(" "), _c("td", [_c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: ligne_existante.ligne_mfcfa,
        expression: "ligne_existante.ligne_mfcfa"
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
          _vm.$set(ligne_existante, "ligne_mfcfa", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, _vm.handleInput]
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
    }, [_vm._v("Mixte")])], 2)]), _vm._v(" "), _c("td", [_c("currency-input", {
      attrs: {
        value: ligne_existante.ligne_encours
      },
      on: {
        input: function input($event) {
          return _vm.setLigneExistanteVars($event, index, "ligne_encours");
        }
      }
    })], 1), _vm._v(" "), _c("td", [index == 0 ? _c("div", [_c("button", {
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
          return _vm.addMore(index);
        }
      }
    }, [_c("plus-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1)]) : _c("div", {
      staticStyle: {
        "margin-left": "0px",
        "margin-top": "5px"
      }
    }, [_c("button", {
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
          return _vm.remove(index);
        }
      }
    }, [_c("trash-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1)])])]);
  }), _vm._v(" "), _c("tr", [_vm._m(1), _vm._v(" "), _c("td", [_c("currency-input", {
    attrs: {
      value: _vm.formDataToBeWatched.total_caisse_ligne_existante_encours,
      id: "total_caisse_ligne_existante_encours",
      disabled: ""
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1)]), _vm._v(" "), _vm._m(2), _vm._v(" "), _vm._m(3), _vm._v(" "), _vm._l(_vm.lignes_signatures_centrales_risques, function (lignes_signatures_centrales_risque, index) {
    return _c("tr", {
      key: index + "_"
    }, [_c("td", [_c("div", {
      staticClass: "d-flex position-relative align-items-center"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: lignes_signatures_centrales_risque.banque,
        expression: "lignes_signatures_centrales_risque.banque\n                                                "
      }],
      staticClass: "form-control",
      attrs: {
        type: "text"
      },
      domProps: {
        value: lignes_signatures_centrales_risque.banque
      },
      on: {
        input: [function ($event) {
          if ($event.target.composing) return;
          _vm.$set(lignes_signatures_centrales_risque, "banque", $event.target.value);
        }, _vm.handleInput]
      }
    })])]), _vm._v(" "), _c("td", [_c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: lignes_signatures_centrales_risque.ligne_mfcfa,
        expression: "lignes_signatures_centrales_risque.ligne_mfcfa"
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
          _vm.$set(lignes_signatures_centrales_risque, "ligne_mfcfa", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, _vm.handleInput]
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
    }, [_vm._v("Mixte")])], 2)]), _vm._v(" "), _c("td", [_c("currency-input", {
      attrs: {
        value: lignes_signatures_centrales_risque.ligne_encours
      },
      on: {
        input: function input($event) {
          return _vm.setLigneSignatureCentraleVars($event, index, "ligne_encours");
        }
      }
    })], 1), _vm._v(" "), _c("td", [index == 0 ? _c("div", [_c("button", {
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
          return _vm.addMore6(index);
        }
      }
    }, [_c("plus-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1)]) : _c("div", {
      staticStyle: {
        "margin-left": "0px",
        "margin-top": "5px"
      }
    }, [_c("button", {
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
          return _vm.remove6(index);
        }
      }
    }, [_c("trash-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1)])])]);
  }), _vm._v(" "), _c("tr", [_vm._m(4), _vm._v(" "), _c("td", [_c("currency-input", {
    attrs: {
      value: _vm.formDataToBeWatched.total_signature_centrale_encours,
      id: "total_signature_centrale_encours",
      disabled: ""
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1)]), _vm._v(" "), _c("tr", [_vm._m(5), _vm._v(" "), _c("td", {
    staticClass: "py-2"
  }, [_c("currency-input", {
    attrs: {
      value: _vm.formDataToBeWatched.total_ligne_centrale,
      id: "total_ligne_centrale",
      disabled: ""
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1)])], 2)]), _vm._v(" "), _c("div", {
    staticClass: "mt-3"
  }, [_vm._m(6), _vm._v(" "), _c("vue-editor", {
    attrs: {
      id: "commentaires-sur-les-garanties-non-detenues"
    },
    on: {
      "update-value": function updateValue($event) {
        _vm.formDataToBeWatched[$event[0]] = $event[1];
      }
    },
    model: {
      value: _vm.formDataToBeWatched.commentaire_lignes,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "commentaire_lignes", $$v);
      },
      expression: "formDataToBeWatched.commentaire_lignes"
    }
  })], 1)])])]) : _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header mb-2",
    on: {
      click: function click($event) {
        _vm.seen2 = !_vm.seen2;
      }
    }
  }, [_c("h6", {
    attrs: {
      id: "centrale-des-risques"
    }
  }, [_vm._v("\n                        Centrale des risques\n                        "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)])]), _vm._v(" "), (_vm.seen3 = _vm.seen3) ? _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen3 = !_vm.seen3;
      }
    }
  }, [_c("h6", {
    "class": " subdiv" + this.tb_name,
    attrs: {
      id: "lignes_communiquées_par_le_client"
    }
  }, [_vm._v("\n                        Lignes communiquées par le client\n                        "), _c("chevron-up-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)]), _vm._v(" "), _c("div", [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table"
  }, [_vm._m(7), _vm._v(" "), _vm._l(_vm.lignes_existantes1, function (ligne_existante, index) {
    return _c("tr", {
      key: index + "___"
    }, [_c("td", [_c("div", {
      staticClass: "d-flex position-relative align-items-center"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: ligne_existante.banque,
        expression: "ligne_existante.banque\n                                                "
      }],
      staticClass: "form-control",
      attrs: {
        type: "text"
      },
      domProps: {
        value: ligne_existante.banque
      },
      on: {
        input: [function ($event) {
          if ($event.target.composing) return;
          _vm.$set(ligne_existante, "banque", $event.target.value);
        }, _vm.handleInput]
      }
    })])]), _vm._v(" "), _c("td", [_c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: ligne_existante.ligne_mfcfa,
        expression: "ligne_existante.ligne_mfcfa"
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
          _vm.$set(ligne_existante, "ligne_mfcfa", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, _vm.handleInput]
      }
    }, [_c("option", {
      domProps: {
        value: ""
      }
    }), _vm._v(" "), _vm._l(_vm.f8Constants.tous_les_lignes, function (line, indexL) {
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
    }, [_vm._v("Mixte")])], 2)]), _vm._v(" "), _c("td", [_c("currency-input", {
      attrs: {
        value: ligne_existante.autorisation
      },
      on: {
        input: function input($event) {
          return _vm.setLigneExistanteVars1($event, index, "autorisation");
        }
      }
    })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
      attrs: {
        value: ligne_existante.ligne_encours
      },
      on: {
        input: function input($event) {
          return _vm.setLigneExistanteVars1($event, index, "ligne_encours");
        }
      }
    })], 1), _vm._v(" "), _c("td", [_c("date-input", {
      staticStyle: {
        width: "240px"
      },
      attrs: {
        value: ligne_existante.ligne_echeance
      },
      on: {
        input: function input($event) {
          return _vm.setLigneExistanteVars1($event, index, "ligne_echeance");
        }
      }
    })], 1), _vm._v(" "), _c("td", [index == 0 ? _c("div", [_c("button", {
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
          return _vm.addMore1(index);
        }
      }
    }, [_c("plus-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1)]) : _c("div", {
      staticStyle: {
        "margin-left": "0px",
        "margin-top": "5px"
      }
    }, [_c("button", {
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
          return _vm.remove1(index);
        }
      }
    }, [_c("trash-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1)])])]);
  }), _vm._v(" "), _c("tr", [_vm._m(8), _vm._v(" "), _c("td", [_c("currency-input", {
    attrs: {
      value: _vm.formDataToBeWatched.total_caisse_ligne_existante_autorisation1,
      id: "total_caisse_ligne_existante_autorisation1",
      disabled: ""
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
    attrs: {
      value: _vm.formDataToBeWatched.total_caisse_ligne_existante_encours1,
      id: "total_caisse_ligne_existante_encours1",
      disabled: ""
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1)]), _vm._v(" "), _vm._m(9), _vm._v(" "), _vm._m(10), _vm._v(" "), _vm._l(_vm.ligne_communique_signatures, function (ligne_communique, index) {
    return _c("tr", {
      key: index + "_____"
    }, [_c("td", [_c("div", {
      staticClass: "d-flex position-relative align-items-center"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: ligne_communique.banque,
        expression: "ligne_communique.banque\n                                                "
      }],
      staticClass: "form-control",
      attrs: {
        type: "text"
      },
      domProps: {
        value: ligne_communique.banque
      },
      on: {
        input: [function ($event) {
          if ($event.target.composing) return;
          _vm.$set(ligne_communique, "banque", $event.target.value);
        }, _vm.handleInput]
      }
    })])]), _vm._v(" "), _c("td", [_c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: ligne_communique.ligne_mfcfa,
        expression: "ligne_communique.ligne_mfcfa"
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
          _vm.$set(ligne_communique, "ligne_mfcfa", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, _vm.handleInput]
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
    }, [_vm._v("Mixte")])], 2)]), _vm._v(" "), _c("td", [_c("currency-input", {
      attrs: {
        value: ligne_communique.autorisation
      },
      on: {
        input: function input($event) {
          return _vm.setLigneCommuniqueVars1($event, index, "autorisation");
        }
      }
    })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
      attrs: {
        value: ligne_communique.ligne_encours
      },
      on: {
        input: function input($event) {
          return _vm.setLigneCommuniqueVars1($event, index, "ligne_encours");
        }
      }
    })], 1), _vm._v(" "), _c("td", [_c("date-input", {
      staticStyle: {
        width: "240px"
      },
      attrs: {
        value: ligne_communique.ligne_echeance
      },
      on: {
        input: function input($event) {
          return _vm.setLigneCommuniqueVars1($event, index, "ligne_echeance");
        }
      }
    })], 1), _vm._v(" "), _c("td", [index == 0 ? _c("div", [_c("button", {
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
          return _vm.addMore4(index);
        }
      }
    }, [_c("plus-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1)]) : _c("div", {
      staticStyle: {
        "margin-left": "0px",
        "margin-top": "5px"
      }
    }, [_c("button", {
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
          return _vm.remove4(index);
        }
      }
    }, [_c("trash-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1)])])]);
  }), _vm._v(" "), _c("tr", [_vm._m(11), _vm._v(" "), _c("td", [_c("currency-input", {
    attrs: {
      value: _vm.formDataToBeWatched.total_communique_signature_autorisation,
      id: "total_communique_signature_autorisation",
      disabled: ""
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
    attrs: {
      value: _vm.formDataToBeWatched.total_communique_signature_encours,
      id: "total_communique_signature_encours",
      disabled: ""
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1)]), _vm._v(" "), _c("tr", [_vm._m(12), _vm._v(" "), _c("td", {
    staticClass: "py-2"
  }, [_c("currency-input", {
    attrs: {
      value: _vm.formDataToBeWatched.total_ligne_communique_autorisation,
      id: "total_ligne_communique_autorisation",
      disabled: ""
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("td", {
    staticClass: "py-2"
  }, [_c("currency-input", {
    attrs: {
      value: _vm.formDataToBeWatched.total_ligne_communique,
      id: "total_ligne_communique",
      disabled: ""
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1)])], 2)])])]), _vm._v(" "), _c("br"), _vm._v(" "), _c("div", {
    staticClass: "mt-3"
  }, [_vm._m(13), _vm._v(" "), _c("vue-editor", {
    attrs: {
      id: "commentaire_lignes_clients"
    },
    on: {
      "update-value": function updateValue($event) {
        _vm.formDataToBeWatched[$event[0]] = $event[1];
      }
    },
    model: {
      value: _vm.formDataToBeWatched.commentaire_lignes_clients,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "commentaire_lignes_clients", $$v);
      },
      expression: "formDataToBeWatched.commentaire_lignes_clients"
    }
  })], 1)]) : _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header mb-2",
    on: {
      click: function click($event) {
        _vm.seen3 = !_vm.seen3;
      }
    }
  }, [_c("h6", {
    "class": " subdiv" + this.tb_name,
    attrs: {
      id: "lignes_communiquées_par_le_client"
    }
  }, [_vm._v("\n                        Lignes communiquées par le client\n                        "), _c("chevron-down-icon", {
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
  }, [_vm._v("\n                Fermer le tableau\n            ")])]) : _c("div", {
    staticClass: "card card-width-height"
  }, [_c("br"), _vm._v(" "), _c("div", {
    staticClass: "card-header hdc pb-0 pt-2"
  }, [_c("h3", {
    staticClass: "head",
    attrs: {
      id: "f7-head"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.tb_display_name) + " : Relation avec les autres banques\n\n\n                    "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
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
  }), _vm._v(" "), _c("airplay-icon", {
    staticClass: "custom-class mt-1",
    staticStyle: {
      cursor: "pointer",
      margin: "0 5px",
      "float": "right"
    },
    attrs: {
      size: "0.7x",
      title: "exemple"
    },
    on: {
      click: function click($event) {
        return _vm.$modal.show("relation_avec_les_autres_banques");
      }
    }
  }), _vm._v(" "), _c("BookOpenIcon", {
    staticClass: "custom-class mt-1",
    staticStyle: {
      cursor: "pointer",
      "float": "right"
    },
    attrs: {
      size: "0.7x"
    },
    on: {
      click: function click($event) {
        return _vm.$modal.show("instruction_engagement_globaux");
      }
    }
  })], 1)])])], 1), _vm._v(" "), _c("div", {
    staticStyle: {
      position: "relative",
      "z-index": "999999999"
    }
  }, [_c("div", {
    staticClass: "modal fade modal-lg",
    attrs: {
      id: "instruction6",
      tabindex: "-1",
      "aria-labelledby": "instruction6",
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
      id: "instruction6"
    }
  }, [_vm._v("\n                            Instruction - " + _vm._s(_vm.tb_display_name) + " : Centrales\n                            risques - Adhésion au BIC(si applicable)\n                        ")]), _vm._v(" "), _c("button", {
    staticClass: "btn-close",
    attrs: {
      type: "button",
      "data-bs-dismiss": "modal",
      "aria-label": "Close"
    }
  })]), _vm._v(" "), _vm._m(14), _vm._v(" "), _vm._m(15)])])])]), _vm._v(" "), _c("ketri-modal", {
    attrs: {
      name: "relation_avec_les_autres_banques",
      images: ["/images/capture_afg/exemples/relation_avec_les_autres_banques.png"]
    }
  }), _vm._v(" "), _c("ketri-modal", {
    attrs: {
      name: "instruction_engagement_globaux",
      images: ["/images/capture_afg/instructions/centrale_risque.png"],
      title: "Instructions"
    }
  }), _vm._v(" "), _c("note-modal", {
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
        var _vm$formDataToBeWatch2;
        (_vm$formDataToBeWatch2 = _vm.formDataToBeWatched.notes) === null || _vm$formDataToBeWatch2 === void 0 || _vm$formDataToBeWatch2.unshift($event);
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
  return _c("tr", [_c("th", [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Banques")])]), _vm._v(" "), _c("th", [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Lignes")])]), _vm._v(" "), _c("th", [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Encours")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    attrs: {
      colspan: "2"
    }
  }, [_c("label", {
    staticClass: "form-label mt-1",
    attrs: {
      "for": "total_par_caisse"
    }
  }, [_c("b", [_vm._v("S/Total par caisse")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", [_c("td", {
    attrs: {
      colspan: "5"
    }
  }, [_c("hr")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", [_c("th", [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Banques")])]), _vm._v(" "), _c("th", [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Lignes")])]), _vm._v(" "), _c("th", [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Encours")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    attrs: {
      colspan: "2"
    }
  }, [_c("label", {
    staticClass: "form-label mt-1",
    attrs: {
      "for": "total_par_caisse"
    }
  }, [_c("b", [_vm._v("S/Total par signature")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    attrs: {
      colspan: "2"
    }
  }, [_c("label", {
    staticClass: "form-label mt-1",
    attrs: {
      "for": "total_ligne_centrale"
    }
  }, [_c("b", [_vm._v("Total")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    attrs: {
      "for": "commentaire_lignes"
    }
  }, [_c("b", [_vm._v("Commentaire sur les lignes déclarées à la centrale des risques")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", [_c("th", [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Banques")])]), _vm._v(" "), _c("th", [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Lignes")])]), _vm._v(" "), _c("th", [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Autorisation")])]), _vm._v(" "), _c("th", [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Encours")])]), _vm._v(" "), _c("th", [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Echéance")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    attrs: {
      colspan: "2"
    }
  }, [_c("label", {
    staticClass: "form-label mt-1",
    attrs: {
      "for": "total_par_caisse"
    }
  }, [_c("b", [_vm._v("S/Total par caisse")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", [_c("td", {
    attrs: {
      colspan: "5"
    }
  }, [_c("hr")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", [_c("th", [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Banques")])]), _vm._v(" "), _c("th", [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Lignes")])]), _vm._v(" "), _c("th", [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Autorisation")])]), _vm._v(" "), _c("th", [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Encours")])]), _vm._v(" "), _c("th", [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Echéance")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    attrs: {
      colspan: "2"
    }
  }, [_c("label", {
    staticClass: "form-label mt-1",
    attrs: {
      "for": "total_communique_signature_encours"
    }
  }, [_c("b", [_vm._v("S/Total par signature")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    attrs: {
      colspan: "2"
    }
  }, [_c("label", {
    staticClass: "form-label mt-1",
    attrs: {
      "for": "total_ligne_communique"
    }
  }, [_c("b", [_vm._v("Total")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    attrs: {
      "for": "commentaire_lignes_clients"
    }
  }, [_c("b", [_vm._v("Commentaires sur les lignes communiquées par les\n                            clients")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "modal-body"
  }, [_c("img", {
    attrs: {
      src: "/images/capture_afg/centrale_risques_adhesion_au_bic.png",
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
  }, [_vm._v("\n                            Fermer\n                        ")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/memorandum/F5.vue?vue&type=style&index=0&id=044f58bf&lang=css&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/memorandum/F5.vue?vue&type=style&index=0&id=044f58bf&lang=css&scoped=true ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "\ninput[data-v-044f58bf] {\r\n    /*border: 1px solid red;*/\n}\n*[data-v-044f58bf] {\r\n    font-family: \"Google sans\";\n}\nth[data-v-044f58bf] {\r\n    font-size: 12px;\r\n    background: #f4f3f3 !important;\n}\nlabel[data-v-044f58bf] {\r\n    height: 10px;\r\n    font-size: 13px;\n}\ninput[data-v-044f58bf],\r\nselect[data-v-044f58bf] {\r\n    height: 35px;\r\n    border-color: #34495e;\r\n    color: #57606f;\r\n    font-size: 13px;\r\n    font-weight: bold;\n}\nselect[data-v-044f58bf], input[data-v-044f58bf] {\r\n    min-width: 150px;\n}\n.card-width-height[data-v-044f58bf] {\r\n    width: 100%;\r\n    height: 100%;\n}\n.head[data-v-044f58bf] {\r\n    color: #f1f2f6;\r\n    font-size: 22px;\n}\n.hdc[data-v-044f58bf] {\r\n    background-color: #57606f;\n}\r\n\r\n/* Ajouter note */\n.badge-sm[data-v-044f58bf] {\r\n    display: inline-block;\r\n    width: 15px;\r\n    height: 15px;\r\n    background: rgba(255, 0, 0, 0.882);\r\n    color: white;\r\n    font-size: 12px;\r\n    font-weight: 500;\r\n    border-radius: 100%;\r\n    position: absolute;\r\n    top: -20%;\r\n    left: 55%;\r\n    text-align: center;\n}\n.relook-header[data-v-044f58bf] {\r\n    color: #000;\r\n    background-color: #f4f3f3;\r\n    padding: 5px;\r\n    border-bottom: 1px solid #b6b8bb;\n}\n.bg-relooker[data-v-044f58bf] {\r\n    background-color: #2c3e50;\r\n    color: white;\n}\n.image1[data-v-044f58bf] {\r\n    background: url(\"/images/capture/exemples/engagement_globaux.png\")\r\n        no-repeat;\r\n    background-position: center;\r\n    background-size: contain;\r\n\r\n    width: 500px;\r\n    height: 300px;\n}\n.image2[data-v-044f58bf] {\r\n    background: url(\"/images/capture/instructions/engagement_globaux.png\")\r\n        no-repeat;\r\n    background-position: center;\r\n    background-size: contain;\r\n\r\n    width: 500px;\r\n    height: 300px;\n}\n.ligne_existante_banque_hypotheques input[data-v-044f58bf],\r\n.ligne_existante_banque_hypotheques select[data-v-044f58bf],\r\n.ligne_existante_banque_gages input[data-v-044f58bf],\r\n.ligne_existante_banque_gages select[data-v-044f58bf] {\r\n    min-width: 100px;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/memorandum/F5.vue?vue&type=style&index=0&id=044f58bf&lang=css&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/memorandum/F5.vue?vue&type=style&index=0&id=044f58bf&lang=css&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_F5_vue_vue_type_style_index_0_id_044f58bf_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./F5.vue?vue&type=style&index=0&id=044f58bf&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/memorandum/F5.vue?vue&type=style&index=0&id=044f58bf&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_F5_vue_vue_type_style_index_0_id_044f58bf_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_F5_vue_vue_type_style_index_0_id_044f58bf_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/forms/afg/memorandum/F5.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/forms/afg/memorandum/F5.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _F5_vue_vue_type_template_id_044f58bf_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./F5.vue?vue&type=template&id=044f58bf&scoped=true */ "./resources/js/components/forms/afg/memorandum/F5.vue?vue&type=template&id=044f58bf&scoped=true");
/* harmony import */ var _F5_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./F5.vue?vue&type=script&lang=js */ "./resources/js/components/forms/afg/memorandum/F5.vue?vue&type=script&lang=js");
/* harmony import */ var _F5_vue_vue_type_style_index_0_id_044f58bf_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./F5.vue?vue&type=style&index=0&id=044f58bf&lang=css&scoped=true */ "./resources/js/components/forms/afg/memorandum/F5.vue?vue&type=style&index=0&id=044f58bf&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _F5_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _F5_vue_vue_type_template_id_044f58bf_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _F5_vue_vue_type_template_id_044f58bf_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "044f58bf",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/forms/afg/memorandum/F5.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/forms/afg/memorandum/F5.vue?vue&type=script&lang=js":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/memorandum/F5.vue?vue&type=script&lang=js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_F5_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./F5.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/memorandum/F5.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_F5_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/forms/afg/memorandum/F5.vue?vue&type=style&index=0&id=044f58bf&lang=css&scoped=true":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/memorandum/F5.vue?vue&type=style&index=0&id=044f58bf&lang=css&scoped=true ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_F5_vue_vue_type_style_index_0_id_044f58bf_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./F5.vue?vue&type=style&index=0&id=044f58bf&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/memorandum/F5.vue?vue&type=style&index=0&id=044f58bf&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/forms/afg/memorandum/F5.vue?vue&type=template&id=044f58bf&scoped=true":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/memorandum/F5.vue?vue&type=template&id=044f58bf&scoped=true ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_F5_vue_vue_type_template_id_044f58bf_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_F5_vue_vue_type_template_id_044f58bf_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_F5_vue_vue_type_template_id_044f58bf_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./F5.vue?vue&type=template&id=044f58bf&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/memorandum/F5.vue?vue&type=template&id=044f58bf&scoped=true");


/***/ })

}]);