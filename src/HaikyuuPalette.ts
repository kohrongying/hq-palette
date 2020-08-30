import { LitElement, html, css, property } from 'lit-element';
import { palette } from './constants/palette.js';
import './components/cta.js';
import './components/cards.js';
import './components/features.js';
import { content3Columns, button } from "./constants/styles.js"

export class HaikyuuPalette extends LitElement {
  constructor() {
    super();
    this.colors = palette[0].colors;
  }

  @property({ type: Array }) colors = [''];

  _setColors(colors: Array<string>) {
    this.colors = colors;
  }

  _copyToClipboard(color: string) {
    navigator.clipboard.writeText(color).then(function() {
      console.log('Async: Copying to clipboard was successful!');
      alert('copied to clipboard')
    }, function(err) {
      console.error('Async: Could not copy text: ', err);
    });
  }

  static styles = [
    content3Columns,
    button,
    css`
    section.hero {
      background-color: black;
      color: white;
      padding: 60px 20px;
    }

    .content-max {
      max-width: 960px;
      margin: 0 auto;
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

    .palette-container {
      padding: 10px;
      background-color: white;
      border-radius: 8px;
    }

    .palette {
      display: flex;
      padding-bottom: 10px;
    }

    .palette-color {
      flex: 1;
      height: 200px;
      position: relative;
    }

    .palette-color:hover {
      flex: 2;
      transition: all 0.5s;
    }

    .palette-info {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .hex-code {
      font-size: 10px;
      background-color: rgba(255,255,255,0.5);
      position: absolute;
      top: 0;
      padding: 2px;
      left: 0;
    }
  `];

  render() {
    return html`
      <main>
        <section class="hero">
          <div class="content-max">
            <h1>Hq color palette 🏐</h1>
            <p>A tribute piece. Click on color to copy hex code.</p>
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
                        class="palette-color"
                        style="background: ${color}"
                        @click=${() => this._copyToClipboard(color)}
                      >
                        <span class="hex-code">${color}</span>
                      </div>
                    `
                  )}
                </div>

                <div class="palette-info">
                  <button @click=${() => this._setColors(item.colors)}>
                    Test
                  </button>
                  <span>${item.name}</span>
                </div>
              </div>`
            )}
          </div>
        </section>

        <section class="hero" style="background: linear-gradient(to right, ${this.colors[0]}, ${this.colors[0]}11);">
          <div class="content-max">
            <h1>Applying the palette</h1>
            <p>Six who are strong are stronger together</p>
            <button class="outlined" style="border: 2px solid ${this.colors[3]}; color: ${this.colors[3]};">
              Learn more
            </button>
          </div>
        </section>

        <features-component color=${this.colors[1]}></features-component>

        <cards-component bgColor=${this.colors[2]} color=${this.colors[1]}></cards-component>

        <cta-component color=${this.colors[3]}></cta-component>

        <footer style="background-color: ${this.colors[0]}">
          created by ry
        </footer>
      </main>
    `;
  }
}

customElements.define('haikyuu-palette', HaikyuuPalette);
