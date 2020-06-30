import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UricDSCapsuleComponent } from './uric-ds-capsule.component';

describe('UricDSCapsuleComponent', () => {
  let component: UricDSCapsuleComponent;
  let fixture: ComponentFixture<UricDSCapsuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UricDSCapsuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UricDSCapsuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
