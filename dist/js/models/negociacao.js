export class Negociacao {
    constructor(
    //publico mas somente para leitura
    data, quantidade, valor) {
        this.data = data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
}
