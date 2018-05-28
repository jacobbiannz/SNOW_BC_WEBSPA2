import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Admin_DestinationComponent } from './admin_destination.component';

const routes: Routes = [
    {
        path: '', component: Admin_DestinationComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class Admin_DestinationRoutingModule {
}

