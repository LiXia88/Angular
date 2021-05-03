import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {LoginReactiveComponent} from './login-reactive/login-reactive.component'

const routes: Routes = [
  { path: 'login', component: LoginFormComponent},
  { path: 'rlogin', component: LoginReactiveComponent},
  { path: '**', component: PageNotFoundComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
