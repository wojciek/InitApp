(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _identity_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./identity/login/login.component */ "./src/app/identity/login/login.component.ts");
/* harmony import */ var _identity_register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./identity/register/register.component */ "./src/app/identity/register/register.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_module_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared-module/page-not-found/page-not-found.component */ "./src/app/shared-module/page-not-found/page-not-found.component.ts");






var appRoutes = [
    { path: 'login', component: _identity_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'register', component: _identity_register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"] },
    { path: '', pathMatch: 'full', redirectTo: '/login' },
    { path: '**', component: _shared_module_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(appRoutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar *ngIf=\"isNavBarVisible\"></app-navbar>\n  <div class=\"container\">\n    <div class=\"row mt-3\">\n        <app-currencies-list *ngIf=\"isNavBarVisible\" class=\"col-lg-6\"></app-currencies-list>\n\n        <div class=\"col-lg-6\" [ngClass]=\"{'col-lg-12' : !isNavBarVisible}\"><router-outlet></router-outlet></div>\n    </div>\n  </div>\n  <app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app.component.less":
/*!************************************!*\
  !*** ./src/app/app.component.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".border-right {\n  border-right: 1px solid #ddd;\n}\n.borders {\n  border-left: 1px solid #ddd;\n  border-right: 1px solid #ddd;\n  margin: -1px;\n}\n.border-left {\n  border-left: 1px solid #ddd;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6L0dJVFB1YmxpYy9Jbml0QXBwbGljYXRpb24vSW5pdEFwcC9Jbml0QXBwV0VCL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5sZXNzIiwiYXBwLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNkJBQUE7Q0NDSDtBRENEO0VBQ0ksNEJBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7Q0NDSDtBRENEO0VBQ0ksNEJBQUE7Q0NDSCIsImZpbGUiOiJhcHAuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9yZGVyLXJpZ2h0IHtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGRkO1xufVxuLmJvcmRlcnMge1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2RkZDtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGRkO1xuICAgIG1hcmdpbjogLTFweDtcbn1cbi5ib3JkZXItbGVmdCB7XG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZGRkO1xufSIsIi5ib3JkZXItcmlnaHQge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGRkO1xufVxuLmJvcmRlcnMge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNkZGQ7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZGQ7XG4gIG1hcmdpbjogLTFweDtcbn1cbi5ib3JkZXItbGVmdCB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2RkZDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_module_services_layout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared-module/services/layout.service */ "./src/app/shared-module/services/layout.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(layoutService) {
        this.layoutService = layoutService;
        this.title = 'app';
        this.isNavBarVisible = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.layoutService.navBarSource$.subscribe(function (isVisible) {
            _this.isNavBarVisible = isVisible;
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.less */ "./src/app/app.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_module_services_layout_service__WEBPACK_IMPORTED_MODULE_2__["LayoutService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _identity_identity_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./identity/identity.module */ "./src/app/identity/identity.module.ts");
/* harmony import */ var _identity_identity_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./identity/identity-routing.module */ "./src/app/identity/identity-routing.module.ts");
/* harmony import */ var _guards_auth_can_load_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./guards/auth-can-load.guard */ "./src/app/guards/auth-can-load.guard.ts");
/* harmony import */ var _samples_samples_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./samples/samples.module */ "./src/app/samples/samples.module.ts");
/* harmony import */ var _core_module_core_module_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core-module/core-module.module */ "./src/app/core-module/core-module.module.ts");
/* harmony import */ var _shared_module_shared_module_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared-module/shared-module.module */ "./src/app/shared-module/shared-module.module.ts");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _core_module_core_module_module__WEBPACK_IMPORTED_MODULE_10__["CoreModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _identity_identity_module__WEBPACK_IMPORTED_MODULE_6__["IdentityModule"],
                _identity_identity_routing_module__WEBPACK_IMPORTED_MODULE_7__["IdentityRoutingModule"],
                _samples_samples_module__WEBPACK_IMPORTED_MODULE_9__["SamplesModule"],
                _shared_module_shared_module_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"]
            ],
            providers: [
                _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
                _guards_auth_can_load_guard__WEBPACK_IMPORTED_MODULE_8__["AuthCanLoadGuard"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_module_services_layout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared-module/services/layout.service */ "./src/app/shared-module/services/layout.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var AuthService = /** @class */ (function () {
    function AuthService(layoutService, http, router) {
        this.layoutService = layoutService;
        this.http = http;
        this.router = router;
        this.isUserLoggedIn = false;
    }
    AuthService.prototype.login = function (form) {
        var _this = this;
        var credentials = JSON.stringify(form.value);
        return this.http.post('http://localhost:5006/api/authenticate', credentials, {
            headers: new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({
                'Content-Type': 'application/json'
            })
        }).subscribe(function (response) {
            var token = response.json().token;
            localStorage.setItem('authToken', token);
            _this.loggedInUserName$ = response.json().username;
            _this.loggedInUserId = response.json().userId;
            sessionStorage.setItem('authUser', response.json().userId);
            sessionStorage.setItem('authUser', response.json().username);
            _this.isUserLoggedIn = true;
            _this.onLoginSubmitSuccess();
        }, function (err) {
            _this.onLoginSubmitFailure();
            _this.loginFailureStatus = err.status;
        });
    };
    AuthService.prototype.register = function (form) {
        var _this = this;
        var registerData = JSON.stringify(form.value);
        return this.http.post('http://localhost:5006/api/register', registerData, {
            headers: new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({
                'Content-Type': 'application/json'
            })
        }).subscribe(function (response) {
            _this.onRegisterSubmitSuccess();
        }, function (err) {
            _this.onRegisterSubmitFailure();
            _this.registerFailureStatus = err;
        });
    };
    AuthService.prototype.takeLoggedInUserName = function () {
        if (this.loggedInUserName$ != null) {
            return this.loggedInUserName$;
        }
    };
    AuthService.prototype.onLoginSubmitSuccess = function () {
        var _this = this;
        this.router.navigate(['']).then(function () { return _this.layoutService.showNavBar(); });
    };
    AuthService.prototype.onLoginSubmitFailure = function () {
        console.log('Login is incorrect!');
    };
    AuthService.prototype.onRegisterSubmitSuccess = function () {
        this.router.navigate(['/login']);
    };
    AuthService.prototype.onRegisterSubmitFailure = function () {
        console.log('Register Failure!');
    };
    AuthService.prototype.logOut = function () {
        this.isUserLoggedIn = false;
        localStorage.removeItem('authToken');
        this.layoutService.hideNavBar();
    };
    AuthService.prototype.isLoggedIn = function () {
        return this.isUserLoggedIn;
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_module_services_layout_service__WEBPACK_IMPORTED_MODULE_2__["LayoutService"], _angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/core-module/core-module.module.ts":
/*!***************************************************!*\
  !*** ./src/app/core-module/core-module.module.ts ***!
  \***************************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/core-module/navbar/navbar.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/core-module/footer/footer.component.ts");






var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
            ],
            exports: [
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]
            ]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core-module/footer/footer.component.html":
/*!**********************************************************!*\
  !*** ./src/app/core-module/footer/footer.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer py-3 pt-5 bg-light align-bottom\">\n  <p class=\"m-0 text-center\">Copyright &copy; Wojtek Głuch 2018</p>\n</footer>"

/***/ }),

/***/ "./src/app/core-module/footer/footer.component.less":
/*!**********************************************************!*\
  !*** ./src/app/core-module/footer/footer.component.less ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3JlLW1vZHVsZS9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5sZXNzIn0= */"

/***/ }),

