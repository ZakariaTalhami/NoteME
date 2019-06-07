import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router'
import { LoginComponent } from './states/login/login.component';
import { StatesModule } from './states/states.module';
import { PageNotFoundComponent } from './states/page-not-found/page-not-found.component';

const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
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