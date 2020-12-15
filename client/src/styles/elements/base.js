import { css } from '@emotion/react'

import { Theme } from '../settings'

export const Base = css`
  body {
    background: lightblue;
    font-family: 'PT Sans';
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: ${Theme.colors.black};
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-style: italic;
    margin-bottom: 0.5rem;
    font-weight: 700;
    margin-top: 0;
  }

  li {
    list-style-type: none;
  }

  a {
    color: ${Theme.colors.brandPrimary};
    text-decoration: none;

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
`