/***/ "./src/app/core-module/footer/footer.component.ts":
/*!********************************************************!*\
  !*** ./src/app/core-module/footer/footer.component.ts ***!
  \********************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/core-module/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.less */ "./src/app/core-module/footer/footer.component.less")]
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/core-module/navbar/navbar.component.html":
/*!**********************************************************!*\
  !*** ./src/app/core-module/navbar/navbar.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  navbar works!\n</p>\n"

/***/ }),

/***/ "./src/app/core-module/navbar/navbar.component.less":
/*!**********************************************************!*\
  !*** ./src/app/core-module/navbar/navbar.component.less ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cursor-pointer {\n  cursor: pointer;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUtbW9kdWxlL25hdmJhci9DOi9HSVRQdWJsaWMvSW5pdEFwcGxpY2F0aW9uL0luaXRBcHAvSW5pdEFwcFdFQi9zcmMvYXBwL2NvcmUtbW9kdWxlL25hdmJhci9uYXZiYXIuY29tcG9uZW50Lmxlc3MiLCJjb3JlLW1vZHVsZS9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQWdCLGdCQUFBO0NDRWYiLCJmaWxlIjoiY29yZS1tb2R1bGUvbmF2YmFyL25hdmJhci5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXJzb3ItcG9pbnRlcntjdXJzb3I6IHBvaW50ZXI7fSIsIi5jdXJzb3ItcG9pbnRlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/core-module/navbar/navbar.component.ts":
/*!********************************************************!*\
  !*** ./src/app/core-module/navbar/navbar.component.ts ***!
  \********************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/core-module/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.less */ "./src/app/core-module/navbar/navbar.component.less")]
        })
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth-can-load.guard.ts":
/*!***********************************************!*\
  !*** ./src/app/guards/auth-can-load.guard.ts ***!
  \***********************************************/
