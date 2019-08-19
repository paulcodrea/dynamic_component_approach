import { Component, OnInit, ViewChild, ComponentFactoryResolver, ComponentRef, ViewContainerRef } from '@angular/core';
import { DisplayChildComponent } from '../display-child/display-child.component';
import { SelectChildComponent } from '../select-child/select-child.component';
import { RenderHostDirective } from '../directives/render-host.directive';

const components = {
  'display': DisplayChildComponent,
  'select': SelectChildComponent
}

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  @ViewChild(RenderHostDirective, {static: false}) renderHost: RenderHostDirective;

  public selectedItem;
  private _displayComponent: ComponentRef<DisplayChildComponent>;
  private _selectComponent: ComponentRef<SelectChildComponent>;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
  }

  loadComponent(componentName) {
    const component = components[componentName];
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    const viewContainerRef = this.renderHost.viewContainerRef;
    const componentRef: ComponentRef<any> = viewContainerRef.createComponent(componentFactory);

    if (componentRef.instance instanceof SelectChildComponent) {
      this._selectComponent && this._selectComponent.destroy();
      this._selectComponent = componentRef;

      (<SelectChildComponent>componentRef.instance).itemSelected.subscribe(
        value => {
          if (this._displayComponent){
            this._displayComponent.instance.selectedItem = value;
          }
        }
      )
    }
  }
}
