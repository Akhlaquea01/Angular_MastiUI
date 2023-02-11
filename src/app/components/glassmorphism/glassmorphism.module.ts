import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GlassmorphismRoutingModule } from './glassmorphism-routing.module';
import { CalendarComponent } from './calendar/calendar.component';
import { ButtonsComponent } from './buttons/buttons.component';


@NgModule({
  declarations: [
    CalendarComponent,
    ButtonsComponent
  ],
  imports: [
    CommonModule,
    GlassmorphismRoutingModule
  ]
})
export class GlassmorphismModule { }
