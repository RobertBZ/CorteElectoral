import { TestBed } from '@angular/core/testing';

import { StadisticsService } from './stadistics.service';

describe('StadisticsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StadisticsService = TestBed.get(StadisticsService);
    expect(service).toBeTruthy();
  });
});
