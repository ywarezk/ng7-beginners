import { TestBed } from '@angular/core/testing';

import { LoginStamService } from './login-stam.service';

describe('LoginStamService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginStamService = TestBed.get(LoginStamService);
    expect(service).toBeTruthy();
  });
});
