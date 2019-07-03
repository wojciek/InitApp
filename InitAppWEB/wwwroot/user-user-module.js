(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-user-module"],{

/***/ "./src/app/guards/form-can-deactivate.guard.ts":
/*!*****************************************************!*\
  !*** ./src/app/guards/form-can-deactivate.guard.ts ***!
  \*****************************************************/
/*! exports provided: FormCanDeactivateGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormCanDeactivateGuard", function() { return FormCanDeactivateGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FormCanDeactivateGuard = /** @class */ (function () {
    function FormCanDeactivateGuard() {
    }
    FormCanDeactivateGuard.prototype.canDeactivate = function (component) {
        return component.canDeactivate ? component.canDeactivate() : true;
    };
    FormCanDeactivateGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        })
    ], FormCanDeactivateGuard);
    return FormCanDeactivateGuard;
}());



/***/ }),

/***/ "./src/app/user/user-change-password/user-change-password.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/user/user-change-password/user-change-password.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"changeUserPasswordForm\">\n<!-- Button trigger modal -->\n<button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#exampleModal\">\n  Change password\n</button>\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Change your password</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n          <div class=\"form-group\">\n              <label for=\"dateOfBirth\">Set new password</label>\n              <div class=\"input-group\">\n                <input formControlName =\"Password\" type=\"password\" class=\"form-control\" id=\"password\" placeholder=\"password\">\n              </div>\n            </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        <button type=\"submit\" [disabled]=\"changeUserPasswordForm.invalid\" class=\"btn btn-primary\" (click)=\"changeUserPassword()\">Save changes</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n</form>"

/***/ }),

/***/ "./src/app/user/user-change-password/user-change-password.component.less":
/*!*******************************************************************************!*\
  !*** ./src/app/user/user-change-password/user-change-password.component.less ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci1jaGFuZ2UtcGFzc3dvcmQvdXNlci1jaGFuZ2UtcGFzc3dvcmQuY29tcG9uZW50Lmxlc3MifQ== */"

/***/ }),

/***/ "./src/app/user/user-change-password/user-change-password.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/user/user-change-password/user-change-password.component.ts ***!
  \*****************************************************************************/
/*! exports provided: UserChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserChangePasswordComponent", function() { return UserChangePasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user.service */ "./src/app/user/user.service.ts");





