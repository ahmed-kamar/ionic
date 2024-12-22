import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonSelect,
  IonSelectOption,
  IonRadioGroup,
  IonRadio,
  IonChip,
  IonList,
  IonItemDivider,
  IonContent,
  IonCard,
  IonGrid,
  IonCardContent,
  IonRow,
  IonCol
  
} from '@ionic/angular/standalone';
import { ContainerPage } from '../shared/container/container.page';

@Component({
  selector: 'app-subscribe',
  templateUrl: 'subscribe.page.html',
  styleUrls: ['subscribe.page.scss'],
  imports: [
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonSelect,
    IonSelectOption,
    IonRadioGroup,
    IonRadio,
    IonChip,
    ReactiveFormsModule,
    IonList,
    IonItemDivider,
    IonContent,
    IonCard,
    ContainerPage,
    IonRow,
    IonCol,
    IonCardContent,
  ],
})
export class SubscribePage {
  subscribeForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    childName: ['', Validators.required],
    childDobDay: ['', Validators.required],
    childDobMonth: ['', Validators.required],
    childDobYear: ['', Validators.required],
    grade: ['', Validators.required],
    gender: ['', Validators.required],
    topics: [[], Validators.required],
  });

  days = Array.from({ length: 31 }, (_, i) => i + 1);
  months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);
  grades = ['Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5'];
  topics = ['Arabic', 'Islamic', 'English', 'History', 'Sports'];
  selectedTopics: string[] = [];

  constructor(private fb: FormBuilder) {}

  toggleTopicSelection(topic: string) {
    const index = this.selectedTopics.indexOf(topic);
    if (index === -1) {
      if (this.selectedTopics.length < 3) {
        this.selectedTopics.push(topic);
      }
    } else {
      this.selectedTopics.splice(index, 1);
    }
    this.subscribeForm.controls['topics'].setValue(this.selectedTopics);
  }

  isSelected(topic: string): boolean {
    return this.selectedTopics.includes(topic);
  }

  onSubmit() {
    if (this.subscribeForm.valid) {
      console.log(this.subscribeForm.value);
    }
  }
}
