import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  faCartShopping=faCartShopping;
  isMenuOpen: boolean = false;

 toggleMenu() {
  this.isMenuOpen = !this.isMenuOpen;
}

  constructor(private router: Router) {}

 
  gotologin() {
    this.router.navigate(['/login']);
  }

  gotosignup() {
    this.router.navigate(['/signup']);
  }

  goToHome() {
    this.router.navigate(['/home']);
  }

}
