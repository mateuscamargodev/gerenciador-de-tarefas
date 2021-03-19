class DataBase {
    incluiTarefa(tarefa) {
        if (tarefa.getNome().length < 1 ||
            tarefa.getInicio() == null ||
            tarefa.getTermino() == null) {
            alert("[ERRO]Faltaram dados obrigatórios!");
            return;
        }
        const lista = (this.listarTarefas() == null) ? [] : this.listarTarefas();
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
    listarTarefas() {
        if (localStorage.getItem('tarefas') == null) {
            return [];
        }
        const tarefasJSON = JSON.parse(localStorage.getItem("tarefas"));
        return tarefasJSON;
    }
    deletaTarefas() {
        localStorage.removeItem("tarefas");
    }
    deletarTarefa(id) {
        let tarefas = this.listarTarefas();
        tarefas.splice(id, 1);
        localStorage.setItem("tarefas", JSON.stringify(tarefas));
    }
    mudarStatus(id) {
        let tarefas = this.listarTarefas();
        tarefas[id].status = (tarefas[id].status) ? false : true;
        localStorage.setItem("tarefas", JSON.stringify(tarefas));
    }
}
