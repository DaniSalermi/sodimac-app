import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sodimac-home',
  templateUrl: './sodimac-home.component.html',
  styleUrls: ['./sodimac-home.component.scss']
})
export class SodimacHomeComponent implements OnInit {

  ImgCarouselPpal = [
    '../../../../assets/img/carousel-ppal/vmb-terrazas-03012020-b.jpg',
    '../../../../assets/img/carousel-ppal/vmb-tableros-03012020-b.jpg',
    '../../../../assets/img/carousel-ppal/vmb-especial-verano-03012020.jpg',
    '../../../../assets/img/carousel-ppal/vmb-closet-03012020.jpg',
    '../../../../assets/img/carousel-ppal/vmb-climatizacion-03012020.jpg',
    '../../../../assets/img/carousel-ppal/vmb-ceramicas-03012020.jpg'
  ];

  ImgProducts = [
    '../../../../assets/img/carousel-prod/prod1.png',
    '../../../../assets/img/carousel-prod/540235-2.png',
    '../../../../assets/img/carousel-prod/prod2.png',
    '../../../../assets/img/carousel-prod/372559-6.png',
    '../../../../assets/img/carousel-prod/prod3.png',
    '../../../../assets/img/carousel-prod/359886-1.png',
    '../../../../assets/img/carousel-prod/prod4.png',
    '../../../../assets/img/carousel-prod/278302-9.png',
    '../../../../assets/img/carousel-prod/prod5.png',
    '../../../../assets/img/carousel-prod/prod6.png'
  ];

  ImgCarouselPub = [
    '../../../../assets/img/publicidad/nuevoCatalogo-05-11062019.jpg',
    '../../../../assets/img/publicidad/bnn-votados-a.jpg',
    '../../../../assets/img/publicidad/bnn-pnp-small.jpg'
  ];

  SlideOptions = { items: 1, dots: true, nav: true };
  CarouselPpalOptions = { items: 6, dots: true, nav: true };
  CarouselPubOptions = { items: 3, dots: true, nav: true };

  folderCarouselPpal = ['img/carousel-ppal'];
  folderPublicidad = ['img/publicidad'];

  constructor() { }

  ngOnInit() {
  }

}
