import  { NgModule } from '@angular/core';
import  { RouterModule, Routes } from '@angular/router';
import { MultiComponent } from './multi/multi.component';
import { SingleComponent } from './single/single.component';


const routes: Routes = [
  {path:"", redirectTo: "Login", pathMatch: "full"},
  {path: "Multi", component: MultiComponent},
  {path: "Single", component: SingleComponent},
  {path: "fill", component: SingleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class lernmoudosRoutingModule { }
