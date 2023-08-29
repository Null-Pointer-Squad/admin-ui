import { Injectable } from '@angular/core';
import { catchError, throwError, tap } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginRequest } from '../login-request';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = 'https://admin-service-api.onrender.com';
  

  constructor(private _http: HttpClient, private _router: Router) {}

  login( loginRequest:LoginRequest) {
    
    return this._http.post<any>(`${this.apiUrl}/login`, loginRequest)
    }
}