import { Injectable } from '@angular/core';
import { catchError, throwError, tap } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {
  apiUrl = 'https://admin-service-api.onrender.com';
  token = localStorage.getItem('authToken');
  constructor(private _http: HttpClient, private _router: Router) { }
  getalladmins():Observable<any>{
    
    const headers = new HttpHeaders({
      'Authorization': `Bearer:${this.token}`
    });
    return this._http.get<any>(`${this.apiUrl}/admins`,{headers});

  }
  addadmin(data:any){
    const headers = new HttpHeaders({
      'Authorization': `Bearer:${this.token}`
    });
    return this._http.post(`${this.apiUrl}/admins`,data,{headers})

  }
  activateAdmin(id:number):Observable<any>{
   
    const headers = new HttpHeaders({
      'Authorization': `Bearer:${this.token}`
    });
    return this._http.put<any>(`${this.apiUrl}/admins/${id}/activate`,'',{headers});

  }

  deactivateAdmin(id:number):Observable<any>{
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders({
      'Authorization': `Bearer:${token}`
    });
    return this._http.put<any>(`${this.apiUrl}/admins/${id}/deactivate`,'',{headers});

  }
}
