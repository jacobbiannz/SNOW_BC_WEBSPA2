import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Admin_DashboardComponent } from './admin_dashboard.component';

const routes: Routes = [
    {
        path: '', component: Admin_DashboardComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class Admin_DashboardRoutingModule {
}
