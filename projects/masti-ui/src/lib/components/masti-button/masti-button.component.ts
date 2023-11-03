import { Component, Input } from '@angular/core';

@Component({
  selector: 'masti-button',
  template: `<button
    type="button"
    class="masti-button"
    style="--custom-color: {{ btnColor }};"
    [disabled]="isDisabled"
  >
    {{ displayText }}
  </button>`,
  styleUrls: ['./masti-button.component.css'],
})
export class MastiButtonComponent {
  @Input({ required: true }) displayText = 'Button';
  @Input() btnColor = "#202f3f";
  @Input() isDisabled: boolean = false;
}
