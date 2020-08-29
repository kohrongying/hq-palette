import { LitElement, html, css, property } from 'lit-element';

class Cards extends LitElement {
  constructor() {
    super();
    this.color = '#FF891C';
  }

  @property({ type: String }) color = '';
  static get properties() {
    return {
      color: { type: String },
    };
  }

  static styles = css`
    section#cards {
      padding: 60px 20px;
      background-color: lightgrey;
    }

    .content {
      max-width: 960px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 20px;
      text-align: center;
    }

    .card {
      background-color: #52283b;
      border-radius: 10px;
      padding: 20px;
      color: white;
    }
  `;

  render() {
    return html`
      <section id="cards">
        <div class="content">
          ${new Array(3).fill(0).map(
            () => html`
              <div class="card" style="background-color: ${this.color}">
                <p>
                  Aute occaecat adipisicing sunt do veniam quis fugiat amet
                  minim pariatur aliquip adipisicing. Adipisicing ullamco ex est
                  qui ex non incididunt veniam cillum ipsum elit proident elit.
                </p>
              </div>
            `
          )}
        </div>
      </section>
    `;
  }
}

customElements.define('cards-component', Cards);
