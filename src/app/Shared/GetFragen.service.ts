import { Injectable } from '@angular/core';
import { Multi } from './MultiChois.service';
import { Fill } from './FillFragen.service';
import { Single } from './SingleChoice.service';
import { Fragen } from './Fragen';

@Injectable({
  providedIn: 'root'
})
export class GetAllFragen
{
  constructor(
   private Multi:Multi,
   private Singel:Single,
   private Fill : Fill,

  ){}

  GetAllSingleFragen():Fragen[]{
    return this.Singel.SingleFragen;
  }
  GetAllMultiFragen(){
    return this.Multi.MultiChoise;
  }
  GetAllFillFragen(){
    return this.Fill.FillFragen;
  }

}
