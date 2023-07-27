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
        gap: 20px;
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
      }

      app-quadro{
        width: 250px;
        height: 250px;
      }

      swiper-container{
        width:100%;
        height:100%;
      }
      img{
        width:100%;
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

      <app-paragrafo> Nossos principais clientes</app-paragrafo>

      <app-quadro>
        <swiper-container loop="true" autoplay="true">
          <swiper-slide>
            <img loading="lazy" src="../../public/sesc.jpg" alt="sesc logo 1" />
          </swiper-slide>
         
          <swiper-slide>
            <img loading="lazy" src="../../public/usp.jpg" alt="usp logo 3" />
          </swiper-slide>
          
          <swiper-slide>
            <img loading="lazy" src="../../public/sao judas tadeu.jpg" alt="são judas logo 2" />
          </swiper-slide>
          </swiper-container>
      </app-quadro>

      <app-quadrado></app-quadrado>
    `;
  }
}
customElements.define("sobre-nos-section", SobreNosSection);
