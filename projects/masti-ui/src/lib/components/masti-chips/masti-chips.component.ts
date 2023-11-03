import { Component, Input } from '@angular/core';

@Component({
  selector: 'masti-chips',
  template: `<div
  class="neomorphism-chip"
  [ngClass]="{ disabled: disabled, selected: selected }"
  style="--custom-color: {{ textColor }};"
>
  <ng-container *ngIf="showIcon && iconPosition === 'left'">
    <ng-content select=".icon-left"></ng-content>
  </ng-container>
  <span class="chip-text">
    <ng-content></ng-content>
  </span>
  <ng-container *ngIf="showIcon && iconPosition === 'right'">
    <ng-content select=".icon-right"></ng-content>
  </ng-container>
</div>`,
  styleUrls: ['./masti-chips.component.css'],
})
export class MastiChipsComponent {
  @Input() showIcon = false;
  @Input() disabled = false;
  @Input() selected = false;
  @Input() textColor = '#db34c8';
  @Input() iconPosition: 'left' | 'right' = 'left';
}
