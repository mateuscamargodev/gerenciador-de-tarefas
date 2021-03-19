class TarefaController {
    cadastraTarefa() {
        this._inputNome = document.querySelector('#nome-tarefa');
        this._inputInicio = document.querySelector('#inicio-tarefa');
        this._inputTermino = document.querySelector('#termino-tarefa');
        let dataInicio = new Date(this._inputInicio.value).getTime();
        let dataTermino = new Date(this._inputTermino.value).getTime();
        const tarefa = new Tarefa(this._inputNome.value, dataInicio, dataTermino, false);
        const dataBase = new DataBase();
        dataBase.incluiTarefa(tarefa);
    }
    deletarTarefa(id) {
        if (id == null) {
            alert("[ERRO] nenhuma tarefa foi selecionada");
            return;
        }
        dataBase.deletarTarefa(id);
    }
    mudarStatus(id) {
        dataBase.mudarStatus(id);
        window.location.reload(true);
    }
}
