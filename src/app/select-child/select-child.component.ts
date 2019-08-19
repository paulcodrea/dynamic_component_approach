import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select-child',
  templateUrl: './select-child.component.html',
  styleUrls: ['./select-child.component.scss']
})
export class SelectChildComponent implements OnInit {

  fruitList = ['Banana', 'Orange', 'Apple', 'Mango'];

  @Output() itemSelected = new EventEmitter();

  public selectedIndex;

  emitSelection(item: any, index: number) {
    this.itemSelected.emit(item);
    this.selectedIndex = index;
  }



  constructor() { }

  ngOnInit() { }

  selectItem(item){
    this.itemSelected.emit(item);
  }
}
