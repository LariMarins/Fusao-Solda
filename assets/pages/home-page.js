import { LitElement, html, css } from 'lit';

export class HomePage extends LitElement {

    render() {
        return html`
          <hero-section></hero-section>
          <produto-section id="produto"></produto-section>
          <sobre-nos-section> </sobre-nos-section>
         <contato-section id="contato"></contato-section>
            `;
    }
}
customElements.define('home-page', HomePage);
