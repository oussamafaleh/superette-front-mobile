import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { routerTransition } from "../router.animations";
import { AuthConstants } from "../config/auth-constants";
import { AuthService } from "./../services/auth.service";
import { StorageService } from "./../services/storage.service";
import { ToastService } from "./../services/toast.service";

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.scss"],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    postData = {
        username: "",
        password: ""
    };

    constructor(
        private router: Router,
        private authService: AuthService,
        private storageService: StorageService,
        private toastService: ToastService
    ) {}

    ngOnInit() {
        (document.querySelector(
            ".loader-screen"
        ) as HTMLElement).style.display = "none";
    }

    validateInputs() {
        let username = this.postData.username.trim();
        let password = this.postData.password.trim();
        return (
            this.postData.username &&
            this.postData.password &&
            username.length > 0 &&
            password.length > 0
        );
    }

    onLoggedin() {
        if (this.validateInputs()) {
            this.authService.login(this.postData).subscribe(
                (res: any) => {
                    if (res.userData) {
                        // Storing the User data.
                        this.storageService.store(
                            AuthConstants.AUTH,
                            res.userData
                        );
                        this.storageService.store("isLoggedin", "true");
                        this.router.navigate([""]);
                    } else {
                        this.toastService.presentToast("incorrect password.");
                        console.log("incorrect password.");
                    }
                },
                (error: any) => {
                    this.toastService.presentToast("Network Issue.");
                    console.log("Network Issued.");
                }
            );
        } else {
            this.toastService.presentToast(
                "Please enter email/username or password."
            );
            console.log("Please enter email/username or password.");
        }
    }
}
