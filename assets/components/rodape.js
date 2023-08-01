import { LitElement, html, css } from "lit";
import { nav } from "../../main";

export class Rodape extends LitElement {
  static styles = [
    css`
            :host {
                display: block;
                font-family: var(--fonte-corpo);
                font-size: .75rem;
                color: white;
            }

            span{
                display: flex;
                justify-content: center;
                align-items: center;
                /* font-style: normal; */

                width:100%;
                height:2rem;
                font-size:.5rem;

                background-color: color-mix(in srgb, black 60%, var(--tom-1));
            }

            footer{
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 2rem;
                background-color: color-mix(in srgb, black 40%, var(--tom-1));
            }

            nav{
               display: flex;
                flex-direction: column;
                gap: 1rem;
                opacity: .9;
                align-items: flex-end;
                
            }

            app-logo{
                width: 4rem;
                height:4rem;
                background-color: white;
            }
            
          a, button {
            color: white;
            text-decoration: none;
            font-family: var(--fonte-titulo);
            font-size: 0.75rem;
      
         cursor: pointer;
           transition: 300ms;
         }
     
            a:hover, button:hover{
              color: var(--tom1)
          }

         a:active, button:active{
         color: var(--cor-primaria)
          }

         button {
         padding: 0;
         border: 0;
          background: transparent;
         }
        `,
  ];

  rolarContato() {
    return nav.rolarPara("#contato");
  }

  rolarProduto() {
    return nav.rolarPara("#produto");
  }

  render() {
    return html` <footer>
        <app-logo></app-logo>

        <nav>
          <a href="/"> Home</a>
          <button @click=${this.rolarContato}>Contato</button>
          <a href="servico">Serviços</a>
          <button @click=${this.rolarProduto}>Produtos</button>
          <a href="sobre-nos">Sobre nós</a>
        </nav>
      </footer>

      <span> © Fusão Soldas-Todos os direitos reservados desde 2023. </span>`;
  }
}
customElements.define("app-rodape", Rodape);
