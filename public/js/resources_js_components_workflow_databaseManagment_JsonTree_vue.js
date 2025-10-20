"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_workflow_databaseManagment_JsonTree_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/workflow/databaseManagment/JsonTree.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/workflow/databaseManagment/JsonTree.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "JsonTree",
  props: {
    data: {
      type: [Object, Array],
      required: true
    },
    path: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    docId: {
      type: [String, Object],
      required: false
    },
    collectionName: {
      type: String,
      required: false,
      "default": ''
    },
    collectionSource: {
      type: String,
      required: false,
      "default": ''
    }
  },
  data: function data() {
    return {
      openNode: null,
      isEditingKey: {},
      isEditingValue: {},
      editKeyBuffer: {},
      editValueBuffer: {},
      showConfirmBar: false,
      selectedTypeBuffer: {}
    };
  },
  methods: {
    onError: function onError(error) {
      this.$toasted.error(error.message);
    },
    // ——— Edition clé / valeur ———
    editKey: function editKey(key) {
      // Vérifier si l'édition est autorisée pour la collection
      if (this.isEditingRestricted()) {
        return;
      }
      //vérifier si la valeur associée est en cours d'édition
      if (this.isEditingValue[key]) return;
      this.$set(this.editKeyBuffer, key, key); // Initialiser avec la clé actuelle
      this.$set(this.isEditingKey, key, true);
      this.$set(this.selectedTypeBuffer, key, this.getValueType(this.data[key]));
      this.showConfirmBar = true;
    },
    startEditing: function startEditing(key) {
      // Vérifier si l'édition est autorisée pour la collection
      if (this.isEditingRestricted()) {
        return;
      }
      //verifier si la clé associée est en cours d'édition
      if (this.isEditingKey[key]) return;
      this.$set(this.editValueBuffer, key, this.data[key] === null ? "null" : this.data[key]); // Initialiser avec la valeur actuelle
      this.$set(this.isEditingValue, key, true);
      this.$set(this.selectedTypeBuffer, key, this.getValueType(this.data[key]));
      this.showConfirmBar = true;
    },
    saveEdit: function saveEdit() {
      if (!this.docId) {
        console.error("docId is undefined");
        this.$emit("error", {
          message: "ID du document non défini"
        });
        this.cancelEdit();
        return;
      }
      // Créer un tableau pour regrouper toutes les modifications
      var updates = [];
      // Ajouter les clés modifiées
      for (var _i = 0, _Object$entries = Object.entries(this.editKeyBuffer); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
          oldKey = _Object$entries$_i[0],
          newKey = _Object$entries$_i[1];
        if (this.isEditingKey[oldKey] && newKey && newKey !== oldKey) {
          var type = this.selectedTypeBuffer[oldKey] || "string";
          var parsedValue = this.parseValue(this.data[oldKey], type);
          this.$set(this.data, newKey, parsedValue);
          this.$delete(this.data, oldKey);
          var parentPath = this.path.length > 0 ? this.toDotPath(this.path) : "";
          updates.push({
            action: "rename-key",
            path: parentPath ? "".concat(parentPath, ".").concat(newKey) : newKey,
            value: parsedValue,
            type: type,
            docId: this.docId,
            oldKey: oldKey,
            newKey: newKey,
            parentPath: parentPath
          });
        }
      }
      // Ajouter les valeurs modifiées
      for (var _i2 = 0, _Object$entries2 = Object.entries(this.editValueBuffer); _i2 < _Object$entries2.length; _i2++) {
        var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
          key = _Object$entries2$_i[0],
          value = _Object$entries2$_i[1];
        if (this.isEditingValue[key]) {
          var _type = this.selectedTypeBuffer[key] || "string";
          var _parsedValue = this.parseValue(value, _type);
          var originalValue = this.data[key] === null ? "null" : this.data[key];
          if (_parsedValue !== originalValue) {
            this.$set(this.data, key, _parsedValue);
            var fullPath = [].concat(_toConsumableArray(this.path), [this.toPathKey(key)]);
            updates.push({
              action: "set",
              path: this.toDotPath(fullPath),
              value: _parsedValue,
              type: _type,
              docId: this.docId
            });
          }
        }
      }
      // Émettre un seul événement avec le tableau des modifications
      if (updates.length > 0) {
        this.$emit("update-value", updates);
      }
      // Réinitialiser l’état
      this.isEditingKey = {};
      this.isEditingValue = {};
      this.editKeyBuffer = {};
      this.editValueBuffer = {};
      this.showConfirmBar = false;
    },
    cancelEdit: function cancelEdit() {
      this.isEditingKey = {};
      this.isEditingValue = {};
      this.editKeyBuffer = {};
      this.editValueBuffer = {};
      this.showConfirmBar = false;
    },
    // ——— Clear / Delete ———
    onClear: function onClear(key) {
      //verifier si la valeur est deja null

      this.$set(this.data, key, null);
      this.$emit("clear-value", {
        action: "clear",
        path: this.toDotPath([].concat(_toConsumableArray(this.path), [this.toPathKey(key)])),
        docId: this.docId
      });
      this.cancelEdit();
    },
    onDelete: function onDelete(key) {
      this.$delete(this.data, key);
      this.$emit("delete-value", {
        action: "unset",
        path: this.toDotPath([].concat(_toConsumableArray(this.path), [this.toPathKey(key)])),
        docId: this.docId
      });
      this.cancelEdit();
    },
    getValueType: function getValueType(value) {
      if (value === null) return "null";
      if (_typeof(value) === "object" && "$date" in value) return "date";
      if (_typeof(value) === "object" && "$oid" in value) return "objectId";
      if (typeof value === "number") return "number";
      if (typeof value === "boolean") return "boolean";
      if (typeof value === "string") return "string";
      return "unknown";
    },
    // Mettre à jour le type
    updateType: function updateType(key) {
      var type = this.selectedTypeBuffer[key] || "string";
      var currentValue = this.isEditingValue[key] ? this.editValueBuffer[key] : this.data[key];
      var parsedValue = this.parseValue(currentValue, type);
      var updates = [];

      // Émettre l'événement update-value pour le changement de type
      updates.push({
        action: "setType",
        path: this.toDotPath([].concat(_toConsumableArray(this.path), [this.toPathKey(key)])),
        value: parsedValue,
        type: type,
        docId: this.docId
      });
      if (updates.length > 0) {
        this.$emit("update-value", updates);
        this.$set(this.data, key, parsedValue);
      }
      if (this.isEditingValue[key]) {
        this.$set(this.editValueBuffer, key, parsedValue);
      }
      // Réinitialiser l’état
      this.isEditingKey = {};
      this.isEditingValue = {};
      this.editKeyBuffer = {};
      this.editValueBuffer = {};
      this.showConfirmBar = false;
    },
    // ——— Types ———
    parseValue: function parseValue(val) {
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "string";
      if (val === "null") return null;
      if (type === "number") {
        if (typeof val === "number") return val;
        if (typeof val === "string" && val.trim() !== "" && !isNaN(val)) {
          return Number(val);
        }
      }
      if (type === "boolean") {
        return val === "true" || val === true;
      }
      if (type === "date") {
        // Liste des formats de date courants
        var datePatterns = [{
          pattern: /^(\d{4})[/-](\d{1,2})[/-](\d{1,2})$/,
          format: "YYYY-MM-DD"
        },
        // aaaa/mm/jj ou aaaa-mm-jj
        {
          pattern: /^(\d{1,2})[/-](\d{1,2})[/-](\d{4})$/,
          format: "DD-MM-YYYY"
        },
        // jj/mm/aaaa ou jj-mm-aaaa
        {
          pattern: /^(\d{1,2})[/-](\d{1,2})[/-](\d{2})$/,
          format: "DD-MM-YY"
        },
        // jj/mm/aa ou jj-mm-aa
        {
          pattern: /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?Z?$/,
          format: "ISO"
        } // ISO (e.g., 2023-10-01T00:00:00Z)
        ];
        var parsedDate;
        if (typeof val === "string" && val.trim() !== "") {
          // Tester chaque pattern
          var _iterator = _createForOfIteratorHelper(datePatterns),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var pattern = _step.value.pattern;
              if (pattern.test(val)) {
                parsedDate = new Date(val);
                if (!isNaN(parsedDate.getTime())) {
                  return {
                    $date: parsedDate.toISOString()
                  };
                }
              }
            }
            // Essayer un parsing direct pour d'autres formats
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
          parsedDate = new Date(val);
          if (!isNaN(parsedDate.getTime())) {
            return {
              $date: parsedDate.toISOString()
            };
          }
        }
        // Si la conversion échoue, retourner la valeur brute
        return val;
      }
      return String(val);
    },
    isTypeCompatible: function isTypeCompatible(key, targetType) {
      var value = this.data[key];
      var currentType = this.getValueType(value);

      // Permettre 'null' à convertir en n'importe quel type
      if (value === null) return true;

      // Objets complexes et tableaux ne peuvent pas être convertis en types scalaires
      if (this.isObject(value) && !('$date' in value || '$oid' in value) || this.isArray(value)) {
        return false;
      }

      // Vérifications de compatibilité par type cible
      if (targetType === 'string') {
        // Tout peut être converti en string
        return true;
      }
      if (targetType === 'number') {
        if (typeof value === 'number') return true;
        if (typeof value === 'string' && value.trim() !== '' && !isNaN(value)) return true;
        return false;
      }
      if (targetType === 'boolean') {
        if (typeof value === 'boolean') return true;
        if (typeof value === 'string' && (value.toLowerCase() === 'true' || value.toLowerCase() === 'false')) return true;
        return false;
      }
      if (targetType === 'date') {
        if (_typeof(value) === 'object' && '$date' in value) return true;
        if (typeof value === 'string' && value.trim() !== '') {
          var datePatterns = [/^(\d{4})[/-](\d{1,2})[/-](\d{1,2})$/, /^(\d{1,2})[/-](\d{1,2})[/-](\d{4})$/, /^(\d{1,2})[/-](\d{1,2})[/-](\d{2})$/, /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?Z?$/, /^(\d{1,2})\s+(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s+(\d{4})$/i];
          return datePatterns.some(function (pattern) {
            return pattern.test(value);
          }) && !isNaN(new Date(value).getTime());
        }
        return false;
      }
      return false;
    },
    // ——— Helpers path / dot notation ———
    toPathKey: function toPathKey(k) {
      return k;
    },
    toDotPath: function toDotPath(pathArr) {
      return pathArr.map(function (p) {
        return String(p);
      }).join(".");
    },
    // ——— Arbre ———
    isObject: function isObject(val) {
      return val && _typeof(val) === "object" && !Array.isArray(val);
    },
    isArray: function isArray(val) {
      return Array.isArray(val);
    },
    toggle: function toggle(key) {
      if (this.openNode === key) {
        this.openNode = null;
      } else {
        this.openNode = key;
      }
    },
    isOpen: function isOpen(key) {
      return this.openNode === key;
    },
    // ——— Classes / affichage ———
    valueClass: function valueClass(value) {
      if (value && _typeof(value) === "object" && "$date" in value) return "json-date";
      if (value && _typeof(value) === "object" && "$oid" in value) return "json-objectid";
      if (value === null) return "json-null";
      switch (_typeof(value)) {
        case "string":
          return "json-string";
        case "number":
          return "json-number";
        case "boolean":
          return "json-boolean";
        default:
          return "";
      }
    },
    formatValue: function formatValue(value) {
      var type = this.getValueType(value);
      if (type === "objectId") {
        return "ObjectId(\"".concat(value.$oid, "\")");
      }
      if (type === "date") {
        return "ISODate(\"".concat(value.$date, "\")");
      }
      if (type === "null") {
        return "null";
      }
      if (type === "string") {
        return "\"".concat(value, "\"");
      }
      if (type === "number") {
        return "".concat(value);
      }
      if (type === "boolean") {
        return "".concat(value);
      }
      return value.toString();
    },
    isEditingRestricted: function isEditingRestricted() {
      //ne permettre l'edition que sur filemetadata
      if (this.collectionSource === 'cofiloc' && this.collectionName === 'files_metadata') {
        return false; // Edition autorisée
      }
      return true;
    }
  },
  components: {
    JsonTree: null
  },
  beforeCreate: function beforeCreate() {
    this.$options.components.JsonTree = this.$options;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/workflow/databaseManagment/JsonTree.vue?vue&type=template&id=eb9018f2&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/workflow/databaseManagment/JsonTree.vue?vue&type=template&id=eb9018f2&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "json-container"
  }, [_c("ul", {
    staticClass: "json-tree"
  }, _vm._l(_vm.data, function (value, key) {
    return key !== "_id" ? _c("li", {
      key: key,
      staticClass: "json-node"
    }, [_vm.isObject(value) ? _c("span", {
      staticClass: "json-object"
    }, [_c("span", {
      staticClass: "json-toggle",
      on: {
        click: function click($event) {
          return _vm.toggle(key);
        }
      }
    }, [_vm._v("\n                    " + _vm._s(_vm.isOpen(key) ? "▼" : "▶") + "\n                ")]), _vm._v(" "), !_vm.isEditingKey[key] ? _c("span", {
      staticClass: "json-key",
      on: {
        dblclick: function dblclick($event) {
          return _vm.editKey(key);
        }
      }
    }, [_vm._v('\n                    "' + _vm._s(key) + '"\n                ')]) : _c("span", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.editKeyBuffer[key],
        expression: "editKeyBuffer[key]"
      }],
      domProps: {
        value: _vm.editKeyBuffer[key]
      },
      on: {
        keyup: function keyup($event) {
          if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
          return _vm.saveEdit.apply(null, arguments);
        },
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(_vm.editKeyBuffer, key, $event.target.value);
        }
      }
    })]), _vm._v("\n                :\n                "), _c("span", {
      staticClass: "bracket"
    }, [_vm._v("{")]), _vm._v(" "), _vm.isOpen(key) ? _c("json-tree", {
      attrs: {
        data: value,
        path: [].concat(_toConsumableArray(_vm.path), [_vm.toPathKey(key)]),
        "doc-id": _vm.docId,
        "collection-name": _vm.collectionName,
        "collection-source": _vm.collectionSource
      },
      on: {
        "update-value": function updateValue($event) {
          return _vm.$emit("update-value", $event);
        },
        "delete-value": function deleteValue($event) {
          return _vm.$emit("delete-value", $event);
        },
        "clear-value": function clearValue($event) {
          return _vm.$emit("clear-value", $event);
        }
      }
    }) : _vm._e(), _vm._v(" "), _c("span", {
      staticClass: "bracket"
    }, [_vm._v("}")]), _vm._v(" "), _vm.isEditingKey[key] || _vm.isEditingValue[key] ? _c("span", [_c("button", {
      staticClass: "btn-clear",
      attrs: {
        disabled: _vm.data[key] === null,
        title: _vm.data[key] === null ? "La valeur est déjà null" : "Effacer la valeur"
      },
      on: {
        click: function click($event) {
          return _vm.onClear(key);
        }
      }
    }, [_vm._v("❌")]), _vm._v(" "), _c("button", {
      staticClass: "btn-delete",
      on: {
        click: function click($event) {
          return _vm.onDelete(key);
        }
      }
    }, [_vm._v("🗑️")])]) : _vm._e()], 1) : _vm.isArray(value) ? _c("span", {
      staticClass: "json-array"
    }, [_c("span", {
      staticClass: "json-toggle",
      on: {
        click: function click($event) {
          return _vm.toggle(key);
        }
      }
    }, [_vm._v("\n                    " + _vm._s(_vm.isOpen(key) ? "▼" : "▶") + "\n                ")]), _vm._v(" "), !_vm.isEditingKey[key] ? _c("span", {
      staticClass: "json-key",
      on: {
        dblclick: function dblclick($event) {
          return _vm.editKey(key);
        }
      }
    }, [_vm._v('\n                    "' + _vm._s(key) + '"\n                ')]) : _c("span", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.editKeyBuffer[key],
        expression: "editKeyBuffer[key]"
      }],
      domProps: {
        value: _vm.editKeyBuffer[key]
      },
      on: {
        keyup: function keyup($event) {
          if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
          return _vm.saveEdit.apply(null, arguments);
        },
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(_vm.editKeyBuffer, key, $event.target.value);
        }
      }
    })]), _vm._v("\n                :\n                "), _c("span", {
      staticClass: "bracket"
    }, [_vm._v("[")]), _vm._v(" "), _vm.isOpen(key) ? _c("json-tree", {
      attrs: {
        data: value,
        path: [].concat(_toConsumableArray(_vm.path), [_vm.toPathKey(key)]),
        "doc-id": _vm.docId,
        "collection-name": _vm.collectionName,
        "collection-source": _vm.collectionSource
      },
      on: {
        "update-value": function updateValue($event) {
          return _vm.$emit("update-value", $event);
        },
        "delete-value": function deleteValue($event) {
          return _vm.$emit("delete-value", $event);
        },
        "clear-value": function clearValue($event) {
          return _vm.$emit("clear-value", $event);
        }
      }
    }) : _vm._e(), _vm._v(" "), _c("span", {
      staticClass: "bracket"
    }, [_vm._v("]")]), _vm._v(" "), _vm.isEditingKey[key] || _vm.isEditingValue[key] ? _c("span", [_c("button", {
      staticClass: "btn-clear",
      attrs: {
        disabled: _vm.data[key] === null,
        title: _vm.data[key] === null ? "La valeur est déjà null" : "Effacer la valeur"
      },
      on: {
        click: function click($event) {
          return _vm.onClear(key);
        }
      }
    }, [_vm._v("❌")]), _vm._v(" "), _c("button", {
      staticClass: "btn-delete",
      on: {
        click: function click($event) {
          return _vm.onDelete(key);
        }
      }
    }, [_vm._v("🗑️")])]) : _vm._e()], 1) : _c("span", {
      staticClass: "json-primitive"
    }, [!_vm.isEditingKey[key] ? _c("span", [_c("span", {
      staticClass: "json-key",
      on: {
        dblclick: function dblclick($event) {
          return _vm.editKey(key);
        }
      }
    }, [_vm._v('\n                        "' + _vm._s(key) + '"\n                    ')])]) : _c("span", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.editKeyBuffer[key],
        expression: "editKeyBuffer[key]"
      }],
      domProps: {
        value: _vm.editKeyBuffer[key]
      },
      on: {
        keyup: function keyup($event) {
          if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
          return _vm.saveEdit.apply(null, arguments);
        },
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(_vm.editKeyBuffer, key, $event.target.value);
        }
      }
    }), _vm._v(" "), _c("span", {
      staticClass: "float-right"
    }, [_c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.selectedTypeBuffer[key],
        expression: "selectedTypeBuffer[key]"
      }],
      on: {
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(_vm.selectedTypeBuffer, key, $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, function ($event) {
          return _vm.updateType(key);
        }]
      }
    }, [_c("option", {
      attrs: {
        value: "string",
        disabled: !_vm.isTypeCompatible(key, "string")
      }
    }, [_vm._v("string")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "number",
        disabled: !_vm.isTypeCompatible(key, "number")
      }
    }, [_vm._v("number")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "date",
        disabled: !_vm.isTypeCompatible(key, "date")
      }
    }, [_vm._v("date")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "boolean",
        disabled: !_vm.isTypeCompatible(key, "boolean")
      }
    }, [_vm._v("boolean")])])])]), _vm._v("\n                :\n\n                "), _vm._v(" "), !_vm.isEditingValue[key] ? _c("span", [_c("span", {
      "class": _vm.valueClass(value),
      on: {
        dblclick: function dblclick($event) {
          return _vm.startEditing(key);
        }
      }
    }, [_vm._v("\n                        " + _vm._s(_vm.formatValue(value)) + "\n                    ")])]) : _c("span", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.editValueBuffer[key],
        expression: "editValueBuffer[key]"
      }],
      domProps: {
        value: _vm.editValueBuffer[key]
      },
      on: {
        keyup: function keyup($event) {
          if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
          return _vm.saveEdit.apply(null, arguments);
        },
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(_vm.editValueBuffer, key, $event.target.value);
        }
      }
    })]), _vm._v(" "), _vm.isEditingKey[key] || _vm.isEditingValue[key] ? _c("span", [_c("button", {
      staticClass: "btn-clear",
      attrs: {
        disabled: _vm.data[key] === null,
        title: _vm.data[key] === null ? "La valeur est déjà null" : "Effacer la valeur"
      },
      on: {
        click: function click($event) {
          return _vm.onClear(key);
        }
      }
    }, [_vm._v("❌")]), _vm._v(" "), _c("button", {
      staticClass: "btn-delete",
      on: {
        click: function click($event) {
          return _vm.onDelete(key);
        }
      }
    }, [_vm._v("🗑️")])]) : _vm._e()])]) : _vm._e();
  }), 0), _vm._v(" "), _vm.showConfirmBar ? _c("div", {
    staticClass: "confirm-bar"
  }, [_c("button", {
    on: {
      click: _vm.cancelEdit
    }
  }, [_vm._v("Annuler")]), _vm._v(" "), _c("button", {
    on: {
      click: _vm.saveEdit
    }
  }, [_vm._v("Sauvegarder")])]) : _vm._e()]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/workflow/databaseManagment/JsonTree.vue?vue&type=style&index=0&id=eb9018f2&scoped=true&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/workflow/databaseManagment/JsonTree.vue?vue&type=style&index=0&id=eb9018f2&scoped=true&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.btn-clear[data-v-eb9018f2]:disabled {\r\n    cursor: not-allowed;\r\n    opacity: 0.5;\r\n    background-color: #f5f5f5;\r\n    color: #999;\n}\n.json-tree[data-v-eb9018f2] {\r\n    list-style: none;\r\n    padding-left: 1.2em;\r\n    font-family: \"SFMono-Regular\", Consolas, \"Liberation Mono\", Menlo, monospace;\r\n    font-size: 13px;\r\n    line-height: 1.4;\r\n    color: #242424;\n}\n.json-node[data-v-eb9018f2] {\r\n    margin-left: 0.8em;\r\n    position: relative;\n}\n.json-toggle[data-v-eb9018f2] {\r\n    background: none;\r\n    border: none;\r\n    padding: 0 5px 0 0;\r\n    margin-right: 3px;\r\n    cursor: pointer;\r\n    font-weight: 700;\r\n    color: #999999;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n            user-select: none;\r\n    font-size: 12px;\r\n    line-height: 1;\r\n    vertical-align: middle;\n}\n.json-key[data-v-eb9018f2] {\r\n    color: #1270ca;\r\n    font-weight: 600;\n}\n.json-string[data-v-eb9018f2] {\r\n    color: #c14a09;\n}\n.json-date[data-v-eb9018f2] {\r\n    color: #2ecc71;\r\n    font-weight: normal;\n}\n.json-number[data-v-eb9018f2] {\r\n    color: #8e44ad;\n}\n.json-boolean[data-v-eb9018f2] {\r\n    color: #1a7fbd;\r\n    font-weight: 600;\n}\n.json-null[data-v-eb9018f2] {\r\n    color: #999999;\r\n    font-style: italic;\n}\n.bracket[data-v-eb9018f2] {\r\n    color: #999999;\r\n    font-weight: 700;\n}\n.json-object>.json-tree[data-v-eb9018f2],\r\n.json-array>.json-tree[data-v-eb9018f2] {\r\n    margin-left: 1em;\r\n    border-left: 1px solid #eee;\r\n    padding-left: 0.8em;\n}\n.btn-clear[data-v-eb9018f2],\r\n.btn-delete[data-v-eb9018f2] {\r\n    margin-left: 5px;\r\n    cursor: pointer;\r\n    background: transparent;\r\n    border: none;\n}\n.btn-clear[data-v-eb9018f2] {\r\n    color: orange;\n}\n.btn-delete[data-v-eb9018f2] {\r\n    color: red;\n}\n.confirm-bar[data-v-eb9018f2] {\r\n    position: fixed;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    background: #f0f0f0;\r\n    border-top: 1px solid #ccc;\r\n    padding: 10px;\r\n    text-align: right;\n}\n.confirm-bar button[data-v-eb9018f2] {\r\n    margin-left: 8px;\n}\n.float-right[data-v-eb9018f2] {\r\n    float: right;\n}\nselect[data-v-eb9018f2] {\r\n    margin-left: 10px;\r\n    padding: 2px;\n}\nselect option[data-v-eb9018f2]:disabled {\r\n    color: #cccccc;\r\n    background-color: #f0f0f0;\n}\n.type-indicator[data-v-eb9018f2] {\r\n    margin-left: 5px;\r\n    color: #666;\r\n    font-size: 0.8em;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/workflow/databaseManagment/JsonTree.vue?vue&type=style&index=0&id=eb9018f2&scoped=true&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/workflow/databaseManagment/JsonTree.vue?vue&type=style&index=0&id=eb9018f2&scoped=true&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_JsonTree_vue_vue_type_style_index_0_id_eb9018f2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./JsonTree.vue?vue&type=style&index=0&id=eb9018f2&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/workflow/databaseManagment/JsonTree.vue?vue&type=style&index=0&id=eb9018f2&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_JsonTree_vue_vue_type_style_index_0_id_eb9018f2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_JsonTree_vue_vue_type_style_index_0_id_eb9018f2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/workflow/databaseManagment/JsonTree.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/components/workflow/databaseManagment/JsonTree.vue ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _JsonTree_vue_vue_type_template_id_eb9018f2_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./JsonTree.vue?vue&type=template&id=eb9018f2&scoped=true */ "./resources/js/components/workflow/databaseManagment/JsonTree.vue?vue&type=template&id=eb9018f2&scoped=true");
/* harmony import */ var _JsonTree_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./JsonTree.vue?vue&type=script&lang=js */ "./resources/js/components/workflow/databaseManagment/JsonTree.vue?vue&type=script&lang=js");
/* harmony import */ var _JsonTree_vue_vue_type_style_index_0_id_eb9018f2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./JsonTree.vue?vue&type=style&index=0&id=eb9018f2&scoped=true&lang=css */ "./resources/js/components/workflow/databaseManagment/JsonTree.vue?vue&type=style&index=0&id=eb9018f2&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _JsonTree_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _JsonTree_vue_vue_type_template_id_eb9018f2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _JsonTree_vue_vue_type_template_id_eb9018f2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "eb9018f2",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/workflow/databaseManagment/JsonTree.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/workflow/databaseManagment/JsonTree.vue?vue&type=script&lang=js":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/workflow/databaseManagment/JsonTree.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_JsonTree_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./JsonTree.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/workflow/databaseManagment/JsonTree.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_JsonTree_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/workflow/databaseManagment/JsonTree.vue?vue&type=style&index=0&id=eb9018f2&scoped=true&lang=css":
/*!*********************************************************************************************************************************!*\
  !*** ./resources/js/components/workflow/databaseManagment/JsonTree.vue?vue&type=style&index=0&id=eb9018f2&scoped=true&lang=css ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_JsonTree_vue_vue_type_style_index_0_id_eb9018f2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./JsonTree.vue?vue&type=style&index=0&id=eb9018f2&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/workflow/databaseManagment/JsonTree.vue?vue&type=style&index=0&id=eb9018f2&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/workflow/databaseManagment/JsonTree.vue?vue&type=template&id=eb9018f2&scoped=true":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/workflow/databaseManagment/JsonTree.vue?vue&type=template&id=eb9018f2&scoped=true ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_JsonTree_vue_vue_type_template_id_eb9018f2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_JsonTree_vue_vue_type_template_id_eb9018f2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_JsonTree_vue_vue_type_template_id_eb9018f2_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./JsonTree.vue?vue&type=template&id=eb9018f2&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/workflow/databaseManagment/JsonTree.vue?vue&type=template&id=eb9018f2&scoped=true");


/***/ })

}]);