import { html, fixture, expect } from '@open-wc/testing';

import { HaikyuuPalette } from '../src/HaikyuuPalette.js';
import '../src/haikyuu-palette.js';

describe('HaikyuuPalette', () => {
  let element: HaikyuuPalette;
  beforeEach(async () => {
    element = await fixture(html` <haikyuu-palette></haikyuu-palette> `);
  });

  it('renders a h1', () => {
    const h1 = element.shadowRoot!.querySelector('h1')!;
    expect(h1).to.exist;
    expect(h1.textContent).to.equal('My app');
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
