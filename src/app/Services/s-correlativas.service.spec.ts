import { TestBed } from '@angular/core/testing';

import { SCorrelativasService } from './s-correlativas.service';

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
