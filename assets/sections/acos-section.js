import { LitElement, html, css } from "lit";
import { section } from "../styles/sectioon-style";

export class AcosSection extends LitElement {
  static styles = [
    section,
    css`
      :host {
        display: flex;
        padding-left: 0px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        padding: 2rem;
      }

      article {
        display: flex;
        width: 300px;
        justify-content: space-between;
        align-items: center;
      }

      app-quadro {
        width: 108px;
        height: 117px;
        flex-shrink: 0;
      }
      img {
        width: 100%;
        height: 100%;
      }
      app-paragrafo {
        font-size: 12px;
        text-align: left;
        font-weight: 700;
      }
      span {
        color: color-mix(in srgb, black 20%, var(--tom-1));
        font-size: 16px;
      }
      @media (min-width: 768px) {
        app-titulo {
          font-size: 4rem;
        }

        app-paragrafo {
          font-size: 1.3em;
        }

        :host {
          justify-content: space-around;
          gap: 10px;
        }

        article {
          width: 90%;
        }

        .titulo2 {
          font-size: 1.5rem;
        }

        app-quadro {
          width: 120px;
          height: 140px;
        }
      }

      @media (min-width: 1024px) {
        app-titulo {
          font-size: 4rem;
        }

        app-paragrafo {
          font-size: 1.5em;
        }

        .titulo2 {
          font-size: 1.8rem;
        }

        app-quadro {
          width: 130px;
          height: 150px;
        }
      }
    `,
  ];

  render() {
    return html`
      <article>
        <app-paragrafo>
          <span  class="titulo2">Aço carbono:</span> O aço carbono é uma forma de aço com alta
          resistência e baixo custo. É amplamente utilizado em várias indústrias
          devido à sua versatilidade e capacidade de ajustar sua composição para
          diferentes necessidades.
        </app-paragrafo>
        <app-quadro>
          <img loading="lazy" src="card 4.jpg" alt="card4" />
        </app-quadro>
      </article>

      <article>
        <app-paragrafo>
          <span  class="titulo2">MIG e TIG:</span> São técnicas de soldagem usadas em diversas
          indústrias. MIG usa arame de adição e gás de proteção, enquanto TIG
          usa eletrodo de tungstênio e gás de proteção. Ambas proporcionam
          soldagens de alta qualidade em diferentes materiais.</app-paragrafo
        >
        <app-quadro>
          <img loading="lazy" src="card 5.jpg" alt="card5" />
        </app-quadro>
      </article>

      <article>
        <app-paragrafo>
          <span  class="titulo2">Alumínio:</span> O alumínio é um metal leve, resistente e
          amplamente utilizado em várias indústrias. É valorizado por sua
          resistência à corrosão, baixa densidade e alta condutividade térmica e
          elétrica.
        </app-paragrafo>
        <app-quadro>
          <img loading="lazy" src="card 6.jpg" alt="card6" />
        </app-quadro>
      </article>
    
    `;
  }
}
customElements.define("acos-section", AcosSection);
