import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule , routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
//FIREBASE
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';

//COMPONENTES
import { ProductosComponent } from './components/productos/productos.component';
import { ProductosListComponent } from './components/productos/productos-list/productos-list.component';
import { ProductoComponent } from './components/productos/producto/producto.component';


//SERVICIOS
import {ProductoService} from './services/producto.service'

import { AgmCoreModule } from '@agm/core'; 
// COMPONENTE MAPA
import { MapComponent } from './components/map/map.component';


import { ToastrModule } from 'ngx-toastr';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    ProductosListComponent,
    ProductoComponent,
    MapComponent,
    routingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    FormsModule,
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyAxDefh6psfeCtNpjKyNdz-IXCMLOnFAxM' }),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),

  ],
  providers: [
    ProductoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
