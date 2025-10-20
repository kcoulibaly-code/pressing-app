"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_shared_CostumedFiche__vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/CostumedFiche_.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/CostumedFiche_.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./resources/js/services/auth.service.js");
/* harmony import */ var _MyTextArea_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MyTextArea.vue */ "./resources/js/components/shared/MyTextArea.vue");
/* harmony import */ var _services_credit_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/credit.service */ "./resources/js/services/credit.service.js");
/* harmony import */ var _johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @johmun/vue-tags-input */ "./node_modules/@johmun/vue-tags-input/dist/vue-tags-input.js");
/* harmony import */ var _johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "custumedFiche",
  props: {
    dossier_credit: Object,
    tb_name: String
  },
  components: {
    MyTextArea: _MyTextArea_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    VueTagsInput: (_johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_4___default())
  },
  created: function created() {
    this.getUsers();
  },
  mounted: function mounted() {
    this.loadUserData();
    this.loadRetrieved();
  },
  computed: {
    filteredUsers1: function filteredUsers1() {
      var _this = this;
      var receivers = this.users.filter(function (user) {
        // console.log("username", user.name.toLocaleLowerCase().includes(this.tag.toLocaleLowerCase()))
        return user.name.toLocaleLowerCase().includes(_this.tag.toLocaleLowerCase());
      }).map(function (el) {
        return _objectSpread({
          text: el.name
        }, el);
      });
      return receivers;
    },
    filteredUsers2: function filteredUsers2() {
      var _this2 = this;
      var receivers = this.users.filter(function (user) {
        // console.log("username", user.name.toLocaleLowerCase().includes(this.tag.toLocaleLowerCase()))
        return user.name.toLocaleLowerCase().includes(_this2.tag.toLocaleLowerCase());
      }).map(function (el) {
        return _objectSpread({
          text: el.name
        }, el);
      });
      return receivers;
    }
  },
  data: function data() {
    return {
      tags: [],
      tag: '',
      filterInput: "",
      filterInput2: "",
      replyFilterInput: "",
      users: [],
      taggedUsers: [],
      tagValue: undefined,
      tagging: false,
      startComment: false,
      newCom: false,
      ebapisHost: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__["default"].loadablehost(),
      authcheck: false,
      authcheckUsr: null,
      authcheckStatus: null,
      watchInPause: false,
      initLoad: true,
      inputReply: {},
      test: false,
      increment: 1,
      /* a revoir*/
      dashboardData: [],
      user_id: null,
      visibility_scope_ref: null,
      role_uuid: null,
      name: null,
      role: null,
      logo: null,
      type_entite: null,
      nom_entite: null,
      meta_parseable: {
        cred_pub_key: this.dossier_credit.cred_pub_key,
        tb_name: this.tb_name
      },
      formDataToBeWatched: {
        comments: ""
      },
      comments: [],
      messages: "",
      replied_message: {},
      editingComment: false,
      editingReply: false,
      toEdit: {},
      newReply: {
        replier_id: this.user_id,
        replier_name: this.name
      }
    };
  },
  methods: _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
    getTag: function getTag(index) {
      this.tg = this.tag[index];
      // console.log("tg======>",this.tg)
    },
    filteredUsers: function filteredUsers(slug) {
      var _this3 = this;
      if (slug == "filterInput1") {
        this.filterInput2 = "";
        this.receivers = this.users.filter(function (user) {
          return user.name.toLocaleLowerCase().includes(_this3.filterInput.toLocaleLowerCase());
        });
        return this.receivers;
      }
      if (slug == "filterInput2") {
        this.filterInput = "";
        this.receivers = this.users.filter(function (user) {
          return user.name.toLocaleLowerCase().includes(_this3.filterInput2.toLocaleLowerCase());
        });
        return this.receivers;
      }
    },
    replyFilteredUsers: function replyFilteredUsers() {
      var _this4 = this;
      this.receivers = this.users.filter(function (user) {
        return user.name.toLocaleLowerCase().includes(_this4.replyFilterInput.toLocaleLowerCase());
      });
      return this.receivers;
    },
    getUsers: function getUsers() {
      //   Credit.loadusers()
      //       .then(
      //           (data) => {
      //               this.users = data.data
      //           }
      //       ).catch(err => {
      //           console.dir(err)
      //       });
    },
    tagUser: function tagUser(user) {
      this.messages = this.messages.replace(this.messages.at(-1), '') + "<span class=' text-primary' style='color:#e67e22'>" + user.name + ' - ' + user.role_name + "</span> &nbsp;";
      this.tagValue = this.messages;
      this.taggedUsers.push(user);
      this.tagging = false;
    },
    pressAtKey: function pressAtKey(event) {
      this.tagging = true;
    },
    letEnd: function letEnd(evt) {
      var _evt$target;
      // console.log("eve", evt)
      // evt.target.setSelectionRange(this.messages.length, this.messages.length)
      evt === null || evt === void 0 || (_evt$target = evt.target) === null || _evt$target === void 0 || _evt$target.focus();
    },
    formatDate: function formatDate(timestamp) {
      var toFormat = new Date(timestamp);
      return "".concat(toFormat.toLocaleDateString(), " ").concat(toFormat.toLocaleTimeString());
    },
    onReply: function onReply(index) {
      var comment = _objectSpread({}, this.comments[index]);
      var timestamp = new Date().getTime();
      this.newReply.rid = +new Date();
      this.newReply.replied_date = this.formatDate(timestamp);
      this.newReply.replied_message = this.replied_message[index];
      comment.replies.splice(comment.replies.length, 0, _objectSpread({}, this.newReply));
      this.comments.splice(index, 1, _objectSpread({}, comment));
      this.replied_message[index] = "";
      this.inputReply[index] = false;
      this.NotifyUser();
    },
    viewReplies: function viewReplies(event, index) {
      console.log(index, this.seeReplies);
      this.seeReplies[index] = this.seeReplies[index] ? false : true;
    },
    loadRetrieved: function loadRetrieved() {
      var lentb = this.dossier_credit["tbs_in_use"];
      var createdKey = this.tb_name;
      var createdKeyArr = createdKey.split("tb");
      createdKey = "cred_pub_tb_" + createdKeyArr[1];
      if (lentb.length > 0) {
        if (this.dossier_credit[createdKey] != undefined) {
          this.formDataToBeWatched = this.dossier_credit[createdKey];
          if (this.dossier_credit[createdKey]["comments"] != "") {
            this.comments = this.dossier_credit[createdKey]["comments"];
          }
        }
      }
    },
    addReply: function addReply(index) {
      this.$set(this.inputReply, index, true);
      this.replied_message[index] = "";
    },
    editComment: function editComment(comment) {
      var index = this.comments.indexOf(comment);
      comment.message = this.messages;
      this.comments[index] = comment;
      this.messages = "";
      this.editingComment = false;
      this.startComment = true;
      this.handleInput();
    },
    loadUserData: function loadUserData() {
      // this.$Progress.start();
      this.$axios
      // .post("/api/user/dashboard", {})
      .post("/api/user/dashboard2", {}).then(function (response) {
        // this.$Progress.finish();
        this.dashboardData = response.data;
        this.user_id = this.dashboardData["user_id"];
        this.visibility_scope_ref = this.dashboardData["visibility_scope_ref"];
        this.role_uuid = this.dashboardData["role_uuid"];
        this.name = this.dashboardData["name"];
        this.role = this.dashboardData["role"];
        this.logo = this.dashboardData["logo"];
        this.nom_entite = this.dashboardData["nom_entite"];
        this.type_entite = this.dashboardData["type_entite"];
        this.newReply = {
          replier_id: this.user_id,
          replier_name: this.name
        };
      }.bind(this))["catch"](function (error) {
        // this.$Progress.finish();
        console.log(error);
      }.bind(this));
    },
    onComment: function onComment() {
      var tagname = [];
      this.tags.forEach(function (user) {
        tagname.push("<span class=' text-primary' style='color:#e67e22'>" + user.name + ' - ' + user.role_name + "</span> &nbsp;");
      });
      if (tagname.length > 0) {
        var tagsUsers = "";
        for (var index = 0; index < tagname.length; index++) {
          tagsUsers = tagsUsers + tagname[index];
        }
        console.log("tagsUsers", tagsUsers);
        this.messages = tagsUsers + this.messages;
      }
      // console.log("message===>", this.messages)
      var timestamp = new Date();
      this.comments.push({
        id: +new Date(),
        author: this.name,
        tagUsers: this.tags,
        date: timestamp.toLocaleDateString() + " " + timestamp.toLocaleTimeString(),
        message: this.messages,
        stage_id: 1,
        // Etape du workflow
        replies: []
      });
      this.comments.sort(function (a, b) {
        if (a.id < b.id) return 1;else if (a.id > b.id) return -1;
        return 0;
      });
      // console.log(this.comments)
      this.messages = "";
      this.startComment = false;
      this.tags = [];
      this.handleInput();
      this.NotifyUser();
    },
    NotifyUser: function NotifyUser() {
      var _this5 = this;
      _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["default"].loadUserData().then(function (res) {
        // console.log("Sender",res.data, "this. receivers", this.receivers)
        //     console.log(this.taggedUsers)
        _this5.$axios.post(_this5.ebapisHost + "notifications/api/v1/commentaires-notifications/", {
          cred_pub_key: _this5.meta_parseable["cred_pub_key"],
          sender: res.data,
          receivers: _this5.taggedUsers
        }).then(function (response) {
          EventBus.$emit("value-updated");
        })["catch"](function (error) {
          console.log(error);
        });
      })["catch"](function (err) {
        _this5.loadWithError(err);
      });
    },
    getEditIndex: function getEditIndex(index) {
      this.toEdit = this.comments[index];
      this.messages = this.comments[index].message;
      this.editingComment = true;
      this.startComment = true;
    }
  }, "editComment", function editComment(comment) {
    var index = this.comments.indexOf(comment);
    comment.message = this.messages;
    this.comments[index] = comment;
    this.messages = "";
    this.editingComment = false;
    this.startComment = false;
    this.handleInput();
  }), "getReplyToEdit", function getReplyToEdit(index, reply) {
    if (this.name !== reply.replier_name) {
      alert("Vous ne pouvez pas modifier la reponse des autres");
      return;
    }
    this.addReply(index);
    this.toEdit = reply;
    this.replied_message[index] = reply.replied_message;
    this.editingReply = true;
  }), "editReply", function editReply(index, reply) {
    var replInd = this.comments[index].replies.indexOf(reply);
    reply.replied_message = this.replied_message[index];
    this.comments[index].replies[replInd] = reply;
    this.replied_message[index] = "";
    this.editingReply = false;
    this.inputReply[index] = false;
    this.handleInput();
  }), "removeComment", function removeComment(id) {
    // this.comments.splice(index, 1);
    var index = this.comments.indexOf(this.comments.filter(function (el) {
      return el.id === id;
    })[0]);
    this.editingReply = false;
    this.inputReply[index] = false;
    this.comments = this.comments.filter(function (el) {
      return el.id !== id;
    });
    this.replied_message[index] = "";
    this.handleInput();
  }), "removeReply", function removeReply(comment, index, id) {
    this.editingReply = false;
    this.comments[index].replies = comment.replies.filter(function (el) {
      return el.rid !== id;
    });
    this.replied_message[index] = "";
    this.handleInput();
  }), "loadWithError", function loadWithError(err) {
    // window.location.href = "/login";
  }), "send2Backend", function send2Backend(res, newVal, oldVal) {
    this.authcheck = true;
    this.authcheckUsr = res.data;
    this.authcheckStatus = res.status;
    if (this.authcheckStatus === 401) {
      // window.location.href = "/login";
    }
    if (this.authcheck === true) {
      this.$emit("autosaving-updatedT0");
      this.$axios.post(this.ebapisHost + "creditbuilder/api/v1/autosaving/", {
        user: this.authcheckUsr,
        meta_parseable: this.meta_parseable,
        filledData: this.formDataToBeWatched
      }).then(function (response) {
        this.$emit("autosaving-updatedT0");
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
  }), "handleInput", function handleInput() {
    this.formDataToBeWatched["comments"] = this.comments;
  }),
  watch: {
    formDataToBeWatched: {
      handler: function handler(newVal, oldVal) {
        this.autosaving(newVal, oldVal);
      },
      deep: true,
      immediate: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/CostumedFiche_.vue?vue&type=template&id=e9d7ef16&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/CostumedFiche_.vue?vue&type=template&id=e9d7ef16&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("div", [!_vm.comments.length ? _c("div", {
    staticClass: "col-12"
  }, [_c("div", {
    staticClass: "p-3 mt-2",
    staticStyle: {
      "box-shadow": "0px 0px 1px 0px grey"
    },
    attrs: {
      id: "aside_head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("div", {
    staticClass: "row justify-content-between align-items-between"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "col-md-auto"
  }, [_c("i", {
    staticClass: "icofont-close icofont-1x",
    attrs: {
      "data-toggle": "tooltip",
      "data-placement": "bottom",
      title: "Fermer les commentaires",
      role: "button"
    },
    on: {
      click: function click($event) {
        return _vm.$emit("close");
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "row w-100 pt-2"
  }, [_c("div", {
    staticClass: "col pe-0"
  }, [_c("button", {
    staticClass: "btn rounded w-100 btn-block",
    staticStyle: {
      "background-color": "#34495e",
      color: "white"
    },
    attrs: {
      title: "Cliquer pour ajouter un commentaire"
    },
    on: {
      click: function click($event) {
        _vm.newCom = !_vm.newCom;
      }
    }
  }, [_c("i", {
    staticClass: "icofont-plus",
    attrs: {
      role: "button"
    }
  })])])])])]), _vm._v(" "), _c("div", {
    staticClass: "col"
  })]), _vm._v(" "), _vm.newCom ? _c("div", {
    staticClass: "form-groups my-2"
  }, [!_vm.editingComment ? _c("my-text-area", {
    attrs: {
      tagValue: _vm.tagValue
    },
    on: {
      atPressed: _vm.pressAtKey
    },
    model: {
      value: _vm.messages,
      callback: function callback($$v) {
        _vm.messages = $$v;
      },
      expression: "messages"
    }
  }) : _c("my-text-area", {
    attrs: {
      tagValue: _vm.tagValue
    },
    on: {
      atPressed: _vm.pressAtKey,
      keyup: function keyup($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
        return _vm.editComment(_vm.toEdit);
      }
    },
    model: {
      value: _vm.messages,
      callback: function callback($$v) {
        _vm.messages = $$v;
      },
      expression: "messages"
    }
  }), _vm._v(" "), _c("transition", {
    attrs: {
      mode: "out-in",
      "enter-to-class": "tagger-grow",
      "enter-class": "tagger",
      "leave-to-class": "tagger-leave",
      "leave-class": "tagger-shrink"
    }
  }, [_c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.tagging,
      expression: "tagging"
    }],
    ref: "tagger",
    staticClass: "card border-0 rounded shadow",
    staticStyle: {
      width: "100%",
      "z-index": "3",
      height: "340px",
      top: "25vh",
      left: "-1",
      position: "sticky",
      "overflow-y": "auto",
      margin: "0px"
    }
  }, [_c("ul", {
    staticClass: "list-group mx-0"
  }, [_c("li", {
    staticClass: "list-group-item border-bottom text-center py-3 my-1 border-0",
    attrs: {
      disabled: ""
    }
  }, [_c("span", {
    staticClass: "fw-bold mb-0 pb-0",
    staticStyle: {
      display: "inline-block"
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.filterInput,
      expression: "filterInput"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: "Recherche rapide"
    },
    domProps: {
      value: _vm.filterInput
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.filterInput = $event.target.value;
      }
    }
  })])]), _vm._v(" "), _vm._l(_vm.filteredUsers("filterInput1"), function (user, index) {
    return _c("li", {
      key: index,
      staticClass: "list-group-item rounded border-bottom py-3 my-1 border-0",
      staticStyle: {
        "box-shadow": "1px 1px 4px lightgray"
      },
      on: {
        click: function click($event) {
          return _vm.tagUser(user);
        }
      }
    }, [_c("span", {
      staticClass: "fw-bold mb-0 pb-0 text-primary",
      staticStyle: {
        display: "inline-block"
      }
    }, [_vm._v(" " + _vm._s(user.name) + "  ")]), _vm._v(" "), _c("small", {
      staticClass: "text-muted"
    }, [_vm._v("\n                                            •  " + _vm._s(user.role_name) + "\n                                        ")])]);
  })], 2)])]), _vm._v(" "), _c("div", {
    staticClass: "col mt-2"
  }, [_c("vue-tags-input", {
    attrs: {
      "autocomplete-items": _vm.filteredUsers1,
      tags: _vm.tags,
      placeholder: "Ajouter un collaborateur à notifier"
    },
    on: {
      input: _vm.getTag,
      "tags-changed": function tagsChanged(newTags) {
        return _vm.tags = newTags;
      }
    },
    model: {
      value: _vm.tag,
      callback: function callback($$v) {
        _vm.tag = $$v;
      },
      expression: "tag"
    }
  })], 1), _vm._v(" "), _c("br"), _vm._v(" "), _c("button", {
    staticClass: "btn rounded btn-block",
    staticStyle: {
      height: "33px",
      background: "#34495e",
      color: "white",
      width: "224px"
    },
    on: {
      click: _vm.onComment
    }
  }, [_c("i", {
    staticClass: "icofont-comment"
  }), _vm._v(" Envoyer\n                    ")])], 1) : _vm._e(), _vm._v(" "), _c("br")])]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "text-container",
    attrs: {
      id: "aside_body"
    }
  }, [_vm.comments.length > 0 ? _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("br"), _vm._v(" "), _c("div", {
    staticClass: "row justify-content-between align-items-between"
  }, [_vm._m(1), _vm._v(" "), _c("div", {
    staticClass: "col-md-auto"
  }, [_c("i", {
    staticClass: "icofont-close icofont-1x",
    attrs: {
      "data-toggle": "tooltip",
      "data-placement": "bottom",
      title: "Fermer les commentaires",
      role: "button"
    },
    on: {
      click: function click($event) {
        return _vm.$emit("close");
      }
    }
  })])])]), _vm._v(" "), _c("div", {
    staticClass: "col"
  })]), _vm._v(" "), _vm._l(_vm.comments, function (comment, index) {
    return _c("div", {
      key: "".concat(comment.id, "  ").concat(comment.message, " commentaire"),
      staticClass: "col-12"
    }, [_c("div", {
      staticClass: "card border-0 shadow-lg w-100 h-auto mx-0 my-3"
    }, [_c("div", {
      staticClass: "card-body"
    }, [_c("div", {
      staticClass: "row justify-content-between",
      staticStyle: {
        cursor: "pointer"
      }
    }, [_c("div", {
      staticClass: "col-7 px-0"
    }, [_c("div", {
      staticClass: "fs-6 fw-bold"
    }, [_vm._v("\n                                        " + _vm._s(comment.author) + "\n                                    ")]), _vm._v(" "), _c("h6", {
      staticClass: "mb-2 text-muted",
      staticStyle: {
        "font-size": "small"
      }
    }, [_vm._v("\n                                        " + _vm._s(comment.date) + "\n                                    ")])]), _vm._v(" "), _vm.name == comment.author ? _c("div", {
      staticClass: "col-3 px-0 py-1"
    }, [_c("div", {
      staticClass: "d-flex justify-content-around py-2"
    }, [_c("i", {
      staticClass: "icofont icofont-trash icofont-1x pe-2",
      staticStyle: {
        width: "20px",
        height: "20px",
        "font-size": "smaller",
        cursor: "pointer"
      },
      on: {
        click: function click($event) {
          return _vm.removeComment(comment.id);
        }
      }
    }), _vm._v(" "), _c("i", {
      staticClass: "icofont icofont-edit icofont-1x",
      staticStyle: {
        width: "20px",
        height: "20px",
        "font-size": "smaller",
        cursor: "pointer"
      },
      on: {
        click: function click($event) {
          return _vm.getEditIndex(index);
        }
      }
    })])]) : _vm._e(), _vm._v(" "), _c("div", {
      staticClass: "col-1 px-0"
    }, [!_vm.inputReply[index] ? _c("button", {
      staticClass: "btn btn-sm",
      staticStyle: {
        "border-radius": "20px",
        "margin-right": "-19px"
      },
      on: {
        click: function click($event) {
          return _vm.addReply(index);
        }
      }
    }, [_c("i", {
      staticClass: "icofont-reply",
      staticStyle: {
        "font-size": "small",
        cursor: "pointer"
      }
    })]) : _c("button", {
      staticClass: "btn btn-sm",
      staticStyle: {
        "border-radius": "20px",
        "margin-right": "-19px"
      },
      on: {
        click: function click($event) {
          _vm.inputReply[index] = false;
        }
      }
    }, [_c("i", {
      staticClass: "icofont-close",
      staticStyle: {
        "font-size": "small",
        cursor: "pointer"
      }
    })])])]), _vm._v(" "), _c("p", {
      staticClass: "card-text",
      domProps: {
        innerHTML: _vm._s(comment.message)
      }
    }), _vm._v(" "), comment.replies ? _c("div", _vm._l(comment.replies, function (reply) {
      return _c("div", {
        key: String(reply.rid) + reply.replied_message,
        staticClass: "ps-2 border border-start border-3 border-warning my-2 border-end-0 border-top-0 border-bottom-0",
        on: {
          dblclick: function dblclick($event) {
            return _vm.getReplyToEdit(index, reply);
          }
        }
      }, [_c("div", {
        staticClass: "row"
      }, [_c("div", {
        staticClass: "col-9"
      }, [_c("div", {
        staticClass: "fs-6 fw-bold"
      }, [_vm._v("\n                                                " + _vm._s(reply.replier_name) + "\n                                            ")]), _vm._v(" "), _c("h6", {
        staticClass: "mb-2 text-muted",
        staticStyle: {
          "font-size": "small"
        }
      }, [_vm._v("\n                                                " + _vm._s(reply.replied_date) + "\n                                            ")])]), _vm._v(" "), _vm.name === reply.replier_name ? _c("div", {
        staticClass: "col-3"
      }, [_c("button", {
        staticClass: "btn",
        staticStyle: {
          "border-radius": "50%"
        },
        on: {
          click: function click($event) {
            return _vm.removeReply(comment, index, reply.rid);
          }
        }
      }, [_c("i", {
        staticClass: "icofont icofont-trash icofont-1x"
      })])]) : _vm._e()]), _vm._v(" "), _c("p", {
        staticClass: "card-text",
        domProps: {
          innerHTML: _vm._s(reply.replied_message)
        }
      })]);
    }), 0) : _vm._e()]), _vm._v(" "), _vm.inputReply[index] ? _c("div", {
      staticClass: "pt-3",
      staticStyle: {
        "border-top": "1px solid grey"
      }
    }, [!_vm.editingReply ? _c("div", [!_vm.editingComment ? _c("my-text-area", {
      attrs: {
        tagValue: _vm.tagValue
      },
      on: {
        atPressed: _vm.pressAtKey
      },
      model: {
        value: _vm.replied_message[index],
        callback: function callback($$v) {
          _vm.$set(_vm.replied_message, index, $$v);
        },
        expression: "replied_message[index]"
      }
    }) : _vm._e(), _vm._v(" "), _c("transition", {
      attrs: {
        mode: "out-in",
        "enter-to-class": "tagger-grow",
        "enter-class": "tagger",
        "leave-to-class": "tagger-leave",
        "leave-class": "tagger-shrink"
      }
    }, [_c("div", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.tagging,
        expression: "tagging"
      }],
      ref: "tagger",
      refInFor: true,
      staticClass: "card border-0 rounded shadow p-0",
      staticStyle: {
        width: "100%",
        "z-index": "3",
        height: "340px",
        top: "25vh",
        left: "-1",
        position: "sticky",
        "overflow-y": "auto"
      }
    }, [_c("ul", {
      staticClass: "list-group mx-0"
    }, [_c("li", {
      staticClass: "list-group-item border-bottom text-center py-3 my-1 border-0",
      attrs: {
        disabled: ""
      }
    }, [_c("span", {
      staticClass: "fw-bold mb-0 pb-0",
      staticStyle: {
        display: "inline-block"
      }
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.replyFilterInput,
        expression: "replyFilterInput"
      }],
      staticClass: "form-control",
      attrs: {
        type: "text",
        placeholder: "Recherche rapide"
      },
      domProps: {
        value: _vm.replyFilterInput
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.replyFilterInput = $event.target.value;
        }
      }
    })])]), _vm._v(" "), _vm._l(_vm.replyFilteredUsers(), function (user, index) {
      return _c("li", {
        key: index,
        staticClass: "list-group-item rounded border-bottom py-3 my-1 border-0",
        staticStyle: {
          "box-shadow": "1px 1px 4px lightgray"
        },
        on: {
          click: function click($event) {
            return _vm.tagUser(user);
          }
        }
      }, [_c("span", {
        staticClass: "fw-bold mb-0 pb-0 text-primary",
        staticStyle: {
          display: "inline-block"
        }
      }, [_vm._v(" " + _vm._s(user.name) + "  ")]), _vm._v(" "), _c("small", {
        staticClass: "text-muted"
      }, [_vm._v("\n                                                    •  " + _vm._s(user.role_name) + "\n                                                ")])]);
    })], 2)])]), _vm._v(" "), _c("button", {
      staticClass: "btn rounded btn-block",
      staticStyle: {
        height: "33px",
        background: "#34495e",
        color: "white",
        width: "200px",
        "margin-top": "5px"
      },
      on: {
        click: function click($event) {
          return _vm.onReply(index);
        }
      }
    }, [_c("i", {
      staticClass: "icofont-send-mail"
    }), _vm._v("Répondre\n                        ")])], 1) : _c("div", [_c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.replied_message[index],
        expression: "replied_message[index]"
      }],
      staticClass: "form-control",
      staticStyle: {
        resize: "none",
        width: "226px"
      },
      attrs: {
        type: "text",
        placeholder: "Répondre"
      },
      domProps: {
        value: _vm.replied_message[index]
      },
      on: {
        keyup: function keyup($event) {
          if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
          return _vm.editReply(index, _vm.toEdit);
        },
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(_vm.replied_message, index, $event.target.value);
        }
      }
    }), _vm._v(" "), _c("button", {
      staticClass: "btn rounded btn-block",
      staticStyle: {
        height: "33px",
        background: "#34495e",
        color: "white",
        width: "200px",
        "margin-top": "5px"
      },
      on: {
        click: function click($event) {
          return _vm.editReply(index, _vm.toEdit);
        }
      }
    }, [_c("i", {
      staticClass: "icofont-send-mail"
    }), _vm._v("Répondre\n                        ")])])]) : _vm._e()])]);
  }), _vm._v(" "), _c("div", {
    staticClass: "doted pt-3"
  })], 2) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "row p-0 m-0 bg-white",
    staticStyle: {
      bottom: "0",
      "z-index": "2000"
    }
  }, [_vm.comments.length ? _c("div", [_vm.startComment ? _c("div", [!_vm.editingComment ? _c("my-text-area", {
    attrs: {
      tagValue: _vm.tagValue
    },
    on: {
      atPressed: _vm.pressAtKey,
      input: _vm.letEnd,
      keyup: function keyup($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
        return _vm.onComment.apply(null, arguments);
      }
    },
    model: {
      value: _vm.messages,
      callback: function callback($$v) {
        _vm.messages = $$v;
      },
      expression: "messages"
    }
  }) : _c("my-text-area", {
    attrs: {
      tagValue: _vm.tagValue
    },
    on: {
      atPressed: _vm.pressAtKey,
      keyup: function keyup($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
        return _vm.editComment(_vm.toEdit);
      }
    },
    model: {
      value: _vm.messages,
      callback: function callback($$v) {
        _vm.messages = $$v;
      },
      expression: "messages"
    }
  }), _vm._v(" "), _c("transition", {
    attrs: {
      mode: "out-in",
      "enter-to-class": "tagger-grow",
      "enter-class": "tagger",
      "leave-to-class": "tagger-leave",
      "leave-class": "tagger-shrink"
    }
  }, [_c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.tagging,
      expression: "tagging"
    }],
    ref: "tagger",
    staticClass: "card border-0 rounded shadow p-2",
    staticStyle: {
      "max-width": "max-content",
      "z-index": "3",
      height: "340px",
      top: "25vh",
      left: "-1",
      position: "sticky",
      "overflow-y": "auto"
    }
  }, [_c("ul", {
    staticClass: "list-group mx-0"
  }, [_c("li", {
    staticClass: "list-group-item border-bottom text-center py-3 my-1 border-0",
    attrs: {
      disabled: ""
    }
  }, [_c("span", {
    staticClass: "fw-bold mb-0 pb-0",
    staticStyle: {
      display: "inline-block"
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.filterInput2,
      expression: "filterInput2"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: "Recherche rapide"
    },
    domProps: {
      value: _vm.filterInput2
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.filterInput2 = $event.target.value;
      }
    }
  })])]), _vm._v(" "), _vm._l(_vm.filteredUsers("filterInput2"), function (user, index) {
    return _c("li", {
      key: index,
      staticClass: "list-group-item rounded border-bottom py-3 my-1 border-0",
      staticStyle: {
        "box-shadow": "1px 1px 4px lightgray"
      },
      on: {
        click: function click($event) {
          return _vm.tagUser(user);
        }
      }
    }, [_c("span", {
      staticClass: "fw-bold mb-0 pb-0 text-primary",
      staticStyle: {
        display: "inline-block"
      }
    }, [_vm._v(" " + _vm._s(user.name) + "  ")]), _vm._v(" "), _c("small", {
      staticClass: "text-muted"
    }, [_vm._v("\n                                                •  " + _vm._s(user.role_name) + "\n                                            ")])]);
  })], 2)])]), _vm._v(" "), _c("div", {
    staticClass: "mt-2"
  }, [_c("vue-tags-input", {
    attrs: {
      "autocomplete-items": _vm.filteredUsers2,
      tags: _vm.tags,
      placeholder: "Ajouter un collaborateur à notifier"
    },
    on: {
      input: _vm.getTag,
      "tags-changed": function tagsChanged(newTags) {
        return _vm.tags = newTags;
      }
    },
    model: {
      value: _vm.tag,
      callback: function callback($$v) {
        _vm.tag = $$v;
      },
      expression: "tag"
    }
  })], 1), _vm._v(" "), _c("br"), _vm._v(" "), !_vm.editingComment ? _c("button", {
    staticClass: "btn rounded btn-block",
    staticStyle: {
      height: "33px",
      background: "#34495e",
      color: "white",
      width: "200px"
    },
    on: {
      click: _vm.onComment
    }
  }, [_c("i", {
    staticClass: "icofont-comment"
  }), _vm._v(" Envoyer\n                        ")]) : _c("button", {
    staticClass: "btn rounded btn-block",
    staticStyle: {
      height: "33px",
      background: "#34495e",
      color: "white",
      width: "200px"
    },
    on: {
      click: function click($event) {
        return _vm.editComment(_vm.toEdit);
      }
    }
  }, [_c("i", {
    staticClass: "icofont-send-comment"
  }), _vm._v("Modifier le commentaire\n                        ")])], 1) : _c("div", {
    staticClass: "col-12 pb-2"
  }, [_c("button", {
    staticClass: "btn rounded btn-block",
    staticStyle: {
      height: "33px",
      background: "#34495e",
      color: "white",
      width: "200px"
    },
    on: {
      click: function click($event) {
        _vm.startComment = true;
      }
    }
  }, [_c("i", {
    staticClass: "icofont-comment"
  }), _vm._v("\n                            Commenter\n                        ")])])]) : _c("div", {
    staticClass: "col-12 pb-2"
  }, [_c("button", {
    staticClass: "btn rounded btn-block",
    staticStyle: {
      height: "33px",
      background: "#34495e",
      color: "white",
      width: "200px"
    },
    on: {
      click: function click($event) {
        _vm.startComment = true;
      }
    }
  }, [_c("i", {
    staticClass: "icofont-comment"
  }), _vm._v("\n                        Commenter\n                    ")])])])]), _vm._v(" "), _c("div", {
    attrs: {
      id: "aside_footer"
    }
  })])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-md"
  }, [_c("img", {
    attrs: {
      src: "/images/icon/msg.png",
      alt: ""
    }
  }), _vm._v(" "), _c("span", {
    staticStyle: {
      "font-size": "14px",
      "font-weight": "bold",
      "text-transform": "uppercase"
    }
  }, [_vm._v("\n                                    Commentaires\n                                ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-md"
  }, [_c("img", {
    attrs: {
      src: "/images/icon/msg.png",
      alt: ""
    }
  }), _vm._v(" "), _c("span", {
    staticStyle: {
      "font-size": "14px",
      "font-weight": "bold",
      "text-transform": "uppercase"
    }
  }, [_vm._v("\n                                    Commentaires\n                                ")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/CostumedFiche_.vue?vue&type=style&index=0&id=e9d7ef16&lang=css&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/CostumedFiche_.vue?vue&type=style&index=0&id=e9d7ef16&lang=css&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n*[data-v-e9d7ef16] {\n    font-family: \"Google sans\";\n}\n.text-container[data-v-e9d7ef16]::-webkit-scrollbar-track {\n    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n    background-color: #f5f5f5;\n}\n.text-container[data-v-e9d7ef16]::-webkit-scrollbar {\n    width: 5px;\n    background-color: #f5f5f5;\n}\n.text-container[data-v-e9d7ef16]::-webkit-scrollbar-thumb {\n    background-color: #2c3e50;\n    border: 2px solid #555555;\n}\n.card[data-v-e9d7ef16] {\n    background: #fff;\n    border-radius: 2px;\n    display: inline-block;\n    height: 200px;\n    margin: 12px;\n    padding: 12px;\n    position: relative;\n    width: 200px;\n}\n.card-4[data-v-e9d7ef16] {\n    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n}\n#tp_aside[data-v-e9d7ef16] {\n    overflow-x: hidden;\n    overflow-y: auto;\n    height: 100%;\n}\n[data-v-e9d7ef16]::-webkit-scrollbar {\n    width: 3px;\n}\n[data-v-e9d7ef16]::-webkit-scrollbar-track {\n    background: #f1f1f1;\n}\n[data-v-e9d7ef16]::-webkit-scrollbar-thumb {\n    background: rgba(59, 59, 59, 0.263);\n    border-radius: 10px;\n}\n[data-v-e9d7ef16]::-webkit-scrollbar-thumb:hover {\n    background: rgb(58, 13, 222);\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/CostumedFiche_.vue?vue&type=style&index=0&id=e9d7ef16&lang=css&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/CostumedFiche_.vue?vue&type=style&index=0&id=e9d7ef16&lang=css&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CostumedFiche_vue_vue_type_style_index_0_id_e9d7ef16_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CostumedFiche_.vue?vue&type=style&index=0&id=e9d7ef16&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/CostumedFiche_.vue?vue&type=style&index=0&id=e9d7ef16&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CostumedFiche_vue_vue_type_style_index_0_id_e9d7ef16_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CostumedFiche_vue_vue_type_style_index_0_id_e9d7ef16_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/shared/CostumedFiche_.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/shared/CostumedFiche_.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CostumedFiche_vue_vue_type_template_id_e9d7ef16_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CostumedFiche_.vue?vue&type=template&id=e9d7ef16&scoped=true */ "./resources/js/components/shared/CostumedFiche_.vue?vue&type=template&id=e9d7ef16&scoped=true");
/* harmony import */ var _CostumedFiche_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CostumedFiche_.vue?vue&type=script&lang=js */ "./resources/js/components/shared/CostumedFiche_.vue?vue&type=script&lang=js");
/* harmony import */ var _CostumedFiche_vue_vue_type_style_index_0_id_e9d7ef16_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CostumedFiche_.vue?vue&type=style&index=0&id=e9d7ef16&lang=css&scoped=true */ "./resources/js/components/shared/CostumedFiche_.vue?vue&type=style&index=0&id=e9d7ef16&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CostumedFiche_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _CostumedFiche_vue_vue_type_template_id_e9d7ef16_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _CostumedFiche_vue_vue_type_template_id_e9d7ef16_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "e9d7ef16",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/shared/CostumedFiche_.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/shared/CostumedFiche_.vue?vue&type=script&lang=js":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/shared/CostumedFiche_.vue?vue&type=script&lang=js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CostumedFiche_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CostumedFiche_.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/CostumedFiche_.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CostumedFiche_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/shared/CostumedFiche_.vue?vue&type=style&index=0&id=e9d7ef16&lang=css&scoped=true":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/shared/CostumedFiche_.vue?vue&type=style&index=0&id=e9d7ef16&lang=css&scoped=true ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CostumedFiche_vue_vue_type_style_index_0_id_e9d7ef16_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CostumedFiche_.vue?vue&type=style&index=0&id=e9d7ef16&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/CostumedFiche_.vue?vue&type=style&index=0&id=e9d7ef16&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/shared/CostumedFiche_.vue?vue&type=template&id=e9d7ef16&scoped=true":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/shared/CostumedFiche_.vue?vue&type=template&id=e9d7ef16&scoped=true ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CostumedFiche_vue_vue_type_template_id_e9d7ef16_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CostumedFiche_vue_vue_type_template_id_e9d7ef16_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CostumedFiche_vue_vue_type_template_id_e9d7ef16_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CostumedFiche_.vue?vue&type=template&id=e9d7ef16&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/CostumedFiche_.vue?vue&type=template&id=e9d7ef16&scoped=true");


/***/ })

}]);