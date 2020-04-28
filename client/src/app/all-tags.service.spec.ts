import { TestBed } from '@angular/core/testing';

import { AllTagsService } from './all-tags.service';

describe('AllTagsService', () => {
  let service: AllTagsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllTagsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
