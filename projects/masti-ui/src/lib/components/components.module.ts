import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MastiButtonComponent } from './masti-button/masti-button.component';
import { MastiChipsComponent } from './masti-chips/masti-chips.component';


const compon = [ MastiButtonComponent,
  MastiChipsComponent ]
@NgModule({

  declarations: [
    ...compon
  ],
  imports: [
    CommonModule
  ],
  exports: [ ...compon ]
})
export class ComponentsModule { }
