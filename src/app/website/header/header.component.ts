import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
//import { TranslateService } from '@ngx-translate/core';
import {trigger, state, style, animate, transition } from '@angular/animations';

@Component({
    selector: 'website-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    //pushRightClass: string = 'push-right';
    public isCollapsed = false;
    
    constructor( public router: Router) {
        this.router.events.subscribe(val => {
            /*
            if (
                val instanceof NavigationEnd &&
                window.innerWidth <= 992 &&
                this.isToggled()
            ) {
                this.toggleSidebar();
            }
            */
        });
    }

    ngOnInit() {}
    
    /*
    show:boolean = false;
    toggleCollapse() {
        this.show = !this.show
    }   
    */
    

    /*
    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }
    */


    onLoggedout() {
        localStorage.removeItem('isLoggedin');
    }

}
