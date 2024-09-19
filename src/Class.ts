export class Class {
	private createdAt: Date;
	private editedAt:  Date;

	public constructor(
		private id:           number,
		private instructorId: number,
		private title:        string,
		private description:  string,
		private happensAt:    Date,
		private cost:         number,
		private extraFiles:   string[], 
		private tags:         string[] 
	) {
		this.createdAt = new Date();
		this.editedAt  = new Date();
	}

	public getId():           number   { return this.id;           }
	public getInstructorId(): number   { return this.instructorId; }
	public getTitle():        string   { return this.title;        }
	public getDescription():  string   { return this.description;  }
	public getCost():         number   { return this.cost;         }
	public getExtraFiles():   string[] { return this.extraFiles;   }
	public getTags():         string[] { return this.tags;         }
	
	public wasCreatedAt(): Date { return this.createdAt; }
	public wasEditedAt():  Date { return this.editedAt;  }
	public willHappenAt(): Date { return this.happensAt; }

	public edit(newTitle: string, newDescription: string, newConst: number, newTags: string): void {
		this.title       = newTitle;
		this.description = newDescription;
		this.cost        = newCost;
		this.tags        = newTags;

		this.editedAt    = new Date();
	}

	public attachFile(file: string): void {
		this.extraFiles.push(file);
	}

	public unattachFile(file: string): boolean {
		let index = this.extraFiles.findIndex(filename => filename === file);
		if (index < -1)
			return false;
		
		this.extraFiles.splice(index, 0);
		return true;
	}
};
