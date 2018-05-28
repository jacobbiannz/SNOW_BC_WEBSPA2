(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/admin/admin_destination/admin_destination.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/admin/admin_destination/admin_destination.service.ts ***!
  \**********************************************************************/
/*! exports provided: Admin_DestinationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Admin_DestinationService", function() { return Admin_DestinationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _shared_service_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/service/data.service */ "./src/app/shared/service/data.service.ts");
/* harmony import */ var _shared_service_configuration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/service/configuration.service */ "./src/app/shared/service/configuration.service.ts");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var Admin_DestinationService = (function () {
    function Admin_DestinationService(dataService, configurationService) {
        var _this = this;
        this.dataService = dataService;
        this.configurationService = configurationService;
        this.countryUrl = '';
        this.provienceUrl = '';
        this.cityUrl = '';
        this.monthUrl = '';
        this.configurationService.settingsLoaded$.subscribe(function (x) {
            _this.countryUrl = _this.configurationService.serverSettings.countryUrl + '/countrie';
            _this.provienceUrl = _this.configurationService.serverSettings.provienceUrl + '/proviences';
            _this.cityUrl = _this.configurationService.serverSettings.cityUrl + '/citiences';
        });
    }
    //----------------------------------------------------------------------------------------------------------
    Admin_DestinationService.prototype.getCountries = function () {
        this.countryUrl = "http://localhost:61125/api/countries";
        return this.dataService.get(this.countryUrl).map(function (response) {
            //console.log("----------------------------" + response.json() + "--------------------------");
            return response.json();
        });
    };
    Admin_DestinationService.prototype.updateCountry = function (country) {
        this.countryUrl = "http://localhost:61125/api/countries/" + country.id;
        return this.dataService.putWithId(this.countryUrl, country).map(function (response) {
            return response.json();
        });
    };
    Admin_DestinationService.prototype.createCountry = function (country) {
        this.countryUrl = "http://localhost:61125/api/countries";
        this.country = country;
        return this.dataService.post(this.countryUrl, country).map(function (response) {
            return response.json();
        });
    };
    //----------------------------------------------------------------------------------------------------------
    Admin_DestinationService.prototype.getProviences = function (countryId) {
        this.provienceUrl = "http://localhost:61125/api/countries/" + countryId + "/proviences";
        return this.dataService.get(this.provienceUrl).map(function (response) {
            //console.log(this.countryUrl + '-----------------------provience response-------------------------------' + response.json());
            return response.json();
        });
    };
    ;
    Admin_DestinationService.prototype.getProvience = function (countryId, provienceId) {
        this.provienceUrl = "http://localhost:61125/api/countries/" + countryId + "/proviences/" + provienceId;
        return this.dataService.get(this.provienceUrl).map(function (response) {
            return response.json();
        });
    };
    ;
    Admin_DestinationService.prototype.updateProvience = function (countryId, provience) {
        this.provienceUrl = "http://localhost:61125/api/countries/" + countryId + "/proviences/" + provience.id;
        return this.dataService.putWithId(this.provienceUrl, provience).map(function (response) {
            return response.json();
        });
    };
    Admin_DestinationService.prototype.createProvience = function (countryId, provience) {
        this.provienceUrl = "http://localhost:61125/api/countries/" + countryId + "/proviences";
        this.provience = provience;
        return this.dataService.post(this.provienceUrl, provience).map(function (response) {
            return response.json();
        });
    };
    //----------------------------------------------------------------------------------------------------------
    Admin_DestinationService.prototype.getCities = function (countryId, provienceId) {
        this.cityUrl = "http://localhost:61125/api/countries/" + countryId + "/proviences/" + provienceId + "/cities";
        return this.dataService.get(this.cityUrl).map(function (response) {
            return response.json();
        });
    };
    ;
    // getCity(countryId : string, provienceId : string, cityId : string): Observable<ICity> {
    //     this.cityUrl = "http://localhost:61125/api/countries/" + countryId + "/proviences/" + provienceId + "/cities/" + cityId;
    //     return this.dataService.get(this.cityUrl).map((response: Response) => {
    //         return response.json();
    //     });
    // };
    Admin_DestinationService.prototype.getCity = function (cityId) {
        this.cityUrl = "http://localhost:61125/api/cities/" + cityId;
        return this.dataService.get(this.cityUrl).map(function (response) {
            return response.json();
        });
    };
    ;
    Admin_DestinationService.prototype.updateCity = function (countryId, provienceId, city) {
        this.cityUrl = "http://localhost:61125/api/countries/" + countryId + "/proviences/" + provienceId + "/cities/" + city.id;
        return this.dataService.putWithId(this.cityUrl, city).map(function (response) {
            return response.json();
        });
    };
    Admin_DestinationService.prototype.createCity = function (countryId, provienceId, city) {
        this.cityUrl = "http://localhost:61125/api/countries/" + countryId + "/proviences/" + provienceId + "/cities/" + city.id;
        this.city = city;
        return this.dataService.post(this.cityUrl, city).map(function (response) {
            return response.json();
        });
    };
    //----------------------------------------------------------------------------------------------------------
    Admin_DestinationService.prototype.getMonths = function () {
        //console.log(this.countryUrl + '-----------------------country url-------------------------------');
        this.monthUrl = "http://localhost:61125/api/monthcollection";
        return this.dataService.get(this.monthUrl).map(function (response) {
            return response.json();
        });
    };
    Admin_DestinationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_shared_service_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _shared_service_configuration_service__WEBPACK_IMPORTED_MODULE_2__["ConfigurationService"]])
    ], Admin_DestinationService);
    return Admin_DestinationService;
}());



