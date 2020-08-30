import { css } from 'lit-element';

export const content3Columns = css`
.content {
  max-width: 960px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 2rem;
  text-align: center;
}`;

export const button = css`
button {
  padding: 10px 20px;
  color: white;
  border: none;
  background-color: black;
}

button:hover {
  cursor: pointer;
  transition: all 0.2s;
  transform: translateY(3px);
}

button.outlined {
  background-color: transparent;
}`