import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Admin_ProvienceComponent } from './admin_provience.component';

const routes: Routes = [
    {
        path: '', component: Admin_ProvienceComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class Admin_ProvienceRoutingModule {
}
 