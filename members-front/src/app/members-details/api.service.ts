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

  getMember(id) : Observable<any>{ 
    return this.http.get(this.baseUrl + 'members/' + id + '/',
    {headers: this.httpHeaders});
  };

  updateMember(member) : Observable<any>{ 
    let body = { nome_fantasia: member.nome_fantasia, cnpj: member.cnpj, email: member.email, city: member.city};
    return this.http.put(this.baseUrl + 'members/' + member.id + '/', body,
    {headers: this.httpHeaders});
  };

  deleteMember(id) : Observable<any>{ 
    return this.http.delete(this.baseUrl + 'members/' + id + '/',
    {headers: this.httpHeaders});
  };

  getProduct(id) : Observable<any>{ 
    return this.http.get(this.baseUrl + 'produto/' + id + '/',
    {headers: this.httpHeaders});
  };


 updateProduct(produto) : Observable<any>{ 
    let body = { name_product: produto.name_product, price: produto.price};
    return this.http.put(this.baseUrl + 'produto/' + produto.id + '/', body,
    {headers: this.httpHeaders});
  };

  deleteProduct(id) : Observable<any>{ 
    return this.http.delete(this.baseUrl + 'produto/' + id + '/',
    {headers: this.httpHeaders});
  };
}
