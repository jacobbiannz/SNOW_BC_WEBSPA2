import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Admin_ProvienceComponent } from './admin_provience.component';

describe('ProvienceComponent', () => {
  let component: Admin_ProvienceComponent;
  let fixture: ComponentFixture<Admin_ProvienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Admin_ProvienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Admin_ProvienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
