export class Sell {
	private soldAt: Date;

	public constructor(
		private id:        number,
		private studentId: number,
		private classId:   number,
		private cost:      number
	) {
		this.soldAt = new Date();
	}
	
	public getId():        number { return this.id;        }
	public getStudentId(): number { return this.studentId; }
	public getClassId():   number { return this.classId;   }
	public getCost():      number { return this.cost;      }

	public wasSoldAt(): Date { return this.soldAt; }
};
