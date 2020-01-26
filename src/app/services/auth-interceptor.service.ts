import { AuthConstants } from "../config/auth-constants";
import { Injectable } from "@angular/core";
import { StorageService } from "../services/storage.service";
import { BehaviorSubject } from "rxjs";
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from "@angular/common/http";

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private storageServise: StorageService) {}

  jwt$ = new BehaviorSubject<any>([]);

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    this.storageServise.get(AuthConstants.JWT).then(res => {
      this.jwt$.next(res);
    });

    if (this.jwt$.getValue() != []) {
        const cloned = req.clone({
          headers: req.headers.set(
            "Authorization",
            "Bearer "+this.jwt$.getValue()
          )
        });
        return next.handle(cloned);
    } else {
        return next.handle(req);
    }
  }
}
