import { LitElement, html, css, property } from 'lit-element';

class CTA extends LitElement {
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
    section#cta {
      padding: 60px 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    button {
      padding: 10px 20px;
      color: white;
      border: none;
    }
  `;

  render() {
    return html`
      <section id="cta">
        <h3>Sit culpa eu cupidatat ullamco elit eu ipsum irure</h3>
        <button style="background-color: ${this.color}">Get it now</button>
      </section>
    `;
  }
}

customElements.define('cta-component', CTA);
