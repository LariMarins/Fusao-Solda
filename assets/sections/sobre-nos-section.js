import { LitElement, html, css } from "lit";
import { section } from "../styles/sectioon-style";

export class SobreNosSection extends LitElement {
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

      .msv {
        flex-direction: row;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }
    `,
  ];

  render() {
    return html`
      <article>
        <app-titulo>Sobre nós</app-titulo>

        <aside>
          <app-paragrafo
            >Uma empresa que entrega serviços de qualidade, suporte completo aos
            clientes, ouvindo e transformando o que o cliente deseja em
            realidade, tornando-se uma empresa com diferencial em suas
            entregas. 
          </app-paragrafo>
          <app-botao> <a href="sobre-nós"> Saiba mais</a></app-botao>
        </aside>
      </article>

      <aside class="msv">
        <app-paragrafo>
          <feather-icon icon="award"></feather-icon><br />Missão
        </app-paragrafo>

        <app-paragrafo>
          <feather-icon icon="eye"></feather-icon><br />Visão
        </app-paragrafo>
    

      <app-paragrafo>
          <feather-icon icon="user-check"></feather-icon><br />Valores
        </app-paragrafo>

        </aside>
    `;
  }
}
customElements.define("sobre-nos-section", SobreNosSection);
