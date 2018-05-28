import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { WebsiteRoutingModule } from './website-routing.module';
import { WebsiteComponent } from './website.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    imports: [
        CommonModule,
        WebsiteRoutingModule,
        //TranslateModule,
        NgbDropdownModule.forRoot()
    ],
    declarations: [WebsiteComponent, HeaderComponent, FooterComponent]
})
export class WebsiteModule {}
