export class NegociacoesView {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    //declara o template da view
    template() {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                    <th> DATA </th>
                    <th> QUANTIDADE </th>
                    <th> VALOR </th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        `;
    }
    //renderiza o template no elemento capturado pelo construtor
    update() {
        this.elemento.innerHTML = this.template();
    }
}
