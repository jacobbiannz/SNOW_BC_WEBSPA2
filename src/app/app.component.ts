import { Title } from '@angular/platform-browser';
import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Subscription }   from 'rxjs/Subscription';

import { DataService } from './shared/service/data.service';
//import { SecurityService } from './website/shared/service/security.service';
import { ConfigurationService } from './shared/service/configuration.service';

/*
 * App Component
 * Top Level Component
 */

@Component({
    selector: 'app-root',
    styleUrls: ['./app.component.scss'],
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    Authenticated: boolean = false;
    subscription: Subscription;

    //constructor(private titleService: Title, private securityService: SecurityService, private configurationService: ConfigurationService) {
    constructor(private titleService: Title, private configurationService: ConfigurationService) {
        //this.Authenticated = this.securityService.IsAuthorized;
    }

    ngOnInit() {
        //console.log('app on init');
        //this.subscription = this.securityService.authenticationChallenge$.subscribe(res => this.Authenticated = res);

        //Get configuration from server environment variables:
        //console.log('configuration');
        this.configurationService.load();
    }

    public setTitle(newTitle: string) {
        this.titleService.setTitle('SnowBC');
    }
}
