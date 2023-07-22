import { LitElement, html, css } from 'lit';

export class HeroSection extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

    render() {
        return html`
        
        `;
    }
}
customElements.define('hero-section', HeroSection);
