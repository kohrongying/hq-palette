import { css } from 'lit-element';

export const content3Columns = css`
.content {
  max-width: 960px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  text-align: center;
}`;