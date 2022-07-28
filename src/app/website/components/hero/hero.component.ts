import { Hero } from './../../../models/hero';

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  
  @Output() showHero = new EventEmitter<number>();
  @Input() heroData!: Hero;
  
  constructor(
  ) { }

  ngOnInit(): void {
  }

  test(){
    console.log(this.heroData);
        
  }

  showDetail(){
    this.showHero.emit(this.heroData.id)
  }

}
