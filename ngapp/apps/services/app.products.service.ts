import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs";
import { Product } from "./../models/app.product.model";

@Injectable()
export class ProductService {
  url: string;

  constructor(private http: Http) {
    this.url = "http://localhost:4070";
  }
  getData(): Observable<Response> {
    let resp: Observable<Response>;
    resp = this.http.get(`${this.url}/api/products`);
    return resp;
  }
  
  postData(prd: Product): Observable<Response> {
    let resp: Observable<Response>;
    //1. Define request headers
    let header: Headers = new Headers({ "Content-Type": "application/json" });
    header.append("AUTHORIZATION", "basic admin:admin123");
    //2. Define request option for headers(Collection of header values- RequestOptions)
    let options: RequestOptions = new RequestOptions();
    options.headers = header;
    resp = this.http.post(
      `${this.url}/api/products`,
      JSON.stringify(prd),
      options
    );
    return resp;
  }
  
  putData(id: number, prd: Product): Observable<Response> {
    let resp: Observable<Response>;
    //1. Define request headers
    let header: Headers = new Headers({ "Content-Type": "application/json" });
    header.append("AUTHORIZATION", "basic admin:admin123");
    //2. Define request option for headers(Collection of header values- RequestOptions)
    let options: RequestOptions = new RequestOptions();
    options.headers = header;
    resp = this.http.put(
      `${this.url}/api/products/${id}`,
      JSON.stringify(prd),
      options
    );
    return resp;
  }
  
  deleteData(id: number): Observable<Response> {
    let resp: Observable<Response>;
    resp = this.http.delete(`${this.url}/api/products/${id}`);
    return resp;
  }
}
