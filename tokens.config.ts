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
      fontSize: '30px',
      fontWeight:'600',
      margin:'0px 0px 5px 0px'
    },
    h2:{
      margin:'30px 0px 5px 0px'
    },
    h3:{
      margin:'30px 0px 5px 0px'
    },
    h4:{
      margin:'30px 0px 5px 0px'
    },
    h5:{
      margin:'35px 0px 5px 0px',
      lineHeight: '0'
    },
    h6:{
      margin:'30px 0px 5px 0px'
    },
    li:{
      margin:'0'
    },
    p:{
      margin:'0',
      fontSize: '95%'
    },
    source:{
    }
  }
})
