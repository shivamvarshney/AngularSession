import { TestBed, inject } from '@angular/core/testing';

import { ServiceexampleService } from './serviceexample.service';

describe('ServiceexampleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceexampleService]
    });
  });

  it('should be created', inject([ServiceexampleService], (service: ServiceexampleService) => {
    expect(service).toBeTruthy();
  }));
});
