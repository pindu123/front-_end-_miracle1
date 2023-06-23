import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactpostService {

  constructor(public http: HttpClient) { }

  public PostData3(a: any) {
    return this.http.post('http://172.17.15.207:9999/login', a, { responseType: 'text' });
  }

}