import React from 'react';
import { createRoot } from 'react-dom/client';

import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/global-styles';

import Home from './templates/App';
import { theme } from './styles/theme';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Home />
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>,
);
