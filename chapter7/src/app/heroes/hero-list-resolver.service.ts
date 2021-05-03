import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Hero } from './hero.model';
import { HeroService } from './hero.service';

@Injectable({
  providedIn: 'root',
})
export class HeroListResolverService implements Resolve<Hero[]> {
  constructor(private heroService: HeroService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Hero[]> {
    console.log('Resolver: getting entire list of heroes');
    return this.heroService.getHeroes();
  }
}
