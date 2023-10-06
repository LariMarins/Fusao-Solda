import { LitElement, html, css } from 'lit';

export class SobreNosPage extends LitElement {
    render() {
        return html`
        <historia-section></historia-section>
        `;
    
    }
}
customElements.define('sobre-nos-page', SobreNosPage);
