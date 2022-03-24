import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],
})
export class SlidesPage {

  slides = [
    {
     img: 'assets/img/M1.jpg',
     titulo: 'MATRICULATE YA <br>in UMH'
    },
    {
     img: 'assets/img/UMH2.jpg',
     titulo: 'SOMOS<br>UMH'
    },
    {
     img: 'assets/img/UMH3.jfif',
     titulo: 'UMH<br>TU INIVERSIDAD <BR> DE EXITO'
    },
   ]

}