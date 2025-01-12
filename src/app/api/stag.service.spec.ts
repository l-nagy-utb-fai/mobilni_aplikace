import { TestBed } from '@angular/core/testing';

import { StagService } from './stag.service';

describe('StagService', () => {
  let service: StagService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StagService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
