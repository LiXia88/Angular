import { Component, OnInit, ViewChild, ElementRef, } from '@angular/core';
import { Hero } from '../hero.model';
import { HeroService } from '../hero.service';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  heroes: Hero[];
  @ViewChild('newHeroName', { static: true }) newHeroNameInput: ElementRef;
  heroDetails = new FormGroup({
    name: new FormControl('', Validators.required),
    realName: new FormControl(''),
    biometricData: new FormGroup({
      age: new FormControl('', [Validators.required, Validators.min(14)]),
      eyes: new FormControl(''),
      hair: new FormControl(''),
    }),
    powers: new FormArray([]),
  });

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute) {}

  add(name: string) {
    this.heroService
      .createHero(name)
      .subscribe((hero) => this.heroes.push(hero));
  }

  ngOnInit(): void {
    this.getHeroes();
    this.heroes = this.route.snapshot.data.heroes;
  }
  addDetailedHero() {
    const controls = this.heroDetails.controls;
    console.log(
      'TODO: addDetailedHero',
      controls.name.value,
      controls.realName.value,
      // I wonder if there's a nicer way to get nested control?
      // https://stackoverflow.com/questions/49269403/how-to-get-nested-formgroups-controls-in-angular
      this.heroDetails.get('biometricData.age').value,
      this.heroDetails.get('biometricData.eyes').value
    );
    this.heroService.createHero(controls.name.value).subscribe((hero) => {
      this.heroes.push(hero);
      //this.powers.clear();
      this.heroDetails.reset();
    });
  }

  get powers(): FormArray {
    return this.heroDetails.controls.powers as FormArray;
  }

  addPower() {
    console.log('Adding a power…');
    this.powers.push(new FormControl(''));
  }

  decrementLifeForce(hero: Hero) {
    const existingHero = {
      id: hero.id,
      lifeForce: hero.lifeForce - 25,
      name: hero.name,
    };

    this.heroService.editHero(hero.id, existingHero).subscribe(() => {
      let h = this.heroes.find((i) => i.id == hero.id);
      h.lifeForce = existingHero.lifeForce;
    });
  }

  rename(hero: Hero) {
    const existingHero = {
      id: hero.id,
      lifeForce: hero.lifeForce,
      name: 'GoKu',
    };

    this.heroService.editHero(hero.id, existingHero).subscribe(() => {
      this.heroes.find((hero) => hero.id == existingHero.id).name =
        existingHero.name;
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
    this.heroService.getHeroes().subscribe((heroes) => {
      this.heroes = heroes;
    });
  }

  addNamed(name: string) {
    this.add(name);
    this.newHeroNameInput.nativeElement.value = '';
  }

}
