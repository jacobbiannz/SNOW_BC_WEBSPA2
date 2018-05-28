import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

import { Admin_CityRoutingModule } from './admin_city-routing.module';
import { Admin_CityComponent } from './admin_city.component';
import { Admin_DestinationService } from '../admin_destination.service';

import { ReactiveFormsModule } from '@angular/forms'; 
import { Admin_CityDetailComponent } from './admin_citydetail/admin_citydetail.component';

@NgModule({
    imports: [
        CommonModule,
        //NgbCarouselModule.forRoot(),
        Admin_CityRoutingModule,
        ReactiveFormsModule,
    ],
    declarations: [
        Admin_CityComponent,
        Admin_CityDetailComponent
    ],
    exports: [Admin_CityComponent],

    providers: [Admin_DestinationService]
})
export class Admin_CityModule {}
