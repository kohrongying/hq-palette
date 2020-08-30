import { LitElement, html, css, property } from 'lit-element';
import { palette } from './constants/palette.js';
import './components/cta.js';
import './components/cards.js';
import './components/features.js';

const footerTemplate = html`
  <footer>
    Created by RY
  </footer>
`;

export class HaikyuuPalette extends LitElement {
  constructor() {
    super();
    this.colors = ['#3B3C4D', '#FF891C', '#E6F259', '#B4B4B4'];
  }

  @property({ type: String }) page = 'main';

  @property({ type: Array }) colors = [''];

  @property({ type: String }) title = '';

  _setColors(colors: Array<string>) {
    this.colors = colors;
  }

  _copyToClipboard(color: string) {
    navigator.clipboard.writeText(color).then(function() {
      console.log('Async: Copying to clipboard was successful!');
    }, function(err) {
      console.error('Async: Could not copy text: ', err);
    });
  }

  static styles = css`
    :host {
      min-height: 100vh;
      max-width: 960px;
      margin: 0 auto;
    }

    section#hero {
      background-color: black;
      color: white;
      padding: 20px;
    }

    .content-max {
      max-width: 960px;
      margin: 0 auto;
    }

    .content {
      max-width: 960px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 20px;
      text-align: center;
    }

    footer {
      background-color: black;
      color: white;
      padding: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    section#palette {
      padding: 40px 20px;
    }

    .palette {
      display: flex;
      padding-bottom: 20px;
    }
    .palette-container {
      padding: 20px;
      background-color: white;
      border-radius: 10px;
    }
    .palette > div {
      flex: 1;
      height: 150px;
      position: relative;
    }

    .palette > div:hover {
      flex: 2;
      transition: all 0.5s;
    }

    .hex-code {
      font-size: 10px;
      background-color: rgba(255,255,255,0.5);
      position: absolute;
      top: 0;
      padding: 2px;
      left: 0;
    }

    button {
      padding: 10px 20px;
      color: white;
      border: none;
      background-color: black;
    }
  `;

  render() {
    return html`
      <main>
        <section id="hero">
          <div class="content-max">
            <h1>Hq color palette</h1>
            <p>A tribute piece</p>
          </div>
        </section>

        <section id="palette">
          <div class="content">
            ${palette.map(
              item => html` <div class="palette-container">
                <div class="palette">
                  ${item.colors.map(
                    color => html`
                      <div
                        style="background: ${color}"
                        @click=${() => this._copyToClipboard(color)}
                      >
                        <span class="hex-code">${color}</span>
                      </div>
                    `
                  )}
                </div>

                <div
                  style="display: flex; justify-content: space-between; align-items: center;"
                >
                  <button @click=${() => this._setColors(item.colors)}>
                    Test
                  </button>
                  <span>${item.name}</span>
                </div>
              </div>`
            )}
          </div>
        </section>

        <section id="hero">
          <div class="content-max">
            <h1>Consequat est velit esse cupidatat</h1>
            <button style="background-color: ${this.colors[2]}">
              Learn more
            </button>
          </div>
        </section>

        <features-component color=${this.colors[0]}></features-component>

        <cards-component color=${this.colors[1]}></cards-component>

        <cta-component color=${this.colors[1]}></cta-component>

        ${footerTemplate}
      </main>
    `;
  }
}

customElements.define('haikyuu-palette', HaikyuuPalette);
