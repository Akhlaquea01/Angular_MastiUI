import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    children: [
      {
        path: 'animated-profile',
        loadChildren: () => import('./components/animated-profile/animated-profile.module').then(m => m.AnimatedProfileModule),
      },
      {
        path: 'glassmorphism',
        loadChildren: () => import('./components/glassmorphism/glassmorphism.module').then(m => m.GlassmorphismModule),
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
