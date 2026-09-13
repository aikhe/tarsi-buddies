import { useContext } from 'react';
import { AppStateContext } from './app-state.ts';
import type { AppState } from './app-state.ts';

// read the shared app state inside components.
export function useAppState(): AppState {
  const state = useContext(AppStateContext);
  if (!state) {
    throw new Error('useAppState must be used within AppStateProvider');
  }
  return state;
}
