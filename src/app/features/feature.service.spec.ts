import { TestBed } from '@angular/core/testing';

import { FeatureService } from './feature.service';

describe('Feature.Service.TsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FeatureService = TestBed.get(FeatureService);
    expect(service).toBeTruthy();
  });
});
