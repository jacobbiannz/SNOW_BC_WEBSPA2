import { Component, OnInit } from '@angular/core';
import { IProvience } from '../../../shared/model/provience.model';
//import { Input } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Time } from '@angular/common/src/i18n/locale_data_api';

import { DestinationService } from '../destination.service';
import { ConfigurationService } from '../../../shared/service/configuration.service';
import { ICountry } from '../../../shared/model/country.model';
import { ICity } from '../../../shared/model/city.model';
import { ActivatedRoute } from '@angular/router';


@Component({
    selector: 'provience',
    templateUrl: './provience.component.html',
    styleUrls: ['./provience.component.scss']
})
export class ProvienceComponent implements OnInit {

    provience : IProvience;
    cities : ICity[];

    constructor(private destinationService: DestinationService,
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

  onRefresh(){
        this.loadData();
      
  }

  loadData() {
        this.getProvience();
        
  }

  getProvience(){
        let countryId = this.route.snapshot.paramMap.get('countryid')
        let provienceId = this.route.snapshot.paramMap.get('provienceid');

        this.destinationService.getProvience(countryId, provienceId).subscribe(provience => {
            this.provience = provience;
            this.getCities();
        });
  }

  getCities(){
    let countryId = this.route.snapshot.paramMap.get('countryid')
    let provienceId = this.route.snapshot.paramMap.get('provienceid');

    this.destinationService.getCities(countryId, provienceId).subscribe(cities => {
        this.cities = cities;
    });
}



}
