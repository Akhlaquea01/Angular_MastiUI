import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-masti-button',
  templateUrl: './masti-button.component.html',
  styleUrls: ['./masti-button.component.css'],
})
export class MastiButtonComponent {
  @Input() displayText = 'Button';
  @Input() btnType: ButtonType = ButtonType.Default;
  @Input() isDisabled: boolean = false;
}
export enum ButtonType {
  Default = '#202f3f',
  Primary = '#696cff',
  Secondary = '#8592a3',
  Danger = '#e6381a',
  Success = '#66c732',
  Warning = '#e69a0',
  Info = '#03b0d4',
  // Add more button types if needed
}
