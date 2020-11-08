import { TestBed } from '@angular/core/testing';

import { CommonTableAService } from './common-table-a.service';

describe('CommonTableAService', () => {
  let service: CommonTableAService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonTableAService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
