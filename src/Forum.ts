export class ForumPost {
	private createdAt: Date;
	private editedAt:  Date;

	public constructor(
		private id: number,
		private authorId: number,
		private title: string,
		private contents: string
	) {
		this.createdAt = new Date();
		this.editedAt  = new Date();
	}

	public getId():       number { return this.id;       }
	public getAuthorId(): number { return this.authorId; }
	public getTitle():    string { return this.title;    }
	public getContents(): string { return this.contents; }
	
	public wasCreatedAt(): Date { return this.createdAt; }
	public wasEditedAt():  Date { return this.editedAt;  }

	public edit(newTitle: string, newContents: string): void {
		this.title    = newTitle;
		this.contents = newContents;

		this.editedAt = new Date();
	}
};
