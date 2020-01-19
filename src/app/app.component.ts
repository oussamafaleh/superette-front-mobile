import { Component, OnInit } from "@angular/core";
import { AuthService } from "./services/auth.service";
import { StorageService } from "./services/storage.service";
import { ToastService } from "./services/toast.service";
import { AuthConstants } from "./config/auth-constants";
import { BehaviorSubject } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private storageService: StorageService,
    private toastService: ToastService
  ) {}
  expire_in$ = new BehaviorSubject<any>([]);

  ngOnInit() {
    //store the jwt from the first time
    this.setJwt();
    
    //store the jwt after the time expired
    this.storageService.get(AuthConstants.EXPIRE_IN).then(res => {
      setInterval(() => {
        this.setJwt();
       console.log("jj");
      }, res*1000);
    });
  }

  setJwt() {
    this.authService.gettoken().subscribe(
      ////////////////////////////////////
      (res: any) => {
        if (res) {
          // Storing the jwt and the time expire.
          this.storageService.store(AuthConstants.JWT, res.results.jwt);
          this.storageService.store(
            AuthConstants.EXPIRE_IN,
            res.results.expire_in
          );
        } else {
          this.toastService.presentToast("connection failed");
        }
      },
      (error: any) => {
        this.toastService.presentToast("Network Issue.");
      }
    );
  }
}
