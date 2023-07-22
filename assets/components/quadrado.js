import { LitElement, html, css } from "lit";

export class Quadrado extends LitElement {
  static styles = [
    css`
      :host {
        width: 100%;
        height: 48px;
        background: rgb(147, 248, 255);
        background: linear-gradient(
          180deg,
          rgba(147, 248, 255, 1) 0%,
          rgba(11, 22, 116, 1) 100%
        );
        -webkit-mask: url("../../public/quadrados.svg") no-repeat center;
        mask: url("../../public/quadrados.svg") no-repeat center;

        -webkit-mask-size: 100%;
        mask-size: 100%;

        display: block;
      }
    `,
  ];

  render() {
    return html``;
  }
}
customElements.define("app-quadrado", Quadrado);
