import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Admin_DestinationComponent } from './admin_destination.component';

describe('DestinationComponent', () => {
  let component: Admin_DestinationComponent;
  let fixture: ComponentFixture<Admin_DestinationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Admin_DestinationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Admin_DestinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
