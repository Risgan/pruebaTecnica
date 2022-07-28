import { Hero } from './../../../models/hero';
import { Component, OnInit } from '@angular/core';
import { SuperHeroesService } from 'src/app/services/super-heroes.service';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.scss']
})
export class HerosComponent implements OnInit {

  limit:number=10;

  herosList: Hero[]=[]
  lastPage:number=0;
  page:number=1;
  showHeroDetail: boolean =false
  heroChosen!: Hero;

  constructor(
    private superHeroesService: SuperHeroesService

  ) { }

  ngOnInit(): void {
    this.superHeroesService.myLimit$.subscribe(element => {
      this.limit = element;      
      console.log(element,"si");
      this.onLoadData();
      
    });
  }

  onLoadData(){
    this.superHeroesService.getAll().subscribe(data=>{
      console.log(data);
      this.lastPage=data.lastPage
      this.page=data.page
      this.herosList=data.items
      console.log(this.herosList);      
    })
  }

  onShowDetail(id: number){
    console.log(id);
    this.superHeroesService.getHeroById(id).subscribe(data =>{
      console.log(data);
      this.heroChosen = data;
      this.toggleProductDetail();
    })
  }

  toggleProductDetail(){
    this.showHeroDetail = !this.showHeroDetail
    console.log(this.showHeroDetail);
    
  }
  
  anterior(){
    this.page++;
    if(this.page < 1){
      this.page = 1
    }
    this.superHeroesService.page = this.page;
    this.onLoadData();
  }

  siguiente(){
    this.page++;
    if(this.page > this.lastPage){
      this.page = this.lastPage
    }
    this.superHeroesService.page = this.page;
    this.onLoadData();
  }

  test(){

    console.log(this.heroChosen);
    
    
  }
}
