import { Project } from './project';

export class CreateProjectRequest {

	private project: Project;

	constructor(project: Project) {
		this.project = project;
	}

	setProject(project: Project): void {
		this.project = project;
	}

	getProject(): Project {
		return this.project;
	}
}
