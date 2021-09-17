import { View } from "./view.js";
export class MensagemView extends View {
    //método que declara o template da view
    template(model) {
        return `
            <p class="alert alert-info">${model}</p>
        `;
    }
}
