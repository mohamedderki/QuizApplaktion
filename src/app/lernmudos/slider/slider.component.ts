import { Component, OnInit,Input, Output} from '@angular/core';
import { Fragen,Antwort} from '../../Shared/Fragen';
import {timer} from '../../Shared/Timer'
import { ActivatedRoute } from '@angular/router';
import {NgForm} from '@angular/forms';



@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
 export class SliderComponent implements OnInit {

  IdN:Array<any>=[];
  MyID:number=0;
  currentPage = 0;
  IsAcktiv:boolean=false;
  IsAcktivtwo:boolean=true;
  @Input() fragen:Fragen[]=[];


  constructor(
    private route: ActivatedRoute){
    }


  ngOnInit() :void  {
  }

  //myBoolean
  myBool(): void
  {
    this.IsAcktiv=true;
  }

}

