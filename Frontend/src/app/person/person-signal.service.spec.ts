import { TestBed } from '@angular/core/testing';

import { PersonSignalService } from './person-signal.service';

describe('PersonSignalService', () => {
  let service: PersonSignalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonSignalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
