import { isNil } from 'lodash';
import { useContext } from 'react';

import { EditorModalContext } from './constants';
import { EditorModalState } from './types';

export const useEditorModalContext = (): EditorModalState => {
    const context = useContext(EditorModalContext);
    if (isNil(context)) return {};
    return context;
};
