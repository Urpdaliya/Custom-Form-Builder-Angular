import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QRCodeModule } from 'angularx-qrcode';

@Component({
  selector: 'app-form-preview',
  standalone: true,
  imports: [
    CommonModule,
    QRCodeModule
  ],
  templateUrl: './form-preview.component.html',
  styleUrls: ['./form-preview.component.scss']
})
export class FormPreviewComponent {

  formUrl =
    'http://localhost:4200/dynamic-form/1';

}