import { Component, OnInit,Output } from '@angular/core';
import { Fragen} from '../../Shared/Fragen';
import{GetAllFragen} from '../../Shared/GetFragen.service';

@Component({
  selector: 'app-fill',
  templateUrl: './fill.component.html',
  styleUrls: ['./fill.component.css']
})
export class FillComponent implements OnInit {

  @Output() Fragen:Fragen[]=[]

  constructor(private FillFragen:GetAllFragen)
  {
    this.Fragen = this.FillFragen.GetAllFillFragen();
  }

  ngOnInit(): void {
  }

}
