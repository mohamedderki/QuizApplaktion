import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleComponent } from './single/single.component';
import { MultiComponent } from './multi/multi.component';
import { SliderComponent } from './slider/slider.component';
import { FormsModule }   from '@angular/forms';
import { lernmoudosRoutingModule } from './lernmudos-routing.module';



@NgModule({
  declarations: [
    SingleComponent,
    MultiComponent,
    SliderComponent
  ],
  imports: [CommonModule,FormsModule,lernmoudosRoutingModule],
  exports:[MultiComponent, SingleComponent],
})
export class LernmudosModule { }
