import { TestBed, inject } from '@angular/core/testing';

import { DiariesService } from './diaries.service';

describe('DiariesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DiariesService]
    });
  });

  it('should be created', inject([DiariesService], (service: DiariesService) => {
    expect(service).toBeTruthy();
  }));
});
