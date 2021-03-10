class Tarefa {
    _nome;
    _inicio;
    _termino;

    constructor(nome, inicio, termino) {
        this._nome = nome;
        this._inicio = inicio;
        this._termino = termino; 
    }
}

const tarefa = new Tarefa('comprar pão');

localStorage.setItem("tarefa 1", tarefa._nome);
console.log(localStorage.getItem("tarefa 1"));