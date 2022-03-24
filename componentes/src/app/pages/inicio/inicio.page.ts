import { Component, OnInit } from '@angular/core';

  interface componente {
    icon: string;
    name: string;
    redirectTo: string;


  }


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: componente[] = [
    {
      icon:'storefront-outline',
      name:'Tienda',
      redirectTo: '/tienda'
    },
    {
      icon:'home-outline',
      name:'Slides',
      redirectTo: '/slides'
    },
    {
      icon:'location',
      name:'Ubicacion',
      redirectTo: '/ubicacion'
    }
  ];


  constructor() { }

  ngOnInit() {
  }

}
