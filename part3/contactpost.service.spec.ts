import { TestBed } from '@angular/core/testing';

import { ContactpostService } from './contactpost.service';

describe('ContactpostService', () => {
  let service: ContactpostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactpostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
