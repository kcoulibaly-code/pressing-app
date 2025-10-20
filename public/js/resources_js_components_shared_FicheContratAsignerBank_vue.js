"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_shared_FicheContratAsignerBank_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/FicheContratAsignerBank.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/FicheContratAsignerBank.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_proxy_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/proxy.service */ "./resources/js/services/proxy.service.js");
/* harmony import */ var _services_connects_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/connects.service */ "./resources/js/services/connects.service.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./resources/js/services/auth.service.js");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "FicheContratAsignerBank",
  props: {
    dossier_credit: Object
  },
  created: function created() {
    var _this$dossier_credit;
    this.meta_data = {
      "cred_pub_key": (_this$dossier_credit = this.dossier_credit) === null || _this$dossier_credit === void 0 ? void 0 : _this$dossier_credit.cred_pub_key,
      "dossier_credit": this.dossier_credit
    };
  },
  mounted: function mounted() {
    var _this = this;
    this.initDataContrat();
    this.getEnvoieContratFiles();
    EventBus.$on("created-extra-file-template", function (data) {
      _this.list_contrat_signes.forEach(function (element, index) {
        var _data$template;
        var template_name = "Contrat -contrats_signes_" + index + "_" + _this.$route.params.templateId;
        if (template_name == (data === null || data === void 0 || (_data$template = data.template) === null || _data$template === void 0 ? void 0 : _data$template.name)) {
          var _data$template2, _data$template3, _data$template4;
          _this.list_contrat_signes[index]["template"] = {
            id: data === null || data === void 0 || (_data$template2 = data.template) === null || _data$template2 === void 0 ? void 0 : _data$template2.id,
            name: data === null || data === void 0 || (_data$template3 = data.template) === null || _data$template3 === void 0 ? void 0 : _data$template3.name,
            slug: data === null || data === void 0 || (_data$template4 = data.template) === null || _data$template4 === void 0 ? void 0 : _data$template4.slug
          };
        }
      });
    });
    EventBus.$on("updated-extra-file-upload", function (data) {
      _this.getFiles();
    });
  },
  data: function data() {
    return {
      list_contrat_signes: [],
      list_envoie_contrats: [],
      ebapisHost: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_3__["default"].host,
      connectsHost: _services_connects_service__WEBPACK_IMPORTED_MODULE_1__["default"].loadablehost(),
      file_data_list: [],
      intervalAutoUpdate: null,
      btnLoading: false,
      showBtnDownload: false,
      showAllFiles: [],
      showMoreNumber: 2,
      MAX_NAME_LENGTH: 10,
      SHORT_NAME_SEPARATOR: '...'
    };
  },
  methods: {
    handleDoubleClickOrClick: function handleDoubleClickOrClick(index) {
      var _this2 = this;
      EventBus.$emit("open-extra-file-explorer");
      setTimeout(function () {
        var _this2$list_contrat_s;
        EventBus.$emit("data-extra-file-explorer", {
          name: (_this2$list_contrat_s = _this2.list_contrat_signes[index]) === null || _this2$list_contrat_s === void 0 || (_this2$list_contrat_s = _this2$list_contrat_s.contrats_template) === null || _this2$list_contrat_s === void 0 ? void 0 : _this2$list_contrat_s.name,
          view: true
        });
      }, 500);
    },
    handleDoubleClickOrClickUp: function handleDoubleClickOrClickUp(event, index) {
      var _this$list_contrat_si,
        _this3 = this;
      EventBus.$emit("open-extra-file-explorer");
      var numeroPiece = ((_this$list_contrat_si = this.list_contrat_signes[index]) === null || _this$list_contrat_si === void 0 || (_this$list_contrat_si = _this$list_contrat_si.nom) === null || _this$list_contrat_si === void 0 ? void 0 : _this$list_contrat_si.trim()) || "";
      var result = numeroPiece;
      setTimeout(function () {
        EventBus.$emit("data-extra-file-explorer", {
          name: "Contrat {(*)}contrats_signes_" + index + "_" + _this3.$route.params.templateId
        });
      }, 500);
    },
    send2Backend: function send2Backend() {
      this.$axios.post(this.ebapisHost + 'creditbuilder/api/v1/autosaving-akey/', {
        cred_pub_key: this.meta_data.dossier_credit.cred_pub_key,
        key_name: "cred_pub_tb_200201.contrats_signes",
        key: this.list_contrat_signes
      }).then(function (response) {
        EventBus.$emit('value-updated');
      })["catch"](function (error) {
        console.error(err);
      });
    },
    getFiles: function getFiles() {
      var _this4 = this;
      _services_proxy_service__WEBPACK_IMPORTED_MODULE_0__["default"].proxyEbapis({
        url: this.connectsHost + "api/get-files",
        method: "POST",
        data: {
          file_identity: this.meta_data["dossier_credit"].cred_pub_key
        }
      }).then(function (res) {
        var _res$data$data, _res$data$data2;
        res.data = JSON.parse(res.data);
        if (((_res$data$data = res.data.data) === null || _res$data$data === void 0 ? void 0 : _res$data$data.length) > 0 || ((_res$data$data2 = res.data.data) === null || _res$data$data2 === void 0 ? void 0 : _res$data$data2.length) != null) {
          _this4.files = res.data.data;
          _this4.list_contrat_signes.forEach(function (element, index) {
            var count = 0;
            _this4.files.forEach(function (file) {
              var _element$template;
              if ((file === null || file === void 0 ? void 0 : file.extra_file_template_id) != null && (element === null || element === void 0 || (_element$template = element.template) === null || _element$template === void 0 ? void 0 : _element$template.id) == (file === null || file === void 0 ? void 0 : file.extra_file_template_id)) {
                count++;
              }
            });
            _this4.list_contrat_signes[index]["files"] = count;
            _this4.send2Backend();
          });
        }
      })["catch"](function (err) {
        console.error(err);
      });
    },
    getEnvoieContratFiles: function getEnvoieContratFiles() {
      var _this5 = this;
      _services_proxy_service__WEBPACK_IMPORTED_MODULE_0__["default"].proxyEbapis({
        url: this.connectsHost + "api/get-files",
        method: "POST",
        data: {
          file_identity: this.meta_data["dossier_credit"].cred_pub_key
        }
      }).then(function (res) {
        var _res$data$data3, _res$data$data4;
        res.data = JSON.parse(res.data);
        _this5.file_data_list = [];
        if (((_res$data$data3 = res.data.data) === null || _res$data$data3 === void 0 ? void 0 : _res$data$data3.length) > 0 || ((_res$data$data4 = res.data.data) === null || _res$data$data4 === void 0 ? void 0 : _res$data$data4.length) != null) {
          _this5.files = res.data.data;
          _this5.list_envoie_contrats.forEach(function (element, index) {
            var fileData = [];
            _this5.files.forEach(function (file) {
              var _element$template2;
              if ((file === null || file === void 0 ? void 0 : file.extra_file_template_id) != null && (element === null || element === void 0 || (_element$template2 = element.template) === null || _element$template2 === void 0 ? void 0 : _element$template2.id) == (file === null || file === void 0 ? void 0 : file.extra_file_template_id)) {
                fileData.push({
                  file_name: "".concat(file.file_name + '.' + file.file_ext),
                  file_url: file.file_url,
                  file_ext: file.file_ext
                });
              }
            });
            _this5.file_data_list.push(fileData);
            _this5.showAllFiles = Array(_this5.file_data_list.length).fill(false);
          });
        }
        _this5.showBtnDownload = true;
      })["catch"](function (err) {
        console.error(err);
      });
    },
    initDataContrat: function initDataContrat() {
      var _this$meta_data$dossi,
        _this$meta_data,
        _this$meta_data$dossi2,
        _this6 = this,
        _this$meta_data3;
      var list_envoie_contrats_202 = (_this$meta_data$dossi = (_this$meta_data = this.meta_data) === null || _this$meta_data === void 0 || (_this$meta_data = _this$meta_data.dossier_credit) === null || _this$meta_data === void 0 || (_this$meta_data = _this$meta_data.cred_pub_tb_200202) === null || _this$meta_data === void 0 ? void 0 : _this$meta_data.contrats_signes) !== null && _this$meta_data$dossi !== void 0 ? _this$meta_data$dossi : [];
      if ((_this$meta_data$dossi2 = this.meta_data.dossier_credit) !== null && _this$meta_data$dossi2 !== void 0 && (_this$meta_data$dossi2 = _this$meta_data$dossi2.cred_pub_tb_200201) !== null && _this$meta_data$dossi2 !== void 0 && _this$meta_data$dossi2.contrats_signes) {
        var _this$meta_data$dossi3, _this$meta_data2;
        this.list_contrat_signes = this.meta_data.dossier_credit.cred_pub_tb_200201.contrats_signes;
        var list_envoie_contrat = (_this$meta_data$dossi3 = (_this$meta_data2 = this.meta_data) === null || _this$meta_data2 === void 0 || (_this$meta_data2 = _this$meta_data2.dossier_credit) === null || _this$meta_data2 === void 0 || (_this$meta_data2 = _this$meta_data2.cred_pub_tb_200201) === null || _this$meta_data2 === void 0 ? void 0 : _this$meta_data2.envoie_contrats) !== null && _this$meta_data$dossi3 !== void 0 ? _this$meta_data$dossi3 : [];
        if (this.list_contrat_signes.length != list_envoie_contrat.length) {
          var ids_old_contrat_signes = this.list_contrat_signes.map(function (item) {
            return item.contrats_id;
          });
          var new_contrat_added = list_envoie_contrat.filter(function (item) {
            return !ids_old_contrat_signes.includes(item.id);
          }).map(function (item) {
            var _item$conformite, _item$commentaire_con;
            return {
              id: (0,uuid__WEBPACK_IMPORTED_MODULE_4__["default"])(),
              files: 0,
              nom: item.nom,
              template: "",
              commentaire: "",
              autre_nom: item.autre_nom,
              contrats_id: item.id,
              contrats_files: item.files,
              contrats_template: item.template,
              contrats_commentaire: item.commentaire,
              contrats_conformite: (_item$conformite = item === null || item === void 0 ? void 0 : item.conformite) !== null && _item$conformite !== void 0 ? _item$conformite : null,
              commentaire_conformite: (_item$commentaire_con = item === null || item === void 0 ? void 0 : item.commentaire_conformite) !== null && _item$commentaire_con !== void 0 ? _item$commentaire_con : null
            };
          });
          this.list_contrat_signes = this.list_contrat_signes.concat(new_contrat_added);
        }
      } else {
        this.list_contrat_signes = this.meta_data.dossier_credit.cred_pub_tb_200201.envoie_contrats.filter(function (item) {
          return item.nom != "";
        }).map(function (item, index) {
          return {
            id: (0,uuid__WEBPACK_IMPORTED_MODULE_4__["default"])(),
            files: 0,
            nom: item.nom,
            template: "",
            commentaire: "",
            autre_nom: item.autre_nom,
            contrats_id: item.id,
            contrats_files: item.files,
            contrats_template: item.template,
            contrats_commentaire: item.commentaire,
            contrats_conformite: null,
            commentaire_conformite: null
          };
        });
      }
      if (list_envoie_contrats_202.length > 0) {
        list_envoie_contrats_202.forEach(function (el, i) {
          if (el.id === _this6.list_contrat_signes[i].id) {
            var _el$commentaire_confo;
            _this6.list_contrat_signes[i]["contrats_conformite"] = JSON.parse(el === null || el === void 0 ? void 0 : el.conformite);
            _this6.list_contrat_signes[i]["commentaire_conformite"] = (_el$commentaire_confo = el.commentaire_conformite) !== null && _el$commentaire_confo !== void 0 ? _el$commentaire_confo : null;
          }
        });
      }
      this.list_envoie_contrats = (_this$meta_data3 = this.meta_data) === null || _this$meta_data3 === void 0 || (_this$meta_data3 = _this$meta_data3.dossier_credit) === null || _this$meta_data3 === void 0 || (_this$meta_data3 = _this$meta_data3.cred_pub_tb_200201) === null || _this$meta_data3 === void 0 ? void 0 : _this$meta_data3.envoie_contrats;
    },
    updateToBackend: function updateToBackend() {
      var _this7 = this;
      if (this.intervalAutoUpdate != null) {
        clearTimeout(this.intervalAutoUpdate);
      }
      this.intervalAutoUpdate = setTimeout(function () {
        _this7.send2Backend();
      }, 2000);
    },
    downloadFile: function downloadFile(index, fileIndex) {
      var file = this.file_data_list[index][fileIndex];
      var url = window.location.origin + '/file?f=' + encodeURIComponent(file.file_url);
      window.open(url, '_blank');
    },
    downloadAllFiles: function downloadAllFiles(index) {
      var listFiles = [];
      listFiles = this.file_data_list[index];
      var _loop = function _loop(i) {
        setTimeout(function () {
          var fileUrl = listFiles[i];
          var url = window.location.origin + '/file?f=' + encodeURIComponent(fileUrl);
          window.open(url, '_blank');
        }, 3000);
      };
      for (var i = 0; i < listFiles.length; i++) {
        _loop(i);
      }
    },
    NotifyUser: function NotifyUser() {
      var _this$meta_data$dossi4,
        _this$meta_data$dossi5,
        _this$meta_data$dossi6,
        _this8 = this;
      var senderData = (_this$meta_data$dossi4 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi4 === void 0 ? void 0 : _this$meta_data$dossi4.contrat_notification.target;
      var targetData = (_this$meta_data$dossi5 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi5 === void 0 ? void 0 : _this$meta_data$dossi5.contrat_notification.author;
      var contratSignesExist = ((_this$meta_data$dossi6 = this.meta_data.dossier_credit) === null || _this$meta_data$dossi6 === void 0 || (_this$meta_data$dossi6 = _this$meta_data$dossi6.cred_pub_tb_200201) === null || _this$meta_data$dossi6 === void 0 ? void 0 : _this$meta_data$dossi6.contrats_signes) !== undefined;
      if (!this.canNotify()) {
        this.$toasted.show("Merci d'attacher le contrat signé ou de saisir le commentaire sur chaque ligne avant de continuer.", {
          duration: 5000
        });
        return;
      }
      this.btnLoading = true;

      // let contratSignesExist = this.meta_data.dossier_credit?.cred_pub_tb_200201?.contrats_signes !== undefined;
      // if (contratSignesExist) {

      this.$axios.post(this.ebapisHost + "notifications/api/v1/envoi-contrat-notifications/", {
        cred_pub_key: this.meta_data["dossier_credit"].cred_pub_key,
        sender_data: senderData,
        target_data: targetData,
        conformite: true
      }).then(function (response) {
        EventBus.$emit('value-updated');
        _this8.$modal.hide('fiche_contrat_a_signer_bank');
        _this8.$toasted.show("Notification éffectuée avec succès.");
        _this8.btnLoading = false;
      })["catch"](function (error) {
        console.log(error);
      });

      // } else {
      //   this.$modal.hide('fiche_contrat_a_signer_bank')
      //   this.$toasted.show("Veuillez ajouter des contrats signés avant de notifier.")
      //   return;
      // }
    },
    canAccesToAddContratSignes: function canAccesToAddContratSignes() {
      var _dossier_credit$contr, _dossier_credit$cred_;
      var dossier_credit = this.meta_data["dossier_credit"];
      var notif_target_id = dossier_credit === null || dossier_credit === void 0 || (_dossier_credit$contr = dossier_credit.contrat_notification) === null || _dossier_credit$contr === void 0 || (_dossier_credit$contr = _dossier_credit$contr.target) === null || _dossier_credit$contr === void 0 ? void 0 : _dossier_credit$contr.user_id;
      var primary_owner = dossier_credit === null || dossier_credit === void 0 ? void 0 : dossier_credit.primary_owner;
      var envoie_contrats = dossier_credit === null || dossier_credit === void 0 || (_dossier_credit$cred_ = dossier_credit.cred_pub_tb_200201) === null || _dossier_credit$cred_ === void 0 ? void 0 : _dossier_credit$cred_.envoie_contrats.filter(function (item) {
        return item.nom != "" && item.files > 0;
      });
      var showBtn = notif_target_id === primary_owner && (envoie_contrats === null || envoie_contrats === void 0 ? void 0 : envoie_contrats.length) > 0;
      return showBtn;
    },
    onChangeStateShowAll: function onChangeStateShowAll(index) {
      this.$set(this.showAllFiles, index, !this.showAllFiles[index]);
    },
    checkAddContratSigneOk: function checkAddContratSigneOk() {
      var isOk = true;
      this.list_contrat_signes.forEach(function (item) {
        if ((item === null || item === void 0 ? void 0 : item.files) == 0) {
          isOk = false;
        }
      });
      return isOk;
    },
    checkShowCommentConformite: function checkShowCommentConformite(list_contrat_a_signer) {
      return list_contrat_a_signer.some(function (item) {
        return (item === null || item === void 0 ? void 0 : item.commentaire_conformite) != null && (item === null || item === void 0 ? void 0 : item.commentaire_conformite) != "";
      });
    },
    getIcon: function getIcon(extension) {
      var icon = '';
      switch (extension.toLowerCase()) {
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
    formatFileName: function formatFileName(name) {
      return this.isFileNameTooLong(name) ? this.shortenFileName(name) : name;
    },
    shortenFileName: function shortenFileName(name) {
      return (name === null || name === void 0 ? void 0 : name.substring(0, Math.floor(this.MAX_NAME_LENGTH / 2))) + this.SHORT_NAME_SEPARATOR + (name === null || name === void 0 ? void 0 : name.substring((name === null || name === void 0 ? void 0 : name.length) - 1 - Math.floor(this.MAX_NAME_LENGTH / 2), (name === null || name === void 0 ? void 0 : name.length) - 1));
    },
    isFileNameTooLong: function isFileNameTooLong(name) {
      return (name === null || name === void 0 ? void 0 : name.length) > this.MAX_NAME_LENGTH;
    },
    canNotify: function canNotify() {
      var existLigneContratIncorrect = this.list_contrat_signes.some(function (obj) {
        return (obj.commentaire == null || obj.commentaire.trim() == '') && obj.files == 0;
      });
      return !existLigneContratIncorrect;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/FicheContratAsignerBank.vue?vue&type=template&id=417db8dc&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/FicheContratAsignerBank.vue?vue&type=template&id=417db8dc&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("div", {
    staticClass: "memo",
    style: {
      "background-color": _vm.entityColor
    }
  }, [_c("div", {
    staticClass: "container-fluid"
  }, [_c("div", {
    staticClass: "d-flex justify-content-between align-items-center"
  }, [_c("div", [_vm._v("\n          CONTRAT A FAIRE SIGNER\n        ")]), _vm._v(" "), _c("div", [_c("div", {
    staticClass: "d-flex justify-content-between align-items-center"
  }, [_c("i", {
    staticClass: "icofont-close",
    attrs: {
      role: "button"
    },
    on: {
      click: function click($event) {
        return _vm.$modal.hide("fiche_contrat_a_signer_bank");
      }
    }
  })])])])])]), _vm._v(" "), _c("div", {
    staticClass: "p-2",
    staticStyle: {
      "max-height": "100vh",
      overflow: "auto"
    }
  }, [_vm.list_contrat_signes.length > 0 ? _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_c("thead", [_c("tr", [_c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("INTITULE")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("OBSERVATION")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("CONTRATS A SIGNER")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("CONTRATS SIGNES")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("COMMENTAIRE")]), _vm._v(" "), _vm.checkShowCommentConformite(_vm.list_contrat_signes) ? _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("OBSERVATION SUR LA CONFORMITE")]) : _vm._e()])]), _vm._v(" "), _c("tbody", _vm._l(_vm.list_contrat_signes, function (contrat, index) {
    var _vm$file_data_list$in, _vm$file_data_list$in2;
    return _c("tr", {
      key: index + "csignes",
      "class": contrat !== null && contrat !== void 0 && contrat.contrats_conformite ? "bg-exist" : ""
    }, [_c("td", [_vm._v(_vm._s(contrat.nom == "Autre" ? contrat.autre_nom : contrat.nom))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(contrat.contrats_commentaire))]), _vm._v(" "), _c("td", [_vm.showBtnDownload ? _c("div", {}, [!_vm.showAllFiles[index] ? _vm._l((_vm$file_data_list$in = _vm.file_data_list[index]) === null || _vm$file_data_list$in === void 0 ? void 0 : _vm$file_data_list$in.slice(0, _vm.showMoreNumber), function (file, fileIndex) {
      return _c("div", {
        key: fileIndex + index + "xa",
        staticClass: "mb-1 nowrap"
      }, [_c("span", {
        staticClass: "p-1 px-2 mx-2 text-nowrap",
        staticStyle: {
          color: "black",
          "font-size": "13px",
          "border-radius": "5px",
          "margin-left": "0 !important",
          width: "150px"
        }
      }, [_c("i", {
        "class": _vm.getIcon(file === null || file === void 0 ? void 0 : file.file_ext)
      }), _vm._v(" " + _vm._s(_vm.formatFileName(file === null || file === void 0 ? void 0 : file.file_name)) + "\n                          ")]), _vm._v(" "), _c("span", {
        staticClass: "text-nowrap",
        staticStyle: {
          color: "black",
          "font-size": "13px",
          "border-radius": "5px",
          "margin-left": "0 !important",
          width: "150px",
          cursor: "pointer",
          border: "1px solid #828282ad",
          padding: "2px 5px 2px 5px"
        },
        attrs: {
          "data-toggle": "tooltip",
          title: "Télécharger le contrat"
        },
        on: {
          click: function click($event) {
            return _vm.downloadFile(index, fileIndex);
          }
        }
      }, [_c("i", {
        staticClass: "icofont-download"
      })])]);
    }) : _vm._e(), _vm._v(" "), _vm.showAllFiles[index] ? _vm._l(_vm.file_data_list[index], function (file, fileIndex) {
      return _c("div", {
        key: fileIndex,
        staticClass: "mb-1 nowrap"
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
      }), _vm._v(" " + _vm._s(_vm.formatFileName(file === null || file === void 0 ? void 0 : file.file_name)) + "\n                        ")]), _vm._v(" "), _c("span", {
        staticClass: "text-nowrap",
        staticStyle: {
          color: "black",
          "font-size": "13px",
          "border-radius": "5px",
          "margin-left": "0 !important",
          width: "150px",
          cursor: "pointer",
          border: "1px solid #828282ad",
          padding: "2px 5px 2px 5px"
        },
        attrs: {
          "data-toggle": "tooltip",
          title: "Télécharger le contrat"
        },
        on: {
          click: function click($event) {
            return _vm.downloadFile(index, fileIndex);
          }
        }
      }, [_c("i", {
        staticClass: "icofont-download"
      })])]);
    }) : _vm._e(), _vm._v(" "), ((_vm$file_data_list$in2 = _vm.file_data_list[index]) === null || _vm$file_data_list$in2 === void 0 ? void 0 : _vm$file_data_list$in2.length) > 2 ? _c("a", {
      staticStyle: {
        "font-size": "13px",
        color: "#bc872b",
        cursor: "pointer"
      },
      on: {
        click: function click($event) {
          return _vm.onChangeStateShowAll(index);
        }
      }
    }, [_c("span", {
      staticClass: "showT"
    }, [_vm._v(_vm._s(_vm.showAllFiles[index] ? "reduire" : "Voir plus") + " ")])]) : _vm._e()], 2) : _c("div", [_c("span", {
      staticClass: "spinner-border"
    })])]), _vm._v(" "), _c("td", [_c("div", {
      staticClass: "d-flex align-items-center"
    }, [_c("div", [(contrat === null || contrat === void 0 ? void 0 : contrat.files) > 0 ? _c("span", {
      staticClass: "p-1 px-2 mx-2 text-nowrap bg-success",
      staticStyle: {
        color: "white",
        "font-size": "13px",
        "border-radius": "5px",
        "margin-left": "0 !important",
        width: "150px"
      }
    }, [_vm._v("\n                        " + _vm._s((contrat === null || contrat === void 0 ? void 0 : contrat.files) > 0 ? (contrat === null || contrat === void 0 ? void 0 : contrat.files) + " fichier(s) uploadé(s)" : "") + "\n                      ")]) : _vm._e()]), _vm._v(" "), _c("div", [_vm.canAccesToAddContratSignes() ? _c("button", {
      staticClass: "btn shadow-md text-white bg-success",
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
        title: "Cliquer ici pour uploader ou voir le(s) fichier(s)",
        disabled: contrat === null || contrat === void 0 ? void 0 : contrat.contrats_conformite
      },
      on: {
        click: function click($event) {
          return _vm.handleDoubleClickOrClickUp($event, index);
        }
      }
    }, [_c("i", {
      staticClass: "icofont-attachment"
    })]) : _vm._e()])])]), _vm._v(" "), _c("td", [_c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.list_contrat_signes[index].commentaire,
        expression: "list_contrat_signes[index].commentaire"
      }],
      staticClass: "form-control",
      attrs: {
        disabled: !_vm.canAccesToAddContratSignes() || (contrat === null || contrat === void 0 ? void 0 : contrat.contrats_conformite),
        type: "text",
        rows: "2"
      },
      domProps: {
        value: _vm.list_contrat_signes[index].commentaire
      },
      on: {
        input: [function ($event) {
          if ($event.target.composing) return;
          _vm.$set(_vm.list_contrat_signes[index], "commentaire", $event.target.value);
        }, function ($event) {
          return _vm.updateToBackend($event);
        }]
      }
    })]), _vm._v(" "), _vm.checkShowCommentConformite(_vm.list_contrat_signes) ? _c("td", [_vm._v(_vm._s(contrat === null || contrat === void 0 ? void 0 : contrat.commentaire_conformite))]) : _vm._e()]);
  }), 0)])]) : _c("div", [_vm._v("Aucun contrat(s) trouvé(s).")])]), _vm._v(" "), _c("div", {
    staticClass: "d-flex text-center mb-2"
  }, [_vm.canAccesToAddContratSignes() ? _c("div", {
    staticClass: "w-100"
  }, [_vm.btnLoading ? [_c("button", {
    staticClass: "btn btn-primary",
    staticStyle: {
      color: "white"
    },
    attrs: {
      type: "button",
      disabled: ""
    }
  }, [_vm._v("Transmission en cours...")])] : [_c("div", {
    staticClass: "w-100"
  }, [_c("button", {
    staticClass: "btn btn-primary",
    staticStyle: {
      color: "white"
    },
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.NotifyUser();
      }
    }
  }, [_vm._v("Transmission à la DAJC")])])]], 2) : _vm._e()])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/FicheContratAsignerBank.vue?vue&type=style&index=0&id=417db8dc&lang=css&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/FicheContratAsignerBank.vue?vue&type=style&index=0&id=417db8dc&lang=css&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.memo[data-v-417db8dc] {\r\n  padding: 10px;\r\n  border: 2px solid #fff;\r\n  font-weight: 550;\r\n  font-size: 16px;\r\n  /* text-align: center; */\r\n  text-transform: uppercase;\r\n  background-color: #dc0030;\r\n  color: #fff;\n}\n.bg-grey[data-v-417db8dc] {\r\n  background-color: #f4f3f3;\n}\n.container[data-v-417db8dc] {\r\n  width: 100%;\r\n  max-width: 1000px;\r\n  margin: 0 auto;\n}\n.spinner-border[data-v-417db8dc]{\r\n  width: 20px;\r\n  height: 20px;\r\n  margin-top: 3px;\n}\n.bg-exist[data-v-417db8dc] {\r\n  background-color: #bc872b21;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/FicheContratAsignerBank.vue?vue&type=style&index=0&id=417db8dc&lang=css&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/FicheContratAsignerBank.vue?vue&type=style&index=0&id=417db8dc&lang=css&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FicheContratAsignerBank_vue_vue_type_style_index_0_id_417db8dc_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FicheContratAsignerBank.vue?vue&type=style&index=0&id=417db8dc&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/FicheContratAsignerBank.vue?vue&type=style&index=0&id=417db8dc&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FicheContratAsignerBank_vue_vue_type_style_index_0_id_417db8dc_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FicheContratAsignerBank_vue_vue_type_style_index_0_id_417db8dc_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/shared/FicheContratAsignerBank.vue":
/*!********************************************************************!*\
  !*** ./resources/js/components/shared/FicheContratAsignerBank.vue ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FicheContratAsignerBank_vue_vue_type_template_id_417db8dc_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FicheContratAsignerBank.vue?vue&type=template&id=417db8dc&scoped=true */ "./resources/js/components/shared/FicheContratAsignerBank.vue?vue&type=template&id=417db8dc&scoped=true");
