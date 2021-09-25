//Evita instâncias diretas de View
export abstract class View<T> {

    protected elemento: HTMLElement;
    private escapar = false;

    constructor(seletor: string, escapar?: boolean) {
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = elemento as HTMLLIElement
        } else {
            throw Error(`Seletor ${seletor} não existe no DOM`)
        }
        if (escapar) {
            this.escapar = escapar;
        }
    }

    public update(model: T): void {
        let template = this.template(model);
        if (this.escapar) {
            template = template.replace(/<script>[\s\S/*?]<\/script/, '');
        }
        this.elemento.innerHTML = template;
    }

    //Obriga as classes filhas a implementarem o método template e evita erro em run-time
    protected abstract template(model: T): string;

}
