
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { Admin_HeaderComponent } from './admin_header/admin_header.component';
import { Admin_SidebarComponent } from './admin_sidebar/admin_sidebar.component';


@NgModule({
    imports: [
        CommonModule,
        AdminRoutingModule,
        //TranslateModule,
        NgbDropdownModule.forRoot()
    ],
    declarations: [AdminComponent, Admin_HeaderComponent, Admin_SidebarComponent]
})
export class AdminModule {}
