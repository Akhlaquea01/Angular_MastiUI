import { Component, Input } from '@angular/core';
import { colorType } from '../enums';

@Component({
  selector: 'masti-button',
  template: `<button
    type="button"
    class="masti-button"
    style="--custom-color: {{ btnType }};"
    [disabled]="isDisabled"
  >
    {{ displayText }}
  </button>`,
  styleUrls: ['./masti-button.component.css'],
})
export class MastiButtonComponent {
  @Input({ required: true }) displayText = 'Button';
  @Input() btnType: colorType = colorType.Default;
  @Input() isDisabled: boolean = false;
}
