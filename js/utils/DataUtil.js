class DataUtil {
    constructor() { }
    formatDate(data) {
        let dia = data.getDate() < 10 ? "0" + data.getDate() : data.getDate();
        let mes = data.getMonth() < 10 ? "0" + data.getMonth() : data.getMonth();
        let hora = data.getHours() < 10 ? "0" + data.getHours() : data.getHours();
        let minutos = data.getMinutes() < 10 ? "0" + data.getMinutes() : data.getMinutes();
        let retorno = dia + "/" + mes + "/" + data.getFullYear() + " " + hora + ":" + minutos;
        return retorno;
    }
}