var UserChangePasswordComponent = /** @class */ (function () {
    function UserChangePasswordComponent(router, formBuilder, userService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.userService = userService;
    }
    UserChangePasswordComponent.prototype.ngOnInit = function () {
        this.changeUserPasswordForm = this.buildUserPasswordForm();
    };
    UserChangePasswordComponent.prototype.buildUserPasswordForm = function () {
        return this.formBuilder.group({
            Password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    UserChangePasswordComponent.prototype.changeUserPassword = function () {
        this.userService.changeUserPassword(this.changeUserPasswordForm.value).subscribe(function (successResponse) {
            return console.log('udało się' + successResponse);
        }, function (errorResponse) { return console.log('dupa nie udało sie'); }, function () { return console.log('to sie zawsze zrobi na koniec'); });
    };
    UserChangePasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-change-password',
            template: __webpack_require__(/*! ./user-change-password.component.html */ "./src/app/user/user-change-password/user-change-password.component.html"),
            styles: [__webpack_require__(/*! ./user-change-password.component.less */ "./src/app/user/user-change-password/user-change-password.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], UserChangePasswordComponent);
    return UserChangePasswordComponent;
}());



/***/ }),

/***/ "./src/app/user/user-dashboard/user-dashboard.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/user/user-dashboard/user-dashboard.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>User Dashboard</h3>\r\n<hr>\r\n<div class=\"form-group row\">\r\n  <label for=\"username\" class=\"col-sm-2 col-form-label\">Username</label>\r\n  <div class=\"col-sm-10\">\r\n    <input type=\"text\" readonly class=\"form-control-plaintext\" id=\"username\" [value]=\"appUsername\">\r\n  </div>\r\n</div>\r\n<div class=\"form-group row\">\r\n  <label for=\"password\" class=\"col-sm-2 col-form-label\">Password</label>\r\n    <app-user-change-password></app-user-change-password>\r\n</div>\r\n  <hr>\r\n  <div class=\"form-group mt-2\">\r\n    <label>Address</label>\r\n    <div class=\"col-sm-10\">\r\n      <input type=\"text\" readonly class=\"form-control-plaintext\" id=\"staticEmail\" [value]=\"appUserData.Line1 + appUserData.Line2 + appUserData.Line3\">\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group mt-2\">\r\n    <label>City</label>\r\n    <div class=\"col-sm-10\">\r\n      <input type=\"text\" readonly class=\"form-control-plaintext\" id=\"staticEmail\" [value]=\"appUserData.City\">\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group mt-2\">\r\n    <label>Zip Code</label>\r\n    <div class=\"col-sm-10\">\r\n      <input type=\"text\" readonly class=\"form-control-plaintext\" id=\"staticEmail\" [value]=\"appUserData.ZipCode\">\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group mt-2\">\r\n    <label>Country</label>\r\n    <div class=\"col-sm-10\">\r\n      <input type=\"text\" readonly class=\"form-control-plaintext\" id=\"staticEmail\" [value]=\"appUserData.Country\">\r\n    </div>\r\n  </div>\r\n  <button (click)=\"changeUserAddress()\" class=\"btn btn-dark\">Change Address</button>"

/***/ }),

/***/ "./src/app/user/user-dashboard/user-dashboard.component.less":
/*!*******************************************************************!*\
  !*** ./src/app/user/user-dashboard/user-dashboard.component.less ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci1kYXNoYm9hcmQvdXNlci1kYXNoYm9hcmQuY29tcG9uZW50Lmxlc3MifQ== */"

/***/ }),

/***/ "./src/app/user/user-dashboard/user-dashboard.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/user/user-dashboard/user-dashboard.component.ts ***!
  \*****************************************************************/
/*! exports provided: UserDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDashboardComponent", function() { return UserDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user/user.service.ts");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");





var UserDashboardComponent = /** @class */ (function () {
    function UserDashboardComponent(router, userService, route, authService) {
        this.router = router;
        this.userService = userService;
        this.route = route;
        this.authService = authService;
    }
    UserDashboardComponent.prototype.ngOnInit = function () {
        this.appUserData = this.route.snapshot.data['user'];
        if (this.authService.loggedInUserName$) {
            this.appUsername = this.authService.takeLoggedInUserName();
        }
    };
    UserDashboardComponent.prototype.changeUserAddress = function () {
        this.router.navigate(['edit']);
    };
    UserDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-dashboard',
            template: __webpack_require__(/*! ./user-dashboard.component.html */ "./src/app/user/user-dashboard/user-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./user-dashboard.component.less */ "./src/app/user/user-dashboard/user-dashboard.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], UserDashboardComponent);
    return UserDashboardComponent;
}());



/***/ }),

