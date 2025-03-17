import { Component, OnInit, OnDestroy } from '@angular/core';
import { Html5QrcodeScanner } from 'html5-qrcode';

@Component({
  selector: 'app-barcode-scanner',
  imports: [],
  templateUrl: './barcode-scanner.component.html',
  styleUrl: './barcode-scanner.component.scss'
})
export class BarcodeScannerComponent implements OnInit, OnDestroy {
  scanner: Html5QrcodeScanner | undefined;

  ngOnInit(): void {
    this.scanner = new Html5QrcodeScanner('reader', 
      {
      fps: 20,
      qrbox: { width: 250, height: 250 }
      
    },
    false
  );

    this.scanner.render(
      (decodedText: string, decodedResult: any) => this.onScanSuccess(decodedText, decodedResult),
      (errorMessage: string, error: any) => this.onScanError(errorMessage, error),
       // third argument for verbose
    );
  }

  onScanSuccess(decodedText: string, decodedResult: any): void {
    console.log('Scanned Result:', decodedText, decodedResult);
    const resultElement = document.getElementById('result');
    if (resultElement) {
      resultElement.innerHTML = `
        <h2>Success!</h2>
        <p><a href="${decodedText}" target="_blank">${decodedText}</a></p>
      `;
    }
    if (this.scanner) {
      this.scanner.clear(); // Stop scanner after successful scan
      document.getElementById('reader')?.remove(); // Remove scanner UI
    }
  }

  onScanError(errorMessage: string, error: any): void {
    console.error('Scan Error:', errorMessage, error);
  }

  ngOnDestroy(): void {
    if (this.scanner) {
      this.scanner.clear();
    }
  }
}
