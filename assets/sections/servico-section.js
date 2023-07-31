import { LitElement, html, css } from "lit";

export class ServicoPage extends LitElement {
  static styles = [
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
    `,
  ];

  render() {
    return html`
      <app-titulo>Serviços</app-titulo>

      <article>
        <app-paragrafo>
          <span>Serviços de corte:</span> Remoção ou divisão de materiais para
          criar formas desejadas ou ajustar tamanhos.
        </app-paragrafo>
        <app-quadro>
          <img loading="lazy" src="card 1.jpg" alt="card1" />
        </app-quadro>
      </article>

      <article>
        <app-paragrafo>
          <span>Serviço de dobra: </span>Transformar materiais planos em formas
          tridimensionais. É amplamente utilizado na indústria para criar peças
          com formatos específicos e precisos.
        </app-paragrafo>
        <app-quadro>
          <img loading="lazy" src="card 2.jpg" alt="card2" />
        </app-quadro>
      </article>

      <article>
        <app-paragrafo>
          <span>Serviço de solda: </span>A solda é uma técnica de união de
          materiais por fusão, amplamente usada na indústria para garantir
          resistência e integridade.
        </app-paragrafo>
        <app-quadro>
          <img loading="lazy" src="card-3.jpg" alt="card2" />
        </app-quadro>
      </article>
    `;
  }
}
customElements.define("servico-page", ServicoPage);
