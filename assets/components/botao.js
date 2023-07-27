import { LitElement, html, css } from "lit";

export class BotãO extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }

      ::slotted(button),
      ::slotted(a),
      button {
        width: inherit;

        display: flex;
        padding: 5px 24px;
        border: 0;
        justify-content: flex-start;
        align-items: center;

        border-radius: 8px;
        background-color: var(
          --button-background,
          color-mix(in srgb, black 60%, var(--cor-primaria))
        );
        box-shadow: 0px 2px 4px 0px  black;

        /* Tipografia */

        color: var(
          --color,
          color-mix(in srgb, white 80%, var(--tom-1, ))
        );
        text-align: center;
        font-family: var(--fonte-corpo);
        font-size: 1rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        white-space: nowrap;
        text-decoration: none;

        transition: all 0.2ms;
        cursor: pointer;
      }
    `,
  ];

  render() {
    return html`
     <slot>
      <button>pressione</button>
    </slot>`;
  }
}
customElements.define("app-botao", BotãO);
