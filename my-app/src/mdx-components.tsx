import type { MDXComponents } from 'mdx/types';

import { MdxPre } from './app/_components/markdown/mdx-pre';

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        ...components,
        pre: MdxPre,
    };
}