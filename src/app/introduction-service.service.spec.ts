import { TestBed } from '@angular/core/testing';

import { IntroductionServiceService } from './introduction-service.service';

describe('IntroductionServiceService', () => {
  let service: IntroductionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IntroductionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
