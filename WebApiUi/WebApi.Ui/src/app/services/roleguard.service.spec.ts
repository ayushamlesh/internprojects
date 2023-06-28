import { TestBed } from '@angular/core/testing';

import { RoleguardService } from './roleguard.service';

describe('RoleguardService', () => {
  let service: RoleguardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoleguardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
