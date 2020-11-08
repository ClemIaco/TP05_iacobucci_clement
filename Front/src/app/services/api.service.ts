import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Product } from '../models/product';
import { Client } from '../models/client';
import { map } from 'rxjs/operators';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

    public getProducts() : Observable<Product[]> {
      return this.http.get<Product[]>(environment.productsAPI);
    }

    public getProductById(id: number) : Observable<Product> {
      return this.getProducts().pipe(map(product => product.find(product => product.id == id)));
    }

    public sendCustomerInfos(client: Client) : Observable<Client> {
      let body = new URLSearchParams();
      body.set('client', JSON.stringify(client));
      return this.http.post<Client>(environment.backendAPI + 'user/register',body.toString(), { headers: { 'content-type': 'application/x-www-form-urlencoded' }});
    }
}
