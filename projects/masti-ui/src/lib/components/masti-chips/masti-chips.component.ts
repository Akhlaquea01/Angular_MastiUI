import { Component, Input } from '@angular/core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'lib-masti-chips',
  templateUrl: './masti-chips.component.html',
  styleUrls: ['./masti-chips.component.css']
})
export class MastiChipsComponent {
  @Input() iconClass = faCheck;
  @Input() disabled = false;
  @Input() selected = false;
  @Input() textColor = '#db34c8';
  @Input() iconPosition: 'left' | 'right' = 'left';
}
