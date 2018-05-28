import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
//import { Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

import { Observable } from 'rxjs/Observable';
import { Time } from '@angular/common/src/i18n/locale_data_api';

import { Admin_DestinationService } from '../admin_destination.service';
import { ConfigurationService } from '../../../shared/service/configuration.service';

import { ActivatedRoute } from '@angular/router';
import { count } from 'rxjs/operators';
import { Jsonp } from '@angular/http';

import { ICountry } from '../../../shared/model/country.model';
import { IProvience } from '../../../shared/model/provience.model';
import { ICity } from '../../../shared/model/city.model';
import { connectableObservableDescriptor } from 'rxjs/observable/ConnectableObservable';



@Component({
    selector: 'admin-city',
    templateUrl: './admin_city.component.html',
    styleUrls: ['./admin_city.component.scss']
})
export class Admin_CityComponent implements OnInit {
    @Input() inputCity : ICity;

    countries : ICountry[];
    proviences : IProvience[];
    cities : ICity[];

    newCity : boolean = false;
    
    selectedCountry : ICountry;
    selectedProvience : IProvience;
    selectedCity : ICity;

    selectedCountryId : string;
    selectedProvienceId : string;
    selectedCityId : string;

    constructor(private admin_destinationService: Admin_DestinationService,
                private configurationService: ConfigurationService,
                private route : ActivatedRoute
                //private securityService: SecurityService
                ) {
    //this.authenticated = securityService.IsAuthorized;
    }

    ngOnInit() {
        
        // Configuration Settings:
        if (this.configurationService.isReady)
            {
                this.loadData();
            }   
        //else
            //this.configurationService.settingsLoaded$.subscribe(x => {
            //    this.loadData();
            //});
        

        /*
        // Subscribe to login and logout observable
        this.authSubscription = this.securityService.authenticationChallenge$.subscribe(res => {
            this.authenticated = res;
        });
        */
  }

    onRefresh(city : ICity){
        this.loadData();
        this.selectedCity = city;
        
        
    }

    loadData() {
        this.getCountries();  
    }

    getCountries() {
        this.admin_destinationService.getCountries().subscribe(countries => {
            this.countries = countries;
            if (this.selectedCountryId == null)
             {
                this.selectedCountryId = this.countries[0].id;
                this.getProviences(this.selectedCountryId);
             }
        });
    }   

    getProviences(countryId){
        this.admin_destinationService.getProviences(countryId).subscribe(proviences =>{
            this.proviences = proviences;
            if (this.selectedProvienceId == null && this.proviences[0] != null)
            {
                this.selectedProvienceId = this.proviences[0].id;
                this.getCities(this.selectedCountryId, this.selectedProvienceId);
            }
        });
    }

    getCities(countryId, provienceId){
        this.admin_destinationService.getCities(countryId, provienceId).subscribe(cities => {
            this.cities = cities;
        });
    }

    getCity(cityId){
        //let countryId = this.route.snapshot.paramMap.get('countryid')
        //let provienceId = this.route.snapshot.paramMap.get('provienceid');
        this.admin_destinationService.getCity(cityId).subscribe(city => {
            this.selectedCity = city;
           
        });
  }


    onChangeCountry(countryId : any){
        this.selectedCountryId = countryId;
        this.selectedProvienceId = null;
        this.cities = null;
        this.getProviences(countryId);
    }

    onChangeProvience(provienceId :any){
        this.selectedProvienceId = provienceId;
        this.getCities(this.selectedCountryId, this.selectedProvienceId);
    }

    onSelectCity(cityId : any){
        this.getCity(cityId);
    }


    createNewCity(){
        this.newCity = true;
        this.selectedCity = null;
    }

}
