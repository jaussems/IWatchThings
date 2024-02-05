import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
import { WildcardComponent } from './wildcard/wildcard.component';
import { GenreComponent } from './genre/genre.component';

export const routes: Routes = [
    {path: "home", loadChildren: () => import("./home/home.module").then(m => m.HomeModule) },
    {path: "login", component: LoginComponent },
    {path: "account", component: AccountComponent},
    {path: "genre/:id", component: GenreComponent},
    {path: '', redirectTo: 'home', pathMatch:'full'},
    { path: '**', component: WildcardComponent },
];
