import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { StorageService } from './services/storage.service';
import { ToastService } from './services/toast.service';
import { AuthConstants } from './config/auth-constants';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    constructor(private authService: AuthService,
        private storageService: StorageService,
        private toastService: ToastService,

    ) { }

    ngOnInit() {
        this.getJwt();

      /*  setInterval(() => {
            alert('Hello...')
        }, 5000);*/
    };







    getJwt() {
        this.authService.gettoken().subscribe(
            ////////////////////////////////////
            (res: any) => {
                if (res) {
                    // Storing the jwt and the time expire.
                    this.storageService.store(AuthConstants.JWT, res.results.jwt)
                    this.storageService.store(AuthConstants.EXPIRE_IN, res.results.expire_in)

                } else {
                    this.toastService.presentToast(
                        'connection failed'
                    );
                }
            },
            (error: any) => {
                this.toastService.presentToast('Network Issue.');
            }
        );
    }
}
