import { LitElement, html, css, property } from 'lit-element';
import { image } from '../svg/image.js';
import { image2 } from '../svg/image-2.js';
import { image3 } from '../svg/image-3.js';

class Features extends LitElement {
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
    .content {
      max-width: 960px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 20px;
      text-align: center;
    }

    section#features {
      padding: 20px;
    }
  `;

  render() {
    return html`
      <section id="features">
        <div class="content">
          <div>
            <div class="logo">${image(this.color)}</div>
            <p>
              Aute occaecat adipisicing sunt do veniam quis fugiat amet minim
              pariatur aliquip adipisicing. Adipisicing ullamco ex est qui ex
              non incididunt veniam cillum ipsum elit proident elit.
            </p>
          </div>

          <div>
            <div class="logo">${image2(this.color)}</div>
            <p>
              Aute occaecat adipisicing sunt do veniam quis fugiat amet minim
              pariatur aliquip adipisicing. Adipisicing ullamco ex est qui ex
              non incididunt veniam cillum ipsum elit proident elit.
            </p>
          </div>

          <div>
            <div class="logo">${image3(this.color)}</div>
            <p>
              Aute occaecat adipisicing sunt do veniam quis fugiat amet minim
              pariatur aliquip adipisicing. Adipisicing ullamco ex est qui ex
              non incididunt veniam cillum ipsum elit proident elit.
            </p>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('features-component', Features);
