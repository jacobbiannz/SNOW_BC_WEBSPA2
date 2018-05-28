import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

import { CityRoutingModule } from './city-routing.module';
import { CityComponent } from './city.component';
import { DestinationService } from '../destination.service';

@NgModule({
    imports: [
        CommonModule,
        //NgbCarouselModule.forRoot(),
        CityRoutingModule,
    ],
    declarations: [
        CityComponent,
    ],
    exports: [CityComponent],

    providers: [DestinationService]
})
export class CityModule {}
