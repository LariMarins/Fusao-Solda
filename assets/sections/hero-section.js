import { LitElement, html, css } from "lit";
import { section } from "../styles/sectioon-style";

export class HeroSection extends LitElement {
  static styles = [
    section,
    css`
      section {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row-reverse;
        padding:0 2rem ;
      }

      app-logo {
        width: 120px;
        height: 120px;
        padding-left:2rem;
        mix-blend-mode: color-burn;
      }

      app-titulo {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 3rem;
        font-weight:bold;
      }
    `,
  ];

  render() {
    return html`
      <section>
        <app-logo></app-logo>
        <app-titulo>
          <h1>FUSÃO SOLDAS</h1>
        </app-titulo>
      </section>
      <app-quadro>
        <img src="slider.jpg" />
      </app-quadro>
      <app-paragrafo>Faça seu orçamento !</app-paragrafo>
      <app-quadrado></app-quadrado>
    `;
  }
}
customElements.define("hero-section", HeroSection);