/***/ "./src/app/user/user-edit/user-edit.component.html":
/*!*********************************************************!*\
  !*** ./src/app/user/user-edit/user-edit.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>User Edit Address</h3>\n<h5>UserData</h5> \n<hr>\n<app-user-change-password></app-user-change-password>\n<hr>\n  <form [formGroup]=\"updateUserAddressForm\">\n    <div class=\"form-group mt-2\">\n      <div class=\"form-group mt-2\">\n        <label>Address Line 1</label>\n        <input formControlName =\"line1\" type=\"text\" class=\"form-control\" id=\"line1\" placeholder=\"line1\">\n      </div>\n      <div class=\"form-group mt-2\">\n        <label>Address Line 2</label>\n        <input formControlName =\"line2\" type=\"text\" class=\"form-control\" id=\"line2\" placeholder=\"line2\">\n      </div>\n      <div class=\"form-group mt-2\">\n        <label>Address Line 3</label>\n        <input formControlName =\"line3\" type=\"text\" class=\"form-control\" id=\"line3\" placeholder=\"line3\">\n      </div>\n      <div class=\"form-group mt-2\">\n        <label>City</label>\n        <input formControlName =\"city\" type=\"text\" class=\"form-control\" id=\"city\" placeholder=\"city\">\n      </div>\n      <div class=\"form-group mt-2\">\n        <label>Zip Code</label>\n        <input formControlName =\"zipCode\" type=\"text\" class=\"form-control\" id=\"zipCode\" placeholder=\"zipCode\">\n      </div>\n      <div class=\"form-group mt-2\">\n        <label>Country</label>\n        <input formControlName =\"country\" type=\"text\" class=\"form-control\" id=\"country\" placeholder=\"country\">\n      </div>\n    <button [disabled]=\"updateUserAddressForm.invalid\" type=\"submit\" (click)=\"updateUserAddress()\" class=\"btn btn-dark\">Save Changes</button>\n    </div>\n  </form>"

/***/ }),

/***/ "./src/app/user/user-edit/user-edit.component.less":
/*!*********************************************************!*\
  !*** ./src/app/user/user-edit/user-edit.component.less ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci1lZGl0L3VzZXItZWRpdC5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/user/user-edit/user-edit.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/user/user-edit/user-edit.component.ts ***!
  \*******************************************************/
/*! exports provided: UserEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEditComponent", function() { return UserEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user.service */ "./src/app/user/user.service.ts");





var UserEditComponent = /** @class */ (function () {
    function UserEditComponent(router, formBuilder, userService, route) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.route = route;
    }
    UserEditComponent.prototype.ngOnInit = function () {
        this.updateUserAddressForm = this.buildUserEditForm();
        this.appUser = this.route.snapshot.data['user'];
    };
    UserEditComponent.prototype.canDeactivate = function () {
        if (!this.updateUserAddressForm.dirty) {
            return true;
        }
        return window.confirm('Discard changes?');
    };
    UserEditComponent.prototype.buildUserEditForm = function () {
        return this.formBuilder.group({
            line1: [this.appUser.Line1],
            line2: [this.appUser.Line2],
            line3: [this.appUser.Line3],
            city: [this.appUser.City],
            zipCode: [this.appUser.ZipCode],
            country: [this.appUser.Country],
        });
    };
    UserEditComponent.prototype.updateUserAddress = function () {
        var _this = this;
        this.userService.updateUserAddress(this.updateUserAddressForm.value).subscribe(function () {
            return _this.router.navigate(['user']);
        });
    };
    UserEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-edit',
            template: __webpack_require__(/*! ./user-edit.component.html */ "./src/app/user/user-edit/user-edit.component.html"),
            styles: [__webpack_require__(/*! ./user-edit.component.less */ "./src/app/user/user-edit/user-edit.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], UserEditComponent);
    return UserEditComponent;
}());



/***/ }),

/***/ "./src/app/user/user-resolve.service.ts":
/*!**********************************************!*\
  !*** ./src/app/user/user-resolve.service.ts ***!
  \**********************************************/
/*! exports provided: UserResolveService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserResolveService", function() { return UserResolveService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ "./src/app/user/user.service.ts");



var UserResolveService = /** @class */ (function () {
    function UserResolveService(userService) {
        this.userService = userService;
    }
    UserResolveService.prototype.resolve = function (route) {
        return this.userService.getUserAddress();
    };
    UserResolveService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], UserResolveService);
    return UserResolveService;
}());



/***/ }),

/***/ "./src/app/user/user-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/user/user-routing.module.ts ***!
  \*********************************************/
