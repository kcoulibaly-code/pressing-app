"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_forms_nsia_produits_avance_avance_bon_commande_DCEI-FAC4-OLD_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/nsia/produits/avance/avance_bon_commande/DCEI-FAC4-OLD.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/nsia/produits/avance/avance_bon_commande/DCEI-FAC4-OLD.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../shared/ContextMenu */ "./resources/js/components/shared/ContextMenu.vue");
/* harmony import */ var _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../shared/ContextMenuItem */ "./resources/js/components/shared/ContextMenuItem.vue");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../services/auth.service */ "./resources/js/services/auth.service.js");
/* harmony import */ var _services_credit_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../services/credit.service */ "./resources/js/services/credit.service.js");
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../helpers/helper */ "./resources/js/helpers/helper.js");









window.$ = window.jQuery = __webpack_require__(/*! jquery/dist/jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Centrale_Risques_Adhesion_au_BIC",
  display: "Centrale Risques – Adhésion au BIC",
  components: {
    MoreVerticalIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.MoreVerticalIcon,
    ChevronUpIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.ChevronUpIcon,
    ChevronDownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.ChevronDownIcon,
    ContextMenu: _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_0__["default"],
    ContextMenuItem: _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_1__["default"],
    AirplayIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.AirplayIcon,
    BookOpenIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.BookOpenIcon,
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.PlusIcon,
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.TrashIcon
  },
  props: {
    meta_data: Object,
    tb_name: String,
    tb_display_name: String
  },
  created: function created() {
    var _this = this;
    _services_credit_service__WEBPACK_IMPORTED_MODULE_4__["default"].loadCredits().then(function (res) {
      _this.credData(res);
    })["catch"](function (err) {
      console.log(err);
    });
    _services_credit_service__WEBPACK_IMPORTED_MODULE_4__["default"].loadClients("ismael.kamate@cofinacorp.com").then(function (res) {
      _this.clientData(res);
    })["catch"](function (err) {
      console.log(err);
    });
  },
  computed: {
    isAfterToday: function isAfterToday() {
      var today = new Date().getTime();
      var elem = {
        existante: {},
        caution: {}
      };
      this.lignes_existantes.forEach(function (el, index) {
        var cond = new Date(el.ligne_echeance).getTime() > today;
        if (cond) {
          elem.existante[index] = true;
        } else {
          elem.existante[index] = false;
        }
      });
      this.cautions_lignes_existantes.forEach(function (el, index) {
        var cond = new Date(el.caution_ligne_existante_echeance).getTime() > today;
        if (cond) {
          elem.caution[index] = true;
        } else {
          elem.caution[index] = false;
        }
      });
      return elem;
    },
    isAuthorized: function isAuthorized() {
      var _this2 = this;
      var elem = {
        existante: {},
        caution: {}
      };
      this.lignes_existantes.forEach(function (el, index) {
        var cond = _this2.localeStringToFloat(el.ligne_existante_autorisation) >= _this2.localeStringToFloat(el.ligne_encours);
        //console.log(this.localeStringToFloat(el.ligne_existante_autorisation), this.localeStringToFloat(el.ligne_encours), cond)
        if (cond) {
          elem.existante[index] = true;
        } else {
          elem.existante[index] = false;
        }
      });
      this.cautions_lignes_existantes.forEach(function (el, index) {
        var cond = _this2.localeStringToFloat(el.caution_ligne_existante_autorisation) >= _this2.localeStringToFloat(el.caution_ligne_existante_encours);
        //console.log(this.localeStringToFloat(el.caution_ligne_existante_autorisation), this.localeStringToFloat(el.caution_ligne_existante_encours), cond)
        if (cond) {
          elem.caution[index] = true;
        } else {
          elem.caution[index] = false;
        }
      });
      return elem;
    },
    isAllAuthorized: function isAllAuthorized() {
      return Object.values(this.isAuthorized).every(function (el) {
        return el === true;
      });
    }
  },
  mounted: function mounted() {
    var _this$meta_data$dossi;
    var applied_templ_name = (_this$meta_data$dossi = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi === void 0 ? void 0 : _this$meta_data$dossi.applied_templ_name;
    var tbArrays = this.determineCredPubTables(applied_templ_name);
    this.credpub00 = tbArrays[0];
    this.credpub01 = tbArrays[1];
    this.loadRetrieved();
    this.loadTbAttrs(); // charge les attributs + sous attributs des tables
    // helper.loadCurrencyFormatter();
    // this.crdLd()
    this.banqueData();
  },
  data: function data() {
    var vm = this;
    return {
      ebapisHost: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_2__["default"].host,
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
      index: 0,
      credits: [],
      clients: [],
      encours: null,
      placeholder: "Chercher clients",
      matcli: "matcli",
      nomcli: "nomcli",
      banques: "",
      meta_parseable: {
        cred_pub_key: this.meta_data["cred_pub_key"],
        tb_name: this.tb_name
      },
      formDataToBeWatched: {
        notes: [],
        nouvelles_lignes: "",
        lignes_existantes: "",
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
        total_caisse_nouvelle_ligne_proposition_dcpr: "",
        total_caisse_nouvelle_ligne_encours: "",
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
        ligne_existante_banque_hypotheques: [],
        total_ligne_existante_banque_hypotheques_valeur_marchande: "",
        total_ligne_existante_banque_hypotheques_valeur_considere: "",
        ligne_existante_banque_gages: [],
        total_ligne_existante_banque_gages_valeur_marchande: "",
        total_ligne_existante_banque_gages_valeur_considere: "",
        commentaires_lignes_existantes: "",
        commentaires_nouvelles_lignes: ""
      },
      lignes_existantes: [{
        ligne_mfcfa: "",
        banque: "NSIA BANQUE",
        ligne_existante_autorisation: 0,
        ligne_encours: 0,
        ligne_echeance: "",
        ligne_garantie_covenant_specifique_retenu: "",
        ligne_garantie_covenant_generale_retenu: ""
      }],
      nouvelles_lignes: [{
        demande_client: "Avance sur bon de commande",
        banque: "NSIA BANQUE",
        montant_nouvel_ligne: 0,
        proposition_dcpr: 0,
        echeance_duree_tirage: 0,
        nouvelle_ligne_taux: 0
      }],
      cautions_lignes_existantes: [{
        caution_ligne_existante_mfcfa: "",
        banque: "NSIA BANQUE",
        caution_ligne_existante_autorisation: 0,
        caution_ligne_existante_encours: 0,
        caution_ligne_existante_echeance: ""
      }],
      cautions_nouvelles_lignes: [{
        cautions_nouvelles_lignes_demande_client: "",
        banque: "NSIA BANQUE",
        caution_nouvelle_lignes_montant: 0,
        cautions_nouvelles_lignes_proposition_dcpr: 0,
        cautions_nouvelles_lignes_echeance_duree_tirage: 0,
        cautions_nouvelles_lignes_taux: 0
      }],
      ligne_existante_banque_hypotheques: [{
        numero_ligne: "",
        intitule_ligne: "",
        bien_hypotheque: "",
        proprietaire: "",
        numero_tel: "",
        annee_achat: "",
        adresse_emplacement: "",
        longitude: "",
        lattitude: "",
        valeur_marchande: 0,
        valeur_considere: 0,
        date_evaluation: ""
      }],
      ligne_existante_banque_gages: [{
        numero_ligne: "",
        intitule_ligne: "",
        bien_a_gage: "",
        proprietaire: "",
        numero_tel: "",
        annee_achat: "",
        adresse_emplacement: "",
        valeur_marchande: 0,
        valeur_considere: 0,
        date_evaluation: ""
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
      }],
      credpub00: null,
      credpub01: null
    };
  },
  methods: {
    banqueData: function banqueData() {
      var _this3 = this;
      _services_credit_service__WEBPACK_IMPORTED_MODULE_4__["default"].loadbank("COTE D'IVOIRE", "BK").then(function (res) {
        // console.log("bonjour", res);
        _this3.bankData(res);
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
      var _this4 = this;
      _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["default"].loadUserData().then(function (res) {
        _this4.send2Backend(res, 0, 0);
      })["catch"](function (err) {
        _this4.loadWithError(err);
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
      var _this$meta_data$dossi2,
        _this$meta_data$dossi3,
        _this5 = this;
      var lentb = this.meta_data["dossier_credit"]["tbs_in_use"];
      var createdKey = this.tb_name;
      var createdKeyArr = createdKey.split("tb");
      createdKey = "cred_pub_tb_" + createdKeyArr[1];

      // Close table by default
      this.defaultRetract(false, (_this$meta_data$dossi2 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi2 === void 0 ? void 0 : _this$meta_data$dossi2.applied_templ_id);
      if (((_this$meta_data$dossi3 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi3 === void 0 ? void 0 : _this$meta_data$dossi3.doss_central_file_recorder) != undefined) {
        var _this$meta_data$dossi4;
        this.formDataToBeWatched.nom_emprunteur = (_this$meta_data$dossi4 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi4 === void 0 || (_this$meta_data$dossi4 = _this$meta_data$dossi4.doss_central_file_recorder) === null || _this$meta_data$dossi4 === void 0 || (_this$meta_data$dossi4 = _this$meta_data$dossi4.client) === null || _this$meta_data$dossi4 === void 0 ? void 0 : _this$meta_data$dossi4.nomcli;
      } else {
        var _this$meta_data$dossi5;
        this.formDataToBeWatched.nom_emprunteur = (_this$meta_data$dossi5 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi5 === void 0 || (_this$meta_data$dossi5 = _this$meta_data$dossi5.cred_pub_tb_00) === null || _this$meta_data$dossi5 === void 0 ? void 0 : _this$meta_data$dossi5.raison_sociale;
      }
      if (lentb.length > 0) {
        if (this.meta_data["dossier_credit"][createdKey] != undefined) {
          this.formDataToBeWatched = this.meta_data["dossier_credit"][createdKey];
          if (this.meta_data["dossier_credit"][createdKey]["lignes_existantes"] != "") {
            this.lignes_existantes = this.meta_data["dossier_credit"][createdKey]["lignes_existantes"];
            setTimeout(function () {
              _this5.lignes_existantes_selected_ligne = [];
              _this5.lignes_existantes.forEach(function (element) {
                _this5.lignes_existantes_selected_ligne.push(element.ligne_mfcfa);
              });
            }, 1000);
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
        } else {
          var _this$meta_data$dossi6;
          if (((_this$meta_data$dossi6 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi6 === void 0 ? void 0 : _this$meta_data$dossi6[this.credpub01]) != undefined) {
            var _this$meta_data$dossi7, _this$meta_data$dossi8, _this$meta_data$dossi9, _this$meta_data$dossi0;
            this.nouvelles_lignes[0]['montant_nouvel_ligne'] = (_this$meta_data$dossi7 = this.meta_data["dossier_credit"][this.credpub01]) === null || _this$meta_data$dossi7 === void 0 ? void 0 : _this$meta_data$dossi7.montant_tirage_av_bon_sollicite;
            this.nouvelles_lignes[0]['proposition_dcpr'] = (_this$meta_data$dossi8 = this.meta_data["dossier_credit"][this.credpub01]) === null || _this$meta_data$dossi8 === void 0 ? void 0 : _this$meta_data$dossi8.montant_tirage_av_bon_sollicite;
            this.nouvelles_lignes[0]['echeance_duree_tirage'] = (_this$meta_data$dossi9 = this.meta_data["dossier_credit"][this.credpub01]) === null || _this$meta_data$dossi9 === void 0 ? void 0 : _this$meta_data$dossi9.echeance_avance_accorde;
            this.nouvelles_lignes[0]['nouvelle_ligne_taux'] = (_this$meta_data$dossi0 = this.meta_data["dossier_credit"][this.credpub01]) === null || _this$meta_data$dossi0 === void 0 ? void 0 : _this$meta_data$dossi0.taux_interet;
            this.handleInput();
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
        banque: "NSIA BANQUE",
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
    formDataVars: function formDataVars(event) {
      this.formDataToBeWatched[event[0]] = event[1];
    },
    setCautionLigneExistanteVars: function setCautionLigneExistanteVars(event, index, key) {
      this.cautions_lignes_existantes[index][key] = event[1];
      this.handleInput();
    },
    setNouvelleLigneVars: function setNouvelleLigneVars(event, index, key) {
      this.nouvelles_lignes[index][key] = event[1];
      this.handleInput();
    },
    setCautionNouvelleLigneVars: function setCautionNouvelleLigneVars(event, index, key) {
      this.cautions_nouvelles_lignes[index][key] = event[1];
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
      console.log(this.lignes_existantes);
      this.lignes_existantes.push({
        ligne_mfcfa: "",
        banque: "NSIA BANQUE",
        ligne_existante_autorisation: 0,
        ligne_encours: 0,
        ligne_echeance: "",
        ligne_garantie_covenant_specifique_retenu: "",
        ligne_garantie_covenant_generale_retenu: ""
      });
    },
    addMore1: function addMore1() {
      this.cautions_lignes_existantes.push({
        caution_ligne_existante_mfcfa: "",
        banque: "NSIA BANQUE",
        caution_ligne_existante_autorisation: 0,
        caution_ligne_existante_encours: 0,
        caution_ligne_existante_echeance: ""
      });
    },
    // remove(index) {
    //     this.source_revenus.splice(index, 1);
    //     this.formDataToBeWatched.total_interimaires = this.totalInterimaires;
    //     this.formDataToBeWatched.total_permanent = this.totalPermanent;
    // },
    remove4: function remove4(index) {
      this.cautions_lignes_existantes.splice(index, 1);
      this.formDataToBeWatched.total_signature_ligne_existante_autorisation = this.somX3(this.cautions_lignes_existantes, "caution_ligne_existante_autorisation");
      this.formDataToBeWatched.total_signature_ligne_existante_encours = this.somX3(this.cautions_lignes_existantes, "caution_ligne_existante_encours");
      //this.formDataToBeWatched.total_signature_ligne_existante_echance = this.somX3(this.cautions_lignes_existantes, 'caution_ligne_existante_echeance')
      this.formDataToBeWatched.total_ligne_existante_1 = this.formDataToBeWatched.total_caisse_ligne_existante_autorisation + this.formDataToBeWatched.total_signature_ligne_existante_autorisation;
      this.formDataToBeWatched.total_ligne_existante_2 = this.formDataToBeWatched.total_caisse_ligne_existante_encours + this.formDataToBeWatched.total_signature_ligne_existante_encours;
      //this.formDataToBeWatched.total_ligne_existante_3 = this.formDataToBeWatched.total_caisse_ligne_existante_echeance + this.formDataToBeWatched.total_signature_ligne_existante_echance

      this.handleInput();
    },
    // SOMME DES MONTANTS
    somX3: function somX3(ob, key) {
      var som = 0;
      ob.filter(function (elm) {
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
      // this.formDataToBeWatched.total_montant_nouvel_ligne = this.somX3(
      //     this.nouvelles_lignes,
      //     "montant_nouvel_ligne"
      // );
      // this.formDataToBeWatched.total_caisse_nouvelle_ligne_proposition_dcpr =
      //     this.somX3(this.nouvelles_lignes, "proposition_dcpr");
      // this.formDataToBeWatched.total_caisse_nouvelle_ligne_encours =
      //     this.somX3(this.nouvelles_lignes, "echeance_duree_tirage");
      // this.formDataToBeWatched.total_caisse_nouvelle_ligne_echeance =
      //     this.somX3(this.nouvelles_lignes, "nouvelle_ligne_taux");
      // this.formDataToBeWatched.total_nouvelle_ligne_0 =
      //     this.formDataToBeWatched.total_montant_nouvel_ligne +
      //     this.formDataToBeWatched.total_signature_nouvelle_ligne_montant;
      // this.formDataToBeWatched.total_nouvelle_ligne_1 =
      //     this.formDataToBeWatched
      //         .total_caisse_nouvelle_ligne_proposition_dcpr +
      //     this.formDataToBeWatched
      //         .total_signature_nouvelle_ligne_autorisation;
      // this.formDataToBeWatched.total_nouvelle_ligne_2 =
      //     this.formDataToBeWatched.total_caisse_nouvelle_ligne_encours +
      //     this.formDataToBeWatched.total_signature_nouvelle_ligne_encours;
      // this.formDataToBeWatched.total_nouvelle_ligne_3 =
      //     this.formDataToBeWatched.total_caisse_nouvelle_ligne_echeance +
      //     this.formDataToBeWatched.total_signature_nouvelle_ligne_echance;
      this.handleInput();
    },
    remove5: function remove5(index) {
      this.cautions_nouvelles_lignes.splice(index, 1);
      this.formDataToBeWatched.total_signature_nouvelle_ligne_montant = this.somX3(this.cautions_nouvelles_lignes, "caution_nouvelle_lignes_montant");
      this.formDataToBeWatched.total_signature_nouvelle_ligne_autorisation = this.somX3(this.cautions_nouvelles_lignes, "cautions_nouvelles_lignes_proposition_dcpr");
      this.formDataToBeWatched.total_signature_nouvelle_ligne_encours = this.somX3(this.cautions_nouvelles_lignes, "cautions_nouvelles_lignes_echeance_duree_tirage");
      this.formDataToBeWatched.total_signature_nouvelle_ligne_echance = this.somX3(this.cautions_nouvelles_lignes, "cautions_nouvelles_lignes_taux");
      this.formDataToBeWatched.total_nouvelle_ligne_0 = this.formDataToBeWatched.total_montant_nouvel_ligne + this.formDataToBeWatched.total_signature_nouvelle_ligne_montant;
      this.formDataToBeWatched.total_nouvelle_ligne_1 = this.formDataToBeWatched.total_caisse_nouvelle_ligne_proposition_dcpr + this.formDataToBeWatched.total_signature_nouvelle_ligne_autorisation;
      this.formDataToBeWatched.total_nouvelle_ligne_2 = this.formDataToBeWatched.total_caisse_nouvelle_ligne_encours + this.formDataToBeWatched.total_signature_nouvelle_ligne_encours;
      this.formDataToBeWatched.total_nouvelle_ligne_3 = this.formDataToBeWatched.total_caisse_nouvelle_ligne_echeance + this.formDataToBeWatched.total_signature_nouvelle_ligne_echance;
      this.handleInput();
    },
    remove1: function remove1(index) {
      this.cautions_lignes_existantes.splice(index, 1);
    },
    remove2: function remove2(index) {
      this.nouvelles_lignes.splice(index, 1);
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
        banque: "NSIA BANQUE",
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

      //----------------ligne existante-------------------------------//

      this.formDataToBeWatched.total_caisse_ligne_existante_autorisation = this.somX3(this.lignes_existantes, "ligne_existante_autorisation");
      this.formDataToBeWatched["lignes_existantes"] = this.lignes_existantes;
      this.formDataToBeWatched.total_caisse_ligne_existante_encours = this.somX3(this.lignes_existantes, "ligne_encours");
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

      //----------------Total engagement signature-------------------------------//
      this.formDataToBeWatched.total_ligne_existante_1 = (this.formDataToBeWatched.total_caisse_ligne_existante_autorisation || 0) + (this.formDataToBeWatched.total_signature_ligne_existante_autorisation || 0);
      this.formDataToBeWatched.total_ligne_existante_2 = (this.formDataToBeWatched.total_caisse_ligne_existante_encours || 0) + (this.formDataToBeWatched.total_signature_ligne_existante_encours || 0);
      console.log("false or 0",  false || 0);
      //this.formDataToBeWatched.total_ligne_existante_3 = this.formDataToBeWatched.total_caisse_ligne_existante_echeance + this.formDataToBeWatched.total_signature_ligne_existante_echance

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
      this.formDataToBeWatched.total_nouvelle_ligne_0 = this.formDataToBeWatched.total_montant_nouvel_ligne + this.formDataToBeWatched.total_signature_nouvelle_ligne_montant;
      this.formDataToBeWatched.total_nouvelle_ligne_1 = this.formDataToBeWatched.total_caisse_nouvelle_ligne_proposition_dcpr + this.formDataToBeWatched.total_signature_nouvelle_ligne_autorisation;
      this.formDataToBeWatched.total_nouvelle_ligne_2 = this.formDataToBeWatched.total_caisse_nouvelle_ligne_encours + this.formDataToBeWatched.total_signature_nouvelle_ligne_encours;
      this.formDataToBeWatched.total_nouvelle_ligne_3 = this.formDataToBeWatched.total_caisse_nouvelle_ligne_echeance + this.formDataToBeWatched.total_signature_nouvelle_ligne_echance;
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
        "cred_pub_tb_8": "cred_pub_tb_8",
        "lignes_existantes": this.formDataToBeWatched.lignes_existantes,
        "cautions_lignes_existantes": this.formDataToBeWatched.cautions_lignes_existantes,
        "nouvelles_lignes": this.formDataToBeWatched.nouvelles_lignes,
        "cautions_nouvelles_lignes": this.formDataToBeWatched.cautions_nouvelles_lignes
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
        var _this$meta_data$dossi1, _this$meta_data$dossi10;
        // this.chiffres_cles[0].chiffres_affaires_n_1 = this.meta_data.dossier_credit?.cred_pub_tb_00.ca_n1;
        // this.chiffres_cles[0].chiffres_affaires_n_2 = this.meta_data.dossier_credit?.cred_pub_tb_00.ca_n2;
        // this.chiffres_cles[0].resulat_net_n_1 = this.meta_data.dossier_credit?.cred_pub_tb_00.rn_n1;
        // this.chiffres_cles[0].resulat_net_n_2 = this.meta_data.dossier_credit?.cred_pub_tb_00.rn_n2;
        this.chiffres_cles[0].nb_an_activite_n_1 = (_this$meta_data$dossi1 = this.meta_data.dossier_credit) === null || _this$meta_data$dossi1 === void 0 || (_this$meta_data$dossi1 = _this$meta_data$dossi1.cred_pub_tb_00) === null || _this$meta_data$dossi1 === void 0 ? void 0 : _this$meta_data$dossi1.experience_secteur;
        this.chiffres_cles[0].nb_an_activite_n_2 = ((_this$meta_data$dossi10 = this.meta_data.dossier_credit) === null || _this$meta_data$dossi10 === void 0 || (_this$meta_data$dossi10 = _this$meta_data$dossi10.cred_pub_tb_00) === null || _this$meta_data$dossi10 === void 0 ? void 0 : _this$meta_data$dossi10.experience_secteur) - 1;
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/nsia/produits/avance/avance_bon_commande/DCEI-FAC4-OLD.vue?vue&type=template&id=098ccda7&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/nsia/produits/avance/avance_bon_commande/DCEI-FAC4-OLD.vue?vue&type=template&id=098ccda7&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  }, [_vm._v("\n                                " + _vm._s(_vm.tb_display_name) + " : Description et justification des lignes\n                            ")]), _vm._v(" "), _c("div", {
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
  }, [_c("span", [_vm._v("\n                                                " + _vm._s(_vm.formDataToBeWatched.notes.length) + "\n                                            ")])])])]) : _vm._e(), _vm._v(" "), _c("chevron-up-icon", {
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
  })], 1)])])]), _vm._v(" "), (_vm.seen3 = _vm.seen3) ? _c("div", {
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
      id: "lignes-existantes"
    }
  }, [_vm._v("\n                                        Lignes existantes\n                                        "), _c("chevron-up-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)]), _vm._v(" "), _c("div", [_c("div", {
    staticClass: "card-body p-0"
  }, [_vm._m(0), _vm._v(" "), _vm._m(1), _vm._v(" "), _vm._l(_vm.lignes_existantes, function (ligne_existante, index) {
    return _c("div", {
      key: index,
      staticClass: "row g-1 pb-1"
    }, [_c("div", {
      staticClass: "col-3"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: ligne_existante.banque,
        expression: "ligne_existante.banque"
      }],
      staticClass: "form-control",
      attrs: {
        required: "",
        type: "text",
        disabled: ""
      },
      domProps: {
        value: ligne_existante.banque
      },
      on: {
        change: _vm.handleInput,
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(ligne_existante, "banque", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("div", {
      staticClass: "col-2"
    }, [_c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: ligne_existante.ligne_mfcfa,
        expression: "ligne_existante.ligne_mfcfa"
      }],
      staticClass: "form-select single-select",
      attrs: {
        required: "",
        id: "ligne_mfcfa"
      },
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
      attrs: {
        value: ""
      }
    }), _vm._v(" "), _c("option", {
      attrs: {
        value: "Découvert"
      }
    }, [_vm._v("\n                                            Découvert\n                                        ")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "Crédit de Campagne"
      }
    }, [_vm._v("\n                                            Crédit de Campagne\n                                        ")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "Avance sur marché"
      }
    }, [_vm._v("\n                                            Avance sur marché\n                                        ")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "Avance sur facture"
      }
    }, [_vm._v("\n                                            Avance sur facture\n                                        ")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "Escompte commerciale"
      }
    }, [_vm._v("\n                                            Escompte commerciale\n                                        ")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "Escompte financier"
      }
    }, [_vm._v("\n                                            Escompte financier\n                                        ")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "Affacturage"
      }
    }, [_vm._v("\n                                            Affacturage\n                                        ")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "Crédit d'investissement"
      }
    }, [_vm._v("\n                                            Crédit d'investissement\n                                        ")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "Crédit bail"
      }
    }, [_vm._v("\n                                            Crédit bail\n                                        ")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "Crédit Court Terme"
      }
    }, [_vm._v("\n                                            Crédit Court Terme\n                                        ")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "Crédit Moyen Terme"
      }
    }, [_vm._v("\n                                            Crédit Moyen Terme\n                                        ")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "Crédit Long Terme"
      }
    }, [_vm._v("\n                                            Crédit Long Terme\n                                        ")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "Autres(Impayés)"
      }
    }, [_vm._v("\n                                            Autres(Impayés)\n                                        ")])])]), _vm._v(" "), _c("div", {
      staticClass: "col-2"
    }, [_c("currency-input", {
      attrs: {
        value: ligne_existante.ligne_existante_autorisation
      },
      on: {
        input: function input($event) {
          return _vm.setLigneExistanteVars($event, index, "ligne_existante_autorisation");
        }
      }
    })], 1), _vm._v(" "), _c("div", {
      staticClass: "col-2"
    }, [_c("currency-input", {
      "class": {
        "border border-2 border-danger rounded text-danger": !_vm.isAuthorized.existante[index]
      },
      attrs: {
        value: ligne_existante.ligne_encours
      },
      on: {
        input: function input($event) {
          return _vm.setLigneExistanteVars($event, index, "ligne_encours");
        }
      }
    }), _vm._v(" "), !_vm.isAuthorized.existante[index] ? _c("small", {
      staticClass: "text-danger",
      staticStyle: {
        "font-size": "10px",
        "line-height": "0px",
        "font-weight": "600"
      }
    }, [_vm._v("\n                                        l'encours ne peut\n                                        être\n                                        supérieur à l'autorisation ")]) : _vm._e()], 1), _vm._v(" "), _c("div", {
      staticClass: "col-2"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: ligne_existante.ligne_echeance,
        expression: "ligne_existante.ligne_echeance"
      }],
      staticClass: "form-control",
      "class": {
        "border border-2 border-danger": !_vm.isAfterToday.existante[index] && ligne_existante.ligne_echeance
      },
      attrs: {
        type: "date"
      },
      domProps: {
        value: ligne_existante.ligne_echeance
      },
      on: {
        input: [function ($event) {
          if ($event.target.composing) return;
          _vm.$set(ligne_existante, "ligne_echeance", $event.target.value);
        }, _vm.handleInput]
      }
    }), _vm._v(" "), !_vm.isAfterToday.existante[index] && ligne_existante.ligne_echeance ? _c("small", {
      staticClass: "text-danger",
      staticStyle: {
        "font-size": "10px",
        "letter-spacing": "0px",
        "font-weight": "600"
      }
    }, [_vm._v("\n                                        La date choisie doit être supérieur à aujourd'hui\n\n                                    ")]) : _vm._e()]), _vm._v(" "), index == 0 ? _c("div", {
      staticClass: "col-1"
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
      staticClass: "col-1",
      staticStyle: {
        "margin-left": "0px",
        "margin-top": "5px"
      }
    }, [_c("label", {
      attrs: {
        "for": ""
      }
    }), _vm._v(" "), _c("button", {
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
    })], 1)]), _vm._v(" "), _c("div", {
      staticClass: "col-12"
    })]);
  })], 2)]), _vm._v(" "), _c("div", [_c("div", {
    staticClass: "row g-1 mt-1"
  }, [_vm._m(2), _vm._v(" "), _c("div", {
    staticClass: "col-2"
  }, [_c("currency-input", {
    attrs: {
      value: _vm.formDataToBeWatched.total_caisse_ligne_existante_autorisation,
      id: "total_caisse_ligne_existante_autorisation",
      disabled: ""
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-2"
  }, [_c("currency-input", {
    attrs: {
      value: _vm.formDataToBeWatched.total_caisse_ligne_existante_encours,
      id: "total_caisse_ligne_existante_encours",
      disabled: ""
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-2"
  })])]), _vm._v(" "), _c("br"), _vm._v(" "), _c("div", [_c("div", {
    staticClass: "row g-1 mt-1"
  }, [_vm._m(3), _vm._v(" "), _vm._m(4), _vm._v(" "), _vm._l(_vm.cautions_lignes_existantes, function (caution_ligne_existante, index) {
    return _c("div", {
      key: index,
      staticClass: "row g-1"
    }, [_c("div", {
      staticClass: "col-3"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: caution_ligne_existante.banque,
        expression: "caution_ligne_existante.banque"
      }],
      staticClass: "form-control",
      attrs: {
        required: "",
        type: "text",
        disabled: ""
      },
      domProps: {
        value: caution_ligne_existante.banque
      },
      on: {
        change: _vm.handleInput,
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(caution_ligne_existante, "banque", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("div", {
      staticClass: "col-2"
    }, [_c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: caution_ligne_existante.caution_ligne_existante_mfcfa,
        expression: "\n                                            caution_ligne_existante.caution_ligne_existante_mfcfa\n                                        "
      }],
      staticClass: "form-select single-select",
      attrs: {
        required: "",
        id: "caution_ligne_existante1"
      },
      on: {
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(caution_ligne_existante, "caution_ligne_existante_mfcfa", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, _vm.handleInput]
      }
    }, [_c("option", {
      attrs: {
        value: ""
      }
    }), _vm._v(" "), _c("option", {
      attrs: {
        value: "Caution de soumissission"
      }
    }, [_vm._v("\n                                            Caution de soumissission\n                                        ")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "Caution de demarrage"
      }
    }, [_vm._v("\n                                            Caution de demarrage\n                                        ")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "Caution de bonne fin"
      }
    }, [_vm._v("\n                                            Caution de bonne fin\n                                        ")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "Caution de retenue de garantie"
      }
    }, [_vm._v("\n                                            Caution de retenue de garantie\n                                        ")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "Caution d'admission temporaire"
      }
    }, [_vm._v("\n                                            Caution d'admission temporaire\n                                        ")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "Caution de garantie de paiement"
      }
    }, [_vm._v("\n                                            Caution de garantie de paiement\n                                        ")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "Obligation Cautionnée"
      }
    }, [_vm._v("\n                                            Obligation Cautionnée\n                                        ")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "Caution pour impôt contesté"
      }
    }, [_vm._v("\n                                            Caution pour impôt contesté\n                                        ")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "Aval de traites"
      }
    }, [_vm._v("\n                                            Aval de traites\n                                        ")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "Credoc Irrévocable"
      }
    }, [_vm._v("\n                                            Credoc Irrévocable\n                                        ")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "Credoc notifié"
      }
    }, [_vm._v("\n                                            Credoc notifié\n                                        ")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "Credoc confirmé"
      }
    }, [_vm._v("\n                                            Credoc confirmé\n                                        ")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "Engagement de financement"
      }
    }, [_vm._v("\n                                            Engagement de financement\n                                        ")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "LC's"
      }
    }, [_vm._v("LC's")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "SBLC"
      }
    }, [_vm._v("SBLC")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "Autres"
      }
    }, [_vm._v("Autres")])])]), _vm._v(" "), _c("div", {
      staticClass: "col-2"
    }, [_c("currency-input", {
      attrs: {
        value: caution_ligne_existante.caution_ligne_existante_autorisation
      },
      on: {
        input: function input($event) {
          return _vm.setCautionLigneExistanteVars($event, index, "caution_ligne_existante_autorisation");
        }
      }
    })], 1), _vm._v(" "), _c("div", {
      staticClass: "col-2"
    }, [_c("currency-input", {
      "class": {
        "border border-2 border-danger rounded text-danger": !_vm.isAuthorized.caution[index]
      },
      attrs: {
        value: caution_ligne_existante.caution_ligne_existante_encours
      },
      on: {
        input: function input($event) {
          return _vm.setCautionLigneExistanteVars($event, index, "caution_ligne_existante_encours");
        }
      }
    }), _vm._v(" "), !_vm.isAuthorized.caution[index] ? _c("small", {
      staticClass: "text-danger",
      staticStyle: {
        "font-size": "10px",
        "line-height": "0px",
        "font-weight": "600"
      }
    }, [_vm._v("\n                                        l'encours ne peut\n                                        être\n                                        supérieur à l'autorisation\n                                    ")]) : _vm._e()], 1), _vm._v(" "), _c("div", {
      staticClass: "col-2"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: caution_ligne_existante.caution_ligne_existante_echeance,
        expression: "caution_ligne_existante.caution_ligne_existante_echeance"
      }],
      staticClass: "form-control number",
      "class": {
        "border border-2 border-danger text-danger": !_vm.isAfterToday.caution[index] && caution_ligne_existante.caution_ligne_existante_echeance
      },
      attrs: {
        required: "",
        type: "date",
        id: "caution_ligne_existante4"
      },
      domProps: {
        value: caution_ligne_existante.caution_ligne_existante_echeance
      },
      on: {
        input: [function ($event) {
          if ($event.target.composing) return;
          _vm.$set(caution_ligne_existante, "caution_ligne_existante_echeance", $event.target.value);
        }, _vm.handleInput]
      }
    }), _vm._v(" "), !_vm.isAfterToday.caution[index] && caution_ligne_existante.caution_ligne_existante_echeance ? _c("small", {
      staticClass: "text-danger",
      staticStyle: {
        "font-size": "10px",
        "letter-spacing": "0px",
        "font-weight": "600"
      }
    }, [_vm._v("\n                                        La date choisie doit être supérieur à aujourd'hui\n                                    ")]) : _vm._e()]), _vm._v(" "), index == 0 ? _c("div", {
      staticClass: "col-1"
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
      staticClass: "col-1",
      staticStyle: {
        "margin-left": "0px",
        "margin-top": "5px"
      }
    }, [_c("label", {
      attrs: {
        "for": ""
      }
    }), _vm._v(" "), _c("button", {
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
    })], 1)])]);
  })], 2)]), _vm._v(" "), _c("div", [_c("div", {
    staticClass: "row g-1 mt-1"
  }, [_vm._m(5), _vm._v(" "), _c("div", {
    staticClass: "col-2"
  }, [_c("currency-input", {
    attrs: {
      value: _vm.formDataToBeWatched.total_signature_ligne_existante_autorisation,
      id: "total_signature_ligne_existante_autorisation",
      disabled: ""
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-2"
  }, [_c("currency-input", {
    attrs: {
      value: _vm.formDataToBeWatched.total_signature_ligne_existante_encours,
      id: "total_signature_ligne_existante_encours",
      disabled: ""
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-2"
  })])]), _vm._v(" "), _c("div", [_c("div", {
    staticClass: "row g-1 mt-1"
  }, [_vm._m(6), _vm._v(" "), _c("div", {
    staticClass: "col-2"
  }, [_c("currency-input", {
    attrs: {
      value: _vm.formDataToBeWatched.total_ligne_existante_1,
      id: "total_ligne_existante_1",
      disabled: ""
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-2"
  }, [_c("currency-input", {
    attrs: {
      value: _vm.formDataToBeWatched.total_ligne_existante_2,
      id: "total_ligne_existante_2",
      disabled: ""
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-2"
  })])]), _vm._v(" "), _c("div", {
    staticClass: "mt-3"
  }, [_vm._m(7), _vm._v(" "), _c("vue-editor", {
    attrs: {
      id: "commentaires_lignes_existantes"
    },
    on: {
      "update-value": function updateValue($event) {
        _vm.formDataToBeWatched[$event[0]] = $event[1];
      }
    },
    model: {
      value: _vm.formDataToBeWatched.commentaires_lignes_existantes,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "commentaires_lignes_existantes", $$v);
      },
      expression: "formDataToBeWatched.commentaires_lignes_existantes"
    }
  })], 1)]) : _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header mb-5",
    on: {
      click: function click($event) {
        _vm.seen3 = !_vm.seen3;
      }
    }
  }, [_c("h6", {
    attrs: {
      id: "lignes-existantes"
    }
  }, [_vm._v("\n                            Lignes existantes\n                            "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)])]), _vm._v(" "), (_vm.seen4 = _vm.seen4) ? _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen4 = !_vm.seen4;
      }
    }
  }, [_c("h6", {
    "class": " subdiv" + this.tb_name,
    attrs: {
      id: "nouvelles-lignes"
    }
  }, [_vm._v("\n                                        Nouvelles lignes\n                                        "), _c("chevron-up-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)]), _vm._v(" "), _c("div", [_c("div", {
    staticClass: "card-body p-0 mt-3"
  }, [_vm._m(8), _vm._v(" "), _vm._l(_vm.nouvelles_lignes, function (nouvelle_ligne, index) {
    return _c("div", {
      key: index,
      staticClass: "row g-1 mb-1"
    }, [_c("div", {
      staticClass: "col-2"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: nouvelle_ligne.banque,
        expression: "nouvelle_ligne.banque"
      }],
      staticClass: "form-control",
      attrs: {
        required: "",
        type: "text",
        disabled: ""
      },
      domProps: {
        value: nouvelle_ligne.banque
      },
      on: {
        change: _vm.handleInput,
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(nouvelle_ligne, "banque", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("div", {
      staticClass: "col-2"
    }, [_c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: nouvelle_ligne.demande_client,
        expression: "nouvelle_ligne.demande_client"
      }],
      staticClass: "form-select single-select",
      attrs: {
        required: "",
        id: "demande_client"
      },
      on: {
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(nouvelle_ligne, "demande_client", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, _vm.handleInput]
      }
    }, [_c("option", {
      attrs: {
        value: ""
      }
    }), _vm._v(" "), _c("option", {
      attrs: {
        value: "Avance sur bon de commande",
        selected: ""
      }
    }, [_vm._v("\n                                            Avance sur bon de commande\n                                        ")])])]), _vm._v(" "), _c("div", {
      staticClass: "col-2"
    }, [_c("currency-input", {
      attrs: {
        value: nouvelle_ligne.montant_nouvel_ligne
      },
      on: {
        input: function input($event) {
          return _vm.setNouvelleLigneVars($event, index, "montant_nouvel_ligne");
        }
      }
    })], 1), _vm._v(" "), _c("div", {
      staticClass: "col-2"
    }, [_c("currency-input", {
      attrs: {
        value: nouvelle_ligne.proposition_dcpr
      },
      on: {
        input: function input($event) {
          return _vm.setNouvelleLigneVars($event, index, "proposition_dcpr");
        }
      }
    })], 1), _vm._v(" "), _c("div", {
      staticClass: "col-2"
    }, [_c("currency-input", {
      staticClass: "form-control",
      on: {
        input: function input($event) {
          return _vm.setNouvelleLigneVars($event, index, "echeance_duree_tirage");
        }
      },
      model: {
        value: nouvelle_ligne.echeance_duree_tirage,
        callback: function callback($$v) {
          _vm.$set(nouvelle_ligne, "echeance_duree_tirage", $$v);
        },
        expression: "\n                                            nouvelle_ligne.echeance_duree_tirage\n                                        "
      }
    })], 1), _vm._v(" "), _c("div", {
      staticClass: "col-1"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: nouvelle_ligne.nouvelle_ligne_taux,
        expression: "\n                                            nouvelle_ligne.nouvelle_ligne_taux\n                                        "
      }],
      staticClass: "form-control",
      attrs: {
        type: "number",
        value: ""
      },
      domProps: {
        value: nouvelle_ligne.nouvelle_ligne_taux
      },
      on: {
        input: [function ($event) {
          if ($event.target.composing) return;
          _vm.$set(nouvelle_ligne, "nouvelle_ligne_taux", $event.target.value);
        }, function ($event) {
          return _vm.setNouvelleLigneVars($event, index, "nouvelle_ligne_taux");
        }]
      }
    })]), _vm._v(" "), index == 0 ? _c("div", {
      staticClass: "col-1"
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
        border: "none"
      },
      attrs: {
        type: "button",
        title: "Ajouter un nouvel article"
      },
      on: {
        click: function click($event) {
          return _vm.addMore2(index);
        }
      }
    }, [_c("plus-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1)]) : _c("div", {
      staticClass: "col-1",
      staticStyle: {
        "margin-left": "0px",
        "margin-top": "5px"
      }
    }, [_c("label", {
      attrs: {
        "for": ""
      }
    }), _vm._v(" "), _c("button", {
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
        title: "Supprimer cette action"
      },
      on: {
        click: function click($event) {
          return _vm.remove2(index);
        }
      }
    }, [_c("trash-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1)])]);
  })], 2)]), _vm._v(" "), _c("div", [_c("div", {
    staticClass: "row g-1 mb-1 mt-1"
  }, [_vm._m(9), _vm._v(" "), _c("div", {
    staticClass: "col-2"
  }, [_c("currency-input", {
    attrs: {
      value: _vm.formDataToBeWatched.total_montant_nouvel_ligne,
      id: "total_montant_nouvel_ligne",
      disabled: ""
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-2"
  }, [_c("currency-input", {
    attrs: {
      value: _vm.formDataToBeWatched.total_caisse_nouvelle_ligne_proposition_dcpr,
      id: "total_caisse_nouvelle_ligne_proposition_dcpr",
      disabled: ""
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-2"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.total_caisse_nouvelle_ligne_encours,
      expression: "\n                                        formDataToBeWatched.total_caisse_nouvelle_ligne_encours\n                                    "
    }],
    staticClass: "form-control number",
    attrs: {
      value: "",
      required: "",
      type: "text",
      "data-type": "currency",
      id: "total_caisse_nouvelle_ligne_encours",
      disabled: ""
    },
    domProps: {
      value: _vm.formDataToBeWatched.total_caisse_nouvelle_ligne_encours
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "total_caisse_nouvelle_ligne_encours", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-1"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.total_caisse_nouvelle_ligne_echeance,
      expression: "\n                                        formDataToBeWatched.total_caisse_nouvelle_ligne_echeance\n                                    "
    }],
    staticClass: "form-control number",
    attrs: {
      value: "",
      required: "",
      type: "text",
      "data-type": "currency",
      id: "total_caisse_nouvelle_ligne_echeance",
      disabled: ""
    },
    domProps: {
      value: _vm.formDataToBeWatched.total_caisse_nouvelle_ligne_echeance
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "total_caisse_nouvelle_ligne_echeance", $event.target.value);
      }
    }
  })])])]), _vm._v(" "), _c("div", [_c("div", {
    staticClass: "row g-1 mt-1"
  }, [_vm._m(10), _vm._v(" "), _vm._l(_vm.cautions_nouvelles_lignes, function (caution_nouvelle_ligne, index) {
    return _c("div", {
      key: index,
      staticClass: "row g-1"
    }, [_c("div", {
      staticClass: "col-2"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: caution_nouvelle_ligne.banque,
        expression: "caution_nouvelle_ligne.banque"
      }],
      staticClass: "form-control",
      attrs: {
        required: "",
        type: "text",
        disabled: ""
      },
      domProps: {
        value: caution_nouvelle_ligne.banque
      },
      on: {
        change: _vm.handleInput,
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(caution_nouvelle_ligne, "banque", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("div", {
      staticClass: "col-2"
    }, [_c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: caution_nouvelle_ligne.cautions_nouvelles_lignes_demande_client,
        expression: "\n                                            caution_nouvelle_ligne.cautions_nouvelles_lignes_demande_client\n                                        "
      }],
      staticClass: "form-select single-select",
      attrs: {
        required: "",
        id: "caution_nouvelle_existante1"
      },
      on: {
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(caution_nouvelle_ligne, "cautions_nouvelles_lignes_demande_client", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, _vm.handleInput]
      }
    }, [_c("option", {
      attrs: {
        value: ""
      }
    }), _vm._v(" "), _c("option", {
      attrs: {
        value: "Caution de soumissission"
      }
    }, [_vm._v("\n                                            Caution de soumissission\n                                        ")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "Caution de demarrage"
      }
    }, [_vm._v("\n                                            Caution de demarrage\n                                        ")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "Caution de bonne fin"
      }
    }, [_vm._v("\n                                            Caution de bonne fin\n                                        ")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "Caution de retenue de garantie"
      }
    }, [_vm._v("\n                                            Caution de retenue de garantie\n                                        ")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "Caution d'admission temporaire"
      }
    }, [_vm._v("\n                                            Caution d'admission temporaire\n                                        ")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "Caution de garantie de paiement"
      }
    }, [_vm._v("\n                                            Caution de garantie de paiement\n                                        ")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "Obligation Cautionnée"
      }
    }, [_vm._v("\n                                            Obligation Cautionnée\n                                        ")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "Caution pour impôt contesté"
      }
    }, [_vm._v("\n                                            Caution pour impôt contesté\n                                        ")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "Aval de traites"
      }
    }, [_vm._v("\n                                            Aval de traites\n                                        ")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "Credoc Irrévocable"
      }
    }, [_vm._v("\n                                            Credoc Irrévocable\n                                        ")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "Credoc notifié"
      }
    }, [_vm._v("\n                                            Credoc notifié\n                                        ")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "Credoc confirmé"
      }
    }, [_vm._v("\n                                            Credoc confirmé\n                                        ")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "Engagement de financement"
      }
    }, [_vm._v("\n                                            Engagement de financement\n                                        ")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "LC's"
      }
    }, [_vm._v("LC's")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "SBLC"
      }
    }, [_vm._v("SBLC")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "Autres"
      }
    }, [_vm._v("Autres")])])]), _vm._v(" "), _c("div", {
      staticClass: "col-2"
    }, [_c("currency-input", {
      attrs: {
        value: caution_nouvelle_ligne.caution_nouvelle_lignes_montant
      },
      on: {
        input: function input($event) {
          return _vm.setCautionNouvelleLigneVars($event, index, "caution_nouvelle_lignes_montant");
        }
      }
    })], 1), _vm._v(" "), _c("div", {
      staticClass: "col-2"
    }, [_c("currency-input", {
      attrs: {
        value: caution_nouvelle_ligne.cautions_nouvelles_lignes_proposition_dcpr
      },
      on: {
        input: function input($event) {
          return _vm.setCautionNouvelleLigneVars($event, index, "cautions_nouvelles_lignes_proposition_dcpr");
        }
      }
    })], 1), _vm._v(" "), _c("div", {
      staticClass: "col-2"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: caution_nouvelle_ligne.cautions_nouvelles_lignes_echeance_duree_tirage,
        expression: "\n                                            caution_nouvelle_ligne.cautions_nouvelles_lignes_echeance_duree_tirage\n                                        "
      }],
      staticClass: "form-control number",
      attrs: {
        value: "",
        required: "",
        "data-type": "currency",
        id: "caution_nouvelle_existante3"
      },
      domProps: {
        value: caution_nouvelle_ligne.cautions_nouvelles_lignes_echeance_duree_tirage
      },
      on: {
        input: [function ($event) {
          if ($event.target.composing) return;
          _vm.$set(caution_nouvelle_ligne, "cautions_nouvelles_lignes_echeance_duree_tirage", $event.target.value);
        }, _vm.handleInput]
      }
    })]), _vm._v(" "), _c("div", {
      staticClass: "col-1"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: caution_nouvelle_ligne.cautions_nouvelles_lignes_taux,
        expression: "\n                                            caution_nouvelle_ligne.cautions_nouvelles_lignes_taux\n                                        "
      }],
      staticClass: "form-control number",
      attrs: {
        value: "",
        required: "",
        "data-type": "currency",
        id: "caution_nouvelle_existante4"
      },
      domProps: {
        value: caution_nouvelle_ligne.cautions_nouvelles_lignes_taux
      },
      on: {
        input: [function ($event) {
          if ($event.target.composing) return;
          _vm.$set(caution_nouvelle_ligne, "cautions_nouvelles_lignes_taux", $event.target.value);
        }, _vm.handleInput]
      }
    })]), _vm._v(" "), index == 0 ? _c("div", {
      staticClass: "col-1"
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
        border: "none"
      },
      attrs: {
        type: "button",
        title: "Ajouter un nouvel article"
      },
      on: {
        click: function click($event) {
          return _vm.addMore5(index);
        }
      }
    }, [_c("plus-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1)]) : _c("div", {
      staticClass: "col-1",
      staticStyle: {
        "margin-left": "0px",
        "margin-top": "5px"
      }
    }, [_c("label", {
      attrs: {
        "for": ""
      }
    }), _vm._v(" "), _c("button", {
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
        title: "Supprimer cette action"
      },
      on: {
        click: function click($event) {
          return _vm.remove5(index);
        }
      }
    }, [_c("trash-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1)])]);
  })], 2)]), _vm._v(" "), _c("div", [_c("div", {
    staticClass: "row g-1 mt-1"
  }, [_vm._m(11), _vm._v(" "), _c("div", {
    staticClass: "col-2"
  }, [_c("currency-input", {
    attrs: {
      value: _vm.formDataToBeWatched.total_signature_nouvelle_ligne_montant,
      id: "total_signature_nouvelle_ligne_montant",
      disabled: ""
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-2"
  }, [_c("currency-input", {
    attrs: {
      value: _vm.formDataToBeWatched.total_signature_nouvelle_ligne_autorisation,
      id: "total_signature_nouvelle_ligne_autorisation",
      disabled: ""
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-2"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.total_signature_nouvelle_ligne_encours,
      expression: "\n                                        formDataToBeWatched.total_signature_nouvelle_ligne_encours\n                                    "
    }],
    staticClass: "form-control number",
    attrs: {
      value: "",
      required: "",
      "data-type": "currency",
      id: "total_signature_nouvelle_ligne_encours",
      disabled: ""
    },
    domProps: {
      value: _vm.formDataToBeWatched.total_signature_nouvelle_ligne_encours
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "total_signature_nouvelle_ligne_encours", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-1"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.total_signature_nouvelle_ligne_echance,
      expression: "\n                                        formDataToBeWatched.total_signature_nouvelle_ligne_echance\n                                    "
    }],
    staticClass: "form-control number",
    attrs: {
      value: "",
      required: "",
      "data-type": "currency",
      id: "total_signature_nouvelle_ligne_echance",
      disabled: ""
    },
    domProps: {
      value: _vm.formDataToBeWatched.total_signature_nouvelle_ligne_echance
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "total_signature_nouvelle_ligne_echance", $event.target.value);
      }
    }
  })])])]), _vm._v(" "), _c("div", [_c("div", {
    staticClass: "row g-1 mt-1"
  }, [_vm._m(12), _vm._v(" "), _c("div", {
    staticClass: "col-2"
  }, [_c("currency-input", {
    attrs: {
      value: _vm.formDataToBeWatched.total_nouvelle_ligne_0,
      id: "total_nouvelle_ligne_0",
      disabled: ""
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-2"
  }, [_c("currency-input", {
    attrs: {
      value: _vm.formDataToBeWatched.total_nouvelle_ligne_1,
      id: "total_nouvelle_ligne_1",
      disabled: ""
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-2"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.total_nouvelle_ligne_2,
      expression: "\n                                    formDataToBeWatched.total_nouvelle_ligne_2\n                                "
    }],
    staticClass: "form-control number",
    attrs: {
      required: "",
      type: "text",
      "data-type": "currency",
      id: "total_nouvelle_ligne_2",
      disabled: ""
    },
    domProps: {
      value: _vm.formDataToBeWatched.total_nouvelle_ligne_2
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "total_nouvelle_ligne_2", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-1"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.total_nouvelle_ligne_3,
      expression: "\n                                        formDataToBeWatched.total_nouvelle_ligne_3\n                                    "
    }],
    staticClass: "form-control number",
    attrs: {
      required: "",
      type: "text",
      "data-type": "currency",
      id: "total_nouvelle_ligne_3",
      disabled: ""
    },
    domProps: {
      value: _vm.formDataToBeWatched.total_nouvelle_ligne_3
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "total_nouvelle_ligne_3", $event.target.value);
      }
    }
  })])])]), _vm._v(" "), _c("div", {
    staticClass: "mt-3"
  }, [_vm._m(13), _vm._v(" "), _c("vue-editor", {
    attrs: {
      id: "commentaires_nouvelles_lignes"
    },
    on: {
      "update-value": function updateValue($event) {
        _vm.formDataToBeWatched[$event[0]] = $event[1];
      }
    },
    model: {
      value: _vm.formDataToBeWatched.commentaires_nouvelles_lignes,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "commentaires_nouvelles_lignes", $$v);
      },
      expression: "formDataToBeWatched.commentaires_nouvelles_lignes"
    }
  })], 1)]) : _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header mb-5",
    on: {
      click: function click($event) {
        _vm.seen4 = !_vm.seen4;
      }
    }
  }, [_c("h6", {
    attrs: {
      id: "nouvelles-lignes"
    }
  }, [_vm._v("\n                            Nouvelles lignes\n                            "), _c("chevron-down-icon", {
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
  }, [_vm._v("\n                            Fermer le tableau\n                        ")])]) : _c("div", {
    staticClass: "card card-width-height"
  }, [_c("br"), _vm._v(" "), _c("div", {
    staticClass: "card-header hdc pb-0 pt-2"
  }, [_c("h3", {
    staticClass: "head",
    attrs: {
      id: "f7-head"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.tb_display_name) + " : Description et justification des lignes\n                        "), _c("chevron-down-icon", {
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
  }, [_vm._v("\n                                Instruction - " + _vm._s(_vm.tb_display_name) + " : Centrales\n                                risques - Adhésion au BIC(si applicable)\n                            ")]), _vm._v(" "), _c("button", {
    staticClass: "btn-close",
    attrs: {
      type: "button",
      "data-bs-dismiss": "modal",
      "aria-label": "Close"
    }
  })]), _vm._v(" "), _vm._m(14), _vm._v(" "), _vm._m(15)])])])]), _vm._v(" "), _c("note-modal", {
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
  return _c("div", {
    staticClass: "col-md-12 d-flex justify-content-end mt-2"
  }, [_c("div", {
    staticClass: "btn-group",
    attrs: {
      role: "group",
      "aria-label": "Basic example"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-3 pl-4"
  }), _vm._v(" "), _c("div", {
    staticClass: "col-2"
  }, [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Lignes")])]), _vm._v(" "), _c("div", {
    staticClass: "col-2"
  }, [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Autorisation")])]), _vm._v(" "), _c("div", {
    staticClass: "col-2"
  }, [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Encours")])]), _vm._v(" "), _c("div", {
    staticClass: "col-2"
  }, [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Echéance ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-5"
  }, [_c("label", {
    staticClass: "form-label mt-1",
    attrs: {
      "for": "total_par_caisse"
    }
  }, [_c("b", [_vm._v("S/Total par caisse")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-md-12 d-flex justify-content-end"
  }, [_c("div", {
    staticClass: "btn-group",
    attrs: {
      role: "group",
      "aria-label": "Basic example"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-3"
  }, [_c("label", {
    staticClass: "form-label"
  }, [_c("b", [_vm._v("Engagement signature")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-5",
    staticStyle: {
      "padding-left": "1vh"
    }
  }, [_c("label", {
    staticClass: "form-label mt-1",
    attrs: {
      "for": "total_signature"
    }
  }, [_c("b", [_vm._v("S/Total par signature")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-5"
  }, [_c("label", {
    staticClass: "form-label mt-1",
    attrs: {
      "for": "total_ligne_existante"
    }
  }, [_c("b", [_vm._v("Total")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    attrs: {
      "for": "commentaires_lignes_existantes"
    }
  }, [_c("b", [_vm._v("Commentaires sur les lignes existantes")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-2 pl-4"
  }, [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Banques")])]), _vm._v(" "), _c("div", {
    staticClass: "col-2 pl-4"
  }, [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Lignes")])]), _vm._v(" "), _c("div", {
    staticClass: "col-2"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      title: "Montant"
    }
  }, [_vm._v("Montant")])]), _vm._v(" "), _c("div", {
    staticClass: "col-2"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      title: "Proposition DCEI"
    }
  }, [_vm._v("Prop ")])]), _vm._v(" "), _c("div", {
    staticClass: "col-2"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      title: "Echéance/Durée tirage"
    }
  }, [_vm._v("Ech/Durée tirage")])]), _vm._v(" "), _c("div", {
    staticClass: "col-1"
  }, [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Taux ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-4",
    staticStyle: {
      "padding-left": "1vh"
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
  return _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-3"
  }, [_c("label", {
    staticClass: "form-label"
  }, [_c("b", [_vm._v("Engagement signature")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-4",
    staticStyle: {
      padding: "0px"
    }
  }, [_c("label", {
    staticClass: "form-label mt-1",
    attrs: {
      "for": "total_signature"
    }
  }, [_c("b", [_vm._v("S/Total par signature")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-4"
  }, [_c("label", {
    staticClass: "form-label mt-1",
    attrs: {
      "for": "total_ligne_existante"
    }
  }, [_c("b", [_vm._v("Total")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    attrs: {
      "for": "commentaires_nouvelles_lignes"
    }
  }, [_c("b", [_vm._v("Commentaires sur les nouvelles lignes")])]);
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
  }, [_vm._v("\n                                Fermer\n                            ")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/nsia/produits/avance/avance_bon_commande/DCEI-FAC4-OLD.vue?vue&type=style&index=0&id=098ccda7&lang=css&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/nsia/produits/avance/avance_bon_commande/DCEI-FAC4-OLD.vue?vue&type=style&index=0&id=098ccda7&lang=css&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\ninput[data-v-098ccda7] {\r\n    /*border: 1px solid red;*/\n}\n*[data-v-098ccda7] {\r\n    font-family: \"Google sans\";\n}\nth[data-v-098ccda7] {\r\n    font-size: 12px;\n}\nlabel[data-v-098ccda7] {\r\n    height: 10px;\r\n    font-size: 13px;\n}\ninput[data-v-098ccda7],\r\nselect[data-v-098ccda7] {\r\n    height: 35px;\r\n    border-color: #34495e;\r\n    color: #57606f;\r\n    font-size: 13px;\r\n    font-weight: bold;\n}\n.card-width-height[data-v-098ccda7] {\r\n    width: 100%;\r\n    height: 100%;\n}\n.head[data-v-098ccda7] {\r\n    color: #f1f2f6;\r\n    font-size: 22px;\n}\n.hdc[data-v-098ccda7] {\r\n    background-color: #57606f;\n}\r\n\r\n/* Ajouter note */\n.badge-sm[data-v-098ccda7] {\r\n    display: inline-block;\r\n    width: 15px;\r\n    height: 15px;\r\n    background: rgba(255, 0, 0, 0.882);\r\n    color: white;\r\n    font-size: 12px;\r\n    font-weight: 500;\r\n    border-radius: 100%;\r\n    position: absolute;\r\n    top: -20%;\r\n    left: 55%;\r\n    text-align: center;\n}\n.relook-header[data-v-098ccda7] {\r\n    color: #000;\r\n    background-color: #f4f3f3;\r\n    padding: 5px;\r\n    border-bottom: 1px solid #b6b8bb;\n}\n.bg-relooker[data-v-098ccda7] {\r\n    background-color: #2c3e50;\r\n    color: white;\n}\n.ligne_existante_banque_hypotheques input[data-v-098ccda7], .ligne_existante_banque_hypotheques select[data-v-098ccda7], .ligne_existante_banque_gages input[data-v-098ccda7], .ligne_existante_banque_gages select[data-v-098ccda7] {\r\n    min-width: 100px;\n}\r\n\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/nsia/produits/avance/avance_bon_commande/DCEI-FAC4-OLD.vue?vue&type=style&index=0&id=098ccda7&lang=css&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/nsia/produits/avance/avance_bon_commande/DCEI-FAC4-OLD.vue?vue&type=style&index=0&id=098ccda7&lang=css&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DCEI_FAC4_OLD_vue_vue_type_style_index_0_id_098ccda7_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DCEI-FAC4-OLD.vue?vue&type=style&index=0&id=098ccda7&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/nsia/produits/avance/avance_bon_commande/DCEI-FAC4-OLD.vue?vue&type=style&index=0&id=098ccda7&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DCEI_FAC4_OLD_vue_vue_type_style_index_0_id_098ccda7_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DCEI_FAC4_OLD_vue_vue_type_style_index_0_id_098ccda7_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/forms/nsia/produits/avance/avance_bon_commande/DCEI-FAC4-OLD.vue":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/forms/nsia/produits/avance/avance_bon_commande/DCEI-FAC4-OLD.vue ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DCEI_FAC4_OLD_vue_vue_type_template_id_098ccda7_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DCEI-FAC4-OLD.vue?vue&type=template&id=098ccda7&scoped=true */ "./resources/js/components/forms/nsia/produits/avance/avance_bon_commande/DCEI-FAC4-OLD.vue?vue&type=template&id=098ccda7&scoped=true");
