import { Component, Input } from '@angular/core';
import { colorType } from '../enums';

@Component({
  selector: 'lib-masti-button',
  templateUrl: './masti-button.component.html',
  styleUrls: ['./masti-button.component.css'],
})
export class MastiButtonComponent {
  @Input() displayText = 'Button';
  @Input() btnType: colorType = colorType.Default;
  @Input() isDisabled: boolean = false;
}
