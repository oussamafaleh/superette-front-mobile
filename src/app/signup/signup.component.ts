import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { Router } from '@angular/router';
import { AuthConstants } from './../config/auth-constants';
import { AuthService } from './../services/auth.service';
import { StorageService } from './../services/storage.service';
import { ToastService } from './../services/toast.service';
//import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';



@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {
    postData = {
        token: 'MbFR335sMJL9K0Bt335sN7kcnU235sMRKT',
        firstname: '',
        lastname: '',
        localisation: '',
        phone: '',
        mail: '',
        gender: '',
        password: ''
    };
 

    constructor(
        private authService: AuthService,
        private toastService: ToastService,
        private storageService: StorageService,
        private router: Router,
       // private fb: Facebook
    ) { }

    ngOnInit() {
        (document.querySelector('.loader-screen') as HTMLElement).style.display = 'none';
    }
    validateInputs() {

        let firstname = this.postData.firstname.trim();
        let lastname = this.postData.lastname.trim();
        let localisation = this.postData.localisation.trim();

        let mail = this.postData.mail.trim();
        let gender = this.postData.gender.trim();
        let password = this.postData.password.trim();


        return (
            this.postData.firstname &&
            this.postData.lastname &&
            this.postData.localisation &&
            this.postData.phone &&
            this.postData.mail &&
            this.postData.gender &&
            this.postData.password &&

            firstname.length > 0 &&
            lastname.length > 0 &&
            localisation.length > 0 &&

            mail.length > 0 &&
            gender.length > 0 &&
            password.length > 0
        );
    }

    signAction() {
        if (this.validateInputs()) {
            /////////////////////////////////////
            this.authService.signup(this.postData).subscribe(
                ////////////////////////////////////
                (res: any) => {
                    if (res.userData) {
                        // Storing the User data.
                        this.storageService
                            .store(AuthConstants.AUTH, res.userData)
                            .then(res => {
                                this.router.navigate(['/Dashbord']);
                            });
                    } else {
                        this.toastService.presentToast(
                            'Data alreay exists, please enter new details.'
                        );
                    }
                },
                (error: any) => {
                    this.toastService.presentToast('Network Issue.');
                }
            );
        } else {
            this.toastService.presentToast(
                'Please enter email, username or password.'
            );
        }
    }

     /*this.fb.login(['public_profile', 'user_friends', 'email'])
    .then((res: FacebookLoginResponse) => console.log('Logged into Facebook!', res))
    .catch(e => console.log('Error logging into Facebook', e));
     this.fb.logEvent(this.fb.EVENTS.EVENT_NAME_ADDED_TO_CART);*/


}
