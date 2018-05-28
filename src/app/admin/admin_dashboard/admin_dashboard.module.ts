import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { Admin_DashboardRoutingModule } from './admin_dashboard-routing.module';
import { Admin_DashboardComponent } from './admin_dashboard.component';
import {
    //TimelineComponent,
    //NotificationComponent,
    //ChatComponent
} from './components';

//import { StatModule } from '../../shared';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        Admin_DashboardRoutingModule,
    ],
    declarations: [
        Admin_DashboardComponent,
    ],
    exports: [Admin_DashboardComponent],

    providers: []
})
export class Admin_DashboardModule {}