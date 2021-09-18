import React from 'react'
import '@fontsource/roboto'

import {
  StylesProvider,
} from '@mui/styles'

import {
  ThemeProvider,
  createTheme,
} from '@mui/material/styles'

import {
  CssBaseline,
  useMediaQuery,
} from '@mui/material'

interface ThemeProps {
  children?: React.ReactNode;
}

const Theme: React.FC<ThemeProps> = ({ children }) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = React.useMemo(
    () => createTheme({
      palette: {
        primary: {
          main: '#3B8EA5',
        },
        secondary: {
          main: '#F46036',
        },
        mode: prefersDarkMode ? 'dark' : 'light',
      },
    }),
    [prefersDarkMode],
  );

  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StylesProvider>
  );
}

export default Theme;