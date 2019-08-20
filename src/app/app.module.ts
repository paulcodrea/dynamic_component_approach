import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RenderHostDirective } from './directives/render-host.directive';
import { DisplayChildComponent } from './display-child/display-child.component';
import { ParentComponent } from './parent/parent.component';
import { SelectChildComponent } from './select-child/select-child.component';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RenderHostDirective,
    DisplayChildComponent,
    ParentComponent,
    SelectChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DropdownModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    SelectChildComponent,
    DisplayChildComponent
  ], 
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule {

  constructor(private injector: Injector) {
    const selectChild = createCustomElement(SelectChildComponent, {
      injector: this.injector });
    customElements.define('select-child-dynamic', selectChild);

    const displayChild = createCustomElement(DisplayChildComponent, { injector:
    this.injector});
    customElements.define('display-child-dynamic', displayChild);

  }

 }

