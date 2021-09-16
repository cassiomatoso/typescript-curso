export class NegociacoesView {

    private elemento: HTMLElement;

    constructor(seletor: string) {
        this.elemento = document.querySelector(seletor);
    }

    //declara o template da view
    template(): string {
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
    update(): void {
        this.elemento.innerHTML = this.template();
    }

}