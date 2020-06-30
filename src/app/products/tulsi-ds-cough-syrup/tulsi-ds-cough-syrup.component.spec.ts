import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TulsiDSCoughSyrupComponent } from './tulsi-ds-cough-syrup.component';

describe('TulsiDSCoughSyrupComponent', () => {
  let component: TulsiDSCoughSyrupComponent;
  let fixture: ComponentFixture<TulsiDSCoughSyrupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TulsiDSCoughSyrupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TulsiDSCoughSyrupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
