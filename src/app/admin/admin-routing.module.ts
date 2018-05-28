import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
    {
        path: '',
        component: AdminComponent,
        children: [
            
            { path: '',  redirectTo : 'admindashboard' , pathMatch: 'full' },
            { path: 'admindashboard',  loadChildren: './admin_dashboard/admin_dashboard.module#Admin_DashboardModule' },
            { path: 'admindestination',  loadChildren: './admin_destination/admin_destination.module#Admin_DestinationModule' },
            { path: 'admincountries',  loadChildren: './admin_destination/admin_country/admin_country.module#Admin_CountryModule' },
            { path: 'adminproviences',  loadChildren: './admin_destination/admin_provience/admin_provience.module#Admin_ProvienceModule' },
            { path: 'admincities',  loadChildren: './admin_destination/admin_city/admin_city.module#Admin_CityModule' },
            

            //{ path: '', redirectTo: 'home', pathMatch: 'full' },
            //{ path: 'home', loadChildren: './home/home.module#HomeModule' },
            //{ path: 'destination', loadChildren: './destination/destination.module#DestinationModule' },
            //{ path: 'country/:countryid/provience/:provienceid', loadChildren: './destination/provience/provience.module#ProvienceModule' },
            //{ path: 'country/:countryid/provience-c/:provienceid/city/:cityid', loadChildren: './destination/city/city.module#CityModule' },
            
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
export class AdminRoutingModule {}
