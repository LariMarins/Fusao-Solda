import { LitElement, html, css } from 'lit';

export class HomePage extends LitElement {
  
     

    render() {
        return html`
            <hero-section></hero-section>
            <servico-section></servico-section>
            <sobre-nos-section id="produtos"> </sobre-nos-section>
            <contato-section id="contato"></contato-section>
            `;
    }
}
customElements.define('home-page', HomePage);
