import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'dynamicComponentsApproach';

  ngAfterViewInit() {
    const selectChild = document.querySelector('select-child-dynamic');
    const displayChild = document.querySelector('display-child-dynamic');

    selectChild.addEventListener('selectionEmitter', (event) => {
      console.log(event);
      displayChild['selectedItem'] = event['detail'];
    })
  }
}
