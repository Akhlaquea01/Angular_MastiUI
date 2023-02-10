import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';





const materialComponent = [
  MatIconModule,MatToolbarModule,MatSidenavModule
]

@NgModule({
  declarations: [],
  imports: [
    // CommonModule
    materialComponent

  ],
  exports: [
    materialComponent
  ]
})
export class MaterialModule { }