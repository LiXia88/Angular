import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { HeroEditComponent } from './hero-edit.component';
import { RouterTestingModule } from "@angular/router/testing";

describe('HeroEditComponent', () => {
  let component: HeroEditComponent;
  let fixture: ComponentFixture<HeroEditComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroEditComponent ],
      imports: [ HttpClientTestingModule, RouterTestingModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
