import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],
})
export class SlidesPage {

  slides = [
    {
     img: 'assets/img/1.jpeg',
     titulo: 'The Golden <br>'
    },
    {
     img: 'assets/img/2.jpeg',
     titulo: 'Collar <br> Perlas con <br> Hematitas de Flor'
    },
    {
     img: 'assets/img/3.jpeg',
     titulo: 'Collar con ojo <br> Turco'
    },
    {
      img: 'assets/img/4.jpeg',
      titulo: 'Mask Holder <br> Color'
     },
   ]

}