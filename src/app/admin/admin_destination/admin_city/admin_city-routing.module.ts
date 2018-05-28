import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Admin_CityComponent } from './admin_city.component';

const routes: Routes = [
    {
        path: '', component: Admin_CityComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class Admin_CityRoutingModule {
}
 