/*! exports provided: AuthCanLoadGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthCanLoadGuard", function() { return AuthCanLoadGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");




var AuthCanLoadGuard = /** @class */ (function () {
    function AuthCanLoadGuard(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    AuthCanLoadGuard.prototype.canLoad = function (route) {
        if (this.authService.isLoggedIn()) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    };
    AuthCanLoadGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], AuthCanLoadGuard);
    return AuthCanLoadGuard;
}());



/***/ }),

/***/ "./src/app/identity/identity-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/identity/identity-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: IdentityRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdentityRoutingModule", function() { return IdentityRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/identity/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register/register.component */ "./src/app/identity/register/register.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var identityRoutes = [
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
    },
    {
        path: 'register',
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"]
    }
];
var IdentityRoutingModule = /** @class */ (function () {
    function IdentityRoutingModule() {
    }
    IdentityRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(identityRoutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
            ]
        })
    ], IdentityRoutingModule);
    return IdentityRoutingModule;
}());



/***/ }),

/***/ "./src/app/identity/identity.component.html":
/*!**************************************************!*\
  !*** ./src/app/identity/identity.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/identity/identity.component.ts":
/*!************************************************!*\
  !*** ./src/app/identity/identity.component.ts ***!
  \************************************************/
/*! exports provided: IdentityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdentityComponent", function() { return IdentityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var IdentityComponent = /** @class */ (function () {
    function IdentityComponent() {
    }
    IdentityComponent.prototype.ngOnInit = function () {
    };
    IdentityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-identity',
            template: __webpack_require__(/*! ./identity.component.html */ "./src/app/identity/identity.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], IdentityComponent);
    return IdentityComponent;
}());



/***/ }),

/***/ "./src/app/identity/identity.module.ts":
/*!*********************************************!*\
  !*** ./src/app/identity/identity.module.ts ***!
  \*********************************************/
/*! exports provided: IdentityModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdentityModule", function() { return IdentityModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/identity/login/login.component.ts");
/* harmony import */ var _identity_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./identity.component */ "./src/app/identity/identity.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register/register.component */ "./src/app/identity/register/register.component.ts");
/* harmony import */ var _identity_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./identity-routing.module */ "./src/app/identity/identity-routing.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");









var IdentityModule = /** @class */ (function () {
    function IdentityModule() {
    }
    IdentityModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _identity_routing_module__WEBPACK_IMPORTED_MODULE_6__["IdentityRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]
            ],
            exports: [_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]],
            declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"], _identity_component__WEBPACK_IMPORTED_MODULE_4__["IdentityComponent"]]
        })
    ], IdentityModule);
    return IdentityModule;
}());



/***/ }),

