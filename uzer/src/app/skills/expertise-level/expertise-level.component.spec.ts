import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertiseLevelComponent } from './expertise-level.component';

describe('ExpertiseLevelComponent', () => {
  let component: ExpertiseLevelComponent;
  let fixture: ComponentFixture<ExpertiseLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertiseLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertiseLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
