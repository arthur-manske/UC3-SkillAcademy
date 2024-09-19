function hashFunction(data: string): string {
	return data;
}

export enum UserType {
	Student    = 0,
	Instructor = 1
};

export class User {
	private password:  string;

	private createdAt: Date;
	private editedAt:  Date;

	public constructor(
		private id:          number,
		private name:        string,
		private email:       string,
		password:            string,
		private description: string,
		private gender:      string,
		private premium:     Date | null,
		private userType:    UserType
	) {
		this.password  = hashFunction(password);

		this.createdAt = new Date();
		this.editedAt  = new Date();
	}

	public getId():          number      { return this.id;          }
	public getName():        string      { return this.name;        }
	public getEmail():       string      { return this.email;       }
	public getPassword():    string      { return this.password;    }
	public getDescription(): string      { return this.description; }
	public getGender():      string      { return this.gender;      }
	public getPremium():     Date | null { return this.premium;     }
	public getUserType():    number      { return this.userType;    }

	public wasCreatedAt(): Date { return this.createdAt; }
	public wasEditedAt():  Date { return this.editedAt;  }

	public edit(newName: string, newDescription: string): void {
		this.name        = newName;	
		this.description = newDescription;
		this.editedAt    = new Date();
	}

	public changeEmail(newEmail: string): void {
		this.email    = newEmail;
		this.editedAt = new Date();
	}

	public changeGender(newGender: string): void {
		this.gender   = newGender;
		this.editedAt = new Date();
	}

	public changePassword(newPassword: string): void {
		this.password = hashFunction(newPassword);
	}

	public addPremium(time: Date): void {
		if (this.premium) {
			this.premium += time;
		} else {
			this.premium =  time;
		}
	}
};
