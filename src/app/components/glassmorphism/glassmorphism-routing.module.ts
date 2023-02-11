import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { ButtonsComponent } from './buttons/buttons.component';

const routes: Routes = [
  {
    path: 'calendar',
    component:CalendarComponent
  },
  {
    path: 'button',
    component:ButtonsComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'calendar'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GlassmorphismRoutingModule { }
