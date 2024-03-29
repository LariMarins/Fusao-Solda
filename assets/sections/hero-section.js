import { LitElement, html, css } from "lit";
import { section } from "../styles/sectioon-style";

export class HeroSection extends LitElement {
  static styles = [
    section,
    css`
      :host {
      }

      section {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row-reverse;
        overflow: hidden;
      }
      img {
        width: 100svw;
      }

      app-logo {
        width: 80px;
        height: 120px;

        mix-blend-mode: color-burn;
      }

      app-titulo {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 3rem;
        font-weight: bold;
      }

      @media (min-width: 768px) {
        app-logo {
          width: 180px;
          height: 180px;
        }

        img {
          height: 100svh;
        }

        app-quadro {
          width: 100%;
          height: 400px;
        }

        app-paragrafo {
          font-size: 3rem;
        }

        app-titulo {
          font-size: 5rem;
        }
        app-quadrado {
          display: none;
        }
      }
      @media (min-width: 1024px) {
        app-paragrafo {
          display: none;
        }

        section{
          height:80%;
        }

        app-logo {
          width: 148px;
          height: 150px;
        }

        app-quadro {
          width: 740px;
          height: 800px;
        }

        app-titulo {
          font-size: 4rem;
        }

        app-quadrado {
          display: none;
        }
      }
    `,
  ];

  render() {
    return html`
      <section>
        <app-logo></app-logo>
        <app-titulo>
          <h1>FUSÃO <br />SOLDAS</h1>
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
