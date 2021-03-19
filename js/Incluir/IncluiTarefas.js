const botaoEnviar = document.querySelector('#botao-enviar');
const controller = new TarefaController();
botaoEnviar.addEventListener("click", function (event) {
    event.preventDefault();
    controller.cadastraTarefa();
    const nomeTarefa = document.querySelector('#nome-tarefa');
    const inicioTarefa = document.querySelector('#inicio-tarefa');
    const terminoTarefa = document.querySelector('#termino-tarefa');
    nomeTarefa.value = "";
    inicioTarefa.value = "";
    terminoTarefa.value = "";
});