/* harmony import */ var _DCEI_FAC4_OLD_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DCEI-FAC4-OLD.vue?vue&type=script&lang=js */ "./resources/js/components/forms/nsia/produits/avance/avance_bon_commande/DCEI-FAC4-OLD.vue?vue&type=script&lang=js");
/* harmony import */ var _DCEI_FAC4_OLD_vue_vue_type_style_index_0_id_098ccda7_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DCEI-FAC4-OLD.vue?vue&type=style&index=0&id=098ccda7&lang=css&scoped=true */ "./resources/js/components/forms/nsia/produits/avance/avance_bon_commande/DCEI-FAC4-OLD.vue?vue&type=style&index=0&id=098ccda7&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DCEI_FAC4_OLD_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _DCEI_FAC4_OLD_vue_vue_type_template_id_098ccda7_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _DCEI_FAC4_OLD_vue_vue_type_template_id_098ccda7_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "098ccda7",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/forms/nsia/produits/avance/avance_bon_commande/DCEI-FAC4-OLD.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/forms/nsia/produits/avance/avance_bon_commande/DCEI-FAC4-OLD.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/components/forms/nsia/produits/avance/avance_bon_commande/DCEI-FAC4-OLD.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DCEI_FAC4_OLD_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DCEI-FAC4-OLD.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/nsia/produits/avance/avance_bon_commande/DCEI-FAC4-OLD.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DCEI_FAC4_OLD_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/forms/nsia/produits/avance/avance_bon_commande/DCEI-FAC4-OLD.vue?vue&type=style&index=0&id=098ccda7&lang=css&scoped=true":
/*!**********************************************************************************************************************************************************!*\
  !*** ./resources/js/components/forms/nsia/produits/avance/avance_bon_commande/DCEI-FAC4-OLD.vue?vue&type=style&index=0&id=098ccda7&lang=css&scoped=true ***!
  \**********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DCEI_FAC4_OLD_vue_vue_type_style_index_0_id_098ccda7_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DCEI-FAC4-OLD.vue?vue&type=style&index=0&id=098ccda7&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/nsia/produits/avance/avance_bon_commande/DCEI-FAC4-OLD.vue?vue&type=style&index=0&id=098ccda7&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/forms/nsia/produits/avance/avance_bon_commande/DCEI-FAC4-OLD.vue?vue&type=template&id=098ccda7&scoped=true":
/*!********************************************************************************************************************************************!*\
  !*** ./resources/js/components/forms/nsia/produits/avance/avance_bon_commande/DCEI-FAC4-OLD.vue?vue&type=template&id=098ccda7&scoped=true ***!
  \********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DCEI_FAC4_OLD_vue_vue_type_template_id_098ccda7_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DCEI_FAC4_OLD_vue_vue_type_template_id_098ccda7_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DCEI_FAC4_OLD_vue_vue_type_template_id_098ccda7_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DCEI-FAC4-OLD.vue?vue&type=template&id=098ccda7&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/nsia/produits/avance/avance_bon_commande/DCEI-FAC4-OLD.vue?vue&type=template&id=098ccda7&scoped=true");


/***/ })

}]);