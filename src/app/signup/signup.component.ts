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
        private router: Router
        //private facebook: Facebook
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
                                this.router.navigate(['/dashbord']);
                            });
                    } else {
                        this.toastService.presentToast(
                            'Data alreay exists, please enter new details.'
                        );
                    }
                },
                (error: any) => {
                    this.toastService.presentToast(error.error.messages.value);
                    console.log();
                }
            );
        } else {
            this.toastService.presentToast(
                'Please enter email, username or password.'
            );
        }
    }


  
  /*loginWithFB() {
    this.facebook.login(['email', 'public_profile']).then((response: FacebookLoginResponse) => {
      this.facebook.api('me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture_large)', []).then(profile => {
        this.userData = {email: profile['email'], first_name: profile['first_name'], picture: profile['picture_large']['data']['url'], username: profile['name']}
        console.log(this.userData)
      });
    });
  
  }*/
}