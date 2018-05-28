import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

import { DestinationRoutingModule } from './destination-routing.module';
import { DestinationComponent } from './destination.component';
import { DestinationService } from './destination.service';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        DestinationRoutingModule,
    ],
    declarations: [
        DestinationComponent,
    ],
    exports: [DestinationComponent],

    providers: [DestinationService]
})
export class DestinationModule {}