/*! exports provided: UserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function() { return UserRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-dashboard/user-dashboard.component */ "./src/app/user/user-dashboard/user-dashboard.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _guards_form_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../guards/form-can-deactivate.guard */ "./src/app/guards/form-can-deactivate.guard.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-edit/user-edit.component */ "./src/app/user/user-edit/user-edit.component.ts");
/* harmony import */ var _user_resolve_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-resolve.service */ "./src/app/user/user-resolve.service.ts");









var userRoutes = [
    {
        path: '',
        component: _user_component__WEBPACK_IMPORTED_MODULE_2__["UserComponent"],
        children: [
            {
                path: '',
                component: _user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["UserDashboardComponent"],
                canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
                resolve: { user: _user_resolve_service__WEBPACK_IMPORTED_MODULE_8__["UserResolveService"] }
            },
            {
                path: 'edit',
                component: _user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_7__["UserEditComponent"],
                canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
                canDeactivate: [_guards_form_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_5__["FormCanDeactivateGuard"]],
                resolve: { user: _user_resolve_service__WEBPACK_IMPORTED_MODULE_8__["UserResolveService"] }
            }
        ]
    }
];
var UserRoutingModule = /** @class */ (function () {
    function UserRoutingModule() {
    }
    UserRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(userRoutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], UserRoutingModule);
    return UserRoutingModule;
}());



/***/ }),

/***/ "./src/app/user/user.component.html":
/*!******************************************!*\
  !*** ./src/app/user/user.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/user/user.component.less":
/*!******************************************!*\
  !*** ./src/app/user/user.component.less ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserComponent = /** @class */ (function () {
    function UserComponent() {
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.less */ "./src/app/user/user.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/user/user.module.ts":
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-dashboard/user-dashboard.component */ "./src/app/user/user-dashboard/user-dashboard.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-routing.module */ "./src/app/user/user-routing.module.ts");
/* harmony import */ var _user_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-edit/user-edit.component */ "./src/app/user/user-edit/user-edit.component.ts");
/* harmony import */ var _user_change_password_user_change_password_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user-change-password/user-change-password.component */ "./src/app/user/user-change-password/user-change-password.component.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user.service */ "./src/app/user/user.service.ts");
/* harmony import */ var _user_resolve_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user-resolve.service */ "./src/app/user/user-resolve.service.ts");












var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _user_component__WEBPACK_IMPORTED_MODULE_7__["UserComponent"],
                _user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["UserDashboardComponent"],
                _user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_8__["UserEditComponent"],
                _user_change_password_user_change_password_component__WEBPACK_IMPORTED_MODULE_9__["UserChangePasswordComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _user_routing_module__WEBPACK_IMPORTED_MODULE_6__["UserRoutingModule"]
            ],
            exports: [
                _user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["UserDashboardComponent"],
                _user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_8__["UserEditComponent"],
                _user_component__WEBPACK_IMPORTED_MODULE_7__["UserComponent"]
            ],
            providers: [
                _user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"],
                _user_resolve_service__WEBPACK_IMPORTED_MODULE_11__["UserResolveService"]
            ]
        })
    ], UserModule);
    return UserModule;
}());



/***/ }),

/***/ "./src/app/user/user.service.ts":
/*!**************************************!*\
  !*** ./src/app/user/user.service.ts ***!
  \**************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.apiDataUrl = 'http://localhost:5006/api/';
    }
    UserService.prototype.updateUserAddress = function (data) {
        return this.http.put(this.apiDataUrl + localStorage.getItem('authUser'), data);
    };
    UserService.prototype.changeUserPassword = function (password) {
        return this.http.put(this.apiDataUrl + 'password/' + localStorage.getItem('authUser'), password);
    };
    UserService.prototype.getUserAddress = function () {
        return this.http.get(this.apiDataUrl + 'address/' + localStorage.getItem('authUser'));
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ })

}]);
//# sourceMappingURL=user-user-module.js.map