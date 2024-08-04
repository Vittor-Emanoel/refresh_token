import { BrowserRouter } from 'react-router-dom';
import { Appbar } from './components/Appbar';
import { Toaster } from './components/ui/Toaster';
import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { Router } from './Router';

export function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Appbar />

        <BrowserRouter>
          <Router />
        </BrowserRouter>

        <Toaster />
      </ThemeProvider>
    </AuthProvider>
  );
}
