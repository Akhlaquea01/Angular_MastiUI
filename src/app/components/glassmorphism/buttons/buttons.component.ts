import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: [ './buttons.component.scss' ]
})
export class ButtonsComponent {
  @Input() isDisabled = false;
  @Input() hovColor = "#ff1f71";
  @Input() width = "150px";
  @Input() height = "50px";
  @Input() display = "Button";

}
