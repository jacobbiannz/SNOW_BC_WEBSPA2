import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

import { ProvienceRoutingModule } from './provience-routing.module';
import { ProvienceComponent } from './provience.component';
import { DestinationService } from '../destination.service';

@NgModule({
    imports: [
        CommonModule,
        //NgbCarouselModule.forRoot(),
        ProvienceRoutingModule,
    ],
    declarations: [
        ProvienceComponent,
    ],
    exports: [ProvienceComponent],

    providers: [DestinationService]
})
export class ProvienceModule {}
