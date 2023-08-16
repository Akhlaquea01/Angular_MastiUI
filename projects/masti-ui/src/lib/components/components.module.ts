import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MastiButtonComponent } from './masti-button/masti-button.component';
import { MastiChipsComponent } from './masti-chips/masti-chips.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const componponents = [MastiButtonComponent, MastiChipsComponent];
@NgModule({
  declarations: [...componponents],
  imports: [CommonModule,FontAwesomeModule],
  exports: [...componponents],
})
export class ComponentsModule {}
