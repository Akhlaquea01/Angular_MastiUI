import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './app.material.module';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SideListComponent } from './components/side-list/side-list.component';
import { SidenavService } from './components/services/sidenav.service';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SideListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [SidenavService],
  bootstrap: [AppComponent]
})
export class AppModule { }
