import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: [ './calendar.component.scss' ]
})
export class CalendarComponent {
  @Input() now = new Date();
  days = [
    "Sunday", "Monday", "Tuesday", "Wednesday",
    "Thursday", "Friday", "Saturday"
  ]
  months = [
    "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November",
    "December"
  ];
  date = this.now.getDate();
  day = this.days[ this.now.getDay() ];
  month = this.months[ this.now.getMonth() ];
  year = this.now.getFullYear();
}
