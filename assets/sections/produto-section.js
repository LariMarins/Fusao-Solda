import { LitElement, html, css } from 'lit';

export class ProdutoSection extends LitElement {
    static styles = [
        css`
            :host {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        padding: 0;
        align-items: center;
      }
      article {
        flex-direction: column;
        justify-content: space-around;
        align-items: flex-start;
        gap: 32px;
        padding: 28px;
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
        width: 100px;
        height: 28px;
      }

      swiper-container {
        width: 100svw;
        height: 180px;
      }
      swiper-slide {
        display: flex;
        justify-content: center;
        align-items: center;
        transition: transform 500ms;  
      }
        `
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

        
      <swiper-container
        effect="coverflow"
        grab-cursor="true"
        centered-slides="true"
        slides-per-view="2"
        coverflow-effect-rotate="50"
        loop="true"
      >
        <swiper-slide>
          <app-cards></app-cards>
        </swiper-slide>
        <swiper-slide>
          <app-cards>
            <img
              slot="produto"
              loading="lazy"
              src="proteçao de mesa.jpg"
              alt="proteçao"
            />
            <h2 slot="titulo">Tela de proteção</h2>
          </app-cards>
        </swiper-slide>
        <swiper-slide>
          <app-cards>
            <img slot="produto" loading="lazy" src="coifas.jpg" alt="coifas" />
            <h2 slot="titulo">Coifas</h2>
          </app-cards>
        </swiper-slide>
        <swiper-slide>
          <app-cards>
            <img slot="produto" loading="lazy" src="dutos.jpg" alt="dutos" />
            <h2 slot="titulo">Dutos e Exaustores</h2>
          </app-cards>
        </swiper-slide>
        <swiper-slide>
          <app-cards>
            <img
              slot="produto"
              loading="lazy"
              src="churrasqueira.jpg"
              alt="churrasqueira"
            />
            <h2 slot="titulo">Grelhas e Churrasqueira</h2>
          </app-cards>
        </swiper-slide>
        <swiper-slide>
          <app-cards
            >.
            <img
              slot="produto"
              loading="lazy"
              src="Pratileiras.jpg"
              alt="prateleiras"
            />
            <h2 slot="titulo">Balcões e Prateleiras</h2>
          </app-cards>
        </swiper-slide>
        <swiper-slide>
          <app-cards>
            <img
              slot="produto"
              loading="lazy"
              src="Bandeijas.jpg"
              alt="bandeijas"
            />
            <h2 slot="titulo">Armários e Bandeijas</h2>
          </app-cards>
        </swiper-slide>
        <swiper-slide>
          <app-cards>
            <img slot="produto" loading="lazy" src="pias.jpg" alt="pias" />
            <h2 slot="titulo">Balcão e Pia</h2>
          </app-cards>
        </swiper-slide>
        <swiper-slide>
          <app-cards>
            <img
              slot="produto"
              loading="lazy"
              src="corrimão.jpg"
              alt="corrimão"
            />
            <h2 slot="titulo">Corrimão</h2>
          </app-cards>
        </swiper-slide>
        <swiper-slide>
          <app-cards>
            <img slot="produto" loading="lazy" src="portão.jpg" alt="portão" />
            <h2 slot="titulo">Portão de acesso</h2>
          </app-cards>
        </swiper-slide>
        <swiper-slide>
          <app-cards>
            <img
              slot="produto"
              loading="lazy"
              src="barras de apoio.jpg"
              alt="barra de apoio"
            />
            <h2 slot="titulo">Barras de apoio</h2>
          </app-cards>
        </swiper-slide>
      </swiper-container>
        `;
    }
}
customElements.define('produto-section', ProdutoSection);
