import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'http://34.66.92.172:8000/';
  token = 'Token a25bdade60c73a07d62ba26799d6a2e19103ee0c	';
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
