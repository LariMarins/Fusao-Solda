import { LitElement, html, css } from "lit";

export class MenuSection extends LitElement {
  static styles = [
    css`
      :host {

     
        height:100%;
      

    
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
        background-color: color-mix(in srgb, black 60%);
        position: fixed;
        z-index: 110;
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
    `,
  ];

  render() {
    return html`
      
        <app-logo></app-logo>

        
          <a href="/"> Home <feather-icon icon="home"></feather-icon></a>
          <a href="serviço">
            Serviço <feather-icon icon="tool"></feather-icon
          ></a>
          <button>
            Produtos<feather-icon icon="shoopping-bag"></feather-icon>
          </button>
        
   
    `;
  }
}
customElements.define("menu-section", MenuSection);
