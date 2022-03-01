import { ThemeProvider } from './hooks/useTheme';
import { Login } from './screens';

const App = () => {
  return (
    <ThemeProvider>
      <Login />
    </ThemeProvider>
  );
};

export default App;
