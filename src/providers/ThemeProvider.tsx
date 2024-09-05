
import { ReactNode } from 'react';
import { ThemeProvider as NextThemeProvider } from 'next-themes';
interface ThemeProviderProps {
  children: ReactNode;
}
const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return (
    <NextThemeProvider attribute="class">
      {children}
    </NextThemeProvider>
  );
};

export default ThemeProvider;
