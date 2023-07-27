import { LitElement, html, css } from 'lit';

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
            
            a{
                color: white;
                text-decoration: none;
            }
            
        `
    ];

    render() {
        return html`
         <footer>
           
           <app-logo></app-logo>
              
              <nav>
                 <a href=""> Home</a>
                 <a href="">Contatos</a>
                 <a href="serviço">Serviços</a>
                 <a href="a-barbearia">Produtos</a>
                <a href="/">Sobre nós</a>
               </nav>
           </footer>
           
           <span>
           © Fusão Soldas-Todos os direitos reservados desde 2023.
           </span>`;
    }
}
customElements.define('app-rodape', Rodape);
