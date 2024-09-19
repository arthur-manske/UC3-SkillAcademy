export class Evaluation {
	private createdAt: Date;
	private editedAt:  Date;

	public constructor(
		private id:        number,
		private classId:   number,
		private studentId: number,
		private note:      number,
		private contents:  string
	) {
		this.createdAt = new Date();
		this.editedAt  = new Date();
	}

	public getId():        number { return this.id;        }
	public getClassId():   number { return this.classId;   }
	public getStudentId(): number { return this.studentId; }
	public getNote():      number { return this.note;      }
	public getContents():  string { return this.contents;  }

	public wasCreatedAt(): Date { return this.createdAt; }
	public wasEditedAt():  Date { return this.editedAt;  }

	public edit(newNote: number, newContents: string): void {
		this.note     = newNote;
		this.contents = newContents;

		this.editedAt = new Date();
	}
};
