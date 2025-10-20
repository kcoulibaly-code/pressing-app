"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_shared_afg_stamp_StampApprobation_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/stamp/StampApprobation.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/stamp/StampApprobation.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }


var _ENTITY = "AFG";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "StampApprobation",
  props: {
    dossier_credit: Object,
    recouvrement_decision_logs: Array
  },
  data: function data() {
    var _this$dossier_credit, _this$dossier_credit2;
    return {
      entity: _ENTITY,
      ebapisHost: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__["default"].host,
      outcome_msg: "",
      isLoading: false,
      affectationLogs: (_this$dossier_credit = this.dossier_credit) === null || _this$dossier_credit === void 0 ? void 0 : _this$dossier_credit.affectation_logs,
      currentIndex: 0,
      MAX_COMMENT_VISIBLE: 200,
      isOpen: true,
      live_instance_tracker: (_this$dossier_credit2 = this.dossier_credit) === null || _this$dossier_credit2 === void 0 ? void 0 : _this$dossier_credit2.live_instance_tracker,
      amendementsListe: ["AJOURNEMENT_DE_DOSSIER", "AFFECTATION_DE_DOSSIER", "FICHE_DE_LECTURE", "FICHE_DE_SUIVI", "FICHE_DE_COMMENTAIRE"],
      amendementsUser: []
    };
  },
  mounted: function mounted() {
    // EventBus.$on("printstamps", (divName) => {
    //       this.launchPrintView(divName)
    //   })
  },
  computed: {
    recouvrement_final_outcome: function recouvrement_final_outcome() {
      var _this$dossier_credit3;
      return (_this$dossier_credit3 = this.dossier_credit) === null || _this$dossier_credit3 === void 0 ? void 0 : _this$dossier_credit3.recouvrement_final_outcome;
    }
  },
  methods: {
    launchPrintView: function launchPrintView(divName) {
      var printContents = document.getElementById(divName).innerHTML;
      var originalContents = document.body.innerHTML;
      document.body.innerHTML = printContents;
      document.body.style.backgroundColor = "white";
      document.body.style.height = "auto";
      document.body.style.width = "auto";
      document.body.style.margin = "auto";
      document.body.style.printColorAdjust = "exact";
      document.body.style.webkitPrintColorAdjust = "exact";
      window.print();
      document.body.innerHTML = originalContents;
      location.reload();
    },
    filterSerJuridDecisionLog: function filterSerJuridDecisionLog(decision_logs) {
      var last_key = null;
      decision_logs.forEach(function (el, index) {
        el.text_decision = null;
        if (el.outcome === 2) {
          el.text_decision = "Avis Favorable";
        }
        if (el.outcome === 3) {
          el.text_decision = "Avis Défavorable";
        }
        if (el.giver_role_sigle == "GG_DAJC") {
          if (el.outcome === 2) {
            el.text_decision = "Encodage effectué";
          }
          if (el.outcome === 3) {
            el.text_decision = "Encodage non effectué";
          }
        }
        if (el.giver_role_sigle == "CS_DAJC") {
          if ([1, 2].includes(el.outcome)) {
            el.text_decision = "Encodage vérifié";
          }
          if (el.outcome === 3) {
            el.text_decision = "Encodage non vérifié";
          }
        }
        if (["DR_DAJC", "CD_DAJC"].includes(el.giver_role_sigle)) {
          if ([1, 2].includes(el.outcome)) {
            el.text_decision = "Accord pour mise en place";
          }
          if ([-1, 3].includes(el.outcome)) {
            el.text_decision = "Refus";
          }
        }
        if (last_key && decision_logs[last_key]) {
          var last_el = decision_logs[last_key];
          if (last_el.giver_role_sigle == "CS_DAJC") {
            if (last_el.outcome === 2) {
              last_el.text_decision = "Encodage vérifié";
            }
            if (last_el.outcome === 3) {
              last_el.text_decision = "Encodage non vérifié";
            }
          }
          decision_logs[last_key] = last_el;
        }
        last_key = index;
      });
      return decision_logs;
    },
    filterNotifAccordDecisionLog: function filterNotifAccordDecisionLog(decision_logs) {
      decision_logs.forEach(function (el, index) {
        el.text_decision = null;
        if (["ARC", "CAE", "CC"].includes(el.giver_role_sigle)) {
          el.text_decision = "Soumission de la notification";
        }
        if (["CS_ACEI", "CS_ACP"].includes(el.giver_role_sigle)) {
          if ([1, 2].includes(el.outcome)) {
            el.text_decision = "Notification d'accord";
          }
          if ([-1, 3].includes(el.outcome)) {
            el.text_decision = "Notification de refus";
          }
        }
        if (["DCEI", "DCP"].includes(el.giver_role_sigle)) {
          if ([1, 2].includes(el.outcome)) {
            el.text_decision = "Accord de notification";
          }
          if ([-1, 3].includes(el.outcome)) {
            el.text_decision = "Refus";
          }
        }
      });
      return decision_logs;
    },
    getTauxPropose: function getTauxPropose(data) {
      var _data$taux_pret, _this$dossier_credit4;
      var taux = (_data$taux_pret = data === null || data === void 0 ? void 0 : data.taux_pret) !== null && _data$taux_pret !== void 0 ? _data$taux_pret : "";
      if (((_this$dossier_credit4 = this.dossier_credit) === null || _this$dossier_credit4 === void 0 ? void 0 : _this$dossier_credit4.categorie_client) == "Retail") {
        if (["", null, undefined].includes(taux)) {
          var credVal = this.determineCredPubTablesFromDosCred(this.dossier_credit);
          if (credVal[0]) {
            var _this$dossier_credit$, _this$dossier_credit5;
            var credpub0 = credVal[1];
            taux = (_this$dossier_credit$ = (_this$dossier_credit5 = this.dossier_credit) === null || _this$dossier_credit5 === void 0 || (_this$dossier_credit5 = _this$dossier_credit5[credpub0]) === null || _this$dossier_credit5 === void 0 ? void 0 : _this$dossier_credit5.taux) !== null && _this$dossier_credit$ !== void 0 ? _this$dossier_credit$ : "";
          }
        }
      }
      return taux;
    },
    getObjectLogLimited: function getObjectLogLimited(obj, message_key) {
      if (!["", undefined, null].includes(obj === null || obj === void 0 ? void 0 : obj[message_key])) {
        var _obj$message_key, _obj$message_key2;
        if (obj[message_key + "_max"] == undefined) {
          this.$set(obj, message_key + "_max", this.MAX_COMMENT_VISIBLE);
        }
        var max_ = obj === null || obj === void 0 || (_obj$message_key = obj[message_key]) === null || _obj$message_key === void 0 ? void 0 : _obj$message_key.length;
        var max = obj[message_key + "_max"];
        if (max_ - max <= 0) {
          return obj === null || obj === void 0 ? void 0 : obj[message_key];
        }
        this.$set(obj, "show_button", true);
        this.$set(obj, message_key + "_limited", (obj === null || obj === void 0 || (_obj$message_key2 = obj[message_key]) === null || _obj$message_key2 === void 0 ? void 0 : _obj$message_key2.substring(0, max)) + " ... ");
        return obj[message_key + "_limited"] + " ... ";
      }
      return "";
    },
    updatedObjectLogLimited: function updatedObjectLogLimited(obj, message_key, max) {
      var hashtag = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
      if (!["", undefined, null].includes(obj === null || obj === void 0 ? void 0 : obj[message_key])) {
        var _obj$message_key3;
        if (obj[message_key + "_max"] == undefined) {
          this.$set(obj, message_key + "_max", this.MAX_COMMENT_VISIBLE);
        } else {
          if (max == 0) {
            this.$set(obj, message_key + "_max", this.MAX_COMMENT_VISIBLE);
          } else {
            this.$set(obj, message_key + "_max", obj[message_key + "_max"] + max);
          }
        }
        var max_ = obj === null || obj === void 0 || (_obj$message_key3 = obj[message_key]) === null || _obj$message_key3 === void 0 ? void 0 : _obj$message_key3.length;
        max = obj[message_key + "_max"];
        if (max_ - max <= 0) {
          delete obj[message_key + "_limited"];
        } else {
          var _obj$message_key4;
          this.$set(obj, message_key + "_limited", (obj === null || obj === void 0 || (_obj$message_key4 = obj[message_key]) === null || _obj$message_key4 === void 0 ? void 0 : _obj$message_key4.substring(0, max)) + " ... ");
        }
        if (hashtag != null) {
          var url = window.location.href.split("#")[0];
          window.location.href = url + "#" + hashtag;
        }
      }
    },
    filterSerAdminCreditDecisionLog: function filterSerAdminCreditDecisionLog(decision_logs) {
      var last_key = null;
      decision_logs.forEach(function (el, index) {
        el.text_decision = null;
        if (el.outcome === 2) {
          el.text_decision = "Avis Favorable";
        }
        if (el.outcome === 3) {
          el.text_decision = "Avis Défavorable";
        }
        if (el.giver_role_sigle == "ACC_GAC") {
          if (el.outcome === 2) {
            el.text_decision = "Saisie effectuée";
          }
          if (el.outcome === 3) {
            el.text_decision = "Saisie non effectuée";
          }
        }
        if (el.giver_role_sigle == "CS_GAC") {
          if ([1, 2].includes(el.outcome)) {
            el.text_decision = "Mise en place vérifiée";
          }
          if (el.outcome === 3) {
            el.text_decision = "Mise en place non vérifiée";
          }
        }
        if (["DR_GAC", "CD_GAC"].includes(el.giver_role_sigle)) {
          if ([1, 2].includes(el.outcome)) {
            el.text_decision = "Mise en place effectuée";
          }
          if ([-1, 3].includes(el.outcome)) {
            el.text_decision = "Refus";
          }
        }
        if (last_key && decision_logs[last_key]) {
          var last_el = decision_logs[last_key];
          if (last_el.giver_role_sigle == "CS_GAC") {
            if (last_el.outcome === 2) {
              last_el.text_decision = "Mise en place vérifiée";
            }
            if (last_el.outcome === 3) {
              last_el.text_decision = "Mise en place non vérifiée";
            }
          }
          decision_logs[last_key] = last_el;
        }
        last_key = index;
      });
      return decision_logs;
    },
    filterControleSerAdminCreditDecisionLog: function filterControleSerAdminCreditDecisionLog(decision_logs) {
      var last_key = null;
      decision_logs.forEach(function (el, index) {
        el.text_decision = null;
        if (el.outcome === 2) {
          el.text_decision = "Avis Favorable";
        }
        if (el.outcome === 3) {
          el.text_decision = "Avis Défavorable";
        }
        if (el.giver_role_sigle == "ACC_GAC") {
          if (el.outcome === 2) {
            el.text_decision = "Contrôle à J+1 effectué";
          }
          if (el.outcome === 3) {
            el.text_decision = "Contrôle non effectué";
          }
        }
        if (el.giver_role_sigle == "CS_GAC") {
          if ([1, 2].includes(el.outcome)) {
            el.text_decision = "Contrôle vérifié";
          }
          if (el.outcome === 3) {
            el.text_decision = "Contrôle non vérifié";
          }
        }
        if (["DR_GAC", "CD_GAC"].includes(el.giver_role_sigle)) {
          if ([1, 2].includes(el.outcome)) {
            el.text_decision = "Contrôle à J+1 effectué";
          }
          if ([-1, 3].includes(el.outcome)) {
            el.text_decision = "Refus";
          }
        }
        if (last_key && decision_logs[last_key]) {
          var last_el = decision_logs[last_key];
          if (last_el.giver_role_sigle == "CS_GAC") {
            if (last_el.outcome === 2) {
              last_el.text_decision = "Contrôle vérifié";
            }
            if (last_el.outcome === 3) {
              last_el.text_decision = "Contrôle non vérifié";
            }
          }
          decision_logs[last_key] = last_el;
        }
        last_key = index;
      });
      return decision_logs;
    },
    toggleAccordion: function toggleAccordion() {
      this.isOpen = !this.isOpen;
    },
    elapsedTimeBetweenDates: function elapsedTimeBetweenDates(startDate, endDate) {
      // Convertir les chaînes de caractères en objets Date
      var start = new Date(startDate);
      var end = new Date(endDate);

      // Vérifier si les dates passées sont valides
      if (isNaN(start.getTime()) || isNaN(end.getTime())) {
        return "Date(s) invalide(s).";
      }

      // Calculer la différence en millisecondes
      var diff = end - start;
      if (diff < 0) {
        return "La date de fin est antérieure à la date de début.";
      }

      // Convertir la différence en jours, heures, minutes et secondes
      var msInSecond = 1000;
      var msInMinute = msInSecond * 60;
      var msInHour = msInMinute * 60;
      var msInDay = msInHour * 24;
      var days = Math.floor(diff / msInDay);
      diff = diff % msInDay;
      var hours = Math.floor(diff / msInHour);
      diff = diff % msInHour;
      var minutes = Math.floor(diff / msInMinute);
      diff = diff % msInMinute;
      var seconds = Math.floor(diff / msInSecond);
      return {
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
      };
    },
    displayTimeData: function displayTimeData() {
      var _this$live_instance_t,
        _this = this;
      var userTimeData = {};
      if ((_this$live_instance_t = this.live_instance_tracker) !== null && _this$live_instance_t !== void 0 && _this$live_instance_t.tracker_logs) {
        var _this$live_instance_t2;
        (_this$live_instance_t2 = this.live_instance_tracker) === null || _this$live_instance_t2 === void 0 || _this$live_instance_t2.tracker_logs.forEach(function (log) {
          var _log$who_currently_ha;
          var userId = (_log$who_currently_ha = log.who_currently_has_it) === null || _log$who_currently_ha === void 0 ? void 0 : _log$who_currently_ha.user_id;
          if (!userTimeData[userId]) {
            userTimeData[userId] = {
              user_id: userId,
              deadline_with_amendments: 0,
              amendments: 0,
              deadline_without_amendments: 0,
              date_without_amendments: 0
            };
          }

          // Date de reception du dossier
          var sinceWhenHasIt = new Date(log.since_when_has_it);

          // Date de fin de tache
          var sinceWhenDidHeNotHaveIt = new Date(log.since_when_did_he_not_have_it);

          // Calculer la différence de temps entre la date de fin de tache et la date de reception du dossier
          var timeDifference = sinceWhenDidHeNotHaveIt - sinceWhenHasIt;
          userTimeData[userId].deadline_without_amendments += timeDifference;
          userTimeData[userId].deadline_with_amendments += timeDifference;
          userTimeData[userId].date_without_amendments = log.since_when_did_he_not_have_it;

          // si des amendements existent
          if (_this.amendementsListe.includes(log.why_has_it.event_name)) {
            userTimeData[userId].amendments += 1;
            userTimeData[userId].deadline_with_amendments += timeDifference;
          }
        });
      }
      return Object.values(userTimeData);
    },
    formatTime: function formatTime(time) {
      var totalSeconds = Math.floor(time / 1000);
      var hours = Math.floor(totalSeconds / 3600);
      var minutes = Math.floor(totalSeconds % 3600 / 60);
      var seconds = totalSeconds % 60;
      return "".concat(hours, "h ").concat(minutes, "m ").concat(seconds, "s");
    },
    addTimeToDate: function addTimeToDate(dateStr, milliseconds) {
      // Split the date and time components
      var _dateStr$split = dateStr.split(" "),
        _dateStr$split2 = _slicedToArray(_dateStr$split, 2),
        datePart = _dateStr$split2[0],
        timePart = _dateStr$split2[1];
      var _datePart$split$map = datePart.split("-").map(Number),
        _datePart$split$map2 = _slicedToArray(_datePart$split$map, 3),
        day = _datePart$split$map2[0],
        month = _datePart$split$map2[1],
        year = _datePart$split$map2[2];
      var _timePart$split$map = timePart.split(":").map(Number),
        _timePart$split$map2 = _slicedToArray(_timePart$split$map, 3),
        hours = _timePart$split$map2[0],
        minutes = _timePart$split$map2[1],
        seconds = _timePart$split$map2[2];

      // Create a new Date object using the extracted components
      var formattedDate = new Date(year, month - 1, day, hours, minutes, seconds);

      // Add the specified milliseconds to the Date object
      var newTimestamp = formattedDate.getTime() + milliseconds;

      // Return the new Date object
      var newDate = new Date(newTimestamp);

      // Format the new Date object to 'dd-MM-yyyy HH:mm:ss'
      var formattedNewDate = this.formatDate(newDate);
      return formattedNewDate;
    },
    formatDate: function formatDate(date) {
      var day = String(date.getDate()).padStart(2, "0");
      var month = String(date.getMonth() + 1).padStart(2, "0");
      var year = date.getFullYear();
      var hours = String(date.getHours()).padStart(2, "0");
      var minutes = String(date.getMinutes()).padStart(2, "0");
      var seconds = String(date.getSeconds()).padStart(2, "0");
      return "".concat(day, "-").concat(month, "-").concat(year, " ").concat(hours, ":").concat(minutes, ":").concat(seconds);
    },
    openamendementsmodal: function openamendementsmodal(userId) {
      this.getAmendementsByUser(userId);
      this.$modal.show("amendements");
    },
    getAmendementsByUser: function getAmendementsByUser(userId) {
      var _this$live_instance_t3,
        _this2 = this;
      this.amendementsUser = (_this$live_instance_t3 = this.live_instance_tracker) === null || _this$live_instance_t3 === void 0 ? void 0 : _this$live_instance_t3.tracker_logs.filter(function (log) {
        return log.who_currently_has_it.user_id === userId && _this2.amendementsListe.includes(log.why_has_it.event_name);
      });
      return this.amendementsUser;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/stamp/StampApprobation.vue?vue&type=template&id=22440916&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/stamp/StampApprobation.vue?vue&type=template&id=22440916&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$dossier_credit, _vm$dossier_credit2;
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "table-responsive"
  }, [_c("div", {
    staticClass: "head-analyse-financiere relative",
    staticStyle: {
      "text-align": "center"
    }
  }, [_vm._v("\n    PRÉREQUIS D’APPROBATION\n        "), _c("div", {
    staticClass: "icofont icofont-printer cursor-pointer absolute",
    staticStyle: {
      top: "25px",
      right: "30px"
    },
    attrs: {
      title: "Imprimer les dossiers"
    },
    on: {
      click: function click($event) {
        return _vm.launchPrintView("print-stamps");
      }
    }
  })]), _vm._v(" "), _c("hr", {
    staticStyle: {
      color: "#2980b9",
      "font-weight": "bold"
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(0), _vm._v(" "), _c("tbody", _vm._l((_vm$dossier_credit = _vm.dossier_credit) === null || _vm$dossier_credit === void 0 || (_vm$dossier_credit = _vm$dossier_credit.cred_pub_tb_999) === null || _vm$dossier_credit === void 0 ? void 0 : _vm$dossier_credit.condition_approbations, function (el, index) {
    return _c("tr", {
      key: index
    }, [_c("td", [(el === null || el === void 0 ? void 0 : el.new_line) == true ? _c("input", {
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
      staticClass: "fw-bold"
    }, [_vm._v(_vm._s(el.name))])]), _vm._v(" "), _c("td", [_c("div", {
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
        disabled: "",
        value: "Oui",
        id: "oui" + index
      },
      domProps: {
        checked: el.value == "Oui"
      }
    })])]), _vm._v(" "), _c("td", [_c("div", {
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
        disabled: "",
        value: "Non",
        id: "non" + index
      },
      domProps: {
        checked: el.value == "Non"
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
        disabled: "",
        value: "Non applicable",
        id: "non_applicable" + index
      },
      domProps: {
        checked: el.value == "Non applicable"
      }
    })])]), _vm._v(" "), _c("td", [_c("span", {
      domProps: {
        innerHTML: _vm._s(el.comment)
      }
    })])]);
  }), 0)])])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "col-12 mt-1"
  }, [_c("P", [_c("b", [_c("u", [_vm._v("Commentaire")])])]), _vm._v(" "), _c("span", {
    domProps: {
      innerHTML: _vm._s((_vm$dossier_credit2 = _vm.dossier_credit) === null || _vm$dossier_credit2 === void 0 || (_vm$dossier_credit2 = _vm$dossier_credit2.cred_pub_tb_999) === null || _vm$dossier_credit2 === void 0 ? void 0 : _vm$dossier_credit2.commentaire)
    }
  })], 1)])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", {
    staticClass: "text-center"
  }, [_c("td", {
    staticClass: "th vertical-middle fw-bold"
  }, [_c("label", [_vm._v("LIBELLE")])]), _vm._v(" "), _c("td", {
    staticClass: "th vertical-middle fw-bold"
  }, [_c("label", [_vm._v("OUI")])]), _vm._v(" "), _c("td", {
    staticClass: "th vertical-middle fw-bold"
  }, [_c("label", [_vm._v("NON")])]), _vm._v(" "), _c("td", {
    staticClass: "th vertical-middle fw-bold"
  }, [_c("label", [_vm._v("NON APPLICABLE")])]), _vm._v(" "), _c("td", {
    staticClass: "th vertical-middle fw-bold"
  }, [_c("label", [_vm._v("COMMENTAIRE")])])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/stamp/StampApprobation.vue?vue&type=style&index=0&id=22440916&lang=css&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/stamp/StampApprobation.vue?vue&type=style&index=0&id=22440916&lang=css&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.head-analyse-financiere[data-v-22440916] {\r\n    margin-top: 10px;\r\n    padding: 16px;\r\n    border: 2px solid;\r\n    font-weight: bold;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    background: rgb(215, 210, 210);\n}\n.stamp[data-v-22440916] {\r\n    transform: rotate(-4deg);\r\n    color: #3498db;\r\n    font-size: 1.5rem;\r\n    font-weight: 700;\r\n    border: 0.25rem solid #3498db;\r\n    display: inline-block;\r\n    padding: 0.25rem 1rem;\r\n    margin: 1rem auto;\r\n    text-transform: uppercase;\r\n    text-align: center;\r\n    border-radius: 1rem;\r\n    font-family: \"Courier\";\r\n    -webkit-mask-image: url(\"/images/grunge.png\");\r\n    -webkit-mask-size: 944px 604px;\r\n    mix-blend-mode: multiply;\r\n    /* float: right; */\r\n    /*\r\n    position: relative; */\r\n    /* top: 20vh;\r\n    right: -25vh; */\n}\n.is-nope[data-v-22440916] {\r\n    color: #d23;\r\n    border: 0.5rem double #d23;\r\n    transform: rotate(3deg);\r\n    -webkit-mask-position: 2rem 3rem;\r\n    font-size: 1.5rem;\n}\n.is-approved[data-v-22440916] {\r\n    color: #0a9928;\r\n    border: 0.5rem solid #0a9928;\r\n    -webkit-mask-position: 13rem 6rem;\r\n    transform: rotate(-4deg);\r\n    border-radius: 0;\n}\n.avis-fav[data-v-22440916] {\r\n    color: #2ecc71;\r\n    border: 1rem double #2ecc71;\r\n    transform: rotate(1deg);\r\n    font-size: 1.2rem;\r\n    font-family: \"Open sans\", Helvetica, Arial, sans-serif;\r\n    border-radius: 0;\r\n    padding: 0.5rem;\n}\n.avis-nonfav[data-v-22440916] {\r\n    color: #e74c3c;\r\n    border: 1rem double #e74c3c;\r\n    transform: rotate(1deg);\r\n    font-size: 1.2rem;\r\n    font-family: \"Open sans\", Helvetica, Arial, sans-serif;\r\n    border-radius: 0;\r\n    padding: 0.5rem;\n}\n.arbitrage[data-v-22440916] {\r\n    color: #c1ff09;\r\n    border: 0.5rem solid #d5ff18;\r\n    -webkit-mask-position: 13rem 6rem;\r\n    transform: rotate(-4deg);\r\n    border-radius: 0;\n}\n.tb[data-v-22440916] {\r\n    background-color: #ecf0f1;\r\n    padding: 10px;\r\n    border-radius: 3px;\r\n    /* box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22); */\r\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;\n}\n.is-nope2[data-v-22440916] {\r\n    color: #e67e22;\r\n    border: 0.5rem double #e67e22;\r\n    transform: rotate(3deg);\r\n    -webkit-mask-position: 2rem 3rem;\r\n    font-size: 1.5rem;\n}\n.is-nope3[data-v-22440916] {\r\n    color: #8e44ad;\r\n    border: 0.5rem double #8e44ad;\r\n    transform: rotate(3deg);\r\n    -webkit-mask-position: 2rem 3rem;\r\n    font-size: 1.5rem;\n}\n.is-nope4[data-v-22440916] {\r\n    color: #a7d403;\r\n    border: 0.5rem double #a7d403;\r\n    transform: rotate(3deg);\r\n    -webkit-mask-position: 2rem 3rem;\r\n    font-size: 1.5rem;\n}\ndiv.box.restructure[data-v-22440916]:after {\r\n    content: \"CREDIT RESTRUCTURE\";\r\n    position: absolute;\r\n    top: 30px;\r\n    left: 303px;\r\n    z-index: 1;\r\n    font-family: Arial, sans-serif; /* Safari old -45*/ /* Firefox old -45*/ /* IE old -45*/ /* Opera old -45*/\r\n    transform: rotate(0deg);\r\n    font-size: 30px;\r\n    color: #3498db;\r\n    background: #fff;\r\n    border: solid 2px #3498db;\r\n    padding: 3px;\r\n    border-radius: 5px;\r\n    zoom: 1;\r\n    filter: alpha(opacity=20);\r\n    opacity: 0.3;\r\n    -webkit-text-shadow: 0 0 5px #3498db;\r\n    text-shadow: 0 0 5px #3498db;\r\n    box-shadow: 0 0 5px #3498db;\n}\ndiv.box.radie[data-v-22440916]:after {\r\n    content: \"CREDIT RADIE\";\r\n    position: absolute;\r\n    top: 71px;\r\n    left: -12px;\r\n    z-index: 1;\r\n    font-family: Arial, sans-serif; /* Safari */ /* Firefox */ /* IE */ /* Opera */\r\n    transform: rotate(-45deg);\r\n    font-size: 30px;\r\n    color: #3498db;\r\n    background: #fff;\r\n    border: solid 2px #3498db;\r\n    padding: 3px;\r\n    border-radius: 5px;\r\n    zoom: 1;\r\n    filter: alpha(opacity=20);\r\n    opacity: 0.3;\r\n    -webkit-text-shadow: 0 0 5px #3498db;\r\n    text-shadow: 0 0 5px #3498db;\r\n    box-shadow: 0 0 5px #3498db;\n}\ndiv.box.recouvrerR[data-v-22440916]:after {\r\n    content: \"CREDIT RECOUVRE\";\r\n    position: absolute;\r\n    top: 30px;\r\n    left: 303px;\r\n    z-index: 1;\r\n    font-family: Arial, sans-serif; /* Safari old -45*/ /* Firefox old -45*/ /* IE old -45*/ /* Opera old -45*/\r\n    transform: rotate(0deg);\r\n    font-size: 30px;\r\n    color: #3498db;\r\n    background: #fff;\r\n    border: solid 2px #3498db;\r\n    padding: 3px;\r\n    border-radius: 5px;\r\n    zoom: 1;\r\n    filter: alpha(opacity=20);\r\n    opacity: 0.3;\r\n    -webkit-text-shadow: 0 0 5px #3498db;\r\n    text-shadow: 0 0 5px #3498db;\r\n    box-shadow: 0 0 5px #3498db;\n}\ndiv.box.recouvrer[data-v-22440916]:after {\r\n    content: \"CREDIT RECOUVRE\";\r\n    position: absolute;\r\n    top: 85px;\r\n    left: -18px;\r\n    z-index: 1;\r\n    font-family: Arial, sans-serif; /* Safari */ /* Firefox */ /* IE */ /* Opera */\r\n    transform: rotate(-45deg);\r\n    font-size: 25px;\r\n    color: #3498db;\r\n    background: #fff;\r\n    border: solid 2px #3498db;\r\n    padding: 3px;\r\n    border-radius: 5px;\r\n    zoom: 1;\r\n    filter: alpha(opacity=20);\r\n    opacity: 0.3;\r\n    -webkit-text-shadow: 0 0 5px #3498db;\r\n    text-shadow: 0 0 5px #3498db;\r\n    box-shadow: 0 0 5px #3498db;\n}\n.rotingtxt[data-v-22440916] {\r\n    transform: rotate(331deg);\r\n    font-size: 6em;\r\n    color: rgba(255, 5, 5, 0.17);\r\n    position: absolute;\r\n    font-family: \"Open sans\", Helvetica, Arial, sans-serif;\r\n    text-transform: uppercase;\r\n    padding-left: 6%;\n}\n.rotingtxt2[data-v-22440916] {\r\n    /* transform: rotate(331deg); */\r\n    font-size: 0.8em;\r\n    color: #9b59b6;\r\n    /* position: absolute; */\r\n    font-family: \"Open sans\", Helvetica, Arial, sans-serif;\r\n    text-transform: uppercase;\r\n    /* padding-left: 2%; */\n}\ntd.overflow-wrap-anywhere div[data-v-22440916] {\r\n    overflow-wrap: anywhere;\n}\n.specific-bg-color[data-v-22440916] {\r\n    background: #f2f6fc;\n}\n.stamp-gray[data-v-22440916] {\r\n    color: gray !important;\r\n    border: 0.25rem solid gray !important;\n}\n.accordion-button[data-v-22440916] {\r\n    background-color: #007bff;\r\n    color: white;\r\n    cursor: pointer;\r\n    padding: 10px 20px;\r\n    border: none;\r\n    border-radius: 5px;\r\n    outline: none;\r\n    transition: background-color 0.3s;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\n}\n.accordion-button[data-v-22440916]:hover {\r\n    background-color: #0056b3;\n}\n.chevron[data-v-22440916] {\r\n    /* font-size: 18px; */\r\n    transition: transform 0.3s;\n}\n.chevron.open[data-v-22440916] {\r\n    transform: rotate(180deg);\n}\n.accordion-content[data-v-22440916] {\r\n    background-color: #f1f1f1;\r\n    padding: 15px;\r\n    margin-top: 10px;\r\n    border: 1px solid #ddd;\r\n    border-radius: 5px;\r\n    overflow: hidden;\n}\r\n\r\n/* Transitions */\n.accordion-enter-active[data-v-22440916],\r\n.accordion-leave-active[data-v-22440916] {\r\n    transition: all 0.3s ease;\n}\n.accordion-enter[data-v-22440916],\r\n.accordion-leave-to[data-v-22440916] {\r\n    height: 0;\r\n    padding: 0 15px;\r\n    opacity: 0;\n}\ninput[type = \"checkbox\"][data-v-22440916]{\r\n    opacity: 1;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/stamp/StampApprobation.vue?vue&type=style&index=0&id=22440916&lang=css&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/stamp/StampApprobation.vue?vue&type=style&index=0&id=22440916&lang=css&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_StampApprobation_vue_vue_type_style_index_0_id_22440916_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./StampApprobation.vue?vue&type=style&index=0&id=22440916&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/stamp/StampApprobation.vue?vue&type=style&index=0&id=22440916&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_StampApprobation_vue_vue_type_style_index_0_id_22440916_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_StampApprobation_vue_vue_type_style_index_0_id_22440916_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/shared/afg/stamp/StampApprobation.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/components/shared/afg/stamp/StampApprobation.vue ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _StampApprobation_vue_vue_type_template_id_22440916_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StampApprobation.vue?vue&type=template&id=22440916&scoped=true */ "./resources/js/components/shared/afg/stamp/StampApprobation.vue?vue&type=template&id=22440916&scoped=true");
/* harmony import */ var _StampApprobation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StampApprobation.vue?vue&type=script&lang=js */ "./resources/js/components/shared/afg/stamp/StampApprobation.vue?vue&type=script&lang=js");
/* harmony import */ var _StampApprobation_vue_vue_type_style_index_0_id_22440916_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StampApprobation.vue?vue&type=style&index=0&id=22440916&lang=css&scoped=true */ "./resources/js/components/shared/afg/stamp/StampApprobation.vue?vue&type=style&index=0&id=22440916&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _StampApprobation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _StampApprobation_vue_vue_type_template_id_22440916_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _StampApprobation_vue_vue_type_template_id_22440916_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "22440916",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/shared/afg/stamp/StampApprobation.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/shared/afg/stamp/StampApprobation.vue?vue&type=script&lang=js":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/shared/afg/stamp/StampApprobation.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StampApprobation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./StampApprobation.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/stamp/StampApprobation.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StampApprobation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/shared/afg/stamp/StampApprobation.vue?vue&type=style&index=0&id=22440916&lang=css&scoped=true":
/*!*******************************************************************************************************************************!*\
  !*** ./resources/js/components/shared/afg/stamp/StampApprobation.vue?vue&type=style&index=0&id=22440916&lang=css&scoped=true ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_StampApprobation_vue_vue_type_style_index_0_id_22440916_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./StampApprobation.vue?vue&type=style&index=0&id=22440916&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/stamp/StampApprobation.vue?vue&type=style&index=0&id=22440916&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/shared/afg/stamp/StampApprobation.vue?vue&type=template&id=22440916&scoped=true":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/shared/afg/stamp/StampApprobation.vue?vue&type=template&id=22440916&scoped=true ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_StampApprobation_vue_vue_type_template_id_22440916_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_StampApprobation_vue_vue_type_template_id_22440916_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_StampApprobation_vue_vue_type_template_id_22440916_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./StampApprobation.vue?vue&type=template&id=22440916&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/stamp/StampApprobation.vue?vue&type=template&id=22440916&scoped=true");


/***/ })

}]);