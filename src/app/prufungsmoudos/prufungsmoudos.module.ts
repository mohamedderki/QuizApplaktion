import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiComponent } from './multi/multi.component';
import { SingleComponent } from './single/single.component';
import { FillComponent } from './fill/fill.component';
import { SliderComponent } from './slider/slider.component';
import { WahlComponent } from './wahl/wahl.component';
import { FormsModule }   from '@angular/forms';
import {prufungRoutingModule}from './prufungsmoudos-routing.module';
import {DreiwahlmenuComponent} from './dreiwahlmenu/dreiwahlmenu.component'


@NgModule({
  declarations: [
    MultiComponent,
    SingleComponent,
    FillComponent,
    SliderComponent,
    WahlComponent,
    DreiwahlmenuComponent
  ],
  imports: [CommonModule,FormsModule,prufungRoutingModule],
  exports:[MultiComponent,FillComponent,SingleComponent,WahlComponent]
})
export class PrufungsmoudosModule { }
