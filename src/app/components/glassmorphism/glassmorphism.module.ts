import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GlassmorphismRoutingModule } from './glassmorphism-routing.module';
import { CalendarComponent } from './calendar/calendar.component';


@NgModule({
  declarations: [
    CalendarComponent
  ],
  imports: [
    CommonModule,
    GlassmorphismRoutingModule
  ]
})
export class GlassmorphismModule { }
