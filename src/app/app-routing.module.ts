import  { NgModule } from '@angular/core';
import  { RouterModule, Routes } from '@angular/router';
import  { WahlComponent } from './prufungsmoudos/wahl/wahl.component';
import  { DreiwahlmenuComponent } from './dreiwahlmenu/dreiwahlmenu.component';
import  {WahlmenuComponent} from './Zweiwahlmenu/wahlmenu.component'
import  { RigesterComponent } from '../app/rigester/rigester.component';
import  { LoginComponent } from '../app/login/login.component';
import  { ContactUsComponent } from '../app/contact-us/contact-us.component';
import { LernmudosModule } from './lernmudos/lernmudos.module';
import { PrufungsmoudosModule } from './prufungsmoudos/prufungsmoudos.module';

const routes: Routes = [
  {path:"", redirectTo: "Login", pathMatch: "full"},
  {path: "Login", component: LoginComponent},
  {path: "Rigester", component: RigesterComponent},
  {path: "CountactUS", component: ContactUsComponent},
  {path: "Wahlmenu", component: WahlmenuComponent},
  {path: "Wahl/:id", component: WahlComponent},

  {path: "Drierwahlmenu/lernmoudus", component: DreiwahlmenuComponent},
  {path: "Drierwahlmenu/lernmoudus/Single", component: LernmudosModule},
  {path: "Drierwahlmenu/lernmoudus/Multi", component: LernmudosModule},


  {path: "Drierwahlmenu/prüfüngsmoudus/Choice", component: PrufungsmoudosModule}



  // {path: "Wahl/prüfüngsmoudus/:mal/Drierwahlmenu", component: DreiwahlmenuComponent},
  // { path: 'Wahl/:id/:mal/Drierwahlmenu/slider',component: SliderComponent },
  // {path: "Wahl/:id/:mal/Drierwahlmenu/slider/Multi/:wahl", component: MultiChoisFragenComponent},
  // {path: "Wahl/:id/:mal/Drierwahlmenu/slider/Single/:wahl", component: SingleChoisFragenComponent},
  // {path: "Wahl/:id/:mal/Drierwahlmenu/slider/Fill/:wahl", component: SingleChoisFragenComponent},

  // {path: "fill", component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
