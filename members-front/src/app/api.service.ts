import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'http://35.188.65.1:8000/';
  token = 'Token ceb1aa19ef074733c9f6a89f5b997fff2b05316c	';
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json')
  .set('Authorization', this.token);
  constructor(private http: HttpClient) { }

  getAllMembers() : Observable<any>{ 
    return this.http.get(this.baseUrl + 'members/',
    {headers: this.httpHeaders});
  };

  getAllProduct() : Observable<any>{ 
    return this.http.get(this.baseUrl + 'produto/',
    {headers: this.httpHeaders});
  };

  getProduct(id) : Observable<any>{ 
    return this.http.get(this.baseUrl + 'produto/' + id + '/',
    {headers: this.httpHeaders});
  };

  getMember(id) : Observable<any>{ 
    return this.http.get(this.baseUrl + 'members/' + id + '/',
    {headers: this.httpHeaders});
  };

  saveNewMember(member) : Observable<any>{ 
    return this.http.post(this.baseUrl + 'members/', member,
    {headers: this.httpHeaders});
  };
}
