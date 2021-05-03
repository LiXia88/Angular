import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroListComponent } from './hero-list.component';
import { HttpClientTestingModule,} from '@angular/common/http/testing';
import {HttpTestingController} from '@angular/common/http/testing';
import { HeroService } from '../hero.service';

describe('HeroListComponent', () => {
  let component: HeroListComponent;
  let fixture: ComponentFixture<HeroListComponent>;
  let httpController: HttpTestingController;


  beforeEach(async () => {
      TestBed.configureTestingModule({
      declarations: [ HeroListComponent ],
      imports:[HttpClientTestingModule, ],
    }).compileComponents();
    httpController = TestBed.inject(HttpTestingController);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    const request = httpController.expectOne('api/heroes/')
    expect(request.request.method).toBe('GET');
    request.flush([
      {id:1, name: "Saitama", lifeForce:100,},
      {id:2, name: "Goku", lifeForce:100,}
    ]);
    fixture.detectChanges();
  });

  afterEach(() => {
    httpController.verify();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a heading labeled "My heroes"', ()=>{
    expect(fixture.nativeElement.querySelector('h3').textContent).toBe(
      "My heroes")
  })

  it('should have two heroes in a list', ()=>{
    httpController.verify();
    fixture.detectChanges();
    let items = fixture.nativeElement.querySelector('ul#hero-list').children;
    expect(items.length).toBe(2);
    expect(items[0].textContent).toContain("Saitama");
    expect(items[1].textContent).toContain("LF=100");
  })

  it('should allow users to add new heroes',()=>{
    let newHeroName = fixture.nativeElement.querySelector(
      '#newHeroForm input[type=text]'
    );
    let addHeroButton = fixture.nativeElement.querySelector(
      '#newHeroForm button'
    );

    expect(newHeroName).toBeTruthy();
    expect(addHeroButton).toBeTruthy();
    newHeroName.value = 'Luffy';
    addHeroButton.click();
    const request = httpController.expectOne('api/heroes/')
    expect(request.request.method).toBe('POST');
    request.flush({id:3, name: 'Luffy', lifeForce:100});
    fixture.detectChanges();
  });
});
