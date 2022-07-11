import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExampleDynamicDataGridModule } from './dynamic-data/example-dynamic-data-grid.module';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ExampleDynamicDataGridModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
