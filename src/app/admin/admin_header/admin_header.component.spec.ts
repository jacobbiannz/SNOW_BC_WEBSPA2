import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Admin_HeaderComponent } from './admin_header.component';

describe('HeaderComponent', () => {
  let component: Admin_HeaderComponent;
  let fixture: ComponentFixture<Admin_HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Admin_HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Admin_HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
