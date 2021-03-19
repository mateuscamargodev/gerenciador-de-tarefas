class TarefasView {
    constructor(tarefas) {
        this.tarefas = tarefas;
        this._filtro = document.querySelector('#filtro-tarefas');
    }
    criaTabela() {
        const tabela = document.querySelector('#tabela-tarefas');
        tabela.innerHTML = `
            <tr>
                <th>Tarefa</th>
                <th>Início</th>
                <th></th>
            </tr>
        `;
        var contador = 0;
        console.log(this.tarefas);
        this.tarefas.map(tarefa => {
            let util = new DataUtil();
            let dtIni = new Date(parseInt(tarefa.inicio.toString()));
            let dtFim = new Date(parseInt(tarefa.termino.toString()));
            /*var statusTexto = '';
            if (tarefa.status == false) {

                statusTexto = Status.statusNaoFeito;
            }
            if (tarefa.status == true) {
                
                statusTexto = Status.statusFeito;
            }
            */
            if (tarefa.status) {
                tabela.innerHTML += `
                <tr class="linhaTarefa">
                    <td class="linhaNome">${tarefa.nome}</td>
                    <td>${util.formatDate(dtIni)}</td>
                    <td class="linhaDeleta">
                
                    <button class="status-feito" onclick="mudarStatus(${contador})">
                        <span class="glyphicon glyphicon-check"></span>
                    </button>

                    <button class="deletar-tarefa" onclick="deletar(${contador})">
                        <span class="glyphicon glyphicon-trash"></span>
                    </button>
                    </td>
                </tr>
            `;
            }
            else {
                tabela.innerHTML += `
            <tr class="linhaTarefa">
                <td class="linhaNome">${tarefa.nome}</td>
                <td>${util.formatDate(dtIni)}</td>
                <td class="linhaDeleta">
                
                    <button class="status-nao-feito" onclick="mudarStatus(${contador})">
                        <span class="glyphicon glyphicon-alert"></span>
                    </button>

                    <button class="deletar-tarefa" onclick="deletar(${contador})">
                        <span class="glyphicon glyphicon-trash"></span>
                    </button>
                </td>
            </tr>
            `;
            }
            contador++;
        });
    }
    filtrar() {
        this._filtro.addEventListener("input", function () {
            console.log(this.value);
            const linhas = document.querySelectorAll('.linhaTarefa');
            for (var i = 0; i < linhas.length; i++) {
                var linha = linhas[i];
                var tdNome = linha.querySelector('.linhaNome');
                var nome = tdNome.textContent;
                const buscaExpressao = new RegExp(this.value, "i");
                if (!buscaExpressao.test(nome)) {
                    linha.classList.add('invisivel');
                }
                else {
                    linha.classList.remove('invisivel');
                }
            }
        });
    }
    completaTabela() {
        /*lógica*/
    }
}
/*enum Status {
    statusFeito = `Feito`,
    statusNaoFeito = `Não feito`
};*/ 
