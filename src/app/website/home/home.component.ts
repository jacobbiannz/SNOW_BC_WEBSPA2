import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { HomeService } from './home.service';
import { ConfigurationService } from '../../shared/service/configuration.service';
import { ICountry } from '../../shared/model/country.model';

import { RouterLink } from '@angular/router';
import { FacebookService, InitParams } from 'ngx-facebook';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

  
export class HomeComponent implements OnInit {
    countries : ICountry[]; 
    selectedCountry : ICountry;

    constructor(private homeService: HomeService,
                private configurationService: ConfigurationService,
                private fb: FacebookService
                //private securityService: SecurityService
                ) {
                //this.authenticated = securityService.IsAuthorized;
                    let initParams: InitParams = {
                         appId: '457728868018974',
                         xfbml: true,
                         version: 'v2.8'
                    };
                
                    fb.init(initParams);
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

    loadData() {
        this.getCountries();
            
    }

    getCountries() {
        this.homeService.getCountries().subscribe(countries => {
            this.countries = countries;
            this.selectedCountry = this.countries[0];
        });
    }    
}
 


 // public sliders: Array<any> = [];

    // constructor() {
    //     this.sliders.push(
    //         {   
    //             imagePath: 'assets/images/slider1.jpg',
    //             label: '15/Dec.2017',
    //             text:
    //             'Trip to...............place..................'
    //         },
    //         {
    //             imagePath: 'assets/images/slider2.jpg',
    //             label: '16/Dec.2017',
    //             text: 
    //             'Trip to...............place..................'
    //         },
    //         {
    //             imagePath: 'assets/images/slider3.jpg',
    //             label: '17/Dec.2017',
    //             text:
    //             'Trip to...............place..................'
    //         },
    //         {
    //             imagePath: 'assets/images/slider4.jpg',
    //             label: '18/Dec.2017',
    //             text:
    //             'Trip to...............place..................'
    //         },
    //         {
    //             imagePath: 'assets/images/slider5.jpg',
    //             label: '18/Dec.2017',
    //             text:
    //             'Trip to...............place..................'
    //         }
    //     );
    // }