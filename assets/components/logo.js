import { LitElement, html, css } from "lit";

export class Logo extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
        width: 48px;
        height: 48px;
       
       background-color:var(--tom-1);
        
        -webkit-mask: url("../../logo.svg") no-repeat center;
        mask: url("../../public/logo.svg") no-repeat center;

        -webkit-mask-size: 100%;
        mask-size:100%;
      }
    `,
  ];

 
}
customElements.define("app-logo", Logo);

