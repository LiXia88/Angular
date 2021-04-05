import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero.model';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css'],
})
export class HeroListComponent implements OnInit {
  heroes: Hero[];
  constructor(private heroService: HeroService) {}
  add(name: string) {
    this.heroService
      .createHero(name)
      .subscribe((hero) => this.heroes.push(hero));

  }
  ngOnInit(): void {
    this.getHeroes();
  }
  decrementLifeForce(hero: Hero) {
    const existingHero = {
      id: hero.id,
      lifeForce: hero.lifeForce - 25,
      name: hero.name,
    };
    //console.log(existingHero);
    this.heroService.editHero(hero.id, existingHero).subscribe(() => {
      //console.log('edit Succeeded', hero.id, existingHero.lifeForce);
      let h = this.heroes.find((i) => i.id == hero.id);
      //console.log('updating', h);
      h.lifeForce = existingHero.lifeForce;
    });
  }
  rename(hero: Hero) {
    const existingHero = {
      id: hero.id,
      lifeForce: hero.lifeForce,
      name: 'Saitama',
    };
    this.heroService.editHero(hero.id, existingHero).subscribe(() => {
      this.heroes.find((hero) => hero.id == existingHero.id).name = existingHero.name;
    });
  }
  remove(hero: Hero) {
    this.heroService.deleteHero(hero.id).subscribe(() => {
      this.heroes = this.heroes.filter((selected) => selected !== hero);
    });
  }
  removeLastHero() {
    const lastHero = this.heroes[this.heroes.length - 1];
    this.remove(lastHero);
  }
  private getHeroes() {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }
}
