import { createTheme } from '@mui/material/styles';
import "@fontsource/inter/300.css"
import "@fontsource/inter/400.css"
import "@fontsource/inter/500.css"
import "@fontsource/inter/700.css"
import "@fontsource/inter/900.css"
// Create a theme instance.
const theme = createTheme({
  typography: {
     h1: {
    fontSize: "56px",
    lineHeight: "61.6px",
  },
  h2: {
    fontSize: "48px",
    lineHeight: "52.8px",
  },
  h3: {
    fontSize: "40px",
    lineHeight: "44px",
  },
  h4: {
    fontSize: "32px",
    lineHeight: "35.2px",
  },
  h5: {
    fontSize: "24px",
    lineHeight: "26.4px",
  },
  h6: {
    fontSize: "20px",
    lineHeight: "22px",
  },
  big:{
    fontFamily: 'Inter, sans-serif; ',
    fontSize:16,
    lineHeight: "20px",
  },
small:{
  fontFamily: 'Inter, sans-serif; ',
  fontSize:14,
  lineHeight: "20px",
},
fontFamily: 'Inter, sans-serif; ',
fontSize:14,
lineHeight: "20px",
  },

  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'fill', },
          style: {
            textTransform: 'none',
            borderRadius:'16px',
            backgroundColor:'#4136F1',
            color:'white',
            ':hover':{
              backgroundColor:'#4136F1',
            }
          },
        },
        {
          props: { variant: 'outline',},
          style: {
            textTransform: 'none',
            borderRadius:'16px',
            borderColor:'#FFFFFF1A',
            backgroundColor:'#FFFFFF1A',
            color:'white',
            ':hover':{
              
            }
          },
        },
      ],
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
         borderRadius:'16px'
        },
      },
    },
    // Name of the component
    MuiStepConnector: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          display:'none'
        },
      },
    },
    MuiTabs:{
      styleOverrides: {
        // Name of the slot
        indicator: {
          // Some CSS
        backgroundColor:'#4136F1',
        maxWidth:'1.5em'
        },
      },
    },

    MuiTab:{
      styleOverrides: {
        // Name of the slot
        root: {
          "&.Mui-selected": {
            "color": "#4136F1"
          },
          // Some CSS
        padding:0,
        alignItems:"flex-start",
        textAlign:"left"
        },

      },
    }
    ,


    MuiTextField:{
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontSize:'14px',
          margin:'none'
        },
      },
     
    },
    MuiInput:{
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontSize:'14px',
          margin:'none'
        },
        formControl:{
          fontSize:'14px',
          margin:'none'
        }
      },
     
    },
    MuiTextField:{
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontSize:'14px',
          margin:'none'
        },
      },
    },
    MuiSelect:{
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontSize:'14px',
          margin:'none'
        },
        formControl:{
          fontSize:'14px',
          margin:'none'
        }
      },
    },
    MuiInputBase:{
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontSize:'14px',
          margin:'none',
        },
        formControl:{
          fontSize:'14px',
          margin:'none',
        }
      },
    },
    MuiOutlinedInput:{
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
         "&.Mui-focused":{
           "& .MuiOutlinedInput-notchedOutline":{
            boxShadow: "0px 0px 0px 2px #D6E1FF",
           }
         },
        },
    }
  },

  },

  palette: {
    primary: {
      blue:'#4136F1',
      green:'#9BFFE1',
      main:'#1B2448',
      light:'#9FA2B4',
    },
    secondary: {
      main: '#FF0000',
      dark: '#B30000',
      light:'#FFD1D1',
      lightest:'#FFF5F5'
    },
    error: {
      main: '#FF0000',
      dark: '#B30000',
      light:'#FFD1D1',
      lightest:'#FFF5F5'
    },
    warning:{
      main:'#FFAB00',
      dark:'#B37800',
      light:'#FFEECC',
      lightest:'#FFFAF0'
    },
    success:{
      main:'#00DB5B',
      dark:'#00A846',
      light:'#C2FFDB',
      lightest:'#F0FFF6'
    },
    grey:{
      main:'#DDE2FF',
      light:'#A4A6B3'
    }
  },
});

export default theme;
