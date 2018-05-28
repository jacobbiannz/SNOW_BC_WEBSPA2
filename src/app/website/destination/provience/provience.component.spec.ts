import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvienceComponent } from './provience.component';

describe('ProvienceComponent', () => {
  let component: ProvienceComponent;
  let fixture: ComponentFixture<ProvienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
