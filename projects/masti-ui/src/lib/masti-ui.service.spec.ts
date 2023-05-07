import { TestBed } from '@angular/core/testing';

import { MastiUiService } from './masti-ui.service';

describe('MastiUiService', () => {
  let service: MastiUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MastiUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
