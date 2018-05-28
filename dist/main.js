(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./admin/admin.module": [
		"./src/app/admin/admin.module.ts",
		"admin-admin-module"
	],
	"./admin_dashboard/admin_dashboard.module": [
		"./src/app/admin/admin_dashboard/admin_dashboard.module.ts",
		"admin_dashboard-admin_dashboard-module"
	],
	"./admin_destination/admin_city/admin_city.module": [
		"./src/app/admin/admin_destination/admin_city/admin_city.module.ts",
		"common",
		"admin_destination-admin_city-admin_city-module"
	],
	"./admin_destination/admin_country/admin_country.module": [
		"./src/app/admin/admin_destination/admin_country/admin_country.module.ts",
		"common",
		"admin_destination-admin_country-admin_country-module"
	],
	"./admin_destination/admin_destination.module": [
		"./src/app/admin/admin_destination/admin_destination.module.ts",
		"common",
		"admin_destination-admin_destination-module"
	],
	"./admin_destination/admin_provience/admin_provience.module": [
		"./src/app/admin/admin_destination/admin_provience/admin_provience.module.ts",
		"common",
		"admin_destination-admin_provience-admin_provience-module"
	],
	"./destination/city/city.module": [
		"./src/app/website/destination/city/city.module.ts",
		"common",
		"destination-city-city-module"
	],
	"./destination/destination.module": [
		"./src/app/website/destination/destination.module.ts",
		"common",
		"destination-destination-module"
	],
	"./destination/provience/provience.module": [
		"./src/app/website/destination/provience/provience.module.ts",
		"common",
		"destination-provience-provience-module"
	],
	"./home/home.module": [
		"./src/app/website/home/home.module.ts",
		"home-home-module"
	],
	"./website/website.module": [
		"./src/app/website/website.module.ts",
		"website-website-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error('Cannot find module "' + req + '".');
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//import { AuthGuard } from './shared';
var routes = [
    { path: 'admin', loadChildren: './admin/admin.module#AdminModule' },
    { path: '', loadChildren: './website/website.module#WebsiteModule' },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { enableTracing: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
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

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _shared_service_configuration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/service/configuration.service */ "./src/app/shared/service/configuration.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { SecurityService } from './website/shared/service/security.service';

/*
 * App Component
 * Top Level Component
 */
var AppComponent = (function () {
    //constructor(private titleService: Title, private securityService: SecurityService, private configurationService: ConfigurationService) {
    function AppComponent(titleService, configurationService) {
        this.titleService = titleService;
        this.configurationService = configurationService;
        this.Authenticated = false;
        //this.Authenticated = this.securityService.IsAuthorized;
    }
    AppComponent.prototype.ngOnInit = function () {
        //console.log('app on init');
        //this.subscription = this.securityService.authenticationChallenge$.subscribe(res => this.Authenticated = res);
        //Get configuration from server environment variables:
        //console.log('configuration');
        this.configurationService.load();
    };
    AppComponent.prototype.setTitle = function (newTitle) {
        this.titleService.setTitle('SnowBC');
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")],
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["Title"], _shared_service_configuration_service__WEBPACK_IMPORTED_MODULE_2__["ConfigurationService"]])
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var ngx_facebook__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-facebook */ "./node_modules/ngx-facebook/dist/esm/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"].forRoot(),
                ngx_facebook__WEBPACK_IMPORTED_MODULE_9__["FacebookModule"].forRoot(),
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/shared/model/configuration.model.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/model/configuration.model.ts ***!
  \*****************************************************/
/*! exports provided: IConfiguration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IConfiguration", function() { return IConfiguration; });
var IConfiguration = (function () {
    function IConfiguration() {
    }
    return IConfiguration;
}());



/***/ }),

/***/ "./src/app/shared/service/configuration.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/service/configuration.service.ts ***!
  \*********************************************************/
/*! exports provided: ConfigurationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurationService", function() { return ConfigurationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var _model_configuration_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/configuration.model */ "./src/app/shared/model/configuration.model.ts");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage.service */ "./src/app/shared/service/storage.service.ts");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs/_esm5/Subject.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ConfigurationService = (function () {
    function ConfigurationService(http, storageService) {
        this.http = http;
        this.storageService = storageService;
        // observable that is fired when settings are loaded from server
        this.settingsLoadedSource = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.settingsLoaded$ = this.settingsLoadedSource.asObservable();
        this.isReady = false;
    }
    ConfigurationService.prototype.load = function () {
        //console.log(  "here ----------------------------------");
        this.serverSettings = new _model_configuration_model__WEBPACK_IMPORTED_MODULE_2__["IConfiguration"];
        this.serverSettings.countryUrl = "http://localhost:61125/api/countries";
        this.storageService.store('countryUrl', this.serverSettings.countryUrl);
        //console.log(this.serverSettings.countryUrl + "----------------------------------");
        this.storageService.store('provienceUrl', this.serverSettings.provienceUrl);
        this.storageService.store('cityUrl', this.serverSettings.cityUrl);
        this.isReady = true;
        this.settingsLoadedSource.next();
        // const baseURI = document.baseURI.endsWith('/') ? document.baseURI : `${document.baseURI}/`;
        // let url = `${baseURI}Home/Configuration`;
        // this.http.get(url).subscribe((response: Response) => {
        //     console.log('server settings loaded');
        //     this.serverSettings = response.json();
        //     console.log(this.serverSettings);
        //     this.storageService.store('countryUrl', this.serverSettings.countryUrl);
        //     this.storageService.store('provienceUrl', this.serverSettings.provienceUrl);
        //     this.storageService.store('cityUrl', this.serverSettings.cityUrl);
        //     //this.storageService.store('orderingUrl', this.serverSettings.orderingUrl);
        //     //this.storageService.store('marketingUrl', this.serverSettings.marketingUrl);
        //     //this.storageService.store('activateCampaignDetailFunction', this.serverSettings.activateCampaignDetailFunction);
        //     this.isReady = true;
        //     this.settingsLoadedSource.next();
        // });
    };
    ConfigurationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]])
    ], ConfigurationService);
    return ConfigurationService;
}());



