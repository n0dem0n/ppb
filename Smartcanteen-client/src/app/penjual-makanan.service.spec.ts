import { TestBed } from '@angular/core/testing';

import { PenjualMakananService } from './penjual-makanan.service';

describe('PenjualMakananService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PenjualMakananService = TestBed.get(PenjualMakananService);
    expect(service).toBeTruthy();
  });
});
