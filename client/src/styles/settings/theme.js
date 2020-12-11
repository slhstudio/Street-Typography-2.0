const Xs = '500px'
const Sm = '740px'
const Md = '900px'
const Lg = '1080px'
const Xl = '1200px'
const Xxl = '1540px'

export const Theme = {
  brandFont: 'PT Sans',
  breakpoints: [Sm, Md, Lg, Xl, Xxl],
  colors: {
    brandPrimary: '#e22d60',
    brandSecondary: '#2dbbe2',
    darkGray: '#3a3c48',
    black: '#212529',
    white: '#FFFFFF',
  },
  containerWidth: '1200px',
  contentContainerWidth: '1000px',
}

const breakpoints = {
   xs: Xs,
   sm: Sm,
   md: Md,
   lg: Lg,
   xl: Xl,
   xxl: Xxl,
}

export const Mq = Object.entries(breakpoints).reduce((acc, breakKey) => {
  return {
    ...acc,
    [breakKey]: `@media (min-width: ${breakpoints[breakKey]})`
  }
}, {})
