import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { faChartBar } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import { faShieldHalved } from '@fortawesome/free-solid-svg-icons';
import {faCircleCheck} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-home',
  imports: [FontAwesomeModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  faCartShopping=faCartShopping;
  faChartBar =  faChartBar;
  faLayerGroup = faLayerGroup;
  faUser = faUser;
  faShieldHalved = faShieldHalved;
  faCircleCheck = faCircleCheck;
  constructor(private router: Router) {}

  onclick(){
    this.router.navigate(['/signup']);
  }
}
