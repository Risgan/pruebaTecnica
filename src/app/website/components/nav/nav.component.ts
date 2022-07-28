import { SuperHeroesService } from 'src/app/services/super-heroes.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @Output() sendLimit = new EventEmitter<number>();
  limit: number=10;
  
  private myLimit = new BehaviorSubject<number>(10);
  myLimit$ = this.myLimit.asObservable();

  constructor(
    private superHeroesService: SuperHeroesService
  ) { }

  ngOnInit(): void {
    this.superHeroesService.myLimit$.subscribe(element => {
    });
  }

  onChange(){
    console.log("hola");
    
    this.superHeroesService.updateLimit(this.limit)
  }

}
