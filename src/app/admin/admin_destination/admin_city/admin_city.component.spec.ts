import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Admin_CityComponent } from './admin_city.component';

describe('ProvienceComponent', () => {
  let component: Admin_CityComponent;
  let fixture: ComponentFixture<Admin_CityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Admin_CityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Admin_CityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
