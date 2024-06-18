import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoFormNgModelComponent } from './component/demo-form-ng-model/demo-form-ng-model.component';
import { ReactiveFormExampleComponent } from './component/reactive-form-example/reactive-form-example.component';
import { ReactiveFormWithBuilderComponent } from './component/reactive-form-with-builder/reactive-form-with-builder.component';
import { FormWithValidationsComponent } from './component/form-with-validations/form-with-validations.component';
import { LifecycleComponentComponent } from './component/lifecycle-component/lifecycle-component.component';
import { ParentComponentComponent } from './component/parent-component/parent-component.component';
import { ChildComponentComponent } from './component/child-component/child-component.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoFormNgModelComponent,
    ReactiveFormExampleComponent,
    ReactiveFormWithBuilderComponent,
    FormWithValidationsComponent,
    LifecycleComponentComponent,
    ParentComponentComponent,
    ChildComponentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
