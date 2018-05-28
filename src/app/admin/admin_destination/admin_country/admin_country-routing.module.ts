import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Admin_CountryComponent } from './admin_country.component';

const routes: Routes = [
    {
        path: '', component: Admin_CountryComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class Admin_CountryRoutingModule {
}
 