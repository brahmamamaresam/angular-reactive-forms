import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ReactiveFormComponent } from './reactive-forms/reactive.component';
import { HelloComponent } from './hello.component';
import { FormBuilderComponent } from './formbuilder/fb.component';
import { FormArrayComponent } from './formarray/fa.component';

@NgModule({
  imports: [BrowserModule, FormsModule,ReactiveFormsModule],
  declarations: [AppComponent,HelloComponent,ReactiveFormComponent,FormBuilderComponent,FormArrayComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
