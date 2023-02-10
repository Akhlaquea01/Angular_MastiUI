import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimatedProfileComponent } from './animated-profile.component';

const routes: Routes = [
  {
    path: '',
    component: AnimatedProfileComponent
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class AnimatedProfileRoutingModule { }
