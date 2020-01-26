(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signup-signup-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/signup/signup.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/signup/signup.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-page\" [@routerTransition]>\n    <div class=\"row no-gutters vh-100 proh bg-template\">\n        <img src=\"assets/images/apple.png\" alt=\"logo\" class=\"apple right-image\n            align-self-center\">\n        <div class=\"col align-self-center px-3 text-center\">\n            <img src=\"assets/images/logo.png\" alt=\"logo\" class=\"logo-small\">\n            <h2 class=\"text-white\"><span class=\"font-weight-light\">Sign</span>Up</h2>\n            <form class=\"form-signin shadow\">\n\n                <div class=\"form-group float-label active\">\n                    <input name=\"firstname\" [(ngModel)]=\"postData.firstname\"\n                        type=\"text\" class=\"form-control\" required\n                        value=\"Ammy\">\n                    <label class=\"form-control-label\">firstname</label>\n                </div>\n\n                <div class=\"form-group float-label active\">\n                    <input name=\"lastname\" [(ngModel)]=\"postData.lastname\"\n                        type=\"text\" class=\"form-control\" required\n                        value=\"Ammy\">\n                    <label class=\"form-control-label\">lastname</label>\n                </div>\n\n                <div class=\"form-group float-label active\">\n                    <input name=\"localisation\" [(ngModel)]=\"postData.localisation\"\n                        type=\"text\" class=\"form-control\" required\n                        value=\"00.00.00.00\">\n                    <label class=\"form-control-label\">localisation</label>\n                </div>\n\n                <div class=\"form-group float-label\">\n                    <input name=\"phone\" [(ngModel)]=\"postData.phone\"\n                        type=\"number\" id=\"inputPhone\" class=\"form-control\"\n                        required required minlength=\"8\">\n                    <label for=\"inputPhone\" class=\"form-control-label\">phone\n                        </label>\n                </div>\n\n\n                <div class=\"form-group float-label active\">\n                    <input \n                        name=\"mail\" [(ngModel)]=\"postData.mail\"\n                        type=\"email\" id=\"inputEmail\" class=\"form-control\"\n                        value=\"ammyjohnson@maxartkiller.co\"\n                        required autofocus>\n                    <label for=\"inputEmail\" class=\"form-control-label\">Email\n                        address</label>\n                </div>\n\n                <div class=\"form-group float-label active\">\n                    <input \n                        name=\"password\" [(ngModel)]=\"postData.password\"\n                        type=\"password\" id=\"inputPassword\" class=\"form-control\"\n                        required >\n                    <label for=\"inputPassword\" class=\"form-control-label\">password</label>\n                </div>\n\n                <div class=\"form-group float-label active\">\n                    <input name=\"gender\" [(ngModel)]=\"postData.gender\"\n                        type=\"text\" class=\"form-control\" required\n                        value=\"\">\n                    <label class=\"form-control-label\">gender</label>\n                </div>\n         \n               \n                <div class=\"form-group my-4 text-left\">\n                    <div class=\"custom-control custom-checkbox\">\n                        <input type=\"checkbox\" class=\"custom-control-input\"\n                            id=\"rememberme\">\n                        <label class=\"custom-control-label\" for=\"rememberme\">I\n                            accept <a href=\"#\">Terms and\n                                Condition</a></label>\n                    </div>\n                </div>\n\n                <div class=\"row\">\n                    <div class=\"col-auto\">\n                        <a (click)=\"signAction()\" [routerLinkActive]=\"['active']\"\n                            class=\"btn btn-lg btn-default btn-rounded shadow\"><span>SignUp</span>                             \n                                <i\n                                class=\"material-icons\">arrow_forward</i></a>\n                    </div>                  \n                </div>\n\n            </form>\n            \n            <p class=\"text-center text-white\">\n                Already have account?<br>\n                <a routerLink=\"/login\" [routerLinkActive]=\"['active']\">Sign In</a>\n                here.\n            </p>\n            <button (click)=\"loginWithFB()\">fffffffffffh</button>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/router.animations.ts":
/*!**************************************!*\
  !*** ./src/app/router.animations.ts ***!
  \**************************************/
/*! exports provided: routerTransition, noTransition, slideToRight, slideToLeft, slideToBottom, slideToTop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routerTransition", function() { return routerTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noTransition", function() { return noTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideToRight", function() { return slideToRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideToLeft", function() { return slideToLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideToBottom", function() { return slideToBottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideToTop", function() { return slideToTop; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");

function routerTransition() {
    return noTransition();
}
function noTransition() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', []);
}
function slideToRight() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }))
        ])
    ]);
}
function slideToLeft() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }))
        ])
    ]);
}
function slideToBottom() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(-100%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%)' }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(100%)' }))
        ])
    ]);
}
function slideToTop() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(100%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%)' }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(-100%)' }))
        ])
    ]);
}


/***/ }),

