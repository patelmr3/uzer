import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpertiseLevelIndicatorComponent } from './epertise-level-indicator.component';

describe('EpertiseLevelIndicatorComponent', () => {
  let component: EpertiseLevelIndicatorComponent;
  let fixture: ComponentFixture<EpertiseLevelIndicatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpertiseLevelIndicatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpertiseLevelIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
