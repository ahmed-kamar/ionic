import { Component } from '@angular/core';
import {
  IonContent,
  IonButton,
  IonText,
  IonImg,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonContent, IonButton, IonText, IonImg],
})
export class HomePage {
  constructor() {}
}
