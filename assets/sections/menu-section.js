import { LitElement, html, css } from "lit";

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

        opacity: 0;
        pointer-events: none;
        transition: opacity 300ms;
        background-color: rgba(0, 0, 0, 40%);
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
        background-color: white;
      }

      a,
      button {
        /* layout */
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 16px;

        color: #fff;
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
        fill: currentColor;
      }

      a:hover,
        button:hover {
          color: var(--tom-1);
        }

        a:active,
        button:active {
          color: var(--cor-primaria);
        }
    `,
  ];

  render() {
    return html`
      <app-logo></app-logo>
      <nav>
          <a href="/"
            >Home <feather-icon icon="home"></feather-icon
          ></a>
      
          <a href="serviço"
            >Serviços <feather-icon icon="scissors"></feather-icon
          ></a>
         
          <button>
          Produtos <feather-icon icon="shoopping-bag"></feather-icon>
        </button>
        <a  href="sobre-nós"
        >A Barbearia
        <img src="../../public/logo (1).svg" alt="menu">
    </a>
    <button >
      Contato <feather-icon icon="phone"></feather-icon>
    </button>

        <button>
          <feather-icon icon="x"></feather-icon>
        </button>
      </nav>
    `;
  }
}
customElements.define("menu-section", MenuSection);
