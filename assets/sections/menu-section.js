import { LitElement, html, css } from "lit";
import { nav } from "../../main";

export class MenuSection extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }

      dialog {
        display: flex;
        width: 100%;
        height: 100%;
        max-width: 100%;
        max-height: 100%;
        padding: 32px;
        box-sizing: border-box;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        flex-shrink: 0;
        border: 0;
        margin: 0;
        opacity:0;
        pointer-events: none;
        transition: opacity 300ms;
        background-color: rgba(0, 0, 0, 80%);
        position: fixed;
        z-index: 110;
      }

      dialog[open] {
        opacity: 1;
        pointer-events: auto;
      }

      nav {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        align-self: flex-end;
        gap: 1.5rem;
      }

      app-logo {
        width: 96px;
        height: 96px;
        background-color: var(--cor-primaria);
      }

      a,
      button {
        /* layout */
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 16px;

        color: var(--cor-primaria);
        font-family: var(--fonte-titulo);
        font-size: 2rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        text-decoration: none;
        cursor: pointer;
        transition: 300ms;
      }

      button {
        padding: 0;
        border: 0;
        background: transparent;
      }

      svg,
      feather-icon {
        display: flex;
        width: 24px;
        fill: var(--cor-primaria);
      }

      a:hover,
      button:hover {
        color: var(--tom-1);
      }

      a:active,
      button:active {
        color: var(--tom-2);
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
    return html`
      <dialog open>
        <app-logo></app-logo>

        <nav>
          <a @click=${nav.fechar} href="/"
            >Home <feather-icon icon="home"></feather-icon
          ></a>
         
          <a  @click=${nav.fechar}  href="servico">
            Serviço <feather-icon icon="tool"></feather-icon
          ></a>
         
          <button @click=${this.rolarProduto}>
            Produtos<feather-icon icon="shopping-bag"></feather-icon>
          </button>
         
          <a @click=${nav.fechar}  href="sobre-nos-page"
            >Sobre nós
            <img src="icone-logo.svg" alt="iconelogo" />
          </a>
         
          <button @click=${this.rolarContato}>
            Contato <feather-icon icon="phone"></feather-icon>
          </button>
         
          <button title="fechar menu" @click=${nav.fechar}>
            <feather-icon icon="x"></feather-icon>
          </button>
        </nav>
      </dialog>
    `;
  }
}
customElements.define("menu-section", MenuSection);
