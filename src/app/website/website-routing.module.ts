import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebsiteComponent } from './website.component';

const routes: Routes = [
    {
        path: '',
        component: WebsiteComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', loadChildren: './home/home.module#HomeModule' },
            
            { path: 'destination', loadChildren: './destination/destination.module#DestinationModule' },
            { path: 'country/:countryid/provience/:provienceid', loadChildren: './destination/provience/provience.module#ProvienceModule' },
            //{ path: 'country/:countryid/provience-c/:provienceid/city/:cityid', loadChildren: './destination/city/city.module#CityModule' },
            { path: 'cities/:cityid', loadChildren: './destination/city/city.module#CityModule' },

            // { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            // { path: 'forms', loadChildren: './form/form.module#FormModule' },
            // { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            // { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
            // { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            // { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class WebsiteRoutingModule {}
