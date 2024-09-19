export class Course {
	public constructor(
		private id:           number,
		private instructorId: number,
		private title:        string,
		private description:  string,
		private date:         Date,
		private cost:         number,
		private extraFiles:   JSON

	) {}

	public getId():           number { return this.id;           }
	public getInstructorId(): number { return this.instructorId; }
	public getTitle():        string { return this.title;        }
	public getDescription():  string { return this.description;  }
	public getDate():         Date   { return this.date;         }
	public getCost():         number { return this.cost;         }
	public getExtraFiles():   JSON   { return this.extraFiles;   }

	public setTitle(title:             string): void { this.title       = title;       }
	public setDescription(description: string): void { this.description = description; }
	public setDate(date:               Date):   void { this.date        = date;        }
	public setCost(cost:               number): void { this.cost        = cost;        }
	public setExtraFiles(extraFiles:   JSON):   void { this.extraFiles  = extraFiles;  }

};
