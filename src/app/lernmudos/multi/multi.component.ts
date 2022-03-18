import { Component, OnInit,Output } from '@angular/core';
import { Fragen} from '../../Shared/Fragen';
import{GetAllFragen} from '../../Shared/GetFragen.service';

@Component({
  selector: 'app-multi',
  templateUrl: './multi.component.html',
  styleUrls: ['./multi.component.css']
})
export class MultiComponent implements OnInit {

  @Output() Fragen:Fragen[]=[]
  constructor(private MultiChois:GetAllFragen)
  {
    this.Fragen = this.MultiChois.GetAllMultiFragen();
  }
  ngOnInit(): void {
  }

}
