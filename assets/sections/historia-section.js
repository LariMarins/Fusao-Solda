import { LitElement, html, css } from 'lit';
import { section } from '../styles/sectioon-style';

export class HistoriaSection extends LitElement {
    static styles = [
        section,
        css`
            :host {
                display: block;
            }
        `
    ];

    render() {
        return html`
         <app-titulo>Sobre nós</app-titulo>
         <app-paragrafo></app-paragrafo>
        `;
    }
}
customElements.define('historia-section', HistoriaSection);
