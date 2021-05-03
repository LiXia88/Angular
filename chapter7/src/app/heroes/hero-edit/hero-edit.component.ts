import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap, map } from 'rxjs/operators';
import { HeroService } from '../hero.service';
import { Hero } from '../hero.model';

@Component({
  selector: 'app-hero-edit',
  templateUrl: './hero-edit.component.html',
  styleUrls: ['./hero-edit.component.css']
})
export class HeroEditComponent implements OnInit {
  hero: Hero = null;
  @ViewChild('editName', { static: true }) editNameInput: ElementRef;
  @ViewChild('editLifeForce', { static: true }) editLifeForceInput: ElementRef;


  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
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

  save(){
    this.hero.name=this.editNameInput.nativeElement.value;
    this.hero.lifeForce = this.editLifeForceInput.nativeElement.value;
    this.heroService.editHero(this.hero.id, this.hero).subscribe();
    this.router.navigate(['/hero', this.hero.id]);
  }
}
