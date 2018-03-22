import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


    constructor() {
    }

    ngOnInit() {
    }

    openSign() {
        document.getElementById('sign').classList.add('sign-active');
        document.getElementById('open-sign').style.display = 'none';
        document.getElementById('close-sign').style.display = 'block';
    }

    closeSign() {
        document.getElementById('sign').classList.remove('sign-active');
        document.getElementById('open-sign').style.display = 'block';
        document.getElementById('close-sign').style.display = 'none';
    }

}
