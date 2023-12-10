import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
import { WildcardComponent } from './wildcard/wildcard.component';

export const routes: Routes = [
    {path: "home", loadChildren: () => import("./home/home.module").then(m => m.HomeModule) },
    {path: "login", component: LoginComponent },
    {path: "account", component: AccountComponent},
    {path: '', redirectTo: 'home', pathMatch:'full'},
    { path: '**', component: WildcardComponent },
];
