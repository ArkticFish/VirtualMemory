import { Component, OnInit } from '@angular/core';
import { PageTable, PT_Row } from '../../models/PageTable'

@Component({
  selector: 'app-page-table',
  templateUrl: './page-table.component.html',
  styleUrls: ['./page-table.component.css']
})
export class PageTableComponent implements OnInit {

  pt: PageTable = new PageTable();

  constructor()
  {
    this.AddMockData();
  }

  ngOnInit() {
  }

  AddMockData()
  {
    this.pt.table.push(new PT_Row("DISK"));
    this.pt.table.push(new PT_Row("001"));
    this.pt.table.push(new PT_Row("002"));
    this.pt.table.push(new PT_Row("003"));
    this.pt.table.push(new PT_Row("004"));
    this.pt.table.push(new PT_Row("005"));
  }

}
