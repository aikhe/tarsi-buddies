import { createContext } from 'react';

export type Theme = 'light' | 'dark';

export type AppState = {
  theme: Theme;
  toggleTheme: () => void;
};

export const AppStateContext = createContext<AppState | null>(null);
