import { Injectable } from '@angular/core';
import { Response } from '@angular/http';

import { DataService } from '../../shared/service/data.service';
import { ConfigurationService } from '../../shared/service/configuration.service';
import { ICity } from '../../shared/model/city.model';
import { IProvience } from '../../shared/model/provience.model';
import { ICountry } from '../../shared/model/country.model';
import { IMonth } from '../../shared/model/month.model';

import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/map';

@Injectable()
export class DestinationService {
    private countryUrl: string = '';
    private provienceUrl: string = '';
    private cityUrl: string = '';
    private monthUrl: string ='';

    constructor(private dataService: DataService, private configurationService: ConfigurationService) {
        this.configurationService.settingsLoaded$.subscribe(x => {
           
            this.countryUrl = this.configurationService.serverSettings.countryUrl + '/countrie';
            this.provienceUrl = this.configurationService.serverSettings.provienceUrl + '/proviences';
            this.cityUrl = this.configurationService.serverSettings.cityUrl + '/citiences';
        });
    }

    getCountries(): Observable<ICountry[]> {
        //console.log(this.countryUrl + '-----------------------country url-------------------------------');
        this.countryUrl = "http://localhost:61125/api/countries";
        return this.dataService.get(this.countryUrl).map((response: Response) => {
            //console.log(response.json() + '-----------------------countres-------------------------------');
            return response.json();
        });

    }

    getProviences(countryId : string): Observable<IProvience[]> {

        this.provienceUrl = "http://localhost:61125/api/countries/" + countryId + "/proviences";
        return this.dataService.get(this.provienceUrl).map((response: Response) => {
            //console.log(this.countryUrl + '-----------------------provience response-------------------------------' + response.json());
            return response.json();
        });
    };

    getProvience(countryId : string, provienceId : string): Observable<IProvience> {

        this.provienceUrl = "http://localhost:61125/api/countries/" + countryId + "/proviences/" + provienceId;
        
        return this.dataService.get(this.provienceUrl).map((response: Response) => {
            return response.json();
        });
    };

    
    getCities(countryId : string, provienceId : string): Observable<ICity[]> {
        this.cityUrl = "http://localhost:61125/api/countries/" + countryId + "/proviences/" + provienceId + "/cities";
        return this.dataService.get(this.cityUrl).map((response: Response) => {
           
            return response.json();
        });
    };

    // getCity(countryId : string, provienceId : string, cityId : string): Observable<ICity> {
    //     this.cityUrl = "http://localhost:61125/api/countries/" + countryId + "/proviences/" + provienceId + "/cities/" + cityId;
    //     return this.dataService.get(this.cityUrl).map((response: Response) => {
           
    //         return response.json();
    //     });
    // };

    getCity(cityId : string): Observable<ICity> {
            this.cityUrl = "http://localhost:61125/api/cities/" + cityId;
            return this.dataService.get(this.cityUrl).map((response: Response) => {
               
                return response.json();
            });
        };


    getMonths(): Observable<IMonth[]> {
        //console.log(this.countryUrl + '-----------------------country url-------------------------------');
        this.monthUrl = "http://localhost:61125/api/monthcollection";
        return this.dataService.get(this.monthUrl).map((response: Response) => {
            //console.log(response.json() + '-----------------------months-------------------------------');
            return response.json();
        });

    }
    
}
