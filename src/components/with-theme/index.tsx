import { ThemeProvider } from '@mui/material';
import theme from 'theme';

const WithTheme: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default WithTheme;
