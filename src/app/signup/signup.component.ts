import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  username = '';
  email = '';
  password = '';
  isFormValid = false;

  constructor(private router: Router) {}

  // Function to check if all fields are filled
  checkFormValidity(): void {
    this.isFormValid = !!(this.username.trim() && this.email.trim() && this.password.trim());
  }

  onSignup() {
    if (this.isFormValid) {
      console.log('Username:', this.username);
      console.log('Email:', this.email);
      console.log('Password:', this.password);

      alert('Signup successful!');
      this.router.navigate(['/login']);
    }
  }
}
