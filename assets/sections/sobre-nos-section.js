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

      .msv{
         flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 26px;    
      }

      .icon{
        text-decoration: none;
        stroke-width: 2px;
        color: var(--tom-1, #243847);
        text-align:center;
        font-size:20px;
      }
      .
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
        <a class="icon" href="sobrenós">
          <feather-icon icon="award"></feather-icon><br />Missão
        </a>

        <a class="icon" href="sobrenós">
          <feather-icon icon="eye"></feather-icon><br />Visão
        </a>

        <a  class="icon" href="sobrenós">
          <feather-icon icon="user-check"></feather-icon><br />Valores
        </a>
      </aside>
      <app-quadrado></app-quadrado>
    `;
  }
}
customElements.define("sobre-nos-section", SobreNosSection);
