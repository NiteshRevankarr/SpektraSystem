import { TestBed } from '@angular/core/testing';

import { AdmincustomerService } from './admincustomer.service';

describe('AdmincustomerService', () => {
  let service: AdmincustomerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdmincustomerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
