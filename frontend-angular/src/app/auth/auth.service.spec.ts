import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import {provideHttpClient} from "@angular/common/http";
import {HttpTestingController, provideHttpClientTesting} from "@angular/common/http/testing";
import {firstValueFrom} from "rxjs";

describe('AuthService', () => {
  let httpTestingService : HttpTestingController;
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        AuthService,
      ],
    });

    service = TestBed.inject(AuthService);
    httpTestingService = TestBed.inject(HttpTestingController);
  });

  afterEach(() =>{
    httpTestingService.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('make request', async ()=>{
    const form = {
      'username' : 'bill'
    };
    const failedResponse = {
      'valid': false,
      'error': [

      ]
    };
    const register$ = service.tryRegisterWith(form);
    const registerPromise = firstValueFrom(register$);

    const req = httpTestingService.expectOne('api/register', 'Request to register');
    expect(req.request.method).toBe('POST');
    req.flush(failedResponse);
    expect(await registerPromise).toEqual(failedResponse);

    httpTestingService.verify();
  });
});
