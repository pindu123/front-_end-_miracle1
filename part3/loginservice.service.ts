import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(public http: HttpClient) { }

  // public getdata(a:any)
  // {
    
  //   return this.http.post('http://172.17.15.207:9999/login', a, { responseType: 'text' });  }
 

  PostData(data: any) {
   
  
    let url2 = "http://172.17.15.207:9999/register";
    let dataAsString = JSON.stringify(data);
    return this.http.post(url2, dataAsString, { headers: { 'Content-Type': 'application/json' } });
  }

  public PostData3(a: any) {
    return this.http.post('http://172.17.15.207:9999/login', a, { responseType: 'text' });
  }

  forget(data: any) {
    let url4 = "http://172.17.15.206:9991/Pupdate";
    return this.http.put(url4, data)
    }

}