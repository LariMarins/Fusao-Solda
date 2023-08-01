import { LitElement, html, css } from 'lit';

export class ServicoPage extends LitElement {
   
 

    render() {
        return html`
        <servico-section></servico-section>
        <acos-section></acos-section>
        `;
    }
}
customElements.define('servico-page', ServicoPage);
