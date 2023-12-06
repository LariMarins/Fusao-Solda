import { LitElement, html, css } from "lit";
import { section } from "../styles/sectioon-style";

export class MsvSection extends LitElement {
  static styles = [
    section,
    css`
      :host {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 60px;
      }

      article {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 16px;
      }

      app-titulo {
        font-size: 28px;
        text-align: center;
      }

      app-paragrafo {
        padding: 4px 0px 3px 0px;
        font-size: 14px;
        text-align: left;
      }

      
      aside {
        width: 76px;
        flex-direction: center;
        align-items: row-reverse;
      }
      .msv {
        font-size: 16px;
      }

      @media (min-width: 768px) {
        app-paragrafo {
          font-size: 1.5rem;
          width: 90%;
        }

        app-titulo {
          font-size: 2.5rem;
        }

        .msv{
          font-size:1.8rem;
        }
      }
    `,
  ];

  render() {
    return html`
      <app-titulo> Missão Visão Valores</app-titulo>
      <article>
        <app-titulo class="msv">Missão</app-titulo>
        <app-paragrafo>
          Realizar serviços de soldas especiais (TIG, MIG/ MAG e Solda
          elétrica), e serviços de corte, dobra e polimentos diversos.
          Garantindo atender as entregas solicitadas com qualidade,
          proporcionando um atendimento personalizado voltado ao suprimento das
          necessidades de bens e serviços metalúrgicos.
        </app-paragrafo>
      </article>

      <article>
        <app-titulo class="msv">Visão</app-titulo>
        <app-paragrafo>
          Tornar-se referência no mercado metalúrgico de soldas especiais,
          adquirindo e mantendo confiabilidade de nossos clientes por meio do
          compromisso com a qualidade de nossos produtos e serviços.,
        </app-paragrafo>
      </article>

      <article>
        <app-titulo class="msv">Valores</app-titulo>
        <app-paragrafo>
          Atendimento especializado, credibilidade e segurança, comprometimento
          nas entregas, transparência e respeito.
        </app-paragrafo>
      </article>
    `;
  }
}
customElements.define("msv-section", MsvSection);
