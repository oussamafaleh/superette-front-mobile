(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["not-found-not-found-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/not-found/not-found.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/not-found/not-found.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n        <div class=\"header\">\n            <div class=\"row no-gutters\">\n                <div class=\"col-auto\">\n                    <a class=\"btn btn-link\" routerLink=\"/dashboard\"  [routerLinkActive]=\"['active']\"><i class=\"material-icons\">keyboard_arrow_left</i></a>\n                </div>\n                <div class=\"col text-center\"><img src=\"assets/images/logo-header.png\" alt=\"\" class=\"header-logo\"></div>\n                <div class=\"col-auto\">\n                    <a href=\"/profile\" class=\"btn  btn-link text-dark\"><i class=\"material-icons\">account_circle</i></a>\n                </div>\n            </div>\n        </div>\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-10 mx-auto text-center\">\n                    <br>\n                    <img src=\"assets/images/404.png\" alt=\"\" class=\"mw-100\">\n                    <br>\n                    <h1 class=\"my-4\">404</h1>\n                    <h5>Page not found</h5>\n                    <p class=\"text-secondary\">Content you are looking for is not found. Please check url or link</p>\n                    <br>\n                    <a class=\"btn btn-default btn-rounded shadow-sm\"  routerLink=\"/dashboard\"  [routerLinkActive]=\"['active']\">Go to dashboard <i class=\"material-icons md-18\">arrow_forward</i></a>\n                </div>\n            </div>\n        </div>\n    </div>"

/***/ }),

/***/ "./src/app/not-found/not-found-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/not-found/not-found-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: NotFoundRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundRoutingModule", function() { return NotFoundRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./not-found.component */ "./src/app/not-found/not-found.component.ts");




const routes = [
    {
        path: '', component: _not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"]
    }
];
let NotFoundRoutingModule = class NotFoundRoutingModule {
};
NotFoundRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], NotFoundRoutingModule);



/***/ }),

/***/ "./src/app/not-found/not-found.component.scss":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NotFoundComponent = class NotFoundComponent {
    constructor() { }
    ngOnInit() {
        document.querySelector('.loader-screen').style.display = 'none';
    }
};
NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-not-found',
        template: __webpack_require__(/*! raw-loader!./not-found.component.html */ "./node_modules/raw-loader/index.js!./src/app/not-found/not-found.component.html"),
        styles: [__webpack_require__(/*! ./not-found.component.scss */ "./src/app/not-found/not-found.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], NotFoundComponent);



/***/ }),

/***/ "./src/app/not-found/not-found.module.ts":
/*!***********************************************!*\
  !*** ./src/app/not-found/not-found.module.ts ***!
  \***********************************************/
/*! exports provided: NotFoundModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundModule", function() { return NotFoundModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _not_found_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./not-found-routing.module */ "./src/app/not-found/not-found-routing.module.ts");
/* harmony import */ var _not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./not-found.component */ "./src/app/not-found/not-found.component.ts");





let NotFoundModule = class NotFoundModule {
};
NotFoundModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _not_found_routing_module__WEBPACK_IMPORTED_MODULE_3__["NotFoundRoutingModule"]
        ],
        declarations: [_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"]]
    })
], NotFoundModule);



/***/ })

}]);
//# sourceMappingURL=not-found-not-found-module-es2015.js.map