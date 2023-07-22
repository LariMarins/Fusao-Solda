import { LitElement, html, css } from "lit";
import { section } from "../styles/sectioon-style";

export class ServiçOSection extends LitElement {
  static styles = [
    section,
    css`
      :host {
        display: flex;
        width: 360px;
        height: 640px;
        padding: 0px 10px;
        flex-direction: column;
        align-items: center;
        gap: 49px;
        flex-shrink: 0;
      }
    `,
  ];

  render() {
    return html`
      <app-titulo> Serviços </app-titulo>

      <app-pargrafo>
        Trabalhamos com corte, dobra e soldas em aço inox, aço carbono e
        alumínio. Também conhecimentos nas soldas especiais Mig e Tig. E
        polimentos em aço inox.
      </app-pargrafo>

      <app-botao><a href="Serviços">Saiba mais</a></app-botao>

      <app-pargrafo> Conheça nossos produtos. </app-pargrafo>
    `;
  }
}
customElements.define("servico-section", ServiçOSection);
