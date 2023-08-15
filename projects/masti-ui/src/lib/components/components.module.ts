import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MastiButtonComponent } from './masti-button/masti-button.component';
import { MastiChipsComponent } from './masti-chips/masti-chips.component';

const componponents = [MastiButtonComponent, MastiChipsComponent];
@NgModule({
  declarations: [...componponents],
  imports: [CommonModule],
  exports: [...componponents],
})
export class ComponentsModule {}
