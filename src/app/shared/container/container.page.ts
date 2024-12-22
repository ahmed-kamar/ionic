import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: 'container.page.html',
  styleUrls: ['container.page.scss'],
  imports: [],
})
export class ContainerPage {
  @Input() maxWidth: number = 1300;
}
