class TarefaController {
        
    private _inputNome: HTMLInputElement;
    private _inputInicio: HTMLInputElement;
    private _inputTermino: HTMLInputElement;
    
    cadastraTarefa(){

        this._inputNome = <HTMLInputElement>document.querySelector('#nome-tarefa');
        this._inputInicio = <HTMLInputElement>document.querySelector('#inicio-tarefa');
        this._inputTermino = <HTMLInputElement>document.querySelector('#termino-tarefa');

        let dataInicio = new Date(this._inputInicio.value).getTime();
        let dataTermino = new Date(this._inputTermino.value).getTime();
        const tarefa = new Tarefa(this._inputNome.value, dataInicio, dataTermino, false);

        const dataBase: DataBase = new DataBase();
        dataBase.incluiTarefa(tarefa);
    }

    deletarTarefa(id: number) {
        if(id == null) {
            alert("[ERRO] nenhuma tarefa foi selecionada");
            return;
        }

        dataBase.deletarTarefa(id);
    }

    mudarStatus(id: number){
        dataBase.mudarStatus(id);
        window.location.reload(true);
    }
}