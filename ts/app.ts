const dataBase = new DataBase();
const tarefasView: TarefasView = new TarefasView(dataBase.listarTarefas());        
const tarefaController = new TarefaController();
tarefasView.criaTabela();

const tabela = document.querySelector("#tabela-tarefas");
const tabelaLinhas = document.querySelector('tr');

const inputFiltro: HTMLInputElement = <HTMLInputElement>document.querySelector('#filtro-tarefas');
inputFiltro.addEventListener("input", function(){
    tarefasView.filtrar();
})

function mudarStatus(id: number){
    tarefaController.mudarStatus(id);
}

function deletar(id: number) {
    tarefaController.deletarTarefa(id);
    setTimeout(function(){
        window.location.reload(true);
    }, 1000);
}