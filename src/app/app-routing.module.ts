import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoComponent } from './components/video/video.component';
import { MapaComponent } from './components/mapa/mapa.component';

const routes: Routes = [
 
  {
    path: 'video',
    component: VideoComponent 
  },
  {
    path: 'mapa',
    component: MapaComponent 
  },
  { path: '',
  redirectTo: '/home',
   pathMatch: 'full' },
   
  //{ path: '**', component: PaginaNoEncontradaComponent }
 
];


@NgModule({
  imports: [ RouterModule.forRoot(routes, { enableTracing: true }),],
  exports: [ RouterModule ]
  
})
export class AppRoutingModule {}