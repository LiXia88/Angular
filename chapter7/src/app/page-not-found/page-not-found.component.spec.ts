import { ComponentFixture, TestBed } from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';

import { PageNotFoundComponent } from './page-not-found.component';
import { AppRoutingModule } from '../app-routing.module';

describe('PageNotFoundComponent', () => {
  let component: PageNotFoundComponent;
  let fixture: ComponentFixture<PageNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageNotFoundComponent ],
      imports:[AppRoutingModule],
      providers: [{provide:APP_BASE_HREF, useValue:'/'}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a heading that says "Oops"', ()=>{
    expect(fixture.nativeElement.querySelector('h3').textContent).toContain('Oops');
  });

  it('should have an errorCode field with 404', ()=>{
    expect(component.errorCode).toBe(404);
  })
});
