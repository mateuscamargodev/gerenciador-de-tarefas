class Tarefa {
    private _nome: string;
    private _inicio: number;
    private _termino: number;
    private _status: boolean;
    private _botaoDeletar: string;

    constructor(nome: string, inicio: number, termino: number, status: boolean) {
        this._nome = nome;
        this._inicio = inicio;
        this._termino = termino; 
        this._status = status;
    }

    getNome(){
        return this._nome;
    }

    getInicio(){
        return this._inicio;
    }

    getTermino(){
        return this._termino;
    }

    getStatus(){
        return this._status;
    }

    getBotaoDeletar(){
        return  this._botaoDeletar;
    }
}