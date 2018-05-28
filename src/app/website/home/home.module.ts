import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeService } from './home.service';

import { FacebookModule } from 'ngx-facebook';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        HomeRoutingModule,
        FacebookModule,
    ],
    declarations: [
        HomeComponent,
    ],
    exports: [HomeComponent],

    providers: [HomeService]
})
export class HomeModule {}