/***/ "./src/app/identity/login/login.component.html":
/*!*****************************************************!*\
  !*** ./src/app/identity/login/login.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-6 m-auto\">\n  <h3 class=\"text-center\">Login or Register</h3>\n  <hr>\n  <div class=\"wrapper bg-light\">\n    <form class=\"form-signin\" [formGroup]=\"loginForm\"> \n      <div class=\"form-group text-center\">    \n        <label>Username</label>\n        <input name=\"username\" type=\"text\" id=\"username\" class=\"form-control\" formControlName=\"username\">\n        <small *ngIf=\"!loginForm.get('username').valid && loginForm.get('username').dirty\" class=\"form-text text-danger\">Username is required!</small>\n      </div>\n      <div class=\"form-group text-center\">\n        <label>Password</label>\n        <input name=\"password\" type=\"password\" id=\"password\" class=\"form-control\" formControlName=\"password\">   \n        <small *ngIf=\"!loginForm.get('password').valid && loginForm.get('password').dirty\" class=\"form-text text-danger\">Password is required!</small>\n      </div>\n      <button (click) = \"onSubmit(loginForm)\" class=\"btn btn-success\" type=\"submit\">Login</button>   \n      <button (click) = \"register()\" class=\"btn btn-info float-right\" type=\"submit\">Register</button> \n      <small *ngIf=\"errorLabel\" class=\"form-text text-danger text-center\">Invalid Username or Password!</small>\n    </form>\n  </div>\n  </div>"

/***/ }),

/***/ "./src/app/identity/login/login.component.less":
/*!*****************************************************!*\
  !*** ./src/app/identity/login/login.component.less ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpZGVudGl0eS9sb2dpbi9sb2dpbi5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/identity/login/login.component.ts":
/*!***************************************************!*\
  !*** ./src/app/identity/login/login.component.ts ***!
  \***************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, formBuilder, router) {
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.buildLoginForm();
    };
    LoginComponent.prototype.buildLoginForm = function () {
        return this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    LoginComponent.prototype.onSubmit = function (form) {
        if (form != null) {
            this.authService.login(form);
        }
        if (this.authService.loginFailureStatus === '401') {
            this.errorLabel = true;
        }
        else {
            this.errorLabel = false;
        }
    };
    LoginComponent.prototype.register = function () {
        this.router.navigate(['/register']);
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/identity/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.less */ "./src/app/identity/login/login.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/identity/register/register.component.html":
/*!***********************************************************!*\
  !*** ./src/app/identity/register/register.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-6 m-auto\">\n  <h3 class=\"text-center\">Register new user</h3>\n  <hr>\n  <div class=\"wrapper bg-light\">\n    <form class=\"form-signin\" [formGroup]=\"registerForm\"> \n      <div class=\"form-group text-center\">    \n        <label>Username</label>\n        <input name=\"username\" type=\"text\" id=\"username\" class=\"form-control\" formControlName=\"username\">\n        <small *ngIf=\"!registerForm.get('username').valid && registerForm.get('username').dirty\" class=\"form-text text-danger\">Username is required!</small>\n      </div>\n      <div class=\"form-group text-center\">\n        <label>Password</label>\n        <input name=\"password\" type=\"password\" id=\"password\" class=\"form-control\" formControlName=\"password\">   \n        <small *ngIf=\"!registerForm.get('password').valid && registerForm.get('password').dirty\" class=\"form-text text-danger\">Password is required!</small>\n      </div>\n      <div class=\"form-group text-center\">\n        <label>Wallet Money Amount</label>\n        <input name=\"moneyAmount\" type=\"number\" id=\"moneyAmount\" class=\"form-control\" formControlName=\"moneyAmount\">   \n        <small *ngIf=\"!registerForm.get('moneyAmount').valid && registerForm.get('moneyAmount').dirty\" class=\"form-text text-danger\">Money Amount is required! Range (1-10000)!</small>\n      </div>\n      <button (click) = \"back()\" class=\"btn btn-info\"><i class=\"material-icons\">keyboard_backspace</i> Back</button>   \n      <button (click) = \"onSubmit(registerForm)\" class=\"btn btn-success float-right\" type=\"submit\">Register</button> \n      <small class=\"form-text text-danger text-center\">{{errorInfo}}</small>\n    </form>\n  </div>\n  </div>"

/***/ }),