/***/ "./src/app/signup/signup-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/signup/signup-routing.module.ts ***!
  \*************************************************/
/*! exports provided: SignupRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupRoutingModule", function() { return SignupRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup.component */ "./src/app/signup/signup.component.ts");




const routes = [
    {
        path: '', component: _signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"]
    }
];
let SignupRoutingModule = class SignupRoutingModule {
};
SignupRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], SignupRoutingModule);



/***/ }),

/***/ "./src/app/signup/signup.component.scss":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC9zaWdudXAuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _config_auth_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../config/auth-constants */ "./src/app/config/auth-constants.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/facebook/ngx */ "./node_modules/@ionic-native/facebook/ngx/index.js");









let SignupComponent = class SignupComponent {
    constructor(authService, toastService, storageService, router, facebook) {
        this.authService = authService;
        this.toastService = toastService;
        this.storageService = storageService;
        this.router = router;
        this.facebook = facebook;
        this.postData = {
            token: "MbFR335sMJz9K0Bt335sN7kcnU235sMRKT",
            firstname: "",
            lastname: "",
            localisation: "",
            phone: "",
            mail: "",
            gender: "",
            password: ""
        };
    }
    ngOnInit() {
        document.querySelector(".loader-screen").style.display =
            "none";
    }
    validateInputs() {
        let firstname = this.postData.firstname.trim();
        let lastname = this.postData.lastname.trim();
        let localisation = this.postData.localisation.trim();
        let mail = this.postData.mail.trim();
        let gender = this.postData.gender.trim();
        let password = this.postData.password.trim();
        return (this.postData.firstname &&
            this.postData.lastname &&
            this.postData.localisation &&
            this.postData.phone &&
            this.postData.mail &&
            this.postData.gender &&
            this.postData.password &&
            firstname.length > 0 &&
            lastname.length > 0 &&
            localisation.length > 0 &&
            mail.length > 0 &&
            gender.length > 0 &&
            password.length > 0);
    }
    signAction() {
        if (this.validateInputs()) {
            /////////////////////////////////////
            this.authService.signup(this.postData).subscribe(
            ////////////////////////////////////
            (res) => {
                if (res.userData) {
                    // Storing the User data.
                    this.storageService
                        .store(_config_auth_constants__WEBPACK_IMPORTED_MODULE_4__["AuthConstants"].AUTH, res.userData)
                        .then(res => {
                        this.router.navigate(["/Dashbord"]);
                    });
                }
                else {
                    this.toastService.presentToast("Data alreay exists, please enter new details.");
                }
            }, (error) => {
                this.toastService.presentToast("Network Issue.");
            });
        }
        else {
            this.toastService.presentToast("Please enter email, username or password.");
        }
    }
    loginWithFB() {
        this.facebook.login(['email', 'public_profile']).then((response) => {
            this.facebook.api('me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture_large)', []).then(profile => {
                this.userData = { email: profile['email'], first_name: profile['first_name'], picture: profile['picture_large']['data']['url'], username: profile['name'] };
                console.log(this.userData);
            });
        });
    }
};
SignupComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_8__["Facebook"] }
];
SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-signup",
        template: __webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/index.js!./src/app/signup/signup.component.html"),
        animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"])()],
        styles: [__webpack_require__(/*! ./signup.component.scss */ "./src/app/signup/signup.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
        _services_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"],
        _services_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_8__["Facebook"]])
], SignupComponent);



/***/ }),

/***/ "./src/app/signup/signup.module.ts":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.module.ts ***!
  \*****************************************/
/*! exports provided: SignupModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupModule", function() { return SignupModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signup-routing.module */ "./src/app/signup/signup-routing.module.ts");
/* harmony import */ var _signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");







let SignupModule = class SignupModule {
};
SignupModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
            _signup_routing_module__WEBPACK_IMPORTED_MODULE_4__["SignupRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
        ],
        declarations: [_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"]]
    })
], SignupModule);



/***/ })

}]);
//# sourceMappingURL=signup-signup-module-es2015.js.map