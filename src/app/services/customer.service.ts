import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {CustomerModel} from "../models/customer.model";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private URI = 'http://localhost:8080/api'

  constructor(private http: HttpClient) {
  }

  public getAll(countryCode: string, state: string) {
    let params = new HttpParams().set('code', countryCode).set('state', state);
    return this.http.get<CustomerModel[]>(this.URI, {params: params});
  }
}
