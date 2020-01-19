import { AuthConstants } from '../config/auth-constants';

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject,Observable } from 'rxjs';
import { HttpService } from './http.service';
import { StorageService } from './storage.service';

@Injectable({
providedIn: 'root'
})

export class AuthService {
    userData$ = new BehaviorSubject<any>([]);
   

    constructor(
        private httpService: HttpService,
        private storageService: StorageService,
        private router: Router
    ) {}
    
   
    gettoken() {
        return this.httpService.post1('authenticate', AuthConstants.TOKEN);
   }
   
    getUserData() {
        this.storageService.get(AuthConstants.AUTH).then(res => {
        this.userData$.next(res);
        });
     }

    login(postData: any): Observable<any> {
        return this.httpService.post('login', postData);
    }

    signup(postData: any): Observable<any> {
        return this.httpService.post('mobile/market/client', postData);
    }

    logout() {
        this.storageService.removeStorageItem(AuthConstants.AUTH).then(res => {
        this.router.navigate(['/login']);
        });
    }

   
}