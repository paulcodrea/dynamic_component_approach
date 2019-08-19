import { Component, OnInit, Input, ChangeDetectorRef, SimpleChange, SimpleChanges } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-display-child',
  templateUrl: './display-child.component.html',
  styleUrls: ['./display-child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DisplayChildComponent implements OnInit {

  @Input() selectedItem;

  constructor(private changeDetector: ChangeDetectorRef) { }

  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChanges: ', JSON.stringify(changes));
    this.changeDetector.markForCheck();
  }

  ngOnInit() {
  }

}
