import { TestBed } from '@angular/core/testing';

import { BateauService } from './bateau.service';

describe('BateauService', () => {
  let service: BateauService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BateauService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
