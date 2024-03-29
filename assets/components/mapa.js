import { LitElement, html, css } from "lit";

export class Mapa extends LitElement {
  static styles = [
    css`
      *,
      ::slotted(*) {
        margin: 0;
      }
      :host {
        /* layout */
        display: flex;
        width: 270px;
        height: 200px;
        flex-direction: column;
        align-items: flex-start;

        /* estilo */
        border-radius: 8px;
        color: #fff;
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
        background: var(--tom-1);
      }

      .titulo,
      ::slotted(h2) {
        font-size: 1rem;
        font-style: normal;
        font-weight: 700;
        letter-spacing: 0.64px;
      }

      .subtitulo,
      ::slotted(h3) {
        font-size: 0.5rem;
        font-style: normal;
        font-weight: 400;
        letter-spacing: 0.32px;
      }

      figure {
        flex: 1 0 0;
        align-self: stretch;

        display: flex;
        align-items: center;
        overflow: hidden;

        border-radius: 8px 8px 0px 0px;
        border: 4px solid var(--tom-1);
      }

      .imagem,
      ::slotted(img) {
        width: 100%;
      }
    `,
  ];

  render() {
    return html`
     <figure>
        <slot name="imagem"
          ><img loading="lazy"
            class="imagem"
            src="mapa.jpg"
            alt="Fusão SOlda"
          /> </slot>
      </figure>

      <address>
        <slot name="titulo" >
            <h2 class="titulo">Rua Francisca da Silveira Queiroz, 176</h2>
        </slot>

        <slot name="subtitulo" >
            <h3 class="subtitulo">Parque Cruzeiro do Sul, São Paulo</h3>
        </slot>
      </address>`;
  }
}
customElements.define("app-mapa", Mapa);
