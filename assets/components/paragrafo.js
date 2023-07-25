import { LitElement, html, css } from "lit";

export class Pargrafo extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
        color: #000;
        text-align: center;
        font-family: var(--fonte-corpo);
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 400;
        line-height: 100%; /* 24px */
      }
      p{
         margin: 0;
      }
    `,
  ];

  render() {
    return html`
    <p><slot>Parágrafo</slot></p> `;
  }
}
customElements.define("app-paragrafo", Pargrafo);
