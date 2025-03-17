import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports: [FormsModule],
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  email = '';
  password = '';

  constructor(private router: Router) {}


  isFormValid(): boolean {
    return  this.email.trim() !== '' && this.password.trim() !== '';
  }

  
  onLogin() {
    console.log('Username:', this.username);
    console.log('Email:', this.email);
    console.log('Password:', this.password);

    
    this.router.navigate(['/dashboard']);
  }
}