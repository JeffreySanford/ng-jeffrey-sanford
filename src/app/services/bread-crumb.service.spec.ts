import { TestBed } from '@angular/core/testing';

import { breadcrumbService } from './bread-crumb.service';

describe('breadcrumbService', () => {
  let service: breadcrumbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(breadcrumbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
