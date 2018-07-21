import { TestBed, inject } from '@angular/core/testing';

import { CamarasService } from './camaras.service';

describe('CamarasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CamarasService]
    });
  });

  it('should be created', inject([CamarasService], (service: CamarasService) => {
    expect(service).toBeTruthy();
  }));
});
