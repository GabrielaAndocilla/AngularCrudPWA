import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductosComponent} from './components/productos/productos.component'
import {MapComponent} from './components/map/map.component'

const routes: Routes = [
  {path: '', component: ProductosComponent},
  {path: 'mapa', component: MapComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [ ProductosComponent, MapComponent]