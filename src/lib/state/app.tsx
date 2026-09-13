import { useState } from 'react';
import type { ReactNode } from 'react';
import { AppStateContext } from './app-state.ts';
import type { Theme } from './app-state.ts';

type AppStateProviderProps = {
  children: ReactNode;
};

// central app state via react context (replaces svelte runes pattern).
export function AppStateProvider({ children }: AppStateProviderProps) {
  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <AppStateContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </AppStateContext.Provider>
  );
}
