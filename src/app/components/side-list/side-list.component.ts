import { Component } from '@angular/core';
export interface Section {
  name: string;
  created: Date;
  route: string;

}
@Component({
  selector: 'app-side-list',
  templateUrl: './side-list.component.html',
  styleUrls: [ './side-list.component.scss' ]
})
export class SideListComponent {
  items: Section[] = [
    {
      name: 'Animated Profile',
      created: new Date('02/10/2023'),
      route: '/animated-profile'
    },
    {
      name: 'Animated Profile',
      created: new Date('02/10/2023'),
      route: '/animated-profile2'
    }
  ];
}
