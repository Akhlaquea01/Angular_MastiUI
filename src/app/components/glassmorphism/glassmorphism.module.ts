import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GlassmorphismRoutingModule } from './glassmorphism-routing.module';
import { CalendarComponent } from './calendar/calendar.component';
import { ButtonsComponent } from './buttons/buttons.component';


const componentArray = [ CalendarComponent,
  ButtonsComponent ]
@NgModule({
  declarations: [
    ...componentArray
  ],
  imports: [
    CommonModule,
    GlassmorphismRoutingModule
  ],
  exports: [ ...componentArray
  ]
})
export class GlassmorphismModule { }
