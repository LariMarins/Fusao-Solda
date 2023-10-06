import { LitElement, html, css } from "lit";
import { section } from "../styles/sectioon-style";

export class HistoriaSection extends LitElement {
  static styles = [
    section,
    css`
      :host {
        display: flex;
        padding: 3px 0px 4px 0px;
        justify-content: center;
        align-items: center;
      }

      app-paragrafo {
        display: flex;
        width: 302px;
        height: 450px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: justify;

        font-size: 18px;
      }
    `,
  ];

  render() {
    return html`
      <app-titulo>Sobre nós</app-titulo>
      <app-paragrafo>
        No ano de 2006 nasce um sonho no coração de um trabalhador, que ao longo
        de sua trajetória profissional adquiriu conhecimento, experiência e
        vivência dentro da área de atuação.<br /><br />
        E a partir desse sonho e visão empreendedora, que é a capacidade de ver
        oportunidades onde as pessoas não enxergam, no ano de 2007 o Sr. Ivo
        Lopes diretor e fundador da empresa partiu em busca de seu ideal, que
        era abrir o seu próprio negócio. <br /><br />
        A partir de então, a meta era se consolidar no mercado metalúrgico como
        uma empresa que entrega serviços de qualidade, suporte completo aos
        clientes, ouvindo e transformando o que o cliente deseja em realidade,
        tornando-se uma empresa com diferencial em suas entregas.  Hoje são 16
        anos de muita dedicação e determinação, que permitiu a sustentabilidade
        da empresa até aqui.
      </app-paragrafo>
    `;
  }
}
customElements.define("historia-section", HistoriaSection);
