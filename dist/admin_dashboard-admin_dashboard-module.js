(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin_dashboard-admin_dashboard-module"],{

/***/ "./src/app/admin/admin_dashboard/admin_dashboard-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/admin/admin_dashboard/admin_dashboard-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: Admin_DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Admin_DashboardRoutingModule", function() { return Admin_DashboardRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _admin_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin_dashboard.component */ "./src/app/admin/admin_dashboard/admin_dashboard.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _admin_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["Admin_DashboardComponent"]
    },
];
var Admin_DashboardRoutingModule = (function () {
    function Admin_DashboardRoutingModule() {
    }
    Admin_DashboardRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], Admin_DashboardRoutingModule);
    return Admin_DashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/admin/admin_dashboard/admin_dashboard.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/admin/admin_dashboard/admin_dashboard.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div [@routerTransition]>\r\n    <h2 class=\"text-muted\">Dashboard <small>Statistics Overview</small></h2>\r\n   \r\n\r\n\r\n\r\n</div> -->\r\n\r\ndeshboard ...."

/***/ }),

/***/ "./src/app/admin/admin_dashboard/admin_dashboard.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/admin/admin_dashboard/admin_dashboard.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/admin_dashboard/admin_dashboard.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/admin/admin_dashboard/admin_dashboard.component.ts ***!
  \********************************************************************/
/*! exports provided: Admin_DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Admin_DashboardComponent", function() { return Admin_DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { routerTransition } from '../router.animations';
var Admin_DashboardComponent = (function () {
    function Admin_DashboardComponent() {
        this.alerts = [];
        this.sliders = [];
        this.sliders.push({
            imagePath: 'assets/images/slider1.jpg',
            label: 'First slide label',
            text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
        }, {
            imagePath: 'assets/images/slider2.jpg',
            label: 'Second slide label',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        }, {
            imagePath: 'assets/images/slider3.jpg',
            label: 'Third slide label',
            text: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
        });
        this.alerts.push({
            id: 1,
            type: 'success',
            message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n                Voluptates est animi quibusdam praesentium quam, et perspiciatis,\n                consectetur velit culpa molestias dignissimos\n                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum"
        }, {
            id: 2,
            type: 'warning',
            message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n                Voluptates est animi quibusdam praesentium quam, et perspiciatis,\n                consectetur velit culpa molestias dignissimos\n                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum"
        });
    }
    Admin_DashboardComponent.prototype.ngOnInit = function () { };
    Admin_DashboardComponent.prototype.closeAlert = function (alert) {
        var index = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    };
    Admin_DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./admin_dashboard.component.html */ "./src/app/admin/admin_dashboard/admin_dashboard.component.html"),
            styles: [__webpack_require__(/*! ./admin_dashboard.component.scss */ "./src/app/admin/admin_dashboard/admin_dashboard.component.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], Admin_DashboardComponent);
    return Admin_DashboardComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin_dashboard/admin_dashboard.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/admin/admin_dashboard/admin_dashboard.module.ts ***!
  \*****************************************************************/
/*! exports provided: Admin_DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Admin_DashboardModule", function() { return Admin_DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _admin_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin_dashboard-routing.module */ "./src/app/admin/admin_dashboard/admin_dashboard-routing.module.ts");
/* harmony import */ var _admin_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin_dashboard.component */ "./src/app/admin/admin_dashboard/admin_dashboard.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//import { StatModule } from '../../shared';
var Admin_DashboardModule = (function () {
    function Admin_DashboardModule() {
    }
    Admin_DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselModule"].forRoot(),
                _admin_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__["Admin_DashboardRoutingModule"],
            ],
            declarations: [
                _admin_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["Admin_DashboardComponent"],
            ],
            exports: [_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["Admin_DashboardComponent"]],
            providers: []
        })
    ], Admin_DashboardModule);
    return Admin_DashboardModule;
}());



/***/ })

}]);
//# sourceMappingURL=admin_dashboard-admin_dashboard-module.js.map