/***/ }),

/***/ "./src/app/shared/service/data.service.ts":
/*!************************************************!*\
  !*** ./src/app/shared/service/data.service.ts ***!
  \************************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs/_esm5/add/operator/catch.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







//import { Guid } from '../../../guid';
//import { SecurityService } from './security.service';
// Implementing a Retry-Circuit breaker policy 
// is pending to do for the SPA app
var DataService = (function () {
    //constructor(private http: Http, private securityService: SecurityService) { }
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.get = function (url, params) {
        var options = {};
        // if (this.securityService) {
        //     options.headers = new Headers();
        //     options.headers.append('Authorization', 'Bearer ' + this.securityService.GetToken());
        // }
        options.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        //console.log("----------------------------dataservice--" + url + "--dataservice------------------------");
        return this.http.get(url, options).map(function (res) {
            //console.log("----------------------------dataservicereturn--" +res+ "--dataservice------------------------");
            return res;
        }).catch(this.handleError);
    };
    /*
    postWithId(url: string, data: any, params?: any): Observable<Response> {
        return this.doPost(url, data, true, params);
    }
    */
    DataService.prototype.post = function (url, data, params) {
        return this.doPost(url, data, false, params);
    };
    DataService.prototype.putWithId = function (url, data, params) {
        return this.doPut(url, data, false, params);
    };
    DataService.prototype.doPost = function (url, data, needId, params) {
        var options = {};
        options.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        options.headers.append("Content-Type", "application/json");
        options.headers.append("Accept", "application/json");
        // if (this.securityService) {
        //     options.headers.append('Authorization', 'Bearer ' + this.securityService.GetToken());
        // }
        // if (needId) {
        //     let guid = Guid.newGuid();
        //     options.headers.append('x-requestid', guid);
        // }
        return this.http.post(url, data, options).map(function (res) {
            return res;
        }).catch(this.handleError);
    };
    DataService.prototype.doPut = function (url, data, needId, params) {
        var options = {};
        options.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        options.headers.append("Content-Type", "application/json");
        options.headers.append("Accept", "application/json");
        //options.headers.append('Access-Control-Allow-Headers', 'Content-Type'); 
        // if (this.securityService) {
        //     options.headers.append('Authorization', 'Bearer ' + this.securityService.GetToken());                                                                                                                                                               
        // }
        // if (needId) {
        //     let guid = Guid.newGuid();
        //     options.headers.append('x-requestid', guid);
        // }
        //console.log(options);
        //console.log(options +'------------------------here2---------------------' + JSON.stringify(data));
        return this.http.put(url, data, options).map(function (res) {
            return res;
        }).catch(this.handleError);
    };
    /*
        delete(url: string, params?: any) {
            let options: RequestOptionsArgs = {};
    
            
            // if (this.securityService) {
            //     options.headers = new Headers();
            //     options.headers.append('Authorization', 'Bearer ' + this.securityService.GetToken());
            // }
            
    
            console.log('data.service deleting');
            // return this.http.delete(url, options).subscribe(
            //        return res;
            //    );
    
            this.http.delete(url, options).subscribe((res) => {
                console.log('deleted');
            });
        }
    */
    DataService.prototype.handleError = function (error) {
        console.error('server error:', error);
        if (error instanceof _angular_http__WEBPACK_IMPORTED_MODULE_1__["Response"]) {
            var errMessage = '';
            try {
                errMessage = error.json();
            }
            catch (error) {
                errMessage = error.statusText;
            }
            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(errMessage);
        }
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(error || 'server error');
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/shared/service/storage.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/service/storage.service.ts ***!
  \***************************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
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

var StorageService = (function () {
    function StorageService() {
        this.storage = sessionStorage; // localStorage;
        //this.storage = window.localStorage;
    }
    StorageService.prototype.retrieve = function (key) {
        var item = this.storage.getItem(key);
        if (item && item !== 'undefined') {
            return JSON.parse(this.storage.getItem(key));
        }
        return;
    };
    StorageService.prototype.store = function (key, value) {
        this.storage.setItem(key, JSON.stringify(value));
    };
    StorageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], StorageService);
    return StorageService;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _service_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./service/data.service */ "./src/app/shared/service/data.service.ts");
