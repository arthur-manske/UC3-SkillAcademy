export class Message {
	private sentAt: Date;

	public constructor(
		private id:          number,
		private senderId:    number,
		private recipientId: number,
		private contents:    string
	) {
		this.sentAt = new Date();
	}

	public getId():          number { return this.id;          }
	public getSenderId():    number { return this.senderId;    }
	public getRecipientId(): number { return this.recipientId; }
	public getContents():    string { return this.contents;    }

	public wasSentAt(): Date { return this.sentAt; }
};
