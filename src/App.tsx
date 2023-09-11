import { ThemeProvider } from 'styled-components';
import { Routes } from './routes';
import { GlobalStyle } from './styles/global';
import { theme } from './styles/theme';

export const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <Routes />
    <GlobalStyle />
  </ThemeProvider>
);
