
export let totalUser = Array<User>

export class User {
    public constructor(
        private id: number,
        private name: string,
        private email: string,
        private password: string,
        private create_in: Date,
        private description_perfil: string,
        private gender: string,
        private premium: Date | null,
        private type: 0 | 1
    ) {}

    // #region Metodos para atualizar
    public set Name(name: string)                            { this.name = name }
    public set Email(email: string)                          { this.email = email }
    public set Password(password: string)                    { this.password = password }
    public set Create_In(create_in: Date)                    { this.create_in = create_in }
    public set descriptionPerfil(description_perfil: string) { this.description_perfil = description_perfil }
    public set Gender(gender: string)                        { this.gender = gender }
    public set Premium(premium: Date | null)                 { this.premium = premium }
    public set Type(type: 0 | 1)                             { this.type = type }
    // #endregion Metodos para atualizar

    // #region Metodos para visualizar
    public get Id():number                 { return this.id }
    public get Name():string               { return this.name }
    public get Email():string              { return this.email }
    public get Password():string           { return this.password }
    public get Create_In():Date            { return this.create_in }
    public get descriptionPerfil():string  { return this.description_perfil }
    public get Gender():string             { return this.gender }
    public get Premium():Date | null       { return this.premium }
    public get Type():number               { return this.type }
    // #endregion Metodos para visualizar

    //Checar se é premium
    public checkPremium():string | number {
        return (this.premium == null) ? "No" : `${this.premium.toLocaleDateString()}`
    }

    //Checar se é instrutor
    public checkInstrutor():string {
        return (this.type == 0) ? 'Studdent' : 'Instructor'
    }

    //Formatação
    public toString():string { return `\
    User ID: ${this.id}
    Name: ${this.name}
    Email: ${this.email}
    Description: ${this.description_perfil}
    Gender: ${this.gender}
    Create in: ${this.create_in}
    Premium: ${this.checkPremium()}
    Type: ${this.checkInstrutor()}
    ` }

}

export class Aulas {
    constructor(
        private id: number,
        private instrutor_id: User,
        private titulo: string,
        private descricao: string,
        private data: Date,
        private preco: number,
        private arquivos_extras: JSON
    ) {}

    // #region Metodos para atualizar
    set InstrutorId(newInstrutorId: User)       { this.instrutor_id = newInstrutorId }
    set Titulo(newTitulo: string)               { this.titulo = newTitulo }
    set Descricao(newDescricao: string)         { this.descricao = newDescricao }
    set Data(newData: Date)                     { this.data = newData }
    set Preco(newPreco: number)                 { this.preco = newPreco }
    set ArquivosExtras(novosArquivos: JSON)     { this.arquivos_extras = novosArquivos }
    // #endregion Metodos para atualizar

    // #region Metodos para visualizar
    get Id(): number                  { return this.id }
    get InstrutorId(): User           { return this.instrutor_id }
    get Titulo(): string              { return this.titulo }
    get Descricao(): string           { return this.descricao }
    get Data(): Date                  { return this.data }
    get Preco(): number               { return this.preco }
    get ArquivosExtras(): JSON        { return this.arquivos_extras }
    // #endregion Metodos para visualizar

    //Formatar
    public toString():string { return `\
    User ID: ${this.id}
    Titulo: ${this.titulo}
    Professor ID: ${this.instrutor_id.Id}
    Description: ${this.descricao}
    Preco ${this.preco}
    Data ${this.Data.toLocaleString()}
    Arquvios Extras: ${JSON.stringify} 
    ` } //Modificar leitura arquivos extras :)

}