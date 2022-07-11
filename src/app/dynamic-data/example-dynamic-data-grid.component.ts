import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { GuiCellView, GuiColumn, GuiDataType } from '@generic-ui/ngx-grid';

import { Project } from './data/project';
import { CreateProjectRequest } from './data/create-project.request';
import { ProjectRepository } from './data/project.repository';


@Component({
  selector: 'gw-example-dynamic-data-grid',
  templateUrl: `./example-dynamic-data-grid.component.html`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExampleDynamicDataGridComponent implements OnInit {

  columns: Array<GuiColumn> = [{
    header: 'Project Name',
    field: 'name'
  }, {
    header: 'Leader',
    field: 'leader'
  }, {
    header: 'Start Date',
    field: 'startDate',
    type: GuiDataType.DATE
  }, {
    header: 'End Date',
    field: 'endDate',
    type: GuiDataType.DATE
  }, {
    header: 'Progress',
    field: 'progress',
    type: GuiDataType.NUMBER,
    view: GuiCellView.PERCENTAGE_BAR
  }];

  source: Array<any> = [];

  createProjectForm: FormGroup;

  constructor(private projectRepository: ProjectRepository,
              private formBuilder: FormBuilder) {
    this.createProjectForm = this.formBuilder.group({
      'name': ['', [Validators.required]],
      'leader': ['', [Validators.required]],
      'startDate': ['', [Validators.required]],
      'endDate': ['', [Validators.required]],
      'progress': ['', [Validators.required, Validators.min(0), Validators.max(100)]]
    });
  }

  ngOnInit() {
    this.projectRepository
        .getAll()
        .subscribe((projects: Array<Project>) => {
          this.source = projects;
        });
  }

  createProject(): void {
    let request = new CreateProjectRequest(this.createProjectForm.value);

    this.projectRepository.addProject(request.getProject());

    this.createProjectForm.reset();
  }
}
