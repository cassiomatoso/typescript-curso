export class Negociacao {

    constructor(
        //publico mas somente para leitura
        private readonly _data: Date,
        public readonly quantidade: number,
        public readonly valor: number
    ) { }

    get volume(): Number {
        return this.quantidade * this.valor;
    }

    get data(): Date {
        const data = new Date(this._data.getTime());
        return this._data;
    }

}
