import { defineTheme } from 'pinceau'

export default defineTheme({
  typography: {
    // This will change the general line-break size
    // letterSpacings: {
    //   tight: '-0.0035em',
    //   wide: '0.-0035em'
    // },
    // lead:'0px',
  },
  prose: {
    // This will change the fontSize of the `<ProseH1>` component
    h1: {
      fontSize: '220%'
    },
    li:{
      margin:'0'
    },
    p:{
      margin:'0'
    }
  }
})
