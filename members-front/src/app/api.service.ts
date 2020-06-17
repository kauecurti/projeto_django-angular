import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'http://localhost:8000/';
  token = 'Token 4911d549db8a6a337041500f2a4e94a3db1ff5ad';
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
