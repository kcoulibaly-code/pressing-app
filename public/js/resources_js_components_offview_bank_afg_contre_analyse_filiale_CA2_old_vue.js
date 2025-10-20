"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_offview_bank_afg_contre_analyse_filiale_CA2_old_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA2.old.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA2.old.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _shared_afg_Garantie_GarantieOffview_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/afg/Garantie/GarantieOffview.vue */ "./resources/js/components/shared/afg/Garantie/GarantieOffview.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "CA2",
  components: {
    GarantieOffview: _shared_afg_Garantie_GarantieOffview_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    dossier_credit: Object
  },
  data: function data() {
    return {
      cred_pub_tb_14071: this.dossier_credit.cred_pub_tb_14071,
      // Propositions Concours/Facilitées
      cred_pub_tb_14072: this.dossier_credit.cred_pub_tb_14072,
      // Garanties
      tb_name: "tb14072"
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Garantie/GarantieOffview.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Garantie/GarantieOffview.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_connects_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../services/connects.service */ "./resources/js/services/connects.service.js");
/* harmony import */ var _services_afg_garantie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/afg/garantie.service */ "./resources/js/services/afg/garantie.service.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "GarantieOffview",
  props: {
    credPubKey: String,
    facilitesSollicitees: Array,
    garanties: Array,
    commentaire: String,
    tbName: String,
    compact: {
      type: Boolean,
      "default": false
    }
  },
  components: {
    FileCount: {
      name: "FileCount",
      props: {
        count: Number,
        garantieId: String,
        index: Number
      },
      template: "\n      <span v-if=\"count > 0\">\n        <span\n          class=\"p-1 px-2 mx-2 text-nowrap\"\n          style=\"\n            background-color: rgb(44, 62, 80);\n            color: white;\n            font-size: 13px;\n            border-radius: 5px;\n            margin-left: 0 !important;\n            width: 150px;\n          \"\n        >\n          {{ count + \" fichier(s) upload\xE9(s)\" }}\n        </span>\n        <button\n          type=\"button\"\n          class=\"btn shadow-md text-white\"\n          style=\"\n            cursor: pointer;\n            cursor: pointer;\n            background: #2c3e50;\n            width: 26px;\n            font-size: 13px;\n            padding: 1px;\n          \"\n          @click=\"$emit('view-files', { index, garantieId })\"\n          data-toggle=\"tooltip\"\n          title=\"Cliquer ici pour uploader ou voir le(s) fichier(s)\"\n        >\n          <i class=\"icofont-attachment\"></i>\n        </button>\n      </span>\n      <span v-else class=\"text-danger\">\n        Aucun fichier(s) upload\xE9(s)\n      </span>\n      "
    },
    RecueillieCheckbox: {
      name: "RecueillieCheckbox",
      props: {
        isRecueillie: {
          type: [String, null]
        }
      },
      template: "\n      <span>\n        <span class=\"badge badge-danger\" v-if=\"isRecueillie?.toLowerCase() =='non'\">\n          A Recueillir\n        </span>\n        <span class=\"badge badge-success\" v-else-if=\"isRecueillie?.toLowerCase() == 'oui'\">\n          Recueillie\n        </span>\n        <span class=\"badge badge-secondary\" v-else>\n          Non Sp\xE9cifi\xE9e\n        </span>\n      </span>\n      "
    }
  },
  data: function data() {
    return {
      connectsHost: _services_connects_service__WEBPACK_IMPORTED_MODULE_0__["default"].loadablehost(),
      dataGaranties: this.garanties,
      files: []
    };
  },
  computed: {
    computedGaranties: function computedGaranties() {
      var _this = this;
      var garanties = (this.dataGaranties || []).filter(function (g) {
        return g.checked;
      }).map(function (garantie) {
        var infos = garantie.infos.map(function (info, infoIndex) {
          var formattedInfo = _services_afg_garantie_service__WEBPACK_IMPORTED_MODULE_1__.GarantieService.getOrderedInfo(_services_afg_garantie_service__WEBPACK_IMPORTED_MODULE_1__.GarantieService.getLabeledInfo(garantie.id, info));
          if (!formattedInfo) return null;
          for (var key in formattedInfo) {
            var _formattedInfo$key;
            if (!((_formattedInfo$key = formattedInfo[key]) !== null && _formattedInfo$key !== void 0 && _formattedInfo$key.displayable)) {
              continue;
            }
            if (formattedInfo[key] === null || formattedInfo[key] === undefined) {
              formattedInfo[key] = '';
            }
            var value = formattedInfo[key].value;
            var component = null;
            switch (key) {
              case 'ligneCredit':
                value = _this.formaTypeFacilite(value);
                break;
              case 'montant':
              case 'valeurAssuree':
              case 'valeur_caution':
              case 'valeur_marchande':
              case 'valeur_considere':
                value = _this.formatAmount(value);
                break;
              case 'files':
                component = 'FileCount';
                value = {
                  count: value,
                  garantieId: garantie.id,
                  index: infoIndex
                };
                break;
              case 'is_recueillie':
                component = 'RecueillieCheckbox';
                value = {
                  isRecueillie: value
                };
                break;
              case 'annee_achat':
                value = _this.formatDate(value);
                break;
              case 'commentaire':
                value = value ? value : 'Pas de commentaire';
                break;
              default:
                break;
            }
            formattedInfo[key].value = value;
            if (component) {
              formattedInfo[key].component = component;
            }
          }
          return formattedInfo;
        }).filter(Boolean);
        return _objectSpread(_objectSpread({}, garantie), {}, {
          countInfos: infos.length,
          infos: infos
        });
      });
      if (!this.compact) return garanties;

      // actuellement garanties a cette structure:
      [{
        id: 'garantie1',
        name: 'Garantie 1',
        checked: true,
        countInfos: 2,
        infos: [{
          ligneCredit: {
            label: '...',
            value: 'credit1',
            displayable: true
          },
          montant: {
            label: 'Montant',
            value: 100000,
            displayable: true
          },
          is_recueillie: {
            label: 'Recueillie',
            value: {
              isRecueillie: 'oui'
            },
            displayable: true,
            component: 'RecueillieCheckbox'
          },
          files: {
            label: 'Fichiers',
            value: {
              count: 2
            },
            displayable: true,
            component: 'FileCount'
          }
        }, {
          ligneCredit: {
            label: '...',
            value: 'credit2',
            displayable: true
          },
          montant: {
            label: 'Montant',
            value: 100000,
            displayable: true
          },
          is_recueillie: {
            label: 'Recueillie',
            value: {
              isRecueillie: 'oui'
            },
            displayable: true,
            component: 'RecueillieCheckbox'
          },
          files: {
            label: 'Fichiers',
            value: {
              count: 2
            },
            displayable: true,
            component: 'FileCount'
          }
        }]
      }];
      // On veut les infos sous ce format:
      [{
        id: 'garantie1',
        name: 'Garantie 1',
        checked: true,
        countInfos: 2,
        infos: {
          ligneCredit: {
            label: '...',
            displayable: true,
            value: ['credit1', 'credit2']
          },
          montant: {
            label: 'Montant',
            displayable: true,
            value: [100000, 100000]
          },
          is_recueillie: {
            label: 'Recueillie',
            displayable: true,
            component: 'RecueillieCheckbox',
            value: [{
              isRecueillie: 'oui'
            }, {
              isRecueillie: 'oui'
            }]
          },
          files: {
            label: 'Fichiers',
            displayable: true,
            component: 'FileCount',
            value: [{
              count: 2
            }, {
              count: 2
            }]
          }
        }
      }];
      var compactedGaranties = garanties.map(function (garantie) {
        var infos = {};
        garantie.infos.forEach(function (info) {
          for (var key in info) {
            var _info$key = info[key],
              label = _info$key.label,
              displayable = _info$key.displayable,
              component = _info$key.component,
              value = _info$key.value;
            if (!infos[key]) {
              infos[key] = _objectSpread(_objectSpread({
                label: label,
                displayable: displayable
              }, component && {
                component: component
              }), {}, {
                value: []
              });
            }
            infos[key].value.push(value);
          }
        });
        return _objectSpread(_objectSpread({}, garantie), {}, {
          infos: infos
        });
      });
      return compactedGaranties;
    }
  },
  methods: {
    formaTypeFacilite: function formaTypeFacilite(data) {
      var _this$facilitesSollic;
      var f = (_this$facilitesSollic = this.facilitesSollicitees) === null || _this$facilitesSollic === void 0 ? void 0 : _this$facilitesSollic.find(function (f) {
        return f.uuid == data;
      });
      if (!f) return '';
      return f.type_facilite + '-' + f.montant_credit;
    },
    formatDate: function formatDate(date) {
      if (['', null, undefined].includes(date)) return '';
      var options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
      };
      return new Date(date).toLocaleDateString('fr', options);
    },
    formatAmount: function formatAmount(x) {
      var _num$toString;
      var num = parseFloat(String(this.localeStringToFloat(x || '0')));
      return num === null || num === void 0 || (_num$toString = num.toString()) === null || _num$toString === void 0 ? void 0 : _num$toString.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    },
    handleDoubleClickOrClick: function handleDoubleClickOrClick(_ref, garantieId) {
      var _garantie$infos;
      var index = _ref.index;
      var garantie = this.dataGaranties.find(function (g) {
        return g.id === garantieId;
      });
      var info = garantie === null || garantie === void 0 || (_garantie$infos = garantie.infos) === null || _garantie$infos === void 0 ? void 0 : _garantie$infos[index];
      if (!garantie || !info) {
        return;
      }

      // Créer un nom unique pour le template
      var identity = "".concat(this.credPubKey, "_").concat(garantieId, "_").concat(info.id);
      // const templateName = `Pièce(s) jointe(s) {(*)}Suretes_et_garanties_check_list_${identity}_${this.tbName}`;
      var templateName = "Pi\xE8ce(s) jointe(s) {(*)}Suretes_et_garanties_check_list_".concat(identity);

      // Ouvre l'explorateur de fichiers
      EventBus.$emit('open-extra-file-explorer');

      // Envoie les métadonnées pour le template
      setTimeout(function () {
        EventBus.$emit('data-extra-file-explorer', {
          name: templateName,
          view: true
        });
      }, 500);
    },
    getFiles: function getFiles() {
      var _this2 = this;
      ProxyService.proxyEbapis({
        url: this.connectsHost + 'api/get-files',
        method: 'POST',
        data: {
          file_identity: this.credPubKey
        }
      }).then(function (res) {
        var _res$data$data;
        res.data = JSON.parse(res.data);
        if (((_res$data$data = res.data.data) === null || _res$data$data === void 0 ? void 0 : _res$data$data.length) >= 0) {
          _this2.files = res.data.data;
          _this2.dataGaranties.forEach(function (garantie, garantieIndex) {
            garantie.infos.forEach(function (info, infoIndex) {
              var count = 0;
              _this2.files.forEach(function (file) {
                var _info$template;
                if (file !== null && file !== void 0 && file.extra_file_template_id && (info === null || info === void 0 || (_info$template = info.template) === null || _info$template === void 0 ? void 0 : _info$template.id) === file.extra_file_template_id) {
                  count++;
                }
              });
              _this2.dataGaranties[garantieIndex].infos[index]["files"] = count;
            });
          });
          _this2.$emit('input-change', _this2.dataGaranties);
        }
      })["catch"](function (err) {
        console.error('Erreur lors de la récupération des fichiers:', err);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA2.old.vue?vue&type=template&id=0d2470bc&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA2.old.vue?vue&type=template&id=0d2470bc&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div");
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Garantie/GarantieOffview.vue?vue&type=template&id=42cb27fe&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Garantie/GarantieOffview.vue?vue&type=template&id=42cb27fe&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("div", {
    staticClass: "mt-3"
  }, [_c("h3", {
    staticClass: "text-center underline fw-bold text-uppercase fs-normal"
  }, [_vm._v("\n        A- RESUME DES GARANTIES\n      ")]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive mt-3"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(0), _vm._v(" "), _c("tbody", _vm._l(_vm.computedGaranties, function (garantie) {
    return _c("tr", {
      key: garantie.id
    }, [[_vm._m(1, true), _vm._v(" "), _c("td", [_vm._v(_vm._s(garantie.name))])]], 2);
  }), 0)])])]), _vm._v(" "), _c("div", {
    staticClass: "mt-4"
  }, [_c("h3", {
    staticClass: "text-center underline fw-bold text-uppercase fs-normal"
  }, [_vm._v("\n        B- DETAILS SUR LES GARANTIES\n      ")]), _vm._v(" "), _vm.compact ? _c("div", {
    staticClass: "mt-3"
  }, [_vm._l(_vm.computedGaranties, function (garantie) {
    return [_c("div", {
      staticClass: "table-responsive garantie-details mt-3"
    }, [_c("h4", {
      staticClass: "garantie-title"
    }, [_vm._v("\n              " + _vm._s(garantie.name) + "\n            ")]), _vm._v(" "), _c("table", {
      staticClass: "table table-bordered"
    }, [_c("tbody", [_vm._l(Object.entries(garantie.infos), function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        item = _ref2[1];
      return [item.displayable ? _c("tr", {
        key: "".concat(garantie.id, "-compact-").concat(key)
      }, [_c("td", {
        staticClass: "sticky-col fw-bold label-col"
      }, [_c("span", {
        staticClass: "fw-bold"
      }, [_vm._v(_vm._s(item === null || item === void 0 ? void 0 : item.label))])]), _vm._v(" "), _vm._l(item.value, function (value, valueIndex) {
        return _c("td", {
          key: "".concat(garantie.id, "-compact-").concat(key, "-").concat(valueIndex),
          staticClass: "data-col"
        }, [item.component ? [_c(item.component, _vm._b({
          tag: "component",
          on: {
            "view-files": function viewFiles($event) {
              return _vm.handleDoubleClickOrClick({
                index: valueIndex
              }, garantie.id);
            }
          }
        }, "component", _objectSpread({}, value), false))] : item.value && value ? _c("span", [_vm._v("\n                        " + _vm._s(value) + "\n                      ")]) : _c("span", {
          staticClass: "text-muted"
        }, [_vm._v("Non spécifié")])], 2);
      })], 2) : _vm._e()];
    })], 2)])])];
  })], 2) : _c("div", {
    staticClass: "mt-3"
  }, [_vm._l(_vm.computedGaranties, function (garantie) {
    return _vm._l(garantie.infos, function (info, infoIndex) {
      var _info$id;
      return _c("div", {
        key: "".concat(garantie.id, "-").concat((_info$id = info.id) !== null && _info$id !== void 0 ? _info$id : infoIndex),
        staticClass: "table-responsive mt-3"
      }, [_c("table", {
        staticClass: "table table-bordered"
      }, [_c("thead", [_c("tr", [_c("th", {
        staticClass: "sticky-col fw-bold text-center bg-white",
        attrs: {
          colspan: "2"
        }
      }, [_vm._v("\n                    " + _vm._s(garantie.name) + "\n                  ")])])]), _vm._v(" "), _c("tbody", [_vm._l(Object.entries(info), function (_ref3) {
        var _info$id2;
        var _ref4 = _slicedToArray(_ref3, 2),
          key = _ref4[0],
          item = _ref4[1];
        return [item.displayable ? _c("tr", {
          key: "".concat(garantie.id, "-").concat((_info$id2 = info.id) !== null && _info$id2 !== void 0 ? _info$id2 : infoIndex, "-").concat(key)
        }, [_c("td", {
          staticClass: "sticky-col fw-bold label-col"
        }, [_c("span", {
          staticClass: "fw-bold"
        }, [_vm._v(_vm._s(item === null || item === void 0 ? void 0 : item.label))])]), _vm._v(" "), _c("td", [item.component ? [_c(item.component, _vm._b({
          tag: "component",
          on: {
            "view-files": function viewFiles($event) {
              return _vm.handleDoubleClickOrClick({
                index: infoIndex
              }, garantie.id);
            }
          }
        }, "component", _objectSpread({}, item.value), false))] : item.value ? _c("span", [_vm._v("\n                        " + _vm._s(item.value) + "\n                      ")]) : _c("span", {
          staticClass: "text-muted"
        }, [_vm._v("Non spécifié")])], 2)]) : _vm._e()];
      })], 2)])]);
    });
  })], 2)]), _vm._v(" "), _c("div", {
    staticClass: "mt-4"
  }, [_c("h3", {
    staticClass: "text-center underline fw-bold text-uppercase fs-normal"
  }, [_vm._v("\n        C- COMMENTAIRE\n      ")]), _vm._v(" "), _c("div", {
    staticClass: "mt-2"
  }, [_c("span", {
    domProps: {
      innerHTML: _vm._s(_vm.commentaire || "Pas de commentaire")
    }
  })])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", {
    staticClass: "text-center"
  }, [_c("th"), _vm._v(" "), _c("th", {
    staticClass: "text-center"
  }, [_c("label", [_vm._v("Type garantie")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "text-center"
  }, [_c("input", {
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
  })]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA2.old.vue?vue&type=style&index=0&id=0d2470bc&scoped=true&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA2.old.vue?vue&type=style&index=0&id=0d2470bc&scoped=true&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.head-memorandum-title[data-v-0d2470bc] {\r\n  font-weight: bold;\r\n  text-transform: uppercase;\r\n  text-align: center;\r\n  border: 1px solid;\r\n  padding: 4px;\n}\n.table[data-v-0d2470bc] {\r\n  position: relative;\r\n  border-collapse: collapse;\r\n  width: 100%;\n}\n.sticky-col[data-v-0d2470bc] {\r\n  position: sticky;\r\n  left: 0;\r\n  background: #f8f9fa;\r\n  /* z-index: 15; */\r\n  min-width: 200px;\r\n  font-weight: bold;\n}\n.table-bordered .sticky-col[data-v-0d2470bc] {\r\n  border-right: 2px solid #dee2e6;\n}\nthead th[data-v-0d2470bc] {\r\n  position: sticky;\r\n  top: 0;\r\n  background: #f8f9fa;\r\n  z-index: 10;\n}\n.bg-grey[data-v-0d2470bc] {\r\n  background-color: #f4f3f3;\n}\ninput[type=checkbox][data-v-0d2470bc] {\r\n  padding: 10px;\n}\ninput[type=\"checkbox\"][data-v-0d2470bc]:disabled:checked {\r\n  -webkit-appearance: none;\r\n     -moz-appearance: none;\r\n          appearance: none;\r\n  padding: 7px;\r\n  background-color: #007bff;\r\n  border-radius: 2px;\r\n  position: relative;\r\n  cursor: not-allowed;\r\n  margin-top: 5px;\n}\ninput[type=\"checkbox\"][data-v-0d2470bc]:disabled:checked::after {\r\n  content: '✔';\r\n  color: white;\r\n  font-size: 8px;\r\n  font-weight: bold;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\n}\nthead th[data-v-0d2470bc] {\r\n  background: initial !important;\n}\n.vertical-middle[data-v-0d2470bc] {\r\n  vertical-align: middle;\n}\ntable[data-v-0d2470bc] {\r\n  margin-bottom: 0;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Garantie/GarantieOffview.vue?vue&type=style&index=0&id=42cb27fe&scoped=true&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Garantie/GarantieOffview.vue?vue&type=style&index=0&id=42cb27fe&scoped=true&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.sticky-col[data-v-42cb27fe] {\r\n  position: sticky;\r\n  left: 0;\r\n  background: #f8f9fa;\r\n  /* z-index: 15; */\r\n  min-width: 200px;\r\n  font-weight: bold;\n}\ntable[data-v-42cb27fe] {\r\n  border: none;\n}\n.garantie-details table td[data-v-42cb27fe]:first-child,\r\n.garantie-details table th[data-v-42cb27fe]:first-child {\r\n  border-left: 0;\n}\n.garantie-details table td[data-v-42cb27fe]:last-child,\r\n.garantie-details table th[data-v-42cb27fe]:last-child {\r\n  border-right: 0;\n}\n.garantie-details table tr[data-v-42cb27fe]:last-child {\r\n  border-bottom: 0;\n}\n.garantie-details[data-v-42cb27fe] {\r\n  border: 1px solid #000;\r\n  position: relative;\n}\n.garantie-details .garantie-title[data-v-42cb27fe] {\r\n  font-weight: bold;\r\n  font-size: 1rem;\r\n  text-align: center;\r\n  padding: 0.5rem;\r\n  /* border: 1px solid #000; */\r\n  border-bottom: none;\r\n  margin: 0;\r\n  position: sticky;\r\n  left: 0;\r\n  top: 0;\n}\nthead th[data-v-42cb27fe] {\r\n  position: sticky;\r\n  top: 0;\r\n  background: #f8f9fa;\r\n  z-index: 10;\n}\n.bg-grey[data-v-42cb27fe] {\r\n  background-color: #f4f3f3;\n}\ninput[type=checkbox][data-v-42cb27fe] {\r\n  padding: 10px;\n}\ninput[type=\"checkbox\"][data-v-42cb27fe]:disabled:checked {\r\n  -webkit-appearance: none;\r\n     -moz-appearance: none;\r\n          appearance: none;\r\n  padding: 7px;\r\n  background-color: #007bff;\r\n  border-radius: 2px;\r\n  position: relative;\r\n  cursor: not-allowed;\r\n  margin-top: 5px;\n}\ninput[type=\"checkbox\"][data-v-42cb27fe]:disabled:checked::after {\r\n  content: '✔';\r\n  color: white;\r\n  font-size: 8px;\r\n  font-weight: bold;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\n}\nthead th[data-v-42cb27fe] {\r\n  background: initial !important;\n}\n.vertical-middle[data-v-42cb27fe] {\r\n  vertical-align: middle;\n}\ntable[data-v-42cb27fe] {\r\n  margin-bottom: 0;\n}\ntable .label-col[data-v-42cb27fe] {\r\n  min-width: 300px;\r\n  width: 300px;\r\n  max-width: 300px;\n}\ntable .data-col[data-v-42cb27fe] {\r\n  min-width: 250px;\r\n  max-width: 300px;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA2.old.vue?vue&type=style&index=0&id=0d2470bc&scoped=true&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA2.old.vue?vue&type=style&index=0&id=0d2470bc&scoped=true&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA2_old_vue_vue_type_style_index_0_id_0d2470bc_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CA2.old.vue?vue&type=style&index=0&id=0d2470bc&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA2.old.vue?vue&type=style&index=0&id=0d2470bc&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA2_old_vue_vue_type_style_index_0_id_0d2470bc_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA2_old_vue_vue_type_style_index_0_id_0d2470bc_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Garantie/GarantieOffview.vue?vue&type=style&index=0&id=42cb27fe&scoped=true&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Garantie/GarantieOffview.vue?vue&type=style&index=0&id=42cb27fe&scoped=true&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GarantieOffview_vue_vue_type_style_index_0_id_42cb27fe_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GarantieOffview.vue?vue&type=style&index=0&id=42cb27fe&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Garantie/GarantieOffview.vue?vue&type=style&index=0&id=42cb27fe&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GarantieOffview_vue_vue_type_style_index_0_id_42cb27fe_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GarantieOffview_vue_vue_type_style_index_0_id_42cb27fe_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA2.old.vue":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA2.old.vue ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CA2_old_vue_vue_type_template_id_0d2470bc_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CA2.old.vue?vue&type=template&id=0d2470bc&scoped=true */ "./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA2.old.vue?vue&type=template&id=0d2470bc&scoped=true");
/* harmony import */ var _CA2_old_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CA2.old.vue?vue&type=script&lang=js */ "./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA2.old.vue?vue&type=script&lang=js");
/* harmony import */ var _CA2_old_vue_vue_type_style_index_0_id_0d2470bc_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CA2.old.vue?vue&type=style&index=0&id=0d2470bc&scoped=true&lang=css */ "./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA2.old.vue?vue&type=style&index=0&id=0d2470bc&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CA2_old_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _CA2_old_vue_vue_type_template_id_0d2470bc_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _CA2_old_vue_vue_type_template_id_0d2470bc_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "0d2470bc",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/offview/bank/afg/contre_analyse_filiale/CA2.old.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA2.old.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA2.old.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CA2_old_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CA2.old.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA2.old.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CA2_old_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA2.old.vue?vue&type=style&index=0&id=0d2470bc&scoped=true&lang=css":
/*!*********************************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA2.old.vue?vue&type=style&index=0&id=0d2470bc&scoped=true&lang=css ***!
  \*********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA2_old_vue_vue_type_style_index_0_id_0d2470bc_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CA2.old.vue?vue&type=style&index=0&id=0d2470bc&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA2.old.vue?vue&type=style&index=0&id=0d2470bc&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA2.old.vue?vue&type=template&id=0d2470bc&scoped=true":
/*!*******************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA2.old.vue?vue&type=template&id=0d2470bc&scoped=true ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA2_old_vue_vue_type_template_id_0d2470bc_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA2_old_vue_vue_type_template_id_0d2470bc_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA2_old_vue_vue_type_template_id_0d2470bc_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CA2.old.vue?vue&type=template&id=0d2470bc&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA2.old.vue?vue&type=template&id=0d2470bc&scoped=true");


/***/ }),

/***/ "./resources/js/components/shared/afg/Garantie/GarantieOffview.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/components/shared/afg/Garantie/GarantieOffview.vue ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GarantieOffview_vue_vue_type_template_id_42cb27fe_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GarantieOffview.vue?vue&type=template&id=42cb27fe&scoped=true */ "./resources/js/components/shared/afg/Garantie/GarantieOffview.vue?vue&type=template&id=42cb27fe&scoped=true");
/* harmony import */ var _GarantieOffview_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GarantieOffview.vue?vue&type=script&lang=js */ "./resources/js/components/shared/afg/Garantie/GarantieOffview.vue?vue&type=script&lang=js");
/* harmony import */ var _GarantieOffview_vue_vue_type_style_index_0_id_42cb27fe_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GarantieOffview.vue?vue&type=style&index=0&id=42cb27fe&scoped=true&lang=css */ "./resources/js/components/shared/afg/Garantie/GarantieOffview.vue?vue&type=style&index=0&id=42cb27fe&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _GarantieOffview_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _GarantieOffview_vue_vue_type_template_id_42cb27fe_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _GarantieOffview_vue_vue_type_template_id_42cb27fe_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "42cb27fe",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/shared/afg/Garantie/GarantieOffview.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/shared/afg/Garantie/GarantieOffview.vue?vue&type=script&lang=js":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/shared/afg/Garantie/GarantieOffview.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GarantieOffview_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GarantieOffview.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Garantie/GarantieOffview.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GarantieOffview_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/shared/afg/Garantie/GarantieOffview.vue?vue&type=style&index=0&id=42cb27fe&scoped=true&lang=css":
/*!*********************************************************************************************************************************!*\
  !*** ./resources/js/components/shared/afg/Garantie/GarantieOffview.vue?vue&type=style&index=0&id=42cb27fe&scoped=true&lang=css ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GarantieOffview_vue_vue_type_style_index_0_id_42cb27fe_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GarantieOffview.vue?vue&type=style&index=0&id=42cb27fe&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Garantie/GarantieOffview.vue?vue&type=style&index=0&id=42cb27fe&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/shared/afg/Garantie/GarantieOffview.vue?vue&type=template&id=42cb27fe&scoped=true":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/shared/afg/Garantie/GarantieOffview.vue?vue&type=template&id=42cb27fe&scoped=true ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GarantieOffview_vue_vue_type_template_id_42cb27fe_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GarantieOffview_vue_vue_type_template_id_42cb27fe_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GarantieOffview_vue_vue_type_template_id_42cb27fe_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GarantieOffview.vue?vue&type=template&id=42cb27fe&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Garantie/GarantieOffview.vue?vue&type=template&id=42cb27fe&scoped=true");


/***/ })

}]);