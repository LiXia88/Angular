import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap, map } from 'rxjs/operators';
import { HeroService } from '../hero.service';
import { Hero } from '../hero.model';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero: Hero = null;
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private router: Router
) { }

  ngOnInit(): void {
    this.getHeroObs();
  }

  private getHeroObs() {
    console.log('getHeroObs');
    this.route.paramMap
      .pipe(
        switchMap((params) => {
          const id = +params.get('id');
          console.log('Trying to lookup hero with id=', id);
          return this.heroService.getHero(id);
        }),
        map((hero) => (this.hero = hero))
      )
      .subscribe();
  }
   regenerate() {
    const existingHero = {
      // Copy with updated lifeForce
      id: this.hero.id,
      lifeForce: this.hero.lifeForce + 100,
      name: this.hero.name,
    };
    this.heroService.editHero(this.hero.id, existingHero).subscribe(() => {
      // Back end successfully recorded the change, so update UI.
      this.hero.lifeForce = existingHero.lifeForce;
    });
  }
   delete() {
    this.heroService.deleteHero(this.hero.id).subscribe(() => {
      this.router.navigate(['/heroes']);
    });
  }

  edit() {
    this.router.navigate(['/hero', this.hero.id, 'edit']);
  }
}
