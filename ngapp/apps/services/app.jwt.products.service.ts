import{Injectable} from "@angular/core";
import{Http,Response,Headers,RequestOptions} from "@angular/http";
import{Observable} from "rxjs";
import{Product} from "./../components/appjwtcomponent/app.product.model";

@Injectable()
export class ProductService{

    url:string;

    constructor(private http:Http){
        this.url = "http://localhost:4040";
    }

    getData(token:string):Observable<Response>{
        let resp:Observable<Response>;

        let header : Headers = new Headers({
            'Content-Type':'application/json',
            'authorization':'Bearer ' + token
        });

        let options : RequestOptions = new RequestOptions();
        options.headers = header;

        resp = this.http.get(`${this.url}/api/products`,options);
        return resp;
    }

    postData(prd:Product,token:string):Observable<Response>{
        console.log("Save product service");
        let resp:Observable<Response>;
       
        let header : Headers = new Headers({
            'Content-Type':'application/json',
            'authorization':'Bearer ' + token
        });

        let options : RequestOptions = new RequestOptions();
        options.headers = header;

       resp = this.http.post(`${this.url}/api/products`,JSON.stringify(prd),options);

        return resp;
    }

    updateData(id:number,prd:Product,token:string):Observable<Response>{
        console.log("Update Product Service");
        let resp:Observable<Response>;

        let header : Headers = new Headers({
            'Content-Type':'application/json',
            'authorization':'Bearer ' + token
        });

        let options : RequestOptions = new RequestOptions();
        options.headers = header;

        resp = this.http.put(`${this.url}/api/products/${id}`, options);
        return resp;
    }

    deleteData(id:number, token:string):Observable<Response>{
        let resp:Observable<Response>;

        let header : Headers = new Headers({
            'Content-Type':'application/json',
            'authorization':'Bearer ' + token
        });

        let options : RequestOptions = new RequestOptions();
        options.headers = header;

        resp = this.http.delete(`${this.url}/api/products/${id}`,options);
        return resp;
    }

}