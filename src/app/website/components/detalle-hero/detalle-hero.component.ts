import { Component, Input, OnInit } from '@angular/core';
import { Hero } from 'src/app/models/hero';

@Component({
  selector: 'app-detalle-hero',
  templateUrl: './detalle-hero.component.html',
  styleUrls: ['./detalle-hero.component.scss']
})
export class DetalleHeroComponent implements OnInit {

  @Input('selectHero') heroData!: Hero;

  constructor() { }

  ngOnInit(): void {
  }

  test(){
    console.log(this.heroData);
    
  }

  onSwiper([swiper]:any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }

}
