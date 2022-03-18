import  { NgModule } from '@angular/core';
import  { RouterModule, Routes } from '@angular/router';
import { DreiwahlmenuComponent } from './dreiwahlmenu/dreiwahlmenu.component';
import { FillComponent } from './fill/fill.component';
import { MultiComponent } from './multi/multi.component';
import { SingleComponent } from './single/single.component';
import { WahlComponent } from './wahl/wahl.component';


const routes: Routes = [
  {path:"", redirectTo: "Login", pathMatch: "full"},
  {path: "Choice/:mal", component: WahlComponent},
  {path: "Choice/:mal/Drierwahlmenu", component: DreiwahlmenuComponent},
  {path: "Choice/:mal/Drierwahlmenu/M/:wahl", component: MultiComponent},
  {path: "Choice/:mal/Drierwahlmenu/F/:wahl", component: FillComponent},
  {path: "Choice/:mal/Drierwahlmenu/S/:wahl", component: SingleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class prufungRoutingModule { }
