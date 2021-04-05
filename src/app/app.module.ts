import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeroesRoutingModule } from './heroes/heroes-routing.module';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { DataServiceService } from './data-service.service';
import { HeroesModule } from './heroes/heroes.module';

@NgModule({
  declarations: [AppComponent,PageNotFoundComponent ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeroesRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(DataServiceService),
    HeroesModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
