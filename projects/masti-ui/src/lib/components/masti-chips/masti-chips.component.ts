import { Component, Input } from '@angular/core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'masti-chips',
  template: `<div
    class="neomorphism-chip"
    [ngClass]="{ disabled: disabled, selected: selected }"
    style="--custom-color: {{ textColor }};"
  >
    <ng-container *ngIf="iconClass && iconPosition === 'left'">
      <fa-icon class="chip-icon" [icon]="iconClass"></fa-icon>
    </ng-container>
    <span class="chip-text">
      <ng-content></ng-content>
    </span>
    <ng-container *ngIf="iconClass && iconPosition === 'right'">
      <fa-icon class="chip-icon" [icon]="iconClass"></fa-icon>
    </ng-container>
  </div>`,
  styleUrls: ['./masti-chips.component.css'],
})
export class MastiChipsComponent {
  @Input() iconClass = faCheck;
  @Input() disabled = false;
  @Input() selected = false;
  @Input() textColor = '#db34c8';
  @Input() iconPosition: 'left' | 'right' = 'left';
}
