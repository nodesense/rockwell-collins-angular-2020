import { TestBed } from '@angular/core/testing';

import { SaveAlertGuard } from './save-alert.guard';

describe('SaveAlertGuard', () => {
  let guard: SaveAlertGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SaveAlertGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
