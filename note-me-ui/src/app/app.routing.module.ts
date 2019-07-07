import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router'
import { LoginComponent } from './states/login/login.component';
import { PageNotFoundComponent } from './states/page-not-found/page-not-found.component';
import { RegisterComponent } from './states/register/register.component';

const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: '',
        children: [
            {
                path: '',
                loadChildren: './states/main-base/main-base.module#MainBaseModule'
            }
        ]
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
]

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(
            routes,
            { enableTracing: false } // <-- debugging purposes only
        )
    ],

    exports: [RouterModule]
})
export class AppRoutingModule { }