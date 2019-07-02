import { TestBed } from '@angular/core/testing';

import { PricePackageService } from './price-package.service';

describe('PricePackageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PricePackageService = TestBed.get(PricePackageService);
    expect(service).toBeTruthy();
  });
});
