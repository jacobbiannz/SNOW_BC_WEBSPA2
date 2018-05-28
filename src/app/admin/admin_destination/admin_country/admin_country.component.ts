import { Component, OnInit } from '@angular/core';
//import { Input } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Time } from '@angular/common/src/i18n/locale_data_api';

import { Admin_DestinationService } from '../admin_destination.service';
import { ConfigurationService } from '../../../shared/service/configuration.service';
import { ICountry } from '../../../shared/model/country.model';
import { ActivatedRoute } from '@angular/router';
import { count } from 'rxjs/operators';
import { Jsonp } from '@angular/http';


@Component({
    selector: 'admin-country',
    templateUrl: './admin_country.component.html',
    styleUrls: ['./admin_country.component.scss']
})
export class Admin_CountryComponent implements OnInit {

    countries : ICountry[];
    selectedCountry : ICountry;
    newCountry : boolean = false;

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

    onRefresh(country : ICountry){
        this.loadData();
        this.selectedCountry = country;
        
    }

    loadData() {
        this.getCountries();  
    }

    getCountries() {
        this.admin_destinationService.getCountries().subscribe(countries => {
            this.countries = countries;
            if (this.selectedCountry == null)
            {
                this.selectedCountry = this.countries[0];
            }
        });
    
    }   

    onSelectCountry(country : ICountry){
        this.selectedCountry = country;
       
    }
 
    createNewCountry(){
        this.newCountry = true;
        this.selectedCountry = null;
    }

}
