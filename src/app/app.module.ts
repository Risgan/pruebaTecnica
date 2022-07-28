import { HeroComponent } from './website/components/hero/hero.component';
import { NavComponent } from './website/components/nav/nav.component';
import { HomeComponent } from './website/pages/home/home.component';
import { LayoutComponent } from './website/components/layout/layout.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFountComponent } from './website/pages/not-fount/not-fount.component';
import { HttpClientModule } from '@angular/common/http';
import { HerosComponent } from './website/components/heros/heros.component';
import { ImageComponent } from './website/components/image/image.component';
import { DetalleHeroComponent } from './website/components/detalle-hero/detalle-hero.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NotFountComponent,
    HomeComponent,
    NavComponent,
    LayoutComponent,
    HeroComponent,
    HerosComponent,
    ImageComponent,
    DetalleHeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
