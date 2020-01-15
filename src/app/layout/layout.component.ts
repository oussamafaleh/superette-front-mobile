import { Component, OnInit, HostBinding, HostListener } from '@angular/core';
import { AuthService } from './../services/auth.service';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
    collapedSideBar: boolean;
    public authUser: any;


    @HostListener('window:scroll', ['$event'])
    onWindowScroll() {
        const header: any = document.querySelector('.header');

        const pos =
            document.documentElement.scrollTop || document.body.scrollTop;

        if (pos > 30) {
            header.classList.add('active');
        } else {
            header.classList.remove('active');
        }
    }

    constructor(private auth: AuthService) {}

    ngOnInit() {
        //get the user data 
        this.auth.userData$.subscribe((res:any) => {
            this.authUser = res;
            });

        const dom: any = document.querySelector('body');
        dom.classList.remove('sidemenu-open');
        dom.classList.remove('menuactive');
        (document.querySelector(
            '.loader-screen'
        ) as HTMLElement).style.display = 'none';
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');

        if (dom.classList.contains('sidemenu-open')) {
            dom.classList.remove('sidemenu-open');
            setTimeout(() => {
                dom.classList.remove('menuactive');
            }, 800);
        }
    }

    receiveCollapsed($event) {
        this.collapedSideBar = $event;
    }
}
