import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

import { Project } from './project';
import { projects } from './projects';

@Injectable()
export class ProjectRepository {

  private readonly projects = new Map<string, Project>();

  private readonly projects$ = new ReplaySubject<Array<Project>>(1);

  constructor() {
    this.initProjects();
  }

  getAll(): Observable<Array<Project>> {
    return this.projects$.asObservable();
  }

  addProject(request: Project): void {
    if (!request) {
      return;
    }

    const id = `#${this.createId() + 1}`,
      project = new Project(
        id,
        request.name,
        request.leader,
        request.startDate,
        request.endDate,
        request.progress);

    this.projects.set(project.id, project);
    this.emitProjects();
  }

  private initProjects(): void {
    for (let project of projects) {
      this.projects.set(project.id, project);
    }
    this.emitProjects();
  }

  private emitProjects(): void {
    const projects = Array.from(this.projects as any, (v: Project) => Object.values(v)[1]);
    this.projects$.next(projects);
  }

  private createId(): number {
    const projectIds = Array.from(this.projects as any, (v: Project) => Object.values(v)[0]);

    let idNumbers = [];

    for (let i = 0; i < projectIds.length; i++) {
      let idNumber = projectIds[i].replace(/^\D+/g, '');
      idNumbers.push(idNumber);
    }

    return Math.max.apply(Math, idNumbers);
  }
}
