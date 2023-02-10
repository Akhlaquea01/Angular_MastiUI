import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SidenavService } from '../services/sidenav.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: [ './home-page.component.scss' ]
})
export class HomePageComponent implements OnInit {
  @ViewChild('sidenav', { static: true })
  public sidenav!: MatSidenav;
  showFiller = false;
  constructor(private _sidenavService: SidenavService) {
  }

  ngOnInit(): void {
    this._sidenavService.setSidenav(this.sidenav);
    this._sidenavService.toggle();
  }
}