/***/ "./src/app/identity/register/register.component.less":
/*!***********************************************************!*\
  !*** ./src/app/identity/register/register.component.less ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-signin {\n  padding: 25px 35px 45px;\n  margin: 0 auto;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlkZW50aXR5L3JlZ2lzdGVyL0M6L0dJVFB1YmxpYy9Jbml0QXBwbGljYXRpb24vSW5pdEFwcC9Jbml0QXBwV0VCL3NyYy9hcHAvaWRlbnRpdHkvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50Lmxlc3MiLCJpZGVudGl0eS9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLHFDQUFBO0NDQ0giLCJmaWxlIjoiaWRlbnRpdHkvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1zaWduaW4ge1xuICAgIHBhZGRpbmc6IDI1cHggMzVweCA0NXB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4xKTsgIFxuICB9XG4gICIsIi5mb3JtLXNpZ25pbiB7XG4gIHBhZGRpbmc6IDI1cHggMzVweCA0NXB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/identity/register/register.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/identity/register/register.component.ts ***!
  \*********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService, formBuilder, router) {
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.registerForm = this.buildRegisterForm();
    };
    RegisterComponent.prototype.buildRegisterForm = function () {
        return this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            moneyAmount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(10000)]]
        });
    };
    RegisterComponent.prototype.onSubmit = function (form) {
        if (form != null) {
            this.authService.register(form);
        }
        if (this.authService.registerFailureStatus != null) {
            this.errorInfo = this.authService.registerFailureStatus;
        }
    };
    RegisterComponent.prototype.back = function () {
        this.router.navigate(['/login']);
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/identity/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.less */ "./src/app/identity/register/register.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/samples/samples-list/samples-list.component.html":
/*!******************************************************************!*\
  !*** ./src/app/samples/samples-list/samples-list.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  samples-list works!\n</p>\n"

/***/ }),

/***/ "./src/app/samples/samples-list/samples-list.component.less":
/*!******************************************************************!*\
  !*** ./src/app/samples/samples-list/samples-list.component.less ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzYW1wbGVzL3NhbXBsZXMtbGlzdC9zYW1wbGVzLWxpc3QuY29tcG9uZW50Lmxlc3MifQ== */"

/***/ }),

/***/ "./src/app/samples/samples-list/samples-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/samples/samples-list/samples-list.component.ts ***!
  \****************************************************************/
/*! exports provided: SamplesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SamplesListComponent", function() { return SamplesListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SamplesListComponent = /** @class */ (function () {
    function SamplesListComponent() {
    }
    SamplesListComponent.prototype.ngOnInit = function () {
    };
    SamplesListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-samples-list',
            template: __webpack_require__(/*! ./samples-list.component.html */ "./src/app/samples/samples-list/samples-list.component.html"),
            styles: [__webpack_require__(/*! ./samples-list.component.less */ "./src/app/samples/samples-list/samples-list.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SamplesListComponent);
    return SamplesListComponent;
}());



/***/ }),

/***/ "./src/app/samples/samples-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/samples/samples-routing.module.ts ***!
  \***************************************************/
/*! exports provided: SamplesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SamplesRoutingModule", function() { return SamplesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _samples_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./samples.component */ "./src/app/samples/samples.component.ts");
/* harmony import */ var _samples_list_samples_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./samples-list/samples-list.component */ "./src/app/samples/samples-list/samples-list.component.ts");





var samplesRoutes = [
    {
        path: '',
        component: _samples_component__WEBPACK_IMPORTED_MODULE_3__["SamplesComponent"],
        children: [
            {
                path: '',
                component: _samples_list_samples_list_component__WEBPACK_IMPORTED_MODULE_4__["SamplesListComponent"]
            }
        ]
    }
];
var SamplesRoutingModule = /** @class */ (function () {
    function SamplesRoutingModule() {
    }
    SamplesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(samplesRoutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], SamplesRoutingModule);
    return SamplesRoutingModule;
}());



/***/ }),

/***/ "./src/app/samples/samples.component.html":
/*!************************************************!*\
  !*** ./src/app/samples/samples.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/samples/samples.component.less":
/*!************************************************!*\
  !*** ./src/app/samples/samples.component.less ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzYW1wbGVzL3NhbXBsZXMuY29tcG9uZW50Lmxlc3MifQ== */"

/***/ }),

/***/ "./src/app/samples/samples.component.ts":
/*!**********************************************!*\
  !*** ./src/app/samples/samples.component.ts ***!
  \**********************************************/
/*! exports provided: SamplesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SamplesComponent", function() { return SamplesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SamplesComponent = /** @class */ (function () {
    function SamplesComponent() {
    }
    SamplesComponent.prototype.ngOnInit = function () {
    };
    SamplesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-samples',
            template: __webpack_require__(/*! ./samples.component.html */ "./src/app/samples/samples.component.html"),
            styles: [__webpack_require__(/*! ./samples.component.less */ "./src/app/samples/samples.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SamplesComponent);
    return SamplesComponent;
}());



/***/ }),

