import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProvienceComponent } from './provience.component';

const routes: Routes = [
    {
        path: '', component: ProvienceComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProvienceRoutingModule {
}
 