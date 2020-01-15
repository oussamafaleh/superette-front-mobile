import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

 
  post(serviceName: string, data: any) {
    
    const headers = new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImp0aSI6IjA1YzgxNzQwNjM2ZThiMmQzZjYwNTQ2NDA4Y2FjY2ZkIn0.eyJpc3MiOiJhcGkuc3VwZXJldHRlLmxvY2FsIiwiYXVkIjoiYXBpLnN1cGVyZXR0ZS5sb2NhbCIsImp0aSI6IjA1YzgxNzQwNjM2ZThiMmQzZjYwNTQ2NDA4Y2FjY2ZkIiwiaWF0IjoxNTc5MDkxMzE3LCJuYmYiOjE1NzkwOTEzMTcsImV4cCI6MTU3OTA5NDkxN30.NPV8XpeqDwv_QFpQaIw7-gcBuNZQ_8Yw76R-D81hG1g'
    });
    const options = { headers: headers, withCredintials: false };
     const url = environment.apiUrl + serviceName;
     console.log(JSON.stringify(data));
    return this.http.post(url, JSON.stringify(data), options);
  }
}