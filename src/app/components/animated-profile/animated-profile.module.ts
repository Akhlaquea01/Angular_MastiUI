import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimatedProfileRoutingModule } from './animated-profile-routing.module';
import { AnimatedProfileComponent } from './animated-profile.component';


@NgModule({
  declarations: [
    AnimatedProfileComponent
  ],
  imports: [
    CommonModule,
    AnimatedProfileRoutingModule
  ],
  exports:[AnimatedProfileComponent]
})
export class AnimatedProfileModule { }
