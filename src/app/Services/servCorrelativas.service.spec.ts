import { TestBed } from '@angular/core/testing';

import { CorrelativasService } from './servCorrelativas.service';

describe('SCorrelativasService', () => {
  let service: CorrelativasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CorrelativasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
