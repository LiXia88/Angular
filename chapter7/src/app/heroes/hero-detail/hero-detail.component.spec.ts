import { ComponentFixture, TestBed } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { HeroDetailComponent } from './hero-detail.component';
import { RouterTestingModule } from "@angular/router/testing";
import { HeroesRoutingModule } from '../heroes-routing.module';

describe('HeroDetailComponent', () => {
  let component: HeroDetailComponent;
  let fixture: ComponentFixture<HeroDetailComponent>;
  let httpController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroDetailComponent ],
      imports: [  HeroesRoutingModule, HttpClientTestingModule, RouterTestingModule, ],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    })
    .compileComponents();
    httpController = TestBed.inject(HttpTestingController);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    const request = httpController.expectOne('api/heroes/0');
    expect(request.request.method).toBe('GET');
    request.flush({id:0, name: "Saitama", lifeForce:100,})
    fixture.detectChanges();
  });

  afterEach(() => {
    httpController.verify();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('can regenerate', ()=>{
    const regenButton = fixture.nativeElement.querySelector('button#regenerate');
    regenButton.click();
    const request = httpController.expectOne('api/heroes/0');
    expect(request.request.method).toBe('PUT');
    request.flush({id:0, name: "Saitama", lifeForce:200,})
    fixture.detectChanges();
    expect(
      fixture.nativeElement.querySelector('p#HP').textContent)
      .toContain('200');
  })
});
