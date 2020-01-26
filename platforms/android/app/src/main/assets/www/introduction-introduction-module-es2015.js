(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["introduction-introduction-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/introduction/introduction.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/introduction/introduction.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"introduction-page\" [@routerTransition]>\n    <a [routerLinkActive]=\"['active']\" routerLink=\"/login\" class=\"btn btn-default button-rounded-54 shadow text-white float-bottom-right\">\n        <i class=\"material-icons\">arrow_forward</i>\n    </a>\n\n    <div class=\"swiper-container introduction vh-100\" [swiper]=\"configurations\">\n            <div class=\"swiper-wrapper\">\n                <div class=\"swiper-slide overflow-hidden bg-orange text-white\">\n                    <div class=\"row no-gutters h-100\">\n                        <img src=\"assets/images/orange-slices.png\" alt=\"\" class=\"orange-slice right-image align-self-center\">\n                        <div class=\"col align-self-center px-3\">\n                            <div class=\"row\">\n                                <div class=\"container\">\n                                    <div class=\"row\">\n                                        <div class=\"col-6 text-left\">\n                                            <h1 class=\"text-uppercase\">Other Controls Elements</h1>\n                                            <p>Click on Menu button > Side menu and select other controls</p>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n    \n                    </div>\n                </div>\n                <div class=\"swiper-slide overflow-hidden bg-success text-white\">\n                    <div class=\"row no-gutters h-100\">\n                        <img src=\"assets/images/pineapple.png\" alt=\"\" class=\"pinapple right-image align-self-center\">\n                        <div class=\"col align-self-center px-3\">\n                            <div class=\"row\">\n                                <div class=\"container\">\n                                    <div class=\"row\">\n                                        <div class=\"col-6 text-left\">\n                                            <h1 class=\"text-uppercase\">Testy Awesome Fruits</h1>\n                                            <p>SLorem ipsum dolor sit amet, consect etur adipiscing elit. Sndisse conv allis.</p>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"swiper-slide overflow-hidden bg-warning text-white\">\n                    <div class=\"row no-gutters h-100\">\n                        <img src=\"assets/images/banana.png\" alt=\"\" class=\"banana right-image align-self-center\">\n                        <div class=\"col align-self-center px-3\">\n                            <div class=\"row\">\n                                <div class=\"container\">\n                                    <div class=\"row\">\n                                        <div class=\"col-6 text-left\">\n                                            <h1 class=\"text-uppercase\">Loving Freshness Everyday</h1>\n                                            <p>SLorem ipsum dolor sit amet, consect etur adipiscing elit. Sndisse conv allis.</p>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!-- Add Pagination -->\n            <div class=\"swiper-pagination\"></div>\n        </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/introduction/introduction-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/introduction/introduction-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: IntroductionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroductionRoutingModule", function() { return IntroductionRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _introduction_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./introduction.component */ "./src/app/introduction/introduction.component.ts");




const routes = [
    {
        path: '',
        component: _introduction_component__WEBPACK_IMPORTED_MODULE_3__["IntroductionComponent"]
    }
];
let IntroductionRoutingModule = class IntroductionRoutingModule {
};
IntroductionRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], IntroductionRoutingModule);



/***/ }),

/***/ "./src/app/introduction/introduction.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/introduction/introduction.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".introduction-page {\n  height: 100%;\n  width: 100%;\n  display: block;\n  position: relative;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2toYWxpbC9EZXNrdG9wL2Zyb250QjJjL3NyYy9hcHAvaW50cm9kdWN0aW9uL2ludHJvZHVjdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaW50cm9kdWN0aW9uL2ludHJvZHVjdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2ludHJvZHVjdGlvbi9pbnRyb2R1Y3Rpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW50cm9kdWN0aW9uLXBhZ2V7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufSIsIi5pbnRyb2R1Y3Rpb24tcGFnZSB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59Il19 */"

/***/ }),

/***/ "./src/app/introduction/introduction.component.ts":
/*!********************************************************!*\
  !*** ./src/app/introduction/introduction.component.ts ***!
  \********************************************************/
/*! exports provided: IntroductionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroductionComponent", function() { return IntroductionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../router.animations */ "./src/app/router.animations.ts");




let IntroductionComponent = class IntroductionComponent {
    constructor(router) {
        this.router = router;
        this.configurations = {
            direction: 'horizontal',
            slidesPerView: 1,
            keyboard: true,
            mousewheel: true,
            scrollbar: false,
            navigation: true,
            pagination: true
        };
    }
    ngOnInit() {
        document.querySelector('.loader-screen').style.display = 'none';
    }
};
IntroductionComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
IntroductionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-introduction',
        template: __webpack_require__(/*! raw-loader!./introduction.component.html */ "./node_modules/raw-loader/index.js!./src/app/introduction/introduction.component.html"),
        animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_3__["routerTransition"])()],
        styles: [__webpack_require__(/*! ./introduction.component.scss */ "./src/app/introduction/introduction.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], IntroductionComponent);



/***/ }),

/***/ "./src/app/introduction/introduction.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/introduction/introduction.module.ts ***!
  \*****************************************************/
/*! exports provided: IntroductionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroductionModule", function() { return IntroductionModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-swiper-wrapper */ "./node_modules/ngx-swiper-wrapper/dist/ngx-swiper-wrapper.es5.js");
/* harmony import */ var _introduction_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./introduction-routing.module */ "./src/app/introduction/introduction-routing.module.ts");
/* harmony import */ var _introduction_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./introduction.component */ "./src/app/introduction/introduction.component.ts");







const DEFAULT_SWIPER_CONFIG = {};
let IntroductionModule = class IntroductionModule {
};
IntroductionModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
            _introduction_routing_module__WEBPACK_IMPORTED_MODULE_5__["IntroductionRoutingModule"],
            ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_4__["SwiperModule"]
        ],
        declarations: [_introduction_component__WEBPACK_IMPORTED_MODULE_6__["IntroductionComponent"]],
        providers: [
            {
                provide: ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_4__["SWIPER_CONFIG"],
                useValue: DEFAULT_SWIPER_CONFIG
            }
        ]
    })
], IntroductionModule);



/***/ })

}]);
//# sourceMappingURL=introduction-introduction-module-es2015.js.map