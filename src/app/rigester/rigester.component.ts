import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
@Component({
  selector: 'app-rigester',
  templateUrl: './rigester.component.html',
  styleUrls: ['./rigester.component.css']
})
export class RigesterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  add(f:NgForm)
  {
     let data = f.value;
     window.localStorage.setItem('user', JSON.stringify(data))
  }
}
