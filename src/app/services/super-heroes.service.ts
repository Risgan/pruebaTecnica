import { Hero } from './../models/hero';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SuperHeroesService {

  private myLimit = new BehaviorSubject<number>(10);
  limit:number=10
  public page:number=1
  myLimit$ = this.myLimit.asObservable();


  private apiUrl = 'https://ea1w717ym2.execute-api.us-east-1.amazonaws.com/api/heroes'
  private apiUrlHero = 'https://ea1w717ym2.execute-api.us-east-1.amazonaws.com/api/hero'

  constructor(
    private http: HttpClient
  ) { }

  getAll(){
    
    return this.http.get<any>(`${this.apiUrl}/?size=${this.limit}&page=${this.page}`);
  } 

  getHeroById(id: number){
    console.log(`${this.apiUrlHero}?id=${id}`);
    
    return this.http.get<any>(`${this.apiUrlHero}?id=${id}`);
  } 


  updateLimit(limit: number){
    console.log("ok",limit);
    
    this.limit = limit
    this.myLimit.next(this.limit)
  }

}
