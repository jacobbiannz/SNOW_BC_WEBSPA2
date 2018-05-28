import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

import { Admin_DestinationRoutingModule } from './admin_destination-routing.module';
import { Admin_DestinationComponent } from './admin_destination.component';
import { Admin_DestinationService } from './admin_destination.service';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        Admin_DestinationRoutingModule,
    ],
    declarations: [
        Admin_DestinationComponent,
    ],
    exports: [Admin_DestinationComponent],

    providers: [Admin_DestinationService]
})
export class Admin_DestinationModule {}
