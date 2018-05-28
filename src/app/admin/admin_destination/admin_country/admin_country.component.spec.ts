import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Admin_CountryComponent } from './admin_country.component';

describe('ProvienceComponent', () => {
  let component: Admin_CountryComponent;
  let fixture: ComponentFixture<Admin_CountryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Admin_CountryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Admin_CountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
