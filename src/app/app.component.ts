import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TLSM';
  
  mobileNavToggle() {
    let elements = document.getElementsByClassName('navbar'); //select('#navbar').classList.toggle('navbar-mobile')
    let classes: DOMTokenList = elements[0].classList;
    classes.toggle('navbar-mobile');
    classes.toggle('bi-list');
    classes.toggle('bi-x');
  }
}
