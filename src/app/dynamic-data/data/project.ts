export class Project {

	constructor(readonly id: string,
				readonly name: string,
				readonly leader: string,
				readonly startDate: Date,
				readonly endDate: Date,
				readonly progress: number) {
	}

}
