import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

import { Admin_CountryRoutingModule } from './admin_country-routing.module';
import { Admin_CountryComponent } from './admin_country.component';
import { Admin_DestinationService } from '../admin_destination.service';

import { ReactiveFormsModule } from '@angular/forms'; 
import { Admin_CountryDetailComponent } from './admin_countrydetail/admin_countrydetail.component';

@NgModule({
    imports: [
        CommonModule,
        //NgbCarouselModule.forRoot(),
        Admin_CountryRoutingModule,
        ReactiveFormsModule,
    ],
    declarations: [
        Admin_CountryComponent,
        Admin_CountryDetailComponent
    ],
    exports: [Admin_CountryComponent],

    providers: [Admin_DestinationService]
})
export class Admin_CountryModule {}
