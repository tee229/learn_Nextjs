import { createContext } from 'react';

import { EditorModalState } from './types';

export const EditorModalContext = createContext<EditorModalState | null>(null);
