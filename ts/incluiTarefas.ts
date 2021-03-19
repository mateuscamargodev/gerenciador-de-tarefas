const botaoEnviar = document.querySelector('#botao-enviar');
const controller = new TarefaController();

botaoEnviar.addEventListener("click", function(event: Event){
    
    event.preventDefault();

    controller.cadastraTarefa();

    const nomeTarefa: HTMLInputElement = <HTMLInputElement>document.querySelector('#nome-tarefa');
    const inicioTarefa: HTMLInputElement = <HTMLInputElement>document.querySelector('#inicio-tarefa');
    const terminoTarefa: HTMLInputElement = <HTMLInputElement>document.querySelector('#termino-tarefa');

    nomeTarefa.value = "";
    inicioTarefa.value = "";
    terminoTarefa.value = "";

    window.location.href = "index.html";
    
    console.log(localStorage.getItem("tarefas"));
})