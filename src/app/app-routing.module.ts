import { LayoutComponent } from './website/components/layout/layout.component';
import { NotFountComponent } from './website/pages/not-fount/not-fount.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './website/pages/home/home.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },  
  {
    path: 'home', component: LayoutComponent,
    children:[
      {
        path: '', component:HomeComponent
      },
    ]
  },
  {
    path: '**', component: NotFountComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
