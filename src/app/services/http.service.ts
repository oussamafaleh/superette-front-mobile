import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';
import { StorageService } from '../services/storage.service';
import { AuthConstants } from '../config/auth-constants';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient,
    private storageService: StorageService) { }

    public jwt ;


  public header1 = { "Content-Type": "application/json" }

  post(serviceName: string, data: any) {

    //get the jwt from the storage
    this.storageService.get(AuthConstants.JWT).then(res => {
      this.jwt += res;
    });

    console.log(this.jwt)


    const headers = new HttpHeaders({ "Content-Type": "application/x-www-form-urlencoded", "Authorization": this.jwt });
    console.log(headers)
    const options = { headers: headers, withCredintials: false };
    const url = environment.apiUrl + serviceName;
    return this.http.post(url, JSON.stringify(data), options);
  }



  post1(serviceName: string, data: any) {
    const headers1 = new HttpHeaders(this.header1);
    const options = { headers: headers1, withCredintials: false };
    const url = environment.apiUrl + serviceName;
    console.log(JSON.stringify(data));
    return this.http.post(url, JSON.stringify(data), options);
  }

}