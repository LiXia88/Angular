import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {HeroesRoutingModule} from './heroes/heroes-routing.module'
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { DataServiceService } from './data-service.service';
import { HeroesModule } from './heroes/heroes.module';
import { LoginFormComponent } from './login-form/login-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginReactiveComponent } from './login-reactive/login-reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LoginFormComponent,
    LoginReactiveComponent,
  ],
  imports: [
    BrowserModule,
    HeroesRoutingModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(DataServiceService),
    HeroesModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