/* harmony import */ var _FicheContratAsignerBank_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FicheContratAsignerBank.vue?vue&type=script&lang=js */ "./resources/js/components/shared/FicheContratAsignerBank.vue?vue&type=script&lang=js");
/* harmony import */ var _FicheContratAsignerBank_vue_vue_type_style_index_0_id_417db8dc_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FicheContratAsignerBank.vue?vue&type=style&index=0&id=417db8dc&lang=css&scoped=true */ "./resources/js/components/shared/FicheContratAsignerBank.vue?vue&type=style&index=0&id=417db8dc&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _FicheContratAsignerBank_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _FicheContratAsignerBank_vue_vue_type_template_id_417db8dc_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _FicheContratAsignerBank_vue_vue_type_template_id_417db8dc_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "417db8dc",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/shared/FicheContratAsignerBank.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/shared/FicheContratAsignerBank.vue?vue&type=script&lang=js":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/shared/FicheContratAsignerBank.vue?vue&type=script&lang=js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FicheContratAsignerBank_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FicheContratAsignerBank.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/FicheContratAsignerBank.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FicheContratAsignerBank_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/shared/FicheContratAsignerBank.vue?vue&type=style&index=0&id=417db8dc&lang=css&scoped=true":
/*!****************************************************************************************************************************!*\
  !*** ./resources/js/components/shared/FicheContratAsignerBank.vue?vue&type=style&index=0&id=417db8dc&lang=css&scoped=true ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FicheContratAsignerBank_vue_vue_type_style_index_0_id_417db8dc_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FicheContratAsignerBank.vue?vue&type=style&index=0&id=417db8dc&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/FicheContratAsignerBank.vue?vue&type=style&index=0&id=417db8dc&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/shared/FicheContratAsignerBank.vue?vue&type=template&id=417db8dc&scoped=true":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/shared/FicheContratAsignerBank.vue?vue&type=template&id=417db8dc&scoped=true ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FicheContratAsignerBank_vue_vue_type_template_id_417db8dc_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FicheContratAsignerBank_vue_vue_type_template_id_417db8dc_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FicheContratAsignerBank_vue_vue_type_template_id_417db8dc_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FicheContratAsignerBank.vue?vue&type=template&id=417db8dc&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/FicheContratAsignerBank.vue?vue&type=template&id=417db8dc&scoped=true");


/***/ })

}]);