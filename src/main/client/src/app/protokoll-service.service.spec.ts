import { TestBed, inject } from '@angular/core/testing';

import { ProtokollServiceService } from './protokoll-service.service';

describe('ProtokollServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProtokollServiceService]
    });
  });

  it('should be created', inject([ProtokollServiceService], (service: ProtokollServiceService) => {
    expect(service).toBeTruthy();
  }));
});
