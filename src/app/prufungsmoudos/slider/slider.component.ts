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
  value:string | undefined="";
  alert:boolean=false;
  IdN:any=[];
  MyID:number=0;
  ElementAnzahl:number=2;
  Falsh:number=0;
  richtig:number=0;
  currentPage = 0;
  ricgtigOderFalsch:boolean=false;
  falscheFragen:number=8;
  IsAcktiv:boolean=false;
  IsAcktivtwo:boolean=true;
  DeineAntwort :any=[]

  @Input() fragen:Fragen[]=[];


  constructor
  (
    public timer:timer,
    private route: ActivatedRoute
  )
    {

    }


  ngOnInit() :void
    {
      this.route.params.forEach( params => this.IdN.push(params));
    }



 add(f:NgForm)
 {
    let data = f.value;
    this.value=data.anser;
 }

  validition(frage:any, x:Antwort,FragenIndex:number,AntwortIndex:number)
  {


    if (this.IdN[0].mal === "teil")
    {
      console.log(this.IdN[0].mal)
      if((this.IdN[0].wahl === '1')||(this.IdN[0].wahl === '2')){

            if(x.richtig === true) {
              this.fragen[FragenIndex].Antwort[AntwortIndex].this=true;
              ++this.richtig;
              this.ricgtigOderFalsch=false;

            }else if (x.richtig === false){
              this.fragen[FragenIndex].Antwort[AntwortIndex].this=true;
              ++this.Falsh;
              this.alert=true;
              this.ricgtigOderFalsch=true;
            }

            }
            else if(this.IdN[0].wahl==='f1')
            {
              this.add(frage);
                  if (x.Antwort === this.value ) {
                  this.fragen[FragenIndex].Antwort[AntwortIndex].this=true;
                  ++this.richtig;
                  this.ricgtigOderFalsch=false;
                }else if (x.Antwort !== this.value){
                  this.fragen[FragenIndex].Antwort[AntwortIndex].this=true;
                  ++this.Falsh;
                  this.alert=true;
                  this.ricgtigOderFalsch=true;
              }
            }

    }
    else if (this.IdN[0].mal === "voll")
    {

      if((this.IdN[0].wahl === '1')||(this.IdN[0].wahl === '2')){
        if(x.richtig === true) {
          this.fragen[FragenIndex].Antwort[AntwortIndex].this=true;
          ++this.richtig;
          this.ricgtigOderFalsch=false;
        }else if (x.richtig === false){
          this.fragen[FragenIndex].Antwort[AntwortIndex].this=true;
          ++this.Falsh;
          this.ricgtigOderFalsch=true;
          if(this.Falsh === 8){
            this.IsAcktivtwo = false;

           }
        }
        }
        else if(this.IdN[0].wahl==='f1')
        {
          this.add(frage);
              if (x.Antwort === this.value ) {
              this.fragen[FragenIndex].Antwort[AntwortIndex].this=true;
              ++this.richtig;
              this.ricgtigOderFalsch=false;
            }else if (x.Antwort !== this.value){
              this.fragen[FragenIndex].Antwort[AntwortIndex].this=true;
              ++this.Falsh;
              this.ricgtigOderFalsch=true;
              if(this.Falsh === 8){
                this.IsAcktivtwo = false;
               }
          }
        }

    }
         for (let i = 0; i < this.fragen[FragenIndex].Antwort.length; i++) {
       const element = this.fragen[FragenIndex].Antwort[i].this;
       if (element === true){
         this.DeineAntwort.push(element);
        }
        if (this.DeineAntwort.length === parseInt(this.IdN[0].wahl.match(/\d+/)[0])){
          let myNextButton = document.getElementById("next");
          myNextButton?.click();
          this.DeineAntwort=[];
        }
      }
      this.DeineAntwort.pop();

 }
  //myBoolean
  myBool(): void
  {
    this.IsAcktiv=true;
    this.timer.resetTimer();
    this.timer.startTimer();
    this.DeineAntwort=[]
  }




}
