import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Admin_DashboardComponent } from './admin_dashboard.component';

describe('DestinationComponent', () => {
  let component: Admin_DashboardComponent;
  let fixture: ComponentFixture<Admin_DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Admin_DashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Admin_DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
