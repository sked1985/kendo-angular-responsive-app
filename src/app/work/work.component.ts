import { Component, OnInit } from '@angular/core';
import { products } from './products';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
  selectedTab = 0;
  gridData: any[] = products;
  constructor() { }

  ngOnInit(): void {
  }

  onTabSelect(event) {
    this.selectedTab = event.index;
  }

}
