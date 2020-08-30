import { LitElement, html, css, property } from 'lit-element';
import { button, sectionPadding } from "../constants/styles.js";

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

  static styles = [
    button,
    sectionPadding,
    css`
    section#cta {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  `];

  render() {
    return html`
      <section id="cta">
        <h1>Sit culpa eu cupidatat ullamco elit eu ipsum irure</h1>
        <button style="background-color: ${this.color}">Get it now</button>
      </section>
    `;
  }
}

customElements.define('cta-component', CTA);