/* harmony import */ var _service_configuration_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./service/configuration.service */ "./src/app/shared/service/configuration.service.ts");
/* harmony import */ var _service_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./service/storage.service */ "./src/app/shared/service/storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// Services

//import { BasketWrapperService } from './services/basket.wrapper.service';
//import { SecurityService } from './services/security.service';


// Components:
/*
import { Pager } from './components/pager/pager';
import { Header } from './components/header/header';
import { Identity } from './components/identity/identity';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

// Pipes:
import { UppercasePipe } from './pipes/uppercase.pipe';
*/
var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule_1 = SharedModule;
    SharedModule.forRoot = function () {
        return {
            ngModule: SharedModule_1,
            providers: [
                // Providers
                _service_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"],
                //BasketWrapperService,
                //SecurityService,
                _service_configuration_service__WEBPACK_IMPORTED_MODULE_7__["ConfigurationService"],
                _service_storage_service__WEBPACK_IMPORTED_MODULE_8__["StorageService"]
            ]
        };
    };
    SharedModule = SharedModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"].forRoot(),
                // No need to export as these modules don't expose any components/directive etc'
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["JsonpModule"]
            ],
            declarations: [],
            exports: [
                // Modules
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
            ]
        })
    ], SharedModule);
    return SharedModule;
    var SharedModule_1;
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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\a_personal\SNOW_B\SNOW_BC_WEBSPA2\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map