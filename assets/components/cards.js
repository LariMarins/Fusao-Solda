import { LitElement, html, css } from 'lit';

export class Cards extends LitElement {
    static styles = [
        css`
           *,
      ::slotted(*) {
        margin: 0;
      }
      :host {
        /* layout */
        display: flex;
        width: 160px;
        height: 180px;
        flex-direction: column;
        align-items: flex-start;

        /* estilo */
        border-radius: 8px;
        font-family: var(--fonte-corpo);
        line-height: normal;
        text-align: center;
        box-shadow: 0px 24px 34px 0px rgba(0, 0, 0, 0.25);
      }

      address {
        /* Layout */
        display: flex;
        padding: 10px 12px;
        padding-top: 5px;
        flex-direction: column;
        align-items: flex-start;
        align-self: stretch;

        /* Style */
        border-radius: 0px 0px 8px 8px;
        background: white;
      }

      .titulo,
      ::slotted(h2) {
        font-size: 1rem;
        font-style: normal;
        font-weight: 700;
        letter-spacing: 0.64px;
      }


      figure {
        flex: 1 0 0;
        align-self: stretch;

        display: flex;
        align-items: center;
        overflow: hidden;

        border-radius: 8px 8px 0px 0px;
        border: 4px solid white;
      }

      .imagem,
      ::slotted(img) {
        width: 100%;
        height:100%;
      }
        `
    ];

    render() {
        return html`
         <figure>
        <slot name="produto"
          ><img loading="lazy"
            class="imagem"
            src="teto.jpg"
            alt="Fusão Solda"
          /> </slot>
      </figure>

      <address>
        <slot name="titulo" >
            <h2 class="titulo">Cobertura em policabornato</h2>
        </slot>
      </address>
        `;
    }
}
customElements.define('app-cards', Cards);