/***/ "./src/app/samples/samples.module.ts":
/*!*******************************************!*\
  !*** ./src/app/samples/samples.module.ts ***!
  \*******************************************/
/*! exports provided: SamplesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SamplesModule", function() { return SamplesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _samples_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./samples.component */ "./src/app/samples/samples.component.ts");
/* harmony import */ var _samples_list_samples_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./samples-list/samples-list.component */ "./src/app/samples/samples-list/samples-list.component.ts");
/* harmony import */ var _samples_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./samples-routing.module */ "./src/app/samples/samples-routing.module.ts");
/* harmony import */ var _samples_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./samples.service */ "./src/app/samples/samples.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");








var SamplesModule = /** @class */ (function () {
    function SamplesModule() {
    }
    SamplesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _samples_component__WEBPACK_IMPORTED_MODULE_3__["SamplesComponent"],
                _samples_list_samples_list_component__WEBPACK_IMPORTED_MODULE_4__["SamplesListComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_7__["HttpModule"],
                _samples_routing_module__WEBPACK_IMPORTED_MODULE_5__["SamplesRoutingModule"]
            ],
            exports: [
                _samples_list_samples_list_component__WEBPACK_IMPORTED_MODULE_4__["SamplesListComponent"]
            ],
            providers: [
                _samples_service__WEBPACK_IMPORTED_MODULE_6__["SamplesService"]
            ]
        })
    ], SamplesModule);
    return SamplesModule;
}());



/***/ }),

/***/ "./src/app/samples/samples.service.ts":
/*!********************************************!*\
  !*** ./src/app/samples/samples.service.ts ***!
  \********************************************/
/*! exports provided: SamplesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SamplesService", function() { return SamplesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SamplesService = /** @class */ (function () {
    function SamplesService() {
    }
    SamplesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SamplesService);
    return SamplesService;
}());



/***/ }),

/***/ "./src/app/shared-module/page-not-found/page-not-found.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/shared-module/page-not-found/page-not-found.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row mt-3\">\n    <div class=\"col-lg-12\">\n      <h2>Ooops!</h2>\n      <h3>404 Page Not Found!</h3>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/shared-module/page-not-found/page-not-found.component.less":
/*!****************************************************************************!*\
  !*** ./src/app/shared-module/page-not-found/page-not-found.component.less ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2,\nh3 {\n  color: #ff0000;\n  margin-top: 50px;\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC1tb2R1bGUvcGFnZS1ub3QtZm91bmQvQzovR0lUUHVibGljL0luaXRBcHBsaWNhdGlvbi9Jbml0QXBwL0luaXRBcHBXRUIvc3JjL2FwcC9zaGFyZWQtbW9kdWxlL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5sZXNzIiwic2hhcmVkLW1vZHVsZS9wYWdlLW5vdC1mb3VuZC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtDQ0VIIiwiZmlsZSI6InNoYXJlZC1tb2R1bGUvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMiwgaDMge1xuICAgIGNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iLCJoMixcbmgzIHtcbiAgY29sb3I6ICNmZjAwMDA7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/shared-module/page-not-found/page-not-found.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared-module/page-not-found/page-not-found.component.ts ***!
  \**************************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/shared-module/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.less */ "./src/app/shared-module/page-not-found/page-not-found.component.less")]
        })
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/shared-module/services/layout.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared-module/services/layout.service.ts ***!
  \**********************************************************/
/*! exports provided: LayoutService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutService", function() { return LayoutService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var LayoutService = /** @class */ (function () {
    function LayoutService() {
        this.navBarSource$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    LayoutService.prototype.showNavBar = function () {
        this.navBarSource$.next(true);
    };
    LayoutService.prototype.hideNavBar = function () {
        this.navBarSource$.next(false);
    };
    LayoutService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], LayoutService);
    return LayoutService;
}());



/***/ }),

/***/ "./src/app/shared-module/shared-module.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared-module/shared-module.module.ts ***!
  \*******************************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/shared-module/page-not-found/page-not-found.component.ts");




var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__["PageNotFoundComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            exports: [
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__["PageNotFoundComponent"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\GITPublic\InitApplication\InitApp\InitAppWEB\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map