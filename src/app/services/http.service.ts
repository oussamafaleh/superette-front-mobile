import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { StorageService } from "../services/storage.service";
import { AuthConstants } from "../config/auth-constants";
import { AuthenticateService } from "../services/authenticate.service";
import { Observable, BehaviorSubject } from "rxjs";
import { Auth } from "../auth";

@Injectable({
  providedIn: "root"
})
export class HttpService {
  constructor(
    private authenticate: AuthenticateService,
    private http: HttpClient,
    private storageServise: StorageService
  ) {}
  public test = false;
  jwt$ = new BehaviorSubject<any>([]);
  post(serviceName: string, data: any) {
    this.storageServise.get(AuthConstants.JWT).then(res => {
      if (res) {
        this.test = true;
        this.jwt$.next(res);
      }
    });
    while (!this.test) {
      if (this.test) {
        console.log(this.jwt$.getValue());
        const headers = new HttpHeaders({
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: "Bearer " + this.jwt$.getValue
        });
        const options = { headers: headers, withCredintials: false };
        const url = environment.apiUrl + serviceName;
        return this.http.post(url, JSON.stringify(data), options);
      }
    }
  }

  post1(serviceName: string, data: any) {
    const headers1 = new HttpHeaders({ "Content-Type": "application/json" });
    const options = { headers: headers1, withCredintials: false };
    const url = environment.apiUrl + serviceName;
    return this.http.post(url, JSON.stringify(data), options);
  }
}
