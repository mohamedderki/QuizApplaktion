import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-dreiwahlmenu',
  templateUrl: './dreiwahlmenu.component.html',
  styleUrls: ['./dreiwahlmenu.component.css']
})
export class DreiwahlmenuComponent implements OnInit {

  parameters:any=[];
  constructor( private route:ActivatedRoute) { }

  ngOnInit(): void {
     this.route.params.forEach(params => this.parameters.push(params));
  }
}
