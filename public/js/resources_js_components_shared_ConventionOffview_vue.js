"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_shared_ConventionOffview_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/ConventionOffview.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/ConventionOffview.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_connects_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/connects.service */ "./resources/js/services/connects.service.js");
/* harmony import */ var _services_proxy_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/proxy.service */ "./resources/js/services/proxy.service.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    dossier_credit: Object
  },
  data: function data() {
    return {
      data_tb_200201: null,
      data_tb_200202: null,
      files: [],
      connectsHost: _services_connects_service__WEBPACK_IMPORTED_MODULE_0__["default"].loadablehost(),
      isLoadingFile: false,
      file_data_list: [],
      showBtnDownload: false,
      showAllFiles: [],
      showMoreNumber: 2,
      MAX_NAME_LENGTH: 10,
      SHORT_NAME_SEPARATOR: '...',
      file_data_list_signe: [],
      showBtnDownloadSigne: false,
      showAllFilesSignes: [],
      file_data_list_a_signe: [],
      showBtnDownloadASigne: false,
      showAllFilesASignes: [],
      role: ""
    };
  },
  created: function created() {
    var _this$dossier_credit, _this$dossier_credit2;
    this.data_tb_200201 = (_this$dossier_credit = this.dossier_credit) === null || _this$dossier_credit === void 0 ? void 0 : _this$dossier_credit.cred_pub_tb_21000;
    this.data_tb_200202 = (_this$dossier_credit2 = this.dossier_credit) === null || _this$dossier_credit2 === void 0 ? void 0 : _this$dossier_credit2.cred_pub_tb_21001;
  },
  mounted: function mounted() {
    var _this$dossier_credit3, _this$dossier_credit4;
    this.getFiles();
    if (((_this$dossier_credit3 = this.dossier_credit) === null || _this$dossier_credit3 === void 0 ? void 0 : _this$dossier_credit3.categorie_client) == 'Retail') {
      this.role = "CC";
    }
    if (((_this$dossier_credit4 = this.dossier_credit) === null || _this$dossier_credit4 === void 0 ? void 0 : _this$dossier_credit4.categorie_client) == 'Corporate') {
      this.role = "CAE";
    }
  },
  methods: {
    loadData: function loadData() {},
    handleDoubleClickOrClick: function handleDoubleClickOrClick(index) {
      var _this = this;
      EventBus.$emit("open-extra-file-explorer");
      setTimeout(function () {
        var _this$data_tb_;
        EventBus.$emit("data-extra-file-explorer", {
          name: (_this$data_tb_ = _this.data_tb_200201) === null || _this$data_tb_ === void 0 || (_this$data_tb_ = _this$data_tb_.envoie_contrats[index]) === null || _this$data_tb_ === void 0 || (_this$data_tb_ = _this$data_tb_.template) === null || _this$data_tb_ === void 0 ? void 0 : _this$data_tb_.name,
          view: true
        });
      }, 500);
    },
    getFiles: function getFiles() {
      var _this2 = this;
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
        _this2.file_data_list = [];
        _this2.file_data_list_signe = [];
        _this2.file_data_list_a_signe = [];
        if (((_res$data$data = res.data.data) === null || _res$data$data === void 0 ? void 0 : _res$data$data.length) > 0 || ((_res$data$data2 = res.data.data) === null || _res$data$data2 === void 0 ? void 0 : _res$data$data2.length) != null) {
          var _this2$data_tb_, _this2$data_tb_2;
          _this2.files = res.data.data;
          (_this2$data_tb_ = _this2.data_tb_200201) === null || _this2$data_tb_ === void 0 || _this2$data_tb_.envoie_contrats.forEach(function (element, index) {
            var count = 0;
            var fileData = [];
            _this2.files.forEach(function (file) {
              var _element$template;
              if ((file === null || file === void 0 ? void 0 : file.extra_file_template_id) != null && (element === null || element === void 0 || (_element$template = element.template) === null || _element$template === void 0 ? void 0 : _element$template.id) == (file === null || file === void 0 ? void 0 : file.extra_file_template_id)) {
                count++;
                fileData.push({
                  file_name: "".concat(file.file_name + '.' + file.file_ext),
                  file_url: file.file_url,
                  file_ext: file.file_ext
                });
              }
            });
            _this2.data_tb_200201.envoie_contrats[index]['files'] = count;
            _this2.file_data_list.push(fileData);
            _this2.showAllFiles = Array(_this2.file_data_list.length).fill(false);
            _this2.showBtnDownload = true;
          });

          // let fileDataSignes = [];
          // let fileDataASignes = [];
          (_this2$data_tb_2 = _this2.data_tb_200202) === null || _this2$data_tb_2 === void 0 || (_this2$data_tb_2 = _this2$data_tb_2.contrats_signes) === null || _this2$data_tb_2 === void 0 || _this2$data_tb_2.forEach(function (element, index) {
            var count = 0;
            var fileDataSignes = [];
            var fileDataASignes = [];
            _this2.files.forEach(function (file) {
              var _element$template2, _element$contrats_tem;
              if ((file === null || file === void 0 ? void 0 : file.extra_file_template_id) != null && (element === null || element === void 0 || (_element$template2 = element.template) === null || _element$template2 === void 0 ? void 0 : _element$template2.id) == (file === null || file === void 0 ? void 0 : file.extra_file_template_id)) {
                count++;
                fileDataSignes.push({
                  file_name: "".concat(file.file_name + '.' + file.file_ext),
                  file_url: file.file_url,
                  file_ext: file.file_ext
                });
              }
              if ((file === null || file === void 0 ? void 0 : file.extra_file_template_id) != null && (element === null || element === void 0 || (_element$contrats_tem = element.contrats_template) === null || _element$contrats_tem === void 0 ? void 0 : _element$contrats_tem.id) == (file === null || file === void 0 ? void 0 : file.extra_file_template_id)) {
                fileDataASignes.push({
                  file_name: "".concat(file.file_name + '.' + file.file_ext),
                  file_url: file.file_url,
                  file_ext: file.file_ext
                });
              }
            });
            _this2.data_tb_200202.contrats_signes[index]['files'] = count;
            _this2.file_data_list_signe.push(fileDataSignes);
            _this2.showAllFilesSignes = Array(_this2.file_data_list_signe.length).fill(false);
            _this2.showBtnDownloadSigne = true;
            _this2.file_data_list_a_signe.push(fileDataASignes);
            _this2.showAllFilesASignes = Array(_this2.file_data_list_a_signe.length).fill(false);
            _this2.showBtnDownloadASigne = true;
          });
        }
        _this2.isLoadingFile = false;
      })["catch"](function (err) {
        _this2.isLoadingFile = false;
        console.error(err);
      });
    },
    handleDoubleClickOrClick2: function handleDoubleClickOrClick2(index) {
      var _this3 = this;
      EventBus.$emit("open-extra-file-explorer");
      setTimeout(function () {
        var _this3$data_tb_;
        EventBus.$emit("data-extra-file-explorer", {
          name: (_this3$data_tb_ = _this3.data_tb_200202) === null || _this3$data_tb_ === void 0 || (_this3$data_tb_ = _this3$data_tb_.contrats_signes[index]) === null || _this3$data_tb_ === void 0 || (_this3$data_tb_ = _this3$data_tb_.template) === null || _this3$data_tb_ === void 0 ? void 0 : _this3$data_tb_.name,
          view: true
        });
      }, 500);
    },
    handleDoubleClickOrClickSigne: function handleDoubleClickOrClickSigne(event, index) {
      var _this4 = this;
      EventBus.$emit("open-extra-file-explorer");
      setTimeout(function () {
        EventBus.$emit("data-extra-file-explorer", {
          name: "Contrat {(*)}contrats_signes_" + index + "_" + _this4.$route.params.templateId,
          view: true
        });
      }, 500);
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
    downloadFileASigner: function downloadFileASigner(index, fileIndex) {
      var file = this.file_data_list_a_signe[index][fileIndex];
      var url = window.location.origin + '/file?f=' + encodeURIComponent(file.file_url);
      window.open(url, '_blank');
    },
    downloadFileSigner: function downloadFileSigner(index, fileIndex) {
      var file = this.file_data_list_signe[index][fileIndex];
      var url = window.location.origin + '/file?f=' + encodeURIComponent(file.file_url);
      window.open(url, '_blank');
    },
    formatFileName: function formatFileName(name) {
      return this.isFileNameTooLong(name) ? this.shortenFileName(name) : name;
    },
    shortenFileName: function shortenFileName(name) {
      return (name === null || name === void 0 ? void 0 : name.substring(0, Math.floor(this.MAX_NAME_LENGTH / 2))) + this.SHORT_NAME_SEPARATOR + (name === null || name === void 0 ? void 0 : name.substring((name === null || name === void 0 ? void 0 : name.length) - 1 - Math.floor(this.MAX_NAME_LENGTH / 2), (name === null || name === void 0 ? void 0 : name.length) - 1));
    },
    isFileNameTooLong: function isFileNameTooLong(name) {
      return (name === null || name === void 0 ? void 0 : name.length) > this.MAX_NAME_LENGTH;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/ConventionOffview.vue?vue&type=template&id=f4656938&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/ConventionOffview.vue?vue&type=template&id=f4656938&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$data_tb_, _vm$data_tb_2;
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "row justify-content-center"
  }, [_vm.data_tb_200201 ? _c("div", {
    staticStyle: {
      "padding-top": ""
    }
  }, [_c("div", {
    staticClass: "head-memorandum-title mb-4",
    staticStyle: {
      "text-align": "center"
    }
  }, [_vm._v("\n      ENVOIE DE CONTRATS\n    ")]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(0), _vm._v(" "), _c("tbody", _vm._l((_vm$data_tb_ = _vm.data_tb_200201) === null || _vm$data_tb_ === void 0 ? void 0 : _vm$data_tb_.envoie_contrats, function (envoie_contrat, index) {
    var _envoie_contrat$nom, _vm$file_data_list$in;
    return _c("tr", {
      key: index
    }, [_c("td", [(envoie_contrat === null || envoie_contrat === void 0 || (_envoie_contrat$nom = envoie_contrat.nom) === null || _envoie_contrat$nom === void 0 ? void 0 : _envoie_contrat$nom.toUpperCase()) != "AUTRE" ? _c("div", [_vm._v("\n                          " + _vm._s(envoie_contrat.nom) + "\n                      ")]) : _c("div", [_vm._v("\n                          " + _vm._s(envoie_contrat.autre_nom) + "\n                      ")])]), _vm._v(" "), _c("td", [_vm._v("\n            " + _vm._s(envoie_contrat.commentaire) + "\n          ")]), _vm._v(" "), _c("td", {
      staticClass: "text-center"
    }, [(envoie_contrat === null || envoie_contrat === void 0 ? void 0 : envoie_contrat.files) > 0 ? _c("div", {
      staticClass: "d-flex align-items-center"
    }, [_c("div", [_vm.isLoadingFile ? _c("span", {
      staticClass: "p-1 px-2 mx-2 text-nowrap",
      staticStyle: {
        color: "black",
        "font-size": "13px",
        "border-radius": "5px",
        "margin-left": "0 !important",
        width: "150px"
      }
    }, [_vm._v("\n                  chargement...\n                ")]) : _vm._l((_vm$file_data_list$in = _vm.file_data_list[index]) === null || _vm$file_data_list$in === void 0 ? void 0 : _vm$file_data_list$in.slice(0, _vm.showMoreNumber), function (file, fileIndex) {
      return _c("div", {
        key: fileIndex + index + "xa",
        staticClass: "mb-2 nowrap"
      }, [_c("span", {
        staticClass: "p-1 px-2 mx-2 text-nowrap",
        staticStyle: {
          color: "black",
          "font-size": "13px",
          "border-radius": "5px",
          "margin-left": "0 !important",
          width: "150px"
        },
        attrs: {
          title: file.file_name + "." + file.file_ext
        }
      }, [_c("i", {
        "class": _vm.getIcon(file === null || file === void 0 ? void 0 : file.file_ext)
      }), _vm._v(" " + _vm._s(_vm.formatFileName(file === null || file === void 0 ? void 0 : file.file_name)) + "." + _vm._s(file === null || file === void 0 ? void 0 : file.file_ext) + "\n                      ")]), _vm._v(" "), _c("span", {
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
    })], 2)]) : _c("div", {
      staticClass: "text-center text-danger"
    }, [_vm._v("\n              Aucun fichier(s) uploadé(s)\n            ")])])]);
  }), 0)])])]) : _vm._e(), _vm._v(" "), _vm.data_tb_200202 ? _c("div", {
    staticStyle: {
      "padding-top": ""
    }
  }, [_c("div", {
    staticClass: "head-memorandum-title mb-4",
    staticStyle: {
      "text-align": "center"
    }
  }, [_vm._v("\n          CONTRAT(S) SIGNE(S)\n      ")]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_c("thead", {
    staticClass: "bg-ed-primary"
  }, [_c("tr", [_vm._m(1), _vm._v(" "), _vm._m(2), _vm._v(" "), _c("th", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_c("b", [_vm._v("Commentaire " + _vm._s(_vm.role))])])]), _vm._v(" "), _vm._m(3), _vm._v(" "), _vm._m(4)])]), _vm._v(" "), _c("tbody", _vm._l((_vm$data_tb_2 = _vm.data_tb_200202) === null || _vm$data_tb_2 === void 0 ? void 0 : _vm$data_tb_2.contrats_signes, function (contrats_signe, index) {
    var _contrats_signe$nom, _vm$file_data_list_a_, _vm$file_data_list_si;
    return _c("tr", {
      key: index
    }, [_c("td", [(contrats_signe === null || contrats_signe === void 0 || (_contrats_signe$nom = contrats_signe.nom) === null || _contrats_signe$nom === void 0 ? void 0 : _contrats_signe$nom.toUpperCase()) != "AUTRE" ? _c("div", [_vm._v("\n                          " + _vm._s(contrats_signe.nom) + "\n                      ")]) : _c("div", [_vm._v("\n                          " + _vm._s(contrats_signe.autre_nom) + "\n                      ")])]), _vm._v(" "), _c("td", [_vm._v("\n                      " + _vm._s(contrats_signe.contrats_commentaire) + "\n                  ")]), _vm._v(" "), _c("td", [_vm._v("\n                      " + _vm._s(contrats_signe.commentaire) + "\n                  ")]), _vm._v(" "), _c("td", {
      staticClass: "text-center"
    }, [(contrats_signe === null || contrats_signe === void 0 ? void 0 : contrats_signe.contrats_files) > 0 ? _c("div", {
      staticClass: "d-flex align-items-center"
    }, [_c("div", [_vm.isLoadingFile ? _c("span", {
      staticClass: "p-1 px-2 mx-2 text-nowrap",
      staticStyle: {
        color: "black",
        "font-size": "13px",
        "border-radius": "5px",
        "margin-left": "0 !important",
        width: "150px"
      }
    }, [_vm._v("\n                                chargement...\n                              ")]) : _vm._l((_vm$file_data_list_a_ = _vm.file_data_list_a_signe[index]) === null || _vm$file_data_list_a_ === void 0 ? void 0 : _vm$file_data_list_a_.slice(0, _vm.showMoreNumber), function (file_a_signe, fileIndexASigne) {
      return _c("div", {
        key: fileIndexASigne + index + "xa",
        staticClass: "mb-2 nowrap"
      }, [_c("span", {
        staticClass: "p-1 px-2 mx-2 text-nowrap",
        staticStyle: {
          color: "black",
          "font-size": "13px",
          "border-radius": "5px",
          "margin-left": "0 !important",
          width: "150px"
        },
        attrs: {
          title: file_a_signe.file_name + "." + file_a_signe.file_ext
        }
      }, [_c("i", {
        "class": _vm.getIcon(file_a_signe === null || file_a_signe === void 0 ? void 0 : file_a_signe.file_ext)
      }), _vm._v(" " + _vm._s(_vm.formatFileName(file_a_signe === null || file_a_signe === void 0 ? void 0 : file_a_signe.file_name)) + "." + _vm._s(file_a_signe === null || file_a_signe === void 0 ? void 0 : file_a_signe.file_ext) + "\n                                    ")]), _vm._v(" "), _c("span", {
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
          title: "Télécharger le contrat"
        },
        on: {
          click: function click($event) {
            return _vm.downloadFileASigner(index, fileIndexASigne);
          }
        }
      }, [_c("i", {
        staticClass: "icofont-download"
      })])]);
    })], 2)]) : _c("div", {
      staticClass: "text-center text-danger"
    }, [_vm._v("\n                          Aucun fichier(s) uploadé(s)\n                      ")])]), _vm._v(" "), _c("td", {
      staticClass: "text-center"
    }, [(contrats_signe === null || contrats_signe === void 0 ? void 0 : contrats_signe.files) > 0 ? _c("div", {
      staticClass: "d-flex align-items-center"
    }, [_c("div", [_vm.isLoadingFile ? _c("span", {
      staticClass: "p-1 px-2 mx-2 text-nowrap",
      staticStyle: {
        color: "black",
        "font-size": "13px",
        "border-radius": "5px",
        "margin-left": "0 !important",
        width: "150px"
      }
    }, [_vm._v("\n                                chargement...\n                              ")]) : _vm._l((_vm$file_data_list_si = _vm.file_data_list_signe[index]) === null || _vm$file_data_list_si === void 0 ? void 0 : _vm$file_data_list_si.slice(0, _vm.showMoreNumber), function (file_envoie, fileIndexEnvoie) {
      return _c("div", {
        key: fileIndexEnvoie + index + "xa",
        staticClass: "mb-2 nowrap"
      }, [_c("span", {
        staticClass: "p-1 px-2 mx-2 text-nowrap",
        staticStyle: {
          color: "black",
          "font-size": "13px",
          "border-radius": "5px",
          "margin-left": "0 !important",
          width: "150px"
        },
        attrs: {
          title: file_envoie.file_name + "." + file_envoie.file_ext
        }
      }, [_c("i", {
        "class": _vm.getIcon(file_envoie === null || file_envoie === void 0 ? void 0 : file_envoie.file_ext)
      }), _vm._v(" " + _vm._s(_vm.formatFileName(file_envoie === null || file_envoie === void 0 ? void 0 : file_envoie.file_name)) + "." + _vm._s(file_envoie === null || file_envoie === void 0 ? void 0 : file_envoie.file_ext) + "\n                                    ")]), _vm._v(" "), _c("span", {
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
          title: "Télécharger le contrat"
        },
        on: {
          click: function click($event) {
            return _vm.downloadFileSigner(index, fileIndexEnvoie);
          }
        }
      }, [_c("i", {
        staticClass: "icofont-download"
      })])]);
    })], 2)]) : _c("div", {
      staticClass: "text-center text-danger"
    }, [_vm._v("\n                          Aucun fichier(s) uploadé(s)\n                      ")])])]);
  }), 0)])])]) : _vm._e()]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", {
    staticClass: "bg-ed-primary"
  }, [_c("tr", [_c("th", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_c("b", [_vm._v("Nom du contrat")])])]), _vm._v(" "), _c("th", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_c("b", [_vm._v("Commentaire")])])]), _vm._v(" "), _c("th", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_c("b", [_vm._v("Fichier du contrat")])])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("th", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_c("b", [_vm._v("Nom du contrat")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("th", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_c("b", [_vm._v("Commentaire")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("th", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_c("b", [_vm._v("Contrat(s) à signer")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("th", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_c("b", [_vm._v("Contrat(s) signé(s)")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/ConventionOffview.vue?vue&type=style&index=0&id=f4656938&lang=css&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/ConventionOffview.vue?vue&type=style&index=0&id=f4656938&lang=css&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.bg-grey[data-v-f4656938] {\n    background-color: #f4f3f3;\n}\nth[data-v-f4656938] {\n    background: #f4f3f3 !important;\n}\n.head-memorandum-title[data-v-f4656938] {\n    margin-top: 15px;\n    padding: 16px;\n    color: #fff;\n    font-weight: bold;\n    background-color: #34495e;\n    border: 2px solid #575759;\n    box-shadow: 1px 3px 4px #ddd;\n    font-size: 16px;\n    text-align: center;\n    text-transform: uppercase;\n    border-radius: 10px;\n    margin-bottom: 15px;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/ConventionOffview.vue?vue&type=style&index=0&id=f4656938&lang=css&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/ConventionOffview.vue?vue&type=style&index=0&id=f4656938&lang=css&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ConventionOffview_vue_vue_type_style_index_0_id_f4656938_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ConventionOffview.vue?vue&type=style&index=0&id=f4656938&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/ConventionOffview.vue?vue&type=style&index=0&id=f4656938&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ConventionOffview_vue_vue_type_style_index_0_id_f4656938_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ConventionOffview_vue_vue_type_style_index_0_id_f4656938_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/shared/ConventionOffview.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/shared/ConventionOffview.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ConventionOffview_vue_vue_type_template_id_f4656938_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConventionOffview.vue?vue&type=template&id=f4656938&scoped=true */ "./resources/js/components/shared/ConventionOffview.vue?vue&type=template&id=f4656938&scoped=true");
/* harmony import */ var _ConventionOffview_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConventionOffview.vue?vue&type=script&lang=js */ "./resources/js/components/shared/ConventionOffview.vue?vue&type=script&lang=js");
/* harmony import */ var _ConventionOffview_vue_vue_type_style_index_0_id_f4656938_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ConventionOffview.vue?vue&type=style&index=0&id=f4656938&lang=css&scoped=true */ "./resources/js/components/shared/ConventionOffview.vue?vue&type=style&index=0&id=f4656938&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ConventionOffview_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _ConventionOffview_vue_vue_type_template_id_f4656938_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _ConventionOffview_vue_vue_type_template_id_f4656938_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "f4656938",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/shared/ConventionOffview.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/shared/ConventionOffview.vue?vue&type=script&lang=js":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/shared/ConventionOffview.vue?vue&type=script&lang=js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ConventionOffview_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ConventionOffview.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/ConventionOffview.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ConventionOffview_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/shared/ConventionOffview.vue?vue&type=style&index=0&id=f4656938&lang=css&scoped=true":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/components/shared/ConventionOffview.vue?vue&type=style&index=0&id=f4656938&lang=css&scoped=true ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ConventionOffview_vue_vue_type_style_index_0_id_f4656938_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ConventionOffview.vue?vue&type=style&index=0&id=f4656938&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/ConventionOffview.vue?vue&type=style&index=0&id=f4656938&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/shared/ConventionOffview.vue?vue&type=template&id=f4656938&scoped=true":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/shared/ConventionOffview.vue?vue&type=template&id=f4656938&scoped=true ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ConventionOffview_vue_vue_type_template_id_f4656938_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ConventionOffview_vue_vue_type_template_id_f4656938_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ConventionOffview_vue_vue_type_template_id_f4656938_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ConventionOffview.vue?vue&type=template&id=f4656938&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/ConventionOffview.vue?vue&type=template&id=f4656938&scoped=true");


/***/ })

}]);