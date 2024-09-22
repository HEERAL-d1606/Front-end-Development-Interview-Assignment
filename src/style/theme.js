
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',  // Custom primary color
    },
    secondary: {
      main: '#f50057',  // Custom secondary color
    },
    error: {
      main: '#f44336',  // Error color for validation or errors
    },
    background: {
      default: '#f4f6f8',  // Background color
    },
  },
  typography: {
    font: 'Inter', // Custom font family
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    button: {
      textTransform: 'none', // Disable uppercase for buttons by default
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px', // Custom border radius for buttons
          padding: '8px 16px', // Custom padding for buttons
        },
        containedPrimary: {
          backgroundColor: '#1976d2',
          color: '#fff',
          // '&:hover': {
          //   backgroundColor: '#1565c0',
          // },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          marginBottom: '1.5rem', // Custom margin for TextField
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '12px', // Custom border radius for cards
          // boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', // Custom shadow for cards
        },
      },
    },
  },
});

export default theme;
