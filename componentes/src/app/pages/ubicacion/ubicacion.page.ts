import { Component, OnInit } from '@angular/core';
import { Geolocation, Geoposition } from '@awesome-cordova-plugins/geolocation/ngx';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.page.html',
  styleUrls: ['./ubicacion.page.scss'],
})
export class UbicacionPage implements OnInit {

  constructor(public navCtrl: NavController, public geolocation: Geolocation) { 

  }
  ngAfterViewInit() {

    this.geolocationNative();
  }

  geolocationNative(){

        this.geolocation.getCurrentPosition().then((geoposition: Geoposition)=>{

                console.log(geoposition);

        })

  }



  ngOnInit() {
  }

}
