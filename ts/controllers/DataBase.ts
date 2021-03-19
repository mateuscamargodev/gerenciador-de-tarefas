
class DataBase {

    incluiTarefa(tarefa: Tarefa){
        
        if(
            tarefa.getNome().length < 1 ||
            tarefa.getInicio() == null ||
            tarefa.getTermino() == null
        ) {
            alert("[ERRO]Faltaram dados obrigatórios!");
            return;
        }

        const lista: TarefaJSON[] = (this.listarTarefas() == null) ? [] : this.listarTarefas();

        const novaTarefa = `
            {
                "nome":"${tarefa.getNome()}",
                "inicio":"${tarefa.getInicio()}",
                "termino":"${tarefa.getTermino()}",
                "status":"${tarefa.getStatus()}",
                "botaoDeletar": "${tarefa.getBotaoDeletar()}"
            }
        `;

        lista.push(JSON.parse(novaTarefa));

        localStorage.setItem("tarefas", JSON.stringify(lista));
    }

    listarTarefas(): TarefaJSON[]{
        if(localStorage.getItem('tarefas') == null){
            return [];
        }
        const tarefasJSON: TarefaJSON[] = JSON.parse(localStorage.getItem("tarefas"));
        
        return tarefasJSON;
    }

    deletaTarefas(){
        localStorage.removeItem("tarefas");
    }

    deletarTarefa(id: number){

        let tarefas = this.listarTarefas();

        tarefas.splice(id, 1);

        localStorage.setItem("tarefas", JSON.stringify(tarefas));
    }

    mudarStatus(id: number){

        let tarefas = this.listarTarefas();

        tarefas[id].status = (tarefas[id].status) ? false : true;

        localStorage.setItem("tarefas", JSON.stringify(tarefas));
    }
}