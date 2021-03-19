class Tarefa {
    constructor(nome, inicio, termino, status) {
        this._nome = nome;
        this._inicio = inicio;
        this._termino = termino;
        this._status = status;
    }
    getNome() {
        return this._nome;
    }
    getInicio() {
        return this._inicio;
    }
    getTermino() {
        return this._termino;
    }
    getStatus() {
        return this._status;
    }
    getBotaoDeletar() {
        return this._botaoDeletar;
    }
}
