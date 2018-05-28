import { Component, OnInit } from '@angular/core';
import { IProvience } from '../../../shared/model/provience.model';
//import { Input } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Time } from '@angular/common/src/i18n/locale_data_api';

import { DestinationService } from '../destination.service';
import { ConfigurationService } from '../../../shared/service/configuration.service';
import { ICountry } from '../../../shared/model/country.model';
import { ActivatedRoute } from '@angular/router';
import { ICity } from '../../../shared/model/city.model';


@Component({
    selector: 'city',
    templateUrl: './city.component.html',
    styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {

    city : ICity;

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
        this.getCity();
  }

  getCity(){
        //let countryId = this.route.snapshot.paramMap.get('countryid')
        //let provienceId = this.route.snapshot.paramMap.get('provienceid');
        let cityId = this.route.snapshot.paramMap.get('cityid');

        this.destinationService.getCity(cityId).subscribe(city => {
            this.city = city;
        });
  }

}
