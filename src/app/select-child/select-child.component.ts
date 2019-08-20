import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SelectItem } from 'primeng/components/common/selectitem';

@Component({
  selector: 'app-select-child',
  templateUrl: './select-child.component.html',
  styleUrls: ['./select-child.component.scss']
})
export class SelectChildComponent implements OnInit {

  fruitList = ['Banana', 'Orange', 'Apple', 'Mango'];

  @Output() itemSelected = new EventEmitter()
  formGroup: FormGroup;
  selectedIndex: number;
  // selectionEmitter: any;

  @Output('itemSelected') selectionEmitter: EventEmitter<any> = new EventEmitter();

  dropdownOptions: SelectItem[] = [];

  selectOption: any;

  public items = [
    {title: 'Item1', description: 'Item1 description.'},
    {title: 'Item2', description: 'Item2 description.'},
    {title: 'Item3', description: 'Item3 description.'},
    {title: 'Item4', description: 'Item4 description.'},
    {title: 'Item5', description: 'Item5 description.'}
  ];


  // emitSelection(item: any, index: number) {
  //   this.itemSelected.emit(item);
  //   this.selectedIndex = index;
  // }

  constructor(private fb: FormBuilder) {}

  ngOnInit() { 
    this.formGroup = this.fb.group({
      title: ['', Validators.required],
      description: ''
    });

    this.items.forEach(
      item => {
        this.dropdownOptions.push(<SelectItem>{label: item.title, value: item});
      }
    );
  }

  emitDropdownSelection(event: any) {
    this.selectionEmitter.emit(event.value);
  }

  emitSelection(item: any, index: number){
    this.selectionEmitter.emit(item);
    this.selectedIndex = index;
  }

  addItem() {
    this.items.push({title: this.formGroup.get('title').value, description:
      this.formGroup.get('description').value});
    }

  selectItem(item){
    this.itemSelected.emit(item);
  }
}
