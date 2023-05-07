import { NgModule } from '@angular/core';
import { ComponentsModule } from './components/components.module';
import { MastiUiComponent } from './masti-ui.component';



@NgModule({
  declarations: [
    MastiUiComponent
  ],
  imports: [
    ComponentsModule
  ],
  exports: [
    MastiUiComponent
  ]
})
export class MastiUiModule { }
