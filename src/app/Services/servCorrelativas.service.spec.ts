import { TestBed } from '@angular/core/testing';

import { SCorrelativasService } from './servCorrelativas.service';

describe('SCorrelativasService', () => {
  let service: SCorrelativasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SCorrelativasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
