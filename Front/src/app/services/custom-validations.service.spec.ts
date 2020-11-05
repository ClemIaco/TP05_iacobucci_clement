import { TestBed } from '@angular/core/testing';

import { CustomvalidationsService } from './custom-validations.service';

describe('CustomValidationsService', () => {
  let service: CustomvalidationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomvalidationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
