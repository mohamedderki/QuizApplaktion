import { Component, OnInit,Output } from '@angular/core';
import { Fragen} from '../../Shared/Fragen';
import{GetAllFragen} from '../../Shared/GetFragen.service';
@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {

  @Output() Fragen:Fragen[]=[]
  constructor(private SingleChoisFragen:GetAllFragen)
  {
    this.Fragen = this.SingleChoisFragen.GetAllSingleFragen()
  }

  ngOnInit(): void {
  }

}
