import { Component,  ViewChild, OnInit} from '@angular/core';
import { AgmMap } from '@agm/core';
import { AgmCoreModule } from '@agm/core'; 

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  
})
export class MapComponent implements OnInit {

  @ViewChild("googleMap") agmMap: AgmMap;
  defaultCenter = {lat: 55.5815245, lng: 36.8251383};
  zoom = 8;

  google: any
  currentCenter = Object.assign({}, this.defaultCenter);

  title = 'PWASECOND';
  ngOnInit() {  
    this.zoom = 16;
    if(navigator){
      navigator.geolocation.getCurrentPosition( pos => {
        this.currentCenter = { lat: pos.coords.latitude, lng: pos.coords.longitude};

      })
      }  
    }

}
