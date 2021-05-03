import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroEditComponent } from './hero-edit/hero-edit.component'
import { HttpClientModule, HttpClient  } from '@angular/common/http';

@NgModule({
  declarations: [HeroListComponent, HeroDetailComponent, HeroEditComponent],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    HttpClientModule,
  ],
  providers: [HttpClientModule, HttpClient ],
})
export class HeroesModule { }
