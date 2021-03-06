import { css } from '@emotion/react'

export const Fonts = css`
  @font-face {
    font-family: 'PT Sans', sans-serif;
    src: local('PT Sans Bold'), local('PTSans-Bold'),
      url('./assets/fonts/PTSans-Bold.woff2') format('woff2'),
      url('./assets/fonts/PTSans-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'PT Sans', sans-serif;
    src: local('PT Sans'), local('PTSans-Regular'),
      url('./assets/fonts/PTSans-Regular.woff2') format('woff2'),
      url('./assets/fonts/PTSans-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'PT Sans', sans-serif;
    src: local('PT Sans Italic'), local('PTSans-Italic'),
      url('./assets/fonts/PTSans-Italic.woff2') format('woff2'),
      url('./assets/fonts/PTSans-Italic.woff') format('woff');
    font-weight: normal;
    font-style: italic;
  }

  @font-face {
    font-family: 'PT Sans', sans-serif;
    src: local('PT Sans Bold Italic'), local('PTSans-BoldItalic'),
      url('./assets/fonts/PTSans-BoldItalic.woff2') format('woff2'),
      url('./assets/fonts/PTSans-BoldItalic.woff') format('woff');
    font-weight: bold;
    font-style: italic;
  }
`
