import { Injectable } from '@angular/core';
import { Fragen } from './Fragen';
@Injectable({
  providedIn: 'root'
})
export class timer
{
  MultiChoise: Fragen[] = [];
  constructor(){

  }
  timeLeft: number = 30;
  interval: any;
  //Timer bilden

  startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        clearInterval(this.interval);
        let myNextButton = document.getElementById("next");
        myNextButton?.click();
        this.timeLeft= 30;
      }
    },1000)
  }
  resetTimer(){
    clearInterval(this.interval);
    this.timeLeft = 30;
  }
  pauseTimer() {
    clearInterval(this.timeLeft);
  }

}



