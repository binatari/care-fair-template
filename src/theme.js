import { createTheme } from '@mui/material/styles';
import "@fontsource/inter/300.css"
import "@fontsource/inter/400.css"
import "@fontsource/inter/500.css"
import "@fontsource/inter/700.css"
import "@fontsource/inter/900.css"
// Create a theme instance.
const theme = createTheme({
  typography: {
    big: {
      color: '#425A70',
      fontSize: '14px',
      lineHeight: '20px',
    },
    small:{
      color: '#66788A',
      fontSize: '12px',
      lineHeight: '18px',
    },
    fontFamily: 'Inter, sans-serif; ',
    fontSize:14,
    lineHeight: 20,
  },

  components: {
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
      main: '#2962FF',
      dark: '#2251D3',
      darker: '#1B41AA',
      darkest: '#15317F',
      light:'#D6E1FF',
      lightest:'#F5F8FF'
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
      light:'#B37800',
      lightest:'#FFFAF0'
    },
    success:{
      main:'#00DB5B',
      dark:'#00A846',
      light:'#C2FFDB',
      lightest:'#F0FFF6'
    },
    grey:{
      main:'#425A70',
      dark:'#234361',
      light:'#66788A',
      lightest:'#C4CBD4',
      border30:'#EDF0F2',
      border40:'#E4E7EB',
      bg20:'#F5F6F7',
      bg10:'#FAFAFA'
    }
  },
});

export default theme;
