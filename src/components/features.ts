import { LitElement, html, css, property } from 'lit-element';
import { image } from '../svg/image.js';
import { image2 } from '../svg/image-2.js';
import { image3 } from '../svg/image-3.js';
import { content3Columns, sectionPadding } from "../constants/styles.js";

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
  

  static styles = [
    content3Columns,
    sectionPadding,
  ]

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
