import { Component } from '@angular/core';
import { BarcodeScannerComponent } from "../components/barcode-scanner/barcode-scanner.component";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-dashboard',
  imports: [BarcodeScannerComponent,CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  isMenuOpen = false;
}
