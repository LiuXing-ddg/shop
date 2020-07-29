(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/countdown-timer/countdown-timer"],{

/***/ 260:
/*!***********************************************************************************!*\
  !*** E:/软件学习/JS资料/uni-app/liuxing/components/countdown-timer/countdown-timer.vue ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _countdown_timer_vue_vue_type_template_id_4d4c333e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./countdown-timer.vue?vue&type=template&id=4d4c333e& */ 261);
/* harmony import */ var _countdown_timer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./countdown-timer.vue?vue&type=script&lang=js& */ 263);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _countdown_timer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _countdown_timer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _D_EveryonePiano_Music_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 14);

var renderjs




/* normalize component */

var component = Object(_D_EveryonePiano_Music_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _countdown_timer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _countdown_timer_vue_vue_type_template_id_4d4c333e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _countdown_timer_vue_vue_type_template_id_4d4c333e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _countdown_timer_vue_vue_type_template_id_4d4c333e___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "E:/软件学习/JS资料/uni-app/liuxing/components/countdown-timer/countdown-timer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 261:
/*!******************************************************************************************************************!*\
  !*** E:/软件学习/JS资料/uni-app/liuxing/components/countdown-timer/countdown-timer.vue?vue&type=template&id=4d4c333e& ***!
  \******************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_EveryonePiano_Music_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_EveryonePiano_Music_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_EveryonePiano_Music_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_EveryonePiano_Music_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_EveryonePiano_Music_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_EveryonePiano_Music_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_countdown_timer_vue_vue_type_template_id_4d4c333e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./countdown-timer.vue?vue&type=template&id=4d4c333e& */ 262);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_EveryonePiano_Music_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_EveryonePiano_Music_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_EveryonePiano_Music_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_EveryonePiano_Music_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_EveryonePiano_Music_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_EveryonePiano_Music_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_countdown_timer_vue_vue_type_template_id_4d4c333e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_EveryonePiano_Music_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_EveryonePiano_Music_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_EveryonePiano_Music_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_EveryonePiano_Music_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_EveryonePiano_Music_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_EveryonePiano_Music_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_countdown_timer_vue_vue_type_template_id_4d4c333e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_EveryonePiano_Music_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_EveryonePiano_Music_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_EveryonePiano_Music_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_EveryonePiano_Music_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_EveryonePiano_Music_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_EveryonePiano_Music_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_countdown_timer_vue_vue_type_template_id_4d4c333e___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_EveryonePiano_Music_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_EveryonePiano_Music_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_EveryonePiano_Music_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_EveryonePiano_Music_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_EveryonePiano_Music_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_EveryonePiano_Music_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_countdown_timer_vue_vue_type_template_id_4d4c333e___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 262:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/软件学习/JS资料/uni-app/liuxing/components/countdown-timer/countdown-timer.vue?vue&type=template&id=4d4c333e& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 263:
/*!************************************************************************************************************!*\
  !*** E:/软件学习/JS资料/uni-app/liuxing/components/countdown-timer/countdown-timer.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_EveryonePiano_Music_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_EveryonePiano_Music_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_EveryonePiano_Music_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_EveryonePiano_Music_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_EveryonePiano_Music_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_countdown_timer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./countdown-timer.vue?vue&type=script&lang=js& */ 264);
/* harmony import */ var _D_EveryonePiano_Music_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_EveryonePiano_Music_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_EveryonePiano_Music_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_EveryonePiano_Music_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_EveryonePiano_Music_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_countdown_timer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_EveryonePiano_Music_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_EveryonePiano_Music_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_EveryonePiano_Music_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_EveryonePiano_Music_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_EveryonePiano_Music_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_countdown_timer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_EveryonePiano_Music_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_EveryonePiano_Music_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_EveryonePiano_Music_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_EveryonePiano_Music_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_EveryonePiano_Music_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_countdown_timer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_EveryonePiano_Music_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_EveryonePiano_Music_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_EveryonePiano_Music_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_EveryonePiano_Music_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_EveryonePiano_Music_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_countdown_timer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_EveryonePiano_Music_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_EveryonePiano_Music_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_EveryonePiano_Music_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_EveryonePiano_Music_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_EveryonePiano_Music_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_countdown_timer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 264:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/软件学习/JS资料/uni-app/liuxing/components/countdown-timer/countdown-timer.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
var _default =
{
  props: {
    // 倒计时时长（单位：毫秒）
    time: {
      type: Number,
      default: 0 } },


  data: function data() {
    return {
      timer: null,
      timeData: {
        remain: 0,
        day: 0,
        hour: 0,
        minute: 0,
        second: 0 } };


  },
  watch: {
    time: function time() {
      this.timeData.remain = this.time;
      this.restart();
    } },

  methods: {
    // 更新时间
    updateTime: function updateTime() {
      var t = this.timeData.remain;
      this.timeData.day = Math.floor(t / 1000 / 60 / 60 / 24);
      this.timeData.hour = Math.floor(t / 1000 / 60 / 60 % 24);
      this.timeData.minute = Math.floor(t / 1000 / 60 % 60);
      this.timeData.second = Math.floor(t / 1000 % 60);
      this.timeData.remain -= 1000;
      if (this.timeData.remain < 0) {
        clearInterval(this.timer);
        this.$emit('finish');
      }
    },

    // 开启倒计时
    startTimer: function startTimer() {var _this = this;
      if (this.timer) {
        clearInterval(this.timer);
      }
      this.updateTime();
      this.timer = setInterval(function () {
        _this.updateTime();
      }, 1000);
    },

    // 重新开始倒计时
    restart: function restart() {
      this.timeData.remain = this.time;
      this.startTimer();
    },

    // 暂停倒计时
    pause: function pause() {
      if (this.timer) {
        clearInterval(this.timer);
      }
    },

    // 继续倒计时
    continue: function _continue() {
      this.timeData.remain += 1000;
      this.startTimer();
    } },

  mounted: function mounted() {
    this.restart();
  },
  beforeDestroy: function beforeDestroy() {
    clearInterval(this.timer);
  } };exports.default = _default;

/***/ })

}]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/countdown-timer/countdown-timer.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/countdown-timer/countdown-timer-create-component',
    {
        'components/countdown-timer/countdown-timer-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(260))
        })
    },
    [['components/countdown-timer/countdown-timer-create-component']]
]);
