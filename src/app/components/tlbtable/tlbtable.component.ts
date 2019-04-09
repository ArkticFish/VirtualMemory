import { Component, OnInit } from '@angular/core';
import { TLB, TLB_Row } from '../../models/TLB';

@Component({
  selector: 'app-tlbtable',
  templateUrl: './tlbtable.component.html',
  styleUrls: ['./tlbtable.component.css']
})
export class TLBTableComponent implements OnInit {

  tlb: TLB = new TLB();

  constructor()
  {
    this.AddMockData();
  }

  ngOnInit() {
  }

  AddMockData()
  {
    this.tlb.table.push(new TLB_Row("001", "001"));
    this.tlb.table.push(new TLB_Row("002", "002"));
    this.tlb.table.push(new TLB_Row("003", "003"));
    this.tlb.table.push(new TLB_Row("004", "004"));
    this.tlb.table.push(new TLB_Row("005", "005"));
  }

}
