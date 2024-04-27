import { defineTheme } from 'pinceau'

export default defineTheme({
  typography: {
    // This will change the general line-break size
    letterSpacings: {
      tight: '-0.0035em',
      wide: '0.-0035em'
    },
    // lead:'0px',

  },
  prose: {
    // This will change the fontSize of the `<ProseH1>` component
    h1: {
      fontSize: '30px',
      fontWeight: '600',
      margin: '0px 0px 5px 0px'
    },
    h2: {
      margin: '30px 0px 5px 0px'
    },
    h3: {
      margin: '30px 0px 5px 0px'
    },
    h4: {
      margin: '30px 0px 5px 0px'
    },
    h5: {
      margin: '35px 0px 5px 0px',
    },
    h6: {
      margin: '30px 0px 5px 0px'
    },
    li: {
      margin: '0',
      fontSize: '100%'
    },
    ol: {
      margin: '2px',
      fontSize: '100%',
      li: {
        margin: '3px',
        fontSize: '100%'
      }
    },
    p: {
      margin: '2px 0',
      fontSize: '100%'
    },
    img: {
      borderRadius: '12px'
    },

    code: {
      block: {
        fontSize: '15px',
        margin: '20px 0',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: {
          initial: '#e0e0e0',
          dark: '{typography.color.secondary.800}'
        },
        borderRadius: '10px',
        // color: {
        //   initial: '#F8F9FA',
        //   dark: '{typography.color.secondary.200}'
        // },
        backgroundColor: {
          initial: '#F8F9FA',
          dark: '{typography.color.secondary.900}'
        },
        backdropFilter: {
          initial: 'contrast(1)',
          dark: 'contrast(1)'
        },
        pre: {
          // padding: '15px'
        }
      },
      inline: {
        borderRadius: '{typography.radii.3xs}',
        padding: '0.2rem 0.375rem 0.2rem 0.375rem',
        // fontSize: '{typography.fontSize.sm}',
        fontWeight: '{typography.fontWeight.normal}',
        color: {
          initial: '{typography.color.secondary.700}',
          dark: '{typography.color.secondary.200}'
        },
        backgroundColor: {
          initial: '#E7EAED',
          dark: '{typography.color.secondary.700}'
        }
      }
    }
  }
})
