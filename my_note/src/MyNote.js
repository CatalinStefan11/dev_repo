import { LitElement, html, css } from 'lit-element';

export class MyNote extends LitElement {
    static get styles() {
        return css`
          table, td {
              border: 1px solid black;
              text-align:center
          }

          tfoot td {
              font-size: 13px;
              text-align:center
          }
        `;

    }
    static get properties() {
        return {
            title: { type: String },
            description: { type: String },
            date: { type: String },
        };

    }


    constructor() {
        super();
        this.title = 'Default';
        this.description = 'Default';
        this.date = 'Default';
    }

  
    render() {
        return html`

          <table>
              <thead>
                <tr>
                    <td><h4>${this.title}</h4></td>
                </tr>
            </thead>    
            <tbody>    
                 <tr>
                     <td>${this.description}</td>
                </tr>                        
            </tbody>
            <tfoot>
                <tr>
                    <td>${this.date}</td>
                </tr>
            </tfoot>
         </table>
        
          
        `;
    }
}
