class Filtro {
    constructor() {
        this._filtro = document.querySelector('#filtro-tarefas');
    }
    filtrar(tarefas) {
        this._filtro.addEventListener("input", function () {
            let contador = 0;
            const expressaoBusca = new RegExp(this.value, "i");
            console.log(tarefas.length);
            while (contador < tarefas.length) {
                const tarefaTr = tarefas[contador];
                const linhaNome = tarefaTr.querySelector('.linha-nome');
                console.log(linhaNome);
                if (!expressaoBusca.test(linhaNome.textContent)) {
                    alert('boa!');
                }
                else if (expressaoBusca.test(linhaNome.textContent)) {
                    alert('achou!');
                }
                contador++;
            }
        });
    }
}
