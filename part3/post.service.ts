import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
  

@Injectable({

  providedIn: 'root'

})

export class PostService {

  private url = 'http://172.17.15.207:9999/productfilter?category=men&';
  private url1 = 'http://172.17.15.207:9999/productfilter?category=women&';
  private url2 = 'http://172.17.15.207:9999/productfilter?category=children&';
  private url3 = 'http://172.17.15.207:9999/productfilter?category=electronics&';
  private url4 = 'http://172.17.15.207:9999/productfilter?category=Furniture&';
  private url5 = 'http://172.17.15.207:9999/productfilter?category=accessories&';

   

  constructor(private httpClient: HttpClient,private http: HttpClient) { }
  private apiUrl = 'http://172.17.15.207:9999/productfilter';


  addData(data: any) {
    return this.http.post(this.apiUrl, data);
  }
  

  getPosts(){

    return this.httpClient.get(this.url);

  }
  getpost1(){
    return this.httpClient.get(this.url1);
  }
  getpost2(){
    return this.httpClient.get(this.url2);
  }
  getpost3(){
    return this.httpClient.get(this.url3);
  }
  getpost4(){
    return this.httpClient.get(this.url4);
  }
  getpost5(){
    return this.httpClient.get(this.url5);
  }

  

}