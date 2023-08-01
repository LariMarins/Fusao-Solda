import { LitElement, html, css } from "lit";
import { section } from "../styles/sectioon-style";

export class HeroSection extends LitElement {
  static styles = [
    section,
    css`
      section {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row-reverse;
      }
      img {
        width:100svw;
        height:100svh;
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
          width: 190px;
          height: 190px;
        }

        app-quadro {
          width: 580px;
          height: 400px;
        }

        app-paragrafo{
          font-size:3rem;
        }

        app-titulo{
          font-size:5.5rem;
        }
      }
      @media (min-width: 1024px) {
        app-paragrafo {
          display: none;
        }

        app-logo {
          width: 220px;
          height: 220px;
        }

        app-quadro{
          width:750px;
          height:700px;
        }
        
        app-titulo{
          font-size: 4rem;
        }
       
        app-quadrado{
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
          <h1>FUSÃO <br>SOLDAS</h1>
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
