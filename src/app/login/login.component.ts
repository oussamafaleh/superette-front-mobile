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
        token: 'MbFR335sMJL9K0Bt335sN7kcnU235sMRKT',
        login: "",
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
        let username = this.postData.login.trim();
        let password = this.postData.password.trim();
        return (
            this.postData.login &&
            this.postData.password &&
            username.length > 0 &&
            password.length > 0
        );
    }

    onLoggedin() {
        if (this.validateInputs()) {
            this.authService.login(this.postData).subscribe(
                (res: any) => {
                    if (res.results.data) {
                        console.log(res);
                        // Storing the User data.
                        this.storageService.store(
                            AuthConstants.AUTH,
                            res.userData
                        );
                        this.storageService.store("isLoggedin", "true");
                        this.router.navigate(["/dashboard"]);
                    } else {
                        this.toastService.presentToast("incorrect password.");
                        console.log("incorrect password.");
                    }
                },
                (error: any) => {
                    this.toastService.presentToast(error.error.messages.value);
                    console.log();
                }
            );
        } else {
            this.toastService.presentToast(
                "Please enter email/username or password."
            );
        }
    }
}
