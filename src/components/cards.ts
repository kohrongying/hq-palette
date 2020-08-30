import { LitElement, html, css, property } from 'lit-element';
import { content3Columns } from "../constants/styles.js";

class Cards extends LitElement {

  @property({ type: String }) color = '#FF891C';
  @property({ type: String }) bgColor = 'lightgrey';

  static styles = [
    content3Columns,
    css`
    section#cards {
      padding: 60px 20px;
    }

    .card {
      border-radius: 10px;
      padding: 20px;
      color: white;
    }
  `]

  render() {
    return html`
      <section id="cards" style="background-color: ${this.bgColor}">
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
