import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuiGridModule } from '@generic-ui/ngx-grid';
import { FabricModule } from '@generic-ui/fabric';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { ExampleDynamicDataGridComponent } from './example-dynamic-data-grid.component';
import { ProjectRepository } from './data/project.repository';

@NgModule({
  imports: [
    CommonModule,
    GuiGridModule,
    FabricModule,
    FormsModule,
    ReactiveFormsModule,
    MatSliderModule
  ],
  declarations: [
    ExampleDynamicDataGridComponent
  ],
  exports: [
    ExampleDynamicDataGridComponent
  ],
  providers: [
    ProjectRepository
  ]
})
export class ExampleDynamicDataGridModule {

}
