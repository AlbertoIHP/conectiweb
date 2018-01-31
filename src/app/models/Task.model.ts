export class Task {
	id: string
	name: string
	description: string
	selectedDate: string
	timeof: string
	course_id: string
	createdBy_id: string

	constructor()
	{
		this.id = ""
		this.name = ""
		this.description = ""
		this.selectedDate = ""
		this.timeof = ""
		this.course_id = ""
		this.createdBy_id = ""
	}
}
