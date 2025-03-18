import { Component, OnInit, OnDestroy } from '@angular/core';
import { Html5QrcodeScanner } from 'html5-qrcode';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-barcode-scanner',
  imports: [CommonModule],
  templateUrl: './barcode-scanner.component.html',
  styleUrl: './barcode-scanner.component.scss'
})
export class BarcodeScannerComponent implements OnInit, OnDestroy {
  scanner: Html5QrcodeScanner | undefined;
  isScanning = false;
  scannedCodes: string[] = [];

  ngOnInit(): void {
   
  }

  toggleScanner(): void {
    if (this.isScanning) {
      this.stopScanning();
    } else {
      this.startScanning();
    }
  }

  startScanning(): void {
    this.isScanning = true;
    this.scanner = new Html5QrcodeScanner('reader', {
      fps: 20,
      qrbox: { width: 250, height: 250 }
    },
  false);

    this.scanner.render(
      (decodedText: string, decodedResult: any) => this.onScanSuccess(decodedText, decodedResult),
      (errorMessage: string, error: any) => this.onScanError(errorMessage, error)
    );
  }

  stopScanning(): void {
    this.isScanning = false;
    if (this.scanner) {
      this.scanner.clear().catch(err => console.error('Error stopping scanner:', err));
    }
  }

  onScanSuccess(decodedText: string, decodedResult: any): void {
    console.log('Scanned Result:', decodedText, decodedResult);

    if (!this.scannedCodes.includes(decodedText)) {
      this.scannedCodes.push(decodedText);
    }

    // Continue scanning without stopping
  }

  onScanError(errorMessage: string, error: any): void {
    console.error('Scan Error:', errorMessage, error);
  }

  resetList(): void {
    this.scannedCodes = [];
  }

  ngOnDestroy(): void {
    this.stopScanning();
  }
}
