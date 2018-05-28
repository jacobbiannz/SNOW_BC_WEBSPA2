import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

import { Admin_ProvienceRoutingModule } from './admin_provience-routing.module';
import { Admin_ProvienceComponent } from './admin_provience.component';
import { Admin_DestinationService } from '../admin_destination.service';

import { ReactiveFormsModule } from '@angular/forms'; 
import { Admin_ProvienceDetailComponent } from './admin_proviencedetail/admin_proviencedetail.component';

@NgModule({
    imports: [
        CommonModule,
        //NgbCarouselModule.forRoot(),
        Admin_ProvienceRoutingModule,
        ReactiveFormsModule,
    ],
    declarations: [
        Admin_ProvienceComponent,
        Admin_ProvienceDetailComponent
    ],
    exports: [Admin_ProvienceComponent],

    providers: [Admin_DestinationService]
})
export class Admin_ProvienceModule {}
