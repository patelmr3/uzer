import { TestBed, inject } from '@angular/core/testing';

import { SkillsService } from './app-events.service';

describe('AppEventsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SkillsService]
    });
  });

  it('should be created', inject([SkillsService], (service: SkillsService) => {
    expect(service).toBeTruthy();
  }));
});
