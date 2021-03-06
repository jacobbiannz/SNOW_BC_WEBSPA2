import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
//import { AuthGuard } from './shared';

const routes: Routes = [
    { path: 'admin', loadChildren: './admin/admin.module#AdminModule'}, //jacob-
    { path: '', loadChildren: './website/website.module#WebsiteModule'}, //jacob-
    //{ path: '', loadChildren: './admin/admin.module#AdminModule'}, //jacob-
    
    //{ path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule'},
    //{ path: 'catalogattributes',  loadChildren: './catalog/catalogAttributes/catalogAttributes.module#CatalogAttributesModule'},
    /*
    { path: 'login', loadChildren: './login/login.module#LoginModule' },
    { path: 'signup', loadChildren: './signup/signup.module#SignupModule' },
    { path: 'error', loadChildren: './server-error/server-error.module#ServerErrorModule' },
    { path: 'access-denied', loadChildren: './access-denied/access-denied.module#AccessDeniedModule' },
    { path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule' },
    { path: '**', redirectTo: 'not-found' }
    */
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { enableTracing: true }) ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
