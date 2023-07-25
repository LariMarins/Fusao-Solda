import { LitElement, html, css } from "lit";
import { section } from "../styles/sectioon-style";

export class ServicoSection extends LitElement {
  static styles = [
    section,
    css`
      :host {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 0;
      }
      article {
        flex-direction: column;
        justify-content: space-around;
        align-items: flex-start;
        gap: 32px;
        padding: 36px 36px;
      }

      aside {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-end;
        gap: 8px;
      }

      app-paragrafo {
        font-size: 1.25rem;
        text-align: left;
        letter-spacing: 0.32px;
      }
      app-quadrado {
        width: 359px;
        height: 32px;
      }
    `,
  ];

  render() {
    return html`
      <article>
        <app-titulo>Serviço</app-titulo>

        <aside>
          <app-paragrafo
            >Trabalhamos com corte, dobra e soldas em aço inox, aço carbono e
            alumínio. Também conhecimentos nas soldas especiais Mig e Tig. E
            polimentos em aço inox.
          </app-paragrafo>
          <app-botao> <a href="serviços"> Saiba mais</a></app-botao>
        </aside>
      </article>
      <app-paragrafo>Conheça nossos produtos. </app-paragrafo>
      <app-quadrado></app-quadrado>

    `;
  }
}
customElements.define("serviço-section", ServicoSection);
