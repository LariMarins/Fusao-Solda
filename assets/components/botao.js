import { LitElement, html, css } from "lit";

export class BotãO extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }

      button {
        width: inherit;

        display:inline-flex;
        padding: 5px 24px;
        border:0;
        justify-content: center;
        align-items: center;

        border-radius: 8px;
        background-color: color-mix(in srgb, black 60%, var(--cor-primaria));
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

        /* Tipografia */

        color: #fff;
        text-align: center;
        font-family: var(--fonte-corpo);
        font-size: 1rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        white-space:nowrap;

        transition: all .200ms;
        cursor: pointer;
      }

         button:hover, 
         button:active{
        background-color:  color-mix(in srgb, black 40%, var(--cor-primaria));
        }

        ::slotted(*){
        width:24px;
        height:24px;
        margin: 5px 8px 5px 0px
      }
    `,
  ];

  render() {
    return html` <button> <slot name="icone"></slot><slot>Pressione</slot></button> `;
  }
}
customElements.define("app-botao", BotãO);