/***/ }),

/***/ "./src/app/website/destination/destination.service.ts":
/*!************************************************************!*\
  !*** ./src/app/website/destination/destination.service.ts ***!
  \************************************************************/
/*! exports provided: DestinationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DestinationService", function() { return DestinationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _shared_service_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/service/data.service */ "./src/app/shared/service/data.service.ts");
/* harmony import */ var _shared_service_configuration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/service/configuration.service */ "./src/app/shared/service/configuration.service.ts");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DestinationService = (function () {
    function DestinationService(dataService, configurationService) {
        var _this = this;
        this.dataService = dataService;
        this.configurationService = configurationService;
        this.countryUrl = '';
        this.provienceUrl = '';
        this.cityUrl = '';
        this.monthUrl = '';
        this.configurationService.settingsLoaded$.subscribe(function (x) {
            _this.countryUrl = _this.configurationService.serverSettings.countryUrl + '/countrie';
            _this.provienceUrl = _this.configurationService.serverSettings.provienceUrl + '/proviences';
            _this.cityUrl = _this.configurationService.serverSettings.cityUrl + '/citiences';
        });
    }
    DestinationService.prototype.getCountries = function () {
        //console.log(this.countryUrl + '-----------------------country url-------------------------------');
        this.countryUrl = "http://localhost:61125/api/countries";
        return this.dataService.get(this.countryUrl).map(function (response) {
            //console.log(response.json() + '-----------------------countres-------------------------------');
            return response.json();
        });
    };
    DestinationService.prototype.getProviences = function (countryId) {
        this.provienceUrl = "http://localhost:61125/api/countries/" + countryId + "/proviences";
        return this.dataService.get(this.provienceUrl).map(function (response) {
            //console.log(this.countryUrl + '-----------------------provience response-------------------------------' + response.json());
            return response.json();
        });
    };
    ;
    DestinationService.prototype.getProvience = function (countryId, provienceId) {
        this.provienceUrl = "http://localhost:61125/api/countries/" + countryId + "/proviences/" + provienceId;
        return this.dataService.get(this.provienceUrl).map(function (response) {
            return response.json();
        });
    };
    ;
    DestinationService.prototype.getCities = function (countryId, provienceId) {
        this.cityUrl = "http://localhost:61125/api/countries/" + countryId + "/proviences/" + provienceId + "/cities";
        return this.dataService.get(this.cityUrl).map(function (response) {
            return response.json();
        });
    };
    ;
    // getCity(countryId : string, provienceId : string, cityId : string): Observable<ICity> {
    //     this.cityUrl = "http://localhost:61125/api/countries/" + countryId + "/proviences/" + provienceId + "/cities/" + cityId;
    //     return this.dataService.get(this.cityUrl).map((response: Response) => {
    //         return response.json();
    //     });
    // };
    DestinationService.prototype.getCity = function (cityId) {
        this.cityUrl = "http://localhost:61125/api/cities/" + cityId;
        return this.dataService.get(this.cityUrl).map(function (response) {
            return response.json();
        });
    };
    ;
    DestinationService.prototype.getMonths = function () {
        //console.log(this.countryUrl + '-----------------------country url-------------------------------');
        this.monthUrl = "http://localhost:61125/api/monthcollection";
        return this.dataService.get(this.monthUrl).map(function (response) {
            //console.log(response.json() + '-----------------------months-------------------------------');
            return response.json();
        });
    };
    DestinationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_shared_service_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _shared_service_configuration_service__WEBPACK_IMPORTED_MODULE_2__["ConfigurationService"]])
    ], DestinationService);
    return DestinationService;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map